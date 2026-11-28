import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search, Star, History, ArrowRight, X } from 'lucide-react';
import { categories, getAllCalculators } from '../data/calculatorsData';
import { CalculatorItem } from '../types';
import { searchCalculators } from '../utils/search';
import { BrandLogo } from './BrandLogo';
import { PWAInstallButton } from './PWAInstallButton';
import { SITE_NAME } from '../config/site';
import { CURRENCIES, CurrencyCode } from '../utils/currency';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onSelectCalculator: (calc: CalculatorItem) => void;
  onLogoClick?: () => void;
  onOpenFavorites: () => void;
  onOpenHistory: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  hideSearch?: boolean;
  currency: CurrencyCode;
  onChangeCurrency: (c: CurrencyCode) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  onSelectCalculator,
  onLogoClick,
  onOpenFavorites,
  onOpenHistory,
  hideSearch = false,
  currency,
  onChangeCurrency,
}) => {
  const allCalculators = useMemo(() => getAllCalculators(), []);
  const totalCount = allCalculators.length;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const liveResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchCalculators(searchQuery, allCalculators, categories, null);
  }, [searchQuery, allCalculators]);

  // Close mobile search if hideSearch becomes true (e.g., navigating home)
  useEffect(() => {
    if (hideSearch) {
      setIsMobileSearchOpen(false);
      setIsDropdownOpen(false);
    }
  }, [hideSearch]);

  // Focus input when mobile search expands
  useEffect(() => {
    if (isMobileSearchOpen) {
      inputRef.current?.focus();
    }
  }, [isMobileSearchOpen]);

  // Close dropdown and mobile search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setIsMobileSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset highlighted index when query changes
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [searchQuery]);

  const handleSelectResult = (calc: CalculatorItem) => {
    setIsDropdownOpen(false);
    setIsMobileSearchOpen(false);
    setSearchQuery('');
    inputRef.current?.blur();
    onSelectCalculator(calc);
  };

  const handleCloseMobileSearch = () => {
    setIsMobileSearchOpen(false);
    setIsDropdownOpen(false);
    setSearchQuery('');
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsDropdownOpen(false);
      setIsMobileSearchOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (!isDropdownOpen || !searchQuery.trim()) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (liveResults.length > 0) {
        setHighlightedIndex((prev) => (prev + 1) % liveResults.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (liveResults.length > 0) {
        setHighlightedIndex((prev) => (prev <= 0 ? liveResults.length - 1 : prev - 1));
      }
    } else if (e.key === 'Enter') {
      if (liveResults.length > 0) {
        e.preventDefault();
        const target = highlightedIndex >= 0 ? liveResults[highlightedIndex] : liveResults[0];
        if (target) {
          handleSelectResult(target.calculator);
        }
      }
    }
  };

  const showDropdown = isDropdownOpen && searchQuery.trim().length > 0;

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Logo & Short Title / Tagline */}
        <div
          className={`${isMobileSearchOpen ? 'hidden sm:flex' : 'flex'} items-center gap-2 sm:gap-3 shrink-0 cursor-pointer`}
          onClick={() => {
            if (onLogoClick) onLogoClick();
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <BrandLogo className="w-8 h-8 sm:w-10 sm:h-10" />
          <div>
            <span className="block text-sm sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white leading-none">
              {SITE_NAME}
            </span>
            <p className="hidden sm:block text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
              {totalCount} Professional Calculators
            </p>
          </div>
        </div>

        {/* Search Box + Live Dropdown (Desktop inline; Mobile expands full-width when search icon tapped) */}
        {!hideSearch && (
          <div
            ref={searchContainerRef}
            className={`${isMobileSearchOpen ? 'flex items-center gap-2 w-full sm:w-auto sm:flex-1' : 'hidden sm:block sm:flex-1'} max-w-full sm:max-w-md mx-0 sm:mx-4 relative`}
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 sm:left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onFocus={() => setIsDropdownOpen(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search calculators..."
                aria-label="Search calculators"
                aria-expanded={showDropdown}
                aria-autocomplete="list"
                className={`w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-9 sm:pl-10 ${searchQuery ? 'pr-14' : 'pr-3'} py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setIsDropdownOpen(false);
                    inputRef.current?.focus();
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-white bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {isMobileSearchOpen && (
              <button
                type="button"
                onClick={handleCloseMobileSearch}
                aria-label="Close search"
                className="sm:hidden p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Live Results Dropdown */}
            {showDropdown && (
              <div
                role="listbox"
                className="fixed inset-x-3 top-[4.5rem] sm:absolute sm:inset-x-0 sm:top-full sm:mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-xl overflow-hidden z-50"
              >
                {liveResults.length === 0 ? (
                  <div className="p-6 text-center">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                      No calculator found
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                      Try searching by calculator name, category, or keyword (e.g., "math", "emi", "bmi", "marla", "percent").
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="px-3.5 py-2 bg-slate-50 dark:bg-slate-800/70 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      <span>Matching Calculators</span>
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {liveResults.length} {liveResults.length === 1 ? 'result' : 'results'}
                      </span>
                    </div>
                    <div className="max-h-72 sm:max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/70">
                      {liveResults.map(({ calculator, categoryName }, idx) => {
                        const isHighlighted = idx === highlightedIndex;
                        return (
                          <button
                            key={calculator.id}
                            type="button"
                            role="option"
                            aria-selected={isHighlighted}
                            onClick={() => handleSelectResult(calculator)}
                            onMouseEnter={() => setHighlightedIndex(idx)}
                            className={`w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-3 transition-colors ${
                              isHighlighted
                                ? 'bg-emerald-50 dark:bg-emerald-950/50'
                                : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                {calculator.name}
                              </p>
                              <span className="inline-block mt-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                                {categoryName}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons (+ Mobile Search Trigger when search is enabled) */}
        <div className={`${isMobileSearchOpen ? 'hidden sm:flex' : 'flex'} items-center gap-1 sm:gap-2 shrink-0`}>
          {!hideSearch && (
            <button
              type="button"
              onClick={() => {
                setIsMobileSearchOpen(true);
                setIsDropdownOpen(true);
              }}
              aria-label="Search calculators"
              title="Search calculators"
              className="sm:hidden flex items-center justify-center p-1.5 sm:p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-200 transition-all shadow-sm"
            >
              <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </button>
          )}

          <select
            value={currency}
            onChange={(e) => onChangeCurrency(e.target.value as CurrencyCode)}
            aria-label="Select currency"
            title="Select currency"
            className="px-1.5 sm:px-2.5 py-1.5 sm:py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm cursor-pointer"
          >
            {CURRENCIES.map((cur) => (
              <option key={cur.code} value={cur.code}>
                {cur.code}
              </option>
            ))}
          </select>

          <button
            onClick={onOpenFavorites}
            className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all shadow-sm"
            title="Saved Favorites"
          >
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="hidden sm:inline">Favorites</span>
          </button>

          <button
            onClick={onOpenHistory}
            className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all shadow-sm"
            title="Calculation History"
          >
            <History className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden sm:inline">History</span>
          </button>

          <PWAInstallButton />
        </div>

      </div>
    </header>
  );
};
