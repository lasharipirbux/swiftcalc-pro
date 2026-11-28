import { SITE_NAME } from '../config/site';

export interface CookingCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  introDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const cookingSeoFullMap: Record<string, CookingCalculatorSeoEntry> = {
  'recipe-scaler': {
    seoTitle: `How to Scale a Recipe Up or Down Online | ${SITE_NAME}`,
    metaDescription:
      'Learn how to scale a recipe up or down online for any guest count while keeping every ingredient proportion balanced.',
    introDescription:
      'Cooking a favorite family dish for a big dinner or shrinking a party tray down to two plates becomes effortless once you know how to scale a recipe up or down online. Enter the original serving yield, your target number of plates, and any single ingredient measure to see the adjusted quantity right away. Keeping ratios exact prevents watered-down sauces, overly dry batters, and stressful mental fraction math mid-prep.',
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
        q: 'Should salt and hot spices scale at full triple strength?',
        a: 'Start spices, chilies, and salt at about 80% to 85% of the multiplied amount, then taste and season to finish.',
      },
      {
        q: 'Can I shrink a 12-serving dish down to just 2 plates?',
        a: 'Yes, enter 12 as original servings and 2 as target servings to divide every ingredient neatly to one-sixth.',
      },
      {
        q: 'Does cooking time double when I double a recipe?',
        a: 'Usually no—a wider pot or larger baking pan takes only slightly longer, so check doneness early instead of doubling oven time.',
      },
    ],
  },

  'cooking-measurement-conv': {
    seoTitle: `Convert Cups to Milliliters and Tablespoons | ${SITE_NAME}`,
    metaDescription:
      'Quickly convert cups to milliliters and tablespoons alongside teaspoons and fluid ounces for baking and everyday cooking.',
    introDescription:
      'Following recipes written in another country gets frustrating when one cookbook calls for cups while your measuring jug only shows milliliters. When you convert cups to milliliters and tablespoons here, type any number and select your starting kitchen unit to view all five culinary equivalents at once. Having exact volume conversions on hand stops baking mishaps and keeps soups, marinades, and syrups consistent every single time.',
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
        q: 'How many level teaspoons fit inside one tablespoon?',
        a: 'One standard 15 ml tablespoon equals exactly 3 level teaspoons of 5 ml each.',
      },
      {
        q: 'Is an everyday tea mug the same size as a measuring cup?',
        a: 'No, drinking mugs vary widely from 180 ml to 350 ml, while a standard metric cooking cup holds 240 ml.',
      },
      {
        q: 'Does 240 ml always weigh 240 grams for dry baking ingredients?',
        a: 'Only water weighs 1 gram per ml; lighter ingredients like sifted all-purpose flour weigh roughly 125 grams per cup.',
      },
    ],
  },

  'oven-temp-conv': {
    seoTitle: `Convert Oven Temperature C to F and Gas Mark | ${SITE_NAME}`,
    metaDescription:
      'Instantly convert oven temperature C to F and Gas Mark so every cake, roast, and pastry bakes at the exact right heat.',
    introDescription:
      'Baking a recipe from an American blog inside a Celsius electric oven or a traditional Gas Mark range invites burnt edges or raw centers if heat settings are guessed. To convert oven temperature C to F and Gas Mark accurately, enter the printed recipe temperature and choose its original scale. Seeing all three oven dial equivalents side by side ensures steady heat whether you are roasting chicken or baking delicate sponge layers.',
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
        q: 'How should I adjust temperatures for a fan-assisted convection oven?',
        a: 'Lower conventional recipe temperatures by about 15°C to 20°C (or 25°F) because circulating air cooks food faster.',
      },
      {
        q: 'What Celsius temperature matches Gas Mark 6?',
        a: 'Gas Mark 6 corresponds to roughly 400°F or 204°C, ideal for crisp roasted vegetables and puff pastry.',
      },
      {
        q: 'Why does preheating matter before placing cakes in the oven?',
        a: 'Full target heat activates baking powder right away so cakes rise evenly instead of turning dense and heavy.',
      },
    ],
  },

  'meat-cooking-time': {
    seoTitle: `How Long to Roast Meat per Kilogram Online | ${SITE_NAME}`,
    metaDescription:
      'Check how long to roast meat per kilogram online for whole chicken, beef, lamb leg, or pork with clear hours and minutes.',
    introDescription:
      'Timing a holiday roast so the meat lands juicy and tender right as side dishes finish takes reliable planning. Checking how long to roast meat per kilogram online lets you select whole chicken, beef roast, lamb leg, or pork and enter raw trimmed weight in kilograms. Combining per-kilo oven minutes with an initial heat-penetration buffer produces a clear roasting schedule so nothing gets served underdone or dried out.',
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
        q: 'Why does a lamb leg need more minutes per kg than whole chicken?',
        a: 'Thicker bone-in muscle tissue conducts oven heat more slowly, requiring 50 minutes per kg plus base roasting time.',
      },
      {
        q: 'How long should roasted meat rest before slicing?',
        a: 'Tent the roast loosely with foil for 10 to 15 minutes so hot juices settle back into the meat rather than running onto the board.',
      },
      {
        q: 'Should I still check internal temperature with a meat thermometer?',
        a: 'Yes, verify 74°C for poultry and at least 63°C for beef or lamb roasts because oven calibration varies.',
      },
    ],
  },

  'rice-water-ratio': {
    seoTitle: `How Much Water for Basmati and Brown Rice | ${SITE_NAME}`,
    metaDescription:
      'Find out how much water for basmati and brown rice, jasmine, or sella rice you need along with estimated simmering times.',
    introDescription:
      'Fluffy, separate rice grains depend almost entirely on matching liquid volume to the exact grain variety in your pot. Checking how much water for basmati and brown rice takes only two selections: choose your rice type and enter the dry cup measure. Because aged basmati, jasmine, sella, and fibrous brown rice absorb water at very different rates, using tailored ratios stops mushy clumps and crunchy undercooked centers.',
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
        q: 'Does pre-soaking basmati rice reduce the water needed?',
        a: 'Soaking for 25 to 30 minutes hydrates grains early, so stick closely to the 1 : 1.5 ratio to keep grains long and separate.',
      },
      {
        q: 'Why does brown rice take over twice as long to simmer?',
        a: 'Its intact outer bran layer slows water absorption, requiring extra liquid and gentle 40-minute simmering.',
      },
      {
        q: 'Should I lift the pot lid to stir rice while steaming?',
        a: 'Keep the lid sealed until cooking finishes—opening early releases steam and leaves top grains dry.',
      },
    ],
  },

  'food-cost-serving': {
    seoTitle: `How to Calculate Food Cost per Serving | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate food cost per serving in PKR from total recipe ingredient spend and yield portions for meal pricing.',
    introDescription:
      'Whether you manage a home catering kitchen or track weekly family grocery budgets, knowing how to calculate food cost per serving brings immediate financial clarity to every dish. Enter the total rupee amount spent on meat, vegetables, spices, and oil alongside the exact number of plates produced. Dividing total ingredient outlay by yield reveals your per-plate cost so you can price menus profitably or trim pricey meals.',
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
        q: 'How do food businesses turn ingredient cost into a menu price?',
        a: 'Most kitchens aim for a 28% to 35% food-cost target, multiplying ingredient cost per plate by roughly 3× to cover gas, packaging, and profit.',
      },
      {
        q: 'Should cooking oil and takeaway containers count in total recipe cost?',
        a: 'Yes, include measurable oil, ghee, and disposable boxes so your per-serving cost reflects true cash spent.',
      },
      {
        q: 'Why track cost per serving for everyday home meals?',
        a: 'Comparing homemade plate costs against restaurant takeout makes weekly grocery planning much easier to control.',
      },
    ],
  },

  'party-food-qty': {
    seoTitle: `How Much Food to Cook per Person for a Party | ${SITE_NAME}`,
    metaDescription:
      'Estimate how much food to cook per person for a party in kg of meat, dry rice, and drink liters for dinners, BBQ, or snacks.',
    introDescription:
      'Hosting a family dawat, backyard BBQ, or tea gathering gets stressful when hosts guess shopping lists and end up with either empty platters or days of leftovers. Checking how much food to cook per person for a party starts with entering your confirmed guest count and selecting the menu style. Clear estimates for meat, uncooked rice, and cold drinks take the guesswork out of butcher and grocery runs.',
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
        q: 'Why does a BBQ party require more meat per guest than a dinner buffet?',
        a: 'Without filling rice dishes on the table, guests eat larger portions of grilled meat, and bone-in cuts shrink during cooking.',
      },
      {
        q: 'Is the rice estimate measured raw before cooking?',
        a: 'Yes, the kilogram estimate represents dry uncooked rice, which expands to nearly triple its weight once steamed.',
      },
      {
        q: 'Should hosts add extra buffer for hungry groups?',
        a: 'Add roughly 10% to 15% extra headcount when hosting teenagers, athletes, or long late-night gatherings.',
      },
    ],
  },

  'tea-coffee-cups': {
    seoTitle: `How Much Milk and Water for Group Chai | ${SITE_NAME}`,
    metaDescription:
      'Calculate how much milk and water for group chai, black tea, or milk coffee you need along with tea leaves and sugar.',
    introDescription:
      'Brewing tea for ten or twenty guests at once often turns too watery or overly thick if you eyeball milk cartons into a big saucepan. Knowing how much milk and water for group chai lets you enter the headcount and select Pakistani milk tea, black tea, or milky coffee. Instant milliliter totals and dry spoon counts ensure every single cup tastes rich, fragrant, and evenly balanced.',
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
        q: 'Why use 120 ml water and 120 ml milk per cup of chai?',
        a: 'Part of the water evaporates while boiling the tea leaves first, leaving a rich, full-bodied standard mug after milk simmers in.',
      },
      {
        q: 'How should I split the tablespoon estimate between tea leaves and sugar?',
        a: 'Use roughly one heaped teaspoon of strong tea dust plus one to one-and-a-half teaspoons of sugar per cup, adjusting to taste.',
      },
      {
        q: 'How much milk should I stock for 10 cups of milky coffee?',
        a: 'Milk coffee uses 180 ml of milk per serving, totaling 1,800 ml—just under two standard 1-liter cartons.',
      },
    ],
  },

  'baking-pan-conv': {
    seoTitle: `Convert Baking Recipe to a Different Pan Size | ${SITE_NAME}`,
    metaDescription:
      'Easily convert baking recipe to a different pan size by comparing pan areas in square inches for exact batter cups.',
    introDescription:
      'Your favorite cake or brownie recipe calls for an 8-inch round tin, yet the only clean pan in your cupboard is a larger 10-inch dish. When you convert baking recipe to a different pan size here, enter both pan surface areas and the original batter cups to get an exact scale multiplier. Matching batter depth keeps bake times predictable and prevents dry thin sheets or overflowing tins.',
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
        q: 'How do I figure pan area in square inches for round tins?',
        a: 'Multiply radius by radius by 3.14; an 8-inch round pan has a 4-inch radius, giving roughly 50 square inches.',
      },
      {
        q: 'What happens if I pour unscaled batter into a much wider pan?',
        a: 'The batter spreads shallower and bakes noticeably faster, which can dry out cakes unless you check them early.',
      },
      {
        q: 'Should oven time change after scaling batter for a larger tin?',
        a: 'Larger pans filled to matching depth take slightly longer for heat to reach the middle, so test with a toothpick 5 minutes past the original mark.',
      },
    ],
  },

  'baking-powder-yeast': {
    seoTitle: `Convert Baking Powder to Active Dry Yeast | ${SITE_NAME}`,
    metaDescription:
      'Quickly convert baking powder to active dry yeast teaspoons when adapting flatbreads, pizza doughs, or dinner rolls.',
    introDescription:
      'Swapping a quick chemical leavener for natural fermented rise adds deeper bakery aroma to flatbreads, crusts, and rolls. To convert baking powder to active dry yeast cleanly, enter the recipe’s baking powder teaspoons and read the 3:4 volumetric yeast equivalent right away. Knowing the proper conversion prevents harsh yeasty flavors while reminding bakers to allow warm rising time before heating the oven or griddle.',
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
        q: 'Can yeast-swapped dough go directly into the oven like baking powder batter?',
        a: 'No, yeast needs warm liquid around 40°C to activate plus 45 to 90 minutes of resting so the dough rises before baking.',
      },
      {
        q: 'Which baked goods work best when switching from baking powder to yeast?',
        a: 'Naan, pizza crusts, savory rolls, and biscuits adapt nicely, whereas light sponge cakes still perform best with baking powder.',
      },
      {
        q: 'How much does one teaspoon of active dry yeast weigh?',
        a: 'One level teaspoon weighs about 3 grams, so 1.5 teaspoons comes to roughly 4.5 grams.',
      },
    ],
  },

  'sugar-honey-sub': {
    seoTitle: `How Much Honey to Replace Sugar in Baking | ${SITE_NAME}`,
    metaDescription:
      'Find out how much honey to replace sugar in baking cups along with oven heat and liquid adjustments for moist results.',
    introDescription:
      'Swapping refined white sugar for floral natural honey adds rich moisture and warmth to muffins, banana bread, and oatmeal cookies. Checking how much honey to replace sugar in baking scales granulated sugar cups by 0.75 because honey tastes sweeter and brings extra liquid to the bowl. Pairing the exact cup reduction with slightly lower oven heat keeps cakes tender without scorching the crust.',
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
        q: 'Why lower oven temperature by 15°F when baking with honey?',
        a: 'Natural fructose in honey caramelizes faster than white sugar, browning edges well before the center finishes setting.',
      },
      {
        q: 'How much milk or water should I remove from the batter?',
        a: 'Cut other liquids by roughly 1/4 cup for every full cup of honey so your batter stays balanced rather than runny.',
      },
      {
        q: 'How can I keep honey from sticking inside the measuring cup?',
        a: 'Coat the measuring cup lightly with neutral oil first so every drop of honey slides right out.',
      },
    ],
  },

  'pasta-portion-calc': {
    seoTitle: `How Much Dry Pasta per Person to Boil | ${SITE_NAME}`,
    metaDescription:
      'Calculate how much dry pasta per person to boil in grams and salted water liters for main dishes or side servings.',
    introDescription:
      'Eyeballing dry spaghetti or penne straight from the box almost always leaves you with either hungry diners or an overflowing colander. Checking how much dry pasta per person to boil takes only your guest count and whether pasta is the main course or a side dish. Alongside total dry weight in grams, the tool gives the right boiling water volume so noodles cook evenly without clumping.',
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
        q: 'How much heavier does dry pasta become after boiling?',
        a: 'Dry pasta absorbs water as it cooks and roughly doubles in weight, turning 380 grams dry into about 760 to 850 grams cooked.',
      },
      {
        q: 'Does the gram guideline work for both spaghetti and short shapes?',
        a: 'Yes, weighing dry grams stays accurate across macaroni, penne, fusilli, and spaghetti even though cup volumes look different.',
      },
      {
        q: 'Why boil pasta in so much salted water?',
        a: 'Generous water prevents the boil from dying down when pasta drops in and dilutes surface starch to avoid sticky clumps.',
      },
    ],
  },

  'pizza-dough-calc': {
    seoTitle: `Calculate Pizza Dough Hydration and Salt | ${SITE_NAME}`,
    metaDescription:
      'Easily calculate pizza dough hydration and salt, yeast, and total dough grams using baker’s percentages from flour weight.',
    introDescription:
      'Great homemade pizza crust relies on weight ratios rather than scoop-and-level cups, which fluctuate wildly between flour brands. When you calculate pizza dough hydration and salt here, enter your flour weight in grams and desired hydration percentage to get exact water, fine salt, yeast, and total dough mass. Dialing hydration from crisp 60% pan crusts to airy 70% blistered pies becomes repeatable every Friday night.',
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
        q: 'Which hydration percentage works best in a regular home oven?',
        a: 'About 60% to 63% handles easily by hand and bakes crisp on home baking sheets, while 68% to 72% suits very hot pizza stones.',
      },
      {
        q: 'How many 12-inch pizzas can I stretch from 815 grams of dough?',
        a: 'Dividing into 270-gram dough balls produces three classic medium thin-crust pizzas.',
      },
      {
        q: 'Can salt and dry yeast be dumped directly on top of each other?',
        a: 'Stir salt through the flour first before adding bloomed yeast water so direct salt contact does not slow yeast activity.',
      },
    ],
  },

  'coffee-brew-ratio': {
    seoTitle: `How Many Grams of Coffee per ml of Water | ${SITE_NAME}`,
    metaDescription:
      'Calculate how many grams of coffee per ml of water you need for pour-over, French press, or drip brewing strength.',
    introDescription:
      'Brewing cafe-quality filter coffee at home stops being hit-or-miss the moment you weigh beans against water volume. Checking how many grams of coffee per ml of water lets you enter desired brew water in milliliters and pick your strength ratio, such as 1:15 or 1:16. Measuring exact coffee ground weights eliminates bitter over-extraction and weak cups across pour-over, drip, and French press setups.',
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
        q: 'How does switching from a 1:15 ratio to 1:17 change cup taste?',
        a: 'A 1:14 or 1:15 brew produces a heavier, bolder cup, while 1:17 tastes lighter and cleaner.',
      },
      {
        q: 'How many tablespoons equal 33 grams of coffee without a scale?',
        a: 'One level tablespoon of medium grounds weighs about 5 to 6 grams, making 33 grams roughly 6 level tablespoons.',
      },
      {
        q: 'Why does a 500 ml brew pour slightly less liquid into mugs?',
        a: 'Wet coffee grounds hold roughly twice their dry weight in water, leaving about 435 ml of brewed coffee.',
      },
    ],
  },

  'spice-blend-ratio': {
    seoTitle: `Calculate Homemade Curry Masala Spice Ratio | ${SITE_NAME}`,
    metaDescription:
      'Easily calculate homemade curry masala spice ratio in grams for cumin, coriander, chili, turmeric, and garam masala batches.',
    introDescription:
      'Grinding fresh whole spices at home fills curries and biryanis with aroma that store-bought packets rarely match. When you calculate homemade curry masala spice ratio here, enter your target jar weight in grams to get balanced weights of cumin, coriander, red chili, turmeric, and garam masala. Scaling any batch size cleanly ensures your house blend tastes identical whether mixing a small weekly jar or a large pantry refill.',
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
        q: 'Should whole cumin and coriander seeds be dry-roasted before grinding?',
        a: 'Lightly toasting whole seeds in a dry pan for two minutes releases deeper aroma before milling them into powder.',
      },
      {
        q: 'How can I make the spice blend milder without losing red curry color?',
        a: 'Swap half of the regular red chili weight for mild Kashmiri chili powder to keep rich color with gentler heat.',
      },
      {
        q: 'How long does freshly ground homemade masala stay potent?',
        a: 'Kept inside a tight glass jar away from stove heat and sunlight, homemade blends stay fragrant for three to four months.',
      },
    ],
  },

  'deep-fry-oil-calc': {
    seoTitle: `How Much Oil Needed for Deep Frying Pot | ${SITE_NAME}`,
    metaDescription:
      'Calculate how much oil needed for deep frying pot in liters from pan diameter and desired oil depth in centimeters.',
    introDescription:
      'Pouring bottle after bottle into a frying pan without measuring either wastes expensive cooking oil or leaves food barely half-submerged. Checking how much oil needed for deep frying pot uses your pot diameter and target oil depth in centimeters to calculate exact liters required. Knowing the volume ahead of time lets you pick the right pot size and keep safe headroom against hot oil splatters.',
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
        q: 'How much empty pot height should remain above the oil surface?',
        a: 'Leave at least 5 to 8 cm of dry wall above the oil so bubbling steam from cold samosas or fries never boils over.',
      },
      {
        q: 'Does a curved bottom wok or karahi hold less oil than a flat pot?',
        a: 'Yes, rounded bottoms narrow sharply underneath and typically need 25% to 35% less oil than straight-sided cylindrical pots.',
      },
      {
        q: 'What oil depth works well for submerged deep-frying?',
        a: 'Most crispy snacks like pakoras, tenders, and fries cook best in 5 to 7 cm of hot oil.',
      },
    ],
  },

  'slow-cooker-conv': {
    seoTitle: `Convert Oven Cooking Time to Slow Cooker | ${SITE_NAME}`,
    metaDescription:
      'Easily convert oven cooking time to slow cooker hours for Low or High settings so stews and roasts finish tender.',
    introDescription:
      'Turning a weekend oven braise or curry into a hands-off weekday crockpot meal requires adapting both heat intensity and timing. When you convert oven cooking time to slow cooker hours here, enter the original conventional oven time and select either the Low or High dial. Getting reliable simmer hours lets you start dinner before work and return home to fall-apart tender meat without guesswork.',
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
        q: 'Should I use less broth when adapting an oven recipe for a slow cooker?',
        a: 'Cut added stock or water by 25% to 30% because tight stoneware lids trap moisture rather than letting sauce boil down.',
      },
      {
        q: 'Does peeking under the slow cooker lid delay dinner?',
        a: 'Yes, every lid lift vents trapped steam and adds roughly 15 to 20 minutes back onto total cooking time.',
      },
      {
        q: 'What is the real difference between Low and High slow-cooker settings?',
        a: 'Both eventually reach the same simmer point; High simply gets there faster, making Low ideal for all-day unattended cooking.',
      },
    ],
  },

  'egg-substitute-calc': {
    seoTitle: `How Much Yogurt or Applesauce Replaces Eggs | ${SITE_NAME}`,
    metaDescription:
      'Check how much yogurt or applesauce replaces eggs in baking with exact cups and tablespoons for eggless cakes and muffins.',
    introDescription:
      'Running out of eggs mid-recipe or baking for an egg-free guest does not have to ruin dessert plans. Checking how much yogurt or applesauce replaces eggs gives you the exact cup and tablespoon measurement for applesauce, plain yogurt, or mashed banana based on the number of eggs listed. Using calibrated substitutions preserves soft crumb structure in muffins, loaf cakes, and moist chocolate bakes.',
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
        q: 'Which egg substitute keeps cake flavor completely neutral?',
        a: 'Plain unsweetened yogurt and unsweetened applesauce blend quietly, whereas mashed banana adds noticeable banana flavor.',
      },
      {
        q: 'Should eggless cakes include a touch more baking powder?',
        a: 'When replacing three or more eggs, adding an extra half-teaspoon of baking powder helps keep the sponge light and airy.',
      },
      {
        q: 'Can fruit puree or yogurt replace egg whites in meringues?',
        a: 'No, foams like pavlova and soufflés rely on whipped egg-white proteins that yogurt or fruit cannot mimic.',
      },
    ],
  },

  'fruit-jam-sugar': {
    seoTitle: `How Much Sugar per kg of Fruit for Jam | ${SITE_NAME}`,
    metaDescription:
      'Calculate how much sugar per kg of fruit for jam plus fresh lemon juice ml and finished jar yield for home preserving.',
    introDescription:
      'Making bright seasonal mango, strawberry, or plum jam at home depends on balancing fruit weight, sugar concentration, and citrus acidity. Knowing how much sugar per kg of fruit for jam lets you weigh prepared fruit once and read exact sugar kilograms, fresh lemon juice milliliters, and expected jar yield. Proper ratios activate natural fruit pectin so every batch sets glossy rather than runny or crystal-hard.',
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
        q: 'Why add lemon juice to jam even when using tart berries?',
        a: 'Natural citric acid balances pH so fruit pectin gels smoothly and prevents sugar crystals from forming inside jars.',
      },
      {
        q: 'Can I make refrigerator jam with less than 80% sugar?',
        a: 'Yes, 40% to 50% sugar produces tasty low-sugar refrigerator jam that keeps fresh for two to three weeks chilled.',
      },
      {
        q: 'How can I tell when boiling jam is ready to jar?',
        a: 'Spoon a drop onto a cold plate from the freezer; if it wrinkles gently when nudged with a finger, take it off the burner.',
      },
    ],
  },

  'marinade-time-calc': {
    seoTitle: `How Long to Marinate Chicken Steak and Fish | ${SITE_NAME}`,
    metaDescription:
      'Check how long to marinate chicken steak and fish safely in the fridge without turning tender proteins mushy.',
    introDescription:
      'Great marinades infuse herbs, spices, and tang deep into grilled dishes, yet leaving acidic rubs on too long ruins meat texture. Checking how long to marinate chicken steak and fish gives safe refrigerator windows tailored to chicken breasts, beef steaks, tough roasts, and delicate seafood. Following cut-specific soaking guidelines protects food safety below 4°C while keeping every fillet juicy on the grill.',
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
        q: 'What happens if fish marinates in lemon juice for several hours?',
        a: 'Strong citrus acid breaks down delicate seafood proteins quickly, turning the outside opaque and mealy.',
      },
      {
        q: 'Is it safe to marinate raw chicken on the kitchen counter?',
        a: 'No, room temperatures encourage rapid bacterial growth, so always cover and marinate meat inside the refrigerator.',
      },
      {
        q: 'Can leftover raw marinade be used as a dipping sauce?',
        a: 'Never serve raw meat marinade unheated—either reserve a clean portion upfront or boil leftovers thoroughly before serving.',
      },
    ],
  },

  'dough-rising-time': {
    seoTitle: `How Long Does Bread Dough Take to Rise | ${SITE_NAME}`,
    metaDescription:
      'Estimate how long does bread dough take to rise in hours based on your kitchen room temperature in degrees Celsius.',
    introDescription:
      'Yeast bread rarely obeys the printed one-hour clock on a recipe because summer heat and winter chills shift fermentation speed dramatically. Estimating how long does bread dough take to rise starts by typing your ambient room temperature in degrees Celsius. Adjusting proofing expectations to actual kitchen warmth helps home bakers avoid collapsed over-proofed loaves in hot months and dense under-risen bread in winter.',
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
        q: 'How fast can bread dough rise in a warm 34°C kitchen?',
        a: 'At 34°C proofing drops to roughly 1.5 hours, so watch dough volume closely rather than waiting for a fixed timer.',
      },
      {
        q: 'How do I check if risen bread dough is ready to bake?',
        a: 'Press gently with a floured fingertip; if the indentation springs back slowly halfway, the loaf is ready for the oven.',
      },
      {
        q: 'Why does standard yeast activity stall under 10°C?',
        a: 'Cold refrigerator air puts yeast nearly dormant, which bakers use intentionally for slow overnight flavor development.',
      },
    ],
  },

  'chocolate-melting': {
    seoTitle: `Calculate Chocolate to Cream Ratio for Ganache | ${SITE_NAME}`,
    metaDescription:
      'Quickly calculate chocolate to cream ratio for ganache or butter weight for glossy cake glazes using a double boiler.',
    introDescription:
      'Smooth chocolate ganache and glossy cake drips depend on matching chopped chocolate weight to dairy or butter cleanly. When you calculate chocolate to cream ratio for ganache here, enter your chocolate grams and choose either classic 1:1 heavy cream ganache or a 30% butter glaze. Using gentle double-boiler heat with accurate gram proportions keeps coatings silky, pourable, and free of burnt cocoa streaks.',
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
        q: 'Why use a double boiler instead of melting chocolate directly on a burner?',
        a: 'Gentle steam keeps chocolate below scorching temperatures so cocoa solids stay glossy rather than turning dry and grainy.',
      },
      {
        q: 'Does white chocolate need less heavy cream than dark chocolate?',
        a: 'Yes, white chocolate is softer, so use a 2:1 or 3:1 chocolate-to-cream ratio when you want thick piping consistency.',
      },
      {
        q: 'Why should plain melting chocolate never touch loose steam droplets?',
        a: 'Even tiny drops of plain water cause melted chocolate to seize into a gritty clump unless cream is already blended in.',
      },
    ],
  },

  'ice-cream-base': {
    seoTitle: `Heavy Cream to Milk Ratio for Ice Cream Base | ${SITE_NAME}`,
    metaDescription:
      'Compute the ideal heavy cream to milk ratio for ice cream base in milliliters for smooth, scoopable homemade batches.',
    introDescription:
      'Creamy homemade ice cream requires enough milkfat to block jagged ice crystals without turning heavy and waxy on the spoon. Splitting your batch with the classic heavy cream to milk ratio for ice cream base divides total milliliters into 60% heavy cream and 40% whole milk automatically. Scaling any churner tub size in seconds lets you customize vanilla, mango, or pistachio flavors with reliable texture.',
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
        q: 'Why not churn homemade ice cream using 100% heavy cream?',
        a: 'Pure heavy cream whips into an overly dense, buttery texture; mixing in 40% whole milk keeps scoops clean and refreshing.',
      },
      {
        q: 'How long should the dairy base chill before churning?',
        a: 'Refrigerate the mixed base for at least 4 hours or overnight so it freezes rapidly with tiny, smooth ice crystals.',
      },
      {
        q: 'How much sugar pairs well with a 1-liter dairy base?',
        a: 'Dissolve roughly 150 to 175 grams of fine sugar along with 2 teaspoons of vanilla extract into a 1,000 ml base.',
      },
    ],
  },

  'salad-dressing-ratio': {
    seoTitle: `Calculate Oil to Vinegar Ratio for Vinaigrette | ${SITE_NAME}`,
    metaDescription:
      'Quickly calculate oil to vinegar ratio for vinaigrette in milliliters so homemade salad dressings taste crisp and balanced.',
    introDescription:
      'Homemade salad dressing tastes miles fresher than bottled mixes once your richness and acidity stay properly balanced. When you calculate oil to vinegar ratio for vinaigrette here, enter your olive oil volume in milliliters and pick your preferred ratio, such as classic 3:1 or punchier 2:1. Getting exact vinegar or lemon juice volume and total batch milliliters makes scaling dressings for dinner parties effortless.',
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
        q: 'When does a 2:1 vinaigrette work better than classic 3:1?',
        a: 'Milder sweet vinegars like balsamic or rice vinegar shine at 2:1, while sharper red-wine vinegar or lemon juice suits 3:1.',
      },
      {
        q: 'How do I stop homemade vinaigrette from separating right away?',
        a: 'Whisk a teaspoon of Dijon mustard or honey into the vinegar first, then drizzle in olive oil slowly to emulsify.',
      },
      {
        q: 'How many servings does 120 ml of salad dressing coat?',
        a: 'About 60 to 90 ml lightly dresses a big family salad for four to six diners without leaving leaves soggy.',
      },
    ],
  },

  'potluck-organizer': {
    seoTitle: `How Many Dishes Needed for a Potluck Party | ${SITE_NAME}`,
    metaDescription:
      'Plan how many dishes needed for a potluck party across main entrees, sides, and desserts from total attendee count.',
    introDescription:
      'Organizing an office lunch or neighborhood potluck easily goes sideways when ten people bring chips and only one person cooks an entree. Checking how many dishes needed for a potluck party takes just your confirmed guest count and splits the sign-up sheet into balanced counts of mains, side dishes, and desserts. Clear dish targets keep the buffet varied without burdening any single cook.',
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
        q: 'Why schedule slightly more side dishes than main entrees?',
        a: 'Diners take smaller spoonfuls from salads, breads, and dips, adding bright variety without leftover waste on pricey entrees.',
      },
      {
        q: 'How many servings should each guest bring in their tray?',
        a: 'Ask every cook to bring 8 to 10 tasting-sized servings so combined platters comfortably feed everyone with seconds.',
      },
      {
        q: 'Should drinks, ice, and plates be counted as side dishes?',
        a: 'Assign beverages, cups, napkins, and utensils separately to two or three non-cooking guests.',
      },
    ],
  },

  'cook-sourdough': {
    seoTitle: `Convert Dry Yeast to Sourdough Starter Grams | ${SITE_NAME}`,
    metaDescription:
      'Easily convert dry yeast to sourdough starter grams and see exact flour and water deductions for naturally leavened loaves.',
    introDescription:
      'Adapting a reliable commercial yeast loaf to wild fermentation gives bread tangy depth and longer freshness when hydration stays balanced. When you convert dry yeast to sourdough starter grams here, type the recipe’s active dry yeast weight to get total starter grams alongside exact flour and water deductions. Subtracting the starter’s built-in flour and water keeps your dough texture right on target.',
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
        q: 'Why reduce recipe flour and water after adding sourdough starter?',
        a: 'A 100%-hydration starter is half flour and half water by weight, so deducting those grams prevents overly wet dough.',
      },
      {
        q: 'How much longer does sourdough take to rise than dry yeast?',
        a: 'Plan for three to six hours of room-temperature bulk fermentation instead of one hour with commercial packets.',
      },
      {
        q: 'Should sourdough starter be freshly fed before mixing dough?',
        a: 'Yes, use bubbly starter at peak volume roughly four to six hours after feeding for strong oven spring.',
      },
    ],
  },

  'cook-pan-volume': {
    seoTitle: `Calculate Cake Pan Volume Capacity in Cups | ${SITE_NAME}`,
    metaDescription:
      'Quickly calculate cake pan volume capacity in cups from tin diameter and wall depth in inches before pouring batter.',
    introDescription:
      'Discovering mid-bake that your tin is too small leaves messy burned batter smoking across the oven floor. When you calculate cake pan volume capacity in cups here, enter interior pan diameter and wall height in inches to find exact brim-full cup volume. Checking pan capacity beforehand lets you fill tins to the safe two-thirds mark and decide whether leftover batter belongs in extra cupcakes.',
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
        q: 'How full should I actually fill a cake pan with batter?',
        a: 'Stop between halfway and two-thirds of total cup capacity so leavened cakes have room to dome cleanly without spilling over.',
      },
      {
        q: 'Does a 9-inch square pan hold more batter than a 9-inch round pan?',
        a: 'Yes, square corners add roughly 27% more volume than a circular tin of identical width and depth.',
      },
      {
        q: 'Does this measurement work for springform cheesecake pans too?',
        a: 'Yes, measure straight across the inside base and up the vertical rim in inches for accurate cup capacity.',
      },
    ],
  },

  'cook-cocktail-dilution': {
    seoTitle: `Calculate Cocktail Ice Dilution Percentage | ${SITE_NAME}`,
    metaDescription:
      'Easily calculate cocktail ice dilution percentage and melt water ml from base drink volume and shaking or stirring seconds.',
    introDescription:
      'Ice does far more than chill a drink—controlled melt water rounds off sharp citrus and balances sweet syrups in shaken or stirred beverages. When you calculate cocktail ice dilution percentage here, enter your poured liquid volume in milliliters and shaking duration in seconds. Seeing estimated melt water and final poured volume helps home bartenders and baristas repeat crisp, balanced cold drinks consistently.',
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
        q: 'Why is controlled ice dilution important in cold drinks and mocktails?',
        a: 'A measured touch of melt water softens harsh acidity and thick syrups so flavors taste harmonious rather than cloying.',
      },
      {
        q: 'Does crushed ice dilute faster than large dense ice cubes?',
        a: 'Yes, crushed ice has far more exposed surface area and melts noticeably quicker during shaking.',
      },
      {
        q: 'Can this tool estimate dilution for iced shaken espresso?',
        a: 'Yes, enter your brewed espresso and syrup milliliters along with shake seconds to preview final chilled volume.',
      },
    ],
  },

  'cook-french-fry': {
    seoTitle: `Double Fry French Fries Temperature and Time | ${SITE_NAME}`,
    metaDescription:
      'Get exact double fry French fries temperature and time in Celsius for fluffy centers and crisp golden restaurant-style batches.',
    introDescription:
      'Soggy homemade fries happen when cooks try to cook raw potatoes through and crisp their exterior in one single hot oil dunk. Checking double fry French fries temperature and time gives you the classic two-stage schedule—low-temp 150°C blanching followed by high-temp 190°C crisping—for your potato batch weight. Pairing cold-water starch soaking with two thermal stages creates fluffy centers inside shattering golden crusts.',
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
        q: 'Why soak cut potato batons in cold water before blanching?',
        a: 'Washing off loose surface starch prevents fries from sticking together or burning dark before the inside softens.',
      },
      {
        q: 'How long should blanched fries rest before the second 190°C fry?',
        a: 'Drain and cool fries on a rack for 15 to 30 minutes (or freeze ahead) so surface moisture evaporates before final crisping.',
      },
      {
        q: 'Can I drop a full kilogram of cut potatoes into a home pot at once?',
        a: 'Fry in smaller 250g to 300g batches so cold potatoes do not crash oil heat and turn greasy.',
      },
    ],
  },
};
