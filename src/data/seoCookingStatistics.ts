import { ConstructionHealthSeoContent } from './seoConstructionHealth';

export const cookingStatisticsSeoMap: Record<string, ConstructionHealthSeoContent> = {
  // ==========================================
  // COOKING & FOOD (29 Calculators)
  // ==========================================
  'recipe-scaler': {
    intro: 'When a family recipe for Chicken Biryani or Mutton Karahi is written for 4 people, but you are hosting an Eid Dawat or Iftar dinner for 12 guests, guessing spice and rice quantities can ruin the dish’s balance. This Recipe Scaler proportionally multiplies or divides any ingredient quantity to match your exact target serving count.',
    howItWorks: 'The calculator divides the Original Ingredient Quantity by the Original Servings to find the exact quantity required per single serving, then multiplies that unit figure by your Target Servings. Formula: Scaled Quantity = (Ingredient Quantity / Original Servings) × Target Servings.',
    workedExample: 'Scaling a recipe originally serving 4 people up to 12 guests (a 3× multiplier) takes an ingredient requiring 2 cups (or 2 kg) and scales it to (2 / 4) × 12 = 6.00 units.',
    faqs: [
      { q: 'Do red chili powder and salt scale 1-to-1 when tripling or quadrupling a Pakistani curry?', a: 'When scaling a recipe 3× or 4× for a large pot (patila), professional chefs recommend using about 85%–90% of the scaled chili and salt first, tasting before adding the final 10%.' },
      { q: 'Can I scale a recipe down for 1 or 2 people (like in a hostel)?', a: 'Yes! Enter 4 as Original Servings and 1 or 2 as Target Servings to halve or quarter the ingredient quantities accurately.' },
      { q: 'Does cooking time double when I double the recipe quantity?', a: 'Stovetop simmering time stays nearly the same once the pot comes to a boil, provided you use a wider pot rather than stacking food twice as deep.' },
      { q: 'What units can I enter in the "Ingredient Quantity" box?', a: 'Any unit works—grams, kilograms, cups, tablespoons, or tolas—the output remains in the exact same unit you entered.' }
    ],
    whoUses: 'Who uses this: Home cooks hosting family Dawats, Foodpanda home-chefs scaling batch orders, and bakery owners.'
  },
  'cooking-measurement-conv': {
    intro: 'International baking blogs, YouTube cooking channels, and cookbook recipes constantly switch between US Cups, Tablespoons (tbsp), Teaspoons (tsp), Milliliters (ml), and Fluid Ounces (fl oz). Using a random teacup from your kitchen cabinet instead of a standard 240 ml measuring cup causes cakes to sink. This converter translates all five culinary volume units at once.',
    howItWorks: 'Your entered value is first normalized into milliliters using culinary standards: 1 Cup = 240 ml, 1 Tablespoon = 15 ml, 1 Teaspoon = 5 ml, and 1 US Fluid Ounce = 29.5735 ml. That milliliter total is then divided into every other unit. Formula: 1 Cup = 16 tbsp = 48 tsp = 240 ml = 8.12 fl oz.',
    workedExample: 'Entering 1 Cup converts to 240.0 ml (1.00 cups), which equals 16.0 tbsp, 48.0 tsp, or 8.12 fl oz.',
    faqs: [
      { q: 'How many tablespoons are in 1/4 cup or 1/2 cup of oil or ghee?', a: 'Since 1 full cup equals 16 tablespoons, 1/2 cup is 8 tablespoons and 1/4 cup is exactly 4 tablespoons.' },
      { q: 'How many teaspoons make 1 tablespoon?', a: 'There are 3 level teaspoons (5 ml each) in 1 standard tablespoon (15 ml).' },
      { q: 'How do traditional Pakistani weights like 1 Tola and 1 Pao relate to grams and cups?', a: 'In Pakistani spice and kitchen weights, 1 Tola is ~11.66 grams (about 1 level tablespoon of dry spice), and 1 Pao is 250 grams (roughly 1 full cup of water or milk).' },
      { q: 'Is 1 ml of water or milk equal to 1 gram?', a: 'Yes, for water, milk, and clear liquids, 240 ml weighs approximately 240 grams; however, 1 cup (240 ml) of dry all-purpose flour (Maida) weighs only ~120–125 grams!' }
    ],
    whoUses: 'Who uses this: Home bakers, culinary arts students, dietitians portioning meals, and recipe developers.'
  },
  'oven-temp-conv': {
    intro: 'Whether you are baking a sponge cake, roasting chicken tikka in an electric OTG oven, or using a classic gas range with Gas Mark numbers (1 through 9), recipes from the US list Fahrenheit (°F) while ovens sold in Pakistan and Europe use Celsius (°C). This converter translates between °F, °C, and Gas Mark instantaneously.',
    howItWorks: 'To convert Fahrenheit to Celsius, the calculator subtracts 32 and multiplies by 5/9. To convert Celsius to Fahrenheit, it multiplies by 9/5 and adds 32. Gas Mark 1 starts at 275°F (135°C) and increases by 25°F per mark. Formula: °C = (°F − 32) × 5/9; °F = (°C × 9/5) + 32.',
    workedExample: 'Converting the most common cake-baking temperature of 350 °F yields 176.7 °C (commonly set to 175°C or 180°C on dials) and corresponds to Gas Mark 4.',
    faqs: [
      { q: 'How should I adjust the temperature if my electric oven has a Convection Fan turned on?', a: 'In a fan-assisted (convection) oven or air fryer, reduce the recipe’s Celsius temperature by 15°C to 20°C (or 25°F) so the exterior doesn’t brown too fast.' },
      { q: 'What is 180°C in Fahrenheit and Gas Mark?', a: '180°C equals 356°F (standard 350°F baking temperature) and Gas Mark 4.' },
      { q: 'What oven temperature is best for baking Naan or Pizza at home?', a: 'Set your oven to its highest setting—typically 230°C to 250°C (450°F to 485°F, Gas Mark 8–9)—and preheat for 20 minutes.' },
      { q: 'Why do cakes crack on top in small domestic OTG ovens in Pakistan?', a: 'Small countertop OTG heating rods sit close to the pan, making actual internal temperature 20°C hotter than the dial; an inexpensive hanging oven thermometer solves this.' }
    ],
    whoUses: 'Who uses this: Home bakers using electric OTGs or gas cooking ranges, pastry chefs, and air-fryer users.'
  },
  'meat-cooking-time': {
    intro: 'Roasting a whole Chargha chicken, a leg of mutton (Raan roast) for a wedding dinner, or a beef tenderloin roast requires timing the oven by exact weight in kilograms so the center cooks through without drying out the outer meat. This calculator computes exact roasting hours and minutes.',
    howItWorks: 'Each meat variety has a thermal conductivity rate in minutes per kilogram plus a fixed base searing/heat-penetration time: Chicken (40 mins/kg + 20 mins), Beef (45 mins/kg + 25 mins), Lamb/Mutton (50 mins/kg + 20 mins), and Pork (55 mins/kg + 30 mins). Formula: Total Mins = (Weight in kg × Mins per kg) + Base Mins.',
    workedExample: 'Roasting a 2.0 kg whole chicken or mutton leg at 180°C–190°C requires (2.0 × 40) + 20 = 100 minutes (1 hr 40 mins) for chicken, or (2.0 × 50) + 20 = 120 minutes (2 hrs 0 mins) for a mutton leg.',
    faqs: [
      { q: 'Should I take meat straight from the refrigerator into the hot oven?', a: 'No, let marinated chicken or mutton rest at room temperature for 30 minutes before roasting so the core doesn’t remain cold while the outside overcooks.' },
      { q: 'How do I keep a whole mutton leg (Raan) moist during a 2-hour oven roast?', a: 'Cover the baking tray tightly with aluminum foil for the first 75% of the roasting time to steam-tenderize the fibers, then uncover for the final 25 minutes to crisp the exterior.' },
      { q: 'What internal meat thermometer temperature indicates safe cooked chicken vs mutton?', a: 'Poultry is safely cooked at 74°C (165°F) in the thickest part of the thigh, while medium-well mutton/beef roast reaches 65°C–70°C (150°F–160°F).' },
      { q: 'Why should roasted meat rest for 15 minutes before carving?', a: 'Resting allows pressurized muscle juices to redistribute throughout the meat rather than spilling out onto the cutting board.' }
    ],
    whoUses: 'Who uses this: Home cooks preparing whole chicken/Raan roasts, catering chefs, and BBQ oven operators.'
  },
  'rice-water-ratio': {
    intro: 'Achieving long, separate, fluffy grains of Pakistani Super Kernel Basmati or Sella rice for Pulao, Biryani, or plain boiled Chawal depends entirely on the exact water-to-rice volume ratio. Adding even half a cup too much water turns expensive aged Basmati mushy. This calculator finds the exact cups of water and cooking time.',
    howItWorks: 'The calculator multiplies your Rice Quantity (in Cups) by the optimal absorption ratio for the selected grain variety: Basmati Rice (1 : 1.5), White/Jasmine Rice (1 : 2.0), Brown Rice (1 : 2.25), and Sella/Parboiled Rice (1 : 2.0). Formula: Water Cups = Rice Cups × Variety Ratio.',
    workedExample: 'Cooking 2 Cups of aged Basmati Rice in a covered pot (absorption/Pulao method) requires 2 × 1.5 = 3.00 Cups of Water and takes approximately 15 minutes.',
    faqs: [
      { q: 'Should I soak Pakistani Super Kernel Basmati rice before cooking?', a: 'Yes! Always wash Basmati 3–4 times until the water runs clear and soak it for 25 to 30 minutes (or 1 to 2 hours for Golden Sella rice) so the grains elongate fully.' },
      { q: 'Why does Basmati need a 1 : 1.5 water ratio instead of 1 : 2?', a: 'Because pre-soaked aged Basmati absorbs water during its 30-minute soak; using 2 cups of water per cup of soaked Basmati in a closed pot over-hydrates and breaks the grains.' },
      { q: 'How is the "Drain Method" for layered Biryani different from the "Absorption Method" for Pulao?', a: 'For Pulao or plain Tarka rice, use this exact 1 : 1.5 ratio; for layered Biryani (kanni), boil rice in abundant salted water until 75% done (1 kanni left) and drain through a colander before Dum.' },
      { q: 'How many grams is 1 standard cup of dry uncooked Basmati rice?', a: '1 standard cup (240 ml) of uncooked dry Basmati rice weighs approximately 190 to 200 grams (so 5 cups equals 1 kg).' }
    ],
    whoUses: 'Who uses this: Home cooks perfecting Pulao and Chawal, hostel students learning to cook, and cloud-kitchen chefs.'
  },
  'food-cost-serving': {
    intro: 'Whether you run a home-based Foodpanda kitchen in Karachi, a university cafeteria stall in Lahore, or simply want to compare the per-person cost of homemade Chicken Karahi against ordering from a restaurant, this calculator computes your exact ingredient cost per serving in PKR.',
    howItWorks: 'The calculator divides your Total Ingredients Cost in PKR (meat, oil/ghee, spices, vegetables, and garnish) by the total Number of Servings yielded by the batch. Formula: Cost per Serving (PKR) = Total Ingredients Cost / Number of Servings.',
    workedExample: 'If a homemade pot of Mutton Pulao costs PKR 1,800 in total ingredients and feeds 6 people generously, the exact food cost is PKR 300.00 / serving.',
    faqs: [
      { q: 'What menu selling price should a Foodpanda home-chef charge based on Cost per Serving?', a: 'Restaurant and cloud-kitchen pricing typically targets a 30% to 35% Food Cost Ratio—meaning you multiply your Cost per Serving (plus packaging box cost) by 3.0 to cover gas, platform commission, and profit.' },
      { q: 'Should I include cooking oil, ginger-garlic paste, and gas in Total Ingredients Cost?', a: 'Yes! Many home food businesses forget that 1 cup of cooking oil (~PKR 120) and disposable aluminum/plastic containers (PKR 30–50 per box) significantly impact net profit.' },
      { q: 'How can hostels and mess committees use this calculator?', a: 'Hostel mess managers divide the daily bazaar grocery bill by the number of student meal attendance tokens to calculate the daily mess unit rate.' },
      { q: 'How much cheaper is cooking at home compared to dining out in Pakistan?', a: 'Cooking at home typically costs 35% to 45% of equivalent restaurant menu prices while allowing you to use pure cooking oil and hygienic meat.' }
    ],
    whoUses: 'Who uses this: Home-kitchen entrepreneurs, restaurant cost controllers, hostel mess secretaries, and household budgeters.'
  },
  'party-food-qty': {
    intro: 'Planning the catering or Degi order for a 30-guest family Dawat, Aqeeqah, Milad, or weekend BBQ night in Pakistan often leads to either running short of meat or wasting kilos of leftover rice. This calculator estimates exact meat (kg), rice (kg), and cold drink (Liters) requirements by event style.',
    howItWorks: 'Based on Pakistani catering standards per guest, the calculator multiplies Guest Count by event-specific allowances: Full Dinner Buffet (0.25 kg meat + 0.15 kg uncooked rice + 0.4 L drinks per person), High Tea/Snacks (0.15 kg meat + 0.5 L drinks), or BBQ Party (0.35 kg meat + 0.5 L drinks). Formula: Total Qty = Guests × Per-Guest Catering Factor.',
    workedExample: 'Hosting a Full Dinner Buffet (Biryani + Karahi) for 30 guests requires approximately 7.5 kg of Meat, 4.5 kg of uncooked Basmati Rice, and 12.0 Liters of Beverages (eight 1.5L family bottles).',
    faqs: [
      { q: 'How many guests does a standard Pakistani "10 kg Deg" of Biryani feed?', a: 'A "10 kg Deg" (containing 10 kg uncooked rice + 8 to 10 kg chicken/meat) comfortably serves 60 to 70 guests when paired with another curry dish, or 50 guests as a single dish.' },
      { q: 'Why does a BBQ Party require 0.35 kg (350g) of raw meat per person instead of 0.25 kg?', a: 'In a BBQ party (Seekh Kabab, Malai Boti, Tikka), there is no heavy rice dish to fill guests up, and boneless meat shrinks by ~25% in weight over charcoal!' },
      { q: 'How many Naans or Rotis should I order for 30 guests alongside Karahi/Qorma?', a: 'Order approximately 1.25 to 1.5 Naans per guest (around 40 Naans for 30 people) if rice/Biryani is also on the table.' },
      { q: 'How much sweet dish (Kheer, Zarda, or Gulab Jamun) is needed per guest?', a: 'Allow roughly 100g to 120g of dessert per person (about 3.5 kg of Kheer or Zarda for 30 guests).' }
    ],
    whoUses: 'Who uses this: Families planning Dawats/weddings, Pakwan Center / Degi caterers, and corporate event organizers.'
  },
  'tea-coffee-cups': {
    intro: 'In Pakistan, serving steaming cups of Doodh Patti orKarak Chai to office guests, construction workers, or a family gathering is a daily ritual. When making 10 or 20 cups at once, this calculator determines the exact milliliters of milk and water plus tablespoons of tea leaves and sugar.',
    howItWorks: 'For each person (1 standard 200–240 ml cup), the calculator scales liquid and dry ratios by beverage style: Pakistani Milk Tea / Chai (120 ml water + 120 ml milk + 1.5 tbsp tea/sugar mix per cup), Black Tea / Kehwa (220 ml water + 0 ml milk), and Milk Coffee (180 ml milk + 50 ml water). Formula: Total Volume = People × Per-Cup Milliliters.',
    workedExample: 'Making Pakistani Milk Tea (Chai) for 10 people requires 1,200 ml (1.2 Liters / 5 cups) of Water, 1,200 ml (1.2 Liters / 5 cups) of Milk, and ~15 tablespoons of tea leaves and sugar combined.',
    faqs: [
      { q: 'How do I adjust the water-to-milk ratio for pure "Doodh Patti" (truck-hotel style)?', a: 'For thick Doodh Patti, use 75% to 80% full-cream milk and only 20% to 25% water (just enough water to boil and extract the tea leaves first).' },
      { q: 'Why do we add slightly more water+milk (240 ml per cup) than the final 200 ml cup size?', a: 'Simmering ("kaadhna") chai with cardamom for 5 to 8 minutes evaporates roughly 15% of the liquid, concentrating the flavor and richness.' },
      { q: 'How many teaspoons of Tapal/Lipton danedar tea leaves are needed per cup of strong Karak Chai?', a: 'Use 1.5 level teaspoons of tea leaves per cup (so 15 teaspoons = 5 tablespoons of tea leaves for 10 cups).' },
      { q: 'How many 250 ml Tetra Pak milk packs are needed for 10 cups of chai?', a: '1,200 ml of milk equals roughly five 250 ml milk packs (or one 1-Liter pack plus one 250 ml pack).' }
    ],
    whoUses: 'Who uses this: Office tea boys/pantries, Dhabas and cafes, home hosts, and event caterers.'
  },
  'baking-pan-conv': {
    intro: 'Have a cake or brownie recipe written for an 8-inch round pan (50 sq in), but you only own a 10-inch round pan (78 sq in) or a 9×13-inch rectangular Pyrex dish? Pouring the original batter into a larger pan makes a flat, dry cake. This converter scales your batter volume by pan surface area.',
    howItWorks: 'Keeping cake height constant requires scaling total batter volume by the ratio of the Target Pan Surface Area to the Original Pan Surface Area. Formula: Target Batter (Cups) = Original Batter × (Target Pan Area / Original Pan Area).',
    workedExample: 'Scaling a cake recipe that produces 4 Cups of batter for a 50 sq in pan (8-inch round) to fit a 78 sq in pan (10-inch round, a 1.56× area ratio) requires 4 × (78 / 50) = 6.24 Cups of Batter.',
    faqs: [
      { q: 'How do I find the surface area in square inches of common baking pans?', a: 'For square/rectangular pans, multiply Length × Width (e.g., 8×8" = 64 sq in, 9×13" = 117 sq in). For round pans, use $\\pi r^2$: 6" round = 28 sq in, 8" round = 50 sq in, 9" round = 64 sq in, 10" round = 78.5 sq in.' },
      { q: 'Notice that an 8×8-inch square pan (64 sq in) and a 9-inch round pan (64 sq in) have the exact same area?', a: 'Yes! You can swap an 8-inch square pan and a 9-inch round pan 1-for-1 without changing batter quantities or baking time at all.' },
      { q: 'How high should I fill a cake pan with batter?', a: 'Fill cake pans between 1/2 and 2/3 full to leave headroom for the cake to dome and rise without overflowing in the oven.' },
      { q: 'Does a wider, shallower pan bake faster or slower?', a: 'If you don’t scale the batter and pour it thinner into a larger pan, check for doneness with a toothpick 5 to 8 minutes earlier.' }
    ],
    whoUses: 'Who uses this: Home cake bakers, custom birthday-cake entrepreneurs, and pastry students.'
  },
  'baking-powder-yeast': {
    intro: 'When making homemade Naan, Kulcha, pizza base, or bhatura dough and you run out of one leavening agent, knowing the conversion factor between chemical Baking Powder and biological Active Dry Yeast lets you adapt your recipe.',
    howItWorks: 'Because active dry yeast ferments sugars continuously during proofing, slightly less volume of dry yeast granules is needed compared to double-acting baking powder. The calculator multiplies Baking Powder (teaspoons) by 0.75. Formula: Active Dry Yeast (tsp) = Baking Powder (tsp) × 0.75.',
    workedExample: 'Replacing 2 teaspoons of Baking Powder in a flatbread or dough recipe requires 2 × 0.75 = 1.50 tsp of Active Dry Yeast.',
    faqs: [
      { q: 'Can I swap yeast for baking powder in a butter sponge cake?', a: 'No! Yeast works in bread, Naan, pizza, and donuts that have gluten structure and 1–2 hours of warm proofing time; high-sugar/high-butter cakes require chemical baking powder for instant oven lift.' },
      { q: 'What is the difference between Baking Powder and Baking Soda (Meetha Soda)?', a: 'Baking Soda is pure sodium bicarbonate and requires an acid (yogurt, lemon juice, buttermilk) to react; Baking Powder already contains both baking soda and a dry acid.' },
      { q: 'How do I activate Active Dry Yeast vs Instant Yeast?', a: 'Stir Active Dry Yeast into lukewarm water/milk (38°C–40°C) with 1 tsp sugar for 10 minutes until frothy; Instant Yeast can be mixed directly into dry flour.' },
      { q: 'Why do tandoors and home cooks in Pakistan use both yeast and a pinch of baking soda in Roghni Naan?', a: 'Yeast gives fermented flavor and chewiness, while baking soda + yogurt gives immediate tenderness and golden-brown blistering.' }
    ],
    whoUses: 'Who uses this: Home bread and Naan bakers, pizza makers, and kitchen experimenters.'
  },
  'sugar-honey-sub': {
    intro: 'Replacing refined white sugar (Cheeni) with pure natural honey (Pure Sidr/Beri or Wildflower Shahad) in tea cakes, granola bars, marinades, or desserts adds floral flavor and moisture. Because honey is denser and sweeter than granulated sugar, you don’t use a 1:1 ratio.',
    howItWorks: 'Since honey is higher in fructose and denser by volume, the calculator multiplies your White Sugar amount (Cups) by 0.75 (3/4 cup of honey per 1 cup of sugar). Formula: Honey (Cups) = Sugar (Cups) × 0.75.',
    workedExample: 'Replacing 1 Cup of granulated white sugar in a banana bread or cake recipe requires 0.75 Cups (3/4 cup) of liquid honey.',
    faqs: [
      { q: 'What adjustments must I make to liquid and oven temperature when baking with honey?', a: 'Because honey is ~20% water and caramelizes faster than white sugar, reduce other liquids (milk/water) by 3–4 tablespoons per cup of honey and lower oven temperature by 15°F–25°F (10°C–15°C).' },
      { q: 'Why should I add a pinch (1/4 tsp) of baking soda when substituting honey in baked goods?', a: 'Honey is naturally acidic (pH ~3.9); adding 1/4 tsp baking soda per cup of honey neutralizes excess acid and helps the batter rise.' },
      { q: 'How do I prevent honey from sticking to the measuring cup?', a: 'Lightly coat the inside of the measuring cup with a drop of cooking oil or butter first—the honey will slide right out with zero waste!' },
      { q: 'Does crystallization in winter mean my Pakistani Sidr/Beri honey is fake?', a: 'Actually, pure raw unheated blossom honey naturally crystallizes in cold weather due to glucose content; placing the glass jar in warm water restores its liquid state.' }
    ],
    whoUses: 'Who uses this: Health-conscious bakers, clean-eating families, and dessert makers.'
  },
  'pasta-portion-calc': {
    intro: 'Dry macaroni, spaghetti, penne, and fettuccine (such as Kolson, Bake Parlor, or imported Italian pasta) look deceptively small in the packet before boiling—expanding to more than double their weight once hydrated. This calculator determines exact dry pasta grams and boiling water liters for your group size.',
    howItWorks: 'The calculator multiplies the Number of People by 95 grams of dry pasta per person for a Main Course (or 50 grams per person for a Side Dish/Soup), and calculates boiling water at the classic culinary rule of 1 Liter of water per 100 grams of dry pasta. Formula: Dry Pasta (g) = People × (95g Main or 50g Side); Water (L) = (Grams / 1000) × 10.',
    workedExample: 'Cooking a main-course Chicken Alfredo or Desi Tikka Macaroni for 4 people requires 4 × 95 = 380 grams of Dry Pasta (nearly one standard 400g packet) boiled in ~3.8 Liters of salted water.',
    faqs: [
      { q: 'How much does a standard packet of macaroni or spaghetti weigh in Pakistani grocery stores?', a: 'Standard retail boxes and bags of macaroni and spaghetti in Pakistan weigh 400 grams—which is the exact main-course portion for 4 adults!' },
      { q: 'How much does 100 grams of dry pasta weigh after boiling?', a: 'Dry pasta absorbs water during boiling and roughly doubles in weight—so 100g of dry pasta becomes ~200g to 220g of cooked pasta.' },
      { q: 'Should I add cooking oil to the pasta boiling water?', a: 'Italian chefs advise against adding oil to the water because it coats the pasta and prevents sauce from clinging; instead, stir vigorously during the first 2 minutes in plenty of salted water.' },
      { q: 'How much salt should go into 4 Liters of pasta boiling water?', a: 'Add 1 to 1.5 tablespoons of salt once the water comes to a rolling boil so the pasta is seasoned from within.' }
    ],
    whoUses: 'Who uses this: Home cooks making Desi-Chinese macaroni or Italian pasta, café chefs, and students.'
  },
  'pizza-dough-calc': {
    intro: 'Professional pizzerias and artisan sourdough bakers never measure pizza dough ingredients in cups—they use Baker’s Percentages where total Flour Weight is always 100%, and Water (Hydration %), Salt (2.5%), and Yeast (0.5%) are weighed in grams relative to the flour. This calculator builds a foolproof dough formula.',
    howItWorks: 'Taking your Flour Weight (grams) as the 100% baseline, the calculator multiplies Flour Weight by (Hydration % / 100) for Water grams, by 0.025 (2.5%) for Salt grams, and by 0.005 (0.5%) for Yeast grams, summing all four for Total Dough Weight. Formula: Water = Flour × Hydration%; Salt = Flour × 0.025; Yeast = Flour × 0.005.',
    workedExample: 'For 500 grams of all-purpose/bread flour at a 60% Hydration Target, you need 300.0g Water, 12.5g Salt, and 2.5g Instant Yeast, yielding 815g Total Dough (enough for three medium 10-inch pizzas).',
    faqs: [
      { q: 'What hydration percentage is best for Pakistani Maida (All-Purpose Flour) in a home oven?', a: 'Pakistani Maida has lower protein (~10%–11%) than imported Italian 00 or Bread Flour, so 58% to 62% hydration gives a soft, workable dough that isn’t sticky.' },
      { q: 'How many grams should one dough ball weigh for a Small (8"), Medium (10"), or Large (13") pizza?', a: 'Small (8") = 160–180g, Medium (10") = 250–270g, and Large (13"–14") = 380–420g.' },
      { q: 'Why does cold-fermenting pizza dough in the fridge for 24 hours make it taste so much better?', a: 'Slow enzymatic fermentation breaks complex starches into simple sugars, creating airy crust blisters, better browning, and easy digestibility.' },
      { q: 'Can I add 1–2 tablespoons of olive oil or cooking oil for a softer Pakistani-style pan pizza crust?', a: 'Yes! Adding 2% to 3% oil (10g–15g for 500g flour) tenderizes the crumb so it stays soft in a regular home oven.' }
    ],
    whoUses: 'Who uses this: Home pizza bakers, pizzeria kitchen managers, and artisan bread enthusiasts.'
  },
  'coffee-brew-ratio': {
    intro: 'Transitioning from instant Nescafé to freshly ground specialty coffee beans using a French Press, V60 Pour-Over, AeroPress, or automatic drip machine requires hitting the "Golden Brew Ratio" of coffee grounds (grams) to hot water (milliliters).',
    howItWorks: 'Since 1 milliliter of water weighs 1 gram, dividing your target Water Volume (ml) by your chosen Brew Ratio (1 : X, where X is typically between 12 and 18) gives the exact weight of ground coffee beans needed in grams. Formula: Coffee Grounds (g) = Water Volume (ml) / Brew Ratio.',
    workedExample: 'Brewing a 500 ml carafe (two mugs) of pour-over or French Press coffee at the classic 1 : 15 Golden Ratio requires 500 / 15 = 33.3 grams of freshly ground coffee.',
    faqs: [
      { q: 'What brew ratio should I use for French Press vs V60 Pour-Over vs Iced Coffee?', a: 'French Press tastes best slightly stronger at 1:14 to 1:15; V60/Drip shines at 1:16; and Japanese Flash-Brew Iced Coffee uses 1:12 (to account for ice dilution).' },
      { q: 'What does changing the ratio from 1:15 to 1:17 do to the taste?', a: 'A higher ratio number (1:17) uses more water per gram of coffee, resulting in a lighter, more tea-like body; a lower number (1:13) gives a heavier, bolder cup.' },
      { q: 'How many grams of coffee is 1 level tablespoon if I don’t have a digital kitchen scale?', a: '1 level tablespoon of whole or medium-ground coffee beans weighs approximately 5 to 6 grams (so 33g is roughly 6 level tablespoons).' },
      { q: 'What water temperature is ideal for brewing specialty coffee?', a: 'Bring water to a boil and let it rest off the heat for 45 seconds so it drops to 92°C–96°C—boiling 100°C water scorches dark-roast grounds.' }
    ],
    whoUses: 'Who uses this: Specialty café baristas in Lahore/Islamabad/Karachi, home coffee brewers, and office coffee lovers.'
  },
  'spice-blend-ratio': {
    intro: 'Grinding your own fresh homemade curry powder, Karahi masala, or Biryani spice mix at home guarantees zero artificial fillers, vibrant aroma, and massive cost savings compared to store-bought boxes. Enter your desired total batch weight in grams to get the exact component spice breakdown.',
    howItWorks: 'The calculator distributes your Total Batch Weight (grams) across the classic culinary foundation of South Asian masala: 30% Cumin Seeds (Zeera), 30% Coriander Seeds (Sabut Dhania), 20% Red Chili (Lal Mirch), 10% Turmeric (Haldi), and 10% Aromatic Garam Masala (cloves, cardamom, cinnamon, black pepper). Formula: Component Grams = Batch Weight × Component Percentage.',
    workedExample: 'Making a 100-gram jar of homemade all-purpose curry masala requires 30.0g Cumin, 30.0g Coriander, 20.0g Red Chili, 10.0g Turmeric, and 10.0g Garam Masala.',
    faqs: [
      { q: 'Should I dry-roast whole cumin and coriander seeds before grinding?', a: 'Yes! Lightly dry-roasting whole Zeera and Sabut Dhania in a dry pan over low heat for 2 minutes until fragrant releases essential oils and drives off moisture before grinding.' },
      { q: 'How do I convert these gram weights into Pakistani "Tolas" when buying whole spices from a Pansari/Kiryana store?', a: '1 Tola equals approximately 11.66 grams (roughly 12g)—so 30g is about 2.5 Tolas.' },
      { q: 'How do I customize this blend specifically for Sindhi or Bombay Biryani?', a: 'Add dried plums (Aloo Bukhara), star anise (Badian), mace/nutmeg (Javitri/Jaifal), and extra green cardamom to the 10% aromatic portion.' },
      { q: 'How long does freshly ground homemade masala stay fresh?', a: 'Stored in an airtight glass jar away from stove heat and sunlight, homemade spice blends retain peak aroma for 3 to 4 months.' }
    ],
    whoUses: 'Who uses this: Pakistani homemakers grinding Ramadan/Eid spice batches, Pakwan centers, and culinary enthusiasts.'
  },
  'deep-fry-oil-calc': {
    intro: 'Deep-frying crispy Ramadan Pakoras, Samosas, Jalebi, or Broast chicken in a round Karahi or saucepan requires enough oil depth (4 to 6 cm) for food to float freely without touching the bottom—while leaving safe headspace so bubbling oil never boils over onto the gas flame.',
    howItWorks: 'Treating the cooking pot as a cylinder of diameter $D$ (radius $r = D / 2$ in cm) filled to an oil depth of $h$ (cm), the calculator computes volume in cubic centimeters ($\\text{cm}^3 = \\text{ml}$) and divides by 1,000 to output Liters of cooking oil. Formula: $\\text{Oil (Liters)} = (\\pi \\times (D / 2)^2 \\times h) / 1000$.',
    workedExample: 'Filling a 24 cm diameter flat-bottomed frying pan or Karahi to a desired oil depth of 5 cm requires $(\\pi \\times 12^2 \\times 5) / 1000 = 2.26\\text{ Liters of Oil}$.',
    faqs: [
      { q: 'Why shouldn’t I fill a deep-frying pot more than halfway up the sides?', a: 'When cold, wet food (like potato fries or samosas) hits 180°C oil, moisture flashes into steam and makes the oil foam up violently—always leave at least 50% empty height!' },
      { q: 'Why does a curved traditional Pakistani Wok/Karahi use less oil than a flat-bottomed saucepan?', a: 'A hemispherical round-bottomed Karahi narrows at the base, achieving a 5 cm center depth with roughly 35%–40% less oil than a straight-walled cylinder!' },
      { q: 'How many times can cooking oil be reused after frying pakoras or fries?', a: 'Strain cooled oil through a fine mesh/muslin cloth to remove burnt crumbs and reuse at most 2 to 3 times (or transfer used oil into curry cooking before it darkens/smokes).' },
      { q: 'What is the ideal oil temperature for frying Samosas vs Pakoras?', a: 'Samosas need medium-low oil (150°C–160°C) for 10–12 minutes so the pastry turns flaky without blistering; Pakoras and French fries need 175°C–185°C.' }
    ],
    whoUses: 'Who uses this: Home cooks during Ramadan Iftar prep, fast-food broast/fries shops, and restaurant kitchens.'
  },
  'slow-cooker-conv': {
    intro: 'Slow-cooked dishes like Nihari, Haleem, Paye, or tender beef stews develop deep gelatinous richness when simmered gently over many hours in an electric slow cooker (Crock-Pot) instead of a conventional oven or high stovetop flame. This converter translates standard oven roasting hours into Low or High slow-cooker hours.',
    howItWorks: 'The calculator multiplies your Conventional Oven Time (Hours) by 2.0 for the Slow Cooker Low Setting (~90°C) or by 1.5 for the Slow Cooker High Setting (~100°C). Formula: Slow Cooker Hours = Oven Hours × (2.0 for Low or 1.5 for High).',
    workedExample: 'A beef shank Nihari or pot roast that takes 2 hours in a conventional oven converts to ~4.0 Hours on the Slow Cooker Low Setting (or ~3.0 Hours on High).',
    faqs: [
      { q: 'Should I reduce the water or broth quantity when converting a stovetop/oven recipe to a slow cooker?', a: 'Yes! Because a slow cooker lid traps nearly 100% of steam with almost zero evaporation, reduce added water by 30% to 40% so your gravy doesn’t turn watery.' },
      { q: 'Should I brown meat and onions in a pan (Bhunai) before putting them in the slow cooker?', a: 'Definitely—searing the meat, ginger-garlic, and masala in ghee on the stove for 10 minutes first builds the Maillard flavor base that a slow cooker cannot create on its own.' },
      { q: 'How much electricity does a slow cooker consume compared to an electric oven?', a: 'A slow cooker draws only 150 to 250 Watts (less than two ceiling fans!), whereas an electric oven draws 2,000+ Watts.' },
      { q: 'Why shouldn’t I lift the slow cooker glass lid repeatedly to check the food?', a: 'Every time you lift the lid, trapped heat escapes and adds 15 to 20 minutes to the required cooking time.' }
    ],
    whoUses: 'Who uses this: Working professionals prepping overnight Nihari/Haleem, home cooks, and meal-preppers.'
  },
  'egg-substitute-calc': {
    intro: 'Whether you are baking an eggless birthday cake for someone with an egg allergy, or you simply opened the fridge mid-recipe to find you are short 2 eggs, common kitchen ingredients like plain yogurt (Dahi), mashed banana, or applesauce can replace eggs in moist cakes, muffins, and brownies.',
    howItWorks: 'One standard large hen’s egg contributes roughly 50 ml (1/4 cup or 4 tablespoons) of liquid volume and binding structure. The calculator multiplies the Number of Eggs to Replace by 0.25 Cups (and 4 Tablespoons). Formula: Substitute Volume = Number of Eggs × 0.25 Cups (4 tbsp).',
    workedExample: 'Replacing 2 Eggs in a chocolate cake or muffin recipe requires 0.50 Cups (8 tbsp) of whisked plain yogurt, applesauce, or mashed ripe banana.',
    faqs: [
      { q: 'Which egg substitute works best for Pakistani home baking without changing the cake’s flavor?', a: 'Plain thick Dahi (strained yogurt/curd) is the best neutral-tasting egg substitute readily available in every Pakistani kitchen—it adds tenderness and reacts with baking soda for lift!' },
      { q: 'When is Mashed Banana a good vs bad egg substitute?', a: 'Mashed ripe banana is fantastic in chocolate brownies, pancakes, and walnut tea cakes, but will impart a noticeable banana aroma to plain vanilla sponge.' },
      { q: 'How many eggs can I safely replace in a single recipe?', a: 'Egg substitutes work best in recipes calling for 1 to 3 eggs; recipes relying on 5+ whipped eggs for structure (like angel food cake or meringues) cannot use fruit/yogurt substitutes.' },
      { q: 'Should I add an extra 1/2 teaspoon of baking powder when baking eggless?', a: 'Yes, adding an extra 1/2 tsp of baking powder per replaced egg helps compensate for the lost leavening power of whipped egg whites.' }
    ],
    whoUses: 'Who uses this: Eggless cake bakers, individuals with egg allergies, and resourceful home cooks.'
  },
  'fruit-jam-sugar': {
    intro: 'When fresh seasonal strawberries from Swat, apricots from Gilgit, mangoes from Multan, or apples from Quetta flood the market at low prices, making homemade fruit jam preserves them for months without chemical preservatives. This calculator computes the exact sugar weight, lemon juice, and jar yield.',
    howItWorks: 'Sugar acts both as a sweetener and a natural preservative that binds water molecules and activates fruit pectin to set into a gel. The calculator multiplies prepared Fruit Weight (kg) by 0.80 for Sugar (kg) and by 30 ml/kg for Lemon Juice, estimating final boiled yield after moisture evaporation. Formula: Sugar (kg) = Fruit (kg) × 0.80; Lemon Juice (ml) = Fruit (kg) × 30.',
    workedExample: 'For 1.5 kg of hulled fresh strawberries or chopped mangoes, you need 1.20 kg of Sugar and 45 ml (3 tablespoons) of fresh Lemon Juice, yielding approximately 2.34 kg of finished jam.',
    faqs: [
      { q: 'Why is lemon juice mandatory when making strawberry or mango jam?', a: 'Strawberries and ripe mangoes are low in natural acid and pectin; the citric acid in lemon juice lowers the pH to ~3.2 so natural fruit pectin chains cross-link into a firm jam set.' },
      { q: 'How do I test if the boiling jam has reached the "setting point" (105°C) without a thermometer?', a: 'Use the Cold Plate Test: place a small saucer in the freezer for 10 minutes, drop a spoonful of hot jam onto it, wait 30 seconds, and push it with your finger—if it wrinkles, it’s ready!' },
      { q: 'Can I cut the sugar in half for a low-sugar jam?', a: 'If you reduce sugar below 60% of fruit weight, traditional pectin won’t set firmly and the jam must be stored in the refrigerator and eaten within 2–3 weeks.' },
      { q: 'How do I sterilize glass jars so homemade jam doesn’t grow mold?', a: 'Wash glass jars and metal lids in hot soapy water, boil them in water for 10 minutes (or dry in a 120°C oven), and ladle the jam in while still piping hot.' }
    ],
    whoUses: 'Who uses this: Home food preservers, artisanal jam makers, and organic orchard farmers.'
  },
  'marinade-time-calc': {
    intro: 'Getting tender, flavorful Chicken Tikka, Bihari Kabab, Beef Steak, or Lahori Fried Fish depends on marinating the meat for the right window. Too short leaves the center bland; marinating delicate fish or papaya-treated meat too long turns the texture mushy! This guide calculates optimal refrigerator marinating windows by cut.',
    howItWorks: 'Based on muscle fiber density and acid/enzyme penetration speed at safe refrigerator temperatures (< 4°C), the calculator matches your selected Meat Cut to food-safety and culinary marinating time ranges. Formula: Muscle density & acid enzymatic penetration window lookup.',
    workedExample: 'Selecting "Chicken Breasts / Wings" outputs a recommended marination window of 2 to 4 Hours in the refrigerator below 4°C.',
    faqs: [
      { q: 'What happens if I leave raw papaya paste (Kacha Papita) or Kachri powder on Bihari Kabab or Chicken Tikka for 24 hours?', a: 'Papain enzyme aggressively breaks down muscle protein—leaving papaya paste on chicken or thin beef strips overnight turns the meat into a pasty, mushy texture when grilled!' },
      { q: 'Why should Fish & Seafood only be marinated for 30 minutes to 1 hour when lemon juice or vinegar is used?', a: 'Citric and acetic acid rapidly denature ("cook") delicate fish proteins like ceviche, making the fish dry and chalky if left in lemon juice for hours.' },
      { q: 'Is it safe to marinate meat on the kitchen counter at room temperature in Pakistan?', a: 'Never! At 30°C–40°C Pakistani kitchen temperatures, foodborne bacteria double every 20 minutes. Always marinate inside the fridge in a covered glass or food-grade plastic bowl.' },
      { q: 'Why does poking holes in a whole chicken or mutton leg (with a fork) help?', a: 'Marinade molecules only penetrate 2–3 millimeters into solid meat naturally; docking/scoring deep cuts allows yogurt and spices to reach the bone.' }
    ],
    whoUses: 'Who uses this: BBQ hosts, restaurant grill chefs, and everyday home cooks.'
  },
  'dough-rising-time': {
    intro: 'Anyone who has made pizza dough, Naan, or loaf bread in Pakistan knows that dough doubles in size in under an hour during a 38°C June afternoon in Lahore, yet takes 3+ hours on a chilly 12°C January evening in Quetta or Islamabad. This calculator estimates yeast proofing time from your room temperature.',
    howItWorks: 'Saccharomyces cerevisiae (baker’s yeast) fermentation speed follows an exponential thermal curve relative to a 22°C baseline (2.5 hours), slowing dramatically below 18°C and accelerating up to 35°C. Formula: Proofing Hours = 2.5 × (22 / max(10, Temp °C))^1.2.',
    workedExample: 'At an ambient kitchen Room Temperature of 24 °C, standard yeast dough takes ~2.3 Hours of proofing time to double in volume.',
    faqs: [
      { q: 'What is the ideal temperature "sweet spot" for proofing yeast dough?', a: 'Between 25°C and 28°C (77°F–82°F) gives the best balance of steady gas rise and rich fermentation flavor.' },
      { q: 'How can I create a warm proofing box in winter when my Pakistani kitchen is 12°C–15°C?', a: 'Turn your oven light bulb ON (keep the oven burner OFF!) and place a mug of boiling hot water on the bottom rack alongside your covered dough bowl—this creates a cozy 26°C chamber!' },
      { q: 'At what high temperature does yeast die?', a: 'Yeast cells begin dying at 50°C (122°F) and are completely killed at 60°C (140°F)—so never use scalding hot water or milk when mixing dough.' },
      { q: 'How do I test if the dough has finished proofing (the Poke Test)?', a: 'Gently press a floured finger 1 cm into the dough: if the indentation springs back slowly halfway, it is ready to bake!' }
    ],
    whoUses: 'Who uses this: Home bread and pizza bakers adjusting for summer vs winter kitchen temperatures.'
  },
  'chocolate-melting': {
    intro: 'Whether you are pouring a glossy chocolate drip glaze over a birthday cake or whipping a rich chocolate ganache frosting from cooking chocolate slabs (such as Crave, Milka, or Callebaut), getting the exact ratio of chocolate to heavy cream or butter prevents seizing and graininess.',
    howItWorks: 'For classic 1:1 pouring/whipping Chocolate Ganache, the calculator sets Heavy Cream equal to 100% of the Chocolate Weight (grams). For a firm shiny Chocolate Glaze, it calculates Butter/Oil at 30% of the Chocolate Weight. Formula: Ganache Cream = Chocolate × 1.0; Glaze Butter = Chocolate × 0.30.',
    workedExample: 'Melting 200 grams of dark chopped chocolate for "Chocolate Ganache" requires 200 grams of Heavy Cream (such as Olper’s or Milkpak Dairy Cream).',
    faqs: [
      { q: 'Can I use 200 ml Tetra Pak dairy cream (25%–30% fat) available in Pakistan for Ganache?', a: 'Yes! One standard 200 ml pack of Pakistani dairy cream weighs ~200 grams and works great; for white chocolate or hot summer weather, use a 2:1 ratio (200g chocolate to 100g cream) so it sets firmer.' },
      { q: 'Why did my melted chocolate suddenly turn into a hard, grainy, clumpy paste ("seizing")?', a: 'Even a single drop of water or steam touching melting chocolate causes sugar particles to clump together ("seize"). Keep bowls and spatulas 100% bone dry!' },
      { q: 'How do I set up a Double Boiler (Bain-Marie) on the stove?', a: 'Place a heatproof glass or stainless-steel bowl over a saucepan containing 2 inches of gently simmering water (make sure the bottom of the bowl does not touch the water).' },
      { q: 'How do I turn liquid Ganache into fluffy pipeable cake frosting?', a: 'Let the melted 1:1 ganache cool in the fridge for 45–60 minutes until peanut-butter thick, then whip with an electric beater for 2 minutes until pale and fluffy.' }
    ],
    whoUses: 'Who uses this: Home cake decorators, brownie businesses, and pastry chefs.'
  },
  'ice-cream-base': {
    intro: 'Making rich, scoopable homemade ice cream (or mango/pistachio kulfi-style ice cream) without icy crystals requires the right butterfat-to-milk balance in your dairy base. Using 100% milk makes hard ice blocks, while 100% cream leaves a greasy film on the palate. This calculator computes the ideal 60:40 dairy split.',
    howItWorks: 'Professional gelato and ice cream makers target roughly 14% to 18% total butterfat by blending 60% Heavy Whipping Cream with 40% Whole Full-Cream Milk across your desired Total Base Volume (ml). Formula: Heavy Cream (ml) = Total Volume × 0.60; Whole Milk (ml) = Total Volume × 0.40.',
    workedExample: 'Preparing a 1,000 ml (1 Liter) ice cream batch requires 600 ml of Heavy Cream and 400 ml of Whole Milk.',
    faqs: [
      { q: 'How do I make "No-Churn" mango or vanilla ice cream at home without an ice cream machine?', a: 'Whip the 600 ml chilled heavy cream to stiff peaks and fold in one 390g tin of sweetened condensed milk (plus mango puree)—the condensed milk replaces both the milk and sugar!' },
      { q: 'Why do homemade ice creams sometimes form crunchy ice crystals in the freezer?', a: 'Too much water (low fat/sugar) or slow freezing causes large ice crystals. Chilling the base thoroughly before churning and pressing plastic wrap directly against the surface prevents crystals.' },
      { q: 'How much sugar is needed for a 1,000 ml traditional custard ice cream base?', a: 'Use approximately 150g to 180g (3/4 cup) of sugar; sugar lowers the freezing point so the ice cream stays scoopable at −18°C.' },
      { q: 'How is traditional Pakistani Matka Kulfi different from Western ice cream?', a: 'Instead of adding heavy cream, Kulfi boils whole buffalo milk down to 40% of its original volume (Rabri) with khoya, cardamom, and pistachios, then freezes it un-churned in cones.' }
    ],
    whoUses: 'Who uses this: Home dessert makers, artisan gelato startups, and culinary hobbyists.'
  },
  'salad-dressing-ratio': {
    intro: 'A restaurant-quality Mediterranean, Greek, or Russian-style vinaigrette salad dressing relies on a balanced emulsion between oil (extra-virgin olive oil or sunflower oil) and acid (lemon juice, apple cider vinegar, or white vinegar). This calculator computes the exact acid volume needed for your oil volume and chosen ratio.',
    howItWorks: 'The classic culinary vinaigrette ratio is 3 parts oil to 1 part acid (Ratio = 3). The calculator divides your Olive Oil Volume (ml) by your chosen Oil-to-Vinegar Ratio to determine the exact milliliters of vinegar or fresh lemon juice required. Formula: Vinegar/Lemon (ml) = Oil Volume (ml) / Ratio.',
    workedExample: 'For 90 ml (6 tablespoons) of olive oil at the classic 3 : 1 ratio, you need 90 / 3 = 30.0 ml (2 tablespoons) of vinegar or lemon juice, creating 120.0 ml of Total Dressing.',
    faqs: [
      { q: 'When should I use a 2:1 ratio instead of the classic 3:1 ratio?', a: 'If you prefer a tangier, zesty dressing (common in Pakistani kachumber/fattoush salads using fresh lemon juice) or if you are using a sweeter balsamic vinegar, set the Ratio to 2.' },
      { q: 'How do I stop oil and lemon juice from separating into two layers?', a: 'Add 1/2 teaspoon of Dijon mustard, honey, or mayonnaise and shake vigorously in a closed glass jar—mustard acts as a natural emulsifier that binds oil and water molecules together!' },
      { q: 'When should I pour vinaigrette dressing onto lettuce and cucumber salad?', a: 'Always dress leafy green and cucumber salads right before serving at the table; salt and acid draw water out of vegetables through osmosis, making them limp if dressed an hour early.' },
      { q: 'How long does homemade olive-oil dressing last in the fridge?', a: 'Vinaigrette made with vinegar lasts 2 weeks in a sealed jar (let it sit at room temperature for 15 minutes before shaking if the olive oil solidifies in the fridge).' }
    ],
    whoUses: 'Who uses this: Home cooks, diet/keto meal preppers, café salad bars, and hotel chefs.'
  },
  'potluck-organizer': {
    intro: 'Organizing an office potluck lunch, university farewell party, or extended-family winter get-together where everyone brings a dish requires coordinating how many main courses, side dishes/salads, and desserts are needed so you don’t end up with eight plates of samosas and zero main courses!',
    howItWorks: 'Based on buffet variety math for group gatherings, the calculator divides the Number of Attendees by 8 for Main Dishes (minimum 2), by 6 for Side Dishes/Appetizers (minimum 3), and by 10 for Desserts (minimum 2), rounding up via the ceiling function. Formula: Mains = ceil(Attendees / 8); Sides = ceil(Attendees / 6); Desserts = ceil(Attendees / 10).',
    workedExample: 'For an office potluck with 25 Attendees, the organizer should assign 4 Main Dishes, 5 Side Dishes/Starters, and 3 Dessert varieties.',
    faqs: [
      { q: 'How big should each contributed Main Dish be in a 25-person potluck?', a: 'Each contributor does NOT need to cook for all 25 people! If each of the 4 main dishes serves 8–10 normal portions, there will be 32–40 total main portions for 25 people.' },
      { q: 'What are great Pakistani potluck Main Dish ideas that travel well?', a: 'Chicken Biryani, Beef/Mutton Pulao, Baked Pasta/Lasagna, Haleem, and Chicken Shashlik stay warm in insulated hot-pots without spilling.' },
      { q: 'What counts as a Side Dish in a Pakistani potluck?', a: 'Dahi Bhallay, Chana Chaat, Russian/Macaroni Salad, Shami Kababs, Spring Rolls, Raita, and Naan/Garlic Bread.' },
      { q: 'How should drinks and disposable plates be assigned?', a: 'Assign 2 or 3 attendees who don’t cook to bring cold drinks, mineral water, ice, disposable plates, spoons, and napkins.' }
    ],
    whoUses: 'Who uses this: HR office culture teams, university student societies, and neighborhood/family coordinators.'
  },
  'cook-sourdough': {
    intro: 'Want to convert your favorite commercial instant/active dry yeast bread, pizza, or Naan recipe to use natural wild-fermented Sourdough Starter (Levain)? Because a 100%-hydration sourdough starter is half flour and half water by weight, you must also adjust the recipe’s dry flour and water.',
    howItWorks: 'One standard 7-gram packet of commercial dry yeast has the leavening equivalent of approximately 100 grams of active, bubbly 100%-hydration sourdough starter (a 14.2× weight factor). Since that starter consists of 50% flour and 50% water, the calculator also tells you how many grams of flour and water to subtract from the main dough. Formula: Starter (g) = Dry Yeast (g) × 14.2; Deduct (Starter / 2) from both Flour and Water.',
    workedExample: 'Replacing 7 grams (1 packet / ~2.25 tsp) of Active Dry Yeast requires 99 grams (~100g) of active Sourdough Starter, while reducing the recipe’s main flour by 50g and water by 50g.',
    faqs: [
      { q: 'Why do I have to subtract 50g of flour and 50g of water from the recipe?', a: 'Because 100g of sourdough starter is made of 50g flour + 50g water! If you don’t subtract them from the recipe, your dough weight and hydration will change.' },
      { q: 'Does sourdough starter rise at the same speed as commercial yeast?', a: 'No, wild sourdough yeast rises roughly 2 to 3 times slower than commercial yeast—expect bulk fermentation to take 4 to 6 hours at room temperature instead of 1 to 1.5 hours.' },
      { q: 'How do I know my sourdough starter is active enough to bake with?', a: 'Feed your starter 4 to 6 hours before mixing dough; when it doubles in height in the jar, is full of domes/bubbles, and passes the "float test" in water, it is at peak strength.' },
      { q: 'Can I make a sourdough starter at home using Pakistani Whole Wheat Chakki Atta?', a: 'Yes! Unbleached Chakki Atta is rich in natural wild yeast and minerals on the wheat bran, making it ferment and bubble much faster than bleached white Maida.' }
    ],
    whoUses: 'Who uses this: Artisan sourdough bread bakers, gut-health enthusiasts, and pizzerias.'
  },
  'cook-pan-volume': {
    intro: 'Before pouring cake batter into a round cake tin, cheesecake springform pan, or deep tier pan, knowing the pan’s exact total volume capacity in Cups prevents oven spills. Remember that cake pans should only be filled 50% to 65% of their rim-full capacity!',
    howItWorks: 'Treating the round baking pan as a cylinder of diameter $D$ (inches) and depth $h$ (inches), the calculator computes total volume in cubic inches ($V = \\pi \\times (D/2)^2 \\times h$) and divides by $14.438$ cubic inches per US Cup. Formula: $\\text{Rim Capacity (Cups)} = [\\pi \\times (D / 2)^2 \\times h] / 14.438$.',
    workedExample: 'A standard 9-inch round cake pan that is 2 inches deep has a total rim-full volume capacity of $(\\pi \\times 4.5^2 \\times 2) / 14.438 \\approx 8.8\\text{ Cups}$ (meaning you should pour 4.5 to 5.5 Cups of cake batter into it).',
    faqs: [
      { q: 'Why shouldn’t I pour 8.8 Cups of batter into a pan with an 8.8-Cup volume capacity?', a: '8.8 Cups fills the pan to the very top rim! As cake batter heats in the oven, leavening gases expand it by 50%–80%, so fill the pan only 1/2 to 2/3 full (4.5 to 5.8 cups of batter).' },
      { q: 'Can I measure my irregular bundt or heart-shaped pan’s cup capacity at home with water?', a: 'Yes! Place the empty pan on the counter and pour water into it using a measuring cup until it is 2/3 full—that exact number of water cups is how much cake batter it takes.' },
      { q: 'What is the difference between a 2-inch deep pan and a 3-inch deep wedding tier pan?', a: 'A 3-inch deep pan holds 50% more volume than a 2-inch pan of the same diameter and requires baking at a slightly lower temperature (160°C–165°C) for 10–15 minutes longer.' },
      { q: 'Why are anodized aluminum cake pans better than dark non-stick pans?', a: 'Light-colored silver aluminum reflects radiant heat evenly for flat, golden cake tops, whereas dark black coatings absorb intense heat and over-brown the edges.' }
    ],
    whoUses: 'Who uses this: Cake designers, home bakers sizing multi-tier wedding/birthday cakes, and bakery students.'
  },
  'cook-cocktail-dilution': {
    intro: 'When shaking or stirring mocktails, iced lemonades, Rooh Afza coolers, espresso tonics, or zero-proof botanical drinks with ice cubes, melting ice is not a mistake—it is a vital ingredient that chills the drink and softens sharp acidity and sweetness. This calculator estimates final drink volume and ice-melt dilution percentage.',
    howItWorks: 'Agitation with ice melts approximately $0.18\\text{ ml}$ of water per second of shaking or stirring as thermal equilibrium is reached. The calculator adds Melt Water ($t \\times 0.18\\text{ ml}$) to your Initial Base Volume (ml) and computes Dilution % as $(\\text{Melt Water} / \\text{Total Final Volume}) \\times 100$. Formula: $\\text{Dilution \\%} = [(t \\times 0.18) / (\\text{Initial ml} + t \\times 0.18)] \\times 100$.',
    workedExample: 'Shaking 60 ml of concentrated syrup/lime base with ice for 15 seconds adds ~2.7 ml of chilled melt water, bringing Total Volume to 62.7 ml (4.3% dilution).',
    faqs: [
      { q: 'Why does shaking with wet, small ice cubes dilute a mocktail much faster than large, freezer-cold cubes?', a: 'Small wet ice cubes have high surface area and liquid water clinging to their outsides, which immediately washes into the drink before cooling even begins.' },
      { q: 'Why does chilling and dilution belong together thermodynamically?', a: 'Under the latent heat of fusion of ice ($334\\text{ J/g}$), there is no chilling without dilution—almost 90% of the cooling power comes from ice phase-changing into liquid water!' },
      { q: 'How long should a Virgin Mojito or Mint Margarita be shaken?', a: '10 to 15 seconds of vigorous shaking with solid ice cubes chills the drink to $-4^\\circ\\text{C}$ to $0^\\circ\\text{C}$.' },
      { q: 'Why do mocktail recipes taste overly sweet and sour before shaking with ice?', a: 'Bar syrups are intentionally balanced at higher concentration so they taste harmonious after ice meltwater dilutes them by 15%–25% in the glass.' }
    ],
    whoUses: 'Who uses this: Café mocktail baristas, beverage R&D formulators, and restaurant drink stations.'
  },
  'cook-french-fry': {
    intro: 'Ever wondered why homemade potato chips (finger chips) turn limp and soggy five minutes after leaving the karahi, whereas restaurant Belgian and fast-food French fries stay shatteringly crisp on the outside and fluffy inside? The secret is a cold-water starch soak followed by the two-stage double-fry method.',
    howItWorks: 'Regardless of batch size (fried in sub-batches so oil temperature doesn’t crash), the calculator outlines the exact thermal two-stage frying schedule: Stage 1 (Blanching) cooks the potato core through at $150^\\circ\\text{C}$ for 6 minutes without browning; Stage 2 (Crisping) flash-fries at $190^\\circ\\text{C}$ for 3 minutes to blister the starch crust golden-brown. Formula: Stage 1 = $150^\\circ\\text{C}$ (6 mins) → Cool → Stage 2 = $190^\\circ\\text{C}$ (3 mins).',
    workedExample: 'For a 1.0 kg batch of peeled, baton-cut potatoes soaked in cold water and dried thoroughly, fry at Stage 1: 150°C (6 mins), rest/cool on a wire rack, then finish at Stage 2: 190°C (3 mins).',
    faqs: [
      { q: 'Which Pakistani potato variety (red-skin vs white-skin Aloo) makes the crispiest French fries?', a: 'Red-skin potatoes (like Cardinal or Asterix grown in Okara/Sahiwal) have higher dry starch and lower sugar/water content than waxy new potatoes, making them far crispier!' },
      { q: 'Why is soaking cut potatoes in cold water with 1 tbsp vinegar for 30 minutes important?', a: 'Soaking washes away excess surface sugars that burn prematurely, while a splash of vinegar keeps the pectin structure firm so fries don’t break during Stage 1.' },
      { q: 'Can I freeze the potatoes after Stage 1 (the 150°C blanch)?', a: 'Yes! Freezing blanched fries on a tray after Stage 1 is how McDonald’s and frozen fry brands make them—freezing ruptures internal starch cells, making Stage 2 even fluffier!' },
      { q: 'Why shouldn’t I dump all 1 kg of potatoes into the Karahi at once?', a: 'Dumping 1 kg of cold potatoes into 1.5L of oil drops the oil temperature to 110°C, causing the fries to soak up grease; fry in 300g–350g batches.' }
    ],
    whoUses: 'Who uses this: Burger/shawarma joint owners, cloud kitchens, and parents making crispy fries at home.'
  },

  // ==========================================
  // STATISTICS & DATA (29 Calculators)
  // ==========================================
  'stats-summary': {
    intro: 'When analyzing student exam scores, monthly shop sales, or laboratory measurements, you need a complete descriptive overview of your dataset in one click. This Statistical Summary calculator computes the Arithmetic Mean, Median, Total Sum, Item Count, Minimum, and Maximum simultaneously.',
    howItWorks: 'The comma-separated numbers are parsed into an array of length $n$. The Mean is the sum divided by $n$. The array is sorted ascending to identify the Minimum, Maximum, and the central Median value (or average of the two middle values if $n$ is even). Formula: $\\text{Mean} = (\\sum x) / n$; $\\text{Median} = \\text{Middle sorted value}$.',
    workedExample: 'For the dataset `12, 18, 22, 25, 30, 42`, there are 6 items with a Sum of 149, a Min of 12, and a Max of 42. The Mean is $149 / 6 = 24.83$ and the Median (average of 22 and 25) is $23.5$.',
    faqs: [
      { q: 'When is the Median a better measure of central tendency than the Mean?', a: 'When your dataset has extreme outliers—such as household incomes in Karachi where one billionaire pulls the Mean up, whereas the Median reflects the typical middle household!' },
      { q: 'How many numbers can I paste into the Data Set box?', a: 'You can paste dozens or hundreds of comma-separated numbers directly from Excel or Google Sheets.' },
      { q: 'What happens if I include negative numbers or decimals?', a: 'Both negative numbers (like winter temperatures in Skardu) and decimal numbers are parsed and sorted with full precision.' },
      { q: 'Why are Mean and Median close together in some datasets and far apart in others?', a: 'In a symmetric bell-shaped distribution, Mean and Median are nearly identical; in a skewed distribution, the Mean is pulled toward the long tail.' }
    ],
    whoUses: 'Who uses this: University students in Introductory Statistics, data analysts, teachers, and quality control engineers.'
  },
  'stats-median': {
    intro: 'The Median is the exact 50th-percentile midpoint of a dataset—half of the observations lie above it and half lie below it. Unlike the arithmetic average, the median is immune to extreme outliers, making it the preferred benchmark for property prices, salaries, and test scores.',
    howItWorks: 'First, the calculator sorts your comma-separated numbers from smallest to largest and displays the sorted array. If the count $n$ is odd, the median is the exact middle number at index $(n-1)/2$; if $n$ is even, it averages the two central numbers. Formula: Odd $n$: $x_{(n+1)/2}$; Even $n$: $(x_{n/2} + x_{(n/2)+1}) / 2$.',
    workedExample: 'Entering the unsorted dataset `5, 2, 9, 1, 7, 6` sorts it into `[1, 2, 5, 6, 7, 9]`. Since there are 6 numbers (even count), the calculator averages the 3rd and 4th values: $(5 + 6) / 2 = 5.5$.',
    faqs: [
      { q: 'Do I need to sort my numbers from smallest to largest before typing them in?', a: 'No! You can type or paste your numbers in any random order and the calculator automatically sorts them and shows the sorted array in the secondary result.' },
      { q: 'What if the two middle numbers in an even dataset are the same (e.g., 6 and 6)?', a: 'The average of 6 and 6 is simply 6.' },
      { q: 'Does changing the highest number from 9 to 9,000 change the Median?', a: 'Not at all! In `[1, 2, 5, 6, 7, 9000]`, the two middle numbers are still 5 and 6, so the Median remains 5.5—showing why the median is "robust" against outliers.' },
      { q: 'Is the Median always equal to the Second Quartile (Q2) and 50th Percentile?', a: 'Yes, Median, Q2, and the 50th Percentile are three names for the exact same statistical midpoint.' }
    ],
    whoUses: 'Who uses this: Economists studying income distribution, real estate analysts, and statistics students.'
  },
  'stats-mode': {
    intro: 'In retail inventory management (such as finding the most popular shoe or kurta size sold at a store in Lahore) or categorical survey analysis, the Mode identifies which value or values occur most frequently in a dataset.',
    howItWorks: 'The calculator builds a frequency hash table counting how many times each distinct number appears in your list. It finds the highest occurrence frequency ($f_{max}$) and returns all values that achieved that peak count. Formula: Mode = Value(s) $x$ with maximum frequency count.',
    workedExample: 'In the dataset `4, 2, 4, 3, 6, 2, 4, 5` (8 items), the number `4` appears 3 times (more than any other value), so the calculator outputs `Mode: 4 (Freq: 3)`.',
    faqs: [
      { q: 'What happens if two different numbers tie for the highest frequency?', a: 'The dataset is "bimodal" (or multimodal), and the calculator lists all tied mode values separated by commas!' },
      { q: 'What if every single number in my list appears only once?', a: 'Every value has a frequency of 1, meaning all values tie with frequency 1 (no single repeating mode).' },
      { q: 'Why is Mode the only average that works for nominal categories or shoe sizes?', a: 'If a shoe store sells sizes 7, 8, 8, 8, and 10, knowing the Mean is 8.2 doesn’t help you stock shelves—knowing the Mode is Size 8 tells you which size sells most!' },
      { q: 'Is the Mode affected by extreme high or low outliers?', a: 'No, like the median, the mode is completely unaffected by extreme values at the ends of the dataset.' }
    ],
    whoUses: 'Who uses this: Retail inventory planners, market researchers, and FSc/BS statistics students.'
  },
  'stats-variance': {
    intro: 'Two cricket batsmen in the PSL can have the exact same batting average of 35.0, yet one scores 33, 35, 37 every match while the other scores 0, 70, 0, 70. Variance measures how far data points are spread out around their mean. This calculator computes both Sample Variance ($s^2$) and Population Variance ($\\sigma^2$).',
    howItWorks: 'The calculator finds the arithmetic mean ($\\bar{x}$), subtracts the mean from each data point, squares each deviation $(x_i - \\bar{x})^2$, and sums those squares. Dividing by $(n - 1)$ yields Sample Variance ($s^2$), while dividing by $n$ yields Population Variance ($\\sigma^2$). Formula: $s^2 = \\sum(x - \\bar{x})^2 / (n - 1)$; $\\sigma^2 = \\sum(x - \\mu)^2 / n$.',
    workedExample: 'For the dataset `2, 4, 6, 8, 10`, the Mean is $6$, and the squared deviations are $16 + 4 + 0 + 4 + 16 = 40$. Dividing 40 by $n - 1 = 4$ gives Sample Variance $s^2 = 10.000$, and dividing by $n = 5$ gives Population Variance $\\sigma^2 = 8.000$.',
    faqs: [
      { q: 'When should I use Sample Variance ($s^2$) vs Population Variance ($\\sigma^2$)?', a: 'In 95% of real-world research, surveys, and lab experiments, your data is a subset (sample) of a larger group, so use Sample Variance ($s^2$). Use Population Variance ($\\sigma^2$) only when you have every single member of the entire population.' },
      { q: 'Why does Sample Variance divide by $(n - 1)$ instead of $n$?', a: 'This is Bessel’s Correction: because a sample’s points cluster slightly closer to the sample mean $\\bar{x}$ than to the true unknown population mean $\\mu$, dividing by $n-1$ removes downward bias.' },
      { q: 'Why are the deviations squared before adding them together?', a: 'If you don’t square $(x_i - \\bar{x})$, positive deviations above the mean and negative deviations below the mean cancel each other out to zero!' },
      { q: 'Can Variance ever be a negative number?', a: 'Never! Because every deviation is squared, variance is always $\\ge 0$ (and equals 0 only when all numbers in the dataset are identical).' }
    ],
    whoUses: 'Who uses this: Quantitative financial analysts, quality assurance engineers, and university statistics students.'
  },
  'stats-stddev': {
    intro: 'Because Variance is expressed in squared units (like $\\text{PKR}^2$ or $\\text{marks}^2$), taking its square root gives the Standard Deviation—bringing the spread metric back into the exact same original units as your data. This calculator outputs both Sample Standard Deviation ($s$) and Population Standard Deviation ($\\sigma$).',
    howItWorks: 'After computing the sum of squared deviations from the mean, the calculator takes the square root of the $(n - 1)$ quotient for Sample SD ($s$) and the square root of the $n$ quotient for Population SD ($\\sigma$). Formula: $s = \\sqrt{\\sum(x - \\bar{x})^2 / (n - 1)}$; $\\sigma = \\sqrt{\\sum(x - \\mu)^2 / n}$.',
    workedExample: 'For the dataset `10, 12, 23, 23, 16, 23, 21, 16` ($n = 8$), the Mean is $18.00$, the Sample Standard Deviation ($s$) is $5.237$, and the Population Standard Deviation ($\\sigma$) is $4.899$.',
    faqs: [
      { q: 'What is the "68–95–99.7 Empirical Rule" for Standard Deviation?', a: 'In a normal bell-shaped distribution, roughly 68% of data falls within $\\pm 1\\text{ SD}$ of the mean, 95% within $\\pm 2\\text{ SD}$, and 99.7% within $\\pm 3\\text{ SD}$.' },
      { q: 'Why is Sample SD ($s$) always slightly larger than Population SD ($\\sigma$)?', a: 'Because dividing by a smaller denominator $(n - 1)$ produces a slightly larger number than dividing by $n$; as sample size $n$ grows past 100, the two values become nearly identical.' },
      { q: 'How do manufacturing factories in Pakistan use Standard Deviation (Six Sigma)?', a: 'When filling 1,000g sugar or cement bags, keeping the weight Standard Deviation tiny ensures bags don’t fall below legal minimum weight.' },
      { q: 'How do I find Variance from the Standard Deviation shown here?', a: 'Simply square the Standard Deviation ($s^2$)—or use our dedicated Variance Calculator.' }
    ],
    whoUses: 'Who uses this: Researchers writing MPhil/PhD theses, SPSS/Excel data analysts, and Six Sigma quality engineers.'
  },
  'stats-zscore': {
    intro: 'Suppose you scored 85 in a Physics exam where the class average was 70 ($\\sigma = 10$), and 80 in a Chemistry exam where the class average was 60 ($\\sigma = 8$). Which performance was actually stronger relative to your peers? The Z-Score (Standard Score) converts any raw value into standard deviations above or below the mean.',
    howItWorks: 'The calculator subtracts the population Mean ($\\mu$) from your observed Value ($x$) and divides the difference by the Standard Deviation ($\\sigma$). Formula: $Z = (x - \\mu) / \\sigma$.',
    workedExample: 'For an exam score of $x = 85$ in a class with a Mean of $\\mu = 70$ and a Standard Deviation of $\\sigma = 10$, the Z-Score is $(85 - 70) / 10 = +1.500$ (1.50 standard deviations above the mean).',
    faqs: [
      { q: 'What does a negative Z-Score (like −1.25) mean?', a: 'A negative Z-score simply means your value $x$ lies below the mean ($\\mu$), whereas a positive Z-score lies above the mean, and $Z = 0$ is exactly equal to the mean.' },
      { q: 'At what Z-Score is a data point considered a statistical outlier?', a: 'Values with $|Z| > 2.0$ lie in the outer 5% tails (unusual), and values with $|Z| > 3.0$ lie in the outer 0.3% (extreme outliers).' },
      { q: 'How do pediatricians in Pakistan use Z-Scores (Weight-for-Age and Height-for-Age)?', a: 'WHO pediatric growth charts classify a child with a Weight-for-Height Z-score below $-2.0$ as wasted (moderately malnourished) and below $-3.0$ as severely malnourished.' },
      { q: 'How can I convert a Z-Score into a Percentile rank?', a: 'On a standard normal distribution table, $Z = 0$ is the 50th percentile, $Z = +1.0$ is the 84.1th percentile, $Z = +1.5$ is the 93.3th percentile, and $Z = +1.96$ is the 97.5th percentile.' }
    ],
    whoUses: 'Who uses this: Public health nutritionists (WHO Z-scores), university exam evaluators, and financial risk analysts.'
  },
  'stats-percentile': {
    intro: 'Whether you are determining the 90th-percentile salary for software engineers in Pakistan to benchmark compensation, or finding the 75th-percentile threshold in a list of entry-test scores, this calculator finds the exact numerical value corresponding to any percentile ($0$ to $100$) in your dataset.',
    howItWorks: 'The dataset is sorted in ascending order from index $0$ to $n - 1$. The calculator computes the exact fractional position index as $(P / 100) \\times (n - 1)$ and applies linear interpolation between the lower and upper bounding values. Formula: $\\text{Index} = (P / 100) \\times (n - 1)$; $\\text{Value} = x_{\\lfloor i \\rfloor} + (x_{\\lceil i \\rceil} - x_{\\lfloor i \\rfloor}) \\times (i - \\lfloor i \\rfloor)$.',
    workedExample: 'In the 8-item dataset `15, 20, 35, 40, 50, 65, 80, 95`, finding the 75th Percentile computes index $0.75 \\times 7 = 5.25$ (interpolating 25% of the way between index 5 value `65` and index 6 value `80`), outputting `75th Percentile = 68.75`.',
    faqs: [
      { q: 'Which percentile corresponds to the Median, First Quartile (Q1), and Third Quartile (Q3)?', a: 'The 25th Percentile is Q1, the 50th Percentile is the Median (Q2), and the 75th Percentile is Q3.' },
      { q: 'Why does this calculator use linear interpolation (like Excel’s `PERCENTILE.INC`)?', a: 'When the target percentile falls between two discrete data points in a small sample, linear interpolation provides a smooth, exact estimate rather than jumping abruptly.' },
      { q: 'How do telecom and web engineers use the 95th or 99th Percentile (p95 / p99)?', a: 'Server response latency is measured at the 95th or 99th percentile so engineers know the worst-case speed experienced by the slowest 1%–5% of user requests.' },
      { q: 'What happens if I enter 0 or 100 as the Percentile?', a: 'Entering 0 returns the Minimum value of the dataset, and entering 100 returns the Maximum value.' }
    ],
    whoUses: 'Who uses this: HR compensation analysts, DevOps engineers tracking p95 latency, and academic statisticians.'
  },
  'stats-iqr': {
    intro: 'When drawing a Box-and-Whisker Plot or analyzing skewed data like property prices or hospital stay durations, the Interquartile Range (IQR) measures the spread of the middle 50% of your data—completely ignoring extreme high and low outliers.',
    howItWorks: 'The calculator sorts the dataset ascending and splits it at the median into a lower half and an upper half. It identifies the First Quartile ($Q_1$, median of the lower half) and Third Quartile ($Q_3$, median of the upper half), then subtracts $Q_1$ from $Q_3$. Formula: $\\text{IQR} = Q_3 - Q_1$.',
    workedExample: 'For the sorted dataset `7, 15, 36, 39, 40, 41`, the lower half is `[7, 15, 36]` ($Q_1 = 15$) and the upper half is `[39, 40, 41]` ($Q_3 = 40$). Subtracting gives $\\text{IQR} = 40 - 15 = 25$.',
    faqs: [
      { q: 'How is the IQR used to detect statistical outliers (Tukey’s Fences)?', a: 'Any data point below $Q_1 - (1.5 \\times \\text{IQR})$ or above $Q_3 + (1.5 \\times \\text{IQR})$ is flagged as a formal outlier on a box plot!' },
      { q: 'Why do I need to enter at least 4 numbers?', a: 'Dividing a dataset into four quarters (quartiles) requires a minimum of 4 data points.' },
      { q: 'Why is IQR preferred over overall Range (Max − Min)?', a: 'A single typo or extreme outlier ruins the overall Range, whereas IQR only looks at the stable middle 50% between the 25th and 75th percentiles.' },
      { q: 'What is the Semi-Interquartile Range (Quartile Deviation)?', a: 'Simply divide the IQR calculated here by 2: $\\text{QD} = (Q_3 - Q_1) / 2$.' }
    ],
    whoUses: 'Who uses this: Biostatisticians, data scientists cleaning outliers, and FSc/BS statistics students.'
  },
  'stats-probability': {
    intro: 'Classical probability measures the likelihood of an event occurring when all outcomes in the sample space are equally likely—from drawing an Ace from a 52-card deck or rolling a die to winning a lucky draw ballot in a housing society.',
    howItWorks: 'The calculator divides the number of Favorable Outcomes ($n(A)$) by the Total Possible Outcomes in the sample space ($n(S)$), displaying the result as a percentage, a fraction, and a 4-decimal probability between 0 and 1. Formula: $P(A) = \\text{Favorable Outcomes} / \\text{Total Possible Outcomes}$.',
    workedExample: 'Drawing one of the 4 Aces from a standard deck of 52 playing cards has a probability of $4 / 52 = 0.0769$, or $7.69\\%$ ($4/52$).',
    faqs: [
      { q: 'How do I find the probability of the event NOT happening $P(A\')$?', a: 'Subtract the decimal probability from $1$ (or subtract the percentage from $100\\%$)—so in the example above, the chance of NOT drawing an Ace is $100\\% - 7.69\\% = 92.31\\%$.' },
      { q: 'What if I apply for 1 plot in a CDA/DHA ballot where 500 plots are balloted among 10,000 applicants?', a: 'Enter Favorable Outcomes = 500 and Total Outcomes = 10000 to see your $5.00\\%$ ($0.0500$) probability of winning a plot!' },
      { q: 'Can a probability ever be greater than 1 (100%) or less than 0?', a: 'Never! A probability of 0 means an impossible event, and a probability of 1 (100%) means a guaranteed certainty.' },
      { q: 'How is "Odds in Favor" different from Probability?', a: 'Probability is $\\text{Favorable} / \\text{Total}$ ($4/52$), whereas Odds in Favor is $\\text{Favorable} : \\text{Unfavorable}$ ($4 : 48$, or $1 : 12$).' }
    ],
    whoUses: 'Who uses this: Mathematics and statistics students, raffle/ballot participants, and risk analysts.'
  },
  'stats-combinatorics-ncr': {
    intro: 'When selecting a 3-member committee from 10 candidates, choosing 5 questions out of 8 on a BISE board exam paper, or picking an 11-player PSL cricket squad from 16 squad members, the order in which you pick them does not matter. The Combinations ($nCr$) calculator counts the exact number of unique groups possible.',
    howItWorks: 'Using factorial notation ($n! = n \\times (n-1) \\times \\dots \\times 1$), the calculator divides $n!$ by the product of $r!$ and $(n - r)!$ so that different orderings of the same group are counted only once. Formula: $_nC_r = \\binom{n}{r} = n! / [r! \\times (n - r)!]$.',
    workedExample: 'Choosing $r = 3$ committee members from a pool of $n = 10$ people where order does not matter gives $10! / (3! \\times 7!) = (10 \\times 9 \\times 8) / (3 \\times 2 \\times 1) = 120$ unique combinations.',
    faqs: [
      { q: 'Why does `10 choose 3` give the exact same answer (120) as `10 choose 7`?', a: 'Because every time you choose 3 items to include, you are simultaneously choosing 7 items to leave behind—so $_nC_r$ always equals $_nC_{n-r}$!' },
      { q: 'What is $0!$ (Zero Factorial) equal to in the formula when $r = 0$ or $r = n$?', a: 'By mathematical definition, $0! = 1$, which is why choosing all $n$ items ($_nC_n$) equals exactly 1 way.' },
      { q: 'When should I use Combinations ($nCr$) vs Permutations ($nPr$)?', a: 'Ask yourself: "Does changing the order create a new outcome?" For a committee or hand of cards, order does NOT matter ($nCr$); for a PIN code or 1st/2nd/3rd race medals, order DOES matter ($nPr$).' },
      { q: 'Where else are $nCr$ numbers used in mathematics?', a: 'They are the exact binomial coefficients in Pascal’s Triangle and the Binomial Theorem $(a + b)^n$ taught in FSc Part-1 Math Chapter 8.' }
    ],
    whoUses: 'Who uses this: FSc/A-Level mathematics students, ECAT/NET test takers, software algorithm designers, and statisticians.'
  },
  'stats-permutations-npr': {
    intro: 'When assigning Gold, Silver, and Bronze medals to 8 finalists in a race, electing a President, Vice President, and Secretary, or generating a non-repeating security passcode, the exact order of arrangement matters. This Permutations ($nPr$) calculator counts all ordered arrangements.',
    howItWorks: 'There are $n$ choices for the 1st position, $(n-1)$ choices for the 2nd position, down to $(n - r + 1)$ choices for the $r$-th position, which mathematically equals $n!$ divided by $(n - r)!$. Formula: $_nP_r = n! / (n - r)!$.',
    workedExample: 'Arranging $r = 3$ podium winners (1st, 2nd, 3rd place) out of $n = 8$ race finalists yields $8! / (8 - 3)! = 8 \\times 7 \\times 6 = 336$ possible ordered permutations.',
    faqs: [
      { q: 'Why is Permutations ($nPr$) always larger than Combinations ($nCr$) for $r \\ge 2$?', a: 'Because $_nP_r = {_nC_r} \\times r!$—every single combination of $r$ items can be rearranged internally in $r!$ different orders!' },
      { q: 'What if I want to arrange all $n$ items in a row (so $r = n$)?', a: 'Enter the same number for both $n$ and $r$ (e.g., $n = 8, r = 8$), which computes $8! / 0! = 40,320$ ways to arrange 8 people in a line.' },
      { q: 'Does this formula allow repeating the same item twice (like a PIN code where digits can repeat)?', a: 'No, $_nP_r$ is for arrangements WITHOUT replacement/repetition; if repetition is allowed (like a 4-digit ATM PIN using digits 0–9), the formula is simply $n^r = 10^4 = 10,000$.' },
      { q: 'What is the maximum number $n$ I should enter before factorials overflow?', a: 'Standard 64-bit numbers handle factorials accurately up to $n = 170$ ($170! \\approx 7.26 \\times 10^{306}$).' }
    ],
    whoUses: 'Who uses this: Mathematics students, cryptography and cybersecurity analysts, and tournament schedulers.'
  },
  'stats-confidence-interval': {
    intro: 'When a medical researcher in Pakistan measures average blood pressure in a sample of $n = 30$ patients, the sample mean ($\\bar{x}$) is only a point estimate of the true population mean ($\\mu$). A Confidence Interval gives the exact lower and upper bounds within which the true population mean lies at 90%, 95%, or 99% confidence.',
    howItWorks: 'The calculator computes the Standard Error of the Mean ($SE = s / \\sqrt{n}$), multiplies it by the critical normal Z-value ($1.645$ for 90%, $1.960$ for 95%, or $2.576$ for 99%) to find the Margin of Error ($ME$), and adds/subtracts $ME$ from the Sample Mean. Formula: $\\text{CI} = \\bar{x} \\pm Z_{\\alpha/2} \\times (s / \\sqrt{n})$.',
    workedExample: 'For a Sample Mean of $\\bar{x} = 100$, a Standard Deviation of $s = 15$, and a Sample Size of $n = 30$ at the standard 95% Confidence Level ($z = 1.960$), the Margin of Error is $\\pm 5.37$, giving a Confidence Interval of `94.63 to 105.37`.',
    faqs: [
      { q: 'Why does increasing the Confidence Level from 95% to 99% make the interval wider?', a: 'To be 99% certain instead of 95% certain that you have captured the true population mean, you must cast a wider net ($z = 2.576$ vs $z = 1.960$).' },
      { q: 'How can I cut my Margin of Error in half?', a: 'Because $\\sqrt{n}$ is in the denominator of Standard Error, you must quadruple ($4\\times$) your sample size $n$ (from 30 to 120) to cut the Margin of Error in half!' },
      { q: 'Why is 95% Confidence ($z = 1.96$) the universal standard in medical and social science journals?', a: 'A 95% confidence interval corresponds directly to the $\\alpha = 0.05$ ($p < 0.05$) significance threshold used across scientific peer review.' },
      { q: 'When is the Z-interval exact vs when is a t-table used?', a: 'For sample sizes $n \\ge 30$, the Central Limit Theorem makes the Z-distribution an excellent approximation; for tiny samples ($n < 15$) with unknown $\\sigma$, a Student’s $t$ critical value is slightly wider.' }
    ],
    whoUses: 'Who uses this: FCPS/MPhil/PhD medical and social science researchers, clinical trial analysts, and pollsters.'
  },
  'stats-sample-size': {
    intro: 'Before printing questionnaires or launching a Google Form survey for your university thesis, market research study, or hospital audit, your supervisor will ask: "How did you justify your sample size $n$?" This calculator applies Cochran’s formula with finite population correction to find the exact minimum respondents required.',
    howItWorks: 'Using a 95% confidence level ($Z = 1.96$) and maximum conservative variability ($p = 0.5$), the calculator computes the finite-population corrected sample size for your Population Size ($N$) and desired Margin of Error ($e = \\text{Margin\\%} / 100$). Formula: $n = [Z^2 p(1-p) N] / [e^2(N - 1) + Z^2 p(1-p)]$.',
    workedExample: 'Surveying a university or city target population of $N = 10,000$ people with a standard $5\\%$ Margin of Error at 95% confidence requires a minimum of `Required Sample Size: 370` completed responses.',
    faqs: [
      { q: 'Why does a population of 100,000 or 240,000,000 (all of Pakistan) only require ~384 respondents at a 5% margin of error?', a: 'Once population $N$ exceeds 20,000, Cochran’s formula converges to its asymptote of $384.16$—just as tasting one spoonful of soup tests the seasoning whether the pot holds 2 liters or 200 liters!' },
      { q: 'Why is $p = 0.5$ (50%) used in the formula?', a: 'Because $p(1 - p)$ reaches its maximum possible product ($0.25$) at $p = 0.5$, guaranteeing your sample size is large enough regardless of the actual survey split.' },
      { q: 'What happens if I tighten the Margin of Error from 5% to 1%?', a: 'Reducing the error margin by $5\\times$ requires roughly $25\\times$ more respondents (for $N = 10,000$ at 1% margin, required sample size jumps to 4,899).' },
      { q: 'Should I distribute more questionnaires than the Required Sample Size?', a: 'Yes! If you need 370 completed responses and expect a 50% response rate, send out at least 740 surveys.' }
    ],
    whoUses: 'Who uses this: BBA/MBA/MPhil thesis students, Gallup/Ipsos survey designers, and hospital clinical audit teams.'
  },
  'stats-geometric-mean': {
    intro: 'When averaging multi-year investment returns, inflation rates, bacterial population growth, or ratios spanning several orders of magnitude, the ordinary arithmetic mean overstates the true compound rate. The Geometric Mean calculates the exact $n$-th root of the product of your values.',
    howItWorks: 'The calculator multiplies all $n$ positive numbers in your comma-separated dataset together to find their cumulative product, then raises that product to the fractional power of $1/n$. Formula: $\\text{GM} = (x_1 \\times x_2 \\times \\dots \\times x_n)^{1/n}$.',
    workedExample: 'For the dataset `2, 8, 32` ($n = 3$), the product is $2 \\times 8 \\times 32 = 512$. Taking the cube root ($512^{1/3}$) yields `Geometric Mean: 8.000` (whereas the arithmetic mean would be 14.0).',
    faqs: [
      { q: 'How do I use the Geometric Mean to average percentage investment returns (like +50% in Year 1 and −50% in Year 2)?', a: 'Convert percentages into growth factors ($1 + r$): $+50\\%$ is `1.50` and $-50\\%$ is `0.50`. Their geometric mean is $\\sqrt{1.5 \\times 0.5} = 0.866$ ($-13.4\\%/\\text{year}$), whereas the arithmetic average falsely claims $0\\%$!' },
      { q: 'Why must all numbers entered into the Geometric Mean calculator be positive ($> 0$)?', a: 'If any number is 0, the entire product becomes 0; and negative numbers can require even roots of negative products, which are imaginary numbers.' },
      { q: 'Is the Geometric Mean always less than or equal to the Arithmetic Mean?', a: 'Yes! By the famous AM–GM Inequality, $\\text{GM} \\le \\text{AM}$ always, with equality holding only when all numbers in the list are identical.' },
      { q: 'Where does the UN use the Geometric Mean?', a: 'The United Nations Human Development Index (HDI) uses the geometric mean of Health, Education, and Income indices so a poor score in one pillar cannot be masked linearly by another.' }
    ],
    whoUses: 'Who uses this: Portfolio managers, economists computing CPI/HDI indices, microbiologists, and statistics students.'
  },
  'stats-harmonic-mean': {
    intro: 'If you drive from Lahore to Gujranwala at 30 km/h in heavy traffic and drive back the exact same distance at 60 km/h on a clear road, your average speed is NOT 45 km/h—it is 40 km/h! Whenever you average rates (km/h, Price-to-Earnings P/E ratios, or parallel resistances) over equal distances or weights, you must use the Harmonic Mean.',
    howItWorks: 'The calculator takes the reciprocal ($1/x_i$) of each positive number in your list, sums those reciprocals together, and divides the total count $n$ by that sum of reciprocals. Formula: $\\text{HM} = n / \\sum(1 / x_i)$.',
    workedExample: 'For three speed segments of `10, 20, 60` km/h over equal distances, the sum of reciprocals is $1/10 + 1/20 + 1/60 = 0.1667$. Dividing $n = 3$ by $0.1667$ gives `Harmonic Mean: 18.000`.',
    faqs: [
      { q: 'Why does the Harmonic Mean give the exact average speed for a round trip?', a: 'Because you spend more time driving at the slower speed (10 km/h) than at the faster speed (60 km/h); the Harmonic Mean automatically weights each speed by the time spent!' },
      { q: 'How does the Harmonic Mean compare in size to the Arithmetic Mean (AM) and Geometric Mean (GM)?', a: 'For any set of positive numbers, the strict inequality $\\text{HM} \\le \\text{GM} \\le \\text{AM}$ always holds.' },
      { q: 'Why do stock market analysts on the PSX use Harmonic Mean for portfolio P/E (Price-to-Earnings) ratios?', a: 'Averaging P/E ratios across an equal-weighted portfolio requires averaging Earnings Yield ($E/P$, the reciprocal) first—which is the Harmonic Mean.' },
      { q: 'How is the F1-Score in machine learning related to the Harmonic Mean?', a: 'The F1-Score is literally the Harmonic Mean of Precision and Recall!' }
    ],
    whoUses: 'Who uses this: Data scientists (F1-score), equity research analysts, physics students, and statisticians.'
  },
  'stats-coef-variation': {
    intro: 'How do you compare the volatility of a stock trading at PKR 500 with a standard deviation of PKR 25 against a penny stock trading at PKR 20 with a standard deviation of PKR 4? Or compare variability in height (cm) against variability in weight (kg)? The Coefficient of Variation (CV) expresses standard deviation as a unitless percentage of the mean.',
    howItWorks: 'The calculator divides the Standard Deviation ($\\sigma$ or $s$) by the absolute value of the Mean ($|\\mu|$ or $|\\bar{x}|$) and multiplies by 100 to output a dimensionless percentage. Formula: $\\text{CV (\\%)} = (\\text{Standard Deviation} / |\\text{Mean}|) \\times 100$.',
    workedExample: 'A dataset with a Standard Deviation of $12$ and a Mean of $60$ has a Coefficient of Variation of $(12 / 60) \\times 100 = 20.00\\%$.',
    faqs: [
      { q: 'Does a lower CV% or higher CV% indicate more consistent data?', a: 'A lower CV% indicates higher consistency and lower relative dispersion around the mean; a high CV% (>30%) indicates high volatility or scatter.' },
      { q: 'Why can’t I compare two Standard Deviations directly without dividing by the Mean?', a: 'Because a standard deviation of 10 PKR is huge on a 20 PKR item (50% CV), but tiny on a 10,000 PKR item (0.1% CV).' },
      { q: 'How is CV used in clinical pathology laboratories in Pakistan?', a: 'Hospital lab analyzers run daily quality control sera and require the assay Coefficient of Variation (CV%) to stay below 2%–5% for diagnostic precision.' },
      { q: 'How do agricultural scientists at Ayub Research or UAF Faisalabad use CV%?', a: 'Field crop trials (wheat, cotton, rice yield plots) report CV% in ANOVA tables to verify that experimental plot error was within acceptable biological limits (<15%).' }
    ],
    whoUses: 'Who uses this: Agronomists, clinical lab quality managers, financial risk analysts, and biostatisticians.'
  },
  'stats-expected-value': {
    intro: 'In probability theory, actuarial insurance pricing, and business decision trees, the Expected Value $E(X)$ is the long-run probability-weighted average outcome of a random variable over repeated trials.',
    howItWorks: 'Each possible numeric outcome $x_i$ in the first comma-separated list is multiplied by its corresponding probability $P(x_i)$ in the second list, and all products are summed together. Formula: $E(X) = \\sum [x_i \\times P(x_i)]$.',
    workedExample: 'For three payoff outcomes of `10, 50, 100` (in thousands of PKR) with respective probabilities of `0.5, 0.3, 0.2`, the Expected Value is $(10 \\times 0.5) + (50 \\times 0.3) + (100 \\times 0.2) = 5 + 15 + 20 = 40.000$.',
    faqs: [
      { q: 'Should the list of probabilities always add up to 1.0 (100%)?', a: 'Yes, for a valid discrete probability distribution covering all mutually exclusive outcomes, $\\sum P(x_i)$ must equal $1.0$.' },
      { q: 'Can Expected Value be a number that isn’t one of the actual outcomes (like 3.5 on a 6-sided die)?', a: 'Yes! Rolling a fair die (`1, 2, 3, 4, 5, 6` each with probability `0.1667`) has $E(X) = 3.5$—you never roll a 3.5 on a single throw, but over 1,000 throws your average score converges to 3.5.' },
      { q: 'Can I enter negative values in the Values list to represent financial losses?', a: 'Absolutely—entering `-100` for a loss outcome with probability `0.1` properly subtracts $-10$ from the expected value.' },
      { q: 'How do insurance / Takaful actuaries use Expected Value?', a: 'If the probability of a car claim in a year is $0.02$ and average claim payout is PKR 1,000,000, the pure expected risk cost per policy is $1,000,000 \\times 0.02 = \\text{PKR } 20,000$.' }
    ],
    whoUses: 'Who uses this: Insurance actuaries, business strategists evaluating project risk, and probability students.'
  },
  'stats-mad': {
    intro: 'While Standard Deviation squares deviations from the mean (which heavily magnifies outliers), the Mean Absolute Deviation (MAD) simply takes the absolute distance $|x_i - \\bar{x}|$ of each point from the mean and averages them—providing a clean, intuitive measure of average error or spread.',
    howItWorks: 'First, the calculator computes the arithmetic mean ($\\bar{x}$) of the dataset. Next, it calculates the absolute distance $|x_i - \\bar{x}|$ for each number (ignoring plus/minus signs), sums those absolute distances, and divides by total count $n$. Formula: $\\text{MAD} = \\sum |x_i - \\bar{x}| / n$.',
    workedExample: 'For the dataset `2, 3, 6, 8, 11`, the Mean is $6.00$. The absolute distances from $6$ are $|2-6|=4$, $|3-6|=3$, $|6-6|=0$, $|8-6|=2$, and $|11-6|=5$. Their average is $(4+3+0+2+5) / 5 = 2.800$.',
    faqs: [
      { q: 'Why is MAD easier to explain to non-statisticians than Standard Deviation?', a: 'Because MAD literally answers "On average, how far off is a typical data point from the mean?" without any squaring or square-rooting distortion.' },
      { q: 'Which is larger for the same dataset: MAD or Standard Deviation?', a: 'By the Cauchy-Schwarz inequality, MAD is always less than or equal to the Population Standard Deviation ($\\text{MAD} \\le \\sigma$). For a normal distribution, $\\text{MAD} \\approx 0.7979 \\times \\sigma$.' },
      { q: 'How do supply chain planners use MAD in inventory safety-stock formulas?', a: 'Warehouse managers track the MAD of monthly demand forecasts to size buffer stock (where $1.25 \\times \\text{MAD} \\approx 1\\text{ Standard Deviation}$ of forecast error).' },
      { q: 'Can MAD ever be negative?', a: 'No, because absolute value bars $|x - \\bar{x}|$ make every distance zero or positive.' }
    ],
    whoUses: 'Who uses this: Supply chain demand planners, FSc/O-Level statistics students, and financial forecasters.'
  },
  'stats-range-iqr': {
    intro: 'The Range is the quickest measure of total spread in any dataset—telling you the exact span between the single lowest observation (Minimum) and the single highest observation (Maximum), such as the temperature swing between the coldest night and hottest afternoon of the month.',
    howItWorks: 'The calculator scans your comma-separated dataset to identify the Minimum value and Maximum value, then subtracts Minimum from Maximum. Formula: $\\text{Range} = \\text{Maximum Value} - \\text{Minimum Value}$.',
    workedExample: 'In the dataset `14, 22, 9, 45, 31`, the Minimum is `9` and the Maximum is `45`, yielding `Range = 36 (Min: 9, Max: 45)`.',
    faqs: [
      { q: 'What happens if my dataset contains negative numbers (like `-5, 2, 10`)?', a: 'Subtracting a negative Minimum adds its magnitude: $10 - (-5) = 15$, which is the true 15-unit span from $-5$ to $+10$.' },
      { q: 'What is the "Coefficient of Range" taught in Pakistani B.Com and FSc Statistics?', a: 'The Coefficient of Range is $(Max - Min) / (Max + Min)$—so for Min 9 and Max 45, it is $(45 - 9) / (45 + 9) = 36 / 54 = 0.667$.' },
      { q: 'Where are Range (R-Charts) used in factory quality control?', a: 'Statistical Process Control (SPC) uses X-bar and R (Range) charts on factory lines because operators can calculate the Range of 5 sample parts in seconds.' },
      { q: 'What is the main limitation of the Range?', a: 'It uses only the 2 extreme endpoints and ignores all the data points in between; if you have outliers, pair it with the IQR Calculator.' }
    ],
    whoUses: 'Who uses this: Factory SPC operators, meteorologists, teachers checking exam mark spreads, and students.'
  },
  'stats-linear-regression': {
    intro: 'Simple Linear Regression fits the optimal straight trendline ($y = mx + b$) through paired $(X, Y)$ data points—letting you predict how a dependent variable $Y$ (like monthly sales or crop yield) changes as an independent variable $X$ (like ad spend or fertilizer dose) increases.',
    howItWorks: 'Using the Ordinary Least Squares (OLS) method that minimizes the sum of squared vertical residuals, the calculator computes the Slope ($m$) and Y-Intercept ($b$) from $\\sum X, \\sum Y, \\sum XY$, and $\\sum X^2$. Formula: $m = [n\\sum XY - \\sum X \\sum Y] / [n\\sum X^2 - (\\sum X)^2]$; $b = (\\sum Y - m\\sum X) / n$.',
    workedExample: 'For paired values $X = \\text{1, 2, 3, 4, 5}$ and $Y = \\text{2, 4, 5, 4, 7}$, the least-squares line of best fit is `y = 1.00x + 1.40` (with Slope $m = 1.000$ and Intercept $b = 1.400$).',
    faqs: [
      { q: 'How do I use the regression equation `y = 1.00x + 1.40` to predict $Y$ for a future $X = 10$?', a: 'Plug $x = 10$ into the equation: $y = 1.00(10) + 1.40 = 11.40$!' },
      { q: 'What does the Slope ($m$) represent physically?', a: 'The slope $m$ tells you how much $Y$ changes on average for every $+1$ unit increase in $X$ (if $m$ is negative, $Y$ decreases as $X$ increases).' },
      { q: 'What does the Y-Intercept ($b$) represent?', a: 'The intercept $b$ is the baseline predicted value of $Y$ when $X = 0$.' },
      { q: 'Why does the line of best fit always pass through the point $(\\bar{x}, \\bar{y})$?', a: 'It is a mathematical property of Ordinary Least Squares regression that the trendline pivots directly through the mean of $X$ and the mean of $Y$.' }
    ],
    whoUses: 'Who uses this: Econometrics students, sales forecasters, engineering lab students plotting calibration curves, and researchers.'
  },
  'stats-correlation-coef': {
    intro: 'Before running a regression or claiming that study hours drive higher GPA, you need to measure the strength and direction of the linear relationship between two variables $X$ and $Y$. Karl Pearson’s Correlation Coefficient ($r$) ranges from $-1.0$ (perfect negative) through $0$ (no linear link) to $+1.0$ (perfect positive).',
    howItWorks: 'The calculator computes the sample covariance between $X$ and $Y$ and divides it by the product of their individual standard deviations, automatically classifying $|r| > 0.7$ as Strong, $0.3 < |r| \\le 0.7$ as Moderate, and $|r| \\le 0.3$ as Weak. Formula: $r = [n\\sum XY - \\sum X \\sum Y] / \\sqrt{[n\\sum X^2 - (\\sum X)^2][n\\sum Y^2 - (\\sum Y)^2]}$.',
    workedExample: 'For $X = \\text{1, 2, 3, 4, 5}$ and $Y = \\text{2, 3, 5, 6, 8}$, the calculator outputs `Correlation r = 0.993` (`Strength: Strong linear relation`).',
    faqs: [
      { q: 'What is the Coefficient of Determination ($R^2$) and how do I get it from $r$?', a: 'Simply square the Pearson $r$ value! For $r = 0.993$, $R^2 = 0.993^2 = 0.986$—meaning $98.6\\%$ of the variance in $Y$ is explained linearly by $X$.' },
      { q: 'Does a strong correlation ($r = 0.95$) prove that $X$ causes $Y$?', a: 'No! "Correlation does not imply causation"—for example, ice cream sales and AC electricity bills in Lahore have a high positive $r$ because both are driven by a third confounding variable: summer heat!' },
      { q: 'What does a negative correlation (like $r = -0.85$) mean?', a: 'It indicates a strong inverse relationship: as $X$ increases, $Y$ reliably decreases (for example, as altitude in northern Pakistan increases, ambient air temperature decreases).' },
      { q: 'Does changing the units of $X$ (e.g., from Rupees to Dollars or cm to inches) change $r$?', a: 'No, Pearson’s $r$ is completely scale-invariant and unitless.' }
    ],
    whoUses: 'Who uses this: Psychology and social science researchers, quantitative finance analysts, and data scientists.'
  },
  'stats-relative-risk': {
    intro: 'In medical epidemiology, FCPS community medicine, and clinical trials, researchers analyze $2 \\times 2$ contingency tables comparing an Exposed group against an Unexposed control group. This calculator computes both Relative Risk (RR, used in cohort studies) and the Odds Ratio (OR, used in case-control studies).',
    howItWorks: 'Given $a$ (Exposed & Diseased), $b$ (Exposed & Healthy), $c$ (Unexposed & Diseased), and $d$ (Unexposed & Healthy), incidence risk in the exposed group is $a/(a+b)$ and in the unexposed group is $c/(c+d)$. Relative Risk divides the two risks, while Odds Ratio computes $(a \\times d) / (b \\times c)$. Formula: $\\text{RR} = [a/(a+b)] / [c/(c+d)]$; $\\text{OR} = (a \\times d) / (b \\times c)$.',
    workedExample: 'In a study where 30 of 100 smokers ($a=30, b=70$) develop chronic bronchitis compared to 10 of 100 non-smokers ($c=10, d=90$), the incidence is $30\\%$ vs $10\\%$, yielding `Relative Risk (RR) = 3.000` and `Odds Ratio (OR) = 3.857`.',
    faqs: [
      { q: 'How do I interpret a Relative Risk (RR) of 1.0 vs > 1.0 vs < 1.0?', a: '$\\text{RR} = 1.0$ means no association between exposure and disease; $\\text{RR} > 1.0$ means the exposure is a risk factor (3× higher risk at RR = 3.0); and $\\text{RR} < 1.0$ means the exposure is protective (like a vaccine)!' },
      { q: 'When should I report Odds Ratio (OR) instead of Relative Risk (RR)?', a: 'In a retrospective Case-Control study (where you start by selecting already-diseased hospital patients and healthy controls), you cannot calculate true population incidence, so you must report the Odds Ratio.' },
      { q: 'When does the Odds Ratio closely approximate the Relative Risk?', a: 'Under the "Rare Disease Assumption": when disease prevalence in the population is low (< 5%–10%), $\\text{OR}$ and $\\text{RR}$ are almost identical.' },
      { q: 'Why is this calculator a favorite for FCPS Part-1 and USMLE Step 1 biostatistics prep?', a: 'Because $2 \\times 2$ table RR and OR calculations appear on almost every medical licensing examination!' }
    ],
    whoUses: 'Who uses this: Doctors preparing for FCPS/USMLE/PLAB exams, public health epidemiologists, and clinical researchers.'
  },
  'stats-root-mean-square': {
    intro: 'When data values fluctuate between positive and negative numbers—such as alternating current (AC) voltage sine waves, acoustic sound pressure waves, or prediction errors—the ordinary arithmetic mean cancels out near zero. The Root Mean Square (RMS, or quadratic mean) measures the true effective magnitude.',
    howItWorks: 'Every number in your comma-separated dataset is squared ($x_i^2$, making all negative values positive). The calculator takes the arithmetic mean of those squares and extracts the positive square root. Formula: $\\text{RMS} = \\sqrt{(\\sum x_i^2) / n}$.',
    workedExample: 'For the dataset `3, -5, 7, -2, 8` ($n = 5$), the squares are $9 + 25 + 49 + 4 + 64 = 151$. Dividing 151 by 5 gives $30.2$, and taking the square root yields `RMS = 5.495`.',
    faqs: [
      { q: 'Why is Pakistan’s household AC electricity called "230V RMS"?', a: 'An AC wall socket alternates between $+325\\text{V}$ and $-325\\text{V}$ fifty times a second (its arithmetic mean is 0V!); its Root Mean Square is $230\\text{V}$, which delivers the exact same heating power as $230\\text{V}$ steady DC.' },
      { q: 'How is Root Mean Square Error (RMSE) in machine learning related to this calculator?', a: 'If you enter your model’s prediction residuals ($\\text{Actual} - \\text{Predicted}$) into the Data Set box, the RMS output is your exact RMSE!' },
      { q: 'Where is RMS speed ($v_{rms}$) used in Physics and Chemistry?', a: 'In the Kinetic Theory of Gases, the root-mean-square speed of gas molecules is $v_{rms} = \\sqrt{3RT / M}$.' },
      { q: 'Is the RMS always greater than or equal to the Arithmetic Mean?', a: 'Yes, by the QM–AM–GM–HM inequality, the Quadratic Mean (RMS) is always the largest of the four classical means.' }
    ],
    whoUses: 'Who uses this: Electrical engineers, machine learning engineers computing RMSE, and physics students.'
  },
  'stats-pooling-variance': {
    intro: 'When performing an independent two-sample Student’s t-test (such as comparing exam marks of Group A vs Group B under the assumption of equal population variances), you must combine their two sample variances into a single weighted Pooled Variance ($s_p^2$).',
    howItWorks: 'Each sample’s variance ($s_1^2$ and $s_2^2$) is weighted by its respective degrees of freedom ($n_1 - 1$ and $n_2 - 1$), summed together, and divided by total combined degrees of freedom ($df = n_1 + n_2 - 2$). Formula: $s_p^2 = [(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2] / (n_1 + n_2 - 2)$.',
    workedExample: 'Combining Sample 1 ($n_1 = 15$, variance $s_1^2 = 12.5$) and Sample 2 ($n_2 = 20$, variance $s_2^2 = 15.0$) gives $[(14 \\times 12.5) + (19 \\times 15.0)] / 33 = 460 / 33$, outputting `Pooled Variance (sp²) = 13.939` with `Degrees of Freedom (df) = 33`.',
    faqs: [
      { q: 'Why is Pooled Variance closer to Sample 2’s variance (15.0) than Sample 1’s variance (12.5)?', a: 'Because Sample 2 has a larger sample size ($n_2 = 20$ vs $n_1 = 15$), so it carries more weight in the weighted average!' },
      { q: 'What if both samples have the exact same sample size ($n_1 = n_2$)?', a: 'When $n_1 = n_2$, the pooled variance is simply the exact midpoint (simple average) of $s_1^2$ and $s_2^2$.' },
      { q: 'How do I get the Pooled Standard Deviation ($s_p$) for my t-test denominator?', a: 'Simply take the square root of the Pooled Variance—in the example above, $\\sqrt{13.939} = 3.734$.' },
      { q: 'Why do we subtract 2 in the denominator ($n_1 + n_2 - 2$)?', a: 'We lose 1 degree of freedom estimating the sample mean $\\bar{x}_1$ and 1 degree of freedom estimating $\\bar{x}_2$, leaving $n_1 + n_2 - 2$ total degrees of freedom.' }
    ],
    whoUses: 'Who uses this: University students solving two-sample t-test problems, biostatisticians, and thesis researchers.'
  },
  'stats-mape': {
    intro: 'Supply chain managers, retail demand forecasters, and financial analysts need a scale-independent percentage metric to judge how accurate their sales or demand forecasts were against actual numbers. Mean Absolute Percentage Error (MAPE) computes your average percentage forecasting error.',
    howItWorks: 'For each paired time period $i$, the calculator computes the absolute percentage error $|(\\text{Actual}_i - \\text{Forecast}_i) / \\text{Actual}_i|$, sums them across all valid periods, divides by $n$, and multiplies by 100. Formula: $\\text{MAPE} = (100\\% / n) \\times \\sum |(\\text{Actual} - \\text{Forecast}) / \\text{Actual}|$.',
    workedExample: 'Comparing Actual monthly sales `100, 150, 200, 250` against Forecast values `110, 140, 210, 240` gives individual percentage errors of $10\\%, 6.67\\%, 5\\%$, and $4\\%$. Averaging them yields `MAPE = 6.42%` (meaning the forecast is $93.58\\%$ accurate on average!).',
    faqs: [
      { q: 'What is considered a "good" MAPE score in business forecasting?', a: 'Under Lewis’s industry benchmark scale, $\\text{MAPE} < 10\\%$ is Highly Accurate, $10\\%–20\\%$ is Good, $20\\%–50\\%$ is Reasonable, and $> 50\\%$ is Inaccurate.' },
      { q: 'Why cannot Actual values be zero (0) when calculating MAPE?', a: 'Because Actual sits in the denominator ($|\\text{Actual} - \\text{Forecast}| / \\text{Actual}$); dividing by zero is undefined, so the calculator safely skips zero-actual periods.' },
      { q: 'How do I calculate Forecast Accuracy % from MAPE?', a: 'Subtract MAPE from $100\\%$: $\\text{Forecast Accuracy} = 100\\% - \\text{MAPE}$ (so $100\\% - 6.42\\% = 93.58\\%$ accuracy).' },
      { q: 'Does MAPE penalize over-forecasting more than under-forecasting?', a: 'Yes, because under-forecasting is capped at a 100% error (when Forecast = 0), whereas over-forecasting has no upper percentage cap.' }
    ],
    whoUses: 'Who uses this: Demand planners at FMCG companies in Pakistan, inventory analysts, and data scientists.'
  },
  'stats-spearman': {
    intro: 'When two variables have a monotonic relationship that is curved rather than strictly linear, or when your data is already recorded as ordinal ranks (such as judging rankings in a competition or Likert-scale survey ranks), Spearman’s Rank Correlation Coefficient ($\\rho$, rho) measures rank agreement from $-1$ to $+1$.',
    howItWorks: 'For each paired observation $i$, the calculator finds the difference between the X-rank and Y-rank ($d_i = x_i - y_i$), squares each rank difference ($d_i^2$), sums $\\sum d_i^2$, and applies Spearman’s rank formula. Formula: $\\rho = 1 - [6 \\sum d_i^2 / (n(n^2 - 1))]$.',
    workedExample: 'For five contestants ranked by Judge X as `1, 2, 3, 4, 5` and by Judge Y as `2, 1, 4, 3, 5`, the squared rank differences are $1 + 1 + 1 + 1 + 0 = 4$. Computing $1 - (6 \\times 4) / (5 \\times 24)$ yields `Spearman ρ = 0.800` (strong positive rank agreement).',
    faqs: [
      { q: 'When should I use Spearman’s $\\rho$ instead of Pearson’s $r$?', a: 'Use Spearman’s $\\rho$ when your data contains extreme outliers, is skewed/non-normal, is measured on an ordinal rank scale (1st, 2nd, 3rd), or follows a curved monotonic trend.' },
      { q: 'What does $\\rho = +1.000$ vs $\\rho = -1.000$ mean?', a: '$\\rho = +1.000$ means every single item has the exact same rank in both lists ($\\sum d^2 = 0$); $\\rho = -1.000$ means the rankings are in exact reverse order.' },
      { q: 'How do I rank raw scores if my data isn’t ranked yet?', a: 'Assign Rank 1 to the highest (or lowest) value, Rank 2 to the next, and so on; if two items tie for 2nd and 3rd place, assign both the average rank of $2.5$.' },
      { q: 'Is Spearman’s rho a non-parametric statistical test?', a: 'Yes, it is the direct non-parametric rank equivalent of Pearson’s correlation coefficient.' }
    ],
    whoUses: 'Who uses this: Social science thesis students using SPSS, market researchers, and biostatisticians.'
  },
  'stats-poisson': {
    intro: 'The Poisson Distribution models the probability of a specific number of independent events ($k$) occurring within a fixed interval of time or space when you know the average rate ($\\lambda$, lambda)—such as patients arriving at a hospital ER per hour, calls hitting a helpline per minute, or defects per 100 meters of fabric in a Faisalabad textile mill.',
    howItWorks: 'Using Euler’s constant $e \\approx 2.71828$, the calculator raises the Expected Mean Rate ($\\lambda$) to the power $k$, multiplies by $e^{-\\lambda}$, and divides by $k$ factorial ($k!$). Formula: $P(X = k) = (\\lambda^k \\cdot e^{-\\lambda}) / k!$.',
    workedExample: 'If a bank ATM or customer service desk receives an average rate of $\\lambda = 3.0$ customers every 10 minutes, the probability of seeing exactly $k = 2$ customers arrive in the next 10-minute window is $(3^2 \\times e^{-3}) / 2! = 0.22404$, or `P(X = 2) = 22.404%`.',
    faqs: [
      { q: 'Can the Expected Rate ($\\lambda$) be a decimal while Exact Occurrences ($k$) must be a whole integer?', a: 'Yes! An average rate $\\lambda$ can be any positive decimal (like $2.4$ accidents per week), whereas actual observed occurrences $k$ in a single period is always a non-negative integer ($0, 1, 2, 3\\dots$).' },
      { q: 'What are the Mean and Variance of a Poisson distribution?', a: 'Uniquely in statistics, both the Mean ($\\mu$) and the Variance ($\\sigma^2$) of a Poisson distribution are equal to $\\lambda$!' },
      { q: 'How do I find the probability of zero events occurring ($k = 0$)?', a: 'Enter `0` in the Exact Occurrences ($k$) box—since $\\lambda^0 = 1$ and $0! = 1$, $P(X = 0)$ simplifies to $e^{-\\lambda}$ (for $\\lambda = 3$, $P(X = 0) = 4.979\\%$).' },
      { q: 'How do I adjust $\\lambda$ if my time window doubles (e.g., from 10 minutes to 20 minutes)?', a: 'Scale $\\lambda$ proportionally with the time interval: if $\\lambda = 3$ per 10 minutes, then $\\lambda = 6$ per 20 minutes.' }
    ],
    whoUses: 'Who uses this: Operations research analysts, call center staffing planners, textile QC engineers, and statistics students.'
  },
  'stats-binomial': {
    intro: 'When an experiment consists of $n$ independent Yes/No (Success/Failure) Bernoulli trials—each having the same probability of success $p$, such as flipping a coin 50 times, guessing on 50 MCQs, or inspecting 50 manufactured bulbs for defects—the Binomial Distribution gives the exact expected mean, variance, and standard deviation.',
    howItWorks: 'For a Binomial distribution $B(n, p)$, the expected average number of successes is $n \\times p$, the variance is $n \\times p \\times (1 - p)$ (often written $npq$ where $q = 1 - p$), and the standard deviation is the square root of the variance. Formula: $\\text{Mean } (\\mu) = np$; $\\text{Variance } (\\sigma^2) = np(1 - p)$; $\\text{SD } (\\sigma) = \\sqrt{np(1 - p)}$.',
    workedExample: 'Across $n = 50$ independent trials where the probability of success on each trial is $p = 0.4$ ($40\\%$), the expected result is `Mean (μ) = 20.00 | Variance (σ²) = 12.00` with a `Standard Deviation (σ) = 3.46`.',
    faqs: [
      { q: 'Why is the Binomial distribution formula so much faster than calculating $E(X) = \\sum x P(x)$ across 50 terms?', a: 'Because independent Bernoulli trials are additive, $np$ and $np(1-p)$ give the exact algebraic result instantaneously without summing 51 factorial terms!' },
      { q: 'What is the expected mean score if a student guesses blindly on a 100-question 4-option MCQ test?', a: 'Enter $n = 100$ and $p = 0.25$ (1 in 4 chance): the expected Mean is $25.00$ correct answers with a Standard Deviation of $4.33$!' },
      { q: 'At what probability $p$ is Binomial Variance at its maximum for a fixed $n$?', a: 'When $p = 0.5$ (a 50/50 coin toss), where $p(1-p) = 0.25$ is largest; as $p$ approaches $0$ or $1$, outcome uncertainty and variance shrink toward zero.' },
      { q: 'When can a Binomial distribution be approximated by a Normal bell curve?', a: 'When both $np \\ge 5$ (or $10$) and $n(1-p) \\ge 5$ (or $10$), the Binomial histogram looks almost indistinguishable from a Normal curve with $\\mu = np$ and $\\sigma = \\sqrt{npq}$.' }
    ],
    whoUses: 'Who uses this: FSc/BS statistics students, clinical trial biostatisticians, and quality control inspectors.'
  },
  'stats-kurtosis-skew': {
    intro: 'Not all datasets follow a symmetric bell curve. Income data and property prices usually have a long tail stretching to the right (Positive / Right-Skewed), while an easy exam where most students score 85%–95% has a tail stretching to the left (Negative / Left-Skewed). This calculator computes Karl Pearson’s Second Skewness Coefficient from the Mean, Median, and Standard Deviation.',
    howItWorks: 'Because the Mean is pulled toward the long tail of a skewed distribution while the Median stays anchored in the middle, the gap $(\\text{Mean} - \\text{Median})$ reveals both the direction and magnitude of asymmetry. Multiplying that gap by 3 and dividing by Standard Deviation ($s$) normalizes the skewness score between $-3$ and $+3$. Formula: $\\text{Skewness } (Sk_2) = 3 \\times (\\text{Mean} - \\text{Median}) / \\text{Standard Deviation}$.',
    workedExample: 'For a distribution with a Mean of $50$, a Median of $48$, and a Standard Deviation of $10$, the coefficient is $3 \\times (50 - 48) / 10 = +0.600$, classified as `Right-Skewed (Positive)`.',
    faqs: [
      { q: 'How do I tell immediately if a distribution is Right-Skewed vs Left-Skewed from Mean and Median?', a: 'If $\\text{Mean} > \\text{Median}$, the long tail is on the right (Right-Skewed / Positive); if $\\text{Mean} < \\text{Median}$, the long tail is on the left (Left-Skewed / Negative); if $\\text{Mean} = \\text{Median}$, Skewness is $0$ (Symmetric).' },
      { q: 'What range of skewness values is considered "Approximately Symmetric"?', a: 'Values between $-0.2$ and $+0.2$ (or within $\\pm 0.5$ in broad social science norms) indicate a nearly symmetric distribution suitable for parametric tests.' },
      { q: 'Why does the formula multiply $(\\text{Mean} - \\text{Median})$ by 3?', a: 'In moderately skewed distributions, the empirical relationship $\\text{Mean} - \\text{Mode} \\approx 3(\\text{Mean} - \\text{Median})$ holds, so multiplying by 3 aligns it with Pearson’s First Skewness Coefficient.' },
      { q: 'What should I do in statistical analysis if my data is heavily Right-Skewed?', a: 'Report the Median and IQR instead of Mean and SD, or apply a logarithmic transformation ($\\log(x)$) to normalize the right tail.' }
    ],
    whoUses: 'Who uses this: Economists, MPhil/PhD researchers checking normality assumptions, and statistics students.'
  }
};
