// src/components/flows/AppointmentFlow/AppointmentBuilder.jsx
import { useState } from 'react';

const ACCENT = '#10b981'; // Emerald for appointments

export default function AppointmentBuilder({ onSubmit, onClose }) {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [services, setServices] = useState([
    { label: 'Consultation', duration: '30 min' },
    { label: 'Full Session', duration: '60 min' },
  ]);
  const [timeSlots, setTimeSlots] = useState([
    { label: '9:00 AM' },
    { label: '11:00 AM' },
    { label: '2:00 PM' },
    { label: '4:00 PM' },
  ]);
  const [confirmationMessage, setConfirmationMessage] = useState('I would like to book an appointment!');

  const addService = () => setServices([...services, { label: 'New Service', duration: '30 min' }]);
  const updateService = (idx, key, val) => { const s = [...services]; s[idx][key] = val; setServices(s); };
  const removeService = (idx) => setServices(services.filter((_, i) => i !== idx));

  const addSlot = () => setTimeSlots([...timeSlots, { label: '12:00 PM' }]);
  const updateSlot = (idx, val) => { const s = [...timeSlots]; s[idx].label = val; setTimeSlots(s); };
  const removeSlot = (idx) => setTimeSlots(timeSlots.filter((_, i) => i !== idx));

  const handleSubmit = () => {
    const screens = [
      {
        id: 'screen_1',
        title: 'Select a Service',
        defaultNextScreenId: 'screen_2',
        elements: services.map(s => ({
          type: 'radio',
          label: `${s.label} — ${s.duration}`,
          nextScreenId: 'screen_2',
        })),
      },
      {
        id: 'screen_2',
        title: 'Choose a Time Slot',
        defaultNextScreenId: 'screen_3',
        elements: timeSlots.map(t => ({
          type: 'radio',
          label: t.label,
          nextScreenId: 'screen_3',
        })),
      },
      {
        id: 'screen_3',
        title: 'Your Details',
        defaultNextScreenId: 'finish',
        elements: [
          { type: 'input', label: 'Full Name', nextScreenId: 'finish' },
          { type: 'input', label: 'Phone Number', nextScreenId: 'finish' },
        ],
      },
    ];

    onSubmit({
      category: 'Book an appointment',
      industry: 'Appointments',
      hasFlow: true,
      message: businessName || 'Book an Appointment',
      description: serviceDescription || 'Select your preferred service and time slot.',
      image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9501?w=800&q=80',
      completionMessage: confirmationMessage,
      screens,
    });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}, #34d399)` }} className="px-8 py-6 text-white shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <div>
                <h2 className="text-xl font-bold leading-tight">Appointment Booking</h2>
                <p className="text-[11px] opacity-70 font-semibold uppercase tracking-widest">
                  {step === 1 ? 'Step 1: Business Info' : 'Step 2: Services & Slots'}
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
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Business / Provider Name *</label>
                <input className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-emerald-400 transition-all" placeholder="e.g. Dr. Shah's Clinic" value={businessName} onChange={e => setBusinessName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Service Overview</label>
                <textarea className="w-full bg-white border-2 border-transparent shadow-sm rounded-[24px] p-5 text-[15px] font-medium leading-6 focus:outline-none focus:border-emerald-400 transition-all" placeholder="Describe your services briefly..." rows="3" value={serviceDescription} onChange={e => setServiceDescription(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-emerald-500 uppercase tracking-widest ml-1">Confirmation Message</label>
                <input type="text" className="w-full h-14 bg-emerald-50 border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold text-emerald-700 focus:outline-none focus:border-emerald-400 transition-all" placeholder="e.g. I'd like to book an appointment!" value={confirmationMessage} onChange={e => setConfirmationMessage(e.target.value)} />
              </div>
            </>
          ) : (
            <>
              {/* Services */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Services (Screen 1)</label>
                {services.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex-1 space-y-1.5">
                      <input className="w-full text-[14px] font-bold bg-gray-50 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-400" placeholder="Service name" value={s.label} onChange={e => updateService(idx, 'label', e.target.value)} />
                      <input className="w-full text-[12px] text-gray-500 bg-gray-50 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-emerald-400" placeholder="Duration (e.g. 30 min)" value={s.duration} onChange={e => updateService(idx, 'duration', e.target.value)} />
                    </div>
                    <button onClick={() => removeService(idx)} className="text-gray-300 hover:text-red-400 transition-colors">🗑️</button>
                  </div>
                ))}
                <button onClick={addService} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-emerald-500 font-bold text-sm hover:border-emerald-400 hover:bg-emerald-50 transition-all">+ Add Service</button>
              </div>

              {/* Time Slots */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Available Time Slots (Screen 2)</label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                      <input className="flex-1 text-[13px] font-bold bg-gray-50 rounded-lg px-2 py-1 focus:outline-none focus:ring-1 focus:ring-emerald-400 text-center" value={t.label} onChange={e => updateSlot(idx, e.target.value)} />
                      <button onClick={() => removeSlot(idx)} className="text-gray-300 hover:text-red-400 text-sm transition-colors shrink-0">×</button>
                    </div>
                  ))}
                </div>
                <button onClick={addSlot} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-emerald-500 font-bold text-sm hover:border-emerald-400 hover:bg-emerald-50 transition-all">+ Add Time Slot</button>
                <p className="text-[10px] text-gray-400 italic ml-1">Screen 3 automatically collects Name & Phone from the user.</p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 bg-white flex gap-4 shrink-0">
          {step === 1 ? (
            <>
              <button onClick={onClose} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">Discard</button>
              <button onClick={() => setStep(2)} disabled={!businessName} className={`flex-[2] h-14 rounded-[20px] font-bold transition-all ${!businessName ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]'}`} style={businessName ? { background: `linear-gradient(135deg, ${ACCENT}, #34d399)`, boxShadow: `0 10px 30px ${ACCENT}33` } : {}}>
                Next: Set Services →
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">← Back</button>
              <button onClick={handleSubmit} className="flex-[2] h-14 rounded-[20px] text-white font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all" style={{ background: `linear-gradient(135deg, ${ACCENT}, #34d399)`, boxShadow: `0 10px 30px ${ACCENT}33` }}>
                Create Booking Flow ✓
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
