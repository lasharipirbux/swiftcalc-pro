import { Category } from "../../types";

export const businessCategory: Category = {
    id: 'business',
    name: 'Business',
    iconName: 'Briefcase',
    description: 'Break-even analysis, profit margins, markup, ROI, sales targets, inventory reorder, EBITDA, working capital, CAC, LTV, and financial business calculators.',
    color: 'from-amber-600 to-orange-700',
    calculators: [
      {
        id: 'business-break-even',
        name: 'Break-even Point Calculator',
        categoryId: 'business',
        description: 'Determine units needed to cover fixed and variable costs.',
        inputs: [
          { id: 'fixed', label: 'Fixed Costs (PKR)', type: 'number', defaultValue: 150000 },
          { id: 'price', label: 'Price per Unit (PKR)', type: 'number', defaultValue: 1200 },
          { id: 'variable', label: 'Cost per Unit (PKR)', type: 'number', defaultValue: 700 }
        ],
        calculate: (vals) => {
          const f = Number(vals.fixed);
          const p = Number(vals.price);
          const v = Number(vals.variable);
          if (p <= v) return { result: 'Price per unit must exceed cost per unit' };
          const units = f / (p - v);
          const revenue = units * p;
          return {
            result: `${Math.ceil(units)} units`,
            secondaryResult: `Break-Even Revenue: PKR ${revenue.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
            formula: 'Break-Even Units = Fixed Costs / (Price per Unit - Cost per Unit)'
          };
        }
      },
      {
        id: 'product-markup-calc',
        name: 'Markup Calculator',
        categoryId: 'business',
        description: 'Calculate selling price and profit from cost price and markup percentage.',
        inputs: [
          { id: 'cost', label: 'Cost Price (PKR)', type: 'number', defaultValue: 2500 },
          { id: 'markup', label: 'Markup Percentage (%)', type: 'number', defaultValue: 40 }
        ],
        calculate: (vals) => {
          const cost = Number(vals.cost);
          const markup = Number(vals.markup);
          const price = cost * (1 + markup / 100);
          const profit = price - cost;
          return {
            result: `PKR ${price.toLocaleString()}`,
            secondaryResult: `Gross Profit: PKR ${profit.toLocaleString()} (${markup}% markup)`,
            formula: 'Selling Price = Cost Price × (1 + Markup%)'
          };
        }
      },
      {
        id: 'business-roi-calc',
        name: 'ROI Calculator',
        categoryId: 'business',
        description: 'Measure return on investment percentage for business projects.',
        inputs: [
          { id: 'profit', label: 'Net Profit (PKR)', type: 'number', defaultValue: 400000 },
          { id: 'investment', label: 'Total Investment (PKR)', type: 'number', defaultValue: 2000000 }
        ],
        calculate: (vals) => {
          const profit = Number(vals.profit);
          const inv = Number(vals.investment);
          const roi = inv > 0 ? (profit / inv) * 100 : 0;
          return {
            result: `${roi.toFixed(2)}% ROI`,
            secondaryResult: `Net Profit: PKR ${profit.toLocaleString()} on Investment PKR ${inv.toLocaleString()}`,
            formula: 'ROI = (Net Profit / Total Investment) × 100'
          };
        }
      },
      {
        id: 'sales-commission-calc',
        name: 'Commission Calculator',
        categoryId: 'business',
        description: 'Calculate sales representative commissions from sales volume.',
        inputs: [
          { id: 'sales', label: 'Total Sales (PKR)', type: 'number', defaultValue: 800000 },
          { id: 'rate', label: 'Commission Rate (%)', type: 'number', defaultValue: 7.5 }
        ],
        calculate: (vals) => {
          const sales = Number(vals.sales);
          const rate = Number(vals.rate) / 100;
          const commission = sales * rate;
          return {
            result: `PKR ${commission.toLocaleString()}`,
            secondaryResult: `Sales Volume: PKR ${sales.toLocaleString()} @ ${vals.rate}% rate`,
            formula: 'Commission = Total Sales × Commission Rate%'
          };
        }
      },
      {
        id: 'cost-per-unit-calc',
        name: 'Cost per Unit Calculator',
        categoryId: 'business',
        description: 'Calculate average production cost per unit.',
        inputs: [
          { id: 'totalCost', label: 'Total Production Cost (PKR)', type: 'number', defaultValue: 500000 },
          { id: 'units', label: 'Number of Units Produced', type: 'number', defaultValue: 2000 }
        ],
        calculate: (vals) => {
          const cost = Number(vals.totalCost);
          const units = Number(vals.units);
          if (units <= 0) return { result: 'Units must be greater than zero' };
          const cpu = cost / units;
          return {
            result: `PKR ${cpu.toFixed(2)} / unit`,
            secondaryResult: `Total Cost: PKR ${cost.toLocaleString()} for ${units.toLocaleString()} units`,
            formula: 'Cost per Unit = Total Production Cost / Number of Units'
          };
        }
      },
      {
        id: 'sales-target-calc',
        name: 'Sales Target Calculator',
        categoryId: 'business',
        description: 'Calculate daily sales needed to achieve monthly or periodic sales targets.',
        inputs: [
          { id: 'target', label: 'Sales Target (PKR)', type: 'number', defaultValue: 3000000 },
          { id: 'days', label: 'Working Days in Period', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const target = Number(vals.target);
          const days = Number(vals.days);
          if (days <= 0) return { result: 'Working days must be greater than zero' };
          const daily = target / days;
          return {
            result: `PKR ${daily.toLocaleString(undefined, {maximumFractionDigits: 0})} / day`,
            secondaryResult: `Target: PKR ${target.toLocaleString()} over ${days} working days`,
            formula: 'Daily Sales Needed = Sales Target / Working Days'
          };
        }
      },
      {
        id: 'inventory-reorder-calc',
        name: 'Inventory Reorder Point Calculator',
        categoryId: 'business',
        description: 'Calculate when to reorder inventory based on sales velocity and lead time.',
        inputs: [
          { id: 'dailySales', label: 'Average Daily Sales (Units)', type: 'number', defaultValue: 45 },
          { id: 'leadTime', label: 'Supplier Lead Time (Days)', type: 'number', defaultValue: 10 },
          { id: 'safetyStock', label: 'Safety Stock (Units)', type: 'number', defaultValue: 150 }
        ],
        calculate: (vals) => {
          const sales = Number(vals.dailySales);
          const lead = Number(vals.leadTime);
          const safety = Number(vals.safetyStock);
          const reorderPoint = (sales * lead) + safety;
          return {
            result: `${reorderPoint.toLocaleString()} units`,
            secondaryResult: `Lead Time Demand: ${sales * lead} units + Safety Stock: ${safety} units`,
            formula: 'Reorder Point = (Average Daily Sales × Lead Time) + Safety Stock'
          };
        }
      },
      {
        id: 'overtime-pay-calc',
        name: 'Overtime Pay Calculator',
        description: 'Calculate employee overtime compensation using hourly rate, hours, and multiplier.',
        categoryId: 'business',
        inputs: [
          { id: 'rate', label: 'Regular Hourly Rate (PKR)', type: 'number', defaultValue: 800 },
          { id: 'hours', label: 'Overtime Hours Worked', type: 'number', defaultValue: 15 },
          { id: 'multiplier', label: 'Overtime Multiplier (e.g. 1.5)', type: 'number', defaultValue: 1.5 }
        ],
        calculate: (vals) => {
          const rate = Number(vals.rate);
          const hours = Number(vals.hours);
          const multiplier = Number(vals.multiplier);
          const otPay = rate * hours * multiplier;
          return {
            result: `PKR ${otPay.toLocaleString()}`,
            secondaryResult: `Hourly Rate: PKR ${rate} | Overtime Hours: ${hours} @ ${multiplier}x`,
            formula: 'Overtime Pay = Regular Hourly Rate × Overtime Hours × Multiplier'
          };
        }
      },
      {
        id: 'business-profit-margin-calc',
        name: 'Profit Margin Calculator',
        categoryId: 'business',
        description: 'Calculate gross profit and profit margin percentage from revenue and cost of goods sold.',
        inputs: [
          { id: 'revenue', label: 'Total Revenue (PKR)', type: 'number', defaultValue: 500000 },
          { id: 'cogs', label: 'Cost of Goods Sold - COGS (PKR)', type: 'number', defaultValue: 300000 }
        ],
        calculate: (vals) => {
          const rev = Number(vals.revenue);
          const cost = Number(vals.cogs);
          const profit = rev - cost;
          const margin = rev > 0 ? (profit / rev) * 100 : 0;
          return {
            result: `${margin.toFixed(2)}% Profit Margin`,
            secondaryResult: `Gross Profit: PKR ${profit.toLocaleString()}`,
            formula: 'Profit Margin = [(Revenue - COGS) / Revenue] × 100'
          };
        }
      },
      {
        id: 'business-discount-calc',
        name: 'Discount Calculator',
        categoryId: 'business',
        description: 'Calculate sale price and total customer savings after percentage discount.',
        inputs: [
          { id: 'price', label: 'Original Price (PKR)', type: 'number', defaultValue: 10000 },
          { id: 'discount', label: 'Discount Percentage (%)', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          const price = Number(vals.price);
          const disc = Number(vals.discount);
          const savings = price * (disc / 100);
          const finalPrice = price - savings;
          return {
            result: `PKR ${finalPrice.toLocaleString()}`,
            secondaryResult: `You Save: PKR ${savings.toLocaleString()} (${disc}% off)`,
            formula: 'Sale Price = Original Price × (1 - Discount%)'
          };
        }
      },
      {
        id: 'business-sales-tax-calc',
        name: 'Sales Tax / GST Calculator',
        categoryId: 'business',
        description: 'Calculate sales tax or GST amount and total gross price.',
        inputs: [
          { id: 'subtotal', label: 'Subtotal Amount (PKR)', type: 'number', defaultValue: 25000 },
          { id: 'taxRate', label: 'Sales Tax / GST Rate (%)', type: 'number', defaultValue: 18 }
        ],
        calculate: (vals) => {
          const sub = Number(vals.subtotal);
          const rate = Number(vals.taxRate) / 100;
          const taxAmt = sub * rate;
          const total = sub + taxAmt;
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `Tax Amount: PKR ${taxAmt.toLocaleString()} @ ${vals.taxRate}%`,
            formula: 'Total = Subtotal × (1 + Tax Rate%)'
          };
        }
      },
      {
        id: 'business-salary-to-hourly',
        name: 'Salary to Hourly Calculator',
        categoryId: 'business',
        description: 'Convert monthly or yearly salary into an equivalent hourly wage.',
        inputs: [
          { id: 'salary', label: 'Monthly Salary (PKR)', type: 'number', defaultValue: 120000 },
          { id: 'hoursPerMonth', label: 'Working Hours per Month', type: 'number', defaultValue: 160 }
        ],
        calculate: (vals) => {
          const sal = Number(vals.salary);
          const hrs = Number(vals.hoursPerMonth);
          if (hrs <= 0) return { result: 'Working hours must be > 0' };
          const hourly = sal / hrs;
          return {
            result: `PKR ${hourly.toFixed(2)} / hour`,
            secondaryResult: `Based on PKR ${sal.toLocaleString()} monthly salary over ${hrs} hours`,
            formula: 'Hourly Rate = Monthly Salary / Working Hours per Month'
          };
        }
      },
      {
        id: 'business-invoice-total',
        name: 'Invoice Total Calculator',
        categoryId: 'business',
        description: 'Calculate total invoice amount including subtotal, tax rate, and shipping fees.',
        inputs: [
          { id: 'subtotal', label: 'Items Subtotal (PKR)', type: 'number', defaultValue: 75000 },
          { id: 'tax', label: 'Tax Rate (%)', type: 'number', defaultValue: 16 },
          { id: 'shipping', label: 'Shipping / Delivery Fee (PKR)', type: 'number', defaultValue: 1500 }
        ],
        calculate: (vals) => {
          const sub = Number(vals.subtotal);
          const tax = Number(vals.tax) / 100;
          const ship = Number(vals.shipping);
          const taxAmt = sub * tax;
          const total = sub + taxAmt + ship;
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `Tax: PKR ${taxAmt.toLocaleString()} | Shipping: PKR ${ship.toLocaleString()}`,
            formula: 'Invoice Total = (Subtotal × (1 + Tax%)) + Shipping Fee'
          };
        }
      },
      {
        id: 'business-cash-flow',
        name: 'Cash Flow Calculator',
        categoryId: 'business',
        description: 'Calculate net cash flow from total cash inflows and cash outflows.',
        inputs: [
          { id: 'inflow', label: 'Total Cash Inflows (PKR)', type: 'number', defaultValue: 1200000 },
          { id: 'outflow', label: 'Total Cash Outflows (PKR)', type: 'number', defaultValue: 850000 }
        ],
        calculate: (vals) => {
          const inFlow = Number(vals.inflow);
          const outFlow = Number(vals.outflow);
          const net = inFlow - outFlow;
          return {
            result: `PKR ${net.toLocaleString()}`,
            secondaryResult: net >= 0 ? 'Positive Net Cash Flow (Surplus)' : 'Negative Net Cash Flow (Deficit)',
            formula: 'Net Cash Flow = Total Cash Inflows - Total Cash Outflows'
          };
        }
      },
      {
        id: 'business-net-profit',
        name: 'Net Profit Calculator',
        categoryId: 'business',
        description: 'Calculate net profit and net profit margin after deducting all operating expenses.',
        inputs: [
          { id: 'revenue', label: 'Total Revenue (PKR)', type: 'number', defaultValue: 2000000 },
          { id: 'expenses', label: 'Total Expenses (PKR)', type: 'number', defaultValue: 1300000 }
        ],
        calculate: (vals) => {
          const rev = Number(vals.revenue);
          const exp = Number(vals.expenses);
          const profit = rev - exp;
          const netMargin = rev > 0 ? (profit / rev) * 100 : 0;
          return {
            result: `PKR ${profit.toLocaleString()}`,
            secondaryResult: `Net Profit Margin: ${netMargin.toFixed(2)}%`,
            formula: 'Net Profit = Total Revenue - Total Expenses, Margin = (Net Profit / Revenue) × 100'
          };
        }
      },
      // 10 New Business Calculators Added Below
      {
        id: 'biz-operating-margin',
        name: 'Operating Margin Calculator',
        categoryId: 'business',
        description: 'Calculate operating income margin percentage to measure core profitability.',
        inputs: [
          { id: 'opIncome', label: 'Operating Income / EBIT (PKR)', type: 'number', defaultValue: 400000 },
          { id: 'revenue', label: 'Total Revenue (PKR)', type: 'number', defaultValue: 2000000 }
        ],
        calculate: (vals) => {
          const inc = Number(vals.opIncome);
          const rev = Number(vals.revenue);
          if (rev <= 0) return { result: 'Revenue must be > 0' };
          const margin = (inc / rev) * 100;
          return {
            result: `${margin.toFixed(2)}% Operating Margin`,
            secondaryResult: `Operating Income: PKR ${inc.toLocaleString()} on Revenue PKR ${rev.toLocaleString()}`,
            formula: 'Operating Margin = (Operating Income / Revenue) × 100'
          };
        }
      },
      {
        id: 'biz-ebitda',
        name: 'EBITDA Calculator',
        categoryId: 'business',
        description: 'Calculate Earnings Before Interest, Taxes, Depreciation, and Amortization.',
        inputs: [
          { id: 'netIncome', label: 'Net Income (PKR)', type: 'number', defaultValue: 800000 },
          { id: 'interest', label: 'Interest Expense (PKR)', type: 'number', defaultValue: 100000 },
          { id: 'tax', label: 'Tax Expense (PKR)', type: 'number', defaultValue: 150000 },
          { id: 'da', label: 'Depreciation & Amortization (PKR)', type: 'number', defaultValue: 80000 }
        ],
        calculate: (vals) => {
          const ni = Number(vals.netIncome);
          const i = Number(vals.interest);
          const t = Number(vals.tax);
          const da = Number(vals.da);
          const ebitda = ni + i + t + da;
          return {
            result: `PKR ${ebitda.toLocaleString()}`,
            secondaryResult: `EBITDA = Net Income + Interest + Tax + Depreciation & Amortization`,
            formula: 'EBITDA = Net Income + Interest + Taxes + D&A'
          };
        }
      },
      {
        id: 'biz-cac',
        name: 'Customer Acquisition Cost (CAC) Calculator',
        categoryId: 'business',
        description: 'Calculate total cost required to acquire a new customer.',
        inputs: [
          { id: 'marketingSpend', label: 'Total Marketing & Sales Spend (PKR)', type: 'number', defaultValue: 250000 },
          { id: 'newCustomers', label: 'New Customers Acquired', type: 'number', defaultValue: 500 }
        ],
        calculate: (vals) => {
          const spend = Number(vals.marketingSpend);
          const cust = Number(vals.newCustomers);
          if (cust <= 0) return { result: 'New customers must be > 0' };
          const cac = spend / cust;
          return {
            result: `PKR ${cac.toLocaleString()} per customer`,
            secondaryResult: `Total Spend: PKR ${spend.toLocaleString()} for ${cust} customers`,
            formula: 'CAC = Total Sales & Marketing Expenses / Number of New Customers Acquired'
          };
        }
      },
      {
        id: 'biz-ltv',
        name: 'Customer Lifetime Value (LTV) Calculator',
        categoryId: 'business',
        description: 'Calculate estimated total revenue generated by a customer throughout their relationship.',
        inputs: [
          { id: 'avgPurchase', label: 'Average Purchase Value (PKR)', type: 'number', defaultValue: 5000 },
          { id: 'purchaseFreq', label: 'Purchases per Year', type: 'number', defaultValue: 4 },
          { id: 'lifespan', label: 'Customer Lifespan (Years)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const avg = Number(vals.avgPurchase);
          const freq = Number(vals.purchaseFreq);
          const life = Number(vals.lifespan);
          const ltv = avg * freq * life;
          return {
            result: `PKR ${ltv.toLocaleString()}`,
            secondaryResult: `Annual Value per Customer: PKR ${(avg * freq).toLocaleString()} over ${life} years`,
            formula: 'LTV = Average Purchase Value × Purchase Frequency per Year × Customer Lifespan'
          };
        }
      },
      {
        id: 'biz-working-capital',
        name: 'Working Capital Calculator',
        categoryId: 'business',
        description: 'Calculate net working capital to assess short-term financial health (PKR).',
        inputs: [
          { id: 'currentAssets', label: 'Total Current Assets (PKR)', type: 'number', defaultValue: 3500000 },
          { id: 'currentLiabilities', label: 'Total Current Liabilities (PKR)', type: 'number', defaultValue: 2100000 }
        ],
        calculate: (vals) => {
          const ca = Number(vals.currentAssets);
          const cl = Number(vals.currentLiabilities);
          const wc = ca - cl;
          const ratio = cl > 0 ? (ca / cl).toFixed(2) : 'N/A';
          return {
            result: `PKR ${wc.toLocaleString()}`,
            secondaryResult: `Current Ratio: ${ratio} (Assets / Liabilities)`,
            formula: 'Working Capital = Current Assets - Current Liabilities'
          };
        }
      },
      {
        id: 'biz-quick-ratio',
        name: 'Quick Ratio / Acid-Test Ratio Calculator',
        categoryId: 'business',
        description: 'Measure ability to cover short-term obligations with most liquid assets.',
        inputs: [
          { id: 'cash', label: 'Cash & Marketable Securities (PKR)', type: 'number', defaultValue: 1200000 },
          { id: 'receivables', label: 'Accounts Receivable (PKR)', type: 'number', defaultValue: 800000 },
          { id: 'currentLiab', label: 'Current Liabilities (PKR)', type: 'number', defaultValue: 1500000 }
        ],
        calculate: (vals) => {
          const cash = Number(vals.cash);
          const rec = Number(vals.receivables);
          const cl = Number(vals.currentLiab);
          if (cl <= 0) return { result: 'Current liabilities must be > 0' };
          const quickRatio = (cash + rec) / cl;
          return {
            result: `${quickRatio.toFixed(2)} Quick Ratio`,
            secondaryResult: quickRatio >= 1 ? 'Healthy Liquidity (> 1.0)' : 'Tight Liquidity (< 1.0)',
            formula: 'Quick Ratio = (Cash + Marketable Securities + Accounts Receivable) / Current Liabilities'
          };
        }
      },
      {
        id: 'biz-debt-to-equity',
        name: 'Debt-to-Equity Ratio Calculator',
        categoryId: 'business',
        description: 'Calculate financial leverage by comparing total liabilities to shareholder equity.',
        inputs: [
          { id: 'liabilities', label: 'Total Liabilities (PKR)', type: 'number', defaultValue: 5000000 },
          { id: 'equity', label: 'Total Shareholder Equity (PKR)', type: 'number', defaultValue: 7500000 }
        ],
        calculate: (vals) => {
          const lib = Number(vals.liabilities);
          const eq = Number(vals.equity);
          if (eq <= 0) return { result: 'Equity must be > 0' };
          const de = lib / eq;
          return {
            result: `${de.toFixed(2)} D/E Ratio`,
            secondaryResult: `Total Debt: PKR ${lib.toLocaleString()} | Equity: PKR ${eq.toLocaleString()}`,
            formula: 'Debt-to-Equity = Total Liabilities / Total Shareholder Equity'
          };
        }
      },
      {
        id: 'biz-employee-turnover',
        name: 'Employee Turnover Rate Calculator',
        categoryId: 'business',
        description: 'Calculate employee turnover percentage over a given period.',
        inputs: [
          { id: 'left', label: 'Employees Left During Period', type: 'number', defaultValue: 6 },
          { id: 'avgEmployees', label: 'Average Number of Employees', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const left = Number(vals.left);
          const avg = Number(vals.avgEmployees);
          if (avg <= 0) return { result: 'Average employees must be > 0' };
          const rate = (left / avg) * 100;
          return {
            result: `${rate.toFixed(1)}% Turnover Rate`,
            secondaryResult: `${left} departures out of avg ${avg} employees`,
            formula: 'Turnover Rate = (Number of Employees Left / Average Employees) × 100'
          };
        }
      },
      {
        id: 'biz-payback-period',
        name: 'Payback Period Calculator',
        categoryId: 'business',
        description: 'Calculate time required to recover initial investment cost in PKR.',
        inputs: [
          { id: 'investment', label: 'Initial Investment (PKR)', type: 'number', defaultValue: 3000000 },
          { id: 'annualCashFlow', label: 'Annual Cash Inflow (PKR)', type: 'number', defaultValue: 750000 }
        ],
        calculate: (vals) => {
          const inv = Number(vals.investment);
          const cf = Number(vals.annualCashFlow);
          if (cf <= 0) return { result: 'Annual cash flow must be > 0' };
          const years = inv / cf;
          return {
            result: `${years.toFixed(1)} years`,
            secondaryResult: `To recover PKR ${inv.toLocaleString()} at PKR ${cf.toLocaleString()} per year`,
            formula: 'Payback Period = Initial Investment / Annual Cash Inflow'
          };
        }
      },
      {
        id: 'biz-eoq',
        name: 'Economic Order Quantity (EOQ) Calculator',
        categoryId: 'business',
        description: 'Calculate optimal inventory order quantity that minimizes holding and ordering costs.',
        inputs: [
          { id: 'demand', label: 'Annual Demand (Units - D)', type: 'number', defaultValue: 10000 },
          { id: 'orderCost', label: 'Ordering Cost per Order (PKR - S)', type: 'number', defaultValue: 2500 },
          { id: 'holdingCost', label: 'Holding Cost per Unit per Year (PKR - H)', type: 'number', defaultValue: 50 }
        ],
        calculate: (vals) => {
          const d = Number(vals.demand);
          const s = Number(vals.orderCost);
          const h = Number(vals.holdingCost);
          if (h <= 0) return { result: 'Holding cost must be > 0' };
          const eoq = Math.sqrt((2 * d * s) / h);
          return {
            result: `${Math.round(eoq).toLocaleString()} units`,
            secondaryResult: `Optimal Order Quantity (EOQ)`,
            formula: 'EOQ = √[(2 × Demand × Ordering Cost) / Holding Cost]'
          };
        }
      },
      {
        id: 'biz-clv',
        name: 'Customer Lifetime Value (CLV) Calculator',
        categoryId: 'business',
        description: 'Calculate total customer lifetime value based on average purchase value and lifespan.',
        inputs: [
          { id: 'avgVal', label: 'Average Purchase Value (PKR)', type: 'number', defaultValue: 5000 },
          { id: 'freq', label: 'Purchases per Year', type: 'number', defaultValue: 4 },
          { id: 'lifespan', label: 'Customer Lifespan (Years)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const val = Number(vals.avgVal);
          const f = Number(vals.freq);
          const life = Number(vals.lifespan);
          const annualVal = val * f;
          const clv = annualVal * life;
          return {
            result: `PKR ${clv.toLocaleString()}`,
            secondaryResult: `Annual customer spend: PKR ${annualVal.toLocaleString()}`,
            formula: 'CLV = Average Purchase Value × Purchase Frequency × Customer Lifespan'
          };
        }
      },
      {
        id: 'biz-churn-rate',
        name: 'Customer Churn Rate Calculator',
        categoryId: 'business',
        description: 'Calculate customer churn rate percentage over a specific time period.',
        inputs: [
          { id: 'lost', label: 'Customers Lost During Period', type: 'number', defaultValue: 15 },
          { id: 'start', label: 'Customers at Start of Period', type: 'number', defaultValue: 250 }
        ],
        calculate: (vals) => {
          const l = Number(vals.lost);
          const s = Number(vals.start);
          if (s <= 0) return { result: 'Start customers must be > 0' };
          const churn = (l / s) * 100;
          return {
            result: `${churn.toFixed(2)}% Churn Rate`,
            secondaryResult: `Lost ${l} out of ${s} customers`,
            formula: 'Churn Rate (%) = (Customers Lost / Customers at Start) × 100'
          };
        }
      },
      {
        id: 'biz-inventory-turnover',
        name: 'Inventory Turnover Ratio Calculator',
        categoryId: 'business',
        description: 'Calculate how many times inventory is sold or replaced over a period.',
        inputs: [
          { id: 'cogs', label: 'Cost of Goods Sold (COGS in PKR)', type: 'number', defaultValue: 12000000 },
          { id: 'inventory', label: 'Average Inventory Value (PKR)', type: 'number', defaultValue: 2000000 }
        ],
        calculate: (vals) => {
          const cogs = Number(vals.cogs);
          const inv = Number(vals.inventory);
          if (inv <= 0) return { result: 'Average inventory must be > 0' };
          const turnover = cogs / inv;
          const daysToSell = 365 / turnover;
          return {
            result: `${turnover.toFixed(2)} Turns / Year`,
            secondaryResult: `Average days to sell inventory: ~${daysToSell.toFixed(1)} days`,
            formula: 'Inventory Turnover = COGS / Average Inventory'
          };
        }
      }
    ]
  };
