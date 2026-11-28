import { Category } from "../../types";

export const statisticsCategory: Category = {
    id: 'statistics',
    name: 'Statistics & Data',
    iconName: 'BarChart3',
    description: 'Mean, median, mode, variance, standard deviation, z-score, probability, permutations, combinations, and regression.',
    color: 'from-indigo-600 to-blue-900',
    calculators: [
      {
        id: 'stats-summary',
        name: 'Statistical Summary',
        categoryId: 'statistics',
        description: 'Calculate mean, median, sum, and count from a dataset.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '12, 18, 22, 25, 30, 42' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'Enter valid numbers' };
          const sum = arr.reduce((a, b) => a + b, 0);
          const mean = sum / arr.length;
          const sorted = [...arr].sort((a, b) => a - b);
          const mid = Math.floor(sorted.length / 2);
          const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
          return {
            result: `Mean: ${mean.toFixed(2)} | Median: ${median}`,
            secondaryResult: `Count: ${arr.length} | Sum: ${sum} | Min: ${sorted[0]} | Max: ${sorted[sorted.length - 1]}`,
            formula: 'Mean = Sum / Count; Median = Middle value'
          };
        }
      },
      {
        id: 'stats-median',
        name: 'Median Calculator',
        categoryId: 'statistics',
        description: 'Find the exact median and middle position of a numerical dataset.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '5, 2, 9, 1, 7, 6' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'Enter valid numbers' };
          const sorted = [...arr].sort((a, b) => a - b);
          const mid = Math.floor(sorted.length / 2);
          const median = sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
          return {
            result: `Median: ${median}`,
            secondaryResult: `Sorted: [${sorted.join(', ')}]`,
            formula: 'Middle value of sorted dataset'
          };
        }
      },
      {
        id: 'stats-mode',
        name: 'Mode Calculator',
        categoryId: 'statistics',
        description: 'Find the most frequently occurring values (mode) in a dataset.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '4, 2, 4, 3, 6, 2, 4, 5' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'Enter valid numbers' };
          const counts: Record<number, number> = {};
          let maxFreq = 0;
          arr.forEach(n => {
            counts[n] = (counts[n] || 0) + 1;
            if (counts[n] > maxFreq) maxFreq = counts[n];
          });
          const modes = Object.keys(counts).filter(n => counts[Number(n)] === maxFreq);
          return {
            result: `Mode: ${modes.join(', ')} (Freq: ${maxFreq})`,
            secondaryResult: `Dataset count: ${arr.length} items`,
            formula: 'Value(s) with highest occurrence frequency'
          };
        }
      },
      {
        id: 'stats-variance',
        name: 'Variance Calculator (Sample & Population)',
        categoryId: 'statistics',
        description: 'Calculate sample variance (n-1) and population variance (n).',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '2, 4, 6, 8, 10' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (arr.length < 2) return { result: 'Enter at least 2 numbers' };
          const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
          const sqDiffs = arr.map(n => Math.pow(n - mean, 2));
          const sumSq = sqDiffs.reduce((a, b) => a + b, 0);
          const sampleVar = sumSq / (arr.length - 1);
          const popVar = sumSq / arr.length;
          return {
            result: `Sample Var (s²): ${sampleVar.toFixed(3)}`,
            secondaryResult: `Population Var (σ²): ${popVar.toFixed(3)} | Mean: ${mean}`,
            formula: 'Sample Variance = Σ(x - x̄)² / (n - 1)'
          };
        }
      },
      {
        id: 'stats-stddev',
        name: 'Standard Deviation Calculator',
        categoryId: 'statistics',
        description: 'Calculate sample and population standard deviation.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '10, 12, 23, 23, 16, 23, 21, 16' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (arr.length < 2) return { result: 'Enter at least 2 numbers' };
          const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
          const sumSq = arr.map(n => Math.pow(n - mean, 2)).reduce((a, b) => a + b, 0);
          const sampleSD = Math.sqrt(sumSq / (arr.length - 1));
          const popSD = Math.sqrt(sumSq / arr.length);
          return {
            result: `Sample SD (s): ${sampleSD.toFixed(3)}`,
            secondaryResult: `Population SD (σ): ${popSD.toFixed(3)} | Mean: ${mean.toFixed(2)}`,
            formula: 'Standard Deviation = √Variance'
          };
        }
      },
      {
        id: 'stats-zscore',
        name: 'Z-Score Calculator',
        categoryId: 'statistics',
        description: 'Calculate standard score (z-score) given value, mean, and standard deviation.',
        inputs: [
          { id: 'x', label: 'Value (x)', type: 'number', defaultValue: 85 },
          { id: 'mean', label: 'Mean (μ)', type: 'number', defaultValue: 70 },
          { id: 'sd', label: 'Standard Deviation (σ)', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const x = Number(vals.x);
          const m = Number(vals.mean);
          const sd = Number(vals.sd);
          if (sd <= 0) return { result: 'Standard Deviation must be > 0' };
          const z = (x - m) / sd;
          return {
            result: `Z-Score: ${z.toFixed(3)}`,
            secondaryResult: `Value is ${Math.abs(z).toFixed(2)} standard deviations ${z >= 0 ? 'above' : 'below'} mean`,
            formula: 'Z = (x - μ) / σ'
          };
        }
      },
      {
        id: 'stats-percentile',
        name: 'Percentile Calculator',
        categoryId: 'statistics',
        description: 'Find the value corresponding to a given percentile in a dataset.',
        inputs: [
          { id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '15, 20, 35, 40, 50, 65, 80, 95' },
          { id: 'p', label: 'Percentile (0 - 100)', type: 'number', defaultValue: 75 }
        ],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          const p = Number(vals.p);
          if (!arr.length) return { result: 'Enter valid numbers' };
          const sorted = [...arr].sort((a, b) => a - b);
          const index = (p / 100) * (sorted.length - 1);
          const lower = Math.floor(index);
          const upper = Math.ceil(index);
          const val = sorted[lower] + (sorted[upper] - sorted[lower]) * (index - lower);
          return {
            result: `${p}th Percentile = ${val.toFixed(2)}`,
            secondaryResult: `Sorted dataset: [${sorted.join(', ')}]`,
            formula: 'Linear interpolation percentile rank formula'
          };
        }
      },
      {
        id: 'stats-iqr',
        name: 'Interquartile Range (IQR) Calculator',
        categoryId: 'statistics',
        description: 'Calculate Q1, Q3, and Interquartile Range (IQR) for spread.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '7, 15, 36, 39, 40, 41' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (arr.length < 4) return { result: 'Enter at least 4 numbers' };
          const sorted = [...arr].sort((a, b) => a - b);
          const mid = Math.floor(sorted.length / 2);
          const lowerHalf = sorted.slice(0, mid);
          const upperHalf = sorted.slice(sorted.length % 2 === 0 ? mid : mid + 1);
          const q1 = lowerHalf[Math.floor(lowerHalf.length / 2)];
          const q3 = upperHalf[Math.floor(upperHalf.length / 2)];
          const iqr = q3 - q1;
          return {
            result: `IQR: ${iqr} (Q1: ${q1}, Q3: ${q3})`,
            secondaryResult: `Dataset range: ${sorted[0]} to ${sorted[sorted.length - 1]}`,
            formula: 'IQR = Q3 - Q1'
          };
        }
      },
      {
        id: 'stats-probability',
        name: 'Simple Probability Calculator',
        categoryId: 'statistics',
        description: 'Calculate probability of favorable outcomes over sample space.',
        inputs: [
          { id: 'fav', label: 'Favorable Outcomes', type: 'number', defaultValue: 4 },
          { id: 'total', label: 'Total Possible Outcomes', type: 'number', defaultValue: 52 }
        ],
        calculate: (vals) => {
          const f = Number(vals.fav);
          const t = Number(vals.total);
          if (t <= 0) return { result: 'Total outcomes must be > 0' };
          const prob = f / t;
          const pct = prob * 100;
          return {
            result: `${pct.toFixed(2)}% (${f}/${t})`,
            secondaryResult: `Decimal probability: ${prob.toFixed(4)}`,
            formula: 'P(A) = Favorable Outcomes / Total Outcomes'
          };
        }
      },
      {
        id: 'stats-combinatorics-ncr',
        name: 'Combinations (nCr) Calculator',
        categoryId: 'statistics',
        description: 'Calculate number of ways to choose r items from n items (order does not matter).',
        inputs: [
          { id: 'n', label: 'Total Items (n)', type: 'number', defaultValue: 10 },
          { id: 'r', label: 'Items Chosen (r)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const n = Number(vals.n);
          const r = Number(vals.r);
          if (r > n || n < 0 || r < 0) return { result: 'Invalid inputs (require 0 <= r <= n)' };
          const fact = (num: number): number => (num <= 1 ? 1 : num * fact(num - 1));
          const nCr = fact(n) / (fact(r) * fact(n - r));
          return {
            result: `nCr = ${nCr.toLocaleString()}`,
            secondaryResult: `${n} choose ${r} combinations`,
            formula: 'nCr = n! / (r! (n - r)!)'
          };
        }
      },
      {
        id: 'stats-permutations-npr',
        name: 'Permutations (nPr) Calculator',
        categoryId: 'statistics',
        description: 'Calculate arrangements of r items from n items (order matters).',
        inputs: [
          { id: 'n', label: 'Total Items (n)', type: 'number', defaultValue: 8 },
          { id: 'r', label: 'Items Arranged (r)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const n = Number(vals.n);
          const r = Number(vals.r);
          if (r > n || n < 0 || r < 0) return { result: 'Invalid inputs (require 0 <= r <= n)' };
          const fact = (num: number): number => (num <= 1 ? 1 : num * fact(num - 1));
          const nPr = fact(n) / fact(n - r);
          return {
            result: `nPr = ${nPr.toLocaleString()}`,
            secondaryResult: `${n} permute ${r} arrangements`,
            formula: 'nPr = n! / (n - r)!'
          };
        }
      },
      {
        id: 'stats-confidence-interval',
        name: 'Confidence Interval Calculator',
        categoryId: 'statistics',
        description: 'Calculate confidence interval for population mean.',
        inputs: [
          { id: 'mean', label: 'Sample Mean (x̄)', type: 'number', defaultValue: 100 },
          { id: 'sd', label: 'Standard Deviation (s)', type: 'number', defaultValue: 15 },
          { id: 'n', label: 'Sample Size (n)', type: 'number', defaultValue: 30 },
          { id: 'level', label: 'Confidence Level', type: 'select', defaultValue: '95', options: [
            { label: '90% (z = 1.645)', value: '90' },
            { label: '95% (z = 1.960)', value: '95' },
            { label: '99% (z = 2.576)', value: '99' }
          ]}
        ],
        calculate: (vals) => {
          const m = Number(vals.mean);
          const sd = Number(vals.sd);
          const n = Number(vals.n);
          if (n <= 0 || sd <= 0) return { result: 'Sample size and SD must be > 0' };
          const z = vals.level === '90' ? 1.645 : vals.level === '99' ? 2.576 : 1.960;
          const margin = z * (sd / Math.sqrt(n));
          return {
            result: `${(m - margin).toFixed(2)} to ${(m + margin).toFixed(2)}`,
            secondaryResult: `Margin of Error: ±${margin.toFixed(2)} at ${vals.level}% confidence`,
            formula: 'CI = x̄ ± z * (s / √n)'
          };
        }
      },
      {
        id: 'stats-sample-size',
        name: 'Sample Size Calculator for Surveys',
        categoryId: 'statistics',
        description: 'Calculate required sample size for a given margin of error and population.',
        inputs: [
          { id: 'pop', label: 'Population Size (N)', type: 'number', defaultValue: 10000 },
          { id: 'margin', label: 'Margin of Error (%)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const N = Number(vals.pop);
          const e = Number(vals.margin) / 100;
          if (e <= 0) return { result: 'Margin of error must be > 0' };
          const z = 1.96; // 95% confidence
          const p = 0.5;
          const ss = (Math.pow(z, 2) * p * (1 - p) * N) / (Math.pow(e, 2) * (N - 1) + Math.pow(z, 2) * p * (1 - p));
          return {
            result: `Required Sample Size: ${Math.ceil(ss)}`,
            secondaryResult: `At 95% confidence level and ${vals.margin}% margin of error`,
            formula: 'Cochran sample size formula with finite population correction'
          };
        }
      },
      {
        id: 'stats-geometric-mean',
        name: 'Geometric Mean Calculator',
        categoryId: 'statistics',
        description: 'Calculate geometric mean for growth rates and financial returns.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '2, 8, 32' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => n > 0);
          if (!arr.length) return { result: 'Enter positive numbers' };
          const product = arr.reduce((a, b) => a * b, 1);
          const gm = Math.pow(product, 1 / arr.length);
          return {
            result: `Geometric Mean: ${gm.toFixed(3)}`,
            secondaryResult: `Product: ${product.toExponential(3)} | Count: ${arr.length}`,
            formula: 'GM = (x₁ · x₂ · ... · xₙ)^(1/n)'
          };
        }
      },
      {
        id: 'stats-harmonic-mean',
        name: 'Harmonic Mean Calculator',
        categoryId: 'statistics',
        description: 'Calculate harmonic mean for rates and ratios.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '10, 20, 60' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => n > 0);
          if (!arr.length) return { result: 'Enter positive numbers > 0' };
          const recipSum = arr.map(n => 1 / n).reduce((a, b) => a + b, 0);
          const hm = arr.length / recipSum;
          return {
            result: `Harmonic Mean: ${hm.toFixed(3)}`,
            secondaryResult: `Count: ${arr.length} | Sum of reciprocals: ${recipSum.toFixed(4)}`,
            formula: 'HM = n / Σ(1/x)'
          };
        }
      },
      {
        id: 'stats-coef-variation',
        name: 'Coefficient of Variation Calculator',
        categoryId: 'statistics',
        description: 'Calculate relative variability (CV) as percentage of the mean.',
        inputs: [
          { id: 'sd', label: 'Standard Deviation (σ)', type: 'number', defaultValue: 12 },
          { id: 'mean', label: 'Mean (μ)', type: 'number', defaultValue: 60 }
        ],
        calculate: (vals) => {
          const sd = Number(vals.sd);
          const m = Number(vals.mean);
          if (m === 0) return { result: 'Mean cannot be 0' };
          const cv = (sd / Math.abs(m)) * 100;
          return {
            result: `CV = ${cv.toFixed(2)}%`,
            secondaryResult: `Relative dispersion metric`,
            formula: 'CV = (Standard Deviation / |Mean|) × 100'
          };
        }
      },
      {
        id: 'stats-expected-value',
        name: 'Expected Value Calculator',
        categoryId: 'statistics',
        description: 'Calculate expected value E(X) from outcomes and probabilities.',
        inputs: [
          { id: 'vals', label: 'Values (comma sep)', type: 'text', defaultValue: '10, 50, 100' },
          { id: 'probs', label: 'Probabilities (comma sep, sums to 1)', type: 'text', defaultValue: '0.5, 0.3, 0.2' }
        ],
        calculate: (vals) => {
          const vArr = String(vals.vals).split(',').map(n => parseFloat(n.trim()));
          const pArr = String(vals.probs).split(',').map(n => parseFloat(n.trim()));
          if (vArr.length !== pArr.length || !vArr.length) return { result: 'Values and probabilities count must match' };
          let ev = 0;
          for (let i = 0; i < vArr.length; i++) {
            ev += vArr[i] * pArr[i];
          }
          return {
            result: `Expected Value E(X) = ${ev.toFixed(3)}`,
            secondaryResult: `Sum of products of values and probabilities`,
            formula: 'E(X) = Σ [ x · P(x) ]'
          };
        }
      },
      {
        id: 'stats-mad',
        name: 'Mean Absolute Deviation (MAD)',
        categoryId: 'statistics',
        description: 'Calculate average absolute distance between data values and mean.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '2, 3, 6, 8, 11' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'Enter valid numbers' };
          const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
          const absDiffs = arr.map(n => Math.abs(n - mean));
          const mad = absDiffs.reduce((a, b) => a + b, 0) / arr.length;
          return {
            result: `MAD = ${mad.toFixed(3)}`,
            secondaryResult: `Mean: ${mean.toFixed(2)}`,
            formula: 'MAD = Σ|x - x̄| / n'
          };
        }
      },
      {
        id: 'stats-range-iqr',
        name: 'Range Calculator',
        categoryId: 'statistics',
        description: 'Calculate maximum, minimum, and overall range of a dataset.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '14, 22, 9, 45, 31' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'Enter valid numbers' };
          const min = Math.min(...arr);
          const max = Math.max(...arr);
          const range = max - min;
          return {
            result: `Range = ${range} (Min: ${min}, Max: ${max})`,
            secondaryResult: `Difference between highest and lowest value`,
            formula: 'Range = Maximum value - Minimum value'
          };
        }
      },
      {
        id: 'stats-linear-regression',
        name: 'Simple Linear Regression Slope',
        categoryId: 'statistics',
        description: 'Calculate slope (m) and y-intercept (b) for line of best fit (y = mx + b).',
        inputs: [
          { id: 'xVals', label: 'X Values (comma sep)', type: 'text', defaultValue: '1, 2, 3, 4, 5' },
          { id: 'yVals', label: 'Y Values (comma sep)', type: 'text', defaultValue: '2, 4, 5, 4, 7' }
        ],
        calculate: (vals) => {
          const x = String(vals.xVals).split(',').map(n => parseFloat(n.trim()));
          const y = String(vals.yVals).split(',').map(n => parseFloat(n.trim()));
          if (x.length !== y.length || x.length < 2) return { result: 'X and Y lengths must match and have at least 2 points' };
          const n = x.length;
          const sumX = x.reduce((a, b) => a + b, 0);
          const sumY = y.reduce((a, b) => a + b, 0);
          const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
          const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
          const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
          const intercept = (sumY - slope * sumX) / n;
          return {
            result: `y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`,
            secondaryResult: `Slope (m): ${slope.toFixed(3)} | Intercept (b): ${intercept.toFixed(3)}`,
            formula: 'Least squares linear regression estimator'
          };
        }
      },
      {
        id: 'stats-correlation-coef',
        name: 'Pearson Correlation Coefficient (r)',
        categoryId: 'statistics',
        description: 'Calculate Pearson correlation r to measure linear association strength.',
        inputs: [
          { id: 'xVals', label: 'X Values (comma sep)', type: 'text', defaultValue: '1, 2, 3, 4, 5' },
          { id: 'yVals', label: 'Y Values (comma sep)', type: 'text', defaultValue: '2, 3, 5, 6, 8' }
        ],
        calculate: (vals) => {
          const x = String(vals.xVals).split(',').map(n => parseFloat(n.trim()));
          const y = String(vals.yVals).split(',').map(n => parseFloat(n.trim()));
          if (x.length !== y.length || x.length < 2) return { result: 'X and Y lengths must match' };
          const n = x.length;
          const sumX = x.reduce((a, b) => a + b, 0);
          const sumY = y.reduce((a, b) => a + b, 0);
          const sumXY = x.reduce((sum, xi, i) => sum + xi * y[i], 0);
          const sumX2 = x.reduce((sum, xi) => sum + xi * xi, 0);
          const sumY2 = y.reduce((sum, yi) => sum + yi * yi, 0);
          const numerator = n * sumXY - sumX * sumY;
          const denominator = Math.sqrt((n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY));
          if (denominator === 0) return { result: 'Denominator is zero (no variance)' };
          const r = numerator / denominator;
          return {
            result: `Correlation r = ${r.toFixed(3)}`,
            secondaryResult: `Strength: ${Math.abs(r) > 0.7 ? 'Strong' : Math.abs(r) > 0.3 ? 'Moderate' : 'Weak'} linear relation`,
            formula: 'Pearson r correlation formula'
          };
        }
      },
      {
        id: 'stats-relative-risk',
        name: 'Relative Risk & Odds Ratio',
        categoryId: 'statistics',
        description: 'Calculate relative risk and odds ratio for epidemiological/experimental data.',
        inputs: [
          { id: 'a', label: 'Exposed & Diseased (a)', type: 'number', defaultValue: 30 },
          { id: 'b', label: 'Exposed & Healthy (b)', type: 'number', defaultValue: 70 },
          { id: 'c', label: 'Unexposed & Diseased (c)', type: 'number', defaultValue: 10 },
          { id: 'd', label: 'Unexposed & Healthy (d)', type: 'number', defaultValue: 90 }
        ],
        calculate: (vals) => {
          const a = Number(vals.a), b = Number(vals.b), c = Number(vals.c), d = Number(vals.d);
          if ((b + d) === 0 || (c + d) === 0 || c === 0 || b === 0) return { result: 'Invalid non-zero inputs required' };
          const riskExposed = a / (a + b);
          const riskUnexposed = c / (c + d);
          const rr = riskExposed / riskUnexposed;
          const oddsRatio = (a * d) / (b * c);
          return {
            result: `Relative Risk (RR) = ${rr.toFixed(3)}`,
            secondaryResult: `Odds Ratio (OR) = ${oddsRatio.toFixed(3)}`,
            formula: 'RR = [a/(a+b)] / [c/(c+d)]; OR = (ad)/(bc)'
          };
        }
      },
      {
        id: 'stats-root-mean-square',
        name: 'Root Mean Square (RMS) Calculator',
        categoryId: 'statistics',
        description: 'Calculate quadratic mean (Root Mean Square) of dataset.',
        inputs: [{ id: 'data', label: 'Data Set (comma sep)', type: 'text', defaultValue: '3, -5, 7, -2, 8' }],
        calculate: (vals) => {
          const arr = String(vals.data).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'Enter valid numbers' };
          const sumSq = arr.map(n => n * n).reduce((a, b) => a + b, 0);
          const rms = Math.sqrt(sumSq / arr.length);
          return {
            result: `RMS = ${rms.toFixed(3)}`,
            secondaryResult: `Square root of mean of squared values`,
            formula: 'RMS = √ [ (Σ x²) / n ]'
          };
        }
      },
      {
        id: 'stats-pooling-variance',
        name: 'Pooled Variance Calculator',
        categoryId: 'statistics',
        description: 'Calculate pooled variance of two independent samples for t-tests.',
        inputs: [
          { id: 'n1', label: 'Sample 1 Size (n₁)', type: 'number', defaultValue: 15 },
          { id: 'v1', label: 'Sample 1 Variance (s₁²)', type: 'number', defaultValue: 12.5 },
          { id: 'n2', label: 'Sample 2 Size (n₂)', type: 'number', defaultValue: 20 },
          { id: 'v2', label: 'Sample 2 Variance (s₂²)', type: 'number', defaultValue: 15.0 }
        ],
        calculate: (vals) => {
          const n1 = Number(vals.n1), v1 = Number(vals.v1);
          const n2 = Number(vals.n2), v2 = Number(vals.v2);
          const df = n1 + n2 - 2;
          if (df <= 0) return { result: 'Degrees of freedom must be > 0' };
          const pooled = ((n1 - 1) * v1 + (n2 - 1) * v2) / df;
          return {
            result: `Pooled Variance (sp²) = ${pooled.toFixed(3)}`,
            secondaryResult: `Degrees of Freedom (df) = ${df}`,
            formula: 'sp² = [ (n₁-1)s₁² + (n₂-1)s₂² ] / (n₁ + n₂ - 2)'
          };
        }
      },
      {
        id: 'stats-mape',
        name: 'Mean Absolute Percentage Error (MAPE)',
        categoryId: 'statistics',
        description: 'Calculate forecasting accuracy using Mean Absolute Percentage Error (MAPE).',
        inputs: [
          { id: 'actuals', label: 'Actual Values (comma sep)', type: 'text', defaultValue: '100, 150, 200, 250' },
          { id: 'forecasts', label: 'Forecast Values (comma sep)', type: 'text', defaultValue: '110, 140, 210, 240' }
        ],
        calculate: (vals) => {
          const act = String(vals.actuals).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          const fc = String(vals.forecasts).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (act.length !== fc.length || !act.length) return { result: 'Actuals and Forecasts count must match and be valid numbers' };
          let sumPctErr = 0;
          let validCount = 0;
          for (let i = 0; i < act.length; i++) {
            if (act[i] !== 0) {
              sumPctErr += Math.abs((act[i] - fc[i]) / act[i]);
              validCount++;
            }
          }
          if (validCount === 0) return { result: 'Actual values cannot be zero' };
          const mape = (sumPctErr / validCount) * 100;
          return {
            result: `MAPE = ${mape.toFixed(2)}%`,
            secondaryResult: `Data points evaluated: ${validCount} | Average forecasting error percentage`,
            formula: 'MAPE = (100% / n) * Σ (|Actual - Forecast| / Actual)'
          };
        }
      },
      {
        id: 'stats-spearman',
        name: 'Spearman Rank Correlation Coefficient',
        categoryId: 'statistics',
        description: 'Calculate Spearman rank correlation (rho) for monotonic relationships.',
        inputs: [
          { id: 'x', label: 'X Ranks (comma sep)', type: 'text', defaultValue: '1, 2, 3, 4, 5' },
          { id: 'y', label: 'Y Ranks (comma sep)', type: 'text', defaultValue: '2, 1, 4, 3, 5' }
        ],
        calculate: (vals) => {
          const x = String(vals.x).split(',').map(n => parseFloat(n.trim()));
          const y = String(vals.y).split(',').map(n => parseFloat(n.trim()));
          if (x.length !== y.length || x.length < 2) return { result: 'Ranks must have equal length >= 2' };
          const n = x.length;
          let sumD2 = 0;
          for (let i = 0; i < n; i++) {
            sumD2 += Math.pow(x[i] - y[i], 2);
          }
          const rho = 1 - (6 * sumD2) / (n * (n * n - 1));
          return {
            result: `Spearman ρ = ${rho.toFixed(3)}`,
            secondaryResult: `Sample size n = ${n}`,
            formula: 'ρ = 1 - [6 Σ d² / (n(n² - 1))]'
          };
        }
      },
      {
        id: 'stats-poisson',
        name: 'Poisson Distribution Probability Calculator',
        categoryId: 'statistics',
        description: 'Calculate Poisson probability P(X = k) given expected mean rate (lambda).',
        inputs: [
          { id: 'lambda', label: 'Expected Rate (λ)', type: 'number', defaultValue: 3.0 },
          { id: 'k', label: 'Exact Occurrences (k)', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const lam = Number(vals.lambda);
          const k = Math.round(Number(vals.k));
          if (lam <= 0 || k < 0) return { result: 'Lambda > 0 and k >= 0 required' };
          const fact = (num: number): number => (num <= 1 ? 1 : num * fact(num - 1));
          const prob = (Math.pow(lam, k) * Math.exp(-lam)) / fact(k);
          return {
            result: `P(X = ${k}) = ${(prob * 100).toFixed(3)}%`,
            secondaryResult: `Probability decimal: ${prob.toFixed(5)}`,
            formula: 'P(X = k) = (λ^k · e^(-λ)) / k!'
          };
        }
      },
      {
        id: 'stats-binomial',
        name: 'Binomial Distribution Mean & Variance',
        categoryId: 'statistics',
        description: 'Calculate mean, variance, and standard deviation for binomial distributions.',
        inputs: [
          { id: 'n', label: 'Number of Trials (n)', type: 'number', defaultValue: 50 },
          { id: 'p', label: 'Probability of Success (p)', type: 'number', defaultValue: 0.4 }
        ],
        calculate: (vals) => {
          const n = Number(vals.n);
          const p = Number(vals.p);
          if (p < 0 || p > 1) return { result: 'Probability p must be between 0 and 1' };
          const mean = n * p;
          const variance = n * p * (1 - p);
          const sd = Math.sqrt(variance);
          return {
            result: `Mean (μ) = ${mean.toFixed(2)} | Variance (σ²) = ${variance.toFixed(2)}`,
            secondaryResult: `Standard Deviation (σ) = ${sd.toFixed(2)}`,
            formula: 'Mean = np; Variance = np(1-p); SD = √Variance'
          };
        }
      },
      {
        id: 'stats-kurtosis-skew',
        name: 'Skewness & Distribution Shape Estimator',
        categoryId: 'statistics',
        description: 'Estimate distribution asymmetry (skewness) from mean, median, and standard deviation.',
        inputs: [
          { id: 'mean', label: 'Mean (x̄)', type: 'number', defaultValue: 50 },
          { id: 'median', label: 'Median', type: 'number', defaultValue: 48 },
          { id: 'sd', label: 'Standard Deviation (s)', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mean);
          const med = Number(vals.median);
          const sd = Number(vals.sd);
          if (sd <= 0) return { result: 'Standard Deviation must be > 0' };
          const pearsonSkew = (3 * (m - med)) / sd;
          let skewType = 'Approximately Symmetric';
          if (pearsonSkew > 0.2) skewType = 'Right-Skewed (Positive)';
          else if (pearsonSkew < -0.2) skewType = 'Left-Skewed (Negative)';
          return {
            result: `Skewness = ${pearsonSkew.toFixed(3)} (${skewType})`,
            secondaryResult: `Pearson's second skewness coefficient approximation`,
            formula: 'Skewness = 3(Mean - Median) / Standard Deviation'
          };
        }
      }
    ]
  };
