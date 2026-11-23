import { CalculatorItem } from '../types';
import { SeoContent } from '../data/seoFinanceBusiness';
import { formatCalculatorResult } from './formatResult';
import { safeCalculate } from './safeCalculate';

/**
 * Strips leading action verbs from a calculator description to produce a clean topic phrase.
 */
function extractTopicPhrase(calculator: CalculatorItem): string {
  const cleaned = calculator.description
    .trim()
    .replace(/\.$/, '')
    .replace(
      /^(calculate|compute|convert|estimate|find|determine|measure|solve|generate|evaluate|check|plan|track|predict|perform|get|compare|verify|analyze|build|create|turn|change|split|assess|scale|optimize|count|quickly\s+\w+|instantly\s+\w+)\s+/i,
      ''
    );

  if (!cleaned) {
    return calculator.name.replace(/\s+calculator$/i, '').toLowerCase();
  }
  return cleaned.charAt(0).toLowerCase() + cleaned.slice(1);
}

/**
 * High-intent long-tail SEO title format:
 * "Free [Calculator Name] Online – Fast & Accurate Calculator"
 */
export function buildCalculatorTitle(calculator: CalculatorItem): string {
  return `Free ${calculator.name} Online – Fast & Accurate Calculator`;
}

/**
 * High-intent long-tail SEO meta description format:
 * "Calculate [topic/result] instantly with our free online [Calculator Name].
 *  Includes step-by-step formula, examples, and accurate results with no signup."
 */
export function buildCalculatorMetaDescription(calculator: CalculatorItem): string {
  const topic = extractTopicPhrase(calculator);
  return `Calculate ${topic} instantly with our free online ${calculator.name}. Includes step-by-step formula, examples, and accurate results with no signup.`;
}

/**
 * Builds complete, non-thin SEO guide content (150–200+ words) and 3+ FAQs
 * for every calculator—using curated SEO content where present and enriching
 * any remaining calculators dynamically from their real inputs, formula, and default output.
 */
export function getCalculatorSeoContent(
  calculator: CalculatorItem,
  categoryName: string,
  curatedSeo?: SeoContent
): SeoContent {
  const inputLabels = calculator.inputs.map((inp) => inp.label).join(', ');

  if (curatedSeo) {
    const existingFaqs = curatedSeo.faqs && curatedSeo.faqs.length >= 3
      ? curatedSeo.faqs
      : [
          ...(curatedSeo.faqs || []),
          {
            q: `Is the ${calculator.name} free to use without signup?`,
            a: `Yes. The ${calculator.name} runs completely free inside your browser with instant updates and no registration required.`,
          },
          {
            q: `Are my inputs saved or sent to a server?`,
            a: `No. All calculations happen locally on your device so your numbers remain completely private.`,
          },
        ].slice(0, 3);

    const guideWordCount = [curatedSeo.intro, curatedSeo.howItWorks, curatedSeo.workedExample]
      .filter(Boolean)
      .join(' ')
      .split(/\s+/).length;

    const enrichedHowItWorks =
      guideWordCount < 155
        ? `${curatedSeo.howItWorks} To use this free online ${calculator.name}, enter your values for ${inputLabels} in the labeled fields above and watch the output update immediately inside your browser with zero signup or downloads required. Reviewing both the primary output and the Formula & Explanation panel helps you verify every step of the calculation before applying it to real-world planning, homework, or comparisons. Click "Reset Defaults" anytime to restore the worked sample inputs, or use "Copy Result" to save your formatted answer.`
        : curatedSeo.howItWorks;

    return {
      ...curatedSeo,
      howItWorks: enrichedHowItWorks,
      faqs: existingFaqs,
    };
  }

  // Compute an exact worked example directly from the calculator's own default inputs
  const defaultInputs: Record<string, any> = {};
  calculator.inputs.forEach((inp) => {
    defaultInputs[inp.id] = inp.defaultValue;
  });
  const defaultOut = safeCalculate(calculator, defaultInputs);
  const formattedDefaultResult = formatCalculatorResult(defaultOut.result, calculator.id);

  const inputSummary = calculator.inputs
    .map((inp) => {
      const val = inp.defaultValue;
      return `${inp.label} = ${val}${inp.unit ? ` ${inp.unit}` : ''}`;
    })
    .join(', ');

  const topic = extractTopicPhrase(calculator);
  const formulaNote = defaultOut.formula
    ? `Behind the scenes, this tool applies the standard formula (${defaultOut.formula}) to deliver consistent precision.`
    : `Behind the scenes, this tool applies standard ${categoryName.toLowerCase()} equations to deliver consistent, repeatable precision.`;

  const intro = `The free online ${calculator.name} in our ${categoryName} collection lets you calculate ${topic} quickly and accurately without manual math or spreadsheets. Whether you are double-checking homework, verifying project numbers, or solving day-to-day ${categoryName.toLowerCase()} problems, this calculator updates results in real time as you type so you can compare scenarios effortlessly.`;

  const howItWorks = `To use the ${calculator.name}, enter your values into the input fields (${inputLabels}) and review the live output panel. ${formulaNote} You can click "Reset Defaults" at any time to restore the sample values, or use "Copy Result" to paste the formatted answer directly into a report, document, or message. All calculations run locally in your browser with zero signup required.`;

  const workedExample = `Example: Entering ${inputSummary} produces ${formattedDefaultResult}${
    defaultOut.secondaryResult
      ? ` (${formatCalculatorResult(defaultOut.secondaryResult, calculator.id)})`
      : ''
  }. Try adjusting any input above to immediately see how changes affect your final answer.`;

  const faqs = [
    {
      q: `How does the ${calculator.name} calculate results?`,
      a: defaultOut.formula
        ? `It uses your inputs (${inputLabels}) with the formula "${defaultOut.formula}" to compute exact results instantaneously in your browser.`
        : `It takes your entered values (${inputLabels}) and evaluates the standard ${categoryName.toLowerCase()} equation instantaneously in your browser.`,
    },
    {
      q: `What inputs do I need for the ${calculator.name}?`,
      a: `You only need to provide ${inputLabels}. Default sample values are pre-filled so you can see how the tool works right away and replace them with your own numbers.`,
    },
    {
      q: `Is this ${calculator.name} free and private to use?`,
      a: `Yes. Every tool on CalcVault Pro is 100% free with no account required, and all calculations execute client-side so your data never leaves your browser.`,
    },
  ];

  return {
    intro,
    howItWorks,
    workedExample,
    faqs,
    whoUses: `Ideal for students, professionals, and everyday users who need fast, reliable ${categoryName.toLowerCase()} calculations.`,
  };
}
