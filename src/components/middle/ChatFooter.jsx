// src/components/middle/ChatFooter.jsx

export default function ChatFooter({ isIOS }) {
  // NOTE: isIOS prop seems to be used to toggle Android footer in original code. 
  // Let's keep logic but use Tailwind.
  
  if (isIOS) {
    return (
      <div className="p-[6px_8px] flex items-end gap-[6px] bg-transparent w-full box-border">
        <div className="bg-white rounded-[24px] p-[0_12px] flex items-center flex-1 min-h-[48px] shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
          <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <line x1="9" y1="9" x2="9.01" y2="9" />
            <line x1="15" y1="9" x2="15.01" y2="9" />
          </svg>
          <div className="flex-1 flex items-center justify-between ml-[10px]">
            <span className="text-[#8696a0] text-[16px] flex-1">Message</span>
            <div className="flex items-center gap-4 pl-2">
              <svg className="shrink-0 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
              <svg className="shrink-0 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#00a884] w-12 h-12 rounded-full flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.2)] shrink-0">
          <svg className="shrink-0 w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M12 19v3" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <rect x="9" y="2" width="6" height="13" rx="3" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="p-[8px_10px_24px] bg-[#f6f6f6] border-t-[0.5px] border-[#d1d1d1]">
      <div className="flex items-center gap-3">
        <svg className="shrink-0 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="2" strokeLinecap="round">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
        <div className="flex-1 bg-white border-[0.5px] border-[#d1d1d1] rounded-[18px] h-9 flex items-center px-2.5 justify-between">
          <span className="text-[#c7c7cc] text-[16px]">Message</span>
          <svg className="shrink-0 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        <div className="shrink-0 flex items-center">
          <svg className="w-6 h-6 text-[#007aff]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" stroke="#007aff" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

