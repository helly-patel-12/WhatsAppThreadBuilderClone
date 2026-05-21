// src/components/modals/DynamicFlowModal.jsx
import { useState } from 'react';

const BACK_ICON = "https://cdn-icons-png.flaticon.com/512/271/271220.png";

const INDUSTRY_META = {
  'Shopping':     { color: '#008069', icon: '🛍️' },
  'Events':       { color: '#7c3aed', icon: '🎟️' },
  'Feedback':     { color: '#f59e0b', icon: '💬' },
  'Sign Up':      { color: '#0ea5e9', icon: '📋' },
  'Appointments': { color: '#10b981', icon: '📅' },
  'Quotes':       { color: '#f97316', icon: '💼' },
};

export default function DynamicFlowModal({ 
  title, 
  options, 
  onContinue, 
  onBack, 
  onClose,
  currentIndustry,
  stepIndex,
  screens // New prop for fully dynamic flows
}) {
  const [selected, setSelected] = useState('');
  const [formValues, setFormValues] = useState({});

  const meta = INDUSTRY_META[currentIndustry] || INDUSTRY_META['Shopping'];
  const accentColor = meta.color;
  const industryIcon = meta.icon;

  const currentScreen = screens ? screens[stepIndex] : null;

  // Use the new 'screens' data if available, otherwise fallback to legacy 'options'
  const elements = currentScreen 
    ? currentScreen.elements 
    : (Array.isArray(options) ? options.map(opt => ({ type: 'radio', label: opt })) : []);

  const handleInputChange = (label, value) => {
    setFormValues(prev => ({ ...prev, [label]: value }));
    setSelected(value);
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[360px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-white/20">
        {/* Header */}
        <div className="bg-[#008069] text-white p-6 flex flex-col shrink-0 gap-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
            >
              <img src={BACK_ICON} className="w-5 h-5 invert" alt="Back" />
            </button>
            <button 
              onClick={onClose}
              className="text-3xl leading-none w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            >
              &times;
            </button>
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight">{currentScreen?.title || title || 'Select Option'}</h3>
            <p className="text-[11px] opacity-70 uppercase tracking-[0.1em] font-black mt-1">
              {currentIndustry} Flow • Step {stepIndex + 1}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 bg-gray-50">
          <div className="flex flex-col gap-4">
            {elements.map((el, i) => (
              <div key={i}>
                {el.type === 'input' ? (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 uppercase ml-2">{el.label}</label>
                    <input 
                      type="text"
                      placeholder={`Enter ${el.label}...`}
                      className="w-full bg-white border-2 border-transparent focus:border-[#008069] rounded-2xl p-4 text-[15px] shadow-sm transition-all focus:outline-none"
                      value={formValues[el.label] || ''}
                      onChange={(e) => handleInputChange(el.label, e.target.value)}
                    />
                  </div>
                ) : el.type === 'checkbox' ? (
                  <label 
                    className={`flex items-center gap-3 p-4 bg-white rounded-2xl cursor-pointer shadow-sm border-2 transition-all duration-200 ${
                      formValues[el.label] 
                        ? 'border-[#008069] ring-4 ring-[#008069]/5' 
                        : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="relative flex items-center shrink-0">
                      <input 
                        type="checkbox" 
                        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-[6px] checked:bg-[#008069] checked:border-[#008069] transition-all cursor-pointer"
                        checked={!!formValues[el.label]} 
                        onChange={(e) => handleInputChange(el.label, e.target.checked)}
                      />
                      {formValues[el.label] && (
                        <svg className="absolute inset-0 m-auto w-3 h-3 text-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-[15px] font-semibold transition-colors ${
                      formValues[el.label] ? 'text-[#008069]' : 'text-[#111b21]'
                    }`}>
                      {el.label}
                    </span>
                  </label>
                ) : (
                  <label 
                    className={`flex items-center gap-3 p-4 bg-white rounded-2xl cursor-pointer shadow-sm border-2 transition-all duration-200 ${
                      selected === (el.label || el) 
                        ? 'border-[#008069] ring-4 ring-[#008069]/5' 
                        : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className="relative flex items-center shrink-0">
                      <input 
                        type="radio" 
                        name="flow-option" 
                        className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#008069] transition-all cursor-pointer"
                        checked={selected === (el.label || el)} 
                        onChange={() => setSelected(el.label || el)}
                      />
                      {selected === (el.label || el) && (
                        <div className="absolute inset-0 m-auto w-2.5 h-2.5 bg-[#008069] rounded-full" />
                      )}
                    </div>
                    <span className={`text-[15px] font-semibold transition-colors ${
                      selected === (el.label || el) ? 'text-[#008069]' : 'text-[#111b21]'
                    }`}>
                      {el.label || el}
                    </span>
                  </label>
                )}
              </div>
            ))}

            {elements.length === 0 && (
              <div className="text-center py-16 px-6">
                <div className="text-4xl mb-4">✨</div>
                <p className="text-gray-400 font-bold text-sm">Nothing to configure for this step.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 bg-white border-t border-gray-100 flex gap-4 shrink-0">
          <button 
            className="flex-1 py-4 px-4 rounded-2xl border border-gray-200 text-gray-500 font-bold text-[14px] hover:bg-gray-50 transition-colors uppercase tracking-widest"
            onClick={onBack}
          >
            Back
          </button>
          <button 
            className={`flex-1 py-4 px-4 rounded-2xl font-bold text-[14px] transition-all uppercase tracking-widest shadow-lg ${
              !selected && elements.length > 0
                ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                : 'bg-[#008069] text-white hover:bg-[#006e5a] shadow-[#008069]/20 active:scale-95'
            }`}
            onClick={() => onContinue(selected)}
            disabled={!selected && elements.length > 0}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
