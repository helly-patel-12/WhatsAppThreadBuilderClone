// src/components/right/RightPanel.jsx
import TextEditor from './TextEditor';
import FlowEditor from './FlowEditor';

const TABS = ['Text', 'Flow', 'Image', 'Video/GIF/File', 'Audio', 'Buttons', 'Product'];

export default function RightPanel({
  activeTab, onTabChange,
  // TextEditor props
  text, setText,
  time, period,
  handleTimeChange, togglePeriod,
  messages, activeMessage,
  currentSender, setCurrentSender,
  onSave, onDelete, onReply, onArrow,
  // FlowEditor props
  onAddFlowMessage,
}) {
  const handleUnavailableTab = (tab) => {
    alert(`"${tab}" is not available in this demo.`);
  };

  return (
    <div className="flex flex-col gap-0 w-[450px]">
      <div className="bg-white rounded-[16px] p-5 mb-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        {/* ── Tab bar ── */}
        <div className="flex gap-4 overflow-x-auto pb-2 border-b border-[#e9edef] mb-4 scrollbar-hide">
          {TABS.map((tab) => {
            const isAvailable = tab === 'Text' || tab === 'Flow';
            const isActive = activeTab === tab;
            return (
              <div 
                key={tab}
                className={`cursor-pointer whitespace-nowrap text-[14px] px-1 pb-2 border-b-2 transition-all duration-150 ${isActive ? 'text-[#25d366] border-[#25d366] font-semibold' : 'text-[#667781] border-transparent hover:text-[#111b21]'}`}
                onClick={() => isAvailable ? onTabChange(tab) : handleUnavailableTab(tab)}
              >
                {tab}
              </div>
            );
          })}
        </div>

        {/* ── Tab content ── */}
        <div className="mt-2">
          {activeTab === 'Text' && (
            <TextEditor
              text={text} setText={setText}
              time={time} period={period}
              handleTimeChange={handleTimeChange}
              togglePeriod={togglePeriod}
              messages={messages}
              activeMessage={activeMessage}
              currentSender={currentSender}
              setCurrentSender={setCurrentSender}
              onSave={onSave}
              onDelete={onDelete}
              onReply={onReply}
              onArrow={onArrow}
            />
          )}

          {activeTab === 'Flow' && (
            <FlowEditor onAddFlowMessage={onAddFlowMessage} />
          )}
        </div>
      </div>
    </div>
  );
}