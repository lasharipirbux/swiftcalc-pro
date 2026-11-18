import { CalculatorItem, Category } from '../types';

// Additional domain keywords mapped by calculator ID or category ID to ensure
// common user terms (like "emi", "marla", "bmi", "math", "percent") find all relevant tools.
const CATEGORY_KEYWORDS: Record<string, string[]> = {
  math: ['math', 'mathematics', 'algebra', 'geometry', 'trigonometry', 'arithmetic', 'number', 'equation', 'formula', 'calculus'],
  finance: ['finance', 'money', 'financial', 'bank', 'banking', 'pakistan', 'pkr', 'rupee', 'investment', 'wealth', 'savings', 'tax'],
  business: ['business', 'commerce', 'company', 'startup', 'corporate', 'retail', 'sales', 'profit', 'revenue', 'accounting', 'margin'],
  construction: ['construction', 'building', 'civil', 'house', 'home', 'contractor', 'material', 'masonry', 'concrete', 'cement', 'bricks', 'marla', 'sqft'],
  health: ['health', 'fitness', 'medical', 'body', 'diet', 'nutrition', 'workout', 'exercise', 'weight', 'wellness', 'bmi', 'calorie'],
  datetime: ['date', 'time', 'calendar', 'clock', 'age', 'days', 'hours', 'minutes', 'seconds', 'duration', 'schedule'],
  electrical: ['electrical', 'electronics', 'electricity', 'power', 'circuit', 'voltage', 'current', 'watt', 'amp', 'ohm', 'wapda', 'solar', 'battery', 'wire'],
  education: ['education', 'student', 'school', 'college', 'university', 'academic', 'exam', 'study', 'grade', 'gpa', 'cgpa', 'marks', 'percentage', 'matric', 'fsc'],
  engineering: ['engineering', 'science', 'physics', 'mechanical', 'fluid', 'thermodynamics', 'structural', 'force', 'pressure', 'torque', 'stress'],
  realestate: ['real estate', 'property', 'land', 'plot', 'housing', 'rent', 'rental', 'mortgage', 'marla', 'kanal', 'sqft', 'zameen', 'commercial'],
  automotive: ['automotive', 'vehicle', 'car', 'bike', 'motorcycle', 'truck', 'driving', 'fuel', 'petrol', 'mileage', 'engine', 'tire', 'speed', 'auto'],
  cooking: ['cooking', 'food', 'kitchen', 'recipe', 'baking', 'culinary', 'chef', 'ingredient', 'cups', 'grams', 'tola', 'servings'],
  statistics: ['statistics', 'statistical', 'data', 'probability', 'math', 'mean', 'median', 'mode', 'variance', 'standard deviation', 'distribution', 'survey'],
  tech: ['tech', 'technology', 'computer', 'it', 'software', 'network', 'internet', 'digital', 'developer', 'coding', 'storage', 'bandwidth', 'binary'],
};

const CALCULATOR_EXTRA_KEYWORDS: Record<string, string[]> = {
  'loan-calc': ['emi', 'installment', 'monthly payment', 'kist', 'loan', 'debt', 'borrowing'],
  'loan-emi-months': ['emi', 'installment', 'monthly payment', 'kist', 'loan', 'months'],
  'mortgage-calc': ['emi', 'home loan', 'house loan', 'installment', 'mortgage', 'property loan'],
  'car-lease': ['emi', 'car loan', 'auto loan', 'vehicle financing', 'installment', 'car installment'],
  'loan-prepayment': ['emi', 'early payoff', 'loan closure', 'interest saver', 'installment'],
  'personal-loan-eligibility': ['emi', 'loan limit', 'borrowing power', 'salary loan'],
  'dti-calc': ['emi', 'debt to income', 'loan qualification'],
  'home-loan-affordability': ['emi', 'mortgage affordability', 'house budget', 'home loan'],
  'auto-loan-early-payoff': ['emi', 'car loan payoff', 'vehicle installment'],
  'land-area-converter': ['marla', 'kanal', 'square feet', 'sqft', 'sq yd', 'gaj', 'sarsahi', 'acre', 'plot area'],
  'plot-area-converter': ['marla', 'kanal', 'square feet', 'sqft', 'sq yd', 'sq meter', 'plot area', 'marla to sq ft'],
  'plot-price-calc': ['marla', 'kanal', 'plot cost', 'land price', 'zameen rate'],
  'marla-to-sqft-price': ['marla', 'kanal', 'square foot rate', 'plot price', 'marla to sq ft'],
  're-land-subdivision': ['marla', 'kanal', 'town planning', 'housing society', 'plots'],
  'constr-house-cost-pk': ['marla', 'kanal', 'grey structure', 'finishing cost', 'house building'],
  'construction-cost': ['marla', 'kanal', 'square foot cost', 'building budget'],
  'construction-cost-est': ['marla', 'kanal', 'square foot cost', 'building budget'],
  'bmi-calc': ['bmi', 'body mass index', 'weight status', 'overweight', 'underweight', 'obesity', 'healthy weight'],
  'health-bmi-calc': ['bmi', 'body mass index', 'weight status', 'overweight', 'underweight', 'obesity', 'healthy weight'],
  'health-ponderal-index': ['bmi', 'corpulence index', 'leanness', 'body mass'],
  'health-ideal-weight': ['bmi', 'target weight', 'healthy weight', 'devine formula'],
  'health-body-fat': ['bmi', 'adiposity', 'fat percentage', 'navy method'],
  'health-bmr-calc': ['bmi', 'calories', 'tdee', 'metabolism', 'daily energy'],
  'pct-calc': ['percent', 'percentage', 'share', 'proportion', 'marks percentage'],
  'percentage-calc': ['percent', 'percentage', 'share', 'proportion', 'marks percentage'],
  'pct-change': ['percent', 'percentage increase', 'percentage decrease', 'growth rate'],
  'discount-calc': ['percent', 'percentage off', 'sale price', 'saving'],
  'margin-calc': ['percent', 'percentage profit', 'markup', 'gross margin'],
  'sgpa-to-percentage': ['percent', 'percentage', 'gpa', 'cgpa', 'marks'],
  'percentage-to-gpa': ['percent', 'percentage', 'gpa', 'cgpa', 'grade'],
  'edu-marks-percentage': ['percent', 'percentage', 'marks', 'exam score'],
  'edu-grade-to-pct': ['percent', 'percentage', 'letter grade', 'marks'],
  'edu-attendance-calc': ['percent', 'percentage attendance', 'shortfall', 'classes'],
  'edu-gpa-calc': ['gpa', 'grade point average', 'semester', 'university'],
  'edu-cgpa-calc': ['cgpa', 'gpa', 'cumulative grade point average'],
};

export interface SearchResultItem {
  calculator: CalculatorItem;
  categoryName: string;
  score: number;
}

export function searchCalculators(
  query: string,
  allCalculators: CalculatorItem[],
  categories: Category[],
  selectedCategoryId: string | null = null
): SearchResultItem[] {
  const categoryMap = new Map<string, string>();
  categories.forEach((cat) => categoryMap.set(cat.id, cat.name));

  const trimmed = query.trim().toLowerCase();

  // If no search query, return calculators filtered only by selectedCategoryId
  if (!trimmed) {
    return allCalculators
      .filter((c) => selectedCategoryId === null || c.categoryId === selectedCategoryId)
      .map((c) => ({
        calculator: c,
        categoryName: categoryMap.get(c.categoryId) || 'General',
        score: 1,
      }));
  }

  // Split query into tokens so multi-word or partial word searches work naturally
  const tokens = trimmed.split(/\s+/).filter(Boolean);

  const results: SearchResultItem[] = [];

  for (const calc of allCalculators) {
    if (selectedCategoryId !== null && calc.categoryId !== selectedCategoryId) {
      continue;
    }

    const catName = categoryMap.get(calc.categoryId) || 'General';
    const nameLower = calc.name.toLowerCase();
    const catNameLower = catName.toLowerCase();
    const catIdLower = calc.categoryId.toLowerCase();
    const descLower = calc.description.toLowerCase();
    const idWords = calc.id.toLowerCase().replace(/-/g, ' ');
    const tagsLower = (calc.tags || []).join(' ').toLowerCase();
    const inputsLower = calc.inputs
      .map((inp) => `${inp.label} ${(inp.options || []).map((o) => o.label).join(' ')}`)
      .join(' ')
      .toLowerCase();
    const catKeywords = (CATEGORY_KEYWORDS[calc.categoryId] || []).join(' ');
    const calcExtraKeywords = (CALCULATOR_EXTRA_KEYWORDS[calc.id] || []).join(' ');

    const combinedSearchable = `${nameLower} ${catNameLower} ${catIdLower} ${descLower} ${idWords} ${tagsLower} ${inputsLower} ${catKeywords} ${calcExtraKeywords}`;

    // Every token must match somewhere in the calculator's searchable fields (supports partial words)
    const allTokensMatch = tokens.every((tok) => combinedSearchable.includes(tok));
    if (!allTokensMatch) {
      continue;
    }

    // Compute relevance score so best matches appear first
    let score = 0;

    // Full query matches
    if (nameLower === trimmed) score += 200;
    else if (nameLower.startsWith(trimmed)) score += 120;
    else if (nameLower.includes(trimmed)) score += 90;

    if (catNameLower.includes(trimmed) || catIdLower.includes(trimmed)) {
      score += 60;
    }

    if (calcExtraKeywords.includes(trimmed)) {
      score += 75;
    }

    if (descLower.includes(trimmed)) {
      score += 40;
    }

    // Token-level scoring
    for (const tok of tokens) {
      if (nameLower.split(/[\s()/&-]+/).some((w) => w.startsWith(tok))) {
        score += 35;
      } else if (nameLower.includes(tok)) {
        score += 25;
      }

      if (catNameLower.includes(tok) || catIdLower.includes(tok)) {
        score += 20;
      }

      if (calcExtraKeywords.includes(tok)) {
        score += 20;
      }

      if (descLower.includes(tok) || idWords.includes(tok)) {
        score += 10;
      }

      if (inputsLower.includes(tok) || catKeywords.includes(tok)) {
        score += 5;
      }
    }

    results.push({
      calculator: calc,
      categoryName: catName,
      score,
    });
  }

  results.sort((a, b) => b.score - a.score || a.calculator.name.localeCompare(b.calculator.name));
  return results;
}
