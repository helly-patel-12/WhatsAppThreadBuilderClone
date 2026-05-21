import { useState } from 'react';
import { industryFlows } from '../data/industryFlows';

export function useShopFlow({ onOrderComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndustry, setCurrentIndustry] = useState('Shopping');
  const [currentScreenId, setCurrentScreenId] = useState(null); 
  const [stepIndex, setStepIndex] = useState(0); // Legacy/Tracking index
  const [history, setHistory] = useState([]); // Stack of screen IDs visited
  const [selections, setSelections] = useState([]); 
  const [customFlow, setCustomFlow] = useState(null);

  const openShop = (industry = 'Shopping', dynamicFlow = null) => {
    setCurrentIndustry(industry || 'Shopping');
    setCustomFlow(dynamicFlow);
    setSelections([]);
    setHistory([]);
    setStepIndex(0);
    setIsOpen(true);
    
    if (dynamicFlow && dynamicFlow.screens && dynamicFlow.screens.length > 0) {
      setCurrentScreenId(dynamicFlow.screens[0].id);
    } else {
      setCurrentScreenId(null);
    }
  };

  const closeAll = () => {
    if (window.confirm('Are you sure you want to exit this flow?')) {
      setIsOpen(false);
    }
  };

  const handleBack = () => {
    if (history.length === 0 && stepIndex === 0) {
      setIsOpen(false);
      return;
    }

    if (customFlow && customFlow.screens) {
      const prevScreenId = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentScreenId(prevScreenId || customFlow.screens[0].id);
      setStepIndex(prev => Math.max(0, prev - 1));
    } else {
      setStepIndex(prev => Math.max(0, prev - 1));
    }
    setSelections(prev => prev.slice(0, -1));
  };

  const handleContinue = (val) => {
    if (!val) {
      alert('Please make a selection.');
      return;
    }

    if (customFlow && customFlow.screens) {
      const screens = customFlow.screens;
      const currentScreen = screens.find(s => s.id === currentScreenId) || screens[0];
      const selectedElement = currentScreen.elements.find(el => (el.label || el) === val);
      
      let nextScreenId = selectedElement?.nextScreenId || currentScreen.defaultNextScreenId;
      
      if (nextScreenId === 'continue') {
        const currentIndex = screens.findIndex(s => s.id === (currentScreenId || screens[0].id));
        nextScreenId = screens[currentIndex + 1]?.id || 'finish';
      }

      const isFinish = !nextScreenId || nextScreenId === 'finish';

      if (isFinish) {
        if (window.confirm('Confirm your selection?')) {
          const finalSelections = [...selections, val];
          const defaultMsg = `Completed: ${finalSelections.join(' -> ')}`;
          onOrderComplete?.({ 
            message: customFlow.completionMessage || defaultMsg, 
            description: 'Selection confirmed!' 
          });
          setIsOpen(false);
        }
      } else {
        setHistory(prev => [...prev, currentScreenId]);
        setSelections(prev => [...prev, val]);
        setCurrentScreenId(nextScreenId);
        setStepIndex(prev => prev + 1);
      }
      return;
    }

    // Legacy/Static Industry flows
    const flow = industryFlows[currentIndustry];
    const isLastStep = stepIndex === flow.steps.length - 1;

    if (isLastStep) {
      if (window.confirm('Confirm your selection?')) {
        const finalSelections = [...selections, val];
        const message = `You have selected: ${finalSelections.join(' -> ')} in the ${currentIndustry} flow.`;
        onOrderComplete?.({ message, description: 'Order placed successfully!' });
        setIsOpen(false);
      }
    } else {
      setSelections(prev => [...prev, val]);
      setStepIndex(prev => prev + 1);
    }
  };

  const getCurrentStepName = () => {
    if (customFlow && customFlow.screens) {
      const screen = customFlow.screens.find(s => s.id === currentScreenId) || customFlow.screens[stepIndex] || customFlow.screens[0];
      return screen?.title || 'Selection';
    }
    return industryFlows[currentIndustry]?.steps[stepIndex] || 'Selection';
  };

  const getCurrentOptions = () => {
    if (customFlow && customFlow.screens) {
      const screen = customFlow.screens.find(s => s.id === currentScreenId) || customFlow.screens[stepIndex] || customFlow.screens[0];
      return screen?.elements || [];
    }

    const flow = industryFlows[currentIndustry];
    if (!flow) return [];

    const stepName = flow.steps[stepIndex];
    if (stepIndex === 0) {
      return flow.options[stepName] || [];
    } else {
      const prevSelection = selections[stepIndex - 1];
      const stepOptions = flow.options[stepName];
      return stepOptions?.[prevSelection] || stepOptions?.['default'] || [];
    }
  };

  return {
    isOpen,
    currentIndustry,
    currentScreenId,
    stepIndex,
    selections,
    customFlow,
    getCurrentStepName,
    getCurrentOptions,
    openShop,
    closeAll,
    handleBack,
    handleContinue,
  };
}