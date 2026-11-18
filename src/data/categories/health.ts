import { Category } from "../../types";

export const healthCategory: Category = {
    id: 'health',
    name: 'Health & Fitness',
    iconName: 'HeartPulse',
    description: 'BMI, water intake, ideal weight, calorie needs, body fat, macros, protein, heart rate zones, sleep, and fitness calculators.',
    color: 'from-rose-600 to-pink-700',
    calculators: [
      {
        id: 'health-bmi-calc',
        name: 'BMI Calculator',
        categoryId: 'health',
        description: 'Calculate Body Mass Index (BMI) using metric (kg/cm) or imperial (lb/in) units.',
        inputs: [
          { id: 'unit', label: 'Unit System', type: 'select', defaultValue: 'metric', options: [
            { label: 'Metric (kg, cm)', value: 'metric' },
            { label: 'Imperial (lb, in)', value: 'imperial' }
          ]},
          { id: 'weight', label: 'Weight (kg or lb)', type: 'number', defaultValue: 70 },
          { id: 'height', label: 'Height (cm or inches)', type: 'number', defaultValue: 175 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          const h = Number(vals.height);
          if (h <= 0) return { result: 'Height must be > 0' };
          let bmi = 0;
          if (vals.unit === 'metric') {
            const hM = h / 100;
            bmi = w / (hM * hM);
          } else {
            bmi = (w / (h * h)) * 703;
          }
          let status = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : bmi < 30 ? 'Overweight' : 'Obese';
          return {
            result: `${bmi.toFixed(1)} (${status})`,
            secondaryResult: `For general information only. Not medical advice. Please consult a doctor.`,
            formula: vals.unit === 'metric' ? 'BMI = kg / (m²)' : 'BMI = (lb / in²) × 703'
          };
        }
      },
      {
        id: 'health-water-calc',
        name: 'Daily Water Intake Calculator',
        categoryId: 'health',
        description: 'Calculate recommended daily water hydration based on weight and activity.',
        inputs: [
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 70 },
          { id: 'activity', label: 'Activity Level', type: 'select', defaultValue: 'moderate', options: [
            { label: 'Light / Sedentary', value: 'light' },
            { label: 'Moderate Exercise', value: 'moderate' },
            { label: 'High / Athlete', value: 'high' }
          ]}
        ],
        calculate: (vals) => {
          const kg = Number(vals.weight);
          let ml = kg * 35;
          if (vals.activity === 'moderate') ml *= 1.15;
          else if (vals.activity === 'high') ml *= 1.3;
          const liters = ml / 1000;
          return {
            result: `${liters.toFixed(2)} Liters (${Math.round(liters * 33.814)} fl oz)`,
            secondaryResult: `For general information only. Not medical advice. Please consult a doctor.`,
            formula: 'Water (L) = (Weight in kg × 35ml) × Activity Factor'
          };
        }
      },
      {
        id: 'health-ideal-weight',
        name: 'Ideal Weight Calculator',
        categoryId: 'health',
        description: 'Calculate ideal body weight range using the Devine formula.',
        inputs: [
          { id: 'gender', label: 'Gender', type: 'select', defaultValue: 'male', options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]},
          { id: 'heightCm', label: 'Height (cm)', type: 'number', defaultValue: 175 }
        ],
        calculate: (vals) => {
          const hCm = Number(vals.heightCm);
          const hInches = hCm / 2.54;
          const inchesOver60 = Math.max(0, hInches - 60);
          let ibwKg = 0;
          if (vals.gender === 'male') {
            ibwKg = 50 + (2.3 * inchesOver60);
          } else {
            ibwKg = 45.5 + (2.3 * inchesOver60);
          }
          return {
            result: `${ibwKg.toFixed(1)} kg (${(ibwKg * 2.20462).toFixed(1)} lbs)`,
            secondaryResult: `Devine Formula Estimate | For general information only. Not medical advice. Please consult a doctor.`,
            formula: 'IBW = 50kg (Male) or 45.5kg (Female) + 2.3kg per inch over 5 feet'
          };
        }
      },
      {
        id: 'health-calorie-needs',
        name: 'Calorie Needs Calculator',
        categoryId: 'health',
        description: 'Calculate Basal Metabolic Rate (BMR) and daily TDEE calorie requirements.',
        inputs: [
          { id: 'gender', label: 'Gender', type: 'select', defaultValue: 'male', options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]},
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 75 },
          { id: 'height', label: 'Height (cm)', type: 'number', defaultValue: 178 },
          { id: 'age', label: 'Age (years)', type: 'number', defaultValue: 30 },
          { id: 'activity', label: 'Activity Multiplier', type: 'select', defaultValue: '1.375', options: [
            { label: 'Sedentary (little or no exercise)', value: '1.2' },
            { label: 'Lightly active (1-3 days/week)', value: '1.375' },
            { label: 'Moderately active (3-5 days/week)', value: '1.55' },
            { label: 'Very active (6-7 hard days/week)', value: '1.725' }
          ]}
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          const h = Number(vals.height);
          const age = Number(vals.age);
          let bmr = (10 * w) + (6.25 * h) - (5 * age);
          bmr += vals.gender === 'male' ? 5 : -161;
          const tdee = bmr * Number(vals.activity);
          return {
            result: `${Math.round(tdee)} kcal / day`,
            secondaryResult: `BMR: ${Math.round(bmr)} kcal | For general information only. Not medical advice. Please consult a doctor.`,
            formula: 'Mifflin-St Jeor Equation: BMR × Activity Level'
          };
        }
      },
      {
        id: 'health-body-fat',
        name: 'Body Fat Percentage Calculator',
        categoryId: 'health',
        description: 'Estimate body fat percentage using US Navy circumference method.',
        inputs: [
          { id: 'gender', label: 'Gender', type: 'select', defaultValue: 'male', options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]},
          { id: 'height', label: 'Height (cm)', type: 'number', defaultValue: 175 },
          { id: 'neck', label: 'Neck Circumference (cm)', type: 'number', defaultValue: 38 },
          { id: 'waist', label: 'Waist Circumference (cm)', type: 'number', defaultValue: 85 }
        ],
        calculate: (vals) => {
          const h = Number(vals.height);
          const n = Number(vals.neck);
          const w = Number(vals.waist);
          let bf = 0;
          if (vals.gender === 'male') {
            bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
          } else {
            bf = 495 / (1.29579 - 0.35004 * Math.log10(w + n - 50) + 0.22100 * Math.log10(h)) - 450;
          }
          return {
            result: `${Math.max(3, Math.min(60, bf)).toFixed(1)}% Body Fat`,
            secondaryResult: `US Navy Estimation Formula | For general information only. Not medical advice. Please consult a doctor.`,
            formula: 'US Navy Body Fat Formula based on circumference measurements'
          };
        }
      },
      {
        id: 'health-due-date',
        name: 'Pregnancy Due Date Calculator',
        categoryId: 'health',
        description: 'Calculate estimated baby due date using Naegele’s rule from Last Menstrual Period (LMP).',
        inputs: [
          { id: 'lmp', label: 'First Day of Last Menstrual Period (YYYY-MM-DD)', type: 'text', defaultValue: '2026-01-15' }
        ],
        calculate: (vals) => {
          const lmpDate = new Date(String(vals.lmp));
          if (isNaN(lmpDate.getTime())) return { result: 'Invalid Date Format (use YYYY-MM-DD)' };
          const dueDate = new Date(lmpDate.getTime() + 280 * 24 * 60 * 60 * 1000);
          return {
            result: dueDate.toDateString(),
            secondaryResult: `Estimated 40 weeks gestation | For general information only. Not medical advice. Please consult a doctor.`,
            formula: 'Due Date = LMP + 280 days (Naegele’s Rule)'
          };
        }
      },
      {
        id: 'health-hr-zone',
        name: 'Heart Rate Zone Calculator',
        categoryId: 'health',
        description: 'Calculate target heart rate training zones based on age.',
        inputs: [
          { id: 'age', label: 'Age (years)', type: 'number', defaultValue: 32 }
        ],
        calculate: (vals) => {
          const age = Number(vals.age);
          const maxHr = 220 - age;
          const fatBurnMin = Math.round(maxHr * 0.6);
          const fatBurnMax = Math.round(maxHr * 0.7);
          const cardioMin = Math.round(maxHr * 0.7);
          const cardioMax = Math.round(maxHr * 0.85);
          return {
            result: `Max HR: ${maxHr} bpm`,
            secondaryResult: `Fat Burn Zone: ${fatBurnMin}-${fatBurnMax} bpm | Cardio Zone: ${cardioMin}-${cardioMax} bpm | For general information only. Not medical advice. Please consult a doctor.`,
            formula: 'Max HR = 220 - Age; Zones calculated by % of Max HR'
          };
        }
      },
      {
        id: 'health-steps-calories',
        name: 'Steps to Calories Calculator',
        categoryId: 'health',
        description: 'Estimate calories burned walking or running based on step count and weight.',
        inputs: [
          { id: 'steps', label: 'Number of Steps', type: 'number', defaultValue: 10000 },
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 70 }
        ],
        calculate: (vals) => {
          const steps = Number(vals.steps);
          const kg = Number(vals.weight);
          const calories = steps * 0.00057 * kg;
          return {
            result: `${Math.round(calories)} kcal burned`,
            secondaryResult: `Estimated for ${steps.toLocaleString()} steps at ${kg} kg | For general information only. Not medical advice. Please consult a doctor.`,
            formula: 'Calories Burned = Steps × Stride & Weight Conversion Factor'
          };
        }
      },
      // 17 New Health & Fitness Calculators Added Below
      {
        id: 'health-macros',
        name: 'Macronutrients (Macros) Calculator',
        categoryId: 'health',
        description: 'Calculate daily protein, carbohydrate, and fat grams for your fitness goal.',
        inputs: [
          { id: 'calories', label: 'Daily Calorie Target (kcal)', type: 'number', defaultValue: 2200 },
          { id: 'goal', label: 'Fitness Goal', type: 'select', defaultValue: 'balanced', options: [
            { label: 'Balanced (40% Carbs, 30% Protein, 30% Fat)', value: 'balanced' },
            { label: 'Low Carb (20% Carbs, 40% Protein, 40% Fat)', value: 'lowcarb' },
            { label: 'High Protein / Muscle Gain (50% Carbs, 30% Protein, 20% Fat)', value: 'highprotein' }
          ]}
        ],
        calculate: (vals) => {
          const c = Number(vals.calories);
          let carbPct = 0.4, protPct = 0.3, fatPct = 0.3;
          if (vals.goal === 'lowcarb') { carbPct = 0.2; protPct = 0.4; fatPct = 0.4; }
          else if (vals.goal === 'highprotein') { carbPct = 0.5; protPct = 0.3; fatPct = 0.2; }

          const carbsG = (c * carbPct) / 4;
          const protG = (c * protPct) / 4;
          const fatG = (c * fatPct) / 9;
          return {
            result: `Protein: ${Math.round(protG)}g | Carbs: ${Math.round(carbsG)}g | Fats: ${Math.round(fatG)}g`,
            secondaryResult: `Based on ${c} kcal daily target | For general information only. Not medical advice.`,
            formula: 'Carbs/Protein = (Calories × Pct) / 4, Fats = (Calories × Pct) / 9'
          };
        }
      },
      {
        id: 'health-protein-intake',
        name: 'Daily Protein Intake Calculator',
        categoryId: 'health',
        description: 'Calculate optimal daily protein intake based on body weight and activity level.',
        inputs: [
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 75 },
          { id: 'activity', label: 'Training Intensity', type: 'select', defaultValue: 'moderate', options: [
            { label: 'Sedentary / Light Activity (1.2g / kg)', value: 'light' },
            { label: 'Moderate Exercise / Fitness (1.6g / kg)', value: 'moderate' },
            { label: 'Heavy Strength Training / Athlete (2.2g / kg)', value: 'heavy' }
          ]}
        ],
        calculate: (vals) => {
          const kg = Number(vals.weight);
          let multiplier = 1.6;
          if (vals.activity === 'light') multiplier = 1.2;
          else if (vals.activity === 'heavy') multiplier = 2.2;
          const proteinG = kg * multiplier;
          return {
            result: `${Math.round(proteinG)} grams / day`,
            secondaryResult: `Multiplier: ${multiplier}g per kg body weight | For general information only.`,
            formula: 'Protein (g) = Weight in kg × Activity Multiplier'
          };
        }
      },
      {
        id: 'health-bmr-calc',
        name: 'BMR (Basal Metabolic Rate) Calculator',
        categoryId: 'health',
        description: 'Calculate baseline calories your body burns at complete rest.',
        inputs: [
          { id: 'gender', label: 'Gender', type: 'select', defaultValue: 'male', options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]},
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 70 },
          { id: 'height', label: 'Height (cm)', type: 'number', defaultValue: 172 },
          { id: 'age', label: 'Age (years)', type: 'number', defaultValue: 28 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          const h = Number(vals.height);
          const age = Number(vals.age);
          let bmr = (10 * w) + (6.25 * h) - (5 * age);
          bmr += vals.gender === 'male' ? 5 : -161;
          return {
            result: `${Math.round(bmr)} kcal / day`,
            secondaryResult: `Mifflin-St Jeor BMR Equation | For general information only.`,
            formula: 'BMR = (10 × weight) + (6.25 × height) - (5 × age) + (5 or -161)'
          };
        }
      },
      {
        id: 'health-fat-burn-hr',
        name: 'Fat Burning Heart Rate Zone Calculator',
        categoryId: 'health',
        description: 'Calculate optimal heart rate range for maximum fat oxidation during cardio.',
        inputs: [
          { id: 'age', label: 'Age (years)', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const age = Number(vals.age);
          const maxHr = 220 - age;
          const minZone = Math.round(maxHr * 0.60);
          const maxZone = Math.round(maxHr * 0.70);
          return {
            result: `${minZone} - ${maxZone} bpm`,
            secondaryResult: `Target fat oxidation zone (60-70% of max HR ${maxHr} bpm) | For general info only.`,
            formula: 'Fat Burn Min/Max = (220 - Age) × 0.60 to 0.70'
          };
        }
      },
      {
        id: 'health-whtr',
        name: 'Waist-to-Height Ratio (WHtR) Calculator',
        categoryId: 'health',
        description: 'Evaluate abdominal obesity and cardiovascular risk using waist-to-height ratio.',
        inputs: [
          { id: 'waist', label: 'Waist Circumference (cm)', type: 'number', defaultValue: 82 },
          { id: 'height', label: 'Height (cm)', type: 'number', defaultValue: 175 }
        ],
        calculate: (vals) => {
          const w = Number(vals.waist);
          const h = Number(vals.height);
          if (h <= 0) return { result: 'Height must be > 0' };
          const whtr = w / h;
          let status = whtr < 0.43 ? 'Underweight / Slim' : whtr < 0.53 ? 'Healthy / Normal' : whtr < 0.58 ? 'Overweight' : 'High Risk';
          return {
            result: `${whtr.toFixed(2)} (${status})`,
            secondaryResult: `Ideal threshold is generally below 0.5 | For general information only.`,
            formula: 'WHtR = Waist Circumference / Height (same units)'
          };
        }
      },
      {
        id: 'health-calorie-deficit',
        name: 'Calorie Deficit for Weight Loss Calculator',
        categoryId: 'health',
        description: 'Calculate required daily calories and timeline to lose weight safely.',
        inputs: [
          { id: 'tdee', label: 'Current Maintenance Calories (TDEE)', type: 'number', defaultValue: 2500 },
          { id: 'weeklyLoss', label: 'Target Weekly Weight Loss', type: 'select', defaultValue: '0.5', options: [
            { label: '0.5 kg per week (Moderate - 550 kcal deficit)', value: '0.5' },
            { label: '1.0 kg per week (Aggressive - 1100 kcal deficit)', value: '1.0' }
          ]}
        ],
        calculate: (vals) => {
          const tdee = Number(vals.tdee);
          const lossKg = Number(vals.weeklyLoss);
          const deficit = lossKg === 0.5 ? 550 : 1100;
          const targetCalories = tdee - deficit;
          return {
            result: `${Math.max(1200, targetCalories)} kcal / day`,
            secondaryResult: `Daily Calorie Deficit: ${deficit} kcal | For general information only.`,
            formula: 'Target Calories = Maintenance TDEE - Daily Deficit'
          };
        }
      },
      {
        id: 'health-sleep-calc',
        name: 'Sleep Duration & Sleep Cycles Calculator',
        categoryId: 'health',
        description: 'Calculate optimal bedtime and wake-up times based on 90-minute sleep cycles.',
        inputs: [
          { id: 'wakeTime', label: 'Target Wake-up Time (HH:MM 24hr)', type: 'text', defaultValue: '06:30' }
        ],
        calculate: (vals) => {
          const [h, m] = String(vals.wakeTime).split(':').map(Number);
          if (isNaN(h) || isNaN(m)) return { result: 'Invalid Time format (HH:MM)' };
          const wakeMins = h * 60 + m;
          // 6 cycles = 9 hours, 5 cycles = 7.5 hours, 4 cycles = 6 hours
          const calcBedtime = (cycles: number) => {
            let mins = wakeMins - (cycles * 90) - 15; // 15 mins to fall asleep
            if (mins < 0) mins += 24 * 60;
            const bh = Math.floor(mins / 60);
            const bm = mins % 60;
            return `${String(bh).padStart(2, '0')}:${String(bm).padStart(2, '0')}`;
          };
          return {
            result: `6 Cycles (9h): ${calcBedtime(6)} | 5 Cycles (7.5h): ${calcBedtime(5)}`,
            secondaryResult: `4 Cycles (6h): ${calcBedtime(4)} | Based on 90-minute sleep cycles.`,
            formula: 'Bedtime = Wake Time - (Cycles × 90 mins) - 15 mins fall asleep time'
          };
        }
      },
      {
        id: 'health-caffeine-limit',
        name: 'Caffeine Intake Safety Limit Calculator',
        categoryId: 'health',
        description: 'Calculate safe daily caffeine consumption limit based on body weight.',
        inputs: [
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 70 }
        ],
        calculate: (vals) => {
          const kg = Number(vals.weight);
          // FDA recommendation: max 5.7 mg per kg of body weight (up to 400mg max for adults)
          const maxMg = Math.min(400, kg * 5.7);
          const cupsOfCoffee = maxMg / 95; // avg cup coffee ~95mg caffeine
          return {
            result: `${Math.round(maxMg)} mg / day`,
            secondaryResult: `Approx. ${cupsOfCoffee.toFixed(1)} standard cups of coffee | FDA Safety Guidelines.`,
            formula: 'Max Caffeine = Weight in kg × 5.7 mg (Max 400 mg)'
          };
        }
      },
      {
        id: 'health-target-weight-timeline',
        name: 'Target Weight Loss Timeline Calculator',
        categoryId: 'health',
        description: 'Estimate weeks and months needed to reach your target goal weight.',
        inputs: [
          { id: 'current', label: 'Current Weight (kg)', type: 'number', defaultValue: 82 },
          { id: 'target', label: 'Target Weight (kg)', type: 'number', defaultValue: 72 },
          { id: 'weeklyRate', label: 'Expected Weekly Loss (kg)', type: 'number', defaultValue: 0.5 }
        ],
        calculate: (vals) => {
          const cur = Number(vals.current);
          const tar = Number(vals.target);
          const rate = Number(vals.weeklyRate);
          if (rate <= 0) return { result: 'Weekly loss rate must be > 0' };
          const diff = Math.abs(cur - tar);
          const weeks = diff / rate;
          const months = weeks / 4.33;
          return {
            result: `${weeks.toFixed(1)} weeks (~${months.toFixed(1)} months)`,
            secondaryResult: `To lose ${diff.toFixed(1)} kg at ${rate} kg/week | For general information only.`,
            formula: 'Timeline Weeks = Weight Difference / Weekly Loss Rate'
          };
        }
      },
      {
        id: 'health-one-rep-max',
        name: 'One Rep Max (1RM) Strength Calculator',
        categoryId: 'health',
        description: 'Estimate your maximum lifting capacity for 1 repetition using Epley formula.',
        inputs: [
          { id: 'weightLifted', label: 'Weight Lifted (kg)', type: 'number', defaultValue: 80 },
          { id: 'reps', label: 'Repetitions Performed', type: 'number', defaultValue: 8 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weightLifted);
          const r = Number(vals.reps);
          if (r <= 0) return { result: 'Reps must be > 0' };
          let oneRM = r === 1 ? w : w * (1 + r / 30); // Epley formula
          return {
            result: `${Math.round(oneRM)} kg Estimated 1RM`,
            secondaryResult: `Epley Formula Calculation | For general information only.`,
            formula: '1RM = Weight × (1 + Reps / 30)'
          };
        }
      },
      {
        id: 'health-blood-pressure',
        name: 'Blood Pressure Category Checker',
        categoryId: 'health',
        description: 'Check blood pressure category based on systolic and diastolic readings.',
        inputs: [
          { id: 'systolic', label: 'Systolic (Upper mmHg)', type: 'number', defaultValue: 120 },
          { id: 'diastolic', label: 'Diastolic (Lower mmHg)', type: 'number', defaultValue: 80 }
        ],
        calculate: (vals) => {
          const sys = Number(vals.systolic);
          const dia = Number(vals.diastolic);
          let category = 'Normal';
          if (sys > 180 || dia > 120) category = 'Hypertensive Crisis (Seek Emergency Care)';
          else if (sys >= 140 || dia >= 90) category = 'High Blood Pressure (Stage 2)';
          else if ((sys >= 130 && sys <= 139) || (dia >= 80 && dia <= 89)) category = 'High Blood Pressure (Stage 1)';
          else if ((sys >= 120 && sys <= 129) && dia < 80) category = 'Elevated';
          return {
            result: category,
            secondaryResult: `Readings: ${sys}/${dia} mmHg | For general information only. Consult a physician.`,
            formula: 'AHA Blood Pressure Classification Guidelines'
          };
        }
      },
      {
        id: 'health-lean-body-mass',
        name: 'Lean Body Mass (LBM) Calculator',
        categoryId: 'health',
        description: 'Calculate lean body mass (weight minus body fat) using Boer formula.',
        inputs: [
          { id: 'gender', label: 'Gender', type: 'select', defaultValue: 'male', options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]},
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 75 },
          { id: 'height', label: 'Height (cm)', type: 'number', defaultValue: 178 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          const h = Number(vals.height);
          let lbm = 0;
          if (vals.gender === 'male') {
            lbm = (0.407 * w) + (0.267 * h) - 19.2;
          } else {
            lbm = (0.252 * w) + (0.473 * h) - 48.3;
          }
          const fatWeight = Math.max(0, w - lbm);
          return {
            result: `${lbm.toFixed(1)} kg Lean Mass`,
            secondaryResult: `Estimated Fat Mass: ${fatWeight.toFixed(1)} kg (Boer Formula) | For general info only.`,
            formula: 'Boer Formula for Lean Body Mass estimation'
          };
        }
      },
      {
        id: 'health-bac-estimator',
        name: 'BAC (Blood Alcohol Concentration) Estimator',
        categoryId: 'health',
        description: 'Estimate blood alcohol concentration based on body weight, drinks consumed, and time.',
        inputs: [
          { id: 'gender', label: 'Gender', type: 'select', defaultValue: 'male', options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]},
          { id: 'weightKg', label: 'Weight (kg)', type: 'number', defaultValue: 75 },
          { id: 'drinks', label: 'Standard Drinks Consumed', type: 'number', defaultValue: 3 },
          { id: 'hours', label: 'Hours Since First Drink', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weightKg) * 2.20462; // to lbs
          const d = Number(vals.drinks);
          const hrs = Number(vals.hours);
          const r = vals.gender === 'male' ? 0.68 : 0.55;
          const bac = ((d * 14) / (Number(vals.weightKg) * 1000 * r)) * 100 - (hrs * 0.015);
          return {
            result: `${Math.max(0, bac).toFixed(3)}% BAC`,
            secondaryResult: `Widmark Formula Estimate | For general educational info only.`,
            formula: 'Widmark Formula: [Alcohol consumed in grams / (Body weight × r)] - (0.015 × hours)'
          };
        }
      },
      {
        id: 'health-smoking-cost',
        name: 'Smoking Cost & Health Impact Calculator',
        categoryId: 'health',
        description: 'Calculate total money spent on cigarettes and time lost over years.',
        inputs: [
          { id: 'packsPerDay', label: 'Packs Smoked per Day', type: 'number', defaultValue: 1 },
          { id: 'packPrice', label: 'Price per Pack (PKR)', type: 'number', defaultValue: 350 },
          { id: 'years', label: 'Years Smoking', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const p = Number(vals.packsPerDay);
          const price = Number(vals.packPrice);
          const yrs = Number(vals.years);
          const totalSpent = p * price * 365 * yrs;
          return {
            result: `PKR ${totalSpent.toLocaleString()} Spent`,
            secondaryResult: `Over ${yrs} years of smoking | For general awareness and health advice.`,
            formula: 'Total Spent = Packs/day × Price/pack × 365 days × Years'
          };
        }
      },
      {
        id: 'health-running-pace',
        name: 'Running Pace & Speed Calculator',
        categoryId: 'health',
        description: 'Calculate running pace (minutes per km or mile) from distance and time.',
        inputs: [
          { id: 'distanceKm', label: 'Distance (Kilometers)', type: 'number', defaultValue: 5 },
          { id: 'timeMins', label: 'Total Time (Minutes)', type: 'number', defaultValue: 28 }
        ],
        calculate: (vals) => {
          const dist = Number(vals.distanceKm);
          const mins = Number(vals.timeMins);
          if (dist <= 0) return { result: 'Distance must be > 0' };
          const paceMinPerKm = mins / dist;
          const speedKmh = (dist / (mins / 60));
          const pMin = Math.floor(paceMinPerKm);
          const pSec = Math.round((paceMinPerKm - pMin) * 60);
          return {
            result: `${pMin}:${String(pSec).padStart(2, '0')} min/km`,
            secondaryResult: `Average Speed: ${speedKmh.toFixed(1)} km/h | For general fitness tracking.`,
            formula: 'Pace = Total Time / Distance (km), Speed = Distance / Time (hours)'
          };
        }
      },
      {
        id: 'health-karvonen-hr',
        name: 'Target Heart Rate (Karvonen Formula)',
        categoryId: 'health',
        description: 'Calculate target training heart rate using resting heart rate and Karvonen method.',
        inputs: [
          { id: 'age', label: 'Age (years)', type: 'number', defaultValue: 30 },
          { id: 'restingHr', label: 'Resting Heart Rate (bpm)', type: 'number', defaultValue: 65 },
          { id: 'intensity', label: 'Target Intensity (%)', type: 'number', defaultValue: 70 }
        ],
        calculate: (vals) => {
          const age = Number(vals.age);
          const rhr = Number(vals.restingHr);
          const intensity = Number(vals.intensity) / 100;
          const maxHr = 220 - age;
          const targetHr = ((maxHr - rhr) * intensity) + rhr;
          return {
            result: `${Math.round(targetHr)} bpm`,
            secondaryResult: `Max HR: ${maxHr} bpm | Resting HR: ${rhr} bpm | Karvonen Method.`,
            formula: 'Target HR = [(Max HR - Resting HR) × Intensity %] + Resting HR'
          };
        }
      },
      {
        id: 'health-bsa',
        name: 'Body Surface Area (BSA) Calculator',
        categoryId: 'health',
        description: 'Calculate Body Surface Area using Mosteller formula for medical dosing and metabolic studies.',
        inputs: [
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 70 },
          { id: 'height', label: 'Height (cm)', type: 'number', defaultValue: 175 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          const h = Number(vals.height);
          // Mosteller formula: BSA = sqrt(Height(cm) * Weight(kg) / 3600)
          const bsa = Math.sqrt((h * w) / 3600);
          return {
            result: `${bsa.toFixed(2)} m²`,
            secondaryResult: `Mosteller Formula Calculation | For clinical reference and medical estimation.`,
            formula: 'BSA = √[(Height in cm × Weight in kg) / 3600]'
          };
        }
      },
      {
        id: 'health-whr',
        name: 'Waist-to-Hip Ratio (WHR) Calculator',
        categoryId: 'health',
        description: 'Calculate waist-to-hip ratio to assess body fat distribution and health risk.',
        inputs: [
          { id: 'waist', label: 'Waist Circumference (cm)', type: 'number', defaultValue: 82 },
          { id: 'hip', label: 'Hip Circumference (cm)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const w = Number(vals.waist);
          const h = Number(vals.hip);
          if (h <= 0) return { result: 'Hip circumference must be > 0' };
          const whr = w / h;
          let risk = whr < 0.85 ? 'Low Risk' : whr < 0.95 ? 'Moderate Risk' : 'High Risk';
          return {
            result: `WHR = ${whr.toFixed(2)} (${risk})`,
            secondaryResult: `Waist: ${w} cm | Hip: ${h} cm`,
            formula: 'WHR = Waist Circumference / Hip Circumference'
          };
        }
      },
      {
        id: 'health-water-target',
        name: 'Daily Water Intake Target Calculator',
        categoryId: 'health',
        description: 'Calculate recommended daily water intake based on body weight and activity level.',
        inputs: [
          { id: 'weight', label: 'Body Weight (kg)', type: 'number', defaultValue: 70 },
          { id: 'activity', label: 'Activity Level', type: 'select', defaultValue: 'moderate', options: [
            { label: 'Sedentary (Low)', value: 'low' },
            { label: 'Moderate Exercise', value: 'moderate' },
            { label: 'Heavy Exercise / Athlete', value: 'heavy' }
          ]}
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          let multiplier = 35; // ml per kg
          if (vals.activity === 'moderate') multiplier = 40;
          else if (vals.activity === 'heavy') multiplier = 50;
          const totalMl = w * multiplier;
          return {
            result: `${(totalMl / 1000).toFixed(2)} Liters (${Math.round(totalMl)} ml) / day`,
            secondaryResult: `Recommended hydration target based on weight and activity`,
            formula: 'Water (ml) = Body Weight (kg) × Activity Multiplier'
          };
        }
      },
      {
        id: 'health-body-fat-mass',
        name: 'Body Fat Mass & Lean Body Mass Calculator',
        categoryId: 'health',
        description: 'Calculate total fat mass and lean body mass from body weight and body fat percentage.',
        inputs: [
          { id: 'weight', label: 'Total Weight (kg)', type: 'number', defaultValue: 75 },
          { id: 'bfp', label: 'Body Fat Percentage (%)', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          const bfp = Number(vals.bfp) / 100;
          const fatMass = w * bfp;
          const leanMass = w - fatMass;
          return {
            result: `Fat Mass: ${fatMass.toFixed(1)} kg | Lean Mass: ${leanMass.toFixed(1)} kg`,
            secondaryResult: `Body composition breakdown`,
            formula: 'Fat Mass = Weight × (BFP / 100); Lean Mass = Weight - Fat Mass'
          };
        }
      }
    ]
  };
