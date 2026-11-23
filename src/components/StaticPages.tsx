import React from 'react';
import { ArrowLeft, Shield, Mail, FileText, Info, AlertTriangle } from 'lucide-react';

interface StaticPageProps {
  page: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';
  onBack: () => void;
}

export const StaticPage: React.FC<StaticPageProps> = ({ page, onBack }) => {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl max-w-4xl mx-auto my-6">
      
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {page === 'about' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">About CalcVault Pro</h1>
              <p className="text-sm text-slate-500">The Ultimate Multi-Category Calculator Portal</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              CalcVault Pro is a comprehensive, lightning-fast web calculator portal designed for professionals, students, engineers, business owners, and everyday users. Our platform offers 400+ specialized calculators spanning Math, Finance, Business, Construction, Health &amp; Fitness, Date &amp; Time, Education, Electrical, Automotive, Internet &amp; Technology, Real Estate, Statistics, and Cooking.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Our Mission</h2>
            <p>
              We believe complex calculations should be instantaneous, transparent, and accessible to everyone without clutter or registration barriers. Every calculator on CalcVault Pro features clear step-by-step formulas, intuitive inputs, and instant client-side results optimized for both desktop and mobile devices.
            </p>
          </div>
        </div>
      )}

      {page === 'contact' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Contact Us</h1>
              <p className="text-sm text-slate-500">We would love to hear from you</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              Have a suggestion for a new calculator, feedback on an existing tool, or a partnership inquiry? Reach out to our team directly.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3">
              <p className="font-semibold text-slate-900 dark:text-white">Email Support:</p>
              <p className="text-emerald-600 dark:text-emerald-400 font-mono">Contact email coming soon</p>
              <p className="text-xs text-slate-500">We typically respond within 24–48 business hours.</p>
            </div>
          </div>
        </div>
      )}

      {page === 'privacy' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
              <p className="text-sm text-slate-500">Last updated: November 2026</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              At CalcVault Pro, your privacy is our top priority. All calculations and sensitive inputs (such as passwords, financial figures, or health metrics) are executed entirely client-side within your browser. We never store, transmit, or share your personal calculation inputs on external servers.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Local Storage</h2>
            <p>
              We use browser localStorage solely to save your favorite calculators, theme preference, and recent calculation history locally on your device for your convenience. You can clear this data at any time through your browser settings.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Third-Party Services &amp; Advertising</h2>
            <p>
              We may display third-party advertisements (such as Google AdSense) to keep all 400+ calculators free. Advertising partners may use cookies or similar technologies to serve relevant ads in accordance with their own privacy policies and applicable data protection regulations.
            </p>
          </div>
        </div>
      )}

      {page === 'terms' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
              <p className="text-sm text-slate-500">Last updated: November 2026</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              By accessing and using CalcVault Pro, you agree to comply with and be bound by these Terms of Service.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Acceptable Use</h2>
            <p>
              Our calculators are provided free of charge for personal, academic, and general informational estimation. You agree not to scrape, overload, or misuse the service in a way that disrupts availability for other users.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Limitation of Liability</h2>
            <p>
              Calculators provided on CalcVault Pro are offered &ldquo;as is&rdquo; for estimation, informational, and educational purposes only. Financial, construction, electrical, engineering, and health calculators should always be verified with licensed professionals before making critical real-world decisions.
            </p>
          </div>
        </div>
      )}

      {page === 'disclaimer' && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 dark:bg-amber-950/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Disclaimer</h1>
              <p className="text-sm text-slate-500">Important Information About Calculator Estimates</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              All calculators, formulas, worked examples, and guides published on CalcVault Pro are intended strictly for general informational, educational, and estimation purposes. While we strive for mathematical accuracy across all 400+ tools, we make no warranties regarding completeness, reliability, or suitability for any specific legal, financial, medical, or engineering purpose.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Financial &amp; Tax Disclaimer</h2>
            <p>
              Loan, mortgage, EMI, investment, compound interest, salary, tax, and real estate calculators provide approximate estimates based on standard formulas. Actual bank schedules, fees, compounding rules, and regional tax regulations vary. Always consult a qualified financial advisor, lender, or certified accountant before making financial decisions.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Health &amp; Medical Disclaimer</h2>
            <p>
              BMI, BMR, calorie, macro, body fat, hydration, pregnancy due date, and other health calculators are for general wellness education only and do not constitute medical advice, diagnosis, or treatment. Always consult a licensed physician or healthcare professional regarding any medical condition or diet plan.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Construction, Electrical &amp; Engineering Disclaimer</h2>
            <p>
              Material estimates (concrete, bricks, steel, paint, tiles), electrical load calculations, and engineering formulas are rough planning approximations and do not replace local building codes or site-specific structural and electrical inspections. Confirm critical project quantities and safety margins with a licensed engineer, contractor, or electrician.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
