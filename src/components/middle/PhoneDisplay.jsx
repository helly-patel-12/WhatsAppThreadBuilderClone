// src/components/middle/PhoneDisplay.jsx
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

export default function PhoneDisplay({
  isFrame,
  isIOS,
  isAndroid,
  companyIcon,
  customerIcon,
  companyName,
  customerName,
  povType,
  isVerified,
  showIntro,
  messages,
  flowMessages,
  replyMessage,
  activeMessage,
  onMessageClick,
  shopFlow,
}) {
  return (
    <div className="flex-1 flex justify-center items-center h-full min-h-[865px]" id="main-container">
      <div 
        className={`flex flex-col bg-[#e5ddd5] shadow-[0_8px_32px_rgba(0,0,0,0.2)] overflow-hidden relative border border-[#d1d7db] transition-all duration-300 w-[375px] h-[780px] ${
          isFrame ? "rounded-[40px] border-[12px] border-[#111b21] h-[812px]" : "rounded-[24px]"
        }`}
      >
        <ChatHeader
          companyIcon={companyIcon}
          customerIcon={customerIcon}
          companyName={companyName}
          customerName={customerName}
          povType={povType}
          isVerified={isVerified}
        />

        <ChatBody
          showIntro={showIntro}
          messages={messages}
          flowMessages={flowMessages}
          replyMessage={replyMessage}
          activeMessage={activeMessage}
          povType={povType}
          onMessageClick={onMessageClick}
          shopFlow={shopFlow}
        />

        <ChatFooter isIOS={isIOS} isAndroid={isAndroid} />
      </div>
    </div>
  );
}
