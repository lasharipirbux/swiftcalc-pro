export interface MathCalculatorSeoEntry {
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const mathSeoFullMap: Record<string, MathCalculatorSeoEntry> = {
  'basic-calc': {
    howToUseSteps: [
      'Type any multi-step equation directly into the Math Expression field using digits, parentheses, and +, -, *, /, or % operators.',
      'Group inner additions or subtractions inside parentheses whenever you want those sub-calculations evaluated before multiplications.',
      'Watch the evaluated arithmetic output update instantaneously as you edit characters in the Math Expression box.',
      'Inspect the step trail listed in the Live Formula & Steps panel to confirm how operator precedence resolved your equation.',
    ],
    formulaExplanation:
      'Basic arithmetic expressions follow standard BODMAS/PEMDAS order of operations rather than strict left-to-right typing. Parentheses evaluate first, followed by multiplication, division, and modulo from left to right, and finally addition and subtraction. Formula: Result = Evaluate(Parentheses → Multiplication/Division → Addition/Subtraction). Keeping the full Math Expression visible in one line lets students, bookkeepers, and shoppers adjust individual terms without retyping an entire sum.',
    practicalExample:
      'Entering 100 + 50 * 2 into the Math Expression box evaluates 50 * 2 = 100 first according to multiplication precedence, then adds 100 to produce an exact final answer of 200 (instead of 300).',
    faqs: [
      {
        q: 'Why does 100 + 50 * 2 evaluate to 200 rather than 300?',
        a: 'Multiplication takes higher precedence than addition, so 50 * 2 executes before adding 100; wrap (100 + 50) in parentheses if you want addition done first.',
      },
      {
        q: 'Which math symbols are accepted inside the Math Expression input?',
        a: 'You may enter standard numbers, decimal points, parentheses (), addition +, subtraction -, multiplication *, division /, and modulo %.',
      },
      {
        q: 'How can I override default precedence in a long expression?',
        a: 'Place parentheses around whichever operations should execute earlier, such as (24 + 16) / 8 to get 5.',
      },
    ],
  },

  'scientific-calc': {
    howToUseSteps: [
      'Choose your desired mathematical function from the Operation selector: Sine (sin), Cosine (cos), Tangent (tan), Square Root (sqrt), Natural Log (ln), or Base-10 Log (log10).',
      'Enter the angle in degrees (for trigonometric choices) or positive numeric input inside the Value field.',
      'Check the six-decimal Calculated Result box immediately for the computed trigonometric ratio, radical, or logarithm.',
      'Switch the Operation dropdown while keeping the same Value to compare sine, cosine, and tangent values for one angle side by side.',
    ],
    formulaExplanation:
      'Trigonometric functions convert your degree entry into radians using π/180 before evaluating sin(θ), cos(θ), or tan(θ), while algebraic operations compute √x, ln(x), and log₁₀(x). Formula: Radians = Value × (π / 180); sin(θ) = Opposite / Hypotenuse, cos(θ) = Adjacent / Hypotenuse, tan(θ) = sin(θ) / cos(θ); √x = x^(1/2); ln(x) = logₑ(x). Essential for trigonometry coursework, physics lab work, and engineering estimates.',
    practicalExample:
      'Selecting Sine (sin) in Operation and typing 45 in Value converts 45° to 0.785398 radians and computes sin(45°) = 0.707107.',
    faqs: [
      {
        q: 'Does the Scientific Calculator expect angles in degrees or radians?',
        a: 'For sin, cos, and tan, the Value box accepts degrees directly and converts them internally by multiplying by π / 180.',
      },
      {
        q: 'What distinguishes Natural Log (ln) from Base-10 Log (log10)?',
        a: 'Natural Log uses Euler’s constant e ≈ 2.71828 as its base, whereas Base-10 Log measures powers of 10 (for instance, log10(1000) = 3).',
      },
      {
        q: 'Why must Value be strictly positive when selecting ln or log10?',
        a: 'Real-valued logarithms are only defined for numbers greater than 0 because no real exponent raises e or 10 to zero or a negative number.',
      },
    ],
  },

  'fraction-calc': {
    howToUseSteps: [
      'Fill in Numerator 1 and Denominator 1 to define your left-hand fraction (remember Denominator 1 cannot be zero).',
      'Pick +, -, *, or / in the Operation dropdown to combine the two fractions.',
      'Type Numerator 2 and Denominator 2 for your right-hand fraction.',
      'Read both the lowest-terms simplified fraction at the top and its four-decimal equivalent listed directly underneath.',
    ],
    formulaExplanation:
      'Addition and subtraction scale both fractions to a common denominator (d₁ × d₂) before combining numerators, whereas multiplication multiplies straight across and division multiplies by the reciprocal of the second fraction. Both numerator and denominator are then divided by their Greatest Common Divisor (GCD) to reduce the answer to simplest form. Formula: a/b ± c/d = (ad ± bc)/(bd); (a/b) × (c/d) = (ac)/(bd); (a/b) ÷ (c/d) = (ad)/(bc).',
    practicalExample:
      'With Numerator 1 = 1, Denominator 1 = 2, Operation = +, Numerator 2 = 1, and Denominator 2 = 4, common-denominator math produces 6/8, which simplifies via GCD(6, 8) = 2 to 3/4 (Decimal: 0.7500).',
    faqs: [
      {
        q: 'How does the fraction output get reduced to lowest terms automatically?',
        a: 'After computing the raw numerator and denominator, Euclid’s greatest common divisor divides both integers until they share no factor above 1.',
      },
      {
        q: 'Why does division flip the second fraction?',
        a: 'Dividing by c/d is mathematically identical to multiplying by its multiplicative inverse d/c.',
      },
      {
        q: 'Can I work with improper fractions whose numerator exceeds the denominator?',
        a: 'Yes, entering improper values such as Numerator 1 = 7 and Denominator 1 = 4 calculates accurately and keeps the answer in simplified improper fraction form.',
      },
    ],
  },

  'decimal-calc': {
    howToUseSteps: [
      'Enter any terminating decimal number—such as 0.75, 0.125, or 2.5—into the Decimal Value input box.',
      'Wait for the instant conversion reducing the fraction to its lowest integer terms.',
      'Read the simplified numerator / denominator fraction displayed in the Calculated Result box.',
      'Adjust digits after the decimal point in Decimal Value to see how extra precision changes the denominator power of 10.',
    ],
    formulaExplanation:
      'A terminating decimal with k digits after the decimal point equals an integer numerator divided by 10^k. The converter multiplies your Decimal Value by 10^k to clear the decimal point, finds the Greatest Common Divisor between that numerator and 10^k, and divides both by the GCD. Formula: Fraction = (Decimal × 10^k ÷ GCD) / (10^k ÷ GCD), where k is the decimal digit count.',
    practicalExample:
      'Typing 0.75 into Decimal Value counts 2 decimal digits, forming 75 / 100; dividing numerator and denominator by GCD(75, 100) = 25 yields the reduced fraction 3 / 4.',
    faqs: [
      {
        q: 'How does the converter handle decimals larger than 1, such as 1.25?',
        a: 'It converts 1.25 to 125 / 100 and reduces by 25 to output the improper fraction 5 / 4.',
      },
      {
        q: 'Why does 0.375 convert cleanly to 3 / 8?',
        a: 'With three decimal digits, 0.375 equals 375 / 1,000, and dividing both parts by 125 reduces it exactly to 3 / 8.',
      },
      {
        q: 'What if I enter a whole integer like 5 into Decimal Value?',
        a: 'With zero digits after the point, 10⁰ = 1, giving the exact fraction 5 / 1.',
      },
    ],
  },

  'percentage-calc': {
    howToUseSteps: [
      'Type the partial quantity or score you want to evaluate into the Part / Amount field.',
      'Enter the full reference baseline or maximum possible score inside the Total / Whole field.',
      'Read the exact percentage calculated to two decimal places in the top result panel.',
      'Check the Difference readout directly beneath to see how far Part / Amount sits above or below Total / Whole.',
    ],
    formulaExplanation:
      'A percentage expresses a proportion scaled out of 100 equal parts. Dividing your Part / Amount by Total / Whole gives a unit ratio, and multiplying by 100 converts that ratio into a percentage; subtracting Total / Whole from Part / Amount reveals the raw numeric variance. Formula: Percentage (%) = (Part / Total) × 100; Difference = Part − Total.',
    practicalExample:
      'Setting Part / Amount = 45 and Total / Whole = 150 divides 45 by 150 to get 0.30, multiplies by 100 to output 30.00%, and reports Difference: -105.',
    faqs: [
      {
        q: 'Can Part / Amount be greater than Total / Whole?',
        a: 'Yes, entering Part = 180 and Total = 150 accurately produces 120.00% with a positive difference of +30.',
      },
      {
        q: 'How can students use this to calculate exam marks percentages?',
        a: 'Put your obtained marks in Part / Amount and maximum total marks in Total / Whole to see your score percentage immediately.',
      },
      {
        q: 'What does a negative number in the Difference line mean?',
        a: 'It indicates by how many units your Part / Amount falls short of reaching 100% of Total / Whole.',
      },
    ],
  },

  'ratio-calc': {
    howToUseSteps: [
      'Enter the first term of your known ratio into field A (default 3).',
      'Enter the matching second term of your known ratio into field B (default 5).',
      'Type the known first term of your scaled target ratio into field C (default 15).',
      'Read the solved missing proportional term D rounded to four decimal places in the output panel.',
    ],
    formulaExplanation:
      'Equal ratios form the proportion A : B = C : D, which means A / B = C / D. Cross-multiplying gives A × D = B × C, and isolating the unknown fourth term D divides the product of B and C by A. Formula: D = (B × C) / A (for A ≠ 0). Useful for resizing recipes, scaling blueprints, and mixing chemical or concrete proportions.',
    practicalExample:
      'With A = 3, B = 5, and C = 15 in the proportion 3 : 5 = 15 : D, computing (5 × 15) / 3 = 75 / 3 solves D = 25.0000.',
    faqs: [
      {
        q: 'What does the solved value represent in A:B = C:D?',
        a: 'It represents the missing fourth value D that keeps the ratio C:D strictly proportional to A:B.',
      },
      {
        q: 'How can I double-check that the solved value D keeps both ratios equal?',
        a: 'Verify that A × D equals B × C—for example, 3 × 25 = 75 and 5 × 15 = 75.',
      },
      {
        q: 'Can decimal values be entered in fields A, B, or C?',
        a: 'Yes, fractional measurements such as 1.5 or 2.75 calculate cleanly for engineering or cooking scale-ups.',
      },
    ],
  },

  'average-calc': {
    howToUseSteps: [
      'Enter or paste your list of values into the Numbers (comma separated) field, placing a comma between each entry.',
      'Ensure decimals or negative values are separated clearly by commas rather than spaces alone.',
      'Read the arithmetic mean rounded to two decimal places in the primary output readout.',
      'Inspect the secondary line underneath to verify both the total Sum and exact Count of parsed items.',
    ],
    formulaExplanation:
      'The arithmetic mean summarizes a dataset by sharing its cumulative total equally across every observation. Non-numeric entries are filtered out automatically, then all valid numbers are summed and divided by how many numbers remain. Formula: Arithmetic Mean (x̄) = (x₁ + x₂ + … + xₙ) / n = Sum / Count.',
    practicalExample:
      'Entering 10, 20, 30, 40, 50 into Numbers (comma separated) totals Sum = 150 across Count = 5 items, yielding an arithmetic mean of 150 / 5 = 30.00.',
    faqs: [
      {
        q: 'What happens if there are extra spaces around the commas in my number list?',
        a: 'Whitespace around each comma is trimmed automatically, so both "10,20,30" and "10, 20, 30" calculate identically.',
      },
      {
        q: 'Can negative numbers and decimal scores be included together?',
        a: 'Yes, positive, negative, and decimal values all parse cleanly into the Sum and Mean.',
      },
      {
        q: 'Why does the output include Count alongside Sum?',
        a: 'Checking Count confirms that every single comma-separated entry in your list was parsed with none accidentally missed.',
      },
    ],
  },

  'square-root': {
    howToUseSteps: [
      'Type the target value you want to extract roots from into the Number field.',
      'Check the Calculated Result header for the principal square root (√n) formatted to four decimal places.',
      'Look directly beneath the main output to view the cube root (∛n) computed simultaneously for the same Number.',
      'Enter negative values when testing cube roots, noting that real cube roots remain defined even below zero.',
    ],
    formulaExplanation:
      'A square root √n finds the value whose second power equals n (r² = n), whereas a cube root ∛n finds the value whose third power equals n (r³ = n). Computing both side by side saves time when checking areas versus volumes. Formula: Square Root = √n = n^(1/2); Cube Root = ∛n = n^(1/3).',
    practicalExample:
      'Entering 144 into Number outputs Square Root: 12.0000 (since 12² = 144) alongside Cube Root: 5.2415 (since 5.2415³ ≈ 144).',
    faqs: [
      {
        q: 'Does √n give both positive and negative roots in geometry problems?',
        a: 'This calculator reports the principal non-negative square root; in pure algebra x² = 144 has solutions +12 and −12.',
      },
      {
        q: 'Why can you take the cube root of a negative number like −27, unlike a square root?',
        a: 'Multiplying three negatives produces a negative ((−3)³ = −27), whereas squaring any real number always gives zero or positive.',
      },
      {
        q: 'What makes 64 special for both square and cube roots?',
        a: '64 is both a perfect square (8² = 64) and a perfect cube (4³ = 64).',
      },
    ],
  },

  'power-exponent': {
    howToUseSteps: [
      'Enter the starting value being multiplied into the Base (x) box.',
      'Enter the power to raise it to inside the Exponent (y) box.',
      'Inspect the Calculated Result display for the evaluated value of x^y.',
      'Try zero, negative, or fractional numbers in Exponent (y) to explore inverse powers and roots.',
    ],
    formulaExplanation:
      'Exponentiation multiplies a Base (x) by itself Exponent (y) times for positive integers, turns negative exponents into reciprocals (x^(-y) = 1 / x^y), and evaluates x⁰ = 1 for nonzero bases. Formula: Result = x^y = Base ^ Exponent. Widely used in compound growth equations, scientific notation, and binary memory sizing.',
    practicalExample:
      'Setting Base (x) = 3 and Exponent (y) = 4 computes 3 × 3 × 3 × 3, outputting 81.',
    faqs: [
      {
        q: 'What does raising any nonzero Base (x) to Exponent (y) = 0 produce?',
        a: 'By the zero-exponent rule, x⁰ always equals 1 for any nonzero base.',
      },
      {
        q: 'How are negative powers like 2^(-3) evaluated?',
        a: 'A negative exponent means reciprocal division: 2^(-3) = 1 / 2³ = 1 / 8 = 0.125.',
      },
      {
        q: 'Can fractional exponents like 0.5 be entered into Exponent (y)?',
        a: 'Yes, entering Base (x) = 25 and Exponent (y) = 0.5 computes √25 = 5.',
      },
    ],
  },

  'lcm-gcd': {
    howToUseSteps: [
      'Type your first integer into the Number 1 input box (default 36).',
      'Type your second integer into the Number 2 input box (default 48).',
      'Read both the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) together in the result header.',
      'Adjust either Number 1 or Number 2 to test coprime pairs whose GCD equals 1.',
    ],
    formulaExplanation:
      'The Greatest Common Divisor is found via Euclid’s algorithm, repeatedly replacing the larger integer with its remainder modulo the smaller integer until reaching zero. Once GCD is known, multiplying the two numbers and dividing by their GCD yields the Least Common Multiple. Formula: GCD(a, b) = GCD(b, a mod b); LCM(a, b) = |a × b| / GCD(a, b).',
    practicalExample:
      'Entering Number 1 = 36 and Number 2 = 48 applies Euclid’s remainders (48 mod 36 = 12, 36 mod 12 = 0) to get GCD: 12, then computes (36 × 48) / 12 = LCM: 144.',
    faqs: [
      {
        q: 'What does it mean if two inputs show GCD: 1?',
        a: 'A GCD of 1 means Number 1 and Number 2 are coprime (sharing no common factor besides 1), making their LCM equal to their product.',
      },
      {
        q: 'How is LCM useful when adding two fractions by hand?',
        a: 'The LCM of two denominators gives the Lowest Common Denominator, keeping intermediate numerators as small as possible.',
      },
      {
        q: 'What role does GCD play in simplifying fractions?',
        a: 'Dividing both a fraction’s numerator and denominator by their GCD reduces the fraction directly to simplest form.',
      },
    ],
  },

  'prime-number': {
    howToUseSteps: [
      'Type any whole number you wish to classify into the Integer field (default 97).',
      'Observe the result status reading Prime Number, Composite Number, or Not Prime.',
      'Test edge values such as 1, 2, or large odd integers to see how primality rules apply.',
      'Use Prime Factorization next if a composite integer needs all its prime building blocks listed.',
    ],
    formulaExplanation:
      'A prime integer is greater than 1 and divisible only by 1 and itself. Rather than checking every candidate up to n − 1, trial division tests divisors d from 2 up to √n, because any factor larger than √n must pair with a complementary factor smaller than or equal to √n. Formula: n is Prime iff n > 1 and (n mod d ≠ 0 for all 2 ≤ d ≤ √n).',
    practicalExample:
      'Entering Integer = 97 checks divisors from 2 through √97 ≈ 9.84 (namely 2, 3, 4, 5, 6, 7, 8, 9); finding no remainder of 0 confirms 97 is a Prime Number.',
    faqs: [
      {
        q: 'Why are 0 and 1 classified as Not Prime?',
        a: 'By mathematical convention, a prime must have exactly two distinct positive divisors (1 and itself), whereas 1 has only one divisor.',
      },
      {
        q: 'What is the sole even prime number?',
        a: 'The integer 2 is the smallest and only even prime, because every larger even number divides evenly by 2.',
      },
      {
        q: 'Why does testing stop once divisors reach √n?',
        a: 'If n = a × b and neither factor exceeded √n, their product could not reach n; therefore at least one factor always sits at or below √n.',
      },
    ],
  },

  'factorial-calc': {
    howToUseSteps: [
      'Enter a non-negative whole number between 0 and 170 into the Integer n box.',
      'Check the Calculated Result readout for the exact product n! formatted with thousands separators.',
      'Compare sequential integers (such as 5, 6, 7) in Integer n to observe how quickly factorial values scale.',
      'Pair factorial values directly with Permutation & Combination formulas when counting arrangements.',
    ],
    formulaExplanation:
      'The factorial n! multiplies every positive integer sequentially from 1 up to n, with 0! defined by convention as 1 so combinatorial formulas hold consistently. Formula: n! = n × (n − 1) × (n − 2) × … × 2 × 1 (with 0! = 1). Inputs cap at 170 because 171! surpasses standard 64-bit IEEE-754 floating-point infinity.',
    practicalExample:
      'Setting Integer n = 7 evaluates 7 × 6 × 5 × 4 × 3 × 2 × 1, outputting 5,040.',
    faqs: [
      {
        q: 'Why is 0! equal to 1 rather than 0?',
        a: 'There is exactly 1 way to arrange zero objects (the empty permutation), and 0! = 1 preserves the recurrence n! = n × (n − 1)! for n = 1.',
      },
      {
        q: 'Why does the input cap at Integer n = 170?',
        a: '170! is approximately 7.26 × 10³⁰⁶, right below JavaScript’s maximum representable 64-bit floating number (~1.79 × 10³⁰⁸).',
      },
      {
        q: 'What does n! represent in probability and seating problems?',
        a: 'It counts the exact number of distinct ways n unique people or items can be ordered in a row.',
      },
    ],
  },

  'quadratic-solver': {
    howToUseSteps: [
      'Enter the x² coefficient in field a (default 1; must be nonzero for a quadratic equation).',
      'Type the linear x coefficient into field b, including a minus sign if negative (default -3).',
      'Type the constant term into field c (default -10).',
      'Review the real roots x₁ and x₂ in the top display alongside the Discriminant value underneath.',
    ],
    formulaExplanation:
      'Any second-degree polynomial ax² + bx + c = 0 solves analytically via the quadratic formula, where the discriminant Δ = b² − 4ac dictates whether two real roots, one repeated root, or complex roots exist. Formula: x = [−b ± √(b² − 4ac)] / (2a). Designed for algebra students, physics projectile problems, and parabolic curve analysis.',
    practicalExample:
      'Entering a = 1, b = -3, and c = -10 computes Discriminant: (-3)² − 4(1)(-10) = 49, then solves (3 ± 7) / 2 to output x₁ = 5.0000, x₂ = -2.0000.',
    faqs: [
      {
        q: 'What does the Discriminant line tell me about the graph of the parabola?',
        a: 'Positive Δ gives two distinct x-intercepts, Δ = 0 means the vertex touches the x-axis at one double root, and negative Δ means no real x-intercepts.',
      },
      {
        q: 'Why does setting a = 0 return a warning instead of roots?',
        a: 'When a = 0, the x² term disappears, turning the expression into a linear equation bx + c = 0 and making division by 2a impossible.',
      },
      {
        q: 'What happens if b² − 4ac is less than zero?',
        a: 'The solver identifies Complex Roots because taking the square root of a negative discriminant involves the imaginary unit i.',
      },
    ],
  },

  'matrix-calc': {
    howToUseSteps: [
      'Type the top-left element into a (1,1) (default 4) and the top-right element into b (1,2) (default 6).',
      'Enter the bottom-left element in c (2,1) (default 3) and the bottom-right element in d (2,2) (default 8).',
      'Read the computed 2×2 matrix determinant shown immediately in the result header.',
      'Adjust any entry to test singular matrices whose determinant drops to 0.',
    ],
    formulaExplanation:
      'The determinant of a 2×2 square matrix [[a, b], [c, d]] measures the signed area scaling factor of the linear transformation and reveals whether the matrix is invertible. It multiplies the main diagonal (a × d) and subtracts the anti-diagonal (b × c). Formula: det(M) = (a × d) − (b × c). Key for linear algebra, Cramer’s rule, and computer graphics.',
    practicalExample:
      'Using a (1,1) = 4, b (1,2) = 6, c (2,1) = 3, and d (2,2) = 8 calculates (4 × 8) − (6 × 3) = 32 − 18, outputting Determinant = 14.',
    faqs: [
      {
        q: 'What does Determinant = 0 signify for a 2×2 matrix?',
        a: 'A zero determinant indicates a singular matrix whose rows or columns are linearly dependent, meaning it has no matrix inverse.',
      },
      {
        q: 'Can negative determinants happen?',
        a: 'Yes, a negative determinant simply indicates that the matrix transformation flips orientation (reflection) alongside scaling area.',
      },
      {
        q: 'How is this 2×2 determinant used in Cramer’s Rule?',
        a: 'To solve two simultaneous linear equations, you divide the determinant of modified coefficient matrices by the main determinant.',
      },
    ],
  },

  'math-pythagorean': {
    howToUseSteps: [
      'Enter the length of the first perpendicular leg into Side A (default 3).',
      'Enter the length of the second perpendicular leg into Side B (default 4).',
      'Read the calculated Hypotenuse (c) formatted to four decimal places in the result banner.',
      'Compare known Pythagorean triples like (3, 4), (5, 12), or (8, 15) in Side A and Side B to confirm exact integer diagonals.',
    ],
    formulaExplanation:
      'In any Euclidean right-angled triangle, the square built on the hypotenuse equals the sum of the squares built on the two legs meeting at 90 degrees. Taking the square root of a² + b² solves directly for hypotenuse length c. Formula: c = √(a² + b²). Essential for carpentry square checks, ladder angles, and coordinate distances.',
    practicalExample:
      'With Side A = 3 and Side B = 4, squaring both legs produces 9 + 16 = 25, whose square root outputs Hypotenuse (c) = 5.0000.',
    faqs: [
      {
        q: 'Does it matter whether the shorter leg goes in Side A or Side B?',
        a: 'No, addition is commutative (a² + b² = b² + a²), so swapping Side A and Side B yields the identical hypotenuse.',
      },
      {
        q: 'What are the most common whole-number right triangles (Pythagorean triples)?',
        a: 'Popular triples include 3-4-5, 5-12-13, 8-15-17, and 7-24-25.',
      },
      {
        q: 'How do carpenters check if a room corner is truly 90 degrees using this rule?',
        a: 'Measure 3 feet along one wall and 4 feet along the adjoining wall; if the diagonal distance measures exactly 5 feet, the corner is square.',
      },
    ],
  },

  'math-circle-area': {
    howToUseSteps: [
      'Measure from the center of your circle to its edge and enter that distance into Radius (r) (default 7).',
      'If you only know the full width across the circle, divide your diameter by 2 before typing into Radius (r).',
      'Read the enclosed Area in square units at the top of the output card.',
      'Check the secondary readout immediately below for the outer Circumference in linear units.',
    ],
    formulaExplanation:
      'Circle geometry relies on the mathematical constant π ≈ 3.14159265, representing the ratio of circumference to diameter. Squaring Radius (r) and multiplying by π gives interior Area, whereas multiplying 2 × π × Radius (r) gives outer perimeter Circumference. Formula: Area = π × r²; Circumference = 2 × π × r.',
    practicalExample:
      'Setting Radius (r) = 7 calculates Area = π × 7² = 153.94 sq units and Circumference = 2 × π × 7 = 43.98 units.',
    faqs: [
      {
        q: 'How do I convert a circle’s diameter into Radius (r)?',
        a: 'Divide the diameter by 2—for example, a 14 cm diameter circle has a Radius (r) of 7 cm.',
      },
      {
        q: 'Why does doubling Radius (r) quadruple the circle’s Area?',
        a: 'Because Area depends on r squared (r²), multiplying radius by 2 increases enclosed area by 2² = 4 times while doubling circumference.',
      },
      {
        q: 'How accurate is the value of π used internally?',
        a: 'Calculations use JavaScript’s full double-precision Math.PI (15+ significant digits) before formatting final numbers to two decimals.',
      },
    ],
  },

  'math-triangle-area': {
    howToUseSteps: [
      'Type the length of the triangle’s horizontal bottom edge into the Base (b) input (default 10).',
      'Enter the perpendicular vertical distance from that base to the opposite corner into Height (h) (default 6).',
      'View the enclosed Area in square units inside the primary result banner.',
      'Double-check the Base and Height echo line beneath to confirm neither dimension was transposed.',
    ],
    formulaExplanation:
      'Any triangle occupies exactly half the area of a parallelogram sharing the same Base (b) and perpendicular Height (h). Multiplying Base (b) by Height (h) and multiplying by 0.5 yields the exact planar area regardless of whether the triangle is right, acute, or obtuse. Formula: Area = 0.5 × Base × Height.',
    practicalExample:
      'Entering Base (b) = 10 and Height (h) = 6 multiplies 0.5 × 10 × 6 to output Area = 30.00 sq units.',
    faqs: [
      {
        q: 'Can I enter the slanted side length into Height (h)?',
        a: 'No—Height (h) must be the perpendicular 90° altitude from the base up to the apex, not a slanted side edge.',
      },
      {
        q: 'Does this formula work for obtuse or scalene triangles?',
        a: 'Yes, Area = 0.5 × b × h holds for every flat triangle as long as h is measured perpendicular to the chosen base line.',
      },
      {
        q: 'What if I scale both Base (b) and Height (h) up by a factor of 3?',
        a: 'Multiplying both dimensions by 3 scales the resulting Area by 3 × 3 = 9 times.',
      },
    ],
  },

  'math-rectangle': {
    howToUseSteps: [
      'Type the longer horizontal edge into the Length field (default 12).',
      'Type the shorter vertical edge into the Width field (default 8)—or match both values for a square.',
      'Read the computed rectangular Area in square units in the main display.',
      'Inspect the line directly below to see both outer Perimeter and corner-to-corner Diagonal length.',
    ],
    formulaExplanation:
      'A rectangle’s Area equals Length × Width, its Perimeter sums all four outer edges as 2(Length + Width), and its corner-to-corner Diagonal forms the hypotenuse of a right triangle with sides Length and Width. Formula: Area = L × W; Perimeter = 2 × (L + W); Diagonal = √(L² + W²).',
    practicalExample:
      'With Length = 12 and Width = 8, the calculator outputs Area = 96.00 sq units alongside Perimeter = 40 and Diagonal = 14.42.',
    faqs: [
      {
        q: 'How can this tool evaluate a perfect square?',
        a: 'Enter identical numbers into Length and Width (for instance, 9 and 9) to get Area = 81.00, Perimeter = 36, and Diagonal = 12.73.',
      },
      {
        q: 'Does swapping Length and Width change Area, Perimeter, or Diagonal?',
        a: 'No—rotating a rectangle 90 degrees preserves all three measurements identically.',
      },
      {
        q: 'Why is the Diagonal useful when laying tiles or framing a deck?',
        a: 'Checking that both corner-to-corner diagonals match your calculated √(L² + W²) confirms the layout forms true 90° corners.',
      },
    ],
  },

  'math-sphere': {
    howToUseSteps: [
      'Measure the distance from a ball or spherical tank’s center to its outer surface and enter it in Radius (r) (default 5).',
      'Divide diameter in half first if you measured straight across a sphere’s widest point.',
      'Read the enclosed 3D Volume in cubic units inside the primary result card.',
      'Check the secondary output line below for total outer Surface Area in square units.',
    ],
    formulaExplanation:
      'A sphere’s three-dimensional Volume scales with the cube of Radius (r), whereas its curved outer Surface Area equals four times the area of a flat circle of the same radius. Formula: Volume = (4/3) × π × r³; Surface Area = 4 × π × r². Frequently used for water globes, bearings, tanks, and physics problems.',
    practicalExample:
      'Entering Radius (r) = 5 evaluates (4/3) × π × 125 = Volume = 523.60 cubic units and 4 × π × 25 = Surface Area = 314.16 sq units.',
    faqs: [
      {
        q: 'Why does Volume scale faster than Surface Area when Radius (r) increases?',
        a: 'Volume depends on r³ while Surface Area depends on r², so doubling Radius (r) increases Surface Area 4× but increases Volume 8×.',
      },
      {
        q: 'How do I compute the capacity of a hemisphere (half sphere)?',
        a: 'Divide the full sphere Volume by 2; for curved-shell-only hemisphere surface area, divide Surface Area by 2 (adding πr² if the flat circular top is closed).',
      },
      {
        q: 'What happens if I enter a diameter by mistake instead of Radius (r)?',
        a: 'Using diameter as radius inflates Surface Area by 4 times and Volume by 8 times, so always halve diameter first.',
      },
    ],
  },

  'math-cylinder': {
    howToUseSteps: [
      'Enter the circular cross-section radius into Radius (r) (default 4).',
      'Type the perpendicular cylinder length or depth into Height (h) (default 10).',
      'Check the primary display for internal Volume in cubic units.',
      'Look at the line directly underneath for total Surface Area combining the curved wall and both circular end caps.',
    ],
    formulaExplanation:
      'A right circular cylinder stacks circular disks of area πr² across Height (h), yielding Volume = πr²h. Total Surface Area sums the unrolled rectangular side wall (circumference 2πrh) plus both top and bottom circular lids (2πr²). Formula: Volume = π × r² × h; Total Surface Area = 2πrh + 2πr².',
    practicalExample:
      'Setting Radius (r) = 4 and Height (h) = 10 computes Volume = π × 16 × 10 = 502.65 cubic units and Surface Area = 80π + 32π = 351.86 sq units.',
    faqs: [
      {
        q: 'Does Surface Area include both the top and bottom circular caps?',
        a: 'Yes, 2πrh + 2πr² includes the curved side wall plus both circular ends; subtract 2πr² if modeling an open pipe.',
      },
      {
        q: 'How do I calculate capacity for an open-top barrel or water drum?',
        a: 'Internal Volume remains πr²h regardless of whether the top lid is open or sealed.',
      },
      {
        q: 'Does tilting or laying a cylindrical tank horizontally change its full Volume?',
        a: 'Total Volume πr²h stays unchanged whether the tank stands upright or lies on its side.',
      },
    ],
  },

  'math-cone': {
    howToUseSteps: [
      'Type the radius of the cone’s circular base into Radius (r) (default 3).',
      'Enter the vertical perpendicular height from the center of the base up to the tip in Height (h) (default 4).',
      'Read the enclosed conical Volume in cubic units at the top of the card.',
      'Review the line underneath for total Surface Area and the automatically solved Slant Height.',
    ],
    formulaExplanation:
      'A circular cone fills exactly one-third the volume of a cylinder sharing the same Radius (r) and Height (h). Surface Area first solves slant height l = √(r² + h²) via the Pythagorean theorem, then combines the base disk πr² with the lateral curved surface πrl. Formula: Volume = (1/3) × π × r² × h; Slant Height l = √(r² + h²); Surface Area = π × r × (r + l).',
    practicalExample:
      'Using Radius (r) = 3 and Height (h) = 4 yields Slant Height = √(9 + 16) = 5.00, Volume = (1/3)π(9)(4) = 37.70 cubic units, and Surface Area = π(3)(3 + 5) = 75.40 sq units.',
    faqs: [
      {
        q: 'How does Height (h) differ from the Slant Height printed in the secondary line?',
        a: 'Height (h) runs vertically straight down from the apex inside the cone to the base center, whereas Slant Height runs along the slanted outer edge.',
      },
      {
        q: 'Why is a cone’s Volume multiplied by 1/3 compared to a cylinder?',
        a: 'Three congruent cones of equal base radius and height hold the exact volume of one matching cylinder.',
      },
      {
        q: 'Does Surface Area include the flat circular base?',
        a: 'Yes, πr(r + l) equals πr² (base disk) plus πrl (lateral curved side), useful for closed conical caps.',
      },
    ],
  },

  'math-ap-series': {
    howToUseSteps: [
      'Enter the starting number of your arithmetic sequence in First Term (a) (default 2).',
      'Enter the constant step added between consecutive terms in Common Difference (d) (default 3; negative steps allowed).',
      'Specify which term index you want to find inside Term Number (n) (default 10).',
      'Inspect both the n-th Term and the cumulative Sum of first n terms returned together.',
    ],
    formulaExplanation:
      'An arithmetic progression increases or decreases by a fixed Common Difference (d) at every step. Finding term n adds (n − 1) jumps of d to First Term (a), while Gauss’s summation averages the first and last terms across all n entries. Formula: aₙ = a + (n − 1)d; Sₙ = (n / 2) × [2a + (n − 1)d].',
    practicalExample:
      'Setting First Term (a) = 2, Common Difference (d) = 3, and Term Number (n) = 10 solves a₁₀ = 2 + 9(3) = 29 and Sum of first 10 terms = (10 / 2)(2 + 29) = 155.',
    faqs: [
      {
        q: 'Can Common Difference (d) be negative for a decreasing sequence?',
        a: 'Yes—entering d = -4 steps down by 4 on every term, correctly solving both negative terms and decreasing sums.',
      },
      {
        q: 'Why does the formula multiply Common Difference (d) by (n − 1) instead of n?',
        a: 'The First Term (a) already sits at position 1 with zero steps added, so reaching position n takes n − 1 steps.',
      },
      {
        q: 'What makes a sequence an AP rather than a GP?',
        a: 'An AP adds a constant difference d between terms (2, 5, 8, 11), whereas a GP multiplies by a constant ratio r.',
      },
    ],
  },

  'math-gp-series': {
    howToUseSteps: [
      'Type the opening sequence number inside First Term (a) (default 3).',
      'Enter the constant multiplier applied at each step into Common Ratio (r) (default 2).',
      'Enter which position in the series to calculate inside Term Number (n) (default 5).',
      'Read the computed n-th Term value in the Calculated Result display alongside your First Term and Ratio summary.',
    ],
    formulaExplanation:
      'In a geometric progression, every consecutive number equals the previous number multiplied by Common Ratio (r). Starting from First Term (a), reaching position n requires multiplying by r exactly (n − 1) times. Formula: aₙ = a × r^(n − 1). Widely applied in population growth models, compound interest curves, and halving decay steps.',
    practicalExample:
      'With First Term (a) = 3, Common Ratio (r) = 2, and Term Number (n) = 5 (sequence 3, 6, 12, 24, 48), evaluating 3 × 2⁴ = 3 × 16 outputs n-th Term = 48.',
    faqs: [
      {
        q: 'What happens when Common Ratio (r) is a fraction between 0 and 1, like 0.5?',
        a: 'Each successive term shrinks (for example 100, 50, 25, 12.5), modeling exponential decay or radioactive half-lives.',
      },
      {
        q: 'Can Common Ratio (r) be negative?',
        a: 'Yes, a negative ratio alternates signs between odd and even term positions, such as 3, −6, 12, −24, 48.',
      },
      {
        q: 'Why is the exponent on r equal to (n − 1)?',
        a: 'Because Term 1 equals a × r⁰ = a, leaving one fewer multiplication step than the term index n.',
      },
    ],
  },

  'math-log-custom': {
    howToUseSteps: [
      'Enter the positive argument you want the logarithm of in the Number input box (default 64).',
      'Enter any positive base other than 1 inside the Base field (default 2).',
      'View the custom-base logarithm answer rounded to four decimal places in the result banner.',
      'Experiment with bases such as 2 (computer bits), e (~2.718), or 16 (hexadecimal scales) on the same Number.',
    ],
    formulaExplanation:
      'A logarithm log_b(n) answers the question: to what exponent must Base (b) be raised to produce Number (n)? Using the mathematical change-of-base identity, any custom base evaluates cleanly as the ratio of two natural logarithms. Formula: log_b(n) = ln(Number) / ln(Base), valid for Number > 0, Base > 0, and Base ≠ 1.',
    practicalExample:
      'Setting Number = 64 and Base = 2 divides ln(64) ÷ ln(2) = 4.15888 ÷ 0.69315, outputting Log₍2₎(64) = 6.0000 (because 2⁶ = 64).',
    faqs: [
      {
        q: 'Why is Base = 1 rejected as invalid?',
        a: 'Because 1 raised to any power always equals 1 (and ln(1) = 0 causes division by zero), a base-1 logarithm cannot represent other numbers.',
      },
      {
        q: 'Why can Number never be zero or negative in real logarithms?',
        a: 'Raising any positive base to any real exponent always gives a positive value, never hitting 0 or negative numbers.',
      },
      {
        q: 'How is base-2 logarithm useful in computer science?',
        a: 'log₂(N) tells you how many bits or binary tree levels are needed to index N distinct states—for example, log₂(256) = 8 bits.',
      },
    ],
  },

  'math-perm-comb': {
    howToUseSteps: [
      'Enter the full pool size of distinct items in Total Items (n) (default 10).',
      'Enter how many items you are selecting in Chosen Items (r), keeping r ≤ n (default 3).',
      'Read both Permutations (nPr, where order matters) and Combinations (nCr, where order does not matter) together.',
      'Check the summary line below to confirm the rounded integers used for n and r.',
    ],
    formulaExplanation:
      'Permutations nPr count ordered selections where swapping two picks creates a different arrangement, whereas Combinations nCr count unordered subsets by dividing nPr by the r! internal orderings of each group. Formula: nPr = n! / (n − r)!; nCr = n! / [r! × (n − r)!] for integers n ≥ r ≥ 0.',
    practicalExample:
      'Entering Total Items (n) = 10 and Chosen Items (r) = 3 calculates 10! / 7! = 10 × 9 × 8 = nPr = 720 ordered rankings and 720 / 3! = nCr = 120 unordered committees.',
    faqs: [
      {
        q: 'When should I look at nPr instead of nCr?',
        a: 'Choose nPr when sequence matters—such as ranking 1st, 2nd, and 3rd medals or PIN codes—and nCr when selecting an unranked team or lottery ticket.',
      },
      {
        q: 'Why is nCr always smaller than or equal to nPr?',
        a: 'Every combination of r items can be ordered in r! ways, so nPr = r! × nCr.',
      },
      {
        q: 'What happens if Chosen Items (r) is greater than Total Items (n)?',
        a: 'You cannot pick more distinct items than exist in the pool, so validation prompts you to keep n ≥ r ≥ 0.',
      },
    ],
  },

  'math-prime-factor': {
    howToUseSteps: [
      'Enter any composite or prime integer greater than 1 in the Number to Factorize field (default 360).',
      'Inspect the Prime Factors chain printed with multiplication signs in the Calculated Result box.',
      'Check the Total prime factors count directly underneath to see how many prime divisors multiply together.',
      'Test multiples of 10 or powers of 2 in Number to Factorize to inspect their repeated prime factors.',
    ],
    formulaExplanation:
      'By the Fundamental Theorem of Arithmetic, every integer above 1 decomposes uniquely into a product of prime numbers. Starting with divisor d = 2, trial division repeatedly extracts each prime factor until only 1 remains, stepping d upward whenever a divisor no longer divides evenly. Formula: N = p₁ × p₂ × … × pₖ (each pᵢ prime).',
    practicalExample:
      'Factoring Number to Factorize = 360 divides out three 2s (360 → 180 → 90 → 45), two 3s (45 → 15 → 5), and one 5, outputting Prime Factors: 2 × 2 × 2 × 3 × 3 × 5 (Total prime factors count: 6).',
    faqs: [
      {
        q: 'How can prime factorization help find LCM and GCD quickly?',
        a: 'Multiplying shared primes between two factorizations gives GCD, while taking the highest power of every prime gives LCM.',
      },
      {
        q: 'What does the output show if I enter a prime integer like 97?',
        a: 'Because 97 has no smaller prime factors, the result outputs Prime Factors: 97 with a factor count of 1.',
      },
      {
        q: 'Why must Number to Factorize be strictly greater than 1?',
        a: 'The integer 1 is neither prime nor composite, so unique prime factorization applies strictly to integers ≥ 2.',
      },
    ],
  },

  'math-fraction-arithmetic': {
    howToUseSteps: [
      'Enter your first fraction using Fraction 1 Numerator and Fraction 1 Denominator (avoiding zero denominators).',
      'Select Addition (+), Subtraction (-), Multiplication (×), or Division (÷) from the Operation list.',
      'Enter your second fraction inside Fraction 2 Numerator and Fraction 2 Denominator.',
      'Compare the simplified fraction plus decimal value at the top against the Unsimplified intermediate ratio below.',
    ],
    formulaExplanation:
      'Addition and subtraction scale fractions across a common denominator d₁ × d₂, multiplication multiplies numerators and denominators directly, and division cross-multiplies by inverting the second fraction. Dividing both raw terms by their Greatest Common Divisor reduces the final answer while retaining the intermediate ratio for reference. Formula: a/b op c/d → Raw (resN/resD) ÷ GCD(|resN|, |resD|) = Simplified Fraction.',
    practicalExample:
      'Computing Fraction 1 (1/2) with Addition (+) and Fraction 2 (1/4) forms Unsimplified: 6/8 and reduces by GCD(6, 8) = 2 to output 3/4 (0.7500).',
    faqs: [
      {
        q: 'Why does the secondary display preserve the Unsimplified fraction?',
        a: 'Showing Unsimplified: 6/8 lets students verify their manual cross-multiplication step before dividing by the GCD.',
      },
      {
        q: 'What error check runs if I divide by 0/4?',
        a: 'Because dividing by a fraction whose numerator is zero means dividing by zero, the calculator prevents the operation safely.',
      },
      {
        q: 'How do negative numerators affect fraction subtraction?',
        a: 'If Fraction 1 is smaller than Fraction 2 during subtraction, the simplified numerator carries a negative sign cleanly (e.g., -1/4).',
      },
    ],
  },

  'math-base-conv': {
    howToUseSteps: [
      'Type any non-negative whole number into the Decimal Number box (default 255).',
      'Read the Binary representation prefixed with 0b in the main Calculated Result banner.',
      'Check the secondary readout directly below for both Hexadecimal (0x) and Octal (0o) values.',
      'Try computer-science milestones like 15, 64, 255, or 1024 in Decimal Number to observe bit-width transitions.',
    ],
    formulaExplanation:
      'Positional base conversion expresses a base-10 integer in Binary (base 2), Octal (base 8), and Hexadecimal (base 16, using digits 0–9 and letters A–F) by repeatedly dividing by the target base and reading remainders from last to first. Formula: N₁₀ = ∑ dᵢ × bⁱ for base b ∈ {2, 8, 16}. Essential for programming, IP subnetting, RGB color codes, and memory debugging.',
    practicalExample:
      'Entering Decimal Number = 255 divides repeatedly by 2, 8, and 16 to output Binary: 0b11111111 alongside Hex: 0xFF | Octal: 0o377.',
    faqs: [
      {
        q: 'Why are 0b, 0o, and 0x prefixes displayed before the digits?',
        a: 'Those standard programming prefixes distinguish Binary (0b), Octal (0o), and Hexadecimal (0x) values from ordinary base-10 numbers.',
      },
      {
        q: 'Why do hex values use letters A through F alongside 0 through 9?',
        a: 'Base-16 needs sixteen unique single-character symbols per digit place, so A=10, B=11, C=12, D=13, E=14, and F=15.',
      },
      {
        q: 'Why is 255 such a common number in networking and graphics?',
        a: 'Eight binary bits (11111111₂ = FF₁₆) hold 256 values from 0 to 255, matching one byte, RGB color channels, and IPv4 octets.',
      },
    ],
  },
};
