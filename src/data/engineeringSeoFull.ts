import { SITE_NAME } from '../config/site';

export interface EngineeringCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  introDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const engineeringSeoFullMap: Record<string, EngineeringCalculatorSeoEntry> = {
  'physics-velocity': {
    seoTitle: `How to Calculate Final Velocity and Distance | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate final velocity and distance from initial speed, constant acceleration, and elapsed time in standard SI units.',
    introDescription:
      'Solving linear motion homework or checking vehicle braking performance starts with knowing how to calculate final velocity and distance under constant acceleration. Enter starting speed in meters per second, uniform acceleration in m/s², and elapsed duration in seconds to display both final velocity and total displacement immediately. Using consistent SI units keeps kinematics checks fast and accurate across free-fall, sprint, and stopping-distance scenarios.',
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
        q: 'Can acceleration be negative when modeling braking or slowing down?',
        a: 'Yes, entering a negative value such as −4.5 m/s² calculates deceleration, reduced final speed, and braking distance accurately.',
      },
      {
        q: 'Which measurement units should I use for velocity and time?',
        a: 'Enter meters per second (m/s) for velocity, meters per second squared (m/s²) for acceleration, and seconds (s) for time.',
      },
      {
        q: 'Why does distance grow so quickly during free fall?',
        a: 'Displacement scales with time squared (t²) because downward speed climbs every second under 9.8 m/s² gravity.',
      },
    ],
  },

  'eng-kinetic-energy': {
    seoTitle: `How to Calculate Kinetic Energy in Joules | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate kinetic energy in Joules from an object’s mass in kilograms and moving velocity in meters per second.',
    introDescription:
      'Comparing impact energy across moving vehicles, industrial flywheels, or lab carts becomes intuitive once you know how to calculate kinetic energy in Joules cleanly. Enter object mass in kilograms alongside speed in meters per second to compute translational kinetic energy right away. Because speed enters the equation squared, small increases in velocity produce dramatic jumps in stored motion energy and stopping work.',
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
        q: 'Why does doubling speed multiply kinetic energy by four?',
        a: 'Velocity is squared in the formula (0.5 × m × v²), so moving twice as fast quadruples total motion energy.',
      },
      {
        q: 'How do I convert vehicle speed from km/h to m/s first?',
        a: 'Divide kilometers per hour by 3.6—for example, 90 km/h converts cleanly to 25 m/s.',
      },
      {
        q: 'How can I convert a large Joule result into kilojoules?',
        a: 'Divide total Joules by 1,000 to express the figure in kilojoules (kJ) or by 1,000,000 for megajoules (MJ).',
      },
    ],
  },

  'eng-potential-energy': {
    seoTitle: `How to Calculate Potential Energy from Height | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate potential energy from height, object mass in kg, and gravitational acceleration in standard Joules.',
    introDescription:
      'Estimating energy stored inside elevated crane loads, pumped-hydro reservoirs, or physics roller coasters begins with learning how to calculate potential energy from height accurately. Type the raised mass in kilograms, vertical height in meters, and gravitational acceleration (9.8 m/s² on Earth) to find gravitational potential energy in Joules. Changing gravity also lets students model lunar or Martian elevation work effortlessly.',
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
        q: 'Does the slope of a ramp change gravitational potential energy?',
        a: 'No, stored gravitational energy depends solely on vertical height gained, not the horizontal path length taken.',
      },
      {
        q: 'What gravity value should I enter for the Moon or Mars?',
        a: 'Use 1.62 m/s² for lunar surface gravity or 3.72 m/s² for Mars instead of Earth’s 9.8 m/s².',
      },
      {
        q: 'How does potential energy relate to hydropower water tanks?',
        a: 'Elevated water releases m × g × h Joules as it falls through a turbine before mechanical efficiency losses.',
      },
    ],
  },

  'eng-newton-force': {
    seoTitle: `How to Calculate Force in Newtons F = ma | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate force in Newtons F = ma by multiplying mass in kilograms by linear acceleration in m/s².',
    introDescription:
      'Sizing industrial actuators, checking tow loads, or verifying mechanics assignments relies on knowing how to calculate force in Newtons F = ma cleanly. Enter body mass in kilograms along with target acceleration in meters per second squared to compute required net force in Newtons (N). You can also enter 9.81 m/s² for acceleration to find an object’s static downward weight on Earth.',
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
        q: 'What does one Newton of force represent physically?',
        a: 'One Newton is the exact net force required to accelerate a 1-kilogram mass by 1 meter per second squared.',
      },
      {
        q: 'Can this formula calculate an object’s weight in Newtons?',
        a: 'Yes, enter object mass in kilograms and set acceleration to 9.81 m/s² to calculate Earth weight.',
      },
      {
        q: 'Does F = ma calculate net force or applied push force?',
        a: 'It solves net unbalanced force, so real-world pushing also needs extra force to overcome surface friction.',
      },
    ],
  },

  'eng-gravity': {
    seoTitle: `Calculate Gravitational Force of Two Masses | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate gravitational force of two masses in Newtons across center-to-center distance in meters using Newton’s law.',
    introDescription:
      'Exploring orbital mechanics, astronomy homework, or planetary attraction becomes approachable once you calculate gravitational force of two masses using Newton’s universal law of gravitation. Enter both body masses in kilograms—supporting scientific notation such as 5.97e24 for planets or stars—along with exact center-to-center separation distance in meters. Observing the inverse-square falloff immediately illustrates how rapidly mutual gravitational pull weakens as orbital distance widens across space.',
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
        q: 'Should distance be measured from surfaces or object centers?',
        a: 'Always measure center-to-center distance; for something resting on Earth’s surface, use Earth’s radius (~6,371,000 meters).',
      },
      {
        q: 'Can I type large astronomical numbers in scientific notation?',
        a: 'Yes, engineering notation such as 5.97e24 or 1.989e30 works directly inside both mass fields.',
      },
      {
        q: 'How much does gravity drop if orbital distance doubles?',
        a: 'Because distance is squared in the denominator, doubling separation reduces gravitational pull to one-quarter.',
      },
    ],
  },

  'eng-ideal-gas': {
    seoTitle: `How to Calculate Gas Pressure Using PV = nRT | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate gas pressure using PV = nRT in atmospheres from gas moles, Kelvin temperature, and container volume in liters.',
    introDescription:
      'Checking chemistry lab reactions or sizing compressed industrial gas cylinders starts with knowing how to calculate gas pressure using PV = nRT cleanly and reliably. Enter the exact quantity of gas in moles, absolute temperature in Kelvin, and container volume in liters to compute pressure in atmospheres (atm). Remembering to convert Celsius into Kelvin beforehand keeps every thermodynamics estimate consistent across experiments.',
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
        q: 'How do I convert Celsius temperatures to Kelvin before calculating?',
        a: 'Add 273.15 to your Celsius reading—for example, 25°C becomes 298.15 K.',
      },
      {
        q: 'How can I convert output atmospheres (atm) into kilopascals?',
        a: 'Multiply pressure in atmospheres by 101.325 to get kilopascals (kPa) or by 14.696 for psi.',
      },
      {
        q: 'When do real gases stop matching the Ideal Gas Law closely?',
        a: 'At very high pressures or low temperatures near condensation, molecular attraction causes real gases to deviate.',
      },
    ],
  },

  'eng-reynolds': {
    seoTitle: `How to Calculate Reynolds Number for Pipe Flow | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate Reynolds number for pipe flow from density, velocity, diameter, and dynamic viscosity to identify laminar or turbulent flow.',
    introDescription:
      'Predicting friction loss, valve erosion, and heat transfer inside industrial piping begins with knowing how to calculate Reynolds number for pipe flow accurately. Enter fluid mass density in kg/m³, average stream velocity in m/s, internal pipe diameter in meters, and dynamic viscosity in Pa·s. Seeing immediately whether flow sits below 2,300 (laminar) or above 4,000 (turbulent) guides pump sizing and mixing design cleanly.',
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
        q: 'What dynamic viscosity should I use for room-temperature water?',
        a: 'Fresh water at 20°C has a dynamic viscosity of roughly 0.001 Pa·s (1 centipoise).',
      },
      {
        q: 'Why does Reynolds number have no measurement units?',
        a: 'All mass, length, and time units in numerator and denominator cancel out completely, leaving a pure ratio.',
      },
      {
        q: 'How can an engineer shift turbulent pipe flow back toward laminar?',
        a: 'Reducing fluid velocity, narrowing pipe diameter, or increasing fluid viscosity lowers the Reynolds number below 2,300.',
      },
    ],
  },

  'eng-thermal-expansion': {
    seoTitle: `How to Calculate Thermal Expansion of Metal | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate thermal expansion of metal beams, rails, and pipes in meters and millimeters from length, coefficient, and ΔT.',
    introDescription:
      'Designing expansion joints for steel bridges, long industrial pipelines, or aluminum building facades depends on knowing how to calculate thermal expansion of metal across seasonal temperature swings. Enter original starting length in meters, the material’s linear coefficient (×10⁻⁶ / °C), and total temperature change in Celsius. Reading elongation in both meters and millimeters prevents structural warping and sheared fasteners during peak summer heat.',
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
        q: 'What expansion coefficients apply to steel, copper, and aluminum?',
        a: 'Typical handbook values are roughly 12 for carbon steel, 17 for copper, and 23 for aluminum (×10⁻⁶ / °C).',
      },
      {
        q: 'Why type 12 instead of 0.000012 for steel?',
        a: 'The calculator applies the 10⁻⁶ multiplier automatically so standard reference numbers enter quickly without counting zeros.',
      },
      {
        q: 'Can negative temperature change model winter contraction?',
        a: 'Yes, entering a negative ΔT returns negative elongation showing exact shrinkage in millimeters.',
      },
    ],
  },

  'eng-projectile-range': {
    seoTitle: `How to Calculate Projectile Motion Range | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate projectile motion range in meters from initial launch velocity, angle in degrees, and gravity.',
    introDescription:
      'Analyzing sports throws, water fountain jets, or introductory physics ballistics starts with learning how to calculate projectile motion range over level ground. Enter initial launch speed in meters per second, elevation angle in degrees, and local gravitational acceleration in m/s². Testing angles side by side quickly confirms why 45 degrees achieves maximum theoretical horizontal distance in the absence of drag.',
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
        q: 'Why does a 45-degree launch angle travel farthest on flat ground?',
        a: 'At 45 degrees, sin(2θ) reaches its peak value of 1.0, balancing flight time against horizontal speed ideally.',
      },
      {
        q: 'Do 30-degree and 60-degree launches land at the exact same distance?',
        a: 'Yes, without air resistance, complementary angles that add to 90 degrees yield identical horizontal ranges.',
      },
      {
        q: 'Does this range equation account for wind or air drag?',
        a: 'No, it computes classic vacuum trajectory assuming equal launch and landing heights.',
      },
    ],
  },

  'eng-centripetal-force': {
    seoTitle: `How to Calculate Centripetal Force in Turn | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate centripetal force in turn maneuvers in Newtons from moving mass, speed in m/s, and curve radius in meters.',
    introDescription:
      'Evaluating highway ramp curves, centrifuge rotors, or amusement ride loads requires knowing how to calculate centripetal force in turn geometry accurately. Enter turning mass in kilograms, tangential speed in meters per second, and curve radius in meters to find inward force in Newtons. Because speed is squared in the numerator, even modest speeding through a tight bend multiplies lateral grip demand sharply.',
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
        q: 'Why does a tighter turn radius increase skidding danger?',
        a: 'Cutting curve radius in half doubles the inward tire force required to hold the vehicle on the road.',
      },
      {
        q: 'What supplies centripetal force for cars versus orbiting satellites?',
        a: 'Road tire friction or banked pavement supplies it for vehicles, while gravity supplies it for satellites.',
      },
      {
        q: 'Why must turn radius always stay greater than zero?',
        a: 'Zero radius would represent an infinitely sharp corner requiring mathematically infinite inward force.',
      },
    ],
  },

  'eng-momentum': {
    seoTitle: `How to Calculate Linear Momentum kg m/s | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate linear momentum kg m/s from mass in kilograms and velocity in m/s for collision and impulse analysis.',
    introDescription:
      'Studying vehicle impacts, rocket propulsion exhaust, or elastic billiard collisions starts with knowing how to calculate linear momentum kg m/s reliably for any moving body. Enter an object’s mass in kilograms along with velocity in meters per second to compute directional momentum in standard SI units. Because total momentum is conserved inside closed systems, comparing before-and-after values makes collision physics easy to verify.',
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
        q: 'How are kg·m/s and Newton-seconds (N·s) connected?',
        a: 'They are equivalent SI units—1 Newton of force applied for 1 second changes momentum by exactly 1 kg·m/s.',
      },
      {
        q: 'How is linear momentum different from kinetic energy?',
        a: 'Momentum is a directional vector scaling linearly with speed (m × v), while kinetic energy is a scalar scaling with v².',
      },
      {
        q: 'Can velocity be negative to show opposite travel direction?',
        a: 'Yes, negative velocity reverses the sign of momentum so rebound collisions stay consistent.',
      },
    ],
  },

  'eng-torque': {
    seoTitle: `How to Calculate Torque in Newton Meters | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate torque in Newton meters (N·m) from applied force in Newtons and lever arm length in meters.',
    introDescription:
      'Tightening wheel lugs, sizing robotic actuator joints, or balancing mechanical levers becomes effortless once you know how to calculate torque in Newton meters accurately. Enter perpendicular applied force in Newtons alongside lever arm distance from the pivot point in meters to compute rotational moment in N·m immediately. Using a longer wrench arm multiplies turning leverage cleanly without needing extra hand pull force.',
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
        q: 'How do I enter a wrench measured in centimeters?',
        a: 'Divide centimeters by 100 first—a 35 cm handle enters as 0.35 meters.',
      },
      {
        q: 'What if force is applied at an angle instead of 90 degrees?',
        a: 'Multiply applied force by sin(angle) before entering so only the perpendicular turning component counts.',
      },
      {
        q: 'How do Newton-meters convert into foot-pounds (lb-ft)?',
        a: 'Multiply N·m by 0.73756 to get approximate tightening torque in lb-ft.',
      },
    ],
  },

  'eng-frequency-period': {
    seoTitle: `How to Convert Frequency Hz to Period Time | ${SITE_NAME}`,
    metaDescription:
      'Learn how to convert frequency Hz to period time in seconds and milliseconds cleanly for oscillators, signals, and AC waves.',
    introDescription:
      'Setting oscilloscope timebases, checking audio tones, or verifying AC mains cycles starts with knowing how to convert frequency Hz to period time accurately. Type oscillation rate in Hertz (cycles per second) to view the exact duration of one complete wave cycle in both seconds and milliseconds. Because period and frequency are reciprocals, doubling Hertz cuts cycle duration exactly in half.',
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
        q: 'Can I convert a known period in seconds back into Hertz?',
        a: 'Yes, because f = 1 / T, typing a period like 0.02 seconds returns its reciprocal frequency of 50 Hz.',
      },
      {
        q: 'How do kilohertz (kHz) and megahertz (MHz) enter in Hertz?',
        a: 'Multiply kHz by 1,000 or MHz by 1,000,000 before entering—for example, 1 kHz is 1,000 Hz.',
      },
      {
        q: 'What is the cycle period of 60 Hz mains electricity?',
        a: 'At 60 Hz, one full wave cycle lasts about 0.0167 seconds, or 16.67 milliseconds.',
      },
    ],
  },

  'eng-wave-speed': {
    seoTitle: `How to Calculate Wave Speed from Frequency | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate wave speed from frequency in Hertz and wavelength in meters for sound, ocean, and radio waves.',
    introDescription:
      'Analyzing musical instrument acoustics, ocean swells, or radio transmission lines requires knowing how to calculate wave speed from frequency and measured wavelength accurately. Enter cycle frequency in Hertz (Hz) alongside crest-to-crest spatial wavelength in meters to compute propagation velocity in meters per second (m/s). Keeping inputs strictly in Hertz and meters works seamlessly across both mechanical sound waves and electromagnetic radiation.',
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
        q: 'Does wave frequency change when entering water or glass?',
        a: 'No, source frequency remains constant while wave speed and wavelength shorten together in denser media.',
      },
      {
        q: 'How do I enter nanometer light wavelengths in meters?',
        a: 'Use scientific notation such as 5e-7 meters for 500 nm visible green light.',
      },
      {
        q: 'What speed do electromagnetic waves travel in vacuum?',
        a: 'Multiplying radio or light frequency by its vacuum wavelength always equals roughly 2.998 × 10⁸ m/s.',
      },
    ],
  },

  'eng-decibel': {
    seoTitle: `How to Convert Sound Intensity to Decibels | ${SITE_NAME}`,
    metaDescription:
      'Discover how to convert sound intensity to decibels (dB) from acoustic power density in W/m² above the human hearing threshold.',
    introDescription:
      'Evaluating workplace noise levels, speaker power, or acoustics labs gets much easier once you know how to convert sound intensity to decibels accurately. Enter acoustic intensity in Watts per square meter—supporting scientific notation like 1e-4—to compute logarithmic sound level in decibels (dB) relative to the 10⁻¹² W/m² human hearing threshold. Logarithmic scaling compresses trillions of intensity steps into everyday numbers.',
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
        q: 'How many decibels does multiplying sound intensity by 10 add?',
        a: 'Every tenfold jump in intensity adds exactly 10 dB—for example, moving from 1e-4 to 1e-3 W/m² raises 80 dB to 90 dB.',
      },
      {
        q: 'Does 0 dB mean complete silence with zero acoustic energy?',
        a: 'No, 0 dB marks the standard 10⁻¹² W/m² reference threshold of typical healthy human hearing.',
      },
      {
        q: 'Why must sound intensity stay strictly greater than zero?',
        a: 'Logarithms are undefined for zero or negative numbers, and physical sound power is always positive.',
      },
    ],
  },

  'eng-coulomb': {
    seoTitle: `How to Calculate Electrostatic Force Coulombs | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate electrostatic force Coulombs law in Newtons between two point charges separated by distance in meters.',
    introDescription:
      'Solving electromagnetism homework or checking static charged particle interactions starts with learning how to calculate electrostatic force Coulombs law cleanly in SI units. Enter both point charges in Coulombs—using e-notation such as 2e-6 for microcoulombs—along with exact center-to-center distance in meters to find force magnitude in Newtons. Like gravity, electrostatic attraction or repulsion drops off steeply by an inverse-square distance rule.',
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
        q: 'How should I type microcoulombs (µC) or nanocoulombs (nC)?',
        a: 'Use scientific notation—enter 4e-6 for 4 µC or 2e-9 for 2 nC directly in the charge fields.',
      },
      {
        q: 'How do charge signs determine attraction versus repulsion?',
        a: 'Opposite signs pull toward each other while identical signs push apart, with identical Newton force magnitude.',
      },
      {
        q: 'How do I convert spacing from centimeters into meters?',
        a: 'Divide centimeters by 100—for instance, 5 cm enters as 0.05 meters.',
      },
    ],
  },

  'eng-radioactive-decay': {
    seoTitle: `How to Calculate Radioactive Half Life Decay | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate radioactive half life decay remaining mass in grams from starting sample weight and elapsed half-lives.',
    introDescription:
      'Studying nuclear physics, radiocarbon dating, or medical isotope decay timelines gets straightforward once you know how to calculate radioactive half life decay accurately. Enter starting sample mass in grams alongside the total number of elapsed half-life intervals—either whole or fractional—to compute remaining undecayed mass immediately. Each completed half-life cuts remaining radioactive material strictly in half along a smooth exponential decay curve.',
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
        q: 'Can elapsed half-lives be a decimal like 1.5 or 2.5?',
        a: 'Yes, divide total elapsed time by one half-life length to enter exact fractional half-lives.',
      },
      {
        q: 'Will remaining mass ever reach exactly zero?',
        a: 'Mathematically, repeated halving approaches zero asymptotically without hitting it, though trace activity eventually fades into background levels.',
      },
      {
        q: 'Can I enter starting activity in Becquerels instead of grams?',
        a: 'Yes, because the 0.5^n decay factor is unitless, any starting unit yields remaining quantity in that same unit.',
      },
    ],
  },

  'eng-density': {
    seoTitle: `How to Calculate Density from Mass and Volume | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate density from mass and volume in kg/m³ for metals, liquids, and engineering materials in seconds.',
    introDescription:
      'Identifying unknown alloys, checking concrete batches, or estimating shipping weight begins with knowing how to calculate density from mass and volume in standard SI units. Enter material mass in kilograms alongside occupied volume in cubic meters to calculate bulk density in kg/m³ right away. Comparing your calculated value against water (1,000 kg/m³) immediately predicts whether a solid floats or sinks.',
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
        q: 'How do I convert density from kg/m³ into g/cm³?',
        a: 'Divide kg/m³ by 1,000—for instance, aluminum at 2,700 kg/m³ equals 2.70 g/cm³.',
      },
      {
        q: 'How do liters convert into cubic meters (m³)?',
        a: 'Divide liters by 1,000, so 250 liters enters as 0.25 m³.',
      },
      {
        q: 'What are typical densities for water, aluminum, and steel?',
        a: 'Fresh water sits near 1,000 kg/m³, aluminum around 2,700 kg/m³, and structural steel near 7,850 kg/m³.',
      },
    ],
  },

  'eng-specific-heat': {
    seoTitle: `How to Calculate Heat Energy Q = mcΔT | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate heat energy Q = mcΔT in Joules from substance mass, specific heat capacity, and Celsius temperature change.',
    introDescription:
      'Sizing boiler heaters, thermal storage tanks, or chemistry calorimetry setups depends on knowing how to calculate heat energy Q = mcΔT cleanly. Enter sample mass in kilograms, specific heat capacity in J/(kg·°C), and temperature change in Celsius to compute absorbed or released thermal energy in Joules. Water’s high 4,184 J/kg·°C capacity explains why heating water takes far more energy than heating metal.',
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
        q: 'Why does water have such a high specific heat of 4,184 J/kg·°C?',
        a: 'Hydrogen bonds between water molecules absorb substantial heat before temperature rises, making water an effective coolant.',
      },
      {
        q: 'Is temperature change in Celsius identical to Kelvin change?',
        a: 'Yes, one degree Celsius spans the exact same increment as one Kelvin, so ΔT matches on both scales.',
      },
      {
        q: 'Does Q = mcΔT include energy used for boiling or melting?',
        a: 'No, phase transitions require separate latent heat calculations because temperature pauses while state changes.',
      },
    ],
  },

  'eng-pendulum': {
    seoTitle: `How to Calculate Simple Pendulum Period | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate simple pendulum period in seconds from string length in meters and gravitational acceleration cleanly.',
    introDescription:
      'Calibrating mechanical clock rods or verifying harmonic motion lab data gets fast once you know how to calculate simple pendulum period from rod length alone. Enter pivot-to-bob length in meters and local gravitational acceleration in m/s² to compute exact full swing duration in seconds. Surprisingly, bob weight cancels out completely for small swings, leaving length and gravity in sole control.',
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
        q: 'Why does hanging a heavier bob not change pendulum swing time?',
        a: 'Both gravitational pull and inertia scale identically with mass, causing mass to cancel out of small-angle swing timing.',
      },
      {
        q: 'What string length gives a 1-second full oscillation on Earth?',
        a: 'Under 9.8 m/s² gravity, a pendulum about 0.248 meters (24.8 cm) long completes one cycle per second.',
      },
      {
        q: 'Does this formula stay exact if a pendulum swings past 30 degrees?',
        a: 'Large swing arcs take slightly longer than small-angle theory predicts because restoring force grows nonlinearly.',
      },
    ],
  },

  'eng-hookes-law': {
    seoTitle: `How to Calculate Spring Force Hookes Law | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate spring force Hookes law in Newtons from spring stiffness constant (N/m) and stretch distance in meters.',
    introDescription:
      'Testing vehicle suspension coils, hanging mechanical scales, or industrial tension latches starts with learning how to calculate spring force Hookes law accurately inside a spring’s elastic range. Enter coil stiffness constant in Newtons per meter (N/m) along with compression or stretch displacement in meters to compute restoring force in Newtons. Checking elastic restoring force prevents overloading steel coils past permanent bending limits.',
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
        q: 'How do I enter spring compression measured in millimeters or centimeters?',
        a: 'Divide centimeters by 100 or millimeters by 1,000 so displacement enters strictly in meters.',
      },
      {
        q: 'When does a metal coil stop obeying Hooke’s Law linearly?',
        a: 'Once stretched beyond its elastic yield point, the coil bends permanently and force no longer scales linearly.',
      },
      {
        q: 'How do I calculate elastic potential energy stored in the stretched spring?',
        a: 'Multiply 0.5 × Spring Constant × Displacement² to find stored mechanical energy in Joules.',
      },
    ],
  },

  'eng-stress-strain': {
    seoTitle: `How to Calculate Mechanical Stress in MPa | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate mechanical stress in MPa and Pascals from axial force in Newtons and member cross-sectional area in m².',
    introDescription:
      'Checking whether steel tie rods, bolts, or structural columns stay well below yield strength starts with knowing how to calculate mechanical stress in MPa cleanly. Enter axial tension or compression force in Newtons alongside cross-sectional area in square meters to read normal stress in both Pascals and Megapascals. Comparing computed MPa against material yield stress makes structural safety factors transparent.',
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
        q: 'How do I convert cross-sectional area from mm² to m²?',
        a: 'Divide square millimeters by 1,000,000—for example, 2,000 mm² equals 0.002 m².',
      },
      {
        q: 'How does 25 MPa compare to typical mild structural steel yield strength?',
        a: 'Standard A36 carbon steel yields around 250 MPa, meaning 25 MPa leaves a wide 10:1 safety margin.',
      },
      {
        q: 'What is the relationship between Pascals and Megapascals?',
        a: 'One Megapascal (MPa) equals exactly 1,000,000 Pascals, or 1 Newton per square millimeter (N/mm²).',
      },
    ],
  },

  'eng-refractive-index': {
    seoTitle: `How to Calculate Angle of Refraction Snells | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate angle of refraction Snells law in degrees from refractive indices n₁, n₂, and incoming beam angle.',
    introDescription:
      'Designing camera lenses, optical fibers, or prism lab demonstrations starts with learning how to calculate angle of refraction Snells law accurately. Enter the incident medium index n₁ (1.0 for air), transmitting medium index n₂ (such as 1.33 for water or 1.5 for glass), and angle of incidence in degrees. You can also test steep dense-to-air rays to spot total internal reflection immediately.',
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
        q: 'Why does the output sometimes say Total Internal Reflection?',
        a: 'When light travels from denser to less-dense media past the critical angle, no ray exits and all light reflects inside.',
      },
      {
        q: 'Are optical angles measured from the glass surface or the normal line?',
        a: 'Snell’s Law measures both incidence and refraction angles from the perpendicular normal line to the surface.',
      },
      {
        q: 'What are standard refractive indices for water, glass, and diamond?',
        a: 'Pure water sits near 1.333, crown glass around 1.50 to 1.52, and diamond approximately 2.417.',
      },
    ],
  },

  'eng-doppler-effect': {
    seoTitle: `How to Calculate Doppler Frequency Shift Hz | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate Doppler frequency shift Hz for approaching or receding sound sources using wave speed and emitter velocity.',
    introDescription:
      'Explaining why an emergency ambulance siren pitches noticeably higher as it races toward you and drops suddenly after passing begins with knowing how to calculate Doppler frequency shift Hz accurately. Enter stationary emitted source frequency in Hertz, sound wave speed in the medium (343 m/s in 20°C air), and emitter velocity in m/s. Entering negative emitter velocity models receding sound sources just as easily.',
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
        q: 'How do I calculate observed pitch when a siren moves away?',
        a: 'Enter a negative speed in Source Speed (such as −20 m/s) to lower observed frequency accurately.',
      },
      {
        q: 'Why does matching or exceeding sound speed trigger a warning?',
        a: 'At Mach 1 or faster, wavefronts stack into a shockwave where the standard acoustic Doppler denominator hits zero.',
      },
      {
        q: 'Can this solver model underwater sonar Doppler shifts?',
        a: 'Yes, update Speed of Sound to about 1,480 m/s for freshwater or 1,500 m/s for ocean water.',
      },
    ],
  },

  'eng-thermal-conductivity': {
    seoTitle: `How to Calculate Conductive Heat Transfer | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate conductive heat transfer in Watts across walls and panels using thermal conductivity, area, thickness, and ΔT.',
    introDescription:
      'Comparing uninsulated brick walls against modern rigid foam panels for HVAC heat-load estimates requires knowing how to calculate conductive heat transfer in Watts via Fourier’s Law. Enter material thermal conductivity k in W/(m·K), exposed surface area in square meters, temperature difference in Celsius, and wall thickness in meters. Testing thicker insulation or lower-k materials immediately reveals how many Watts of heat escape outdoors.',
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
        q: 'How much lower is foam insulation thermal conductivity than brick?',
        a: 'Polystyrene or fiberglass insulation runs near 0.03–0.04 W/m·K, blocking roughly twenty times more heat than standard brick.',
      },
      {
        q: 'Does doubling wall thickness cut heat loss in half?',
        a: 'Yes, steady-state conductive heat flow is inversely proportional to barrier thickness.',
      },
      {
        q: 'Why can temperature difference enter in Celsius when k uses Kelvin?',
        a: 'Temperature differences are numerically identical on Celsius and Kelvin scales because both share identical degree spacing.',
      },
    ],
  },

  'eng-reynolds-kinematic': {
    seoTitle: `Calculate Reynolds Number Kinematic Viscosity | ${SITE_NAME}`,
    metaDescription:
      'Find out how to calculate Reynolds number kinematic viscosity pipe flow regimes from speed (m/s), bore diameter (m), and ν (m²/s).',
    introDescription:
      'When hydraulic tables list industrial oil or water viscosity in centistokes instead of dynamic Pa·s, it is much faster to calculate Reynolds number kinematic viscosity directly without looking up fluid density separately. Enter average stream velocity in meters per second, circular pipe internal diameter in meters, and kinematic viscosity in m²/s. The dimensionless output classifies laminar, transitional, and turbulent pipe flow regimes instantaneously.',
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
        q: 'How do centistokes (cSt) convert into m²/s kinematic viscosity?',
        a: 'Multiply centistokes by 10⁻⁶—for example, 100 cSt hydraulic oil converts to 0.0001 m²/s.',
      },
      {
        q: 'What is the kinematic viscosity of 20°C fresh water?',
        a: 'Fresh water at 20°C sits near 1.004e-6 m²/s, very close to 1 centistoke.',
      },
      {
        q: 'Where do transitional and turbulent pipe flow boundaries begin?',
        a: 'Transitional pipe flow spans Re 2,300 to 4,000, turning fully turbulent above 4,000.',
      },
    ],
  },

  'eng-torque-power': {
    seoTitle: `How to Convert Torque and RPM to Power kW | ${SITE_NAME}`,
    metaDescription:
      'Discover how to convert torque and RPM to power kW and Watts accurately for electric motors, gearboxes, and engine shafts.',
    introDescription:
      'Comparing high-torque industrial gearmotors against fast-spinning CNC spindles starts with knowing how to convert torque and RPM to power kW accurately before choosing a drive motor. Enter shaft twisting torque in Newton-meters (N·m) alongside rotational speed in revolutions per minute (RPM) to calculate mechanical shaft power in both Watts and kilowatts. Converting RPM into radians per second links twisting force and speed cleanly.',
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
        q: 'How do I convert kilowatt shaft power into horsepower?',
        a: 'Divide kilowatts by 0.7457 (or multiply kW by 1.341) to obtain mechanical horsepower.',
      },
      {
        q: 'Why can two motors have identical kW at very different RPM?',
        a: 'Low-RPM geared motors trade speed for heavy twisting torque, while fast motors deliver equal power with less torque.',
      },
      {
        q: 'Should gearbox efficiency be applied after computing shaft Watts?',
        a: 'Yes, multiply output power by drivetrain efficiency (often 0.90 to 0.96) when sizing driven machinery.',
      },
    ],
  },

  'eng-bernoulli': {
    seoTitle: `How to Calculate Bernoulli Pipe Pressure Drop | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate Bernoulli pipe pressure drop in Pascals when incompressible water speeds up through narrowed piping.',
    introDescription:
      'Analyzing venturi nozzles, agricultural irrigation reducers, or horizontal municipal water mains requires knowing how to calculate Bernoulli pipe pressure drop cleanly across changing diameters. Enter upstream static pressure in Pascals, initial stream speed in m/s, and narrowed downstream velocity in m/s to compute resulting static pressure P2 for fresh water. Watching static pressure fall as velocity accelerates illustrates conservation of hydraulic energy immediately.',
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
        q: 'What does a negative downstream pressure P2 signal in a pipe?',
        a: 'Pressure dropping below atmospheric or vapor pressure warns of suction or destructive cavitation bubbles in water lines.',
      },
      {
        q: 'How do I convert bar or kPa into Pascals before entering?',
        a: 'Multiply kPa by 1,000 or bar by 100,000—for example, 1.5 bar equals 150,000 Pascals.',
      },
      {
        q: 'Which fluid density does this horizontal Bernoulli solver assume?',
        a: 'It models steady, frictionless fresh water at standard density 1,000 kg/m³.',
      },
    ],
  },

  'eng-linear-thermal-expansion': {
    seoTitle: `How to Calculate Final Thermal Expanded Length | ${SITE_NAME}`,
    metaDescription:
      'See how to calculate final thermal expanded length in meters plus mm growth for heated metal bars, pipes, and steel rails.',
    introDescription:
      'Fabricating precision machinery drive shafts, welded railway sections, or hot-water copper risers requires knowing how to calculate final thermal expanded length before cutting mounting clearances. Enter the cold starting reference length in meters, material expansion coefficient (10⁻⁶ / °C), and total temperature change in Celsius. Reading both absolute millimeter elongation and expanded total bar length helps engineers size expansion gaps with confidence.',
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
        q: 'Why do steel bridges and railways build in expansion gaps?',
        a: 'Small millimeter growth per section adds up across long spans and can buckle restrained metal during summer heat.',
      },
      {
        q: 'Does Final Length also calculate cold-weather shrinkage?',
        a: 'Yes, entering a negative temperature change such as −25°C yields contracted final length below initial span.',
      },
      {
        q: 'How does brass expansion compare against carbon steel?',
        a: 'Brass expands roughly 19 × 10⁻⁶ /°C compared to carbon steel near 12 × 10⁻⁶ /°C, making them ideal for bimetallic thermostats.',
      },
    ],
  },
};
