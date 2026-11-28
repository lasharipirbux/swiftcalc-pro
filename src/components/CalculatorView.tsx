import React, { useState, useEffect, useMemo } from 'react';
import { CalculatorItem, CalculationHistoryItem } from '../types';
import { getAllCalculators } from '../data/calculatorsData';
import { getCalculatorSlug } from '../utils/slugs';
import { formatCalculatorResult } from '../utils/formatResult';
import { safeCalculate } from '../utils/safeCalculate';
import { getCalculatorSeoContent } from '../utils/seoBuilder';
import { Star, Copy, Check, RotateCcw, ArrowLeft, HelpCircle, ChevronRight, Layers } from 'lucide-react';

interface CalculatorViewProps {
  calculator: CalculatorItem;
  categoryName: string;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: (calcId: string) => void;
  onSaveHistory: (item: Omit<CalculationHistoryItem, 'id' | 'timestamp'>) => void;
  onSelectCalculator?: (calc: CalculatorItem) => void;
}

export const CalculatorView: React.FC<CalculatorViewProps> = ({
  calculator,
  categoryName,
  onBack,
  isFavorite,
  onToggleFavorite,
  onSaveHistory,
  onSelectCalculator,
}) => {
  const getDefaults = () => {
    const defaults: Record<string, any> = {};
    calculator.inputs.forEach((inp) => {
      defaults[inp.id] = inp.defaultValue;
    });
    return defaults;
  };

  const [inputValues, setInputValues] = useState<Record<string, any>>(getDefaults);
  const [copied, setCopied] = useState(false);

  // Sync default input values when switching calculators
  useEffect(() => {
    setInputValues(getDefaults());
  }, [calculator]);

  const handleChange = (id: string, value: any) => {
    setInputValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    const defaults: Record<string, any> = {};
    calculator.inputs.forEach((inp) => {
      defaults[inp.id] = inp.defaultValue;
    });
    setInputValues(defaults);
  };

  // Perform safe calculation (never returns NaN, Infinity, null, or Invalid Date)
  const calcResult = safeCalculate(calculator, inputValues);
  const formattedResult = calcResult.isInvalid
    ? String(calcResult.result)
    : formatCalculatorResult(calcResult.result, calculator.id);
  const formattedSecondaryResult =
    calcResult.secondaryResult !== undefined
      ? calcResult.isInvalid
        ? String(calcResult.secondaryResult)
        : formatCalculatorResult(calcResult.secondaryResult, calculator.id)
      : undefined;

  // Automatically record to history on calculation change
  useEffect(() => {
    if (
      !calcResult.isInvalid &&
      calcResult.result !== undefined &&
      calcResult.result !== 'Invalid Expression' &&
      calcResult.result !== 'Error in arithmetic syntax'
    ) {
      onSaveHistory({
        calculatorId: calculator.id,
        calculatorName: calculator.name,
        categoryName,
        inputs: { ...inputValues },
        result: formattedResult,
      });
    }
  }, [inputValues]);

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const seoContent = useMemo(
    () => getCalculatorSeoContent(calculator, categoryName),
    [calculator, categoryName]
  );

  // Get 6 related calculators from the same category
  const relatedCalculators = useMemo(() => {
    const all = getAllCalculators();
    return all
      .filter((c) => c.categoryId === calculator.categoryId && c.id !== calculator.id)
      .slice(0, 6);
  }, [calculator]);

  return (
    <div className="space-y-8">
      
      {/* Breadcrumbs (Home > Category > Calculator) */}
      <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-500 dark:text-slate-400">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <button onClick={onBack} className="hover:text-emerald-600 transition-colors">Home</button>
          </li>
          <li className="text-slate-300 dark:text-slate-700">/</li>
          <li>
            <span className="text-slate-600 dark:text-slate-300">{categoryName}</span>
          </li>
          <li className="text-slate-300 dark:text-slate-700">/</li>
          <li className="text-emerald-600 dark:text-emerald-400 font-semibold truncate max-w-[220px]" aria-current="page">
            {calculator.name}
          </li>
        </ol>
      </nav>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Calculators</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
              {categoryName}
            </span>
            <button
              onClick={() => onToggleFavorite(calculator.id)}
              className={`p-2.5 rounded-xl border transition-all ${
                isFavorite
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 text-amber-500'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400 hover:text-amber-500'
              }`}
              title={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              aria-label={isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            >
              <Star className={`w-5 h-5 ${isFavorite ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Calculator Header (Single H1 per page) */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            {calculator.name}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            {calculator.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Form Column */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 space-y-5">
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">
                Calculator Inputs
              </h2>

              {calculator.inputs.map((inp) => (
                <div key={inp.id} className="space-y-1.5">
                  <label htmlFor={`input-${inp.id}`} className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {inp.label}
                  </label>
                  
                  {inp.type === 'select' ? (
                    <select
                      id={`input-${inp.id}`}
                      value={inputValues[inp.id] ?? inp.defaultValue}
                      onChange={(e) => handleChange(inp.id, e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      {inp.options?.map((opt) => (
                        <option key={String(opt.value)} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="relative">
                      <input
                        id={`input-${inp.id}`}
                        type={inp.type === 'number' ? 'number' : 'text'}
                        value={inputValues[inp.id] !== undefined ? inputValues[inp.id] : inp.defaultValue}
                        onChange={(e) => {
                          if (inp.type === 'number') {
                            const raw = e.target.value;
                            handleChange(inp.id, raw === '' ? '' : parseFloat(raw));
                          } else {
                            handleChange(inp.id, e.target.value);
                          }
                        }}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white font-mono tabular-nums focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
                      />
                      {inp.unit && (
                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                          {inp.unit}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results & Live Formula Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-emerald-700/50 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-emerald-600/20 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block mb-1">
                Calculated Result
              </span>

              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono tabular-nums text-amber-300 mb-2 break-all">
                {formattedResult}
              </div>

              {(formattedSecondaryResult || calcResult.note) && (
                <div className="mb-6 pb-4 border-b border-emerald-700/60 space-y-1.5">
                  {formattedSecondaryResult && (
                    formattedSecondaryResult.includes('\n') ? (
                      formattedSecondaryResult
                        .split('\n')
                        .map((line, idx) =>
                          idx === 0 ? (
                            <p key={idx} className="text-base sm:text-lg font-bold text-white">
                              {line}
                            </p>
                          ) : (
                            <p key={idx} className="text-xs text-emerald-100/80 font-medium">
                              {line}
                            </p>
                          )
                        )
                    ) : (
                      <p className="text-sm text-emerald-100/90 font-medium">
                        {formattedSecondaryResult}
                      </p>
                    )
                  )}
                  {calcResult.note && (
                    <p className="text-xs text-emerald-200/80">
                      {calcResult.note}
                    </p>
                  )}
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold rounded-xl text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied Result!' : 'Copy Result'}</span>
                </button>
              </div>
            </div>

            {/* Live Formula & Breakdown Box */}
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <h2 className="flex items-center gap-2 text-slate-900 dark:text-white font-semibold text-sm">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Live Formula &amp; Steps</span>
              </h2>

              {calcResult.formula && (
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                  {calcResult.formula}
                </div>
              )}

              {calcResult.steps && calcResult.steps.length > 0 && (
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {calcResult.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>

        </div>

        {/* Structured Educational Content */}
        {calculator.categoryId === 'datetime' ? (
          <article className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-7 text-left text-slate-700 dark:text-slate-300">
            {/* 1. Short Intro (2-3 sentences) */}
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {seoContent.intro}
            </p>

            {/* 2. Formula Explained */}
            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Formula Explained
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {seoContent.formulaExplanation}
              </p>
            </section>

            {/* 3. Practical Example */}
            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Practical Example
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {seoContent.practicalExample}
                </p>
              </div>
            </section>

            {/* 4. How to Use This Calculator (3-4 steps) */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                How to Use This Calculator
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm leading-relaxed pl-5 list-decimal text-slate-600 dark:text-slate-300">
                {seoContent.howToUseSteps.map((step, idx) => (
                  <li key={idx} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            {/* 5. Frequently Asked Questions (3-4 FAQs) */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                {seoContent.faqs.map((faq, idx) => (
                  <div key={idx} className="h-full flex flex-col justify-start text-left bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2 text-left">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 text-left">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        ) : (
          <article className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-7 text-left text-slate-700 dark:text-slate-300">
            
            {/* Section 1: How to Use This Calculator */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                How to Use This Calculator
              </h2>
              <ol className="space-y-2 text-xs sm:text-sm leading-relaxed pl-5 list-decimal text-slate-600 dark:text-slate-300">
                {seoContent.howToUseSteps.map((step, idx) => (
                  <li key={idx} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 2: Formula & Explanation */}
            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Formula &amp; Explanation
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {seoContent.formulaExplanation}
              </p>
            </section>

            {/* Section 3: Practical Example */}
            <section className="space-y-2.5">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Practical Example
              </h2>
              <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5">
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {seoContent.practicalExample}
                </p>
              </div>
            </section>

            {/* Section 4: Frequently Asked Questions (3-4 FAQs) */}
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                {seoContent.faqs.map((faq, idx) => (
                  <div key={idx} className="h-full flex flex-col justify-start text-left bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mb-2 text-left">
                      Q: {faq.q}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 text-left">
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {seoContent.medicalDisclaimer && (
              <div className="py-2.5 px-4 bg-amber-50/70 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/50 text-xs font-medium text-amber-800 dark:text-amber-300 text-left">
                {seoContent.medicalDisclaimer}
              </div>
            )}
          </article>
        )}

        {/* Related Calculators Section (6 crawlable internal links from the same category) */}
        {relatedCalculators.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>
                {calculator.categoryId === 'datetime'
                  ? 'Related Calculators'
                  : `Related ${categoryName} Calculators`}
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedCalculators.map((rel) => {
                const relSlug = getCalculatorSlug(rel);
                return (
                  <a
                    key={rel.id}
                    href={relSlug}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onSelectCalculator) {
                        onSelectCalculator(rel);
                      } else {
                        window.history.pushState({}, '', relSlug);
                        window.dispatchEvent(new PopStateEvent('popstate'));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="p-3.5 bg-slate-50 dark:bg-slate-800/40 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 rounded-2xl cursor-pointer transition-all group flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate">
                        {rel.name}
                      </h3>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {rel.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
