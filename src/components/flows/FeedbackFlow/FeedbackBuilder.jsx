// src/components/flows/FeedbackFlow/FeedbackBuilder.jsx
import { useState } from 'react';

const ACCENT = '#f59e0b'; // Amber for feedback/ratings

export default function FeedbackBuilder({ onSubmit, onClose }) {
  const [step, setStep] = useState(1);
  const [formTitle, setFormTitle] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [questions, setQuestions] = useState([
    { type: 'radio', label: 'How would you rate your experience?', options: ['⭐ Poor', '⭐⭐ Fair', '⭐⭐⭐ Good', '⭐⭐⭐⭐ Very Good', '⭐⭐⭐⭐⭐ Excellent'] },
  ]);
  const [confirmationMessage, setConfirmationMessage] = useState("I've submitted my feedback. Thank you!");

  const addQuestion = (type) => {
    setQuestions([...questions, {
      type,
      label: type === 'radio' ? 'New Rating Question' : 'New Text Question',
      options: type === 'radio' ? ['Option 1', 'Option 2', 'Option 3'] : [],
    }]);
  };

  const updateQuestion = (idx, field, value) => {
    const updated = [...questions];
    updated[idx][field] = value;
    setQuestions(updated);
  };

  const updateOption = (qIdx, oIdx, value) => {
    const updated = [...questions];
    updated[qIdx].options[oIdx] = value;
    setQuestions(updated);
  };

  const addOption = (qIdx) => {
    const updated = [...questions];
    updated[qIdx].options.push(`Option ${updated[qIdx].options.length + 1}`);
    setQuestions(updated);
  };

  const removeOption = (qIdx, oIdx) => {
    const updated = [...questions];
    updated[qIdx].options.splice(oIdx, 1);
    setQuestions(updated);
  };

  const removeQuestion = (idx) => {
    setQuestions(questions.filter((_, i) => i !== idx));
  };

  const handleSubmit = () => {
    const screens = questions.map((q, i) => ({
      id: `screen_${i + 1}`,
      title: q.label,
      defaultNextScreenId: i < questions.length - 1 ? `screen_${i + 2}` : 'finish',
      elements: q.type === 'radio'
        ? q.options.map(opt => ({ type: 'radio', label: opt, nextScreenId: i < questions.length - 1 ? `screen_${i + 2}` : 'finish' }))
        : [{ type: 'input', label: q.label, nextScreenId: i < questions.length - 1 ? `screen_${i + 2}` : 'finish' }],
    }));

    onSubmit({
      category: 'Get feedback',
      industry: 'Feedback',
      hasFlow: true,
      message: formTitle || 'Share Your Feedback',
      description: formDescription || 'We value your opinion. Please take a moment to respond.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      completionMessage: confirmationMessage,
      screens,
    });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div style={{ background: `linear-gradient(135deg, ${ACCENT}, #fbbf24)` }} className="px-8 py-6 text-white shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <div>
                <h2 className="text-xl font-bold leading-tight">Feedback Form</h2>
                <p className="text-[11px] opacity-70 font-semibold uppercase tracking-widest">
                  {step === 1 ? 'Step 1: Form Details' : 'Step 2: Questions'}
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
                <input
                  className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-amber-400 transition-all"
                  placeholder="e.g. Post-Purchase Satisfaction Survey"
                  value={formTitle}
                  onChange={e => setFormTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Introduction Text</label>
                <textarea
                  className="w-full bg-white border-2 border-transparent shadow-sm rounded-[24px] p-5 text-[15px] font-medium leading-6 focus:outline-none focus:border-amber-400 transition-all"
                  placeholder="Set context for the person filling this out..."
                  rows="3"
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-amber-500 uppercase tracking-widest ml-1">Thank You Message</label>
                <input
                  type="text"
                  className="w-full h-14 bg-amber-50 border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold text-amber-700 focus:outline-none focus:border-amber-400 transition-all"
                  placeholder="e.g. Thanks for your feedback!"
                  value={confirmationMessage}
                  onChange={e => setConfirmationMessage(e.target.value)}
                />
              </div>
            </>
          ) : (
            <div className="space-y-6">
              {questions.map((q, qIdx) => (
                <div key={qIdx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-black text-amber-500 bg-amber-50 px-2 py-1 rounded-lg uppercase">{q.type === 'radio' ? '⭐ Rating' : '✍️ Text'}</span>
                    <input
                      className="flex-1 font-bold text-[15px] text-gray-800 bg-transparent border-none focus:outline-none placeholder-gray-300 border-b-2 border-gray-50 focus:border-amber-300 pb-1 transition-all"
                      value={q.label}
                      onChange={e => updateQuestion(qIdx, 'label', e.target.value)}
                    />
                    <button onClick={() => removeQuestion(qIdx)} className="text-gray-300 hover:text-red-400 transition-colors shrink-0">🗑️</button>
                  </div>

                  {q.type === 'radio' && (
                    <div className="space-y-2 pl-2">
                      {q.options.map((opt, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full border-2 border-amber-300 shrink-0" />
                          <input
                            className="flex-1 text-[13px] font-semibold text-gray-600 bg-gray-50 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-amber-300"
                            value={opt}
                            onChange={e => updateOption(qIdx, oIdx, e.target.value)}
                          />
                          <button onClick={() => removeOption(qIdx, oIdx)} className="text-gray-300 hover:text-red-400 text-sm transition-colors">×</button>
                        </div>
                      ))}
                      <button onClick={() => addOption(qIdx)} className="text-xs font-bold text-amber-500 hover:text-amber-600 pl-5 transition-colors">+ Add Option</button>
                    </div>
                  )}
                </div>
              ))}

              <div className="flex gap-2">
                <button onClick={() => addQuestion('radio')} className="flex-1 py-3 border-2 border-dashed border-gray-200 rounded-2xl text-amber-500 font-bold text-sm hover:border-amber-400 hover:bg-amber-50 transition-all">⭐ + Rating</button>
                <button onClick={() => addQuestion('input')} className="flex-1 py-3 border-2 border-dashed border-gray-200 rounded-2xl text-amber-500 font-bold text-sm hover:border-amber-400 hover:bg-amber-50 transition-all">✍️ + Text</button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 bg-white flex gap-4 shrink-0">
          {step === 1 ? (
            <>
              <button onClick={onClose} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">Discard</button>
              <button onClick={() => setStep(2)} disabled={!formTitle} className={`flex-[2] h-14 rounded-[20px] font-bold transition-all ${!formTitle ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'text-white shadow-xl hover:scale-[1.02] active:scale-[0.98]'}`} style={formTitle ? { background: `linear-gradient(135deg, ${ACCENT}, #fbbf24)`, boxShadow: `0 10px 30px ${ACCENT}33` } : {}}>
                Next: Add Questions →
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setStep(1)} className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 transition-all">← Back</button>
              <button onClick={handleSubmit} className="flex-[2] h-14 rounded-[20px] text-white font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all" style={{ background: `linear-gradient(135deg, ${ACCENT}, #fbbf24)`, boxShadow: `0 10px 30px ${ACCENT}33` }}>
                Create Feedback Form ✓
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
