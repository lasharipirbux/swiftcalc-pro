import React, { useState, useEffect, useMemo, useRef } from 'react';
import { categories, getAllCalculators } from './data/calculatorsData';
import { CalculatorItem, CalculationHistoryItem } from './types';
import { Header } from './components/Header';
import { BrandLogo } from './components/BrandLogo';
import { Sidebar } from './components/Sidebar';
import { CalculatorView } from './components/CalculatorView';
import { FavoritesModal } from './components/FavoritesModal';
import { HistoryModal } from './components/HistoryModal';
import { StaticPage } from './components/StaticPages';
import { SeoHead, StaticPageId } from './components/SeoHead';
import { getCalculatorSlug, findCalculatorBySlug } from './utils/slugs';
import { searchCalculators } from './utils/search';
import { SITE_NAME } from './config/site';
import {
  ArrowRight,
  ArrowUp,
  ArrowLeft,
  Star,
  Layers,
  Calculator as CalcIcon,
  Search,
  DollarSign,
  Briefcase,
  Home,
  HeartPulse,
  Calendar,
  RefreshCw,
  Zap,
  GraduationCap,
  Cpu,
  Building,
  Car,
  Utensils,
  BarChart3,
  Wifi,
  Sun,
  Moon,
} from 'lucide-react';

const POPULAR_CALCULATOR_IDS = [
  'basic-calc',
  'percentage-calc',
  'health-bmi-calc',
  'loan-calc',
  'dt-age-calc',
  'loan-emi-months',
  'plot-area-converter',
  'marla-to-sqft-price',
  'dt-date-diff',
  'edu-gpa-calc',
  'constr-house-cost-pk',
  'compound-interest',
];

export default function App() {
  const allCalculators = useMemo(() => getAllCalculators(), []);

  const normalizePath = (p: string) => {
    const trimmed = p.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  };

  // Current path / route state
  const [currentPath, setCurrentPath] = useState<string>(() => normalizePath(window.location.pathname));
  const [selectedCategory, setSelectedCategory] = useState<string | null>(() => {
    const p = normalizePath(window.location.pathname);
    if (p.startsWith('/category/')) {
      const catId = p.replace('/category/', '');
      if (categories.some((c) => c.id === catId)) return catId;
    }
    return null;
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Hero search state on landing page
  const [heroSearchQuery, setHeroSearchQuery] = useState('');
  const [isHeroDropdownOpen, setIsHeroDropdownOpen] = useState(false);
  const [heroHighlightedIndex, setHeroHighlightedIndex] = useState<number>(-1);
  const heroSearchRef = useRef<HTMLDivElement>(null);
  const heroInputRef = useRef<HTMLInputElement>(null);

  // Favorites & History state with localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('calcvault_favorites');
      return saved ? JSON.parse(saved) : ['basic-calc', 'loan-calc', 'health-bmi-calc'];
    } catch {
      return ['basic-calc', 'loan-calc'];
    }
  });

  const [history, setHistory] = useState<CalculationHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('calcvault_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('calcvault_theme') === 'dark';
    } catch {
      return false;
    }
  });

  // Modals
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show Back to Top button after scrolling down ~300px
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close hero dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (heroSearchRef.current && !heroSearchRef.current.contains(e.target as Node)) {
        setIsHeroDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setHeroHighlightedIndex(-1);
  }, [heroSearchQuery]);

  // Determine active calculator based on currentPath
  const activeCalculator = useMemo(() => {
    if (
      currentPath.startsWith('/') &&
      currentPath.length > 1 &&
      !['/about', '/contact', '/privacy', '/terms', '/disclaimer'].includes(currentPath) &&
      !currentPath.startsWith('/category/')
    ) {
      return findCalculatorBySlug(currentPath, allCalculators) || null;
    }
    return null;
  }, [currentPath, allCalculators]);

  // Normalize legacy flat calculator URLs (e.g. /bmi-calculator) to /calculator/bmi-calculator
  useEffect(() => {
    if (activeCalculator) {
      const canonicalSlug = getCalculatorSlug(activeCalculator);
      if (currentPath !== canonicalSlug) {
        window.history.replaceState({}, '', canonicalSlug);
        setCurrentPath(canonicalSlug);
      }
    }
  }, [activeCalculator, currentPath]);

  // Sync browser popstate (back / forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const p = normalizePath(window.location.pathname);
      setCurrentPath(p);
      if (p.startsWith('/category/')) {
        const catId = p.replace('/category/', '');
        setSelectedCategory(categories.some((c) => c.id === catId) ? catId : null);
      } else {
        setSelectedCategory(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update localStorage and Dark Mode
  useEffect(() => {
    try {
      localStorage.setItem('calcvault_favorites', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('calcvault_history', JSON.stringify(history));
    } catch {}
  }, [history]);

  useEffect(() => {
    try {
      localStorage.setItem('calcvault_theme', darkMode ? 'dark' : 'light');
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {}
  }, [darkMode]);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCalculator = (calc: CalculatorItem) => {
    setIsHeroDropdownOpen(false);
    setHeroSearchQuery('');
    const slug = getCalculatorSlug(calc);
    navigateTo(slug);
  };

  const handleSelectCategory = (catId: string | null) => {
    setSelectedCategory(catId);
    setSearchQuery('');
    setHeroSearchQuery('');
    if (catId) {
      navigateTo(`/category/${catId}`);
    } else {
      navigateTo('/');
    }
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setSearchQuery('');
    setHeroSearchQuery('');
    navigateTo('/');
  };

  // Hero search live results
  const heroLiveResults = useMemo(() => {
    if (!heroSearchQuery.trim()) return [];
    return searchCalculators(heroSearchQuery, allCalculators, categories, null);
  }, [heroSearchQuery, allCalculators]);

  // Category page calculators
  const categoryCalculators = useMemo(() => {
    if (!selectedCategory) return [];
    return allCalculators.filter((c) => c.categoryId === selectedCategory);
  }, [allCalculators, selectedCategory]);

  // 12 Popular Calculators
  const popularCalculators = useMemo(() => {
    return POPULAR_CALCULATOR_IDS.map((id) => allCalculators.find((c) => c.id === id)).filter(
      (c): c is CalculatorItem => Boolean(c)
    );
  }, [allCalculators]);

  const handleToggleFavorite = (calcId: string) => {
    setFavorites((prev) =>
      prev.includes(calcId) ? prev.filter((id) => id !== calcId) : [...prev, calcId]
    );
  };

  const handleSaveHistory = (item: Omit<CalculationHistoryItem, 'id' | 'timestamp'>) => {
    const newItem: CalculationHistoryItem = {
      ...item,
      id: Math.random().toString(36).substring(2, 9),
      timestamp: Date.now(),
    };
    setHistory((prev) => [newItem, ...prev].slice(0, 50));
  };

  const getCategoryName = (catId: string) => {
    const cat = categories.find((c) => c.id === catId);
    return cat ? cat.name : 'General';
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <CalcIcon className="w-5 h-5" />;
      case 'DollarSign':
        return <DollarSign className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Home':
        return <Home className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'Building':
        return <Building className="w-5 h-5" />;
      case 'Car':
        return <Car className="w-5 h-5" />;
      case 'Utensils':
        return <Utensils className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Wifi':
        return <Wifi className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  const handleHeroKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isHeroDropdownOpen || !heroSearchQuery.trim()) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (heroLiveResults.length > 0) {
        setHeroHighlightedIndex((prev) => (prev + 1) % heroLiveResults.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (heroLiveResults.length > 0) {
        setHeroHighlightedIndex((prev) => (prev <= 0 ? heroLiveResults.length - 1 : prev - 1));
      }
    } else if (e.key === 'Enter') {
      if (heroLiveResults.length > 0) {
        e.preventDefault();
        const target =
          heroHighlightedIndex >= 0 ? heroLiveResults[heroHighlightedIndex] : heroLiveResults[0];
        if (target) {
          handleSelectCalculator(target.calculator);
        }
      }
    } else if (e.key === 'Escape') {
      setIsHeroDropdownOpen(false);
      heroInputRef.current?.blur();
    }
  };

  const staticPageId: StaticPageId | null = ['/about', '/contact', '/privacy', '/terms', '/disclaimer'].includes(currentPath)
    ? (currentPath.replace('/', '') as StaticPageId)
    : null;
  const isHomePage = currentPath === '/';
  const isNotFound = !isHomePage && !staticPageId && !activeCalculator && !selectedCategory;
  const showHeroDropdown = isHeroDropdownOpen && heroSearchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      
      {/* Centralized SEO Metadata, Canonical, Open Graph & JSON-LD */}
      <SeoHead
        currentPath={currentPath}
        activeCalculator={activeCalculator}
        selectedCategory={selectedCategory}
        staticPage={staticPageId}
        isNotFound={isNotFound}
        totalCalculators={allCalculators.length}
      />

      {/* Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelectCalculator={handleSelectCalculator}
        onLogoClick={handleBackToHome}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        hideSearch={isHomePage}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {staticPageId ? (
          <StaticPage
            page={staticPageId}
            onBack={handleBackToHome}
          />
        ) : activeCalculator ? (
          <CalculatorView
            calculator={activeCalculator}
            categoryName={getCategoryName(activeCalculator.categoryId)}
            onBack={handleBackToHome}
            isFavorite={favorites.includes(activeCalculator.id)}
            onToggleFavorite={handleToggleFavorite}
            onSaveHistory={handleSaveHistory}
            onSelectCalculator={handleSelectCalculator}
          />
        ) : selectedCategory ? (
          /* Category View (Lists calculators in the chosen category + Sidebar) */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBackToHome}
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
              />

              <div className="flex-1 w-full space-y-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {getCategoryName(selectedCategory)}
                      </h1>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {categories.find((c) => c.id === selectedCategory)?.description}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 tabular-nums">
                      {categoryCalculators.length} calculators
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {categoryCalculators.map((calc) => {
                    const isFav = favorites.includes(calc.id);
                    return (
                      <div
                        key={calc.id}
                        onClick={() => handleSelectCalculator(calc)}
                        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all cursor-pointer group shadow-sm hover:shadow-md flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h2 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              <a
                                href={getCalculatorSlug(calc)}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleSelectCalculator(calc);
                                }}
                                className="hover:underline focus:outline-none"
                              >
                                {calc.name}
                              </a>
                            </h2>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleToggleFavorite(calc.id);
                              }}
                              className="text-slate-300 dark:text-slate-700 hover:text-amber-500 transition-colors shrink-0"
                            >
                              <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                            </button>
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                            {calc.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          <span>{getCategoryName(calc.categoryId)}</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : isNotFound ? (
          /* Clean 404 Not Found View (prevents soft-404 duplicate content) */
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl max-w-2xl mx-auto my-8 text-center space-y-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              404 Error
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              The calculator or page you requested could not be found. Explore our {allCalculators.length}+ free online calculators or return to the homepage.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBackToHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Browse All Calculators</span>
              </button>
            </div>
          </div>
        ) : (
          /* Home Landing Page */
          <div className="space-y-14 pb-4">
            
            {/* 1) Hero Section */}
            <section className="relative rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white px-5 py-12 sm:px-10 sm:py-16 shadow-xl border border-emerald-700/50">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                  400+ Free Online Calculators
                </h1>
                <p className="text-sm sm:text-base text-emerald-100/90 max-w-xl mx-auto">
                  Instant, accurate calculators for finance, real estate, construction, health, education, and everyday math.
                </p>

                {/* Large Search Bar with Live Dropdown */}
                <div ref={heroSearchRef} className="relative max-w-2xl mx-auto pt-3 text-left">
                  <div className="relative">
                    <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                    <input
                      ref={heroInputRef}
                      type="text"
                      value={heroSearchQuery}
                      onFocus={() => setIsHeroDropdownOpen(true)}
                      onChange={(e) => {
                        setHeroSearchQuery(e.target.value);
                        setIsHeroDropdownOpen(true);
                      }}
                      onKeyDown={handleHeroKeyDown}
                      placeholder="Search any calculator (e.g. math, emi, bmi, marla, percent)..."
                      aria-label="Search all calculators"
                      aria-expanded={showHeroDropdown}
                      aria-autocomplete="list"
                      className="w-full bg-white dark:bg-slate-900 border-2 border-emerald-500/40 focus:border-amber-400 rounded-2xl pl-12 sm:pl-14 pr-20 py-3.5 sm:py-4 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 shadow-lg focus:outline-none transition-all"
                    />
                    {heroSearchQuery && (
                      <button
                        type="button"
                        onClick={() => {
                          setHeroSearchQuery('');
                          setIsHeroDropdownOpen(false);
                          heroInputRef.current?.focus();
                        }}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* Hero Live Results Dropdown */}
                  {showHeroDropdown && (
                    <div
                      role="listbox"
                      className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-40"
                    >
                      {heroLiveResults.length === 0 ? (
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
                          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/70 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                            <span>Matching Calculators</span>
                            <span className="text-emerald-600 dark:text-emerald-400 tabular-nums">
                              {heroLiveResults.length} {heroLiveResults.length === 1 ? 'result' : 'results'}
                            </span>
                          </div>
                          <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/70">
                            {heroLiveResults.map(({ calculator, categoryName }, idx) => {
                              const isHighlighted = idx === heroHighlightedIndex;
                              return (
                                <button
                                  key={calculator.id}
                                  type="button"
                                  role="option"
                                  aria-selected={isHighlighted}
                                  onClick={() => handleSelectCalculator(calculator)}
                                  onMouseEnter={() => setHeroHighlightedIndex(idx)}
                                  className={`w-full text-left px-4 py-3 flex items-center justify-between gap-3 transition-colors ${
                                    isHighlighted
                                      ? 'bg-emerald-50 dark:bg-emerald-950/50'
                                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                                  }`}
                                >
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                                      {calculator.name}
                                    </p>
                                    <span className="inline-block mt-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
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
              </div>
            </section>

            {/* 2) 14 Category Cards Grid */}
            <section className="space-y-5">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Browse by Category
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Select any of our {categories.length} specialized categories to explore its calculators.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectCategory(cat.id);
                    }}
                    className="text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-2xl p-5 transition-all group shadow-sm hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                          {getCategoryIcon(cat.iconName)}
                        </div>
                        <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
                          {cat.calculators.length} calculators
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                        {cat.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3.5 mt-4 border-t border-slate-100 dark:border-slate-800/80 text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      <span>Explore tools</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* 3) Popular Calculators Section (12 Small Cards) */}
            <section className="space-y-5">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Popular Calculators
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Quick access to our most frequently used everyday calculators.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {popularCalculators.map((calc) => {
                  const isFav = favorites.includes(calc.id);
                  return (
                    <div
                      key={calc.id}
                      onClick={() => handleSelectCalculator(calc)}
                      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-xl p-4 transition-all cursor-pointer group shadow-sm hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            <a
                              href={getCalculatorSlug(calc)}
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleSelectCalculator(calc);
                              }}
                              className="hover:underline focus:outline-none"
                            >
                              {calc.name}
                            </a>
                          </h3>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleFavorite(calc.id);
                            }}
                            aria-label={`Favorite ${calc.name}`}
                            className="text-slate-300 dark:text-slate-700 hover:text-amber-500 transition-colors shrink-0"
                          >
                            <Star className={`w-3.5 h-3.5 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                          {calc.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span>{getCategoryName(calc.categoryId)}</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-slate-800 pt-12 pb-24 sm:py-12 mt-14 text-center text-xs text-[#94A3B8]">
        <div className="max-w-7xl mx-auto px-4 sm:pr-16 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5 cursor-pointer group" onClick={handleBackToHome}>
            <BrandLogo className="w-7 h-7" />
            <span className="font-bold text-[#E2E8F0] group-hover:text-emerald-400 transition-colors">CalcVault Pro</span>
            <span className="text-[#94A3B8]">· {allCalculators.length}+ Free Online Calculators Portal</span>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 font-medium">
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/about');
              }}
              className="text-[#E2E8F0] hover:text-emerald-400 active:text-emerald-400 transition-colors"
            >
              About Us
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/contact');
              }}
              className="text-[#E2E8F0] hover:text-emerald-400 active:text-emerald-400 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/privacy');
              }}
              className="text-[#E2E8F0] hover:text-emerald-400 active:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
              <a
                href="/terms"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/terms');
                }}
                className="text-[#E2E8F0] hover:text-emerald-400 active:text-emerald-400 transition-colors"
              >
                Terms &amp; Conditions
              </a>
            <a
              href="/disclaimer"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/disclaimer');
              }}
              className="text-[#E2E8F0] hover:text-emerald-400 active:text-emerald-400 transition-colors"
            >
              Disclaimer
            </a>
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/60 text-[#E2E8F0] hover:text-emerald-400 active:text-emerald-400 transition-colors"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-emerald-400" /> : <Moon className="w-3.5 h-3.5 text-emerald-400" />}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </nav>

          <p className="text-[#94A3B8]">© {new Date().getFullYear()} CalcVault Pro · By Naseeb. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        title="Back to top"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 shadow-lg shadow-emerald-600/25 dark:shadow-emerald-950/50 border border-emerald-500/30 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4 stroke-[2.5]" />
      </button>

      {/* Modals */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favoriteIds={favorites}
        allCalculators={allCalculators}
        onSelectCalculator={(calc) => {
          setIsFavoritesOpen(false);
          handleSelectCalculator(calc);
        }}
        onRemoveFavorite={handleToggleFavorite}
      />

      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onClearHistory={() => setHistory([])}
        allCalculators={allCalculators}
        onSelectCalculator={(calc) => {
          setIsHistoryOpen(false);
          handleSelectCalculator(calc);
        }}
      />

    </div>
  );
}
