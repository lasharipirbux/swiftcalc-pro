import type { Category } from "../../types.ts";

export const engineeringCategory: Category = {
    id: 'engineering',
    name: 'Engineering & Science',
    iconName: 'Cpu',
    description: 'Physics velocity, kinetic energy, potential energy, Newton force, universal gravitation, ideal gas law, fluid dynamics, thermodynamics, wave speed, torque, Doppler effect, thermal conductivity, and mechanics calculators.',
    color: 'from-blue-700 to-cyan-900',
    calculators: [
      {
        id: 'physics-velocity',
        name: 'Velocity & Acceleration',
        categoryId: 'engineering',
        description: 'Calculate final velocity and distance.',
        inputs: [{ id: 'u', label: 'Initial Velocity (m/s)', type: 'number', defaultValue: 0 }, { id: 'a', label: 'Acceleration (m/s²)', type: 'number', defaultValue: 9.8 }, { id: 't', label: 'Time (s)', type: 'number', defaultValue: 4 }],
        calculate: (vals) => {
          const u = Number(vals.u), a = Number(vals.a), t = Number(vals.t);
          return { result: `v = ${(u + a * t).toFixed(2)} m/s`, secondaryResult: `Distance = ${(u * t + 0.5 * a * t * t).toFixed(2)} m`, formula: `v = u + at` };
        }
      },
      {
        id: 'eng-kinetic-energy',
        name: 'Kinetic Energy Calculator',
        categoryId: 'engineering',
        description: 'Calculate kinetic energy of a moving object in Joules.',
        inputs: [
          { id: 'mass', label: 'Mass (kg)', type: 'number', defaultValue: 1200 },
          { id: 'velocity', label: 'Velocity (m/s)', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mass);
          const v = Number(vals.velocity);
          const ke = 0.5 * m * v * v;
          return {
            result: `${ke.toLocaleString()} Joules (J)`,
            secondaryResult: `Kinetic Energy of moving object`,
            formula: 'KE = 0.5 × Mass × Velocity²'
          };
        }
      },
      {
        id: 'eng-potential-energy',
        name: 'Gravitational Potential Energy Calculator',
        categoryId: 'engineering',
        description: 'Calculate potential energy stored by an object raised to a height.',
        inputs: [
          { id: 'mass', label: 'Mass (kg)', type: 'number', defaultValue: 50 },
          { id: 'height', label: 'Height (meters)', type: 'number', defaultValue: 20 },
          { id: 'gravity', label: 'Gravity (m/s²)', type: 'number', defaultValue: 9.8 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mass);
          const h = Number(vals.height);
          const g = Number(vals.gravity);
          const pe = m * g * h;
          return {
            result: `${pe.toLocaleString()} Joules (J)`,
            secondaryResult: `Gravitational Potential Energy`,
            formula: 'PE = Mass × Gravity × Height'
          };
        }
      },
      {
        id: 'eng-newton-force',
        name: "Newton's Second Law Force Calculator",
        categoryId: 'engineering',
        description: 'Calculate force given mass and acceleration (F = m × a).',
        inputs: [
          { id: 'mass', label: 'Mass (kg)', type: 'number', defaultValue: 100 },
          { id: 'acceleration', label: 'Acceleration (m/s²)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mass);
          const a = Number(vals.acceleration);
          const f = m * a;
          return {
            result: `${f.toFixed(2)} Newtons (N)`,
            secondaryResult: `Force Calculation`,
            formula: 'Force (F) = Mass (m) × Acceleration (a)'
          };
        }
      },
      {
        id: 'eng-gravity',
        name: 'Universal Gravitation Calculator',
        categoryId: 'engineering',
        description: 'Calculate gravitational force between two masses.',
        inputs: [
          { id: 'm1', label: 'Mass 1 (kg)', type: 'number', defaultValue: 5.97e24 },
          { id: 'm2', label: 'Mass 2 (kg)', type: 'number', defaultValue: 7348e20 },
          { id: 'r', label: 'Distance Between Centers (meters)', type: 'number', defaultValue: 384400000 }
        ],
        calculate: (vals) => {
          const m1 = Number(vals.m1);
          const m2 = Number(vals.m2);
          const r = Number(vals.r);
          const G = 6.6743e-11;
          if (r <= 0) return { result: 'Distance must be > 0' };
          const fg = (G * m1 * m2) / (r * r);
          return {
            result: `${fg.toExponential(3)} Newtons (N)`,
            secondaryResult: `Gravitational attraction force`,
            formula: 'F = G × (m₁ × m₂) / r² (where G = 6.6743 × 10⁻¹¹)'
          };
        }
      },
      {
        id: 'eng-ideal-gas',
        name: 'Ideal Gas Law Calculator (PV = nRT)',
        categoryId: 'engineering',
        description: 'Calculate pressure, volume, temperature, or moles of an ideal gas.',
        inputs: [
          { id: 'moles', label: 'Moles (n)', type: 'number', defaultValue: 2 },
          { id: 'temp', label: 'Temperature (Kelvin K)', type: 'number', defaultValue: 300 },
          { id: 'volume', label: 'Volume (Liters L)', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const n = Number(vals.moles);
          const T = Number(vals.temp);
          const V = Number(vals.volume);
          const R = 0.082057;
          if (V <= 0) return { result: 'Volume must be > 0' };
          const P = (n * R * T) / V;
          return {
            result: `${P.toFixed(3)} Atmospheres (atm)`,
            secondaryResult: `Calculated Pressure using Ideal Gas Law`,
            formula: 'Pressure (P) = (n × R × T) / V (R = 0.082057)'
          };
        }
      },
      {
        id: 'eng-reynolds',
        name: 'Reynolds Number Fluid Dynamics Calculator',
        categoryId: 'engineering',
        description: 'Determine whether fluid flow is laminar or turbulent.',
        inputs: [
          { id: 'density', label: 'Fluid Density (kg/m³)', type: 'number', defaultValue: 1000 },
          { id: 'velocity', label: 'Velocity (m/s)', type: 'number', defaultValue: 2 },
          { id: 'diameter', label: 'Pipe Diameter (m)', type: 'number', defaultValue: 0.1 },
          { id: 'viscosity', label: 'Dynamic Viscosity (Pa·s)', type: 'number', defaultValue: 0.001 }
        ],
        calculate: (vals) => {
          const rho = Number(vals.density);
          const v = Number(vals.velocity);
          const d = Number(vals.diameter);
          const mu = Number(vals.viscosity);
          if (mu <= 0) return { result: 'Viscosity must be > 0' };
          const re = (rho * v * d) / mu;
          let flowType = re < 2300 ? 'Laminar Flow' : re < 4000 ? 'Transitional Flow' : 'Turbulent Flow';
          return {
            result: `Re = ${re.toFixed(0)} (${flowType})`,
            secondaryResult: `Reynolds Number calculation`,
            formula: 'Re = (Density × Velocity × Diameter) / Dynamic Viscosity'
          };
        }
      },
      {
        id: 'eng-thermal-expansion',
        name: 'Thermal Expansion Calculator',
        categoryId: 'engineering',
        description: 'Calculate linear thermal expansion of materials when heated.',
        inputs: [
          { id: 'length', label: 'Original Length (meters)', type: 'number', defaultValue: 10 },
          { id: 'alpha', label: 'Expansion Coefficient (×10⁻⁶ / °C)', type: 'number', defaultValue: 12 },
          { id: 'deltaT', label: 'Temperature Change (°C)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const l0 = Number(vals.length);
          const alpha = Number(vals.alpha) * 1e-6;
          const dt = Number(vals.deltaT);
          const deltaL = l0 * alpha * dt;
          return {
            result: `ΔL = ${deltaL.toFixed(4)} meters (${(deltaL * 1000).toFixed(2)} mm)`,
            secondaryResult: `Length expansion due to temperature change`,
            formula: 'ΔL = L₀ × α × ΔT'
          };
        }
      },
      {
        id: 'eng-projectile-range',
        name: 'Projectile Motion Range Calculator',
        categoryId: 'engineering',
        description: 'Calculate maximum horizontal range of a projectile launched at an angle.',
        inputs: [
          { id: 'velocity', label: 'Initial Velocity (m/s)', type: 'number', defaultValue: 30 },
          { id: 'angle', label: 'Launch Angle (Degrees)', type: 'number', defaultValue: 45 },
          { id: 'gravity', label: 'Gravity (m/s²)', type: 'number', defaultValue: 9.8 }
        ],
        calculate: (vals) => {
          const v = Number(vals.velocity);
          const rad = (Number(vals.angle) * Math.PI) / 180;
          const g = Number(vals.gravity);
          const range = (v * v * Math.sin(2 * rad)) / g;
          return {
            result: `${range.toFixed(2)} Meters`,
            secondaryResult: `Maximum horizontal projectile range`,
            formula: 'Range = (v² × sin(2θ)) / g'
          };
        }
      },
      {
        id: 'eng-centripetal-force',
        name: 'Centripetal Force Calculator',
        categoryId: 'engineering',
        description: 'Calculate centripetal force required for circular motion.',
        inputs: [
          { id: 'mass', label: 'Mass (kg)', type: 'number', defaultValue: 1000 },
          { id: 'velocity', label: 'Velocity (m/s)', type: 'number', defaultValue: 20 },
          { id: 'radius', label: 'Radius of Turn (meters)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mass);
          const v = Number(vals.velocity);
          const r = Number(vals.radius);
          if (r <= 0) return { result: 'Radius must be > 0' };
          const fc = (m * v * v) / r;
          return {
            result: `${fc.toLocaleString()} Newtons (N)`,
            secondaryResult: `Centripetal force in circular motion`,
            formula: 'Fc = (Mass × Velocity²) / Radius'
          };
        }
      },
      {
        id: 'eng-momentum',
        name: 'Momentum Calculator',
        categoryId: 'engineering',
        description: 'Calculate linear momentum of an object (p = m × v).',
        inputs: [
          { id: 'mass', label: 'Mass (kg)', type: 'number', defaultValue: 1500 },
          { id: 'velocity', label: 'Velocity (m/s)', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mass);
          const v = Number(vals.velocity);
          const p = m * v;
          return {
            result: `${p.toLocaleString()} kg·m/s`,
            secondaryResult: `Linear Momentum calculation`,
            formula: 'Momentum (p) = Mass (m) × Velocity (v)'
          };
        }
      },
      {
        id: 'eng-torque',
        name: 'Torque / Moment of Force Calculator',
        categoryId: 'engineering',
        description: 'Calculate torque given force and lever arm radius.',
        inputs: [
          { id: 'force', label: 'Force (Newtons N)', type: 'number', defaultValue: 250 },
          { id: 'radius', label: 'Lever Arm Radius (meters)', type: 'number', defaultValue: 0.6 }
        ],
        calculate: (vals) => {
          const f = Number(vals.force);
          const r = Number(vals.radius);
          const tau = f * r;
          return {
            result: `${tau.toFixed(2)} N·m (Newton-meters)`,
            secondaryResult: `Rotational Torque calculation`,
            formula: 'Torque (τ) = Force (F) × Radius (r)'
          };
        }
      },
      {
        id: 'eng-frequency-period',
        name: 'Frequency and Period Calculator',
        categoryId: 'engineering',
        description: 'Convert between wave frequency (Hz) and wave period (seconds).',
        inputs: [
          { id: 'freq', label: 'Frequency (Hertz Hz)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const f = Number(vals.freq);
          if (f <= 0) return { result: 'Frequency must be > 0' };
          const period = 1 / f;
          return {
            result: `Period (T) = ${period.toFixed(4)} seconds (${(period * 1000).toFixed(1)} ms)`,
            secondaryResult: `Frequency: ${f} Hz`,
            formula: 'Period (T) = 1 / Frequency (f)'
          };
        }
      },
      {
        id: 'eng-wave-speed',
        name: 'Wave Speed Calculator',
        categoryId: 'engineering',
        description: 'Calculate wave velocity from frequency and wavelength.',
        inputs: [
          { id: 'freq', label: 'Frequency (Hz)', type: 'number', defaultValue: 440 },
          { id: 'wavelength', label: 'Wavelength (meters)', type: 'number', defaultValue: 0.78 }
        ],
        calculate: (vals) => {
          const f = Number(vals.freq);
          const lam = Number(vals.wavelength);
          const v = f * lam;
          return {
            result: `${v.toFixed(2)} m/s`,
            secondaryResult: `Wave Propagation Speed`,
            formula: 'Wave Speed (v) = Frequency (f) × Wavelength (λ)'
          };
        }
      },
      {
        id: 'eng-decibel',
        name: 'Decibel Sound Intensity Calculator',
        categoryId: 'engineering',
        description: 'Calculate sound intensity level in decibels (dB).',
        inputs: [
          { id: 'intensity', label: 'Sound Intensity (W/m²)', type: 'number', defaultValue: 1e-4 }
        ],
        calculate: (vals) => {
          const i = Number(vals.intensity);
          const i0 = 1e-12;
          if (i <= 0) return { result: 'Intensity must be > 0' };
          const db = 10 * Math.log10(i / i0);
          return {
            result: `${db.toFixed(1)} dB`,
            secondaryResult: `Sound pressure level relative to 10⁻¹² W/m²`,
            formula: 'Sound Level (dB) = 10 × log₁₀(I / I₀)'
          };
        }
      },
      {
        id: 'eng-coulomb',
        name: "Coulomb's Law Electric Force Calculator",
        categoryId: 'engineering',
        description: 'Calculate electrostatic force between two point charges.',
        inputs: [
          { id: 'q1', label: 'Charge 1 (Coulombs C)', type: 'number', defaultValue: 2e-6 },
          { id: 'q2', label: 'Charge 2 (Coulombs C)', type: 'number', defaultValue: 3e-6 },
          { id: 'r', label: 'Distance (meters)', type: 'number', defaultValue: 0.05 }
        ],
        calculate: (vals) => {
          const q1 = Number(vals.q1);
          const q2 = Number(vals.q2);
          const r = Number(vals.r);
          const k = 8.98755e9;
          if (r <= 0) return { result: 'Distance must be > 0' };
          const fe = (k * Math.abs(q1 * q2)) / (r * r);
          return {
            result: `${fe.toFixed(2)} Newtons (N)`,
            secondaryResult: `Electrostatic force between charges`,
            formula: 'Fe = k × (|q₁ × q₂|) / r² (where k = 8.98755 × 10⁹)'
          };
        }
      },
      {
        id: 'eng-radioactive-decay',
        name: 'Radioactive Half-Life Decay Calculator',
        categoryId: 'engineering',
        description: 'Calculate remaining radioactive substance mass after elapsed half-lives.',
        inputs: [
          { id: 'initialMass', label: 'Initial Mass (grams)', type: 'number', defaultValue: 100 },
          { id: 'halfLives', label: 'Elapsed Half-Lives', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const m0 = Number(vals.initialMass);
          const n = Number(vals.halfLives);
          const remaining = m0 * Math.pow(0.5, n);
          return {
            result: `${remaining.toFixed(3)} grams remaining`,
            secondaryResult: `After ${n} half-lives elapsed`,
            formula: 'Remaining Mass = Initial Mass × (0.5)^n'
          };
        }
      },
      {
        id: 'eng-density',
        name: 'Density, Mass, and Volume Calculator',
        categoryId: 'engineering',
        description: 'Calculate material density given mass and volume.',
        inputs: [
          { id: 'mass', label: 'Mass (kg)', type: 'number', defaultValue: 500 },
          { id: 'volume', label: 'Volume (m³)', type: 'number', defaultValue: 0.05 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mass);
          const v = Number(vals.volume);
          if (v <= 0) return { result: 'Volume must be > 0' };
          const rho = m / v;
          return {
            result: `${rho.toLocaleString()} kg/m³`,
            secondaryResult: `Material Density`,
            formula: 'Density (ρ) = Mass (m) / Volume (V)'
          };
        }
      },
      {
        id: 'eng-specific-heat',
        name: 'Specific Heat Capacity Heat Energy Calculator',
        categoryId: 'engineering',
        description: 'Calculate heat energy absorbed or released during temperature change.',
        inputs: [
          { id: 'mass', label: 'Mass (kg)', type: 'number', defaultValue: 2 },
          { id: 'c', label: 'Specific Heat Capacity (J/kg·°C)', type: 'number', defaultValue: 4184 },
          { id: 'deltaT', label: 'Temperature Change (°C)', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mass);
          const c = Number(vals.c);
          const dt = Number(vals.deltaT);
          const q = m * c * dt;
          return {
            result: `${q.toLocaleString()} Joules (J)`,
            secondaryResult: `Heat Energy (Q)`,
            formula: 'Heat Energy (Q) = Mass × Specific Heat (c) × ΔT'
          };
        }
      },
      {
        id: 'eng-pendulum',
        name: 'Simple Pendulum Period Calculator',
        categoryId: 'engineering',
        description: 'Calculate swing period of a simple pendulum.',
        inputs: [
          { id: 'length', label: 'Pendulum Length (meters)', type: 'number', defaultValue: 1.0 },
          { id: 'gravity', label: 'Gravity (m/s²)', type: 'number', defaultValue: 9.8 }
        ],
        calculate: (vals) => {
          const l = Number(vals.length);
          const g = Number(vals.gravity);
          if (l <= 0 || g <= 0) return { result: 'Length and gravity must be > 0' };
          const T = 2 * Math.PI * Math.sqrt(l / g);
          return {
            result: `${T.toFixed(3)} Seconds per oscillation`,
            secondaryResult: `Simple pendulum period`,
            formula: 'Period (T) = 2π × √(Length / Gravity)'
          };
        }
      },
      {
        id: 'eng-hookes-law',
        name: "Hooke's Law Spring Force Calculator",
        categoryId: 'engineering',
        description: 'Calculate spring restoring force or stiffness.',
        inputs: [
          { id: 'k', label: 'Spring Constant / Stiffness (N/m)', type: 'number', defaultValue: 250 },
          { id: 'x', label: 'Displacement / Stretch (meters)', type: 'number', defaultValue: 0.08 }
        ],
        calculate: (vals) => {
          const k = Number(vals.k);
          const x = Number(vals.x);
          const f = k * x;
          return {
            result: `${f.toFixed(2)} Newtons (N)`,
            secondaryResult: `Spring restoring force`,
            formula: 'Force (F) = Spring Constant (k) × Displacement (x)'
          };
        }
      },
      {
        id: 'eng-stress-strain',
        name: 'Stress and Strain Mechanics Calculator',
        categoryId: 'engineering',
        description: 'Calculate mechanical stress (Pascal) and strain for a material under load.',
        inputs: [
          { id: 'force', label: 'Applied Force (Newtons N)', type: 'number', defaultValue: 50000 },
          { id: 'area', label: 'Cross-Sectional Area (m²)', type: 'number', defaultValue: 0.002 }
        ],
        calculate: (vals) => {
          const f = Number(vals.force);
          const a = Number(vals.area);
          if (a <= 0) return { result: 'Area must be > 0' };
          const stressPa = f / a;
          const stressMpa = stressPa / 1e6;
          return {
            result: `${stressMpa.toFixed(2)} MPa (Megapascals)`,
            secondaryResult: `Stress = ${stressPa.toLocaleString()} Pascals (Pa)`,
            formula: 'Stress (σ) = Force (F) / Area (A)'
          };
        }
      },
      {
        id: 'eng-refractive-index',
        name: "Refractive Index Snell's Law Calculator",
        categoryId: 'engineering',
        description: 'Calculate angle of refraction using Snell’s law of optics.',
        inputs: [
          { id: 'n1', label: 'Refractive Index 1 (n₁)', type: 'number', defaultValue: 1.0 },
          { id: 'n2', label: 'Refractive Index 2 (n₂)', type: 'number', defaultValue: 1.5 },
          { id: 'theta1', label: 'Angle of Incidence (Degrees)', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const n1 = Number(vals.n1);
          const n2 = Number(vals.n2);
          const rad1 = (Number(vals.theta1) * Math.PI) / 180;
          const sinTheta2 = (n1 * Math.sin(rad1)) / n2;
          if (sinTheta2 > 1 || sinTheta2 < -1) return { result: 'Total Internal Reflection (No refraction)' };
          const rad2 = Math.asin(sinTheta2);
          const theta2 = (rad2 * 180) / Math.PI;
          return {
            result: `Angle of Refraction = ${theta2.toFixed(2)}°`,
            secondaryResult: "Snell's Law optics calculation",
            formula: 'n₁ × sin(θ₁) = n₂ × sin(θ₂)'
          };
        }
      },
      // 2 Additional Engineering Calculators to reach exactly 25
      {
        id: 'eng-doppler-effect',
        name: 'Doppler Effect Frequency Shift Calculator',
        categoryId: 'engineering',
        description: 'Calculate observed frequency change when source or observer is in motion.',
        inputs: [
          { id: 'f0', label: 'Source Frequency (Hz)', type: 'number', defaultValue: 1000 },
          { id: 'v', label: 'Speed of Sound (m/s)', type: 'number', defaultValue: 343 },
          { id: 'vs', label: 'Source Speed (m/s)', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          const f0 = Number(vals.f0);
          const v = Number(vals.v);
          const vs = Number(vals.vs);
          if (v - vs <= 0) return { result: 'Source speed cannot exceed speed of sound' };
          const f = f0 * (v / (v - vs));
          return {
            result: `${f.toFixed(1)} Hz Observed Frequency`,
            secondaryResult: `Doppler frequency shift calculation`,
            formula: 'f = f₀ × [v / (v - v_s)]'
          };
        }
      },
      {
        id: 'eng-thermal-conductivity',
        name: 'Thermal Conductivity Heat Transfer Calculator',
        categoryId: 'engineering',
        description: 'Calculate rate of heat transfer through a material wall (Fourier’s Law).',
        inputs: [
          { id: 'k', label: 'Thermal Conductivity (W/m·K)', type: 'number', defaultValue: 0.8 },
          { id: 'area', label: 'Wall Area (m²)', type: 'number', defaultValue: 20 },
          { id: 'dT', label: 'Temperature Difference (°C)', type: 'number', defaultValue: 30 },
          { id: 'thickness', label: 'Wall Thickness (meters)', type: 'number', defaultValue: 0.2 }
        ],
        calculate: (vals) => {
          const k = Number(vals.k);
          const a = Number(vals.area);
          const dt = Number(vals.dT);
          const x = Number(vals.thickness);
          if (x <= 0) return { result: 'Thickness must be > 0' };
          const q = (k * a * dt) / x;
          return {
            result: `${q.toFixed(2)} Watts (Heat Transfer Rate)`,
            secondaryResult: `Fourier's Law Heat Conduction`,
            formula: 'Q = [k × A × ΔT] / Thickness (x)'
          };
        }
      },
      {
        id: 'eng-reynolds-kinematic',
        name: "Reynolds Number Fluid Flow Calculator",
        categoryId: 'engineering',
        description: 'Calculate Reynolds number to determine laminar or turbulent pipe fluid flow.',
        inputs: [
          { id: 'v', label: 'Flow Velocity (m/s)', type: 'number', defaultValue: 2.0 },
          { id: 'd', label: 'Pipe Diameter (m)', type: 'number', defaultValue: 0.1 },
          { id: 'nu', label: 'Kinematic Viscosity (m²/s)', type: 'number', defaultValue: 0.000001 }
        ],
        calculate: (vals) => {
          const v = Number(vals.v);
          const d = Number(vals.d);
          const nu = Number(vals.nu);
          if (nu <= 0) return { result: 'Viscosity must be > 0' };
          const re = (v * d) / nu;
          let flowType = re < 2300 ? 'Laminar Flow' : re > 4000 ? 'Turbulent Flow' : 'Transitional Flow';
          return {
            result: `Re = ${re.toLocaleString()} (${flowType})`,
            secondaryResult: `Fluid mechanics flow regime classification`,
            formula: 'Re = (Velocity × Diameter) / Kinematic Viscosity'
          };
        }
      },
      {
        id: 'eng-torque-power',
        name: 'Mechanical Torque and Power Calculator',
        categoryId: 'engineering',
        description: 'Calculate mechanical power from rotational speed and torque.',
        inputs: [
          { id: 'torque', label: 'Torque (N·m)', type: 'number', defaultValue: 150 },
          { id: 'rpm', label: 'Rotational Speed (RPM)', type: 'number', defaultValue: 3000 }
        ],
        calculate: (vals) => {
          const t = Number(vals.torque);
          const rpm = Number(vals.rpm);
          const powerWatts = (t * rpm * 2 * Math.PI) / 60;
          return {
            result: `Power = ${powerWatts.toFixed(1)} Watts (${(powerWatts / 1000).toFixed(2)} kW)`,
            secondaryResult: `Rotational mechanical power output`,
            formula: 'Power (W) = Torque · ω = Torque · (RPM · 2π / 60)'
          };
        }
      },
      {
        id: 'eng-bernoulli',
        name: 'Bernoulli Fluid Pressure Calculator',
        categoryId: 'engineering',
        description: 'Calculate fluid velocity or pressure changes using Bernoulli equation.',
        inputs: [
          { id: 'p1', label: 'Initial Pressure (Pa)', type: 'number', defaultValue: 100000 },
          { id: 'v1', label: 'Initial Velocity (m/s)', type: 'number', defaultValue: 5 },
          { id: 'v2', label: 'Final Velocity (m/s)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const p1 = Number(vals.p1);
          const v1 = Number(vals.v1);
          const v2 = Number(vals.v2);
          const rho = 1000; // Water density kg/m³
          const p2 = p1 + 0.5 * rho * (v1 * v1 - v2 * v2);
          return {
            result: `P2 = ${p2.toLocaleString()} Pa`,
            secondaryResult: `Incompressible fluid Bernoulli pressure drop`,
            formula: 'P1 + ½ρv₁² = P2 + ½ρv₂²'
          };
        }
      },
      {
        id: 'eng-linear-thermal-expansion',
        name: 'Linear Thermal Expansion Calculator',
        categoryId: 'engineering',
        description: 'Calculate change in length of a solid bar due to temperature variation.',
        inputs: [
          { id: 'l0', label: 'Initial Length (meters)', type: 'number', defaultValue: 10 },
          { id: 'alpha', label: 'Thermal Expansion Coeff (10⁻⁶ /°C)', type: 'number', defaultValue: 12 },
          { id: 'dT', label: 'Temperature Change (°C)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const l0 = Number(vals.l0);
          const alpha = Number(vals.alpha) * 1e-6;
          const dt = Number(vals.dT);
          const deltaL = l0 * alpha * dt;
          return {
            result: `ΔL = ${(deltaL * 1000).toFixed(2)} mm (${deltaL.toFixed(5)} m)`,
            secondaryResult: `Final Length: ${(l0 + deltaL).toFixed(4)} meters`,
            formula: 'ΔL = Initial Length × Expansion Coeff × Temperature Change'
          };
        }
      }
    ]
  };
