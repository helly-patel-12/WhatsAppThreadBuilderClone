// src/components/left/PhoneSettings.jsx

export default function PhoneSettings({
  time, period, is12HourFormat, isIOS, isAndroid, isFrame, povType, isRead,
  handleTimeChange, togglePeriod, toggleTimeFormat,
  handlePlatformChange, handlePOVChange, handleFrameChange, handleMsgReadToggle,
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* ── Time ── */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-[#f8f9fa] rounded-[8px] p-1 pr-3 gap-1 border border-[#e9edef]">
            <input 
              type="text" 
              className="w-[90px] p-2 text-[14px] border border-[#e9edef] rounded-[8px] outline-none focus:border-[#5a6268] text-center bg-white" 
              value={time} 
              onChange={handleTimeChange}
              aria-label="Time input" 
            />
            <button 
              className="bg-[#6c757d] text-white p-2 w-[56px] text-[13px] rounded-[8px] cursor-pointer hover:bg-[#5a6268] transition-colors" 
              onClick={togglePeriod}
            >
              {period}
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
              <input 
                type="checkbox" 
                name="toggle" 
                id="timeflexSwitchCheckChecked" 
                checked={is12HourFormat} 
                onChange={toggleTimeFormat}
                className="sr-only peer"
              />
              <label 
                htmlFor="timeflexSwitchCheckChecked" 
                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer peer-checked:bg-[#25d366]"
              ></label>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in peer-checked:translate-x-4"></span>
            </div>
            <label className="text-[14px] text-[#111b21] cursor-pointer" htmlFor="timeflexSwitchCheckChecked">
              {is12HourFormat ? '12h' : '24h'}
            </label>
          </div>
        </div>
        <Tip text="Set the time on the phone and choose its format" />
      </div>

      {/* ── POV ── */}
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <input 
              className="w-4 h-4 text-[#25d366] border-gray-300 focus:ring-[#25d366] cursor-pointer" 
              type="radio" 
              id="POVradio1"
              onChange={handlePOVChange} 
              checked={povType === 'business'} 
            />
            <label className="text-[14px] text-[#111b21] cursor-pointer" htmlFor="POVradio1">Business POV</label>
          </div>
          <div className="flex items-center gap-2">
            <input 
              className="w-4 h-4 text-[#25d366] border-gray-300 focus:ring-[#25d366] cursor-pointer" 
              type="radio" 
              id="POVradio2"
              onChange={handlePOVChange} 
              checked={povType === 'customer'} 
            />
            <label className="text-[14px] text-[#111b21] cursor-pointer" htmlFor="POVradio2">Customer POV</label>
          </div>
        </div>
        <Tip text="Switch between Client and Business point of view" />
      </div>

      {/* ── Platform toggle ── */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex bg-[#f0f2f5] p-1 rounded-[8px]">
            <button 
              className={`p-2 px-3 rounded-[6px] transition-all ${isAndroid ? 'bg-[#0d6efd] text-white shadow-sm' : 'text-[#667781] hover:bg-gray-200'}`}
              onClick={() => handlePlatformChange({ target: { id: 'btnradio1' }})}
            >
              <svg width="24" height="20" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.523 10.3414C16.9719 10.3414 16.5237 9.8928 16.5237 9.3417C16.5237 8.7906 16.972 8.3424 17.523 8.3424C18.0741 8.3424 18.5223 8.7907 18.5223 9.3417C18.5224 9.8928 18.0741 10.3414 17.523 10.3414ZM6.477 10.3414C5.9259 10.3414 5.4777 9.8928 5.4777 9.3417C5.4777 8.7906 5.9259 8.3424 6.477 8.3424C7.0281 8.3424 7.4763 8.7907 7.4763 9.3417C7.4763 9.8928 7.028 10.3414 6.477 10.3414ZM17.8815 4.3214L19.8788 0.8622C19.9338 0.766731 19.9486 0.653358 19.9201 0.546951C19.8916 0.440543 19.822 0.34979 19.7267 0.2946C19.6312 0.239632 19.5179 0.224776 19.4115 0.25329C19.305 0.281804 19.2143 0.35136 19.1591 0.4467L17.1368 3.9497C15.5902 3.2439 13.8533 2.8508 12 2.8508C10.1467 2.8508 8.4098 3.2439 6.8633 3.9497L4.841 0.4467C4.78579 0.351353 4.69502 0.281795 4.5886 0.253282C4.48217 0.224768 4.36878 0.239627 4.2733 0.2946C4.1779 0.349734 4.10829 0.440488 4.07977 0.546919C4.05125 0.65335 4.06615 0.76675 4.1212 0.8622L6.1185 4.3214C2.6889 6.1867 0.3432 9.6589 0 13.761H24C23.6565 9.6589 21.3108 6.1867 17.8815 4.3214Z" fill="currentColor" />
              </svg>
            </button>
            <button 
              className={`p-2 px-3 rounded-[6px] transition-all ${isIOS ? 'bg-[#0d6efd] text-white shadow-sm' : 'text-[#667781] hover:bg-gray-200'}`}
              onClick={() => handlePlatformChange({ target: { id: 'btnradio2' }})}
            >
              <svg width="24" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.9 0C12.1 1.1 11.6 2.2 11 3C10.4 3.8 9.29998 4.5 8.19998 4.4C7.99998 3.3 8.49998 2.3 9.09998 1.5C9.79998 0.7 10.9 0.1 11.9 0ZM15.1 17.4C15.6 16.6 15.9 16.1 16.3 15.2C13.2 14 12.7 9.6 15.8 8C14.9 6.8 13.6 6.2 12.3 6.2C11.4 6.2 10.8 6.4 10.2 6.6C9.69998 6.8 9.29998 6.9 8.79998 6.9C8.19998 6.9 7.79998 6.7 7.19998 6.5C6.59998 6.3 5.99998 6.1 5.29998 6.1C3.89998 6.1 2.39998 6.9 1.49998 8.4C0.199983 10.4 0.399983 14.3 2.49998 17.5C3.39998 18.7 4.39998 20 5.69998 20C6.29998 20 6.59998 19.8 6.99998 19.7C7.49998 19.5 7.99998 19.3 8.79998 19.3C9.69998 19.3 10.1 19.5 10.6 19.7C11 19.9 11.3 20 11.9 20C13.3 20 14.3 18.5 15.1 17.4Z" fill="currentColor" />
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
              <input 
                type="checkbox" 
                name="frame" 
                id="frameflexSwitchCheckChecked" 
                checked={isFrame}
                onChange={handleFrameChange} 
                className="sr-only peer"
              />
              <label 
                htmlFor="frameflexSwitchCheckChecked" 
                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer peer-checked:bg-[#25d366]"
              ></label>
              <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in peer-checked:translate-x-4"></span>
            </div>
            <label className="text-[14px] text-[#111b21] cursor-pointer" htmlFor="frameflexSwitchCheckChecked">Phone frame</label>
          </div>
        </div>
        <Tip text="Switch between iOS and Android builders" />
      </div>

      {/* ── Read receipts ── */}
      <div className="flex items-center justify-between">
        <div 
          onClick={handleMsgReadToggle} 
          className="flex items-center gap-2 cursor-pointer group"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200"
            style={{ color: isRead ? '#25d366' : '#d4d4d8' }}>
            <path fillRule="evenodd" clipRule="evenodd" d="M19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10ZM12.8343 6.57502C13.1104 6.86974 13.0953 7.33249 12.8006 7.60862L7.1813 12.8736C6.89989 13.1373 6.46207 13.1371 6.18088 12.8732L3.64955 10.4973C3.35509 10.2209 3.34043 9.75811 3.61682 9.46364C3.89321 9.16917 4.35598 9.15452 4.65045 9.4309L6.68177 11.3375L11.8007 6.54138C12.0954 6.26525 12.5581 6.28031 12.8343 6.57502ZM16.8794 7.70612C17.1741 7.42999 17.1892 6.96724 16.9131 6.67252C16.6369 6.37781 16.1742 6.36275 15.8795 6.63888L10.1362 12.02L10.0129 11.9043C9.71848 11.6279 9.25571 11.6426 8.97932 11.9371C8.70293 12.2315 8.71759 12.6943 9.01206 12.9707L9.63532 13.5557C9.91651 13.8196 10.3543 13.8198 10.6357 13.5561L16.8794 7.70612Z" fill="currentColor" />
          </svg>
          <span className="text-[13px] text-[#667781] group-hover:text-[#111b21] transition-colors">Mark user messages as read</span>
        </div>
        <Tip text="Toggle to display read receipts on the customer's textboxes." />
      </div>
    </div>
  );
}

// ── Shared tooltip helper ─────────────────────────────────────────────────────
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