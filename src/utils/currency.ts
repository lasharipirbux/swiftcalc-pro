export type CurrencyCode = 'USD' | 'PKR' | 'USDT' | 'EUR' | 'GBP' | 'INR' | 'AED' | 'SAR';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  symbolPrefix: boolean; // true for $, £, €, ₹ (no space before digits); false for PKR, USDT, AED, SAR (space before digits)
}

export const CURRENCIES: CurrencyConfig[] = [
  { code: 'USD', symbol: '$', symbolPrefix: true },
  { code: 'PKR', symbol: 'PKR', symbolPrefix: false },
  { code: 'USDT', symbol: 'USDT', symbolPrefix: false },
  { code: 'EUR', symbol: '€', symbolPrefix: true },
  { code: 'GBP', symbol: '£', symbolPrefix: true },
  { code: 'INR', symbol: '₹', symbolPrefix: true },
  { code: 'AED', symbol: 'AED', symbolPrefix: false },
  { code: 'SAR', symbol: 'SAR', symbolPrefix: false },
];

export const CURRENCY_MAP: Record<CurrencyCode, CurrencyConfig> = {
  USD: CURRENCIES[0],
  PKR: CURRENCIES[1],
  USDT: CURRENCIES[2],
  EUR: CURRENCIES[3],
  GBP: CURRENCIES[4],
  INR: CURRENCIES[5],
  AED: CURRENCIES[6],
  SAR: CURRENCIES[7],
};

export const CURRENCY_STORAGE_KEY = 'calcnaseeb_currency';
export const CURRENCY_EXPLICIT_KEY = 'calcnaseeb_currency_user_selected';

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

export function isValidCurrency(value: unknown): value is CurrencyCode {
  return typeof value === 'string' && value in CURRENCY_MAP;
}

export function getInitialCurrency(): CurrencyCode {
  try {
    const userSelected = localStorage.getItem(CURRENCY_EXPLICIT_KEY) === 'true';
    if (userSelected) {
      const saved = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (isValidCurrency(saved)) {
        return saved;
      }
    }
  } catch {
    // Ignore storage access failures
  }
  return 'USD';
}

export function saveCurrencyPreference(currency: CurrencyCode): void {
  try {
    localStorage.setItem(CURRENCY_STORAGE_KEY, currency);
    localStorage.setItem(CURRENCY_EXPLICIT_KEY, 'true');
  } catch {
    // Ignore storage write failures
  }
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

  // Replace PKR or USD amounts like "PKR 120,000", "PKR -500", "USD 1,200"
  out = out.replace(/\b(?:PKR|USD)\s+(-?\d[\d,]*(?:\.\d+)?)/g, (_m, num: string) => {
    const isNeg = num.startsWith('-');
    const absNum = isNeg ? num.slice(1) : num;
    return cfg.symbolPrefix
      ? `${isNeg ? '-' : ''}${cfg.symbol}${absNum}`
      : `${isNeg ? '-' : ''}${cfg.code} ${absNum}`;
  });

  // Replace "($)" in input labels
  out = out.replace(/\(\$\)/g, `(${cfg.symbol})`);

  // Replace contextual phrases ("Amount in PKR", "per 1 PKR", "1 PKR =") with code, and remaining standalone codes with symbol
  out = out.replace(
    /\b(in|per\s+1)\s+(?:PKR|USD)\b|\b1\s+(?:PKR|USD)\s*=|\b(?:PKR|USD)\b/gi,
    (match, prefix?: string) => {
      if (prefix) return `${prefix} ${cfg.code}`;
      if (/^1\s+/i.test(match)) return `1 ${cfg.code} =`;
      return cfg.symbol;
    }
  );

  return out;
}
