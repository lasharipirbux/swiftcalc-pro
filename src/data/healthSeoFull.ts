import { SITE_NAME } from '../config/site';

export interface HealthCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
  medicalDisclaimer: string;
}

export const healthSeoFullMap: Record<string, HealthCalculatorSeoEntry> = {
  'health-bmi-calc': {
    seoTitle: `Free BMI Calculator – Body Mass Index & Weight Status | ${SITE_NAME}`,
    metaDescription:
      'Check your Body Mass Index score and weight classification in metric or imperial units using our free BMI Calculator.',
    howToUseSteps: [
      'Pick Metric (kg, cm) or Imperial (lb, in) inside the Unit System selector.',
      'Enter body mass in the Weight (kg or lb) field.',
      'Type standing stature into Height (cm or inches) to view your BMI score and category.',
    ],
    formulaExplanation:
      'Body Mass Index screens overall weight proportionality by dividing body mass by squared height in meters (or applying the 703 imperial conversion factor for pounds and inches). Values map to standard World Health Organization bands: under 18.5 (Underweight), 18.5–24.9 (Normal weight), 25–29.9 (Overweight), and 30+ (Obese). Formula: Metric BMI = Weight (kg) / (Height (cm) / 100)²; Imperial BMI = (Weight (lb) / Height (in)²) × 703.',
    practicalExample:
      'Selecting Unit System = Metric (kg, cm) with Weight (kg or lb) = 70 and Height (cm or inches) = 175 computes 70 / 1.75² = 22.9 (Normal weight).',
    faqs: [
      {
        q: 'Can BMI overestimate body fat in strength athletes or bodybuilders?',
        a: 'Yes—because BMI cannot tell dense skeletal muscle apart from adipose tissue, muscular athletes sometimes score above 25 despite low body fat.',
      },
      {
        q: 'Why does the imperial BMI equation multiply by 703?',
        a: 'The constant 703 converts pounds per square inch directly into standard kilograms per square meter units.',
      },
      {
        q: 'Are BMI cutoffs evaluated differently for children and teenagers?',
        a: 'Yes, pediatricians plot child BMI onto age-and-sex percentile growth charts rather than using adult thresholds.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: BMI scores serve informational screening purposes only and do not represent a medical diagnosis or personalized clinical advice.',
  },

  'health-water-calc': {
    seoTitle: `Free Daily Water Intake Calculator – Liters & Ounces | ${SITE_NAME}`,
    metaDescription:
      'Calculate daily hydration needs in liters and fluid ounces from weight and exercise habits with our free Daily Water Intake Calculator.',
    howToUseSteps: [
      'Enter your body mass inside the Weight (kg) field.',
      'Select Light / Sedentary, Moderate Exercise, or High / Athlete in Activity Level.',
      'Check recommended daily hydration displayed in Liters and fluid ounces.',
    ],
    formulaExplanation:
      'Baseline hydration scales roughly at 35 milliliters per kilogram of body weight to support kidney filtration, thermoregulation, and cellular metabolism, then steps up 15% for moderate workouts or 30% for intense athletic sweat loss. Formula: Daily Water (Liters) = (Weight in kg × 35 ml × Activity Factor) / 1000, where Activity Factor is 1.0 (Light), 1.15 (Moderate), or 1.30 (High).',
    practicalExample:
      'A person with Weight (kg) = 70 selecting Activity Level = Moderate Exercise computes (70 × 35 × 1.15) / 1000 = 2.82 Liters (95 fl oz) per day.',
    faqs: [
      {
        q: 'Do tea, soup, and water-rich fruits count toward daily fluid needs?',
        a: 'Plain water is ideal, though herbal teas, milk, broth, and watery produce contribute meaningfully toward overall daily hydration.',
      },
      {
        q: 'Should athletes increase fluids further during hot Pakistani summers?',
        a: 'High heat and humidity raise sweat rates rapidly, so sip extra water and electrolytes whenever training outdoors.',
      },
      {
        q: 'Is it best to drink the entire daily target in two big servings?',
        a: 'Spacing intake steadily across waking hours absorbs far more effectively than chugging large volumes at once.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Daily fluid outputs provide general wellness education only and do not substitute for medical hydration advice, especially with kidney or heart conditions.',
  },

  'health-ideal-weight': {
    seoTitle: `Free Ideal Weight Calculator – Devine Formula (kg & lbs) | ${SITE_NAME}`,
    metaDescription:
      'Estimate healthy reference body weight in kilograms and pounds using height and gender with our free Ideal Weight Calculator.',
    howToUseSteps: [
      'Select Male or Female in the Gender dropdown.',
      'Enter your height in centimeters inside Height (cm).',
      'Read your Devine ideal weight estimate in both kilograms and pounds.',
    ],
    formulaExplanation:
      'Developed originally by Dr. Ben Devine for clinical medication dosing and later adopted across nutrition planning, the Devine equation anchors a 5-foot (60-inch) baseline weight and adds 2.3 kg for each extra inch of stature. Formula: Male IBW (kg) = 50 + 2.3 × max(0, Height/2.54 − 60); Female IBW (kg) = 45.5 + 2.3 × max(0, Height/2.54 − 60).',
    practicalExample:
      'Choosing Gender = Male and Height (cm) = 175 (68.9 inches, or 8.9 inches above 5 feet) outputs 50 + (2.3 × 8.9) = 70.5 kg (155.3 lbs).',
    faqs: [
      {
        q: 'Does the Devine Ideal Weight formula adjust for wide or narrow bone frames?',
        a: 'No, treat the calculated figure as a midpoint reference within roughly a ±10% healthy range depending on frame size and muscle mass.',
      },
      {
        q: 'What happens if Height (cm) is shorter than 152.4 cm (5 feet)?',
        a: 'The equation holds the extra-inches term at zero so baseline estimates never drop abruptly for shorter adults.',
      },
      {
        q: 'Why is the Female baseline 45.5 kg compared to 50 kg for Male?',
        a: 'Men typically carry slightly higher bone mineral density and lean muscle mass per unit height on average.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Devine ideal weight numbers offer general fitness guidance only and should not replace clinical medical advice regarding healthy weight.',
  },

  'health-calorie-needs': {
    seoTitle: `Free Calorie Needs Calculator – TDEE & BMR Energy | ${SITE_NAME}`,
    metaDescription:
      'Find your daily maintenance calories (TDEE) and resting BMR using the Mifflin-St Jeor equation with our free Calorie Needs Calculator.',
    howToUseSteps: [
      'Pick Male or Female in the Gender selector to apply the right metabolic constants.',
      'Fill in Weight (kg), Height (cm), and Age (years) accurately.',
      'Select your weekly training pattern in Activity Multiplier to display TDEE and BMR.',
    ],
    formulaExplanation:
      'The clinically validated Mifflin-St Jeor equation estimates resting Basal Metabolic Rate (BMR) from body mass, stature, age, and biological sex, then scales by lifestyle activity to establish Total Daily Energy Expenditure (TDEE). Formula: BMR = (10 × Weight) + (6.25 × Height) − (5 × Age) + (+5 Male / −161 Female); TDEE = BMR × Activity Multiplier.',
    practicalExample:
      'A 30-year-old Male with Weight (kg) = 75, Height (cm) = 178, and Activity Multiplier = Lightly active (1.375) computes BMR: 1718 kcal and maintenance TDEE of 2362 kcal / day.',
    faqs: [
      {
        q: 'How should I adjust TDEE if my goal is fat loss or lean muscle gain?',
        a: 'Subtract roughly 300–500 kcal daily below TDEE for gradual fat loss, or add 250–350 kcal above TDEE for lean weight gain.',
      },
      {
        q: 'Which Activity Multiplier suits a desk worker who walks 30 minutes daily?',
        a: 'Lightly active (1.375) usually reflects a seated office job paired with light daily walks or 1–3 moderate gym sessions.',
      },
      {
        q: 'Does TDEE drop slightly as you lose weight or get older?',
        a: 'Yes—recalculate every 4–5 kg lost because carrying less mass burns fewer calories during movement and rest.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Calorie and TDEE projections are informational estimates only and are not medical or therapeutic dietary advice.',
  },

  'health-body-fat': {
    seoTitle: `Free Body Fat Percentage Calculator – US Navy Tape Method | ${SITE_NAME}`,
    metaDescription:
      'Estimate body fat percentage at home from neck, waist, and height measurements using our free Body Fat Percentage Calculator.',
    howToUseSteps: [
      'Pick Male or Female inside Gender before entering US Navy tape measurements.',
      'Measure standing stature in Height (cm) and collar perimeter in Neck Circumference (cm).',
      'Type navel-level measurement into Waist Circumference (cm) to estimate body fat.',
    ],
    formulaExplanation:
      'The US Navy circumference model applies base-10 logarithms of height alongside waist-minus-neck girth to approximate subcutaneous and visceral body fat without specialized DEXA scans. Formula: Male BF% = [495 / (1.0324 − 0.19077 × log₁₀(Waist − Neck) + 0.15456 × log₁₀(Height))] − 450.',
    practicalExample:
      'For Gender = Male with Height (cm) = 175, Neck Circumference (cm) = 38, and Waist Circumference (cm) = 85, the US Navy log formula outputs 16.9% Body Fat.',
    faqs: [
      {
        q: 'Where exactly should I wrap the tape for Waist Circumference (cm) and Neck Circumference (cm)?',
        a: 'Measure waist horizontally right across the belly button after exhaling gently, and measure neck just below the Adam’s apple.',
      },
      {
        q: 'How accurate is the US Navy method compared to smart scales?',
        a: 'Tape-based circumference tracking avoids hydration swings that distort bioelectrical impedance bathroom scales, typically landing within ±2%–4%.',
      },
      {
        q: 'Why should measurements stay relaxed without sucking in the stomach?',
        a: 'Pulling in the abdomen artificially shrinks Waist Circumference (cm) and skews trend comparisons week to week.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Circumference-based body fat figures are for fitness tracking information only and do not constitute medical diagnostic advice.',
  },

  'health-due-date': {
    seoTitle: `Free Pregnancy Due Date Calculator – Naegele’s Rule | ${SITE_NAME}`,
    metaDescription:
      'Estimate expected delivery date from your last menstrual period using Naegele’s rule with our free Pregnancy Due Date Calculator.',
    howToUseSteps: [
      'Enter the cycle start date inside First Day of Last Menstrual Period (YYYY-MM-DD).',
      'Verify the 4-digit year, 2-digit month, and 2-digit day match ISO format.',
      'View the projected 40-week delivery date right away.',
    ],
    formulaExplanation:
      'Obstetricians calculate gestational due dates using Naegele’s Rule, adding 280 calendar days (40 full weeks) from the onset of the last menstrual period under an average 28-day ovulation cycle. Formula: Estimated Due Date = First Day of Last Menstrual Period + 280 days.',
    practicalExample:
      'Entering First Day of Last Menstrual Period (YYYY-MM-DD) = 2026-01-15 adds 280 days to project an estimated due date of Thu Oct 22 2026.',
    faqs: [
      {
        q: 'What percentage of babies arrive on the exact projected due date?',
        a: 'Only around 4%–5% deliver on the precise day, while most spontaneous full-term births occur between weeks 38 and 41.',
      },
      {
        q: 'How might irregular 35-day cycles shift the estimate?',
        a: 'Longer menstrual cycles delay ovulation by about a week, so ultrasound crown-rump dating often refines the due date.',
      },
      {
        q: 'Why does gestation count 40 weeks from LMP instead of conception?',
        a: 'Most pregnancies begin roughly two weeks after LMP, yet LMP offers a clear observable starting date.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Estimated due dates are informational calendar approximations only and never replace prenatal ultrasound dating or obstetric medical advice.',
  },

  'health-hr-zone': {
    seoTitle: `Free Heart Rate Zone Calculator – Fat Burn & Cardio BPM | ${SITE_NAME}`,
    metaDescription:
      'Compute maximum heart rate plus fat-burn and cardio beats-per-minute training zones using our free Heart Rate Zone Calculator.',
    howToUseSteps: [
      'Type your current age in years inside the Age (years) box.',
      'Check estimated peak Max HR in beats per minute.',
      'Review both Fat Burn Zone and Cardio Zone BPM intervals listed below.',
    ],
    formulaExplanation:
      'Standard aerobic programming estimates maximum heart rate by subtracting age from 220, then sets moderate fat-burn endurance at 60%–70% of peak HR and vigorous cardiovascular conditioning at 70%–85% of peak HR. Formula: Max HR = 220 − Age; Fat Burn = 0.60–0.70 × Max HR; Cardio = 0.70–0.85 × Max HR.',
    practicalExample:
      'Entering Age (years) = 32 yields Max HR: 188 bpm, placing Fat Burn Zone at 113–132 bpm and Cardio Zone at 132–160 bpm.',
    faqs: [
      {
        q: 'Does staying in the Cardio Zone still burn total body fat?',
        a: 'Yes—higher-intensity Cardio Zone workouts burn substantially more total calories per minute while building aerobic VO2 fitness.',
      },
      {
        q: 'Can beta-blockers or blood pressure medications alter heart rate zones?',
        a: 'Certain cardiovascular drugs blunt pulse rise during exercise, making perceived exertion scales safer than generic BPM targets.',
      },
      {
        q: 'When should a runner exceed 85% of Max HR?',
        a: 'Trained runners briefly enter 85%–95% anaerobic zones during structured short sprint intervals with recovery walks.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Age-predicted heart rate zones provide general exercise information only and do not constitute cardiology or medical clearance advice.',
  },

  'health-steps-calories': {
    seoTitle: `Free Steps to Calories Calculator – Daily Walking Burn | ${SITE_NAME}`,
    metaDescription:
      'Convert daily pedometer step counts and body weight into estimated calories burned with our free Steps to Calories Calculator.',
    howToUseSteps: [
      'Type total recorded daily steps into Number of Steps.',
      'Enter your body weight in kilograms inside Weight (kg).',
      'Read total estimated kilocalories burned right above the breakdown.',
    ],
    formulaExplanation:
      'Walking energy cost scales directly with both distance traveled (roughly proportional to step count) and total body weight moved against gravity. Using an average adult stride energy factor of 0.00057 kcal per step per kilogram turns fitness-tracker totals into practical calorie estimates. Formula: Calories Burned (kcal) = Number of Steps × 0.00057 × Weight (kg).',
    practicalExample:
      'Walking Number of Steps = 10000 at Weight (kg) = 70 burns 10,000 × 0.00057 × 70 = 399 kcal burned.',
    faqs: [
      {
        q: 'Do uphill hikes or brisk jogging burn more than flat walking for the same step count?',
        a: 'Yes—steep inclines and faster running strides raise oxygen demand and burn noticeably more calories per step.',
      },
      {
        q: 'About how many kilometers do 10,000 steps cover?',
        a: 'At an average 0.75-meter stride, 10,000 steps equal roughly 7.5 kilometers (about 4.7 miles) of walking.',
      },
      {
        q: 'Why does a heavier person burn more calories over identical Number of Steps?',
        a: 'Moving greater body mass forward with each stride requires higher muscular work and energy expenditure.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Step calorie outputs are fitness estimates for general information only and should not replace personalized medical or nutrition advice.',
  },

  'health-macros': {
    seoTitle: `Free Macronutrients (Macros) Calculator – Protein, Carbs & Fat | ${SITE_NAME}`,
    metaDescription:
      'Split daily calorie targets into exact grams of protein, carbohydrates, and fats with our free Macronutrients (Macros) Calculator.',
    howToUseSteps: [
      'Enter your target energy intake in Daily Calorie Target (kcal).',
      'Choose Balanced (40/30/30), Low Carb (20/40/40), or High Protein / Muscle Gain (50/30/20) under Fitness Goal.',
      'View daily gram targets for Protein, Carbs, and Fats immediately.',
    ],
    formulaExplanation:
      'Macro planning converts percentage calorie allocations into food label grams using physiological energy values: protein and carbohydrates yield 4 kcal per gram, whereas dietary fats supply 9 kcal per gram. Formula: Protein (g) = (Calories × Protein%) / 4; Carbs (g) = (Calories × Carbs%) / 4; Fats (g) = (Calories × Fat%) / 9.',
    practicalExample:
      'Setting Daily Calorie Target (kcal) = 2200 with Fitness Goal = Balanced (40% Carbs, 30% Protein, 30% Fat) computes Protein: 165g | Carbs: 220g | Fats: 73g.',
    faqs: [
      {
        q: 'Which Fitness Goal suits athletes focused on hypertrophy and gym recovery?',
        a: 'High Protein / Muscle Gain supplies ample carbohydrates (50%) to fuel heavy lifts while keeping protein at 30% for tissue repair.',
      },
      {
        q: 'Why are Fat grams lower than Carb and Protein grams at equal percentages?',
        a: 'Dietary fat packs 9 calories per gram—more than double the 4 calories per gram inside protein and carbs.',
      },
      {
        q: 'Should dietary fiber count inside daily Carbohydrate grams?',
        a: 'Standard macro tracking counts total label carbs unless following strict net-carb ketogenic protocols.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Macro gram splits are intended for general fitness information only and are not medical nutrition therapy or clinical advice.',
  },

  'health-protein-intake': {
    seoTitle: `Free Daily Protein Intake Calculator – Grams per Day | ${SITE_NAME}`,
    metaDescription:
      'Compute optimal daily dietary protein grams from body weight and workout intensity using our free Daily Protein Intake Calculator.',
    howToUseSteps: [
      'Type your current weight in kilograms inside Weight (kg).',
      'Pick Sedentary (1.2g / kg), Moderate Exercise (1.6g / kg), or Heavy Strength Training (2.2g / kg) under Training Intensity.',
      'Read your daily gram target right below.',
    ],
    formulaExplanation:
      'Sports nutrition guidelines scale daily protein needs per kilogram of body mass to preserve lean muscle, recover from training micro-tears, and sustain satiety during fat loss. Formula: Daily Protein (g) = Weight (kg) × Intensity Multiplier (1.2 Light / 1.6 Moderate / 2.2 Heavy).',
    practicalExample:
      'Someone with Weight (kg) = 75 choosing Training Intensity = Moderate Exercise / Fitness (1.6g / kg) computes 75 × 1.6 = 120 grams / day.',
    faqs: [
      {
        q: 'Do people with obesity use total Weight (kg) or lean target weight?',
        a: 'When carrying substantial excess body fat, basing protein multipliers on target healthy weight prevents unrealistically high gram goals.',
      },
      {
        q: 'How can I hit 120 grams / day from everyday meals?',
        a: 'Spread 30–35 grams across three meals plus one snack using eggs, chicken breast, fish, Greek yogurt, lentils, and whey.',
      },
      {
        q: 'Does cooking meat change its raw protein count?',
        a: 'Water evaporates during grilling or boiling so weight shrinks, yet total protein grams inside that portion stay essentially unchanged.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Daily protein targets are for informational purposes only and are not medical advice; consult a physician if you have kidney conditions.',
  },

  'health-bmr-calc': {
    seoTitle: `Free BMR (Basal Metabolic Rate) Calculator – Resting Burn | ${SITE_NAME}`,
    metaDescription:
      'Find how many calories your body burns daily at complete rest with our free BMR (Basal Metabolic Rate) Calculator.',
    howToUseSteps: [
      'Set Gender to Male or Female for the Mifflin-St Jeor resting burn equation.',
      'Record your current Weight (kg) and standing Height (cm) in the numeric boxes.',
      'Type your current age in Age (years) to inspect resting BMR calories.',
    ],
    formulaExplanation:
      'Basal Metabolic Rate measures the baseline energy required strictly to keep heart, lungs, brain, and organs functioning during complete physical rest. The Mifflin-St Jeor formula models BMR accurately across modern adult populations. Formula: BMR = (10 × Weight in kg) + (6.25 × Height in cm) − (5 × Age) + (+5 Male / −161 Female).',
    practicalExample:
      'A 28-year-old Male with Weight (kg) = 70 and Height (cm) = 172 yields (700 + 1,075 − 140 + 5) = 1640 kcal / day at complete rest.',
    faqs: [
      {
        q: 'Should anyone diet below their resting BMR (Basal Metabolic Rate)?',
        a: 'Eating consistently below resting BMR risks muscle loss, fatigue, and nutrient deficiencies unless supervised closely by a physician.',
      },
      {
        q: 'How is BMR different from TDEE?',
        a: 'BMR covers coma-like resting organ burn only, whereas TDEE multiplies BMR by daily walking, chores, and gym workouts.',
      },
      {
        q: 'Why does BMR decline slightly with each decade of Age (years)?',
        a: 'Resting metabolic rate edges down naturally by ~5 kcal per year as hormone levels shift and lean muscle gradually decreases.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Resting metabolic figures are educational calculations only and do not serve as clinical medical advice or hospital nutrition prescriptions.',
  },

  'health-fat-burn-hr': {
    seoTitle: `Free Fat Burning Heart Rate Zone Calculator – 60–70% BPM | ${SITE_NAME}`,
    metaDescription:
      'Calculate your ideal 60%–70% steady-state fat oxidation pulse zone in BPM with our free Fat Burning Heart Rate Zone Calculator.',
    howToUseSteps: [
      'Enter your chronological age in Age (years).',
      'Read your 60%–70% target BPM interval in the primary display.',
      'Verify peak maximum heart rate underneath for context.',
    ],
    formulaExplanation:
      'At moderate aerobic effort (60% to 70% of age-estimated maximum heart rate), muscles rely heavily on fat oxidation for steady-state endurance without rapidly accumulating lactate. Formula: Max HR = 220 − Age; Lower Bound = round(Max HR × 0.60); Upper Bound = round(Max HR × 0.70).',
    practicalExample:
      'For Age (years) = 30 (Max HR = 190 bpm), multiplying by 0.60 and 0.70 gives a steady-state fat-burning target of 114 - 133 bpm.',
    faqs: [
      {
        q: 'Which workouts stay naturally inside the 60%–70% zone?',
        a: 'Brisk incline treadmill walking, easy cycling, light elliptical pacing, and conversational jogging usually sit squarely in 60%–70% BPM.',
      },
      {
        q: 'Why is this zone easier to sustain for 45 to 60 minutes?',
        a: 'Moderate pulse intensity stresses joints lightly and allows conversational breathing, enabling longer overall calorie-burning sessions.',
      },
      {
        q: 'Do faster HIIT workouts still reduce body fat even above 70% BPM?',
        a: 'Yes—total daily calorie deficit drives overall fat loss regardless of whether calories burn from fat or glycogen during the workout.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Aerobic pulse brackets are informational fitness guidelines only and are not medical cardiac advice; check with a doctor before intense exercise.',
  },

  'health-whtr': {
    seoTitle: `Free Waist-to-Height Ratio (WHtR) Calculator – Central Fat Risk | ${SITE_NAME}`,
    metaDescription:
      'Screen central abdominal fat risk by comparing waist size to height using our free Waist-to-Height Ratio (WHtR) Calculator.',
    howToUseSteps: [
      'Measure belly-button waist girth inside Waist Circumference (cm).',
      'Type standing height into Height (cm).',
      'Check your WHtR score against the 0.50 healthy health benchmark.',
    ],
    formulaExplanation:
      'Public health researchers increasingly favor Waist-to-Height Ratio because keeping your waist under half your height flags visceral abdominal fat better than BMI alone, even in adults with normal total weight. Formula: WHtR = Waist Circumference (cm) / Height (cm), with < 0.53 classified Healthy / Normal.',
    practicalExample:
      'Dividing Waist Circumference (cm) = 82 by Height (cm) = 175 yields 82 / 175 = 0.47 (Healthy / Normal).',
    faqs: [
      {
        q: 'Why is the "keep your waist under half your height" rule so widely recommended?',
        a: 'A WHtR below 0.50 correlates strongly with lower cardiometabolic risk across diverse ethnicities and both sexes.',
      },
      {
        q: 'Can I enter inches instead of centimeters in both boxes?',
        a: 'Yes—because WHtR is a unitless ratio, using inches in both Waist Circumference and Height yields the exact same ratio.',
      },
      {
        q: 'Why might someone have a normal BMI yet an elevated WHtR?',
        a: 'Low muscle mass paired with visceral midsection fat ("skinny fat") often shows up clearly in WHtR even when BMI looks normal.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Waist-to-height scores provide informational health awareness only and cannot substitute for medical cardiovascular screening or physician advice.',
  },

  'health-calorie-deficit': {
    seoTitle: `Free Calorie Deficit for Weight Loss Calculator – Safe Daily Intake | ${SITE_NAME}`,
    metaDescription:
      'Compute daily fat-loss calorie targets from maintenance TDEE and weekly pace with our free Calorie Deficit for Weight Loss Calculator.',
    howToUseSteps: [
      'Type your maintenance burn into Current Maintenance Calories (TDEE).',
      'Pick 0.5 kg per week (550 kcal deficit) or 1.0 kg per week (1100 kcal deficit) under Target Weekly Weight Loss.',
      'Review your recommended daily calorie budget floored safely at 1200 kcal.',
    ],
    formulaExplanation:
      'One kilogram of human adipose fat tissue holds roughly 7,700 kilocalories; dividing by 7 days yields a 1,100 kcal daily deficit for 1 kg/week or 550 kcal daily for 0.5 kg/week, while enforcing a 1,200 kcal minimum safety floor. Formula: Target Daily Calories = max(1200, Current Maintenance TDEE − Daily Deficit).',
    practicalExample:
      'Setting Current Maintenance Calories (TDEE) = 2500 with Target Weekly Weight Loss = 0.5 kg per week (Moderate - 550 kcal deficit) outputs 1950 kcal / day.',
    faqs: [
      {
        q: 'Why does the calculator stop Target Calories from dropping below 1,200 kcal?',
        a: 'Very-low-calorie diets under 1,200 kcal risk micronutrient shortfalls, gallstones, and muscle loss without clinical supervision.',
      },
      {
        q: 'Is 0.5 kg per week usually easier to maintain than 1.0 kg per week?',
        a: 'Yes—a moderate 550 kcal deficit controls hunger better, preserves gym strength, and prevents rebound weight regain.',
      },
      {
        q: 'Where do I find my Current Maintenance Calories (TDEE)?',
        a: 'Calculate your baseline TDEE first using the Calorie Needs Calculator in this category and copy that number here.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Weight-loss calorie deficits are general informational guides only and do not constitute medical weight-management advice.',
  },

  'health-sleep-calc': {
    seoTitle: `Free Sleep Duration & Sleep Cycles Calculator – Bedtime Planner | ${SITE_NAME}`,
    metaDescription:
      'Find ideal bedtimes aligned with 90-minute sleep cycles for your morning alarm with our free Sleep Duration & Sleep Cycles Calculator.',
    howToUseSteps: [
      'Enter your morning alarm in 24-hour format inside Target Wake-up Time (HH:MM 24hr).',
      'Check suggested bedtimes for 6 full cycles (9h) and 5 full cycles (7.5h).',
      'View the shorter 4-cycle (6h) fallback window listed right underneath.',
    ],
    formulaExplanation:
      'Human sleep progresses through roughly 90-minute light, deep, and REM cycles; waking right at the end of a cycle reduces groggy morning sleep inertia. Subtracting cycle multiples plus an average 15-minute sleep-onset buffer sets optimal lights-out times. Formula: Bedtime = Target Wake-up Time − (Cycles × 90 mins) − 15 mins.',
    practicalExample:
      'Setting Target Wake-up Time (HH:MM 24hr) = 06:30 recommends going to bed at 21:15 for 6 Cycles (9h), 22:45 for 5 Cycles (7.5h), or 00:15 for 4 Cycles (6h).',
    faqs: [
      {
        q: 'Why subtract 15 extra minutes before starting the 90-minute cycle count?',
        a: 'Most healthy adults take around 10 to 20 minutes after turning off lights to drift into stage-1 sleep.',
      },
      {
        q: 'How many 90-minute cycles do most adults need nightly?',
        a: 'Five full cycles (7.5 hours of actual sleep) or six cycles (9 hours) fit the 7–9 hour nightly adult sleep guideline.',
      },
      {
        q: 'Must Target Wake-up Time (HH:MM 24hr) use 24-hour clock format like 06:30?',
        a: 'Yes—use leading zeros in 24-hour notation (such as 06:30 for 6:30 AM or 14:00 for 2:00 PM) so time subtraction parses accurately.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Sleep-cycle bedtime suggestions offer general lifestyle information only and are not medical advice for insomnia or sleep apnea.',
  },

  'health-caffeine-limit': {
    seoTitle: `Free Caffeine Intake Safety Limit Calculator – Daily Milligrams | ${SITE_NAME}`,
    metaDescription:
      'Find your safe maximum daily milligrams of caffeine and equivalent coffee cups by body weight with our free Caffeine Intake Safety Limit Calculator.',
    howToUseSteps: [
      'Enter your body weight in kilograms into Weight (kg).',
      'Read your daily caffeine ceiling in milligrams.',
      'Check the approximate equivalent cups of brewed coffee listed below.',
    ],
    formulaExplanation:
      'Food safety guidelines estimate moderate adult tolerance at up to 5.7 mg of caffeine per kilogram of body weight while capping total healthy adult daily intake strictly at 400 mg across coffee, tea, soda, and pre-workouts. Formula: Max Daily Caffeine (mg) = min(400, Weight in kg × 5.7); Coffee Cups ≈ Max Caffeine / 95 mg.',
    practicalExample:
      'Typing Weight (kg) = 70 computes 70 × 5.7 = 399 mg / day, equal to Approx. 4.2 standard cups of coffee.',
    faqs: [
      {
        q: 'Why does the caffeine limit cap strictly at 400 mg even above 70 kg?',
        a: 'FDA guidance caps total safe adult caffeine at 400 mg daily regardless of heavier body weight to minimize palpitations and jitteriness.',
      },
      {
        q: 'Should pregnant individuals follow a lower limit than 400 mg?',
        a: 'Yes—obstetric organizations typically advise limiting pregnancy caffeine below 200 mg daily rather than the general adult ceiling.',
      },
      {
        q: 'Does Pakistani chai or green tea count toward Max Caffeine?',
        a: 'Yes, an average cup of strong black chai holds ~40–60 mg of caffeine and green tea holds ~25–35 mg.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Caffeine estimates provide general public-health information only and are not personal medical advice for arrhythmia, anxiety, or pregnancy.',
  },

  'health-target-weight-timeline': {
    seoTitle: `Free Target Weight Loss Timeline Calculator – Goal Weeks & Months | ${SITE_NAME}`,
    metaDescription:
      'Project how many weeks and months are needed to reach your goal weight at a realistic weekly pace with our free Target Weight Loss Timeline Calculator.',
    howToUseSteps: [
      'Type starting body mass into Current Weight (kg).',
      'Enter your healthy goal weight inside Target Weight (kg).',
      'Set sustainable weekly pace in Expected Weekly Loss (kg) to calculate weeks and months.',
    ],
    formulaExplanation:
      'Dividing the absolute kilogram gap between starting and goal weights by your expected weekly change projects realistic calendar duration, converting weeks to months using 4.33 weeks per calendar month. Formula: Timeline (Weeks) = |Current Weight − Target Weight| / Expected Weekly Loss; Months = Weeks / 4.33.',
    practicalExample:
      'Moving from Current Weight (kg) = 82 to Target Weight (kg) = 72 (10.0 kg gap) at Expected Weekly Loss (kg) = 0.5 projects 20.0 weeks (~4.6 months).',
    faqs: [
      {
        q: 'What Expected Weekly Loss (kg) pace helps preserve muscle mass?',
        a: 'Losing 0.5 kg to 0.75 kg weekly (~0.5%–1% of body weight) minimizes fatigue and muscle breakdown while keeping habits sustainable.',
      },
      {
        q: 'Why does scale weight fluctuate slightly from day to day along the timeline?',
        a: 'Salty meals, carbohydrate glycogen, workout soreness, and hydration shift scale readings by 0.5–1.5 kg temporarily without changing fat.',
      },
      {
        q: 'Can I also use this tool to timeline slow lean weight gain?',
        a: 'Yes—enter a Target Weight (kg) higher than Current Weight (kg) and put your weekly gain rate (e.g., 0.25 kg) in Expected Weekly Loss (kg).',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Goal-weight timelines are informational projections only and do not serve as clinical medical advice or dietitian treatment.',
  },

  'health-one-rep-max': {
    seoTitle: `Free One Rep Max (1RM) Strength Calculator – Epley Lift Max | ${SITE_NAME}`,
    metaDescription:
      'Estimate your maximum single-rep barbell lift from submaximal sets using the Epley formula with our free One Rep Max (1RM) Strength Calculator.',
    howToUseSteps: [
      'Enter barbell or dumbbell load lifted inside Weight Lifted (kg).',
      'Type clean completed repetitions into Repetitions Performed.',
      'View your estimated 1-rep maximum strength in kilograms.',
    ],
    formulaExplanation:
      'Powerlifters and strength coaches use the Epley equation to project maximum single-repetition strength safely from moderate 3–10 rep working sets without risking joint injury under maximal testing. Formula: Estimated 1RM (kg) = Weight Lifted × (1 + Repetitions Performed / 30) for reps > 1.',
    practicalExample:
      'Squatting Weight Lifted (kg) = 80 for Repetitions Performed = 8 computes 80 × (1 + 8 / 30) = 101 kg Estimated 1RM.',
    faqs: [
      {
        q: 'At which rep range is the Epley 1RM estimate most reliable?',
        a: 'Predictions stay sharpest between 2 and 10 clean reps; high-rep sets of 15–20+ introduce muscular endurance bias.',
      },
      {
        q: 'How can I program training percentages once I know Estimated 1RM?',
        a: 'Multiply Estimated 1RM by 0.70–0.80 for muscle-building sets of 6–10 reps, or 0.85–0.92 for heavy strength triples.',
      },
      {
        q: 'Does Weight Lifted (kg) include the weight of the barbell itself?',
        a: 'Yes—count the 20 kg Olympic barbell plus all loaded weight plates on both ends.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Strength 1RM estimates provide gym-programming information only and are not medical clearance or sports-injury advice.',
  },

  'health-blood-pressure': {
    seoTitle: `Free Blood Pressure Category Checker Calculator – AHA Stages | ${SITE_NAME}`,
    metaDescription:
      'Classify systolic and diastolic blood pressure readings according to AHA ranges with our free Blood Pressure Category Checker Calculator.',
    howToUseSteps: [
      'Type the upper cuff number into Systolic (Upper mmHg).',
      'Enter the lower cuff number into Diastolic (Lower mmHg).',
      'Read the corresponding AHA blood pressure classification immediately.',
    ],
    formulaExplanation:
      'American Heart Association guidelines classify Normal blood pressure strictly as Systolic < 120 AND Diastolic < 80 mmHg, Elevated as 120–129 / < 80, Stage 1 Hypertension starting at 130–139 OR 80–89, Stage 2 at ≥ 140 OR ≥ 90, and Hypertensive Crisis above 180 / 120. Formula: Classification = max-severity rule over (Systolic mmHg, Diastolic mmHg).',
    practicalExample:
      'Entering Systolic (Upper mmHg) = 120 and Diastolic (Lower mmHg) = 80 classifies as High Blood Pressure (Stage 1) because Diastolic reaches 80 mmHg under strict AHA thresholds.',
    faqs: [
      {
        q: 'Why does 120/80 mmHg display High Blood Pressure (Stage 1) instead of Normal?',
        a: 'AHA guidelines define Normal strictly as under 120 AND under 80; hitting exactly 80 diastolic crosses into Stage 1.',
      },
      {
        q: 'How should I sit before checking Systolic and Diastolic readings?',
        a: 'Rest quietly for 5 minutes with feet flat on the floor, back supported, and cuff arm resting at heart level.',
      },
      {
        q: 'Does one single high reading mean chronic hypertension?',
        a: 'Stress, caffeine, or walking can spike numbers briefly—log readings across several calm mornings for a physician.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Blood pressure category lookups are strictly informational and never replace urgent medical evaluation or physician advice.',
  },

  'health-lean-body-mass': {
    seoTitle: `Free Lean Body Mass (LBM) Calculator – Boer Formula | ${SITE_NAME}`,
    metaDescription:
      'Separate fat-free lean mass from estimated fat weight using the clinical Boer formula with our free Lean Body Mass (LBM) Calculator.',
    howToUseSteps: [
      'Select Male or Female under Gender so the Boer lean-mass coefficients apply properly.',
      'Type your body mass in Weight (kg) and height in Height (cm) to separate lean tissue from fat.',
      'Check estimated Lean Mass alongside Fat Mass derived from the Boer equation.',
    ],
    formulaExplanation:
      'Lean Body Mass covers skeletal muscle, bones, organs, blood, and water—everything except adipose body fat. The Boer equation predicts LBM from height and weight without requiring skinfold calipers. Formula: Male LBM (kg) = (0.407 × Weight) + (0.267 × Height) − 19.2; Female LBM (kg) = (0.252 × Weight) + (0.473 × Height) − 48.3.',
    practicalExample:
      'A Male with Weight (kg) = 75 and Height (cm) = 178 computes (0.407 × 75) + (0.267 × 178) − 19.2 = 58.9 kg Lean Mass (Fat Mass: 16.1 kg).',
    faqs: [
      {
        q: 'Why does Lean Body Mass include water and bone as well as muscle?',
        a: 'By clinical definition, LBM equals total body weight minus essential and stored fat mass, so organs, skeleton, and fluids are included.',
      },
      {
        q: 'Can strength athletes use LBM to set protein goals?',
        a: 'Yes—anchoring ~2 g of protein per kg of Lean Mass works well for lean-mass preservation during weight loss.',
      },
      {
        q: 'How does the Boer method differ from the US Navy Body Fat calculator?',
        a: 'Boer relies strictly on weight and height averages, whereas US Navy factors in actual waist and neck circumferences.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Boer LBM outputs offer general body-composition information only and do not constitute clinical medical advice.',
  },

  'health-bac-estimator': {
    seoTitle: `Free BAC (Blood Alcohol Concentration) Estimator Calculator | ${SITE_NAME}`,
    metaDescription:
      'Estimate blood alcohol percentage from drinks consumed, elapsed hours, and body weight with our free BAC Estimator Calculator.',
    howToUseSteps: [
      'Select Male or Female inside the Gender field.',
      'Enter body mass in Weight (kg) and count in Standard Drinks Consumed.',
      'Type elapsed drinking duration inside Hours Since First Drink to estimate BAC.',
    ],
    formulaExplanation:
      'The Widmark model estimates peak blood alcohol by dividing grams of pure alcohol (14 g per standard drink) by total body water (Weight × r, where r = 0.68 male / 0.55 female), then subtracting average liver clearance of ~0.015% per hour. Formula: BAC (%) = max(0, [((Drinks × 14) / (Weight_kg × 1000 × r)) × 100] − (0.015 × Hours)).',
    practicalExample:
      'A Male weighing Weight (kg) = 75 having Standard Drinks Consumed = 3 over Hours Since First Drink = 2 calculates 0.052% BAC.',
    faqs: [
      {
        q: 'Why is the distribution factor r lower for Female (0.55) than Male (0.68)?',
        a: 'Women generally have a slightly lower percentage of total body water per kilogram, concentrating alcohol in slightly higher blood levels.',
      },
      {
        q: 'Does drinking black coffee speed up liver alcohol clearance above 0.015% per hour?',
        a: 'No—caffeine only masks drowsiness; only elapsed time lets liver enzymes metabolize alcohol from the bloodstream.',
      },
      {
        q: 'Can someone feel impaired below the 0.08% legal driving threshold?',
        a: 'Yes—coordination, reaction speed, and judgment already deteriorate noticeably at 0.02% to 0.05% BAC.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Widmark BAC numbers are rough estimates for information only and are not medical advice or a safety clearance to drive.',
  },

  'health-smoking-cost': {
    seoTitle: `Free Smoking Cost & Health Impact Calculator – PKR Savings | ${SITE_NAME}`,
    metaDescription:
      'Calculate cumulative money spent on cigarettes over years in PKR to motivate quitting with our free Smoking Cost & Health Impact Calculator.',
    howToUseSteps: [
      'Enter daily consumption into Packs Smoked per Day.',
      'Type local pack retail price inside Price per Pack (PKR).',
      'Input habit duration in Years Smoking to see cumulative expenditure.',
    ],
    formulaExplanation:
      'Daily cigarette expenses look small individually yet compound into staggering multi-year sums. Multiplying daily packs by local pack price across 365 days per year reveals the full financial reward of quitting. Formula: Total Spent (PKR) = Packs Smoked per Day × Price per Pack × 365 × Years Smoking.',
    practicalExample:
      'Smoking Packs Smoked per Day = 1 at Price per Pack (PKR) = 350 across Years Smoking = 5 adds up to PKR 638,750 Spent.',
    faqs: [
      {
        q: 'How do I enter half a pack (10 cigarettes) per day?',
        a: 'Enter 0.5 in Packs Smoked per Day to compute expenditure for 10 cigarettes daily accurately.',
      },
      {
        q: 'How soon do cardiovascular benefits begin after quitting cigarettes?',
        a: 'Heart rate and carbon monoxide levels begin normalizing within 24 hours, while lung function and circulation improve noticeably over weeks.',
      },
      {
        q: 'Does this total include rising cigarette tax inflation over past years?',
        a: 'It projects straight at today’s Price per Pack (PKR), showing what keeping that habit costs going forward.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Smoking expense calculations provide awareness information only and do not substitute for medical cessation counseling or healthcare advice.',
  },

  'health-running-pace': {
    seoTitle: `Free Running Pace & Speed Calculator – min/km & km/h | ${SITE_NAME}`,
    metaDescription:
      'Compute split running pace in minutes per kilometer and average speed in km/h with our free Running Pace & Speed Calculator.',
    howToUseSteps: [
      'Enter route length in Distance (Kilometers).',
      'Type total workout duration into Total Time (Minutes).',
      'Inspect split pace (min/km) alongside average speed (km/h).',
    ],
    formulaExplanation:
      'Endurance runners pace races by minutes per kilometer, converting decimal minutes into seconds (fraction × 60) while also deriving average speed in kilometers per hour by dividing distance by elapsed hours. Formula: Pace (min/km) = Total Time / Distance; Speed (km/h) = Distance / (Total Time / 60).',
    practicalExample:
      'Running Distance (Kilometers) = 5 in Total Time (Minutes) = 28 yields a split pace of 5:36 min/km and Average Speed: 10.7 km/h.',
    faqs: [
      {
        q: 'What pace is needed to break 25 minutes in a 5K race?',
        a: 'Running 5 km in 25 minutes requires holding an even 5:00 min/km pace (12.0 km/h average speed).',
      },
      {
        q: 'Can walkers use Distance (Kilometers) and Total Time (Minutes) too?',
        a: 'Yes—a brisk 5 km walk in 50 minutes calculates cleanly to a 10:00 min/km pace (6.0 km/h).',
      },
      {
        q: 'How do I estimate 10K finish time from my 5K pace?',
        a: 'Multiply your steady Pace (min/km) by 10, adding roughly 1–2 minutes for fatigue over the longer distance.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Running pace calculations are for general athletic tracking information only and are not medical fitness clearance advice.',
  },

  'health-karvonen-hr': {
    seoTitle: `Free Target Heart Rate (Karvonen Formula) Calculator – Training BPM | ${SITE_NAME}`,
    metaDescription:
      'Calculate personal cardio training BPM from resting pulse and heart reserve with our free Target Heart Rate (Karvonen Formula) Calculator.',
    howToUseSteps: [
      'Type your age in years inside Age (years).',
      'Enter morning waking pulse inside Resting Heart Rate (bpm).',
      'Set desired workout effort in Target Intensity (%) to compute Karvonen training BPM.',
    ],
    formulaExplanation:
      'Unlike basic % Max HR formulas, the Karvonen method factors in Heart Rate Reserve (Max HR minus Resting HR) so fitter athletes with lower resting heart rates get tailored training targets. Formula: Max HR = 220 − Age; Target HR = [((Max HR − Resting HR) × Target Intensity / 100)] + Resting HR.',
    practicalExample:
      'An athlete with Age (years) = 30 (Max HR: 190 bpm) and Resting Heart Rate (bpm) = 65 training at Target Intensity (%) = 70% calculates [(190 − 65) × 0.70] + 65 = 153 bpm.',
    faqs: [
      {
        q: 'When should I measure Resting Heart Rate (bpm) for accuracy?',
        a: 'Count your wrist pulse or check a fitness watch immediately upon waking before standing up or drinking coffee.',
      },
      {
        q: 'Why does Karvonen output a higher BPM than multiplying Max HR by 70%?',
        a: 'Because Karvonen measures effort strictly across usable Heart Rate Reserve above resting pulse rather than down to zero BPM.',
      },
      {
        q: 'What Target Intensity (%) ranges correspond to aerobic vs tempo sessions?',
        a: 'Easy recovery sits at 55%–65%, steady aerobic base at 65%–75%, and tempo lactate workouts at 80%–88% Karvonen reserve.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Karvonen training zones supply exercise planning information only and are not individualized cardiac or medical advice.',
  },

  'health-bsa': {
    seoTitle: `Free Body Surface Area (BSA) Calculator – Mosteller m² | ${SITE_NAME}`,
    metaDescription:
      'Compute human Body Surface Area in square meters using the Mosteller equation from weight and height with our free Body Surface Area (BSA) Calculator.',
    howToUseSteps: [
      'Enter body mass in kilograms inside Weight (kg).',
      'Type standing height in centimeters inside Height (cm).',
      'Read computed Body Surface Area in square meters (m²).',
    ],
    formulaExplanation:
      'Mosteller’s simplified formula estimates total external skin surface area in square meters using one square root over height times weight divided by 3,600, commonly referenced in physiology and metabolic indexing. Formula: BSA (m²) = √[(Height in cm × Weight in kg) / 3600].',
    practicalExample:
      'Entering Weight (kg) = 70 and Height (cm) = 175 computes √[(175 × 70) / 3600] = √3.4028 = 1.84 m².',
    faqs: [
      {
        q: 'What is the typical average adult Body Surface Area?',
        a: 'Reference physiology standards commonly quote around 1.7 m² for women and 1.9 m² for men.',
      },
      {
        q: 'Why is the Mosteller equation favored over Du Bois?',
        a: 'Mosteller delivers virtually identical m² figures to Du Bois while using an intuitive square-root equation easy to verify.',
      },
      {
        q: 'Can BSA change when Weight (kg) increases or decreases?',
        a: 'Yes—BSA scales proportionally with square-root changes in body mass even when adult height stays fixed.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Body Surface Area results are for informational reference only and are not medical advice; never self-dose medications from BSA.',
  },

  'health-whr': {
    seoTitle: `Free Waist-to-Hip Ratio (WHR) Calculator – Body Shape Risk | ${SITE_NAME}`,
    metaDescription:
      'Evaluate body fat distribution and metabolic risk by comparing waist and hip measurements with our free Waist-to-Hip Ratio (WHR) Calculator.',
    howToUseSteps: [
      'Measure narrowest natural torso perimeter into Waist Circumference (cm).',
      'Measure widest gluteal perimeter inside Hip Circumference (cm).',
      'Inspect your WHR score and associated risk bracket.',
    ],
    formulaExplanation:
      'Waist-to-Hip Ratio distinguishes apple-shaped central abdominal weight storage from lower-body pear-shaped fat storage by dividing waist circumference by hip circumference. Formula: WHR = Waist Circumference / Hip Circumference.',
    practicalExample:
      'Measuring Waist Circumference (cm) = 82 and Hip Circumference (cm) = 100 calculates WHR = 0.82 (Low Risk).',
    faqs: [
      {
        q: 'Where should the measuring tape sit for Hip Circumference (cm)?',
        a: 'Wrap the tape level horizontally around the widest protrusion of the buttocks with feet standing together.',
      },
      {
        q: 'Do WHO cutoffs differ slightly between men and women?',
        a: 'Yes—WHO defines abdominal risk at WHR ≥ 0.90 for men and ≥ 0.85 for women; this tool applies a conservative 0.85 Low Risk boundary.',
      },
      {
        q: 'Can I measure both circumferences in inches instead of cm?',
        a: 'Yes—providing both Waist Circumference and Hip Circumference in the same unit produces the identical WHR decimal.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Waist-to-hip ratios provide general wellness information only and are not a medical assessment or clinical diagnostic advice.',
  },

  'health-water-target': {
    seoTitle: `Free Daily Water Intake Target Calculator – ml/kg Hydration | ${SITE_NAME}`,
    metaDescription:
      'Determine daily drinking water targets in liters and milliliters using weight-based ml/kg multipliers with our free Daily Water Intake Target Calculator.',
    howToUseSteps: [
      'Enter your weight in kilograms inside Body Weight (kg).',
      'Pick Sedentary (Low), Moderate Exercise, or Heavy Exercise / Athlete in Activity Level.',
      'Check daily liters and milliliters hydration targets immediately.',
    ],
    formulaExplanation:
      'Weight-tiered hydration plans assign 35 ml of water per kilogram for sedentary days, 40 ml/kg for moderate gym routines, and 50 ml/kg for heavy athletic sweating to replenish fluids cleanly. Formula: Daily Water (ml) = Body Weight (kg) × Multiplier (35 Low / 40 Moderate / 50 Heavy); Liters = ml / 1000.',
    practicalExample:
      'An athlete with Body Weight (kg) = 80 selecting Activity Level = Heavy Exercise / Athlete multiplies 80 × 50 = 4,000 ml, yielding 4.00 Liters (4000 ml) / day.',
    faqs: [
      {
        q: 'How many 250 ml drinking glasses equal 4.00 Liters?',
        a: 'Dividing 4,000 ml by 250 ml equals 16 standard drinking glasses spaced across the day.',
      },
      {
        q: 'Is clear or pale straw urine a simple check alongside milliliter targets?',
        a: 'Yes—light straw-colored urine usually signals adequate hydration, whereas dark amber signals a need to drink more fluids.',
      },
      {
        q: 'Can drinking excessive water too rapidly pose risks?',
        a: 'Yes—consuming huge liters within an hour without electrolytes can dilute blood sodium (hyponatremia), so sip steadily.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Weight-based hydration targets are informational wellness guidelines only and do not substitute for physician medical advice.',
  },

  'health-body-fat-mass': {
    seoTitle: `Free Body Fat Mass & Lean Body Mass Calculator – Weight Split | ${SITE_NAME}`,
    metaDescription:
      'Break total body weight into fat kilograms and fat-free lean kilograms from body fat % with our free Body Fat Mass & Lean Body Mass Calculator.',
    howToUseSteps: [
      'Type your current scale weight inside Total Weight (kg).',
      'Enter measured or estimated body fat inside Body Fat Percentage (%).',
      'Read exact Fat Mass and Lean Mass split in kilograms.',
    ],
    formulaExplanation:
      'Once you know your body fat percentage from calipers, Navy tape, or a DEXA scan, multiplying total scale mass splits your body cleanly into adipose Fat Mass and fat-free Lean Mass for tracking recomposition progress. Formula: Fat Mass (kg) = Total Weight × (Body Fat Percentage / 100); Lean Mass (kg) = Total Weight − Fat Mass.',
    practicalExample:
      'Someone with Total Weight (kg) = 75 and Body Fat Percentage (%) = 20% splits into Fat Mass: 15.0 kg | Lean Mass: 60.0 kg.',
    faqs: [
      {
        q: 'How can I tell if weight loss is coming from fat rather than muscle?',
        a: 'Recalculate monthly—if Fat Mass drops steadily while Lean Mass holds steady near 60 kg, your strength and protein plan is preserving muscle.',
      },
      {
        q: 'Why can two people weighing 75 kg look completely different?',
        a: 'At 75 kg, carrying 64 kg Lean Mass and 15% fat looks far leaner and tighter than carrying 52 kg Lean Mass and 30% fat.',
      },
      {
        q: 'What if I want to drop from 20% to 15% body fat while keeping Lean Mass = 60 kg?',
        a: 'Divide 60 kg by (1 − 0.15) = 70.6 kg target Total Weight, meaning roughly 4.4 kg of pure fat loss.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Fat mass and lean mass breakdowns offer general fitness tracking information only and are not medical diagnostic advice.',
  },
};
