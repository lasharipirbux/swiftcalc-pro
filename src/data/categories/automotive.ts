import { Category } from "../../types";

export const automotiveCategory: Category = {
    id: 'automotive',
    name: 'Automotive & Vehicle',
    iconName: 'Car',
    description: 'Fuel mileage, trip fuel cost, cost per km, speed/distance/time, vehicle depreciation, tank range, cost sharing, oil change reminder, token tax, motorway tolls, EV charging, and auto finance calculators.',
    color: 'from-slate-700 to-zinc-900',
    calculators: [
      {
        id: 'auto-fuel-mileage',
        name: 'Fuel Mileage Calculator (km/L)',
        categoryId: 'automotive',
        description: 'Calculate vehicle fuel efficiency in kilometers per liter (km/L).',
        inputs: [
          { id: 'distance', label: 'Distance Traveled (km)', type: 'number', defaultValue: 450 },
          { id: 'fuel', label: 'Fuel Consumed (Liters)', type: 'number', defaultValue: 35 }
        ],
        calculate: (vals) => {
          const dist = Number(vals.distance);
          const fuel = Number(vals.fuel);
          if (fuel <= 0) return { result: 'Fuel consumed must be > 0' };
          const kmPerL = dist / fuel;
          return {
            result: `${kmPerL.toFixed(2)} km/L`,
            secondaryResult: `Efficiency: ${(100 / kmPerL).toFixed(2)} L / 100km`,
            formula: 'Mileage (km/L) = Distance Traveled / Fuel Consumed'
          };
        }
      },
      {
        id: 'auto-trip-fuel-cost',
        name: 'Trip Fuel Cost Calculator',
        categoryId: 'automotive',
        description: 'Calculate total fuel required and trip fuel cost based on distance, mileage, and petrol price.',
        inputs: [
          { id: 'distance', label: 'Trip Distance (km)', type: 'number', defaultValue: 350 },
          { id: 'mileage', label: 'Vehicle Mileage (km/L)', type: 'number', defaultValue: 12 },
          { id: 'price', label: 'Petrol Price per Liter (PKR)', type: 'number', defaultValue: 285 }
        ],
        calculate: (vals) => {
          const dist = Number(vals.distance);
          const mileage = Number(vals.mileage);
          const price = Number(vals.price);
          if (mileage <= 0) return { result: 'Mileage must be > 0' };
          const litersNeeded = dist / mileage;
          const totalCost = litersNeeded * price;
          return {
            result: `PKR ${totalCost.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            secondaryResult: `Fuel Required: ${litersNeeded.toFixed(1)} Liters @ PKR ${price}/L`,
            formula: 'Total Cost = (Distance / Mileage) × Petrol Price per Liter'
          };
        }
      },
      {
        id: 'auto-cost-per-km',
        name: 'Cost per Kilometer Calculator',
        categoryId: 'automotive',
        description: 'Calculate total driving cost per kilometer.',
        inputs: [
          { id: 'totalCost', label: 'Total Trip Cost (PKR)', type: 'number', defaultValue: 8500 },
          { id: 'distance', label: 'Total Distance (km)', type: 'number', defaultValue: 400 }
        ],
        calculate: (vals) => {
          const cost = Number(vals.totalCost);
          const dist = Number(vals.distance);
          if (dist <= 0) return { result: 'Distance must be > 0' };
          const cpkm = cost / dist;
          return {
            result: `PKR ${cpkm.toFixed(2)} / km`,
            secondaryResult: `Total Cost: PKR ${cost.toLocaleString()} for ${dist} km`,
            formula: 'Cost per km = Total Trip Cost / Total Distance'
          };
        }
      },
      {
        id: 'auto-speed-dist-time',
        name: 'Speed, Distance and Time Calculator',
        categoryId: 'automotive',
        description: 'Calculate Speed, Distance, or Time given the other two parameters.',
        inputs: [
          { id: 'calcType', label: 'Calculate', type: 'select', defaultValue: 'time', options: [
            { label: 'Time (Distance / Speed)', value: 'time' },
            { label: 'Speed (Distance / Time)', value: 'speed' },
            { label: 'Distance (Speed × Time)', value: 'distance' }
          ]},
          { id: 'val1', label: 'Value 1 (Distance in km OR Speed in km/h)', type: 'number', defaultValue: 300 },
          { id: 'val2', label: 'Value 2 (Speed in km/h OR Time in hours)', type: 'number', defaultValue: 80 }
        ],
        calculate: (vals) => {
          const v1 = Number(vals.val1);
          const v2 = Number(vals.val2);
          if (v2 <= 0) return { result: 'Divisor must be > 0' };
          if (vals.calcType === 'time') {
            const hours = v1 / v2;
            const hrs = Math.floor(hours);
            const mins = Math.round((hours - hrs) * 60);
            return {
              result: `${hrs} hours and ${mins} minutes`,
              formula: 'Time = Distance / Speed'
            };
          } else if (vals.calcType === 'speed') {
            const speed = v1 / v2;
            return {
              result: `${speed.toFixed(1)} km/h`,
              formula: 'Speed = Distance / Time'
            };
          } else {
            const dist = v1 * v2;
            return {
              result: `${dist.toFixed(1)} km`,
              formula: 'Distance = Speed × Time'
            };
          }
        }
      },
      {
        id: 'auto-depreciation',
        name: 'Vehicle Depreciation Calculator',
        categoryId: 'automotive',
        description: 'Calculate current vehicle resale value based on annual depreciation rate.',
        inputs: [
          { id: 'price', label: 'Initial Purchase Price (PKR)', type: 'number', defaultValue: 4500000 },
          { id: 'age', label: 'Age of Car (Years)', type: 'number', defaultValue: 3 },
          { id: 'rate', label: 'Annual Depreciation Rate (%)', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const p = Number(vals.price);
          const age = Number(vals.age);
          const rate = Number(vals.rate) / 100;
          const currentVal = p * Math.pow(1 - rate, age);
          const lostVal = p - currentVal;
          return {
            result: `PKR ${currentVal.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            secondaryResult: `Total Value Lost: PKR ${lostVal.toLocaleString(undefined, {maximumFractionDigits: 0})} over ${age} years`,
            formula: 'Current Value = Purchase Price × (1 - Rate%)^Age'
          };
        }
      },
      {
        id: 'auto-tank-range',
        name: 'Fuel Tank Range Calculator',
        categoryId: 'automotive',
        description: 'Calculate total driving range on a full fuel tank.',
        inputs: [
          { id: 'capacity', label: 'Fuel Tank Capacity (Liters)', type: 'number', defaultValue: 50 },
          { id: 'mileage', label: 'Vehicle Mileage (km/L)', type: 'number', defaultValue: 14 }
        ],
        calculate: (vals) => {
          const cap = Number(vals.capacity);
          const mil = Number(vals.mileage);
          const range = cap * mil;
          return {
            result: `${range.toFixed(0)} kilometers`,
            secondaryResult: `Tank Capacity: ${cap} L @ ${mil} km/L`,
            formula: 'Total Range = Tank Capacity × Mileage'
          };
        }
      },
      {
        id: 'auto-cost-sharing',
        name: 'Trip Cost Sharing Calculator',
        categoryId: 'automotive',
        description: 'Split total road trip fuel and travel expenses evenly among passengers.',
        inputs: [
          { id: 'totalCost', label: 'Total Trip Cost (PKR)', type: 'number', defaultValue: 12000 },
          { id: 'passengers', label: 'Number of Travelers', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const cost = Number(vals.totalCost);
          const p = Math.max(1, Number(vals.passengers));
          const perPerson = cost / p;
          return {
            result: `PKR ${perPerson.toLocaleString(undefined, {maximumFractionDigits: 0})} / person`,
            secondaryResult: `Total Cost: PKR ${cost.toLocaleString()} split among ${p} people`,
            formula: 'Cost per Person = Total Trip Cost / Number of Travelers'
          };
        }
      },
      {
        id: 'auto-oil-change',
        name: 'Oil Change Reminder Calculator',
        categoryId: 'automotive',
        description: 'Calculate kilometers remaining until next engine oil change interval.',
        inputs: [
          { id: 'currentOdo', label: 'Current Odometer (km)', type: 'number', defaultValue: 48200 },
          { id: 'lastOilOdo', label: 'Odometer at Last Oil Change (km)', type: 'number', defaultValue: 43000 },
          { id: 'interval', label: 'Recommended Oil Interval (km)', type: 'number', defaultValue: 5000 }
        ],
        calculate: (vals) => {
          const cur = Number(vals.currentOdo);
          const last = Number(vals.lastOilOdo);
          const interval = Number(vals.interval);
          const driven = cur - last;
          const remaining = interval - driven;
          return {
            result: remaining > 0 ? `${remaining.toLocaleString()} km remaining` : `Oil change overdue by ${Math.abs(remaining).toLocaleString()} km!`,
            secondaryResult: `Driven ${driven.toLocaleString()} km since last oil change (Interval: ${interval.toLocaleString()} km)`,
            formula: 'Remaining km = Recommended Interval - (Current Odometer - Last Oil Change Odometer)'
          };
        }
      },
      // 17 New Automotive Calculators Added Below (Pakistan-friendly)
      {
        id: 'auto-token-tax',
        name: 'Car Token Tax Calculator (Pakistan)',
        categoryId: 'automotive',
        description: 'Estimate annual motor vehicle token tax in Pakistan based on engine displacement (CC).',
        inputs: [
          { id: 'cc', label: 'Engine Capacity (CC)', type: 'number', defaultValue: 1300 }
        ],
        calculate: (vals) => {
          const cc = Number(vals.cc);
          let tax = 2500;
          if (cc > 2000) tax = 15000;
          else if (cc > 1500) tax = 7500;
          else if (cc > 1000) tax = 4500;
          return {
            result: `PKR ${tax.toLocaleString()} Annual Token Tax`,
            secondaryResult: `Estimated for ${cc} CC vehicle (Provincial excise rates)`,
            formula: 'Standard annual token tax bracket based on engine displacement CC'
          };
        }
      },
      {
        id: 'auto-motorway-toll',
        name: 'Toll Tax Trip Cost Calculator (Pakistan)',
        categoryId: 'automotive',
        description: 'Calculate total motorway toll tax for journeys on M1, M2, M3, or M5 (PKR).',
        inputs: [
          { id: 'distanceKm', label: 'Motorway Distance (km)', type: 'number', defaultValue: 365 },
          { id: 'vehicleType', label: 'Vehicle Category', type: 'select', defaultValue: 'car', options: [
            { label: 'Car / Jeep / SUV', value: 'car' },
            { label: 'Coaster / Mini Bus', value: 'coaster' },
            { label: 'Large Bus / Truck', value: 'bus' }
          ]}
        ],
        calculate: (vals) => {
          const dist = Number(vals.distanceKm);
          let ratePerKm = 3.5; // PKR per km for car
          if (vals.vehicleType === 'coaster') ratePerKm = 6.0;
          else if (vals.vehicleType === 'bus') ratePerKm = 9.5;

          const toll = dist * ratePerKm;
          return {
            result: `PKR ${Math.round(toll).toLocaleString()} Toll Tax`,
            secondaryResult: `Estimated for ${dist} km trip @ approx PKR ${ratePerKm}/km`,
            formula: 'Total Toll = Motorway Distance (km) × Rate per km by vehicle category'
          };
        }
      },
      {
        id: 'auto-fuel-budget',
        name: 'Average Monthly Fuel Budget Calculator (PKR)',
        categoryId: 'automotive',
        description: 'Calculate expected monthly fuel expenditure based on daily commute distance (PKR).',
        inputs: [
          { id: 'dailyKm', label: 'Daily Commute Distance (km)', type: 'number', defaultValue: 40 },
          { id: 'mileage', label: 'Vehicle Mileage (km/L)', type: 'number', defaultValue: 13 },
          { id: 'price', label: 'Petrol Price per Liter (PKR)', type: 'number', defaultValue: 285 }
        ],
        calculate: (vals) => {
          const daily = Number(vals.dailyKm);
          const mil = Number(vals.mileage);
          const price = Number(vals.price);
          if (mil <= 0) return { result: 'Mileage must be > 0' };
          const monthlyLiters = (daily * 30) / mil;
          const monthlyBudget = monthlyLiters * price;
          return {
            result: `PKR ${Math.round(monthlyBudget).toLocaleString()} / month`,
            secondaryResult: `Monthly Fuel Required: ~${Math.round(monthlyLiters)} Liters`,
            formula: 'Monthly Budget = [(Daily km × 30 days) / Mileage] × Petrol Price'
          };
        }
      },
      {
        id: 'auto-ev-charging',
        name: 'Electric Vehicle (EV) Charging Cost Calculator (PKR)',
        categoryId: 'automotive',
        description: 'Calculate electricity cost to charge an electric vehicle battery in Pakistan (PKR).',
        inputs: [
          { id: 'kwh', label: 'EV Battery Capacity (kWh)', type: 'number', defaultValue: 60 },
          { id: 'rate', label: 'Electricity Tariff Rate (PKR / kWh)', type: 'number', defaultValue: 35 }
        ],
        calculate: (vals) => {
          const k = Number(vals.kwh);
          const r = Number(vals.rate);
          const cost = k * r;
          return {
            result: `PKR ${cost.toLocaleString()} for full charge`,
            secondaryResult: `For ${k} kWh battery @ PKR ${r} per kWh tariff`,
            formula: 'Full Charge Cost = Battery Capacity (kWh) × Tariff Rate per kWh'
          };
        }
      },
      {
        id: 'auto-finance-emi',
        name: 'Car Loan / Auto Finance Monthly Payment',
        categoryId: 'automotive',
        description: 'Calculate monthly auto financing installment for car loans in Pakistan (PKR).',
        inputs: [
          { id: 'loanAmount', label: 'Loan Amount Financed (PKR)', type: 'number', defaultValue: 3000000 },
          { id: 'rate', label: 'Annual Markup Rate (%)', type: 'number', defaultValue: 17 },
          { id: 'years', label: 'Tenure (Years)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const p = Number(vals.loanAmount);
          const r = Number(vals.rate) / 12 / 100;
          const n = Number(vals.years) * 12;
          if (r === 0) return { result: `PKR ${(p / n).toFixed(0)} / month` };
          const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          return {
            result: `PKR ${Math.round(emi).toLocaleString()} / month`,
            secondaryResult: `Total Payments: PKR ${Math.round(emi * n).toLocaleString()}`,
            formula: 'Auto Finance EMI Formula'
          };
        }
      },
      {
        id: 'auto-braking-distance',
        name: 'Braking Distance and Stopping Time Calculator',
        categoryId: 'automotive',
        description: 'Calculate vehicle stopping distance and braking distance from speed.',
        inputs: [
          { id: 'speedKmh', label: 'Vehicle Speed (km/h)', type: 'number', defaultValue: 100 },
          { id: 'friction', label: 'Road Friction Coefficient (Dry ~0.7, Wet ~0.4)', type: 'number', defaultValue: 0.7 }
        ],
        calculate: (vals) => {
          const vMs = Number(vals.speedKmh) / 3.6;
          const mu = Number(vals.friction);
          const g = 9.8;
          if (mu <= 0) return { result: 'Friction coefficient must be > 0' };
          const brakingDist = (vMs * vMs) / (2 * mu * g);
          return {
            result: `${brakingDist.toFixed(1)} Meters Braking Distance`,
            secondaryResult: `At ${vals.speedKmh} km/h with friction ${mu}`,
            formula: 'Braking Distance = v² / (2 × μ × g)'
          };
        }
      },
      {
        id: 'auto-cc-to-hp',
        name: 'Engine Displacement (CC) to Horsepower Estimator',
        categoryId: 'automotive',
        description: 'Estimate engine horsepower from cubic centimeters (CC) displacement.',
        inputs: [
          { id: 'cc', label: 'Engine Displacement (CC)', type: 'number', defaultValue: 1500 },
          { id: 'induction', label: 'Engine Type', type: 'select', defaultValue: 'naturallyAspirated', options: [
            { label: 'Naturally Aspirated (~0.075 HP/CC)', value: 'naturallyAspirated' },
            { label: 'Turbocharged (~0.11 HP/CC)', value: 'turbo' }
          ]}
        ],
        calculate: (vals) => {
          const cc = Number(vals.cc);
          const factor = vals.induction === 'turbo' ? 0.11 : 0.075;
          const hp = cc * factor;
          return {
            result: `~${Math.round(hp)} Horsepower (HP)`,
            secondaryResult: `Estimated power output for ${cc} CC engine`,
            formula: 'Estimated HP = CC × Induction Factor'
          };
        }
      },
      {
        id: 'auto-carbon-footprint',
        name: 'Carbon Footprint (CO2 Emissions) Driving Calculator',
        categoryId: 'automotive',
        description: 'Calculate carbon dioxide (CO2) emissions generated from driving distance.',
        inputs: [
          { id: 'distanceKm', label: 'Annual Distance Driven (km)', type: 'number', defaultValue: 15000 },
          { id: 'mileage', label: 'Vehicle Mileage (km/L)', type: 'number', defaultValue: 12 }
        ],
        calculate: (vals) => {
          const dist = Number(vals.distanceKm);
          const mil = Number(vals.mileage);
          if (mil <= 0) return { result: 'Mileage must be > 0' };
          const liters = dist / mil;
          // Approx 2.31 kg CO2 per liter of petrol burned
          const co2Kg = liters * 2.31;
          return {
            result: `${(co2Kg / 1000).toFixed(2)} Tonnes CO₂ / year`,
            secondaryResult: `Total CO2: ${Math.round(co2Kg).toLocaleString()} kg CO2 per year`,
            formula: 'CO2 Emissions = (Distance / Mileage) × 2.31 kg CO2/liter'
          };
        }
      },
      {
        id: 'auto-monthly-value-loss',
        name: 'Car Resale Value Loss per Month Calculator',
        categoryId: 'automotive',
        description: 'Calculate average monthly depreciation cost of owning a vehicle.',
        inputs: [
          { id: 'initial', label: 'Purchase Price (PKR)', type: 'number', defaultValue: 5000000 },
          { id: 'current', label: 'Estimated Current Value (PKR)', type: 'number', defaultValue: 3800000 },
          { id: 'months', label: 'Months Owned', type: 'number', defaultValue: 24 }
        ],
        calculate: (vals) => {
          const init = Number(vals.initial);
          const cur = Number(vals.current);
          const m = Math.max(1, Number(vals.months));
          const totalLoss = init - cur;
          const monthlyLoss = totalLoss / m;
          return {
            result: `PKR ${Math.round(monthlyLoss).toLocaleString()} / month`,
            secondaryResult: `Total Depreciation Loss: PKR ${totalLoss.toLocaleString()} over ${m} months`,
            formula: 'Monthly Loss = (Purchase Price - Current Value) / Months Owned'
          };
        }
      },
      {
        id: 'auto-road-trip-planner',
        name: 'Road Trip Time & Fuel Stops Planner',
        categoryId: 'automotive',
        description: 'Plan driving duration and fuel refills for long road trips.',
        inputs: [
          { id: 'totalDistance', label: 'Total Journey Distance (km)', type: 'number', defaultValue: 900 },
          { id: 'avgSpeed', label: 'Average Driving Speed (km/h)', type: 'number', defaultValue: 85 },
          { id: 'tankRange', label: 'Full Tank Driving Range (km)', type: 'number', defaultValue: 550 }
        ],
        calculate: (vals) => {
          const dist = Number(vals.totalDistance);
          const speed = Number(vals.avgSpeed);
          const range = Number(vals.tankRange);
          if (speed <= 0 || range <= 0) return { result: 'Speed and range must be > 0' };
          const driveHours = dist / speed;
          const fuelStops = Math.floor(dist / range);
          return {
            result: `Driving Time: ~${driveHours.toFixed(1)} hours (${fuelStops} Fuel Stops)`,
            secondaryResult: `For ${dist} km journey at average ${speed} km/h`,
            formula: 'Drive Time = Distance / Speed, Fuel Stops = Floor(Distance / Tank Range)'
          };
        }
      },
      {
        id: 'auto-oil-consumption',
        name: 'Engine Oil Consumption Rate Calculator',
        categoryId: 'automotive',
        description: 'Calculate engine oil burn rate over distance driven.',
        inputs: [
          { id: 'oilLitertConsumed', label: 'Oil Consumed (Liters)', type: 'number', defaultValue: 1.5 },
          { id: 'distanceKm', label: 'Distance Driven (km)', type: 'number', defaultValue: 3000 }
        ],
        calculate: (vals) => {
          const oil = Number(vals.oilLitertConsumed);
          const dist = Number(vals.distanceKm);
          if (oil <= 0) return { result: 'Oil consumed must be > 0' };
          const kmPerLiter = dist / oil;
          return {
            result: `${Math.round(kmPerLiter)} km per Liter of Oil`,
            secondaryResult: `Oil burn rate verification`,
            formula: 'Km per Liter of Oil = Distance Driven / Oil Consumed'
          };
        }
      },
      {
        id: 'auto-insurance-cost',
        name: 'Car Insurance Annual Premium Estimator (PKR)',
        categoryId: 'automotive',
        description: 'Estimate annual comprehensive car insurance premium based on car market value (PKR).',
        inputs: [
          { id: 'carValue', label: 'Car Market Value (PKR)', type: 'number', defaultValue: 4000000 },
          { id: 'premiumRate', label: 'Insurance Rate (%)', type: 'number', defaultValue: 2.5 }
        ],
        calculate: (vals) => {
          const val = Number(vals.carValue);
          const rate = Number(vals.premiumRate) / 100;
          const premium = val * rate;
          return {
            result: `PKR ${Math.round(premium).toLocaleString()} / year`,
            secondaryResult: `Monthly Premium: PKR ${Math.round(premium / 12).toLocaleString()}`,
            formula: 'Annual Insurance Premium = Car Market Value × Insurance Rate %'
          };
        }
      },
      {
        id: 'auto-hp-to-kw',
        name: 'Horsepower to Kilowatts (HP to kW) Converter',
        categoryId: 'automotive',
        description: 'Convert engine power from Horsepower (HP) to Kilowatts (kW).',
        inputs: [
          { id: 'hp', label: 'Power in Horsepower (HP)', type: 'number', defaultValue: 150 }
        ],
        calculate: (vals) => {
          const hp = Number(vals.hp);
          const kw = hp * 0.7457;
          return {
            result: `${kw.toFixed(2)} kW (Kilowatts)`,
            secondaryResult: `Conversion: 1 HP = 0.7457 kW`,
            formula: 'Kilowatts (kW) = Horsepower (HP) × 0.7457'
          };
        }
      },
      {
        id: 'auto-average-speed',
        name: 'Average Speed Over Speed Camera Distance',
        categoryId: 'automotive',
        description: 'Calculate average vehicle speed between speed cameras over a fixed distance.',
        inputs: [
          { id: 'distanceMeters', label: 'Camera Distance (Meters)', type: 'number', defaultValue: 5000 },
          { id: 'timeSeconds', label: 'Time Taken (Seconds)', type: 'number', defaultValue: 200 }
        ],
        calculate: (vals) => {
          const m = Number(vals.distanceMeters);
          const s = Number(vals.timeSeconds);
          if (s <= 0) return { result: 'Time must be > 0' };
          const speedMs = m / s;
          const speedKmh = speedMs * 3.6;
          return {
            result: `${speedKmh.toFixed(1)} km/h Average Speed`,
            secondaryResult: `Over ${m} meters in ${s} seconds`,
            formula: 'Average Speed (km/h) = [Distance (m) / Time (s)] × 3.6'
          };
        }
      },
      {
        id: 'auto-battery-health',
        name: 'Car Battery Health & Replacement Estimator',
        categoryId: 'automotive',
        description: 'Estimate remaining car battery lifespan based on age and cranking voltage.',
        inputs: [
          { id: 'ageMonths', label: 'Battery Age (Months)', type: 'number', defaultValue: 36 },
          { id: 'voltage', label: 'Resting Voltage (Volts)', type: 'number', defaultValue: 12.4 }
        ],
        calculate: (vals) => {
          const age = Number(vals.ageMonths);
          const v = Number(vals.voltage);
          let status = 'Good Health';
          if (v < 12.0 || age > 48) status = 'Replacement Recommended Soon';
          else if (v < 12.3 || age > 36) status = 'Fair / Monitor Closely';
          return {
            result: status,
            secondaryResult: `Resting Voltage: ${v}V | Age: ${age} months`,
            formula: 'Battery health assessed via resting voltage and operating age thresholds'
          };
        }
      },
      {
        id: 'auto-parking-fee',
        name: 'Parking Fee Cost Calculator',
        categoryId: 'automotive',
        description: 'Calculate total parking cost based on hourly or daily parking rates.',
        inputs: [
          { id: 'hours', label: 'Parking Duration (Hours)', type: 'number', defaultValue: 4 },
          { id: 'ratePerHour', label: 'Rate per Hour (PKR)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const hrs = Number(vals.hours);
          const rate = Number(vals.ratePerHour);
          const total = hrs * rate;
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `${hrs} hours parked @ PKR ${rate}/hr`,
            formula: 'Total Parking Fee = Parking Duration (Hours) × Rate per Hour'
          };
        }
      },
      {
        id: 'auto-rpm-speed',
        name: 'Engine RPM and Speed Relationship Calculator',
        categoryId: 'automotive',
        description: 'Estimate vehicle speed from engine RPM, gear ratio, and tire size.',
        inputs: [
          { id: 'rpm', label: 'Engine RPM', type: 'number', defaultValue: 2500 },
          { id: 'gearRatio', label: 'Total Gear Ratio (Transmission × Final Drive)', type: 'number', defaultValue: 3.2 }
        ],
        calculate: (vals) => {
          const rpm = Number(vals.rpm);
          const ratio = Number(vals.gearRatio);
          if (ratio <= 0) return { result: 'Gear ratio must be > 0' };
          const wheelRpm = rpm / ratio;
          const speedKmh = wheelRpm * 0.055;
          return {
            result: `~${speedKmh.toFixed(1)} km/h`,
            secondaryResult: `Wheel RPM: ${Math.round(wheelRpm)} rpm`,
            formula: 'Vehicle Speed estimated from Engine RPM and Gear Ratio'
          };
        }
      },
      {
        id: 'auto-loan-emi',
        name: 'Car Financing Monthly EMI Calculator',
        categoryId: 'automotive',
        description: 'Calculate monthly auto loan installment (EMI) for car financing in Pakistan (PKR).',
        inputs: [
          { id: 'principal', label: 'Loan Amount (PKR)', type: 'number', defaultValue: 3000000 },
          { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', defaultValue: 18 },
          { id: 'years', label: 'Loan Tenure (Years)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const p = Number(vals.principal);
          const r = Number(vals.rate) / 100 / 12;
          const n = Number(vals.years) * 12;
          if (r === 0 || n === 0) return { result: `PKR ${Math.round(p / (n || 1)).toLocaleString()} / month` };
          const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          return {
            result: `PKR ${Math.round(emi).toLocaleString()} / month`,
            secondaryResult: `Total payment over ${vals.years} years: PKR ${Math.round(emi * n).toLocaleString()}`,
            formula: 'EMI = [P · r · (1 + r)^n] / [(1 + r)^n - 1]'
          };
        }
      },
      {
        id: 'auto-hp-torque',
        name: 'Horsepower to Torque Estimator',
        categoryId: 'automotive',
        description: 'Estimate engine horsepower from torque and RPM or vice versa.',
        inputs: [
          { id: 'torque', label: 'Torque (lb-ft or Nm)', type: 'number', defaultValue: 250 },
          { id: 'rpm', label: 'Engine RPM', type: 'number', defaultValue: 5250 }
        ],
        calculate: (vals) => {
          const t = Number(vals.torque);
          const rpm = Number(vals.rpm);
          const hp = (t * rpm) / 5252;
          return {
            result: `${hp.toFixed(1)} Horsepower (HP)`,
            secondaryResult: `At ${rpm} RPM with ${t} torque`,
            formula: 'HP = (Torque × RPM) / 5252'
          };
        }
      },
      {
        id: 'auto-tire-profile',
        name: 'Tire Sidewall Height & Diameter Calculator',
        categoryId: 'automotive',
        description: 'Calculate tire sidewall height and overall tire diameter from tire specification code.',
        inputs: [
          { id: 'width', label: 'Tire Width (mm)', type: 'number', defaultValue: 205 },
          { id: 'aspect', label: 'Aspect Ratio (%)', type: 'number', defaultValue: 55 },
          { id: 'rim', label: 'Rim Diameter (Inches)', type: 'number', defaultValue: 16 }
        ],
        calculate: (vals) => {
          const w = Number(vals.width);
          const asp = Number(vals.aspect);
          const rim = Number(vals.rim);
          const sidewallMm = w * (asp / 100);
          const sidewallInches = sidewallMm / 25.4;
          const totalDiameterInches = rim + (2 * sidewallInches);
          return {
            result: `Overall Diameter: ${totalDiameterInches.toFixed(1)} inches`,
            secondaryResult: `Sidewall height: ${sidewallMm.toFixed(1)} mm (${sidewallInches.toFixed(2)} in)`,
            formula: 'Diameter = Rim + 2 × (Width × Aspect Ratio / 25.4)'
          };
        }
      },
      {
        id: 'auto-speeding-fine',
        name: 'Speeding Ticket Fine Estimator',
        categoryId: 'automotive',
        description: 'Estimate motorway or city traffic speeding fine based on excess speed.',
        inputs: [
          { id: 'limit', label: 'Speed Limit (km/h)', type: 'number', defaultValue: 120 },
          { id: 'actual', label: 'Actual Speed Driven (km/h)', type: 'number', defaultValue: 145 }
        ],
        calculate: (vals) => {
          const limit = Number(vals.limit);
          const actual = Number(vals.actual);
          const excess = actual - limit;
          if (excess <= 0) return { result: 'No speeding violation detected (within limit)' };
          let fine = 1000;
          if (excess > 30) fine = 5000;
          else if (excess > 20) fine = 2500;
          else if (excess > 10) fine = 1500;
          return {
            result: `PKR ${fine.toLocaleString()} Fine`,
            secondaryResult: `Excess speed: +${excess} km/h over ${limit} km/h limit | Estimate only.`,
            formula: 'Traffic fine tier relative to excess speed'
          };
        }
      }
    ]
  };
