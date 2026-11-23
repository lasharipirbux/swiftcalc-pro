import { CalculatorItem } from '../types';
import { SeoContent, financeBusinessSeoMap } from '../data/seoFinanceBusiness';
import { constructionHealthSeoMap } from '../data/seoConstructionHealth';
import { datetimeElectricalSeoMap } from '../data/seoDatetimeElectrical';
import { educationEngineeringSeoMap } from '../data/seoEducationEngineering';
import { realestateAutomotiveSeoMap } from '../data/seoRealestateAutomotive';
import { cookingStatisticsSeoMap } from '../data/seoCookingStatistics';
import { formatCalculatorResult } from './formatResult';
import { safeCalculate } from './safeCalculate';

export interface StructuredCalculatorSeo extends SeoContent {
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
}

const allSeoMap: Record<string, SeoContent> = {
  ...financeBusinessSeoMap,
  ...constructionHealthSeoMap,
  ...datetimeElectricalSeoMap,
  ...educationEngineeringSeoMap,
  ...realestateAutomotiveSeoMap,
  ...cookingStatisticsSeoMap,
};

function countWords(text: string): number {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  return trimmed.split(/\s+/).length;
}

function truncateToWordBudget(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  const sliced = words.slice(0, maxWords).join(' ').replace(/[,;:\s]+$/, '');
  return /[.!?]$/.test(sliced) ? sliced : `${sliced}.`;
}

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

function buildHowToUseSteps(calculator: CalculatorItem): string[] {
  const firstInput = calculator.inputs[0];
  const remainingInputs = calculator.inputs.slice(1);
  const steps: string[] = [];

  if (firstInput) {
    steps.push(
      `Enter your primary value in the "${firstInput.label}" field${firstInput.unit ? ` (measured in ${firstInput.unit})` : ''}, replacing the pre-filled default sample (${firstInput.defaultValue}) if needed.`
    );
  }

  if (remainingInputs.length > 0) {
    const names = remainingInputs
      .map((inp) => `"${inp.label}"${inp.unit ? ` (${inp.unit})` : ''}`)
      .join(', ');
    steps.push(
      `Fill in the remaining required fields (${names}) carefully using standard numeric or dropdown selections.`
    );
  } else {
    steps.push(
      `Verify that your entered figure is valid and formatted properly for ${calculator.name.toLowerCase()}.`
    );
  }

  steps.push(
    `Review the primary output in the Calculated Result card, along with the live breakdown and step-by-step formula panel displayed alongside your inputs.`
  );
  steps.push(
    `Use "Copy Result" to save your formatted figure or click "Reset Defaults" at any time to restore the sample numbers and compare scenarios.`
  );

  return steps;
}

/**
 * Builds complete, well-structured educational SEO content (strictly 250–400 words total)
 * with 4 clear sections (How to Use This Calculator, Formula & Explanation, Practical Example,
 * and 3–4 Frequently Asked Questions) for every single one of the 400 calculators.
 */
export function getCalculatorSeoContent(
  calculator: CalculatorItem,
  categoryName: string,
  curatedSeo?: SeoContent
): StructuredCalculatorSeo {
  const sourceSeo = curatedSeo ?? allSeoMap[calculator.id];
  const inputLabels = calculator.inputs.map((inp) => inp.label).join(', ');
  const topic = extractTopicPhrase(calculator);

  // Evaluate exact default inputs using safeCalculate
  const defaultInputs: Record<string, any> = {};
  calculator.inputs.forEach((inp) => {
    defaultInputs[inp.id] = inp.defaultValue;
  });
  const defaultOut = safeCalculate(calculator, defaultInputs);
  const formattedDefaultResult = formatCalculatorResult(defaultOut.result, calculator.id);
  const formattedSecondaryDefault =
    defaultOut.secondaryResult !== undefined
      ? formatCalculatorResult(defaultOut.secondaryResult, calculator.id)
      : undefined;

  const inputSummary = calculator.inputs
    .map((inp) => `${inp.label} = ${inp.defaultValue}${inp.unit ? ` ${inp.unit}` : ''}`)
    .join(', ');

  const howToUseSteps = buildHowToUseSteps(calculator);

  // Base narrative sections (curated when available, richly generated otherwise)
  const intro = sourceSeo?.intro
    ? sourceSeo.intro
    : `The free online ${calculator.name} in our ${categoryName} collection helps you determine ${topic} quickly and reliably without manual math or complex spreadsheets. Every calculation runs instantaneously inside your browser with clear formatting and real-time updates as you adjust inputs.`;

  let formulaExplanation = sourceSeo
    ? `${intro} ${sourceSeo.howItWorks}${sourceSeo.whoUses ? ` ${sourceSeo.whoUses}` : ''}`
    : `${intro} ${
        defaultOut.formula
          ? `This tool applies the standard ${categoryName.toLowerCase()} formula (${defaultOut.formula}) to process your entered values (${inputLabels}) with consistent precision.`
          : `This tool evaluates your entered values (${inputLabels}) using established ${categoryName.toLowerCase()} equations for accurate, repeatable output.`
      } Ideal for students, professionals, planners, and everyday users comparing scenarios.`;

  let practicalExample = sourceSeo?.workedExample
    ? sourceSeo.workedExample
    : `Suppose you want to evaluate ${calculator.name} using sample values where ${inputSummary}. Entering those inputs directly into the calculator yields a primary result of ${formattedDefaultResult}${
        formattedSecondaryDefault ? ` along with ${formattedSecondaryDefault}` : ''
      }. Adjusting any individual parameter immediately updates the final output so you can test alternatives side by side.`;

  // Build 3-4 FAQs
  const baseFaqs = sourceSeo?.faqs ? [...sourceSeo.faqs] : [
    {
      q: `How does the ${calculator.name} compute its result?`,
      a: defaultOut.formula
        ? `It takes your entered values for ${inputLabels} and applies the formula "${defaultOut.formula}" directly inside your browser to produce instant, accurate results.`
        : `It evaluates your inputs (${inputLabels}) using verified ${categoryName.toLowerCase()} calculations immediately inside your browser without delays.`,
    },
    {
      q: `What inputs are required to use this calculator?`,
      a: `You only need to enter ${inputLabels}. Default sample values are pre-loaded so you can inspect how the tool behaves right away and replace them with your own figures.`,
    },
    {
      q: `Are my calculations private and free of charge?`,
      a: `Yes. This ${calculator.name} is 100% free with zero signup, and all computation runs client-side on your device so your numbers are never uploaded to external servers.`,
    },
  ];

  // Ensure strictly 3-4 FAQs (3 if curated only had <=3, 4 if curated had 4 or extra needed)
  while (baseFaqs.length < 3) {
    if (baseFaqs.length === 1) {
      baseFaqs.push({
        q: `What inputs do I need for the ${calculator.name}?`,
        a: `Enter ${inputLabels} into the labeled fields above. Pre-filled defaults demonstrate a realistic sample scenario right out of the box.`,
      });
    } else {
      baseFaqs.push({
        q: `Is the ${calculator.name} free and private to use?`,
        a: `Yes. Every calculator on CalcVault Pro executes locally in your browser with no account required, keeping your data fast and private.`,
      });
    }
  }
  const faqs = baseFaqs.slice(0, 4);

  // Add a 4th FAQ when under minimum target to guarantee 250-400 words across the 4 sections
  const computeTotalWords = () =>
    countWords(
      [
        howToUseSteps.join(' '),
        formulaExplanation,
        practicalExample,
        faqs.map((f) => `${f.q} ${f.a}`).join(' '),
        sourceSeo?.medicalDisclaimer || '',
      ].join(' ')
    );

  if (computeTotalWords() < 268 && faqs.length < 4) {
    faqs.push({
      q: `Can I use the ${calculator.name} on mobile devices and reset sample inputs?`,
      a: `Yes. The layout adapts cleanly to phones, tablets, and desktops, and you can tap "Reset Defaults" anytime to restore the starter values or "Copy Result" to save your formatted output.`,
    });
  }

  // Enrich if still below 268 body words (guarantees >= 255 words across every calculator)
  if (computeTotalWords() < 268) {
    formulaExplanation = `${formulaExplanation} Reviewing the calculated figure alongside the live step-by-step breakdown helps verify assumptions, double-check unit consistency (${
      calculator.inputs
        .filter((i) => i.unit)
        .map((i) => i.unit)
        .join(', ') || 'standard units'
    }), and avoid manual rounding mistakes in practical estimates.`;
  }

  if (computeTotalWords() < 268) {
    practicalExample = `${practicalExample} Notice how changing one input at a time clarifies sensitivity and helps confirm that your final estimate makes sense for your real-world ${categoryName.toLowerCase()} planning or coursework.`;
  }

  // Keep cleanly under 350 raw body words (guarantees <= 395 words even with section headings and Q:/A: prefixes)
  if (computeTotalWords() > 350) {
    if (faqs.length === 4 && computeTotalWords() > 362) {
      faqs.pop();
    }
    const nonFormulaWords = countWords(
      [
        howToUseSteps.join(' '),
        practicalExample,
        faqs.map((f) => `${f.q} ${f.a}`).join(' '),
        sourceSeo?.medicalDisclaimer || '',
      ].join(' ')
    );
    const maxFormulaWords = Math.max(45, 342 - nonFormulaWords);
    formulaExplanation = truncateToWordBudget(formulaExplanation, maxFormulaWords);
  }

  return {
    intro,
    howItWorks: formulaExplanation,
    workedExample: practicalExample,
    howToUseSteps,
    formulaExplanation,
    practicalExample,
    faqs,
    whoUses: sourceSeo?.whoUses || `Ideal for students, professionals, and everyday ${categoryName.toLowerCase()} planning.`,
    medicalDisclaimer: sourceSeo?.medicalDisclaimer,
  };
}
