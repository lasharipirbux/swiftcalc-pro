import { SITE_NAME } from '../config/site';

export interface HealthCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  introDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
  medicalDisclaimer: string;
}

export const healthSeoFullMap: Record<string, HealthCalculatorSeoEntry> = {
  'health-bmi-calc': {
    seoTitle: `How to Calculate Body Mass Index BMI | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate body mass index BMI using metric or imperial weight and height to check standard adult weight categories.',
    introDescription:
      'Screening whether your weight sits inside a healthy proportion for your height starts with knowing how to calculate body mass index BMI accurately. Choose either metric kilograms and centimeters or imperial pounds and inches, then enter your current weight and standing height. You will get your numerical BMI score alongside standard World Health Organization bands so you can track long-term fitness trends alongside waist measurements.',
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
        q: 'Can BMI overestimate fat in muscular athletes?',
        a: 'Yes, because BMI does not separate dense muscle tissue from body fat, strength athletes often score higher despite low body fat.',
      },
      {
        q: 'Why does the imperial BMI formula multiply by 703?',
        a: 'The 703 factor converts pounds per square inch directly into standard kilograms per square meter.',
      },
      {
        q: 'Do children use the same BMI ranges as adults?',
        a: 'No, pediatric BMI relies on age- and sex-specific growth percentiles rather than fixed adult cutoffs.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: BMI scores serve informational screening purposes only and do not represent a medical diagnosis or personalized clinical advice.',
  },

  'health-water-calc': {
    seoTitle: `How Much Water to Drink Daily by Weight | ${SITE_NAME}`,
    metaDescription:
      'Find out how much water to drink daily by weight and exercise habits, shown clearly in both liters and fluid ounces.',
    introDescription:
      'Staying properly hydrated supports energy levels, digestion, and workout recovery, making it helpful to know how much water to drink daily by weight. Enter your current body mass in kilograms and pick whether your typical day is sedentary, moderately active, or intensely athletic. The calculator converts your fluid requirements into both liters and fluid ounces so you can pace water intake steadily from morning until evening.',
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
        q: 'Do herbal tea, broth, and watery fruits count toward hydration?',
        a: 'Plain water is best, though unsweetened teas, milk, soups, and moisture-rich fruits contribute meaningfully to total daily fluids.',
      },
      {
        q: 'Should outdoor workouts in hot weather raise fluid intake?',
        a: 'Yes, heat and heavy sweating increase fluid loss, so sipping extra water and electrolytes during summer training helps prevent dehydration.',
      },
      {
        q: 'Is spacing water across the day better than drinking huge amounts at once?',
        a: 'Steady sipping throughout waking hours allows better absorption than drinking large volumes in a short window.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Daily fluid outputs provide general wellness education only and do not substitute for medical hydration advice, especially with kidney or heart conditions.',
  },

  'health-ideal-weight': {
    seoTitle: `How to Calculate Ideal Body Weight for Height | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate ideal body weight for height and gender using the Devine equation, shown in both kilograms and pounds.',
    introDescription:
      'Setting a realistic fitness milestone often starts with learning how to calculate ideal body weight for height using a standard reference formula. Choose male or female and enter your standing height in centimeters to estimate your baseline weight according to the Devine equation. Viewing results in both kilograms and pounds gives you a practical midpoint benchmark that you can adapt for bone frame and muscle mass.',
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
        q: 'Does the Devine formula adjust for wide or narrow body frames?',
        a: 'No, treat the result as a midpoint reference within roughly a 10% healthy range based on frame size and lean muscle.',
      },
      {
        q: 'Why does the estimate differ slightly between men and women at the same height?',
        a: 'Men typically carry slightly higher average bone density and skeletal muscle mass per inch of height.',
      },
      {
        q: 'What if someone is shorter than 5 feet tall?',
        a: 'The formula keeps the extra-inches adjustment at zero so estimates do not drop sharply for shorter adults.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Devine ideal weight numbers offer general fitness guidance only and should not replace clinical medical advice regarding healthy weight.',
  },

  'health-calorie-needs': {
    seoTitle: `How to Calculate Daily Calorie Needs TDEE | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate daily calorie needs TDEE and resting BMR from age, height, weight, and weekly activity level.',
    introDescription:
      'Whether you want to maintain weight, lose body fat, or build muscle, knowing how to calculate daily calorie needs TDEE gives you a dependable starting target. Enter your gender, weight, height, age, and weekly exercise routine to compute both resting Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure. Having your true maintenance calorie burn prevents guesswork when planning meals.',
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
        q: 'How should I adjust maintenance TDEE for gradual fat loss?',
        a: 'Subtracting roughly 300 to 500 calories per day supports steady fat loss while keeping energy and training strength stable.',
      },
      {
        q: 'Which activity level fits a desk worker who walks 30 minutes daily?',
        a: 'Lightly active usually fits a seated job paired with daily brisk walks or one to three light workouts weekly.',
      },
      {
        q: 'How often should I recalculate daily calorie needs?',
        a: 'Recalculate after losing or gaining 4 to 5 kilograms because a lighter or heavier body burns a different amount of energy.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Calorie and TDEE projections are informational estimates only and are not medical or therapeutic dietary advice.',
  },

  'health-body-fat': {
    seoTitle: `How to Calculate Body Fat Percentage at Home | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate body fat percentage at home with a simple tape measure using height, neck, and waist measurements.',
    introDescription:
      'Tracking physique changes beyond what the bathroom scale shows is easier once you learn how to calculate body fat percentage at home with a soft tape measure. Select your gender and enter your height alongside relaxed neck and waist circumferences in centimeters. Using the US Navy tape method avoids daily water-weight swings that often skew smart scales and helps track real fat loss.',
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
        q: 'Where should the measuring tape sit for waist and neck measurements?',
        a: 'Measure waist horizontally across the navel after a relaxed exhale, and wrap the neck tape just below the Adam’s apple.',
      },
      {
        q: 'How does the US Navy tape method compare to smart body-fat scales?',
        a: 'Tape measurements stay consistent across hydration changes, whereas smart scale readings often fluctuate with water and meal timing.',
      },
      {
        q: 'Why should you avoid pulling your stomach in while measuring?',
        a: 'Sucking in your abdomen lowers waist girth artificially and makes week-to-week body-fat tracking unreliable.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Circumference-based body fat figures are for fitness tracking information only and do not constitute medical diagnostic advice.',
  },

  'health-due-date': {
    seoTitle: `How to Calculate Pregnancy Due Date from LMP | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate pregnancy due date from LMP using the standard 280-day Naegele’s rule calendar estimate.',
    introDescription:
      'Expectant parents preparing for early prenatal checkups often start by checking how to calculate pregnancy due date from LMP before their first ultrasound appointment. Enter the first day of your last menstrual period in YYYY-MM-DD format to project the standard 40-week (280-day) delivery date. Knowing your estimated calendar timeline early helps families organize trimester milestones while waiting for clinical dating confirmation.',
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
        q: 'How often do babies arrive on the exact calculated due date?',
        a: 'Only about 4% to 5% arrive on the exact day, while most full-term births happen naturally between weeks 38 and 41.',
      },
      {
        q: 'Can longer or irregular cycles change the estimated date?',
        a: 'Yes, longer cycles usually delay ovulation, so an early prenatal ultrasound often adjusts the due date more precisely.',
      },
      {
        q: 'Why does pregnancy count 40 weeks from LMP rather than conception?',
        a: 'The last menstrual period gives a clear observable date, typically about two weeks before ovulation and conception.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Estimated due dates are informational calendar approximations only and never replace prenatal ultrasound dating or obstetric medical advice.',
  },

  'health-hr-zone': {
    seoTitle: `How to Calculate Cardio Heart Rate Zones | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate cardio heart rate zones from your age, showing peak max BPM alongside fat-burn and cardio ranges.',
    introDescription:
      'Structuring treadmill walks, cycling rides, or outdoor runs around safe effort levels starts with knowing how to calculate cardio heart rate zones for your age. Enter your age in years to estimate your peak maximum heart rate along with moderate Fat Burn (60%–70%) and vigorous Cardio (70%–85%) beats-per-minute brackets. Training inside targeted BPM zones keeps aerobic workouts productive without overtraining.',
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
        q: 'Does training in the Cardio Zone still burn body fat?',
        a: 'Yes, higher-intensity cardio burns more total calories per minute while improving cardiovascular stamina and heart health.',
      },
      {
        q: 'Can blood pressure medicine affect target heart rate zones?',
        a: 'Medications such as beta-blockers lower exercise pulse, so ask your doctor about using perceived effort instead of BPM.',
      },
      {
        q: 'When do runners go above 85% of maximum heart rate?',
        a: 'Experienced athletes briefly enter 85% to 95% peak zones during short sprint intervals with rest breaks.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Age-predicted heart rate zones provide general exercise information only and do not constitute cardiology or medical clearance advice.',
  },

  'health-steps-calories': {
    seoTitle: `How Many Calories Burned Walking Steps | ${SITE_NAME}`,
    metaDescription:
      'Check how many calories burned walking steps from your daily step count and body weight in kilograms for easy fitness tracking.',
    introDescription:
      'Turning daily smartwatch or phone pedometer numbers into meaningful fitness feedback gets simple when you check how many calories burned walking steps produce for your exact body size. Enter total steps walked today along with your weight in kilograms to calculate estimated energy burned. Seeing real calorie expenditure across 5,000, 8,000, or 10,000 daily steps rewards consistent everyday walking habits.',
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
        q: 'Do steep hills or running burn more per step than flat walking?',
        a: 'Yes, inclines, brisk stairs, and running strides demand higher muscular effort and burn extra calories per step.',
      },
      {
        q: 'Roughly how far is 10,000 steps in kilometers?',
        a: 'At a typical adult stride length, 10,000 steps cover around 7 to 8 kilometers (roughly 4.5 to 5 miles).',
      },
      {
        q: 'Why does body weight change calories burned for identical step counts?',
        a: 'Carrying greater body mass forward with each stride requires more energy per kilometer walked.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Step calorie outputs are fitness estimates for general information only and should not replace personalized medical or nutrition advice.',
  },

  'health-macros': {
    seoTitle: `How to Calculate Daily Macros for Fitness | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate daily macros for fitness by splitting your calorie budget into exact grams of protein, carbs, and fats.',
    introDescription:
      'Meal prepping for weight loss, endurance sports, or strength training is far easier once you know how to calculate daily macros for fitness around your calorie goal. Enter your target daily calories and select Balanced, Low Carb, or High Protein / Muscle Gain ratios. You immediately get gram targets for protein, carbohydrates, and dietary fats ready for any nutrition tracking app.',
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
        q: 'Which macro split suits muscle building and strength workouts?',
        a: 'The High Protein / Muscle Gain ratio pairs 30% protein with 50% carbohydrates to fuel intense gym sessions and recovery.',
      },
      {
        q: 'Why are daily fat grams smaller than protein and carb grams?',
        a: 'Dietary fat provides 9 calories per gram, more than twice the 4 calories per gram in protein and carbohydrates.',
      },
      {
        q: 'Should dietary fiber be counted inside daily carbohydrate grams?',
        a: 'General macro plans count total label carbohydrates unless you specifically follow net-carb ketogenic tracking.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Macro gram splits are intended for general fitness information only and are not medical nutrition therapy or clinical advice.',
  },

  'health-protein-intake': {
    seoTitle: `How Much Protein per Day by Body Weight | ${SITE_NAME}`,
    metaDescription:
      'Find out how much protein per day by body weight and workout intensity you need in grams to support muscle and recovery.',
    introDescription:
      'Hitting daily nutrition targets without under-eating protein starts with checking how much protein per day by body weight matches your weekly training schedule. Enter your current weight in kilograms and choose between sedentary maintenance, moderate fitness, or heavy strength training multipliers. Seeing your exact daily gram goal makes it simple to divide protein servings evenly across breakfast, lunch, dinner, and snacks.',
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
        q: 'Should people carrying extra body fat base protein on goal weight?',
        a: 'Using healthy target weight instead of current scale weight avoids unrealistically high protein targets when body fat is high.',
      },
      {
        q: 'How can someone reach 120 grams of protein comfortably each day?',
        a: 'Spread 30 to 35 grams across three meals plus a snack using eggs, poultry, fish, lentils, Greek yogurt, or tofu.',
      },
      {
        q: 'Does cooking chicken or beef reduce its protein grams?',
        a: 'Cooking removes water weight so the portion shrinks, yet total protein grams inside that cut stay nearly identical.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Daily protein targets are for informational purposes only and are not medical advice; consult a physician if you have kidney conditions.',
  },

  'health-bmr-calc': {
    seoTitle: `How to Calculate Basal Metabolic Rate BMR | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate basal metabolic rate BMR using the Mifflin-St Jeor formula to measure calories burned at complete rest.',
    introDescription:
      'Understanding your body’s baseline energy requirements begins with knowing how to calculate basal metabolic rate BMR using the Mifflin-St Jeor equation. Enter your gender, body weight in kilograms, height in centimeters, and age in years to find out how many calories your organs burn daily at total rest. Knowing BMR helps dieters avoid overly aggressive calorie cuts that cause fatigue.',
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
        q: 'Is it safe to eat fewer calories than my resting BMR?',
        a: 'Consistently eating below BMR can trigger fatigue, nutrient gaps, and muscle loss unless monitored directly by a doctor.',
      },
      {
        q: 'What is the difference between BMR and TDEE?',
        a: 'BMR covers resting organ function alone, whereas TDEE adds calories burned through walking, work, and workouts.',
      },
      {
        q: 'Why does resting metabolic rate slowly decrease with age?',
        a: 'Metabolic burn dips gradually as hormone levels change and lean muscle mass tends to decline over decades.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Resting metabolic figures are educational calculations only and do not serve as clinical medical advice or hospital nutrition prescriptions.',
  },

  'health-fat-burn-hr': {
    seoTitle: `How to Find Fat Burning Heart Rate Zone | ${SITE_NAME}`,
    metaDescription:
      'Discover how to find fat burning heart rate zone (60%–70% max BPM) from your age for sustainable steady-state cardio workouts.',
    introDescription:
      'Planning longer, joint-friendly walks or cycling workouts is simple once you know how to find fat burning heart rate zone targets tailored to your age. Enter your current age in years to view your 60%–70% moderate aerobic BPM window alongside your estimated maximum pulse. Keeping steady-state cardio inside this comfortable zone builds endurance without exhausting your legs before strength days.',
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
        q: 'What exercises keep you comfortably inside the 60%–70% pulse zone?',
        a: 'Brisk incline walking, light cycling, rowing, and easy jogging typically hold your heart rate right inside this moderate band.',
      },
      {
        q: 'Why is the fat-burning zone easier to sustain for 45 minutes?',
        a: 'Lower cardiovascular strain lets you breathe comfortably and recover quickly, making longer weekly sessions achievable.',
      },
      {
        q: 'Do intense interval workouts still help you lose fat?',
        a: 'Yes, overall fat loss depends on total daily calorie balance, whether workouts burn mostly fat or carbohydrates during exercise.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Aerobic pulse brackets are informational fitness guidelines only and are not medical cardiac advice; check with a doctor before intense exercise.',
  },

  'health-whtr': {
    seoTitle: `How to Calculate Waist to Height Ratio | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate waist to height ratio to screen central abdominal fat risk against the simple 0.50 health benchmark.',
    introDescription:
      'Many health researchers recommend checking midsection proportions alongside scale weight, which starts with knowing how to calculate waist to height ratio accurately at home. Measure your waist at belly-button level and enter your standing height in centimeters to generate your WHtR score immediately. Keeping your waist under half your height (below 0.50) offers a quick visual benchmark across different adult body builds.',
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
        q: 'Why is keeping your waist below half your height widely recommended?',
        a: 'Scores under 0.50 generally reflect lower visceral abdominal fat around internal organs across diverse adult populations.',
      },
      {
        q: 'Can I measure waist and height in inches instead of centimeters?',
        a: 'Yes, as long as both inputs share the exact same unit, the final waist-to-height ratio stays identical.',
      },
      {
        q: 'Can someone have a normal BMI but a high waist-to-height ratio?',
        a: 'Yes, low muscle mass combined with extra midsection weight can raise WHtR even when BMI looks normal.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Waist-to-height scores provide informational health awareness only and cannot substitute for medical cardiovascular screening or physician advice.',
  },

  'health-calorie-deficit': {
    seoTitle: `How to Calculate Calorie Deficit for Fat Loss | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate calorie deficit for fat loss from maintenance TDEE and weekly pace with a built-in 1,200 kcal floor.',
    introDescription:
      'Designing a sustainable weight-loss nutrition plan starts with knowing how to calculate calorie deficit for fat loss without starving your metabolism. Enter your daily maintenance calories (TDEE) and select either a moderate 0.5 kg per week pace or a steeper 1.0 kg per week target. The calculator subtracts the corresponding daily calorie gap while holding a safe 1,200 kcal minimum floor.',
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
        q: 'Why does the target never drop below 1,200 calories per day?',
        a: 'Very-low-calorie diets below 1,200 kcal increase the risk of muscle loss, fatigue, and micronutrient deficiencies without medical supervision.',
      },
      {
        q: 'Is losing 0.5 kg per week easier to stick with than 1.0 kg per week?',
        a: 'Yes, a moderate 550-calorie deficit controls hunger better and preserves workout performance over longer periods.',
      },
      {
        q: 'Where do I get my current maintenance TDEE number?',
        a: 'Use the Calorie Needs Calculator first with your age, height, weight, and activity level, then copy your TDEE here.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Weight-loss calorie deficits are general informational guides only and do not constitute medical weight-management advice.',
  },

  'health-sleep-calc': {
    seoTitle: `How to Calculate Sleep Cycles and Bedtime | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate sleep cycles and bedtime from your morning alarm so you wake up refreshed between 90-minute cycles.',
    introDescription:
      'Waking up groggy even after spending hours in bed often comes from interrupting deep sleep, so knowing how to calculate sleep cycles and bedtime helps you time rest smarter. Enter your morning wake-up alarm in 24-hour format to see recommended lights-out times for 6 cycles (9 hours), 5 cycles (7.5 hours), or 4 cycles (6 hours), including a 15-minute buffer to fall asleep.',
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
        q: 'Why does the planner subtract an extra 15 minutes before sleep cycles begin?',
        a: 'Most adults take roughly 10 to 20 minutes after lying down in a dark room to drift into light sleep.',
      },
      {
        q: 'How many 90-minute sleep cycles should adults aim for?',
        a: 'Five or six complete cycles provide 7.5 to 9 hours of actual sleep, matching standard adult rest guidelines.',
      },
      {
        q: 'Do I need to type the alarm in 24-hour format?',
        a: 'Yes, use 24-hour notation such as 06:30 for morning or 14:00 for afternoon naps so the clock subtracts cleanly.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Sleep-cycle bedtime suggestions offer general lifestyle information only and are not medical advice for insomnia or sleep apnea.',
  },

  'health-caffeine-limit': {
    seoTitle: `How Much Caffeine per Day Is Safe by Weight | ${SITE_NAME}`,
    metaDescription:
      'Check how much caffeine per day is safe by weight in milligrams and equivalent coffee cups under standard 400 mg adult guidelines.',
    introDescription:
      'Balancing morning coffee, afternoon tea, and gym pre-workouts without causing jittery sleep starts with checking how much caffeine per day is safe by weight. Enter your weight in kilograms to calculate your daily milligram ceiling alongside the approximate number of brewed coffee cups, capped strictly at 400 mg for healthy adults. Tracking total milligrams prevents accidental overload from multiple beverages.',
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
        q: 'Why does the safe daily caffeine limit cap at 400 mg for heavier adults?',
        a: 'Health authorities cap general adult intake at 400 mg daily to limit rapid heartbeat, anxiety, and disrupted sleep.',
      },
      {
        q: 'Should pregnant women keep caffeine lower than 400 mg?',
        a: 'Yes, obstetric guidelines generally advise staying under 200 mg of caffeine per day during pregnancy.',
      },
      {
        q: 'Do black tea, green tea, and sodas count toward the daily limit?',
        a: 'Yes, count all caffeinated teas, colas, energy drinks, chocolate, and pre-workout supplements together.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Caffeine estimates provide general public-health information only and are not personal medical advice for arrhythmia, anxiety, or pregnancy.',
  },

  'health-target-weight-timeline': {
    seoTitle: `How Long to Reach Target Weight Loss Goal | ${SITE_NAME}`,
    metaDescription:
      'Estimate how long to reach target weight loss goal in weeks and months based on starting weight, goal weight, and weekly pace.',
    introDescription:
      'Staying motivated during a multi-month transformation gets easier when you know how long to reach target weight loss goal at a steady pace. Enter your current weight, your healthy target weight, and expected weekly loss in kilograms to see your projected timeline in both weeks and months. Setting realistic weekly expectations prevents burnout from crash dieting and keeps progress measurable.',
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
        q: 'What weekly weight-loss pace helps protect lean muscle?',
        a: 'Aiming for 0.5 to 0.75 kg per week keeps energy steady and reduces muscle breakdown compared with extreme deficits.',
      },
      {
        q: 'Why does scale weight bounce up or down day by day?',
        a: 'Salty meals, carbohydrate storage, soreness, and hydration cause temporary water shifts that mask steady fat loss.',
      },
      {
        q: 'Can I use this timeline planner for gradual muscle weight gain?',
        a: 'Yes, enter a goal weight higher than your current weight and input your target weekly gain rate.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Goal-weight timelines are informational projections only and do not serve as clinical medical advice or dietitian treatment.',
  },

  'health-one-rep-max': {
    seoTitle: `How to Calculate One Rep Max 1RM Weight | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate one rep max 1RM weight safely from moderate rep sets using the Epley strength formula.',
    introDescription:
      'Programming barbell squats, bench presses, or deadlifts around percentage training blocks starts with knowing how to calculate one rep max 1RM weight safely without attempting risky maximal singles. Enter the total weight lifted in kilograms and clean repetitions completed on a challenging gym set. Using the Epley formula gives strength athletes a dependable 1RM benchmark for tracking progressive overload across weeks.',
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
        q: 'Which rep range gives the most accurate Epley 1RM estimate?',
        a: 'Sets of 2 to 10 controlled reps predict 1RM closely, while sets above 15 reps reflect endurance more than peak strength.',
      },
      {
        q: 'Should the barbell weight count inside total weight lifted?',
        a: 'Yes, always add the barbell (usually 20 kg) plus every plate loaded on both sides.',
      },
      {
        q: 'How do lifters turn estimated 1RM into working set weights?',
        a: 'Many programs assign 70% to 80% of 1RM for 6–10 hypertrophy reps or 85% to 92% for heavy strength sets.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Strength 1RM estimates provide gym-programming information only and are not medical clearance or sports-injury advice.',
  },

  'health-blood-pressure': {
    seoTitle: `How to Check Blood Pressure Reading Chart | ${SITE_NAME}`,
    metaDescription:
      'See how to check blood pressure reading chart categories from systolic and diastolic mmHg numbers under AHA guidelines.',
    introDescription:
      'Interpreting home arm-cuff measurements accurately gets much clearer once you know how to check blood pressure reading chart thresholds used by major cardiology groups. Enter your upper systolic pressure and lower diastolic pressure in mmHg to display the matching American Heart Association category immediately. Logging calm morning readings across several days gives useful context to share at your next checkup.',
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
        q: 'Why does 120/80 mmHg show Stage 1 instead of Normal?',
        a: 'AHA rules classify Normal strictly below 120 systolic and below 80 diastolic, so reaching 80 diastolic enters Stage 1.',
      },
      {
        q: 'How should I prepare before taking a home cuff reading?',
        a: 'Sit quietly for five minutes with feet flat, back supported, and the cuffed arm resting comfortably at heart height.',
      },
      {
        q: 'Does a single high cuff reading always mean chronic hypertension?',
        a: 'Stress, caffeine, or recent activity can elevate numbers briefly, so track multiple calm readings for a doctor to review.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Blood pressure category lookups are strictly informational and never replace urgent medical evaluation or physician advice.',
  },

  'health-lean-body-mass': {
    seoTitle: `How to Calculate Lean Body Mass from Weight | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate lean body mass from weight and height using the Boer equation to separate fat-free mass from fat.',
    introDescription:
      'Estimating your fat-free tissue without calipers or full-body scans starts with learning how to calculate lean body mass from weight and standing height cleanly. Choose your gender and enter weight in kilograms alongside height in centimeters to compute Lean Mass and estimated Fat Mass via the clinical Boer equation. Tracking lean mass helps athletes plan smarter protein intake and body-recomposition targets.',
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
        q: 'Why does lean body mass include bones and organs besides muscle?',
        a: 'Clinical lean body mass covers everything in the body except stored and essential fat, including bone, skin, organs, and fluids.',
      },
      {
        q: 'Can lifters use lean body mass to set daily protein intake?',
        a: 'Yes, aiming for around 2 grams of protein per kilogram of lean mass works well during fat-loss phases.',
      },
      {
        q: 'How does the Boer method differ from tape-based body fat formulas?',
        a: 'Boer estimates averages purely from height and weight, while tape methods also measure actual waist and neck girths.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Boer LBM outputs offer general body-composition information only and do not constitute clinical medical advice.',
  },

  'health-bac-estimator': {
    seoTitle: `How to Estimate Blood Alcohol Level BAC | ${SITE_NAME}`,
    metaDescription:
      'See how to estimate blood alcohol level BAC from standard drinks consumed, elapsed hours, gender, and body weight.',
    introDescription:
      'Understanding how alcohol absorbs and clears over an evening gets much clearer when you know how to estimate blood alcohol level BAC using the Widmark formula. Select gender, enter body weight in kilograms, add the number of standard drinks consumed, and specify hours elapsed since the first drink. Viewing the estimated percentage highlights clearly why spacing drinks and waiting matters.',
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
        q: 'Why does the Widmark formula use different constants for men and women?',
        a: 'Women generally have a slightly lower proportion of total body water per kilogram, producing higher blood alcohol concentration per drink.',
      },
      {
        q: 'Can coffee or cold showers lower blood alcohol concentration faster?',
        a: 'No, stimulants only mask sleepiness; only time allows the liver to metabolize alcohol out of the bloodstream.',
      },
      {
        q: 'Can judgment and reaction time suffer below 0.08% BAC?',
        a: 'Yes, coordination, focus, and driving reflexes begin declining noticeably even between 0.02% and 0.05% BAC.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Widmark BAC numbers are rough estimates for information only and are not medical advice or a safety clearance to drive.',
  },

  'health-smoking-cost': {
    seoTitle: `How to Calculate Cigarette Cost over Years | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate cigarette cost over years from daily packs and pack price to see total savings from quitting.',
    introDescription:
      'Small daily purchases add up dramatically across decades, making it eye-opening to learn how to calculate cigarette cost over years before buying your next pack. Enter the average packs smoked daily, local price per pack, and total years smoking to calculate cumulative money spent. Seeing the full multi-year financial savings alongside early cardiovascular recovery gives a strong practical boost toward quitting.',
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
        q: 'How do I calculate half a pack per day?',
        a: 'Enter 0.5 in daily packs to measure the cost of smoking roughly 10 cigarettes each day.',
      },
      {
        q: 'How quickly does health start recovering after quitting smoking?',
        a: 'Blood oxygen and heart rate improve within a day, while circulation and breathing capacity recover noticeably within weeks.',
      },
      {
        q: 'Does this estimate include past inflation in cigarette prices?',
        a: 'It calculates directly at current pack pricing, showing what maintaining that habit costs moving forward.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Smoking expense calculations provide awareness information only and do not substitute for medical cessation counseling or healthcare advice.',
  },

  'health-running-pace': {
    seoTitle: `How to Calculate Running Pace Min per Km | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate running pace min per km and average speed in km/h from total distance and workout time.',
    introDescription:
      'Pacing a 5K race, half-marathon, or morning neighborhood jog gets much easier once you know how to calculate running pace min per km from your stopwatch time. Enter distance covered in kilometers and total elapsed minutes to view both your exact min/km split pace and average speed in km/h. Testing target splits beforehand helps prevent starting too fast early in a race.',
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
        q: 'What split pace runs 5 kilometers under 25 minutes?',
        a: 'Finishing 5 km in 25 minutes requires maintaining a steady 5:00 min/km pace, or 12.0 km/h average speed.',
      },
      {
        q: 'Can brisk walkers use this pace calculator too?',
        a: 'Yes, walking 5 km in 50 minutes calculates cleanly to a 10:00 min/km pace (6.0 km/h).',
      },
      {
        q: 'How can I estimate a 10K time from a 5K split?',
        a: 'Double your 5K time and add a slight buffer—typically 1 to 3 minutes—for pacing fatigue over longer distance.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Running pace calculations are for general athletic tracking information only and are not medical fitness clearance advice.',
  },

  'health-karvonen-hr': {
    seoTitle: `How to Calculate Karvonen Target Heart Rate | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate Karvonen target heart rate using resting pulse, age, and workout intensity for tailored cardio zones.',
    introDescription:
      'Runners and cyclists with lower resting pulses often get inaccurate targets from basic age formulas, making it smart to learn how to calculate Karvonen target heart rate. Enter your age, morning resting heart rate in BPM, and desired training intensity percentage. Because Karvonen scales across your usable Heart Rate Reserve, it customizes cardio training BPM specifically to your cardiovascular fitness.',
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
        q: 'When is the best time to measure resting heart rate?',
        a: 'Check your pulse or fitness watch right after waking up while still lying calmly in bed before coffee or moving.',
      },
      {
        q: 'Why does Karvonen give a higher BPM than multiplying Max HR by 70%?',
        a: 'Karvonen applies intensity across your Heart Rate Reserve above resting pulse rather than counting down to zero BPM.',
      },
      {
        q: 'What Karvonen intensity fits easy recovery versus tempo runs?',
        a: 'Recovery sessions usually sit around 55% to 65%, aerobic base at 65% to 75%, and hard tempo runs at 80% to 88%.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Karvonen training zones supply exercise planning information only and are not individualized cardiac or medical advice.',
  },

  'health-bsa': {
    seoTitle: `How to Calculate Body Surface Area BSA | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate body surface area BSA in square meters from weight and height using the Mosteller formula.',
    introDescription:
      'Physiology students and researchers frequently reference external skin surface area alongside body mass, so learning how to calculate body surface area BSA is both practical and straightforward. Enter your body weight in kilograms and standing height in centimeters to compute BSA in square meters using the Mosteller square-root formula. Standard adult BSA generally averages around 1.7 to 1.9 square meters.',
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
        q: 'What is a typical adult Body Surface Area in square meters?',
        a: 'Physiology textbooks commonly reference average adult BSA near 1.7 m² for women and 1.9 m² for men.',
      },
      {
        q: 'Why is the Mosteller BSA formula so widely used?',
        a: 'It yields results almost identical to older multi-step equations while using one clean square-root step.',
      },
      {
        q: 'Does losing or gaining weight change Body Surface Area?',
        a: 'Yes, BSA adjusts smoothly whenever body weight changes even though adult height stays constant.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Body Surface Area results are for informational reference only and are not medical advice; never self-dose medications from BSA.',
  },

  'health-whr': {
    seoTitle: `How to Calculate Waist to Hip Ratio WHR | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate waist to hip ratio WHR from waist and hip measurements to check fat distribution and risk brackets.',
    introDescription:
      'Checking where your body stores extra weight gives helpful context beyond scale readings, making it useful to know how to calculate waist to hip ratio WHR. Wrap a tape measure around your narrowest waist and widest hip circumference in centimeters, then enter both values. Dividing waist by hip identifies whether fat distribution leans central or lower-body against standard risk benchmarks.',
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
        q: 'Where exactly should I place the tape for hip circumference?',
        a: 'Wrap the measuring tape horizontally around the widest part of the hips and buttocks while standing relaxed.',
      },
      {
        q: 'Do WHO waist-to-hip cutoffs vary for men and women?',
        a: 'Yes, WHO flags elevated risk above 0.90 for men and 0.85 for women, while this checker uses a conservative 0.85 threshold.',
      },
      {
        q: 'Can both waist and hip values be entered in inches?',
        a: 'Yes, entering both measurements in inches produces the exact same unitless WHR ratio.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Waist-to-hip ratios provide general wellness information only and are not a medical assessment or clinical diagnostic advice.',
  },

  'health-water-target': {
    seoTitle: `How to Calculate Daily Water Intake Target | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate daily water intake target in liters and milliliters using weight-based ml/kg hydration multipliers.',
    introDescription:
      'Athletes and busy professionals tracking exact fluid goals in milliliters rely on knowing how to calculate daily water intake target by body weight and daily exercise tier. Enter your weight in kilograms and choose Sedentary (35 ml/kg), Moderate Exercise (40 ml/kg), or Heavy Exercise (50 ml/kg). Seeing both exact milliliters and liters helps match hydration closely to gym sweat loss.',
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
        q: 'How many 250 ml glasses equal a 3-liter water target?',
        a: 'Three liters (3,000 ml) equal 12 standard 250 ml glasses spaced evenly between morning and evening.',
      },
      {
        q: 'How can you tell quickly if daily hydration is on track?',
        a: 'Pale straw-colored urine usually signals good hydration, while dark yellow suggests drinking more water.',
      },
      {
        q: 'Can drinking excessive plain water very rapidly be harmful?',
        a: 'Yes, forcing huge volumes in under an hour without electrolytes can dilute blood sodium, so drink steadily.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Weight-based hydration targets are informational wellness guidelines only and do not substitute for physician medical advice.',
  },

  'health-body-fat-mass': {
    seoTitle: `How to Calculate Body Fat and Lean Mass Kg | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate body fat and lean mass kg from total scale weight and body fat percentage to track fitness recomposition.',
    introDescription:
      'Measuring gym progress accurately requires knowing how to calculate body fat and lean mass kg whenever your scale weight shifts. Enter your total body weight in kilograms alongside your measured or estimated body fat percentage. Splitting total weight into exact Fat Mass and Lean Mass kilograms proves whether fat loss diets are stripping unwanted fat while preserving hard-earned muscle tissue.',
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
        q: 'How do I check whether weight loss comes from fat rather than muscle?',
        a: 'Track monthly—if fat mass drops steadily while lean mass stays nearly level, your strength and protein intake are protecting muscle.',
      },
      {
        q: 'Why can two people at the same scale weight look very different?',
        a: 'Higher lean muscle mass occupies less volume per kilogram than body fat, creating a noticeably leaner athletic build.',
      },
      {
        q: 'How can I estimate target weight at a lower body fat percentage?',
        a: 'Divide your current lean mass kilograms by one minus your goal body fat decimal.',
      },
    ],
    medicalDisclaimer:
      'Disclaimer: Fat mass and lean mass breakdowns offer general fitness tracking information only and are not medical diagnostic advice.',
  },
};
