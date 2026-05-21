// src/components/left/LeftPanel.jsx
import PhoneSettings from './PhoneSettings';
import ProfileSettings from './ProfileSettings';
import ScreenSettings from './ScreenSettings';

export default function LeftPanel({
  // which sub-panel is active
  isProfile, onShowProfile, onShowPhone,
  // PhoneSettings props
  phoneSettings,
  // ProfileSettings props
  profileSettings,
  // ScreenSettings props
  showIntro, onIntroToggle, onClearMessages, onDownload,
}) {
  return (
    <div className="flex flex-col gap-0 w-80">
      {/* ── SETTINGS CARD 1: Phone / Profile ── */}
      <section className="bg-white rounded-[16px] p-5 mb-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between mb-4 border-b border-[#e9edef] pb-[2px]">
          <div 
            className={`cursor-pointer whitespace-nowrap text-lg px-[2px] pb-1 border-b-2 transition-all duration-150 ${!isProfile ? 'text-[#25d366] border-[#25d366]' : 'text-[#667781] border-transparent'}`}
            onClick={onShowPhone}
          >
            Phone Settings
          </div>
          <div 
            className={`cursor-pointer whitespace-nowrap text-lg px-[2px] pb-1 border-b-2 transition-all duration-150 ${isProfile ? 'text-[#25d366] border-[#25d366]' : 'text-[#667781] border-transparent'}`}
            onClick={onShowProfile}
          >
            Profile Settings
          </div>
        </div>

        {!isProfile ? (
          <PhoneSettings {...phoneSettings} />
        ) : (
          <ProfileSettings {...profileSettings} />
        )}
      </section>

      {/* ── SETTINGS CARD 2: Screen ── */}
      <section className="bg-white rounded-[16px] p-5 mb-5 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
        <ScreenSettings
          showIntro={showIntro}
          onIntroToggle={onIntroToggle}
          onClearMessages={onClearMessages}
          onDownload={onDownload}
        />
      </section>
    </div>

  );
}