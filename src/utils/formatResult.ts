const SKIP_COMMA_FORMAT_IDS = new Set<string>([
  'math-base-conv',
  'dt-leap-year',
  'dt-add-sub-days',
  'dt-add-business-days',
  'dt-unix-timestamp',
  'dt-unix-epoch-convert',
  'dt-quarter-year',
  'dt-event-countdown',
  'health-due-date',
  'tech-rgb-hex',
  'tech-ip-subnet',
  'tech-password-gen',
  'tech-uuid-gen',
]);

// Matches protected non-grouped tokens first (returned unchanged), then 4+ digit numbers to format.
const PROTECTED_OR_NUMBER_REGEX =
  /0[bBoOxX][0-9a-fA-F]+|#[0-9a-fA-F]{3,8}|\b\d{1,3}(?:\.\d{1,3}){3}\b|\b\d{4}-\d{2}-\d{2}\b|\b\d{2}:\d{2}:\d{2}\b|\b\d{3,5}[×x]\d{3,5}\b|\b(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{1,2},?\s+\d{4}\b|\b\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s+\d{4}\b|\bin\s+(?:19|20)\d{2}\b|\((?:19|20)\d{2}\)|\b\d+(?:\.\d+)?[eE][+-]?\d+\b|\b\d{1,3}(?:,\d{3})+(?:\.\d+)?\b|(?<![.,\w])(\d{4,})(\.\d+)?(?![,\d])/g;

function addCommasToInteger(intPart: string): string {
  return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function formatCalculatorResult(
  value: string | number,
  calculatorId?: string
): string {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) return String(value);
    const str = String(value);
    if (/[eE]/.test(str)) return str;
    const isNeg = str.startsWith('-');
    const unsigned = isNeg ? str.slice(1) : str;
    const [intPart, decPart] = unsigned.split('.');
    const formattedInt = intPart.length >= 4 ? addCommasToInteger(intPart) : intPart;
    return `${isNeg ? '-' : ''}${formattedInt}${decPart !== undefined ? '.' + decPart : ''}`;
  }

  const str = String(value);
  if (calculatorId && SKIP_COMMA_FORMAT_IDS.has(calculatorId)) {
    return str;
  }

  return str.replace(
    PROTECTED_OR_NUMBER_REGEX,
    (match, intPart: string | undefined, decPart: string | undefined) => {
      if (!intPart) {
        return match;
      }
      return `${addCommasToInteger(intPart)}${decPart ?? ''}`;
    }
  );
}
