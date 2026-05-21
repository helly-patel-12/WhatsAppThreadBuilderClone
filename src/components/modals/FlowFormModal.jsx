import { useState, useRef } from "react";
import { offerTemplates } from "../../data/offerTemplates";

export default function FlowFormModal({ selectedCategory, onSubmit, onClose }) {
  const [builderStep, setBuilderStep] = useState(1);
  const [selectedTemplateId, setSelectedTemplateId] = useState(
    offerTemplates[0].id,
  );
  const [flowName, setFlowName] = useState(offerTemplates[0].name);
  const [flowDescription, setFlowDescription] = useState(offerTemplates[0].description);
  const [completionMessage, setCompletionMessage] = useState("I have completed the selections!");
  const [flowLink, setFlowLink] = useState(
    "https://ae01.alicdn.com/kf/S7066606626574a4ebeec5d72cc945763B.jpg_640x640Q90.jpg",
  );
  const [flowImage, setFlowImage] = useState(
    "https://ae01.alicdn.com/kf/S7066606626574a4ebeec5d72cc945763B.jpg_640x640Q90.jpg",
  );

  // Custom Flow Builder State
  const [screens, setScreens] = useState([
    {
      id: "screen_1",
      title: "Select Category",
      elements: [{ label: "Electronics" }, { label: "Clothing" }],
    },
  ]);

  const fileInputRef = useRef(null);

  const handleTemplateChange = (e) => {
    const templateId = e.target.value;
    const template = offerTemplates.find((t) => t.id === templateId);
    if (template) {
      setSelectedTemplateId(templateId);
      setFlowName(template.name);
      setFlowDescription(template.description);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setFlowImage(URL.createObjectURL(file));
  };

  const addScreen = () => {
    setScreens([
      ...screens,
      {
        id: `screen_${screens.length + 1}`,
        title: "New Screen",
        elements: [{ label: "Option 1" }],
      },
    ]);
  };

  const updateScreen = (index, field, value) => {
    const newScreens = [...screens];
    newScreens[index][field] = value;
    setScreens(newScreens);
  };

  const addOption = (screenIndex, type = "radio") => {
    const newScreens = [...screens];
    newScreens[screenIndex].elements.push({
      label:
        type === "radio"
          ? `Option ${newScreens[screenIndex].elements.length + 1}`
          : `Field Name`,
      type: type,
    });
    setScreens(newScreens);
  };

  const updateOption = (screenIndex, optIndex, field, value) => {
    const newScreens = [...screens];
    newScreens[screenIndex].elements[optIndex][field] = value;
    setScreens(newScreens);
  };

  const removeOption = (screenIndex, optIndex) => {
    const newScreens = [...screens];
    newScreens[screenIndex].elements.splice(optIndex, 1);
    setScreens(newScreens);
  };

  const handleSubmit = () => {
    const template = offerTemplates.find((t) => t.id === selectedTemplateId);
    onSubmit({
      category: selectedCategory,
      industry: template?.industry || "Shopping",
      hasFlow: true,
      message: flowName,
      description: flowDescription,
      completionMessage: completionMessage,
      link: flowLink,
      image: flowImage,
      screens: screens,
    });
  };

  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10 font-sans shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              {builderStep === 1
                ? "Configure Flow Message"
                : "Build Custom Screens"}
            </h2>
            <p className="text-sm text-gray-400 font-semibold mt-0.5">
              {builderStep === 1
                ? "Step 1: Visual Template"
                : `Step 2: Interactive Screens (${screens.length})`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 bg-gray-50/50 font-sans">
          {builderStep === 1 ? (
            <div className="space-y-8">
              <div className="space-y-2 text-left">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Industry Logic
                </label>
                <select
                  value={selectedTemplateId}
                  onChange={handleTemplateChange}
                  className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-[#008069] transition-all"
                >
                  {offerTemplates.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.industry}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Message Banner
                </label>
                <div className="flex items-center gap-5 p-5 bg-white rounded-[24px] shadow-sm border border-gray-100">
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img
                      src={flowImage}
                      alt="Preview"
                      className="w-24 h-24 object-cover ring-4 ring-gray-100 transition-transform group-hover:scale-110"
                    />
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-bold"
                    >
                      EDIT
                    </button>
                  </div>
                  <div className="flex-1 space-y-2">
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="text-sm font-bold text-[#008069] hover:text-[#006e5a] transition-colors"
                    >
                      Replace Campaign Image
                    </button>
                    <p className="text-[11px] text-gray-400 font-medium leading-relaxed">
                      Best for 800x600px aspect ratios. Supported: JPG, PNG,
                      WEBP.
                    </p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Flow Name (Title)
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-white border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-[#008069] transition-all"
                  placeholder="e.g. Premium Support Flow"
                  value={flowName}
                  onChange={(e) => setFlowName(e.target.value)}
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">
                  Message Description
                </label>
                <textarea
                  className="w-full bg-white border-2 border-transparent shadow-sm rounded-[24px] p-5 text-[15px] font-medium leading-6 focus:outline-none focus:border-[#008069] transition-all"
                  placeholder="Summarize the value proposition or instructions..."
                  rows="3"
                  value={flowDescription}
                  onChange={(e) => setFlowDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[11px] font-black text-[#008069] uppercase tracking-widest ml-1">
                  Confirmation Message (sent by customer)
                </label>
                <input
                  type="text"
                  className="w-full h-14 bg-[#008069]/5 border-2 border-transparent shadow-sm rounded-[20px] px-5 text-[15px] font-semibold focus:outline-none focus:border-[#008069] transition-all text-[#008069]"
                  placeholder="e.g. I am interested in this deal!"
                  value={completionMessage}
                  onChange={(e) => setCompletionMessage(e.target.value)}
                />
                <p className="px-2 text-[10px] text-gray-400 font-medium italic">This is the message that will be sent from the customer side when they finish the flow.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-10">
              {screens.map((screen, sIdx) => (
                <div
                  key={screen.id}
                  className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 space-y-6 text-left relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 py-2 px-6 bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-widest border-bl rounded-bl-[20px]">
                    Screen {sIdx + 1}
                  </div>

                  <div className="space-y-4 pt-2">
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-black text-gray-300 uppercase tracking-widest ml-1">
                        Modal Header Title
                      </label>
                      <input
                        className="text-xl font-black text-gray-900 bg-transparent border-b-2 border-gray-50 focus:border-[#008069] focus:outline-none w-full pb-2 transition-all"
                        value={screen.title}
                        onChange={(e) =>
                          updateScreen(sIdx, "title", e.target.value)
                        }
                        placeholder="e.g. Confirm Your Details"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-[#008069] uppercase ml-1">
                        Screen Exit Behavior (Default Next)
                      </label>
                      <select
                        className="w-full text-[11px] font-bold text-gray-700 bg-white border border-gray-100 rounded-lg px-3 py-2 focus:ring-1 focus:ring-[#008069] transition-all"
                        value={screen.defaultNextScreenId || "finish"}
                        onChange={(e) =>
                          updateScreen(
                            sIdx,
                            "defaultNextScreenId",
                            e.target.value,
                          )
                        }
                      >
                        <option value="finish">
                          🏁 Finish after this screen
                        </option>

                        {screens.map(
                          (target, tIdx) =>
                            target.id !== screen.id && (
                              <option key={target.id} value={target.id}>
                                ➡️ Go to Screen {tIdx + 1}: {target.title}
                              </option>
                            ),
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[11px] font-black text-gray-300 uppercase tracking-widest ml-1">
                      Interactive Elements
                    </label>
                    <div className="space-y-3">
                      {screen.elements.map((el, eIdx) => (
                        <div
                          key={eIdx}
                          className="flex flex-col gap-3 p-5 bg-gray-50/50 rounded-2xl group border-2 border-transparent hover:border-gray-100 transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <select
                              className="text-[10px] font-black uppercase text-[#008069] bg-white border border-gray-100 rounded-lg px-2 py-1 shadow-sm focus:ring-1 focus:ring-[#008069]"
                              value={el.type || "radio"}
                              onChange={(e) =>
                                updateOption(sIdx, eIdx, "type", e.target.value)
                              }
                            >
                              <option value="radio">Radio</option>
                              <option value="input">Input</option>
                              <option value="checkbox">Checkbox</option>
                            </select>
                            <input
                              className="flex-1 bg-transparent border-none text-[15px] font-bold text-gray-800 focus:outline-none placeholder-gray-300"
                              value={el.label}
                              onChange={(e) =>
                                updateOption(
                                  sIdx,
                                  eIdx,
                                  "label",
                                  e.target.value,
                                )
                              }
                              placeholder="Label (e.g. Electronics)"
                            />
                          </div>

                          <div className="flex border-t border-gray-100 pt-3 gap-4 items-center">
                            <div className="flex-1 space-y-1">
                              <label className="text-[9px] font-black text-gray-300 uppercase ml-1">
                                Behavior (Next Step)
                              </label>
                              <select
                                className="w-full text-[11px] font-bold text-gray-700 bg-white border border-gray-100 rounded-lg px-2 py-1.5 focus:ring-1 focus:ring-[#008069] transition-all"
                                value={el.nextScreenId || "finish"}
                                onChange={(e) =>
                                  updateOption(
                                    sIdx,
                                    eIdx,
                                    "nextScreenId",
                                    e.target.value,
                                  )
                                }
                              >
                                <option value="finish">
                                  🏁 Finish/Complete
                                </option>
                                {screens.map(
                                  (target, tIdx) =>
                                    target.id !== screen.id && (
                                      <option key={target.id} value={target.id}>
                                        ➡️ Go to Screen {tIdx + 1}:{" "}
                                        {target.title}
                                      </option>
                                    ),
                                )}
                              </select>
                            </div>
                            <div className="pt-4">
                              <button
                                onClick={() => removeOption(sIdx, eIdx)}
                                className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => addOption(sIdx, "radio")}
                        className="flex-1 py-3 px-4 bg-white border border-gray-100 rounded-xl text-[12px] font-black text-[#008069] hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                      >
                        <span className="text-base">🔘</span> + Radio
                      </button>
                      <button
                        onClick={() => addOption(sIdx, "input")}
                        className="flex-1 py-3 px-4 bg-white border border-gray-100 rounded-xl text-[12px] font-black text-[#008069] hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                      >
                        <span className="text-base">⌨️</span> + Input
                      </button>
                      <button
                        onClick={() => addOption(sIdx, "checkbox")}
                        className="flex-1 py-3 px-4 bg-white border border-gray-100 rounded-xl text-[12px] font-black text-[#008069] hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                      >
                        <span className="text-base">☑️</span> + Checkbox
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={addScreen}
                className="w-full py-6 border-4 border-dashed border-gray-100 rounded-[32px] text-gray-300 font-black text-sm uppercase tracking-widest hover:border-[#008069] hover:text-[#008069] hover:bg-[#008069]/5 transition-all"
              >
                + Add New Interaction Screen
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-8 border-t border-gray-100 bg-white flex gap-4 font-sans shrink-0">
          {builderStep === 1 ? (
            <>
              <button
                onClick={onClose}
                className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all"
              >
                Discard
              </button>
              <button
                onClick={() => setBuilderStep(2)}
                className="flex-[2] h-14 rounded-[20px] bg-[#008069] text-white font-bold shadow-xl shadow-[#008069]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Next: Configure Screens
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setBuilderStep(1)}
                className="flex-1 h-14 rounded-[20px] border-2 border-gray-100 font-bold text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-all"
              >
                Template
              </button>
              <button
                onClick={handleSubmit}
                className="flex-[2] h-14 rounded-[20px] bg-[#008069] text-white font-bold shadow-xl shadow-[#008069]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Finalize Flow Template
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
