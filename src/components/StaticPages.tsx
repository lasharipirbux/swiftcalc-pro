import React, { useState } from 'react';
import { ArrowLeft, Shield, Mail, FileText, Info, AlertTriangle, Send, CheckCircle2 } from 'lucide-react';
import { SITE_NAME, SUPPORT_EMAIL } from '../config/site';

interface StaticPageProps {
  page: 'about' | 'contact' | 'privacy' | 'terms' | 'disclaimer';
  onBack: () => void;
}

export const StaticPage: React.FC<StaticPageProps> = ({ page, onBack }) => {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactTopic, setContactTopic] = useState('General Inquiry');
  const [contactMessage, setContactMessage] = useState('');
  const [contactError, setContactError] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactError('');

    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactError('Please fill in your name, email address, and message before submitting.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail.trim())) {
      setContactError('Please enter a valid email address.');
      return;
    }

    setContactSubmitted(true);
  };

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
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">About {SITE_NAME}</h1>
              <p className="text-sm text-slate-500">The Multi-Category Online Calculator Portal</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              {SITE_NAME} is a comprehensive, fast online calculator portal built for students, engineers, financial planners, homeowners, business owners, and everyday users. Our platform provides 400+ specialized calculators across 14 categories including Math, Finance &amp; Money, Business &amp; Profit, Construction &amp; Civil, Health &amp; Fitness, Date &amp; Time, Electrical &amp; Physics, Education, Engineering, Real Estate, Automotive, Cooking, Statistics, and Internet &amp; Tech.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Our Mission</h2>
            <p>
              We believe everyday and technical calculations should be fast, transparent, and accessible without paywalls, cluttered interfaces, or mandatory account signups. Every calculator includes structured step-by-step usage instructions, clear formulas, worked examples, and client-side calculation speed across desktop and mobile devices.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Editorial &amp; Accuracy Standards</h2>
            <p>
              Each calculator on {SITE_NAME} uses established mathematical, financial, engineering, and statistical formulas executed locally in your browser with automatic input sanitization to prevent broken calculations or division-by-zero errors.
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
              <p className="text-sm text-slate-500">Suggestions, bug reports, and support inquiries</p>
            </div>
          </div>

          <div className="text-sm text-slate-600 dark:text-slate-300 space-y-6">
            <p>
              Have a suggestion for a new calculator, feedback on a formula, a bug report, or a business inquiry? Reach out using our direct email address or the message form below.
            </p>

            {/* Working Direct Email Card */}
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Direct Email Support
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline font-mono break-all"
                >
                  {SUPPORT_EMAIL}
                </a>
                <a
                  href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`${SITE_NAME} Inquiry`)}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm shrink-0"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Us</span>
                </a>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                We usually reply within 1-2 days.
              </p>
            </div>

            {/* Clean Contact Form Layout */}
            {contactSubmitted ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h2 className="text-base font-bold text-slate-900 dark:text-white">
                      Message Prepared Successfully
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Thank you, <span className="font-semibold">{contactName}</span>. Your {contactTopic.toLowerCase()} message has been validated. You can send it directly via your email client below or reset the form.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`[${SITE_NAME}] ${contactTopic} from ${contactName}`)}&body=${encodeURIComponent(`Name: ${contactName}\nEmail: ${contactEmail}\n\n${contactMessage}`)}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email App</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setContactSubmitted(false);
                      setContactName('');
                      setContactEmail('');
                      setContactMessage('');
                    }}
                    className="px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleContactSubmit}
                noValidate
                className="bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4"
              >
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Send Us a Message
                </h2>

                {contactError && (
                  <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-xs font-medium text-red-700 dark:text-red-300">
                    {contactError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Your full name"
                      required
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-topic" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <select
                    id="contact-topic"
                    value={contactTopic}
                    onChange={(e) => setContactTopic(e.target.value)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Suggest a New Calculator">Suggest a New Calculator</option>
                    <option value="Report a Formula or Bug">Report a Formula or Bug</option>
                    <option value="Advertising or Partnership">Advertising or Partnership</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Write your message, feedback, or calculator request..."
                    required
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
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
              At {SITE_NAME}, we respect your privacy. All calculations across our 400+ calculators—including financial, real estate, health, password, and mathematical inputs—execute entirely client-side inside your web browser. We do not collect, store, or transmit your calculator input values to external servers.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Browser Local Storage</h2>
            <p>
              {SITE_NAME} uses your browser&apos;s <code className="text-xs font-mono">localStorage</code> solely to save your favorite calculators, theme preference (light/dark mode), and recent calculation history locally on your own device. You may clear this data anytime via your browser settings or the History clear button.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Google AdSense &amp; Third-Party Cookies (DART Cookie Disclosure)</h2>
            <p>
              We use Google AdSense to display advertisements and keep all calculators free for everyone. Google, as a third-party vendor, uses cookies to serve ads on {SITE_NAME} based on your prior visits to this website and other websites on the Internet.
            </p>
            <p>
              Specifically, Google&apos;s use of advertising cookies (including the DoubleClick DART cookie) enables Google and its partners to serve personalized advertisements to users based on their browsing visits. Third-party ad networks may also use cookies, JavaScript, or web beacons to measure advertising effectiveness and personalize ad content.
            </p>
            <p>
              Users may opt out of personalized advertising at any time by visiting{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 underline"
              >
                Google Ads Settings
              </a>
              , or opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 underline"
              >
                www.aboutads.info/choices
              </a>
              . You may also disable cookies directly in your web browser settings.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Log Files &amp; Contact Information</h2>
            <p>
              Like standard websites hosted on global edge networks, basic non-personally-identifiable server access logs (such as request timestamps, browser type, and referring pages) may be processed strictly for security, performance, and abuse prevention. If you contact us at{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-emerald-600 dark:text-emerald-400 underline font-mono">
                {SUPPORT_EMAIL}
              </a>
              , your email address is used solely to reply to your inquiry.
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
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Terms &amp; Conditions</h1>
              <p className="text-sm text-slate-500">Last updated: November 2026</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              By accessing and using {SITE_NAME}, you agree to be bound by these Terms &amp; Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, please discontinue use of the website.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Permitted Use</h2>
            <p>
              All calculators, guides, formulas, and converters on {SITE_NAME} are provided free of charge for personal, educational, and general informational estimation. You agree not to scrape, mirror in bulk, automate excessive requests, or interfere with normal site availability.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Accuracy &amp; Availability</h2>
            <p>
              While we carefully review and test our formulas across all 400+ calculators, tools are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind. We reserve the right to update, modify, or expand calculators and site content at any time without prior notice.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Limitation of Liability</h2>
            <p>
              Under no circumstances shall {SITE_NAME} or its operators be liable for any direct, indirect, incidental, or consequential damages arising from reliance on any calculation output, estimate, or guide published on this site. Always verify important financial, health, legal, or structural decisions with qualified professionals.
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
              <p className="text-sm text-slate-500">Important Notice Regarding All Calculator Estimates</p>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-sm text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              All financial, health, and mathematical calculators, along with construction, electrical, real estate, engineering, and conversion tools on {SITE_NAME}, are provided strictly for general informational, educational, and preliminary estimation purposes only. They do not constitute professional financial, tax, medical, legal, engineering, or academic certification advice.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Financial, Tax &amp; Investment Disclaimer</h2>
            <p>
              Loan, mortgage, EMI, compound interest, ROI, salary, tax, and real estate calculators rely on standard mathematical formulas and user-supplied assumptions. Actual lender rates, bank fees, compounding intervals, and regional tax rules may differ. Consult a qualified financial advisor, lender, or certified public accountant before making financial commitments.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Health &amp; Wellness Disclaimer</h2>
            <p>
              BMI, BMR, calorie, macro, body fat, hydration, heart-rate, and pregnancy calculators are designed for general fitness and educational awareness only and are not a substitute for professional medical diagnosis, advice, or treatment. Always consult a licensed physician regarding health or dietary decisions.
            </p>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white mt-6">Mathematical, Construction &amp; Engineering Disclaimer</h2>
            <p>
              Mathematical calculators, statistical estimators, material estimators (concrete, steel, bricks, paint, tiles), and electrical load tools provide approximate reference outputs subject to rounding tolerances. Always double-check critical homework, laboratory work, building-code compliance, and structural safety factors with a qualified instructor, licensed contractor, or engineer.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
