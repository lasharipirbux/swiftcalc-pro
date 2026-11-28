import { SITE_NAME } from '../config/site';

export interface EngineeringCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const engineeringSeoFullMap: Record<string, EngineeringCalculatorSeoEntry> = {
  'physics-velocity': {
    seoTitle: `Free Velocity & Acceleration Calculator – Final Speed & Distance | ${SITE_NAME}`,
    metaDescription:
      'Compute final velocity in m/s and displacement in meters under constant acceleration using our free Velocity & Acceleration Calculator.',
    howToUseSteps: [
      'Type starting speed in meters per second inside Initial Velocity (m/s).',
      'Enter constant rate of speed change into Acceleration (m/s²).',
      'Supply elapsed duration in seconds under Time (s) to read final velocity and traveled distance.',
    ],
    formulaExplanation:
      'Uniformly accelerated linear kinematics computes final speed in meters per second (m/s) by adding initial velocity (m/s) to acceleration (m/s²) multiplied by time (s), while total displacement in meters (m) integrates velocity over the interval. Formula: v = u + a × t (m/s) and Distance = u × t + 0.5 × a × t² (m).',
    practicalExample:
      'With Initial Velocity (m/s) = 0, Acceleration (m/s²) = 9.8, and Time (s) = 4, final speed reaches v = 39.20 m/s across Distance = 78.40 m.',
    faqs: [
      {
        q: 'Can Acceleration (m/s²) take a negative value for braking motion?',
        a: 'Yes—entering negative deceleration such as −4.5 m/s² lowers final velocity v and models stopping distance accurately.',
      },
      {
        q: 'Which standard units does this kinematics solver require?',
        a: 'All fields strictly expect SI units: meters per second (m/s) for speed, meters per second squared (m/s²) for acceleration, and seconds (s) for time.',
      },
      {
        q: 'Why does free fall from rest cover 78.40 m in 4 seconds instead of 19.6 m?',
        a: 'Displacement grows with Time squared (t²) because falling speed climbs steadily every second under 9.8 m/s² gravity.',
      },
    ],
  },

  'eng-kinetic-energy': {
    seoTitle: `Free Kinetic Energy Calculator – Motion Energy in Joules | ${SITE_NAME}`,
    metaDescription:
      'Find translational kinetic energy in Joules (J) from mass in kg and speed in m/s with our free Kinetic Energy Calculator.',
    howToUseSteps: [
      'Enter object mass in kilograms into the Mass (kg) box.',
      'Type moving speed in meters per second inside Velocity (m/s).',
      'Read translational kinetic energy output in Joules (J).',
    ],
    formulaExplanation:
      'Translational kinetic energy quantifies mechanical work stored in a moving body using mass in kilograms (kg) and speed squared in meters per second squared (m²/s²), yielding energy in Joules (J, equivalent to kg·m²/s²). Formula: KE = 0.5 × Mass (kg) × Velocity (m/s)².',
    practicalExample:
      'A vehicle with Mass (kg) = 1200 traveling at Velocity (m/s) = 25 carries 0.5 × 1,200 × 625 = 375,000 Joules (J) of kinetic energy.',
    faqs: [
      {
        q: 'Why does doubling Velocity (m/s) quadruple Kinetic Energy?',
        a: 'Velocity enters the equation squared (v²), so driving twice as fast multiplies braking energy fourfold.',
      },
      {
        q: 'How do I convert an output of 375,000 Joules (J) into kilojoules?',
        a: 'Divide Joules by 1,000, making 375,000 J equal to 375 kJ (or 0.375 MJ).',
      },
      {
        q: 'Must vehicle speed in km/h be converted before typing into Velocity (m/s)?',
        a: 'Yes—divide km/h by 3.6 first (for instance, 90 km/h becomes 25 m/s) so the Joule output stays exact.',
      },
    ],
  },

  'eng-potential-energy': {
    seoTitle: `Free Gravitational Potential Energy Calculator – mgh Joules | ${SITE_NAME}`,
    metaDescription:
      'Compute stored gravitational potential energy in Joules from mass, elevation, and gravity using our free Gravitational Potential Energy Calculator.',
    howToUseSteps: [
      'Enter elevated load weight in kilograms inside Mass (kg).',
      'Type vertical elevation in meters into Height (meters).',
      'Adjust Gravity (m/s²) if modeling off-Earth planets, keeping 9.8 m/s² for Earth surface work.',
    ],
    formulaExplanation:
      'Raising a mass in kilograms (kg) against a gravitational field in meters per second squared (m/s²) across vertical height in meters (m) stores mechanical potential energy measured in Joules (J). Formula: PE = Mass (kg) × Gravity (m/s²) × Height (m).',
    practicalExample:
      'Lifting Mass (kg) = 50 to Height (meters) = 20 under Gravity (m/s²) = 9.8 stores 50 × 9.8 × 20 = 9,800 Joules (J).',
    faqs: [
      {
        q: 'What value should go into Gravity (m/s²) for Lunar or Martian calculations?',
        a: 'Enter 1.62 m/s² for the Moon or 3.72 m/s² for Mars instead of Earth’s 9.8 m/s² standard.',
      },
      {
        q: 'Does ramp slope angle change Gravitational Potential Energy?',
        a: 'No—only vertical elevation change entered in Height (meters) determines PE, regardless of the path taken uphill.',
      },
      {
        q: 'How does 9,800 Joules relate to hydroelectric water storage?',
        a: 'Every 50 kg of water falling 20 meters releases 9,800 J of potential energy before turbine losses.',
      },
    ],
  },

  'eng-newton-force': {
    seoTitle: `Free Newton's Second Law Force Calculator – F = ma Newtons | ${SITE_NAME}`,
    metaDescription:
      "Calculate net mechanical force in Newtons (N) from mass in kg and acceleration in m/s² with our free Newton's Second Law Force Calculator.",
    howToUseSteps: [
      'Type object inertia in kilograms inside Mass (kg).',
      'Input target acceleration rate in meters per second squared under Acceleration (m/s²).',
      'View the required net force output directly in Newtons (N).',
    ],
    formulaExplanation:
      "Newton's second law connects net force in Newtons (N, defined as kg·m/s²) to mass in kilograms (kg) multiplied by linear acceleration in meters per second squared (m/s²). Formula: Force (N) = Mass (kg) × Acceleration (m/s²).",
    practicalExample:
      'Accelerating a crate of Mass (kg) = 100 at Acceleration (m/s²) = 5 requires 100 × 5 = 500.00 Newtons (N).',
    faqs: [
      {
        q: 'What physical action equals 1 Newton (N)?',
        a: 'One Newton is the exact force needed to accelerate a 1 kg mass by 1 m/s² in a frictionless environment.',
      },
      {
        q: 'Does F = m × a compute static weight too?',
        a: 'Yes—enter object Mass (kg) and set Acceleration (m/s²) to 9.81 to find downward gravitational weight in Newtons.',
      },
      {
        q: 'Can Mass (kg) ever be zero in real mechanical problems?',
        a: 'Physical objects always possess positive mass; zero mass produces zero inertial force regardless of acceleration.',
      },
    ],
  },

  'eng-gravity': {
    seoTitle: `Free Universal Gravitation Calculator – Orbital Force (N) | ${SITE_NAME}`,
    metaDescription:
      'Compute Newtonian gravitational attraction in Newtons between two masses across distance in meters with our free Universal Gravitation Calculator.',
    howToUseSteps: [
      'Enter the first body’s mass in kilograms inside Mass 1 (kg) (supports scientific notation like 5.97e24).',
      'Type the second body’s mass in kilograms into Mass 2 (kg).',
      'Input center-to-center separation in meters under Distance Between Centers (meters).',
    ],
    formulaExplanation:
      'Newton’s law of universal gravitation evaluates mutual attraction in Newtons (N) using two masses in kilograms (kg), center-to-center separation in meters (m), and the gravitational constant G = 6.6743 × 10⁻¹¹ N·m²/kg². Formula: F = G × (Mass 1 × Mass 2) / Distance² (N).',
    practicalExample:
      'Using Earth Mass 1 (kg) = 5.97e24, Moon Mass 2 (kg) = 7348e20, and Distance Between Centers (meters) = 384400000 yields 1.981e+21 Newtons (N).',
    faqs: [
      {
        q: 'Does Distance Between Centers (meters) mean surface-to-surface gap or center-to-center?',
        a: 'Always enter center-to-center radius—for objects on Earth’s surface, that distance equals Earth’s radius (~6,371,000 m), not zero.',
      },
      {
        q: 'Can I type planetary masses using exponential notation like 5.97e24?',
        a: 'Yes—standard JavaScript/engineering notation such as 5.97e24 or 1.989e30 parses cleanly in Mass 1 (kg) and Mass 2 (kg).',
      },
      {
        q: 'How steeply does gravity weaken when orbital distance doubles?',
        a: 'Because Distance is squared in the denominator, doubling orbital separation cuts gravitational force to one-quarter.',
      },
    ],
  },

  'eng-ideal-gas': {
    seoTitle: `Free Ideal Gas Law Calculator (PV = nRT) – Pressure (atm) | ${SITE_NAME}`,
    metaDescription:
      'Solve gas pressure in atmospheres from moles, Kelvin temperature, and Liters volume using our free Ideal Gas Law Calculator (PV = nRT).',
    howToUseSteps: [
      'Enter gas quantity in moles into Moles (n).',
      'Type absolute temperature in Kelvin inside Temperature (Kelvin K).',
      'Specify container capacity in liters under Volume (Liters L) to read pressure in atmospheres.',
    ],
    formulaExplanation:
      'The Ideal Gas Law links gas amount in moles (n), absolute temperature in Kelvin (K), and container volume in liters (L) through the universal gas constant R = 0.082057 L·atm/(mol·K) to yield pressure in atmospheres (atm). Formula: Pressure (atm) = (Moles × 0.082057 × Temperature K) / Volume L.',
    practicalExample:
      'Holding Moles (n) = 2 at Temperature (Kelvin K) = 300 inside Volume (Liters L) = 25 produces (2 × 0.082057 × 300) / 25 = 1.969 Atmospheres (atm).',
    faqs: [
      {
        q: 'Why must Temperature (Kelvin K) be in Kelvin rather than Celsius?',
        a: 'The constant R = 0.082057 requires absolute zero reference; add 273.15 to Celsius (e.g., 27°C = 300.15 K) before entering.',
      },
      {
        q: 'How do I convert an atmosphere result like 1.969 atm into kilopascals?',
        a: 'Multiply atm by 101.325 kPa/atm, giving roughly 199.5 kPa.',
      },
      {
        q: 'When does a real gas deviate noticeably from PV = nRT?',
        a: 'Under extreme pressures above 50 atm or near liquefaction temperatures, intermolecular forces cause deviations from ideal behavior.',
      },
    ],
  },

  'eng-reynolds': {
    seoTitle: `Free Reynolds Number Fluid Dynamics Calculator – Pipe Flow | ${SITE_NAME}`,
    metaDescription:
      'Classify laminar, transitional, or turbulent pipe flow from fluid properties using our free Reynolds Number Fluid Dynamics Calculator.',
    howToUseSteps: [
      'Enter liquid or gas mass density in kg/m³ inside Fluid Density (kg/m³).',
      'Type average stream speed in m/s into Velocity (m/s) and pipe bore inside Pipe Diameter (m).',
      'Input Dynamic Viscosity (Pa·s) to inspect the dimensionless Reynolds number and flow regime.',
    ],
    formulaExplanation:
      'Reynolds number (dimensionless) compares inertial forces against viscous forces using density (kg/m³), flow velocity (m/s), internal pipe diameter (m), and dynamic viscosity in Pascal-seconds (Pa·s). Values below 2,300 indicate laminar flow, 2,300–4,000 transitional, and above 4,000 turbulent. Formula: Re = (Fluid Density × Velocity × Pipe Diameter) / Dynamic Viscosity.',
    practicalExample:
      'Water with Fluid Density (kg/m³) = 1000 flowing at Velocity (m/s) = 2 through Pipe Diameter (m) = 0.1 at Dynamic Viscosity (Pa·s) = 0.001 yields Re = 200000 (Turbulent Flow).',
    faqs: [
      {
        q: 'What units match Dynamic Viscosity (Pa·s) for water at 20°C?',
        a: 'Room-temperature water has a dynamic viscosity of approximately 0.001 Pa·s (1 centipoise = 0.001 Pa·s).',
      },
      {
        q: 'Why does Reynolds number have no units in the final output?',
        a: 'Numerator units (kg/m³ × m/s × m = kg/(m·s)) cancel identically against Pa·s (kg/(m·s)), leaving a pure dimensionless ratio.',
      },
      {
        q: 'How can engineers force high-Re pipe flow back into Laminar Flow?',
        a: 'Lowering Velocity (m/s), shrinking Pipe Diameter (m), or pumping a higher-viscosity fluid drops Re below 2,300.',
      },
    ],
  },

  'eng-thermal-expansion': {
    seoTitle: `Free Thermal Expansion Calculator – Rod Length Growth (m & mm) | ${SITE_NAME}`,
    metaDescription:
      'Compute linear expansion in meters and millimeters for heated pipes, rails, and beams using our free Thermal Expansion Calculator.',
    howToUseSteps: [
      'Enter starting span length in meters inside Original Length (meters).',
      'Type material linear expansion rate into Expansion Coefficient (×10⁻⁶ / °C).',
      'Supply temperature rise or drop in degrees Celsius inside Temperature Change (°C).',
    ],
    formulaExplanation:
      'Solids expand proportionally to original length in meters (m), linear thermal expansion coefficient scaled by 10⁻⁶ per degree Celsius (°C⁻¹), and temperature delta (°C), yielding elongation ΔL in both meters (m) and millimeters (mm). Formula: ΔL = Original Length (m) × [Expansion Coefficient × 10⁻⁶] × Temperature Change (°C).',
    practicalExample:
      'Heating an aluminum beam of Original Length (meters) = 12 with Expansion Coefficient (×10⁻⁶ / °C) = 23 across Temperature Change (°C) = 40 gives ΔL = 0.0110 meters (11.04 mm).',
    faqs: [
      {
        q: 'What Expansion Coefficient (×10⁻⁶ / °C) values apply to common metals?',
        a: 'Typical values are ~12 for carbon steel, ~17 for copper, ~23 for aluminum, and ~9 for ordinary soda-lime glass.',
      },
      {
        q: 'Why enter 12 instead of 0.000012 in Expansion Coefficient (×10⁻⁶ / °C)?',
        a: 'The calculator multiplies your entry by 10⁻⁶ internally so standard handbook coefficients like 12 or 23 type quickly.',
      },
      {
        q: 'What does a negative Temperature Change (°C) tell you?',
        a: 'A negative ΔT models winter thermal contraction, returning a negative ΔL indicating how much the span shrinks.',
      },
    ],
  },

  'eng-projectile-range': {
    seoTitle: `Free Projectile Motion Range Calculator – Horizontal Distance | ${SITE_NAME}`,
    metaDescription:
      'Compute horizontal flight distance in meters from launch velocity, angle in degrees, and gravity using our free Projectile Motion Range Calculator.',
    howToUseSteps: [
      'Type muzzle or throw speed in meters per second into Initial Velocity (m/s).',
      'Enter elevation angle in degrees inside Launch Angle (Degrees).',
      'Keep or adjust Gravity (m/s²) to read ideal flat-ground range in meters.',
    ],
    formulaExplanation:
      'Ideal level-ground projectile range converts launch angle θ from degrees to radians, squares initial speed in meters per second (m/s), multiplies by sin(2θ), and divides by gravitational acceleration in m/s² to output distance in meters (m). Formula: Range (m) = [Initial Velocity² × sin(2 × Launch Angle)] / Gravity.',
    practicalExample:
      'Launching at Initial Velocity (m/s) = 30 and Launch Angle (Degrees) = 45 under Gravity (m/s²) = 9.8 gives (900 × sin 90°) / 9.8 = 91.84 Meters.',
    faqs: [
      {
        q: 'Why does Launch Angle (Degrees) = 45 produce maximum horizontal distance?',
        a: 'Because sin(2θ) peaks at sin(90°) = 1.0 when θ = 45°, balancing upward hang time against forward horizontal velocity.',
      },
      {
        q: 'Do 30° and 60° angles yield the exact same Range in meters?',
        a: 'Yes—without air drag, complementary angles such as 30° and 60° share equal sin(2θ) values and land at identical distances.',
      },
      {
        q: 'Does this formula include atmospheric aerodynamic drag?',
        a: 'No—this classical kinematics model assumes vacuum conditions and equal launch and landing elevation.',
      },
    ],
  },

  'eng-centripetal-force': {
    seoTitle: `Free Centripetal Force Calculator – Circular Motion Newtons | ${SITE_NAME}`,
    metaDescription:
      'Calculate inward circular-motion force in Newtons from mass, tangential speed, and curve radius using our free Centripetal Force Calculator.',
    howToUseSteps: [
      'Input turning object mass in kilograms inside Mass (kg).',
      'Type tangential speed in meters per second under Velocity (m/s).',
      'Enter turn curvature in meters into Radius of Turn (meters) to find centripetal force in Newtons.',
    ],
    formulaExplanation:
      'Keeping a mass in kilograms (kg) moving along a curved path of radius in meters (m) at tangential velocity in meters per second (m/s) demands continuous inward centripetal force measured in Newtons (N). Formula: Fc = (Mass (kg) × Velocity (m/s)²) / Radius of Turn (m).',
    practicalExample:
      'A car of Mass (kg) = 1000 rounding a Radius of Turn (meters) = 50 curve at Velocity (m/s) = 20 needs (1,000 × 400) / 50 = 8,000 Newtons (N) of lateral grip.',
    faqs: [
      {
        q: 'Why does tightening Radius of Turn (meters) spike skidding risk?',
        a: 'Halving turn radius immediately doubles the lateral centripetal Newtons tires must generate, while doubling speed quadruples it.',
      },
      {
        q: 'What physical force provides Centripetal Force for an orbiting satellite?',
        a: 'Gravity supplies the inward centripetal force, whereas road tire friction or banked track normal force supplies it for vehicles.',
      },
      {
        q: 'Why cannot Radius of Turn (meters) equal zero?',
        a: 'Zero radius implies a sharp corner with infinite curvature and mathematical division by zero.',
      },
    ],
  },

  'eng-momentum': {
    seoTitle: `Free Momentum Calculator – Linear Impulse kg·m/s | ${SITE_NAME}`,
    metaDescription:
      'Compute linear momentum in kg·m/s from body mass and velocity using our free Momentum Calculator.',
    howToUseSteps: [
      'Type moving object mass in kilograms inside Mass (kg).',
      'Enter linear velocity in meters per second inside Velocity (m/s).',
      'Read total linear momentum in kilogram-meters per second (kg·m/s).',
    ],
    formulaExplanation:
      'Linear momentum combines inertial mass in kilograms (kg) with directional speed in meters per second (m/s) to express impact impulse capacity in standard SI units of kg·m/s (equivalent to Newton-seconds, N·s). Formula: Momentum (kg·m/s) = Mass (kg) × Velocity (m/s).',
    practicalExample:
      'A truck with Mass (kg) = 1500 moving at Velocity (m/s) = 20 carries 1,500 × 20 = 30,000 kg·m/s of linear momentum.',
    faqs: [
      {
        q: 'How is kg·m/s related to impulse in Newton-seconds (N·s)?',
        a: 'They are dimensionally identical: applying 30,000 N of braking force for 1 second removes 30,000 kg·m/s of momentum.',
      },
      {
        q: 'Why does momentum scale linearly with Velocity (m/s) while kinetic energy scales with v²?',
        a: 'Momentum tracks vector impulse transferred during collisions (m × v), whereas kinetic energy measures stopping work distance (0.5 × m × v²).',
      },
      {
        q: 'Can negative Velocity (m/s) be entered to model rebound collisions?',
        a: 'Yes—negative velocity flips the sign of momentum to represent motion in the opposite direction.',
      },
    ],
  },

  'eng-torque': {
    seoTitle: `Free Torque / Moment of Force Calculator – Newton-Meters | ${SITE_NAME}`,
    metaDescription:
      'Calculate rotational moment of force in Newton-meters (N·m) from applied Newtons and lever radius using our free Torque / Moment of Force Calculator.',
    howToUseSteps: [
      'Enter perpendicular force magnitude in Newtons into Force (Newtons N).',
      'Type wrench or arm length in meters inside Lever Arm Radius (meters).',
      'Inspect resulting rotational moment in Newton-meters (N·m).',
    ],
    formulaExplanation:
      'Rotational torque (moment of force) multiplies perpendicular force in Newtons (N) by effective lever arm distance in meters (m) from the pivot axis, giving output in Newton-meters (N·m). Formula: Torque (N·m) = Force (N) × Lever Arm Radius (m).',
    practicalExample:
      'Pulling with Force (Newtons N) = 250 on a breaker bar of Lever Arm Radius (meters) = 0.6 generates 250 × 0.6 = 150.00 N·m (Newton-meters).',
    faqs: [
      {
        q: 'How do I enter a 30 cm wrench handle into Lever Arm Radius (meters)?',
        a: 'Divide centimeters by 100—entering 0.30 meters ensures the answer outputs directly in N·m.',
      },
      {
        q: 'What changes if Force (Newtons N) pulls at a 45° angle instead of 90°?',
        a: 'Only the perpendicular component (F × sin θ) creates torque, so enter Force × sin(angle) for angled pulls.',
      },
      {
        q: 'How many foot-pounds equal 150.00 N·m?',
        a: 'Multiply Newton-meters by 0.73756, making 150 N·m roughly 110.6 lb-ft of tightening torque.',
      },
    ],
  },

  'eng-frequency-period': {
    seoTitle: `Free Frequency and Period Calculator – Hz to Seconds & ms | ${SITE_NAME}`,
    metaDescription:
      'Convert wave frequency in Hertz (Hz) into cycle period in seconds and milliseconds with our free Frequency and Period Calculator.',
    howToUseSteps: [
      'Type oscillation cycles per second into Frequency (Hertz Hz).',
      'Read exact single-cycle period shown in both seconds (s) and milliseconds (ms).',
    ],
    formulaExplanation:
      'Wave frequency measured in Hertz (Hz, cycles per second) and wave period measured in seconds (s) are mathematical reciprocals; dividing 1 by Hertz yields seconds per cycle, multiplied by 1,000 for milliseconds (ms). Formula: Period T (s) = 1 / Frequency (Hz).',
    practicalExample:
      'Converting AC mains Frequency (Hertz Hz) = 50 returns Period (T) = 0.0200 seconds (20.0 ms).',
    faqs: [
      {
        q: 'Can I convert a known Period back into Frequency using the same box?',
        a: 'Yes—because f = 1 / T, typing a period in seconds (like 0.02) into the field outputs its frequency (50).',
      },
      {
        q: 'How do I enter megahertz (MHz) or kilohertz (kHz) into Frequency (Hertz Hz)?',
        a: 'Convert kHz by multiplying by 1,000 or MHz by 1,000,000 (for instance, 1 MHz = 1e6 Hz = 0.000001 s period).',
      },
      {
        q: 'Why does AC grid frequency of 50 Hz reverse polarity 100 times per second?',
        a: 'Each full 20.0 ms sine period contains one positive half-cycle (10 ms) and one negative half-cycle (10 ms).',
      },
    ],
  },

  'eng-wave-speed': {
    seoTitle: `Free Wave Speed Calculator – Frequency & Wavelength (m/s) | ${SITE_NAME}`,
    metaDescription:
      'Determine wave propagation velocity in m/s from frequency in Hertz and wavelength in meters using our free Wave Speed Calculator.',
    howToUseSteps: [
      'Enter wave oscillation rate in Hertz inside Frequency (Hz).',
      'Type crest-to-crest distance in meters under Wavelength (meters).',
      'Check wave propagation speed directly in meters per second (m/s).',
    ],
    formulaExplanation:
      'Mechanical and electromagnetic wave speed in meters per second (m/s) equals cycle frequency in Hertz (Hz = s⁻¹) multiplied by spatial wavelength in meters (m). Formula: Wave Speed (m/s) = Frequency (Hz) × Wavelength (m).',
    practicalExample:
      'An acoustic tone at Frequency (Hz) = 440 with Wavelength (meters) = 0.78 propagates at 440 × 0.78 = 343.20 m/s.',
    faqs: [
      {
        q: 'Does Frequency (Hz) change when light or sound enters a denser medium?',
        a: 'No—frequency stays locked by the source, while Wave Speed and Wavelength (meters) shrink proportionally in denser media.',
      },
      {
        q: 'What speed should appear for standard radio waves in vacuum?',
        a: 'Multiplying a radio frequency in Hz by its meter wavelength yields the speed of light, approximately 2.998 × 10⁸ m/s.',
      },
      {
        q: 'How do I enter nanometers for visible light inside Wavelength (meters)?',
        a: 'Use scientific notation such as 5e-7 meters for 500 nm green light.',
      },
    ],
  },

  'eng-decibel': {
    seoTitle: `Free Decibel Sound Intensity Calculator – W/m² to dB | ${SITE_NAME}`,
    metaDescription:
      'Convert acoustic intensity in Watts per square meter (W/m²) into decibels (dB) with our free Decibel Sound Intensity Calculator.',
    howToUseSteps: [
      'Enter acoustic power density in W/m² into Sound Intensity (W/m²) (supports scientific notation like 1e-4).',
      'Read logarithmic sound pressure level in decibels (dB) above human hearing threshold.',
    ],
    formulaExplanation:
      'Acoustic decibel level (dB) compresses huge intensity ranges onto a base-10 logarithmic scale referenced against the human hearing threshold I₀ = 10⁻¹² Watts per square meter (W/m²). Formula: Sound Level (dB) = 10 × log₁₀(Sound Intensity (W/m²) / 10⁻¹²).',
    practicalExample:
      'Entering Sound Intensity (W/m²) = 1e-4 computes 10 × log₁₀(10⁻⁴ / 10⁻¹²) = 80.0 dB.',
    faqs: [
      {
        q: 'How much louder in dB is ten times higher Sound Intensity (W/m²)?',
        a: 'Multiplying intensity in W/m² by 10 adds exactly +10.0 dB (for example, 1e-3 W/m² equals 90.0 dB).',
      },
      {
        q: 'What does 0.0 dB represent physically?',
        a: '0 dB corresponds to the reference intensity I₀ = 1e-12 W/m², the faintest sound audible to healthy human ears.',
      },
      {
        q: 'Why is Sound Intensity (W/m²) restricted to positive numbers?',
        a: 'Logarithm log₁₀(x) is undefined for zero or negative physical energy intensities.',
      },
    ],
  },

  'eng-coulomb': {
    seoTitle: `Free Coulomb's Law Electric Force Calculator – Point Charges | ${SITE_NAME}`,
    metaDescription:
      "Calculate electrostatic attraction or repulsion in Newtons between two point charges in Coulombs using our free Coulomb's Law Electric Force Calculator.",
    howToUseSteps: [
      'Enter the first particle’s charge in Coulombs inside Charge 1 (Coulombs C) (e.g., 2e-6 for 2 µC).',
      'Type the second charge in Coulombs into Charge 2 (Coulombs C).',
      'Supply center-to-center spacing in meters under Distance (meters) to read force in Newtons.',
    ],
    formulaExplanation:
      "Coulomb's Law evaluates electrostatic force magnitude in Newtons (N) between two point charges in Coulombs (C) separated by vacuum distance in meters (m), scaled by Coulomb’s constant k = 8.98755 × 10⁹ N·m²/C². Formula: Fe = k × |Charge 1 (C) × Charge 2 (C)| / Distance (m)².",
    practicalExample:
      'Placing Charge 1 (Coulombs C) = 2e-6 and Charge 2 (Coulombs C) = 3e-6 at Distance (meters) = 0.05 produces 21.57 Newtons (N).',
    faqs: [
      {
        q: 'How do I input microcoulombs (µC) into Charge 1 (Coulombs C)?',
        a: 'Multiply microcoulombs by 10⁻⁶ using e-notation—enter 5e-6 for 5 µC or 1e-9 for 1 nanocoulomb.',
      },
      {
        q: 'Does entering negative charge signs change force magnitude?',
        a: 'No—absolute value |q₁ × q₂| reports force strength in Newtons; like signs repel while opposite signs attract.',
      },
      {
        q: 'How does Distance (meters) in centimeters convert cleanly?',
        a: 'Divide centimeters by 100 before entering (so 5 cm becomes 0.05 meters).',
      },
    ],
  },

  'eng-radioactive-decay': {
    seoTitle: `Free Radioactive Half-Life Decay Calculator – Remaining Grams | ${SITE_NAME}`,
    metaDescription:
      'Compute remaining isotope mass in grams after elapsed half-life intervals using our free Radioactive Half-Life Decay Calculator.',
    howToUseSteps: [
      'Enter starting isotope sample mass in grams inside Initial Mass (grams).',
      'Type how many decay half-life periods have passed under Elapsed Half-Lives.',
      'Read remaining undecayed sample mass in grams.',
    ],
    formulaExplanation:
      'Radioactive decay reduces undecayed isotope mass in grams (g) exponentially by a factor of 0.5 for every dimensionless half-life interval elapsed. Formula: Remaining Mass (g) = Initial Mass (g) × (0.5 ^ Elapsed Half-Lives).',
    practicalExample:
      'Starting with Initial Mass (grams) = 100 after Elapsed Half-Lives = 3 leaves 100 × 0.5³ = 12.500 grams remaining.',
    faqs: [
      {
        q: 'Can Elapsed Half-Lives accept fractional numbers like 2.5?',
        a: 'Yes—if 25 days elapsed on a 10-day half-life isotope, entering 2.5 computes exact continuous exponential decay.',
      },
      {
        q: 'Does Remaining Mass ever truly reach zero mathematically?',
        a: 'Exponential decay halves continuously without hitting mathematical zero, though practical activity eventually blends into background radiation.',
      },
      {
        q: 'Can Initial Mass (grams) work if I interpret the number in milligrams or Becquerels?',
        a: 'Yes—the decay multiplier (0.5)^n is unit-independent, so entering milligrams or kBq yields remaining mass or activity in that same unit.',
      },
    ],
  },

  'eng-density': {
    seoTitle: `Free Density, Mass, and Volume Calculator – kg/m³ Solver | ${SITE_NAME}`,
    metaDescription:
      'Calculate material mass density in kg/m³ from object mass in kilograms and volume in cubic meters with our free Density, Mass, and Volume Calculator.',
    howToUseSteps: [
      'Type sample mass in kilograms inside Mass (kg).',
      'Enter occupied space in cubic meters into Volume (m³).',
      'Inspect material bulk density immediately in kilograms per cubic meter (kg/m³).',
    ],
    formulaExplanation:
      'Bulk density measures how tightly matter packs into space by dividing mass in kilograms (kg) by volume in cubic meters (m³), giving engineering density in kg/m³. Formula: Density ρ (kg/m³) = Mass (kg) / Volume (m³).',
    practicalExample:
      'A metal block of Mass (kg) = 500 occupying Volume (m³) = 0.05 has density 500 / 0.05 = 10,000 kg/m³.',
    faqs: [
      {
        q: 'How do I convert kg/m³ into g/cm³?',
        a: 'Divide kg/m³ by 1,000—for example, water at 1,000 kg/m³ equals 1.00 g/cm³, and 10,000 kg/m³ equals 10.0 g/cm³.',
      },
      {
        q: 'How do I enter liters into Volume (m³)?',
        a: 'Divide liters by 1,000 (for instance, 50 liters = 0.05 m³).',
      },
      {
        q: 'What are reference kg/m³ densities for steel, aluminum, and water?',
        a: 'Fresh water is ~1,000 kg/m³, aluminum ~2,700 kg/m³, and structural steel ~7,850 kg/m³.',
      },
    ],
  },

  'eng-specific-heat': {
    seoTitle: `Free Specific Heat Capacity Heat Energy Calculator – Q = mcΔT | ${SITE_NAME}`,
    metaDescription:
      'Compute thermal heat energy in Joules from mass, specific heat capacity, and ΔT using our free Specific Heat Capacity Heat Energy Calculator.',
    howToUseSteps: [
      'Type substance mass in kilograms into Mass (kg).',
      'Enter material thermal coefficient inside Specific Heat Capacity (J/kg·°C).',
      'Input temperature rise or drop inside Temperature Change (°C) to read heat energy in Joules.',
    ],
    formulaExplanation:
      'Sensible heat transfer calculates thermal energy in Joules (J) absorbed or released by multiplying substance mass in kilograms (kg), specific heat capacity in J/(kg·°C), and temperature change in degrees Celsius (°C). Formula: Heat Energy Q (J) = Mass (kg) × Specific Heat (J/kg·°C) × ΔT (°C).',
    practicalExample:
      'Warming Mass (kg) = 2 of water (Specific Heat Capacity (J/kg·°C) = 4184) by Temperature Change (°C) = 25 absorbs 2 × 4,184 × 25 = 209,200 Joules (J).',
    faqs: [
      {
        q: 'Why does liquid water use 4184 J/kg·°C in Specific Heat Capacity?',
        a: 'Water stores unusually high thermal energy (~4.184 kJ per kg per °C), making it ideal for cooling loops and hydronic heating.',
      },
      {
        q: 'Is ΔT in °C numerically identical to ΔT in Kelvin?',
        a: 'Yes—because 1 °C step equals 1 K step, temperature differences are identical on both scales.',
      },
      {
        q: 'Does Q = m × c × ΔT cover boiling or melting phase changes?',
        a: 'No—during melting or boiling at constant temperature, add latent heat energy (m × L) separately.',
      },
    ],
  },

  'eng-pendulum': {
    seoTitle: `Free Simple Pendulum Period Calculator – Swing Time (s) | ${SITE_NAME}`,
    metaDescription:
      'Compute oscillation period in seconds for a simple gravity pendulum from rod length in meters using our free Simple Pendulum Period Calculator.',
    howToUseSteps: [
      'Enter pivot-to-bob length in meters inside Pendulum Length (meters).',
      'Confirm or adjust local gravitational acceleration in Gravity (m/s²).',
      'Read exact time in seconds required for one full back-and-forth swing.',
    ],
    formulaExplanation:
      'Under small swing angles, a simple pendulum’s full period in seconds (s) depends solely on string length in meters (m) and gravitational field strength in meters per second squared (m/s²), independent of bob mass. Formula: Period T (s) = 2π × √[Pendulum Length (m) / Gravity (m/s²)].',
    practicalExample:
      'A grandfather clock rod with Pendulum Length (meters) = 1.0 under Gravity (m/s²) = 9.8 completes one cycle in 2.007 Seconds per oscillation.',
    faqs: [
      {
        q: 'Why does changing the pendulum bob mass not alter Period T?',
        a: 'Gravitational pull scales with mass just like rotational inertia, so mass cancels completely from small-angle pendulum motion.',
      },
      {
        q: 'What Pendulum Length (meters) gives an exact 1.000-second swing?',
        a: 'Solving T = 1 s under 9.8 m/s² yields roughly 0.248 meters (about 24.8 cm).',
      },
      {
        q: 'Does large-angle swinging (> 20°) stay exact with 2π√(L/g)?',
        a: 'Wide arcs swing slightly slower than the small-angle formula predicts because sin θ diverges from θ in radians.',
      },
    ],
  },

  'eng-hookes-law': {
    seoTitle: `Free Hooke's Law Spring Force Calculator – Stiffness & Stretch | ${SITE_NAME}`,
    metaDescription:
      "Calculate elastic spring restoring force in Newtons (N) from stiffness (N/m) and displacement in meters with our free Hooke's Law Spring Force Calculator.",
    howToUseSteps: [
      'Type coil spring rate in Newtons per meter inside Spring Constant / Stiffness (N/m).',
      'Enter compression or extension distance in meters into Displacement / Stretch (meters).',
      'Inspect the restoring spring force in Newtons (N).',
    ],
    formulaExplanation:
      "Hooke's Law describes linear elastic behavior by multiplying spring constant stiffness in Newtons per meter (N/m) by axial deflection or stretch in meters (m) to return spring force in Newtons (N). Formula: Force F (N) = Spring Constant k (N/m) × Displacement x (m).",
    practicalExample:
      'Stretching a coil rated at Spring Constant / Stiffness (N/m) = 250 by Displacement / Stretch (meters) = 0.08 produces 250 × 0.08 = 20.00 Newtons (N).',
    faqs: [
      {
        q: 'How should I enter a 5 cm spring compression into Displacement / Stretch (meters)?',
        a: 'Convert centimeters to meters by dividing by 100, entering 0.05 meters.',
      },
      {
        q: 'When does a metal coil stop obeying Hooke’s Law?',
        a: 'Once stretched past its elastic yield limit, permanent plastic deformation occurs and Force no longer scales linearly with x.',
      },
      {
        q: 'How much potential energy is stored at 20.00 N over 0.08 m?',
        a: 'Elastic spring energy equals 0.5 × k × x² = 0.5 × 250 × 0.08² = 0.80 Joules.',
      },
    ],
  },

  'eng-stress-strain': {
    seoTitle: `Free Stress and Strain Mechanics Calculator – Pascals & MPa | ${SITE_NAME}`,
    metaDescription:
      'Calculate structural stress in MPa and Pascals from axial force and cross-sectional area with our free Stress and Strain Mechanics Calculator.',
    howToUseSteps: [
      'Enter axial tension or compression load in Newtons inside Applied Force (Newtons N).',
      'Type member cross-sectional area in square meters into Cross-Sectional Area (m²).',
      'Review structural normal stress displayed in both MPa and Pascals (Pa).',
    ],
    formulaExplanation:
      'Normal mechanical stress measures internal load intensity by dividing applied axial force in Newtons (N) by cross-sectional area in square meters (m²), producing Pascals (Pa = N/m²) and Megapascals (1 MPa = 10⁶ Pa). Formula: Stress σ (Pa) = Applied Force (N) / Cross-Sectional Area (m²).',
    practicalExample:
      'Applying Applied Force (Newtons N) = 50000 over Cross-Sectional Area (m²) = 0.002 develops 25,000,000 Pascals (Pa), or 25.00 MPa (Megapascals).',
    faqs: [
      {
        q: 'How do I convert a bar area in mm² into Cross-Sectional Area (m²)?',
        a: 'Divide square millimeters by 1,000,000 (for instance, 2,000 mm² = 0.002 m²).',
      },
      {
        q: 'Is 25.00 MPa safe for ordinary structural carbon steel?',
        a: 'Mild A36 structural steel typically yields around 250 MPa, so 25 MPa represents a high 10:1 safety factor in pure tension.',
      },
      {
        q: 'Why must Cross-Sectional Area (m²) exceed zero?',
        a: 'Zero load-bearing area produces infinite theoretical stress and triggers a mathematical divide-by-zero boundary.',
      },
    ],
  },

  'eng-refractive-index': {
    seoTitle: `Free Refractive Index Snell's Law Calculator – Refraction Angle | ${SITE_NAME}`,
    metaDescription:
      "Calculate light ray refraction angles across optical media from n₁ and n₂ with our free Refractive Index Snell's Law Calculator.",
    howToUseSteps: [
      'Enter incident medium optical index inside Refractive Index 1 (n₁) (use 1.0 for air).',
      'Type transmitting medium index into Refractive Index 2 (n₂) (e.g., 1.5 for crown glass).',
      'Input incoming beam angle relative to surface normal in Angle of Incidence (Degrees).',
    ],
    formulaExplanation:
      "Snell's Law connects dimensionless refractive indices n₁ and n₂ with angles measured in degrees from the surface normal, bending light toward the normal when entering higher-index glass or water. Formula: Angle of Refraction θ₂ = arcsin[(n₁ / n₂) × sin(θ₁)] (degrees).",
    practicalExample:
      'Light passing from air Refractive Index 1 (n₁) = 1.0 into glass Refractive Index 2 (n₂) = 1.5 at Angle of Incidence (Degrees) = 30 bends to Angle of Refraction = 19.47°.',
    faqs: [
      {
        q: 'Why can the result read Total Internal Reflection instead of an angle?',
        a: 'When moving from dense to less-dense media (n₁ > n₂) above the critical angle, (n₁/n₂)sin θ₁ exceeds 1.0 and light reflects completely inside.',
      },
      {
        q: 'Is Angle of Incidence (Degrees) measured from the glass surface or the perpendicular normal?',
        a: 'Optical Snell’s Law always measures θ₁ from the perpendicular surface normal line (0° hits straight on).',
      },
      {
        q: 'What Refractive Index values represent water and diamond?',
        a: 'Pure water has n ≈ 1.333, crown glass ≈ 1.50–1.52, and diamond ≈ 2.417.',
      },
    ],
  },

  'eng-doppler-effect': {
    seoTitle: `Free Doppler Effect Frequency Shift Calculator – Moving Source Hz | ${SITE_NAME}`,
    metaDescription:
      'Calculate shifted sound frequency in Hertz for an approaching moving source using wave speed with our free Doppler Effect Frequency Shift Calculator.',
    howToUseSteps: [
      'Type emitted stationary pitch in Hertz inside Source Frequency (Hz).',
      'Enter medium propagation speed in m/s into Speed of Sound (m/s) (343 m/s in 20°C air).',
      'Fill in approaching emitter speed under Source Speed (m/s) to view observed pitch in Hz.',
    ],
    formulaExplanation:
      'When an acoustic emitter approaches a stationary listener, wavefronts compress in front of the source; dividing medium wave speed (m/s) by relative speed difference (m/s) scales original frequency in Hertz (Hz). Formula: Observed Frequency f (Hz) = f₀ × [Speed of Sound (m/s) / (Speed of Sound − Source Speed)].',
    practicalExample:
      'An ambulance siren at Source Frequency (Hz) = 1000 approaching through air at Speed of Sound (m/s) = 343 with Source Speed (m/s) = 20 sounds at 1061.9 Hz Observed Frequency.',
    faqs: [
      {
        q: 'How do I model a siren moving away instead of approaching?',
        a: 'Enter a negative value in Source Speed (m/s), such as −20 m/s, which expands denominator speed to 363 m/s and drops observed pitch.',
      },
      {
        q: 'Why does Source Speed (m/s) equal to or above Speed of Sound trigger a warning?',
        a: 'At Mach 1 (v_s ≥ v), wavefronts pile into a sonic boom shockwave where the simple denominator becomes zero or negative.',
      },
      {
        q: 'Can underwater sonar calculations use this tool?',
        a: 'Yes—set Speed of Sound (m/s) to ~1,480 m/s for freshwater or ~1,500 m/s for seawater.',
      },
    ],
  },

  'eng-thermal-conductivity': {
    seoTitle: `Free Thermal Conductivity Heat Transfer Calculator – Wall Watts | ${SITE_NAME}`,
    metaDescription:
      'Compute conductive heat flow in Watts across walls from k, area, and ΔT using our free Thermal Conductivity Heat Transfer Calculator.',
    howToUseSteps: [
      'Enter material thermal conductivity in Watts per meter-Kelvin inside Thermal Conductivity (W/m·K).',
      'Type surface span in square meters into Wall Area (m²).',
      'Supply Temperature Difference (°C) and barrier depth in Wall Thickness (meters) to find heat flow in Watts.',
    ],
    formulaExplanation:
      "Fourier's Law of steady conduction calculates thermal power flow in Watts (W) from material conductivity k in W/(m·K), cross-sectional area in square meters (m²), temperature difference in °C (equal in Kelvin), and wall thickness in meters (m). Formula: Q (Watts) = [k (W/m·K) × Wall Area (m²) × ΔT (°C)] / Wall Thickness (m).",
    practicalExample:
      'Across a brick wall with Thermal Conductivity (W/m·K) = 0.8, Wall Area (m²) = 20, Temperature Difference (°C) = 30, and Wall Thickness (meters) = 0.2, heat escapes at 2400.00 Watts (Heat Transfer Rate).',
    faqs: [
      {
        q: 'How do thermal insulation foams compare to brick in Thermal Conductivity (W/m·K)?',
        a: 'Expanded polystyrene or fiberglass insulation runs around 0.03–0.04 W/m·K—roughly 20× better at blocking heat than 0.8 W/m·K brick.',
      },
      {
        q: 'Why is Temperature Difference (°C) interchangeable with Kelvin here?',
        a: 'Conductivity units W/(m·K) measure temperature gradients, and a 1°C step equals a 1 K step identically.',
      },
      {
        q: 'How does doubling Wall Thickness (meters) affect heat loss in Watts?',
        a: 'Doubling insulation or wall thickness halves steady-state conductive heat transfer directly.',
      },
    ],
  },

  'eng-reynolds-kinematic': {
    seoTitle: `Free Reynolds Number Fluid Flow Calculator – Kinematic Viscosity | ${SITE_NAME}`,
    metaDescription:
      'Determine pipe flow regime from velocity (m/s), diameter (m), and kinematic viscosity (m²/s) using our free Reynolds Number Fluid Flow Calculator.',
    howToUseSteps: [
      'Type average fluid speed in meters per second inside Flow Velocity (m/s).',
      'Enter circular pipe inside diameter in meters into Pipe Diameter (m).',
      'Supply fluid Kinematic Viscosity (m²/s) to evaluate dimensionless Re and flow regime.',
    ],
    formulaExplanation:
      'When hydraulic tables supply kinematic viscosity ν in square meters per second (m²/s, equal to dynamic viscosity divided by density), dividing Flow Velocity (m/s) × Pipe Diameter (m) by ν returns dimensionless Reynolds number. Formula: Re = [Flow Velocity (m/s) × Pipe Diameter (m)] / Kinematic Viscosity (m²/s).',
    practicalExample:
      'Pumping thick oil at Flow Velocity (m/s) = 1.5 through Pipe Diameter (m) = 0.05 with Kinematic Viscosity (m²/s) = 0.0001 yields Re = 750 (Laminar Flow).',
    faqs: [
      {
        q: 'What is the Kinematic Viscosity (m²/s) of 20°C water?',
        a: 'Fresh water at 20°C has a kinematic viscosity near 1.004e-6 m²/s (roughly 1 centistoke = 10⁻⁶ m²/s).',
      },
      {
        q: 'How do centistokes (cSt) convert into Kinematic Viscosity (m²/s)?',
        a: 'Multiply centistokes by 10⁻⁶—for example, 100 cSt motor oil equals 0.0001 m²/s.',
      },
      {
        q: 'Which Re thresholds mark Transitional versus Turbulent Flow?',
        a: 'Pipe flow transitions between Re = 2,300 and Re = 4,000, becoming fully turbulent above 4,000.',
      },
    ],
  },

  'eng-torque-power': {
    seoTitle: `Free Mechanical Torque and Power Calculator – N·m & RPM to kW | ${SITE_NAME}`,
    metaDescription:
      'Convert shaft torque in N·m and engine speed in RPM into mechanical power in Watts and kilowatts using our free Mechanical Torque and Power Calculator.',
    howToUseSteps: [
      'Type shaft twisting load in Newton-meters inside Torque (N·m).',
      'Enter rotational shaft speed in revolutions per minute under Rotational Speed (RPM).',
      'Inspect output mechanical shaft power in both Watts (W) and kilowatts (kW).',
    ],
    formulaExplanation:
      'Rotational mechanical power converts shaft speed from revolutions per minute (RPM) into radians per second (rad/s) via 2π / 60 and multiplies by shaft torque in Newton-meters (N·m) to obtain power in Watts (W) and kilowatts (kW). Formula: Power (W) = Torque (N·m) × Rotational Speed (RPM) × (2π / 60).',
    practicalExample:
      'An engine delivering Torque (N·m) = 150 at Rotational Speed (RPM) = 3000 produces Power = 47123.9 Watts (47.12 kW).',
    faqs: [
      {
        q: 'How do I convert 47.12 kW shaft power into mechanical horsepower (HP)?',
        a: 'Divide kilowatts by 0.7457 (or Watts by 745.7)—47.12 kW equals roughly 63.2 mechanical HP.',
      },
      {
        q: 'Why can two motors generate identical Watts at completely different RPM?',
        a: 'High-torque low-RPM gearmotors trade speed for twisting force, while high-RPM spindles deliver the same kW with lower N·m.',
      },
      {
        q: 'Does this formula compute brake shaft power before gearbox friction?',
        a: 'Yes—multiply the calculated Watt output by gearbox mechanical efficiency (e.g., 0.92) when sizing downstream driven loads.',
      },
    ],
  },

  'eng-bernoulli': {
    seoTitle: `Free Bernoulli Fluid Pressure Calculator – Pipe Speed & Pa | ${SITE_NAME}`,
    metaDescription:
      'Estimate incompressible water pressure drop in Pascals (Pa) between two pipe speeds using our free Bernoulli Fluid Pressure Calculator.',
    howToUseSteps: [
      'Enter upstream static fluid pressure in Pascals inside Initial Pressure (Pa).',
      'Type upstream flow speed in meters per second into Initial Velocity (m/s).',
      'Input downstream narrowed speed in Final Velocity (m/s) to check resulting static pressure P2 in Pascals.',
    ],
    formulaExplanation:
      'Bernoulli’s principle conserves mechanical energy along a horizontal streamline of incompressible water (ρ = 1,000 kg/m³) by trading static pressure in Pascals (Pa) against dynamic velocity head in m/s. Formula: P2 (Pa) = Initial Pressure (Pa) + 0.5 × 1000 × (v₁² − v₂²).',
    practicalExample:
      'With Initial Pressure (Pa) = 100000 and Initial Velocity (m/s) = 5 accelerating to Final Velocity (m/s) = 15, P2 drops by 100,000 Pa to P2 = 0 Pa.',
    faqs: [
      {
        q: 'What does a negative P2 (Pa) value indicate physically?',
        a: 'Negative gauge or absolute pressure signals cavitation risk where rapid acceleration lowers pressure below vapor or atmospheric limits.',
      },
      {
        q: 'How do I convert bar or kPa into Initial Pressure (Pa)?',
        a: 'Multiply kilopascals by 1,000 or bar by 100,000 (for instance, 1 bar = 100,000 Pa).',
      },
      {
        q: 'Which fluid density does this Bernoulli solver assume?',
        a: 'It uses standard fresh water density ρ = 1,000 kg/m³ assuming steady, frictionless horizontal pipe flow.',
      },
    ],
  },

  'eng-linear-thermal-expansion': {
    seoTitle: `Free Linear Thermal Expansion Calculator – Final Bar Length (m) | ${SITE_NAME}`,
    metaDescription:
      'Find thermal elongation in mm and total expanded rod length in meters from initial span and ΔT using our free Linear Thermal Expansion Calculator.',
    howToUseSteps: [
      'Type cold reference bar span in meters inside Initial Length (meters).',
      'Enter material expansion rate under Thermal Expansion Coeff (10⁻⁶ /°C).',
      'Input total heating span inside Temperature Change (°C) to view ΔL and total Final Length.',
    ],
    formulaExplanation:
      'Linear solid bar expansion computes absolute elongation ΔL in millimeters (mm) and meters (m) from reference span in meters (m), scaled coefficient (×10⁻⁶ /°C), and temperature rise (°C), then sums ΔL onto initial span to report expanded Final Length (m). Formula: ΔL (m) = Initial Length × (Coeff × 10⁻⁶) × ΔT; Final Length = Initial Length + ΔL.',
    practicalExample:
      'Heating a steel rail with Initial Length (meters) = 10, Thermal Expansion Coeff (10⁻⁶ /°C) = 12, and Temperature Change (°C) = 50 yields ΔL = 6.00 mm (0.00600 m) and Final Length: 10.0060 meters.',
    faqs: [
      {
        q: 'Why do bridge decks and railway tracks leave expansion gaps every few meters?',
        a: 'Even a 6.00 mm growth per 10-meter steel rail accumulates into 600 mm across 1 km, buckling tracks if restrained.',
      },
      {
        q: 'Does Final Length work accurately when modeling cooling below freezing?',
        a: 'Yes—enter a negative Temperature Change (°C) such as −30 to compute exact shrinkage below Initial Length.',
      },
      {
        q: 'How does Thermal Expansion Coeff (10⁻⁶ /°C) differ for brass versus steel?',
        a: 'Brass expands faster (~19 × 10⁻⁶ /°C) than carbon steel (~12 × 10⁻⁶ /°C), useful when designing bimetallic strips.',
      },
    ],
  },
};
