import { Category } from "../../types";

export const constructionCategory: Category = {
    id: 'construction',
    name: 'Construction',
    iconName: 'Home',
    description: 'Brick, concrete mix, paint, tile, steel bar weight, slab, plaster, excavation, Marla/Kanal land conversions, and Pakistan construction estimators.',
    color: 'from-stone-600 to-amber-900',
    calculators: [
      {
        id: 'constr-brick-calc',
        name: 'Brick Calculator',
        categoryId: 'construction',
        description: 'Estimate bricks needed based on wall length, height, and wastage %.',
        inputs: [
          { id: 'length', label: 'Wall Length (feet)', type: 'number', defaultValue: 30 },
          { id: 'height', label: 'Wall Height (feet)', type: 'number', defaultValue: 10 },
          { id: 'wastage', label: 'Wastage Percentage (%)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const area = Number(vals.length) * Number(vals.height);
          const baseBricks = area * 7; // approx 7 standard bricks per sq ft
          const total = baseBricks * (1 + Number(vals.wastage) / 100);
          return {
            result: `${Math.ceil(total)} bricks`,
            secondaryResult: `Wall Area: ${area} sq ft | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Bricks = Wall Area × 7 × (1 + Wastage%)'
          };
        }
      },
      {
        id: 'constr-concrete-calc',
        name: 'Concrete Calculator (Mix Ratio 1:2:4)',
        categoryId: 'construction',
        description: 'Calculate cement bags, sand, and crush for concrete volume with mix ratio 1:2:4.',
        inputs: [
          { id: 'volume', label: 'Wet Concrete Volume (Cubic Feet)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const wetVol = Number(vals.volume);
          const dryVol = wetVol * 1.54; // dry volume factor
          const cementParts = 1 / 7;
          const sandParts = 2 / 7;
          const crushParts = 4 / 7;

          const cementCuFt = dryVol * cementParts;
          const cementBags = cementCuFt / 1.25; // 1 bag cement = 1.25 cu ft
          const sandCuFt = dryVol * sandParts;
          const crushCuFt = dryVol * crushParts;

          return {
            result: `${Math.ceil(cementBags)} Cement Bags (50kg)`,
            secondaryResult: `Sand: ${Math.round(sandCuFt)} cu ft | Crush: ${Math.round(crushCuFt)} cu ft | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Dry Volume = Wet Vol × 1.54, Cement bags = (Dry Vol × 1/7) / 1.25'
          };
        }
      },
      {
        id: 'constr-paint-calc',
        name: 'Paint Calculator',
        categoryId: 'construction',
        description: 'Calculate liters or gallons of paint needed for wall areas and coats.',
        inputs: [
          { id: 'area', label: 'Wall Surface Area (sq ft)', type: 'number', defaultValue: 500 },
          { id: 'coats', label: 'Number of Coats', type: 'number', defaultValue: 2 },
          { id: 'coverage', label: 'Coverage per Liter (sq ft / liter)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const area = Number(vals.area);
          const coats = Number(vals.coats);
          const coverage = Number(vals.coverage);
          if (coverage <= 0) return { result: 'Coverage must be > 0' };
          const totalArea = area * coats;
          const liters = totalArea / coverage;
          return {
            result: `${liters.toFixed(1)} Liters`,
            secondaryResult: `Total Painted Area: ${totalArea} sq ft | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Liters = (Area × Coats) / Coverage per Liter'
          };
        }
      },
      {
        id: 'constr-tile-calc',
        name: 'Tile and Flooring Calculator',
        categoryId: 'construction',
        description: 'Calculate tiles needed for room flooring with wastage percentage.',
        inputs: [
          { id: 'roomArea', label: 'Room Floor Area (sq ft)', type: 'number', defaultValue: 300 },
          { id: 'tileSize', label: 'Tile Size (sq ft per tile e.g. 4 for 2x2 ft)', type: 'number', defaultValue: 4 },
          { id: 'wastage', label: 'Wastage Percentage (%)', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const room = Number(vals.roomArea);
          const tile = Number(vals.tileSize);
          const wastage = Number(vals.wastage);
          if (tile <= 0) return { result: 'Tile size must be > 0' };
          const baseTiles = room / tile;
          const totalTiles = baseTiles * (1 + wastage / 100);
          return {
            result: `${Math.ceil(totalTiles)} tiles`,
            secondaryResult: `Base Tiles: ${Math.ceil(baseTiles)} | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Tiles = (Room Area / Tile Size) × (1 + Wastage%)'
          };
        }
      },
      {
        id: 'constr-steel-weight',
        name: 'Steel Bar Weight Calculator',
        categoryId: 'construction',
        description: 'Calculate steel rebar weight using formula: Weight per meter = (d × d) / 162.',
        inputs: [
          { id: 'diameter', label: 'Bar Diameter (mm)', type: 'number', defaultValue: 12 },
          { id: 'length', label: 'Bar Length (meters)', type: 'number', defaultValue: 12 },
          { id: 'quantity', label: 'Number of Bars', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const d = Number(vals.diameter);
          const len = Number(vals.length);
          const qty = Number(vals.quantity);
          const weightPerMeter = (d * d) / 162;
          const totalWeight = weightPerMeter * len * qty;
          return {
            result: `${totalWeight.toFixed(2)} kg`,
            secondaryResult: `Weight per meter: ${weightPerMeter.toFixed(3)} kg/m | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Weight (kg) = [(d²) / 162] × Length (m) × Quantity'
          };
        }
      },
      {
        id: 'constr-slab-volume',
        name: 'Slab Area and Volume Calculator',
        categoryId: 'construction',
        description: 'Calculate slab surface area and concrete volume in cubic feet and cubic yards.',
        inputs: [
          { id: 'length', label: 'Slab Length (feet)', type: 'number', defaultValue: 30 },
          { id: 'width', label: 'Slab Width (feet)', type: 'number', defaultValue: 20 },
          { id: 'thickness', label: 'Slab Thickness (inches)', type: 'number', defaultValue: 6 }
        ],
        calculate: (vals) => {
          const l = Number(vals.length);
          const w = Number(vals.width);
          const t = Number(vals.thickness) / 12; // inches to feet
          const area = l * w;
          const cuFt = area * t;
          const cuYds = cuFt / 27;
          return {
            result: `${cuFt.toFixed(1)} cu ft (${cuYds.toFixed(2)} cu yds)`,
            secondaryResult: `Surface Area: ${area} sq ft | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Volume (cu ft) = Length × Width × Thickness (ft)'
          };
        }
      },
      {
        id: 'constr-plaster-calc',
        name: 'Plaster Calculator',
        categoryId: 'construction',
        description: 'Calculate mortar volume, cement bags, and sand required for wall plaster.',
        inputs: [
          { id: 'area', label: 'Wall Surface Area (sq ft)', type: 'number', defaultValue: 400 },
          { id: 'thickness', label: 'Plaster Thickness (inches)', type: 'number', defaultValue: 0.5 },
          { id: 'ratio', label: 'Cement to Sand Ratio (e.g. 4 for 1:4)', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const area = Number(vals.area);
          const thick = Number(vals.thickness) / 12;
          const ratio = Number(vals.ratio);
          const wetVol = area * thick * 1.35;
          const dryVol = wetVol * 1.33;
          const cementCuFt = dryVol * (1 / (1 + ratio));
          const cementBags = cementCuFt / 1.25;
          const sandCuFt = dryVol * (ratio / (1 + ratio));
          return {
            result: `${Math.ceil(cementBags)} Cement Bags`,
            secondaryResult: `Sand: ${Math.round(sandCuFt)} cu ft | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Mortar Volume = Area × Thickness × Dry Factor'
          };
        }
      },
      {
        id: 'constr-excavation-calc',
        name: 'Excavation Volume Calculator',
        categoryId: 'construction',
        description: 'Calculate earthwork excavation volume for foundations and basements.',
        inputs: [
          { id: 'length', label: 'Excavation Length (feet)', type: 'number', defaultValue: 40 },
          { id: 'width', label: 'Excavation Width (feet)', type: 'number', defaultValue: 30 },
          { id: 'depth', label: 'Excavation Depth (feet)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const l = Number(vals.length);
          const w = Number(vals.width);
          const d = Number(vals.depth);
          const cuFt = l * w * d;
          const cuYds = cuFt / 27;
          return {
            result: `${cuFt.toLocaleString()} cu ft (${cuYds.toFixed(1)} cu yds)`,
            secondaryResult: `Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Excavation Volume = Length × Width × Depth'
          };
        }
      },
      // 17 New Construction Calculators Added Below (Pakistan-friendly)
      {
        id: 'constr-marla-to-sqft',
        name: 'Marla to Square Feet Converter',
        categoryId: 'construction',
        description: 'Convert Marla and Kanal land measurements to Square Feet (1 Marla = 272.25 sq ft).',
        inputs: [
          { id: 'marla', label: 'Marla', type: 'number', defaultValue: 5 },
          { id: 'kanal', label: 'Kanal', type: 'number', defaultValue: 0 }
        ],
        calculate: (vals) => {
          const m = Number(vals.marla);
          const k = Number(vals.kanal);
          const totalSqFt = (k * 20 * 272.25) + (m * 272.25);
          const totalSqYards = totalSqFt / 9;
          return {
            result: `${totalSqFt.toLocaleString()} Square Feet`,
            secondaryResult: `Equivalent to ${totalSqYards.toFixed(1)} sq yards | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Sq Ft = (Kanal × 20 × 272.25) + (Marla × 272.25)'
          };
        }
      },
      {
        id: 'constr-sqft-to-marla',
        name: 'Square Feet to Marla Converter',
        categoryId: 'construction',
        description: 'Convert Square Feet area into Marla and Kanal units.',
        inputs: [
          { id: 'sqft', label: 'Area in Square Feet', type: 'number', defaultValue: 2250 }
        ],
        calculate: (vals) => {
          const sq = Number(vals.sqft);
          const totalMarla = sq / 272.25;
          const kanal = Math.floor(totalMarla / 20);
          const marla = totalMarla % 20;
          return {
            result: `${kanal} Kanal, ${marla.toFixed(2)} Marla`,
            secondaryResult: `Total Marlas: ${totalMarla.toFixed(2)} | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Marla = Square Feet / 272.25, Kanal = Marla / 20'
          };
        }
      },
      {
        id: 'constr-boundary-wall',
        name: 'Boundary Wall Brick & Plaster Calculator',
        categoryId: 'construction',
        description: 'Estimate bricks and mortar required for perimeter boundary walls.',
        inputs: [
          { id: 'length', label: 'Total Perimeter Length (feet)', type: 'number', defaultValue: 150 },
          { id: 'height', label: 'Wall Height (feet)', type: 'number', defaultValue: 7 },
          { id: 'thickness', label: 'Wall Thickness', type: 'select', defaultValue: '9', options: [
            { label: '9 inches (Double Brick)', value: '9' },
            { label: '4.5 inches (Single Brick)', value: '4.5' }
          ]}
        ],
        calculate: (vals) => {
          const l = Number(vals.length);
          const h = Number(vals.height);
          const area = l * h;
          const factor = vals.thickness === '9' ? 13.5 : 7; // bricks per sq ft
          const bricks = area * factor;
          const cementBags = (area * (vals.thickness === '9' ? 0.08 : 0.04));
          return {
            result: `${Math.ceil(bricks).toLocaleString()} Bricks`,
            secondaryResult: `Wall Area: ${area} sq ft | Approx ${Math.ceil(cementBags)} Cement Bags | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Bricks = Area × Brick Density factor per sq ft'
          };
        }
      },
      {
        id: 'constr-water-tank',
        name: 'Water Tank Capacity Calculator',
        categoryId: 'construction',
        description: 'Calculate underground or overhead water tank capacity in Gallons and Liters.',
        inputs: [
          { id: 'length', label: 'Length (feet)', type: 'number', defaultValue: 8 },
          { id: 'width', label: 'Width (feet)', type: 'number', defaultValue: 6 },
          { id: 'depth', label: 'Depth / Height (feet)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const cuFt = Number(vals.length) * Number(vals.width) * Number(vals.depth);
          const liters = cuFt * 28.3168; // 1 cu ft = 28.3168 liters
          const gallons = cuFt * 6.2288; // Imperial gallons
          return {
            result: `${Math.round(liters).toLocaleString()} Liters`,
            secondaryResult: `Capacity: ${Math.round(gallons).toLocaleString()} Imperial Gallons (${cuFt} cu ft) | Estimate only.`,
            formula: 'Liters = Length × Width × Depth (cu ft) × 28.3168'
          };
        }
      },
      {
        id: 'constr-septic-tank',
        name: 'Septic Tank Size Calculator',
        categoryId: 'construction',
        description: 'Calculate required septic tank capacity based on number of residents.',
        inputs: [
          { id: 'residents', label: 'Number of Residents', type: 'number', defaultValue: 8 }
        ],
        calculate: (vals) => {
          const r = Number(vals.residents);
          const cuFtNeeded = r * 25; // approx 25 cu ft per person capacity
          const liters = cuFtNeeded * 28.3168;
          return {
            result: `${Math.round(cuFtNeeded)} cu ft (${Math.round(liters).toLocaleString()} Liters)`,
            secondaryResult: `Recommended volume for ${r} residents | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Septic Capacity = Residents × 25 cubic feet'
          };
        }
      },
      {
        id: 'constr-roof-waterproofing',
        name: 'Roof Bitumen Waterproofing Calculator',
        categoryId: 'construction',
        description: 'Calculate materials needed for roof leakage prevention and bitumen coating.',
        inputs: [
          { id: 'area', label: 'Roof Area (sq ft)', type: 'number', defaultValue: 1200 }
        ],
        calculate: (vals) => {
          const a = Number(vals.area);
          const primerLiters = a * 0.05;
          const bitumenKg = a * 0.25;
          return {
            result: `${Math.ceil(bitumenKg)} kg Bitumen & ${Math.ceil(primerLiters)} L Primer`,
            secondaryResult: `For ${a} sq ft roof area | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Bitumen = Area × 0.25 kg/sq ft, Primer = Area × 0.05 L/sq ft'
          };
        }
      },
      {
        id: 'constr-skirting',
        name: 'Marble & Tile Skirting Calculator',
        categoryId: 'construction',
        description: 'Calculate running feet and tiles/marble strips required for room skirting.',
        inputs: [
          { id: 'perimeter', label: 'Room Perimeter (feet)', type: 'number', defaultValue: 70 },
          { id: 'height', label: 'Skirting Height (inches)', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const p = Number(vals.perimeter);
          const h = Number(vals.height);
          const sqFt = p * (h / 12);
          return {
            result: `${p} Running Feet (${sqFt.toFixed(1)} sq ft)`,
            secondaryResult: `Includes 5% cutting wastage | Estimate only. Confirm with your engineer or contractor.`,
            formula: 'Skirting Area = Perimeter × (Height in inches / 12)'
          };
        }
      },
      {
        id: 'constr-door-window',
        name: 'Door & Window Wood Frame Calculator',
        categoryId: 'construction',
        description: 'Calculate timber cubic feet (CFT) required for door and window chowkhats (frames).',
        inputs: [
          { id: 'count', label: 'Number of Frames', type: 'number', defaultValue: 8 },
          { id: 'size', label: 'Average Frame Size (running feet per frame)', type: 'number', defaultValue: 18 }
        ],
        calculate: (vals) => {
          const totalRunFt = Number(vals.count) * Number(vals.size);
          // Assuming standard 3x4 inch timber section
          const cft = totalRunFt * (3 * 4 / 144);
          return {
            result: `${cft.toFixed(2)} CFT (Cubic Feet) Timber`,
            secondaryResult: `Total running length: ${totalRunFt} ft | Estimate only. Confirm with your carpenter.`,
            formula: 'Timber CFT = Total Running Feet × (Width in × Thickness in / 144)'
          };
        }
      },
      {
        id: 'constr-column-steel',
        name: 'Column Reinforcement Steel Calculator',
        categoryId: 'construction',
        description: 'Calculate steel rebar weight for building RCC structural columns.',
        inputs: [
          { id: 'columns', label: 'Number of Columns', type: 'number', defaultValue: 12 },
          { id: 'height', label: 'Average Column Height (feet)', type: 'number', defaultValue: 12 }
        ],
        calculate: (vals) => {
          const c = Number(vals.columns);
          const h = Number(vals.height) * 0.3048; // to meters
          // Approx 3.5 kg steel per meter of column height
          const totalKg = c * h * 3.5;
          return {
            result: `${Math.round(totalKg)} kg Steel Rebar`,
            secondaryResult: `For ${c} columns of ${vals.height} ft height | Estimate only. Confirm with your structural engineer.`,
            formula: 'Steel Weight = Columns × Height (m) × 3.5 kg/m'
          };
        }
      },
      {
        id: 'constr-foundation-earthwork',
        name: 'Foundation Earthwork & Labor Cost Calculator',
        categoryId: 'construction',
        description: 'Calculate foundation trench excavation volume and estimated labor cost in PKR.',
        inputs: [
          { id: 'length', label: 'Total Trench Length (feet)', type: 'number', defaultValue: 200 },
          { id: 'width', label: 'Trench Width (feet)', type: 'number', defaultValue: 2.5 },
          { id: 'depth', label: 'Trench Depth (feet)', type: 'number', defaultValue: 4 },
          { id: 'ratePerCuFt', label: 'Labor Rate per Cu Ft (PKR)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const cuFt = Number(vals.length) * Number(vals.width) * Number(vals.depth);
          const cost = cuFt * Number(vals.ratePerCuFt);
          return {
            result: `PKR ${cost.toLocaleString()}`,
            secondaryResult: `Excavation Volume: ${cuFt.toLocaleString()} cu ft @ PKR ${vals.ratePerCuFt}/cu ft | Estimate only.`,
            formula: 'Total Cost = Length × Width × Depth × Rate per Cu Ft'
          };
        }
      },
      {
        id: 'constr-sand-crush-ratio',
        name: 'Sand & Crush Volume Ratio Calculator',
        categoryId: 'construction',
        description: 'Calculate tractor trolley loads for sand and crush based on concrete volume.',
        inputs: [
          { id: 'concreteCuFt', label: 'Total Concrete Volume (cu ft)', type: 'number', defaultValue: 500 }
        ],
        calculate: (vals) => {
          const cuFt = Number(vals.concreteCuFt);
          const dryVol = cuFt * 1.54;
          const sandCuFt = dryVol * (2 / 7);
          const crushCuFt = dryVol * (4 / 7);
          // 1 standard tractor trolley = approx 400 cu ft
          const sandTrolleys = sandCuFt / 400;
          const crushTrolleys = crushCuFt / 400;
          return {
            result: `Sand: ${sandTrolleys.toFixed(1)} Trolleys | Crush: ${crushTrolleys.toFixed(1)} Trolleys`,
            secondaryResult: `Sand: ${Math.round(sandCuFt)} cu ft | Crush: ${Math.round(crushCuFt)} cu ft | Estimate only.`,
            formula: 'Trolleys = Material Cu Ft / 400 cu ft per standard tractor trolley'
          };
        }
      },
      {
        id: 'constr-false-ceiling',
        name: 'Gypsum False Ceiling Cost Calculator',
        categoryId: 'construction',
        description: 'Estimate false ceiling material and installation cost in PKR.',
        inputs: [
          { id: 'area', label: 'Room Ceiling Area (sq ft)', type: 'number', defaultValue: 350 },
          { id: 'ratePerSqFt', label: 'Cost per Sq Ft (PKR)', type: 'number', defaultValue: 180 }
        ],
        calculate: (vals) => {
          const a = Number(vals.area);
          const rate = Number(vals.ratePerSqFt);
          const totalCost = a * rate;
          return {
            result: `PKR ${totalCost.toLocaleString()}`,
            secondaryResult: `Area: ${a} sq ft @ PKR ${rate} per sq ft | Estimate only.`,
            formula: 'Total Cost = Ceiling Area × Rate per Sq Ft'
          };
        }
      },
      {
        id: 'constr-house-cost-pk',
        name: 'House Construction Cost Estimator (Pakistan)',
        categoryId: 'construction',
        description: 'Estimate total grey structure or finished house construction cost in Pakistan (PKR).',
        inputs: [
          { id: 'coveredArea', label: 'Total Covered Area (Square Feet)', type: 'number', defaultValue: 2200 },
          { id: 'grade', label: 'Construction Type', type: 'select', defaultValue: 'grey', options: [
            { label: 'Grey Structure Only (~PKR 3,000 / sq ft)', value: 'grey' },
            { label: 'Standard Finished (~PKR 5,500 / sq ft)', value: 'standard' },
            { label: 'Luxury Finished (~PKR 8,500 / sq ft)', value: 'luxury' }
          ]}
        ],
        calculate: (vals) => {
          const area = Number(vals.coveredArea);
          let rate = 3000;
          if (vals.grade === 'standard') rate = 5500;
          else if (vals.grade === 'luxury') rate = 8500;
          const total = area * rate;
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `Covered Area: ${area.toLocaleString()} sq ft @ PKR ${rate.toLocaleString()} / sq ft | Estimate only.`,
            formula: 'Estimated Cost = Covered Area × Rate per Sq Ft (Pakistan Market Rates)'
          };
        }
      },
      {
        id: 'constr-roof-slab-steel',
        name: 'Roof Slab Steel Rebar Calculator',
        categoryId: 'construction',
        description: 'Calculate steel weight needed for a reinforced concrete roof slab.',
        inputs: [
          { id: 'slabArea', label: 'Roof Slab Area (sq ft)', type: 'number', defaultValue: 1000 }
        ],
        calculate: (vals) => {
          const a = Number(vals.slabArea);
          // Approx 3.5 to 4 kg steel per sq ft of slab area
          const steelKg = a * 3.75;
          return {
            result: `${Math.round(steelKg).toLocaleString()} kg Steel Rebar`,
            secondaryResult: `For ${a} sq ft roof slab (~3.75 kg/sq ft) | Estimate only. Confirm with structural engineer.`,
            formula: 'Steel Weight = Slab Area (sq ft) × 3.75 kg'
          };
        }
      },
      {
        id: 'constr-terrazzo-flooring',
        name: 'Terrazzo & Mosaic Flooring Calculator',
        categoryId: 'construction',
        description: 'Calculate white cement, marble chips, and pigment required for mosaic/terrazzo flooring.',
        inputs: [
          { id: 'area', label: 'Flooring Area (sq ft)', type: 'number', defaultValue: 500 }
        ],
        calculate: (vals) => {
          const a = Number(vals.area);
          const whiteCementBags = a * 0.05; // approx 0.05 bag per sq ft
          const chipsKg = a * 0.6; // approx 0.6 kg marble chips per sq ft
          return {
            result: `${Math.ceil(whiteCementBags)} White Cement Bags & ${Math.ceil(chipsKg)} kg Chips`,
            secondaryResult: `For ${a} sq ft flooring area | Estimate only. Confirm with your contractor.`,
            formula: 'Cement Bags = Area × 0.05, Chips = Area × 0.6 kg'
          };
        }
      },
      {
        id: 'constr-compound-pillar',
        name: 'Compound Wall Pillar Calculator',
        categoryId: 'construction',
        description: 'Calculate bricks, cement, and sand needed for boundary wall pillars.',
        inputs: [
          { id: 'pillars', label: 'Number of Pillars', type: 'number', defaultValue: 10 },
          { id: 'height', label: 'Pillar Height (feet)', type: 'number', defaultValue: 7 }
        ],
        calculate: (vals) => {
          const p = Number(vals.pillars);
          const h = Number(vals.height);
          // Standard 9x9 inch pillar requires approx 22 bricks per foot of height
          const bricks = p * h * 22;
          return {
            result: `${Math.ceil(bricks).toLocaleString()} Bricks`,
            secondaryResult: `For ${p} pillars of ${h} ft height | Estimate only. Confirm with your contractor.`,
            formula: 'Pillar Bricks = Number of Pillars × Height × 22 bricks/ft'
          };
        }
      },
      {
        id: 'constr-retaining-wall',
        name: 'Retaining Wall Concrete Volume Calculator',
        categoryId: 'construction',
        description: 'Calculate concrete volume and masonry needed for earth-retaining boundary walls.',
        inputs: [
          { id: 'length', label: 'Wall Length (feet)', type: 'number', defaultValue: 50 },
          { id: 'height', label: 'Wall Height (feet)', type: 'number', defaultValue: 6 },
          { id: 'avgThickness', label: 'Average Thickness (feet)', type: 'number', defaultValue: 1.25 }
        ],
        calculate: (vals) => {
          const cuFt = Number(vals.length) * Number(vals.height) * Number(vals.avgThickness);
          const cuYds = cuFt / 27;
          return {
            result: `${cuFt.toFixed(1)} cu ft (${cuYds.toFixed(2)} cu yds)`,
            secondaryResult: `Concrete Volume for Retaining Wall | Estimate only. Confirm with your engineer.`,
            formula: 'Volume = Length × Height × Average Thickness'
          };
        }
      },
      {
        id: 'const-drywall',
        name: 'Drywall / Gypsum Board Sheet Calculator',
        categoryId: 'construction',
        description: 'Calculate number of drywall sheets (4x8 ft) required for walls and ceiling.',
        inputs: [
          { id: 'sqft', label: 'Total Wall & Ceiling Area (sq ft)', type: 'number', defaultValue: 1200 }
        ],
        calculate: (vals) => {
          const area = Number(vals.sqft);
          // Standard 4x8 sheet = 32 sq ft. Add 10% waste.
          const sheetsWithWaste = (area / 32) * 1.10;
          return {
            result: `${Math.ceil(sheetsWithWaste)} Drywall Sheets (4×8 ft)`,
            secondaryResult: `Includes standard 10% cutting waste allowance`,
            formula: 'Sheets = (Total Area / 32 sq ft) × 1.10'
          };
        }
      },
      {
        id: 'const-roof-pitch',
        name: 'Roof Pitch & Rise Calculator',
        categoryId: 'construction',
        description: 'Calculate roof slope angle and total rise from span and pitch ratio.',
        inputs: [
          { id: 'span', label: 'Building Span (feet)', type: 'number', defaultValue: 30 },
          { id: 'risePerFoot', label: 'Rise per Foot Run (inches)', type: 'number', defaultValue: 6 }
        ],
        calculate: (vals) => {
          const span = Number(vals.span);
          const rpf = Number(vals.risePerFoot);
          const totalRise = (span / 2) * (rpf / 12);
          const angleDeg = Math.atan(rpf / 12) * (180 / Math.PI);
          return {
            result: `Total Rise: ${totalRise.toFixed(2)} ft (${angleDeg.toFixed(1)}°)`,
            secondaryResult: `Roof pitch ratio: ${rpf}:12`,
            formula: 'Rise = (Span / 2) × (Rise per foot / 12); Angle = arctan(Rise / 12)'
          };
        }
      },
      {
        id: 'const-stair',
        name: 'Stair Rise and Run Calculator',
        categoryId: 'construction',
        description: 'Calculate number of risers, treads, and total run for staircase construction.',
        inputs: [
          { id: 'totalHeight', label: 'Total Floor-to-Floor Height (inches)', type: 'number', defaultValue: 110 },
          { id: 'targetRiser', label: 'Target Riser Height (inches)', type: 'number', defaultValue: 7.5 }
        ],
        calculate: (vals) => {
          const h = Number(vals.totalHeight);
          const tr = Number(vals.targetRiser);
          if (tr <= 0) return { result: 'Target riser must be > 0' };
          const numRisers = Math.round(h / tr);
          const actualRiser = h / numRisers;
          const numTreads = numRisers - 1;
          const totalRun = numTreads * 10; // standard 10 inch tread
          return {
            result: `${numRisers} Risers (${actualRiser.toFixed(2)}" each)`,
            secondaryResult: `Treads: ${numTreads} | Total Run: ${totalRun.toFixed(1)}"`,
            formula: 'Risers = Round(Total Height / Target Riser); Run = Treads × 10"'
          };
        }
      }
    ]
  };
