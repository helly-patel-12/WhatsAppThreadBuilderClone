// src/components/middle/ChatBody.jsx
import MessageBubble from './MessageBubble';
import FlowMessageBubble from './FlowMessageBubble';
import ChatIntro from './ChatIntro';
import DynamicFlowModal from '../modals/DynamicFlowModal';
import bg from '../Images/chat-bg.png';

export default function ChatBody({
  showIntro, messages, replyMessage, activeMessage, povType,
  onMessageClick,
  shopFlow,
}) {
  const {
    isOpen,
    currentIndustry,
    stepIndex,
    customFlow,
    getCurrentStepName,
    getCurrentOptions,
    openShop,
    closeAll,
    handleBack,
    handleContinue,
  } = shopFlow;

  return (
    <div 
      className="flex-1 flex flex-col relative overflow-y-auto scroll-smooth bg-[#e5ddd5]" 
      style={{ 
        backgroundImage: `url(${bg})`,
        backgroundSize: '400px',
        backgroundRepeat: 'repeat'
      }}
    >
      <div className="flex-1 p-[10px_14px] flex flex-col gap-2">
        {showIntro && <ChatIntro />}

        <div className="flex flex-col gap-1 mt-2 w-full" id="chat-content" hidden={isOpen}>
          {messages.map((msg, index) => {
            if (msg.type === 'flow') {
              const industry = msg.flow?.industry || 'Shopping';
              return (
                <FlowMessageBubble
                  key={index}
                  mess={msg.flow}
                  msg={msg}
                  index={index}
                  activeMessage={activeMessage}
                  povType={povType}
                  onClick={onMessageClick}
                  onTryIt={() => openShop(industry, msg.flow)}
                />
              );
            }
            return (
              <MessageBubble
                key={index}
                msg={msg}
                index={index}
                activeMessage={activeMessage}
                povType={povType}
                onClick={onMessageClick}
              />
            );
          })}

          {replyMessage && (
            <div className="relative self-start bg-white rounded-[12px] overflow-hidden w-[280px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] my-2 p-3 border-tl-none before:content-[''] before:absolute before:left-[-8px] before:top-0 before:w-[8px] before:height-[13px] before:bg-white before:[clip-path:polygon(100%_0,100%_100%,0_0)] ml-2">
              <p className="m-0 text-[13.5px] text-[#667781] leading-[1.4]">{replyMessage.message}</p>
              <h6 className="mt-1 m-0 text-[15px] font-semibold text-[#111b21]">{replyMessage.description}</h6>
            </div>
          )}
        </div>

        {isOpen && (
          <DynamicFlowModal
            title={getCurrentStepName()}
            options={getCurrentOptions()}
            onContinue={handleContinue}
            onBack={handleBack}
            onClose={closeAll}
            currentIndustry={currentIndustry}
            stepIndex={stepIndex}
            screens={customFlow?.screens}
          />
        )}
      </div>
    </div>
  );
}