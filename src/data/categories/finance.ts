import { Category } from "../../types";

export const financeCategory: Category = {
    id: 'finance',
    name: 'Finance & Money',
    iconName: 'DollarSign',
    description: 'Loans, mortgages, compound interest, investments, Pakistan tax slabs, car lease, fixed deposits, gold valuation, and currency counters.',
    color: 'from-emerald-600 to-teal-800',
    calculators: [
      {
        id: 'loan-calc',
        name: 'Loan & EMI Calculator',
        categoryId: 'finance',
        description: 'Calculate monthly loan installments (EMI), total interest, and total payment.',
        inputs: [
          { id: 'principal', label: 'Loan Amount ($)', type: 'number', defaultValue: 300000 },
          { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', defaultValue: 6.5 },
          { id: 'years', label: 'Loan Term (Years)', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const p = Number(vals.principal);
          const r = Number(vals.rate) / 12 / 100;
          const n = Number(vals.years) * 12;
          if (r === 0) return { result: `$${(p / n).toFixed(2)} /mo` };
          const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          return { result: `$${emi.toFixed(2)} / month`, secondaryResult: `Total Payment: $${(emi * n).toFixed(2)}`, formula: `EMI Formula` };
        }
      },
      {
        id: 'compound-interest',
        name: 'Compound Interest Calculator',
        categoryId: 'finance',
        description: 'Calculate investment growth with compound interest.',
        inputs: [
          { id: 'principal', label: 'Principal ($)', type: 'number', defaultValue: 15000 },
          { id: 'rate', label: 'Interest Rate (%)', type: 'number', defaultValue: 8.5 },
          { id: 'years', label: 'Years', type: 'number', defaultValue: 15 },
          { id: 'contrib', label: 'Monthly Contribution ($)', type: 'number', defaultValue: 300 }
        ],
        calculate: (vals) => {
          let total = Number(vals.principal);
          let contrib = Number(vals.principal);
          const r = Number(vals.rate) / 100;
          const m = Number(vals.contrib);
          for (let i = 0; i < Number(vals.years) * 12; i++) {
            total = (total + m) * (1 + r / 12);
            contrib += m;
          }
          return { result: `$${total.toFixed(2)}`, secondaryResult: `Interest: $${(total - contrib).toFixed(2)}`, formula: `Compound growth with monthly additions` };
        }
      },
      {
        id: 'mortgage-calc',
        name: 'Mortgage Calculator',
        categoryId: 'finance',
        description: 'Estimate home mortgage payments and amortization.',
        inputs: [
          { id: 'home', label: 'Home Price ($)', type: 'number', defaultValue: 450000 },
          { id: 'down', label: 'Down Payment ($)', type: 'number', defaultValue: 90000 },
          { id: 'rate', label: 'Rate (%)', type: 'number', defaultValue: 6.0 },
          { id: 'years', label: 'Years', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const p = Number(vals.home) - Number(vals.down);
          const r = Number(vals.rate) / 12 / 100;
          const n = Number(vals.years) * 12;
          const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          return { result: `$${emi.toFixed(2)} / mo`, secondaryResult: `Loan Amount: $${p}`, formula: `Mortgage payment formula` };
        }
      },
      {
        id: 'roi-calc',
        name: 'ROI (Return on Investment) Calculator',
        categoryId: 'finance',
        description: 'Measure net return percentage.',
        inputs: [{ id: 'invested', label: 'Invested ($)', type: 'number', defaultValue: 10000 }, { id: 'returned', label: 'Returned ($)', type: 'number', defaultValue: 14500 }],
        calculate: (vals) => {
          const inv = Number(vals.invested), ret = Number(vals.returned);
          const net = ret - inv;
          const roi = inv !== 0 ? (net / inv) * 100 : 0;
          return { result: `${roi.toFixed(2)}%`, secondaryResult: `Net Profit: $${net}`, formula: `ROI formula` };
        }
      },
      {
        id: 'sales-tax',
        name: 'Sales Tax & VAT Calculator',
        categoryId: 'finance',
        description: 'Calculate tax amount and total price.',
        inputs: [{ id: 'price', label: 'Original Price ($)', type: 'number', defaultValue: 85.00 }, { id: 'tax', label: 'Tax Rate (%)', type: 'number', defaultValue: 8.25 }],
        calculate: (vals) => {
          const p = Number(vals.price), t = Number(vals.tax) / 100;
          const taxAmt = p * t;
          return { result: `Total: $${(p + taxAmt).toFixed(2)}`, secondaryResult: `Tax: $${taxAmt.toFixed(2)}`, formula: `Price * (1 + Tax Rate)` };
        }
      },
      {
        id: 'tip-calc',
        name: 'Tip & Bill Split Calculator',
        categoryId: 'finance',
        description: 'Calculate tip and split among people.',
        inputs: [{ id: 'bill', label: 'Bill ($)', type: 'number', defaultValue: 95.50 }, { id: 'tip', label: 'Tip %', type: 'number', defaultValue: 20 }, { id: 'people', label: 'People', type: 'number', defaultValue: 3 }],
        calculate: (vals) => {
          const total = Number(vals.bill) * (1 + Number(vals.tip) / 100);
          const per = total / Math.max(1, Number(vals.people));
          return { result: `$${per.toFixed(2)} / person`, secondaryResult: `Total: $${total.toFixed(2)}`, formula: `Bill + Tip / People` };
        }
      },
      {
        id: 'loan-emi-months',
        name: 'Loan EMI Calculator (Months)',
        categoryId: 'finance',
        description: 'Calculate monthly loan installment (EMI) given loan amount, interest rate, and months.',
        inputs: [
          { id: 'amount', label: 'Loan Amount (PKR)', type: 'number', defaultValue: 500000 },
          { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', defaultValue: 12 },
          { id: 'months', label: 'Term in Months', type: 'number', defaultValue: 24 }
        ],
        calculate: (vals) => {
          const p = Number(vals.amount);
          const r = Number(vals.rate) / 12 / 100;
          const n = Number(vals.months);
          if (r === 0) return { result: `PKR ${(p / n).toFixed(2)} / mo` };
          const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          return {
            result: `PKR ${emi.toLocaleString(undefined, {maximumFractionDigits: 0})} / month`,
            secondaryResult: `Total Payment: PKR ${(emi * n).toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            formula: 'EMI = [P × r × (1+r)^n] / [(1+r)^n - 1]'
          };
        }
      },
      {
        id: 'simple-interest',
        name: 'Simple Interest Calculator',
        categoryId: 'finance',
        description: 'Calculate simple interest earned or paid over a period.',
        inputs: [
          { id: 'principal', label: 'Principal Amount (PKR)', type: 'number', defaultValue: 100000 },
          { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', defaultValue: 10 },
          { id: 'time', label: 'Time (Years)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const p = Number(vals.principal);
          const r = Number(vals.rate);
          const t = Number(vals.time);
          const interest = (p * r * t) / 100;
          const total = p + interest;
          return {
            result: `PKR ${interest.toLocaleString()}`,
            secondaryResult: `Total Amount (Principal + Interest): PKR ${total.toLocaleString()}`,
            formula: 'Simple Interest = (P × R × T) / 100'
          };
        }
      },
      {
        id: 'compound-interest-freq',
        name: 'Compound Interest Frequency Calculator',
        categoryId: 'finance',
        description: 'Calculate compound interest with customizable compounding frequency.',
        inputs: [
          { id: 'principal', label: 'Principal (PKR)', type: 'number', defaultValue: 200000 },
          { id: 'rate', label: 'Annual Interest Rate (%)', type: 'number', defaultValue: 9 },
          { id: 'years', label: 'Time (Years)', type: 'number', defaultValue: 5 },
          { id: 'freq', label: 'Compounding Frequency', type: 'select', defaultValue: '12', options: [
            { label: 'Monthly (12 times/yr)', value: '12' },
            { label: 'Quarterly (4 times/yr)', value: '4' },
            { label: 'Annually (1 time/yr)', value: '1' }
          ]}
        ],
        calculate: (vals) => {
          const p = Number(vals.principal);
          const r = Number(vals.rate) / 100;
          const t = Number(vals.years);
          const n = Number(vals.freq);
          const amount = p * Math.pow(1 + r / n, n * t);
          const interest = amount - p;
          return {
            result: `PKR ${amount.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            secondaryResult: `Interest Earned: PKR ${interest.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            formula: 'A = P × (1 + r/n)^(nt)'
          };
        }
      },
      {
        id: 'savings-goal-calc',
        name: 'Savings Goal Calculator',
        categoryId: 'finance',
        description: 'Calculate required monthly savings to reach a financial target goal.',
        inputs: [
          { id: 'target', label: 'Target Amount (PKR)', type: 'number', defaultValue: 1000000 },
          { id: 'months', label: 'Months to Reach Goal', type: 'number', defaultValue: 24 },
          { id: 'rate', label: 'Expected Annual Return (%)', type: 'number', defaultValue: 7 }
        ],
        calculate: (vals) => {
          const target = Number(vals.target);
          const months = Number(vals.months);
          const r = Number(vals.rate) / 12 / 100;
          if (months <= 0) return { result: 'Months must be > 0' };
          let monthly = 0;
          if (r === 0) {
            monthly = target / months;
          } else {
            monthly = (target * r) / (Math.pow(1 + r, months) - 1);
          }
          return {
            result: `PKR ${monthly.toLocaleString(undefined, {maximumFractionDigits: 0})} / month`,
            secondaryResult: `Total Saved over ${months} months: PKR ${(monthly * months).toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            formula: 'Annuity PMT formula for savings goals'
          };
        }
      },
      {
        id: 'salary-breakdown-calc',
        name: 'Salary Breakdown Calculator',
        categoryId: 'finance',
        description: 'Convert monthly salary into yearly, daily, and hourly earnings (PKR).',
        inputs: [
          { id: 'monthly', label: 'Monthly Salary (PKR)', type: 'number', defaultValue: 150000 },
          { id: 'days', label: 'Working Days per Month', type: 'number', defaultValue: 22 },
          { id: 'hours', label: 'Working Hours per Day', type: 'number', defaultValue: 8 }
        ],
        calculate: (vals) => {
          const m = Number(vals.monthly);
          const days = Number(vals.days);
          const hrs = Number(vals.hours);
          const yearly = m * 12;
          const daily = days > 0 ? m / days : 0;
          const hourly = (days > 0 && hrs > 0) ? daily / hrs : 0;
          return {
            result: `PKR ${yearly.toLocaleString()} / year`,
            secondaryResult: `Daily: PKR ${daily.toLocaleString(undefined, {maximumFractionDigits: 0})} | Hourly: PKR ${hourly.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            formula: 'Yearly = Monthly × 12, Hourly = Monthly / (Days × Hours)'
          };
        }
      },
      {
        id: 'discount-sale-calc',
        name: 'Discount and Sale Price Calculator',
        categoryId: 'finance',
        description: 'Calculate discount savings and final sale price.',
        inputs: [
          { id: 'price', label: 'Original Price (PKR)', type: 'number', defaultValue: 5000 },
          { id: 'discount', label: 'Discount Percentage (%)', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const price = Number(vals.price);
          const discPct = Number(vals.discount);
          const savings = price * (discPct / 100);
          const finalPrice = price - savings;
          return {
            result: `PKR ${finalPrice.toLocaleString()}`,
            secondaryResult: `You Save: PKR ${savings.toLocaleString()} (${discPct}%)`,
            formula: 'Final Price = Original Price × (1 - Discount%)'
          };
        }
      },
      {
        id: 'manual-currency-conv',
        name: 'Manual Currency Conversion Calculator',
        categoryId: 'finance',
        description: 'Convert currency amounts using manual exchange rate entry.',
        inputs: [
          { id: 'amount', label: 'Amount in PKR', type: 'number', defaultValue: 50000 },
          { id: 'rate', label: 'Exchange Rate (Foreign Currency per 1 PKR)', type: 'number', defaultValue: 0.0036 }
        ],
        calculate: (vals) => {
          const amt = Number(vals.amount);
          const rate = Number(vals.rate);
          const converted = amt * rate;
          return {
            result: `${converted.toFixed(2)} Foreign Units`,
            secondaryResult: `1 PKR = ${rate} Foreign Currency`,
            formula: 'Converted = Amount in PKR × Exchange Rate'
          };
        }
      },
      {
        id: 'profit-margin-calc',
        name: 'Business Profit Margin Calculator',
        categoryId: 'finance',
        description: 'Calculate gross profit and profit margin percentage from revenue and cost.',
        inputs: [
          { id: 'revenue', label: 'Total Revenue (PKR)', type: 'number', defaultValue: 250000 },
          { id: 'cost', label: 'Cost of Goods Sold - COGS (PKR)', type: 'number', defaultValue: 160000 }
        ],
        calculate: (vals) => {
          const rev = Number(vals.revenue);
          const cost = Number(vals.cost);
          const profit = rev - cost;
          const margin = rev > 0 ? (profit / rev) * 100 : 0;
          return {
            result: `${margin.toFixed(2)}% Profit Margin`,
            secondaryResult: `Gross Profit: PKR ${profit.toLocaleString()}`,
            formula: 'Margin = [(Revenue - COGS) / Revenue] × 100'
          };
        }
      },
      // 11 New Finance & Money Calculators Added Below (Pakistan-friendly)
      {
        id: 'finance-fbr-tax',
        name: 'Pakistan Income Tax Slabs Calculator (FBR)',
        categoryId: 'finance',
        description: 'Estimate annual income tax on salary in Pakistan based on recent FBR tax slabs.',
        inputs: [
          { id: 'annualSalary', label: 'Annual Taxable Salary (PKR)', type: 'number', defaultValue: 1800000 }
        ],
        calculate: (vals) => {
          const sal = Number(vals.annualSalary);
          let tax = 0;
          if (sal <= 600000) tax = 0;
          else if (sal <= 1200000) tax = (sal - 600000) * 0.05;
          else if (sal <= 2200000) tax = 30000 + (sal - 1200000) * 0.15;
          else if (sal <= 3200000) tax = 180000 + (sal - 2200000) * 0.25;
          else if (sal <= 4100000) tax = 430000 + (sal - 3200000) * 0.30;
          else tax = 700000 + (sal - 4100000) * 0.35;

          const monthlyTax = tax / 12;
          return {
            result: `PKR ${Math.round(tax).toLocaleString()} / year`,
            secondaryResult: `Monthly Tax Deduction: PKR ${Math.round(monthlyTax).toLocaleString()} | FBR Slabs`,
            formula: 'Progressive annual income tax calculation based on FBR brackets'
          };
        }
      },
      {
        id: 'finance-car-lease',
        name: 'Car Lease / Auto Installment Calculator',
        categoryId: 'finance',
        description: 'Calculate monthly auto lease installment for car financing in Pakistan.',
        inputs: [
          { id: 'carPrice', label: 'Car Price (PKR)', type: 'number', defaultValue: 4500000 },
          { id: 'downPayment', label: 'Down Payment (PKR)', type: 'number', defaultValue: 1350000 },
          { id: 'markup', label: 'Annual Markup Rate (%)', type: 'number', defaultValue: 18 },
          { id: 'years', label: 'Lease Tenure (Years)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const p = Number(vals.carPrice) - Number(vals.downPayment);
          const r = Number(vals.markup) / 12 / 100;
          const n = Number(vals.years) * 12;
          if (r === 0) return { result: `PKR ${(p / n).toFixed(0)} / month` };
          const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          return {
            result: `PKR ${Math.round(emi).toLocaleString()} / month`,
            secondaryResult: `Total Financed Amount: PKR ${p.toLocaleString()} | Tenure: ${vals.years} years`,
            formula: 'Auto Lease EMI Formula = [P × r × (1+r)^n] / [(1+r)^n - 1]'
          };
        }
      },
      {
        id: 'finance-home-loan',
        name: 'Home Loan / House Financing Calculator',
        categoryId: 'finance',
        description: 'Calculate monthly mortgage or house financing installments (PKR).',
        inputs: [
          { id: 'amount', label: 'Financing Amount (PKR)', type: 'number', defaultValue: 10000000 },
          { id: 'rate', label: 'Annual Profit Rate (%)', type: 'number', defaultValue: 15 },
          { id: 'years', label: 'Term (Years)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const p = Number(vals.amount);
          const r = Number(vals.rate) / 12 / 100;
          const n = Number(vals.years) * 12;
          const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
          return {
            result: `PKR ${Math.round(emi).toLocaleString()} / month`,
            secondaryResult: `Total Payment: PKR ${Math.round(emi * n).toLocaleString()}`,
            formula: 'House Financing Monthly Installment Formula'
          };
        }
      },
      {
        id: 'finance-mutual-fund',
        name: 'Mutual Fund Investment Return Calculator',
        categoryId: 'finance',
        description: 'Calculate expected future value of mutual fund investments and SIPs in Pakistan.',
        inputs: [
          { id: 'initial', label: 'Initial Investment (PKR)', type: 'number', defaultValue: 100000 },
          { id: 'sip', label: 'Monthly SIP Contribution (PKR)', type: 'number', defaultValue: 20000 },
          { id: 'rate', label: 'Expected Annual Return (%)', type: 'number', defaultValue: 18 },
          { id: 'years', label: 'Investment Horizon (Years)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          let total = Number(vals.initial);
          let invested = Number(vals.initial);
          const r = Number(vals.rate) / 100;
          const m = Number(vals.sip);
          for (let i = 0; i < Number(vals.years) * 12; i++) {
            total = (total + m) * (1 + r / 12);
            invested += m;
          }
          const profit = total - invested;
          return {
            result: `PKR ${Math.round(total).toLocaleString()}`,
            secondaryResult: `Total Invested: PKR ${invested.toLocaleString()} | Profit: PKR ${Math.round(profit).toLocaleString()}`,
            formula: 'Compound SIP Future Value Formula'
          };
        }
      },
      {
        id: 'finance-fixed-deposit',
        name: 'Fixed Deposit Profit Calculator',
        categoryId: 'finance',
        description: 'Calculate total profit and maturity amount for fixed term deposits (PKR).',
        inputs: [
          { id: 'principal', label: 'Deposit Amount (PKR)', type: 'number', defaultValue: 500000 },
          { id: 'rate', label: 'Annual Profit Rate (%)', type: 'number', defaultValue: 14 },
          { id: 'months', label: 'Tenure (Months)', type: 'number', defaultValue: 12 }
        ],
        calculate: (vals) => {
          const p = Number(vals.principal);
          const r = Number(vals.rate) / 100;
          const t = Number(vals.months) / 12;
          const profit = p * r * t;
          const maturity = p + profit;
          return {
            result: `PKR ${Math.round(maturity).toLocaleString()}`,
            secondaryResult: `Total Profit Earned: PKR ${Math.round(profit).toLocaleString()}`,
            formula: 'Maturity Amount = Principal + (Principal × Annual Rate × Tenure in Years)'
          };
        }
      },
      {
        id: 'finance-national-savings',
        name: 'National Savings Profit Calculator',
        categoryId: 'finance',
        description: 'Calculate expected returns on National Savings certificates or schemes (PKR).',
        inputs: [
          { id: 'investment', label: 'Investment Amount (PKR)', type: 'number', defaultValue: 1000000 },
          { id: 'annualRate', label: 'Annual Return Rate (%)', type: 'number', defaultValue: 15.5 }
        ],
        calculate: (vals) => {
          const inv = Number(vals.investment);
          const rate = Number(vals.annualRate) / 100;
          const annualProfit = inv * rate;
          const monthlyProfit = annualProfit / 12;
          return {
            result: `PKR ${Math.round(monthlyProfit).toLocaleString()} / month`,
            secondaryResult: `Annual Profit: PKR ${Math.round(annualProfit).toLocaleString()}`,
            formula: 'Monthly Profit = (Investment Amount × Annual Return Rate) / 12'
          };
        }
      },
      {
        id: 'finance-gold-val',
        name: 'Gold Price & Weight Calculator',
        categoryId: 'finance',
        description: 'Calculate total value of gold based on weight in Tola or Grams and market rate.',
        inputs: [
          { id: 'tola', label: 'Gold Weight (Tola)', type: 'number', defaultValue: 2 },
          { id: 'grams', label: 'Additional Grams', type: 'number', defaultValue: 5 },
          { id: 'ratePerTola', label: 'Current Rate per Tola (PKR)', type: 'number', defaultValue: 250000 }
        ],
        calculate: (vals) => {
          const t = Number(vals.tola);
          const g = Number(vals.grams);
          const rateTola = Number(vals.ratePerTola);
          // 1 Tola = 11.664 grams
          const ratePerGram = rateTola / 11.664;
          const totalGrams = (t * 11.664) + g;
          const totalValue = totalGrams * ratePerGram;
          return {
            result: `PKR ${Math.round(totalValue).toLocaleString()}`,
            secondaryResult: `Total Weight: ${totalGrams.toFixed(2)} grams (${t} Tola + ${g}g)`,
            formula: 'Total Value = Total Grams × (Rate per Tola / 11.664)'
          };
        }
      },
      {
        id: 'finance-cash-counter',
        name: 'Currency Denomination Cash Counter',
        categoryId: 'finance',
        description: 'Count total cash amount across Pakistani currency note denominations.',
        inputs: [
          { id: 'n5000', label: '5000 PKR Notes', type: 'number', defaultValue: 10 },
          { id: 'n1000', label: '1000 PKR Notes', type: 'number', defaultValue: 25 },
          { id: 'n500', label: '500 PKR Notes', type: 'number', defaultValue: 20 },
          { id: 'n100', label: '100 PKR Notes', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const total = (Number(vals.n5000) * 5000) +
                        (Number(vals.n1000) * 1000) +
                        (Number(vals.n500) * 500) +
                        (Number(vals.n100) * 100);
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `Sum of 5000, 1000, 500, and 100 rupee denominations`,
            formula: 'Total Cash = Σ (Note Count × Denomination Value)'
          };
        }
      },
      {
        id: 'finance-inflation',
        name: 'Inflation Impact Calculator',
        categoryId: 'finance',
        description: 'Calculate future cost of living or loss of purchasing power due to inflation.',
        inputs: [
          { id: 'amount', label: 'Current Amount (PKR)', type: 'number', defaultValue: 100000 },
          { id: 'inflation', label: 'Annual Inflation Rate (%)', type: 'number', defaultValue: 12 },
          { id: 'years', label: 'Years', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const amt = Number(vals.amount);
          const inf = Number(vals.inflation) / 100;
          const yrs = Number(vals.years);
          const futureValue = amt * Math.pow(1 + inf, yrs);
          return {
            result: `PKR ${Math.round(futureValue).toLocaleString()}`,
            secondaryResult: `Future cost adjusted for ${vals.inflation}% annual inflation over ${yrs} years`,
            formula: 'Future Value = Current Amount × (1 + Inflation Rate)^Years'
          };
        }
      },
      {
        id: 'finance-cagr',
        name: 'Compound Annual Growth Rate (CAGR) Calculator',
        categoryId: 'finance',
        description: 'Calculate annual growth rate of an investment over a period of time.',
        inputs: [
          { id: 'initial', label: 'Initial Value (PKR)', type: 'number', defaultValue: 100000 },
          { id: 'final', label: 'Final Value (PKR)', type: 'number', defaultValue: 250000 },
          { id: 'years', label: 'Time (Years)', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const init = Number(vals.initial);
          const fin = Number(vals.final);
          const yrs = Number(vals.years);
          if (init <= 0 || yrs <= 0) return { result: 'Initial value and years must be > 0' };
          const cagr = (Math.pow(fin / init, 1 / yrs) - 1) * 100;
          return {
            result: `${cagr.toFixed(2)}% CAGR`,
            secondaryResult: `Growth from PKR ${init.toLocaleString()} to PKR ${fin.toLocaleString()} in ${yrs} years`,
            formula: 'CAGR = [(Final / Initial)^(1 / Years) - 1] × 100'
          };
        }
      },
      {
        id: 'finance-retirement',
        name: 'Retirement Nest Egg Calculator',
        categoryId: 'finance',
        description: 'Calculate retirement fund accumulated based on savings and investment returns (PKR).',
        inputs: [
          { id: 'currentSavings', label: 'Current Savings (PKR)', type: 'number', defaultValue: 2000000 },
          { id: 'monthlySaving', label: 'Monthly Saving (PKR)', type: 'number', defaultValue: 50000 },
          { id: 'returnRate', label: 'Annual Return Rate (%)', type: 'number', defaultValue: 15 },
          { id: 'years', label: 'Years to Retirement', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          let total = Number(vals.currentSavings);
          const r = Number(vals.returnRate) / 100;
          const m = Number(vals.monthlySaving);
          const months = Number(vals.years) * 12;
          for (let i = 0; i < months; i++) {
            total = (total + m) * (1 + r / 12);
          }
          return {
            result: `PKR ${Math.round(total).toLocaleString()}`,
            secondaryResult: `Accumulated fund over ${vals.years} years at ${vals.returnRate}% return`,
            formula: 'Compound future value of current savings + monthly contributions'
          };
        }
      },
      {
        id: 'fin-net-worth',
        name: 'Net Worth Calculator',
        categoryId: 'finance',
        description: 'Calculate total net worth by subtracting total liabilities from total assets (PKR).',
        inputs: [
          { id: 'assets', label: 'Total Assets (PKR)', type: 'number', defaultValue: 15000000 },
          { id: 'liabilities', label: 'Total Liabilities & Debts (PKR)', type: 'number', defaultValue: 3000000 }
        ],
        calculate: (vals) => {
          const a = Number(vals.assets);
          const l = Number(vals.liabilities);
          const nw = a - l;
          return {
            result: `PKR ${nw.toLocaleString()}`,
            secondaryResult: `Assets: PKR ${a.toLocaleString()} | Liabilities: PKR ${l.toLocaleString()}`,
            formula: 'Net Worth = Total Assets - Total Liabilities'
          };
        }
      },
      {
        id: 'fin-dividend-yield',
        name: 'Dividend Yield & Annual Payout Calculator',
        categoryId: 'finance',
        description: 'Calculate stock dividend yield and estimated annual cash dividend.',
        inputs: [
          { id: 'price', label: 'Stock Price per Share (PKR)', type: 'number', defaultValue: 150 },
          { id: 'dps', label: 'Annual Dividend per Share (PKR)', type: 'number', defaultValue: 12 }
        ],
        calculate: (vals) => {
          const p = Number(vals.price);
          const d = Number(vals.dps);
          if (p <= 0) return { result: 'Stock price must be > 0' };
          const yieldPct = (d / p) * 100;
          return {
            result: `${yieldPct.toFixed(2)}% Dividend Yield`,
            secondaryResult: `Annual return of PKR ${d} per share`,
            formula: 'Dividend Yield (%) = (Annual Dividend per Share / Stock Price) × 100'
          };
        }
      },
      {
        id: 'fin-debt-payoff',
        name: 'Debt Payoff Estimator (Snowball vs Avalanche)',
        categoryId: 'finance',
        description: 'Estimate months required to clear multiple debts with extra monthly budget.',
        inputs: [
          { id: 'balance', label: 'Total Debt Balance (PKR)', type: 'number', defaultValue: 500000 },
          { id: 'rate', label: 'Average Interest Rate (%)', type: 'number', defaultValue: 20 },
          { id: 'extra', label: 'Extra Monthly Payment (PKR)', type: 'number', defaultValue: 25000 }
        ],
        calculate: (vals) => {
          const b = Number(vals.balance);
          const r = Number(vals.rate) / 100 / 12;
          const extra = Number(vals.extra);
          const basePayment = b * 0.05 + extra;
          if (basePayment <= b * r) return { result: 'Monthly payment too low to cover interest' };
          const months = -Math.log(1 - (b * r) / basePayment) / Math.log(1 + r);
          return {
            result: `~${Math.ceil(months)} Months to Payoff`,
            secondaryResult: `Total monthly installment: PKR ${Math.round(basePayment).toLocaleString()}`,
            formula: 'Amortization loan payoff duration formula'
          };
        }
      }
    ]
  };
