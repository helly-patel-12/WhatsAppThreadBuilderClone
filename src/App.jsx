// src/App.jsx
import { useState } from "react";
import html2canvas from "html2canvas";

import "./App.css";

import LeftPanel from "./components/left/LeftPanel";
import PhoneDisplay from "./components/middle/PhoneDisplay";
import RightPanel from "./components/right/RightPanel";

import { usePhoneSettings } from "./hooks/usePhoneSettings";
import { useMessages } from "./hooks/useMessages";
import { useShopFlow } from "./hooks/useShopFlow";

function App() {
  // ── Profile state — each field is independent React state ────────────────
  const [isProfile, setIsProfile] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [companyName, setCompanyName] = useState("Company Name");
  const [customerName, setCustomerName] = useState("Customer Name");
  const [companyIcon, setCompanyIcon] = useState(null); // business DP
  const [customerIcon, setCustomerIcon] = useState(null); // customer DP

  // ── Other UI state ────────────────────────────────────────────────────────
  const [showIntro, setShowIntro] = useState(true);
  const [activeTab, setActiveTab] = useState("Text");
  const [text, setText] = useState("");
  const [currentSender, setCurrentSender] = useState("company");

  const [replyMessage, setReplyMessage] = useState(null);

  // ── Custom hooks ──────────────────────────────────────────────────────────
  const phoneSettings = usePhoneSettings();

  const {
    messages,
    activeMessage,
    handleMessageClick,
    saveMessage,
    replyMessage: doReply,
    deleteMessage,
    moveMessage,
    clearMessages,
    addFlowMessage,
  } = useMessages();

  const shopFlow = useShopFlow({
    onOrderComplete: ({ message, description }) =>
      setReplyMessage({ message, description }),
  });

  // ── Helpers ───────────────────────────────────────────────────────────────
  const handleSave = () => {
    const ok = saveMessage({
      text,
      time: phoneSettings.getFormattedTime(),
      sender: currentSender,
    });
    if (ok) setText("");
  };

  const handleReply = () => {
    const ok = doReply({ text, time: phoneSettings.getFormattedTime() });
    if (ok) {
      setText("");
      const tb = document.getElementById("textbox");
      if (tb) {
        tb.style.fontStyle = "normal";
        tb.style.fontWeight = "normal";
      }
    }
  };

  const downloadPNG = () => {
    const el = document.getElementById("main-container");
    html2canvas(el).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "Screenshot.png";
      link.click();
    });
  };

  // Image uploads — each creates an object URL and stores in its own state
  const handleCompanyImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setCompanyIcon(URL.createObjectURL(file));
  };
  const handleCustomerImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setCustomerIcon(URL.createObjectURL(file));
  };

  // ── Prop bundles ──────────────────────────────────────────────────────────
  const phoneSettingsProps = {
    time: phoneSettings.time,
    period: phoneSettings.period,
    is12HourFormat: phoneSettings.is12HourFormat,
    isIOS: phoneSettings.isIOS,
    isAndroid: phoneSettings.isAndroid,
    isFrame: phoneSettings.isFrame,
    povType: phoneSettings.povType,
    isRead: phoneSettings.isRead,
    handleTimeChange: phoneSettings.handleTimeChange,
    togglePeriod: phoneSettings.togglePeriod,
    toggleTimeFormat: phoneSettings.toggleTimeFormat,
    handlePlatformChange: phoneSettings.handlePlatformChange,
    handlePOVChange: phoneSettings.handlePOVChange,
    handleFrameChange: phoneSettings.handleFrameChange,
    handleMsgReadToggle: phoneSettings.handleMsgReadToggle,
  };

  const profileSettingsProps = {
    companyName,
    setCompanyName,
    customerName,
    setCustomerName,
    companyIcon,
    customerIcon,
    isVerified,
    onCompanyImageUpload: handleCompanyImageUpload,
    onCustomerImageUpload: handleCustomerImageUpload,
    onRemoveCompanyImage: () => setCompanyIcon(null),
    onRemoveCustomerImage: () => setCustomerIcon(null),
    onVerifyToggle: () => setIsVerified((prev) => !prev),
  };

  return (
    <div className="flex justify-center gap-10 w-full p-12 min-h-screen bg-[#f0f2f5]">
      {/* LEFT */}
      <LeftPanel
        isProfile={isProfile}
        onShowProfile={() => setIsProfile(true)}
        onShowPhone={() => setIsProfile(false)}
        phoneSettings={phoneSettingsProps}
        profileSettings={profileSettingsProps}
        showIntro={showIntro}
        onIntroToggle={() => setShowIntro((prev) => !prev)}
        onClearMessages={clearMessages}
        onDownload={downloadPNG}
      />

      {/* MIDDLE */}
      <div className="flex items-start">
        <PhoneDisplay
          isFrame={phoneSettings.isFrame}
          isIOS={phoneSettings.isIOS}
          isAndroid={phoneSettings.isAndroid}
          companyIcon={companyIcon}
          customerIcon={customerIcon}
          companyName={companyName}
          customerName={customerName}
          povType={phoneSettings.povType}
          isVerified={isVerified}
          showIntro={showIntro}
          messages={messages}
          replyMessage={replyMessage}
          activeMessage={activeMessage}

          onMessageClick={handleMessageClick}
          shopFlow={shopFlow}
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-start">
        <RightPanel
          activeTab={activeTab}
          onTabChange={setActiveTab}
          text={text}
          setText={setText}
          time={phoneSettings.time}
          period={phoneSettings.period}
          handleTimeChange={phoneSettings.handleTimeChange}
          togglePeriod={phoneSettings.togglePeriod}
          messages={messages}
          activeMessage={activeMessage}
          currentSender={currentSender}
          setCurrentSender={setCurrentSender}
          onSave={handleSave}
          onDelete={deleteMessage}
          onReply={handleReply}
          onArrow={moveMessage}
          onAddFlowMessage={(msg) => addFlowMessage(msg, phoneSettings.getFormattedTime())}
        />
      </div>
    </div>
  );
}

export default App;

