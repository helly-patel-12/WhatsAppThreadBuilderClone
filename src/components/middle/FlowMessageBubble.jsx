// src/components/middle/FlowMessageBubble.jsx

export default function FlowMessageBubble({ mess, msg, index, activeMessage, povType, onClick, onTryIt }) {
  const isSelf = povType === 'customer' ? mess.sender === 'user' : mess.sender !== 'user';
  const isActive = activeMessage === index;

  return (
    <div 
      className={`relative self-start bg-white rounded-[12px] overflow-hidden w-[280px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] my-2 cursor-pointer transition-all border-tl-none before:content-[""] before:absolute before:left-[-8px] before:top-0 before:w-[8px] before:height-[13px] before:bg-white before:[clip-path:polygon(100%_0,100%_100%,0_0)] ml-2 ${isActive ? 'ring-2 ring-[#25d366] bg-[#fff9c4] before:bg-[#fff9c4]' : ''}`}
      onClick={() => onClick(index)}
    >
      <h5 className="p-3 pb-1 m-0 text-[15px] font-semibold text-[#111b21]">{mess.message}</h5>
      {mess.image && (
        <img
          className="w-full h-[160px] object-cover"
          src={mess.image}
          alt=""
        />
      )}
      <p className="p-3 pt-1 m-0 text-[13.5px] text-[#667781] leading-[1.4]">{mess.description}</p>
      
      <div className="border-t border-[#f0f2f5] flex flex-col">
        {mess.link && (
          <a 
            className="w-full bg-transparent border-none border-b border-[#f0f2f5] p-2.5 text-[14px] font-medium flex items-center justify-center gap-2 text-[#111b21] hover:bg-gray-50 transition-colors" 
            href={mess.link} 
            target="_blank" 
            rel="noreferrer" 
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 11 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Shop Now
          </a>
        )}
        {(mess.link || mess.hasFlow) && (
          <button 
            className="w-full bg-transparent border-none p-2.5 text-[14px] font-medium flex items-center justify-center gap-2 text-[#008069] hover:bg-gray-50 transition-colors" 
            onClick={(e) => { e.stopPropagation(); onTryIt(); }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Try It
          </button>
        )}
      </div>
    </div>
  );
}