import { SITE_NAME } from '../config/site';

export interface CookingCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const cookingSeoFullMap: Record<string, CookingCalculatorSeoEntry> = {
  'recipe-scaler': {
    seoTitle: `Free Recipe Scaler Calculator – Resize Servings & Portions | ${SITE_NAME}`,
    metaDescription:
      'Scale recipe ingredients up or down cleanly for any crowd size using original and target servings with our free Recipe Scaler Calculator.',
    howToUseSteps: [
      'Type the base yield printed on your recipe card into Original Servings.',
      'Enter how many plates you plan to cook inside Target Servings.',
      'Input one ingredient amount inside Ingredient Quantity to see its adjusted measurement.',
    ],
    formulaExplanation:
      'Proportional recipe scaling divides your target serving count by the original recipe yield to establish a multiplier, then scales each ingredient quantity identically so flavor balance stays unchanged. Formula: Scaled Quantity = (Ingredient Quantity / Original Servings) × Target Servings.',
    practicalExample:
      'Multiplying a curry spice measure of Ingredient Quantity = 2 tablespoons from Original Servings = 4 up to Target Servings = 12 gives (2 / 4) × 12 = 6.00 units.',
    faqs: [
      {
        q: 'Do baking spices and salt scale linearly when tripling Original Servings?',
        a: 'Base flour, rice, meat, and broth scale straight linearly, whereas chili powder, salt, and baking soda often taste cleaner scaled at ~85% and adjusted to taste.',
      },
      {
        q: 'Can I shrink a 12-person dawat recipe down to 2 servings?',
        a: 'Yes—enter 12 in Original Servings and 2 in Target Servings to reduce every ingredient to one-sixth.',
      },
      {
        q: 'Why must Original Servings exceed zero?',
        a: 'Dividing an ingredient measure by zero servings is undefined and cannot produce a scale factor.',
      },
    ],
  },

  'cooking-measurement-conv': {
    seoTitle: `Free Cooking Measurement Converter Calculator – Cups, tbsp & ml | ${SITE_NAME}`,
    metaDescription:
      'Convert kitchen amounts instantly across cups, tablespoons, teaspoons, ml, and fluid ounces using our free Cooking Measurement Converter Calculator.',
    howToUseSteps: [
      'Enter the numeric measure printed in your recipe into Amount Value.',
      'Select your starting measure from From Unit (Cups, Tablespoons, Teaspoons, Milliliters, or Fluid Ounces).',
      'Read converted outputs across ml, cups, tbsp, tsp, and fl oz simultaneously.',
    ],
    formulaExplanation:
      'Culinary metric volume standardization pegs 1 standard cup at 240 ml, 1 tablespoon at 15 ml, 1 teaspoon at 5 ml, and 1 US fluid ounce at 29.5735 ml so wet and dry volume units convert accurately across international recipes. Formula: Milliliters = Amount Value × Unit Factor; Cups = Milliliters / 240.',
    practicalExample:
      'Converting Amount Value = 1 with From Unit = Cups yields 240.0 ml (1.00 cups), equal to 16.0 tbsp, 48.0 tsp, and 8.12 fl oz.',
    faqs: [
      {
        q: 'How many teaspoons equal one standard tablespoon in baking?',
        a: 'One culinary tablespoon (15 ml) holds exactly 3 level teaspoons (5 ml each).',
      },
      {
        q: 'Are measuring cups identical to coffee mugs?',
        a: 'No—household tea mugs range from 180 ml to 350 ml, whereas standardized metric measuring cups equal 240 ml.',
      },
      {
        q: 'Can ml values convert gram weights directly for flour?',
        a: 'Milliliters measure liquid volume rather than mass—water weighs 1 g/ml, while sifted flour weighs roughly 125 g per 240 ml cup.',
      },
    ],
  },

  'oven-temp-conv': {
    seoTitle: `Free Oven Temperature Converter Calculator – °F, °C & Gas Mark | ${SITE_NAME}`,
    metaDescription:
      'Translate baking oven dials between Fahrenheit (°F), Celsius (°C), and UK Gas Mark settings with our free Oven Temperature Converter Calculator.',
    howToUseSteps: [
      'Type your recipe’s baking heat inside Temperature Value.',
      'Pick Fahrenheit (°F), Celsius (°C), or Gas Mark in the From Unit menu.',
      'Check equivalent °F, °C, and approximate Gas Mark dial settings immediately.',
    ],
    formulaExplanation:
      'Oven temperature scaling connects Fahrenheit and Celsius via the classic 9/5 ratio offset by 32°, while British Gas Mark steps start at 275°F (Gas Mark 1) and climb 25°F per integer step. Formula: °F = (°C × 9/5) + 32; Gas Mark ≈ [(°F − 275) / 25] + 1.',
    practicalExample:
      'Entering Temperature Value = 350 with From Unit = Fahrenheit (°F) converts to 176.7 °C and Approximate Gas Mark: ~4.',
    faqs: [
      {
        q: 'How should I adjust 176.7 °C if my electric oven uses a convection fan?',
        a: 'Convection fan ovens circulate hot air faster, so reduce conventional static recipes by roughly 15°C–20°C (25°F) or shorten baking time slightly.',
      },
      {
        q: 'What °C setting corresponds to Gas Mark 6 on older Pakistani gas ranges?',
        a: 'Entering 6 under Gas Mark converts to 400 °F / 204.4 °C for crisp roasting and puff pastry.',
      },
      {
        q: 'Should you always preheat before putting cakes inside?',
        a: 'Yes—wait 10–15 minutes until your oven reaches target °C/°F so baking powder rises evenly from the first minute.',
      },
    ],
  },

  'meat-cooking-time': {
    seoTitle: `Free Meat Cooking Time Calculator – Roasting Hours by kg | ${SITE_NAME}`,
    metaDescription:
      'Estimate oven roasting hours and minutes for chicken, beef, lamb, or pork based on weight in kg using our free Meat Cooking Time Calculator.',
    howToUseSteps: [
      'Pick Whole Chicken / Turkey, Beef Roast, Lamb Leg / Roast, or Pork Roast inside Meat Type.',
      'Enter trimmed raw cut mass in kilograms into Weight (kg).',
      'Read total oven roasting duration alongside per-kilo and base cooking minutes.',
    ],
    formulaExplanation:
      'Roasting duration adds a base pre-heat penetration buffer (20–30 minutes) onto weight-scaled oven minutes per kilogram (40 mins/kg for chicken, 45 for beef, 50 for lamb, and 55 for pork). Formula: Total Cooking Minutes = (Weight kg × Mins per kg) + Base Time.',
    practicalExample:
      'Roasting a Meat Type = Whole Chicken / Turkey weighing Weight (kg) = 2.0 calculates (2.0 × 40) + 20 = 100 minutes, or 1 hrs 40 mins.',
    faqs: [
      {
        q: 'Why does a bone-in mutton or lamb leg take longer per kg than chicken?',
        a: 'Denser muscle fibers and thick leg cuts take 50 minutes per kg plus 20 base minutes to reach tender doneness throughout.',
      },
      {
        q: 'Should meat rest after leaving the oven at 1 hrs 40 mins?',
        a: 'Yes—tent roasted meat loosely in foil for 10–15 minutes so internal juices redistribute before carving.',
      },
      {
        q: 'Is an instant-read thermometer safer than timing alone?',
        a: 'Always verify safe internal doneness (74°C for poultry, 63°C+ for roasts) because oven calibration and cold fridge start temperatures vary.',
      },
    ],
  },

  'rice-water-ratio': {
    seoTitle: `Free Rice and Water Ratio Calculator – Basmati, Brown & Sella | ${SITE_NAME}`,
    metaDescription:
      'Measure exact water cups and cook times for Basmati, White, Brown, and Sella rice using our free Rice and Water Ratio Calculator.',
    howToUseSteps: [
      'Choose your grain variety inside Rice Type (Basmati, White/Jasmine, Brown, or Sella/Parboiled).',
      'Enter dry rice volume into Rice Quantity (Cups).',
      'Check exact water cups needed and recommended simmering minutes.',
    ],
    formulaExplanation:
      'Different rice starch coats absorb distinct water multiples: aged Basmati needs 1 : 1.5, standard White/Jasmine and parboiled Sella require 1 : 2.0, and fibrous unmilled Brown rice requires 1 : 2.25. Formula: Water Cups = Rice Quantity (Cups) × Variety Water Ratio.',
    practicalExample:
      'Cooking Rice Quantity (Cups) = 2 of Rice Type = Basmati Rice (1 : 1.5 ratio) requires 2 × 1.5 = 3.00 Cups of Water for ~15 minutes simmering.',
    faqs: [
      {
        q: 'Does soaking Basmati rice for 30 minutes change Water Cups needed?',
        a: 'Pre-soaking hydrates grains ahead of boiling, so stick strictly to the 1 : 1.5 ratio (or slightly under) to prevent mushy biryani rice.',
      },
      {
        q: 'Why does Brown Rice require 40 minutes and 2.25 cups water per cup?',
        a: 'Intact outer bran layers slow water penetration, demanding extra liquid and longer gentle simmering to tenderize.',
      },
      {
        q: 'Should the pot lid stay tightly sealed during steam absorption?',
        a: 'Keep the lid tight on low flame until simmering finishes—lifting early vents steam and dries out top grains.',
      },
    ],
  },

  'food-cost-serving': {
    seoTitle: `Free Food Cost per Serving Calculator – Recipe Plate PKR | ${SITE_NAME}`,
    metaDescription:
      'Divide total recipe ingredient expenses in PKR across finished portions to price meals accurately using our free Food Cost per Serving Calculator.',
    howToUseSteps: [
      'Sum meat, produce, oil, and spice costs in rupees inside Total Ingredients Cost (PKR).',
      'Type finished plate count into Number of Servings.',
      'Check exact rupee food cost per single serving.',
    ],
    formulaExplanation:
      'Home caterers, cloud kitchens, and meal planners calculate unit dish cost by dividing aggregate raw ingredient expenditure in PKR by yield portions plated. Formula: Cost per Serving (PKR) = Total Ingredients Cost (PKR) / Number of Servings.',
    practicalExample:
      'Cooking a family karahi with Total Ingredients Cost (PKR) = 1800 yielding Number of Servings = 6 costs 1,800 / 6 = PKR 300.00 / serving.',
    faqs: [
      {
        q: 'How should home-based food businesses set menu price from PKR 300.00 / serving?',
        a: 'Restaurants typically target a 28%–35% food-cost ratio—so multiplying PKR 300 ingredient cost by ~3× (PKR 900) covers gas, packaging, delivery commissions, and profit.',
      },
      {
        q: 'Should cooking oil, foil, and takeaway boxes go inside Total Ingredients Cost (PKR)?',
        a: 'Include measurable cooking oil, butter, and disposable containers so per-plate food costing reflects real cash outlay.',
      },
      {
        q: 'What if Number of Servings is set below 1?',
        a: 'The calculator enforces a floor of 1 serving so division stays valid.',
      },
    ],
  },

  'party-food-qty': {
    seoTitle: `Free Party Food Quantity Calculator – Dawat Meat, Rice & Drinks | ${SITE_NAME}`,
    metaDescription:
      'Estimate kg of meat, rice, and beverage liters for dawat dinners, high tea, or BBQ gatherings using our free Party Food Quantity Calculator.',
    howToUseSteps: [
      'Type confirmed headcount inside Number of Guests.',
      'Select Full Dinner Buffet (Biryani/Karahi), High Tea / Snacks, or BBQ Party under Event Type.',
      'Review estimated kilograms of meat and rice plus beverage liters.',
    ],
    formulaExplanation:
      'Catering quantity planning scales per-guest portions by menu style: full dinner buffets budget 0.25 kg meat, 0.15 kg rice, and 0.4 L drinks per guest; BBQ events raise meat to 0.35 kg/guest; high tea budgets 0.15 kg savory/meat and 0.5 L beverages. Formula: Ingredient Total = Number of Guests × Event Per-Guest Factor.',
    practicalExample:
      'Hosting Number of Guests = 30 for Event Type = Full Dinner Buffet (Biryani/Karahi) estimates Meat: ~7.5 kg, Rice: ~4.5 kg, and Beverages: ~12.0 Liters.',
    faqs: [
      {
        q: 'Why does BBQ Party allocate 0.35 kg meat per guest compared with 0.25 kg for Dinner Buffet?',
        a: 'Without heavy rice dishes on the table, guests eat larger portions of tikka, seekh kabab, and boti, plus bone-in BBQ trims shrink during grilling.',
      },
      {
        q: 'Is 4.5 kg rice measured uncooked raw weight before boiling?',
        a: 'Yes—catering guidelines measure dry uncooked Basmati rice (4.5 kg dry cooks up to roughly 12+ kg steamed biryani).',
      },
      {
        q: 'Should I round up quantities when half the Number of Guests are teenagers or athletes?',
        a: 'Add 10%–15% buffer guests in Number of Guests when hosting hungry youth groups to prevent running short.',
      },
    ],
  },

  'tea-coffee-cups': {
    seoTitle: `Free Tea and Coffee Cups Calculator – Group Chai Milk & Water | ${SITE_NAME}`,
    metaDescription:
      'Calculate exact ml of milk, water, and spoons of tea leaves or coffee for group servings using our free Tea and Coffee Cups Calculator.',
    howToUseSteps: [
      'Enter how many guests want a hot drink inside Number of People.',
      'Pick Pakistani Milk Tea (Chai), Black Tea, or Coffee (Milk) under Beverage Type.',
      'Read total water ml, milk ml, and sugar/tea spoon counts for the pot.',
    ],
    formulaExplanation:
      'Batch brewing scales single-cup liquid ratios by guest count: Pakistani Chai uses equal 120 ml milk and 120 ml water per cup, Black Tea uses 220 ml water with zero milk, and Milky Coffee uses 180 ml milk with 50 ml water, paired with 1.5 tablespoons dry tea/sugar mix per cup. Formula: Total Liquid (ml) = Number of People × Per-Cup ml.',
    practicalExample:
      'Brewing Beverage Type = Pakistani Milk Tea (Chai) for Number of People = 10 calls for Water: 1200 ml, Milk: 1200 ml, and ~15 tablespoons of combined tea leaves and sugar.',
    faqs: [
      {
        q: 'Why does Pakistani Chai use 120 ml water plus 120 ml milk for a standard cup?',
        a: 'Roughly 20%–25% of water evaporates while simmering tea leaves before milk joins the pot, leaving rich full-bodied cups.',
      },
      {
        q: 'How should sugar be separated from the ~15 tablespoons estimate?',
        a: 'Use roughly 1 heaped teaspoon of strong CTC tea dust plus 1–1.5 teaspoons sugar per cup depending on guests’ sweetness preference.',
      },
      {
        q: 'How many liters of boxed milk should I buy for 10 cups of Milk Coffee?',
        a: 'Switching Beverage Type to Coffee (Milk) uses 180 ml × 10 = 1,800 ml (nearly two 1-liter packs).',
      },
    ],
  },

  'baking-pan-conv': {
    seoTitle: `Free Baking Pan Size Converter Calculator – Batter Multiplier | ${SITE_NAME}`,
    metaDescription:
      'Scale cake or brownie batter volume accurately when swapping between baking pan areas with our free Baking Pan Size Converter Calculator.',
    howToUseSteps: [
      'Enter area in square inches of the pan listed in your recipe inside Original Pan Area (sq in).',
      'Type area of your own baking dish into Target Pan Area (sq in).',
      'Input recipe batter volume in Original Batter (Cups) to see adjusted cups and scale factor.',
    ],
    formulaExplanation:
      'Keeping cake layer thickness identical across different pan shapes requires matching pan surface area ratio: divide target pan square inches by original pan square inches and multiply original batter cups by that factor. Formula: Target Batter (Cups) = Original Batter × (Target Pan Area / Original Pan Area).',
    practicalExample:
      'Moving a recipe from Original Pan Area (sq in) = 50 (e.g., 8-inch round) to Target Pan Area (sq in) = 78 (e.g., 10-inch round) with Original Batter (Cups) = 4 requires a 1.56x multiplier, or 6.24 Cups Batter Needed.',
    faqs: [
      {
        q: 'How do I calculate Original Pan Area (sq in) for round versus square cake tins?',
        a: 'Multiply side × side for square/rectangular pans (8×8 = 64 sq in), or use π × r² for round tins (an 8-inch round has radius 4, so 3.14 × 16 ≈ 50 sq in).',
      },
      {
        q: 'What happens if I pour 4 cups of batter into a larger 78 sq in pan without scaling?',
        a: 'The batter spreads thinner and bakes into a flatter layer that dries out faster unless you shorten oven time.',
      },
      {
        q: 'How should baking time change when Target Pan Area is 1.56x bigger?',
        a: 'Larger pans with matching batter depth take slightly longer for heat to set the center—check doneness with a toothpick 5 minutes past original time.',
      },
    ],
  },

  'baking-powder-yeast': {
    seoTitle: `Free Baking Powder to Yeast Converter Calculator – Leaveners | ${SITE_NAME}`,
    metaDescription:
      'Convert baking powder teaspoons into equivalent active dry yeast amounts for doughs using our free Baking Powder to Yeast Converter.',
    howToUseSteps: [
      'Type your recipe’s chemical leavener teaspoons into Baking Powder (Teaspoons).',
      'Check equivalent active dry yeast teaspoons immediately.',
    ],
    formulaExplanation:
      'Replacing double-acting baking powder with biological active dry yeast uses a 3:4 volumetric conversion ratio because yeast multiplies carbon dioxide bubbles over proofing time rather than reacting instantly in the oven. Formula: Active Dry Yeast (tsp) = Baking Powder (Teaspoons) × 0.75.',
    practicalExample:
      'Substituting Baking Powder (Teaspoons) = 2 calculates 2 × 0.75 = 1.50 tsp Active Dry Yeast.',
    faqs: [
      {
        q: 'Can you bake dough immediately after swapping Baking Powder for Active Dry Yeast?',
        a: 'No—yeast needs warm liquid (~40°C) to bloom and 45–90 minutes of dough rising time before baking, whereas baking powder goes straight into the oven.',
      },
      {
        q: 'Which recipes tolerate Baking Powder to Yeast swaps best?',
        a: 'Naan flatbreads, pizza crusts, scones, and dinner rolls adapt smoothly; delicate sponge cakes rely on baking powder’s light crumb.',
      },
      {
        q: 'How many grams equal 1.50 tsp Active Dry Yeast?',
        a: 'One teaspoon of active dry yeast weighs roughly 3 grams, making 1.50 tsp about 4.5 grams.',
      },
    ],
  },

  'sugar-honey-sub': {
    seoTitle: `Free Sugar to Honey Converter Calculator – Baking Cups Swap | ${SITE_NAME}`,
    metaDescription:
      'Substitute liquid honey for granulated white sugar cups cleanly while adjusting oven rules with our free Sugar to Honey Converter Calculator.',
    howToUseSteps: [
      'Enter white sugar volume in cups inside Sugar Amount (Cups).',
      'Read equivalent honey cups and baking adjustment tips.',
    ],
    formulaExplanation:
      'Honey tastes sweeter per spoonful than sucrose and adds roughly 18% water weight; therefore bakers use three-quarters the volume of honey for each cup of white sugar while cutting recipe liquids and lowering oven heat slightly to prevent over-browning. Formula: Honey (Cups) = Sugar Amount (Cups) × 0.75.',
    practicalExample:
      'Replacing Sugar Amount (Cups) = 1 of granulated sugar calls for 1 × 0.75 = 0.75 Cups Honey.',
    faqs: [
      {
        q: 'Why must oven temperature drop by 15°F when swapping Sugar for Honey?',
        a: 'Fructose sugars inside natural honey caramelize at lower temperatures than refined cane sugar, browning cake edges quickly.',
      },
      {
        q: 'How much milk or water should be removed from batter per cup of Honey?',
        a: 'Reduce other recipe liquids by about 1/4 cup (60 ml) for every cup of honey added so cakes stay structured rather than soggy.',
      },
      {
        q: 'Should you grease measuring cups before pouring sticky Honey?',
        a: 'Lightly wiping the cup with neutral cooking oil lets all 0.75 Cups Honey slide cleanly into your mixing bowl.',
      },
    ],
  },

  'pasta-portion-calc': {
    seoTitle: `Free Pasta & Spaghetti Portion Calculator – Dry Grams & Water | ${SITE_NAME}`,
    metaDescription:
      'Measure exact dry pasta grams and salted boiling water liters for main or side dishes using our free Pasta & Spaghetti Portion Calculator.',
    howToUseSteps: [
      'Type dining headcount into Number of People.',
      'Choose Main Course (85g - 100g / person) or Side Dish (50g / person) under Pasta Dish Type.',
      'Inspect total dry pasta weight in grams and recommended pot water in liters.',
    ],
    formulaExplanation:
      'Italian culinary portioning budgets 95 g dry pasta per adult main course or 50 g per side dish, paired with 1 liter of salted rolling boiling water per 100 g dry pasta so starch disperses without clumping. Formula: Dry Pasta (g) = Number of People × Grams per Person; Water (L) = (Dry Pasta / 1,000) × 10.',
    practicalExample:
      'Preparing Pasta Dish Type = Main Course for Number of People = 4 requires 4 × 95 = 380 grams Dry Pasta boiled in ~3.8 Liters of salted water.',
    faqs: [
      {
        q: 'Why does pasta double in weight after boiling?',
        a: 'Dry durum semolina pasta absorbs water during simmering, turning 380 grams dry into roughly 760–850 grams cooked pasta.',
      },
      {
        q: 'Does spaghetti use the same 95 g per person guideline as penne or fusilli?',
        a: 'Yes—dry weight by grams remains identical across shapes, even though measuring dry penne in cups appears bulkier than long spaghetti.',
      },
      {
        q: 'Why boil 380 grams in nearly 3.8 Liters of water instead of a tiny pot?',
        a: 'Ample water keeps temperature from crashing when cold pasta drops in and dilutes surface starch so noodles don’t stick.',
      },
    ],
  },

  'pizza-dough-calc': {
    seoTitle: `Free Pizza Dough Hydration Calculator – Flour, Water & Yeast | ${SITE_NAME}`,
    metaDescription:
      'Compute exact baker’s percentage gram weights for water, salt, and yeast from flour grams and hydration % using our free Pizza Dough Hydration Calculator.',
    howToUseSteps: [
      'Enter base white or 00 flour weight in grams inside Flour Weight (grams).',
      'Type desired dough wetness percentage into Hydration Target (%) (e.g., 60%–70%).',
      'Read exact gram measurements for water, salt, yeast, and total dough mass.',
    ],
    formulaExplanation:
      'Professional pizza dough relies on baker’s percentages anchored to total flour weight (100%): water equals Flour × Hydration %, fine salt equals 2.5%, and instant/dry yeast equals 0.5%. Formula: Water (g) = Flour × (Hydration % / 100); Salt = Flour × 0.025; Yeast = Flour × 0.005.',
    practicalExample:
      'Mixing Flour Weight (grams) = 500 at Hydration Target (%) = 60 yields Water: 300.0g, Salt: 12.5g, Yeast: 2.5g, and 815g Total Dough.',
    faqs: [
      {
        q: 'What Hydration Target (%) works best for crisp home-oven pan pizza versus Neapolitan?',
        a: '60%–63% hydration kneads cleanly by hand for crisp home pans, whereas 68%–72% gives airy Neapolitan blisters at very high oven heat.',
      },
      {
        q: 'How many medium 12-inch pizza balls come from 815g Total Dough?',
        a: 'Dividing 815g by 270g per dough ball produces 3 classic medium thin-crust pizzas.',
      },
      {
        q: 'Should Salt: 12.5g touch dry Yeast: 2.5g directly before mixing?',
        a: 'Whisk salt into dry flour first before adding bloomed yeast water so concentrated salt doesn’t dehydrate yeast cells.',
      },
    ],
  },

  'coffee-brew-ratio': {
    seoTitle: `Free Coffee Brew Ratio Calculator – Grams Grounds to ml Water | ${SITE_NAME}`,
    metaDescription:
      'Dial in pour-over, French Press, or drip coffee weight in grams from ml water and brew ratio using our free Coffee Brew Ratio Calculator.',
    howToUseSteps: [
      'Type desired brewing water in milliliters inside Water Volume (ml).',
      'Enter extraction strength denominator into Brew Ratio (1 : X) (commonly 15 or 16).',
      'Weigh the calculated grams of freshly ground coffee.',
    ],
    formulaExplanation:
      'Specialty coffee brewing standardizes extraction strength using a 1 : X mass ratio (taking 1 ml water as 1 gram); dividing total brewing water milliliters by X delivers exact coffee bean grams. Formula: Coffee Grounds (g) = Water Volume (ml) / Brew Ratio X.',
    practicalExample:
      'Brewing Water Volume (ml) = 500 at a balanced Brew Ratio (1 : X) = 15 calls for 500 / 15 = 33.3 grams Coffee Grounds.',
    faqs: [
      {
        q: 'How does changing Brew Ratio (1 : X) from 15 to 17 alter cup flavor?',
        a: 'A tighter 1:14 or 1:15 ratio brews a bold, syrupy mug, whereas 1:17 yields a lighter, brighter filter cup.',
      },
      {
        q: 'How many level tablespoons equal 33.3 grams Coffee Grounds without a scale?',
        a: 'One level tablespoon of medium-ground coffee weighs ~5–6 grams, so 33 grams is roughly 6 tablespoons.',
      },
      {
        q: 'Does French Press keep all 500 ml in your cup?',
        a: 'Coffee grounds retain roughly twice their dry weight in water (~65 ml here), yielding ~435 ml of poured coffee.',
      },
    ],
  },

  'spice-blend-ratio': {
    seoTitle: `Free Spice Blend Ratio Calculator – Homemade Masala Grams | ${SITE_NAME}`,
    metaDescription:
      'Proportion cumin, coriander, red chili, turmeric, and garam masala by gram weight for any batch size using our free Spice Blend Ratio Calculator.',
    howToUseSteps: [
      'Enter desired total jar batch size in grams inside Total Batch Weight (grams).',
      'Inspect individual spice weights across cumin, coriander, chili, turmeric, and garam masala.',
    ],
    formulaExplanation:
      'Balanced Pakistani/South Asian curry masala blends partition total batch weight across five foundational aromatics: 30% cumin, 30% coriander, 20% red chili, 10% turmeric, and 10% whole garam masala spices. Formula: Spice Component (g) = Total Batch Weight × Component Percentage.',
    practicalExample:
      'Preparing Total Batch Weight (grams) = 100 yields Cumin: 30.0g, Coriander: 30.0g, Chili: 20.0g, Turmeric: 10.0g, and Garam Masala: 10.0g.',
    faqs: [
      {
        q: 'Should whole cumin and coriander seeds be toasted before grinding?',
        a: 'Dry-roasting whole seeds in a skillet for 2 minutes until fragrant unlocks essential oils before milling into masala powder.',
      },
      {
        q: 'Can I swap half the red chili for Kashmiri chili to control heat?',
        a: 'Yes—keeping total Chili at 20.0g while mixing Kashmiri chili gives vibrant red curry color with mild heat.',
      },
      {
        q: 'How long does a 100g homemade masala batch stay aromatic?',
        a: 'Stored in an airtight glass jar away from stove steam, freshly ground blends stay vibrant for 3–4 months.',
      },
    ],
  },

  'deep-fry-oil-calc': {
    seoTitle: `Free Deep Fry Oil Amount Calculator – Liters by Pot Size | ${SITE_NAME}`,
    metaDescription:
      'Calculate exact cooking oil liters needed to fill any round karahi or frying pot to desired depth using our free Deep Fry Oil Amount Calculator.',
    howToUseSteps: [
      'Measure inside cooking diameter across your pan and enter it into Pot Diameter (cm).',
      'Type desired oil level height into Desired Oil Depth (cm).',
      'Check exact liters of cooking oil or ghee needed without overfilling.',
    ],
    formulaExplanation:
      'Round frying pots and flat-bottomed pans hold oil in a cylindrical volume: compute circular radius (half diameter), square it, multiply by π and oil depth in cubic centimeters, and divide by 1,000 for liters. Formula: Oil Volume (Liters) = [π × (Pot Diameter / 2)² × Desired Oil Depth] / 1,000.',
    practicalExample:
      'Filling a pot with Pot Diameter (cm) = 24 to Desired Oil Depth (cm) = 5 requires [π × 12² × 5] / 1,000 = 2.26 Liters of Oil.',
    faqs: [
      {
        q: 'Why leave at least 5–8 cm of dry pot wall above Desired Oil Depth (cm)?',
        a: 'Dropping cold fries, samosas, or pakoras releases steam bubbles that raise oil height rapidly—headspace prevents dangerous boil-overs.',
      },
      {
        q: 'Does a curved wok or deep karahi use less oil than 2.26 Liters?',
        a: 'Yes—rounded bottom woks narrow at the base, typically needing 25%–35% less oil than straight-walled cylinders of equal top diameter.',
      },
      {
        q: 'How deep should oil sit for crisp homemade samosas or chicken tenders?',
        a: 'Shallow-frying needs 2–3 cm, whereas true submerged deep-frying generally calls for 5–7 cm oil depth.',
      },
    ],
  },

  'slow-cooker-conv': {
    seoTitle: `Free Oven to Slow Cooker Time Converter Calculator – Low/High Hrs | ${SITE_NAME}`,
    metaDescription:
      'Translate conventional oven roasting hours into Low or High crockpot slow-cooker times using our free Oven to Slow Cooker Time Converter Calculator.',
    howToUseSteps: [
      'Type standard oven baking or braising hours inside Conventional Oven Time (Hours).',
      'Pick Low Setting (Multiply by 2) or High Setting (Multiply by 1.5) in Slow Cooker Setting.',
      'Check total slow cooker hours required.',
    ],
    formulaExplanation:
      'Slow cookers simmer gently near 90°C–100°C inside sealed stoneware rather than 175°C+ dry oven heat, roughly doubling cooking hours on Low (2×) or multiplying by 1.5× on High. Formula: Slow Cooker Time (Hours) = Conventional Oven Time × Setting Multiplier.',
    practicalExample:
      'Adapting a beef nihari or roast with Conventional Oven Time (Hours) = 2 onto Slow Cooker Setting = Low Setting (Multiply by 2) runs ~4.0 Hours in Slow Cooker.',
    faqs: [
      {
        q: 'Should liquid amounts change when moving an oven stew to a slow cooker?',
        a: 'Reduce stock or water by 25%–30% because tight glass crockpot lids trap steam rather than evaporating sauces.',
      },
      {
        q: 'Why avoid lifting the slow cooker lid during those ~4.0 Hours?',
        a: 'Each lid peek vents trapped heat, adding 15–20 minutes back onto total tenderizing time.',
      },
      {
        q: 'When should High Setting (1.5x) be preferred over Low Setting (2x)?',
        a: 'Both reach the same final temperature, so choose High when starting midday (3 hours instead of 4) or Low for overnight meal prep.',
      },
    ],
  },

  'egg-substitute-calc': {
    seoTitle: `Free Baking Egg Substitute Calculator – Yogurt & Banana Cups | ${SITE_NAME}`,
    metaDescription:
      'Measure applesauce, yogurt, or mashed banana in cups and tablespoons to replace eggs in cakes with our free Baking Egg Substitute Calculator.',
    howToUseSteps: [
      'Enter how many whole eggs the baking recipe specifies into Number of Eggs to Replace.',
      'Choose Applesauce, Yogurt, or Mashed Banana from Substitute Type.',
      'Inspect required substitute quantity in cups and tablespoons.',
    ],
    formulaExplanation:
      'Baking moisture and binding replacements match one standard large egg (~60 ml volume) with 1/4 cup (4 tablespoons) of thick fruit puree or plain yogurt. Formula: Substitute Cups = Number of Eggs × 0.25; Tablespoons = Number of Eggs × 4.',
    practicalExample:
      'Replacing Number of Eggs to Replace = 2 with Substitute Type = Applesauce (1/4 cup per egg) uses 0.50 Cups (8 tbsp) substitute.',
    faqs: [
      {
        q: 'Which Substitute Type works neutrally without changing chocolate cake flavor?',
        a: 'Plain unsweetened yogurt and unsweetened applesauce add moisture invisibly, whereas Mashed Banana lends distinct banana sweetness.',
      },
      {
        q: 'Do eggless batters using yogurt need extra leavening help?',
        a: 'For cakes replacing 3+ eggs, adding an extra 1/2 teaspoon baking powder helps restore airy crumb lift.',
      },
      {
        q: 'Can yogurt substitute eggs in meringues or soufflés?',
        a: 'No—whipped egg-white foams rely on protein aeration that fruit purees or yogurt cannot replicate.',
      },
    ],
  },

  'fruit-jam-sugar': {
    seoTitle: `Free Fruit Jam Sugar Ratio Calculator – Sugar kg & Lemon ml | ${SITE_NAME}`,
    metaDescription:
      'Calculate sugar kilograms, lemon juice ml, and jarred jam yield from fresh fruit weight using our free Fruit Jam Sugar Ratio Calculator.',
    howToUseSteps: [
      'Weigh washed, pitted, and chopped berries or mangoes in kg and enter into Fruit Weight (kg).',
      'Read exact granulated sugar weight (kg), fresh lemon juice (ml), and estimated finished jam jar yield.',
    ],
    formulaExplanation:
      'Home fruit preservation balances bright fruit flavor with natural pectin gelling by pairing 80% sugar weight against prepared fruit plus 30 ml fresh lemon juice per kilogram to activate pectin and prevent spoilage. Formula: Sugar (kg) = Fruit Weight × 0.80; Lemon Juice (ml) = Fruit Weight × 30.',
    practicalExample:
      'Preserving Fruit Weight (kg) = 1.5 of mangoes or strawberries calls for 1.20 kg Sugar, 45 ml Lemon Juice, yielding ~2.34 kg jar content.',
    faqs: [
      {
        q: 'Why is 45 ml Lemon Juice essential even with tart strawberries?',
        a: 'Citric acid lowers pH so fruit pectin sets cleanly into spreadable gel and stops sugar from crystallizing inside jars.',
      },
      {
        q: 'Can sugar drop lower than 80% of Fruit Weight (kg)?',
        a: 'Low-sugar jams (40%–50%) taste delicious stored in the refrigerator for 2–3 weeks, though traditional shelf preservation needs higher sugar concentration.',
      },
      {
        q: 'How do you test when simmering jam hits the setting point?',
        a: 'Drop a spoonful onto a freezer-chilled saucer—if the surface wrinkles when pushed with a finger, remove from heat.',
      },
    ],
  },

  'marinade-time-calc': {
    seoTitle: `Free Meat Marinade Time Calculator – Safe Fridge Soak Hours | ${SITE_NAME}`,
    metaDescription:
      'Check safe refrigerator marinating hour ranges for chicken, steak, tough roasts, and fish using our free Meat Marinade Time Calculator.',
    howToUseSteps: [
      'Choose your protein cut from the Meat Cut selector (Chicken, Beef Steak, Tough Roast, or Fish).',
      'Review safe marinating hours and refrigeration handling notes immediately.',
    ],
    formulaExplanation:
      'Acidic marinades containing lemon, yogurt, or vinegar tenderize thin surface fibers quickly without turning meat mushy when timed to cut density: delicate seafood needs 30–60 minutes, chicken 2–4 hours, steaks 4–12 hours, and thick roasts 12–24 hours under 4°C refrigeration. Formula: Safe Window = Cut Lookup(Meat Cut).',
    practicalExample:
      'Selecting Meat Cut = Chicken Breasts / Wings (2 - 4 hours) advises 2 to 4 Hours kept refrigerated below 4°C.',
    faqs: [
      {
        q: 'What happens if Fish & Seafood marinates longer than 1 hour in lemon juice?',
        a: 'Strong citrus acids chemically "cook" delicate fish proteins like ceviche, leaving the exterior chalky and mushy.',
      },
      {
        q: 'Why must marinating meat always stay refrigerated below 4°C?',
        a: 'Leaving raw chicken or beef marinating on a warm kitchen counter promotes rapid bacterial growth—always marinate covered inside the fridge.',
      },
      {
        q: 'Can leftover raw meat marinade be brushed onto cooked BBQ?',
        a: 'Never reuse raw marinade directly as table sauce unless boiled vigorously for several minutes first.',
      },
    ],
  },

  'dough-rising-time': {
    seoTitle: `Free Bread Yeast Rising Time Calculator – Proofing by °C | ${SITE_NAME}`,
    metaDescription:
      'Estimate yeast bread dough proofing duration in hours from kitchen room temperature (°C) using our free Bread Yeast Rising Time Calculator.',
    howToUseSteps: [
      'Enter ambient kitchen temperature in degrees Celsius inside Room Temperature (°C).',
      'Read expected bulk fermentation or proofing time in hours.',
    ],
    formulaExplanation:
      'Baker’s yeast fermentation speeds up exponentially in warm kitchens and slows dramatically in cool winters, modeled against a 2.5-hour baseline at 22°C. Formula: Proofing Hours ≈ 2.5 × (22 / Room Temperature °C)^1.2 (for temps > 10°C).',
    practicalExample:
      'Proofing pizza or bread dough at Room Temperature (°C) = 24 takes roughly ~2.3 Hours Proofing Time.',
    faqs: [
      {
        q: 'How fast does dough double in a hot 34°C Pakistani summer kitchen?',
        a: 'Entering 34 into Room Temperature (°C) drops proofing time to roughly 1.5 hours—watch dough volume closely so it doesn’t over-proof and collapse.',
      },
      {
        q: 'What does the finger poke test show when proofing finishes?',
        a: 'Press a floured finger gently into risen dough: if the dent springs back halfway slowly, the dough is ready to shape or bake.',
      },
      {
        q: 'Why does dough stall below 10°C?',
        a: 'Cold fridge temperatures near 4°C put yeast nearly dormant (used intentionally for overnight cold fermentation).',
      },
    ],
  },

  'chocolate-melting': {
    seoTitle: `Free Double Boiler Chocolate Quantities Calculator – Ganache & Glaze | ${SITE_NAME}`,
    metaDescription:
      'Compute heavy cream or butter gram ratios for silky chocolate ganache and glossy cake glaze with our free Double Boiler Chocolate Quantities Calculator.',
    howToUseSteps: [
      'Type chopped dark or milk chocolate weight in grams inside Chocolate Weight (grams).',
      'Select Chocolate Ganache (Equal heavy cream) or Chocolate Glaze (with butter & oil) under Recipe Goal.',
      'Check exact grams of heavy cream or butter needed for your double boiler.',
    ],
    formulaExplanation:
      'Classic pourable/spreadable dark chocolate ganache pairs chocolate 1 : 1 by weight with hot heavy cream, whereas shiny mirror glazes blend chocolate with 30% butter by weight over a gentle simmering water bath. Formula: Ganache Cream (g) = Chocolate × 1.0; Glaze Butter (g) = Chocolate × 0.30.',
    practicalExample:
      'Preparing Recipe Goal = Chocolate Ganache with Chocolate Weight (grams) = 200 requires 200 grams Heavy Cream melted smoothly together.',
    faqs: [
      {
        q: 'Why melt chocolate over a double boiler rather than directly on stove flame?',
        a: 'Direct burner heat easily scorches cocoa solids above 50°C, turning smooth chocolate grainy and seized.',
      },
      {
        q: 'Should white chocolate use the exact same 1:1 cream ratio?',
        a: 'Because white chocolate contains softer cocoa butter without dry cocoa solids, trim cream down to 2:1 or 3:1 chocolate-to-cream for thick frosting.',
      },
      {
        q: 'Can steam water touch the melting chocolate bowl?',
        a: 'Keep even one drop of steam water out of plain melted chocolate—water makes sugar seize into a stiff paste unless heavy cream is already mixed in.',
      },
    ],
  },

  'ice-cream-base': {
    seoTitle: `Free Ice Cream Base Proportions Calculator – Cream & Milk ml | ${SITE_NAME}`,
    metaDescription:
      'Split total churn volume into rich heavy cream and whole milk milliliters for homemade ice cream using our free Ice Cream Base Proportions Calculator.',
    howToUseSteps: [
      'Enter your ice cream maker batch capacity in milliliters inside Total Base Volume (ml).',
      'Read exact ml measurements for 60% Heavy Cream and 40% Whole Milk.',
    ],
    formulaExplanation:
      'Creamy scoopable ice cream balances milkfat richness against icy water crystallization by blending 60% high-fat heavy cream with 40% whole milk before sweetening and churning. Formula: Heavy Cream (ml) = Total Base Volume × 0.60; Whole Milk (ml) = Total Base Volume × 0.40.',
    practicalExample:
      'Mixing a 1-liter tub with Total Base Volume (ml) = 1000 splits into Heavy Cream: 600 ml and Whole Milk: 400 ml.',
    faqs: [
      {
        q: 'Why not make ice cream with 100% Heavy Cream: 1000 ml?',
        a: 'Pure heavy cream churns into overly dense butter-like texture that coats your tongue heavily; 40% whole milk keeps scoops refreshing and light.',
      },
      {
        q: 'Should the dairy mixture chill cold before entering an ice cream churner?',
        a: 'Chill the base at least 4 hours (or overnight) at 4°C so it freezes quickly with tiny microscopic ice crystals.',
      },
      {
        q: 'How much sugar and vanilla fit a 1000 ml dairy base?',
        a: 'Whisk roughly 150–175 grams fine sugar and 2 teaspoons vanilla extract into the 1-liter cream-milk base.',
      },
    ],
  },

  'salad-dressing-ratio': {
    seoTitle: `Free Vinaigrette Oil to Vinegar Ratio Calculator – Dressing ml | ${SITE_NAME}`,
    metaDescription:
      'Measure crisp salad vinaigrette proportions from olive oil milliliters and oil-to-acid ratio using our free Vinaigrette Oil to Vinegar Ratio Calculator.',
    howToUseSteps: [
      'Enter extra-virgin oil volume in milliliters inside Olive Oil Volume (ml).',
      'Type desired richness ratio into Oil to Vinegar Ratio (e.g. 3) (classic 3:1).',
      'Check acid milliliters (vinegar or lemon juice) and total dressing yield.',
    ],
    formulaExplanation:
      'Classic French culinary vinaigrette balances three parts oil against one part acid (vinegar or fresh lemon juice) by dividing oil milliliters by your chosen ratio multiplier. Formula: Vinegar / Lemon (ml) = Olive Oil Volume (ml) / Oil to Vinegar Ratio.',
    practicalExample:
      'Whisking Olive Oil Volume (ml) = 90 with Oil to Vinegar Ratio (e.g. 3) = 3 calls for 30.0 ml Vinegar / Lemon Juice, producing 120.0 ml total dressing.',
    faqs: [
      {
        q: 'When should cooks use a 2:1 ratio instead of 3:1?',
        a: 'Sweet balsamic vinegar or mild rice vinegar tastes brighter at 2:1, whereas sharp red-wine vinegar or tart lemon juice balances smoothly at 3:1.',
      },
      {
        q: 'What ingredient keeps 120.0 ml vinaigrette from separating immediately?',
        a: 'Whisking 1 teaspoon Dijon mustard or honey into the vinegar before streaming in olive oil creates a thick emulsion.',
      },
      {
        q: 'How many green salad bowls does 120.0 ml dressing coat?',
        a: 'One crisp family dinner salad for 4–6 people usually tosses lightly with 60–90 ml, leaving leftovers chilled for tomorrow.',
      },
    ],
  },

  'potluck-organizer': {
    seoTitle: `Free Potluck Dish Count Calculator – Mains, Sides & Desserts | ${SITE_NAME}`,
    metaDescription:
      'Plan the ideal count of main courses, side dishes, and desserts for office or family potlucks using our free Potluck Dish Count Calculator.',
    howToUseSteps: [
      'Enter total confirmed party guests into Number of Attendees.',
      'Check balanced dish counts needed across main entrees, sides/salads, and desserts.',
    ],
    formulaExplanation:
      'Potluck sign-up sheets avoid twenty bowls of salad and zero entrees by allocating roughly 1 main dish per 8 guests (minimum 2), 1 side dish per 6 guests (minimum 3), and 1 dessert per 10 attendees (minimum 2). Formula: Mains = max(2, ceil(Attendees / 8)); Sides = max(3, ceil(Attendees / 6)); Desserts = max(2, ceil(Attendees / 10)).',
    practicalExample:
      'Organizing a potluck with Number of Attendees = 25 schedules Mains: 4 dishes, Sides: 5 dishes, and Desserts: 3 varieties.',
    faqs: [
      {
        q: 'Why plan more Sides: 5 dishes than Mains: 4 dishes?',
        a: 'Guests tend to take smaller scoops from salads, breads, dips, and raitas, giving everyone variety without wasting big trays of expensive mains.',
      },
      {
        q: 'How big should each potluck tray be for 25 attendees?',
        a: 'Ask each contributor to bring enough for 8–10 modest tasting portions so total table volume feeds 25 comfortably with seconds.',
      },
      {
        q: 'Should drinks and disposable plates be assigned separately?',
        a: 'Yes—assign ice, beverages, napkins, and plates to 2–3 non-cooking guests outside the dish slots.',
      },
    ],
  },

  'cook-sourdough': {
    seoTitle: `Free Yeast to Sourdough Starter Converter Calculator – Grams | ${SITE_NAME}`,
    metaDescription:
      'Swap active dry yeast grams for natural sourdough starter and adjust flour and water with our Yeast to Sourdough Starter Converter.',
    howToUseSteps: [
      'Enter packet or spoon weight in grams inside Active Dry Yeast (Grams).',
      'Read total active sourdough starter grams plus exact flour and water deductions.',
    ],
    formulaExplanation:
      'Commercial dry yeast recipes swap smoothly to 100%-hydration sourdough starter (50% flour + 50% water by weight) at roughly 14.2 grams starter per gram of active dry yeast; subtracting half the starter weight from recipe flour and water preserves original dough hydration. Formula: Starter (g) = Active Dry Yeast × 14.2; Deduct Flour & Water = Starter / 2.',
    practicalExample:
      'Converting Active Dry Yeast (Grams) = 7 (one standard packet) calculates 99 grams Sourdough Starter while reducing recipe flour by 50g and water by 50g.',
    faqs: [
      {
        q: 'Why must 50g flour and 50g water be subtracted after adding 99 grams Sourdough Starter?',
        a: 'Fed 100%-hydration starter already carries half flour and half water—skipping deductions makes bread dough overly wet.',
      },
      {
        q: 'How much longer does wild sourdough rise compared with Active Dry Yeast?',
        a: 'Expect bulk proofing to take 3–6 hours at room temperature instead of 1 hour with commercial yeast.',
      },
      {
        q: 'Should starter be bubbly and recently fed before mixing?',
        a: 'Use peak, doubled, bubbly levain (4–6 hours after feeding) for reliable oven spring.',
      },
    ],
  },

  'cook-pan-volume': {
    seoTitle: `Free Cake Pan Volume & Batter Calculator – Cups Capacity | ${SITE_NAME}`,
    metaDescription:
      'Calculate baking pan volume capacity in cups from round diameter and tin depth in inches with our free Cake Pan Volume & Batter Calculator.',
    howToUseSteps: [
      'Type cake tin diameter in inches into Pan Diameter or Side (Inches).',
      'Enter pan wall height in inches inside Pan Depth (Inches).',
      'Inspect total brim-full pan volume in standard baking cups.',
    ],
    formulaExplanation:
      'Round cake tin capacity computes cylindrical cubic inches (π × r² × depth) and converts to US baking cups using 1 cup = 14.438 cubic inches. Formula: Volume (Cups) = [π × (Pan Diameter / 2)² × Pan Depth] / 14.438.',
    practicalExample:
      'Measuring a standard 9-inch cake tin with Pan Diameter or Side (Inches) = 9 and Pan Depth (Inches) = 2 computes ~8.8 Cups Volume Capacity.',
    faqs: [
      {
        q: 'Should I pour all ~8.8 Cups Volume Capacity full of cake batter?',
        a: 'Never fill cake tins above halfway to two-thirds (~4.5–5.5 cups here) so rising batter never overflows onto your oven floor.',
      },
      {
        q: 'How do square pans compare against round tins of the same width?',
        a: 'A 9×9 square tin holds roughly 27% more batter than a 9-inch round pan because corners add extra volume.',
      },
      {
        q: 'Can I measure springform cheesecake tins with this tool?',
        a: 'Yes—measure interior diameter and vertical rim height in inches for accurate volume.',
      },
    ],
  },

  'cook-cocktail-dilution': {
    seoTitle: `Free Cocktail Ice Dilution Calculator – Drink ml & Melt % | ${SITE_NAME}`,
    metaDescription:
      'Compute chilled drink volume and ice-melt dilution percentage from liquid ml and shake seconds with our Cocktail Ice Dilution Calculator.',
    howToUseSteps: [
      'Enter poured base juice or liquid volume in milliliters inside Initial Spirit Volume (ml).',
      'Type total agitation timer inside Shaking / Stirring Duration (Seconds).',
      'Check final chilled volume in ml, melt water added, and percentage dilution.',
    ],
    formulaExplanation:
      'Chilling drinks over ice cubes melts roughly 0.18 ml of cold water per second of active shaking or stirring; dividing melt water by final chilled drink volume yields exact dilution percentage. Formula: Melt Water (ml) = Duration (s) × 0.18; Dilution (%) = [Melt Water / (Initial Volume + Melt Water)] × 100.',
    practicalExample:
      'Shaking Initial Spirit Volume (ml) = 60 for Shaking / Stirring Duration (Seconds) = 15 adds ~2.7 ml melt water for Total Volume: 62.7 ml (4.3% dilution).',
    faqs: [
      {
        q: 'Why does chilling over ice matter for mocktail and syrup balance?',
        a: 'Controlled ice melt softens sharp citrus acidity and rounds out concentrated fruit syrups without making drinks watery.',
      },
      {
        q: 'Does shaking with crushed ice melt faster than large solid cubes?',
        a: 'Crushed pebble ice exposes far more surface area and melts noticeably faster than dense freezer-tempered cubes.',
      },
      {
        q: 'Can baristas use this for iced shaken espresso drinks?',
        a: 'Yes—enter hot espresso + syrup ml in Initial Spirit Volume (ml) and shake seconds to estimate ice-melt volume.',
      },
    ],
  },

  'cook-french-fry': {
    seoTitle: `Free French Fry Blanching & Frying Timer Calculator – 2-Stage °C | ${SITE_NAME}`,
    metaDescription:
      'Get two-stage French fry blanching and frying temperatures from potato kg weight with our French Fry Blanching & Frying Timer.',
    howToUseSteps: [
      'Weigh peeled, baton-cut potatoes in kilograms and enter into Potato Batch Weight (kg).',
      'Follow Stage 1 low-temp blanching and Stage 2 high-temp crisping oil temperatures and minutes.',
    ],
    formulaExplanation:
      'Restaurant-crisp fries require double frying after cold-water starch soaking: Stage 1 blanches cut potatoes gently at 150°C for 6 minutes to cook the interior fluffy without browning, followed after cooling by Stage 2 crisping at 190°C for 3 minutes. Formula: Thermal Schedule = Stage 1 (150°C, 6m) → Cool → Stage 2 (190°C, 3m).',
    practicalExample:
      'Prepping Potato Batch Weight (kg) = 1.0 gives Stage 1: 150°C (6 mins) | Stage 2: 190°C (3 mins) after a cold water starch soak.',
    faqs: [
      {
        q: 'Why soak cut fries in cold water before Stage 1: 150°C?',
        a: 'Rinsing excess surface starch prevents fries from sticking together or scorching brown before their centers turn tender.',
      },
      {
        q: 'Should fries drain and cool between Stage 1 and Stage 2?',
        a: 'Yes—rest blanched fries on a wire rack for 15–30 minutes (or freeze for batch prep) before dropping into 190°C oil for golden crunch.',
      },
      {
        q: 'Should I fry all 1.0 kg at once inside a home karahi?',
        a: 'Fry in small 250g–300g batches so dropping cold potatoes doesn’t crash oil temperature below crisp frying heat.',
      },
    ],
  },
};
