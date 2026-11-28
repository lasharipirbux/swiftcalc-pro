export type CurrencyCode = 'PKR' | 'USD' | 'GBP' | 'EUR' | 'INR' | 'AED' | 'SAR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  symbolPrefix: boolean; // true for $, £, €, ₹ (no space before digits); false for PKR, AED, SAR (space before digits)
}

export const CURRENCIES: CurrencyConfig[] = [
  { code: 'PKR', symbol: 'PKR', symbolPrefix: false },
  { code: 'USD', symbol: '$', symbolPrefix: true },
  { code: 'GBP', symbol: '£', symbolPrefix: true },
  { code: 'EUR', symbol: '€', symbolPrefix: true },
  { code: 'INR', symbol: '₹', symbolPrefix: true },
  { code: 'AED', symbol: 'AED', symbolPrefix: false },
  { code: 'SAR', symbol: 'SAR', symbolPrefix: false },
];

export const CURRENCY_MAP: Record<CurrencyCode, CurrencyConfig> = {
  PKR: CURRENCIES[0],
  USD: CURRENCIES[1],
  GBP: CURRENCIES[2],
  EUR: CURRENCIES[3],
  INR: CURRENCIES[4],
  AED: CURRENCIES[5],
  SAR: CURRENCIES[6],
};

export const CURRENCY_STORAGE_KEY = 'calcnaseeb_currency';

// Calculators whose rules, tax slabs, fine tiers, note denominations, or land/weight units are Pakistan-specific
export const PAKISTAN_SPECIFIC_CALCULATOR_IDS = new Set<string>([
  'finance-fbr-tax',
  'finance-gold-val',
  'finance-cash-counter',
  'constr-marla-to-sqft',
  'constr-sqft-to-marla',
  'constr-house-cost-pk',
  'plot-area-converter',
  'plot-price-calc',
  'marla-to-sqft-price',
  're-fbr-property-tax',
  're-stamp-duty',
  're-cgt-property',
  'auto-token-tax',
  'auto-motorway-toll',
  'auto-speeding-fine',
]);

export function isPakistanSpecificCalculator(calculatorId: string): boolean {
  return PAKISTAN_SPECIFIC_CALCULATOR_IDS.has(calculatorId);
}

const EU_REGION_CODES = new Set([
  'AT', 'BE', 'CY', 'DE', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR',
  'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PT', 'SI', 'SK',
  'BG', 'CZ', 'DK', 'HU', 'PL', 'RO', 'SE', 'EU',
]);

const EU_LANGUAGE_CODES = new Set([
  'bg', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr', 'ga',
  'hr', 'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro',
  'sk', 'sl', 'sv',
]);

export function isValidCurrency(value: unknown): value is CurrencyCode {
  return typeof value === 'string' && value in CURRENCY_MAP;
}

export function detectDefaultCurrency(): CurrencyCode {
  if (typeof navigator === 'undefined') return 'USD';

  const locales: string[] = [];
  if (Array.isArray(navigator.languages)) {
    locales.push(...navigator.languages);
  }
  if (navigator.language) {
    locales.push(navigator.language);
  }

  for (const raw of locales) {
    if (!raw) continue;
    const normalized = raw.trim().replace('_', '-');
    const parts = normalized.split('-');
    const lang = parts[0]?.toLowerCase() || '';
    // Find 2-letter region subtag (skip 4-letter script tags like Latn/Arab)
    const region = parts.slice(1).find((p) => /^[a-zA-Z]{2}$/.test(p))?.toUpperCase();

    if (region === 'PK') return 'PKR';
    if (region === 'US') return 'USD';
    if (region === 'GB' || region === 'UK') return 'GBP';
    if (region === 'IN') return 'INR';
    if (region === 'AE') return 'AED';
    if (region === 'SA') return 'SAR';
    if (region && EU_REGION_CODES.has(region)) return 'EUR';

    // Handle language-only locales (avoid mapping pt-BR or es-MX/es-419 to EUR)
    if (!region || region === '419') {
      if (lang === 'ur') return 'PKR';
      if (lang === 'hi') return 'INR';
      if (EU_LANGUAGE_CODES.has(lang) && region !== '419') return 'EUR';
    }
  }

  return 'USD';
}

export function getInitialCurrency(): CurrencyCode {
  try {
    const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
    if (isValidCurrency(saved)) {
      return saved;
    }
  } catch {
    // Ignore storage access failures
  }
  const detected = detectDefaultCurrency();
  try {
    localStorage.setItem(CURRENCY_STORAGE_KEY, detected);
  } catch {
    // Ignore storage write failures
  }
  return detected;
}

export function localizeCurrencyText(
  text: string,
  currency: CurrencyCode,
  calculatorId?: string
): string {
  if (!text) return text;
  if (calculatorId && isPakistanSpecificCalculator(calculatorId)) {
    return text;
  }

  const cfg = CURRENCY_MAP[currency] || CURRENCY_MAP.USD;
  let out = text;

  // Replace combined currency label like "(USD/PKR)" with "(<CODE>)"
  out = out.replace(/\(USD\/PKR\)/gi, `(${cfg.code})`);

  // Replace dollar amounts like "$1,200.50" or "$-120"
  out = out.replace(/\$(\s*)(-?\d[\d,]*(?:\.\d+)?)/g, (_m, _sp, num: string) => {
    const isNeg = num.startsWith('-');
    const absNum = isNeg ? num.slice(1) : num;
    return cfg.symbolPrefix
      ? `${isNeg ? '-' : ''}${cfg.symbol}${absNum}`
      : `${isNeg ? '-' : ''}${cfg.code} ${absNum}`;
  });

  // Replace PKR amounts like "PKR 120,000" or "PKR -500"
  out = out.replace(/\bPKR\s+(-?\d[\d,]*(?:\.\d+)?)/g, (_m, num: string) => {
    const isNeg = num.startsWith('-');
    const absNum = isNeg ? num.slice(1) : num;
    return cfg.symbolPrefix
      ? `${isNeg ? '-' : ''}${cfg.symbol}${absNum}`
      : `${isNeg ? '-' : ''}${cfg.code} ${absNum}`;
  });

  // Replace "($)" in input labels
  out = out.replace(/\(\$\)/g, `(${cfg.symbol})`);

  // Replace contextual phrases like "Amount in PKR", "per 1 PKR", "1 PKR =" with code
  out = out.replace(/\b(in|per\s+1)\s+PKR\b/gi, `$1 ${cfg.code}`);
  out = out.replace(/\b1\s+PKR\s*=/gi, `1 ${cfg.code} =`);

  // Replace any remaining standalone "PKR" in labels/units (e.g., "(PKR)", "PKR / kWh", "PKR - S")
  out = out.replace(/\bPKR\b/g, cfg.symbol);

  return out;
}
