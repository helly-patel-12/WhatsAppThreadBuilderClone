// src/components/middle/ChatHeader.jsx

function Avatar({ icon, name }) {
  if (icon) {
    return (
      <img
        className="w-9 h-9 rounded-full object-cover"
        src={icon}
        alt={name}
      />
    );
  }
  // Initials fallback
  const initials = name
    ? name
        .trim()
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";
  return (
    <div
      className="w-9 h-9 rounded-full bg-[#8696a0] text-white flex items-center justify-center font-medium text-[15px]"
      title={name}
    >
      {initials}
    </div>
  );
}

export default function ChatHeader({
  companyIcon,
  customerIcon,
  companyName,
  customerName,
  povType,
  isVerified,
}) {
  const displayName = povType === "customer" ? companyName : customerName;
  const displayIcon = povType === "customer" ? companyIcon : customerIcon;
  const subLabel = povType === "customer" ? "Business Account" : "online";

  return (
    <div
      className="bg-[#008069] text-white px-3 flex items-center w-full h-[60px] shrink-0 z-10 shadow-sm"
      id="main-header"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-1 cursor-pointer">
          <svg
            className="-mr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
              fill="currentColor"
            />
          </svg>

          <div className="p-0.5">
            <Avatar icon={displayIcon} name={displayName} />
          </div>

          <div className="flex flex-col justify-center ml-2">
            <div className="flex items-center gap-1">
              <p className="text-[16px] font-medium leading-tight m-0 truncate max-w-[150px]">
                {displayName}
              </p>
              {isVerified && povType === "customer" && <VerifiedBadge />}
            </div>
            <p className="text-[12px] opacity-90 m-0 leading-tight">
              {subLabel}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[18px]">
          {povType === "customer" && <ShopIcon />} 
          <CallIcon className="" fill="white" />
          <MoreIcon className="" fill="white" />
        </div>
      </div>
    </div>
  );
}

function VerifiedBadge() {
  return (
    <svg
      className="ml-0.5"
      width="15"
      height="15"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M1013.3 487l-94-107.5 13-142.2c1.7-18.7-10.4-35.4-28-38.9l-139.7-27.9-74.8-121.7c-9.5-15.4-28.7-21.6-45.2-14.4l-130.4 56.4-130.4-56.4c-16.5-7.1-35.7-1-45.2 14.4L265.8 170.5l-139.7 27.9c-17.6 3.5-29.8 20.2-28 38.9L111 379.5 17 487c-11.4 13.1-11.4 32.5 0 45.6l94 107.5-13 142.2c-1.7 18.7 10.4 35.4 28 38.9l139.7 27.9 74.8 121.7c9.5 15.4 28.7 21.6 45.2 14.4l130.4-56.4 130.4 56.4c16.5 7.1 35.7 1 45.2-14.4l74.8-121.7 139.7-27.9c17.6-3.5 29.8-20.2 28-38.9l-13-142.2 94-107.5c11.4-13.1 11.4-32.5 0-45.6zM461.6 701.3L275.4 515.1l70.7-70.7 115.5 115.5L711.2 310.4l70.7 70.7-320.3 320.2z"
      />
    </svg>
  );
}

function ShopIcon() {
  return (
    <svg width="16" height="21" viewBox="0 0 20 21" fill="none">
      <path
        d="M15.0001 5C15.0001 2.24 12.7601 0 10.0001 0C7.24011 0 5.00011 2.24 5.00011 5H2.87755C1.82142 5 0.947319 5.82117 0.88144 6.87524L0.197839 17.8129C0.0944869 19.4665 1.35123 20.8908 3.00486 20.9942C3.06716 20.9981 3.12957 21 3.192 21H16.5458H16.8068C18.4636 21 19.8068 19.6569 19.8068 18C19.8068 17.9376 19.8048 17.8752 19.8009 17.8129L19.1173 6.87524C19.0514 5.82117 18.1773 5 17.1212 5H15.0001ZM10.0001 2C11.6601 2 13.0001 3.34 13.0001 5H7.00011C7.00011 3.34 8.34011 2 10.0001 2ZM10.0017 12C7.61068 12 5.59939 10.41 5.03499 8.25C4.86054 7.62 5.36337 7 6.03038 7C6.51268 7 6.90262 7.34 7.03602 7.8C7.39518 9.07 8.58554 10 10.0017 10C11.4178 10 12.6081 9.07 12.9673 7.8C13.1007 7.34 13.4906 7 13.9729 7C14.6399 7 15.1325 7.62 14.9683 8.25C14.4039 10.41 12.3926 12 10.0017 12Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg width="20" height="21" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg width="12" height="21" viewBox="0 0 12 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8C7.1 8 8 7.1 8 6C8 4.9 7.1 4 6 4C4.9 4 4 4.9 4 6C4 7.1 4.9 8 6 8ZM6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM6 16C4.9 16 4 16.9 4 18C4 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16Z"
        fill="currentColor"
      />
    </svg>
  );
}
