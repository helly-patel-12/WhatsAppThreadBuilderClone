// src/components/flows/SignUpFlow/SignUpBuilder.jsx
import { useState } from 'react';

const ACCENT = '#0ea5e9'; // Sky blue for sign up

export default function SignUpBuilder({ onSubmit, onClose }) {
  const [step, setStep] = useState(1);
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [fields, setFields] = useState([
    { type: 'input', label: 'Full Name' },
    { type: 'input', label: 'Email Address' },
    { type: 'input', label: 'Phone Number' },
  ]);
  const [planOptions, setPlanOptions] = useState([
    { label: 'Free Plan', detail: 'Basic features' },
    { label: 'Pro Plan', detail: '$9.99/month' },
    { label: 'Enterprise', detail: 'Custom pricing' },
  ]);
  const [showPlanSelector, setShowPlanSelector] = useState(true);
  const [confirmationMessage, setConfirmationMessage] = useState("I'd like to sign up!");

  const FIELD_TYPES = ['input', 'checkbox'];

  const addField = (type) => setFields([...fields, { type, label: type === 'input' ? 'New Field' : 'I agree to terms' }]);
  const updateField = (idx, key, val) => { const f = [...fields]; f[idx][key] = val; setFields(f); };
  const removeField = (idx) => setFields(fields.filter((_, i) => i !== idx));

  const addPlan = () => setPlanOptions([...planOptions, { label: 'New Plan', detail: '' }]);
  const updatePlan = (idx, key, val) => { const p = [...planOptions]; p[idx][key] = val; setPlanOptions(p); };
  const removePlan = (idx) => setPlanOptions(planOptions.filter((_, i) => i !== idx));

  const handleSubmit = () => {
    const screens = [];

    // Screen 1 — info fields
    screens.push({
      id: 'screen_1',
      title: formTitle || 'Sign Up',
      defaultNextScreenId: showPlanSelector ? 'screen_2' : 'finish',
      elements: fields.map(f => ({ type: f.type, label: f.label, nextScreenId: showPlanSelector ? 'screen_2' : 'finish' })),
    });

    // Screen 2 — plan selection (optional)
    if (showPlanSelector) {
      screens.push({
        id: 'screen_2',
        title: 'Choose Your Plan',
        elements: planOptions.map(p => ({
          type: 'radio',
          label: `${p.label}${p.detail ? ` — ${p.detail}` : ''}`,
          nextScreenId: 'finish',
        })),
      });
    }

    onSubmit({
      category: 'Complete Sign up',
      industry: 'Sign Up',
      hasFlow: true,
      message: formTitle || 'Complete Sign Up',
      description: formDescription || 'Fill in your details to get started.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      completionMessage: confirmationMessage,
      screens,
    });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}, #38bdf8)` }} className="px-8 py-6 text-white shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📋</span>
              <div>
                <h2 className="text-xl font-bold leading-tight">Sign Up Flow</h2>
                <p className="text-[11px] opacity-70 font-semibold uppercase tracking-widest">
                  {step === 1 ? 'Step 1: Form Setup' : 'Step 2: Fields & Plans'}
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
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Form Title *</label>
                <input className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-sky-400 transition-all" placeholder="e.g. Join Our Community" value={formTitle} onChange={e => setFormTitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Welcome Message</label>
                <textarea className="w-full bg-white border-2 border-transparent shadow-sm rounded-[24px] p-5 text-[15px] font-medium leading-6 focus:outline-none focus:border-sky-400 transition-all" placeholder="Tell users why they should sign up..." rows="3" value={formDescription} onChange={e => setFormDescription(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-sky-500 uppercase tracking-widest ml-1">Confirmation Message</label>
                <input type="text" className="w-full h-14 bg-sky-50 border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold text-sky-700 focus:outline-none focus:border-sky-400 transition-all" placeholder="e.g. I'd like to sign up!" value={confirmationMessage} onChange={e => setConfirmationMessage(e.target.value)} />
              </div>
              <label className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm cursor-pointer">
                <input type="checkbox" checked={showPlanSelector} onChange={e => setShowPlanSelector(e.target.checked)} className="w-5 h-5 accent-sky-500 rounded" />
                <div>
                  <p className="text-[14px] font-bold text-gray-800">Include Plan/Tier Selector</p>
                  <p className="text-[12px] text-gray-400">Adds a 2nd screen for users to pick a plan or role.</p>
                </div>
              </label>
            </>
          ) : (
            <>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Form Fields</label>
                {fields.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <select className="text-[10px] font-black uppercase text-sky-600 bg-sky-50 border-none rounded-lg px-2 py-1 focus:ring-1 focus:ring-sky-400" value={f.type} onChange={e => updateField(idx, 'type', e.target.value)}>
                      {FIELD_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <input className="flex-1 text-[14px] font-semibold bg-gray-50 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-sky-400" value={f.label} onChange={e => updateField(idx, 'label', e.target.value)} />
                    <button onClick={() => removeField(idx)} className="text-gray-300 hover:text-red-400 transition-colors">🗑️</button>
                  </div>
                ))}
                <div className="flex gap-2">
                  <button onClick={() => addField('input')} className="flex-1 py-3 border-2 border-dashed border-gray-200 rounded-2xl text-sky-500 font-bold text-sm hover:border-sky-400 hover:bg-sky-50 transition-all">⌨️ + Input</button>
                  <button onClick={() => addField('checkbox')} className="flex-1 py-3 border-2 border-dashed border-gray-200 rounded-2xl text-sky-500 font-bold text-sm hover:border-sky-400 hover:bg-sky-50 transition-all">☑️ + Checkbox</button>
                </div>
              </div>

              {showPlanSelector && (
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Plan Options (Screen 2)</label>
                  {planOptions.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex-1 space-y-1.5">
                        <input className="w-full text-[14px] font-bold bg-gray-50 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-sky-400" placeholder="Plan name" value={p.label} onChange={e => updatePlan(idx, 'label', e.target.value)} />
                        <input className="w-full text-[12px] text-gray-500 bg-gray-50 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-sky-400" placeholder="Detail (e.g. $9/mo)" value={p.detail} onChange={e => updatePlan(idx, 'detail', e.target.value)} />
                      </div>
                      <button onClick={() => removePlan(idx)} className="text-gray-300 hover:text-red-400 transition-colors">🗑️</button>
                    </div>
                  ))}
                  <button onClick={addPlan} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-sky-500 font-bold text-sm hover:border-sky-400 hover:bg-sky-50 transition-all">+ Add Plan</button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 bg-white flex gap-4 shrink-0">
          {step === 1 ? (
            <>
              <button onClick={onClose} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">Discard</button>
              <button onClick={() => setStep(2)} disabled={!formTitle} className={`flex-[2] h-14 rounded-[20px] font-bold transition-all ${!formTitle ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]'}`} style={formTitle ? { background: `linear-gradient(135deg, ${ACCENT}, #38bdf8)`, boxShadow: `0 10px 30px ${ACCENT}33` } : {}}>
                Next: Configure Fields →
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">← Back</button>
              <button onClick={handleSubmit} className="flex-[2] h-14 rounded-[20px] text-white font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all" style={{ background: `linear-gradient(135deg, ${ACCENT}, #38bdf8)`, boxShadow: `0 10px 30px ${ACCENT}33` }}>
                Create Sign Up Flow ✓
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
