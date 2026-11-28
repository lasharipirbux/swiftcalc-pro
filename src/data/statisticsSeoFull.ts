import { SITE_NAME } from '../config/site';

export interface StatisticsCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const statisticsSeoFullMap: Record<string, StatisticsCalculatorSeoEntry> = {
  'stats-summary': {
    seoTitle: `Free Statistical Summary Calculator – Mean, Median & Count | ${SITE_NAME}`,
    metaDescription:
      'Compute mean, median, total sum, sample count, minimum, and maximum from a numeric list using our free Statistical Summary Calculator.',
    howToUseSteps: [
      'Type your comma-separated sample observations into Data Set (comma sep).',
      'Inspect mean and median at the top alongside sample count, cumulative sum, min, and max.',
    ],
    formulaExplanation:
      'Descriptive statistical summaries evaluate central tendency via the arithmetic mean (sum of all observations divided by count n) alongside the order-based median (middle element of sorted values) and full range bounds. Formula: Mean x̄ = (Σ xᵢ) / n; Median = x_((n+1)/2) for odd n or average of two middle terms for even n.',
    practicalExample:
      'Summarizing Data Set (comma sep) = 12, 18, 22, 25, 30, 42 counts 6 points summing to 149 (Min: 12, Max: 42), giving Mean: 24.83 and Median: 23.5.',
    faqs: [
      {
        q: 'Why can Mean: 24.83 differ noticeably from Median: 23.5 on small samples?',
        a: 'Extreme high values like 42 pull the arithmetic average upward while the median stays anchored strictly to middle rank positions.',
      },
      {
        q: 'Does entering unsorted numbers inside Data Set (comma sep) affect Median: 23.5?',
        a: 'No—the tool sorts all entries from smallest to largest internally before picking middle values and reporting Min and Max.',
      },
      {
        q: 'What happens if stray spaces or blanks sit after commas?',
        a: 'Empty tokens and non-numeric gaps are skipped automatically so only valid observations enter Count and Sum.',
      },
    ],
  },

  'stats-median': {
    seoTitle: `Free Median Calculator – Middle Value & Sorted List | ${SITE_NAME}`,
    metaDescription:
      'Sort any numeric sample and find its exact middle median value for odd or even counts with our free Median Calculator.',
    howToUseSteps: [
      'Paste or key in comma-delimited numbers inside the Data Set (comma sep) box.',
      'Check the sorted ascending array and exact central median value immediately.',
    ],
    formulaExplanation:
      'The sample median orders all n values from lowest to highest and selects the central observation when n is odd, or averages the two inner observations at positions n/2 and (n/2)+1 when n is even. Formula: Median = sorted[(n−1)/2] (odd n), or (sorted[n/2 − 1] + sorted[n/2]) / 2 (even n).',
    practicalExample:
      'Sorting Data Set (comma sep) = 5, 2, 9, 1, 7, 6 arranges [1, 2, 5, 6, 7, 9] and averages middle pair (5 + 6) / 2 = Median: 5.5.',
    faqs: [
      {
        q: 'When should analysts report Median instead of arithmetic Mean?',
        a: 'Median resists distortion from outliers—making it standard for household salaries, housing prices, and skewed lab measurements.',
      },
      {
        q: 'How is Median found when a dataset holds an odd count like 7 items?',
        a: 'For 7 sorted items, position 4 sits directly in the center with three numbers below and three above.',
      },
      {
        q: 'Can Data Set (comma sep) include negative temperatures or decimals?',
        a: 'Yes—both negative values and decimals sort numerically in exact ascending order.',
      },
    ],
  },

  'stats-mode': {
    seoTitle: `Free Mode Calculator – Most Frequent Value & Ties | ${SITE_NAME}`,
    metaDescription:
      'Identify the most frequent number or multimodal ties along with repeat count in any list using our free Mode Calculator.',
    howToUseSteps: [
      'List your repeated survey or score observations separated by commas inside Data Set (comma sep).',
      'Review whichever number or tied numbers occurred most often and their exact repeat frequency.',
    ],
    formulaExplanation:
      'Statistical mode tallies occurrence counts for every distinct number in a distribution and returns the value(s) achieving maximum frequency f_max, revealing bimodal or multimodal clusters when ties occur. Formula: Mode = argmax_x Count(x).',
    practicalExample:
      'Scanning Data Set (comma sep) = 4, 2, 4, 3, 6, 2, 4, 5 across 8 items finds value 4 appearing 3 times (versus twice for 2), giving Mode: 4 (Freq: 3).',
    faqs: [
      {
        q: 'What displays if two numbers tie for highest frequency?',
        a: 'The calculator lists every tied mode separated by commas (a bimodal or multimodal result) alongside the shared frequency count.',
      },
      {
        q: 'What does it mean if every entry appears only once (Freq: 1)?',
        a: 'When all values occur once, no single value repeats above others, meaning the sample is effectively amodal.',
      },
      {
        q: 'Why is Mode useful for shoe sizes, poll choices, and defect codes?',
        a: 'Unlike Mean or Median, Mode pinpoints the exact discrete category or measurement occurring most often in real inventory.',
      },
    ],
  },

  'stats-variance': {
    seoTitle: `Free Variance Calculator (Sample & Population) – s² & σ² | ${SITE_NAME}`,
    metaDescription:
      'Compute sample variance (s²), population variance (σ²), and mean from numeric data using our free Variance Calculator (Sample & Population).',
    howToUseSteps: [
      'Enter at least two numeric measurements separated by commas inside Data Set (comma sep).',
      'Compare sample variance (s²) at top against population variance (σ²) and mean directly beneath.',
    ],
    formulaExplanation:
      'Variance measures average squared deviation from the sample mean; population variance divides summed squared differences by n, whereas sample variance applies Bessel’s correction (n − 1) to stay unbiased when estimating from a subset. Formula: Sample s² = Σ(xᵢ − x̄)² / (n − 1); Population σ² = Σ(xᵢ − x̄)² / n.',
    practicalExample:
      'Evaluating Data Set (comma sep) = 2, 4, 6, 8, 10 (Mean: 6, squared deviations 16+4+0+4+16 = 40) gives Sample Var (s²): 10.000 (40/4) and Population Var (σ²): 8.000 (40/5).',
    faqs: [
      {
        q: 'Why divide by (n − 1) for Sample Var (s²) instead of n?',
        a: 'Computing sample mean x̄ consumes one degree of freedom; dividing by (n − 1) corrects downward bias when generalizing a sample to a larger population.',
      },
      {
        q: 'When is Population Var (σ²) = 8.000 the right figure to report?',
        a: 'Use population variance only when your entered numbers represent 100% of an entire group—such as every student in one classroom.',
      },
      {
        q: 'Why must at least 2 numbers be entered in Data Set (comma sep)?',
        a: 'A single observation has (n − 1) = 0 degrees of freedom, making sample variance undefined.',
      },
    ],
  },

  'stats-stddev': {
    seoTitle: `Free Standard Deviation Calculator – Sample s & Pop σ | ${SITE_NAME}`,
    metaDescription:
      'Calculate sample standard deviation (s), population standard deviation (σ), and mean from raw numbers using our free Standard Deviation Calculator.',
    howToUseSteps: [
      'Input two or more comma-separated numbers inside the Data Set (comma sep) input.',
      'Read sample SD (s) and population SD (σ) in the original units of your measurements.',
    ],
    formulaExplanation:
      'Standard deviation takes the positive square root of variance so data spread returns to the exact units of original observations rather than squared units. Formula: Sample SD s = √[Σ(xᵢ − x̄)² / (n − 1)]; Population SD σ = √[Σ(xᵢ − x̄)² / n].',
    practicalExample:
      'Analyzing Data Set (comma sep) = 10, 12, 23, 23, 16, 23, 21, 16 (Mean: 18.00) computes Sample SD (s): 5.237 and Population SD (σ): 4.899.',
    faqs: [
      {
        q: 'How does Standard Deviation help interpret a normal bell curve?',
        a: 'In roughly normal distributions, about 68% of points fall within ±1 SD of the mean and 95% fall within ±2 SD.',
      },
      {
        q: 'What does Sample SD (s) = 0 tell you about a dataset?',
        a: 'Zero standard deviation means every number in Data Set (comma sep) is identical with zero spread.',
      },
      {
        q: 'Why is Sample SD (5.237) always slightly larger than Population SD (4.899)?',
        a: 'Dividing the same sum of squares by (n − 1) = 7 instead of n = 8 produces a larger variance before taking the square root.',
      },
    ],
  },

  'stats-zscore': {
    seoTitle: `Free Z-Score Calculator – Standard Deviations from Mean | ${SITE_NAME}`,
    metaDescription:
      'Standardize any observation into a z-score using value x, mean μ, and standard deviation σ with our free Z-Score Calculator.',
    howToUseSteps: [
      'Enter the individual observed test or measurement score into Value (x).',
      'Type the distribution average inside Mean (μ).',
      'Supply positive spread under Standard Deviation (σ) to find how many standard deviations x sits from μ.',
    ],
    formulaExplanation:
      'A standard score (z-score) centers an observation around the distribution mean and divides by standard deviation, placing disparate scales onto one unitless standard normal axis. Formula: Z = (Value x − Mean μ) / Standard Deviation σ.',
    practicalExample:
      'With Value (x) = 85 on a test having Mean (μ) = 70 and Standard Deviation (σ) = 10, Z = (85 − 70) / 10 = Z-Score: 1.500 (1.50 standard deviations above mean).',
    faqs: [
      {
        q: 'What does a negative Z-Score mean?',
        a: 'Any negative z-score indicates Value (x) falls below Mean (μ)—for instance, Z = −1.50 means 1.50 standard deviations below average.',
      },
      {
        q: 'At what Z-Score do statisticians commonly flag potential outliers?',
        a: 'Observations beyond |Z| > 2.5 or |Z| > 3.0 sit in the extreme tails of a normal distribution and merit outlier inspection.',
      },
      {
        q: 'Why cannot Standard Deviation (σ) equal 0?',
        a: 'If σ = 0, every score equals the mean and measuring distance in standard-deviation units involves division by zero.',
      },
    ],
  },

  'stats-percentile': {
    seoTitle: `Free Percentile Calculator – Interpolated Dataset Rank | ${SITE_NAME}`,
    metaDescription:
      'Find the exact linearly interpolated value at any percentile from 0 to 100 in a sorted sample using our free Percentile Calculator.',
    howToUseSteps: [
      'Type numeric sample entries separated by commas inside Data Set (comma sep).',
      'Enter target percentile rank between 0 and 100 into Percentile (0 - 100).',
      'Inspect the sorted sample and linearly interpolated percentile value.',
    ],
    formulaExplanation:
      'Linear interpolation percentile ranking sorts all n observations ascending, locates fractional zero-based index i = (P / 100) × (n − 1), and blends between the surrounding lower and upper integers. Formula: Value = x_floor + (x_ceil − x_floor) × (i − floor(i)).',
    practicalExample:
      'Querying Percentile (0 - 100) = 75 on Data Set (comma sep) = 15, 20, 35, 40, 50, 65, 80, 95 (index 0.75 × 7 = 5.25 between 65 and 80) yields 75th Percentile = 68.75.',
    faqs: [
      {
        q: 'Why does the 50th Percentile match the sample Median?',
        a: 'At P = 50, fractional index (0.50)(n − 1) lands squarely on the middle rank or midway between the two center ranks.',
      },
      {
        q: 'What do the 25th and 75th percentiles represent together?',
        a: 'They correspond to the first quartile (Q1) and third quartile (Q3), spanning the middle 50% of sorted data.',
      },
      {
        q: 'Why do different stats packages slightly disagree on 75th Percentile for small arrays?',
        a: 'Excel PERCENTILE.INC and NumPy default use linear interpolation (P/100)(n−1) shown here, whereas nearest-rank methods pick whole index positions without blending.',
      },
    ],
  },

  'stats-iqr': {
    seoTitle: `Free Interquartile Range (IQR) Calculator – Q1, Q3 & Spread | ${SITE_NAME}`,
    metaDescription:
      'Compute quartiles Q1, Q3, and Interquartile Range (IQR) for middle 50% spread with our free Interquartile Range (IQR) Calculator.',
    howToUseSteps: [
      'Provide at least four comma-separated values inside Data Set (comma sep).',
      'Inspect Q1, Q3, Interquartile Range (IQR = Q3 − Q1), and full min-to-max bounds.',
    ],
    formulaExplanation:
      'Interquartile Range splits the sorted sample into lower and upper halves, identifies the median of each half as Q1 and Q3, and subtracts Q1 from Q3 to quantify middle-50% dispersion untouched by extreme outliers. Formula: IQR = Q3 − Q1.',
    practicalExample:
      'Evaluating Data Set (comma sep) = 7, 15, 36, 39, 40, 41 splits into [7, 15, 36] (Q1 = 15) and [39, 40, 41] (Q3 = 40), giving IQR: 25 (Q1: 15, Q3: 40).',
    faqs: [
      {
        q: 'How is IQR used in the classic 1.5 × IQR box-plot outlier rule?',
        a: 'Points falling below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR are flagged as statistical outliers on box-and-whisker charts.',
      },
      {
        q: 'Why does IQR require at least 4 numbers in Data Set (comma sep)?',
        a: 'Fewer than four entries cannot meaningfully split into distinct lower and upper quartile halves.',
      },
      {
        q: 'When is IQR preferred over Standard Deviation?',
        a: 'Use IQR alongside Median whenever skewed distributions or extreme anomalies distort squared-deviation metrics.',
      },
    ],
  },

  'stats-probability': {
    seoTitle: `Free Simple Probability Calculator – Event Odds % & Ratio | ${SITE_NAME}`,
    metaDescription:
      'Compute single-event probability as a percentage, fraction, and decimal from favorable and total outcomes with our free Simple Probability Calculator.',
    howToUseSteps: [
      'Enter target matching event count inside Favorable Outcomes.',
      'Type full sample space count into Total Possible Outcomes.',
      'Read event probability expressed in percentage, exact ratio, and four-decimal form.',
    ],
    formulaExplanation:
      'Classical probability assumes equally likely outcomes across a finite sample space and divides target favorable cases by total possible events, multiplying by 100 for percentage likelihood. Formula: P(A) = Favorable Outcomes / Total Possible Outcomes.',
    practicalExample:
      'Drawing any Ace (Favorable Outcomes = 4) from a shuffled deck (Total Possible Outcomes = 52) calculates 4 / 52 = 7.69% (0.0769 decimal probability).',
    faqs: [
      {
        q: 'What is the complement probability P(not A) when P(A) = 7.69%?',
        a: 'Subtract P(A) from 100% (or 1 − 0.0769), giving 92.31% chance of drawing a non-Ace.',
      },
      {
        q: 'Can Favorable Outcomes ever exceed Total Possible Outcomes?',
        a: 'In valid probability problems, favorable outcomes stay between 0 (impossible, 0%) and Total Possible Outcomes (certain, 100%).',
      },
      {
        q: 'How do I compute rolling a 5 or 6 on a single six-sided die?',
        a: 'Enter 2 in Favorable Outcomes and 6 in Total Possible Outcomes to get 33.33% (0.3333).',
      },
    ],
  },

  'stats-combinatorics-ncr': {
    seoTitle: `Free Combinations (nCr) Calculator – Unordered Selections | ${SITE_NAME}`,
    metaDescription:
      'Count how many unordered subsets of r items can be chosen from n distinct items using our free Combinations (nCr) Calculator.',
    howToUseSteps: [
      'Type total pool size inside Total Items (n).',
      'Enter subset selection size under Items Chosen (r) (must satisfy 0 ≤ r ≤ n).',
      'View total unique unordered combinations (n choose r).',
    ],
    formulaExplanation:
      'Combinatorial selection counts unique subsets of size r drawn from n distinct objects where arrangement order does not matter, dividing out r! duplicate permutations of the same chosen group. Formula: nCr = n! / [r! × (n − r)!].',
    practicalExample:
      'Choosing a 3-person committee (Items Chosen (r) = 3) from Total Items (n) = 10 applicants computes 10! / (3! × 7!) = nCr = 120 combinations.',
    faqs: [
      {
        q: 'Why does choosing 3 out of 10 give the exact same nCr = 120 as choosing 7 out of 10?',
        a: 'Picking 3 people to include automatically defines the complementary 7 people left out, so nCr always equals nC(n−r).',
      },
      {
        q: 'When should I use Combinations (nCr) instead of Permutations (nPr)?',
        a: 'Use nCr for lottery tickets, pizza toppings, or committee seats where roles/sequence don’t matter; use nPr when order creates distinct outcomes.',
      },
      {
        q: 'What does nCr equal when Items Chosen (r) is 0?',
        a: 'There is exactly 1 way to choose nothing (the empty set), so nC0 = 1.',
      },
    ],
  },

  'stats-permutations-npr': {
    seoTitle: `Free Permutations (nPr) Calculator – Ordered Arrangements | ${SITE_NAME}`,
    metaDescription:
      'Calculate total ordered sequences of r items selected from n distinct items using our free Permutations (nPr) Calculator.',
    howToUseSteps: [
      'Specify total available pool count inside Total Items (n).',
      'Type sequence slots to fill into Items Arranged (r) (requiring 0 ≤ r ≤ n).',
      'Read total ordered arrangements (nPr) immediately.',
    ],
    formulaExplanation:
      'Ordered permutations count every distinct sequence of length r drawn without replacement from n objects where shifting positions (such as Gold-Silver-Bronze podium spots) creates a separate arrangement. Formula: nPr = n! / (n − r)!.',
    practicalExample:
      'Awarding top 3 podium medals (Items Arranged (r) = 3) among Total Items (n) = 8 sprinters calculates 8 × 7 × 6 = nPr = 336 arrangements.',
    faqs: [
      {
        q: 'Why is nPr always larger than nCr whenever r > 1?',
        a: 'Each single unordered subset of size r can be rearranged in r! ways, making nPr = r! × nCr (for instance, 8P3 = 6 × 8C3 = 336).',
      },
      {
        q: 'What does nPn calculate when r equals n?',
        a: 'When Items Arranged (r) equals Total Items (n), nPn simplifies to n!—total ways to line up all n objects.',
      },
      {
        q: 'Does nPr allow repeating the same item twice in one sequence?',
        a: 'No—classical nPr models sampling without replacement; with repetition allowed, total sequences equal n^r.',
      },
    ],
  },

  'stats-confidence-interval': {
    seoTitle: `Free Confidence Interval Calculator – Mean Margin of Error | ${SITE_NAME}`,
    metaDescription:
      'Calculate lower and upper confidence bounds and margin of error around a sample mean using our free Confidence Interval Calculator.',
    howToUseSteps: [
      'Enter observed sample average inside Sample Mean (x̄).',
      'Type sample spread in Standard Deviation (s) and observation count in Sample Size (n).',
      'Pick 90%, 95%, or 99% under Confidence Level to read the interval bounds and margin of error.',
    ],
    formulaExplanation:
      'A z-based confidence interval frames your point estimate by multiplying standard error (s / √n) by the critical normal z*-value (1.645 for 90%, 1.960 for 95%, or 2.576 for 99%) to build symmetric lower and upper limits. Formula: CI = Sample Mean ± z × (Standard Deviation / √Sample Size).',
    practicalExample:
      'For Sample Mean (x̄) = 100, Standard Deviation (s) = 15, Sample Size (n) = 30, and Confidence Level = 95% (z = 1.960), Margin of Error is ±5.37, giving 94.63 to 105.37.',
    faqs: [
      {
        q: 'What happens to Margin of Error when Confidence Level rises from 95% to 99%?',
        a: 'Higher certainty widens critical z* from 1.960 to 2.576, expanding the interval so it captures the true population mean 99% of the time.',
      },
      {
        q: 'How can researchers cut Margin of Error in half without lowering Confidence Level?',
        a: 'Because Sample Size (n) sits under a square root, quadrupling n (e.g., from 30 to 120) halves standard error and margin width.',
      },
      {
        q: 'Does a 95% interval mean 95% of raw individual data points lie between 94.63 and 105.37?',
        a: 'No—it expresses 95% confidence that the true population mean falls inside the interval, not individual observations.',
      },
    ],
  },

  'stats-sample-size': {
    seoTitle: `Free Sample Size Calculator for Surveys – Margin of Error | ${SITE_NAME}`,
    metaDescription:
      'Determine exact survey respondents needed for a target margin of error at 95% confidence using our free Sample Size Calculator for Surveys.',
    howToUseSteps: [
      'Type total target audience size inside Population Size (N).',
      'Enter acceptable polling tolerance percentage into Margin of Error (%).',
      'Check minimum required completed survey responses at 95% confidence.',
    ],
    formulaExplanation:
      'Finite-population Cochran survey sizing assumes maximum conservative proportion variance (p = 0.5) at 95% confidence (z = 1.96) and applies finite-population correction across Population Size (N) and decimal Margin of Error (e). Formula: Sample Size = [z² × 0.25 × N] / [e² × (N − 1) + z² × 0.25].',
    practicalExample:
      'Surveying a city campus of Population Size (N) = 10000 with Margin of Error (%) = 5 at 95% confidence computes Required Sample Size: 370 respondents.',
    faqs: [
      {
        q: 'Why does changing Population Size (N) from 100,000 to 10,000,000 barely raise Sample Size?',
        a: 'Once populations exceed ~20,000, Cochran finite correction saturates near 384–385 respondents for ±5% error at 95% confidence.',
      },
      {
        q: 'What happens if you tighten Margin of Error (%) from 5% down to 2%?',
        a: 'Halving or shrinking margin of error increases required respondents rapidly—around 1,936 responses out of 10,000 for ±2%.',
      },
      {
        q: 'Why does Cochran use p = 0.5 by default?',
        a: 'A 50/50 split maximizes p(1 − p) = 0.25, ensuring your sample stays large enough regardless of actual poll split.',
      },
    ],
  },

  'stats-geometric-mean': {
    seoTitle: `Free Geometric Mean Calculator – Compound Growth Rates | ${SITE_NAME}`,
    metaDescription:
      'Calculate the nth root multiplicative average for investment growth factors and ratios using our free Geometric Mean Calculator.',
    howToUseSteps: [
      'Type positive comma-separated numbers (growth factors or positive values) into Data Set (comma sep).',
      'Inspect the geometric mean alongside cumulative product and observation count.',
    ],
    formulaExplanation:
      'Geometric mean averages multiplicative series—such as multi-year investment multipliers or bacterial growth factors—by multiplying all n positive values together and taking the nth root. Formula: GM = (x₁ × x₂ × … × xₙ)^(1/n).',
    practicalExample:
      'Multiplying Data Set (comma sep) = 2, 8, 32 (Product = 512 across 3 numbers) and taking the cube root (512^(1/3)) returns Geometric Mean: 8.000.',
    faqs: [
      {
        q: 'Why must all entries in Data Set (comma sep) be strictly positive?',
        a: 'Even a single zero collapses the entire product to 0, and negative values break real-valued even roots.',
      },
      {
        q: 'Why use Geometric Mean instead of arithmetic mean for multi-year investment returns?',
        a: 'If +50% (+1.50×) follows −50% (0.50×), arithmetic mean says 0% while Geometric Mean √(1.50 × 0.50) = 0.866 accurately shows a −13.4% compounded loss.',
      },
      {
        q: 'How does Geometric Mean compare numerically with arithmetic mean?',
        a: 'By the AM-GM inequality, Geometric Mean never exceeds arithmetic mean and equals it only when all numbers match.',
      },
    ],
  },

  'stats-harmonic-mean': {
    seoTitle: `Free Harmonic Mean Calculator – Average Rates & Speeds | ${SITE_NAME}`,
    metaDescription:
      'Compute the harmonic mean of speeds, P/E ratios, and rates from comma-separated numbers using our free Harmonic Mean Calculator.',
    howToUseSteps: [
      'Enter positive rates or speeds separated by commas inside Data Set (comma sep).',
      'Review harmonic mean along with count and summed reciprocals.',
    ],
    formulaExplanation:
      'Harmonic mean averages rates expressed per unit (such as km/h over equal distances or resistance in parallel) by dividing observation count n by the sum of all reciprocals 1/xᵢ. Formula: HM = n / Σ(1 / xᵢ).',
    practicalExample:
      'Computing Data Set (comma sep) = 10, 20, 60 (reciprocal sum 0.10 + 0.05 + 0.0167 = 0.1667 across 3 values) gives 3 / 0.1667 = Harmonic Mean: 18.000.',
    faqs: [
      {
        q: 'When does Harmonic Mean give the true average speed whereas arithmetic mean fails?',
        a: 'Driving the same 100 km leg uphill at 20 km/h and back downhill at 60 km/h averages 30 km/h harmonically—not 40 km/h—because you spend three times longer at 20 km/h.',
      },
      {
        q: 'Why are zeros rejected in Data Set (comma sep)?',
        a: 'Taking the reciprocal 1/0 is mathematically undefined, so every value must stay strictly above zero.',
      },
      {
        q: 'Which is always smallest among Arithmetic, Geometric, and Harmonic Means?',
        a: 'For distinct positive numbers, Harmonic Mean ≤ Geometric Mean ≤ Arithmetic Mean.',
      },
    ],
  },

  'stats-coef-variation': {
    seoTitle: `Free Coefficient of Variation Calculator – Relative CV % | ${SITE_NAME}`,
    metaDescription:
      'Compare relative dispersion across different units using standard deviation and mean in our free Coefficient of Variation Calculator.',
    howToUseSteps: [
      'Input spread in original units into Standard Deviation (σ).',
      'Type non-zero dataset average inside Mean (μ).',
      'Check unitless relative dispersion percentage (CV).',
    ],
    formulaExplanation:
      'Coefficient of Variation expresses standard deviation as a percentage of the absolute mean, stripping away units (PKR vs USD, kg vs grams) so analysts can compare variability across completely different scales. Formula: CV (%) = (Standard Deviation σ / |Mean μ|) × 100.',
    practicalExample:
      'With Standard Deviation (σ) = 12 and Mean (μ) = 60, relative dispersion equals (12 / 60) × 100 = CV = 20.00%.',
    faqs: [
      {
        q: 'Why is CV = 20.00% helpful when comparing two stocks or lab assays?',
        a: 'A PKR 500 stock fluctuating by PKR 25 (CV = 5%) is half as volatile relatively as a PKR 100 stock fluctuating by PKR 10 (CV = 10%).',
      },
      {
        q: 'When can Coefficient of Variation become misleading?',
        a: 'Near-zero means (or interval scales like Celsius temperatures with arbitrary zeros) inflate CV artificially toward infinity.',
      },
      {
        q: 'Why does the formula use |Mean (μ)| absolute value in the denominator?',
        a: 'Taking absolute value ensures CV stays non-negative even if a financial cash-flow mean is negative.',
      },
    ],
  },

  'stats-expected-value': {
    seoTitle: `Free Expected Value Calculator – Discrete Random Variable E(X) | ${SITE_NAME}`,
    metaDescription:
      'Compute probability-weighted Expected Value E(X) from discrete outcomes and matching probabilities using our free Expected Value Calculator.',
    howToUseSteps: [
      'Enter numeric outcome payoffs separated by commas inside Values (comma sep).',
      'Type matching decimal probabilities totaling 1.0 under Probabilities (comma sep, sums to 1).',
      'Inspect long-run probability-weighted Expected Value E(X).',
    ],
    formulaExplanation:
      'Expected Value calculates the long-run theoretical mean of a discrete random experiment by multiplying every possible numeric outcome xᵢ by its probability P(xᵢ) and summing all products. Formula: E(X) = Σ [xᵢ × P(xᵢ)].',
    practicalExample:
      'Pairing Values (comma sep) = 10, 50, 100 with Probabilities (comma sep, sums to 1) = 0.5, 0.3, 0.2 calculates (10×0.5) + (50×0.3) + (100×0.2) = Expected Value E(X) = 40.000.',
    faqs: [
      {
        q: 'Does E(X) = 40.000 mean you can actually win 40 on a single draw?',
        a: 'No—individual outcomes remain 10, 50, or 100, while 40.000 is the long-run average payoff per trial across hundreds of repeats.',
      },
      {
        q: 'Why must Values and Probabilities list identical item counts?',
        a: 'Every outcome needs its own matching weight; missing or extra entries make pairwise multiplication ambiguous.',
      },
      {
        q: 'Should Probabilities (comma sep, sums to 1) enter as decimals like 0.25 or percentages?',
        a: 'Enter decimal weights (e.g., 0.25 instead of 25) so their sum equals 1.0.',
      },
    ],
  },

  'stats-mad': {
    seoTitle: `Free Mean Absolute Deviation (MAD) Calculator – Average Distance | ${SITE_NAME}`,
    metaDescription:
      'Compute Mean Absolute Deviation (MAD) and arithmetic mean without squaring errors using our free Mean Absolute Deviation (MAD) Calculator.',
    howToUseSteps: [
      'List your numeric sample values separated by commas inside Data Set (comma sep).',
      'Check Mean Absolute Deviation (MAD) and the sample mean.',
    ],
    formulaExplanation:
      'Mean Absolute Deviation measures average absolute distance between every observation and the dataset mean, penalizing outliers linearly rather than squaring differences like variance or standard deviation. Formula: MAD = Σ |xᵢ − x̄| / n.',
    practicalExample:
      'For Data Set (comma sep) = 2, 3, 6, 8, 11 (Mean: 6.00, absolute gaps 4+3+0+2+5 = 14), dividing 14 / 5 gives MAD = 2.800.',
    faqs: [
      {
        q: 'How does MAD differ from Standard Deviation in practice?',
        a: 'MAD takes simple absolute gaps |x − x̄| so extreme outliers carry proportional linear weight, whereas Standard Deviation squares deviations and amplifies spikes.',
      },
      {
        q: 'Why take absolute values before averaging (x − Mean)?',
        a: 'Signed deviations above and below the mean always cancel out cleanly to zero, making |x − x̄| necessary to measure total spread.',
      },
      {
        q: 'Where is Mean Absolute Deviation used outside classrooms?',
        a: 'Supply-chain planners and weather forecasters favor MAD because it expresses average forecast miss directly in units or degrees.',
      },
    ],
  },

  'stats-range-iqr': {
    seoTitle: `Free Range Calculator – Dataset Min, Max & Total Span | ${SITE_NAME}`,
    metaDescription:
      'Find minimum, maximum, and full numeric span (Max minus Min) across any data list using our free Range Calculator.',
    howToUseSteps: [
      'Paste or type comma-separated numeric values inside Data Set (comma sep).',
      'View total span along with identified minimum and maximum extremes.',
    ],
    formulaExplanation:
      'Statistical range provides the simplest measure of total spread by taking the difference between the largest observed value and the smallest observed value in the sample. Formula: Range = Maximum Value − Minimum Value.',
    practicalExample:
      'Scanning Data Set (comma sep) = 14, 22, 9, 45, 31 finds Min: 9 and Max: 45, returning Range = 36 (45 − 9).',
    faqs: [
      {
        q: 'What is the biggest weakness of relying solely on Range = 36?',
        a: 'Range depends exclusively on two extreme points, ignoring whether the remaining values cluster tightly or spread evenly.',
      },
      {
        q: 'Can Range ever be negative?',
        a: 'No—since Maximum is always greater than or equal to Minimum (even for negative data like −10 to −2, range = 8), Range is never negative.',
      },
      {
        q: 'When do quality engineers still track Range alongside Mean?',
        a: 'Manufacturing SPC control charts (X-bar and R charts) monitor small sample batch ranges quickly on factory floors.',
      },
    ],
  },

  'stats-linear-regression': {
    seoTitle: `Free Simple Linear Regression Slope Calculator – Best Fit Line | ${SITE_NAME}`,
    metaDescription:
      'Fit a trend line y = mx + b with slope m and intercept b from paired X and Y arrays using our free Simple Linear Regression Slope Calculator.',
    howToUseSteps: [
      'Enter independent predictor coordinates separated by commas into X Values (comma sep).',
      'Type matching dependent response values in exact order inside Y Values (comma sep).',
      'Read fitted equation y = mx + b alongside precise Slope (m) and Intercept (b).',
    ],
    formulaExplanation:
      'Ordinary Least Squares (OLS) linear regression minimizes squared vertical prediction residuals across n paired (x, y) points to solve for trend slope m and y-axis intercept b. Formula: Slope m = (nΣxy − ΣxΣy) / [nΣx² − (Σx)²]; Intercept b = (Σy − mΣx) / n.',
    practicalExample:
      'Fitting X Values (comma sep) = 1, 2, 3, 4, 5 against Y Values (comma sep) = 2, 4, 5, 4, 7 solves Slope (m): 1.000 and Intercept (b): 1.400, yielding y = 1.00x + 1.40.',
    faqs: [
      {
        q: 'Why must X Values and Y Values contain at least 2 matching pairs?',
        a: 'Two distinct points are the geometric minimum needed to define a unique straight line.',
      },
      {
        q: 'How do I predict Y at X = 10 using y = 1.00x + 1.40?',
        a: 'Substitute x = 10 into the regression equation: y = 1.00(10) + 1.40 = 11.40.',
      },
      {
        q: 'What does a negative Slope (m) reveal?',
        a: 'Negative slope indicates an inverse linear relationship where Y trends downward as X increases.',
      },
    ],
  },

  'stats-correlation-coef': {
    seoTitle: `Free Pearson Correlation Coefficient (r) Calculator – Association | ${SITE_NAME}`,
    metaDescription:
      'Measure linear association between paired X and Y variables from −1 to +1 using our free Pearson Correlation Coefficient (r) Calculator.',
    howToUseSteps: [
      'List paired first-variable observations separated by commas inside X Values (comma sep).',
      'Type corresponding second-variable numbers in matching order into Y Values (comma sep).',
      'Inspect Pearson r (−1 to +1) and linear strength classification.',
    ],
    formulaExplanation:
      'Pearson product-moment correlation r standardizes sample covariance by the product of both variables’ standard deviations, yielding a dimensionless linear strength index bounded between −1 (perfect negative line) and +1 (perfect positive line). Formula: r = (nΣxy − ΣxΣy) / √[(nΣx² − (Σx)²)(nΣy² − (Σy)²)].',
    practicalExample:
      'Correlating X Values (comma sep) = 1, 2, 3, 4, 5 with Y Values (comma sep) = 2, 3, 5, 6, 8 calculates Correlation r = 0.993 (Strong linear relation).',
    faqs: [
      {
        q: 'What does squaring Correlation r = 0.993 tell researchers?',
        a: 'The coefficient of determination r² ≈ 0.986 shows roughly 98.6% of variation in Y aligns linearly with X.',
      },
      {
        q: 'Does Correlation r = 0.993 prove X causes Y?',
        a: 'No—strong correlation measures linear co-movement only; confounding factors or reverse causality must be ruled out via experiments.',
      },
      {
        q: 'Can Pearson r detect curved U-shaped relationships accurately?',
        a: 'No—nonlinear parabolas can return r near 0 despite a clear curve, so always plot scatter diagrams alongside r.',
      },
    ],
  },

  'stats-relative-risk': {
    seoTitle: `Free Relative Risk & Odds Ratio Calculator – 2×2 Contingency | ${SITE_NAME}`,
    metaDescription:
      'Compute epidemiological Relative Risk (RR) and Odds Ratio (OR) from a 2×2 contingency table using our free Relative Risk & Odds Ratio Calculator.',
    howToUseSteps: [
      'Enter positive-exposure cases into Exposed & Diseased (a) and healthy exposed controls into Exposed & Healthy (b).',
      'Input unexposed cases into Unexposed & Diseased (c) and unexposed controls into Unexposed & Healthy (d).',
      'Inspect both Relative Risk (RR) and Odds Ratio (OR) side by side.',
    ],
    formulaExplanation:
      'Cohort and case-control epidemiology compares disease incidence across exposed [a / (a + b)] and unexposed [c / (c + d)] groups for Relative Risk, alongside cross-product odds (ad / bc) for Odds Ratio. Formula: RR = [a / (a + b)] / [c / (c + d)]; OR = (a × d) / (b × c).',
    practicalExample:
      'With Exposed & Diseased (a) = 30, Exposed & Healthy (b) = 70 (30% risk), Unexposed & Diseased (c) = 10, and Unexposed & Healthy (d) = 90 (10% risk), Relative Risk (RR) = 3.000 and Odds Ratio (OR) = 3.857.',
    faqs: [
      {
        q: 'What does RR = 3.000 signify in plain cohort terms?',
        a: 'Exposed individuals developed the outcome three times as frequently (30% vs 10%) as unexposed individuals.',
      },
      {
        q: 'When do Odds Ratio (OR) and Relative Risk (RR) stay nearly identical?',
        a: 'When an outcome is rare (< 10% prevalence), OR closely approximates RR; at common 30% incidence, OR pulls further away from 1.0.',
      },
      {
        q: 'What does RR = 1.0 or OR = 1.0 indicate?',
        a: 'A ratio of exactly 1.0 means zero difference in risk or odds between exposed and control groups.',
      },
    ],
  },

  'stats-root-mean-square': {
    seoTitle: `Free Root Mean Square (RMS) Calculator – Quadratic Mean | ${SITE_NAME}`,
    metaDescription:
      'Compute quadratic mean (RMS) of positive and negative oscillating values from any numeric list using our free Root Mean Square (RMS) Calculator.',
    howToUseSteps: [
      'Enter signed or oscillating comma-separated numbers into Data Set (comma sep).',
      'Read the quadratic Root Mean Square (RMS) magnitude immediately.',
    ],
    formulaExplanation:
      'Root Mean Square (quadratic mean) squares every observation—eliminating negative sign cancellations in AC waveforms or signed errors—averages those squares, and takes the square root. Formula: RMS = √[(Σ xᵢ²) / n].',
    practicalExample:
      'Computing Data Set (comma sep) = 3, −5, 7, −2, 8 (squares 9+25+49+4+64 = 151 across 5 values) gives √(151 / 5) = RMS = 5.495.',
    faqs: [
      {
        q: 'Why does RMS beat arithmetic Mean for AC electrical signals and measurement errors?',
        a: 'Symmetric positive and negative peaks average to zero linearly, whereas RMS captures true effective energy magnitude.',
      },
      {
        q: 'How does RMS = 5.495 relate to engineering Root Mean Square Error (RMSE)?',
        a: 'RMSE is simply the RMS applied directly to a list of prediction residuals (actual minus predicted).',
      },
      {
        q: 'Is RMS always greater than or equal to the arithmetic mean of absolute values?',
        a: 'Yes—because squaring weights larger magnitudes more heavily, RMS ≥ Mean(|x|).',
      },
    ],
  },

  'stats-pooling-variance': {
    seoTitle: `Free Pooled Variance Calculator – Two-Sample t-Test sp² | ${SITE_NAME}`,
    metaDescription:
      'Calculate degrees-of-freedom weighted pooled variance (sp²) and df for two independent samples using our free Pooled Variance Calculator.',
    howToUseSteps: [
      'Enter first group count into Sample 1 Size (n₁) and its variance into Sample 1 Variance (s₁²).',
      'Input second group count into Sample 2 Size (n₂) and variance under Sample 2 Variance (s₂²).',
      'Inspect weighted Pooled Variance (sp²) and combined degrees of freedom (df).',
    ],
    formulaExplanation:
      'Independent two-sample Student t-tests assume equal population variance and combine both sample variances weighted by each group’s degrees of freedom (n − 1) rather than averaging equally. Formula: sp² = [(n₁ − 1)s₁² + (n₂ − 1)s₂²] / (n₁ + n₂ − 2).',
    practicalExample:
      'Combining Sample 1 Size (n₁) = 15, Sample 1 Variance (s₁²) = 12.5 with Sample 2 Size (n₂) = 20, Sample 2 Variance (s₂²) = 15.0 gives Degrees of Freedom (df) = 33 and Pooled Variance (sp²) = 13.939.',
    faqs: [
      {
        q: 'Why does Pooled Variance (13.939) sit closer to 15.0 than 12.5?',
        a: 'Sample 2 holds more observations (df = 19 vs df = 14), so its variance receives proportionally heavier weight.',
      },
      {
        q: 'What if you know Standard Deviation s instead of Variance s²?',
        a: 'Square each sample standard deviation (s × s) before entering it into Sample 1 Variance (s₁²) and Sample 2 Variance (s₂²).',
      },
      {
        q: 'When should analysts avoid pooling variance and run Welch’s t-test instead?',
        a: 'If one sample variance is more than twice the other alongside unequal sample sizes, unpooled Welch’s t-test is safer.',
      },
    ],
  },

  'stats-mape': {
    seoTitle: `Free Mean Absolute Percentage Error (MAPE) Calculator – Forecast % | ${SITE_NAME}`,
    metaDescription:
      'Measure sales forecast error percentage from actuals and predictions with our free Mean Absolute Percentage Error (MAPE) Calculator.',
    howToUseSteps: [
      'Enter observed ground-truth figures separated by commas inside Actual Values (comma sep).',
      'Type matching predicted figures in the same sequence into Forecast Values (comma sep).',
      'Check average absolute percentage forecast error (MAPE).',
    ],
    formulaExplanation:
      'Mean Absolute Percentage Error evaluates forecasting model accuracy by taking the absolute gap between actual and predicted numbers, dividing by the actual value, averaging across all non-zero periods, and scaling by 100%. Formula: MAPE (%) = (100 / n) × Σ(|Actualᵢ − Forecastᵢ| / |Actualᵢ|).',
    practicalExample:
      'Comparing Actual Values (comma sep) = 100, 150, 200, 250 against Forecast Values (comma sep) = 110, 140, 210, 240 averages percentage errors (10%, 6.67%, 5%, 4%) to MAPE = 6.42%.',
    faqs: [
      {
        q: 'What MAPE score is considered strong accuracy in business forecasting?',
        a: 'Under 10% MAPE generally signals highly accurate demand planning, while 10%–20% is solid and above 50% signals weak forecasts.',
      },
      {
        q: 'Why does MAPE skip periods where Actual Value equals zero?',
        a: 'Dividing |0 − Forecast| by 0 is mathematically undefined; datasets with frequent zeros often use MAE or sMAPE instead.',
      },
      {
        q: 'How is MAPE = 6.42% interpreted directly as forecast accuracy?',
        a: 'Subtracting MAPE from 100% expresses intuitive percentage accuracy—around 93.58% accurate here.',
      },
    ],
  },

  'stats-spearman': {
    seoTitle: `Free Spearman Rank Correlation Coefficient Calculator – Rho (ρ) | ${SITE_NAME}`,
    metaDescription:
      'Compute nonparametric Spearman rank correlation (ρ) from paired rank orderings using our free Spearman Rank Correlation Coefficient Calculator.',
    howToUseSteps: [
      'Type integer rank positions for the first variable inside X Ranks (comma sep).',
      'Enter corresponding rank positions for the second variable in Y Ranks (comma sep).',
      'Inspect Spearman rank correlation ρ alongside sample count n.',
    ],
    formulaExplanation:
      'Spearman’s rank correlation coefficient ρ measures monotonic association strength—whether Y steadily rises or falls as X increases—using squared differences dᵢ = (Rank Xᵢ − Rank Yᵢ) across n paired observations. Formula: ρ = 1 − [6 × Σ dᵢ² / (n × (n² − 1))].',
    practicalExample:
      'Pairing X Ranks (comma sep) = 1, 2, 3, 4, 5 against Y Ranks (comma sep) = 2, 1, 4, 3, 5 gives Σd² = 4 across n = 5, computing Spearman ρ = 0.800.',
    faqs: [
      {
        q: 'When should you prefer Spearman ρ over Pearson r?',
        a: 'Choose Spearman whenever data consists of ordinal ranks, contains severe outliers, or follows a curved monotonic trend rather than a straight line.',
      },
      {
        q: 'What does Spearman ρ = −1.000 signify?',
        a: 'Perfect inverse ranking—whenever X moves up one rank, Y moves strictly down one rank without exceptions.',
      },
      {
        q: 'Does this formula handle raw scores directly or converted ranks?',
        a: 'Convert raw measurements into 1..n ordinal ranks first before entering them into X Ranks and Y Ranks.',
      },
    ],
  },

  'stats-poisson': {
    seoTitle: `Free Poisson Distribution Probability Calculator – P(X = k) | ${SITE_NAME}`,
    metaDescription:
      'Calculate exact discrete Poisson event probability P(X = k) from expected mean arrival rate λ using our free Poisson Distribution Probability Calculator.',
    howToUseSteps: [
      'Enter average event count per interval inside Expected Rate (λ).',
      'Type the exact target event count under Exact Occurrences (k).',
      'View exact probability P(X = k) in percentage and five-decimal format.',
    ],
    formulaExplanation:
      'Poisson probability models independent rare events occurring at a constant average rate λ over fixed time or space intervals (calls per hour, defects per meter) using Euler’s constant e and factorial k!. Formula: P(X = k) = (λ^k × e^(−λ)) / k!.',
    practicalExample:
      'With an average arrival Expected Rate (λ) = 3.0 calls/minute, seeing Exact Occurrences (k) = 2 calls has probability (3² × e⁻³) / 2! = P(X = 2) = 22.404% (0.22404).',
    faqs: [
      {
        q: 'Can Expected Rate (λ) take decimals like 2.4 while Exact Occurrences (k) is whole?',
        a: 'Yes—average rates are routinely fractional (e.g., 2.4 customers/min), whereas observed integer counts k must be whole numbers ≥ 0.',
      },
      {
        q: 'What is the variance of a Poisson distribution with λ = 3.0?',
        a: 'Uniquely for Poisson distributions, both Mean and Variance equal λ (3.0 here), giving SD = √3.0 ≈ 1.732.',
      },
      {
        q: 'How do you find P(X ≤ 2) cumulative probability?',
        a: 'Compute P(X = 0), P(X = 1), and P(X = 2) separately and add those three percentages together.',
      },
    ],
  },

  'stats-binomial': {
    seoTitle: `Free Binomial Distribution Mean & Variance Calculator – np(1−p) | ${SITE_NAME}`,
    metaDescription:
      'Compute expected success count (μ = np), variance, and SD for binary trials using our free Binomial Distribution Mean & Variance Calculator.',
    howToUseSteps: [
      'Enter fixed count of independent yes/no trials inside Number of Trials (n).',
      'Type single-trial success probability (0 to 1) into Probability of Success (p).',
      'Inspect theoretical mean μ, variance σ², and standard deviation σ.',
    ],
    formulaExplanation:
      'Independent Bernoulli trials with constant success chance p summarize expected successes via n × p and spread via np(1 − p), peaking in variance when p = 0.50. Formula: Mean μ = n × p; Variance σ² = n × p × (1 − p); SD σ = √[n × p × (1 − p)].',
    practicalExample:
      'Running Number of Trials (n) = 50 with Probability of Success (p) = 0.4 computes Mean (μ) = 20.00, Variance (σ²) = 12.00, and Standard Deviation (σ) = 3.46.',
    faqs: [
      {
        q: 'Why must Probability of Success (p) sit between 0 and 1?',
        a: 'Probabilities represent proportions—enter 0.40 for 40%, never 40.',
      },
      {
        q: 'At what value of Probability of Success (p) does Binomial Variance peak?',
        a: 'Variance n × p(1 − p) reaches its maximum when p = 0.5 (a fair coin flip) and shrinks toward zero near p = 0 or p = 1.',
      },
      {
        q: 'When can a Binomial distribution be approximated by a Normal bell curve?',
        a: 'When both n × p ≥ 10 and n(1 − p) ≥ 10 (as with 20 and 30 here), a Normal curve with μ = 20.00 and σ = 3.46 fits closely.',
      },
    ],
  },

  'stats-kurtosis-skew': {
    seoTitle: `Free Skewness & Distribution Shape Estimator Calculator – Pearson | ${SITE_NAME}`,
    metaDescription:
      'Estimate asymmetry and tail direction from mean, median, and SD using our free Skewness & Distribution Shape Estimator Calculator.',
    howToUseSteps: [
      'Type distribution average inside Mean (x̄).',
      'Enter central rank midpoint into Median.',
      'Supply positive spread under Standard Deviation (s) to classify left-skewed, right-skewed, or symmetric shape.',
    ],
    formulaExplanation:
      'Pearson’s second skewness coefficient estimates directional asymmetry without raw third-moment data by scaling the gap between Mean and Median by Standard Deviation; positive outputs (> +0.2) signal right-skewed tails while negative (< −0.2) signal left-skewed tails. Formula: Skewness = 3 × (Mean − Median) / Standard Deviation.',
    practicalExample:
      'Evaluating Mean (x̄) = 50, Median = 48, and Standard Deviation (s) = 10 gives 3 × (50 − 48) / 10 = Skewness = 0.600 (Right-Skewed (Positive)).',
    faqs: [
      {
        q: 'Why does Mean > Median create Right-Skewed (Positive) results?',
        a: 'A long upper tail of high outliers pulls the Mean rightward above the Median, making (Mean − Median) positive.',
      },
      {
        q: 'What Skewness range qualifies as Approximately Symmetric?',
        a: 'Values between −0.200 and +0.200 show minimal separation between Mean and Median, resembling balanced symmetric shapes.',
      },
      {
        q: 'What real-world variable typically shows Negative (Left) Skewness?',
        a: 'Easy exam scores where most students score 80%–95% while a few low outliers drag the mean down often exhibit negative skewness.',
      },
    ],
  },
};
