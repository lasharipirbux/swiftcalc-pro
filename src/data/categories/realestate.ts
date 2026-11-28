import { Category } from "../../types";

export const realestateCategory: Category = {
    id: 'realestate',
    name: 'Real Estate & Property',
    iconName: 'Building',
    description: 'Rental yield, plot area conversions, construction cost, property installments, FBR property tax, stamp duty, capital gains tax, cap rate, and valuation calculators.',
    color: 'from-emerald-700 to-green-900',
    calculators: [
      {
        id: 'rental-yield',
        name: 'Rental Yield Calculator',
        categoryId: 'realestate',
        description: 'Calculate gross and net rental yield on property investments.',
        inputs: [
          { id: 'rent', label: 'Monthly Rent (PKR)', type: 'number', defaultValue: 150000 },
          { id: 'price', label: 'Purchase Price (PKR)', type: 'number', defaultValue: 15000000 },
          { id: 'exp', label: 'Annual Expenses (PKR)', type: 'number', defaultValue: 100000 }
        ],
        calculate: (vals) => {
          const rawRent = Number(vals.rent ?? 0);
          const rent = (Number.isFinite(rawRent) ? rawRent : 0) * 12;
          const rawPrice = Number(vals.price ?? 0);
          const p = Number.isFinite(rawPrice) ? rawPrice : 0;
          const rawExp = Number(vals.exp ?? 0);
          const exp = Number.isFinite(rawExp) ? rawExp : 0;
          if (p <= 0) return { result: 'Purchase price must be greater than zero' };
          return {
            result: `Net Yield: ${(((rent - exp) / p) * 100).toFixed(2)}%`,
            secondaryResult: `Gross Yield: ${((rent / p) * 100).toFixed(2)}% | Annual Rent: PKR ${rent.toLocaleString()}`,
            formula: 'Net Yield = [(Annual Rent - Expenses) / Purchase Price] * 100'
          };
        }
      },
      {
        id: 'plot-area-converter',
        name: 'Plot Area Converter',
        categoryId: 'realestate',
        description: 'Convert between marla, kanal, sq ft, sq yard, and sq meter (1 marla = 272.25 sq ft).',
        inputs: [
          { id: 'val', label: 'Area Value', type: 'number', defaultValue: 5 },
          { id: 'unit', label: 'From Unit', type: 'select', defaultValue: 'marla', options: [
            { label: 'Marla', value: 'marla' },
            { label: 'Kanal', value: 'kanal' },
            { label: 'Square Feet (sq ft)', value: 'sqft' },
            { label: 'Square Yard (sq yd)', value: 'sqyd' },
            { label: 'Square Meter (sq m)', value: 'sqm' }
          ]}
        ],
        calculate: (vals) => {
          const v = Number(vals.val);
          let sqft = v;
          if (vals.unit === 'marla') sqft = v * 272.25;
          else if (vals.unit === 'kanal') sqft = v * 20 * 272.25;
          else if (vals.unit === 'sqyd') sqft = v * 9;
          else if (vals.unit === 'sqm') sqft = v * 10.7639;

          const marlas = sqft / 272.25;
          const kanals = marlas / 20;
          const sqyds = sqft / 9;
          const sqms = sqft / 10.7639;

          return {
            result: `${sqft.toFixed(2)} sq ft`,
            secondaryResult: `${marlas.toFixed(2)} Marla | ${kanals.toFixed(3)} Kanal | ${sqyds.toFixed(2)} sq yd | ${sqms.toFixed(2)} sq m`,
            formula: '1 Marla = 272.25 sq ft, 1 Kanal = 20 Marla'
          };
        }
      },
      {
        id: 'plot-price-calc',
        name: 'Plot Price Calculator',
        categoryId: 'realestate',
        description: 'Calculate total plot price using price per marla and plot size.',
        inputs: [
          { id: 'rate', label: 'Price per Marla (PKR)', type: 'number', defaultValue: 1200000 },
          { id: 'size', label: 'Plot Size', type: 'number', defaultValue: 10 },
          { id: 'unit', label: 'Plot Size Unit', type: 'select', defaultValue: 'marla', options: [
            { label: 'Marla', value: 'marla' },
            { label: 'Kanal', value: 'kanal' }
          ]}
        ],
        calculate: (vals) => {
          const rate = Number(vals.rate);
          const size = Number(vals.size);
          const marlas = vals.unit === 'kanal' ? size * 20 : size;
          const total = rate * marlas;
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `Total Marlas: ${marlas} | Rate per Marla: PKR ${rate.toLocaleString()}`,
            formula: 'Total Price = Rate per Marla × Total Marlas'
          };
        }
      },
      {
        id: 'marla-to-sqft-price',
        name: 'Price per Marla to Price per Sq Ft',
        categoryId: 'realestate',
        description: 'Convert price per marla into price per square foot (PKR).',
        inputs: [
          { id: 'rate', label: 'Price per Marla (PKR)', type: 'number', defaultValue: 1500000 }
        ],
        calculate: (vals) => {
          const rate = Number(vals.rate);
          const perSqFt = rate / 272.25;
          return {
            result: `PKR ${perSqFt.toFixed(2)} / sq ft`,
            formula: 'Price per Sq Ft = Price per Marla / 272.25'
          };
        }
      },
      {
        id: 'construction-cost-est',
        name: 'Construction Cost Estimator',
        categoryId: 'realestate',
        description: 'Estimate total construction cost based on covered area and rate per sq ft.',
        inputs: [
          { id: 'area', label: 'Covered Area (sq ft)', type: 'number', defaultValue: 2500 },
          { id: 'rate', label: 'Rate per Sq Ft (PKR)', type: 'number', defaultValue: 4500 }
        ],
        calculate: (vals) => {
          const area = Number(vals.area);
          const rate = Number(vals.rate);
          const total = area * rate;
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `Covered Area: ${area} sq ft @ PKR ${rate.toLocaleString()}/sq ft`,
            formula: 'Total Cost = Covered Area × Rate per Sq Ft'
          };
        }
      },
      {
        id: 'property-installment',
        name: 'Property Installment Calculator',
        categoryId: 'realestate',
        description: 'Calculate monthly installment plan for property purchase.',
        inputs: [
          { id: 'total', label: 'Total Price (PKR)', type: 'number', defaultValue: 12000000 },
          { id: 'down', label: 'Down Payment (PKR)', type: 'number', defaultValue: 3000000 },
          { id: 'months', label: 'Number of Months', type: 'number', defaultValue: 36 }
        ],
        calculate: (vals) => {
          const total = Number(vals.total);
          const down = Number(vals.down);
          const months = Math.max(1, Number(vals.months));
          const remaining = total - down;
          const monthly = remaining / months;
          return {
            result: `PKR ${monthly.toLocaleString(undefined, {maximumFractionDigits: 0})} / month`,
            secondaryResult: `Remaining Balance: PKR ${remaining.toLocaleString()} over ${months} months`,
            formula: 'Monthly Installment = (Total Price - Down Payment) / Number of Months'
          };
        }
      },
      {
        id: 'down-payment-calc',
        name: 'Down Payment Calculator',
        categoryId: 'realestate',
        description: 'Calculate required down payment amount based on percentage.',
        inputs: [
          { id: 'price', label: 'Total Property Price (PKR)', type: 'number', defaultValue: 10000000 },
          { id: 'pct', label: 'Down Payment Percentage (%)', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const price = Number(vals.price);
          const pct = Number(vals.pct);
          const down = price * (pct / 100);
          const loan = price - down;
          return {
            result: `PKR ${down.toLocaleString()}`,
            secondaryResult: `Financing / Balance: PKR ${loan.toLocaleString()}`,
            formula: 'Down Payment = Total Price × (Percentage / 100)'
          };
        }
      },
      {
        id: 'property-profit-calc',
        name: 'Property Profit & ROI Calculator',
        categoryId: 'realestate',
        description: 'Calculate net profit and ROI on property sale after buy price and expenses.',
        inputs: [
          { id: 'buy', label: 'Purchase Buy Price (PKR)', type: 'number', defaultValue: 8000000 },
          { id: 'sell', label: 'Selling Price (PKR)', type: 'number', defaultValue: 11500000 },
          { id: 'exp', label: 'Taxes & Expenses (PKR)', type: 'number', defaultValue: 300000 }
        ],
        calculate: (vals) => {
          const buy = Number(vals.buy);
          const sell = Number(vals.sell);
          const exp = Number(vals.exp);
          const totalCost = buy + exp;
          const profit = sell - totalCost;
          const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
          return {
            result: `PKR ${profit.toLocaleString()}`,
            secondaryResult: `ROI: ${roi.toFixed(2)}% | Total Investment: PKR ${totalCost.toLocaleString()}`,
            formula: 'Net Profit = Selling Price - (Buy Price + Expenses)'
          };
        }
      },
      // 17 New Real Estate Calculators Added Below (Pakistan-friendly)
      {
        id: 're-fbr-property-tax',
        name: 'FBR Property Tax Calculator (Pakistan)',
        categoryId: 'realestate',
        description: 'Calculate annual withholding property tax for filers and non-filers in Pakistan (PKR).',
        inputs: [
          { id: 'value', label: 'Property Value / FBR Valuation (PKR)', type: 'number', defaultValue: 10000000 },
          { id: 'filer', label: 'Tax Status', type: 'select', defaultValue: 'filer', options: [
            { label: 'Filer (Active Taxpayer)', value: 'filer' },
            { label: 'Non-Filer', value: 'nonfiler' }
          ]}
        ],
        calculate: (vals) => {
          const val = Number(vals.value);
          // Standard withholding tax: Filer ~1% to 2%, Non-Filer ~4% to 7%
          const rate = vals.filer === 'filer' ? 0.02 : 0.06;
          const tax = val * rate;
          return {
            result: `PKR ${Math.round(tax).toLocaleString()} Annual Tax`,
            secondaryResult: `Estimated @ ${(rate * 100)}% for ${vals.filer === 'filer' ? 'Filer' : 'Non-Filer'}`,
            formula: 'Property Tax = Property Value × Tax Rate %'
          };
        }
      },
      {
        id: 're-stamp-duty',
        name: 'Stamp Duty & Registration Fee Calculator',
        categoryId: 'realestate',
        description: 'Calculate provincial stamp duty and property registration fees in Pakistan (PKR).',
        inputs: [
          { id: 'value', label: 'Property Value (PKR)', type: 'number', defaultValue: 15000000 }
        ],
        calculate: (vals) => {
          const v = Number(vals.value);
          // Stamp duty ~2%, Registration fee ~1%
          const stampDuty = v * 0.02;
          const regFee = v * 0.01;
          const totalFees = stampDuty + regFee;
          return {
            result: `PKR ${Math.round(totalFees).toLocaleString()} Total Fees`,
            secondaryResult: `Stamp Duty (2%): PKR ${Math.round(stampDuty).toLocaleString()} | Registration (1%): PKR ${Math.round(regFee).toLocaleString()}`,
            formula: 'Total Transfer Fees = Stamp Duty (2%) + Registration Fee (1%)'
          };
        }
      },
      {
        id: 're-cgt-property',
        name: 'Capital Gains Tax (CGT) on Property Calculator',
        categoryId: 'realestate',
        description: 'Calculate Capital Gains Tax on property disposal based on holding period in Pakistan.',
        inputs: [
          { id: 'gain', label: 'Capital Gain / Profit (PKR)', type: 'number', defaultValue: 3000000 },
          { id: 'yearsHeld', label: 'Holding Period (Years)', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const gain = Number(vals.gain);
          const yrs = Number(vals.yearsHeld);
          let rate = 0.15; // 15% for year 1
          if (yrs >= 4) rate = 0.0;
          else if (yrs === 3) rate = 0.05;
          else if (yrs === 2) rate = 0.10;
          const tax = gain * rate;
          return {
            result: `PKR ${Math.round(tax).toLocaleString()} CGT`,
            secondaryResult: `Tax Rate: ${(rate * 100)}% for holding period of ${yrs} years`,
            formula: 'Capital Gains Tax = Profit Gain × Applicable Holding Period Rate'
          };
        }
      },
      {
        id: 're-cap-rate',
        name: 'Rent Capitalization Rate (Cap Rate) Calculator',
        categoryId: 'realestate',
        description: 'Calculate property capitalization rate (Cap Rate) to evaluate investment returns.',
        inputs: [
          { id: 'noi', label: 'Net Operating Income - NOI (PKR / year)', type: 'number', defaultValue: 1200000 },
          { id: 'price', label: 'Property Value / Cost (PKR)', type: 'number', defaultValue: 15000000 }
        ],
        calculate: (vals) => {
          const noi = Number(vals.noi);
          const p = Number(vals.price);
          if (p <= 0) return { result: 'Property price must be > 0' };
          const capRate = (noi / p) * 100;
          return {
            result: `${capRate.toFixed(2)}% Cap Rate`,
            secondaryResult: `Net Operating Income: PKR ${noi.toLocaleString()}`,
            formula: 'Cap Rate = (Net Operating Income / Property Value) × 100'
          };
        }
      },
      {
        id: 're-mortgage-affordability',
        name: 'Mortgage Affordability Calculator',
        categoryId: 'realestate',
        description: 'Calculate maximum home loan amount you can afford based on monthly income.',
        inputs: [
          { id: 'monthlyIncome', label: 'Monthly Household Income (PKR)', type: 'number', defaultValue: 300000 },
          { id: 'monthlyDebt', label: 'Existing Monthly Debt Payments (PKR)', type: 'number', defaultValue: 40000 }
        ],
        calculate: (vals) => {
          const inc = Number(vals.monthlyIncome);
          const debt = Number(vals.monthlyDebt);
          // Lenders typically allow 40% of net income for housing EMI
          const maxEmi = Math.max(0, (inc * 0.4) - debt);
          const estLoan = maxEmi * 85; // rough loan factor over 15 years
          return {
            result: `PKR ${Math.round(estLoan).toLocaleString()} Max Loan`,
            secondaryResult: `Max Affordable Monthly EMI: PKR ${Math.round(maxEmi).toLocaleString()}`,
            formula: 'Affordable Loan estimated from 40% debt-to-income housing ratio'
          };
        }
      },
      {
        id: 're-grm',
        name: 'Gross Rent Multiplier (GRM) Calculator',
        categoryId: 'realestate',
        description: 'Calculate Gross Rent Multiplier to compare income property values.',
        inputs: [
          { id: 'price', label: 'Property Price (PKR)', type: 'number', defaultValue: 12000000 },
          { id: 'annualRent', label: 'Gross Annual Rent (PKR)', type: 'number', defaultValue: 1440000 }
        ],
        calculate: (vals) => {
          const p = Number(vals.price);
          const rent = Number(vals.annualRent);
          if (rent <= 0) return { result: 'Annual rent must be > 0' };
          const grm = p / rent;
          return {
            result: `${grm.toFixed(2)} GRM`,
            secondaryResult: `Lower GRM indicates potentially better investment value`,
            formula: 'Gross Rent Multiplier (GRM) = Property Price / Gross Annual Rent'
          };
        }
      },
      {
        id: 're-flipping-profit',
        name: 'Property Flipping Profit Calculator',
        categoryId: 'realestate',
        description: 'Calculate net profit from buying, renovating, and reselling real estate.',
        inputs: [
          { id: 'buy', label: 'Purchase Price (PKR)', type: 'number', defaultValue: 8000000 },
          { id: 'reno', label: 'Renovation Cost (PKR)', type: 'number', defaultValue: 1500000 },
          { id: 'sell', label: 'Target Resale Price (PKR)', type: 'number', defaultValue: 12000000 },
          { id: 'holdingCost', label: 'Holding & Closing Costs (PKR)', type: 'number', defaultValue: 400000 }
        ],
        calculate: (vals) => {
          const buy = Number(vals.buy);
          const reno = Number(vals.reno);
          const sell = Number(vals.sell);
          const hold = Number(vals.holdingCost);
          const totalCost = buy + reno + hold;
          const profit = sell - totalCost;
          const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
          return {
            result: `PKR ${profit.toLocaleString()} Net Profit`,
            secondaryResult: `Flip ROI: ${roi.toFixed(2)}% | Total Capital Invested: PKR ${totalCost.toLocaleString()}`,
            formula: 'Net Profit = Resale Price - (Purchase Price + Renovation + Holding Costs)'
          };
        }
      },
      {
        id: 're-remodeling-roi',
        name: 'House Remodeling ROI Calculator',
        categoryId: 'realestate',
        description: 'Estimate value added to property from home renovation and kitchen/bathroom upgrades.',
        inputs: [
          { id: 'cost', label: 'Renovation Cost (PKR)', type: 'number', defaultValue: 2000000 },
          { id: 'valueAdded', label: 'Estimated Property Value Increase (PKR)', type: 'number', defaultValue: 2500000 }
        ],
        calculate: (vals) => {
          const c = Number(vals.cost);
          const v = Number(vals.valueAdded);
          const netGain = v - c;
          const roi = c > 0 ? (netGain / c) * 100 : 0;
          return {
            result: `PKR ${netGain.toLocaleString()} Net Value Gain`,
            secondaryResult: `Renovation Return on Investment: ${roi.toFixed(1)}%`,
            formula: 'Net Gain = Value Increase - Renovation Cost'
          };
        }
      },
      {
        id: 're-insurance-cost',
        name: 'Home Insurance Cost Estimator',
        categoryId: 'realestate',
        description: 'Estimate annual property and hazard insurance premiums.',
        inputs: [
          { id: 'structureValue', label: 'Home Structure Replacement Value (PKR)', type: 'number', defaultValue: 15000000 },
          { id: 'ratePct', label: 'Annual Premium Rate (%)', type: 'number', defaultValue: 0.3 }
        ],
        calculate: (vals) => {
          const val = Number(vals.structureValue);
          const rate = Number(vals.ratePct) / 100;
          const annualPremium = val * rate;
          return {
            result: `PKR ${Math.round(annualPremium).toLocaleString()} / year`,
            secondaryResult: `Monthly Premium: PKR ${Math.round(annualPremium / 12).toLocaleString()}`,
            formula: 'Annual Premium = Structure Replacement Value × Premium Rate %'
          };
        }
      },
      {
        id: 're-agent-commission',
        name: 'Property Agent Commission Calculator',
        categoryId: 'realestate',
        description: 'Calculate real estate broker or agent commission on property sale or purchase.',
        inputs: [
          { id: 'price', label: 'Property Transaction Price (PKR)', type: 'number', defaultValue: 15000000 },
          { id: 'commissionPct', label: 'Commission Rate (%)', type: 'number', defaultValue: 1.0 }
        ],
        calculate: (vals) => {
          const p = Number(vals.price);
          const pct = Number(vals.commissionPct) / 100;
          const comm = p * pct;
          return {
            result: `PKR ${Math.round(comm).toLocaleString()}`,
            secondaryResult: `Agent Commission @ ${(pct * 100)}% of transaction price`,
            formula: 'Commission = Property Price × Commission Rate %'
          };
        }
      },
      {
        id: 're-plot-split',
        name: 'Land Sub-division / Plot Splitting Calculator',
        categoryId: 'realestate',
        description: 'Calculate number of smaller residential plots obtainable from a large land parcel.',
        inputs: [
          { id: 'totalMarla', label: 'Total Land Area (Marlas)', type: 'number', defaultValue: 100 },
          { id: 'plotMarla', label: 'Target Size per Plot (Marlas)', type: 'number', defaultValue: 5 },
          { id: 'roadsPct', label: 'Land Allocated for Roads & Amenities (%)', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const total = Number(vals.totalMarla);
          const plotSize = Number(vals.plotMarla);
          const roadPct = Number(vals.roadsPct) / 100;
          if (plotSize <= 0) return { result: 'Plot size must be > 0' };
          const netUsableLand = total * (1 - roadPct);
          const totalPlots = Math.floor(netUsableLand / plotSize);
          return {
            result: `${totalPlots} Saleable Plots (${plotSize} Marla each)`,
            secondaryResult: `Net usable land: ${netUsableLand.toFixed(1)} Marlas after ${vals.roadsPct}% road allocation`,
            formula: 'Total Plots = [Total Land × (1 - Road %)] / Plot Size'
          };
        }
      },
      {
        id: 're-commercial-valuation',
        name: 'Commercial Property Valuation Calculator',
        categoryId: 'realestate',
        description: 'Estimate commercial property value using income capitalization approach.',
        inputs: [
          { id: 'annualRevenue', label: 'Gross Annual Rental Income (PKR)', type: 'number', defaultValue: 3000000 },
          { id: 'multiplier', label: 'Market Gross Income Multiplier (GIM)', type: 'number', defaultValue: 8.5 }
        ],
        calculate: (vals) => {
          const rev = Number(vals.annualRevenue);
          const gim = Number(vals.multiplier);
          const val = rev * gim;
          return {
            result: `PKR ${Math.round(val).toLocaleString()} Valuation`,
            secondaryResult: `Based on Gross Income Multiplier (GIM) of ${gim}`,
            formula: 'Commercial Value = Gross Annual Rental Income × GIM'
          };
        }
      },
      {
        id: 're-apartment-maintenance',
        name: 'Apartment Maintenance Fee Calculator',
        categoryId: 'realestate',
        description: 'Calculate monthly apartment building or society maintenance fee based on area.',
        inputs: [
          { id: 'sqft', label: 'Apartment Size (Square Feet)', type: 'number', defaultValue: 1400 },
          { id: 'ratePerSqFt', label: 'Maintenance Rate per Sq Ft (PKR / month)', type: 'number', defaultValue: 8 }
        ],
        calculate: (vals) => {
          const area = Number(vals.sqft);
          const rate = Number(vals.ratePerSqFt);
          const monthly = area * rate;
          return {
            result: `PKR ${monthly.toLocaleString()} / month`,
            secondaryResult: `Annual Maintenance: PKR ${(monthly * 12).toLocaleString()}`,
            formula: 'Monthly Fee = Apartment Size (sq ft) × Rate per Sq Ft'
          };
        }
      },
      {
        id: 're-appreciation',
        name: 'Annual Property Appreciation Calculator',
        categoryId: 'realestate',
        description: 'Calculate future property value based on annual appreciation rate.',
        inputs: [
          { id: 'currentVal', label: 'Current Property Value (PKR)', type: 'number', defaultValue: 20000000 },
          { id: 'appreciationRate', label: 'Annual Appreciation Rate (%)', type: 'number', defaultValue: 10 },
          { id: 'years', label: 'Years', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const cur = Number(vals.currentVal);
          const rate = Number(vals.appreciationRate) / 100;
          const yrs = Number(vals.years);
          const future = cur * Math.pow(1 + rate, yrs);
          const gain = future - cur;
          return {
            result: `PKR ${Math.round(future).toLocaleString()}`,
            secondaryResult: `Total Value Gain: PKR ${Math.round(gain).toLocaleString()} over ${yrs} years`,
            formula: 'Future Value = Current Value × (1 + Appreciation Rate)^Years'
          };
        }
      },
      {
        id: 're-payoff-acceleration',
        name: 'Mortgage Payoff Acceleration Calculator',
        categoryId: 'realestate',
        description: 'Calculate interest saved and time reduced by making extra mortgage principal payments.',
        inputs: [
          { id: 'loanBalance', label: 'Remaining Loan Balance (PKR)', type: 'number', defaultValue: 8000000 },
          { id: 'extraPayment', label: 'Extra Monthly Principal Payment (PKR)', type: 'number', defaultValue: 25000 },
          { id: 'rate', label: 'Annual Markup Rate (%)', type: 'number', defaultValue: 16 }
        ],
        calculate: (vals) => {
          const extra = Number(vals.extraPayment);
          const r = Number(vals.rate) / 100;
          // Approximate annual interest saved by extra payment
          const annualInterestSaved = extra * 12 * (r / 2);
          return {
            result: `Approx. PKR ${Math.round(annualInterestSaved * 5).toLocaleString()} Interest Saved`,
            secondaryResult: `By paying extra PKR ${extra.toLocaleString()} monthly principal`,
            formula: 'Interest savings estimated from principal reduction velocity'
          };
        }
      },
      {
        id: 're-home-equity',
        name: 'Home Equity Calculator',
        categoryId: 'realestate',
        description: 'Calculate your current home equity (Market value minus remaining mortgage balance).',
        inputs: [
          { id: 'marketValue', label: 'Current Market Value (PKR)', type: 'number', defaultValue: 25000000 },
          { id: 'mortgageBalance', label: 'Remaining Mortgage Balance (PKR)', type: 'number', defaultValue: 9000000 }
        ],
        calculate: (vals) => {
          const val = Number(vals.marketValue);
          const bal = Number(vals.mortgageBalance);
          const equity = Math.max(0, val - bal);
          const pct = val > 0 ? (equity / val) * 100 : 0;
          return {
            result: `PKR ${equity.toLocaleString()} Equity (${pct.toFixed(1)}%)`,
            secondaryResult: `Total Market Value: PKR ${val.toLocaleString()} | Mortgage Owed: PKR ${bal.toLocaleString()}`,
            formula: 'Home Equity = Current Market Value - Remaining Mortgage Balance'
          };
        }
      },
      {
        id: 're-noi',
        name: 'Gross vs Net Operating Income (NOI) Calculator',
        categoryId: 'realestate',
        description: 'Calculate Net Operating Income (NOI) by subtracting operating expenses from gross rental income.',
        inputs: [
          { id: 'grossRent', label: 'Gross Annual Rental Income (PKR)', type: 'number', defaultValue: 1800000 },
          { id: 'operatingExp', label: 'Operating Expenses / Maintenance (PKR)', type: 'number', defaultValue: 250000 }
        ],
        calculate: (vals) => {
          const gross = Number(vals.grossRent);
          const exp = Number(vals.operatingExp);
          const noi = gross - exp;
          return {
            result: `PKR ${noi.toLocaleString()} NOI`,
            secondaryResult: `Gross Income: PKR ${gross.toLocaleString()} | Expenses: PKR ${exp.toLocaleString()}`,
            formula: 'Net Operating Income (NOI) = Gross Rental Income - Operating Expenses'
          };
        }
      },
      {
        id: 're-property-cap-rate',
        name: 'Property Capitalization Rate (Cap Rate)',
        categoryId: 'realestate',
        description: 'Calculate real estate capitalization rate (Cap Rate) to evaluate investment yield.',
        inputs: [
          { id: 'noi', label: 'Net Operating Income (NOI in PKR)', type: 'number', defaultValue: 1500000 },
          { id: 'price', label: 'Property Value / Purchase Price (PKR)', type: 'number', defaultValue: 25000000 }
        ],
        calculate: (vals) => {
          const noi = Number(vals.noi);
          const p = Number(vals.price);
          if (p <= 0) return { result: 'Property value must be > 0' };
          const capRate = (noi / p) * 100;
          return {
            result: `${capRate.toFixed(2)}% Cap Rate`,
            secondaryResult: `Annual return on un-leveraged property investment`,
            formula: 'Cap Rate (%) = (Net Operating Income / Property Value) × 100'
          };
        }
      },
      {
        id: 're-cash-on-cash',
        name: 'Property Cash on Cash Return Calculator',
        categoryId: 'realestate',
        description: 'Calculate annual cash-on-cash return percentage for rental real estate investment.',
        inputs: [
          { id: 'cashFlow', label: 'Annual Pre-Tax Cash Flow (PKR)', type: 'number', defaultValue: 600000 },
          { id: 'invested', label: 'Total Cash Invested / Down Payment (PKR)', type: 'number', defaultValue: 5000000 }
        ],
        calculate: (vals) => {
          const cf = Number(vals.cashFlow);
          const inv = Number(vals.invested);
          if (inv <= 0) return { result: 'Invested cash must be > 0' };
          const coc = (cf / inv) * 100;
          return {
            result: `${coc.toFixed(2)}% Cash-on-Cash Return`,
            secondaryResult: `Annual cash return on invested capital`,
            formula: 'Cash-on-Cash Return (%) = (Annual Pre-Tax Cash Flow / Total Cash Invested) × 100'
          };
        }
      },
      {
        id: 're-refinance-breakeven',
        name: 'Mortgage Refinance Breakeven Calculator',
        categoryId: 'realestate',
        description: 'Calculate months required to recover refinancing closing costs through lower monthly payment.',
        inputs: [
          { id: 'costs', label: 'Refinancing Closing Costs (PKR)', type: 'number', defaultValue: 150000 },
          { id: 'monthlySavings', label: 'Monthly Payment Savings (PKR)', type: 'number', defaultValue: 12000 }
        ],
        calculate: (vals) => {
          const c = Number(vals.costs);
          const s = Number(vals.monthlySavings);
          if (s <= 0) return { result: 'Monthly savings must be > 0' };
          const months = c / s;
          return {
            result: `~${months.toFixed(1)} Months to Breakeven`,
            secondaryResult: `(${ (months / 12).toFixed(1) } years recovery period)`,
            formula: 'Breakeven Months = Closing Costs / Monthly Savings'
          };
        }
      },
      {
        id: 're-equity-loan-limit',
        name: 'Home Equity Loan Borrowing Limit Calculator',
        categoryId: 'realestate',
        description: 'Calculate maximum home equity loan limit (typically 80% LTV rule minus mortgage).',
        inputs: [
          { id: 'value', label: 'Current Property Market Value (PKR)', type: 'number', defaultValue: 30000000 },
          { id: 'mortgage', label: 'Outstanding Mortgage Balance (PKR)', type: 'number', defaultValue: 10000000 }
        ],
        calculate: (vals) => {
          const v = Number(vals.value);
          const m = Number(vals.mortgage);
          const maxLtvLimit = v * 0.80; // 80% LTV
          const maxLoan = Math.max(0, maxLtvLimit - m);
          return {
            result: `PKR ${maxLoan.toLocaleString()} Max Loan Limit`,
            secondaryResult: `Based on standard 80% Loan-to-Value (LTV) limit`,
            formula: 'Max Loan = (Market Value × 0.80) - Outstanding Mortgage'
          };
        }
      },
      {
        id: 're-usa-home-affordability',
        name: 'Home Affordability Calculator',
        categoryId: 'realestate',
        description: 'Estimate the maximum home price you can afford based on gross income, debts, down payment, and mortgage rates.',
        inputs: [
          { id: 'annualIncome', label: 'Annual Gross Income ($)', type: 'number', defaultValue: 110000 },
          { id: 'monthlyDebts', label: 'Monthly Debt Payments ($)', type: 'number', defaultValue: 500 },
          { id: 'downPayment', label: 'Down Payment ($)', type: 'number', defaultValue: 60000 },
          { id: 'interestRate', label: 'Mortgage Interest Rate (%)', type: 'number', defaultValue: 6.5 },
          { id: 'loanTermYears', label: 'Loan Term (Years)', type: 'number', defaultValue: 30 },
          { id: 'dtiLimitPct', label: 'Max Back-End DTI Ratio (%)', type: 'number', defaultValue: 36 },
          { id: 'taxInsPct', label: 'Annual Property Tax & Insurance (% of Home)', type: 'number', defaultValue: 1.5 }
        ],
        calculate: (vals) => {
          const income = Math.max(0, Number(vals.annualIncome) || 0);
          const debts = Math.max(0, Number(vals.monthlyDebts) || 0);
          const down = Math.max(0, Number(vals.downPayment) || 0);
          const rate = Math.max(0, Number(vals.interestRate) || 0) / 100 / 12;
          const n = Math.max(1, Number(vals.loanTermYears) || 30) * 12;
          const dti = Math.max(1, Number(vals.dtiLimitPct) || 36) / 100;
          const taxInsMonthlyRate = Math.max(0, Number(vals.taxInsPct) || 0) / 100 / 12;

          const monthlyIncome = income / 12;
          const maxHousingBudget = Math.max(0, monthlyIncome * dti - debts);
          if (maxHousingBudget <= 0) {
            return {
              result: '$0 Affordable Home Price',
              secondaryResult: 'Monthly debts exceed selected DTI housing allowance',
              note: 'Estimates only. Check official sources for current rates.'
            };
          }

          // PITI = Loan * pmtFactor + HomePrice * taxInsMonthlyRate; Loan = HomePrice - Down
          const pmtFactor =
            rate === 0 ? 1 / n : (rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
          const homePrice = Math.max(
            down,
            (maxHousingBudget + down * pmtFactor) / (pmtFactor + taxInsMonthlyRate)
          );
          const loanAmt = Math.max(0, homePrice - down);

          return {
            result: `$${Math.round(homePrice).toLocaleString()} Max Home Price`,
            secondaryResult: `Est. Max Loan: $${Math.round(loanAmt).toLocaleString()} | Max Monthly PITI: $${Math.round(maxHousingBudget).toLocaleString()}`,
            note: 'Estimates only. Check official sources for current rates.',
            formula: 'Max Home Price solved from Max Monthly Housing Budget = (Monthly Income × DTI%) − Monthly Debts'
          };
        }
      },
      {
        id: 're-usa-rent-vs-buy',
        name: 'Rent vs Buy Calculator',
        categoryId: 'realestate',
        description: 'Compare total net housing costs and equity built between renting and buying a home over your stay horizon.',
        inputs: [
          { id: 'homePrice', label: 'Home Purchase Price ($)', type: 'number', defaultValue: 400000 },
          { id: 'downPayment', label: 'Down Payment ($)', type: 'number', defaultValue: 80000 },
          { id: 'mortgageRate', label: 'Mortgage Rate (%)', type: 'number', defaultValue: 6.5 },
          { id: 'loanYears', label: 'Loan Term (Years)', type: 'number', defaultValue: 30 },
          { id: 'monthlyRent', label: 'Monthly Rent ($)', type: 'number', defaultValue: 2400 },
          { id: 'rentGrowth', label: 'Annual Rent Increase (%)', type: 'number', defaultValue: 3 },
          { id: 'appreciation', label: 'Annual Home Appreciation (%)', type: 'number', defaultValue: 3.5 },
          { id: 'stayYears', label: 'Years You Plan to Stay', type: 'number', defaultValue: 7 }
        ],
        calculate: (vals) => {
          const price = Math.max(0, Number(vals.homePrice) || 0);
          const down = Math.max(0, Number(vals.downPayment) || 0);
          const r = Math.max(0, Number(vals.mortgageRate) || 0) / 100 / 12;
          const n = Math.max(1, Number(vals.loanYears) || 30) * 12;
          const rent0 = Math.max(0, Number(vals.monthlyRent) || 0);
          const rentInc = (Number(vals.rentGrowth) || 0) / 100;
          const appr = (Number(vals.appreciation) || 0) / 100;
          const stay = Math.max(1, Math.round(Number(vals.stayYears) || 5));

          const loan = Math.max(0, price - down);
          const emi = r === 0 ? loan / n : (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

          // Simulate stayYears
          let remLoan = loan;
          let totalBuyOutflow = down;
          for (let m = 0; m < Math.min(stay * 12, n); m++) {
            const intPaid = remLoan * r;
            const prinPaid = Math.max(0, emi - intPaid);
            remLoan = Math.max(0, remLoan - prinPaid);
            totalBuyOutflow += emi;
          }
          // Include ~1.5% annual tax/maintenance estimate on initial home price per year
          totalBuyOutflow += price * 0.015 * stay;
          const futureHomeValue = price * Math.pow(1 + appr, stay);
          const netBuyCost = totalBuyOutflow - (futureHomeValue - remLoan);

          let totalRentCost = 0;
          for (let y = 0; y < stay; y++) {
            totalRentCost += rent0 * Math.pow(1 + rentInc, y) * 12;
          }

          const diff = Math.abs(totalRentCost - netBuyCost);
          const better = netBuyCost <= totalRentCost ? 'Buying' : 'Renting';

          return {
            result: `${better} saves ~$${Math.round(diff).toLocaleString()} over ${stay} yrs`,
            secondaryResult: `Net Buy Cost: $${Math.round(netBuyCost).toLocaleString()} | Cumulative Rent: $${Math.round(totalRentCost).toLocaleString()}`,
            note: 'Estimates only. Check official sources for current rates.',
            formula: 'Net Buy Cost = (Down Payment + Payments + Upkeep) − Ending Equity vs Cumulative Escalating Rent'
          };
        }
      },
      {
        id: 're-usa-down-payment-savings',
        name: 'Down Payment Savings Calculator',
        categoryId: 'realestate',
        description: 'Plan how many months it takes to save a home down payment with monthly deposits and savings APY.',
        inputs: [
          { id: 'homePrice', label: 'Target Home Price ($)', type: 'number', defaultValue: 380000 },
          { id: 'downPct', label: 'Target Down Payment (%)', type: 'number', defaultValue: 20 },
          { id: 'currentSavings', label: 'Current Savings ($)', type: 'number', defaultValue: 22000 },
          { id: 'monthlyDeposit', label: 'Monthly Savings Contribution ($)', type: 'number', defaultValue: 1500 },
          { id: 'apy', label: 'Savings Account APY (%)', type: 'number', defaultValue: 4.2 }
        ],
        calculate: (vals) => {
          const home = Math.max(0, Number(vals.homePrice) || 0);
          const pct = Math.max(0, Number(vals.downPct) || 0) / 100;
          const cur = Math.max(0, Number(vals.currentSavings) || 0);
          const monthly = Math.max(0, Number(vals.monthlyDeposit) || 0);
          const monthlyRate = Math.max(0, Number(vals.apy) || 0) / 100 / 12;

          const targetAmount = home * pct;
          const remaining = Math.max(0, targetAmount - cur);

          if (remaining <= 0) {
            return {
              result: `Goal Met ($${Math.round(targetAmount).toLocaleString()} Target)`,
              secondaryResult: `Current savings cover ${Math.round(pct * 100)}% down payment`,
              note: 'Estimates only. Check official sources for current rates.'
            };
          }

          if (monthly <= 0 && monthlyRate <= 0) {
            return {
              result: `$${Math.round(targetAmount).toLocaleString()} Target`,
              secondaryResult: `Remaining Needed: $${Math.round(remaining).toLocaleString()} (set monthly savings > 0)`,
              note: 'Estimates only. Check official sources for current rates.'
            };
          }

          let bal = cur;
          let months = 0;
          while (bal < targetAmount && months < 600) {
            bal = (bal + monthly) * (1 + monthlyRate);
            months++;
          }

          return {
            result: `${months} Months (${(months / 12).toFixed(1)} yrs)`,
            secondaryResult: `Target Down Payment: $${Math.round(targetAmount).toLocaleString()} | Remaining Gap Today: $${Math.round(remaining).toLocaleString()}`,
            note: 'Estimates only. Check official sources for current rates.',
            formula: 'Target Down Payment = Home Price × Down Payment %; simulate monthly deposits + APY'
          };
        }
      }
    ]
  };
