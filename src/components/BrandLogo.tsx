import React from 'react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'w-9 h-9 sm:w-10 sm:h-10' }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0 shadow-md shadow-emerald-600/20 rounded-[10px]`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="swiftcalc-logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Rounded Green Square */}
      <rect width="40" height="40" rx="10" fill="url(#swiftcalc-logo-bg)" />
      {/* Bold Rounded White Letter "S" */}
      <path
        d="M23.5 11.5H15.5C12.7386 11.5 10.5 13.5147 10.5 16C10.5 18.4853 12.7386 20 15.5 20H19.5C22.2614 20 24.5 21.5147 24.5 24C24.5 26.4853 22.2614 28.5 19.5 28.5H11.5"
        stroke="#FFFFFF"
        strokeWidth="4.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Calculator "=" Detail */}
      <line
        x1="27.5"
        y1="24"
        x2="32.5"
        y2="24"
        stroke="#FCD34D"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <line
        x1="27.5"
        y1="28"
        x2="32.5"
        y2="28"
        stroke="#FCD34D"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
};
