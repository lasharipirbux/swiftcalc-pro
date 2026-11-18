export interface ConstructionHealthSeoContent {
  intro: string;
  howItWorks: string;
  workedExample: string;
  faqs: { q: string; a: string }[];
  whoUses: string;
  medicalDisclaimer?: string;
}

export const constructionHealthSeoMap: Record<string, ConstructionHealthSeoContent> = {
  // --- CONSTRUCTION ---
  'constr-brick-calc': {
    intro: 'Estimate the exact number of red clay bricks or cement blocks required for structural brick masonry walls in Pakistani residential or commercial construction projects.',
    howItWorks: 'Calculates brick quantity by dividing wall volume by single brick volume with mortar joint allowance, adding a standard 10% wastage buffer. Formula: Bricks = (Wall Volume / Brick Volume) × 1.10.',
    workedExample: 'For a wall measuring 100 ft long and 9 ft high (900 sq ft wall area) with a 5% wastage buffer, the calculator outputs 6,615 bricks.',
    faqs: [
      { q: 'What is standard brick size in Pakistan?', a: 'Standard Pakistani bricks are typically 9 × 4.5 × 3 inches.' },
      { q: 'Why add a wastage buffer?', a: 'To account for breakage during transportation and cutting on-site.' },
      { q: 'How much mortar is required?', a: 'Mortar typically consumes about 25% to 30% of total wall volume.' },
      { q: 'Does this apply to 4.5-inch single walls?', a: 'Yes, wall thickness setting adjusts the volume computation.' }
    ],
    whoUses: 'Who uses this: Masons, contractors, civil engineers, and home builders.'
  },
  'constr-concrete-calc': {
    intro: 'Calculate required cement, sand, aggregate crush, and water volumes in cubic feet or cubic meters for structural RCC footings, columns, and slabs.',
    howItWorks: 'Computes dry volume from wet concrete volume using a standard 1.54 bulking factor, then splits by mix ratio (e.g., 1:2:4). Formula: Dry Volume = Wet Volume × 1.54.',
    workedExample: 'For 250 cu ft of wet concrete (such as a 500 sq ft slab at 6 inches thick) using a 1:2:4 mix ratio, dry volume is 250 × 1.54 = 385 cu ft, yielding 55 cu ft cement = 44 Cement Bags (50kg) of 1.25 cu ft, Sand: 110 cu ft, and Crush: 220 cu ft.',
    faqs: [
      { q: 'What is standard RCC mix ratio?', a: '1:2:4 (Cement : Sand : Crush) is standard for residential structural elements.' },
      { q: 'How many kg in a cement bag?', a: 'One standard cement bag in Pakistan weighs 50 kg.' },
      { q: 'Why use a bulking factor?', a: 'Dry materials compact when mixed with water, requiring 54% extra dry volume.' },
      { q: 'Should crushed stone be Margalla crush?', a: 'Margalla crush is preferred for high compressive strength in Islamabad and Punjab.' }
    ],
    whoUses: 'Who uses this: Structural engineers, builders, and site supervisors.'
  },
  'constr-paint-calc': {
    intro: 'Determine exact paint quantities and number of primer and emulsion buckets needed for interior and exterior wall painting.',
    howItWorks: 'Divides total wall surface area by paint spread rate per gallon or liter specified by manufacturers. Formula: Gallons = Total Area / Coverage per Gallon.',
    workedExample: 'Painting 500 sq ft of wall area with 2 coats (1,000 sq ft total painted area) at a coverage rate of 100 sq ft per liter outputs 10.0 Liters of paint.',
    faqs: [
      { q: 'What is standard paint coverage per liter?', a: 'Usually 100 to 120 sq ft per liter for two coats on smooth plastered walls.' },
      { q: 'Should primer be applied first?', a: 'Yes, primer seals new plaster and prevents paint peeling.' },
      { q: 'How many coats are recommended?', a: 'Two finish coats over one primer coat give optimal opacity.' },
      { q: 'Does textured wall paint consume more?', a: 'Textured or brick surfaces absorb significantly more paint.' }
    ],
    whoUses: 'Who uses this: Painters, interior designers, and property renovators.'
  },
  'constr-tile-calc': {
    intro: 'Calculate exact ceramic or porcelain floor and wall tile quantities along with tile adhesive bags for rooms and bathrooms.',
    howItWorks: 'Divides room area by single tile area and adds a 10% cutting wastage margin. Formula: Tiles = (Room Area / Tile Area) × 1.10.',
    workedExample: 'Tiling a 300 sq ft room using 4 sq ft (2×2 ft) tiles with 10% wastage calculates 75 base tiles and outputs a total of 83 tiles.',
    faqs: [
      { q: 'Why add 10% wastage?', a: 'Edge cuts and diagonal patterns generate waste.' },
      { q: 'How many adhesive bags are needed?', a: 'One 25kg bag of tile bond typically covers 40-50 sq ft at standard thickness.' },
      { q: 'Should tile grout be factored in?', a: 'Grout requirement is minimal by weight compared to adhesive.' },
      { q: 'Are Pakistani tile sizes standard?', a: 'Common sizes include 2x2 ft, 2x4 ft, and 1x1 ft porcelain or ceramic.' }
    ],
    whoUses: 'Who uses this: Tilers, flooring contractors, and homeowners.'
  },
  'constr-steel-weight': {
    intro: 'Calculate total weight and tonnage of deformed steel rebars (Grade 60 / Grade 40) required for reinforced concrete structures.',
    howItWorks: 'Computes weight based on rebar diameter and total length using standard steel density formula: Weight (kg) = [D² / 162.2] × Length in meters.',
    workedExample: 'Using 100 bars of 12mm diameter steel rebar at 10 meters each (1,000 meters total at 0.889 kg/m) outputs a total weight of 888.89 kg.',
    faqs: [
      { q: 'What is the 162.2 constant?', a: 'Derived from steel density (7850 kg/m³) divided by circular cross-section math.' },
      { q: 'What steel grade is used in Pakistan?', a: 'Grade 60 (Ameen, Ittefaq, Mughal steel) is standard for earthquake-resistant framing.' },
      { q: 'How much steel per sq ft of roof slab?', a: 'Typically 3.5 to 4.5 kg of steel per sq ft of covered area.' },
      { q: 'Should lap splices be included?', a: 'Yes, add 10% for lap splices and bending wastage.' }
    ],
    whoUses: 'Who uses this: Bar benders, civil engineers, and estimators.'
  },
  'constr-slab-volume': {
    intro: 'Calculate concrete volume and shuttering area for reinforced concrete roof slabs and lintels.',
    howItWorks: 'Formula: Volume = Slab Length × Slab Width × Slab Thickness.',
    workedExample: 'A roof slab measuring 40 ft long by 30 ft wide (1,200 sq ft surface area) with a 6-inch thickness outputs 600.0 cu ft (22.22 cu yds) of wet concrete.',
    faqs: [
      { q: 'What is standard roof slab thickness?', a: 'Usually 5 to 6 inches for residential houses.' },
      { q: 'How many cement bags for 600 cu ft slab?', a: 'Using 1:2:4 mix (dry volume 924 cu ft), it takes 106 cement bags of 50kg.' },
      { q: 'What is shuttering area?', a: 'Shuttering area equals slab length × width (bottom surface) plus perimeter beam sides.' },
      { q: 'When can shuttering be removed?', a: 'Normally after 14 to 21 days depending on weather and curing.' }
    ],
    whoUses: 'Who uses this: Contractors, formwork carpenters, and site engineers.'
  },
  'constr-plaster-calc': {
    intro: 'Calculate cement and sand quantities required for internal and external wall plastering and rendering.',
    howItWorks: 'Computes mortar volume by multiplying wall surface area by plaster thickness (e.g., 0.5 inches), adjusted for dry volume bulking.',
    workedExample: 'Plastering 1,000 sq ft of wall surface area at 0.5-inch thickness with a 1:4 cement-to-sand ratio outputs 12 Cement Bags and 60 cu ft of sand.',
    faqs: [
      { q: 'What is standard plaster thickness?', a: '1/2 inch (12 mm) for interior walls and 3/4 inch for exterior walls.' },
      { q: 'What is standard plaster mortar ratio?', a: '1:4 or 1:5 (Cement : Sand) is standard.' },
      { q: 'Why is sand measured in cubic feet?', a: 'Sand is traditionally delivered in dump trucks measured by cu ft or brass.' },
      { q: 'How long should plaster be cured?', a: 'Cured with water for at least 7 days to prevent cracking.' }
    ],
    whoUses: 'Who uses this: Plasterers, masons, and project estimators.'
  },
  'constr-excavation-calc': {
    intro: 'Calculate earthwork excavation volume in cubic feet or cubic yards for building foundations and basements.',
    howItWorks: 'Formula: Excavation Volume = Length × Width × Depth of trench or pit.',
    workedExample: 'Excavating a trench 100 ft long, 3 ft wide, and 4 ft deep outputs 1,200 cu ft (44.4 cu yds) of earth removal.',
    faqs: [
      { q: 'Does excavated soil expand?', a: 'Yes, loose excavated soil (bulking factor ~20-30%) takes up more truck space.' },
      { q: 'How are soil disposal costs estimated?', a: 'Based on number of tractor-trolley or dump truck loads.' },
      { q: 'Should trench walls be sloped?', a: 'Deep excavations require sloping or shoring to prevent cave-ins.' },
      { q: 'What is manual vs machine excavation cost?', a: 'Machine excavators (JCB) are significantly faster and cheaper for large volumes.' }
    ],
    whoUses: 'Who uses this: Earthwork contractors, excavator operators, and builders.'
  },
  'constr-marla-to-sqft': {
    intro: 'Convert land area measurements between Marlas and Square Feet instantly, supporting both 225 sq ft and 272.25 sq ft Marla standards in Pakistan.',
    howItWorks: 'Multiplies Marlas by sq ft per Marla factor. Formula: Sq Ft = Marlas × 225 (or 272.25).',
    workedExample: 'A 5 Marla residential plot using the 272.25 sq ft standard equals 1,361.25 square feet.',
    faqs: [
      { q: 'Why are there two Marla standards in Pakistan?', a: 'Punjab uses 225 sq ft in older urban areas and 272.25 sq ft in rural/newer housing societies; KPK uses 272.25 sq ft.' },
      { q: 'How many Marlas in 1 Kanal?', a: 'There are exactly 20 Marlas in 1 Kanal.' },
      { q: 'Is sq ft standard for registry?', a: 'Property registries record exact square feet and Marla dimensions.' },
      { q: 'How many square yards in 1 Marla?', a: '25 square yards (under 225 sq ft standard).' }
    ],
    whoUses: 'Who uses this: Real estate agents, property buyers, and land surveyors.'
  },
  'constr-sqft-to-marla': {
    intro: 'Convert Square Feet land or covered area into Marlas and Kanals for property valuation in Pakistan.',
    howItWorks: 'Divides square footage by sq ft per Marla factor. Formula: Marlas = Square Feet / 272.25.',
    workedExample: 'A covered house area of 2,500 sq ft equals approximately 9.18 Marlas.',
    faqs: [
      { q: 'Can I convert to Kanals directly?', a: 'Yes, divide total Marlas by 20 to get Kanals.' },
      { q: 'Which Marla formula is default?', a: '272.25 sq ft (Sarsahi standard) is most common in housing societies.' },
      { q: 'What is plot frontage vs depth?', a: 'Frontage is street-facing width; depth is plot length backward.' },
      { q: 'Does covered area equal plot area?', a: 'Covered area is the footprint of the building; plot area is total land.' }
    ],
    whoUses: 'Who uses this: Property sellers, architects, and real estate investors.'
  },
  'constr-boundary-wall': {
    intro: 'Estimate total bricks, cement, sand, and foundation concrete for building perimeter boundary walls.',
    howItWorks: 'Computes foundation trench volume, brick masonry wall volume, and plaster area combined.',
    workedExample: 'Building a 150 ft perimeter wall at 7 ft height (1,050 sq ft wall area) with a 9-inch thickness outputs 14,175 Bricks and approximately 84 Cement Bags.',
    faqs: [
      { q: 'What is standard boundary wall height?', a: 'Typically 6 to 8 feet for residential security.' },
      { q: 'Should piers/columns be included?', a: 'Yes, RCC columns every 10-12 feet provide structural stability.' },
      { q: 'Is barbed wire factored in?', a: 'Barbed wire or security grills are calculated separately.' },
      { q: 'What foundation depth is needed?', a: 'Usually 2 to 3 feet deep depending on soil bearing capacity.' }
    ],
    whoUses: 'Who uses this: Property owners, boundary contractors, and masons.'
  },
  'constr-water-tank': {
    intro: 'Calculate underground or overhead water storage tank capacity in gallons and liters based on dimensions.',
    howItWorks: 'Formula: Volume in cu ft = Length × Width × Depth; 1 cu ft = 28.31 liters (or 6.23 gallons).',
    workedExample: 'An underground water tank measuring 8 ft long, 6 ft wide, and 5 ft deep (240 cu ft) outputs 6,796 Liters (1,495 Imperial Gallons).',
    faqs: [
      { q: 'What is daily water consumption per person?', a: 'Estimated at 150 to 200 liters per person per day in Pakistan.' },
      { q: 'Should waterproofing be applied?', a: 'Yes, chemical waterproofing prevents seepage into foundation soil.' },
      { q: 'What is standard overhead tank size for a house?', a: 'Typically 1,000 to 2,000 gallons capacity.' },
      { q: 'How often should water tanks be cleaned?', a: 'Every 6 months to maintain hygiene.' }
    ],
    whoUses: 'Who uses this: Plumbers, civil contractors, and home builders.'
  },
  'constr-septic-tank': {
    intro: 'Design and calculate septic tank dimensions and wastewater capacity based on household occupancy.',
    howItWorks: 'Determines required liquid holding capacity based on 50 gallons per person per day with 24-hour retention.',
    workedExample: 'A septic tank designed for 10 residents at 25 cu ft per person outputs a recommended volume of 250 cu ft (7,079 Liters).',
    faqs: [
      { q: 'What is sludge accumulation rate?', a: 'Solids accumulate over time, requiring periodic desludging.' },
      { q: 'How far should septic tanks be from water bores?', a: 'At least 50 feet to prevent groundwater contamination.' },
      { q: 'Should septic tanks have multiple chambers?', a: 'Two-chamber tanks separate solid sludge from liquid effluent effectively.' },
      { q: 'Is municipal sewerage available?', a: 'Septic tanks are used where municipal sewer lines are absent.' }
    ],
    whoUses: 'Who uses this: Sanitation engineers, plumbers, and rural builders.'
  },
  'constr-roof-waterproofing': {
    intro: 'Calculate membrane, chemical coating, or Mud-Phuska insulation materials required for roof waterproofing.',
    howItWorks: 'Computes total roof surface area plus parapet wall flashing margins.',
    workedExample: 'Waterproofing a 2,000 sq ft roof slab outputs 500 kg Bitumen & 100 L Primer.',
    faqs: [
      { q: 'What is Mud-Phuska?', a: 'Traditional Pakistani roof insulation using mud, brick tiles (Ghalain), and bitumen.' },
      { q: 'Are chemical coatings effective?', a: 'Acrylic and polyurethane elastomeric coatings prevent water seepage effectively.' },
      { q: 'Does waterproofing reduce indoor heat?', a: 'Heat-reflective white coatings lower indoor temperatures during Pakistani summers.' },
      { q: 'What is roof slope gradient?', a: 'A slope of 1 in 100 ensures rainwater drains toward roof pipes.' }
    ],
    whoUses: 'Who uses this: Waterproofing specialists, contractors, and homeowners.'
  },
  'constr-skirting': {
    intro: 'Calculate linear running feet and tile/marble pieces required for room skirting installation.',
    howItWorks: 'Formula: Skirting Length = Room Perimeter - Door Openings width.',
    workedExample: 'For 51 ft of net room perimeter at a 4-inch skirting height, the calculator outputs 51 Running Feet (17.0 sq ft) with 5% cutting wastage noted.',
    faqs: [
      { q: 'What is standard skirting height?', a: '4 inches (10 cm) is standard for residential rooms.' },
      { q: 'Should skirting match floor tiles?', a: 'Matching floor tiles or using contrasting marble creates an elegant finish.' },
      { q: 'How is skirting wastage calculated?', a: 'Add 10% for corner miter cuts.' },
      { q: 'What adhesive is used?', a: 'Tile bond or cement slurry depending on wall plaster.' }
    ],
    whoUses: 'Who uses this: Tilers, interior finishers, and flooring installers.'
  },
  'constr-door-window': {
    intro: 'Calculate total frame timber, glass panel area, and hardware fittings for house doors and windows.',
    howItWorks: 'Computes perimeter framing timber in cubic feet (cu ft) and glass surface area in square feet.',
    workedExample: 'Estimating 8 door and window frames at an average of 18 running feet per frame (144 ft total running length) outputs 12.00 CFT (Cubic Feet) Timber.',
    faqs: [
      { q: 'What is best wood for door frames in Pakistan?', a: 'Deodar (Kail) and Ash wood are prized for durability and termite resistance.' },
      { q: 'What is standard window glass thickness?', a: '5mm or 8mm clear/tinted float glass or double glazing.' },
      { q: 'Are aluminum/uPVC windows better?', a: 'uPVC and aluminum frames offer superior weather sealing and modern aesthetics.' },
      { q: 'What is door chowkhat?', a: 'The wooden or steel door frame embedded into the brick masonry.' }
    ],
    whoUses: 'Who uses this: Carpenters, aluminum fabricators, and architects.'
  },
  'constr-column-steel': {
    intro: 'Calculate longitudinal rebar count and stirrup (tie) spacing for reinforced concrete structural columns.',
    howItWorks: 'Computes total steel weight based on building stories, column height, and load requirements.',
    workedExample: 'Estimating 12 structural columns at an average height of 12 ft outputs 154 kg Steel Rebar.',
    faqs: [
      { q: 'What is minimum column size?', a: '9×9 inches is absolute minimum; 9x12 or 12x12 inches recommended for double story.' },
      { q: 'Why are stirrups important?', a: 'Stirrups prevent buckling of vertical longitudinal bars under shear load.' },
      { q: 'How many bars in a standard column?', a: 'At least 4 to 6 main longitudinal bars.' },
      { q: 'What is concrete cover?', a: '1.5 inches of concrete cover protects steel from rusting.' }
    ],
    whoUses: 'Who uses this: Structural designers, steel fixers, and supervisors.'
  },
  'constr-foundation-earthwork': {
    intro: 'Calculate excavation, sand filling, and damp-proof course (DPC) concrete volumes for strip foundations.',
    howItWorks: 'Computes trench excavation dimensions and blinding concrete quantities.',
    workedExample: 'Excavating 200 ft of foundation trench at 2.5 ft width and 4 ft depth (2,000 cu ft) at PKR 15 per cu ft outputs PKR 30,000.',
    faqs: [
      { q: 'What is DPC?', a: 'Damp-Proof Course is a waterproof concrete layer preventing moisture rising into walls.' },
      { q: 'Why use polythene sheet under DPC?', a: 'Stops soil moisture and termite migration into foundation masonry.' },
      { q: 'What is foundation depth in stable soil?', a: 'Typically 3 to 4 feet below natural ground level.' },
      { q: 'Is soil testing necessary?', a: 'Soil testing ensures foundation design matches bearing capacity.' }
    ],
    whoUses: 'Who uses this: Foundation contractors, civil engineers, and builders.'
  },
  'constr-sand-crush-ratio': {
    intro: 'Determine optimal volumetric ratios of sand and crushed stone aggregate for concrete and sub-base preparations.',
    howItWorks: 'Computes material proportions based on void ratio and target density.',
    workedExample: 'For 500 cu ft of total concrete volume, the calculator outputs Sand: 0.6 Trolleys (220 cu ft) and Crush: 1.1 Trolleys (440 cu ft).',
    faqs: [
      { q: 'What is Chenab vs Ravi sand?', a: 'Ravi sand is fine river sand; Chenab sand is coarser and preferred for structural strength.' },
      { q: 'Why wash sand before mixing?', a: 'Removes silt and clay impurities that weaken concrete bonding.' },
      { q: 'What is screening crush?', a: 'Sieving aggregate ensures correct particle size distribution.' },
      { q: 'How is sand measured?', a: 'By dump truck volume in cubic feet or brass.' }
    ],
    whoUses: 'Who uses this: Batching plant operators, material suppliers, and masons.'
  },
  'constr-false-ceiling': {
    intro: 'Calculate square footage and suspension grid materials for Gypsum board or POP false ceilings.',
    howItWorks: 'Formula: Ceiling Area = Room Length × Room Width, adding 10% profile wastage.',
    workedExample: 'Installing a gypsum false ceiling over 350 sq ft at PKR 180 per sq ft outputs PKR 63,000.',
    faqs: [
      { q: 'What is standard false ceiling drop?', a: '6 to 12 inches below the main concrete slab.' },
      { q: 'Can concealed LED lighting be integrated?', a: 'Yes, cove lighting profiles are standard in gypsum designs.' },
      { q: 'Is gypsum board moisture resistant?', a: 'Green moisture-resistant boards are used in kitchens and bathrooms.' },
      { q: 'How is ceiling grid anchored?', a: 'Hung securely from concrete slab using rawl bolts and hanger wires.' }
    ],
    whoUses: 'Who uses this: Ceiling installers, interior decorators, and contractors.'
  },
  'constr-house-cost-pk': {
    intro: 'Estimate total grey structure and finishing construction cost for houses in Pakistan based on current per sq ft market rates (PKR).',
    howItWorks: 'Formula: Total Cost = Covered Area (sq ft) × Rate per sq ft.',
    workedExample: 'Building a 2,000 sq ft covered area house with the Grey Structure option (PKR 3,000 / sq ft) outputs PKR 6,000,000.',
    faqs: [
      { q: 'What is grey structure vs finishing?', a: 'Grey structure covers structure, brickwork, slab, and plaster; finishing covers tiles, paint, woodwork, and fittings.' },
      { q: 'What are current construction rates in Pakistan?', a: 'Rates vary by city and material quality; grey structure ranges from PKR 3,000 to 4,500/sq ft.' },
      { q: 'Does this include boundary wall and gate?', a: 'Usually calculated separately or as a flat percentage.' },
      { q: 'How do material price hikes impact estimates?', a: 'Steel and cement price volatility requires contingency buffers.' }
    ],
    whoUses: 'Who uses this: Home buyers, real estate investors, and estimators.'
  },
  'constr-roof-slab-steel': {
    intro: 'Calculate main and distribution steel rebar weight for solid concrete roof slabs.',
    howItWorks: 'Computes bar spacing and span length to estimate total steel tonnage.',
    workedExample: 'For a 1,000 sq ft reinforced concrete roof slab (~3.75 kg/sq ft), the calculator outputs 3,750 kg Steel Rebar.',
    faqs: [
      { q: 'What is alternate bar bending?', a: 'Bending bottom bars upward near supports to handle negative bending moments.' },
      { q: 'What is distribution steel?', a: 'Perpendicular bars holding main reinforcement bars in place.' },
      { q: 'What is chair in slab steel?', a: 'Steel spacers supporting top mesh reinforcement above bottom mesh.' },
      { q: 'Why is concrete curing critical for slabs?', a: 'Keeps concrete wet for 14 days to achieve maximum design strength.' }
    ],
    whoUses: 'Who uses this: Steel fixers, structural engineers, and site contractors.'
  },
  'constr-terrazzo-flooring': {
    intro: 'Calculate cement, marble chips, and divider strip quantities for durable terrazzo (mosaic) flooring.',
    howItWorks: 'Computes floor area and dividing brass/plastic strip lengths.',
    workedExample: 'Laying terrazzo flooring across 500 sq ft outputs 25 White Cement Bags & 300 kg Chips.',
    faqs: [
      { q: 'What is terrazzo flooring?', a: 'A composite floor material poured in place using marble chips and cement binder.' },
      { q: 'Why use divider strips?', a: 'Prevents cracking during concrete shrinkage and creates geometric patterns.' },
      { q: 'Is grinding required?', a: 'Yes, heavy machine grinding and polishing reveal embedded marble chips.' },
      { q: 'Is terrazzo durable?', a: 'Extremely durable, lasting decades in commercial and residential buildings.' }
    ],
    whoUses: 'Who uses this: Flooring specialists, terrazzo artisans, and builders.'
  },
  'constr-compound-pillar': {
    intro: 'Calculate bricks, concrete, and steel required for constructing front gate compound pillars.',
    howItWorks: 'Computes pillar cross-sectional volume and foundation depth.',
    workedExample: 'Constructing 2 ornamental gate pillars at 8 ft height outputs 352 Bricks (or 10 pillars at 7 ft height outputs 1,540 Bricks).',
    faqs: [
      { q: 'Do compound pillars need rebar?', a: 'Yes, vertical steel columns inside pillars prevent toppling during earthquakes.' },
      { q: 'What is standard pillar width?', a: '12x12 inches to 18x18 inches depending on gate weight.' },
      { q: 'Can stone cladding be added?', a: 'Granite or slate stone cladding enhances front elevation aesthetics.' },
      { q: 'How deep is pillar foundation?', a: 'At least 3 feet below road level for firm anchorage.' }
    ],
    whoUses: 'Who uses this: Masons, gate fabricators, and homeowners.'
  },
  'constr-retaining-wall': {
    intro: 'Calculate concrete volume and masonry required for earth-retaining boundary walls in sloping plots.',
    howItWorks: 'Formula: Volume = Length × Height × Average Thickness, accounting for structural toe.',
    workedExample: 'A 50 ft long and 6 ft high retaining wall with 1.25 ft average thickness outputs 375.0 cu ft (13.89 cu yds) of concrete.',
    faqs: [
      { q: 'Why are weep holes needed?', a: 'Weep holes allow trapped groundwater behind the wall to drain, preventing hydrostatic pressure buildup.' },
      { q: 'Is counterfort reinforcement needed for high walls?', a: 'Walls over 10 ft high require structural counterfort buttresses.' },
      { q: 'What is backfill material?', a: 'Crushed gravel or coarse sand behind the wall aids drainage.' },
      { q: 'Does soil pressure dictate wall thickness?', a: 'Yes, active soil pressure determines base thickness and rebar sizing.' }
    ],
    whoUses: 'Who uses this: Geotechnical engineers, civil contractors, and developers.'
  },
  'const-drywall': {
    intro: 'Calculate number of drywall or gypsum board sheets (4x8 ft) required for interior partition walls and ceilings.',
    howItWorks: 'Formula: Sheets = (Total Wall Area / 32 sq ft) × 1.10 wastage factor.',
    workedExample: 'Drywall partitioning for 1,200 sq ft of wall surface requires approximately 42 sheets including cutting waste.',
    faqs: [
      { q: 'What is standard drywall sheet size?', a: '4 feet by 8 feet (32 sq ft per sheet).' },
      { q: 'What thickness is used for partitions?', a: '1/2 inch or 5/8 inch gypsum boards.' },
      { q: 'How are joints finished?', a: 'Joint compound (joint cement) and paper tape.' },
      { q: 'Can sound insulation be added inside?', a: 'Fiberglass or rockwool batts inside metal studs improve acoustic isolation.' }
    ],
    whoUses: 'Who uses this: Drywall installers, interior contractors, and builders.'
  },
  'const-roof-pitch': {
    intro: 'Calculate roof slope angle and total vertical rise from building span and pitch ratio for sloped roofs.',
    howItWorks: 'Formula: Total Rise = (Span / 2) × (Rise per Foot / 12); Angle = arctan(Rise / 12).',
    workedExample: 'A building span of 30 ft with a 6:12 pitch ratio yields a roof rise of 7.5 ft at a 26.6° angle.',
    faqs: [
      { q: 'What is roof pitch?', a: 'The vertical rise divided by the horizontal span (run).' },
      { q: 'Why is roof pitch important in snowy or rainy regions?', a: 'Steep pitches shed rainwater and snow rapidly, preventing leaks.' },
      { q: 'What materials suit low-pitch roofs?', a: 'Membrane roofing or standing seam metal panels.' },
      { q: 'How does pitch affect shingle quantity?', a: 'Steeper roofs have greater surface area than horizontal footprint.' }
    ],
    whoUses: 'Who uses this: Roofers, architects, and framing carpenters.'
  },
  'const-stair': {
    intro: 'Calculate number of risers, treads, and total stair run length for safe and ergonomic staircase construction.',
    howItWorks: 'Formula: Number of Risers = Total Height / Target Riser (approx 7 inches); Run = Treads × Tread Depth.',
    workedExample: 'A floor-to-floor height of 110 inches divided by a 7.5-inch riser yields 15 risers and 14 treads spanning 140 inches.',
    faqs: [
      { q: 'What is ideal riser and tread size?', a: 'Riser around 6.5 to 7.5 inches; tread around 10 to 11 inches.' },
      { q: 'What is the 2R + T rule?', a: 'Twice the riser plus tread should equal 24 to 25 inches for comfortable stepping.' },
      { q: 'What is staircase headroom?', a: 'At least 6 feet 8 inches of vertical clearance.' },
      { q: 'Are handrails mandatory?', a: 'Yes, handrails are required for safety on stairs with 3 or more steps.' }
    ],
    whoUses: 'Who uses this: Staircase fabricators, masons, and architects.'
  },

  // --- HEALTH & FITNESS ---
  'health-bmi-calc': {
    intro: 'Calculate your Body Mass Index (BMI) to evaluate whether you fall into an underweight, normal, overweight, or obese weight category.',
    howItWorks: 'Formula: BMI = Weight (kg) / [Height (m)]². Categorizes body mass relative to height.',
    workedExample: 'A person weighing 70 kg with a height of 175 cm (1.75 meters) outputs a BMI of 22.9 (Normal weight).',
    faqs: [
      { q: 'Does BMI measure body fat directly?', a: 'No, BMI is an indirect estimate based on height and weight.' },
      { q: 'Is BMI accurate for athletes?', a: 'Athletes with high muscle mass may have a high BMI despite low body fat.' },
      { q: 'What is a healthy BMI range?', a: 'Between 18.5 and 24.9 is considered normal for adults.' },
      { q: 'How often should BMI be checked?', a: 'Periodically as part of general wellness tracking.' }
    ],
    whoUses: 'Who uses this: Adults, fitness enthusiasts, and wellness seekers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-water-calc': {
    intro: 'Calculate your recommended daily water intake based on body weight, climate, and physical activity levels.',
    howItWorks: 'Multiplies body weight by activity multiplier (approx 35-40 ml per kg of body weight).',
    workedExample: 'A 70 kg individual with moderate daily activity outputs 2.82 Liters (95 fl oz) of recommended water intake per day.',
    faqs: [
      { q: 'Does tea or coffee count toward water intake?', a: 'Beverages contribute to hydration, though pure water is optimal.' },
      { q: 'How does hot weather affect hydration?', a: 'Sweating increases fluid requirements significantly, especially in Pakistani summers.' },
      { q: 'Can you drink too much water?', a: 'Excessive overhydration can lead to hyponatremia (water intoxication).' },
      { q: 'What are signs of dehydration?', a: 'Dark urine, dry mouth, fatigue, and headaches.' }
    ],
    whoUses: 'Who uses this: Athletes, dieters, and health-conscious individuals.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-ideal-weight': {
    intro: 'Estimate your ideal body weight range using trusted clinical formulas like Devine, Robinson, and Miller.',
    howItWorks: 'Calculates ideal weight based on gender and height above 5 feet (152.4 cm).',
    workedExample: 'For a male of 175 cm height, the Devine formula outputs an ideal body weight of 70.5 kg (155.3 lbs).',
    faqs: [
      { q: 'Do ideal weight formulas apply to everyone?', a: 'They provide general statistical averages rather than strict personal mandates.' },
      { q: 'Why do formulas differ by gender?', a: 'Average body composition and bone density differ between males and females.' },
      { q: 'Should body frame size be considered?', a: 'Yes, individuals with large frames may sit at the upper end of the range.' },
      { q: 'Is ideal weight the same as competition weight?', a: 'Athletes often maintain different weights based on performance goals.' }
    ],
    whoUses: 'Who uses this: Individuals, nutritionists, and dieters.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-calorie-needs': {
    intro: 'Calculate your Total Daily Energy Expenditure (TDEE) to know how many calories you burn daily.',
    howItWorks: 'Multiplies Basal Metabolic Rate (BMR) by an activity factor ranging from 1.2 (sedentary) to 1.9 (very active).',
    workedExample: 'A 30-year-old male weighing 75 kg at 178 cm height with moderate exercise (1.55) outputs 2662 kcal / day (BMR: 1718 kcal).',
    faqs: [
      { q: 'What is BMR?', a: 'Basal Metabolic Rate is calories burned at complete rest to maintain vital organ function.' },
      { q: 'How do I lose weight using TDEE?', a: 'Consume fewer calories than your TDEE (caloric deficit).' },
      { q: 'Is calorie counting precise?', a: 'Food labels and activity trackers have a margin of error.' },
      { q: 'Does muscle mass affect calorie burn?', a: 'Yes, muscle tissue burns more calories at rest than fat tissue.' }
    ],
    whoUses: 'Who uses this: Dieters, athletes, and nutrition planners.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-body-fat': {
    intro: 'Estimate your body fat percentage using the US Navy circumference method with neck, waist, and hip measurements.',
    howItWorks: 'Uses logarithmic regression formulas based on body circumference and height.',
    workedExample: 'A male measuring 175 cm in height, 38 cm neck circumference, and 85 cm waist circumference outputs 16.9% Body Fat.',
    faqs: [
      { q: 'Is tape measurement accurate?', a: 'It provides a reliable field estimate compared to clinical DEXA scans.' },
      { q: 'What is essential body fat?', a: 'Minimum fat required for normal physiological function (2-5% for men, 10-13% for women).' },
      { q: 'How should waist be measured?', a: 'Horizontally at navel level (for men) or narrowest point (for women).' },
      { q: 'Can body fat drop too low?', a: 'Extremely low body fat can disrupt hormonal balance and immunity.' }
    ],
    whoUses: 'Who uses this: Fitness trainers, bodybuilders, and health seekers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-due-date': {
    intro: 'Calculate estimated childbirth due date based on the first day of your last menstrual period (LMP) using Naegele’s rule.',
    howItWorks: 'Adds 7 days to LMP and advances 9 calendar years/months. Formula: Due Date = LMP + 7 days - 3 months + 1 year.',
    workedExample: 'If the last menstrual period started on 2026-01-01, the calculator outputs an estimated due date of Thu Oct 08 2026.',
    faqs: [
      { q: 'Are babies born exactly on their due date?', a: 'Only about 4-5% of babies arrive precisely on their calculated due date.' },
      { q: 'What is full-term pregnancy?', a: 'Pregnancy lasting between 37 and 42 weeks.' },
      { q: 'Can ultrasound give a better estimate?', a: 'First-trimester ultrasound dating is often more precise than LMP calculation.' },
      { q: 'Does cycle length matter?', a: 'Naegele’s rule assumes a standard 28-day menstrual cycle.' }
    ],
    whoUses: 'Who uses this: Expectant mothers, families, and obstetricians.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-hr-zone': {
    intro: 'Calculate aerobic and anaerobic heart rate training zones to optimize cardiovascular endurance and fat burning.',
    howItWorks: 'Determines heart rate percentage brackets based on Maximum Heart Rate (220 minus age).',
    workedExample: 'For a 30-year-old with a Max HR of 190 bpm, the fat-burning zone (60-70%) is 114 to 133 bpm.',
    faqs: [
      { q: 'What is Max HR formula?', a: 'Traditional formula is 220 minus age.' },
      { q: 'Which zone burns most fat percentage?', a: 'Lower intensity zones burn a higher percentage of calories from fat.' },
      { q: 'Should I wear a chest strap monitor?', a: 'Chest strap heart rate monitors are more accurate than optical wrist sensors.' },
      { q: 'Can heart rate be affected by caffeine or stress?', a: 'Yes, stimulants and stress elevate resting and active heart rates.' }
    ],
    whoUses: 'Who uses this: Runners, cyclists, and cardio athletes.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-steps-calories': {
    intro: 'Estimate calories burned walking or running based on daily step counts, height, and body weight.',
    howItWorks: 'Multiplies step count by average stride length and body weight coefficient.',
    workedExample: 'Walking 10,000 steps at a body weight of 70 kg outputs 399 kcal burned.',
    faqs: [
      { q: 'How many calories in 10,000 steps?', a: 'Roughly 350 to 500 calories for an average adult.' },
      { q: 'Does walking speed matter?', a: 'Brighter, faster pacing increases caloric expenditure.' },
      { q: 'How long does 10k steps take?', a: 'Approximately 90 minutes of continuous walking.' },
      { q: 'Are pedometers accurate?', a: 'Wrist or phone accelerometers provide close estimates.' }
    ],
    whoUses: 'Who uses this: Walkers, fitness trackers users, and weight-losers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-macros': {
    intro: 'Calculate daily macronutrient targets (proteins, carbohydrates, and fats) tailored to your fitness and body goals.',
    howItWorks: 'Allocates daily calorie target into grams of protein (4 kcal/g), carbs (4 kcal/g), and fats (9 kcal/g).',
    workedExample: 'A 2,000 calorie diet split 30% protein, 40% carbs, and 30% fats yields 150g protein, 200g carbs, and 67g fats.',
    faqs: [
      { q: 'What are macros?', a: 'Macronutrients are the three main nutritional building blocks: protein, carbs, and fats.' },
      { q: 'How much protein is needed for muscle building?', a: 'Typically 1.6 to 2.2 grams per kilogram of body weight.' },
      { q: 'Are carbs bad for weight loss?', a: 'Carbs are not inherently bad; total caloric balance dictates weight loss.' },
      { q: 'Why is dietary fat important?', a: 'Fats regulate hormones, brain function, and nutrient absorption.' }
    ],
    whoUses: 'Who uses this: Fitness athletes, nutritionists, and dieters.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-protein-intake': {
    intro: 'Calculate optimal daily protein intake grams required for muscle recovery, growth, and athletic performance.',
    howItWorks: 'Multiplies body weight in kg by activity multiplier (e.g., 1.2g to 2.0g per kg).',
    workedExample: 'An 80 kg strength trainer selecting heavy training intensity (2.2g per kg body weight) outputs 176 grams / day of protein.',
    faqs: [
      { q: 'Can the body absorb 50g protein in one meal?', a: 'The body can absorb and utilize large amounts of protein across meals.' },
      { q: 'What are good protein sources in Pakistan?', a: 'Chicken breast, lentils (daal), eggs, paneer, beef, and whey protein.' },
      { q: 'Is excess protein harmful?', a: 'High protein is generally safe for healthy kidneys, but hydration is essential.' },
      { q: 'Do plant proteins count?', a: 'Yes, combining plant sources ensures complete amino acid profiles.' }
    ],
    whoUses: 'Who uses this: Bodybuilders, athletes, and gym goers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-bmr-calc': {
    intro: 'Calculate your Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation for clinical baseline calorie expenditure.',
    howItWorks: 'Formula factors in weight, height, age, and gender at complete rest.',
    workedExample: 'A 35-year-old female, 165 cm tall, weighing 65 kg outputs a BMR of 1345 kcal / day.',
    faqs: [
      { q: 'What is BMR vs TDEE?', a: 'BMR is energy at rest; TDEE includes daily activity and exercise.' },
      { q: 'Why does BMR decrease with age?', a: 'Gradual loss of lean muscle mass and metabolic slowdown.' },
      { q: 'Can BMR be tested in a lab?', a: 'Yes, via indirect calorimetry testing oxygen consumption.' },
      { q: 'Should I eat below my BMR?', a: 'Eating below BMR for prolonged periods can harm metabolism.' }
    ],
    whoUses: 'Who uses this: Dietitians, clinical researchers, and weight managers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-fat-burn-hr': {
    intro: 'Calculate optimal heart rate training zone specifically tuned for maximizing fat oxidation during workouts.',
    howItWorks: 'Targets 60% to 70% of heart rate reserve or maximum heart rate.',
    workedExample: 'For a 40-year-old (max heart rate 180 bpm), the fat-burning zone outputs 108 - 126 bpm.',
    faqs: [
      { q: 'Does fat burn zone mean weight loss?', a: 'Total daily calorie deficit governs weight loss, regardless of fuel source.' },
      { q: 'Is higher intensity better?', a: 'High-intensity workouts burn more total calories per minute.' },
      { q: 'How long should fat burn sessions last?', a: '30 to 60 minutes of steady-state cardio.' },
      { q: 'Can I wear a smartwatch?', a: 'Smartwatches provide continuous real-time heart rate tracking.' }
    ],
    whoUses: 'Who uses this: Weight-loss clients, runners, and trainers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-whtr': {
    intro: 'Calculate Waist-to-Height Ratio (WHtR) as a robust screening tool for central adiposity and cardiovascular health risk.',
    howItWorks: 'Formula: WHtR = Waist Circumference / Height (both in same units).',
    workedExample: 'A person with a 32-inch waist and 64-inch height has a WHtR of 0.50, right at the healthy threshold boundary.',
    faqs: [
      { q: 'What is the golden rule of WHtR?', a: 'Keep your waist circumference to less than half your height (WHtR < 0.5).' },
      { q: 'Why is WHtR preferred over BMI?', a: 'WHtR accounts for abdominal fat distribution better than BMI.' },
      { q: 'How should waist be measured?', a: 'Midway between lower rib margin and iliac crest.' },
      { q: 'Does high WHtR indicate risk?', a: 'Yes, elevated visceral fat correlates with metabolic syndrome.' }
    ],
    whoUses: 'Who uses this: Health screeners, doctors, and individuals.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-calorie-deficit': {
    intro: 'Calculate required daily calorie deficit and projected timeline to achieve your target weight loss goal.',
    howItWorks: 'A deficit of 500 calories/day yields roughly 0.5 kg of fat loss per week (3,500 kcal per pound of fat).',
    workedExample: 'With 2500 kcal maintenance calories (TDEE) and a 0.5 kg weekly weight loss goal (Daily Calorie Deficit: 550 kcal), the target intake outputs 1950 kcal / day.',
    faqs: [
      { q: 'Is a 1,000 calorie deficit safe?', a: 'Too large a deficit can cause fatigue and muscle loss; 300-500 kcal is sustainable.' },
      { q: 'Why does weight loss plateau?', a: 'Metabolic adaptation as body weight drops reduces daily energy expenditure.' },
      { q: 'Should I combine diet with exercise?', a: 'Yes, exercise preserves lean muscle mass during weight loss.' },
      { q: 'How many calories in 1 kg of fat?', a: 'Approximately 7,700 kcal.' }
    ],
    whoUses: 'Who uses this: Dieters, nutritionists, and weight-loss coaches.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-sleep-calc': {
    intro: 'Calculate ideal bedtime or wake-up times based on 90-minute human sleep cycles to wake up feeling refreshed.',
    howItWorks: 'Coordinates sleep cycles so you wake up at the end of a light sleep stage rather than deep sleep.',
    workedExample: 'For a wake-up time of 06:00 (including a 15-minute fall-asleep buffer), the calculator outputs 20:45 (6 Cycles), 22:15 (5 Cycles), and 23:45 (4 Cycles).',
    faqs: [
      { q: 'How long is one sleep cycle?', a: 'Approximately 90 minutes (moving through light, deep, and REM sleep).' },
      { q: 'How many hours of sleep do adults need?', a: 'Generally 7 to 9 hours per night.' },
      { q: 'Why do we feel groggy when woken up?', a: 'Sleep inertia occurs when woken up mid-deep sleep.' },
      { q: 'Does falling asleep take time?', a: 'The calculator assumes an average 14 minutes to fall asleep.' }
    ],
    whoUses: 'Who uses this: Students, shift workers, and sleep seekers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-caffeine-limit': {
    intro: 'Calculate safe daily caffeine consumption limits based on body weight and clinical guidelines (max 400mg/day for adults).',
    howItWorks: 'Compares consumer intake against FDA safety threshold of 400 mg per day.',
    workedExample: 'For an adult weighing 70 kg (5.7 mg/kg capped at 400 mg), the calculator outputs a daily safe limit of 399 mg / day (Approx. 4.2 standard cups of coffee).',
    faqs: [
      { q: 'How much caffeine in 1 cup of tea?', a: 'Roughly 40 to 60 mg depending on brew strength.' },
      { q: 'What are symptoms of caffeine overdose?', a: 'Jitters, insomnia, elevated heart rate, and anxiety.' },
      { q: 'Is caffeine safe for pregnant women?', a: 'Clinical guidelines recommend limiting caffeine to under 200 mg daily.' },
      { q: 'Does caffeine stay in the body long?', a: 'Half-life of caffeine is about 3 to 5 hours.' }
    ],
    whoUses: 'Who uses this: Coffee drinkers, tea lovers, and health-conscious adults.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-target-weight-timeline': {
    intro: 'Project realistic arrival dates and weekly milestones for reaching your goal physique.',
    howItWorks: 'Divides total weight differential by safe weekly loss/gain rate (0.5 kg/week).',
    workedExample: 'Moving from 78 kg to 72 kg (losing 6.0 kg) at 0.5 kg per week outputs 12.0 weeks (~2.8 months).',
    faqs: [
      { q: 'Is rapid weight loss sustainable?', a: 'Rapid weight loss often leads to muscle loss and weight regain (yoyo dieting).' },
      { q: 'What is a safe weekly weight loss rate?', a: '0.5 to 1.0 kg per week is recommended by health authorities.' },
      { q: 'Why do weight scales fluctuate daily?', a: 'Water retention, sodium intake, and digestive contents cause daily shifts.' },
      { q: 'Should I track body measurements too?', a: 'Yes, tape measurements often show fat loss when scale weight stalls.' }
    ],
    whoUses: 'Who uses this: Weight-loss clients, brides-to-be, and athletes.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-one-rep-max': {
    intro: 'Estimate your One-Rep Max (1RM) for squats, bench press, or deadlifts using submaximal weight and rep performance.',
    howItWorks: 'Uses Epley formula: 1RM = Weight × [1 + (Reps / 30)].',
    workedExample: 'Lifting 100 kg for 8 reps estimates a one-rep max of approximately 127 kg.',
    faqs: [
      { q: 'Why not test 1RM directly?', a: 'Maximal testing increases injury risk, especially without spotters.' },
      { q: 'Are rep max formulas exact?', a: 'They are accurate for rep ranges under 10 reps.' },
      { q: 'What is RPE?', a: 'Rate of Perceived Exertion measures how hard a set felt on a 1-10 scale.' },
      { q: 'How often should strength be tested?', a: 'Every 8 to 12 weeks during structured progressive overload programs.' }
    ],
    whoUses: 'Who uses this: Powerlifters, weightlifters, and gym coaches.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-blood-pressure': {
    intro: 'Classify your blood pressure readings into clinical categories ranging from normal to stage 2 hypertension.',
    howItWorks: 'Evaluates systolic (top) and diastolic (bottom) mmHg blood pressure measurements.',
    workedExample: 'Entering a reading of 120/80 mmHg outputs High Blood Pressure (Stage 1) based on the calculator threshold rules (diastolic >= 80).',
    faqs: [
      { q: 'What is normal blood pressure?', a: 'Less than 120/80 mmHg.' },
      { q: 'When is blood pressure considered high?', a: 'Readings consistently above 130/80 mmHg indicate hypertension.' },
      { q: 'Should blood pressure be measured at rest?', a: 'Yes, sit quietly for 5 minutes before taking a reading.' },
      { q: 'Can salt intake raise blood pressure?', a: 'High sodium diets contribute to elevated blood pressure in salt-sensitive individuals.' }
    ],
    whoUses: 'Who uses this: Patients, nurses, and wellness monitors.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-lean-body-mass': {
    intro: 'Calculate Lean Body Mass (LBM) representing total body weight minus body fat mass.',
    howItWorks: 'Formula: LBM = Total Weight - (Total Weight × Body Fat % / 100).',
    workedExample: 'Using the Boer formula for a male weighing 75 kg at 178 cm height outputs 58.9 kg Lean Mass (Estimated Fat Mass: 16.1 kg).',
    faqs: [
      { q: 'Why is LBM important for dosing medications?', a: 'Certain medications distribute primarily into lean tissue rather than body fat.' },
      { q: 'Does LBM include bone and water?', a: 'Yes, bones, organs, muscles, and water make up lean mass.' },
      { q: 'How can LBM be increased?', a: 'Resistance training and adequate protein nutrition.' },
      { q: 'Is LBM the same as muscle mass?', a: 'Muscle is the largest component of LBM, but not the entirety.' }
    ],
    whoUses: 'Who uses this: Fitness coaches, dietitians, and athletes.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-bac-estimator': {
    intro: 'Estimate Blood Alcohol Concentration (BAC) using the Widmark formula based on drinks consumed and body weight.',
    howItWorks: 'Factors in alcohol volume, body water distribution ratio, and elapsed time metabolism.',
    workedExample: 'For a 75 kg male who consumed 3 standard drinks over 2 hours, the Widmark formula outputs an estimated 0.052% BAC.',
    faqs: [
      { q: 'Can BAC formulas predict sobriety precisely?', a: 'No, individual metabolism rates vary significantly.' },
      { q: 'What is the legal driving limit in many jurisdictions?', a: 'Often 0.08% or strictly 0.00% zero tolerance.' },
      { q: 'Does food slow alcohol absorption?', a: 'Yes, food in the stomach delays peak blood alcohol concentration.' },
      { q: 'Can coffee sober someone up?', a: 'Only time metabolizes alcohol; coffee only makes you an alert intoxicated person.' }
    ],
    whoUses: 'Who uses this: Educators, safety researchers, and adults.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-smoking-cost': {
    intro: 'Calculate financial and health time toll of cigarette smoking over months and years.',
    howItWorks: 'Formula: Total Cost = Packs per Day × Price per Pack × 365 days × Years.',
    workedExample: 'Smoking 1 pack per day at PKR 350 per pack over 1 year outputs PKR 127,750 Spent (and PKR 638,750 Spent over 5 years).',
    faqs: [
      { q: 'How quickly does health improve after quitting?', a: 'Heart rate drops within weeks; lung function improves significantly within months.' },
      { q: 'Can money saved be invested?', a: 'Investing cigarette savings in mutual funds yields substantial long-term wealth.' },
      { q: 'Are vaping costs similar?', a: 'Vaping devices and e-liquids also incur recurring expenses.' },
      { q: 'What support is available for quitting?', a: 'Nicotine replacement therapy and counseling.' }
    ],
    whoUses: 'Who uses this: Smokers looking to quit, budgeters, and health seekers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-running-pace': {
    intro: 'Calculate running pace in minutes per kilometer or mile from total distance and completion time.',
    howItWorks: 'Formula: Pace = Total Time (Minutes) / Distance (km).',
    workedExample: 'Running 5 km in 28 minutes results in an average pace of 5 minutes 36 seconds per kilometer.',
    faqs: [
      { q: 'What is a good 5k running pace?', a: 'Varies by fitness level; 5 to 6 min/km is common for recreational runners.' },
      { q: 'How to improve running speed?', a: 'Incorporate interval training and tempo runs.' },
      { q: 'Is km/h faster than min/km?', a: 'Speed in km/h is distance per hour; pace is time per kilometer.' },
      { q: 'Should I warm up before running?', a: 'Dynamic stretches prevent injury and prepare joints.' }
    ],
    whoUses: 'Who uses this: Runners, joggers, and marathon trainers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-karvonen-hr': {
    intro: 'Calculate precise target heart rate zones using the Karvonen formula which factors in resting heart rate.',
    howItWorks: 'Formula: Target HR = [(Max HR - Resting HR) × Intensity %] + Resting HR.',
    workedExample: 'For a 30-year-old (Max HR: 190 bpm) with a resting HR of 65 bpm at 70% intensity, target training heart rate outputs 153 bpm.',
    faqs: [
      { q: 'Why is Karvonen formula more accurate?', a: 'It accounts for individual resting fitness levels unlike simple percentage of max HR.' },
      { q: 'How to measure resting heart rate?', a: 'Count pulse beats for 60 seconds immediately upon waking up.' },
      { q: 'Does better fitness lower resting HR?', a: 'Yes, aerobically fit individuals often have resting heart rates below 60 bpm.' },
      { q: 'Is heart rate training safe?', a: 'Consult a physician before starting vigorous cardiovascular routines.' }
    ],
    whoUses: 'Who uses this: Endurance athletes, coaches, and fitness trainees.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-bsa': {
    intro: 'Calculate Body Surface Area (BSA) using the Mosteller formula for clinical drug dosing and medical assessments.',
    howItWorks: 'Formula: BSA = √[(Height in cm × Weight in kg) / 3600].',
    workedExample: 'An adult weighing 70 kg and 175 cm tall outputs a Body Surface Area of 1.84 m² using the Mosteller formula.',
    faqs: [
      { q: 'Why is BSA used in medicine?', a: 'It is a more accurate indicator of metabolic mass than weight alone for chemotherapy dosing.' },
      { q: 'What is normal adult BSA?', a: 'Average adult human BSA is approximately 1.7 to 1.9 m².' },
      { q: 'Are other formulas used?', a: 'Du Bois and Haycock formulas are also used in clinical settings.' },
      { q: 'Does BSA account for hydration?', a: 'It estimates total external cutaneous surface area.' }
    ],
    whoUses: 'Who uses this: Medical professionals, pharmacists, and researchers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-whr': {
    intro: 'Calculate Waist-to-Hip Ratio (WHR) to assess abdominal fat distribution and metabolic health risks.',
    howItWorks: 'Formula: WHR = Waist Circumference / Hip Circumference.',
    workedExample: 'A waist of 82 cm and hip of 100 cm yields a WHR of 0.82, which is within low-risk thresholds.',
    faqs: [
      { q: 'What is high WHR for men and women?', a: 'Above 0.90 for men and above 0.85 for women indicates central obesity risk.' },
      { q: 'Why is apple vs pear shape important?', a: 'Apple shape (abdominal fat) carries higher cardiovascular risk than pear shape (hip fat).' },
      { q: 'How to measure hips correctly?', a: 'At the widest part of the buttocks.' },
      { q: 'Can targeted exercise reduce waist fat?', a: 'Spot reduction is a myth; overall fat loss reduces waist circumference.' }
    ],
    whoUses: 'Who uses this: Clinicians, fitness assessors, and individuals.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-water-target': {
    intro: 'Calculate daily fluid hydration targets tailored to body weight and exercise activity intensity.',
    howItWorks: 'Multiplies body mass by activity scaling coefficient.',
    workedExample: 'A 70 kg active person requires roughly 2.8 liters of water daily.',
    faqs: [
      { q: 'Should I drink during workouts?', a: 'Sip water every 15-20 minutes during intense exercise sessions.' },
      { q: 'Do electrolytes matter?', a: 'Electrolytes (sodium, potassium) are essential during heavy sweating in hot weather.' },
      { q: 'Can clear urine indicate hydration?', a: 'Pale yellow urine indicates good hydration status.' },
      { q: 'Does food provide water?', a: 'Fruits and vegetables contribute about 20% of daily water intake.' }
    ],
    whoUses: 'Who uses this: Athletes, outdoor workers, and wellness seekers.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  },
  'health-body-fat-mass': {
    intro: 'Calculate absolute fat mass and lean muscle mass weights from total body weight and body fat percentage.',
    howItWorks: 'Formula: Fat Mass = Weight × (Body Fat % / 100); Lean Mass = Weight - Fat Mass.',
    workedExample: 'An 75 kg individual with 20% body fat carries 15 kg of fat mass and 60 kg of lean body mass.',
    faqs: [
      { q: 'Why track fat mass instead of scale weight alone?', a: 'Scale weight does not distinguish between muscle gain and fat loss.' },
      { q: 'How to reduce fat mass while preserving lean mass?', a: 'Combine resistance training with adequate protein and a mild caloric deficit.' },
      { q: 'What is healthy body fat percentage for men?', a: 'Typically 10% to 20% for fitness.' },
      { q: 'What is healthy body fat percentage for women?', a: 'Typically 18% to 28% for fitness.' }
    ],
    whoUses: 'Who uses this: Personal trainers, nutritionists, and dieters.',
    medicalDisclaimer: 'Disclaimer: This result is an estimate for informational purposes only and does not constitute medical advice.'
  }
};
