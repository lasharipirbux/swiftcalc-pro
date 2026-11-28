import { SITE_NAME } from '../config/site';

export interface ConstructionCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const constructionSeoFullMap: Record<string, ConstructionCalculatorSeoEntry> = {
  'constr-brick-calc': {
    seoTitle: `Free Brick Calculator – Wall Brick Count & Wastage | ${SITE_NAME}`,
    metaDescription:
      'Estimate total bricks needed for masonry walls from length, height, and breakage allowance using our free Brick Calculator.',
    howToUseSteps: [
      'Type horizontal masonry span into the Wall Length (feet) field.',
      'Enter vertical wall elevation inside Wall Height (feet).',
      'Set breakage and half-cut allowance in Wastage Percentage (%) to view net brick demand.',
    ],
    formulaExplanation:
      'Single-brick 4.5-inch masonry walls in South Asian construction consume roughly 7 standard modular bricks per square foot including mortar joints. Multiplying wall face area by 7 and adding a breakage allowance prevents mid-build material shortages. Formula: Wall Area = Wall Length × Wall Height; Total Bricks = ceil(Wall Area × 7 × (1 + Wastage Percentage / 100)).',
    practicalExample:
      'Building a partition with Wall Length (feet) = 30 and Wall Height (feet) = 10 creates 300 sq ft of Wall Area (2,100 base bricks); adding Wastage Percentage (%) = 5% outputs 2,205 bricks.',
    faqs: [
      {
        q: 'How do I adjust Brick Calculator estimates for a thicker 9-inch double wall?',
        a: 'Double the resulting brick count (roughly 13.5 to 14 bricks per square foot) when laying 9-inch load-bearing masonry.',
      },
      {
        q: 'Should window and door openings be subtracted before entering Wall Length (feet)?',
        a: 'Yes—subtract large door or window areas first by reducing effective Wall Length (feet) slightly, or keep them in as extra safety margin.',
      },
      {
        q: 'What Wastage Percentage (%) works best for kiln-fired bricks?',
        a: 'Contractors typically allow 5% for first-class machine bricks and 7% to 10% for hand-molded bricks with chipping.',
      },
    ],
  },

  'constr-concrete-calc': {
    seoTitle: `Free Concrete Calculator (Mix Ratio 1:2:4) – Cement, Sand & Crush | ${SITE_NAME}`,
    metaDescription:
      'Compute 50kg cement bags, sand, and crush aggregate for 1:2:4 concrete volume with our free Concrete Calculator (Mix Ratio 1:2:4).',
    howToUseSteps: [
      'Enter finished poured volume inside Wet Concrete Volume (Cubic Feet).',
      'Read the 50kg cement bag count in the primary concrete readout.',
      'Inspect the sand and crush cubic feet figures listed right underneath.',
    ],
    formulaExplanation:
      'Dry raw cement, sand, and crushed aggregate shrink by roughly one-third when mixed with water because fine particles fill voids between coarse stone, requiring a 1.54× dry volume bulking factor. Under 1:2:4 nominal M15 concrete (7 total parts), cement takes 1/7th divided by 1.25 cu ft per 50kg bag, sand takes 2/7ths, and crush takes 4/7ths. Formula: Dry Volume = Wet Concrete Volume × 1.54; Cement Bags = ceil((Dry Volume × 1/7) / 1.25); Sand = Dry Volume × 2/7; Crush = Dry Volume × 4/7.',
    practicalExample:
      'Pouring Wet Concrete Volume (Cubic Feet) = 100 expands to 154 cu ft dry material, requiring 18 Cement Bags (50kg), Sand: 44 cu ft, and Crush: 88 cu ft.',
    faqs: [
      {
        q: 'Where is a 1:2:4 concrete mix ratio typically poured?',
        a: 'Nominal 1:2:4 (approx. M15/3000 psi) suits residential floor PCC beds, lintels, driveways, pathways, and light slabs.',
      },
      {
        q: 'Why multiply Wet Concrete Volume (Cubic Feet) by 1.54?',
        a: 'Dry powders and loose aggregate compact when hydrated, so 100 cu ft of poured wet slab consumes roughly 154 cu ft of unmixed dry ingredients.',
      },
      {
        q: 'How many cubic feet are inside one standard 50kg bag of Portland cement?',
        a: 'One packed 50kg cement bag occupies approximately 1.25 cubic feet (0.035 cubic meters) by civil engineering convention.',
      },
    ],
  },

  'constr-paint-calc': {
    seoTitle: `Free Paint Calculator – Wall Liters & Coat Coverage | ${SITE_NAME}`,
    metaDescription:
      'Calculate liters of interior or exterior paint needed across walls and multiple coats using our free Paint Calculator.',
    howToUseSteps: [
      'Type total paintable wall square footage into Wall Surface Area (sq ft).',
      'Enter planned application layers inside Number of Coats.',
      'Supply the tin manufacturer’s spread rating in Coverage per Liter (sq ft / liter).',
    ],
    formulaExplanation:
      'Multiplying net wall area by coat count yields total painted coverage area, which divides by each paint brand’s spread rate to avoid buying oversized drums or running short mid-room. Formula: Total Painted Area = Wall Surface Area × Number of Coats; Paint Needed (Liters) = (Wall Surface Area × Number of Coats) / Coverage per Liter.',
    practicalExample:
      'Painting Wall Surface Area (sq ft) = 500 with Number of Coats = 2 at Coverage per Liter (sq ft / liter) = 100 covers Total Painted Area: 1000 sq ft and requires 10.0 Liters.',
    faqs: [
      {
        q: 'What Coverage per Liter (sq ft / liter) do standard plastic emulsions offer?',
        a: 'Most matte and silk interior emulsions cover roughly 90 to 120 sq ft per liter per coat on smooth primed plaster.',
      },
      {
        q: 'Should primer be entered separately from finish coats?',
        a: 'Yes—calculate base primer separately at its lower porosity spread rate (often 70–85 sq ft/L) before computing finish Number of Coats.',
      },
      {
        q: 'Can rough textured walls reduce Coverage per Liter (sq ft / liter)?',
        a: 'Rough exterior stucco or unpainted plaster absorbs noticeably more paint, so lower Coverage per Liter to 60–75 sq ft/L.',
      },
    ],
  },

  'constr-tile-calc': {
    seoTitle: `Free Tile and Flooring Calculator – Boxes & Wastage Count | ${SITE_NAME}`,
    metaDescription:
      'Find exact floor or wall tile quantities including cutting wastage from room area using our free Tile and Flooring Calculator.',
    howToUseSteps: [
      'Enter floor dimensions multiplied together into Room Floor Area (sq ft).',
      'Type single-tile surface area inside Tile Size (sq ft per tile e.g. 4 for 2x2 ft).',
      'Specify diagonal or perimeter cutting loss in Wastage Percentage (%).',
    ],
    formulaExplanation:
      'Dividing floor area by one tile’s footprint finds theoretical coverage, then adding percentage wastage accounts for wall-edge trim cuts, corner notches around columns, and accidental breakage during laying. Formula: Base Tiles = Room Floor Area / Tile Size; Total Tiles = ceil(Base Tiles × (1 + Wastage Percentage / 100)).',
    practicalExample:
      'Tiling Room Floor Area (sq ft) = 300 with Tile Size (sq ft per tile e.g. 4 for 2x2 ft) = 4 produces Base Tiles: 75; adding Wastage Percentage (%) = 10% calls for 83 tiles.',
    faqs: [
      {
        q: 'What value should I type into Tile Size for common 24×24 inch or 12×24 inch tiles?',
        a: 'Enter 4 for 2×2 ft (24×24 in) porcelain slabs, 2 for 1×2 ft (12×24 in) tiles, and 1 for 1×1 ft ceramic squares.',
      },
      {
        q: 'When should Wastage Percentage (%) be bumped from 10% to 15%?',
        a: 'Select 15% when laying herringbone or 45-degree diagonal patterns, or in narrow hallways with frequent L-cuts.',
      },
      {
        q: 'Why is Total Tiles rounded upward to whole pieces?',
        a: 'Partial tiles still require cutting from a full fresh piece, and keeping 2–3 extra spares helps with future plumbing repairs.',
      },
    ],
  },

  'constr-steel-weight': {
    seoTitle: `Free Steel Bar Weight Calculator – Rebar kg Estimation | ${SITE_NAME}`,
    metaDescription:
      'Calculate steel reinforcement rebar weight in kilograms using d²/162 across bar lengths with our free Steel Bar Weight Calculator.',
    howToUseSteps: [
      'Enter rebar thickness in millimeters inside Bar Diameter (mm).',
      'Type cut or standard bundle length into Bar Length (meters).',
      'Input total piece count inside Number of Bars to get combined steel weight.',
    ],
    formulaExplanation:
      'Civil engineers derive deformed steel rebar mass from steel density (7,850 kg/m³) simplified into the industry-standard d²/162 unit-weight formula per linear meter. Multiplying unit weight by total bar length gives accurate procurement tonnage. Formula: Weight per Meter (kg/m) = (Bar Diameter²) / 162; Total Weight (kg) = [(d²) / 162] × Bar Length (m) × Number of Bars.',
    practicalExample:
      'Ordering Number of Bars = 10 of Bar Diameter (mm) = 12 at Bar Length (meters) = 12 uses 0.889 kg/m (144 / 162) to output a total steel mass of 106.67 kg.',
    faqs: [
      {
        q: 'How do I convert Pakistani Sootar bars (#3, #4, #6) into Bar Diameter (mm)?',
        a: '#3 bar equals ~10 mm (9.5 mm), #4 bar equals ~12 mm (12.7 mm), #6 equals ~19 mm (20 mm), and #8 equals ~25 mm.',
      },
      {
        q: 'Where does the constant 162 come from in (d²) / 162?',
        a: 'It simplifies (π/4 × d² × 1 m × 7850 kg/m³) after converting square millimeters to square meters.',
      },
      {
        q: 'What is the standard stock length of deformed steel bars?',
        a: 'Most rolling mills supply full rebar lengths in 12 meters (approx. 40 feet), which fits Bar Length (meters) directly.',
      },
    ],
  },

  'constr-slab-volume': {
    seoTitle: `Free Slab Area and Volume Calculator – Concrete cu ft & cu yds | ${SITE_NAME}`,
    metaDescription:
      'Calculate RCC roof slab square footage and concrete volume in cubic feet and cubic yards with our free Slab Area and Volume Calculator.',
    howToUseSteps: [
      'Enter full slab span inside Slab Length (feet).',
      'Type perpendicular slab width into Slab Width (feet).',
      'Input poured concrete depth in Slab Thickness (inches) to compute area and volume.',
    ],
    formulaExplanation:
      'Converting inch slab thickness into decimal feet (inches ÷ 12) lets you multiply directly with length and width in feet to compute cubic feet, then divide by 27 to convert into ready-mix cubic yards. Formula: Surface Area = Slab Length × Slab Width; Volume (cu ft) = Surface Area × (Slab Thickness / 12); Volume (cu yds) = Volume (cu ft) / 27.',
    practicalExample:
      'Pouring a Slab Length (feet) = 30 by Slab Width (feet) = 20 roof at Slab Thickness (inches) = 6 (0.5 ft) covers Surface Area: 600 sq ft and requires 300.0 cu ft (11.11 cu yds) of wet concrete.',
    faqs: [
      {
        q: 'What Slab Thickness (inches) is typical for residential RCC house roofs?',
        a: 'Single-story and two-story homes generally use 5 to 6 inches depending on room spans and structural drawings.',
      },
      {
        q: 'Does this slab volume include drop beams or concealed beams?',
        a: 'No—add down-stand beam volumes separately before ordering ready-mix concrete trucks.',
      },
      {
        q: 'How can I estimate cement bags after finding cubic feet here?',
        a: 'Copy the resulting cubic feet directly into the Concrete Calculator (Mix Ratio 1:2:4) to get exact cement, sand, and crush quantities.',
      },
    ],
  },

  'constr-plaster-calc': {
    seoTitle: `Free Plaster Calculator – Wall Mortar Cement & Sand | ${SITE_NAME}`,
    metaDescription:
      'Estimate cement bags and screened sand cubic feet for interior or exterior wall plaster using our free Plaster Calculator.',
    howToUseSteps: [
      'Type net masonry wall area inside Wall Surface Area (sq ft).',
      'Enter mortar coat depth in Plaster Thickness (inches).',
      'Input sand parts in Cement to Sand Ratio (e.g. 4 for 1:4) to calculate cement and sand.',
    ],
    formulaExplanation:
      'Wall plaster accounts for mortar filling uneven brick joints (1.35× surface factor) plus dry-to-wet sand bulking (1.33× dry factor) before splitting volume between cement and screened sand according to the chosen mix ratio. Formula: Wet Volume = Wall Surface Area × (Plaster Thickness / 12) × 1.35; Dry Volume = Wet Volume × 1.33; Cement Bags = ceil((Dry Volume × 1 / (1 + Ratio)) / 1.25).',
    practicalExample:
      'Plastering Wall Surface Area (sq ft) = 400 at Plaster Thickness (inches) = 0.5 with Cement to Sand Ratio (e.g. 4 for 1:4) = 4 calls for 5 Cement Bags and Sand: 24 cu ft.',
    faqs: [
      {
        q: 'What Plaster Thickness (inches) and ratio apply to interior walls vs ceilings?',
        a: 'Interior brick walls normally take 0.5 inch plaster at 1:4 or 1:5, whereas RCC ceilings use thinner 0.35–0.4 inch plaster at 1:3 or 1:4.',
      },
      {
        q: 'Why include a 1.35 joint-filling factor before the 1.33 dry mortar factor?',
        a: 'Rough brick faces and recessed mortar joints consume extra plaster beyond a smooth mathematical plane.',
      },
      {
        q: 'Should window and door areas be subtracted from Wall Surface Area (sq ft)?',
        a: 'Subtract openings larger than 5 sq ft for exact ordering, though small openings are often left in as reveal-plaster allowance.',
      },
    ],
  },

  'constr-excavation-calc': {
    seoTitle: `Free Excavation Volume Calculator – Earthwork cu ft & cu yds | ${SITE_NAME}`,
    metaDescription:
      'Measure pit or basement earthwork excavation volume in cubic feet and cubic yards with our free Excavation Volume Calculator.',
    howToUseSteps: [
      'Enter pit or plot span into Excavation Length (feet).',
      'Type perpendicular pit span inside Excavation Width (feet).',
      'Specify cut depth below grade in Excavation Depth (feet) to view total soil volume.',
    ],
    formulaExplanation:
      'Box excavation computes rectangular prism earthwork volume in cubic feet and converts into cubic yards (27 cu ft per cubic yard) to plan dumper trips, backhoe hours, and backfill quantities. Formula: Volume (cu ft) = Excavation Length × Excavation Width × Excavation Depth; Volume (cu yds) = Volume (cu ft) / 27.',
    practicalExample:
      'Digging a basement pit of Excavation Length (feet) = 40, Excavation Width (feet) = 30, and Excavation Depth (feet) = 5 totals 6,000 cu ft (222.2 cu yds) of excavated earth.',
    faqs: [
      {
        q: 'How much extra dumper capacity is needed after soil is dug out?',
        a: 'Excavated soil swells roughly 20% to 30% in loose volume once loosened from compacted ground.',
      },
      {
        q: 'Should working space around footings be added to Excavation Length (feet) and Width?',
        a: 'Yes—add 1 to 2 feet on each side for shuttering access and worker safety clearance.',
      },
      {
        q: 'How many cubic feet fit in a typical 10-wheeler dumper truck?',
        a: 'A standard dumper carries roughly 400 to 600 cubic feet depending on body height and load regulations.',
      },
    ],
  },

  'constr-marla-to-sqft': {
    seoTitle: `Free Marla to Square Feet Converter Calculator – Plot Area | ${SITE_NAME}`,
    metaDescription:
      'Convert Pakistani Marla and Kanal residential plot sizes into square feet and square yards using our free Marla to Square Feet Converter Calculator.',
    howToUseSteps: [
      'Enter Marla units inside the Marla input box.',
      'Add Kanal units inside the Kanal field (enter 0 if measuring purely in Marlas).',
      'View converted plot area in Square Feet and square yards (Gaz) right below.',
    ],
    formulaExplanation:
      'Standard revenue and survey measurement sets 1 Marla equal to 272.25 square feet (9 Karam × 9 Karam, where 1 Karam = 5.5 ft) and 1 Kanal equal to 20 Marlas (5,445 sq ft), while dividing square feet by 9 gives square yards (Gaz). Formula: Total Sq Ft = (Kanal × 20 × 272.25) + (Marla × 272.25); Sq Yards = Total Sq Ft / 9.',
    practicalExample:
      'Converting Marla = 5 and Kanal = 0 computes 5 × 272.25 = 1,361.25 Square Feet, equivalent to 151.3 sq yards.',
    faqs: [
      {
        q: 'Why do some housing societies treat 1 Marla as 225 or 250 sq ft instead of 272.25 sq ft?',
        a: 'In Pakistan, revenue records use 272.25 sq ft per Marla, whereas urban authorities like DHA and LDA often market 225 sq ft or 250 sq ft Marlas.',
      },
      {
        q: 'How many Square Feet equal 1 full Kanal?',
        a: 'At 272.25 sq ft per Marla, 1 Kanal (20 Marlas) equals exactly 5,445 square feet (605 sq yards).',
      },
      {
        q: 'How can I combine 1 Kanal and 5 Marlas in one calculation?',
        a: 'Type 1 in Kanal and 5 in Marla simultaneously to see their combined Square Feet total.',
      },
    ],
  },

  'constr-sqft-to-marla': {
    seoTitle: `Free Square Feet to Marla Converter Calculator – Plot Size | ${SITE_NAME}`,
    metaDescription:
      'Convert square feet land area into exact Kanal and Marla plots instantly with our free Square Feet to Marla Converter Calculator.',
    howToUseSteps: [
      'Type your measured plot area into Area in Square Feet.',
      'Inspect the split Kanal and Marla breakdown in the main display.',
      'Check Total Marlas listed directly underneath for decimal comparison.',
    ],
    formulaExplanation:
      'Dividing plot square footage by the revenue standard of 272.25 sq ft yields total Marlas; extracting whole multiples of 20 isolates complete Kanals and leaves the remaining Marla fraction. Formula: Total Marla = Area in Square Feet / 272.25; Kanal = floor(Total Marla / 20); Remaining Marla = Total Marla mod 20.',
    practicalExample:
      'Entering Area in Square Feet = 2250 divides 2,250 / 272.25 to output 0 Kanal, 8.26 Marla (Total Marlas: 8.26).',
    faqs: [
      {
        q: 'Why does 2,250 sq ft display 8.26 Marla instead of 10 Marla?',
        a: 'This converter uses the official 272.25 sq ft revenue Marla rather than the 225 sq ft urban housing-society Marla.',
      },
      {
        q: 'What Area in Square Feet converts to exactly 1 Kanal, 0.00 Marla?',
        a: 'Entering 5,445 in Area in Square Feet outputs exactly 1 Kanal, 0.00 Marla (20.00 Total Marlas).',
      },
      {
        q: 'Can I multiply plot length × width in feet first before entering here?',
        a: 'Yes—multiply front width by depth in feet (such as 50 × 90 = 4,500) and enter that product in Area in Square Feet.',
      },
    ],
  },

  'constr-boundary-wall': {
    seoTitle: `Free Boundary Wall Brick & Plaster Calculator – Perimeter Wall | ${SITE_NAME}`,
    metaDescription:
      'Calculate bricks and cement bags for 4.5-inch or 9-inch plot perimeter boundary walls using our free Boundary Wall Brick & Plaster Calculator.',
    howToUseSteps: [
      'Enter combined boundary length across all sides into Total Perimeter Length (feet).',
      'Type finished wall height above plinth inside Wall Height (feet).',
      'Select 9 inches (Double Brick) or 4.5 inches (Single Brick) under Wall Thickness.',
    ],
    formulaExplanation:
      'Double-brick 9-inch perimeter walls require approximately 13.5 bricks and 0.08 cement bags per sq ft (mortar plus plaster), whereas single-brick 4.5-inch partition walls use 7 bricks and 0.04 cement bags per sq ft. Formula: Wall Area = Total Perimeter Length × Wall Height; Bricks = ceil(Wall Area × Thickness Factor); Cement Bags = ceil(Wall Area × Mortar Factor).',
    practicalExample:
      'Building a Total Perimeter Length (feet) = 150 wall at Wall Height (feet) = 7 using Wall Thickness = 9 inches (Double Brick) covers 1,050 sq ft and estimates 14,175 Bricks and Approx 84 Cement Bags.',
    faqs: [
      {
        q: 'Should I subtract the driveway gate opening from Total Perimeter Length (feet)?',
        a: 'Yes—deduct 12 to 16 feet for your main gate opening so brick and cement estimates reflect solid masonry only.',
      },
      {
        q: 'Which Wall Thickness is recommended for outdoor plot boundary walls?',
        a: 'Use 9 inches (Double Brick) for freestanding exterior perimeter walls to resist wind load and soil settlement.',
      },
      {
        q: 'Does this include brick pillars along the boundary wall?',
        a: 'No—add protruding 9×9 or 13.5×13.5 inch structural piers separately using the Compound Wall Pillar Calculator.',
      },
    ],
  },

  'constr-water-tank': {
    seoTitle: `Free Water Tank Capacity Calculator – Liters & Gallons | ${SITE_NAME}`,
    metaDescription:
      'Calculate underground or rooftop water tank storage in liters, imperial gallons, and cubic feet with our free Water Tank Capacity Calculator.',
    howToUseSteps: [
      'Type internal tank span into the Length (feet) field.',
      'Enter perpendicular inside span in Width (feet).',
      'Input usable water depth inside Depth / Height (feet) to view capacity.',
    ],
    formulaExplanation:
      'Each cubic foot of internal tank volume holds 28.3168 liters (about 6.2288 imperial gallons). Multiplying inner tank dimensions directly gives cubic feet, which scales seamlessly into liters and gallons for home water planning. Formula: Volume (cu ft) = Length × Width × Depth; Liters = Volume (cu ft) × 28.3168; Imperial Gallons = Volume (cu ft) × 6.2288.',
    practicalExample:
      'Sizing an underground tank at Length (feet) = 8, Width (feet) = 6, and Depth / Height (feet) = 5 equals 240 cu ft, holding 6,796 Liters (1,495 Imperial Gallons).',
    faqs: [
      {
        q: 'Should I enter outside concrete dimensions or inside clear dimensions?',
        a: 'Always measure inside clear wall-to-wall dimensions and deduct ~6 inches from Depth / Height (feet) for float-valve freeboard.',
      },
      {
        q: 'Why does the result display Imperial Gallons instead of US Gallons?',
        a: 'Plumbing tanks across Pakistan and Commonwealth countries commonly rate 200-gallon or 500-gallon roof tanks in Imperial Gallons (~4.546 L/gal).',
      },
      {
        q: 'What tank capacity suits an average 5-person household?',
        a: 'At ~150 liters per person daily, a 1,500–2,000 liter overhead tank covers daily needs alongside a larger underground reserve.',
      },
    ],
  },

  'constr-septic-tank': {
    seoTitle: `Free Septic Tank Size Calculator – Resident Capacity | ${SITE_NAME}`,
    metaDescription:
      'Determine recommended residential septic tank volume in cubic feet and liters by household size with our free Septic Tank Size Calculator.',
    howToUseSteps: [
      'Enter total household or building occupants inside Number of Residents.',
      'Read recommended storage volume in cubic feet and liters immediately.',
    ],
    formulaExplanation:
      'Standard sanitary engineering guidelines allocate roughly 25 cubic feet of combined liquid and sludge detention capacity per permanent resident to allow safe anaerobic settling between desludging cycles. Formula: Required Volume (cu ft) = Number of Residents × 25; Volume (Liters) = Required Volume (cu ft) × 28.3168.',
    practicalExample:
      'Sizing a tank for Number of Residents = 8 allocates 8 × 25 = 200 cu ft (5,663 Liters) of septic storage volume.',
    faqs: [
      {
        q: 'Should I count future family growth or maximum bedroom capacity in Number of Residents?',
        a: 'Yes—sizing for 2 occupants per bedroom prevents premature overflow when guests stay or family size grows.',
      },
      {
        q: 'Does a septic tank require separate soakage pit drainage afterward?',
        a: 'Yes—clarified liquid effluent flows out of the septic chamber into a percolation soak pit or municipal sewer line.',
      },
      {
        q: 'How deep should a residential septic tank generally be built?',
        a: 'Maintain at least 4 to 5 feet of liquid depth plus 1 foot of gas venting clearance below the top slab.',
      },
    ],
  },

  'constr-roof-waterproofing': {
    seoTitle: `Free Roof Bitumen Waterproofing Calculator – Coating & Primer | ${SITE_NAME}`,
    metaDescription:
      'Estimate hot or cold bitumen kg and primer liters required to seal flat roofs with our free Roof Bitumen Waterproofing Calculator.',
    howToUseSteps: [
      'Enter total terrace or roof slab measurement in Roof Area (sq ft).',
      'Check estimated bitumen weight in kg alongside primer liters.',
    ],
    formulaExplanation:
      'Effective roof damp-proofing applies a thin penetrating bitumen primer coat (~0.05 L/sq ft) to seal concrete pores before spreading a thicker hot or elastomeric bitumen barrier (~0.25 kg/sq ft). Formula: Bitumen (kg) = ceil(Roof Area × 0.25); Primer (Liters) = ceil(Roof Area × 0.05).',
    practicalExample:
      'Treating a flat Roof Area (sq ft) = 1200 calculates 300 kg Bitumen & 60 L Primer.',
    faqs: [
      {
        q: 'Should parapet wall upturns be added into Roof Area (sq ft)?',
        a: 'Yes—add 6 to 12 inches of perimeter parapet height so moisture cannot seep behind the corner flashing.',
      },
      {
        q: 'Why apply Primer before spreading the main Bitumen layer?',
        a: 'Concrete dust prevents thick bitumen from bonding; low-viscosity primer binds dust and anchors the waterproof membrane.',
      },
      {
        q: 'Can this cover second-coat double waterproofing?',
        a: 'If applying two full cross-brushed bitumen coats, double the Roof Area (sq ft) or order 1.75× the bitumen kg shown.',
      },
    ],
  },

  'constr-skirting': {
    seoTitle: `Free Marble & Tile Skirting Calculator – Running Feet | ${SITE_NAME}`,
    metaDescription:
      'Calculate linear running feet and total square footage for wall-base marble or tile skirting with our free Marble & Tile Skirting Calculator.',
    howToUseSteps: [
      'Enter sum of all room wall lengths minus doorways inside Room Perimeter (feet).',
      'Type strip height inside Skirting Height (inches).',
      'Read total running feet alongside equivalent square footage for cutting marble slabs.',
    ],
    formulaExplanation:
      'Baseboard skirting wraps room walls horizontally in running feet while marble yards and tile dealers frequently price stone by square feet; multiplying perimeter by height divided by 12 converts linear trim into area. Formula: Running Feet = Room Perimeter; Skirting Area (sq ft) = Room Perimeter × (Skirting Height / 12).',
    practicalExample:
      'Trimming a bedroom with Room Perimeter (feet) = 70 and Skirting Height (inches) = 4 outputs 70 Running Feet (23.3 sq ft) of marble or tile strips.',
    faqs: [
      {
        q: 'Should door openings be subtracted from Room Perimeter (feet)?',
        a: 'Subtract wide door widths if buying costly imported marble, though many masons keep gross perimeter to absorb 5% corner miter waste.',
      },
      {
        q: 'What Skirting Height (inches) is standard in modern homes?',
        a: 'Four inches (100 mm) is the most popular residential skirting strip height, while halls sometimes use 5 or 6 inches.',
      },
      {
        q: 'How many 4-inch skirting strips can be sliced from a 24×24 inch floor tile?',
        a: 'Cutting across a 2-ft tile yields five to six 4-inch × 2-ft strips (10 to 12 running feet) depending on saw blade kerf.',
      },
    ],
  },

  'constr-door-window': {
    seoTitle: `Free Door & Window Wood Frame Calculator – Timber CFT | ${SITE_NAME}`,
    metaDescription:
      'Compute solid wood timber volume in cubic feet (CFT) for door and window chowkhats with our free Door & Window Wood Frame Calculator.',
    howToUseSteps: [
      'Enter total door and window openings inside Number of Frames.',
      'Type average linear wood frame length into Average Frame Size (running feet per frame).',
      'Inspect total Cubic Feet (CFT) timber alongside total running feet.',
    ],
    formulaExplanation:
      'Timber merchants sell deodar, ash, and sheesham lumber by cubic foot (CFT); standard 3×4 inch chowkhat sections convert running length into CFT by multiplying cross-section square inches divided by 144. Formula: Total Running Feet = Number of Frames × Average Frame Size; Timber CFT = Total Running Feet × ((3 × 4) / 144).',
    practicalExample:
      'Ordering Number of Frames = 8 at Average Frame Size (running feet per frame) = 18 totals 144 ft running length and requires 12.00 CFT (Cubic Feet) Timber.',
    faqs: [
      {
        q: 'How do I estimate Average Frame Size (running feet per frame) for a 3.5×7 ft door?',
        a: 'Add two vertical jambs plus top head rail (7 + 7 + 3.5 = 17.5 running feet, ~18 ft including horn projections).',
      },
      {
        q: 'Does this account for heavier 4×5 inch main entrance frames?',
        a: 'Standard output assumes a 3×4 inch section; multiply the displayed CFT by 1.67 (20/12) for 4×5 inch main frames.',
      },
      {
        q: 'Should planing and saw wastage be added before ordering logs or planks?',
        a: 'Carpenters typically add 8% to 12% extra timber CFT to cover thickness planing and tenon joints.',
      },
    ],
  },

  'constr-column-steel': {
    seoTitle: `Free Column Reinforcement Steel Calculator – RCC Rebar kg | ${SITE_NAME}`,
    metaDescription:
      'Estimate total RCC structural column rebar weight in kilograms from column count and height with our free Column Reinforcement Steel Calculator.',
    howToUseSteps: [
      'Enter total structural pillars on the floor inside Number of Columns.',
      'Type floor-to-slab height in Average Column Height (feet).',
      'Review estimated steel rebar kilograms needed for preliminary budgeting.',
    ],
    formulaExplanation:
      'Preliminary RCC structural takeoffs convert column height from feet to meters (× 0.3048) and multiply by an empirical reinforcement benchmark of ~3.5 kg per linear meter covering longitudinal bars and stirrup ties. Formula: Height (m) = Average Column Height × 0.3048; Steel Weight (kg) = Number of Columns × Height (m) × 3.5.',
    practicalExample:
      'Estimating Number of Columns = 12 at Average Column Height (feet) = 12 (3.6576 m each) outputs 154 kg Steel Rebar.',
    faqs: [
      {
        q: 'Does this include underground footing dowel overlap and lap splices?',
        a: 'It provides quick superstructure budgeting—add column footing starter bars and lap lengths per your structural engineer’s bar bending schedule.',
      },
      {
        q: 'Can heavy multi-story buildings need more than 3.5 kg per meter?',
        a: 'Yes, three-story+ frames using six #6 bars and closely spaced stirrups can run significantly heavier per structural drawings.',
      },
      {
        q: 'How can I convert the resulting kg into metric tons?',
        a: 'Divide total Steel Rebar kilograms by 1,000 (for instance, 154 kg equals 0.154 metric tons).',
      },
    ],
  },

  'constr-foundation-earthwork': {
    seoTitle: `Free Foundation Earthwork & Labor Cost Calculator – Trench Cost | ${SITE_NAME}`,
    metaDescription:
      'Compute foundation trench cubic feet excavation volume and contractor labor cost in PKR with our free Foundation Earthwork & Labor Cost Calculator.',
    howToUseSteps: [
      'Add centerline lengths of all walls into Total Trench Length (feet).',
      'Enter footing dig width inside Trench Width (feet) and depth in Trench Depth (feet).',
      'Type contractor rate per cubic foot into Labor Rate per Cu Ft (PKR).',
    ],
    formulaExplanation:
      'Strip foundation earthwork is commonly billed per cubic foot of dug soil; multiplying trench geometry yields total cubic feet before scaling by your agreed contractor digging rate. Formula: Excavation Volume (cu ft) = Total Trench Length × Trench Width × Trench Depth; Labor Cost (PKR) = Excavation Volume × Labor Rate per Cu Ft.',
    practicalExample:
      'Excavating Total Trench Length (feet) = 200, Trench Width (feet) = 2.5, and Trench Depth (feet) = 4 produces 2,000 cu ft; at Labor Rate per Cu Ft (PKR) = 15, labor totals PKR 30,000.',
    faqs: [
      {
        q: 'Does Labor Rate per Cu Ft (PKR) vary by soil hardness?',
        a: 'Yes—soft alluvial clay costs less per cubic foot than hard compacted soil, stony strata, or deep trenches requiring double handling.',
      },
      {
        q: 'Should overlapping wall corner intersections be counted twice?',
        a: 'Use centerline wall lengths rather than outer perimeter twice so T-junctions and L-corners are not double-counted.',
      },
      {
        q: 'Does this price include hauling excess soil away from the plot?',
        a: 'Usually earthwork labor covers trench digging and stacking nearby for backfill; cartage off-site is priced separately.',
      },
    ],
  },

  'constr-sand-crush-ratio': {
    seoTitle: `Free Sand & Crush Volume Ratio Calculator – Tractor Trolleys | ${SITE_NAME}`,
    metaDescription:
      'Convert wet concrete volume into tractor trolley loads of river sand and crushed stone using our free Sand & Crush Volume Ratio Calculator.',
    howToUseSteps: [
      'Type planned concrete pour volume into Total Concrete Volume (cu ft).',
      'Check estimated river sand and stone crush tractor trolleys in the headline.',
      'Inspect exact cubic feet for sand and crush listed underneath.',
    ],
    formulaExplanation:
      'Using standard 1:2:4 mix bulking (1.54× dry factor), sand represents 2/7ths and coarse crush represents 4/7ths of dry volume, then dividing by 400 cu ft converts bulk cubic feet into standard tractor trolley deliveries. Formula: Dry Vol = Concrete Volume × 1.54; Sand Trolleys = (Dry Vol × 2/7) / 400; Crush Trolleys = (Dry Vol × 4/7) / 400.',
    practicalExample:
      'Entering Total Concrete Volume (cu ft) = 500 computes 770 cu ft dry volume (Sand: 220 cu ft and Crush: 440 cu ft), equivalent to Sand: 0.6 Trolleys and Crush: 1.1 Trolleys.',
    faqs: [
      {
        q: 'What trolley capacity does this calculator assume per load?',
        a: 'It assumes a standard 400 cubic foot agricultural tractor trolley; verify bed dimensions if ordering larger 10-wheel dumpers.',
      },
      {
        q: 'Why is Crush volume always double the Sand volume?',
        a: 'In a 1:2:4 mix ratio, coarse stone aggregate (4 parts) is exactly twice the river sand proportion (2 parts).',
      },
      {
        q: 'Should damp river sand bulking be factored at the quarry?',
        a: 'Yes—moist sand swells slightly by volume when dumped loosely, so ordering slightly above exact trolley decimals avoids shortages.',
      },
    ],
  },

  'constr-false-ceiling': {
    seoTitle: `Free Gypsum False Ceiling Cost Calculator – Ceiling PKR Budget | ${SITE_NAME}`,
    metaDescription:
      'Estimate POP or gypsum false ceiling installation cost from ceiling square footage and market rate with our free Gypsum False Ceiling Cost Calculator.',
    howToUseSteps: [
      'Type room length times width inside Room Ceiling Area (sq ft).',
      'Enter contractor material-plus-labor quote in Cost per Sq Ft (PKR).',
      'Read total false ceiling installation budget immediately.',
    ],
    formulaExplanation:
      'Ceiling contractors quote plain, rope-light cove, or multi-step gypsum designs on an all-inclusive square-foot basis covering GI channels, plasterboards, joint tape, and fitting labor. Formula: Total Ceiling Cost (PKR) = Room Ceiling Area (sq ft) × Cost per Sq Ft (PKR).',
    practicalExample:
      'Installing false ceiling across Room Ceiling Area (sq ft) = 350 at Cost per Sq Ft (PKR) = 180 estimates a total cost of PKR 63,000.',
    faqs: [
      {
        q: 'Does Cost per Sq Ft (PKR) normally include LED downlights and paint?',
        a: 'Basic gypsum quotes cover framing and board installation only—electrician wiring, LED spotlights, and emulsion painting cost extra.',
      },
      {
        q: 'Are curved perimeter drops charged at the same flat area rate?',
        a: 'Elaborate multi-tier borders or CNC-cut jali panels carry higher Cost per Sq Ft (PKR) than flat single-level ceilings.',
      },
      {
        q: 'Should ceiling fan cutout zones be deducted from Room Ceiling Area (sq ft)?',
        a: 'No—contractors charge full room footprint because reinforced steel framing is actually added around fan rods.',
      },
    ],
  },

  'constr-house-cost-pk': {
    seoTitle: `Free House Construction Cost Estimator Calculator (Pakistan) | ${SITE_NAME}`,
    metaDescription:
      'Budget residential grey structure or turnkey finished house cost in Pakistan (PKR) using our free House Construction Cost Estimator Calculator.',
    howToUseSteps: [
      'Enter ground plus upper-floor covered square footage inside Total Covered Area (Square Feet).',
      'Select Grey Structure Only (~PKR 3,000 / sq ft), Standard Finished (~PKR 5,500 / sq ft), or Luxury Finished (~PKR 8,500 / sq ft) under Construction Type.',
      'Review estimated total turnkey or grey structure PKR cost.',
    ],
    formulaExplanation:
      'Pakistani homebuilders budget total construction outlays by multiplying sum-of-floors covered area by current per-square-foot market benchmarks across grey-structure brickwork/RCC or complete turnkey finishing tiers. Formula: Estimated Cost (PKR) = Total Covered Area (sq ft) × Market Rate per Sq Ft (PKR 3,000 Grey / 5,500 Standard / 8,500 Luxury).',
    practicalExample:
      'Building Total Covered Area (Square Feet) = 2200 under Construction Type = Grey Structure Only (~PKR 3,000 / sq ft) projects an estimated cost of PKR 6,600,000.',
    faqs: [
      {
        q: 'What stages are covered inside Grey Structure Only vs Standard Finished?',
        a: 'Grey structure includes excavation, foundations, brickwork, RCC slabs, plaster, and conduit piping, whereas Standard Finished adds tiles, woodwork, paint, glass, and sanitary fixtures.',
      },
      {
        q: 'How should I compute Total Covered Area (Square Feet) for a double-story house?',
        a: 'Add ground floor covered area, first floor covered area, stair mumty, and porch/carport footprint together.',
      },
      {
        q: 'Do these construction benchmarks include land plot purchase price?',
        a: 'No—these figures model building construction and material outlays only, excluding plot cost, boundary walls, or utility meter fees.',
      },
    ],
  },

  'constr-roof-slab-steel': {
    seoTitle: `Free Roof Slab Steel Rebar Calculator – Slab Tonnage | ${SITE_NAME}`,
    metaDescription:
      'Estimate deformed steel rebar kilograms required for an RCC roof slab from square footage using our free Roof Slab Steel Rebar Calculator.',
    howToUseSteps: [
      'Type total RCC roof footprint inside Roof Slab Area (sq ft).',
      'Check estimated steel rebar weight in kilograms immediately.',
    ],
    formulaExplanation:
      'Standard two-way residential roof slabs reinforced with #4 main bars and #3 distribution bars spaced at 6 inches center-to-center (including crank bends and concealed beams) typically consume ~3.75 kg of steel per square foot. Formula: Steel Weight (kg) = Roof Slab Area (sq ft) × 3.75.',
    practicalExample:
      'Pouring a Roof Slab Area (sq ft) = 1000 requires roughly 1,000 × 3.75 = 3,750 kg Steel Rebar (3.75 metric tons).',
    faqs: [
      {
        q: 'Does a 3.75 kg/sq ft slab rate cover drop beams around large drawing rooms?',
        a: 'Light concealed bands are covered, though deep wide-span beams or cantilevered balconies need extra rebar added per engineer drawings.',
      },
      {
        q: 'What grade of deformed steel is common for Pakistani RCC roof slabs?',
        a: 'Grade 60 deformed rebar is widely preferred by structural engineers for roof slabs and seismic framing.',
      },
      {
        q: 'Should binding wire be ordered alongside Steel Rebar weight?',
        a: 'Yes—keep roughly 1 kg of 18-gauge annealed binding wire per 100 kg of steel rebar.',
      },
    ],
  },

  'constr-terrazzo-flooring': {
    seoTitle: `Free Terrazzo & Mosaic Flooring Calculator – Cement & Chips | ${SITE_NAME}`,
    metaDescription:
      'Calculate white cement bags and marble chips kg for durable mosaic or terrazzo floors using our free Terrazzo & Mosaic Flooring Calculator.',
    howToUseSteps: [
      'Enter net room or verandah surface area inside Flooring Area (sq ft).',
      'Inspect required White Cement Bags and marble chips weight in kilograms.',
    ],
    formulaExplanation:
      'Cast-in-situ terrazzo (chips) flooring blends white Portland cement with crushed marble aggregate at standard screed thickness, requiring approximately 0.05 cement bags and 0.6 kg marble chips per square foot before grinding and polishing. Formula: White Cement Bags = ceil(Flooring Area × 0.05); Marble Chips (kg) = ceil(Flooring Area × 0.6).',
    practicalExample:
      'Finishing Flooring Area (sq ft) = 500 calls for 25 White Cement Bags & 300 kg Chips.',
    faqs: [
      {
        q: 'Does this include the grey cement PCC sub-base underneath terrazzo?',
        a: 'No—these materials cover the white-cement and marble-chip topping screed above your leveled base floor.',
      },
      {
        q: 'Can brass or glass divider strips be laid inside the terrazzo floor?',
        a: 'Yes—dividing large rooms into 4×4 ft grids with brass or plastic strips prevents hairline shrinkage cracks.',
      },
      {
        q: 'How many days should terrazzo cure under water before diamond polishing?',
        a: 'Pond water curing for 7 to 10 days ensures marble chips stay locked firmly during machine grinding.',
      },
    ],
  },

  'constr-compound-pillar': {
    seoTitle: `Free Compound Wall Pillar Calculator – Brick Pier Count | ${SITE_NAME}`,
    metaDescription:
      'Count bricks needed for 9×9 inch compound and boundary wall pillars using our free Compound Wall Pillar Calculator.',
    howToUseSteps: [
      'Enter total structural piers along your wall inside Number of Pillars.',
      'Type vertical pier height inside Pillar Height (feet).',
      'Read total brick count needed across all boundary pillars.',
    ],
    formulaExplanation:
      'Square 9×9 inch masonry piers spaced along boundary walls brace thin panels against lateral wind pressure and require roughly 22 standard bricks per vertical foot of pier height. Formula: Pillar Bricks = ceil(Number of Pillars × Pillar Height × 22).',
    practicalExample:
      'Building Number of Pillars = 10 at Pillar Height (feet) = 7 calculates 10 × 7 × 22 = 1,540 Bricks.',
    faqs: [
      {
        q: 'How far apart should 9×9 inch compound wall pillars be placed?',
        a: 'Masons typically space boundary pillars every 10 to 12 feet along straight wall runs and at every corner or gate end.',
      },
      {
        q: 'What if I build larger 13.5×13.5 inch heavy gate pillars?',
        a: 'A 13.5×13.5 inch pier has 2.25× the cross-section of a 9×9 pier, requiring roughly 50 bricks per foot of height.',
      },
      {
        q: 'Should gate pillars have an RCC core instead of solid bricks?',
        a: 'Yes—heavy wrought-iron driveway gates hold alignment best when hung from steel-reinforced RCC columns.',
      },
    ],
  },

  'constr-retaining-wall': {
    seoTitle: `Free Retaining Wall Concrete Volume Calculator – cu ft & cu yds | ${SITE_NAME}`,
    metaDescription:
      'Estimate concrete volume in cubic feet and cubic yards for tapered earth-retaining walls with our free Retaining Wall Concrete Volume Calculator.',
    howToUseSteps: [
      'Enter horizontal retaining span into Wall Length (feet).',
      'Type vertical retaining height inside Wall Height (feet).',
      'Input mean thickness (average of top and base widths) in Average Thickness (feet).',
    ],
    formulaExplanation:
      'Tapered trapezoidal retaining walls (wider at the footing toe than at the top coping) convert cleanly into rectangular prism volume using the mean of top and bottom thickness multiplied by wall length and height. Formula: Volume (cu ft) = Wall Length × Wall Height × Average Thickness; Volume (cu yds) = Volume (cu ft) / 27.',
    practicalExample:
      'Pouring a Wall Length (feet) = 50, Wall Height (feet) = 6 retaining wall with Average Thickness (feet) = 1.25 equals 375.0 cu ft (13.89 cu yds).',
    faqs: [
      {
        q: 'How do I compute Average Thickness (feet) for a tapered retaining wall?',
        a: 'Add the top wall width (e.g., 1.0 ft) and base width (e.g., 1.5 ft) and divide by two to get 1.25 ft.',
      },
      {
        q: 'Why do retaining walls require weep holes on the exposed face?',
        a: 'PVC weep holes relieve hydrostatic rainwater pressure trapped in saturated backfill soil behind the concrete wall.',
      },
      {
        q: 'Does this volume include the horizontal base footing slab?',
        a: 'No—calculate the base footing heel and toe pad separately using Length × Width × Thickness.',
      },
    ],
  },

  'const-drywall': {
    seoTitle: `Free Drywall / Gypsum Board Sheet Calculator – 4×8 Sheets | ${SITE_NAME}`,
    metaDescription:
      'Determine 4×8 ft gypsum board sheets including 10% cutting waste from wall and ceiling area with our free Drywall / Gypsum Board Sheet Calculator.',
    howToUseSteps: [
      'Combine net wall partition and ceiling square footage in Total Wall & Ceiling Area (sq ft).',
      'View total 4×8 ft drywall sheets including a built-in 10% waste margin.',
    ],
    formulaExplanation:
      'Standard North American and commercial gypsum drywall panels measure 4 ft × 8 ft (32 square feet per sheet). Adding 10% extra panel area accounts for doorway cutouts, electrical box openings, and staggered end-trimming waste. Formula: Drywall Sheets = ceil((Total Wall & Ceiling Area / 32) × 1.10).',
    practicalExample:
      'Boarding Total Wall & Ceiling Area (sq ft) = 1200 calculates (1,200 / 32) × 1.10 = 41.25, rounding up to 42 Drywall Sheets (4×8 ft).',
    faqs: [
      {
        q: 'How do I adjust if ordering taller 4×10 ft or 4×12 ft commercial sheets?',
        a: 'Multiply the 4×8 sheet count by 0.80 for 4×10 sheets (40 sq ft) or by 0.67 for 4×12 sheets (48 sq ft).',
      },
      {
        q: 'Should wet bathrooms use green moisture-resistant gypsum board?',
        a: 'Yes—install green moisture-resistant drywall or cement backer board around showers, sinks, and laundry zones.',
      },
      {
        q: 'How many drywall screws should I buy per 4×8 sheet?',
        a: 'Budget roughly 32 to 36 fine- or coarse-thread screws per 4×8 panel spaced every 12 inches along framing studs.',
      },
    ],
  },

  'const-roof-pitch': {
    seoTitle: `Free Roof Pitch & Rise Calculator – Slope Angle & Height | ${SITE_NAME}`,
    metaDescription:
      'Find gable roof peak rise in feet and slope angle in degrees from building span and pitch with our free Roof Pitch & Rise Calculator.',
    howToUseSteps: [
      'Enter full eave-to-eave width into Building Span (feet).',
      'Type vertical inches gained per 12-inch horizontal run in Rise per Foot Run (inches).',
      'Inspect total gable peak rise alongside slope inclination in degrees.',
    ],
    formulaExplanation:
      'A symmetrical gable roof slopes across half the Building Span (the horizontal run = Span / 2), rising by Rise per Foot Run inches for every horizontal foot. Inverse tangent converts that rise-to-run ratio into roof pitch degrees. Formula: Total Rise (ft) = (Building Span / 2) × (Rise per Foot Run / 12); Pitch Angle (°) = arctan(Rise per Foot Run / 12) × (180 / π).',
    practicalExample:
      'Framing a Building Span (feet) = 30 gable roof with Rise per Foot Run (inches) = 6 (6:12 pitch) yields Total Rise: 7.50 ft (26.6°).',
    faqs: [
      {
        q: 'What does a 6:12 roof pitch mean physically?',
        a: 'It means the roof climbs 6 vertical inches for every 12 horizontal inches (1 foot) of horizontal run toward the ridge.',
      },
      {
        q: 'What minimum slope angle suits asphalt shingles vs metal standing-seam panels?',
        a: 'Standard shingles generally require at least 4:12 (~18.4°) pitch, whereas standing-seam metal handles lower 2:12 slopes.',
      },
      {
        q: 'How can I find rafter length once I know Total Rise?',
        a: 'Apply the Pythagorean theorem using half the Building Span (15 ft) and Total Rise (7.5 ft): √(15² + 7.5²) ≈ 16.77 ft before eave overhang.',
      },
    ],
  },

  'const-stair': {
    seoTitle: `Free Stair Rise and Run Calculator – Risers, Treads & Length | ${SITE_NAME}`,
    metaDescription:
      'Calculate uniform stair riser height, tread count, and total staircase horizontal run using our free Stair Rise and Run Calculator.',
    howToUseSteps: [
      'Measure vertical distance from finished bottom floor to finished upper floor in Total Floor-to-Floor Height (inches).',
      'Enter preferred step height inside Target Riser Height (inches).',
      'Inspect exact riser count, adjusted uniform riser height, tread count, and total stair run.',
    ],
    formulaExplanation:
      'Safe staircases divide total vertical climb into whole equal risers closest to your target comfort step height so no top or bottom step trips walkers, then pair N risers with (N − 1) horizontal 10-inch treads. Formula: Risers = round(Total Height / Target Riser Height); Actual Riser = Total Height / Risers; Treads = Risers − 1; Total Run = Treads × 10".',
    practicalExample:
      'Climbing Total Floor-to-Floor Height (inches) = 110 using Target Riser Height (inches) = 7.5 rounds to 15 Risers (7.33" each) with Treads: 14 and Total Run: 140.0".',
    faqs: [
      {
        q: 'Why is the number of treads always one less than the number of risers?',
        a: 'Because the upper floor slab itself acts as the top landing step, eliminating one horizontal tread at the top.',
      },
      {
        q: 'What Actual Riser height and tread depth meet common building ergonomics?',
        a: 'Residential codes typically favor risers between 7 and 7.75 inches and minimum treads of 10 to 11 inches.',
      },
      {
        q: 'Should Total Floor-to-Floor Height (inches) include floor tile thickness?',
        a: 'Yes—measure from finished ground floor tile top to finished upper floor tile top so bottom and top risers match every middle step.',
      },
    ],
  },
};
