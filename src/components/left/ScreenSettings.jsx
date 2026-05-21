// src/components/left/ScreenSettings.jsx

function Tip({ text }) {
  return (
    <div className="relative inline-flex items-center flex-shrink-0 group">
      <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-[260px] bg-[#4b5563] text-white text-[13px] leading-[1.4] text-left rounded-[8px] px-3 py-2 absolute z-[100] bottom-[calc(100%+6px)] right-0 transition-all duration-400 pointer-events-none">
        {text}
      </span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
          stroke="#D4D4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ScreenSettings({ showIntro, onIntroToggle, onClearMessages, onDownload }) {
  return (
    <div className="flex flex-col gap-4">
      <h6 className="text-[14px] font-bold text-center">Screen Settings</h6>

      {/* ── Screen type dropdown ── */}
      <div className="flex items-center justify-between">
        <div className="relative inline-block text-left">
          <button className="bg-[#0d6efd] text-white px-4 py-2 rounded-[6px] text-[14px] flex items-center gap-2" type="button">
            Chat
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <Tip text="Choose a screen type to start your editing. NOTE: Switching will lose current changes." />
      </div>

      {/* ── Intro message toggle ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={onIntroToggle}>
          <svg className="text-primary transition-colors" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.19 0H5.81C2.17 0 0 2.17 0 5.81V14.18C0 17.83 2.17 20 5.81 20H14.18C17.82 20 19.99 17.83 19.99 14.19V5.81C20 2.17 17.83 0 14.19 0ZM4.5 10.57H7.27C7.68 10.57 8.02 10.91 8.02 11.32C8.02 11.73 7.68 12.07 7.27 12.07H4.5C4.09 12.07 3.75 11.73 3.75 11.32C3.75 10.91 4.09 10.57 4.5 10.57ZM10.97 15.83H4.5C4.09 15.83 3.75 15.49 3.75 15.08C3.75 14.67 4.09 14.33 4.5 14.33H10.97C11.38 14.33 11.72 14.67 11.72 15.08C11.72 15.49 11.39 15.83 10.97 15.83ZM15.5 15.83H13.65C13.24 15.83 12.9 15.49 12.9 15.08C12.9 14.67 13.24 14.33 13.65 14.33H15.5C15.91 14.33 16.25 14.67 16.25 15.08C16.25 15.49 15.91 15.83 15.5 15.83ZM15.5 12.07H9.97C9.56 12.07 9.22 11.73 9.22 11.32C9.22 10.91 9.56 10.57 9.97 10.57H15.5C15.91 10.57 16.25 10.91 16.25 11.32C16.25 11.73 15.91 12.07 15.5 12.07Z"
              fill={showIntro ? '#25d366' : '#d4d4d8'} />
          </svg>
          <p className="text-[14px] text-[#111b21] group-hover:text-[#25d366] transition-colors font-medium">Display intro message</p>
        </div>
        <Tip text="Toggle to display the system message. Should always be used for user-initiated chats." />
      </div>

      {/* ── Actions ── */}
      <div className="flex gap-3 justify-between mt-2">
        <button className="flex-1 py-2 px-3 border border-[#ea0038] text-[#ea0038] hover:bg-[#fee8ed] rounded-[8px] text-[14px] font-semibold transition-colors" onClick={onClearMessages}>
          Clear Screen
        </button>
        <div className="flex-1 relative">
          <button className="w-full py-2 px-3 bg-[#25d366] text-white rounded-[8px] text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-[#20bd5c] transition-colors" type="button" onClick={onDownload}>
            Download
            <svg width="20" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.25 12.75L6.409 7.591C6.61793 7.38206 6.86597 7.21633 7.13896 7.10325C7.41194 6.99018 7.70452 6.93198 8 6.93198C8.29548 6.93198 8.58806 6.99018 8.86104 7.10325C9.13403 7.21633 9.38207 7.38206 9.591 7.591L14.75 12.75M13.25 11.25L14.659 9.841C14.8679 9.63206 15.116 9.46633 15.389 9.35325C15.6619 9.24018 15.9545 9.18198 16.25 9.18198C16.5455 9.18198 16.8381 9.24018 17.111 9.35325C17.384 9.46633 17.6321 9.63206 17.841 9.841L20.75 12.75M2.75 16.5H19.25C19.6478 16.5 20.0294 16.342 20.3107 16.0607C20.592 15.7794 20.75 15.3978 20.75 15V3C20.75 2.60218 20.592 2.22064 20.3107 1.93934C20.0294 1.65804 19.6478 1.5 19.25 1.5H2.75C2.35218 1.5 1.97064 1.65804 1.68934 1.93934C1.40804 2.22064 1.25 2.60218 1.25 3V15C1.25 15.3978 1.40804 15.7794 1.68934 16.0607C1.97064 16.342 2.35218 16.5 2.75 16.5Z"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}