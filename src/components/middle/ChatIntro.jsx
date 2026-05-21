// src/components/middle/ChatIntro.jsx
// The two system info banners shown at the top of a chat

export default function ChatIntro() {
  return (
    <div className="flex flex-col gap-2 mb-4">
      {/* Encryption banner */}
      <div className="bg-[#fcf5c7] text-[#54656f] p-1.5 px-3 rounded-[8px] text-[12px] leading-[1.4] flex items-center gap-2.5 w-fit max-w-[90%] mx-auto text-center justify-center shadow-[0_1px_0.5px_rgba(0,0,0,0.1)] shrink-0" id="safe">
        <svg className="shrink-0 w-[15px] h-[15px]" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
            clipRule="evenodd" />
        </svg>
        <p className="m-0 text-center">
          Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more.
        </p>
      </div>

      {/* Business banner */}
      <div className="bg-[#e6f7f6] text-[#54656f] p-1.5 px-3 rounded-[8px] text-[12px] leading-[1.4] flex items-center gap-2.5 w-fit max-w-[90%] mx-auto text-center justify-center shadow-[0_1px_0.5px_rgba(0,0,0,0.1)] shrink-0" id="info">
        <svg className="shrink-0 w-[15px] h-[15px] text-[#54656f] opacity-45" fill="none" viewBox="0 0 10 10">
          <path fill="currentColor" fillRule="evenodd"
            d="M5 9.575c2.761 0 5-2.143 5-4.787C10 2.143 7.761 0 5 0S0 2.143 0 4.788c0 2.644 2.239 4.787 5 4.787zm-.736-7.062c0-.204.066-.372.198-.504s.31-.197.538-.197c.224 0 .402.065.535.197s.2.3.2.504a.68.68 0 01-.202.509A.73.73 0 015 3.22a.73.73 0 01-.534-.198.68.68 0 01-.202-.509zm1.358 4.663a.649.649 0 11-1.298 0V4.591a.649.649 0 111.298 0v2.585z"
            clipRule="evenodd" />
        </svg>
        <p className="m-0 text-center">
          This business uses a secure service from Meta to manage this chat. Tap to learn more.
        </p>
      </div>
    </div>
  );
}