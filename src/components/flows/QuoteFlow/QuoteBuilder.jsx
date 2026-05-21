// src/components/flows/QuoteFlow/QuoteBuilder.jsx
import { useState } from 'react';

const ACCENT = '#f97316'; // Orange for quotes/pricing

export default function QuoteBuilder({ onSubmit, onClose }) {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [categories, setCategories] = useState([
    { label: 'Residential', icon: '🏠' },
    { label: 'Commercial', icon: '🏢' },
    { label: 'Industrial', icon: '🏭' },
  ]);
  const [detailFields, setDetailFields] = useState([
    { type: 'input', label: 'Project Description' },
    { type: 'input', label: 'Budget Range' },
    { type: 'input', label: 'Location / Area' },
    { type: 'input', label: 'Contact Phone' },
  ]);
  const [confirmationMessage, setConfirmationMessage] = useState("I'd like to get a quote!");

  const addCategory = () => setCategories([...categories, { label: 'New Category', icon: '📦' }]);
  const updateCategory = (idx, key, val) => { const c = [...categories]; c[idx][key] = val; setCategories(c); };
  const removeCategory = (idx) => setCategories(categories.filter((_, i) => i !== idx));

  const addField = () => setDetailFields([...detailFields, { type: 'input', label: 'New Field' }]);
  const updateField = (idx, key, val) => { const f = [...detailFields]; f[idx][key] = val; setDetailFields(f); };
  const removeField = (idx) => setDetailFields(detailFields.filter((_, i) => i !== idx));

  const handleSubmit = () => {
    const screens = [
      {
        id: 'screen_1',
        title: 'Select Service Category',
        defaultNextScreenId: 'screen_2',
        elements: categories.map(c => ({
          type: 'radio',
          label: `${c.icon} ${c.label}`,
          nextScreenId: 'screen_2',
        })),
      },
      {
        id: 'screen_2',
        title: 'Project Details',
        defaultNextScreenId: 'finish',
        elements: detailFields.map(f => ({
          type: f.type,
          label: f.label,
          nextScreenId: 'finish',
        })),
      },
    ];

    onSubmit({
      category: 'Get a quote',
      industry: 'Quotes',
      hasFlow: true,
      message: businessName || 'Get a Free Quote',
      description: serviceDescription || 'Tell us about your project and we\'ll get back to you with a quote.',
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80',
      completionMessage: confirmationMessage,
      screens,
    });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}, #fb923c)` }} className="px-8 py-6 text-white shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💼</span>
              <div>
                <h2 className="text-xl font-bold leading-tight">Quote Request</h2>
                <p className="text-[11px] opacity-70 font-semibold uppercase tracking-widest">
                  {step === 1 ? 'Step 1: Business Setup' : 'Step 2: Categories & Fields'}
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
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Business Name *</label>
                <input className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-orange-400 transition-all" placeholder="e.g. ABC Construction Co." value={businessName} onChange={e => setBusinessName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Service Description</label>
                <textarea className="w-full bg-white border-2 border-transparent shadow-sm rounded-[24px] p-5 text-[15px] font-medium leading-6 focus:outline-none focus:border-orange-400 transition-all" placeholder="What services do you offer? What can clients expect?" rows="3" value={serviceDescription} onChange={e => setServiceDescription(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-orange-500 uppercase tracking-widest ml-1">Confirmation Message</label>
                <input type="text" className="w-full h-14 bg-orange-50 border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold text-orange-700 focus:outline-none focus:border-orange-400 transition-all" placeholder="e.g. I'd like to get a quote!" value={confirmationMessage} onChange={e => setConfirmationMessage(e.target.value)} />
              </div>
            </>
          ) : (
            <>
              {/* Categories */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Service Categories (Screen 1)</label>
                {categories.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <input className="w-10 text-center text-2xl bg-gray-50 rounded-lg py-1 focus:outline-none" placeholder="🔧" value={c.icon} onChange={e => updateCategory(idx, 'icon', e.target.value)} />
                    <input className="flex-1 text-[14px] font-bold bg-gray-50 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400" placeholder="Category name" value={c.label} onChange={e => updateCategory(idx, 'label', e.target.value)} />
                    <button onClick={() => removeCategory(idx)} className="text-gray-300 hover:text-red-400 transition-colors">🗑️</button>
                  </div>
                ))}
                <button onClick={addCategory} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-orange-500 font-bold text-sm hover:border-orange-400 hover:bg-orange-50 transition-all">+ Add Category</button>
              </div>

              {/* Detail Fields */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Info Fields (Screen 2)</label>
                {detailFields.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <input className="flex-1 text-[14px] font-bold bg-gray-50 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400" placeholder="Field label" value={f.label} onChange={e => updateField(idx, 'label', e.target.value)} />
                    <button onClick={() => removeField(idx)} className="text-gray-300 hover:text-red-400 transition-colors">🗑️</button>
                  </div>
                ))}
                <button onClick={addField} className="w-full py-3 border-2 border-dashed border-gray-200 rounded-2xl text-orange-500 font-bold text-sm hover:border-orange-400 hover:bg-orange-50 transition-all">+ Add Field</button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 bg-white flex gap-4 shrink-0">
          {step === 1 ? (
            <>
              <button onClick={onClose} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">Discard</button>
              <button onClick={() => setStep(2)} disabled={!businessName} className={`flex-[2] h-14 rounded-[20px] font-bold transition-all ${!businessName ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]'}`} style={businessName ? { background: `linear-gradient(135deg, ${ACCENT}, #fb923c)`, boxShadow: `0 10px 30px ${ACCENT}33` } : {}}>
                Next: Set Categories →
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">← Back</button>
              <button onClick={handleSubmit} className="flex-[2] h-14 rounded-[20px] text-white font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all" style={{ background: `linear-gradient(135deg, ${ACCENT}, #fb923c)`, boxShadow: `0 10px 30px ${ACCENT}33` }}>
                Create Quote Flow ✓
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
