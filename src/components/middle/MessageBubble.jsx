// src/components/middle/MessageBubble.jsx

export default function MessageBubble({ msg, index, activeMessage, povType, onClick }) {
  const isSelf = povType === 'customer' ? msg.sender === 'user' : msg.sender !== 'user';
  const isActive = activeMessage === index;

  return (
    <div
      className={`relative py-1.5 px-2.5 max-w-[82%] min-w-[60px] rounded-[8px] text-[14.2px] ml-2  line-[1.4] cursor-pointer mb-0.5 break-words shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] transition-all ${
        isSelf 
          ? 'self-end bg-[#d9fdd3] text-[#111b21] rounded-tr-none after:content-[""] after:absolute after:right-[-8px] after:top-0 after:w-[8px] after:height-[13px] after:bg-[#d9fdd3] after:[clip-path:polygon(0_0,0_100%,100%_0)] mr-2' 
          : 'self-start bg-white text-[#111b21] rounded-tl-none before:content-[""] before:absolute before:left-[-8px] before:top-0 before:w-[8px] before:height-[13px] before:bg-white before:[clip-path:polygon(100%_0,100%_100%,0_0)]'
      } ${isActive ? 'bg-[#fff9c4] ring-2 ring-[#25d366]' : ''}`}
      onClick={() => onClick(index)}
    >
      {msg.replyTo && (
        <div className={`mb-1 p-2 rounded-[6px] text-[13px] border-l-4 bg-opacity-10 ${isSelf ? 'bg-black border-[#25d366]' : 'bg-gray-200 border-[#8696a0]'}`}>
          <span className="block opacity-60 truncate">{msg.replyTo.text}</span>
        </div>
      )}
      
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div className="flex-1 leading-[1.4]" dangerouslySetInnerHTML={{ __html: msg.text }} />
        <div className="flex items-center gap-1 text-[10px] text-[#667781] shrink-0 min-w-[40px] justify-end mt-1">
          {msg.time}
          {isSelf && (
            <svg className="shrink-0" width="16" height="16" viewBox="0 0 17.1 11" fill="none">
              <path d="M14.9,0.8c0.2-0.2,0.5-0.2,0.7-0.1L16,0.9c0.2,0.2,0.2,0.5,0.1,0.7L9.4,10c-0.3,0.3-0.8,0.4-1,0.1L7.3,9 c-0.2-0.2-0.2-0.5,0-0.7L7.6,8c0.2-0.2,0.5-0.2,0.7,0c0,0,0.2,0.2,0.5,0.4L14.9,0.8z M11.6,0.9c0.2,0.2,0.2,0.5,0.1,0.7L5,10 c-0.3,0.3-0.7,0.4-1,0.1l-3-3C0.8,6.9,0.8,6.6,1,6.4l0.3-0.3c0.2-0.2,0.5-0.2,0.7,0l2.4,2.3l6.2-7.6c0.2-0.2,0.5-0.2,0.7-0.1 L11.6,0.9z"
                fill="currentColor" className={msg.isRead ? "text-[#53bdeb]" : "text-[#8696a0] opacity-40"} />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}