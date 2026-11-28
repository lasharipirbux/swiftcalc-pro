import React, { useState, useRef, useEffect } from 'react';
import { Download } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOSSafari, install } = usePWAInstall();
  const [showIOSTooltip, setShowIOSTooltip] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showIOSTooltip) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowIOSTooltip(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showIOSTooltip]);

  if (isInstalled || (!isInstallable && !isIOSSafari)) {
    return null;
  }

  const handleClick = () => {
    if (isInstallable) {
      void install();
    } else if (isIOSSafari) {
      setShowIOSTooltip((prev) => !prev);
    }
  };

  return (
    <div ref={wrapperRef} className="relative shrink-0">
      <button
        type="button"
        onClick={handleClick}
        aria-label="Install App"
        aria-expanded={isIOSSafari ? showIOSTooltip : undefined}
        title="Install CalcNaseeb App"
        className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-full text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all shadow-sm whitespace-nowrap"
      >
        <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
        <span>Install App</span>
      </button>

      {isIOSSafari && showIOSTooltip && (
        <div
          role="tooltip"
          className="absolute right-0 top-full mt-2 w-56 px-3 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-medium shadow-lg border border-slate-700 z-50 text-center"
        >
          Tap Share, then Add to Home Screen
        </div>
      )}
    </div>
  );
};
