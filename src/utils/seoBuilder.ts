import { CalculatorItem } from '../types';
import { SeoContent, financeBusinessSeoMap } from '../data/seoFinanceBusiness';
import { constructionHealthSeoMap } from '../data/seoConstructionHealth';
import { datetimeElectricalSeoMap } from '../data/seoDatetimeElectrical';
import { educationEngineeringSeoMap } from '../data/seoEducationEngineering';
import { realestateAutomotiveSeoMap } from '../data/seoRealestateAutomotive';
import { cookingStatisticsSeoMap } from '../data/seoCookingStatistics';
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
import { SITE_NAME } from '../config/site';

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
 * Date & Time uses dedicated per-page unique titles; all other categories stay unchanged.
 */
export function buildCalculatorTitle(calculator: CalculatorItem): string {
  if (calculator.categoryId === 'datetime' && datetimeSeoFullMap[calculator.id]) {
    return datetimeSeoFullMap[calculator.id].seoTitle;
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
  if ((calculator.categoryId === 'realestate' || calculator.categoryId === 'commercial') && realestateSeoFullMap[calculator.id]) {
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
  if ((calculator.categoryId === 'realestate' || calculator.categoryId === 'commercial') && realestateSeoFullMap[calculator.id]) {
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
  categoryName: string,
  curatedSeo?: SeoContent
): StructuredCalculatorSeo {
  if (calculator.categoryId === 'datetime' && datetimeSeoFullMap[calculator.id]) {
    const dt = datetimeSeoFullMap[calculator.id];
    return {
      intro: dt.intro,
      howItWorks: dt.formulaExplained,
      workedExample: dt.practicalExample,
      howToUseSteps: dt.howToUseSteps,
      formulaExplanation: dt.formulaExplained,
      practicalExample: dt.practicalExample,
      faqs: dt.faqs,
      whoUses: '',
    };
  }

  if (calculator.categoryId === 'math' && mathSeoFullMap[calculator.id]) {
    const m = mathSeoFullMap[calculator.id];
    return {
      intro: '',
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
      intro: '',
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
      intro: '',
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
      intro: '',
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
      intro: '',
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
      intro: '',
      howItWorks: eng.formulaExplanation,
      workedExample: eng.practicalExample,
      howToUseSteps: eng.howToUseSteps,
      formulaExplanation: eng.formulaExplanation,
      practicalExample: eng.practicalExample,
      faqs: eng.faqs,
      whoUses: '',
    };
  }

  if ((calculator.categoryId === 'realestate' || calculator.categoryId === 'commercial') && realestateSeoFullMap[calculator.id]) {
    const re = realestateSeoFullMap[calculator.id];
    return {
      intro: '',
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
      intro: '',
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
      intro: '',
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
      intro: '',
      howItWorks: it.formulaExplanation,
      workedExample: it.practicalExample,
      howToUseSteps: it.howToUseSteps,
      formulaExplanation: it.formulaExplanation,
      practicalExample: it.practicalExample,
      faqs: it.faqs,
      whoUses: '',
    };
  }

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
        a: `Yes. Every calculator on ${SITE_NAME} executes locally in your browser with no account required, keeping your data fast and private.`,
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
