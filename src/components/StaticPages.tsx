import React from 'react';
import { ArrowLeft, Shield, Mail, FileText, Info } from 'lucide-react';

interface StaticPageProps {
  page: 'about' | 'contact' | 'privacy' | 'terms';
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
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">About SwiftCalc Pro</h1>
              <p className="text-sm text-slate-500">The Ultimate Multi-Category Calculator Portal</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              SwiftCalc Pro is a comprehensive, lightning-fast web calculator portal designed for professionals, students, engineers, business owners, and everyday users. Our platform offers a vast suite of specialized calculators spanning Math, Finance, Business, Construction, Health & Fitness, Date & Time, Education, Electrical, Automotive, Internet & Technology, and Cooking.
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Our Mission</h3>
            <p>
              We believe complex calculations should be instantaneous, transparent, and accessible to everyone without clutter or intrusive ads. Every calculator on SwiftCalc Pro features clear step-by-step formulas, intuitive inputs, and instant results optimized for both desktop and mobile devices.
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
              At SwiftCalc Pro, your privacy is our top priority. All calculations and sensitive inputs (such as passwords, financial figures, or health metrics) are executed entirely client-side within your browser. We never store, transmit, or share your personal calculation inputs on external servers.
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Local Storage</h3>
            <p>
              We use browser localStorage solely to save your favorite calculators and recent calculation history locally on your device for your convenience. You can clear this data at any time through your browser settings.
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
              By accessing and using SwiftCalc Pro, you agree to comply with and be bound by these Terms of Service.
            </p>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Disclaimer</h3>
            <p>
              Calculators provided on SwiftCalc Pro are for estimation, informational, and educational purposes only. Financial, construction, electrical, and health calculators should be verified with licensed professionals before making critical real-world decisions.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
