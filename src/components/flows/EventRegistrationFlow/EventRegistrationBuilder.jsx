// src/components/flows/EventRegistrationFlow/EventRegistrationBuilder.jsx
import { useState } from 'react';

const ACCENT = '#7c3aed'; // Purple for events

export default function EventRegistrationBuilder({ onSubmit, onClose }) {
  const [step, setStep] = useState(1);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [ticketTypes, setTicketTypes] = useState([
    { label: 'General Admission', price: 'Free' },
    { label: 'VIP', price: '$99' },
  ]);
  const [confirmationMessage, setConfirmationMessage] = useState("I'd like to register for this event!");

  const addTicketType = () => {
    setTicketTypes([...ticketTypes, { label: 'New Ticket', price: 'Free' }]);
  };

  const updateTicket = (idx, field, value) => {
    const updated = [...ticketTypes];
    updated[idx][field] = value;
    setTicketTypes(updated);
  };

  const removeTicket = (idx) => {
    setTicketTypes(ticketTypes.filter((_, i) => i !== idx));
  };

  const handleSubmit = () => {
    const screens = [
      {
        id: 'screen_1',
        title: eventName || 'Event Registration',
        elements: ticketTypes.map((t, i) => ({
          type: 'radio',
          label: `${t.label}${t.price ? ` — ${t.price}` : ''}`,
          nextScreenId: 'finish',
        })),
      },
    ];

    onSubmit({
      category: 'Register for an event',
      industry: 'Events',
      hasFlow: true,
      message: eventName || 'Event Registration',
      description: eventDescription || `${eventDate ? `📅 ${eventDate}` : ''} ${eventTime ? `🕐 ${eventTime}` : ''} ${eventVenue ? `📍 ${eventVenue}` : ''}`.trim(),
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      completionMessage: confirmationMessage,
      screens,
    });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}, #9f5feb)` }} className="px-8 py-6 text-white shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎟️</span>
              <div>
                <h2 className="text-xl font-bold leading-tight">Event Registration</h2>
                <p className="text-[11px] opacity-70 font-semibold uppercase tracking-widest">
                  {step === 1 ? 'Step 1: Event Details' : 'Step 2: Ticket Options'}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-xl">×</button>
          </div>
          <div className="flex gap-2 mt-4">
            {[1, 2].map(s => (
              <div key={s} className={`h-1.5 flex-1 rounded-full transition-all ${step >= s ? 'bg-white' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50 space-y-6">
          {step === 1 ? (
            <>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Event Name *</label>
                <input
                  className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-violet-400 transition-all"
                  placeholder="e.g. Annual Tech Summit 2025"
                  value={eventName}
                  onChange={e => setEventName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Date</label>
                  <input type="date" className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-violet-400 transition-all" value={eventDate} onChange={e => setEventDate(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Time</label>
                  <input type="time" className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-violet-400 transition-all" value={eventTime} onChange={e => setEventTime(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Venue / Location</label>
                <input
                  className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-violet-400 transition-all"
                  placeholder="e.g. Grand Ballroom, Mumbai"
                  value={eventVenue}
                  onChange={e => setEventVenue(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Event Description</label>
                <textarea
                  className="w-full bg-white border-2 border-transparent shadow-sm rounded-[24px] p-5 text-[15px] font-medium leading-6 focus:outline-none focus:border-violet-400 transition-all"
                  placeholder="Tell attendees what to expect..."
                  rows="3"
                  value={eventDescription}
                  onChange={e => setEventDescription(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-4">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Ticket / RSVP Types</label>
                {ticketTypes.map((ticket, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex-1 space-y-2">
                      <input
                        className="w-full bg-gray-50 rounded-xl px-3 py-2 text-[14px] font-bold focus:outline-none focus:ring-1 focus:ring-violet-400"
                        placeholder="Ticket name"
                        value={ticket.label}
                        onChange={e => updateTicket(idx, 'label', e.target.value)}
                      />
                      <input
                        className="w-full bg-gray-50 rounded-xl px-3 py-2 text-[13px] text-gray-500 font-semibold focus:outline-none focus:ring-1 focus:ring-violet-400"
                        placeholder="Price (e.g. Free, $50)"
                        value={ticket.price}
                        onChange={e => updateTicket(idx, 'price', e.target.value)}
                      />
                    </div>
                    <button onClick={() => removeTicket(idx)} className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all">🗑️</button>
                  </div>
                ))}
                <button onClick={addTicketType} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-violet-500 font-bold text-sm hover:border-violet-400 hover:bg-violet-50 transition-all">
                  + Add Ticket Type
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-violet-500 uppercase tracking-widest ml-1">Confirmation Message (sent by user)</label>
                <input
                  type="text"
                  className="w-full h-14 bg-violet-50 border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold text-violet-700 focus:outline-none focus:border-violet-400 transition-all"
                  placeholder="e.g. I'd like to register!"
                  value={confirmationMessage}
                  onChange={e => setConfirmationMessage(e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 bg-white flex gap-4 shrink-0">
          {step === 1 ? (
            <>
              <button onClick={onClose} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">Discard</button>
              <button onClick={() => setStep(2)} disabled={!eventName} className={`flex-[2] h-14 rounded-[20px] font-bold transition-all ${!eventName ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]'}`} style={eventName ? { background: `linear-gradient(135deg, ${ACCENT}, #9f5feb)`, boxShadow: `0 10px 30px ${ACCENT}33` } : {}}>
                Next: Set Tickets →
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">← Back</button>
              <button onClick={handleSubmit} className="flex-[2] h-14 rounded-[20px] text-white font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all" style={{ background: `linear-gradient(135deg, ${ACCENT}, #9f5feb)`, boxShadow: `0 10px 30px ${ACCENT}33` }}>
                Create Event Flow ✓
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
