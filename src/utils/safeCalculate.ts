import { CalculatorItem } from '../types';

export interface SafeCalculationOutput {
  result: string | number;
  secondaryResult?: string | number;
  note?: string;
  steps?: string[];
  formula?: string;
  isInvalid: boolean;
}

const INVALID_OUTPUT_REGEX = /\bNaN\b|\bInfinity\b|-Infinity|\bundefined\b|\bnull\b|Invalid Date/i;

export function safeCalculate(
  calculator: CalculatorItem,
  rawInputs: Record<string, any>
): SafeCalculationOutput {
  const sanitized: Record<string, any> = {};

  for (const inp of calculator.inputs) {
    const val = rawInputs[inp.id];
    if (inp.type === 'number' || inp.type === 'range') {
      if (val === '' || val === undefined || val === null) {
        sanitized[inp.id] = 0;
      } else {
        const num = Number(val);
        sanitized[inp.id] = Number.isFinite(num) ? num : 0;
      }
    } else if (inp.type === 'select') {
      sanitized[inp.id] = val !== undefined && val !== '' ? val : inp.defaultValue;
    } else {
      sanitized[inp.id] = val !== undefined && val !== null ? String(val) : '';
    }
  }

  try {
    const output = calculator.calculate(sanitized);
    const resultStr =
      output.result === undefined || output.result === null ? '' : String(output.result);

    if (!resultStr.trim() || INVALID_OUTPUT_REGEX.test(resultStr)) {
      return {
        result: 'Enter valid values',
        secondaryResult: 'Please enter valid inputs to compute a result.',
        note: output.note,
        formula: output.formula,
        isInvalid: true,
      };
    }

    const secondaryStr =
      output.secondaryResult !== undefined && output.secondaryResult !== null
        ? String(output.secondaryResult)
        : undefined;

    const cleanSecondary =
      secondaryStr && !INVALID_OUTPUT_REGEX.test(secondaryStr) ? output.secondaryResult : undefined;

    const cleanSteps = output.steps?.filter((s) => !INVALID_OUTPUT_REGEX.test(s));

    return {
      ...output,
      secondaryResult: cleanSecondary,
      steps: cleanSteps,
      isInvalid: false,
    };
  } catch {
    return {
      result: 'Enter valid values',
      secondaryResult: 'Please check your inputs and try again.',
      isInvalid: true,
    };
  }
}
