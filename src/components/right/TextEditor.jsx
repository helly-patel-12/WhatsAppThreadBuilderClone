// src/components/right/TextEditor.jsx
import { useState } from 'react';
import { BtnBold, BtnItalic, Editor, EditorProvider, Toolbar } from 'react-simple-wysiwyg';

export default function TextEditor({
  text, setText,
  time, period,
  handleTimeChange, togglePeriod,
  messages, activeMessage,
  currentSender, setCurrentSender,
  onSave, onDelete, onReply, onArrow,
}) {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);

  const onBold = () => {
    const target = document.getElementById('textbox');
    const selection = window.getSelection();
    const selectedText = selection?.toString();

    if (selectedText) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('b');
      span.textContent = selectedText;
      range.deleteContents();
      range.insertNode(span);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      setIsBold(prev => {
        if (prev) { target.style.fontWeight = 'normal'; }
        else { target.style.fontWeight = 'bolder'; }
        return !prev;
      });
    }
  };

  const onItalics = () => {
    const target = document.getElementById('textbox');
    const selection = window.getSelection();
    const selectedText = selection?.toString();

    if (selectedText) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('i');
      span.textContent = selectedText;
      range.deleteContents();
      range.insertNode(span);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      setIsItalic(prev => {
        if (prev) { target.style.fontStyle = 'normal'; }
        else { target.style.fontStyle = 'italic'; }
        return !prev;
      });
    }
  };

  const addEmoji = (emoji) => {
    setText(prev => prev + emoji);
    setShowEmoji(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* ── Sender toggle ── */}
      <div className="flex gap-2 bg-[#f0f2f5] p-1 rounded-[8px] w-max">
        <button 
          className={`flex items-center gap-2 p-2 px-4 rounded-[6px] text-[14px] transition-all font-medium ${currentSender === 'company' ? 'bg-[#0d6efd] text-white shadow-sm' : 'text-[#667781] hover:bg-gray-200'}`}
          onClick={() => setCurrentSender('company')}
        >
          <CompanyIcon color={currentSender === 'company' ? 'white' : '#667781'} /> Company
        </button>
        <button 
          className={`flex items-center gap-2 p-2 px-4 rounded-[6px] text-[14px] transition-all font-medium ${currentSender === 'user' ? 'bg-[#0d6efd] text-white shadow-sm' : 'text-[#667781] hover:bg-gray-200'}`}
          onClick={() => setCurrentSender('user')}
        >
          <UserIcon color={currentSender === 'user' ? 'white' : '#667781'} /> User
        </button>
      </div>

      {/* ── WYSIWYG editor ── */}
      <div className="flex flex-col border border-[#e9edef] rounded-[12px] overflow-hidden bg-white">
        <EditorProvider>
          <div className="flex items-center gap-1 border-b border-[#e9edef] bg-[#f8f9fa] p-1 px-2 relative">
            <button 
              className={`p-1.5 rounded-[4px] hover:bg-gray-200 transition-colors ${isBold ? 'text-[#0d6efd]' : 'text-[#111b21]'}`}
              onClick={onBold}
            >
              <b>B</b>
            </button>
            <button 
              className={`p-1.5 rounded-[4px] hover:bg-gray-200 transition-colors ${isItalic ? 'text-[#0d6efd]' : 'text-[#111b21]'}`}
              onClick={onItalics}
            >
              <i>I</i>
            </button>
            <button 
              className="p-1.5 rounded-[4px] hover:bg-gray-200 transition-colors text-[#111b21]"
              onClick={() => setShowEmoji(prev => !prev)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
                <path d="M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0" />
              </svg>
            </button>
            {showEmoji && (
              <div className="absolute top-full left-0 z-50 bg-white border border-[#e9edef] shadow-lg rounded-[8px] p-2 flex flex-wrap gap-2 max-w-[200px]">
                {['😀','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇'].map(e => (
                  <span key={e} className="cursor-pointer text-xl hover:bg-gray-100 p-1 rounded-[4px]" onClick={() => addEmoji(e)}>{e}</span>
                ))}
              </div>
            )}
          </div>
          <Editor 
            value={text} 
            onChange={e => setText(e.target.value)} 
            id="textbox" 
            className="min-h-[120px] p-3 text-[14px] outline-none" 
          />
        </EditorProvider>
      </div>

      {/* ── Time stamp ── */}
      <div className="flex justify-center">
        <div className="flex items-center bg-[#f8f9fa] rounded-[8px] p-1 pr-3 gap-1 border border-[#e9edef]">
          <input 
            type="text" 
            className="w-[100px] p-2 text-[14px] border border-[#e9edef] rounded-[8px] outline-none focus:border-[#5a6268] text-center bg-white" 
            value={time} 
            onChange={handleTimeChange}
          />
          <button 
            className="bg-[#6c757d] text-white p-2 w-[56px] text-[13px] rounded-[8px] cursor-pointer hover:bg-[#5a6268] transition-colors font-medium" 
            onClick={togglePeriod}
          >
            {period}
          </button>
        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <button 
            className="flex-1 p-2 flex justify-center items-center border border-[#e9edef] rounded-[8px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-[#0d6efd]"
            onClick={() => onArrow('up')}
            disabled={activeMessage === null || activeMessage === 0}
          >
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <button 
            className="flex-1 p-2 flex justify-center items-center border border-[#e9edef] rounded-[8px] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-[#0d6efd]"
            onClick={() => onArrow('down')}
            disabled={activeMessage === null || activeMessage === messages.length - 1}
          >
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <button 
            className="flex-[2.5] py-2 border border-[#0d6efd] text-[#0d6efd] rounded-[8px] text-[14px] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors"
            onClick={onReply} 
            disabled={activeMessage === null}
          >
            Reply
          </button>
          <button 
            className="flex-[2.5] py-2 border border-[#ea0038] text-[#ea0038] rounded-[8px] text-[14px] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#fee8ed] transition-colors"
            onClick={onDelete} 
            disabled={activeMessage === null}
          >
            Delete
          </button>
        </div>
        <button 
          className="w-full py-3 bg-[#25d366] text-white rounded-[12px] text-[15px] font-bold hover:bg-[#20bd5c] transition-colors shadow-sm" 
          onClick={onSave}
        >
          {activeMessage !== null ? 'Update Message' : 'Save'}
        </button>
      </div>
    </div>
  );
}

function CompanyIcon({ color = '#9ca3af' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.348 2.771C7.71613 2.4234 10.1065 2.24927 12.5 2.25C14.93 2.25 17.317 2.428 19.652 2.77C21.63 3.062 23 4.794 23 6.74V12.76C23 14.706 21.63 16.438 19.652 16.73C17.712 17.014 15.736 17.185 13.73 17.235C13.6303 17.2369 13.5351 17.277 13.464 17.347L9.28 21.53C9.17511 21.6348 9.04153 21.7061 8.89614 21.735C8.75074 21.7639 8.60004 21.749 8.46308 21.6923C8.32611 21.6356 8.20903 21.5395 8.12661 21.4163C8.04419 21.2931 8.00013 21.1482 8 21V17.045C7.11329 16.9639 6.22895 16.8585 5.348 16.729C3.37 16.439 2 14.705 2 12.759V6.741C2 4.795 3.37 3.061 5.348 2.771Z" fill={color} />
    </svg>
  );
}

function UserIcon({ color = '#9ca3af' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.652 2.771C17.2839 2.4234 14.8935 2.24927 12.5 2.25C10.07 2.25 7.683 2.428 5.348 2.77C3.37 3.062 2 4.794 2 6.74V12.76C2 14.706 3.37 16.438 5.348 16.73C7.288 17.014 9.264 17.185 11.27 17.235C11.3697 17.2369 11.4649 17.277 11.536 17.347L15.72 21.53C15.8249 21.6348 15.9585 21.7061 16.1039 21.735C16.2493 21.7639 16.4 21.749 16.5369 21.6923C16.6739 21.6356 16.791 21.5395 16.8734 21.4163C16.9558 21.2931 16.9999 21.1482 17 21V17.045C17.8867 16.9639 18.771 16.8585 19.652 16.729C21.63 16.439 23 14.705 23 12.759V6.741C23 4.795 21.63 3.061 19.652 2.771Z" fill={color} />
    </svg>
  );
}