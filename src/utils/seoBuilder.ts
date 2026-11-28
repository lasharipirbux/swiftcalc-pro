import { CalculatorItem } from '../types';
import { datetimeSeoFullMap } from '../data/datetimeSeoFull';
import { mathSeoFullMap } from '../data/mathSeoFull';
import { financeSeoFullMap } from '../data/financeSeoFull';
import { businessSeoFullMap } from '../data/businessSeoFull';
import { constructionSeoFullMap } from '../data/constructionSeoFull';
import { healthSeoFullMap } from '../data/healthSeoFull';
import { electricalSeoFullMap } from '../data/electricalSeoFull';
import { educationSeoFullMap } from '../data/educationSeoFull';
import { engineeringSeoFullMap } from '../data/engineeringSeoFull';
import { realestateSeoFullMap } from '../data/realestateSeoFull';
import { automotiveSeoFullMap } from '../data/automotiveSeoFull';
import { cookingSeoFullMap } from '../data/cookingSeoFull';
import { statisticsSeoFullMap } from '../data/statisticsSeoFull';
import { internetSeoFullMap } from '../data/internetSeoFull';
import { formatCalculatorResult } from './formatResult';
import { safeCalculate } from './safeCalculate';

export interface SeoContent {
  intro: string;
  howItWorks: string;
  workedExample: string;
  whoUses: string;
  faqs: { q: string; a: string }[];
  medicalDisclaimer?: string;
}

export interface StructuredCalculatorSeo extends SeoContent {
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
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
 * Date & Time uses dedicated per-page unique titles; all other categories stay unchanged.
 */
export function buildCalculatorTitle(calculator: CalculatorItem): string {
  if (calculator.categoryId === 'datetime' && datetimeSeoFullMap[calculator.id]) {
    return datetimeSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'math' && mathSeoFullMap[calculator.id]) {
    return mathSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'finance' && financeSeoFullMap[calculator.id]) {
    return financeSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'business' && businessSeoFullMap[calculator.id]) {
    return businessSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'construction' && constructionSeoFullMap[calculator.id]) {
    return constructionSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'health' && healthSeoFullMap[calculator.id]) {
    return healthSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'electrical' && electricalSeoFullMap[calculator.id]) {
    return electricalSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'education' && educationSeoFullMap[calculator.id]) {
    return educationSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'engineering' && engineeringSeoFullMap[calculator.id]) {
    return engineeringSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'realestate' && realestateSeoFullMap[calculator.id]) {
    return realestateSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'automotive' && automotiveSeoFullMap[calculator.id]) {
    return automotiveSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'cooking' && cookingSeoFullMap[calculator.id]) {
    return cookingSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'statistics' && statisticsSeoFullMap[calculator.id]) {
    return statisticsSeoFullMap[calculator.id].seoTitle;
  }
  if (calculator.categoryId === 'tech' && internetSeoFullMap[calculator.id]) {
    return internetSeoFullMap[calculator.id].seoTitle;
  }
  return `Free ${calculator.name} Online – Fast & Accurate Calculator`;
}

/**
 * High-intent long-tail SEO meta description format:
 * Date & Time, Finance & Money, Business, Construction, and Health & Fitness use dedicated unique descriptions (< 155 chars); all other categories stay unchanged.
 */
export function buildCalculatorMetaDescription(calculator: CalculatorItem): string {
  if (calculator.categoryId === 'datetime' && datetimeSeoFullMap[calculator.id]) {
    return datetimeSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'math' && mathSeoFullMap[calculator.id]) {
    return mathSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'finance' && financeSeoFullMap[calculator.id]) {
    return financeSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'business' && businessSeoFullMap[calculator.id]) {
    return businessSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'construction' && constructionSeoFullMap[calculator.id]) {
    return constructionSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'health' && healthSeoFullMap[calculator.id]) {
    return healthSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'electrical' && electricalSeoFullMap[calculator.id]) {
    return electricalSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'education' && educationSeoFullMap[calculator.id]) {
    return educationSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'engineering' && engineeringSeoFullMap[calculator.id]) {
    return engineeringSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'realestate' && realestateSeoFullMap[calculator.id]) {
    return realestateSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'automotive' && automotiveSeoFullMap[calculator.id]) {
    return automotiveSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'cooking' && cookingSeoFullMap[calculator.id]) {
    return cookingSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'statistics' && statisticsSeoFullMap[calculator.id]) {
    return statisticsSeoFullMap[calculator.id].metaDescription;
  }
  if (calculator.categoryId === 'tech' && internetSeoFullMap[calculator.id]) {
    return internetSeoFullMap[calculator.id].metaDescription;
  }
  const topic = extractTopicPhrase(calculator);
  const full = `Calculate ${topic} with our free ${calculator.name}. Includes formula, worked example, and instant results.`;
  if (full.length < 155) return full;
  const medium = `Free ${calculator.name}: calculate ${topic} with formula, example, and instant results.`;
  if (medium.length < 155) return medium;
  return `Free ${calculator.name} with step-by-step formula, worked example, and accurate instant results.`;
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
  categoryName: string
): StructuredCalculatorSeo {
  if (calculator.categoryId === 'datetime' && datetimeSeoFullMap[calculator.id]) {
    const dt = datetimeSeoFullMap[calculator.id];
    return {
      intro: dt.introDescription,
      howItWorks: dt.formulaExplanation,
      workedExample: dt.practicalExample,
      howToUseSteps: dt.howToUseSteps,
      formulaExplanation: dt.formulaExplanation,
      practicalExample: dt.practicalExample,
      faqs: dt.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'math' && mathSeoFullMap[calculator.id]) {
    const m = mathSeoFullMap[calculator.id];
    return {
      intro: m.introDescription,
      howItWorks: m.formulaExplanation,
      workedExample: m.practicalExample,
      howToUseSteps: m.howToUseSteps,
      formulaExplanation: m.formulaExplanation,
      practicalExample: m.practicalExample,
      faqs: m.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'finance' && financeSeoFullMap[calculator.id]) {
    const fin = financeSeoFullMap[calculator.id];
    return {
      intro: fin.introDescription,
      howItWorks: fin.formulaExplanation,
      workedExample: fin.practicalExample,
      howToUseSteps: fin.howToUseSteps,
      formulaExplanation: fin.formulaExplanation,
      practicalExample: fin.practicalExample,
      faqs: fin.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'business' && businessSeoFullMap[calculator.id]) {
    const biz = businessSeoFullMap[calculator.id];
    return {
      intro: biz.introDescription,
      howItWorks: biz.formulaExplanation,
      workedExample: biz.practicalExample,
      howToUseSteps: biz.howToUseSteps,
      formulaExplanation: biz.formulaExplanation,
      practicalExample: biz.practicalExample,
      faqs: biz.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'construction' && constructionSeoFullMap[calculator.id]) {
    const con = constructionSeoFullMap[calculator.id];
    return {
      intro: '',
      howItWorks: con.formulaExplanation,
      workedExample: con.practicalExample,
      howToUseSteps: con.howToUseSteps,
      formulaExplanation: con.formulaExplanation,
      practicalExample: con.practicalExample,
      faqs: con.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'health' && healthSeoFullMap[calculator.id]) {
    const h = healthSeoFullMap[calculator.id];
    return {
      intro: h.introDescription,
      howItWorks: h.formulaExplanation,
      workedExample: h.practicalExample,
      howToUseSteps: h.howToUseSteps,
      formulaExplanation: h.formulaExplanation,
      practicalExample: h.practicalExample,
      faqs: h.faqs,
      whoUses: '',
      medicalDisclaimer: h.medicalDisclaimer,
    };
  }

  if (calculator.categoryId === 'electrical' && electricalSeoFullMap[calculator.id]) {
    const el = electricalSeoFullMap[calculator.id];
    return {
      intro: el.introDescription,
      howItWorks: el.formulaExplanation,
      workedExample: el.practicalExample,
      howToUseSteps: el.howToUseSteps,
      formulaExplanation: el.formulaExplanation,
      practicalExample: el.practicalExample,
      faqs: el.faqs,
      whoUses: '',
      medicalDisclaimer: el.safetyNote,
    };
  }

  if (calculator.categoryId === 'education' && educationSeoFullMap[calculator.id]) {
    const ed = educationSeoFullMap[calculator.id];
    return {
      intro: '',
      howItWorks: ed.formulaExplanation,
      workedExample: ed.practicalExample,
      howToUseSteps: ed.howToUseSteps,
      formulaExplanation: ed.formulaExplanation,
      practicalExample: ed.practicalExample,
      faqs: ed.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'engineering' && engineeringSeoFullMap[calculator.id]) {
    const eng = engineeringSeoFullMap[calculator.id];
    return {
      intro: eng.introDescription,
      howItWorks: eng.formulaExplanation,
      workedExample: eng.practicalExample,
      howToUseSteps: eng.howToUseSteps,
      formulaExplanation: eng.formulaExplanation,
      practicalExample: eng.practicalExample,
      faqs: eng.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'realestate' && realestateSeoFullMap[calculator.id]) {
    const re = realestateSeoFullMap[calculator.id];
    return {
      intro: re.introDescription,
      howItWorks: re.formulaExplanation,
      workedExample: re.practicalExample,
      howToUseSteps: re.howToUseSteps,
      formulaExplanation: re.formulaExplanation,
      practicalExample: re.practicalExample,
      faqs: re.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'automotive' && automotiveSeoFullMap[calculator.id]) {
    const au = automotiveSeoFullMap[calculator.id];
    return {
      intro: '',
      howItWorks: au.formulaExplanation,
      workedExample: au.practicalExample,
      howToUseSteps: au.howToUseSteps,
      formulaExplanation: au.formulaExplanation,
      practicalExample: au.practicalExample,
      faqs: au.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'cooking' && cookingSeoFullMap[calculator.id]) {
    const ck = cookingSeoFullMap[calculator.id];
    return {
      intro: ck.introDescription,
      howItWorks: ck.formulaExplanation,
      workedExample: ck.practicalExample,
      howToUseSteps: ck.howToUseSteps,
      formulaExplanation: ck.formulaExplanation,
      practicalExample: ck.practicalExample,
      faqs: ck.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'statistics' && statisticsSeoFullMap[calculator.id]) {
    const st = statisticsSeoFullMap[calculator.id];
    return {
      intro: st.introDescription,
      howItWorks: st.formulaExplanation,
      workedExample: st.practicalExample,
      howToUseSteps: st.howToUseSteps,
      formulaExplanation: st.formulaExplanation,
      practicalExample: st.practicalExample,
      faqs: st.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'tech' && internetSeoFullMap[calculator.id]) {
    const it = internetSeoFullMap[calculator.id];
    return {
      intro: it.introDescription,
      howItWorks: it.formulaExplanation,
      workedExample: it.practicalExample,
      howToUseSteps: it.howToUseSteps,
      formulaExplanation: it.formulaExplanation,
      practicalExample: it.practicalExample,
      faqs: it.faqs,
      whoUses: '',
    };
  }

  const inputLabels = calculator.inputs.map((inp) => inp.label).join(', ');
  const topic = extractTopicPhrase(calculator);

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
  const intro = `The free online ${calculator.name} in our ${categoryName} collection helps you determine ${topic} quickly and reliably without manual math or complex spreadsheets. Every calculation runs instantaneously inside your browser with clear formatting and real-time updates as you adjust inputs.`;

  const formulaExplanation = `${intro} ${
    defaultOut.formula
      ? `This tool applies the standard ${categoryName.toLowerCase()} formula (${defaultOut.formula}) to process your entered values (${inputLabels}) with consistent precision.`
      : `This tool evaluates your entered values (${inputLabels}) using established ${categoryName.toLowerCase()} equations for accurate, repeatable output.`
  } Ideal for students, professionals, planners, and everyday users comparing scenarios.`;

  const practicalExample = `Suppose you want to evaluate ${calculator.name} using sample values where ${inputSummary}. Entering those inputs directly into the calculator yields a primary result of ${formattedDefaultResult}${
    formattedSecondaryDefault ? ` along with ${formattedSecondaryDefault}` : ''
  }. Adjusting any individual parameter immediately updates the final output so you can test alternatives side by side.`;

  const faqs = [
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

  return {
    intro,
    howItWorks: formulaExplanation,
    workedExample: practicalExample,
    howToUseSteps,
    formulaExplanation,
    practicalExample,
    faqs,
    whoUses: `Ideal for students, professionals, and everyday ${categoryName.toLowerCase()} planning.`,
  };
}
