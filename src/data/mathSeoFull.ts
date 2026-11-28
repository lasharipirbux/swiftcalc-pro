import { SITE_NAME } from '../config/site';

export interface MathCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  introDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const mathSeoFullMap: Record<string, MathCalculatorSeoEntry> = {
  'basic-calc': {
    seoTitle: `Solve Math Expressions Using PEMDAS | ${SITE_NAME}`,
    metaDescription:
      'Quickly solve math expressions using PEMDAS order of operations with parentheses, multiplication, division, addition, and modulo.',
    introDescription:
      'Whether you are checking homework, balancing a cash register, or verifying invoice line items, knowing how to solve math expressions using PEMDAS prevents common arithmetic errors. Type a complete expression with parentheses, +, -, *, /, or % into one box instead of clearing intermediate steps on a handheld keypad. The engine evaluates brackets first, handles multiplication and division ahead of addition, and prints the step trail so you can confirm every intermediate value.',
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
        q: 'Why does 100 + 50 * 2 equal 200 instead of 300?',
        a: 'Multiplication runs before addition under order-of-operations rules, so 50 * 2 computes first unless you wrap (100 + 50) in parentheses.',
      },
      {
        q: 'Which math symbols can I type into the expression box?',
        a: 'You can use digits, decimals, parentheses (), addition +, subtraction -, multiplication *, division /, and remainder %.',
      },
      {
        q: 'How do I force addition to run before division?',
        a: 'Wrap the addition inside parentheses—for example, typing (24 + 16) / 8 calculates 40 / 8 = 5.',
      },
    ],
  },

  'scientific-calc': {
    seoTitle: `Calculate Sin Cos Tan and Logs Online | ${SITE_NAME}`,
    metaDescription:
      'Need to calculate sin cos tan and logs online? Compute degree-based trigonometry, square roots, natural ln, and log10 to six decimals.',
    introDescription:
      'Engineering students, physics labs, and surveyors frequently need to calculate sin cos tan and logs online without carrying a physical scientific keypad. Pick your function from the dropdown, enter an angle in degrees for trigonometry or a positive number for roots and logarithms, and read the six-decimal result right away. Switching operations while keeping the same input lets you compare sine, cosine, and tangent ratios or check ln against log10 instantly.',
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
        q: 'Should I enter degrees or radians for sin, cos, and tan?',
        a: 'Enter angles in standard degrees; the calculator automatically converts degrees into radians behind the scenes.',
      },
      {
        q: 'What is the difference between ln and log10?',
        a: 'Natural log (ln) uses base e (about 2.71828), while log10 uses base 10—so log10(100) equals 2.',
      },
      {
        q: 'Why must the input be positive for logarithms?',
        a: 'Real logarithms are undefined at zero and negative values because positive bases raised to real powers never reach zero.',
      },
    ],
  },

  'fraction-calc': {
    seoTitle: `Add Subtract Multiply and Divide Fractions | ${SITE_NAME}`,
    metaDescription:
      'Learn how to add subtract multiply and divide fractions with automatic lowest-terms simplification and decimal conversion.',
    introDescription:
      'Cooking recipes, carpentry measurements, and algebra assignments often require you to add subtract multiply and divide fractions cleanly without making common-denominator mistakes. Enter the numerator and denominator for both fractions, pick your arithmetic operator, and inspect both the reduced fraction and its four-decimal equivalent. Every answer is automatically divided by its greatest common divisor so results always appear in crisp, lowest integer terms.',
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
        q: 'How are fraction answers simplified automatically?',
        a: 'The calculator divides both the resulting numerator and denominator by their greatest common divisor until no common factor remains.',
      },
      {
        q: 'Can I use improper fractions like 7/4 or 9/5?',
        a: 'Yes, improper fractions compute cleanly and stay formatted in reduced improper fraction form alongside a decimal readout.',
      },
      {
        q: 'Why can a denominator never be set to zero?',
        a: 'Division by zero is undefined in mathematics, so every valid fraction needs a non-zero bottom number.',
      },
    ],
  },

  'decimal-calc': {
    seoTitle: `How to Convert a Decimal to a Fraction | ${SITE_NAME}`,
    metaDescription:
      'See how to convert a decimal to a fraction in simplest reduced terms, turning values like 0.75, 0.375, or 1.25 into exact ratios.',
    introDescription:
      'Workshop rulers, sewing patterns, and math homework frequently ask how to convert a decimal to a fraction when measurements come off a digital scale in tenths or thousandths. Type any terminating decimal—such as 0.75, 0.375, or 2.5—and the converter scales it by powers of ten before simplifying via greatest common divisor. In seconds, you see the exact lowest-terms ratio ready for tape measures or algebraic equations.',
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
        q: 'How does 0.375 turn into 3 / 8?',
        a: 'Three decimal places make 375 / 1000, and dividing both top and bottom by 125 simplifies it down to 3 / 8.',
      },
      {
        q: 'What happens if I type a decimal larger than 1 like 1.25?',
        a: 'It simplifies 125 / 100 by 25 to give the exact improper fraction 5 / 4.',
      },
      {
        q: 'Can I convert negative decimals too?',
        a: 'Yes, negative decimals convert identically while preserving the minus sign on the simplified numerator.',
      },
    ],
  },

  'percentage-calc': {
    seoTitle: `How to Calculate Percentage of a Number | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate percentage of a number from part and total values for exam grades, sales targets, and budget shares.',
    introDescription:
      'Checking exam scores, tracking monthly quota progress, or comparing store discounts starts with knowing how to calculate percentage of a number quickly. Enter your achieved part amount alongside the full total value to see the exact percentage rounded to two decimal places plus the numeric gap between them. It eliminates mental division mistakes whether your part is a small slice of the whole or exceeds 100%.',
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
        q: 'How do I find my exam percentage from obtained and total marks?',
        a: 'Enter your obtained marks as the Part and the maximum possible marks as the Total to get your exact percentage immediately.',
      },
      {
        q: 'Can the percentage go above 100%?',
        a: 'Yes, whenever the Part exceeds the Total—such as 180 out of 150—the calculator accurately outputs 120.00%.',
      },
      {
        q: 'What does a negative Difference line tell me?',
        a: 'It shows exactly how many units your part is short of reaching 100% of the whole.',
      },
    ],
  },

  'ratio-calc': {
    seoTitle: `How to Solve a Ratio Proportion Online | ${SITE_NAME}`,
    metaDescription:
      'See how to solve a ratio proportion online (A:B = C:D) for missing values when scaling recipes, blueprints, and mixtures.',
    introDescription:
      'Resizing a baking recipe, scaling a floor plan, or mixing concrete batches requires knowing how to solve a ratio proportion online so every ingredient stays balanced. Enter your known starting ratio (A to B) alongside the third value C in A:B = C:D, and the solver cross-multiplies immediately to reveal the missing fourth term D. It handles whole numbers and decimals smoothly to four-decimal precision.',
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
        q: 'How can I verify that the solved ratio is truly proportional?',
        a: 'Multiply A by D and compare it with B times C—both cross-products will always match.',
      },
      {
        q: 'Can I enter decimals like 1.5 or 2.25 in a ratio?',
        a: 'Yes, decimal inputs work smoothly for kitchen conversions, paint mixing, and map scale factors.',
      },
      {
        q: 'Why can field A never be zero?',
        a: 'Cross-multiplying solves D = (B × C) / A, which would require dividing by zero if A were 0.',
      },
    ],
  },

  'average-calc': {
    seoTitle: `How to Find the Average of Numbers Online | ${SITE_NAME}`,
    metaDescription:
      'Learn how to find the average of numbers online from any comma-separated list, seeing the exact arithmetic mean, sum, and count.',
    introDescription:
      'Teachers grading class tests, runners averaging split speeds, and shoppers tracking monthly utility bills often search for how to find the average of numbers online in one quick paste. Enter any comma-separated list of positive, negative, or decimal values, and the calculator adds every valid entry, counts how many numbers were parsed, and divides sum by count. Checking the displayed count confirms no value was accidentally skipped.',
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
        q: 'Do extra spaces after commas affect the average calculation?',
        a: 'No, whitespace around each comma is ignored automatically, so 10,20,30 and 10, 20, 30 give the exact same result.',
      },
      {
        q: 'Can I mix decimals and negative numbers in the same list?',
        a: 'Yes, positive, negative, and decimal entries all add cleanly into the total sum and mean.',
      },
      {
        q: 'Why does the summary line display both Sum and Count?',
        a: 'Showing Count lets you verify that all items in your pasted list were recognized before dividing.',
      },
    ],
  },

  'square-root': {
    seoTitle: `Find Square Root and Cube Root of a Number | ${SITE_NAME}`,
    metaDescription:
      'Instantly find square root and cube root of a number side by side to four decimal places for geometry, algebra, and volume math.',
    introDescription:
      'Solving diagonal geometry lengths or reversing cubic volume formulas is effortless when you can find square root and cube root of a number together on one screen. Type any integer or decimal to see both its principal square root (√n) and cube root (∛n) to four decimal places. While square roots require non-negative real numbers, testing negative inputs still reveals exact real cube roots below zero.',
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
        q: 'Why can I take the cube root of -27 but not its square root?',
        a: 'Multiplying three negative numbers gives a negative ((-3)³ = -27), while squaring any real number is never negative.',
      },
      {
        q: 'Does the square root output show both plus and minus answers?',
        a: 'It shows the principal positive root; for equations like x² = 144, remember both +12 and -12 satisfy the equation.',
      },
      {
        q: 'Which common numbers have exact whole square and cube roots?',
        a: 'Numbers like 1 and 64 (8² and 4³) are both perfect squares and perfect cubes.',
      },
    ],
  },

  'power-exponent': {
    seoTitle: `How to Calculate Exponents and Powers Online | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate exponents and powers online for positive, zero, negative, and fractional exponents with instant results.',
    introDescription:
      'From compound interest growth to binary memory sizes and scientific notation, knowing how to calculate exponents and powers online helps you evaluate repeated multiplication in one step. Enter any base x and exponent y to compute x^y immediately. Beyond standard whole powers, you can enter 0 to confirm the zero-exponent rule, negative exponents for reciprocals, or fractional decimals like 0.5 for square roots.',
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
        q: 'Why does any non-zero number raised to the power 0 equal 1?',
        a: 'Dividing a power by itself—like 5³ / 5³ = 5⁰—always equals 1, making x⁰ = 1 for every non-zero base.',
      },
      {
        q: 'How do negative exponents work?',
        a: 'A negative exponent flips the power into a fraction—for instance, 2^-3 equals 1 / 2³ = 1 / 8 = 0.125.',
      },
      {
        q: 'Can I compute roots using fractional exponents like 0.5 or 0.25?',
        a: 'Yes, raising 16 to 0.5 calculates √16 = 4, and raising 16 to 0.25 calculates the fourth root 2.',
      },
    ],
  },

  'lcm-gcd': {
    seoTitle: `How to Find LCM and GCD of Two Numbers | ${SITE_NAME}`,
    metaDescription:
      'Discover how to find LCM and GCD of two numbers using Euclid’s algorithm to simplify fractions, schedules, and gear ratios.',
    introDescription:
      'Adding fractions with unlike denominators, syncing repeating maintenance schedules, or reducing ratios becomes simple once you know how to find LCM and GCD of two numbers accurately. Enter any two integers to get both their Greatest Common Divisor (GCD) via Euclid’s remainder algorithm and their Least Common Multiple (LCM) side by side. It works equally well on large pairs and coprime numbers.',
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
        q: 'What does it mean when two numbers have a GCD of 1?',
        a: 'It means the two numbers are coprime and share no common factor greater than 1, so their LCM equals their direct product.',
      },
      {
        q: 'How does LCM help when adding fractions?',
        a: 'The LCM of two denominators gives the smallest common denominator, keeping arithmetic simple.',
      },
      {
        q: 'Is GCD the same as Greatest Common Factor (GCF)?',
        a: 'Yes, Greatest Common Divisor (GCD), Highest Common Factor (HCF), and Greatest Common Factor (GCF) all refer to the same number.',
      },
    ],
  },

  'prime-number': {
    seoTitle: `How to Check if a Number Is Prime Online | ${SITE_NAME}`,
    metaDescription:
      'Test any whole integer—learn how to check if a number is prime online instantly using fast square-root trial division.',
    introDescription:
      'Students exploring number theory or developers testing encryption parameters often need to know how to check if a number is prime online without dividing manually by dozens of candidates. Enter any whole integer to verify immediately whether it is Prime, Composite, or Not Prime. By testing divisors up to the square root of your number, the checker classifies small numbers, edge cases like 1 and 2, and large odd integers reliably.',
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
        q: 'Why is the number 1 not considered prime?',
        a: 'A prime number must have exactly two distinct positive factors (1 and itself), whereas 1 has only one factor.',
      },
      {
        q: 'What is the only even prime number?',
        a: 'The number 2 is the sole even prime because every larger even integer divides evenly by 2.',
      },
      {
        q: 'Why do primality tests only check divisors up to the square root?',
        a: 'If a number factors into two parts, at least one factor must be less than or equal to its square root.',
      },
    ],
  },

  'factorial-calc': {
    seoTitle: `How to Calculate Factorial of a Number | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate factorial of a number (n!) up to 170! instantly for permutations, probability, and combinatorics.',
    introDescription:
      'Counting seating arrangements, analyzing card probabilities, and expanding Taylor series all depend on knowing how to calculate factorial of a number (n!) accurately. Type any whole integer from 0 up to 170 to multiply every descending positive integer down to 1 in one click. The output formats large results with clear comma separators and correctly evaluates 0! as 1 so combinatorics formulas work consistently.',
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
        q: 'Why does 0! equal 1 instead of 0?',
        a: 'There is one way to arrange zero items (doing nothing), and defining 0! = 1 keeps combination formulas like nCr valid.',
      },
      {
        q: 'Why is 170 the largest factorial supported here?',
        a: '171! exceeds standard 64-bit computer number limits (around 1.8 × 10³⁰⁸), causing overflow to infinity.',
      },
      {
        q: 'What does 5! = 120 tell me in real life?',
        a: 'It means 5 distinct books on a shelf or 5 people standing in line can be ordered in 120 unique ways.',
      },
    ],
  },

  'quadratic-solver': {
    seoTitle: `Solve Quadratic Equations Step by Step | ${SITE_NAME}`,
    metaDescription:
      'Find real roots x1 and x2 plus the discriminant—solve quadratic equations step by step in ax² + bx + c = 0 form online.',
    introDescription:
      'Algebra homework, projectile physics problems, and parabolic curve sketches go much faster when you solve quadratic equations step by step with instant discriminant feedback. Enter coefficients a, b, and c from ax² + bx + c = 0 to compute both real roots x₁ and x₂ alongside Δ = b² − 4ac. Seeing the discriminant right below the roots tells you immediately whether two intercepts, one double root, or complex solutions occur.',
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
        q: 'What does a negative discriminant mean?',
        a: 'When b² − 4ac is negative, the parabola never crosses the x-axis and the solutions are complex numbers instead of real roots.',
      },
      {
        q: 'What happens when the discriminant equals zero?',
        a: 'The parabola touches the x-axis at a single point, giving one repeated root where x₁ equals x₂.',
      },
      {
        q: 'Why cannot coefficient a be zero?',
        a: 'If a = 0, the x² term vanishes and the equation becomes a straight line rather than a quadratic.',
      },
    ],
  },

  'matrix-calc': {
    seoTitle: `Find Determinant of a 2x2 Matrix Online | ${SITE_NAME}`,
    metaDescription:
      'Quickly find determinant of a 2x2 matrix online using ad − bc for linear algebra, Cramer’s rule, and invertibility checks.',
    introDescription:
      'Linear algebra students solving systems of equations or testing whether a transformation matrix has an inverse often need to find determinant of a 2x2 matrix online without sign slips. Enter the four elements a, b, c, and d across rows one and two to compute (a × d) − (b × c) immediately. Whenever the determinant drops to zero, you know right away that the matrix is singular and non-invertible.',
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
        q: 'What does a determinant of zero mean?',
        a: 'A zero determinant tells you the rows or columns are multiples of each other, meaning the matrix has no inverse.',
      },
      {
        q: 'Can a matrix determinant be negative?',
        a: 'Yes, a negative determinant means the linear transformation flips orientation in addition to scaling area.',
      },
      {
        q: 'Where is a 2x2 determinant used outside homework?',
        a: 'It powers Cramer’s rule for two-variable equations, 2D computer graphics transforms, and cross-product area math.',
      },
    ],
  },

  'math-pythagorean': {
    seoTitle: `Find Hypotenuse Using Pythagorean Theorem | ${SITE_NAME}`,
    metaDescription:
      'Calculate right-triangle diagonals—find hypotenuse using Pythagorean theorem √(a² + b²) for framing, ladders, and geometry.',
    introDescription:
      'Squaring up a deck frame, checking safe ladder placement, or solving right-triangle geometry problems becomes effortless when you find hypotenuse using Pythagorean theorem inputs a and b. Enter the two perpendicular legs meeting at 90 degrees, and the solver squares both sides, adds them together, and takes the square root to four decimals. It is ideal for verifying classic 3-4-5 carpentry corners or any custom diagonal.',
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
        q: 'Does it matter which leg I enter as Side A versus Side B?',
        a: 'No, because a² + b² equals b² + a², swapping the two shorter legs produces the exact same hypotenuse.',
      },
      {
        q: 'How do builders use the 3-4-5 rule to square corners?',
        a: 'Mark 3 units on one wall and 4 on the adjoining wall; when the diagonal between marks measures 5 units, the corner is 90 degrees.',
      },
      {
        q: 'Does this formula work on triangles without a 90-degree angle?',
        a: 'No, the basic Pythagorean theorem only applies to right triangles; general triangles require the Law of Cosines.',
      },
    ],
  },

  'math-circle-area': {
    seoTitle: `Calculate Circle Area and Circumference | ${SITE_NAME}`,
    metaDescription:
      'Measure round patios, pipes, and pizzas—calculate circle area and circumference instantly from radius using full pi precision.',
    introDescription:
      'Measuring round garden beds, comparing pizza sizes, or sizing circular ducts starts when you calculate circle area and circumference from a single radius input. Type the center-to-edge radius (or half the diameter) to obtain both the enclosed square area via πr² and the outer perimeter circumference via 2πr. Using full double-precision pi before rounding keeps DIY material estimates and school answers tight.',
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
        q: 'What if I measured the full diameter across the circle instead of the radius?',
        a: 'Divide the diameter by 2 first—a 14 cm diameter circle has a 7 cm radius.',
      },
      {
        q: 'Why does doubling a circle’s radius give four times the area?',
        a: 'Area grows with the square of the radius (r²), so 2× radius multiplies enclosed area by 2² = 4 times.',
      },
      {
        q: 'What units does the answer use?',
        a: 'If you enter radius in meters, area is in square meters and circumference is in meters; the same matches inches, feet, or cm.',
      },
    ],
  },

  'math-triangle-area': {
    seoTitle: `How to Find Area of a Triangle With Base | ${SITE_NAME}`,
    metaDescription:
      'Learn how to find area of a triangle with base and perpendicular height (0.5 × b × h) for geometry homework and roof gables.',
    introDescription:
      'Measuring a triangular garden corner, estimating siding on a roof gable, or finishing geometry worksheets is straightforward when you know how to find area of a triangle with base and vertical height. Enter the bottom base width alongside the 90-degree perpendicular height up to the top peak. Multiplying half of base times height solves any flat right, acute, or obtuse triangle immediately.',
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
        q: 'Should I enter the slanted side length as the height?',
        a: 'No, height must be measured straight up at a 90-degree angle from the base to the opposite point.',
      },
      {
        q: 'Does 0.5 × base × height work for obtuse triangles too?',
        a: 'Yes, it holds true for all triangles, even when the top peak overhangs past one end of the base.',
      },
      {
        q: 'What happens if I double both the base and the height?',
        a: 'Doubling both dimensions increases the triangle’s total area by four times.',
      },
    ],
  },

  'math-rectangle': {
    seoTitle: `Calculate Rectangle Area and Perimeter | ${SITE_NAME}`,
    metaDescription:
      'Instantly calculate rectangle area and perimeter plus corner-to-corner diagonal length from length and width for rooms and lawns.',
    introDescription:
      'Estimating floor tiles, pricing perimeter fencing, or squaring up a raised garden bed starts when you calculate rectangle area and perimeter from two simple side lengths. Enter length and width (or equal numbers for a square) to view interior area, total outer perimeter, and the diagonal distance across opposite corners. Comparing your tape measure against that diagonal guarantees your layout corners form true 90-degree angles.',
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
        q: 'Can I use this calculator for a square room or tile?',
        a: 'Yes, simply enter the same measurement into both Length and Width.',
      },
      {
        q: 'Why does knowing the diagonal length matter during construction?',
        a: 'If both diagonals across opposite corners equal the calculated √(L² + W²), your rectangle is guaranteed to be perfectly square.',
      },
      {
        q: 'Does swapping Length and Width alter any of the results?',
        a: 'No, area, perimeter, and diagonal remain identical regardless of which side is entered first.',
      },
    ],
  },

  'math-sphere': {
    seoTitle: `Calculate Sphere Volume and Surface Area | ${SITE_NAME}`,
    metaDescription:
      'Quickly calculate sphere volume and surface area from radius for spherical tanks, balls, bearings, and 3D geometry coursework.',
    introDescription:
      'Sizing spherical storage tanks, finding material needed to coat a globe, or solving 3D geometry exercises is quick when you calculate sphere volume and surface area from one radius entry. Type the center-to-surface radius to compute enclosed cubic volume using (4/3)πr³ alongside outer shell surface area via 4πr². Both figures update live so you can see immediately how small radius increases expand tank capacity rapidly.',
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
        q: 'How do I find the volume of a half-sphere dome?',
        a: 'Divide the full sphere volume by 2 to get the exact interior capacity of a hemisphere.',
      },
      {
        q: 'What mistake happens if I type diameter instead of radius?',
        a: 'Entering diameter doubles the radius, making surface area 4 times too big and volume 8 times too big—always divide diameter by 2 first.',
      },
      {
        q: 'Why does sphere volume grow much faster than surface area?',
        a: 'Volume scales with radius cubed (r³), whereas surface area scales with radius squared (r²).',
      },
    ],
  },

  'math-cylinder': {
    seoTitle: `Calculate Cylinder Volume and Surface Area | ${SITE_NAME}`,
    metaDescription:
      'Size drums, pipes, and water tanks—calculate cylinder volume and surface area instantly from base radius and height.',
    introDescription:
      'Estimating water tank capacity, sizing steel pipes, or pricing sheet-metal drums starts when you calculate cylinder volume and surface area from base radius and height. Enter both dimensions to see internal cubic volume (πr²h) and complete outer surface area combining the curved cylindrical wall plus both circular end lids. Results update live so you can test how widening a tank compares with making it taller.',
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
        q: 'Does surface area include the top and bottom circular lids?',
        a: 'Yes, total surface area includes the curved side wall plus both circular caps; subtract 2πr² if modeling an open-ended pipe.',
      },
      {
        q: 'Which changes tank volume more: doubling radius or doubling height?',
        a: 'Doubling radius quadruples volume because radius is squared (r²), whereas doubling height doubles volume.',
      },
      {
        q: 'Does a horizontal tank have the same full capacity as a vertical one?',
        a: 'Yes, full geometric volume stays πr²h regardless of whether the cylinder stands upright or lies horizontally.',
      },
    ],
  },

  'math-cone': {
    seoTitle: `Calculate Cone Volume and Surface Area | ${SITE_NAME}`,
    metaDescription:
      'Solve funnels, silos, and geometry homework—calculate cone volume and surface area with automatic slant height lookup.',
    introDescription:
      'Measuring conical grain hoppers, paper funnels, or geometry solids becomes straightforward when you calculate cone volume and surface area from base radius and vertical height. Enter those two measurements to get enclosed volume (one-third of a matching cylinder), total surface area including the circular base, and automatically computed slant height along the outer slope. You never need to solve the slant triangle separately.',
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
        q: 'What is the difference between height and slant height?',
        a: 'Height runs straight down inside from the tip to the center of the base, while slant height runs down the angled outer edge.',
      },
      {
        q: 'Why does a cone hold one-third the volume of a cylinder?',
        a: 'Three identical cones with the same base and vertical height fill one matching cylinder completely.',
      },
      {
        q: 'Does the surface area include the flat circular bottom?',
        a: 'Yes, total surface area adds both the flat base disk (πr²) and the curved cone wall (πrl).',
      },
    ],
  },

  'math-ap-series': {
    seoTitle: `Find Nth Term and Sum of Arithmetic Series | ${SITE_NAME}`,
    metaDescription:
      'Quickly find nth term and sum of arithmetic series given first term a, common difference d, and term count n.',
    introDescription:
      'Linear savings increments, stadium row seating counts, and algebra sequences all follow constant-step rules where you need to find nth term and sum of arithmetic series accurately. Enter the opening term a, the constant difference d added each step (positive or negative), and position n. The calculator outputs both the exact n-th number in the sequence and the total sum of all terms from position 1 through n.',
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
        q: 'Can common difference d be negative for shrinking sequences?',
        a: 'Yes, entering a negative d steps downward at every term, calculating decreasing terms and sums cleanly.',
      },
      {
        q: 'Why does the nth-term formula multiply d by (n − 1) instead of n?',
        a: 'Because the first term takes zero steps, reaching term n requires only n − 1 additions of d.',
      },
      {
        q: 'How is an arithmetic progression different from a geometric progression?',
        a: 'An arithmetic progression adds a fixed constant each step, whereas a geometric progression multiplies by a fixed ratio.',
      },
    ],
  },

  'math-gp-series': {
    seoTitle: `Find Nth Term of Geometric Progression | ${SITE_NAME}`,
    metaDescription:
      'Calculate exponential sequences—find nth term of geometric progression from first term a, common ratio r, and position n.',
    introDescription:
      'Modeling doubling populations, radioactive decay, or recurring multiplier patterns starts when you find nth term of geometric progression sequences using a constant ratio. Type the first number a, the multiplier r applied at each step, and the target position n. Whether your ratio grows rapidly above 1, shrinks as a decimal like 0.5, or alternates signs when negative, you get the exact n-th term instantly.',
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
        q: 'What happens if common ratio r is between 0 and 1, like 0.5?',
        a: 'Each successive term shrinks (such as 80, 40, 20, 10), making it ideal for modeling half-lives and exponential decay.',
      },
      {
        q: 'What does a negative common ratio do to the sequence?',
        a: 'A negative ratio flips the sign on every consecutive term, alternating between positive and negative values.',
      },
      {
        q: 'Why does term 1 stay equal to first term a?',
        a: 'At n = 1, the exponent n − 1 is zero, and r⁰ = 1 leaves a × 1 = a.',
      },
    ],
  },

  'math-log-custom': {
    seoTitle: `Calculate Logarithm With Any Base Online | ${SITE_NAME}`,
    metaDescription:
      'Need log2, log5, or log16? Calculate logarithm with any base online to four decimal places using the change-of-base formula.',
    introDescription:
      'Most handheld calculators only give log base 10 and natural ln, leaving programmers and students stuck when they need to calculate logarithm with any base online such as base 2 for binary bits or base 16 for hex scales. Enter any positive number alongside any valid base other than 1. The solver applies the change-of-base ratio ln(n) / ln(b) to deliver exact four-decimal results instantaneously.',
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
        q: 'Why is base 1 not allowed in logarithms?',
        a: 'Raising 1 to any power always gives 1, and ln(1) = 0 creates division by zero in the change-of-base formula.',
      },
      {
        q: 'Why is base-2 logarithm so common in computer science?',
        a: 'log₂(N) tells you how many binary bits or tree comparisons are required to represent or search N items.',
      },
      {
        q: 'Can I enter a decimal base like 2.71828?',
        a: 'Yes, any positive base other than 1—integer or decimal—computes accurately.',
      },
    ],
  },

  'math-perm-comb': {
    seoTitle: `Calculate Permutations nPr and Combinations | ${SITE_NAME}`,
    metaDescription:
      'Count ordered arrangements and unordered subsets—calculate permutations nPr and combinations nCr from n and r instantly.',
    introDescription:
      'Whether you are computing lottery odds, forming project committees, or ranking race podiums, you often need to calculate permutations nPr and combinations nCr side by side. Enter total available items n and selected items r to evaluate both nPr (where order matters) and nCr (where order does not matter). Comparing the two figures side by side makes probability and combinatorics coursework much clearer.',
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
        q: 'How do I know whether a word problem needs nPr or nCr?',
        a: 'Use nPr when order matters (passwords, podium ranks) and nCr when order does not matter (teams, card hands, committees).',
      },
      {
        q: 'Why is nPr always larger than or equal to nCr?',
        a: 'Each subset of r items can be arranged in r! ways, making nPr equal to r! × nCr.',
      },
      {
        q: 'What happens if chosen items r exceeds total items n?',
        a: 'You cannot pick more unique items than exist in the pool, so r must stay less than or equal to n.',
      },
    ],
  },

  'math-prime-factor': {
    seoTitle: `Find Prime Factorization of Any Number | ${SITE_NAME}`,
    metaDescription:
      'Break down composite integers into prime building blocks—find prime factorization of any number greater than 1 instantly.',
    introDescription:
      'Simplifying large fractions, solving cryptography exercises, and finding lowest common multiples all get easier when you find prime factorization of any number in one step. Enter any whole integer greater than 1 to see its unique chain of prime divisors multiplied together, along with the total factor count. Every composite integer breaks down cleanly into prime building blocks by the Fundamental Theorem of Arithmetic.',
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
        q: 'What appears if I enter a prime number like 97?',
        a: 'A prime integer has no smaller prime divisors, so it outputs 97 itself with a total factor count of 1.',
      },
      {
        q: 'Why cannot the number 1 be prime factorized?',
        a: '1 is neither prime nor composite, so unique prime factorization begins at integer 2.',
      },
      {
        q: 'How do prime factors help find GCD and LCM?',
        a: 'Multiplying shared primes gives the GCD, while combining the highest power of every prime gives the LCM.',
      },
    ],
  },

  'math-fraction-arithmetic': {
    seoTitle: `Simplify and Calculate Fraction Operations | ${SITE_NAME}`,
    metaDescription:
      'Learn how to simplify and calculate fraction operations (+, -, ×, ÷) while inspecting both the unsimplified and final reduced ratios.',
    introDescription:
      'Students checking step-by-step math homework often want to simplify and calculate fraction operations while still seeing the intermediate unsimplified fraction before reduction. Enter both fractions and select addition, subtraction, multiplication, or division. The result banner shows your simplified lowest-terms ratio and decimal value, while the line underneath displays the unsimplified common-denominator ratio so you can verify your hand calculations and spot sign mistakes quickly.',
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
        q: 'Why does the output show the unsimplified fraction underneath?',
        a: 'Seeing the unsimplified step like 6/8 lets you check your cross-multiplication before reducing to 3/4.',
      },
      {
        q: 'What happens if fraction subtraction yields a negative value?',
        a: 'When the second fraction is larger than the first, the reduced numerator keeps a negative sign such as -1/4.',
      },
      {
        q: 'What if I try dividing by a fraction whose numerator is 0?',
        a: 'Dividing by 0/4 means dividing by zero, which triggers a safe error message instead of an invalid ratio.',
      },
    ],
  },

  'math-base-conv': {
    seoTitle: `Convert Decimal to Binary Octal and Hex | ${SITE_NAME}`,
    metaDescription:
      'Programming or subnetting? Convert decimal to binary octal and hex instantaneously with standard 0b, 0o, and 0x prefixes.',
    introDescription:
      'Computer science students, network engineers, and embedded developers frequently need to convert decimal to binary octal and hex when inspecting bitmasks, RGB colors, or IPv4 octets. Type any non-negative base-10 integer to read its Binary (0b), Hexadecimal (0x), and Octal (0o) representations together in one place. Testing milestones like 15, 64, 255, or 1024 makes bit-width boundaries and byte limits clear right away.',
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
        q: 'What do the 0b, 0o, and 0x prefixes stand for?',
        a: 'In programming, 0b marks binary (base 2), 0o marks octal (base 8), and 0x marks hexadecimal (base 16).',
      },
      {
        q: 'Why does hexadecimal use letters A through F?',
        a: 'Base-16 needs sixteen single-character digits per place, so A through F represent values 10 through 15.',
      },
      {
        q: 'Why does 255 equal 11111111 in binary and FF in hex?',
        a: 'Eight binary bits hold 256 values from 0 to 255, making 255 the maximum value of a single byte or RGB color channel.',
      },
    ],
  },
};
