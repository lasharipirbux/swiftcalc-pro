import { SITE_NAME } from '../config/site';

export interface AutomotiveCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const automotiveSeoFullMap: Record<string, AutomotiveCalculatorSeoEntry> = {
  'auto-fuel-mileage': {
    seoTitle: `Free Fuel Mileage Calculator (km/L) – Car Economy & L/100km | ${SITE_NAME}`,
    metaDescription:
      'Measure real car fuel economy in km/L and L/100km from kilometers driven and liters burned using our free Fuel Mileage Calculator (km/L).',
    howToUseSteps: [
      'Enter odometer trip distance in kilometers inside Distance Traveled (km).',
      'Type refill pump volume in liters into Fuel Consumed (Liters).',
      'Inspect real-world fuel average in km/L alongside L/100km consumption.',
    ],
    formulaExplanation:
      'Fuel economy in kilometers per liter divides total kilometers covered between full-tank refills by liters pumped to return to the auto-stop click, while inverse metric consumption scales per 100 km. Formula: Mileage (km/L) = Distance Traveled (km) / Fuel Consumed (Liters); L/100km = 100 / Mileage.',
    practicalExample:
      'Driving Distance Traveled (km) = 450 on a Lahore–Multan run using Fuel Consumed (Liters) = 35 computes 450 / 35 = 12.86 km/L (7.78 L / 100km).',
    faqs: [
      {
        q: 'What is the most accurate way to measure Fuel Consumed (Liters) at the petrol pump?',
        a: 'Fill the tank to the automatic click, reset your trip meter, drive 300+ km, and refill at the same pump to auto-stop to read exact liters used.',
      },
      {
        q: 'Why does city stop-and-go driving yield lower km/L than highway cruising?',
        a: 'Idling at traffic signals, repeated gear shifts, and heavy air-conditioning draw burn petrol while covering zero kilometers.',
      },
      {
        q: 'How does 12.86 km/L compare with hybrid hatchbacks in Pakistan?',
        a: 'Standard 1300cc petrol sedans average 11–14 km/L in mixed use, whereas 1000cc–1500cc hybrids often reach 18–24 km/L in city traffic.',
      },
    ],
  },

  'auto-trip-fuel-cost': {
    seoTitle: `Free Trip Fuel Cost Calculator – Liters & Petrol Bill (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Estimate total liters of petrol and PKR fuel expense for any road journey using our free Trip Fuel Cost Calculator.',
    howToUseSteps: [
      'Type planned route length in kilometers into Trip Distance (km).',
      'Enter your car’s expected economy inside Vehicle Mileage (km/L).',
      'Input current pump rate in rupees under Petrol Price per Liter (PKR) to check liters needed and rupee bill.',
    ],
    formulaExplanation:
      'Road trip fuel budgeting divides route distance in kilometers by average vehicle economy (km/L) to calculate required liters, then multiplies by local rupee fuel price per liter. Formula: Trip Fuel Cost (PKR) = (Trip Distance / Vehicle Mileage) × Petrol Price per Liter.',
    practicalExample:
      'Traveling Trip Distance (km) = 350 from Lahore to Islamabad at Vehicle Mileage (km/L) = 12 with Petrol Price per Liter (PKR) = 285 needs 29.2 Liters and costs PKR 8,313.',
    faqs: [
      {
        q: 'Should Trip Distance (km) cover one-way or round-trip kilometers?',
        a: 'Double one-way highway distance (such as 700 km instead of 350 km) if budgeting petrol for both outbound and return legs.',
      },
      {
        q: 'How much does turning on car AC reduce Vehicle Mileage (km/L) on highways?',
        a: 'Highway cruising with AC typically lowers km/L by 5%–10%, so shave ~1 km/L off your non-AC figure for safer budgeting.',
      },
      {
        q: 'Can diesel or Hi-Octane drivers use Petrol Price per Liter (PKR)?',
        a: 'Yes—simply type your local diesel or Hi-Octane pump rate per liter in PKR into that field.',
      },
    ],
  },

  'auto-cost-per-km': {
    seoTitle: `Free Cost per Kilometer Calculator – Driving Expense (PKR/km) | ${SITE_NAME}`,
    metaDescription:
      'Compute true driving expense per kilometer in PKR from total trip spend and kilometers driven with our free Cost per Kilometer Calculator.',
    howToUseSteps: [
      'Type combined fuel, toll, or ride fare spend in rupees inside Total Trip Cost (PKR).',
      'Enter kilometers traveled into Total Distance (km).',
      'Read exact Pakistani rupee running cost per kilometer.',
    ],
    formulaExplanation:
      'Running cost per kilometer normalizes total trip expenditure in PKR across route length in km, letting fleet owners, ride-hail drivers, and commuters benchmark per-km operating efficiency. Formula: Cost per km (PKR/km) = Total Trip Cost (PKR) / Total Distance (km).',
    practicalExample:
      'Spending Total Trip Cost (PKR) = 8,500 across Total Distance (km) = 400 works out to 8,500 / 400 = PKR 21.25 / km.',
    faqs: [
      {
        q: 'Should motorway tolls and parking go into Total Trip Cost (PKR)?',
        a: 'Yes—adding fuel, M-Tag tolls, and oil-wear allowances gives an all-inclusive per-kilometer transport cost.',
      },
      {
        q: 'How do ride-hailing drivers use Cost per km (PKR/km)?',
        a: 'Comparing ride fare per km against actual PKR 21.25 / km fuel cost quickly reveals true net profit on intercity or delivery trips.',
      },
      {
        q: 'Why must Total Distance (km) be above zero?',
        a: 'You cannot apportion trip cost across zero kilometers driven without dividing by zero.',
      },
    ],
  },

  'auto-speed-dist-time': {
    seoTitle: `Free Speed, Distance and Time Calculator – Road Trip (km & km/h) | ${SITE_NAME}`,
    metaDescription:
      'Solve travel hours, average speed in km/h, or distance in km using our free Speed, Distance and Time Calculator.',
    howToUseSteps: [
      'Pick which variable to compute under Calculate: Time, Speed, or Distance.',
      'Enter Distance (km) or Speed (km/h) inside Value 1 (Distance in km OR Speed in km/h).',
      'Type Speed (km/h) or Time (hours) into Value 2 (Speed in km/h OR Time in hours) to view the result.',
    ],
    formulaExplanation:
      'Highway travel kinematics links average speed (km/h), total kilometers covered (km), and elapsed driving hours (h) through one triangle relationship. Formula: Time = Distance / Speed; Speed = Distance / Time; Distance = Speed × Time.',
    practicalExample:
      'Selecting Calculate = Time with Value 1 = 300 km and Value 2 = 80 km/h calculates 300 / 80 = 3.75 hours, displayed as 3 hours and 45 minutes.',
    faqs: [
      {
        q: 'How do I enter 2 hours and 30 minutes when solving for Speed or Distance?',
        a: 'Convert minutes to decimal hours by dividing by 60—so 2 hours 30 minutes enters Value 2 as 2.5.',
      },
      {
        q: 'Why does real motorway travel take longer than Distance / Speed limit?',
        a: 'Toll booth queues, fuel stops, and slower urban approach roads lower overall average speed below top cruising km/h.',
      },
      {
        q: 'Which mode computes kilometers covered in 4.5 hours at 110 km/h?',
        a: 'Switch Calculate to Distance (Speed × Time), type 110 in Value 1 and 4.5 in Value 2 to get 495.0 km.',
      },
    ],
  },

  'auto-depreciation': {
    seoTitle: `Free Vehicle Depreciation Calculator – Car Resale Value (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Project car market resale value and total PKR depreciation loss over years of ownership using our free Vehicle Depreciation Calculator.',
    howToUseSteps: [
      'Type showroom invoice or buy price in rupees inside Initial Purchase Price (PKR).',
      'Enter vehicle ownership duration into Age of Car (Years).',
      'Input yearly value drop under Annual Depreciation Rate (%) to see current resale estimate and total lost PKR.',
    ],
    formulaExplanation:
      'Declining-balance vehicle depreciation applies a constant yearly percentage reduction onto each prior year’s remaining book value rather than subtracting a flat sum annually. Formula: Current Value (PKR) = Purchase Price × (1 − Annual Depreciation Rate / 100)^Age.',
    practicalExample:
      'A car bought at Initial Purchase Price (PKR) = 4,500,000 after Age of Car (Years) = 3 at Annual Depreciation Rate (%) = 10 retains PKR 3,280,500 (PKR 1,219,500 value lost).',
    faqs: [
      {
        q: 'Does every car in Pakistan follow a 10% Annual Depreciation Rate (%)?',
        a: 'Popular Japanese and local sedans sometimes hold value better during rupee inflation, while luxury imports and EVs may depreciate 12%–18% yearly.',
      },
      {
        q: 'How do Pakistani insurance companies depreciate vehicles on total loss claims?',
        a: 'Insurers commonly apply a standard 10% annual depreciation schedule after year one—aligning closely with declining-balance math.',
      },
      {
        q: 'Why does declining-balance value never hit zero PKR?',
        a: 'Because each year multiplies remaining value by 0.90 instead of subtracting fixed money, resale value tapers gradually like real used cars.',
      },
    ],
  },

  'auto-tank-range': {
    seoTitle: `Free Fuel Tank Range Calculator – Full Tank Kilometers | ${SITE_NAME}`,
    metaDescription:
      'Calculate maximum kilometers you can drive on a full petrol tank from tank liters and km/L using our free Fuel Tank Range Calculator.',
    howToUseSteps: [
      'Type full tank size in liters inside Fuel Tank Capacity (Liters).',
      'Enter average car economy into Vehicle Mileage (km/L).',
      'Check total highway or city driving range in kilometers.',
    ],
    formulaExplanation:
      'Cruising range multiplies total usable tank capacity in liters by expected kilometer-per-liter fuel efficiency to forecast maximum distance between petrol station stops. Formula: Total Range (km) = Fuel Tank Capacity (Liters) × Vehicle Mileage (km/L).',
    practicalExample:
      'A sedan with Fuel Tank Capacity (Liters) = 50 averaging Vehicle Mileage (km/L) = 14 covers 50 × 14 = 700 kilometers per full tank.',
    faqs: [
      {
        q: 'Should drivers plan motorway fuel stops right at 700 kilometers?',
        a: 'No—refill when 15%–20% reserve remains (around 560–600 km here) so fuel pump cooling stays submerged and traffic detours never strand you.',
      },
      {
        q: 'Where can I check my car’s exact Fuel Tank Capacity (Liters)?',
        a: 'Look inside the owner’s manual specifications table—most 1300cc–1800cc cars hold 42 to 55 liters, while SUVs hold 65 to 85 liters.',
      },
      {
        q: 'How much extra range do hybrid sedans achieve on a 45-liter tank?',
        a: 'At 22 km/L, a 45-liter tank stretches total theoretical range to 990 kilometers.',
      },
    ],
  },

  'auto-cost-sharing': {
    seoTitle: `Free Trip Cost Sharing Calculator – Split Fuel Expense (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Split combined petrol, toll, and carpool road trip bills evenly per traveler in PKR using our free Trip Cost Sharing Calculator.',
    howToUseSteps: [
      'Enter combined fuel, toll, and snack expenses in rupees inside Total Trip Cost (PKR).',
      'Type group headcount splitting the bill into Number of Travelers.',
      'See the exact equal PKR share owed by each passenger.',
    ],
    formulaExplanation:
      'Carpool expense splitting divides total trip cash outlay evenly across everyone riding together so each friend or colleague pays an identical per-person share. Formula: Cost per Person (PKR) = Total Trip Cost (PKR) / Number of Travelers.',
    practicalExample:
      'Splitting Total Trip Cost (PKR) = 12,000 for an Islamabad–Naran carpool among Number of Travelers = 4 equals PKR 3,000 / person.',
    faqs: [
      {
        q: 'Should the car owner be included inside Number of Travelers?',
        a: 'Include the driver if splitting fuel strictly evenly, or subtract 1 from Number of Travelers if passengers cover all fuel to offset vehicle wear and maintenance.',
      },
      {
        q: 'What happens if Number of Travelers is entered as 0?',
        a: 'The tool enforces a minimum of 1 traveler to avoid divide-by-zero errors.',
      },
      {
        q: 'Can office commuters use this for monthly carpool budgeting?',
        a: 'Yes—enter your combined monthly petrol and parking bill in Total Trip Cost (PKR) to find each coworker’s fair monthly share.',
      },
    ],
  },

  'auto-oil-change': {
    seoTitle: `Free Oil Change Reminder Calculator – Odometer Service km | ${SITE_NAME}`,
    metaDescription:
      'Check how many kilometers remain before your next engine oil service or spot overdue km using our free Oil Change Reminder Calculator.',
    howToUseSteps: [
      'Read your dashboard meter and enter it into Current Odometer (km).',
      'Type the sticker reading from your last service into Odometer at Last Oil Change (km).',
      'Set your oil grade lifespan inside Recommended Oil Interval (km) to check remaining km.',
    ],
    formulaExplanation:
      'Engine oil tracking subtracts your last service odometer mileage from today’s reading to measure distance already driven on the current oil fill, then compares against the manufacturer service interval. Formula: Remaining km = Recommended Oil Interval − (Current Odometer − Last Oil Change Odometer).',
    practicalExample:
      'At Current Odometer (km) = 48,200 after servicing at Odometer at Last Oil Change (km) = 43,000 on a Recommended Oil Interval (km) = 5,000, you have driven 5,200 km—meaning Oil change overdue by 200 km!',
    faqs: [
      {
        q: 'What Recommended Oil Interval (km) suits mineral vs fully synthetic engine oil?',
        a: 'Mineral 20W-50 oils generally run 3,000–4,000 km, semi-synthetic 5,000 km, and modern full synthetic 5W-30 oils 7,000–10,000 km.',
      },
      {
        q: 'Should dusty city commutes shorten Recommended Oil Interval (km)?',
        a: 'Yes—heavy idling in Pakistani summer heat and dusty urban traffic counts as severe duty, warranting shorter 4,000–5,000 km changes.',
      },
      {
        q: 'Do oil filters need replacement at every oil service?',
        a: 'Replacing the oil filter with every fresh oil drain prevents trapped sludge from contaminating clean oil.',
      },
    ],
  },

  'auto-token-tax': {
    seoTitle: `Free Car Token Tax Calculator (Pakistan) – Annual CC Excise | ${SITE_NAME}`,
    metaDescription:
      'Estimate yearly Pakistani provincial motor vehicle token tax in PKR from engine CC displacement using our free Car Token Tax Calculator (Pakistan).',
    howToUseSteps: [
      'Enter your vehicle’s registered engine size in cubic centimeters into Engine Capacity (CC).',
      'Check estimated annual token tax bracket in Pakistani Rupees.',
    ],
    formulaExplanation:
      'Provincial Excise & Taxation token schedules group passenger cars into displacement brackets: up to 1,000 CC (PKR 2,500), 1,001–1,500 CC (PKR 4,500), 1,501–2,000 CC (PKR 7,500), and above 2,000 CC (PKR 15,000). Formula: Annual Tax = Provincial CC Tier Lookup(Engine Capacity CC).',
    practicalExample:
      'Checking a 1.3L sedan with Engine Capacity (CC) = 1300 places it in the 1,001–1,500 CC tier at PKR 4,500 Annual Token Tax.',
    faqs: [
      {
        q: 'Do Punjab, Sindh, and Islamabad Excise departments charge the exact same token tax?',
        a: 'No—each province updates token slabs, luxury vehicle surcharges, and FBR filer/non-filer withholding levies yearly, so confirm exact challan amounts on your provincial Excise portal.',
      },
      {
        q: 'Are 660cc and 1000cc cars eligible for lifetime token tax?',
        a: 'Several provinces charge a one-time lifetime token fee for vehicles up to 1,000 CC instead of recurring yearly payments.',
      },
      {
        q: 'How does Engine Capacity (CC) treat electric vehicles?',
        a: 'Zero-CC electric cars follow specialized kW or flat provincial EV exemptions rather than combustion CC brackets.',
      },
    ],
  },

  'auto-motorway-toll': {
    seoTitle: `Free Toll Tax Trip Cost Calculator (Pakistan) – M1/M2/M5 PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate Pakistani motorway toll charges in PKR on M1, M2, M3, or M5 by km and vehicle type with our Toll Tax Trip Cost Calculator.',
    howToUseSteps: [
      'Enter interchange-to-interchange highway distance in kilometers inside Motorway Distance (km).',
      'Choose Car / Jeep / SUV, Coaster / Mini Bus, or Large Bus / Truck from Vehicle Category.',
      'View estimated total toll tax in Pakistani Rupees.',
    ],
    formulaExplanation:
      'NHA motorway toll estimation multiplies total tolled highway kilometers by an approximate per-kilometer vehicle rate—PKR 3.5/km for Cars/SUVs, PKR 6.0/km for Coasters, and PKR 9.5/km for Large Buses/Trucks. Formula: Total Toll (PKR) = Motorway Distance (km) × Category Rate (PKR/km).',
    practicalExample:
      'Driving Motorway Distance (km) = 365 along M2 (Lahore–Islamabad) in Vehicle Category = Car / Jeep / SUV estimates 365 × 3.5 = PKR 1,278 Toll Tax.',
    faqs: [
      {
        q: 'Do M-Tag and manual cash lanes charge different rates on Pakistani motorways?',
        a: 'Motorways increasingly apply higher penalties for non-M-Tag cash lanes on M1/M2, making M-Tag stickers cheaper and faster.',
      },
      {
        q: 'Can I estimate round-trip tolls in one click?',
        a: 'Double Motorway Distance (km)—entering 730 km instead of 365 km—to compute two-way toll expenses.',
      },
      {
        q: 'Why might actual NHA toll booths differ slightly from PKR 1,278?',
        a: 'NHA occasionally revises per-km tariffs and applies separate bridge/tunnel tolls on specific GT Road or expressway spurs.',
      },
    ],
  },

  'auto-fuel-budget': {
    seoTitle: `Free Average Monthly Fuel Budget Calculator (PKR) – Commute Cost | ${SITE_NAME}`,
    metaDescription:
      'Project monthly petrol liters and PKR commute bills from daily km and car mileage using our Average Monthly Fuel Budget Calculator.',
    howToUseSteps: [
      'Type average round-trip driving per day into Daily Commute Distance (km).',
      'Enter city fuel average inside Vehicle Mileage (km/L).',
      'Input current pump rate in rupees under Petrol Price per Liter (PKR) to view monthly budget and liters.',
    ],
    formulaExplanation:
      'Monthly commute fuel budgeting scales daily kilometers across a 30-day month, divides by car km/L economy to estimate monthly liters burned, and multiplies by local petrol price per liter. Formula: Monthly Fuel Budget (PKR) = [(Daily Commute km × 30) / Vehicle Mileage] × Petrol Price per Liter.',
    practicalExample:
      'Commuting Daily Commute Distance (km) = 40 (1,200 km/month) in a car getting Vehicle Mileage (km/L) = 13 at Petrol Price per Liter (PKR) = 285 burns ~92 Liters costing PKR 26,308 / month.',
    faqs: [
      {
        q: 'What if I only drive to the office 22 days a month instead of 30?',
        a: 'Multiply your weekday distance by 22 / 30 (e.g., enter 29.3 km for a 40 km 22-day commute) if weekend driving is minimal.',
      },
      {
        q: 'How much money does switching from a 10 km/L car to an 18 km/L hybrid save monthly?',
        a: 'On a 40 km daily commute at PKR 285/L, fuel spend drops from PKR 34,200 to PKR 19,000—saving PKR 15,200 every month.',
      },
      {
        q: 'Should fortnightly petrol price hikes be updated in Petrol Price per Liter (PKR)?',
        a: 'Yes—update the pump rate whenever OGRA/government fuel notifications adjust per-liter prices.',
      },
    ],
  },

  'auto-ev-charging': {
    seoTitle: `Free Electric Vehicle (EV) Charging Cost Calculator (PKR) – kWh Bill | ${SITE_NAME}`,
    metaDescription:
      'Compute EV full battery charge cost in PKR from kWh size and DISCO tariff rate using our EV Charging Cost Calculator.',
    howToUseSteps: [
      'Enter usable traction battery pack size inside EV Battery Capacity (kWh).',
      'Type home DISCO or fast-charger unit rate in Electricity Tariff Rate (PKR / kWh).',
      'Check full 0%–100% recharge cost in PKR.',
    ],
    formulaExplanation:
      'Charging an electric vehicle consumes grid kilowatt-hours proportional to battery storage capacity, multiplying battery kWh by your per-unit electricity tariff in PKR. Formula: Full Charge Cost (PKR) = EV Battery Capacity (kWh) × Electricity Tariff Rate (PKR / kWh).',
    practicalExample:
      'Charging a SUV with EV Battery Capacity (kWh) = 60 at Electricity Tariff Rate (PKR / kWh) = 35 costs 60 × 35 = PKR 2,100 for full charge.',
    faqs: [
      {
        q: 'How does PKR 2,100 EV charging compare to petrol over the same 400 km range?',
        a: 'A petrol SUV getting 10 km/L burns 40 liters (~PKR 11,400 at PKR 285/L) for 400 km—over five times the home EV charging cost.',
      },
      {
        q: 'Why does real meter consumption run ~10% higher than EV Battery Capacity (kWh)?',
        a: 'AC-to-DC onboard charger conversion and battery thermal cooling consume roughly 8%–12% extra grid electricity during charging.',
      },
      {
        q: 'Can solar net-metering owners lower Charging Cost further?',
        a: 'Yes—charging during peak daytime rooftop solar generation cuts effective Electricity Tariff Rate (PKR / kWh) close to solar export rates.',
      },
    ],
  },

  'auto-finance-emi': {
    seoTitle: `Free Car Loan / Auto Finance Monthly Payment Calculator – PKR EMI | ${SITE_NAME}`,
    metaDescription:
      'Calculate monthly car loan installments and total PKR payout from principal, markup %, and tenure with our Auto Finance Payment Calculator.',
    howToUseSteps: [
      'Enter bank-financed principal (vehicle price minus down payment) inside Loan Amount Financed (PKR).',
      'Type annual bank markup percentage into Annual Markup Rate (%).',
      'Set repayment duration under Tenure (Years) to inspect monthly EMI and total payments.',
    ],
    formulaExplanation:
      'Standard amortizing auto finance divides annual markup by 1,200 for monthly rate r and multiplies tenure years by 12 for total months n, keeping every monthly installment equal while interest share declines over time. Formula: EMI = [P × r × (1 + r)^n] / [(1 + r)^n − 1].',
    practicalExample:
      'Financing Loan Amount Financed (PKR) = 3,000,000 at Annual Markup Rate (%) = 17 over Tenure (Years) = 3 results in PKR 106,958 / month and Total Payments: PKR 3,850,495.',
    faqs: [
      {
        q: 'Does Loan Amount Financed (PKR) mean full car showroom price or net loan?',
        a: 'Always enter net financed principal after subtracting your 20%–30% cash equity down payment.',
      },
      {
        q: 'Why do Pakistani auto loans cap tenure at 3 to 5 years for cars over 1000cc?',
        a: 'State Bank prudential regulations limit financing terms (often 3 years above 1000cc, up to 5 years for smaller engines) to curb consumer credit risk.',
      },
      {
        q: 'Are car tracker and comprehensive insurance bundled inside PKR 106,958?',
        a: 'No—banks add annual insurance premiums and tracker fees separately onto your monthly schedule.',
      },
    ],
  },

  'auto-braking-distance': {
    seoTitle: `Free Braking Distance and Stopping Time Calculator – Wet vs Dry | ${SITE_NAME}`,
    metaDescription:
      'Compute minimum skid-to-stop braking distance in meters from speed in km/h and road friction using our free Braking Distance and Stopping Time Calculator.',
    howToUseSteps: [
      'Type highway cruising pace in km/h inside Vehicle Speed (km/h).',
      'Enter tire-pavement grip factor into Road Friction Coefficient (Dry ~0.7, Wet ~0.4).',
      'Review pure mechanical braking distance in meters.',
    ],
    formulaExplanation:
      'Emergency stopping physics converts speed from km/h to m/s (dividing by 3.6) and balances kinetic energy against friction deceleration μ × g (g = 9.8 m/s²), showing how stopping distance climbs with speed squared. Formula: Braking Distance (m) = (Speed km/h / 3.6)² / (2 × Road Friction Coefficient × 9.8).',
    practicalExample:
      'Braking from Vehicle Speed (km/h) = 100 on dry asphalt with Road Friction Coefficient (Dry ~0.7, Wet ~0.4) = 0.7 requires 56.2 Meters Braking Distance.',
    faqs: [
      {
        q: 'Why does Braking Distance jump from 56.2 m to 98.4 m on wet rain-slick roads?',
        a: 'Dropping Road Friction Coefficient from 0.7 dry to 0.4 wet cuts tire grip nearly in half, stretching braking distance by 75%.',
      },
      {
        q: 'Does 56.2 Meters include driver reaction time before hitting the brake pedal?',
        a: 'No—during a 1.0–1.5 second human reaction delay at 100 km/h (27.8 m/s), your car travels an extra 28–42 meters before brakes even engage.',
      },
      {
        q: 'How much longer is stopping distance at 120 km/h versus 100 km/h?',
        a: 'Because speed is squared, a 20% speed bump to 120 km/h increases braking distance by 44% (to ~81 meters dry).',
      },
    ],
  },

  'auto-cc-to-hp': {
    seoTitle: `Free Engine Displacement (CC) to Horsepower Estimator Calculator | ${SITE_NAME}`,
    metaDescription:
      'Estimate engine horsepower from CC displacement and natural or turbo induction with our Engine Displacement to Horsepower Estimator.',
    howToUseSteps: [
      'Enter engine cylinder volume inside Engine Displacement (CC).',
      'Select Naturally Aspirated (~0.075 HP/CC) or Turbocharged (~0.11 HP/CC) under Engine Type.',
      'Check estimated peak engine horsepower output.',
    ],
    formulaExplanation:
      'Empirical automotive sizing estimates naturally aspirated 4-stroke gasoline engines at roughly 0.075 HP per cubic centimeter and forced-induction turbocharged engines around 0.11 HP per CC. Formula: Estimated HP = Engine Displacement (CC) × Induction Factor.',
    practicalExample:
      'A 1.5L sedan with Engine Displacement (CC) = 1500 under Engine Type = Naturally Aspirated (~0.075 HP/CC) estimates ~113 Horsepower (HP).',
    faqs: [
      {
        q: 'Why does a 1000cc Turbocharged engine match or beat a 1500cc Naturally Aspirated motor?',
        a: 'Forced induction compresses extra oxygen into smaller cylinders, delivering ~110 HP from 1000cc turbo compared with ~113 HP from 1500cc NA.',
      },
      {
        q: 'Is ~113 Horsepower (HP) exact for every 1500cc car?',
        a: 'Actual manufacturer ratings vary by valve timing, compression ratio, and tuning (typically 105–130 HP for modern 1.5L cars).',
      },
      {
        q: 'Can motorcycle engines use this CC-to-HP estimator?',
        a: 'High-revving sportbikes extract higher HP/CC, whereas commuter 70cc–150cc single-cylinder bikes align reasonably with ~0.07 HP/CC.',
      },
    ],
  },

  'auto-carbon-footprint': {
    seoTitle: `Free Carbon Footprint (CO2 Emissions) Driving Calculator – Tonnes/Yr | ${SITE_NAME}`,
    metaDescription:
      'Calculate annual vehicle CO2 emissions in kg and tonnes from yearly km and km/L using our Carbon Footprint Driving Calculator.',
    howToUseSteps: [
      'Enter yearly mileage inside Annual Distance Driven (km).',
      'Type real-world economy into Vehicle Mileage (km/L).',
      'Inspect annual carbon footprint in metric tonnes and kilograms of CO₂.',
    ],
    formulaExplanation:
      'Combusting one liter of gasoline releases approximately 2.31 kilograms of carbon dioxide (CO₂); dividing yearly kilometers by km/L yields annual liters burned before multiplying by 2.31 kg/L. Formula: Annual CO₂ (kg) = (Annual Distance Driven / Vehicle Mileage) × 2.31.',
    practicalExample:
      'Driving Annual Distance Driven (km) = 15000 at Vehicle Mileage (km/L) = 12 burns 1,250 liters, emitting 2,888 kg CO₂ or 2.89 Tonnes CO₂ / year.',
    faqs: [
      {
        q: 'How can 1 liter of petrol create 2.31 kg of CO₂ when petrol weighs under 0.75 kg/L?',
        a: 'Every carbon atom inside fuel combines during combustion with two heavier atmospheric oxygen atoms (O₂), multiplying exhaust gas weight over threefold.',
      },
      {
        q: 'Do diesel engines emit different CO₂ per liter than petrol?',
        a: 'Yes—diesel holds higher carbon density, producing ~2.68 kg CO₂ per liter burned, though diesel cars often achieve higher km/L.',
      },
      {
        q: 'How much CO₂ does upgrading from 12 km/L to a 20 km/L hybrid save over 15,000 km/yr?',
        a: 'Annual emissions drop from 2.89 tonnes to 1.73 tonnes—cutting over 1.15 tonnes of CO₂ yearly.',
      },
    ],
  },

  'auto-monthly-value-loss': {
    seoTitle: `Free Car Resale Value Loss per Month Calculator – Depreciation PKR | ${SITE_NAME}`,
    metaDescription:
      'Find monthly vehicle resale depreciation in PKR from buy price, market value, and months owned with our Car Value Loss Calculator.',
    howToUseSteps: [
      'Enter what you originally paid in rupees inside Purchase Price (PKR).',
      'Type realistic used-market resale value into Estimated Current Value (PKR).',
      'Input holding duration inside Months Owned to inspect monthly rupee depreciation.',
    ],
    formulaExplanation:
      'Straight-line ownership depreciation measures real-world capital erosion by subtracting current resale appraisal from original purchase price and dividing across total months owned. Formula: Monthly Value Loss (PKR) = (Purchase Price − Estimated Current Value) / Months Owned.',
    practicalExample:
      'Buying at Purchase Price (PKR) = 5,000,000 and appraising at Estimated Current Value (PKR) = 3,800,000 after Months Owned = 24 reveals PKR 1,200,000 total drop, or PKR 50,000 / month.',
    faqs: [
      {
        q: 'Why can Estimated Current Value sometimes exceed Purchase Price in Pakistan?',
        a: 'Severe rupee devaluation or factory delivery backlogs temporarily push used car market prices upward, producing negative depreciation (appreciation).',
      },
      {
        q: 'How does PKR 50,000 / month compare with monthly petrol costs?',
        a: 'Many drivers notice monthly resale depreciation quietly exceeds their entire monthly fuel budget—making total ownership cost eye-opening.',
      },
      {
        q: 'Should registration and withholding tax be added into Purchase Price (PKR)?',
        a: 'Include registration fees and non-refundable filer/non-filer levies inside Purchase Price (PKR) for true all-in monthly capital cost.',
      },
    ],
  },

  'auto-road-trip-planner': {
    seoTitle: `Free Road Trip Time & Fuel Stops Planner Calculator – Hours & Stops | ${SITE_NAME}`,
    metaDescription:
      'Plan total driving hours and petrol refill stops across long intercity journeys using our free Road Trip Time & Fuel Stops Planner Calculator.',
    howToUseSteps: [
      'Enter complete route length inside Total Journey Distance (km).',
      'Type realistic cruising speed including slowdowns under Average Driving Speed (km/h).',
      'Input usable distance per tank inside Full Tank Driving Range (km) to calculate driving hours and fuel stops.',
    ],
    formulaExplanation:
      'Intercity travel planning divides total route distance by average highway speed to compute pure wheel-rolling hours, while dividing route distance by tank range (rounded down) estimates full-tank refuel stops needed en route. Formula: Driving Time (h) = Total Distance / Average Speed; Fuel Stops = floor(Total Distance / Tank Range).',
    practicalExample:
      'Covering Total Journey Distance (km) = 900 from Lahore to Sukkur at Average Driving Speed (km/h) = 85 with Full Tank Driving Range (km) = 550 estimates Driving Time: ~10.6 hours (1 Fuel Stops).',
    faqs: [
      {
        q: 'Should I add extra buffer time for rest areas beyond Driving Time: ~10.6 hours?',
        a: 'Yes—plan an extra 15–20 minutes per fuel or tea stop on top of pure driving hours.',
      },
      {
        q: 'Why enter safe usable range in Full Tank Driving Range (km) rather than empty-tank range?',
        a: 'Using 80% of maximum tank range guarantees you reach open motorway service areas safely before hitting reserve fuel.',
      },
      {
        q: 'What does 0 Fuel Stops mean?',
        a: 'Zero stops indicates your Total Journey Distance fits inside a single full tank starting from departure.',
      },
    ],
  },

  'auto-oil-consumption': {
    seoTitle: `Free Engine Oil Consumption Rate Calculator – km per Liter | ${SITE_NAME}`,
    metaDescription:
      'Track engine oil burn rate in km per liter from top-up liters and kilometers driven using our free Engine Oil Consumption Rate Calculator.',
    howToUseSteps: [
      'Enter top-up oil quantity added in liters inside Oil Consumed (Liters).',
      'Type kilometers accumulated since the last full oil mark into Distance Driven (km).',
      'Inspect how many kilometers your engine runs per liter of oil burned.',
    ],
    formulaExplanation:
      'Monitoring oil burn rate between scheduled services divides kilometers traveled by top-up oil liters needed to restore dipstick full mark, helping spot worn piston rings or valve seals early. Formula: km per Liter of Oil = Distance Driven (km) / Oil Consumed (Liters).',
    practicalExample:
      'Adding Oil Consumed (Liters) = 1.5 after Distance Driven (km) = 3000 gives 3,000 / 1.5 = 2000 km per Liter of Oil.',
    faqs: [
      {
        q: 'What Engine Oil Consumption Rate is normal versus worrying for passenger cars?',
        a: 'Healthy modern engines rarely burn more than 1 liter over 5,000+ km; burning 1 liter every 1,000–1,500 km typically warrants compression or seal inspection.',
      },
      {
        q: 'Can turbocharged direct-injection engines consume more oil than naturally aspirated ones?',
        a: 'Yes—many OEMs state up to 0.5–1.0 liter per 2,000 km remains within tolerance on high-boost turbo cars under spirited driving.',
      },
      {
        q: 'Always check the dipstick on level ground?',
        a: 'Wait 5–10 minutes after shutting off a warm engine on flat pavement before reading Oil Consumed (Liters) accurately.',
      },
    ],
  },

  'auto-insurance-cost': {
    seoTitle: `Free Car Insurance Annual Premium Estimator (PKR) Calculator | ${SITE_NAME}`,
    metaDescription:
      'Estimate yearly and monthly comprehensive car insurance premiums in PKR from car value and rate using our Car Insurance Cost Estimator.',
    howToUseSteps: [
      'Type insured declared market value in rupees inside Car Market Value (PKR).',
      'Enter insurer quoted percentage under Insurance Rate (%) (typically 1.75%–3.5%).',
      'Review annual policy premium and equivalent monthly cost in PKR.',
    ],
    formulaExplanation:
      'Comprehensive motor insurance or takaful calculates annual coverage cost by multiplying your vehicle’s insured declared market value by the underwriter’s annual percentage rate. Formula: Annual Premium (PKR) = Car Market Value × (Insurance Rate / 100); Monthly = Annual / 12.',
    practicalExample:
      'Insuring a sedan at Car Market Value (PKR) = 4,000,000 with Insurance Rate (%) = 2.5 costs PKR 100,000 / year (PKR 8,333 monthly).',
    faqs: [
      {
        q: 'What Insurance Rate (%) do Pakistani insurers and takaful companies usually quote?',
        a: 'Private comprehensive policies generally range from 1.75% to 3.0% depending on city theft risk, vehicle age, and whether a tracker is installed.',
      },
      {
        q: 'Does installing a GPS tracker reduce Insurance Rate (%)?',
        a: 'Many insurers waive 0.25%–0.50% off comprehensive rates—or require trackers strictly—on popular models like Corolla, Civic, and Alto.',
      },
      {
        q: 'Why should Car Market Value (PKR) reflect current resale price rather than outdated invoice price?',
        a: 'Under-insuring below real market value lowers theft/total-loss payouts proportionally under average clauses.',
      },
    ],
  },

  'auto-hp-to-kw': {
    seoTitle: `Free Horsepower to Kilowatts (HP to kW) Converter Calculator | ${SITE_NAME}`,
    metaDescription:
      'Convert mechanical engine horsepower (HP) into metric kilowatts (kW) instantly using our free Horsepower to Kilowatts (HP to kW) Converter Calculator.',
    howToUseSteps: [
      'Enter engine output rating inside Power in Horsepower (HP).',
      'Read equivalent metric mechanical power directly in Kilowatts (kW).',
    ],
    formulaExplanation:
      'International automotive specifications compare imperial mechanical horsepower (HP) against metric kilowatts (kW) using the fixed conversion factor 1 mechanical HP = 0.7457 kW. Formula: Kilowatts (kW) = Horsepower (HP) × 0.7457.',
    practicalExample:
      'Converting Power in Horsepower (HP) = 150 multiplies 150 × 0.7457 = 111.86 kW (Kilowatts).',
    faqs: [
      {
        q: 'Why do European and EV spec sheets list engine power in kW instead of HP?',
        a: 'Metric SI standards and electric drivetrain ratings specify motor power in kilowatts so battery kWh and peak motor kW share matching units.',
      },
      {
        q: 'Is mechanical HP (0.7457 kW) identical to European metric PS (Pferdestärke)?',
        a: 'Almost—1 metric PS equals 0.7355 kW (roughly 98.6% of 1 imperial mechanical HP).',
      },
      {
        q: 'How many HP equal a 100 kW electric car motor?',
        a: 'Dividing 100 by 0.7457 gives ~134.1 mechanical HP.',
      },
    ],
  },

  'auto-average-speed': {
    seoTitle: `Free Average Speed Over Speed Camera Distance Calculator – km/h | ${SITE_NAME}`,
    metaDescription:
      'Compute average speed in km/h between motorway cameras from distance in meters and seconds using our Average Speed Camera Calculator.',
    howToUseSteps: [
      'Type distance between gantry checkpoints in meters inside Camera Distance (Meters).',
      'Enter elapsed stopwatch seconds under Time Taken (Seconds).',
      'Check resulting average vehicle speed in kilometers per hour (km/h).',
    ],
    formulaExplanation:
      'Point-to-point speed enforcement divides distance in meters by travel time in seconds to obtain speed in m/s, then multiplies by 3.6 (3,600 s/hr ÷ 1,000 m/km) to convert directly into km/h. Formula: Average Speed (km/h) = [Camera Distance (Meters) / Time Taken (Seconds)] × 3.6.',
    practicalExample:
      'Clearing Camera Distance (Meters) = 5000 (5 km) in Time Taken (Seconds) = 200 computes (5,000 / 200) × 3.6 = 90.0 km/h Average Speed.',
    faqs: [
      {
        q: 'Why multiply meters per second by 3.6 to get km/h?',
        a: 'One hour contains 3,600 seconds and one kilometer contains 1,000 meters, so 3,600 / 1,000 simplifies cleanly to 3.6.',
      },
      {
        q: 'How do average-speed motorway camera corridors catch brief speeding?',
        a: 'Even if you slow down right under the second camera, arriving too soon after passing the first gantry raises average km/h above the limit.',
      },
      {
        q: 'How do I enter a 5 km highway stretch into Camera Distance (Meters)?',
        a: 'Multiply kilometers by 1,000—entering 5000 meters for a 5 km segment.',
      },
    ],
  },

  'auto-battery-health': {
    seoTitle: `Free Car Battery Health & Replacement Estimator Calculator – 12V | ${SITE_NAME}`,
    metaDescription:
      'Check starter 12V car battery condition from age in months and resting voltage using our free Car Battery Health & Replacement Estimator Calculator.',
    howToUseSteps: [
      'Enter months elapsed since installation inside Battery Age (Months).',
      'Measure and input cold-engine multimeter reading into Resting Voltage (Volts).',
      'Review health classification to judge whether replacement is approaching.',
    ],
    formulaExplanation:
      'Lead-acid 12V automotive batteries indicate state of charge through open-circuit resting voltage: healthy charged cells hold ~12.4V–12.7V, dropping to Fair/Monitor below 12.3V or past 36 months, and Replacement Recommended Soon below 12.0V or past 48 months. Formula: Status = Threshold Check(Battery Age, Resting Voltage).',
    practicalExample:
      'Testing a battery at Battery Age (Months) = 36 with Resting Voltage (Volts) = 12.4 returns Good Health.',
    faqs: [
      {
        q: 'Should Resting Voltage (Volts) be measured with the engine running or parked?',
        a: 'Always test with the engine off after sitting parked at least 2–4 hours; an active alternator shows ~14.0V–14.4V charging voltage instead of battery health.',
      },
      {
        q: 'Why do car batteries die sooner in Pakistani summer heat (45°C+)?',
        a: 'Extreme under-hood heat accelerates electrolyte evaporation and internal plate sulfation, often limiting lead-acid life to 24–36 months.',
      },
      {
        q: 'Does 12.4V guarantee strong winter cold cranking?',
        a: 'Resting voltage confirms state of charge, though an aging 36-month battery can still suffer voltage sag under starter load—ask a battery shop for a load test if cranking feels sluggish.',
      },
    ],
  },

  'auto-parking-fee': {
    seoTitle: `Free Parking Fee Cost Calculator – Hourly Mall & Airport PKR | ${SITE_NAME}`,
    metaDescription:
      'Calculate total parking charges in Pakistani Rupees from parked hours and hourly rate with our free Parking Fee Cost Calculator.',
    howToUseSteps: [
      'Enter total hours stayed in the lot inside Parking Duration (Hours).',
      'Type lot hourly fee in rupees into Rate per Hour (PKR).',
      'Inspect total parking bill in PKR.',
    ],
    formulaExplanation:
      'Metered airport, hospital, and shopping mall garages compute simple parking charges by multiplying total billed hours by the posted hourly rupee tariff. Formula: Total Parking Fee (PKR) = Parking Duration (Hours) × Rate per Hour (PKR).',
    practicalExample:
      'Parking for Parking Duration (Hours) = 4 at a mall charging Rate per Hour (PKR) = 100 calculates 4 × 100 = PKR 400.',
    faqs: [
      {
        q: 'Should partial hours like 2 hours 15 minutes be rounded up in Parking Duration (Hours)?',
        a: 'Most Pakistani malls and airports charge any started hour as a full hour—enter 3 hours for 2h 15m unless pro-rated billing applies.',
      },
      {
        q: 'Can Rate per Hour (PKR) estimate daily flat-rate airport stays?',
        a: 'Enter number of parked days into Parking Duration (Hours) and daily airport rate into Rate per Hour (PKR) to total multi-day charges.',
      },
      {
        q: 'What if a mall offers the first 1 hour free?',
        a: 'Subtract 1 complimentary hour from Parking Duration (Hours) before multiplying by Rate per Hour (PKR).',
      },
    ],
  },

  'auto-rpm-speed': {
    seoTitle: `Free Engine RPM and Speed Relationship Calculator – Gear km/h | ${SITE_NAME}`,
    metaDescription:
      'Estimate road speed in km/h from engine RPM and combined transmission/final-drive gear ratio using our free Engine RPM and Speed Relationship Calculator.',
    howToUseSteps: [
      'Type tachometer engine speed inside Engine RPM.',
      'Enter combined gearbox plus differential ratio into Total Gear Ratio (Transmission × Final Drive).',
      'Check wheel RPM and approximate cruising speed in km/h.',
    ],
    formulaExplanation:
      'Drivetrain gearing reduces crankshaft revolutions per minute by the combined transmission and differential ratio to determine wheel RPM, then converts wheel rotation into estimated road speed in km/h. Formula: Wheel RPM = Engine RPM / Total Gear Ratio; Speed (km/h) ≈ Wheel RPM × 0.055.',
    practicalExample:
      'Cruising at Engine RPM = 2500 in top gear with Total Gear Ratio (Transmission × Final Drive) = 3.2 yields Wheel RPM: 781 rpm and ~43.0 km/h.',
    faqs: [
      {
        q: 'How do I calculate Total Gear Ratio (Transmission × Final Drive)?',
        a: 'Multiply the selected gear ratio (e.g., 5th gear = 0.78) by your differential final drive ratio (e.g., 4.10) to get 3.20.',
      },
      {
        q: 'Why does fitting oversized tires alter real road speed relative to Engine RPM?',
        a: 'Larger outer tire circumference covers more road distance per wheel revolution, making actual km/h slightly higher than speedometer readings.',
      },
      {
        q: 'Why is highway cruising RPM lower in 5th or 6th overdrive gear?',
        a: 'Overdrive gears use ratios below 1.0 (like 0.70), lowering Total Gear Ratio so wheels spin fast while the engine stays quiet and fuel-efficient.',
      },
    ],
  },

  'auto-loan-emi': {
    seoTitle: `Free Car Financing Monthly EMI Calculator – Auto Loan PKR | ${SITE_NAME}`,
    metaDescription:
      'Compute monthly car financing EMI and total bank payout in PKR from principal, interest %, and tenure with our Car Loan EMI Calculator.',
    howToUseSteps: [
      'Enter net borrowed bank amount in rupees into Loan Amount (PKR).',
      'Type yearly financing rate inside Annual Interest Rate (%).',
      'Specify repayment period in years under Loan Tenure (Years) to view monthly EMI and cumulative payment.',
    ],
    formulaExplanation:
      'Equal Monthly Installment (EMI) auto-loan math converts annual interest into a monthly decimal rate r = Rate / 1,200 across n = Tenure × 12 months so principal plus reducing-balance interest amortize completely by month n. Formula: EMI = [Loan Amount × r × (1 + r)^n] / [(1 + r)^n − 1].',
    practicalExample:
      'Taking Loan Amount (PKR) = 4,500,000 at Annual Interest Rate (%) = 18 across Loan Tenure (Years) = 5 produces PKR 114,270 / month and PKR 6,856,225 total payments.',
    faqs: [
      {
        q: 'How much extra total interest does stretching Loan Tenure (Years) from 3 to 5 add?',
        a: 'Longer tenures trim the monthly installment slightly while adding substantially more cumulative markup across years 4 and 5.',
      },
      {
        q: 'Does Islamic Diminishing Musharakah car finance share similar monthly EMI math?',
        a: 'Fixed-rate rentals follow almost identical monthly payment curves when rental rate equals the entered Annual Interest Rate (%), though KIBOR-linked plans reset yearly.',
      },
      {
        q: 'What happens if Annual Interest Rate (%) is 0% under a zero-markup dealer promo?',
        a: 'At 0%, the formula simply divides Loan Amount (PKR) evenly by total months with zero financing surcharge.',
      },
    ],
  },

  'auto-hp-torque': {
    seoTitle: `Free Horsepower to Torque Estimator Calculator – RPM & HP | ${SITE_NAME}`,
    metaDescription:
      'Calculate engine horsepower from torque and crankshaft RPM via the 5252 formula using our Horsepower to Torque Estimator.',
    howToUseSteps: [
      'Enter peak or current twisting force inside Torque (lb-ft or Nm).',
      'Type crankshaft engine speed into Engine RPM.',
      'Check corresponding rotational horsepower output.',
    ],
    formulaExplanation:
      'Engine power measures how rapidly rotational torque performs work over time; in classic SAE dynamometer math using lb-ft of torque and crankshaft RPM, horsepower and torque curves always cross identically at 5,252 RPM. Formula: Horsepower (HP) = (Torque × Engine RPM) / 5252.',
    practicalExample:
      'Producing Torque (lb-ft or Nm) = 250 at Engine RPM = 5250 outputs (250 × 5250) / 5252 = 249.9 Horsepower (HP).',
    faqs: [
      {
        q: 'Why does 5252 appear in HP = (Torque × RPM) / 5252?',
        a: 'Dividing 33,000 ft-lb/min per horsepower by 2π radians per revolution equals 5,252.11—locking HP and lb-ft torque equal at 5,252 RPM.',
      },
      {
        q: 'Should I convert Newton-meters (Nm) to lb-ft before entering Torque (lb-ft or Nm)?',
        a: 'For exact SAE horsepower, multiply Nm by 0.73756 (for instance, 339 Nm ≈ 250 lb-ft) since the 5252 divisor is calibrated in lb-ft.',
      },
      {
        q: 'Why do diesel SUVs feel quick off the line even with modest peak HP?',
        a: 'Diesels deliver huge Torque at low 1,800–2,500 RPM for immediate acceleration, even though low redlines cap peak Horsepower.',
      },
    ],
  },

  'auto-tire-profile': {
    seoTitle: `Free Tire Sidewall Height & Diameter Calculator – Rim Size (in) | ${SITE_NAME}`,
    metaDescription:
      'Calculate tire sidewall mm and total wheel diameter in inches from width, aspect ratio, and rim size with our Tire Profile Calculator.',
    howToUseSteps: [
      'Type tread section width in millimeters inside Tire Width (mm) (the first number in 205/55R16).',
      'Enter sidewall percentage into Aspect Ratio (%) (e.g., 55).',
      'Supply wheel alloy size inside Rim Diameter (Inches) to check sidewall mm and overall tire inches.',
    ],
    formulaExplanation:
      'Metric tire sizing (such as 205/55R16) defines sidewall height as a percentage of tread width in millimeters; converting two sidewalls to inches (÷ 25.4) and adding rim diameter yields overall wheel height. Formula: Sidewall (mm) = Width × (Aspect Ratio / 100); Overall Diameter (in) = Rim + 2 × (Sidewall / 25.4).',
    practicalExample:
      'Checking a standard 205/55R16 tire with Tire Width (mm) = 205, Aspect Ratio (%) = 55, and Rim Diameter (Inches) = 16 gives Sidewall height: 112.8 mm (4.44 in) and Overall Diameter: 24.9 inches.',
    faqs: [
      {
        q: 'How closely should replacement tires match original Overall Diameter (24.9 inches)?',
        a: 'Stay within ±3% of factory overall diameter so speedometer calibration, ABS sensors, and fender clearance stay accurate.',
      },
      {
        q: 'What happens if I upgrade from 16-inch to 17-inch alloys without lowering Aspect Ratio (%)?',
        a: 'Keeping a 55 profile on a larger 17-inch rim raises Overall Diameter by a full inch, hurting braking gearing and risking wheel-well rubbing.',
      },
      {
        q: 'Why do taller Sidewall height tires ride softer on rough Pakistani city roads?',
        a: 'Extra rubber cushion absorbs potholes and speed bumps better, protecting expensive alloy rims from bends.',
      },
    ],
  },

  'auto-speeding-fine': {
    seoTitle: `Free Speeding Ticket Fine Estimator Calculator – Motorway PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate Pakistani motorway or city speeding challan fines in PKR from road limit and actual km/h with our Speeding Fine Estimator.',
    howToUseSteps: [
      'Type posted road speed cap in km/h inside Speed Limit (km/h).',
      'Enter vehicle radar or camera speed into Actual Speed Driven (km/h).',
      'Check excess km/h margin and estimated traffic challan fine in PKR.',
    ],
    formulaExplanation:
      'Motorway and traffic police fine estimation measures excess km/h above the posted limit and assigns graduated penalty tiers: +1–10 km/h (PKR 1,000), +11–20 km/h (PKR 1,500), +21–30 km/h (PKR 2,500), and over +30 km/h (PKR 5,000). Formula: Excess Speed (km/h) = Actual Speed Driven − Speed Limit.',
    practicalExample:
      'Clocking Actual Speed Driven (km/h) = 145 inside a Speed Limit (km/h) = 120 motorway zone logs +25 km/h excess speed, estimating PKR 2,500 Fine.',
    faqs: [
      {
        q: 'Do NHMP Motorway Police and city e-challan cameras enforce different fine schedules?',
        a: 'Yes—National Highways & Motorway Police, Punjab Safe Cities e-challan, and Sindh/ICT traffic police revise challan tariffs periodically, so treat PKR 2,500 as an estimate.',
      },
      {
        q: 'What is the standard car Speed Limit (km/h) on Pakistan’s M1 and M2 motorways?',
        a: 'Passenger cars are generally capped at 120 km/h on dry clear sections (lowered to 100 km/h for LTV/buses and lower during fog or rain).',
      },
      {
        q: 'What displays if Actual Speed Driven (km/h) is at or below Speed Limit (km/h)?',
        a: 'The tool confirms no speeding violation occurred.',
      },
    ],
  },
};
