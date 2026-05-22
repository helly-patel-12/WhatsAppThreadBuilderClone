// src/components/left/ProfileSettings.jsx
import { useRef } from "react";

// ── Small shared helpers ──────────────────────────────────────────────────────

function Tip({ text }) {
  return (
    <div className="relative inline-flex items-center flex-shrink-0 group">
      <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 w-max max-w-[260px] bg-[#4b5563] text-white text-[13px] leading-[1.4] text-left rounded-[8px] px-3 py-2 absolute z-[100] bottom-[calc(100%+6px)] right-0 transition-all duration-400 pointer-events-none">
        {text}
      </span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.85638 6.5C6.31398 5.52901 7.54869 4.83333 9.00004 4.83333C10.841 4.83333 12.3334 5.95262 12.3334 7.33333C12.3334 8.49953 11.2687 9.47923 9.82856 9.7555C9.37657 9.84221 9.00004 10.2064 9.00004 10.6667M9 13.1667H9.00833M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
          stroke="#D4D4D8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Placeholder shown when no image is uploaded yet
function UploadPlaceholder() {
  return (
    <div className="w-7 h-7 flex items-center justify-center">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.97 1H18.03C17.16 1 16.52 1.36 16.23 2C16.07 2.29 16 2.63 16 3.03V5.97C16 7.24 16.76 8 18.03 8H20.97C21.37 8 21.71 7.93 22 7.77C22.64 7.48 23 6.84 23 5.97V3.03C23 1.76 22.24 1 20.97 1ZM21.91 4.93C21.81 5.03 21.66 5.1 21.5 5.11H20.09V5.62L20.1 6.5C20.09 6.67 20.03 6.81 19.91 6.93C19.81 7.03 19.66 7.1 19.5 7.1C19.17 7.1 18.9 6.83 18.9 6.5V5.1L17.5 5.11C17.17 5.11 16.9 4.83 16.9 4.5C16.9 4.17 17.17 3.9 17.5 3.9L18.38 3.91H18.9V2.51C18.9 2.18 19.17 1.9 19.5 1.9C19.83 1.9 20.1 2.18 20.1 2.51L20.09 3.22V3.9H21.5C21.83 3.9 22.1 4.17 22.1 4.5C22.09 4.67 22.02 4.81 21.91 4.93Z"
          fill="#25D366"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3.75H3.75C3.15326 3.75 2.58097 3.98705 2.15901 4.40901C1.73705 4.83097 1.5 5.40326 1.5 6V15.75V18C1.5 18.5967 1.73705 19.169 2.15901 19.591C2.58097 20.0129 3.15326 20.25 3.75 20.25H20.25C20.8467 20.25 21.419 20.0129 21.841 19.591C22.2629 19.169 22.5 18.5967 22.5 18V15.75V8.80701C22.1765 8.9403 21.8089 9 21.39 9H21V13.9393L19.3713 12.3107C19.0928 12.0321 18.762 11.8111 18.3981 11.6603C18.0341 11.5096 17.644 11.432 17.25 11.432C16.856 11.432 16.4659 11.5096 16.1019 11.6603C15.738 11.8111 15.4072 12.0321 15.1287 12.3107L14.25 13.1893L11.1213 10.0607C10.8428 9.78209 10.512 9.56111 10.1481 9.41035C9.78408 9.25958 9.39397 9.18198 9 9.18198C8.60603 9.18198 8.21592 9.25958 7.85194 9.41035C7.48796 9.56111 7.15725 9.78209 6.87867 10.0607L3 13.9393V6C3 5.80109 3.07902 5.61032 3.21967 5.46967C3.36032 5.32902 3.55109 5.25 3.75 5.25H15V3.75Z"
          fill="#25D366"
        />
      </svg>
    </div>
  );
}

// ── Reusable avatar uploader ──────────────────────────────────────────────────
function AvatarUploader({ icon, onUpload, onRemove, label }) {
  const inputRef = useRef(null);

  return (
    <div className="relative flex-shrink-0">
      {/* Clickable avatar circle */}
      <button
        type="button"
        className="w-14 h-14 rounded-full border-2 border-white p-0 overflow-hidden bg-gray-200 relative cursor-pointer shadow-sm"
        onClick={() => inputRef.current?.click()}
        title={`Change ${label} photo`}
      >
        {icon ? (
          <img src={icon} alt={label} className="w-full h-full object-cover" />
        ) : (
          <UploadPlaceholder />
        )}
        {/* Camera badge overlay */}
        <span className="absolute bottom-0 right-0 bg-[#25d366] rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={onUpload}
      />

      {/* Remove button — only visible when image exists */}
      {icon && (
        <button
          type="button"
          className="absolute -top-2 -left-2 bg-[#ff4d4f] text-white border border-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] cursor-pointer z-10 shadow-sm"
          onClick={onRemove}
          title="Remove photo"
        >
          ✕
        </button>
      )}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ProfileSettings({
  companyName,
  setCompanyName,
  customerName,
  setCustomerName,
  companyIcon,
  customerIcon,
  isVerified,
  onCompanyImageUpload,
  onCustomerImageUpload,
  onRemoveCompanyImage,
  onRemoveCustomerImage,
  onVerifyToggle,
}) {
  return (
    <div className="flex flex-col gap-5">
      {/* ── Customer section ── */}
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-bold text-[#667781] uppercase tracking-wider">Customer</p>
        <div className="flex items-center gap-4 bg-[#f8f9fa] p-3 rounded-[12px] relative">
          <AvatarUploader
            icon={customerIcon}
            onUpload={onCustomerImageUpload}
            onRemove={onRemoveCustomerImage}
            label="Customer"
          />
          <input
            type="text"
            className="flex-1 bg-transparent border-none border-b-[1.5px] border-[#e9edef] py-1 text-[14px] text-[#111b21] outline-none focus:border-[#25d366] transition-colors"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value || "Customer Name")}
          />
          <Tip text="Set the customer's display name and profile picture shown in the chat header" />
        </div>
      </div>

      {/* ── Business section ── */}
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-bold text-[#667781] uppercase tracking-wider">Business</p>
        <div className="flex items-center gap-4 bg-[#f8f9fa] p-3 rounded-[12px] relative">
          <AvatarUploader
            icon={companyIcon}
            onUpload={onCompanyImageUpload}
            onRemove={onRemoveCompanyImage}
            label="Business"
          />
          <input
            type="text"
            className="flex-1 bg-transparent border-none border-b-[1.5px] border-[#e9edef] py-1 text-[14px] text-[#111b21] outline-none focus:border-[#25d366] transition-colors"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value || "Company Name")}
          />
          <Tip text="Set the business display name and logo shown in the chat header" />
        </div>
      </div>

      {/* ── Verified badge toggle ── */}
      <div className="flex items-center justify-between">
        <div
          onClick={onVerifyToggle}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-colors duration-200"
            style={{
              color: isVerified ? "#25d366" : "#d4d4d8",
            }}
          >
            <path
              d="M10.7466 2.4425C11.4363 1.8525 12.5659 1.8525 13.2656 2.4425L14.8451 3.80261C15.145 4.06261 15.7047 4.27258 16.1046 4.27258H17.8039C18.8636 4.27258 19.7332 5.14251 19.7332 6.20251V7.90258C19.7332 8.29258 19.9431 8.86259 20.203 9.16259L21.5625 10.7425C22.1523 11.4325 22.1523 12.5626 21.5625 13.2626L20.203 14.8425C19.9431 15.1425 19.7332 15.7025 19.7332 16.1025V17.8026C19.7332 18.8626 18.8636 19.7325 17.8039 19.7325H16.1046C15.7147 19.7325 15.145 19.9425 14.8451 20.2025L13.2656 21.5625C12.5759 22.1525 11.4463 22.1525 10.7466 21.5625L9.16721 20.2025C8.86732 19.9425 8.30752 19.7325 7.90767 19.7325H6.17831C5.1187 19.7325 4.24904 18.8626 4.24904 17.8026V16.0925C4.24904 15.7025 4.03913 15.1425 3.78922 14.8425L2.43972 13.2526C1.85994 12.5626 1.85994 11.4426 2.43972 10.7526L3.78922 9.16259C4.03913 8.86259 4.24904 8.30259 4.24904 7.91259V6.20251C4.24904 5.14251 5.1187 4.27258 6.17831 4.27258H7.90767C8.29752 4.27258 8.86732 4.06261 9.16721 3.80261L10.7466 2.4425Z"
              fill="currentColor"
            />
            <path
              d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[13px] text-[#667781] group-hover:text-[#111b21] transition-colors">Display verified account icon</span>
        </div>
        <Tip text="Adds a green verified checkmark next to the business name in the chat header" />
      </div>
    </div>
  );
}

