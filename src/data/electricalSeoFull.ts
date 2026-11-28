import { SITE_NAME } from '../config/site';

export interface ElectricalCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
  safetyNote: string;
}

export const electricalSeoFullMap: Record<string, ElectricalCalculatorSeoEntry> = {
  'elec-ohms-law': {
    seoTitle: `Free Ohm's Law Calculator – Amps & Watts from Volts & Ohms | ${SITE_NAME}`,
    metaDescription:
      "Compute electrical current in Amps and power in Watts from voltage and circuit resistance using our free Ohm's Law Calculator.",
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
        q: 'Why does Resistance (Ohms Ω) reject zero as an input?',
        a: 'Zero resistance represents an ideal short circuit where V / 0 becomes mathematically infinite and dangerous in real circuits.',
      },
      {
        q: 'Does Voltage (Volts) work for both DC battery loops and AC resistive heaters?',
        a: 'Yes—pure heating coils, incandescent bulbs, and DC circuits follow I = V / R directly without reactive phase shifts.',
      },
      {
        q: 'What happens to current if Voltage (Volts) doubles while Resistance stays constant?',
        a: 'Current doubles linearly while total heat Power quadruples because P = V² / R.',
      },
    ],
    safetyNote:
      "Safety Note: Ohm's law calculations provide estimation figures only; always have a qualified electrician verify breaker ratings and live wiring work.",
  },

  'elec-bill-calc': {
    seoTitle: `Free Electricity Bill Calculator – PKR Monthly Meter Cost | ${SITE_NAME}`,
    metaDescription:
      'Estimate monthly utility charges from kWh meter units consumed and tariff rate using our free Electricity Bill Calculator.',
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
        q: 'Why might my actual WAPDA/DISCO invoice exceed the base amount shown here?',
        a: 'Power bills typically add fuel price adjustments (FPA), electricity duty, TV fee, GST, and tiered slab surcharges on top of base units.',
      },
      {
        q: 'How do I find Units Consumed (kWh) from my home meter?',
        a: 'Subtract last month’s previous kWh reading from today’s current digital meter reading.',
      },
      {
        q: 'What counts as 1 unit on a residential meter?',
        a: 'Running a 1,000-watt iron or microwave for 1 full hour consumes exactly 1 kWh unit.',
      },
    ],
    safetyNote:
      'Safety Note: Meter billing numbers serve estimation purposes only; consult a licensed electrician to inspect meter wiring or overload issues.',
  },

  'elec-appliance-cost': {
    seoTitle: `Free Appliance Running Cost Calculator – Daily & Monthly PKR | ${SITE_NAME}`,
    metaDescription:
      'Find daily and 30-day PKR electricity expenses for irons, fans, motors, or heaters with our free Appliance Running Cost Calculator.',
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
        q: 'Should refrigerators use full Hours Used per Day = 24?',
        a: 'No—fridge compressors cycle on roughly 8 to 10 hours per day total, so enter active duty hours rather than 24.',
      },
      {
        q: 'How do I estimate wattage if an appliance label only lists Amps?',
        a: 'Multiply nameplate Amps by 230 Volts (standard mains supply) and type that watt product into Appliance Power (Watts).',
      },
      {
        q: 'Can cutting usage by just 2 hours daily save noticeable money?',
        a: 'Dropping a 1,500 W load by 2 hours saves 3 kWh daily (90 units monthly), trimming thousands of rupees in higher slabs.',
      },
    ],
    safetyNote:
      'Safety Note: Running-cost figures are estimates only; engage a qualified electrician before wiring high-wattage appliances to wall sockets.',
  },

  'elec-resistor-calc': {
    seoTitle: `Free Series and Parallel Resistor Calculator – Total Ohms | ${SITE_NAME}`,
    metaDescription:
      'Combine two resistors in series or parallel to compute exact equivalent resistance in Ohms using our free Series and Parallel Resistor Calculator.',
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
        q: 'What is the quick rule for two equal resistors wired in parallel?',
        a: 'Two identical parallel resistors always produce exactly half of one resistor’s value (e.g., two 100 Ω in parallel equal 50 Ω).',
      },
      {
        q: 'Why does adding another parallel resistor lower overall equivalent resistance?',
        a: 'Each extra parallel branch opens an additional path for electrical current to flow simultaneously.',
      },
      {
        q: 'Do series resistors double allowable power wattage handling?',
        a: 'Two equal resistors share voltage and heat evenly, effectively doubling combined safe power dissipation compared to one resistor.',
      },
    ],
    safetyNote:
      'Safety Note: Resistance values are theoretical bench estimates only; have a qualified electrician verify mains-voltage resistor networks and thermal limits.',
  },

  'elec-battery-backup': {
    seoTitle: `Free UPS and Battery Backup Time Calculator – Load Hours | ${SITE_NAME}`,
    metaDescription:
      'Estimate how many hours and minutes a 12V or 24V UPS battery bank powers home loads with our free UPS and Battery Backup Time Calculator.',
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
        q: 'What should I enter in Battery Voltage (V) for a two-battery 24V UPS?',
        a: 'Type 24 in Battery Voltage (V) while keeping single-string Battery Capacity (Ah) unchanged when two 12V batteries are wired in series.',
      },
      {
        q: 'Why does real lead-acid backup shrink under heavy 1,000W loads?',
        a: 'Peukert’s effect reduces effective Ah capacity during high discharge currents compared to light fan-and-LED loads.',
      },
      {
        q: 'Why apply a 0.80 efficiency multiplier in the UPS calculation?',
        a: 'Inverter circuitry typically wastes 10%–15% as heat and cuts off before full zero-volt depletion to protect battery plates.',
      },
    ],
    safetyNote:
      'Safety Note: UPS backup times are approximate estimates only; always hire a qualified electrician to install DC fuses, changeover switches, and inverter wiring.',
  },

  'elec-solar-estimator': {
    seoTitle: `Free Solar Panel Size Estimator Calculator – kW Sizing | ${SITE_NAME}`,
    metaDescription:
      'Size your rooftop solar array in kilowatts from daily kWh consumption and local peak sun hours with our free Solar Panel Size Estimator Calculator.',
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
        q: 'How many Peak Sun Hours per Day does Pakistan average across the year?',
        a: 'Most Pakistani cities average 5.0 to 5.8 effective peak sun hours daily across clear and winter months.',
      },
      {
        q: 'How many 550W solar panels equal a 3.75 kW array?',
        a: 'Dividing 3,750 watts by 550 watts equals about 7 solar panels (often rounded to 8 panels for 4.4 kW).',
      },
      {
        q: 'Does winter fog or summer panel dust lower output below the 0.80 factor?',
        a: 'Heavy smog or unwashed dusty panels can cut harvest further, so regular glass cleaning protects daily yield.',
      },
    ],
    safetyNote:
      'Safety Note: Solar sizing results are preliminary estimates only; certified solar engineers or qualified electricians must inspect roof structure, earthing, and DC/AC wiring.',
  },

  'elec-led-resistor': {
    seoTitle: `Free LED Resistor Calculator – Current-Limiting Ohms | ${SITE_NAME}`,
    metaDescription:
      'Calculate exact series resistor Ohms and wattage rating to protect LEDs from overcurrent with our free LED Resistor Calculator.',
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
        q: 'What LED Forward Voltage (Volts) do standard 5mm red vs blue/white LEDs have?',
        a: 'Red and yellow LEDs typically drop 1.8–2.2 V, whereas blue, green, and white LEDs usually drop 3.0–3.4 V.',
      },
      {
        q: 'Which standard E12 resistor value replaces 490 Ohms Ω safely?',
        a: 'Pick the next higher common resistor—510 Ω or 560 Ω (0.5 W)—to keep LED current slightly under 20 mA and extend lifespan.',
      },
      {
        q: 'Why check Resistor Power Rating alongside Ohms?',
        a: 'Running 0.20 W continuously through a tiny 1/8 W resistor causes overheating, so choose at least a 1/4 W or 1/2 W resistor.',
      },
    ],
    safetyNote:
      'Safety Note: Circuit calculations are bench estimates only; verify supply polarity and let a qualified electrician handle any mains-powered LED driver wiring.',
  },

  'elec-watts-to-amps': {
    seoTitle: `Free Watts to Amps Calculator – Single-Phase Current | ${SITE_NAME}`,
    metaDescription:
      'Convert appliance wattage and supply voltage directly into electrical current in Amps with our free Watts to Amps Calculator.',
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
        q: 'Can a standard 5-amp light socket safely power an 8.70 Amp appliance?',
        a: 'No—an 8.70 A load requires at least a 13 A or 16 A power socket and adequately thick wiring.',
      },
      {
        q: 'How does Amps change if running a 2000W load on 12V DC battery instead of 230V AC?',
        a: 'At 12V DC, current shoots up to 166.67 Amps, demonstrating why high-power inverters need heavy welding-thick battery cables.',
      },
      {
        q: 'Does inductive motor power factor increase real current draw slightly?',
        a: 'Yes—for AC motors or compressors, divide Watts by (Volts × Power Factor) for true line Amps.',
      },
    ],
    safetyNote:
      'Safety Note: Current conversions are estimates only; a qualified electrician must confirm wire gauge, MCB breaker size, and earthing for actual circuits.',
  },

  'elec-kwh-cost': {
    seoTitle: `Free Kilowatt-Hour (kWh) Energy Cost Calculator – Tariff Total | ${SITE_NAME}`,
    metaDescription:
      'Compute total PKR electricity expense for any measured kilowatt-hour energy consumption using our free Kilowatt-Hour (kWh) Energy Cost Calculator.',
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
        q: 'How is this useful for split-portion homes sharing one main meter?',
        a: 'Install a dedicated sub-meter for each floor, read monthly Energy Consumed (kWh), and multiply by average bill rate here.',
      },
      {
        q: 'How do I calculate Tariff Rate (PKR / kWh) accurately from a tiered bill?',
        a: 'Divide your previous total utility bill amount by total billed units to obtain an all-inclusive blended rupee rate per kWh.',
      },
      {
        q: 'Does 1 kWh cost the same at peak evening hours on TOU meters?',
        a: 'Time-of-Use (TOU) three-phase meters charge higher Tariff Rate (PKR / kWh) during peak evening windows than off-peak hours.',
      },
    ],
    safetyNote:
      'Safety Note: Energy cost outputs are billing estimates only; always have a qualified electrician install or inspect sub-meters and main distribution boards.',
  },

  'elec-rectifier-v': {
    seoTitle: `Free AC to DC Rectifier Peak Voltage Calculator – Bridge Output | ${SITE_NAME}`,
    metaDescription:
      'Find peak and bridge-rectified DC voltage from transformer AC RMS input using our free AC to DC Rectifier Peak Voltage Calculator.',
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
        q: 'Why subtract 1.4V for Approx Regulated DC output?',
        a: 'In a full-wave 4-diode bridge rectifier, current passes through two series silicon diodes per half-cycle, dropping ~0.7 V across each.',
      },
      {
        q: 'Why do capacitor ratings need headroom above AC RMS Voltage (Volts)?',
        a: 'A 12V AC transformer charges filter capacitors close to 17V DC unloaded, so designers pick 25V or 35V electrolytic capacitors safely.',
      },
      {
        q: 'How much drops in a half-wave single-diode rectifier instead?',
        a: 'A single silicon diode drops ~0.7 V instead of 1.4 V, though ripple voltage is much higher without larger smoothing capacitors.',
      },
    ],
    safetyNote:
      'Safety Note: Rectifier calculations are circuit estimates only; ensure proper isolation and ask a qualified electrician or technician to verify live AC transformer wiring.',
  },

  'elec-transformer-turns': {
    seoTitle: `Free Transformer Turns Ratio Calculator – Secondary Volts | ${SITE_NAME}`,
    metaDescription:
      'Compute transformer secondary winding voltage and winding ratio from primary turns and voltage with our free Transformer Turns Ratio Calculator.',
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
        q: 'When is a transformer classified as step-down vs step-up?',
        a: 'When Secondary Turns (Ns) is lower than Primary Turns (Np), voltage steps down; when Ns exceeds Np, voltage steps up.',
      },
      {
        q: 'Does a step-down transformer increase available secondary output current?',
        a: 'Ideal power stays conserved (Vp × Ip ≈ Vs × Is), so stepping voltage down 10× permits roughly 10× higher current on thicker secondary wire.',
      },
      {
        q: 'Can DC voltage be fed into Primary Voltage (Vp)?',
        a: 'No—transformers depend on changing AC magnetic flux; connecting steady DC shorts the primary winding and overheats the coil.',
      },
    ],
    safetyNote:
      'Safety Note: Transformer turns results are ideal estimates only; high-voltage windings pose shock hazards and require verification by a qualified electrician.',
  },

  'elec-capacitive-reactance': {
    seoTitle: `Free Capacitive Reactance Calculator – Xc in Ohms | ${SITE_NAME}`,
    metaDescription:
      'Calculate AC capacitive reactance (Xc) in Ohms from microfarad capacitance and Hertz frequency with our free Capacitive Reactance Calculator.',
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
        q: 'Why must Capacitance and Frequency both exceed zero?',
        a: 'At 0 Hz (pure DC), division by zero drives Xc toward infinity because an ideal capacitor acts as an open circuit to DC.',
      },
      {
        q: 'How does Xc change when moving from 50 Hz mains to 50 kHz switching circuits?',
        a: 'Increasing frequency 1,000× cuts capacitive reactance 1,000×—dropping 318.31 Ω down to just 0.32 Ω.',
      },
      {
        q: 'Where do engineers apply Capacitive Reactance (Xc) in AC circuits?',
        a: 'Audio crossover filters, motor-run phase capacitors, snubbers, and transformerless capacitive dropper circuits all rely on Xc.',
      },
    ],
    safetyNote:
      'Safety Note: Reactance calculations are analytical estimates only; always discharge high-voltage capacitors safely and consult a qualified electrician for AC work.',
  },

  'elec-inductive-reactance': {
    seoTitle: `Free Inductive Reactance Calculator – Coil Xl in Ohms | ${SITE_NAME}`,
    metaDescription:
      'Compute inductor AC reactance (Xl) in Ohms from millihenry inductance and frequency using our free Inductive Reactance Calculator.',
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
        a: 'As Frequency (Hertz Hz) rises, inductive reactance Xl grows larger (blocking high frequencies), whereas capacitive reactance Xc shrinks.',
      },
      {
        q: 'Does total coil impedance at 50 Hz equal Xl alone?',
        a: 'Real copper windings also carry DC wire resistance R, making total impedance Z = √(R² + Xl²).',
      },
      {
        q: 'Where do technicians encounter Inductive Reactance in everyday gear?',
        a: 'Ceiling fan chokes, EMI line filters, speaker crossovers, and SMPS inductors rely on Xl to shape AC current.',
      },
    ],
    safetyNote:
      'Safety Note: Inductor reactance values are design estimates only; have a qualified electrician verify mains chokes, relays, and motor starter wiring.',
  },

  'elec-rc-time-constant': {
    seoTitle: `Free RC Time Constant Calculator – Tau (τ) Seconds | ${SITE_NAME}`,
    metaDescription:
      'Determine RC resistor-capacitor charging time constant tau (τ) in seconds with our free RC Time Constant Calculator.',
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
        q: 'How long does it take an RC circuit to reach 99% of supply voltage?',
        a: 'Approximately 5 time constants (5 × τ), so a 1.000 second τ reaches 99.3% charge in 5.0 seconds.',
      },
      {
        q: 'Why use microfarads (µF) rather than Farads in electronics?',
        a: 'Practical timing capacitors in timers and filters almost always range between nanofarads and thousands of microfarads.',
      },
      {
        q: 'What are common applications for the RC Time Constant?',
        a: 'Switch debouncing, 555 timer delays, power-on microcontroller reset pins, and low-pass analog signal filters.',
      },
    ],
    safetyNote:
      'Safety Note: RC timing results are theoretical estimates only; verify high-voltage bleeder resistors and real circuit wiring with a qualified electrician.',
  },

  'elec-voltage-drop': {
    seoTitle: `Free Wire Voltage Drop Calculator – Cable Gauge & Volts Loss | ${SITE_NAME}`,
    metaDescription:
      'Estimate cable voltage drop and percentage loss over one-way copper runs by AWG wire size with our free Wire Voltage Drop Calculator.',
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
        q: 'What maximum Voltage Drop percentage do electrical standards recommend?',
        a: 'Electrical codes generally target under 3% voltage drop for branch circuits and under 5% total combined from main service feeder to outlet.',
      },
      {
        q: 'Why does the formula multiply One-way Cable Length (meters) by 2?',
        a: 'Current travels out along the live wire and returns along the neutral wire, doubling total copper conductor length.',
      },
      {
        q: 'Does lower AWG number mean thicker or thinner copper wire?',
        a: 'Lower AWG numbers indicate thicker wire—10 AWG carries more current with far less voltage drop than 14 AWG.',
      },
    ],
    safetyNote:
      'Safety Note: Voltage drop outputs are sizing estimates only; always have a qualified electrician verify ampacity tables, insulation ratings, and real cable wiring.',
  },

  'elec-motor-hp': {
    seoTitle: `Free Motor Horsepower to Watts Converter Calculator – HP to W | ${SITE_NAME}`,
    metaDescription:
      'Convert electric water pump or motor Horsepower ratings into Watts and kilowatts using our free Motor Horsepower to Watts Converter Calculator.',
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
        q: 'Why does a 2 HP motor draw more than 1,491 Watts from my breaker or inverter?',
        a: 'Inrush startup current spikes 3× to 6× higher briefly, and motor inefficiency plus power factor require sizing inverters roughly 1.5×–2× continuous watts.',
      },
      {
        q: 'What is the difference between mechanical HP (745.7 W) and metric PS (735.5 W)?',
        a: 'Standard imperial mechanical horsepower equals 745.7 Watts, whereas European metric horsepower (PS/CV) equals 735.5 Watts.',
      },
      {
        q: 'Can I enter 0.5 HP or 1.5 HP fractional motors?',
        a: 'Yes—enter 0.5 for a half-HP house water motor (~373 Watts) or 1.5 for 1.5 HP (~1,119 Watts).',
      },
    ],
    safetyNote:
      'Safety Note: HP-to-Watts values are conversion estimates only; consult a qualified electrician for motor starter contactors, overload relays, and pump wiring.',
  },

  'elec-three-phase': {
    seoTitle: `Free Three-Phase Power Calculator – 3-Phase kW & HP | ${SITE_NAME}`,
    metaDescription:
      'Calculate balanced three-phase real power in kilowatts and horsepower from voltage, current, and power factor with our free Three-Phase Power Calculator.',
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
        q: 'Why does three-phase power use Line-to-Line Voltage (400V) multiplied by √3?',
        a: 'Three sinusoidal phases separated by 120 degrees combine geometrically by √3 rather than simple 3× single-phase addition.',
      },
      {
        q: 'What Power Factor (0.1 - 1.0) do commercial induction motors usually exhibit?',
        a: 'Loaded industrial three-phase motors typically operate around 0.80 to 0.90 power factor.',
      },
      {
        q: 'Can I measure Line Current (Amps) using a clamp meter on one phase?',
        a: 'Yes—on balanced three-phase motors, clamping any single hot phase gives the balanced Line Current (Amps).',
      },
    ],
    safetyNote:
      'Safety Note: Three-phase calculations are engineering estimates only; 400V+ industrial systems must be wired and tested exclusively by a qualified electrician.',
  },

  'elec-power-factor': {
    seoTitle: `Free Power Factor Correction Calculator – Capacitor kVAR | ${SITE_NAME}`,
    metaDescription:
      'Size shunt capacitor banks in kVAR needed to raise facility power factor from initial to target PF using our free Power Factor Correction Calculator.',
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
        q: 'Why must Target Power Factor stay strictly higher than Initial Power Factor?',
        a: 'Capacitor correction raises lagging PF upward toward 1.0; targeting equal or lower PF requires zero capacitance.',
      },
      {
        q: 'Why do commercial utilities penalize Initial Power Factor below 0.90?',
        a: 'Poor power factor forces utility transformers and feeder cables to carry extra wasted reactive current for the same real kW.',
      },
      {
        q: 'Should you overshoot Target Power Factor to exactly 1.00?',
        a: 'Most engineers target 0.95 to 0.98 via automatic APFC capacitor steps to avoid over-compensation leading power factor at night.',
      },
    ],
    safetyNote:
      'Safety Note: Capacitor bank kVAR values are estimates only; APFC panel switching and high-voltage wiring must be verified by a qualified industrial electrician.',
  },

  'elec-frequency-wavelength': {
    seoTitle: `Free Frequency and Wavelength Calculator – MHz to Meters | ${SITE_NAME}`,
    metaDescription:
      'Convert RF radio frequency in Megahertz (MHz) into electromagnetic free-space wavelength in meters with our free Frequency and Wavelength Calculator.',
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
        q: 'How long is a half-wave dipole antenna at 100 MHz?',
        a: 'Halving the 3.00 Meter full wavelength gives a ~1.50 meter half-wave FM dipole (or ~0.75 m quarter-wave whip).',
      },
      {
        q: 'What wavelength does 2400 MHz (2.4 GHz) Wi-Fi produce?',
        a: 'Entering 2400 MHz yields 0.125 meters (12.5 cm), explaining why Wi-Fi router antennas are only a few centimeters long.',
      },
      {
        q: 'Does coaxial cable velocity factor shorten physical wavelength slightly?',
        a: 'Yes—inside polyethylene coax or copper wire, signals travel slightly slower than free space, shrinking physical length by ~0.66–0.95×.',
      },
    ],
    safetyNote:
      'Safety Note: RF wavelength outputs are theoretical estimates only; outdoor antenna mast grounding and lightning protection should be inspected by a qualified electrician.',
  },

  'elec-charge-current': {
    seoTitle: `Free Electric Charge and Current Calculator – Coulombs (C) | ${SITE_NAME}`,
    metaDescription:
      'Compute total electric charge in Coulombs from steady current in Amps and elapsed seconds using our free Electric Charge and Current Calculator.',
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
        q: 'How many Coulombs are stored inside a 1 Ah battery cell?',
        a: 'Because 1 hour holds 3,600 seconds, 1 Amp flowing for 3,600 seconds equals exactly 3,600 Coulombs.',
      },
      {
        q: 'Does Charge Q work for fluctuating AC sine waves directly?',
        a: 'No—net AC charge oscillates back and forth around zero; this Q = I × t formula applies to unidirectional DC flow.',
      },
      {
        q: 'How many electrons equal 1 Coulomb of charge?',
        a: 'One Coulomb contains approximately 6.242 × 10¹⁸ elementary electron charges.',
      },
    ],
    safetyNote:
      'Safety Note: Charge calculations are physics estimates only; high-current DC banks require proper overcurrent protection verified by a qualified electrician.',
  },

  'elec-battery-charge-time': {
    seoTitle: `Free Battery Charging Time Calculator – Ah & Charger Amps | ${SITE_NAME}`,
    metaDescription:
      'Estimate full recharge hours for deep-cycle or automotive batteries from Ah capacity and charger Amps using our Battery Charging Time Calculator.',
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
        q: 'What Charger Output Current (Amps) is safest for lead-acid tubular batteries?',
        a: 'Manufacturers recommend charging at roughly 10% of Ah rating (e.g., 15 A for a 150 Ah battery) to prevent plate warping.',
      },
      {
        q: 'Why does recharging take longer if the battery is only 50% empty vs completely flat?',
        a: 'A half-discharged 150 Ah battery only needs ~75 Ah replaced (~6 hours), though constant-voltage float tapering slows the final 15%.',
      },
      {
        q: 'Can this estimate lithium LiFePO4 battery charging too?',
        a: 'Lithium packs charge closer to 95%+ efficiency, so actual recharge times often run slightly shorter than the 1.2× lead-acid factor.',
      },
    ],
    safetyNote:
      'Safety Note: Battery charging durations are estimates only; ensure proper room ventilation and have a qualified electrician verify inverter charger settings and DC wiring.',
  },

  'elec-inverter-load': {
    seoTitle: `Free Inverter Load Capacity Calculator – VA to Safe Watts | ${SITE_NAME}`,
    metaDescription:
      'Convert inverter VA rating and power factor into safe continuous appliance Watt load with our free Inverter Load Capacity Calculator.',
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
        q: 'Why should continuous UPS load stay around 70%–80% of 960 Watts Safe Load?',
        a: 'Leaving 20% headroom avoids thermal shutdowns in summer and absorbs brief startup surges from ceiling fans or TVs.',
      },
      {
        q: 'Can a 1200 VA inverter start a 1-HP water pump or microwave?',
        a: 'Inductive motors pull 3×–5× locked-rotor surge currents on startup, typically tripping overload protection on 1200 VA inverters.',
      },
      {
        q: 'Where do I find the Power Factor printed on my inverter?',
        a: 'Modern sine-wave solar inverters commonly rate 0.8 or 1.0 PF (check the side specification sticker or datasheet).',
      },
    ],
    safetyNote:
      'Safety Note: Inverter capacity figures are estimates only; real UPS sub-circuit isolation and DB wiring must be checked by a qualified electrician.',
  },

  'elec-water-heater': {
    seoTitle: `Free Electric Water Heater Energy Consumption Calculator | ${SITE_NAME}`,
    metaDescription:
      'Calculate daily kWh units and monthly PKR electricity bills for electric geysers with our free Electric Water Heater Energy Consumption Calculator.',
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
        q: 'Does a tank geyser left powered 24 hours stay heating continuously?',
        a: 'No—once water hits thermostat temperature (55–65°C), the heating coil switches off and only cycles periodically to replace standby heat loss.',
      },
      {
        q: 'How can households trim electric geyser electricity bills in winter?',
        a: 'Install a smart timer switch to run heating 1–2 hours before morning/evening use and insulate exposed hot pipes.',
      },
      {
        q: 'Does a 2000W water heater need a dedicated breaker and earth ground?',
        a: 'Yes—water heaters combine high 8.7A+ continuous loads with moisture, making dedicated MCB and solid earthing essential.',
      },
    ],
    safetyNote:
      'Safety Note: Geyser operating costs are estimates only; have a qualified electrician install dedicated ELCB/RCD earth-leakage protection and heavy-duty wiring.',
  },

  'elec-ac-power': {
    seoTitle: `Free Air Conditioner (AC) Power Consumption Calculator – Ton to PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate monthly PKR electricity bills for 1-ton, 1.5-ton, or 2-ton units using our free Air Conditioner (AC) Power Consumption Calculator.',
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
        q: 'Do DC inverter ACs actually consume less than 1,800 Watts once the room cools?',
        a: 'Yes—once setpoint (26°C) is reached in an insulated room, inverter compressors throttle down to 500–900 W, cutting actual bills 30%–45% below non-inverter models.',
      },
      {
        q: 'What thermostat setting saves the most electricity without losing comfort?',
        a: 'Setting AC thermostats to 26°C paired with a ceiling fan cuts compressor duty substantially compared to 18°C.',
      },
      {
        q: 'Can I calculate a 1-Ton or 2-Ton unit here?',
        a: 'Yes—enter 1 for 1-Ton (1,200W baseline) or 2 for 2-Ton (2,400W baseline) inside AC Capacity (Tons).',
      },
    ],
    safetyNote:
      'Safety Note: AC consumption bills are estimates only; a qualified electrician must wire 20A/32A dedicated breakers, proper earthing, and 4mm² copper cables.',
  },

  'elec-voltage-divider': {
    seoTitle: `Free Voltage Divider Circuit Output Calculator – Vout Volts | ${SITE_NAME}`,
    metaDescription:
      'Find exact unloaded output voltage Vout from two series resistors and Vin input using our free Voltage Divider Circuit Output Calculator.',
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
        q: 'Why should resistor dividers NOT power heavy motors or microcontrollers?',
        a: 'Any current drawn from V_out flows in parallel with Resistor 2, pulling output voltage down sharply—use a voltage regulator for power loads.',
      },
      {
        q: 'How do I scale a 5V sensor signal down to 3.3V safely for ESP32?',
        a: 'Try Resistor 1 = 1000 Ω and Resistor 2 = 2000 Ω with Vin = 5 V, which outputs 3.33 Volts safely.',
      },
      {
        q: 'What happens if both Resistor 1 and Resistor 2 equal zero?',
        a: 'The calculator alerts that resistor sum cannot be zero to prevent a dead short and undefined division.',
      },
    ],
    safetyNote:
      'Safety Note: Divider outputs are low-power circuit estimates only; never build unisolated mains voltage dividers—consult a qualified electrician for line-voltage sensing.',
  },

  'elec-resistor-color': {
    seoTitle: `Free Resistor Value Estimator Calculator – 4-Band Color Code | ${SITE_NAME}`,
    metaDescription:
      'Decode 4-band axial resistor color stripes into exact Ohms or kilo-Ohms quickly with our free Resistor Value Estimator Calculator.',
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
        q: 'Which end of a physical resistor do I read first?',
        a: 'Start from the side where bands cluster slightly closer together and end opposite the standalone metallic gold (±5%) or silver (±10%) tolerance band.',
      },
      {
        q: 'Why does Brown–Black–Red represent a super common 1.0 kΩ resistor?',
        a: '1 kΩ pull-ups and LED limiters are ubiquitous in Arduino and breadboard kits, easily spotted by their signature brown-black-red pattern.',
      },
      {
        q: 'When does the readout switch from Ω to kΩ?',
        a: 'Values reaching 1,000 Ohms or higher automatically format cleanly in kilo-ohms (kΩ) for quick bench readability.',
      },
    ],
    safetyNote:
      'Safety Note: Color-code decoding provides bench reference estimates only; verify critical resistors with a multimeter and have a qualified electrician check mains-level repairs.',
  },

  'elec-led-series': {
    seoTitle: `Free LED Series Resistor Calculator – Diode Drop & Wattage | ${SITE_NAME}`,
    metaDescription:
      'Size protective series Ohms and power dissipation in Watts for single LED circuits using our free LED Series Resistor Calculator.',
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
        q: 'Can one single resistor protect two identical 2.0V LEDs wired in series on 5V?',
        a: 'Yes—enter their combined 4.0V drop inside LED Forward Voltage (V), leaving (5 − 4) / 0.015 = 66.7 Ω.',
      },
      {
        q: 'Should I wire multiple LEDs in parallel sharing just one series resistor?',
        a: 'No—slight manufacturing differences cause one LED to hog current and burn out; give each parallel LED its own series resistor.',
      },
      {
        q: 'What happens if Source Voltage (V) is lower than LED Forward Voltage (V)?',
        a: 'The diode cannot turn on because supply voltage lacks enough potential to overcome the semiconductor junction barrier.',
      },
    ],
    safetyNote:
      'Safety Note: LED resistor outputs are low-voltage DC estimates only; if wiring high-voltage AC LED strips or drivers, ask a qualified electrician to inspect.',
  },

  'elec-battery-charge': {
    seoTitle: `Free Battery Charge Time Estimator Calculator – mAh Duration | ${SITE_NAME}`,
    metaDescription:
      'Estimate charging hours for power banks, AA/AAA cells, and phone batteries from mAh and efficiency with our free Battery Charge Time Estimator Calculator.',
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
        q: 'Why use 85% Charging Efficiency (%) for USB smartphone or NiMH charging?',
        a: 'Voltage step-down conversion and constant-voltage trickle topping waste roughly 15% of supplied milliamp-hours as mild warmth.',
      },
      {
        q: 'Does a 20,000 mAh power bank charge faster with a 2000 mA (2A) brick?',
        a: 'Doubling Charger Output Current (mA) from 1000 mA to 2000 mA halves estimated recharge time from ~23.5 hours to ~11.8 hours.',
      },
      {
        q: 'Why does the last 20% of lithium battery charging slow down in real life?',
        a: 'Smart BMS chips switch from fast constant-current mode to gentle constant-voltage tapering above 80% to prevent lithium plating.',
      },
    ],
    safetyNote:
      'Safety Note: Cell recharge estimates are approximations only; never leave damaged batteries charging unattended and have a qualified electrician inspect faulty wall outlets.',
  },

  'elec-max-power': {
    seoTitle: `Free Maximum Power Transfer Calculator – Thevenin Watts | ${SITE_NAME}`,
    metaDescription:
      'Compute peak load wattage P_max from Thevenin equivalent voltage and internal resistance using our free Maximum Power Transfer Calculator.',
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
        q: 'What efficiency does a circuit achieve at the Maximum Power Transfer point?',
        a: 'Because R_L equals R_th, half of total source power heats R_th and half reaches the load—yielding exactly 50% power efficiency.',
      },
      {
        q: 'Why is maximum power matching common in audio amplifiers and RF antennas, not grid power lines?',
        a: 'Weak RF and speaker circuits prioritize squeezing every milliwatt of signal power, whereas utility grids prioritize >95% efficiency over matched dissipation.',
      },
      {
        q: 'Why must Thevenin Resistance (R_th in Ω) be greater than zero?',
        a: 'An ideal zero-ohm source has no finite resistance limit, making V² / (4 × 0) undefined.',
      },
    ],
    safetyNote:
      'Safety Note: Thevenin transfer outputs are theoretical analysis estimates only; consult a qualified electrician before testing high-power sources or load banks.',
  },
};
