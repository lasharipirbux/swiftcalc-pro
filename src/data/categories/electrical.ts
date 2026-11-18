import { Category } from "../../types";

export const electricalCategory: Category = {
    id: 'electrical',
    name: 'Electrical & Electronics',
    iconName: 'Zap',
    description: "Ohm's law, electricity bills, appliance running cost, resistors, UPS backup, solar sizing, LED resistors, 3-phase power, wire gauge drop, and transformer calculators.",
    color: 'from-yellow-600 to-amber-700',
    calculators: [
      {
        id: 'elec-ohms-law',
        name: "Ohm's Law Calculator",
        categoryId: 'electrical',
        description: 'Calculate Voltage, Current, Resistance, and Power using Ohm’s law.',
        inputs: [
          { id: 'voltage', label: 'Voltage (Volts)', type: 'number', defaultValue: 230 },
          { id: 'resistance', label: 'Resistance (Ohms Ω)', type: 'number', defaultValue: 46 }
        ],
        calculate: (vals) => {
          const v = Number(vals.voltage);
          const r = Number(vals.resistance);
          if (r === 0) return { result: 'Resistance cannot be zero' };
          const i = v / r;
          const p = v * i;
          return {
            result: `Current: ${i.toFixed(2)} Amps`,
            secondaryResult: `Power: ${p.toFixed(1)} Watts | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: 'Current (I) = V / R, Power (P) = V × I'
          };
        }
      },
      {
        id: 'elec-bill-calc',
        name: 'Electricity Bill Calculator',
        categoryId: 'electrical',
        description: 'Calculate total electricity bill using units consumed and user-entered tariff rate per unit.',
        inputs: [
          { id: 'units', label: 'Units Consumed (kWh)', type: 'number', defaultValue: 350 },
          { id: 'rate', label: 'Rate per Unit (PKR / kWh)', type: 'number', defaultValue: 35 }
        ],
        calculate: (vals) => {
          const units = Number(vals.units);
          const rate = Number(vals.rate);
          const totalBill = units * rate;
          return {
            result: `PKR ${totalBill.toLocaleString()}`,
            secondaryResult: `${units} kWh units @ PKR ${rate}/unit | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: 'Total Bill = Units Consumed (kWh) × Rate per Unit'
          };
        }
      },
      {
        id: 'elec-appliance-cost',
        name: 'Appliance Running Cost Calculator',
        categoryId: 'electrical',
        description: 'Calculate daily and monthly electricity cost for any appliance.',
        inputs: [
          { id: 'watts', label: 'Appliance Power (Watts)', type: 'number', defaultValue: 1500 },
          { id: 'hours', label: 'Hours Used per Day', type: 'number', defaultValue: 6 },
          { id: 'rate', label: 'Rate per Unit (PKR / kWh)', type: 'number', defaultValue: 35 }
        ],
        calculate: (vals) => {
          const w = Number(vals.watts);
          const hrs = Number(vals.hours);
          const rate = Number(vals.rate);
          const dailyKwh = (w * hrs) / 1000;
          const dailyCost = dailyKwh * rate;
          const monthlyCost = dailyCost * 30;
          return {
            result: `PKR ${monthlyCost.toLocaleString(undefined, {maximumFractionDigits: 0})} / month`,
            secondaryResult: `Daily Cost: PKR ${dailyCost.toFixed(2)} (${dailyKwh.toFixed(2)} kWh/day) | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: 'Monthly Cost = [(Watts × Hours/Day) / 1000] × Rate × 30 days'
          };
        }
      },
      {
        id: 'elec-resistor-calc',
        name: 'Series and Parallel Resistor Calculator',
        categoryId: 'electrical',
        description: 'Calculate total equivalent resistance for series or parallel connected resistors.',
        inputs: [
          { id: 'type', label: 'Connection Type', type: 'select', defaultValue: 'series', options: [
            { label: 'Series Connection (R1 + R2)', value: 'series' },
            { label: 'Parallel Connection (R1 || R2)', value: 'parallel' }
          ]},
          { id: 'r1', label: 'Resistor 1 (Ohms Ω)', type: 'number', defaultValue: 100 },
          { id: 'r2', label: 'Resistor 2 (Ohms Ω)', type: 'number', defaultValue: 150 }
        ],
        calculate: (vals) => {
          const r1 = Number(vals.r1);
          const r2 = Number(vals.r2);
          let eq = 0;
          if (vals.type === 'series') {
            eq = r1 + r2;
          } else {
            if (r1 + r2 === 0) return { result: 'Invalid resistance' };
            eq = (r1 * r2) / (r1 + r2);
          }
          return {
            result: `${eq.toFixed(2)} Ω`,
            secondaryResult: `Equivalent Resistance | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: vals.type === 'series' ? 'R_eq = R1 + R2' : 'R_eq = (R1 × R2) / (R1 + R2)'
          };
        }
      },
      {
        id: 'elec-battery-backup',
        name: 'UPS and Battery Backup Time Calculator',
        categoryId: 'electrical',
        description: 'Calculate backup time for UPS and inverter batteries based on load and capacity.',
        inputs: [
          { id: 'ah', label: 'Battery Capacity (Ah)', type: 'number', defaultValue: 200 },
          { id: 'voltage', label: 'Battery Voltage (V)', type: 'number', defaultValue: 12 },
          { id: 'watts', label: 'Total Connected Load (Watts)', type: 'number', defaultValue: 300 }
        ],
        calculate: (vals) => {
          const ah = Number(vals.ah);
          const v = Number(vals.voltage);
          const watts = Number(vals.watts);
          if (watts <= 0) return { result: 'Load must be > 0 watts' };
          const backupHours = (ah * v * 0.8) / watts;
          const hrs = Math.floor(backupHours);
          const mins = Math.round((backupHours - hrs) * 60);
          return {
            result: `${hrs} hours and ${mins} minutes`,
            secondaryResult: `Total Backup: ${backupHours.toFixed(2)} hours | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: 'Backup Time = (Battery Ah × Volts × 0.8 Efficiency) / Watts'
          };
        }
      },
      {
        id: 'elec-solar-estimator',
        name: 'Solar Panel Size Estimator',
        categoryId: 'electrical',
        description: 'Estimate required solar panel system capacity (kW) based on daily units and sun hours.',
        inputs: [
          { id: 'dailyUnits', label: 'Daily Energy Needed (kWh / Units)', type: 'number', defaultValue: 15 },
          { id: 'sunHours', label: 'Peak Sun Hours per Day', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const units = Number(vals.dailyUnits);
          const sun = Number(vals.sunHours);
          if (sun <= 0) return { result: 'Sun hours must be > 0' };
          const systemKw = (units / sun) / 0.8;
          return {
            result: `${systemKw.toFixed(2)} kW Solar System`,
            secondaryResult: `Estimated generation with 20% system loss factor | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: 'System Size (kW) = (Daily Units / Peak Sun Hours) / 0.8'
          };
        }
      },
      {
        id: 'elec-led-resistor',
        name: 'LED Resistor Calculator',
        categoryId: 'electrical',
        description: 'Calculate series current-limiting resistor required for an LED.',
        inputs: [
          { id: 'sourceV', label: 'Source Voltage (Volts)', type: 'number', defaultValue: 12 },
          { id: 'ledV', label: 'LED Forward Voltage (Volts)', type: 'number', defaultValue: 2.2 },
          { id: 'ledMa', label: 'LED Current (Milliamps mA)', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          const sV = Number(vals.sourceV);
          const lV = Number(vals.ledV);
          const ma = Number(vals.ledMa);
          if (ma <= 0) return { result: 'Current must be > 0' };
          const amps = ma / 1000;
          const ohms = (sV - lV) / amps;
          const powerW = (sV - lV) * amps;
          return {
            result: `${Math.round(ohms)} Ohms Ω`,
            secondaryResult: `Resistor Power Rating: ${powerW.toFixed(2)} W | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: 'Resistance (Ω) = (Source V - LED V) / Current (Amps)'
          };
        }
      },
      {
        id: 'elec-watts-to-amps',
        name: 'Watts to Amps Calculator',
        description: 'Convert electrical power in Watts to current in Amps.',
        categoryId: 'electrical',
        inputs: [
          { id: 'watts', label: 'Power (Watts)', type: 'number', defaultValue: 2000 },
          { id: 'volts', label: 'Voltage (Volts)', type: 'number', defaultValue: 230 }
        ],
        calculate: (vals) => {
          const w = Number(vals.watts);
          const v = Number(vals.volts);
          if (v <= 0) return { result: 'Voltage must be > 0' };
          const amps = w / v;
          return {
            result: `${amps.toFixed(2)} Amps`,
            secondaryResult: `For ${w}W at ${v}V | Estimate only. For wiring or installation, consult a licensed electrician.`,
            formula: 'Current (Amps) = Watts / Volts'
          };
        }
      },
      // 17 New Electrical Calculators Added Below
      {
        id: 'elec-kwh-cost',
        name: 'Kilowatt-Hour (kWh) Energy Cost Calculator',
        categoryId: 'electrical',
        description: 'Calculate total cost of consuming a specific amount of electrical energy.',
        inputs: [
          { id: 'kwh', label: 'Energy Consumed (kWh)', type: 'number', defaultValue: 250 },
          { id: 'rate', label: 'Tariff Rate (PKR / kWh)', type: 'number', defaultValue: 32 }
        ],
        calculate: (vals) => {
          const k = Number(vals.kwh);
          const r = Number(vals.rate);
          const cost = k * r;
          return {
            result: `PKR ${cost.toLocaleString()}`,
            secondaryResult: `For ${k} kWh @ PKR ${r} per kWh | Estimate only. Consult licensed electrician.`,
            formula: 'Cost = kWh Consumed × Tariff Rate per kWh'
          };
        }
      },
      {
        id: 'elec-rectifier-v',
        name: 'AC to DC Rectifier Peak Voltage Calculator',
        categoryId: 'electrical',
        description: 'Calculate peak DC voltage from an AC transformer secondary voltage.',
        inputs: [
          { id: 'acV', label: 'AC RMS Voltage (Volts)', type: 'number', defaultValue: 12 }
        ],
        calculate: (vals) => {
          const ac = Number(vals.acV);
          const peakV = ac * Math.sqrt(2);
          const dcApprox = peakV - 1.4; // diode bridge drop approx 1.4V
          return {
            result: `Peak DC: ${peakV.toFixed(2)}V (Approx Regulated: ${dcApprox.toFixed(2)}V)`,
            secondaryResult: `Peak Voltage = AC RMS × √2 | Estimate only. Consult electrician.`,
            formula: 'V_peak = V_rms × 1.414'
          };
        }
      },
      {
        id: 'elec-transformer-turns',
        name: 'Transformer Turns Ratio Calculator',
        categoryId: 'electrical',
        description: 'Calculate secondary voltage or turns ratio for a step-up/step-down transformer.',
        inputs: [
          { id: 'np', label: 'Primary Turns (Np)', type: 'number', defaultValue: 500 },
          { id: 'ns', label: 'Secondary Turns (Ns)', type: 'number', defaultValue: 50 },
          { id: 'vp', label: 'Primary Voltage (Vp)', type: 'number', defaultValue: 230 }
        ],
        calculate: (vals) => {
          const np = Number(vals.np);
          const ns = Number(vals.ns);
          const vp = Number(vals.vp);
          if (np <= 0) return { result: 'Primary turns must be > 0' };
          const ratio = np / ns;
          const vs = vp * (ns / np);
          return {
            result: `Secondary Voltage = ${vs.toFixed(2)} Volts`,
            secondaryResult: `Turns Ratio (Np:Ns) = ${ratio.toFixed(1)} : 1 | Estimate only.`,
            formula: 'Vs = Vp × (Ns / Np)'
          };
        }
      },
      {
        id: 'elec-capacitive-reactance',
        name: 'Capacitive Reactance Calculator',
        categoryId: 'electrical',
        description: 'Calculate capacitive reactance (Xc) in ohms for a given frequency and capacitance.',
        inputs: [
          { id: 'capUf', label: 'Capacitance (Microfarads µF)', type: 'number', defaultValue: 10 },
          { id: 'freqHz', label: 'Frequency (Hertz Hz)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const c = Number(vals.capUf) * 1e-6;
          const f = Number(vals.freqHz);
          if (c <= 0 || f <= 0) return { result: 'Capacitance and frequency must be > 0' };
          const xc = 1 / (2 * Math.PI * f * c);
          return {
            result: `${xc.toFixed(2)} Ω (Ohms)`,
            secondaryResult: `Capacitive Reactance Xc | Estimate only. Consult electrician.`,
            formula: 'Xc = 1 / (2 × π × f × C)'
          };
        }
      },
      {
        id: 'elec-inductive-reactance',
        name: 'Inductive Reactance Calculator',
        categoryId: 'electrical',
        description: 'Calculate inductive reactance (Xl) in ohms for a given frequency and inductance.',
        inputs: [
          { id: 'indMh', label: 'Inductance (Millihenries mH)', type: 'number', defaultValue: 50 },
          { id: 'freqHz', label: 'Frequency (Hertz Hz)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const l = Number(vals.indMh) * 1e-3;
          const f = Number(vals.freqHz);
          const xl = 2 * Math.PI * f * l;
          return {
            result: `${xl.toFixed(2)} Ω (Ohms)`,
            secondaryResult: `Inductive Reactance Xl | Estimate only. Consult electrician.`,
            formula: 'Xl = 2 × π × f × L'
          };
        }
      },
      {
        id: 'elec-rc-time-constant',
        name: 'RC Time Constant Calculator',
        description: 'Calculate time constant (tau) for an RC charging/discharging circuit.',
        categoryId: 'electrical',
        inputs: [
          { id: 'resistance', label: 'Resistance (Ohms Ω)', type: 'number', defaultValue: 10000 },
          { id: 'capacitance', label: 'Capacitance (Microfarads µF)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const r = Number(vals.resistance);
          const c = Number(vals.capacitance) * 1e-6;
          const tau = r * c; // in seconds
          return {
            result: `${tau.toFixed(3)} Seconds (τ)`,
            secondaryResult: `Time Constant RC | Estimate only. Consult electrician.`,
            formula: 'Time Constant (τ) = R × C'
          };
        }
      },
      {
        id: 'elec-voltage-drop',
        name: 'Wire Voltage Drop Calculator',
        description: 'Estimate voltage drop across electrical cable runs.',
        categoryId: 'electrical',
        inputs: [
          { id: 'current', label: 'Current (Amps)', type: 'number', defaultValue: 15 },
          { id: 'length', label: 'One-way Cable Length (meters)', type: 'number', defaultValue: 30 },
          { id: 'gauge', label: 'Wire Size (AWG)', type: 'select', defaultValue: '12', options: [
            { label: '10 AWG (Copper)', value: '10' },
            { label: '12 AWG (Copper)', value: '12' },
            { label: '14 AWG (Copper)', value: '14' }
          ]}
        ],
        calculate: (vals) => {
          const i = Number(vals.current);
          const l = Number(vals.length);
          let resistancePerKm = 5.2; // approx for 12 AWG
          if (vals.gauge === '10') resistancePerKm = 3.3;
          else if (vals.gauge === '14') resistancePerKm = 8.3;

          const dropV = (2 * l * i * resistancePerKm) / 1000;
          return {
            result: `${dropV.toFixed(2)} Volts Drop`,
            secondaryResult: `Percentage Drop: ${(dropV / 230 * 100).toFixed(1)}% | Consult electrician.`,
            formula: 'Voltage Drop = (2 × Length × Current × Wire Resistance) / 1000'
          };
        }
      },
      {
        id: 'elec-motor-hp',
        name: 'Motor Horsepower to Watts Converter',
        categoryId: 'electrical',
        description: 'Convert electric motor horsepower (HP) into mechanical and electrical Watts.',
        inputs: [
          { id: 'hp', label: 'Horsepower (HP)', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const hp = Number(vals.hp);
          const watts = hp * 745.7;
          return {
            result: `${Math.round(watts)} Watts (${(watts / 1000).toFixed(2)} kW)`,
            secondaryResult: `1 HP = 745.7 Watts | Estimate only.`,
            formula: 'Watts = Horsepower (HP) × 745.7'
          };
        }
      },
      {
        id: 'elec-three-phase',
        name: 'Three-Phase Power Calculator',
        categoryId: 'electrical',
        description: 'Calculate real power in a 3-phase electrical system.',
        inputs: [
          { id: 'voltage', label: 'Line-to-Line Voltage (Volts)', type: 'number', defaultValue: 400 },
          { id: 'current', label: 'Line Current (Amps)', type: 'number', defaultValue: 25 },
          { id: 'pf', label: 'Power Factor (0.1 - 1.0)', type: 'number', defaultValue: 0.85 }
        ],
        calculate: (vals) => {
          const v = Number(vals.voltage);
          const i = Number(vals.current);
          const pf = Number(vals.pf);
          const pKw = (Math.sqrt(3) * v * i * pf) / 1000;
          return {
            result: `${pKw.toFixed(2)} kW (${(pKw * 1.341).toFixed(2)} HP)`,
            secondaryResult: `3-Phase Real Power | Estimate only. Consult licensed electrician.`,
            formula: 'Power (kW) = [√3 × Voltage × Current × Power Factor] / 1000'
          };
        }
      },
      {
        id: 'elec-power-factor',
        name: 'Power Factor Correction Calculator',
        categoryId: 'electrical',
        description: 'Calculate required capacitor bank size (kVAR) to improve power factor.',
        inputs: [
          { id: 'kw', label: 'Real Power (kW)', type: 'number', defaultValue: 50 },
          { id: 'pf1', label: 'Initial Power Factor', type: 'number', defaultValue: 0.75 },
          { id: 'pf2', label: 'Target Power Factor', type: 'number', defaultValue: 0.95 }
        ],
        calculate: (vals) => {
          const kw = Number(vals.kw);
          const pf1 = Number(vals.pf1);
          const pf2 = Number(vals.pf2);
          if (pf1 <= 0 || pf2 <= pf1) return { result: 'Invalid power factor inputs' };
          const theta1 = Math.acos(pf1);
          const theta2 = Math.acos(pf2);
          const kvar = kw * (Math.tan(theta1) - Math.tan(theta2));
          return {
            result: `${kvar.toFixed(1)} kVAR Capacitor Needed`,
            secondaryResult: `Power factor correction | Estimate only. Consult electrician.`,
            formula: 'kVAR = kW × [tan(arccos(PF1)) - tan(arccos(PF2))]'
          };
        }
      },
      {
        id: 'elec-frequency-wavelength',
        name: 'Frequency and Wavelength Calculator',
        categoryId: 'electrical',
        description: 'Calculate electromagnetic wave wavelength or frequency.',
        inputs: [
          { id: 'freqMhz', label: 'Frequency (Megahertz MHz)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const fHz = Number(vals.freqMhz) * 1e6;
          if (fHz <= 0) return { result: 'Frequency must be > 0' };
          const speedOfLight = 3e8; // m/s
          const wavelengthM = speedOfLight / fHz;
          return {
            result: `${wavelengthM.toFixed(2)} Meters`,
            secondaryResult: `Wavelength at ${vals.freqMhz} MHz | Estimate only.`,
            formula: 'Wavelength (m) = Speed of Light (3×10⁸) / Frequency (Hz)'
          };
        }
      },
      {
        id: 'elec-charge-current',
        name: 'Electric Charge and Current Calculator',
        categoryId: 'electrical',
        description: 'Calculate electric charge (Coulombs) from current and time.',
        inputs: [
          { id: 'current', label: 'Current (Amps)', type: 'number', defaultValue: 5 },
          { id: 'seconds', label: 'Time Duration (Seconds)', type: 'number', defaultValue: 60 }
        ],
        calculate: (vals) => {
          const i = Number(vals.current);
          const t = Number(vals.seconds);
          const q = i * t;
          return {
            result: `${q.toLocaleString()} Coulombs (C)`,
            secondaryResult: `Electric Charge Calculation | Estimate only.`,
            formula: 'Charge (Q) = Current (I) × Time (t in seconds)'
          };
        }
      },
      {
        id: 'elec-battery-charge-time',
        name: 'Battery Charging Time Calculator',
        categoryId: 'electrical',
        description: 'Estimate battery charging duration based on capacity and charger output current.',
        inputs: [
          { id: 'ah', label: 'Battery Capacity (Ah)', type: 'number', defaultValue: 150 },
          { id: 'chargerAmps', label: 'Charger Output Current (Amps)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const ah = Number(vals.ah);
          const amps = Number(vals.chargerAmps);
          if (amps <= 0) return { result: 'Charger current must be > 0' };
          // 1.2 safety charging factor
          const hours = (ah / amps) * 1.2;
          return {
            result: `${hours.toFixed(1)} Hours Charging Time`,
            secondaryResult: `Includes 20% charging efficiency loss factor | Estimate only.`,
            formula: 'Charging Time = (Battery Ah / Charger Amps) × 1.2'
          };
        }
      },
      {
        id: 'elec-inverter-load',
        name: 'Inverter Load Capacity Calculator',
        categoryId: 'electrical',
        description: 'Calculate maximum safe appliance load (Watts) for an inverter VA rating.',
        inputs: [
          { id: 'va', label: 'Inverter Rating (VA)', type: 'number', defaultValue: 1200 },
          { id: 'pf', label: 'Power Factor', type: 'number', defaultValue: 0.8 }
        ],
        calculate: (vals) => {
          const va = Number(vals.va);
          const pf = Number(vals.pf);
          const maxWatts = va * pf;
          return {
            result: `${Math.round(maxWatts)} Watts Safe Load`,
            secondaryResult: `For ${va} VA Inverter @ ${pf} Power Factor | Estimate only.`,
            formula: 'Safe Watts = Inverter VA Rating × Power Factor'
          };
        }
      },
      {
        id: 'elec-water-heater',
        name: 'Electric Water Heater Energy Consumption',
        categoryId: 'electrical',
        description: 'Calculate electricity cost to heat water using an electric geyser/heater in Pakistan (PKR).',
        inputs: [
          { id: 'watts', label: 'Heater Power (Watts)', type: 'number', defaultValue: 2000 },
          { id: 'hours', label: 'Hours Active per Day', type: 'number', defaultValue: 3 },
          { id: 'rate', label: 'Tariff Rate (PKR / kWh)', type: 'number', defaultValue: 35 }
        ],
        calculate: (vals) => {
          const w = Number(vals.watts);
          const h = Number(vals.hours);
          const r = Number(vals.rate);
          const kwhDaily = (w * h) / 1000;
          const monthlyCost = kwhDaily * r * 30;
          return {
            result: `PKR ${Math.round(monthlyCost).toLocaleString()} / month`,
            secondaryResult: `Daily Energy: ${kwhDaily.toFixed(1)} kWh | Estimate only. Consult electrician.`,
            formula: 'Monthly Cost = [(Watts × Hours/Day) / 1000] × Rate × 30 days'
          };
        }
      },
      {
        id: 'elec-ac-power',
        name: 'Air Conditioner (AC) Power Consumption Calculator',
        categoryId: 'electrical',
        description: 'Calculate monthly electricity cost for running an Inverter or Non-Inverter AC in Pakistan (PKR).',
        inputs: [
          { id: 'tons', label: 'AC Capacity (Tons)', type: 'number', defaultValue: 1.5 },
          { id: 'hours', label: 'Usage (Hours per Day)', type: 'number', defaultValue: 8 },
          { id: 'rate', label: 'Tariff Rate (PKR / kWh)', type: 'number', defaultValue: 35 }
        ],
        calculate: (vals) => {
          const tons = Number(vals.tons);
          const hrs = Number(vals.hours);
          const rate = Number(vals.rate);
          // 1 Ton approx 1200 Watts for modern inverter AC
          const watts = tons * 1200;
          const kwhDaily = (watts * hrs) / 1000;
          const monthlyCost = kwhDaily * rate * 30;
          return {
            result: `PKR ${Math.round(monthlyCost).toLocaleString()} / month`,
            secondaryResult: `Est. Power: ${watts}W | Daily Consumption: ${kwhDaily.toFixed(1)} kWh | Estimate only.`,
            formula: 'Monthly Cost = [(Tons × 1200W × Hours/Day) / 1000] × Rate × 30'
          };
        }
      },
      {
        id: 'elec-voltage-divider',
        name: 'Voltage Divider Circuit Output Calculator',
        categoryId: 'electrical',
        description: 'Calculate output voltage from a resistor voltage divider circuit.',
        inputs: [
          { id: 'vin', label: 'Input Voltage (Vin)', type: 'number', defaultValue: 12 },
          { id: 'r1', label: 'Resistor 1 (R1 in Ω)', type: 'number', defaultValue: 1000 },
          { id: 'r2', label: 'Resistor 2 (R2 in Ω)', type: 'number', defaultValue: 1000 }
        ],
        calculate: (vals) => {
          const vin = Number(vals.vin);
          const r1 = Number(vals.r1);
          const r2 = Number(vals.r2);
          if (r1 + r2 === 0) return { result: 'Sum of resistors cannot be zero' };
          const vout = vin * (r2 / (r1 + r2));
          return {
            result: `V_out = ${vout.toFixed(2)} Volts`,
            secondaryResult: `Voltage Divider Formula | Estimate only.`,
            formula: 'V_out = V_in × [R2 / (R1 + R2)]'
          };
        }
      },
      {
        id: 'elec-resistor-color',
        name: 'Resistor Value Estimator',
        categoryId: 'electrical',
        description: 'Estimate 4-band resistor resistance value from color bands.',
        inputs: [
          { id: 'band1', label: 'First Digit', type: 'select', defaultValue: 'brown', options: [
            { label: 'Brown (1)', value: 'brown' }, { label: 'Red (2)', value: 'red' },
            { label: 'Orange (3)', value: 'orange' }, { label: 'Yellow (4)', value: 'yellow' },
            { label: 'Green (5)', value: 'green' }
          ]},
          { id: 'band2', label: 'Second Digit', type: 'select', defaultValue: 'black', options: [
            { label: 'Black (0)', value: 'black' }, { label: 'Brown (1)', value: 'brown' },
            { label: 'Red (2)', value: 'red' }, { label: 'Green (5)', value: 'green' }
          ]},
          { id: 'multiplier', label: 'Multiplier', type: 'select', defaultValue: 'red', options: [
            { label: 'Black (×1)', value: 'black' }, { label: 'Brown (×10)', value: 'brown' },
            { label: 'Red (×100)', value: 'red' }, { label: 'Orange (×1k)', value: 'orange' }
          ]}
        ],
        calculate: (vals) => {
          const d1 = vals.band1 === 'brown' ? 1 : vals.band1 === 'red' ? 2 : vals.band1 === 'orange' ? 3 : vals.band1 === 'yellow' ? 4 : 5;
          const d2 = vals.band2 === 'black' ? 0 : vals.band2 === 'brown' ? 1 : vals.band2 === 'red' ? 2 : 5;
          const mult = vals.multiplier === 'black' ? 1 : vals.multiplier === 'brown' ? 10 : vals.multiplier === 'red' ? 100 : 1000;
          const ohms = (d1 * 10 + d2) * mult;
          return {
            result: ohms >= 1000 ? `${(ohms / 1000).toFixed(1)} kΩ` : `${ohms} Ω`,
            secondaryResult: `Standard 4-band resistor calculation`,
            formula: 'Resistance = [(Digit1 × 10) + Digit2] × Multiplier'
          };
        }
      },
      {
        id: 'elec-led-series',
        name: 'LED Series Resistor Calculator',
        categoryId: 'electrical',
        description: 'Calculate required series current-limiting resistor for LEDs.',
        inputs: [
          { id: 'vs', label: 'Source Voltage (V)', type: 'number', defaultValue: 12 },
          { id: 'vf', label: 'LED Forward Voltage (V)', type: 'number', defaultValue: 2.2 },
          { id: 'iflow', label: 'LED Current (mA)', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          const vs = Number(vals.vs);
          const vf = Number(vals.vf);
          const amps = Number(vals.iflow) / 1000;
          if (amps <= 0) return { result: 'LED current must be > 0' };
          const r = (vs - vf) / amps;
          return {
            result: `Resistor = ${r.toFixed(1)} Ω`,
            secondaryResult: `Power Dissipation: ${((vs - vf) * amps).toFixed(2)} Watts`,
            formula: 'Resistance = (Source V - LED Forward V) / Current (Amps)'
          };
        }
      },
      {
        id: 'elec-battery-charge',
        name: 'Battery Charge Time Estimator',
        categoryId: 'electrical',
        description: 'Calculate approximate charging duration for rechargeable batteries.',
        inputs: [
          { id: 'capacity', label: 'Battery Capacity (mAh)', type: 'number', defaultValue: 3000 },
          { id: 'current', label: 'Charger Output Current (mA)', type: 'number', defaultValue: 1000 },
          { id: 'eff', label: 'Charging Efficiency (%)', type: 'number', defaultValue: 85 }
        ],
        calculate: (vals) => {
          const cap = Number(vals.capacity);
          const cur = Number(vals.current);
          const eff = Number(vals.eff) / 100;
          if (cur <= 0 || eff <= 0) return { result: 'Charger current and efficiency must be > 0' };
          const hours = (cap / cur) / eff;
          return {
            result: `~${hours.toFixed(1)} Hours Charge Time`,
            secondaryResult: `At ${cur} mA output with ${(eff*100).toFixed(0)}% efficiency`,
            formula: 'Hours = (Capacity / Current) / Efficiency'
          };
        }
      },
      {
        id: 'elec-max-power',
        name: 'Maximum Power Transfer Calculator',
        categoryId: 'electrical',
        description: 'Calculate maximum power transferred from source to load resistor.',
        inputs: [
          { id: 'vth', label: 'Thevenin Voltage (V_th)', type: 'number', defaultValue: 24 },
          { id: 'rth', label: 'Thevenin Resistance (R_th in Ω)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const v = Number(vals.vth);
          const r = Number(vals.rth);
          if (r <= 0) return { result: 'Resistance must be > 0' };
          // For max power, load R_L = R_th, P_max = V_th^2 / (4 * R_th)
          const pMax = (v * v) / (4 * r);
          return {
            result: `P_max = ${pMax.toFixed(2)} Watts`,
            secondaryResult: `Load Resistance (R_L) = ${r} Ω`,
            formula: 'P_max = V_th² / (4 × R_th)'
          };
        }
      }
    ]
  };
