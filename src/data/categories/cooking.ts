import type { Category } from "../../types.ts";

export const cookingCategory: Category = {
    id: 'cooking',
    name: 'Cooking & Food',
    iconName: 'Utensils',
    description: 'Recipe scaling, unit conversions, oven temperatures, cooking times, party quantities, and baking ratios.',
    color: 'from-amber-500 to-red-600',
    calculators: [
      {
        id: 'recipe-scaler',
        name: 'Recipe Scaler',
        categoryId: 'cooking',
        description: 'Scale ingredients up or down for target servings.',
        inputs: [
          { id: 'orig', label: 'Original Servings', type: 'number', defaultValue: 4 },
          { id: 'target', label: 'Target Servings', type: 'number', defaultValue: 12 },
          { id: 'qty', label: 'Ingredient Quantity', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const orig = Number(vals.orig);
          const target = Number(vals.target);
          const qty = Number(vals.qty);
          if (orig <= 0) return { result: 'Original servings must be > 0' };
          const scaled = (qty / orig) * target;
          return {
            result: `${scaled.toFixed(2)} units`,
            secondaryResult: `Scaled from ${orig} to ${target} servings`,
            formula: 'Scaled Qty = (Ingredient Qty / Original Servings) × Target Servings'
          };
        }
      },
      {
        id: 'cooking-measurement-conv',
        name: 'Cooking Measurement Converter',
        categoryId: 'cooking',
        description: 'Convert between cups, tablespoons, teaspoons, milliliters, and grams.',
        inputs: [
          { id: 'val', label: 'Amount Value', type: 'number', defaultValue: 1 },
          { id: 'unit', label: 'From Unit', type: 'select', defaultValue: 'cups', options: [
            { label: 'Cups', value: 'cups' },
            { label: 'Tablespoons (tbsp)', value: 'tbsp' },
            { label: 'Teaspoons (tsp)', value: 'tsp' },
            { label: 'Milliliters (ml)', value: 'ml' },
            { label: 'Fluid Ounces (fl oz)', value: 'floz' }
          ]}
        ],
        calculate: (vals) => {
          const v = Number(vals.val);
          let ml = 0;
          switch (vals.unit) {
            case 'cups': ml = v * 240; break;
            case 'tbsp': ml = v * 15; break;
            case 'tsp': ml = v * 5; break;
            case 'ml': ml = v; break;
            case 'floz': ml = v * 29.5735; break;
          }
          const cups = ml / 240;
          const tbsp = ml / 15;
          const tsp = ml / 5;
          const floz = ml / 29.5735;
          return {
            result: `${ml.toFixed(1)} ml (${cups.toFixed(2)} cups)`,
            secondaryResult: `${tbsp.toFixed(1)} tbsp | ${tsp.toFixed(1)} tsp | ${floz.toFixed(2)} fl oz`,
            formula: 'Standard culinary volume conversion ratios'
          };
        }
      },
      {
        id: 'oven-temp-conv',
        name: 'Oven Temperature Converter',
        categoryId: 'cooking',
        description: 'Convert temperatures between Celsius, Fahrenheit, and Gas Mark.',
        inputs: [
          { id: 'temp', label: 'Temperature Value', type: 'number', defaultValue: 350 },
          { id: 'system', label: 'From Unit', type: 'select', defaultValue: 'F', options: [
            { label: 'Fahrenheit (°F)', value: 'F' },
            { label: 'Celsius (°C)', value: 'C' },
            { label: 'Gas Mark', value: 'Gas' }
          ]}
        ],
        calculate: (vals) => {
          const t = Number(vals.temp);
          let f = 350, c = 175, gas = 4;
          if (vals.system === 'F') {
            f = t;
            c = (f - 32) * (5 / 9);
          } else if (vals.system === 'C') {
            c = t;
            f = (c * 9 / 5) + 32;
          } else if (vals.system === 'Gas') {
            gas = t;
            f = 275 + (gas - 1) * 25;
            c = (f - 32) * (5 / 9);
          }
          return {
            result: `${f.toFixed(0)} °F / ${c.toFixed(1)} °C`,
            secondaryResult: `Approximate Gas Mark: ~${Math.max(1, Math.round((f - 275) / 25 + 1))}`,
            formula: 'Fahrenheit = (Celsius × 9/5) + 32'
          };
        }
      },
      {
        id: 'meat-cooking-time',
        name: 'Meat Cooking Time Calculator',
        categoryId: 'cooking',
        description: 'Calculate roasting and cooking time by meat type and weight.',
        inputs: [
          { id: 'meat', label: 'Meat Type', type: 'select', defaultValue: 'chicken', options: [
            { label: 'Whole Chicken / Turkey', value: 'chicken' },
            { label: 'Beef Roast', value: 'beef' },
            { label: 'Lamb Leg / Roast', value: 'lamb' },
            { label: 'Pork Roast', value: 'pork' }
          ]},
          { id: 'weight', label: 'Weight (kg)', type: 'number', defaultValue: 2.0 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weight);
          let minsPerKg = 40;
          let baseMins = 20;
          if (vals.meat === 'beef') { minsPerKg = 45; baseMins = 25; }
          else if (vals.meat === 'lamb') { minsPerKg = 50; baseMins = 20; }
          else if (vals.meat === 'pork') { minsPerKg = 55; baseMins = 30; }

          const totalMins = (w * minsPerKg) + baseMins;
          const hrs = Math.floor(totalMins / 60);
          const mins = Math.round(totalMins % 60);
          return {
            result: hrs > 0 ? `${hrs} hrs ${mins} mins` : `${mins} mins`,
            secondaryResult: `Based on ${minsPerKg} mins per kg + ${baseMins} mins base cooking time`,
            formula: 'Cooking Time = (Weight × Mins per kg) + Base Time'
          };
        }
      },
      {
        id: 'rice-water-ratio',
        name: 'Rice and Water Ratio Calculator',
        categoryId: 'cooking',
        description: 'Calculate exact water volume and cooking time for different rice varieties.',
        inputs: [
          { id: 'rice', label: 'Rice Type', type: 'select', defaultValue: 'basmati', options: [
            { label: 'Basmati Rice (1 : 1.5 ratio)', value: 'basmati' },
            { label: 'White Rice / Jasmine (1 : 2 ratio)', value: 'white' },
            { label: 'Brown Rice (1 : 2.25 ratio)', value: 'brown' },
            { label: 'Sella / Parboiled Rice (1 : 2 ratio)', value: 'sella' }
          ]},
          { id: 'cups', label: 'Rice Quantity (Cups)', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const cups = Number(vals.cups);
          let ratio = 1.5;
          let timeMins = 15;
          if (vals.rice === 'white') { ratio = 2.0; timeMins = 18; }
          else if (vals.rice === 'brown') { ratio = 2.25; timeMins = 40; }
          else if (vals.rice === 'sella') { ratio = 2.0; timeMins = 25; }

          const waterCups = cups * ratio;
          return {
            result: `${waterCups.toFixed(2)} Cups of Water`,
            secondaryResult: `Estimated Cooking Time: ~${timeMins} minutes | Ratio: 1 : ${ratio}`,
            formula: 'Water Cups = Rice Cups × Variety Ratio'
          };
        }
      },
      {
        id: 'food-cost-serving',
        name: 'Food Cost per Serving Calculator',
        categoryId: 'cooking',
        description: 'Calculate cost per serving for recipes in PKR.',
        inputs: [
          { id: 'cost', label: 'Total Ingredients Cost (PKR)', type: 'number', defaultValue: 1800 },
          { id: 'servings', label: 'Number of Servings', type: 'number', defaultValue: 6 }
        ],
        calculate: (vals) => {
          const c = Number(vals.cost);
          const s = Math.max(1, Number(vals.servings));
          const perServing = c / s;
          return {
            result: `PKR ${perServing.toFixed(2)} / serving`,
            secondaryResult: `Total Cost: PKR ${c.toLocaleString()} for ${s} servings`,
            formula: 'Cost per Serving = Total Ingredients Cost / Number of Servings'
          };
        }
      },
      {
        id: 'party-food-qty',
        name: 'Party Food Quantity Calculator',
        categoryId: 'cooking',
        description: 'Estimate food quantities (rice, meat, appetizers, drinks) for gatherings.',
        inputs: [
          { id: 'guests', label: 'Number of Guests', type: 'number', defaultValue: 30 },
          { id: 'event', label: 'Event Type', type: 'select', defaultValue: 'dinner', options: [
            { label: 'Full Dinner Buffet (Biryani/Karahi)', value: 'dinner' },
            { label: 'High Tea / Snacks', value: 'snacks' },
            { label: 'BBQ Party', value: 'bbq' }
          ]}
        ],
        calculate: (vals) => {
          const g = Number(vals.guests);
          let riceKg = g * 0.15;
          let meatKg = g * 0.25;
          let drinksLiters = g * 0.4;
          if (vals.event === 'snacks') {
            riceKg = 0;
            meatKg = g * 0.15;
            drinksLiters = g * 0.5;
          } else if (vals.event === 'bbq') {
            riceKg = 0;
            meatKg = g * 0.35;
            drinksLiters = g * 0.5;
          }
          return {
            result: `Meat: ~${meatKg.toFixed(1)} kg | Rice: ~${riceKg.toFixed(1)} kg`,
            secondaryResult: `Beverages: ~${drinksLiters.toFixed(1)} Liters for ${g} guests`,
            formula: 'Estimated quantities per guest based on event type'
          };
        }
      },
      {
        id: 'tea-coffee-cups',
        name: 'Tea and Coffee Cups Calculator',
        categoryId: 'cooking',
        description: 'Calculate ingredients (water, milk, tea/coffee, sugar) for group tea or coffee.',
        inputs: [
          { id: 'people', label: 'Number of People', type: 'number', defaultValue: 10 },
          { id: 'beverage', label: 'Beverage Type', type: 'select', defaultValue: 'chai', options: [
            { label: 'Pakistani Milk Tea (Chai)', value: 'chai' },
            { label: 'Black Tea', value: 'black' },
            { label: 'Coffee (Milk)', value: 'coffee' }
          ]}
        ],
        calculate: (vals) => {
          const p = Number(vals.people);
          let milkMl = p * 120;
          let waterMl = p * 120;
          let spoons = p * 1.5;
          if (vals.beverage === 'black') {
            milkMl = 0;
            waterMl = p * 220;
          } else if (vals.beverage === 'coffee') {
            milkMl = p * 180;
            waterMl = p * 50;
          }
          return {
            result: `Water: ${waterMl} ml | Milk: ${milkMl} ml`,
            secondaryResult: `Sugar/Tea/Coffee Powder: ~${spoons.toFixed(0)} tablespoons for ${p} cups`,
            formula: 'Calculated per cup proportions for group serving'
          };
        }
      },
      {
        id: 'baking-pan-conv',
        name: 'Baking Pan Size Converter',
        categoryId: 'cooking',
        description: 'Scale recipe batter and baking adjustments when changing pan sizes.',
        inputs: [
          { id: 'origSize', label: 'Original Pan Area (sq in)', type: 'number', defaultValue: 50 },
          { id: 'targetSize', label: 'Target Pan Area (sq in)', type: 'number', defaultValue: 78 },
          { id: 'batter', label: 'Original Batter (Cups)', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const o = Number(vals.origSize);
          const t = Number(vals.targetSize);
          const b = Number(vals.batter);
          if (o <= 0) return { result: 'Original pan size must be > 0' };
          const ratio = t / o;
          const newBatter = b * ratio;
          return {
            result: `${newBatter.toFixed(2)} Cups Batter Needed`,
            secondaryResult: `Pan Scale Factor: ${ratio.toFixed(2)}x`,
            formula: 'Target Batter = Original Batter × (Target Pan Area / Original Pan Area)'
          };
        }
      },
      // 16 New Calculators to reach 25
      {
        id: 'baking-powder-yeast',
        name: 'Baking Powder to Yeast Converter',
        categoryId: 'cooking',
        description: 'Convert between baking powder and active dry yeast quantities.',
        inputs: [
          { id: 'powder', label: 'Baking Powder (Teaspoons)', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const p = Number(vals.powder);
          const yeast = p * 0.75;
          return {
            result: `${yeast.toFixed(2)} tsp Active Dry Yeast`,
            secondaryResult: `Equivalent rising agent substitution`,
            formula: 'Yeast = Baking Powder × 0.75'
          };
        }
      },
      {
        id: 'sugar-honey-sub',
        name: 'Sugar to Honey Converter',
        categoryId: 'cooking',
        description: 'Convert granulated white sugar quantities to liquid honey.',
        inputs: [
          { id: 'sugar', label: 'Sugar Amount (Cups)', type: 'number', defaultValue: 1 }
        ],
        calculate: (vals) => {
          const s = Number(vals.sugar);
          const honey = s * 0.75;
          return {
            result: `${honey.toFixed(2)} Cups Honey`,
            secondaryResult: `Reduce oven temperature by 15°F when baking with honey`,
            formula: 'Honey = Sugar Cups × 0.75 (Reduce liquid by 1/4 cup per cup)'
          };
        }
      },
      {
        id: 'pasta-portion-calc',
        name: 'Pasta & Spaghetti Portion Calculator',
        categoryId: 'cooking',
        description: 'Calculate dry pasta grams and boiling water volume for any number of people.',
        inputs: [
          { id: 'people', label: 'Number of People', type: 'number', defaultValue: 4 },
          { id: 'type', label: 'Pasta Dish Type', type: 'select', defaultValue: 'main', options: [
            { label: 'Main Course (85g - 100g / person)', value: 'main' },
            { label: 'Side Dish (50g / person)', value: 'side' }
          ]}
        ],
        calculate: (vals) => {
          const p = Number(vals.people);
          const gPerPerson = vals.type === 'main' ? 95 : 50;
          const totalGrams = p * gPerPerson;
          const waterLiters = (totalGrams / 1000) * 10; // 1L water per 100g pasta
          return {
            result: `${totalGrams} grams Dry Pasta`,
            secondaryResult: `Boiling Water Required: ~${waterLiters.toFixed(1)} Liters with 1 tbsp salt`,
            formula: 'Total Pasta = People × Grams per Person'
          };
        }
      },
      {
        id: 'pizza-dough-calc',
        name: 'Pizza Dough Hydration Calculator',
        categoryId: 'cooking',
        description: 'Calculate flour, water, salt, and yeast proportions for artisan pizza dough.',
        inputs: [
          { id: 'flour', label: 'Flour Weight (grams)', type: 'number', defaultValue: 500 },
          { id: 'hydration', label: 'Hydration Target (%)', type: 'number', defaultValue: 60 }
        ],
        calculate: (vals) => {
          const f = Number(vals.flour);
          const hyd = Number(vals.hydration);
          const water = f * (hyd / 100);
          const salt = f * 0.025; // 2.5% salt
          const yeast = f * 0.005; // 0.5% yeast
          return {
            result: `Water: ${water.toFixed(1)}g | Salt: ${salt.toFixed(1)}g`,
            secondaryResult: `Yeast: ${yeast.toFixed(1)}g | Total Dough: ${(f + water + salt + yeast).toFixed(0)}g`,
            formula: 'Water = Flour × (Hydration % / 100); Salt = Flour × 2.5%'
          };
        }
      },
      {
        id: 'coffee-brew-ratio',
        name: 'Coffee Brew Ratio Calculator',
        categoryId: 'cooking',
        description: 'Calculate exact coffee grounds and water for French Press, Pour Over, or Drip.',
        inputs: [
          { id: 'waterMl', label: 'Water Volume (ml)', type: 'number', defaultValue: 500 },
          { id: 'ratio', label: 'Brew Ratio (1 : X)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const w = Number(vals.waterMl);
          const r = Number(vals.ratio);
          if (r <= 0) return { result: 'Ratio must be > 0' };
          const coffeeGrams = w / r;
          return {
            result: `${coffeeGrams.toFixed(1)} grams Coffee Grounds`,
            secondaryResult: `Brew Ratio: 1 gram coffee to ${r} grams water`,
            formula: 'Coffee (g) = Water (ml) / Brew Ratio'
          };
        }
      },
      {
        id: 'spice-blend-ratio',
        name: 'Spice Blend Ratio Calculator',
        categoryId: 'cooking',
        description: 'Scale individual spice proportions for homemade Biryani or Curry masalas.',
        inputs: [
          { id: 'batch', label: 'Total Batch Weight (grams)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const b = Number(vals.batch);
          const cumin = b * 0.30;
          const coriander = b * 0.30;
          const chili = b * 0.20;
          const turmeric = b * 0.10;
          const others = b * 0.10;
          return {
            result: `Cumin: ${cumin.toFixed(1)}g | Coriander: ${coriander.toFixed(1)}g`,
            secondaryResult: `Chili: ${chili.toFixed(1)}g | Turmeric: ${turmeric.toFixed(1)}g | Garam Masala: ${others.toFixed(1)}g`,
            formula: 'Proportional distribution of spice mix components'
          };
        }
      },
      {
        id: 'deep-fry-oil-calc',
        name: 'Deep Fry Oil Amount Calculator',
        categoryId: 'cooking',
        description: 'Estimate required cooking oil volume based on pot dimensions.',
        inputs: [
          { id: 'diam', label: 'Pot Diameter (cm)', type: 'number', defaultValue: 24 },
          { id: 'depth', label: 'Desired Oil Depth (cm)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const d = Number(vals.diam);
          const h = Number(vals.depth);
          const radius = d / 2;
          const volumeCm3 = Math.PI * radius * radius * h;
          const liters = volumeCm3 / 1000;
          return {
            result: `${liters.toFixed(2)} Liters of Oil`,
            secondaryResult: `Cylindrical pot oil volume calculation`,
            formula: 'Volume = π × r² × depth'
          };
        }
      },
      {
        id: 'slow-cooker-conv',
        name: 'Oven to Slow Cooker Time Converter',
        categoryId: 'cooking',
        description: 'Convert conventional oven baking or roasting times to slow cooker hours.',
        inputs: [
          { id: 'ovenHrs', label: 'Conventional Oven Time (Hours)', type: 'number', defaultValue: 2 },
          { id: 'setting', label: 'Slow Cooker Setting', type: 'select', defaultValue: 'low', options: [
            { label: 'Low Setting (Multiply by 2)', value: 'low' },
            { label: 'High Setting (Multiply by 1.5)', value: 'high' }
          ]}
        ],
        calculate: (vals) => {
          const oh = Number(vals.ovenHrs);
          const mult = vals.setting === 'low' ? 2.0 : 1.5;
          const scHrs = oh * mult;
          return {
            result: `~${scHrs.toFixed(1)} Hours in Slow Cooker`,
            secondaryResult: `Converted using standard slow cooking conversion factor (${mult}x)`,
            formula: 'Slow Cooker Time = Oven Time × Multiplier'
          };
        }
      },
      {
        id: 'egg-substitute-calc',
        name: 'Baking Egg Substitute Calculator',
        categoryId: 'cooking',
        description: 'Calculate applesauce, yogurt, or flaxseed quantities to replace eggs in baking.',
        inputs: [
          { id: 'eggs', label: 'Number of Eggs to Replace', type: 'number', defaultValue: 2 },
          { id: 'sub', label: 'Substitute Type', type: 'select', defaultValue: 'applesauce', options: [
            { label: 'Applesauce (1/4 cup per egg)', value: 'applesauce' },
            { label: 'Yogurt (1/4 cup per egg)', value: 'yogurt' },
            { label: 'Mashed Banana (1/4 cup per egg)', value: 'banana' }
          ]}
        ],
        calculate: (vals) => {
          const e = Number(vals.eggs);
          const cups = e * 0.25;
          const tbsp = e * 4;
          return {
            result: `${cups.toFixed(2)} Cups (${tbsp} tbsp) substitute`,
            secondaryResult: `Suitable for moist cakes, muffins, and quick breads`,
            formula: 'Substitute = Eggs Count × 0.25 Cups'
          };
        }
      },
      {
        id: 'fruit-jam-sugar',
        name: 'Fruit Jam Sugar Ratio Calculator',
        categoryId: 'cooking',
        description: 'Calculate required sugar and lemon juice for homemade fruit jam preservation.',
        inputs: [
          { id: 'fruit', label: 'Fruit Weight (kg)', type: 'number', defaultValue: 1.5 }
        ],
        calculate: (vals) => {
          const f = Number(vals.fruit);
          const sugar = f * 0.8; // 80% sugar standard jam
          const lemonMl = f * 30; // 30ml lemon juice per kg
          return {
            result: `${sugar.toFixed(2)} kg Sugar | ${lemonMl.toFixed(0)} ml Lemon Juice`,
            secondaryResult: `Estimated Jam Yield: ~${(f + sugar * 0.7).toFixed(2)} kg jar content`,
            formula: 'Sugar = Fruit Weight × 0.8; Lemon = Fruit Weight × 30ml'
          };
        }
      },
      {
        id: 'marinade-time-calc',
        name: 'Meat Marinade Time Calculator',
        categoryId: 'cooking',
        description: 'Determine refrigerator marinating time guidelines by meat cut.',
        inputs: [
          { id: 'cut', label: 'Meat Cut', type: 'select', defaultValue: 'chicken', options: [
            { label: 'Chicken Breasts / Wings (2 - 4 hours)', value: 'chicken' },
            { label: 'Beef Steak / Chops (4 - 12 hours)', value: 'steak' },
            { label: 'Whole Tough Roast / Brisket (12 - 24 hours)', value: 'roast' },
            { label: 'Fish & Seafood (30 mins - 1 hour)', value: 'fish' }
          ]}
        ],
        calculate: (vals) => {
          let range = '2 to 4 Hours';
          let note = 'Keep refrigerated at all times below 4°C';
          if (vals.cut === 'steak') { range = '4 to 12 Hours'; }
          else if (vals.cut === 'roast') { range = '12 to 24 Hours'; }
          else if (vals.cut === 'fish') { range = '30 Minutes to 1 Hour'; note = 'Do not over-acidify fish'; }
          return {
            result: range,
            secondaryResult: note,
            formula: 'Recommended food safety and flavor absorption duration'
          };
        }
      },
      {
        id: 'dough-rising-time',
        name: 'Bread Yeast Rising Time Calculator',
        categoryId: 'cooking',
        description: 'Estimate dough proofing duration based on ambient room temperature.',
        inputs: [
          { id: 'tempC', label: 'Room Temperature (°C)', type: 'number', defaultValue: 24 }
        ],
        calculate: (vals) => {
          const tc = Number(vals.tempC);
          if (tc <= 10) return { result: 'Too cold for standard yeast activity (< 10°C)' };
          // Base 2 hours at 22C, inversely proportional approx
          const hours = 2.5 * Math.pow(22 / Math.max(10, tc), 1.2);
          return {
            result: `~${hours.toFixed(1)} Hours Proofing Time`,
            secondaryResult: `Higher temperature shortens rising time; cooler lengthens it.`,
            formula: 'Estimated exponential proofing curve relative to 22°C baseline'
          };
        }
      },
      {
        id: 'chocolate-melting',
        name: 'Double Boiler Chocolate Quantities',
        categoryId: 'cooking',
        description: 'Calculate chocolate and butter/cream quantities for ganache and melting.',
        inputs: [
          { id: 'choco', label: 'Chocolate Weight (grams)', type: 'number', defaultValue: 200 },
          { id: 'type', label: 'Recipe Goal', type: 'select', defaultValue: 'ganache', options: [
            { label: 'Chocolate Ganache (Equal heavy cream)', value: 'ganache' },
            { label: 'Chocolate Glaze (with butter & oil)', value: 'glaze' }
          ]}
        ],
        calculate: (vals) => {
          const c = Number(vals.choco);
          const cream = vals.type === 'ganache' ? c : c * 0.3;
          return {
            result: `${cream.toFixed(0)} grams ${vals.type === 'ganache' ? 'Heavy Cream' : 'Butter'}`,
            secondaryResult: `Melt gently over simmering water bath (double boiler).`,
            formula: vals.type === 'ganache' ? 'Cream = Chocolate Weight × 1.0' : 'Butter = Chocolate Weight × 0.3'
          };
        }
      },
      {
        id: 'ice-cream-base',
        name: 'Ice Cream Base Proportions',
        categoryId: 'cooking',
        description: 'Calculate dairy proportions (heavy cream vs whole milk) for homemade ice cream.',
        inputs: [
          { id: 'totalMl', label: 'Total Base Volume (ml)', type: 'number', defaultValue: 1000 }
        ],
        calculate: (vals) => {
          const tot = Number(vals.totalMl);
          const cream = tot * 0.6; // 60% heavy cream
          const milk = tot * 0.4; // 40% whole milk
          return {
            result: `Heavy Cream: ${cream.toFixed(0)} ml | Whole Milk: ${milk.toFixed(0)} ml`,
            secondaryResult: `Standard rich custard base proportion`,
            formula: 'Cream = 60%, Milk = 40% of total volume'
          };
        }
      },
      {
        id: 'salad-dressing-ratio',
        name: 'Vinaigrette Oil to Vinegar Ratio',
        categoryId: 'cooking',
        description: 'Calculate classic salad dressing oil and acid proportions.',
        inputs: [
          { id: 'oil', label: 'Olive Oil Volume (ml)', type: 'number', defaultValue: 90 },
          { id: 'ratio', label: 'Oil to Vinegar Ratio (e.g. 3)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const o = Number(vals.oil);
          const r = Number(vals.ratio);
          if (r <= 0) return { result: 'Ratio must be > 0' };
          const vinegar = o / r;
          return {
            result: `${vinegar.toFixed(1)} ml Vinegar / Lemon Juice`,
            secondaryResult: `Total Dressing Volume: ${(o + vinegar).toFixed(1)} ml`,
            formula: 'Vinegar = Oil Volume / Ratio'
          };
        }
      },
      {
        id: 'potluck-organizer',
        name: 'Potluck Dish Count Calculator',
        categoryId: 'cooking',
        description: 'Estimate number of main dishes, sides, and desserts needed for group gatherings.',
        inputs: [
          { id: 'attendees', label: 'Number of Attendees', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const a = Number(vals.attendees);
          const mains = Math.max(2, Math.ceil(a / 8));
          const sides = Math.max(3, Math.ceil(a / 6));
          const desserts = Math.max(2, Math.ceil(a / 10));
          return {
            result: `Mains: ${mains} dishes | Sides: ${sides} dishes`,
            secondaryResult: `Desserts: ${desserts} varieties for ${a} attendees`,
            formula: 'Calculated dish variety distribution for potlucks'
          };
        }
      },
      {
        id: 'cook-sourdough',
        name: 'Yeast to Sourdough Starter Converter',
        categoryId: 'cooking',
        description: 'Convert commercial active dry yeast recipe to natural sourdough starter.',
        inputs: [
          { id: 'yeastGrams', label: 'Active Dry Yeast (Grams)', type: 'number', defaultValue: 7 }
        ],
        calculate: (vals) => {
          const y = Number(vals.yeastGrams);
          // 7g yeast approx equal to 100g sourdough starter (50g flour, 50g water)
          const starterGrams = y * 14.2;
          return {
            result: `${Math.round(starterGrams)} grams Sourdough Starter`,
            secondaryResult: `(Reduce recipe flour by ${Math.round(starterGrams/2)}g and water by ${Math.round(starterGrams/2)}g)`,
            formula: 'Starter Grams = Yeast Grams × 14.2'
          };
        }
      },
      {
        id: 'cook-pan-volume',
        name: 'Cake Pan Volume & Batter Calculator',
        categoryId: 'cooking',
        description: 'Calculate volume capacity of round vs square baking pans.',
        inputs: [
          { id: 'dim', label: 'Pan Diameter or Side (Inches)', type: 'number', defaultValue: 9 },
          { id: 'depth', label: 'Pan Depth (Inches)', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const d = Number(vals.dim);
          const h = Number(vals.depth);
          const radius = d / 2;
          const volumeCuIn = Math.PI * radius * radius * h;
          const cups = volumeCuIn / 14.438; // 1 cup approx 14.43 cubic inches
          return {
            result: `~${cups.toFixed(1)} Cups Volume Capacity`,
            secondaryResult: `Cylindrical pan capacity calculation`,
            formula: 'Volume = π × r² × depth'
          };
        }
      },
      {
        id: 'cook-cocktail-dilution',
        name: 'Cocktail Ice Dilution Calculator',
        categoryId: 'cooking',
        description: 'Calculate drink volume and ice melt water dilution percentage in stirred or shaken cocktails.',
        inputs: [
          { id: 'spiritMl', label: 'Initial Spirit Volume (ml)', type: 'number', defaultValue: 60 },
          { id: 'shakeTime', label: 'Shaking / Stirring Duration (Seconds)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const s = Number(vals.spiritMl);
          const t = Number(vals.shakeTime);
          // Approx 0.15 ml water melt per second of agitation
          const meltMl = t * 0.18;
          const totalVol = s + meltMl;
          const dilutionPct = (meltMl / totalVol) * 100;
          return {
            result: `Total Volume: ${totalVol.toFixed(1)} ml (${dilutionPct.toFixed(1)}% dilution)`,
            secondaryResult: `Melt water added: ~${meltMl.toFixed(1)} ml`,
            formula: 'Dilution % = (Melt Water Volume / Total Final Volume) × 100'
          };
        }
      },
      {
        id: 'cook-french-fry',
        name: 'French Fry Blanching & Frying Timer',
        categoryId: 'cooking',
        description: 'Calculate potato starch soak time and two-stage frying temperatures.',
        inputs: [
          { id: 'weightKg', label: 'Potato Batch Weight (kg)', type: 'number', defaultValue: 1.0 }
        ],
        calculate: (vals) => {
          const w = Number(vals.weightKg);
          return {
            result: `Stage 1: 150°C (6 mins) | Stage 2: 190°C (3 mins)`,
            secondaryResult: `For ${w} kg sliced potatoes with cold water starch soak`,
            formula: 'Two-stage Belgian/French fry thermal cooking guideline'
          };
        }
      }
    ]
  };
