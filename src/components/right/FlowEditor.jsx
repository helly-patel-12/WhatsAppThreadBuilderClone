// src/components/right/FlowEditor.jsx
import { useState, useRef, useEffect } from 'react';
import { flowCategories } from '../../data/flowData';

// Category-specific builders
import FlowFormModal from '../modals/FlowFormModal';
import EventRegistrationBuilder from '../flows/EventRegistrationFlow/EventRegistrationBuilder';
import FeedbackBuilder from '../flows/FeedbackFlow/FeedbackBuilder';
import SignUpBuilder from '../flows/SignUpFlow/SignUpBuilder';
import AppointmentBuilder from '../flows/AppointmentFlow/AppointmentBuilder';
import QuoteBuilder from '../flows/QuoteFlow/QuoteBuilder';

// Category icons for a polished dropdown
const CATEGORY_META = {
  'Personalized Offer':   { icon: '🛍️', color: '#008069' },
  'Register for an event':{ icon: '🎟️', color: '#7c3aed' },
  'Get feedback':         { icon: '💬', color: '#f59e0b' },
  'Complete Sign up':     { icon: '📋', color: '#0ea5e9' },
  'Book an appointment':  { icon: '📅', color: '#10b981' },
  'Get a quote':          { icon: '💼', color: '#f97316' },
};

// Maps category name → which builder component to render
function resolveBuilder(category) {
  switch (category) {
    case 'Personalized Offer':    return FlowFormModal;
    case 'Register for an event': return EventRegistrationBuilder;
    case 'Get feedback':          return FeedbackBuilder;
    case 'Complete Sign up':      return SignUpBuilder;
    case 'Book an appointment':   return AppointmentBuilder;
    case 'Get a quote':           return QuoteBuilder;
    default:                      return FlowFormModal;
  }
}

export default function FlowEditor({ onAddFlowMessage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
    setShowModal(true);
  };

  const handleSubmit = (newMessage) => {
    onAddFlowMessage(newMessage);
    setShowModal(false);
    setSelectedCategory(''); // reset dropdown after flow is created
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedCategory(''); // reset dropdown on cancel too
  };

  const ActiveBuilder = selectedCategory ? resolveBuilder(selectedCategory) : null;
  const activeMeta = CATEGORY_META[selectedCategory];

  return (
    <div className="flex flex-col gap-6 p-2">
      <div className="space-y-3">
        <h4 className="text-[18px] font-bold text-[#111b21] tracking-tight">Flow Template Builder</h4>
        <p className="text-sm text-[#667781] leading-relaxed">
          Create interactive messaging flows. Each category has its own tailored builder.
        </p>

        {/* Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="bg-[#25d366] text-white px-6 py-3.5 rounded-2xl text-[15px] font-bold flex items-center justify-between w-full hover:bg-[#20bd5c] transition-all shadow-md shadow-[#25d366]/20 active:scale-[0.98]"
            type="button"
            onClick={() => setDropdownOpen(prev => !prev)}
          >
            <span className="flex items-center gap-2">
              {activeMeta && <span>{activeMeta.icon}</span>}
              {selectedCategory || 'Choose Flow Category'}
            </span>
            <svg className={`w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dropdownOpen && (
            <ul className="absolute z-[100] mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl py-2 overflow-hidden animate-in slide-in-from-top-2 duration-200">
              {flowCategories.map((cat) => {
                const meta = CATEGORY_META[cat] || { icon: '📄', color: '#667781' };
                return (
                  <li key={cat}>
                    <button
                      className="w-full text-left px-5 py-3 text-[14px] text-[#111b21] hover:bg-gray-50 transition-colors font-medium flex items-center gap-3 group"
                      onClick={() => handleCategoryClick(cat)}
                    >
                      <span
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-base shrink-0 transition-transform group-hover:scale-110"
                        style={{ background: `${meta.color}15` }}
                      >
                        {meta.icon}
                      </span>
                      <span className="group-hover:text-[#111b21]" style={{ '--hover-color': meta.color }}>{cat}</span>
                      <span className="ml-auto text-gray-300 group-hover:text-gray-400 text-lg">›</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Show currently selected chip */}
        {selectedCategory && !showModal && (
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-[13px] font-bold w-fit"
            style={{ background: `${activeMeta?.color}15`, color: activeMeta?.color }}
          >
            <span>{activeMeta?.icon}</span>
            <span>{selectedCategory}</span>
            <button
              onClick={() => setShowModal(true)}
              className="ml-2 underline font-black text-[11px] opacity-70 hover:opacity-100"
            >
              Edit →
            </button>
          </div>
        )}
      </div>

      {/* Render the active builder as a modal */}
      {showModal && ActiveBuilder && (
        <ActiveBuilder
          selectedCategory={selectedCategory}
          onSubmit={handleSubmit}
          onClose={handleClose}
        />
      )}
    </div>
  );
}