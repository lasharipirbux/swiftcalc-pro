import { SITE_NAME } from '../config/site';

export interface ElectricalCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  introDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
  safetyNote: string;
}

export const electricalSeoFullMap: Record<string, ElectricalCalculatorSeoEntry> = {
  'elec-ohms-law': {
    seoTitle: `How to Calculate Amps and Watts Ohms Law | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate amps and watts Ohms Law from supply voltage and resistance in Ohms for safe DC and AC circuit checks.',
    introDescription:
      'Troubleshooting a heater coil, bench power supply, or DC motor loop begins with knowing how to calculate amps and watts Ohms Law relationships before touching a multimeter. Enter your supply potential in Volts alongside circuit resistance in Ohms to compute exact current draw in Amps and heat power in Watts. Checking current and dissipation ahead of time keeps component wattages and breaker limits safely inside specifications.',
    howToUseSteps: [
      'Type supply potential into the Voltage (Volts) box.',
      'Enter load impedance inside Resistance (Ohms Ω).',
      'Inspect resulting current in Amps and dissipated power in Watts.',
    ],
    formulaExplanation:
      "Ohm's Law defines linear proportionality between circuit voltage, current flow, and electrical resistance, while Joule's Law derives real power draw by multiplying supply voltage by current. Formula: Current (I) = Voltage (Volts) / Resistance (Ohms Ω); Power (P) = Voltage × Current.",
    practicalExample:
      'Applying Voltage (Volts) = 230 across Resistance (Ohms Ω) = 46 calculates Current: 5.00 Amps and Power: 1150.0 Watts.',
    faqs: [
      {
        q: 'Why can resistance never be set to zero in Ohms Law?',
        a: 'Zero resistance represents a dead short circuit where current surges toward infinity and immediately trips breakers or melts wires.',
      },
      {
        q: 'Does standard Ohms Law apply to both DC circuits and AC heaters?',
        a: 'Yes, battery loops, heating elements, and incandescent bulbs follow V = I × R directly without phase shifts.',
      },
      {
        q: 'What happens to power if voltage doubles on a fixed resistor?',
        a: 'Current doubles alongside voltage, causing total power heat dissipation to multiply by four.',
      },
    ],
    safetyNote:
      "Safety Note: Ohm's law calculations provide estimation figures only; always have a qualified electrician verify breaker ratings and live wiring work.",
  },

  'elec-bill-calc': {
    seoTitle: `How to Calculate Monthly Electricity Bill | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate monthly electricity bill charges quickly from metered kWh units consumed and your utility rate per kWh.',
    introDescription:
      'Budgeting household or office power expenses before the utility invoice arrives is straightforward once you know how to calculate monthly electricity bill totals from your meter reading. Enter total kilowatt-hours consumed during the billing cycle alongside your effective rate per kWh unit. Checking estimated energy charges mid-month helps families spot high usage early and keep monthly bills from jumping into higher tariff slabs.',
    howToUseSteps: [
      'Enter meter usage inside Units Consumed (kWh).',
      'Type your slab price per unit into Rate per Unit (PKR / kWh).',
      'Read total estimated rupee electricity cost immediately.',
    ],
    formulaExplanation:
      'Utility electricity meters measure active energy consumption in kilowatt-hours (1 unit = 1,000 watts sustained for one hour). Multiplying billed units by your effective tariff yields base energy charges before taxes and surcharges. Formula: Total Bill (PKR) = Units Consumed (kWh) × Rate per Unit (PKR / kWh).',
    practicalExample:
      'Consuming Units Consumed (kWh) = 350 at Rate per Unit (PKR / kWh) = 35 calculates an energy charge of PKR 12,250.',
    faqs: [
      {
        q: 'Why is my printed utility bill sometimes higher than units times rate?',
        a: 'Utilities often add fixed meter fees, fuel adjustments, sales taxes, and tiered slab surcharges onto base energy charges.',
      },
      {
        q: 'How do I read monthly units consumed from my electric meter?',
        a: 'Subtract last month’s billed kWh meter reading from today’s current cumulative kWh display.',
      },
      {
        q: 'How much electricity equals one kWh unit?',
        a: 'Running a 1,000-watt iron, space heater, or kettle continuously for one hour uses exactly 1 kWh.',
      },
    ],
    safetyNote:
      'Safety Note: Meter billing numbers serve estimation purposes only; consult a licensed electrician to inspect meter wiring or overload issues.',
  },

  'elec-appliance-cost': {
    seoTitle: `How to Calculate Appliance Running Cost | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate appliance running cost per day and per month from device wattage, daily run hours, and tariff rate.',
    introDescription:
      'Identifying which household devices drive up utility bills starts with learning how to calculate appliance running cost from nameplate wattage. Enter the appliance’s rating in Watts, average operating hours per day, and your local electricity rate per kWh. Viewing both daily energy expense and 30-day monthly cost side by side makes it easy to test how cutting heater or iron hours lowers your bill.',
    howToUseSteps: [
      'Check the appliance nameplate and enter wattage in Appliance Power (Watts).',
      'Type daily operating duration inside Hours Used per Day.',
      'Enter electricity tariff inside Rate per Unit (PKR / kWh) to view daily and monthly cost.',
    ],
    formulaExplanation:
      'Dividing wattage by 1,000 converts nameplate power into kilowatts; multiplying by daily run hours yields daily kWh units, which then scale by tariff and 30 days for monthly budgeting. Formula: Daily kWh = (Appliance Power × Hours Used per Day) / 1000; Monthly Cost = Daily kWh × Rate per Unit × 30.',
    practicalExample:
      'Running an Appliance Power (Watts) = 1500 iron or space heater for Hours Used per Day = 6 at Rate per Unit (PKR / kWh) = 35 consumes 9.00 kWh/day (Daily Cost: PKR 315.00), totaling PKR 9,450 / month.',
    faqs: [
      {
        q: 'Should refrigerators be calculated at 24 hours per day?',
        a: 'No, fridge compressors cycle off once cold, typically running actively around 8 to 10 hours across a day.',
      },
      {
        q: 'How do I estimate wattage if a label only lists Amps?',
        a: 'Multiply the rated Amps by your wall mains voltage, such as 120V or 230V, to estimate approximate Watts.',
      },
      {
        q: 'Does trimming high-wattage usage by two hours daily make a noticeable difference?',
        a: 'Running a 1,500-watt heater two fewer hours daily saves 90 kWh units every single month.',
      },
    ],
    safetyNote:
      'Safety Note: Running-cost figures are estimates only; engage a qualified electrician before wiring high-wattage appliances to wall sockets.',
  },

  'elec-resistor-calc': {
    seoTitle: `How to Calculate Series Parallel Resistors | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate series parallel resistors to find total equivalent resistance in Ohms for breadboards and repairs.',
    introDescription:
      'Building a prototype when your parts bin lacks an exact Ohm value becomes simple once you know how to calculate series parallel resistors accurately. Choose whether two resistors sit end-to-end in series or side-by-side in parallel, then enter each value in Ohms. Combining common standard values in parallel or series gives technicians fast equivalent resistance targets right at the workbench.',
    howToUseSteps: [
      'Select Series Connection (R1 + R2) or Parallel Connection (R1 || R2) in Connection Type.',
      'Type first component resistance inside Resistor 1 (Ohms Ω).',
      'Enter second resistance into Resistor 2 (Ohms Ω) to view equivalent Ohms.',
    ],
    formulaExplanation:
      'Series wiring forces identical current through both components consecutively so total opposition adds directly, whereas parallel wiring splits current across two branches so total resistance always drops below the smallest branch. Formula: Series R_eq = R1 + R2; Parallel R_eq = (R1 × R2) / (R1 + R2).',
    practicalExample:
      'Choosing Series Connection (R1 + R2) with Resistor 1 (Ohms Ω) = 100 and Resistor 2 (Ohms Ω) = 150 sums directly to 250.00 Ω (whereas Parallel yields 60.00 Ω).',
    faqs: [
      {
        q: 'What is the shortcut for two equal resistors wired in parallel?',
        a: 'Two identical parallel resistors always combine to half of one resistor’s Ohms value.',
      },
      {
        q: 'Why is parallel equivalent resistance always smaller than either resistor?',
        a: 'Adding a second parallel path lets more total electrical current flow simultaneously across the node.',
      },
      {
        q: 'Do two equal resistors handle more power wattage together?',
        a: 'Yes, splitting current or voltage across two identical resistors doubles combined heat dissipation capacity.',
      },
    ],
    safetyNote:
      'Safety Note: Resistance values are theoretical bench estimates only; have a qualified electrician verify mains-voltage resistor networks and thermal limits.',
  },

  'elec-battery-backup': {
    seoTitle: `How to Calculate UPS Battery Backup Time | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate UPS battery backup time in hours and minutes from Ah capacity, battery voltage, and connected watt load.',
    introDescription:
      'Planning reliable home outage backup for ceiling fans, routers, and LED lights starts with knowing how to calculate UPS battery backup time realistically before purchasing batteries. Enter your battery bank’s amp-hour rating, DC system voltage (such as 12V or 24V), and total connected load in Watts. Factoring in inverter conversion efficiency prevents overly optimistic runtime expectations during long summer blackouts.',
    howToUseSteps: [
      'Enter ampere-hour rating inside Battery Capacity (Ah).',
      'Type bank voltage (12V single or 24V dual) into Battery Voltage (V).',
      'Input fan, light, and router load into Total Connected Load (Watts) to see runtime.',
    ],
    formulaExplanation:
      'Total stored watt-hours equal Battery Capacity times Battery Voltage; applying an 80% usable efficiency factor accounts for inverter DC-to-AC conversion losses and safe battery depth of discharge before dividing by connected load watts. Formula: Backup Hours = (Battery Ah × Battery Voltage × 0.80) / Total Connected Load (Watts).',
    practicalExample:
      'Connecting a Battery Capacity (Ah) = 200 and Battery Voltage (V) = 12 bank to Total Connected Load (Watts) = 300 delivers (200 × 12 × 0.8) / 300 = 6.40 hours (6 hours and 24 minutes).',
    faqs: [
      {
        q: 'What battery voltage should I enter for two 12V batteries in series?',
        a: 'Enter 24 volts while keeping the single battery’s Ah rating unchanged for a series-wired 24V inverter.',
      },
      {
        q: 'Why does battery backup shrink faster under heavy loads?',
        a: 'High discharge currents reduce usable lead-acid capacity through internal voltage drop and Peukert losses.',
      },
      {
        q: 'Why does the backup calculation include an 80% efficiency factor?',
        a: 'Inverters lose roughly 10% to 15% of energy as heat and shut off early to protect battery health.',
      },
    ],
    safetyNote:
      'Safety Note: UPS backup times are approximate estimates only; always hire a qualified electrician to install DC fuses, changeover switches, and inverter wiring.',
  },

  'elec-solar-estimator': {
    seoTitle: `How to Calculate Solar Panel System Size | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate solar panel system size in kilowatts from daily kWh consumption and local peak sun hours with system losses.',
    introDescription:
      'Sizing a rooftop photovoltaic array without overpaying starts with knowing how to calculate solar panel system size from your actual electricity bills. Enter average daily energy demand in kWh units alongside your location’s average peak sun hours per day. Including a realistic 20% allowance for roof heat, inverter losses, and dust reveals the practical solar kW capacity needed for steady coverage.',
    howToUseSteps: [
      'Enter daily house electricity usage inside Daily Energy Needed (kWh / Units).',
      'Type average local bright solar hours into Peak Sun Hours per Day.',
      'Read recommended solar array capacity in kW accounting for system losses.',
    ],
    formulaExplanation:
      'Dividing daily energy demand by Peak Sun Hours yields ideal nameplate kilowatts, then dividing by 0.80 builds in a realistic 20% allowance for roof heat derating, inverter losses, dust, and DC cable voltage drop. Formula: System Size (kW) = (Daily Energy Needed / Peak Sun Hours per Day) / 0.80.',
    practicalExample:
      'Offsetting Daily Energy Needed (kWh / Units) = 15 with Peak Sun Hours per Day = 5 computes (15 / 5) / 0.8 = 3.75 kW Solar System.',
    faqs: [
      {
        q: 'How many peak sun hours should I enter for sunny regions?',
        a: 'Most sunny cities average between 4.5 and 5.8 effective peak sun hours per day across the year.',
      },
      {
        q: 'How many 550-watt panels make up a 4 kW solar system?',
        a: 'Dividing 4,000 watts by 550 watts equals seven to eight solar panels depending on roof layout.',
      },
      {
        q: 'Do winter clouds or dust lower solar array yield below estimates?',
        a: 'Yes, heavy haze or unwashed panel glass cuts output noticeably, so periodic rinsing helps maintain target generation.',
      },
    ],
    safetyNote:
      'Safety Note: Solar sizing results are preliminary estimates only; certified solar engineers or qualified electricians must inspect roof structure, earthing, and DC/AC wiring.',
  },

  'elec-led-resistor': {
    seoTitle: `How to Calculate LED Resistor Ohms Value | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate LED resistor ohms value and safe resistor wattage from DC supply volts, diode drop, and target milliamps.',
    introDescription:
      'Powering indicator LEDs from a 5V USB line, 9V battery, or 12V adapter without burning them out requires knowing how to calculate LED resistor ohms value accurately. Enter your DC power supply voltage, the LED’s forward voltage drop, and desired current in milliamps. Checking both the required resistance in Ohms and resistor power dissipation in Watts keeps hobby circuits cool and reliable.',
    howToUseSteps: [
      'Enter power supply voltage into Source Voltage (Volts).',
      'Type diode voltage drop inside LED Forward Voltage (Volts).',
      'Input target forward current in LED Current (Milliamps mA) to compute Ohms and Watts.',
    ],
    formulaExplanation:
      'An LED drops its fixed forward voltage and risks burning out unless a series resistor absorbs remaining supply voltage at safe milliamp current. Dividing voltage excess by current in Amps gives resistance, and multiplying gives heat power. Formula: Ohms (Ω) = (Source Voltage − LED Forward Voltage) / (LED Current / 1000); Resistor Power (W) = (Source V − LED V) × Current (A).',
    practicalExample:
      'Powering an LED with Source Voltage (Volts) = 12, LED Forward Voltage (Volts) = 2.2, and LED Current (Milliamps mA) = 20 (0.02 A) requires (12 − 2.2) / 0.02 = 490 Ohms Ω rated above 0.20 W.',
    faqs: [
      {
        q: 'What forward voltage do red LEDs use compared with white or blue LEDs?',
        a: 'Standard red and amber LEDs drop roughly 1.8V to 2.2V, while blue, green, and white LEDs drop 3.0V to 3.4V.',
      },
      {
        q: 'Which standard resistor replaces an odd value like 490 Ohms?',
        a: 'Round up to the nearest standard E12 value, such as 510 or 560 Ohms, to protect diode lifespan.',
      },
      {
        q: 'Why should I check the resistor wattage rating too?',
        a: 'If dissipation exceeds 0.125 watts, using a 1/4W or 1/2W resistor prevents overheating.',
      },
    ],
    safetyNote:
      'Safety Note: Circuit calculations are bench estimates only; verify supply polarity and let a qualified electrician handle any mains-powered LED driver wiring.',
  },

  'elec-watts-to-amps': {
    seoTitle: `How to Convert Watts to Amps at Voltage | ${SITE_NAME}`,
    metaDescription:
      'Learn how to convert watts to amps at voltage quickly to check circuit breaker limits, outlet capacity, and extension cord loads.',
    introDescription:
      'Checking whether a space heater, electric kettle, or workstation power strip exceeds a wall breaker starts with knowing how to convert watts to amps at voltage cleanly and quickly. Enter the appliance’s power draw in Watts and your circuit’s supply voltage, such as 120V, 230V, or 12V DC. Knowing the exact continuous current in Amps prevents overloaded extension cords and nuisance breaker trips.',
    howToUseSteps: [
      'Enter device power draw inside Power (Watts).',
      'Type circuit supply voltage into Voltage (Volts).',
      'Inspect electrical current draw in Amps immediately.',
    ],
    formulaExplanation:
      'Sizing circuit breakers, extension cords, and wall outlets starts by dividing equipment wattage by line voltage to determine continuous current draw in amperes. Formula: Current (Amps) = Power (Watts) / Voltage (Volts).',
    practicalExample:
      'Running a Power (Watts) = 2000 electric kettle on Voltage (Volts) = 230 mains supply draws 2000 / 230 = 8.70 Amps.',
    faqs: [
      {
        q: 'Can a light-duty 5-amp socket handle an 8.7-amp appliance safely?',
        a: 'No, an 8.7-amp load requires a heavier 13A to 16A power outlet and appropriately rated cabling.',
      },
      {
        q: 'Why do 12V inverters pull huge Amps for the same wattage?',
        a: 'At 12 volts instead of 230 volts, current rises nearly twentyfold, requiring thick DC battery cables.',
      },
      {
        q: 'Do electric motors draw slightly higher line Amps than resistive heaters?',
        a: 'Yes, inductive motor loads pull extra reactive current depending on their power factor.',
      },
    ],
    safetyNote:
      'Safety Note: Current conversions are estimates only; a qualified electrician must confirm wire gauge, MCB breaker size, and earthing for actual circuits.',
  },

  'elec-kwh-cost': {
    seoTitle: `How to Calculate kWh Energy Cost per Unit | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate kWh energy cost per unit from sub-meter energy readings and local electricity tariffs for accurate expense splits.',
    introDescription:
      'Splitting shared monthly electric bills across rental floors, workshops, or EV chargers stays fair and transparent when you know how to calculate kWh energy cost per unit accurately. Enter total kilowatt-hour consumption recorded on a dedicated sub-meter alongside your agreed tariff rate per kWh unit. Computing direct energy charges in seconds settles tenant invoices cleanly and tracks workshop machine power usage.',
    howToUseSteps: [
      'Enter measured energy usage inside Energy Consumed (kWh).',
      'Type unit electricity cost in Tariff Rate (PKR / kWh).',
      'Read total rupee energy expense below.',
    ],
    formulaExplanation:
      'Electricity billing translates continuous power over hours directly into discrete kilowatt-hour blocks priced at your local utility tariff. Multiplying kWh units by tariff computes direct energy cost cleanly for sub-meters and tenant billing. Formula: Energy Cost (PKR) = Energy Consumed (kWh) × Tariff Rate (PKR / kWh).',
    practicalExample:
      'Measuring Energy Consumed (kWh) = 250 on a sub-meter at Tariff Rate (PKR / kWh) = 32 equals 250 × 32 = PKR 8,000.',
    faqs: [
      {
        q: 'How do landlords split one main utility bill across two apartments?',
        a: 'Read monthly kWh from a dedicated floor sub-meter and multiply by the blended utility rate per unit.',
      },
      {
        q: 'How do I calculate an all-inclusive rate per kWh from an older bill?',
        a: 'Divide last month’s total payable bill amount by total billed kWh units to include taxes and surcharges.',
      },
      {
        q: 'Do time-of-use meters charge different kWh rates by hour?',
        a: 'Yes, peak evening hours on commercial and three-phase meters generally cost more per kWh than off-peak hours.',
      },
    ],
    safetyNote:
      'Safety Note: Energy cost outputs are billing estimates only; always have a qualified electrician install or inspect sub-meters and main distribution boards.',
  },

  'elec-rectifier-v': {
    seoTitle: `How to Calculate AC to DC Rectifier Voltage | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate AC to DC rectifier voltage including peak unloaded volts and 1.4V diode bridge drop for power supplies.',
    introDescription:
      'Designing a linear bench power supply or checking AC transformer secondaries requires knowing how to calculate AC to DC rectifier voltage before selecting smoothing filter capacitors. Enter the AC RMS secondary voltage to compute peak unloaded DC capacitor voltage alongside approximate regulated output after subtracting two diode drops (~1.4V). Confirming peak voltage upfront prevents under-rated electrolytic capacitors from failing under light load.',
    howToUseSteps: [
      'Type transformer secondary voltage into AC RMS Voltage (Volts).',
      'View peak unloaded DC capacitor voltage (AC × √2).',
      'Check approximate DC output after subtracting ~1.4V bridge diode drop.',
    ],
    formulaExplanation:
      'Alternating sine waves peak at √2 (≈ 1.414) times their RMS rating, so charging a smoothing capacitor through a rectifier lifts unloaded DC voltage to peak AC minus two silicon diode forward drops (~0.7 V each = 1.4 V total). Formula: Peak DC = AC RMS Voltage × √2; Approx Regulated DC = Peak DC − 1.4 V.',
    practicalExample:
      'Rectifying AC RMS Voltage (Volts) = 12 produces Peak DC: 16.97V (Approx Regulated: 15.57V) across a filter capacitor.',
    faqs: [
      {
        q: 'Why does bridge rectification subtract 1.4 volts from peak DC?',
        a: 'Current travels through two silicon bridge diodes on every half-cycle, dropping about 0.7V across each diode.',
      },
      {
        q: 'What capacitor voltage rating fits a 12V AC rectifier safely?',
        a: 'Because unloaded DC peaks near 17V, technicians typically choose 25V or 35V electrolytic capacitors for safety margin.',
      },
      {
        q: 'How does a single-diode half-wave rectifier differ?',
        a: 'It loses only ~0.7V across one diode, though DC output exhibits much larger voltage ripple under load.',
      },
    ],
    safetyNote:
      'Safety Note: Rectifier calculations are circuit estimates only; ensure proper isolation and ask a qualified electrician or technician to verify live AC transformer wiring.',
  },

  'elec-transformer-turns': {
    seoTitle: `How to Calculate Transformer Turns Ratio | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate transformer turns ratio and secondary AC output voltage from primary coil turns and supply voltage.',
    introDescription:
      'Checking a custom rewound iron-core transformer or verifying isolated AC step-down coils starts with knowing how to calculate transformer turns ratio cleanly on paper or at the bench. Enter primary coil winding turns, secondary coil turns, and applied AC primary voltage to calculate secondary output voltage and exact winding ratio. Knowing turns ratios also predicts whether secondary current capacity rises as voltage steps down.',
    howToUseSteps: [
      'Enter primary coil windings inside Primary Turns (Np).',
      'Type secondary winding count in Secondary Turns (Ns).',
      'Input AC supply in Primary Voltage (Vp) to display Secondary Voltage and Turns Ratio.',
    ],
    formulaExplanation:
      'An ideal magnetic transformer induces output voltage strictly proportional to the ratio of secondary turns to primary turns around its shared laminated iron or ferrite core. Formula: Secondary Voltage (Vs) = Primary Voltage × (Secondary Turns / Primary Turns); Turns Ratio = Np : Ns.',
    practicalExample:
      'Stepping down Primary Voltage (Vp) = 230 with Primary Turns (Np) = 500 and Secondary Turns (Ns) = 50 (Turns Ratio 10.0 : 1) outputs Secondary Voltage = 23.00 Volts.',
    faqs: [
      {
        q: 'How do I tell a step-down transformer from a step-up transformer?',
        a: 'Fewer secondary turns than primary turns step voltage down, whereas more secondary turns step output voltage up.',
      },
      {
        q: 'Does stepping voltage down allow higher secondary output current?',
        a: 'Yes, total power remains balanced, so halving voltage roughly doubles available current capacity.',
      },
      {
        q: 'Can steady DC voltage power a standard transformer primary?',
        a: 'No, transformers require alternating magnetic flux; constant DC causes heavy short-circuit current and overheating.',
      },
    ],
    safetyNote:
      'Safety Note: Transformer turns results are ideal estimates only; high-voltage windings pose shock hazards and require verification by a qualified electrician.',
  },

  'elec-capacitive-reactance': {
    seoTitle: `How to Calculate Capacitive Reactance Xc | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate capacitive reactance Xc in Ohms from microfarad capacitance and AC frequency in Hertz for filters and motors.',
    introDescription:
      'Sizing AC ceiling fan capacitors, audio speaker crossover filters, or snubber networks requires knowing how to calculate capacitive reactance Xc in Ohms accurately. Enter the component’s capacitance value in microfarads (µF) alongside AC operating frequency in Hertz to compute exact reactive opposition. Watching how Xc falls sharply as frequency climbs makes high-pass and low-pass filter behavior intuitive for students and repair technicians.',
    howToUseSteps: [
      'Enter component value in Capacitance (Microfarads µF).',
      'Type AC signal or mains frequency into Frequency (Hertz Hz).',
      'Read opposing AC impedance Xc in Ohms.',
    ],
    formulaExplanation:
      'Capacitors block steady DC completely yet pass alternating current with an opposition called capacitive reactance (Xc) that shrinks inversely as either capacitance or AC frequency rises. Formula: Xc (Ω) = 1 / (2 × π × Frequency (Hz) × Capacitance (Farads)), where 1 µF = 10⁻⁶ F.',
    practicalExample:
      'Testing a Capacitance (Microfarads µF) = 10 capacitor on Frequency (Hertz Hz) = 50 AC mains yields Xc = 1 / (2π × 50 × 10×10⁻⁶) = 318.31 Ω (Ohms).',
    faqs: [
      {
        q: 'Why must both capacitance and AC frequency stay above zero?',
        a: 'At 0 Hz (steady DC), an ideal capacitor blocks current completely, giving infinite reactance.',
      },
      {
        q: 'How does capacitive reactance change at high switching frequencies?',
        a: 'Multiplying frequency by 1,000 cuts capacitive reactance by 1,000, making small capacitors act nearly like shorts.',
      },
      {
        q: 'Where is capacitive reactance used in everyday electrical equipment?',
        a: 'Ceiling fan run capacitors, speaker tweeters, and AC noise suppression circuits rely directly on Xc.',
      },
    ],
    safetyNote:
      'Safety Note: Reactance calculations are analytical estimates only; always discharge high-voltage capacitors safely and consult a qualified electrician for AC work.',
  },

  'elec-inductive-reactance': {
    seoTitle: `How to Calculate Inductive Reactance Xl | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate inductive reactance Xl in Ohms from millihenry inductance and signal frequency for coils and chokes.',
    introDescription:
      'Evaluating AC chokes, speaker woofer crossover coils, or power-line noise filters depends on knowing how to calculate inductive reactance Xl cleanly in Ohms before winding coils. Enter inductor inductance in millihenries (mH) and AC operating frequency in Hertz to view exact inductive impedance. Unlike capacitors, inductors pass steady DC freely while opposing rapid high-frequency AC fluctuations more strongly as frequency rises.',
    howToUseSteps: [
      'Type coil value inside Inductance (Millihenries mH).',
      'Enter AC operating frequency into Frequency (Hertz Hz).',
      'View inductive reactance Xl in Ohms right away.',
    ],
    formulaExplanation:
      'Inductors pass steady DC smoothly yet oppose rapid AC current reversals with inductive reactance (Xl) that climbs linearly alongside both coil inductance and AC signal frequency. Formula: Xl (Ω) = 2 × π × Frequency (Hz) × Inductance (Henries), where 1 mH = 10⁻³ H.',
    practicalExample:
      'Evaluating an Inductance (Millihenries mH) = 50 choke at Frequency (Hertz Hz) = 50 calculates 2 × π × 50 × 0.05 = 15.71 Ω (Ohms).',
    faqs: [
      {
        q: 'How does inductive reactance behave opposite to capacitive reactance?',
        a: 'Inductive reactance increases proportionally with frequency, blocking high frequencies while passing low frequencies easily.',
      },
      {
        q: 'Does a physical inductor coil also have DC resistance?',
        a: 'Yes, real copper windings add small series wire resistance alongside inductive reactance to form total impedance.',
      },
      {
        q: 'Where are inductors commonly found in home electronics?',
        a: 'Switch-mode power supplies, fluorescent chokes, EMI filters, and woofer crossovers rely on inductors.',
      },
    ],
    safetyNote:
      'Safety Note: Inductor reactance values are design estimates only; have a qualified electrician verify mains chokes, relays, and motor starter wiring.',
  },

  'elec-rc-time-constant': {
    seoTitle: `How to Calculate RC Time Constant Tau | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate RC time constant tau in seconds from Ohms resistance and microfarad capacitance for timers and filters.',
    introDescription:
      'Designing microcontroller reset delays, push-button switch debouncers, or analog timing circuits starts with knowing how to calculate RC time constant tau accurately. Enter series resistance in Ohms and capacitor size in microfarads (µF) to compute one time constant τ in seconds. Knowing τ tells circuit builders immediately how many seconds a capacitor needs to reach 63% or ~99% of supply voltage.',
    howToUseSteps: [
      'Enter series resistor value inside Resistance (Ohms Ω).',
      'Type capacitor value into Capacitance (Microfarads µF).',
      'Read charging time constant tau (τ) in seconds.',
    ],
    formulaExplanation:
      'Multiplying circuit resistance by capacitance defines one time constant τ (tau), the duration needed for a discharging capacitor to fall by 63.2% or charge to 63.2% of supply voltage; full (~99.3%) charge takes five time constants (5τ). Formula: Time Constant τ (Seconds) = Resistance (Ω) × Capacitance (Farads).',
    practicalExample:
      'Pairing Resistance (Ohms Ω) = 10000 with Capacitance (Microfarads µF) = 100 (0.0001 F) produces τ = 10,000 × 0.0001 = 1.000 Seconds (τ), meaning full charge occurs around 5.0 seconds.',
    faqs: [
      {
        q: 'How many time constants does full capacitor charging take?',
        a: 'An RC circuit reaches over 99% of supply voltage after five time constants (5 × τ).',
      },
      {
        q: 'Why is capacitance entered in microfarads instead of Farads?',
        a: 'Electronic timing boards almost always use microfarad-scale capacitors because a full 1-Farad capacitor is enormous.',
      },
      {
        q: 'What everyday circuits depend on the RC time constant?',
        a: '555 timer delays, push-button debouncing, low-pass audio filters, and soft-start circuits all rely on RC timing.',
      },
    ],
    safetyNote:
      'Safety Note: RC timing results are theoretical estimates only; verify high-voltage bleeder resistors and real circuit wiring with a qualified electrician.',
  },

  'elec-voltage-drop': {
    seoTitle: `How to Calculate Cable Voltage Drop Loss | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate cable voltage drop loss in Volts and percentage across long copper runs by current Amps and AWG gauge.',
    introDescription:
      'Running power out to a deep borehole water pump, garden shed, or workshop sub-panel requires knowing how to calculate cable voltage drop loss before buying copper wire. Enter circuit load in Amps, one-way cable distance in meters, and copper wire size (10 AWG, 12 AWG, or 14 AWG). Checking percentage voltage sag ensures electric motors start smoothly without overheating buried cables.',
    howToUseSteps: [
      'Enter circuit load in Current (Amps).',
      'Type distance from breaker panel to load in One-way Cable Length (meters).',
      'Choose 10 AWG, 12 AWG, or 14 AWG under Wire Size (AWG) to inspect Volts and percentage drop.',
    ],
    formulaExplanation:
      'Long copper runs introduce series wire resistance across both live and neutral conductors (2 × one-way length), causing terminal voltage to sag under heavy load currents. Selecting thicker copper wire (smaller AWG number) lowers resistance per kilometer cleanly. Formula: Voltage Drop (V) = (2 × Length (m) × Current (A) × Ohms/km) / 1000; Drop % = (Drop / 230 V) × 100.',
    practicalExample:
      'Drawing Current (Amps) = 15 over One-way Cable Length (meters) = 30 using Wire Size (AWG) = 12 AWG (Copper) (~5.2 Ω/km) loses (2 × 30 × 15 × 5.2) / 1000 = 4.68 Volts Drop (2.0% of 230V).',
    faqs: [
      {
        q: 'What percentage voltage drop is acceptable for home wiring?',
        a: 'Electrical guidelines generally aim to keep branch circuit voltage drop under 3% for steady appliance performance.',
      },
      {
        q: 'Why does the voltage drop calculation double one-way cable length?',
        a: 'Current flows out through the hot conductor and returns through the neutral conductor, doubling total wire distance.',
      },
      {
        q: 'Does a smaller AWG number mean thicker or thinner copper wire?',
        a: 'Smaller AWG numbers represent thicker wire—10 AWG carries heavier current with less voltage loss than 14 AWG.',
      },
    ],
    safetyNote:
      'Safety Note: Voltage drop outputs are sizing estimates only; always have a qualified electrician verify ampacity tables, insulation ratings, and real cable wiring.',
  },

  'elec-motor-hp': {
    seoTitle: `How to Convert Motor Horsepower to Watts | ${SITE_NAME}`,
    metaDescription:
      'Discover how to convert motor horsepower to watts and kilowatts for sizing generators, solar inverters, and pump breakers.',
    introDescription:
      'Matching a household water pump, air compressor, or workshop lathe to a backup generator or solar inverter starts with knowing how to convert motor horsepower to watts accurately. Type the motor’s mechanical nameplate rating in Horsepower (HP) to see equivalent electrical power in both Watts and kilowatts immediately. Knowing continuous wattage helps installers leave extra headroom for brief motor startup surges.',
    howToUseSteps: [
      'Enter nameplate motor output rating inside Horsepower (HP).',
      'Read equivalent mechanical power in Watts and kilowatts immediately.',
    ],
    formulaExplanation:
      'Motors, water pumps, and compressors are frequently labeled in mechanical horsepower (HP), while inverters, generators, and utility bills measure electrical demand in Watts and kilowatts using 1 mechanical HP = 745.7 Watts. Formula: Watts = Horsepower (HP) × 745.7; Kilowatts (kW) = Watts / 1000.',
    practicalExample:
      'Converting a Horsepower (HP) = 2 borehole water pump multiplies 2 × 745.7 = 1491 Watts (1.49 kW).',
    faqs: [
      {
        q: 'Why does a 1 HP pump need a much larger inverter than 746 watts?',
        a: 'Induction motors pull 3 to 5 times normal current briefly during startup, plus extra power for motor inefficiency.',
      },
      {
        q: 'Is mechanical horsepower identical to metric horsepower?',
        a: 'Mechanical HP equals 745.7 watts, whereas European metric horsepower (PS) equals 735.5 watts.',
      },
      {
        q: 'Can fractional motors like 0.5 HP or 1.5 HP be converted here?',
        a: 'Yes, enter decimals like 0.5 HP (about 373 watts) or 1.5 HP (about 1,119 watts).',
      },
    ],
    safetyNote:
      'Safety Note: HP-to-Watts values are conversion estimates only; consult a qualified electrician for motor starter contactors, overload relays, and pump wiring.',
  },

  'elec-three-phase': {
    seoTitle: `How to Calculate Three Phase Power kW | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate three phase power kW and horsepower from line-to-line voltage, phase current, and load power factor.',
    introDescription:
      'Sizing commercial workshops, flour mills, or heavy HVAC chillers requires knowing how to calculate three phase power kW cleanly from clamp-meter current readings. Enter line-to-line voltage (such as 400V or 480V), balanced phase current in Amps, and load Power Factor between 0.1 and 1.0. Viewing active kilowatts alongside equivalent mechanical horsepower ensures industrial panels, cables, and backup generators match actual demand.',
    howToUseSteps: [
      'Enter three-phase line voltage into Line-to-Line Voltage (Volts).',
      'Type measured phase amps inside Line Current (Amps).',
      'Input load power factor into Power Factor (0.1 - 1.0) to view kW and HP.',
    ],
    formulaExplanation:
      'Balanced three-phase power systems deliver √3 (≈ 1.732) times line-to-line voltage multiplied by line current, scaled by the load’s Power Factor to extract true active kilowatts rather than apparent kVA. Formula: Real Power (kW) = [√3 × Line Voltage × Line Current × Power Factor] / 1000; HP = kW × 1.341.',
    practicalExample:
      'Running Line-to-Line Voltage (Volts) = 400 at Line Current (Amps) = 25 and Power Factor (0.1 - 1.0) = 0.85 computes (1.732 × 400 × 25 × 0.85) / 1000 = 14.72 kW (19.74 HP).',
    faqs: [
      {
        q: 'Why does three-phase power multiply by √3 instead of 3?',
        a: 'Three AC phases sit 120 degrees apart, combining geometrically by 1.732 when using line-to-line voltage.',
      },
      {
        q: 'What power factor is typical for commercial three-phase motors?',
        a: 'Loaded industrial induction motors generally run between 0.80 and 0.90 power factor.',
      },
      {
        q: 'How should phase current be measured on a balanced motor?',
        a: 'Clamp any single live phase conductor with a clamp ammeter while the motor runs under normal load.',
      },
    ],
    safetyNote:
      'Safety Note: Three-phase calculations are engineering estimates only; 400V+ industrial systems must be wired and tested exclusively by a qualified electrician.',
  },

  'elec-power-factor': {
    seoTitle: `How to Calculate Power Factor Capacitor kVAR | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate power factor capacitor kVAR needed to raise industrial power factor and avoid utility penalties.',
    introDescription:
      'Factories running heavy induction motors often pay utility low-power-factor surcharges, making it crucial to know how to calculate power factor capacitor kVAR accurately before ordering panels. Enter active facility load in kW, current measured lagging power factor, and your target corrected power factor (such as 0.95). Determining exact reactive kVAR compensation sizes automatic capacitor banks cleanly to free transformer capacity.',
    howToUseSteps: [
      'Enter factory or plant active load inside Real Power (kW).',
      'Type measured uncorrected lagging factor in Initial Power Factor.',
      'Input utility penalty-free goal inside Target Power Factor to compute required kVAR.',
    ],
    formulaExplanation:
      'Inductive motors draw lagging reactive power (kVAR) alongside real kW work, inflating utility current and triggering low-power-factor penalties. Shunt capacitor banks supply opposing leading reactive power equal to kW multiplied by the difference between phase angle tangents. Formula: Required kVAR = Real Power (kW) × [tan(arccos(PF₁)) − tan(arccos(PF₂))].',
    practicalExample:
      'Raising Real Power (kW) = 50 from Initial Power Factor = 0.75 up to Target Power Factor = 0.95 calculates 50 × (0.8819 − 0.3287) = 27.7 kVAR Capacitor Needed.',
    faqs: [
      {
        q: 'Why must target power factor be higher than initial power factor?',
        a: 'Capacitor banks shift lagging power factor upward toward unity, so lowering PF requires zero reactive correction.',
      },
      {
        q: 'Why do utilities fine facilities with low power factor?',
        a: 'Poor power factor forces grid lines and transformers to carry extra wasted reactive current for the same real kilowatts.',
      },
      {
        q: 'Should an industrial panel target 0.95 or exactly 1.00?',
        a: 'Engineers usually target 0.95 to 0.98 to avoid over-correcting into a leading power factor during light night loads.',
      },
    ],
    safetyNote:
      'Safety Note: Capacitor bank kVAR values are estimates only; APFC panel switching and high-voltage wiring must be verified by a qualified industrial electrician.',
  },

  'elec-frequency-wavelength': {
    seoTitle: `How to Convert MHz Frequency to Wavelength | ${SITE_NAME}`,
    metaDescription:
      'Learn how to convert MHz frequency to wavelength in meters cleanly for RF antenna design, Wi-Fi bands, and radio communications.',
    introDescription:
      'Cutting a custom dipole radio antenna or studying electromagnetic wave propagation gets quick once you know how to convert MHz frequency to wavelength in meters cleanly. Enter any radio frequency in Megahertz (MHz)—such as 100 MHz FM broadcast or 2400 MHz Wi-Fi—to calculate free-space wavelength immediately. Higher frequencies naturally produce shorter physical wavelengths, explaining why microwave and router antennas stay compact.',
    howToUseSteps: [
      'Enter carrier radio frequency into Frequency (Megahertz MHz).',
      'Check corresponding full wavelength in meters right away.',
    ],
    formulaExplanation:
      'All electromagnetic waves—FM radio, Wi-Fi, 5G, and TV broadcasts—travel through free space at the speed of light (~3×10⁸ m/s), tying higher MHz frequencies directly to shorter physical antenna wavelengths. Formula: Wavelength (m) = 3×10⁸ / (Frequency (MHz) × 10⁶).',
    practicalExample:
      'Entering Frequency (Megahertz MHz) = 100 (10⁸ Hz) divides 3×10⁸ / 10⁸ to compute an exact FM band wavelength of 3.00 Meters.',
    faqs: [
      {
        q: 'How long is a half-wave dipole antenna from full wavelength?',
        a: 'Divide the full wavelength in meters by two—for 100 MHz FM (3 meters), a half-wave dipole is about 1.5 meters.',
      },
      {
        q: 'What is the wavelength of 2.4 GHz (2400 MHz) Wi-Fi?',
        a: 'Entering 2400 MHz outputs 0.125 meters, or 12.5 centimeters, which explains compact router antennas.',
      },
      {
        q: 'Do radio waves travel slightly slower inside coaxial cables than in air?',
        a: 'Yes, cable insulation slows signal propagation slightly, shortening physical electrical wavelength by a velocity factor.',
      },
    ],
    safetyNote:
      'Safety Note: RF wavelength outputs are theoretical estimates only; outdoor antenna mast grounding and lightning protection should be inspected by a qualified electrician.',
  },

  'elec-charge-current': {
    seoTitle: `How to Calculate Electric Charge Coulombs | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate electric charge Coulombs from steady DC current in Amps and time in seconds for physics and battery labs.',
    introDescription:
      'Solving electronics lab exercises, electroplating bath rates, or capacitor discharge problems starts with knowing how to calculate electric charge Coulombs from steady current flow. Enter constant DC current in Amps alongside duration in seconds to calculate total transferred charge in Coulombs (C) right away. Connecting amperes directly to charge per second makes foundational physics and DC storage concepts much clearer.',
    howToUseSteps: [
      'Enter steady electrical flow inside Current (Amps).',
      'Type active duration in Time Duration (Seconds).',
      'Read total transferred electric charge in Coulombs (C).',
    ],
    formulaExplanation:
      'One Ampere equals one Coulomb of electrical charge passing a conductor cross-section every single second; multiplying steady current by time in seconds calculates cumulative charge transferred cleanly for electroplating, battery labs, and physics problems. Formula: Charge Q (Coulombs) = Current (Amps) × Time Duration (Seconds).',
    practicalExample:
      'Maintaining Current (Amps) = 5 for Time Duration (Seconds) = 60 transfers 5 × 60 = 300 Coulombs (C).',
    faqs: [
      {
        q: 'How many Coulombs equal one amp-hour in a battery?',
        a: 'Since one hour contains 3,600 seconds, 1 amp flowing for 1 hour transfers 3,600 Coulombs.',
      },
      {
        q: 'Does Q = I × t apply directly to alternating AC current?',
        a: 'No, net AC charge reverses direction back and forth, whereas this formula measures steady unidirectional DC flow.',
      },
      {
        q: 'How many individual electrons make up one Coulomb?',
        a: 'One Coulomb equals roughly 6.242 × 10¹⁸ elementary electron charges.',
      },
    ],
    safetyNote:
      'Safety Note: Charge calculations are physics estimates only; high-current DC banks require proper overcurrent protection verified by a qualified electrician.',
  },

  'elec-battery-charge-time': {
    seoTitle: `How Long to Charge 12V Battery in Hours | ${SITE_NAME}`,
    metaDescription:
      'Check how long to charge 12V battery in hours from amp-hour capacity and charger output Amps, including a 20% charging loss factor.',
    introDescription:
      'Waiting on a depleted inverter or car battery during power cuts makes you wonder how long to charge 12V battery in hours before the next outage. Enter the battery’s amp-hour (Ah) capacity and your charger’s DC output current in Amps to estimate full recharge time, including a 20% heat and efficiency allowance. Choosing a charger near 10% of Ah capacity extends battery plate life.',
    howToUseSteps: [
      'Type battery size into Battery Capacity (Ah).',
      'Enter charger DC output rating inside Charger Output Current (Amps).',
      'Inspect recharge duration including a 20% charging inefficiency factor.',
    ],
    formulaExplanation:
      'Lead-acid and deep-cycle batteries lose roughly 15%–20% of input energy as heat and electrolyte gassing during charging, so multiplying theoretical Ah ÷ Amps by a 1.20 efficiency factor yields realistic recharge hours. Formula: Charging Time (Hours) = (Battery Capacity (Ah) / Charger Output Current (Amps)) × 1.2.',
    practicalExample:
      'Recharging a Battery Capacity (Ah) = 150 tubular battery with Charger Output Current (Amps) = 15 estimates (150 / 15) × 1.2 = 12.0 Hours Charging Time.',
    faqs: [
      {
        q: 'What charging current is safest for deep-cycle lead-acid batteries?',
        a: 'Most manufacturers advise charging near 10% of the Ah rating, such as 15A for a 150Ah battery.',
      },
      {
        q: 'Why does charging take less time if the battery is only half empty?',
        a: 'Replacing 50% of depleted amp-hours cuts main bulk charge time roughly in half before float tapering.',
      },
      {
        q: 'Do lithium LiFePO4 batteries charge faster than the 1.2x lead-acid factor?',
        a: 'Yes, lithium packs accept charge above 95% efficiency, finishing slightly sooner at equal charger Amps.',
      },
    ],
    safetyNote:
      'Safety Note: Battery charging durations are estimates only; ensure proper room ventilation and have a qualified electrician verify inverter charger settings and DC wiring.',
  },

  'elec-inverter-load': {
    seoTitle: `How to Convert Inverter VA to Safe Watts | ${SITE_NAME}`,
    metaDescription:
      'Learn how to convert inverter VA to safe watts using power factor so UPS and backup inverters run appliances without tripping overload.',
    introDescription:
      'Buying a home UPS or solar inverter safely starts with knowing how to convert inverter VA to safe watts rather than trusting the VA number alone. Enter your inverter’s Volt-Ampere (VA) rating alongside its Power Factor (typically 0.8 or 1.0) to view maximum continuous Watt capacity. Leaving a 20% cushion below that limit prevents annoying overload beeps when appliances turn on.',
    howToUseSteps: [
      'Enter nameplate apparent capacity inside Inverter Rating (VA).',
      'Type inverter efficiency/power factor into Power Factor.',
      'Check maximum continuous safe appliance load in Watts.',
    ],
    formulaExplanation:
      'Inverters and UPS units advertise capacity in Volt-Amperes (VA) rather than real Watts; multiplying VA by the unit’s Power Factor determines true continuous resistive/electronic load capacity before overload alarms trip. Formula: Safe Load (Watts) = Inverter Rating (VA) × Power Factor.',
    practicalExample:
      'Checking an Inverter Rating (VA) = 1200 UPS rated at Power Factor = 0.8 yields 1,200 × 0.8 = 960 Watts Safe Load.',
    faqs: [
      {
        q: 'Why should continuous UPS load stay around 70% to 80% of safe watts?',
        a: 'Keeping 20% headroom avoids summer overheating shutdowns and absorbs short startup surges.',
      },
      {
        q: 'Can a small 1200 VA inverter run a water pump or microwave?',
        a: 'No, large motor startup surges or 1000W+ microwave elements typically trip 1200 VA inverters immediately.',
      },
      {
        q: 'Where can I check my inverter’s exact power factor?',
        a: 'Check the specification plate on the side of the unit, where modern inverters list 0.8 or 1.0 PF.',
      },
    ],
    safetyNote:
      'Safety Note: Inverter capacity figures are estimates only; real UPS sub-circuit isolation and DB wiring must be checked by a qualified electrician.',
  },

  'elec-water-heater': {
    seoTitle: `How Much Does an Electric Water Heater Cost | ${SITE_NAME}`,
    metaDescription:
      'Find out how much does an electric water heater cost daily and monthly in kWh and electricity bills from geyser wattage and run hours.',
    introDescription:
      'Winter showers can send utility bills soaring unexpectedly, making it practical to check how much does an electric water heater cost before leaving your tank powered all day. Enter the heating element wattage (usually 1500W to 3000W), active heating hours per day, and your electricity rate per kWh. Using a timer switch to limit standby heating cuts winter energy waste substantially.',
    howToUseSteps: [
      'Type heating element wattage into Heater Power (Watts).',
      'Enter active thermostat-on duration inside Hours Active per Day.',
      'Supply your unit electricity price in Tariff Rate (PKR / kWh) to view monthly cost.',
    ],
    formulaExplanation:
      'Electric storage geysers and instant water heaters convert electricity straight into thermal energy via resistive elements; scaling wattage by active thermostat hours per day and 30 days projects monthly winter utility impact. Formula: Daily kWh = (Heater Power × Hours Active per Day) / 1000; Monthly Cost = Daily kWh × Tariff Rate × 30.',
    practicalExample:
      'Operating a Heater Power (Watts) = 2000 geyser for Hours Active per Day = 3 at Tariff Rate (PKR / kWh) = 35 uses Daily Energy: 6.0 kWh and costs PKR 6,300 / month.',
    faqs: [
      {
        q: 'Does a storage water heater consume full wattage all 24 hours if left on?',
        a: 'No, once tank water reaches thermostat temperature, the element shuts off and only cycles briefly to replace heat loss.',
      },
      {
        q: 'How can families lower electric water heater costs during winter?',
        a: 'Add a timer switch to heat water only before morning and evening routines and lower thermostat settings slightly.',
      },
      {
        q: 'Do electric water heaters require dedicated circuit protection?',
        a: 'Yes, high-wattage heaters near water should use a dedicated breaker and properly tested earth-leakage protection.',
      },
    ],
    safetyNote:
      'Safety Note: Geyser operating costs are estimates only; have a qualified electrician install dedicated ELCB/RCD earth-leakage protection and heavy-duty wiring.',
  },

  'elec-ac-power': {
    seoTitle: `How to Calculate AC Power Consumption Cost | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate AC power consumption cost for 1-ton, 1.5-ton, or 2-ton air conditioners from daily usage hours and kWh rate.',
    introDescription:
      'Cooling bedrooms through peak summer heat waves makes it essential to know how to calculate AC power consumption cost before the bill arrives. Enter your air conditioner size in Tons (such as 1, 1.5, or 2), average hours run daily, and local electricity rate per kWh. Seeing estimated daily kilowatt-hours and 30-day utility expense helps compare inverter savings and thermostat habits.',
    howToUseSteps: [
      'Enter unit cooling size in AC Capacity (Tons).',
      'Type daily runtime inside Usage (Hours per Day).',
      'Input electricity rate into Tariff Rate (PKR / kWh) to view daily kWh and monthly PKR cost.',
    ],
    formulaExplanation:
      'Estimating residential air-conditioning usage converts cooling tonnage at ~1,200 Watts average steady power per Ton, multiplies by daily running hours to find kWh units, and multiplies across 30 summer days at your tariff rate. Formula: Estimated Watts = AC Capacity (Tons) × 1200; Monthly Cost = [(Watts × Usage Hours) / 1000] × Tariff Rate × 30.',
    practicalExample:
      'Running an AC Capacity (Tons) = 1.5 unit (Est. Power: 1800W) for Usage (Hours per Day) = 8 at Tariff Rate (PKR / kWh) = 35 burns 14.4 kWh daily and costs PKR 15,120 / month.',
    faqs: [
      {
        q: 'Do DC inverter air conditioners use less electricity than non-inverter units?',
        a: 'Yes, once the room cools down, inverter compressors slow down and often cut steady wattage by 30% to 45%.',
      },
      {
        q: 'What AC thermostat setting balances comfort and electricity savings?',
        a: 'Setting the thermostat around 25°C to 26°C paired with a ceiling fan lowers compressor load significantly.',
      },
      {
        q: 'Can I estimate both 1-ton and 2-ton units here?',
        a: 'Yes, simply enter 1 for a 1-ton unit or 2 for a 2-ton unit in AC Capacity.',
      },
    ],
    safetyNote:
      'Safety Note: AC consumption bills are estimates only; a qualified electrician must wire 20A/32A dedicated breakers, proper earthing, and 4mm² copper cables.',
  },

  'elec-voltage-divider': {
    seoTitle: `How to Calculate Voltage Divider Output Vout | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate voltage divider output Vout from Vin supply and two series resistors R1 and R2 for sensors and ADC pins.',
    introDescription:
      'Stepping a 5V sensor signal down to 3.3V for an ESP32 or sampling 12V battery voltage with an Arduino starts with knowing how to calculate voltage divider output Vout cleanly. Enter input DC voltage Vin alongside top resistor R1 and bottom ground resistor R2 in Ohms. Inspecting unloaded Vout guarantees sensitive analog microcontroller pins stay safely within maximum rated input voltage limits.',
    howToUseSteps: [
      'Enter DC supply voltage inside Input Voltage (Vin).',
      'Type top series resistor value into Resistor 1 (R1 in Ω).',
      'Input bottom ground-side resistor into Resistor 2 (R2 in Ω) to display V_out.',
    ],
    formulaExplanation:
      'Two resistors wired in series drop input voltage proportionally across each resistor; tapping the midpoint node above Resistor 2 yields a stepped-down reference voltage ideal for ADC sensors and bias networks. Formula: V_out = Input Voltage × [Resistor 2 / (Resistor 1 + Resistor 2)].',
    practicalExample:
      'Feeding Input Voltage (Vin) = 12 across Resistor 1 (R1 in Ω) = 1000 and Resistor 2 (R2 in Ω) = 1000 halves supply voltage cleanly to V_out = 6.00 Volts.',
    faqs: [
      {
        q: 'Why cannot a resistor voltage divider power motors or boards?',
        a: 'Drawing load current from the midpoint pulls Vout downward rapidly; use voltage regulators instead of dividers for power rails.',
      },
      {
        q: 'What resistor pair drops 5V safely to around 3.3V for logic pins?',
        a: 'Pairing R1 = 1000 Ohms and R2 = 2000 Ohms divides 5V cleanly down to 3.33V.',
      },
      {
        q: 'Why can R1 and R2 never both be zero Ohms?',
        a: 'Zero combined resistance creates a direct short circuit across the supply rails.',
      },
    ],
    safetyNote:
      'Safety Note: Divider outputs are low-power circuit estimates only; never build unisolated mains voltage dividers—consult a qualified electrician for line-voltage sensing.',
  },

  'elec-resistor-color': {
    seoTitle: `How to Read 4 Band Resistor Color Code | ${SITE_NAME}`,
    metaDescription:
      'Discover how to read 4 band resistor color code stripes into Ohms or kilo-Ohms quickly without squinting at small components.',
    introDescription:
      'Sorting mixed breadboard kits or replacing burnt PCB components is much faster once you know how to read 4 band resistor color code stripes accurately. Pick the first digit stripe color, the second digit stripe color, and the multiplier band color from the dropdowns. Seeing the decoded value immediately in Ohms or kilo-Ohms prevents wiring a 10 kΩ resistor where a 1 kΩ part belongs.',
    howToUseSteps: [
      'Pick the first colored stripe in the First Digit dropdown.',
      'Choose the second colored stripe under Second Digit.',
      'Select the third band under Multiplier to decode total resistance.',
    ],
    formulaExplanation:
      'Axial carbon-film and metal-film resistors encode resistance in colored bands: the first two bands form a two-digit mantissa, while the third band multiplies by powers of ten. Formula: Resistance (Ω) = [(First Digit × 10) + Second Digit] × Multiplier.',
    practicalExample:
      'Selecting First Digit = Brown (1), Second Digit = Black (0), and Multiplier = Red (×100) decodes (10 × 100) = 1,000 Ω, displayed neatly as 1.0 kΩ.',
    faqs: [
      {
        q: 'Which end of a 4-band resistor do you start reading from?',
        a: 'Begin at the end where colored stripes sit closer together, opposite the standalone gold or silver tolerance stripe.',
      },
      {
        q: 'What color stripes represent a standard 1 kilo-Ohm resistor?',
        a: 'Brown (1), Black (0), and Red (×100) combine to form 1,000 Ohms (1.0 kΩ).',
      },
      {
        q: 'When does the decoded output display in kilo-Ohms instead of Ohms?',
        a: 'Any decoded resistance of 1,000 Ohms or more formats automatically in kilo-Ohms (kΩ) for cleaner reading.',
      },
    ],
    safetyNote:
      'Safety Note: Color-code decoding provides bench reference estimates only; verify critical resistors with a multimeter and have a qualified electrician check mains-level repairs.',
  },

  'elec-led-series': {
    seoTitle: `How to Size Series Resistor for an LED | ${SITE_NAME}`,
    metaDescription:
      'See how to size series resistor for an LED in Ohms and Watts from DC rail voltage, LED forward drop, and target current in mA.',
    introDescription:
      'Wiring single indicator diodes or series LED strings on 5V, 12V, or 24V supplies depends on knowing how to size series resistor for an LED correctly. Enter your DC source voltage, the LED forward drop in Volts, and desired milliamp current to calculate protective resistance and resistor heat dissipation. Adding the right series resistor stops forward-biased junctions from overheating within seconds.',
    howToUseSteps: [
      'Type DC rail supply inside Source Voltage (V).',
      'Enter diode forward drop in LED Forward Voltage (V).',
      'Specify desired brightness current in LED Current (mA) to compute Ohms and Watts.',
    ],
    formulaExplanation:
      'To prevent thermal runaway across forward-biased LED junctions, a current-limiting resistor drops the leftover potential difference between Source Voltage and LED Forward Voltage while restricting circuit current safely. Formula: Resistor (Ω) = (Source Voltage − LED Forward Voltage) / (LED Current / 1000); Power Dissipation (W) = (Source V − LED V) × Current (A).',
    practicalExample:
      'Driving a 2.0V indicator from USB power using Source Voltage (V) = 5, LED Forward Voltage (V) = 2.0, and LED Current (mA) = 15 (0.015 A) outputs Resistor = 200.0 Ω and Power Dissipation: 0.05 Watts.',
    faqs: [
      {
        q: 'Can one series resistor protect two LEDs wired in series?',
        a: 'Yes, add their forward voltages together (e.g., 2.0V + 2.0V = 4.0V) and enter the sum as LED forward voltage.',
      },
      {
        q: 'Should multiple parallel LEDs share a single resistor?',
        a: 'No, small diode differences make one LED draw excess current and fail; give each parallel branch its own resistor.',
      },
      {
        q: 'What happens if supply voltage is below LED forward voltage?',
        a: 'The LED stays dark because the DC supply lacks enough voltage to overcome the semiconductor junction barrier.',
      },
    ],
    safetyNote:
      'Safety Note: LED resistor outputs are low-voltage DC estimates only; if wiring high-voltage AC LED strips or drivers, ask a qualified electrician to inspect.',
  },

  'elec-battery-charge': {
    seoTitle: `How to Calculate Battery Charge Time mAh | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate battery charge time mAh for phones, power banks, and AA/AAA cells using charger mA and efficiency rate.',
    introDescription:
      'Estimating how long a portable power bank, rechargeable AA cell, or smartphone battery needs plugged into the wall charger is simple once you know how to calculate battery charge time mAh accurately. Enter cell capacity in milliamp-hours (mAh), adapter output in milliamps (mA), and charging efficiency percentage. Factoring in realistic 80% to 85% conversion efficiency provides practical wall-socket recharge times.',
    howToUseSteps: [
      'Enter cell rating inside Battery Capacity (mAh).',
      'Type adapter output milliamps into Charger Output Current (mA).',
      'Set realistic heat conversion rate in Charging Efficiency (%) to calculate charge time.',
    ],
    formulaExplanation:
      'Small lithium-ion and NiMH cells experience conversion heat losses inside charger ICs and battery internal resistance; dividing mAh capacity by milliamp charge current and dividing again by efficiency factor estimates total wall time. Formula: Charge Hours = (Battery Capacity (mAh) / Charger Output Current (mA)) / (Charging Efficiency / 100).',
    practicalExample:
      'Recharging a Battery Capacity (mAh) = 3000 smartphone cell at Charger Output Current (mA) = 1000 with Charging Efficiency (%) = 85% takes (3,000 / 1,000) / 0.85 = ~3.5 Hours Charge Time.',
    faqs: [
      {
        q: 'Why is 85% charging efficiency used for USB power banks and phones?',
        a: 'Charging circuits and battery internal resistance dissipate around 15% of input energy as mild warmth.',
      },
      {
        q: 'How much faster does a 2000 mA charger fill a 10,000 mAh pack than a 1000 mA brick?',
        a: 'Doubling charger current from 1000 mA to 2000 mA cuts bulk recharge time roughly in half.',
      },
      {
        q: 'Why does charging slow down noticeably during the final 20%?',
        a: 'Lithium battery management chips taper current gradually near full voltage to protect long-term cell health.',
      },
    ],
    safetyNote:
      'Safety Note: Cell recharge estimates are approximations only; never leave damaged batteries charging unattended and have a qualified electrician inspect faulty wall outlets.',
  },

  'elec-max-power': {
    seoTitle: `How to Calculate Maximum Power Transfer | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate maximum power transfer P_max in Watts and matched load resistance from Thevenin voltage and resistance.',
    introDescription:
      'Optimizing RF antenna feeds, precision Wheatstone sensor bridges, and audio amplifier output stages starts with learning how to calculate maximum power transfer in linear circuits. Enter the source’s open-circuit Thevenin equivalent voltage alongside internal Thevenin resistance in Ohms. Under the Maximum Power Transfer Theorem, matching external load resistance equal to internal source resistance delivers peak possible load wattage P_max cleanly.',
    howToUseSteps: [
      'Type open-circuit source potential into Thevenin Voltage (V_th).',
      'Enter internal source impedance inside Thevenin Resistance (R_th in Ω).',
      'Inspect peak transferable load power P_max and matched Load Resistance.',
    ],
    formulaExplanation:
      'According to the Maximum Power Transfer Theorem in circuit analysis, an arbitrary linear network delivers maximum electrical power to an external resistive load precisely when load resistance matches internal Thevenin resistance (R_L = R_th). Formula: Matched R_L = R_th; P_max (Watts) = V_th² / (4 × R_th).',
    practicalExample:
      'Given Thevenin Voltage (V_th) = 24 and Thevenin Resistance (R_th in Ω) = 50, matching Load Resistance (R_L) = 50 Ω achieves P_max = 24² / (4 × 50) = 2.88 Watts.',
    faqs: [
      {
        q: 'What percentage power efficiency occurs at maximum power transfer?',
        a: 'When load resistance equals internal resistance, exactly 50% of generated power reaches the load while 50% heats the source.',
      },
      {
        q: 'Why do radio antennas match impedance while power grids do not?',
        a: 'Weak RF signals need every possible milliwatt transferred, whereas utility grids prioritize 95%+ efficiency over matched dissipation.',
      },
      {
        q: 'Why must Thevenin resistance stay strictly above zero?',
        a: 'An ideal zero-ohm source has no internal resistance cap, making V² / (4 × 0) mathematically undefined.',
      },
    ],
    safetyNote:
      'Safety Note: Thevenin transfer outputs are theoretical analysis estimates only; consult a qualified electrician before testing high-power sources or load banks.',
  },
};
