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
        <linearGradient id="calcvault-logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Rounded Green Square */}
      <rect width="40" height="40" rx="10" fill="url(#calcvault-logo-bg)" />
      {/* Bold Rounded White Letter "C" */}
      <path
        d="M23 13C21 11.2 17.5 11 15 11.8C11.8 12.8 10.5 16 10.5 20C10.5 24 11.8 27.2 15 28.2C17.5 29 21 28.8 23 27"
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
