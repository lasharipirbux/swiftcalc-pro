import type { Category } from "../../types.ts";

export const mathCategory: Category = {
    id: 'math',
    name: 'Math & Basic',
    iconName: 'Calculator',
    description: 'Fundamental math, algebra, geometry, trigonometry, arithmetic, and advanced mathematical calculators.',
    color: 'from-blue-600 to-indigo-700',
    calculators: [
      {
        id: 'basic-calc',
        name: 'Basic Calculator',
        categoryId: 'math',
        description: 'Perform standard arithmetic operations: addition, subtraction, multiplication, division.',
        inputs: [{ id: 'expression', label: 'Math Expression', type: 'text', defaultValue: '100 + 50 * 2' }],
        calculate: (vals) => {
          try {
            const sanitized = String(vals.expression || '0').replace(/[^0-9+\-*/().%]/g, '');
            const res = Function(`return ${sanitized}`)();
            return { result: res, formula: `Expression: ${vals.expression}`, steps: [`Evaluated: ${sanitized}`, `Result: ${res}`] };
          } catch {
            return { result: 'Invalid Expression', formula: 'Arithmetic syntax error' };
          }
        }
      },
      {
        id: 'scientific-calc',
        name: 'Scientific Calculator',
        categoryId: 'math',
        description: 'Trigonometric, logarithmic, and exponential math operations.',
        inputs: [
          { id: 'op', label: 'Operation', type: 'select', defaultValue: 'sin', options: [
            { label: 'Sine (sin)', value: 'sin' }, { label: 'Cosine (cos)', value: 'cos' }, { label: 'Tangent (tan)', value: 'tan' },
            { label: 'Square Root (sqrt)', value: 'sqrt' }, { label: 'Natural Log (ln)', value: 'ln' }, { label: 'Base-10 Log (log10)', value: 'log10' }
          ]},
          { id: 'num', label: 'Value', type: 'number', defaultValue: 45 }
        ],
        calculate: (vals) => {
          const n = Number(vals.num);
          const rad = (n * Math.PI) / 180;
          let res = 0;
          switch (vals.op) {
            case 'sin': res = Math.sin(rad); break;
            case 'cos': res = Math.cos(rad); break;
            case 'tan': res = Math.tan(rad); break;
            case 'sqrt': res = Math.sqrt(n); break;
            case 'ln': res = Math.log(n); break;
            case 'log10': res = Math.log10(n); break;
          }
          return { result: Number(res.toFixed(6)), formula: `${vals.op}(${n})`, steps: [`Computed ${vals.op} on ${n}`] };
        }
      },
      {
        id: 'fraction-calc',
        name: 'Fraction Calculator',
        categoryId: 'math',
        description: 'Add, subtract, multiply, and divide fractions.',
        inputs: [
          { id: 'n1', label: 'Numerator 1', type: 'number', defaultValue: 1 },
          { id: 'd1', label: 'Denominator 1', type: 'number', defaultValue: 2 },
          { id: 'op', label: 'Operation', type: 'select', defaultValue: '+', options: [{ label: '+', value: '+' }, { label: '-', value: '-' }, { label: '*', value: '*' }, { label: '/', value: '/' }] },
          { id: 'n2', label: 'Numerator 2', type: 'number', defaultValue: 1 },
          { id: 'd2', label: 'Denominator 2', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const n1 = Number(vals.n1), d1 = Number(vals.d1), n2 = Number(vals.n2), d2 = Number(vals.d2);
          if (d1 === 0 || d2 === 0) return { result: 'Denominator cannot be zero' };
          let rn = 0, rd = 1;
          switch (vals.op) {
            case '+': rn = n1 * d2 + n2 * d1; rd = d1 * d2; break;
            case '-': rn = n1 * d2 - n2 * d1; rd = d1 * d2; break;
            case '*': rn = n1 * n2; rd = d1 * d2; break;
            case '/': rn = n1 * d2; rd = d1 * n2; break;
          }
          const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
          const common = gcd(Math.abs(rn), Math.abs(rd));
          const sn = rn / common;
          const sd = rd / common;
          return { result: `${sn}/${sd}`, secondaryResult: `Decimal: ${(rn / rd).toFixed(4)}`, formula: `Fraction arithmetic with simplification` };
        }
      },
      {
        id: 'decimal-calc',
        name: 'Decimal to Fraction Calculator',
        categoryId: 'math',
        description: 'Convert any decimal number into its exact fraction form.',
        inputs: [{ id: 'dec', label: 'Decimal Value', type: 'number', defaultValue: 0.75 }],
        calculate: (vals) => {
          const d = Number(vals.dec);
          const len = String(d).split('.')[1]?.length || 0;
          const denominator = Math.pow(10, len);
          const numerator = d * denominator;
          const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
          const common = gcd(numerator, denominator);
          return { result: `${numerator / common} / ${denominator / common}`, formula: `Decimal ${d} converted to reduced fraction` };
        }
      },
      {
        id: 'percentage-calc',
        name: 'Percentage Calculator',
        categoryId: 'math',
        description: 'Calculate percentage, increases, decreases, and proportions.',
        inputs: [
          { id: 'part', label: 'Part / Amount', type: 'number', defaultValue: 45 },
          { id: 'total', label: 'Total / Whole', type: 'number', defaultValue: 150 }
        ],
        calculate: (vals) => {
          const p = Number(vals.part), t = Number(vals.total);
          const pct = t !== 0 ? (p / t) * 100 : 0;
          return { result: `${pct.toFixed(2)}%`, secondaryResult: `Difference: ${p - t}`, formula: `(Part / Total) * 100` };
        }
      },
      {
        id: 'ratio-calc',
        name: 'Ratio Calculator',
        categoryId: 'math',
        description: 'Solve proportions A:B = C:D.',
        inputs: [{ id: 'a', label: 'A', type: 'number', defaultValue: 3 }, { id: 'b', label: 'B', type: 'number', defaultValue: 5 }, { id: 'c', label: 'C', type: 'number', defaultValue: 15 }],
        calculate: (vals) => {
          const a = Number(vals.a), b = Number(vals.b), c = Number(vals.c);
          const d = a !== 0 ? (b * c) / a : 0;
          return { result: d.toFixed(4), formula: `D = (B * C) / A` };
        }
      },
      {
        id: 'average-calc',
        name: 'Average (Mean) Calculator',
        categoryId: 'math',
        description: 'Compute arithmetic mean, sum, and count of a number list.',
        inputs: [{ id: 'numbers', label: 'Numbers (comma separated)', type: 'text', defaultValue: '10, 20, 30, 40, 50' }],
        calculate: (vals) => {
          const arr = String(vals.numbers || '').split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'No valid numbers' };
          const sum = arr.reduce((a, b) => a + b, 0);
          return { result: (sum / arr.length).toFixed(2), secondaryResult: `Sum: ${sum} | Count: ${arr.length}`, formula: `Sum / Count` };
        }
      },
      {
        id: 'square-root',
        name: 'Square & Cube Root Calculator',
        categoryId: 'math',
        description: 'Compute square and cube roots.',
        inputs: [{ id: 'num', label: 'Number', type: 'number', defaultValue: 144 }],
        calculate: (vals) => {
          const n = Number(vals.num);
          return { result: `Square Root: ${Math.sqrt(n).toFixed(4)}`, secondaryResult: `Cube Root: ${Math.cbrt(n).toFixed(4)}`, formula: `√n and ∛n` };
        }
      },
      {
        id: 'power-exponent',
        name: 'Power & Exponent Calculator',
        categoryId: 'math',
        description: 'Calculate x^y powers.',
        inputs: [{ id: 'base', label: 'Base (x)', type: 'number', defaultValue: 3 }, { id: 'exp', label: 'Exponent (y)', type: 'number', defaultValue: 4 }],
        calculate: (vals) => {
          const res = Math.pow(Number(vals.base), Number(vals.exp));
          return { result: res, formula: `${vals.base} ^ ${vals.exp}` };
        }
      },
      {
        id: 'lcm-gcd',
        name: 'LCM & GCD Calculator',
        categoryId: 'math',
        description: 'Find least common multiple and greatest common divisor.',
        inputs: [{ id: 'a', label: 'Number 1', type: 'number', defaultValue: 36 }, { id: 'b', label: 'Number 2', type: 'number', defaultValue: 48 }],
        calculate: (vals) => {
          const x = Math.abs(Number(vals.a)), y = Math.abs(Number(vals.b));
          const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
          const g = gcd(x, y);
          const l = (x && y) ? (x * y) / g : 0;
          return { result: `GCD: ${g} | LCM: ${l}`, formula: `Euclidean algorithm` };
        }
      },
      {
        id: 'prime-number',
        name: 'Prime Number Checker',
        categoryId: 'math',
        description: 'Check if a number is prime and find its factors.',
        inputs: [{ id: 'num', label: 'Integer', type: 'number', defaultValue: 97 }],
        calculate: (vals) => {
          const n = Math.abs(parseInt(String(vals.num)) || 0);
          if (n <= 1) return { result: 'Not Prime' };
          let isPrime = true;
          for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) { isPrime = false; break; }
          }
          return { result: isPrime ? 'Prime Number' : 'Composite Number', formula: `Primality test up to √n` };
        }
      },
      {
        id: 'factorial-calc',
        name: 'Factorial Calculator',
        categoryId: 'math',
        description: 'Calculate n! factorial.',
        inputs: [{ id: 'n', label: 'Integer n', type: 'number', defaultValue: 7 }],
        calculate: (vals) => {
          let num = Math.min(170, Math.max(0, parseInt(String(vals.n)) || 0));
          let f = 1;
          for (let i = 2; i <= num; i++) f *= i;
          return { result: f, formula: `${num}!` };
        }
      },
      {
        id: 'quadratic-solver',
        name: 'Quadratic Equation Solver',
        categoryId: 'math',
        description: 'Solve ax² + bx + c = 0.',
        inputs: [{ id: 'a', label: 'a', type: 'number', defaultValue: 1 }, { id: 'b', label: 'b', type: 'number', defaultValue: -3 }, { id: 'c', label: 'c', type: 'number', defaultValue: -10 }],
        calculate: (vals) => {
          const a = Number(vals.a), b = Number(vals.b), c = Number(vals.c);
          if (a === 0) return { result: 'Not quadratic (a=0)' };
          const disc = b * b - 4 * a * c;
          if (disc < 0) return { result: `Complex Roots` };
          const r1 = ((-b + Math.sqrt(disc)) / (2 * a)).toFixed(4);
          const r2 = ((-b - Math.sqrt(disc)) / (2 * a)).toFixed(4);
          return { result: `x₁ = ${r1}, x₂ = ${r2}`, secondaryResult: `Discriminant: ${disc}`, formula: `Quadratic formula` };
        }
      },
      {
        id: 'matrix-calc',
        name: 'Matrix Determinant & Addition',
        categoryId: 'math',
        description: 'Calculate 2x2 matrix determinant.',
        inputs: [{ id: 'a', label: 'a (1,1)', type: 'number', defaultValue: 4 }, { id: 'b', label: 'b (1,2)', type: 'number', defaultValue: 6 }, { id: 'c', label: 'c (2,1)', type: 'number', defaultValue: 3 }, { id: 'd', label: 'd (2,2)', type: 'number', defaultValue: 8 }],
        calculate: (vals) => {
          const a = Number(vals.a), b = Number(vals.b), c = Number(vals.c), d = Number(vals.d);
          const det = (a * d) - (b * c);
          return { result: `Determinant = ${det}`, formula: `ad - bc for 2x2 matrix` };
        }
      },
      // 11 New Math Calculators Added Below
      {
        id: 'math-pythagorean',
        name: 'Pythagorean Theorem Calculator',
        categoryId: 'math',
        description: 'Calculate right-angled triangle hypotenuse or side length (a² + b² = c²).',
        inputs: [
          { id: 'a', label: 'Side A', type: 'number', defaultValue: 3 },
          { id: 'b', label: 'Side B', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const a = Number(vals.a);
          const b = Number(vals.b);
          const c = Math.sqrt((a * a) + (b * b));
          return {
            result: `Hypotenuse (c) = ${c.toFixed(4)}`,
            secondaryResult: `Side A: ${a} | Side B: ${b}`,
            formula: 'c = √(a² + b²)'
          };
        }
      },
      {
        id: 'math-circle-area',
        name: 'Circle Area and Circumference Calculator',
        categoryId: 'math',
        description: 'Calculate area and circumference of a circle given its radius or diameter.',
        inputs: [
          { id: 'radius', label: 'Radius (r)', type: 'number', defaultValue: 7 }
        ],
        calculate: (vals) => {
          const r = Number(vals.radius);
          const area = Math.PI * r * r;
          const circ = 2 * Math.PI * r;
          return {
            result: `Area = ${area.toFixed(2)} sq units`,
            secondaryResult: `Circumference = ${circ.toFixed(2)} units`,
            formula: 'Area = πr², Circumference = 2πr'
          };
        }
      },
      {
        id: 'math-triangle-area',
        name: 'Triangle Area Calculator',
        categoryId: 'math',
        description: 'Calculate triangle area using base and height.',
        inputs: [
          { id: 'base', label: 'Base (b)', type: 'number', defaultValue: 10 },
          { id: 'height', label: 'Height (h)', type: 'number', defaultValue: 6 }
        ],
        calculate: (vals) => {
          const b = Number(vals.base);
          const h = Number(vals.height);
          const area = 0.5 * b * h;
          return {
            result: `Area = ${area.toFixed(2)} sq units`,
            secondaryResult: `Base: ${b} | Height: ${h}`,
            formula: 'Area = 0.5 × Base × Height'
          };
        }
      },
      {
        id: 'math-rectangle',
        name: 'Rectangle & Square Area Calculator',
        categoryId: 'math',
        description: 'Calculate area, perimeter, and diagonal of a rectangle.',
        inputs: [
          { id: 'length', label: 'Length', type: 'number', defaultValue: 12 },
          { id: 'width', label: 'Width', type: 'number', defaultValue: 8 }
        ],
        calculate: (vals) => {
          const l = Number(vals.length);
          const w = Number(vals.width);
          const area = l * w;
          const perimeter = 2 * (l + w);
          const diagonal = Math.sqrt((l * l) + (w * w));
          return {
            result: `Area = ${area.toFixed(2)} sq units`,
            secondaryResult: `Perimeter = ${perimeter} | Diagonal = ${diagonal.toFixed(2)}`,
            formula: 'Area = Length × Width, Perimeter = 2(L + W)'
          };
        }
      },
      {
        id: 'math-sphere',
        name: 'Sphere Volume and Surface Area',
        categoryId: 'math',
        description: 'Calculate volume and surface area of a sphere.',
        inputs: [
          { id: 'radius', label: 'Radius (r)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const r = Number(vals.radius);
          const vol = (4 / 3) * Math.PI * Math.pow(r, 3);
          const sa = 4 * Math.PI * Math.pow(r, 2);
          return {
            result: `Volume = ${vol.toFixed(2)} cubic units`,
            secondaryResult: `Surface Area = ${sa.toFixed(2)} sq units`,
            formula: 'Volume = (4/3)πr³, Surface Area = 4πr²'
          };
        }
      },
      {
        id: 'math-cylinder',
        name: 'Cylinder Volume & Surface Area',
        categoryId: 'math',
        description: 'Calculate volume and total surface area of a cylinder.',
        inputs: [
          { id: 'radius', label: 'Radius (r)', type: 'number', defaultValue: 4 },
          { id: 'height', label: 'Height (h)', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const r = Number(vals.radius);
          const h = Number(vals.height);
          const vol = Math.PI * r * r * h;
          const sa = (2 * Math.PI * r * h) + (2 * Math.PI * r * r);
          return {
            result: `Volume = ${vol.toFixed(2)} cubic units`,
            secondaryResult: `Surface Area = ${sa.toFixed(2)} sq units`,
            formula: 'Volume = πr²h, Surface Area = 2πrh + 2πr²'
          };
        }
      },
      {
        id: 'math-cone',
        name: 'Cone Volume & Surface Area',
        categoryId: 'math',
        description: 'Calculate volume and surface area of a circular cone.',
        inputs: [
          { id: 'radius', label: 'Radius (r)', type: 'number', defaultValue: 3 },
          { id: 'height', label: 'Height (h)', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const r = Number(vals.radius);
          const h = Number(vals.height);
          const slant = Math.sqrt((r * r) + (h * h));
          const vol = (1 / 3) * Math.PI * r * r * h;
          const sa = Math.PI * r * (r + slant);
          return {
            result: `Volume = ${vol.toFixed(2)} cubic units`,
            secondaryResult: `Surface Area = ${sa.toFixed(2)} sq units | Slant Height = ${slant.toFixed(2)}`,
            formula: 'Volume = (1/3)πr²h, Surface Area = πr(r + slant)'
          };
        }
      },
      {
        id: 'math-ap-series',
        name: 'Arithmetic Progression (AP) Calculator',
        categoryId: 'math',
        description: 'Calculate nth term and sum of an arithmetic progression series.',
        inputs: [
          { id: 'a', label: 'First Term (a)', type: 'number', defaultValue: 2 },
          { id: 'd', label: 'Common Difference (d)', type: 'number', defaultValue: 3 },
          { id: 'n', label: 'Term Number (n)', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const a = Number(vals.a);
          const d = Number(vals.d);
          const n = Number(vals.n);
          const nthTerm = a + (n - 1) * d;
          const sum = (n / 2) * (2 * a + (n - 1) * d);
          return {
            result: `n-th Term = ${nthTerm}`,
            secondaryResult: `Sum of first ${n} terms = ${sum}`,
            formula: 'An = a + (n-1)d, Sn = (n/2)[2a + (n-1)d]'
          };
        }
      },
      {
        id: 'math-gp-series',
        name: 'Geometric Progression (GP) Calculator',
        categoryId: 'math',
        description: 'Calculate nth term of a geometric progression series.',
        inputs: [
          { id: 'a', label: 'First Term (a)', type: 'number', defaultValue: 3 },
          { id: 'r', label: 'Common Ratio (r)', type: 'number', defaultValue: 2 },
          { id: 'n', label: 'Term Number (n)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const a = Number(vals.a);
          const r = Number(vals.r);
          const n = Number(vals.n);
          const nthTerm = a * Math.pow(r, n - 1);
          return {
            result: `n-th Term = ${nthTerm}`,
            secondaryResult: `First term: ${a} | Ratio: ${r}`,
            formula: 'An = a × r^(n-1)'
          };
        }
      },
      {
        id: 'math-log-custom',
        name: 'Custom Base Logarithm Calculator',
        categoryId: 'math',
        description: 'Calculate logarithm with custom base.',
        inputs: [
          { id: 'num', label: 'Number', type: 'number', defaultValue: 64 },
          { id: 'base', label: 'Base', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const n = Number(vals.num);
          const b = Number(vals.base);
          if (n <= 0 || b <= 0 || b === 1) return { result: 'Invalid numbers for logarithm' };
          const res = Math.log(n) / Math.log(b);
          return {
            result: `Log₍${b}₎(${n}) = ${res.toFixed(4)}`,
            secondaryResult: `Logarithm base ${b} calculation`,
            formula: 'Log_b(n) = ln(n) / ln(b)'
          };
        }
      },
      {
        id: 'math-perm-comb',
        name: 'Permutation & Combination Calculator',
        categoryId: 'math',
        description: 'Calculate permutations (nPr) and combinations (nCr).',
        inputs: [
          { id: 'n', label: 'Total Items (n)', type: 'number', defaultValue: 10 },
          { id: 'r', label: 'Chosen Items (r)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const n = Math.round(Number(vals.n));
          const r = Math.round(Number(vals.r));
          if (r > n || n < 0 || r < 0) return { result: 'Invalid inputs (n >= r >= 0)' };
          const factorial = (num: number): number => (num <= 1 ? 1 : num * factorial(num - 1));
          const nPr = factorial(n) / factorial(n - r);
          const nCr = factorial(n) / (factorial(r) * factorial(n - r));
          return {
            result: `nPr = ${nPr.toLocaleString()} | nCr = ${nCr.toLocaleString()}`,
            secondaryResult: `For n = ${n}, r = ${r}`,
            formula: 'nPr = n! / (n-r)!, nCr = n! / [r!(n-r)!]'
          };
        }
      },
      {
        id: 'math-prime-factor',
        name: 'Prime Factorization Calculator',
        categoryId: 'math',
        description: 'Find all prime factors of a positive integer.',
        inputs: [
          { id: 'num', label: 'Number to Factorize', type: 'number', defaultValue: 360 }
        ],
        calculate: (vals) => {
          let n = Math.round(Number(vals.num));
          if (n <= 1) return { result: 'Enter an integer greater than 1' };
          const factors: number[] = [];
          let d = 2;
          while (n > 1) {
            while (n % d === 0) {
              factors.push(d);
              n = n / d;
            }
            d++;
            if (d * d > n && n > 1) {
              factors.push(n);
              break;
            }
          }
          return {
            result: `Prime Factors: ${factors.join(' × ')}`,
            secondaryResult: `Total prime factors count: ${factors.length}`,
            formula: 'Repeated division by smallest prime divisors'
          };
        }
      },
      {
        id: 'math-fraction-arithmetic',
        name: 'Fraction Arithmetic Calculator',
        categoryId: 'math',
        description: 'Add, subtract, multiply, or divide two common fractions.',
        inputs: [
          { id: 'n1', label: 'Fraction 1 Numerator', type: 'number', defaultValue: 1 },
          { id: 'd1', label: 'Fraction 1 Denominator', type: 'number', defaultValue: 2 },
          { id: 'op', label: 'Operation', type: 'select', defaultValue: 'add', options: [
            { label: 'Addition (+)', value: 'add' },
            { label: 'Subtraction (-)', value: 'sub' },
            { label: 'Multiplication (×)', value: 'mul' },
            { label: 'Division (÷)', value: 'div' }
          ]},
          { id: 'n2', label: 'Fraction 2 Numerator', type: 'number', defaultValue: 1 },
          { id: 'd2', label: 'Fraction 2 Denominator', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const n1 = Number(vals.n1), d1 = Number(vals.d1);
          const n2 = Number(vals.n2), d2 = Number(vals.d2);
          if (d1 === 0 || d2 === 0) return { result: 'Denominators cannot be zero' };
          let resN = 0, resD = 1;
          if (vals.op === 'add') {
            resN = n1 * d2 + n2 * d1;
            resD = d1 * d2;
          } else if (vals.op === 'sub') {
            resN = n1 * d2 - n2 * d1;
            resD = d1 * d2;
          } else if (vals.op === 'mul') {
            resN = n1 * n2;
            resD = d1 * d2;
          } else if (vals.op === 'div') {
            if (n2 === 0) return { result: 'Cannot divide by zero fraction' };
            resN = n1 * d2;
            resD = d1 * n2;
          }
          const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
          const common = gcd(Math.abs(resN), Math.abs(resD));
          const simpN = resN / common;
          const simpD = resD / common;
          return {
            result: `${simpN}/${simpD} (${(simpN / simpD).toFixed(4)})`,
            secondaryResult: `Unsimplified: ${resN}/${resD}`,
            formula: 'Standard fraction arithmetic with GCD simplification'
          };
        }
      },
      {
        id: 'math-base-conv',
        name: 'Number Base Converter (Bin, Oct, Hex)',
        categoryId: 'math',
        description: 'Convert a decimal number to Binary, Octal, and Hexadecimal.',
        inputs: [
          { id: 'dec', label: 'Decimal Number', type: 'number', defaultValue: 255 }
        ],
        calculate: (vals) => {
          const d = Math.round(Number(vals.dec));
          if (d < 0) return { result: 'Enter non-negative integer' };
          return {
            result: `Binary: 0b${d.toString(2)}`,
            secondaryResult: `Hex: 0x${d.toString(16).toUpperCase()} | Octal: 0o${d.toString(8)}`,
            formula: 'Base number system conversion'
          };
        }
      }
    ]
  };
