import { SITE_NAME } from '../config/site';

export interface BusinessCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const businessSeoFullMap: Record<string, BusinessCalculatorSeoEntry> = {
  'business-break-even': {
    seoTitle: `Free Break-even Point Calculator – Unit Volume & Revenue | ${SITE_NAME}`,
    metaDescription:
      'Find exact unit sales and PKR revenue needed to cover fixed and variable costs with our free Break-even Point Calculator.',
    howToUseSteps: [
      'Enter monthly rent, salaries, and overhead in Fixed Costs (PKR).',
      'Type your customer selling price in Price per Unit (PKR).',
      'Input direct manufacturing or wholesale outlay in Cost per Unit (PKR).',
      'Check the required unit sales volume and Break-Even Revenue displayed immediately.',
    ],
    formulaExplanation:
      'Break-even analysis pinpoints the exact sales volume where total revenue covers both fixed overhead and variable production costs, leaving zero profit and zero loss. Dividing Fixed Costs by the per-unit contribution margin (selling price minus variable cost) outputs minimum survival volume. Formula: Break-Even Units = ceil(Fixed Costs / (Price per Unit − Cost per Unit)); Break-Even Revenue = Unrounded Units × Price per Unit.',
    practicalExample:
      'Running a workshop with Fixed Costs (PKR) = 150,000, Price per Unit (PKR) = 1,200, and Cost per Unit (PKR) = 700 yields a PKR 500 margin per item, requiring 300 units and Break-Even Revenue: PKR 360,000.',
    faqs: [
      {
        q: 'Why does a warning appear if Cost per Unit (PKR) equals or exceeds Price per Unit (PKR)?',
        a: 'Every sale loses or breaks even on direct unit costs, making it mathematically impossible to ever recover Fixed Costs (PKR).',
      },
      {
        q: 'Why are Break-Even Units rounded up to a whole integer?',
        a: 'Physical merchandise sells in whole units, so rounding up guarantees your overhead is fully covered.',
      },
      {
        q: 'How can a business lower its break-even threshold quickly?',
        a: 'Either trim recurring Fixed Costs (PKR), raise Price per Unit (PKR), or negotiate lower supplier Cost per Unit (PKR).',
      },
    ],
  },

  'product-markup-calc': {
    seoTitle: `Free Markup Calculator – Retail Selling Price from Cost | ${SITE_NAME}`,
    metaDescription:
      'Compute retail selling price and rupee profit from wholesale unit cost using our free Markup Calculator.',
    howToUseSteps: [
      'Type your wholesale purchase or production cost inside Cost Price (PKR).',
      'Enter your target add-on rate in the Markup Percentage (%) field.',
      'Read the recommended retail selling price and Gross Profit per unit.',
    ],
    formulaExplanation:
      'Merchants apply a markup percentage directly onto Cost Price (PKR) to set catalog tags while preserving a predictable profit cushion per unit sold. Unlike margin (which divides profit by selling price), markup multiplies directly onto cost. Formula: Selling Price = Cost Price × (1 + Markup Percentage / 100); Gross Profit = Selling Price − Cost Price.',
    practicalExample:
      'Adding Markup Percentage (%) = 40% to a garment with Cost Price (PKR) = 2,500 produces a selling price of PKR 3,500 and Gross Profit: PKR 1,000.',
    faqs: [
      {
        q: 'Does a 40% markup equal a 40% profit margin?',
        a: 'No, a 40% markup on PKR 2,500 yields PKR 1,000 profit on a PKR 3,500 price, which equals a 28.57% profit margin.',
      },
      {
        q: 'Can Markup Percentage (%) exceed 100% for luxury or custom goods?',
        a: 'Yes, entering 150% doubles cost plus adds another half, pricing items at 2.5× Cost Price (PKR).',
      },
      {
        q: 'Should inbound freight be added into Cost Price (PKR) before marking up?',
        a: 'Yes, including landed shipping inside Cost Price (PKR) ensures gross profit is not eroded by delivery bills.',
      },
    ],
  },

  'business-roi-calc': {
    seoTitle: `Free ROI Calculator – Business Project Return % | ${SITE_NAME}`,
    metaDescription:
      'Evaluate business campaign or equipment return percentage from net profit and outlay with our free ROI Calculator.',
    howToUseSteps: [
      'Enter cumulative gain earned after expenses in Net Profit (PKR).',
      'Type the total capital committed inside Total Investment (PKR).',
      'Inspect the percentage ROI figure to compare competing business initiatives.',
    ],
    formulaExplanation:
      'Project Return on Investment scales net rupee earnings against the total capital deployed, letting owners rank marketing ads, machinery upgrades, and store expansions on a single benchmark. Formula: ROI (%) = (Net Profit / Total Investment) × 100.',
    practicalExample:
      'Generating Net Profit (PKR) = 400,000 from Total Investment (PKR) = 2,000,000 delivers (400,000 / 2,000,000) × 100 = 20.00% ROI.',
    faqs: [
      {
        q: 'What counts as Net Profit (PKR) versus total sales revenue?',
        a: 'Subtract equipment upkeep, labor, ad spend, and cost of goods first so Net Profit reflects pure bottom-line gain.',
      },
      {
        q: 'What ROI result appears if Total Investment (PKR) is entered as 0?',
        a: 'The ratio safely returns 0.00% ROI instead of throwing a division-by-zero error.',
      },
      {
        q: 'Should working capital tied up in stock go into Total Investment (PKR)?',
        a: 'Yes, counting initial inventory alongside setup costs reflects true capital efficiency.',
      },
    ],
  },

  'sales-commission-calc': {
    seoTitle: `Free Commission Calculator – Sales Rep Payout in PKR | ${SITE_NAME}`,
    metaDescription:
      'Calculate sales rep commission payouts from revenue volume and percentage rate with our free Commission Calculator.',
    howToUseSteps: [
      'Type closed deal volume or monthly bookings into Total Sales (PKR).',
      'Enter the agreed payout rate inside Commission Rate (%).',
      'View the exact commission payout owed alongside your sales volume summary.',
    ],
    formulaExplanation:
      'Commission structures reward sales representatives strictly in proportion to closed business volume, aligning payroll expense with collected sales revenue. Formula: Commission Payout (PKR) = Total Sales × (Commission Rate / 100).',
    practicalExample:
      'Closing Total Sales (PKR) = 800,000 at Commission Rate (%) = 7.5% earns a rep payout of PKR 60,000.',
    faqs: [
      {
        q: 'Should Total Sales (PKR) be entered before or after sales tax / GST?',
        a: 'Most compensation plans base Commission Rate (%) on net pre-tax invoice totals excluding GST and shipping.',
      },
      {
        q: 'How do I calculate tiered commissions like 5% on base sales and 10% on bonus sales?',
        a: 'Run each sales tier separately with its matching Commission Rate (%) and add the resulting payouts.',
      },
      {
        q: 'Are fractional rates like 2.25% supported in Commission Rate (%)?',
        a: 'Yes, decimal commission percentages compute cleanly down to exact rupee payouts.',
      },
    ],
  },

  'cost-per-unit-calc': {
    seoTitle: `Free Cost per Unit Calculator – Production Batch Average | ${SITE_NAME}`,
    metaDescription:
      'Determine average manufacturing cost per single unit from batch expenses using our free Cost per Unit Calculator.',
    howToUseSteps: [
      'Combine materials, labor, and batch factory overhead inside Total Production Cost (PKR).',
      'Enter finished output quantity into Number of Units Produced.',
      'Check the exact per-unit production cost formatted to two decimals.',
    ],
    formulaExplanation:
      'Tracking unit economics reveals how economies of scale spread factory overhead across larger production runs, guiding wholesale pricing and minimum order floors. Formula: Cost per Unit = Total Production Cost (PKR) / Number of Units Produced.',
    practicalExample:
      'Spending Total Production Cost (PKR) = 500,000 to manufacture Number of Units Produced = 2,000 results in PKR 250.00 / unit.',
    faqs: [
      {
        q: 'Should defective or scrapped pieces be included in Number of Units Produced?',
        a: 'Count only sellable finished units so Total Production Cost (PKR) accurately absorbs spoilage into good units.',
      },
      {
        q: 'Why does Cost per Unit fall when factory batch size expands?',
        a: 'Fixed machine setup and supervisor costs spread across more units, lowering average unit cost.',
      },
      {
        q: 'What happens if Number of Units Produced is zero?',
        a: 'The tool warns that units must exceed zero rather than displaying an invalid infinite result.',
      },
    ],
  },

  'sales-target-calc': {
    seoTitle: `Free Sales Target Calculator – Daily Revenue Quota | ${SITE_NAME}`,
    metaDescription:
      'Break monthly or quarterly PKR revenue goals into daily quotas with our free Sales Target Calculator.',
    howToUseSteps: [
      'Type your overall monthly or campaign goal into Sales Target (PKR).',
      'Enter actual operating days inside Working Days in Period.',
      'Inspect the daily revenue quota required to keep your team on schedule.',
    ],
    formulaExplanation:
      'Dividing an overarching revenue quota by active selling days turns abstract monthly budgets into actionable daily store or team targets. Formula: Daily Sales Target = Sales Target (PKR) / Working Days in Period.',
    practicalExample:
      'Achieving Sales Target (PKR) = 3,000,000 across Working Days in Period = 25 requires generating PKR 120,000 / day.',
    faqs: [
      {
        q: 'Should Sundays and gazetted holidays be excluded from Working Days in Period?',
        a: 'Yes, count only days your storefront, showroom, or outbound sales desk actively closes orders.',
      },
      {
        q: 'How can I recalculate mid-month if we are behind quota?',
        a: 'Enter the remaining unpaid gap in Sales Target (PKR) and the remaining days left in Working Days in Period.',
      },
      {
        q: 'Can retail branches track weekly targets instead of monthly?',
        a: 'Yes, simply put your weekly goal in Sales Target (PKR) and 5, 6, or 7 days in Working Days in Period.',
      },
    ],
  },

  'inventory-reorder-calc': {
    seoTitle: `Free Inventory Reorder Point Calculator – Stock Restock Level | ${SITE_NAME}`,
    metaDescription:
      'Avoid stockouts by computing exact SKU reorder triggers from daily sales and lead time with our free Inventory Reorder Point Calculator.',
    howToUseSteps: [
      'Type average units sold daily inside Average Daily Sales (Units).',
      'Enter vendor delivery turnaround in Supplier Lead Time (Days).',
      'Input your emergency cushion inside Safety Stock (Units) to see the restock trigger.',
    ],
    formulaExplanation:
      'Placing fresh purchase orders when remaining stock equals expected demand during supplier transit plus a safety buffer prevents lost sales during shipping delays. Formula: Reorder Point = (Average Daily Sales × Supplier Lead Time) + Safety Stock.',
    practicalExample:
      'Selling Average Daily Sales (Units) = 45 with Supplier Lead Time (Days) = 10 creates Lead Time Demand: 450 units; adding Safety Stock (Units) = 150 sets your trigger at 600 units.',
    faqs: [
      {
        q: 'How much Safety Stock (Units) should small retailers carry?',
        a: 'Many warehouses hold 3 to 7 days of Average Daily Sales as Safety Stock to cushion customs or courier delays.',
      },
      {
        q: 'What if Supplier Lead Time (Days) varies between 8 and 14 days?',
        a: 'Using the conservative upper bound of 14 days protects popular SKUs from running out mid-transit.',
      },
      {
        q: 'Does Reorder Point tell me how many units to order?',
        a: 'Reorder Point signals when to place the purchase order; pair it with EOQ to choose optimal batch size.',
      },
    ],
  },

  'overtime-pay-calc': {
    seoTitle: `Free Overtime Pay Calculator – Extra Hours Wage in PKR | ${SITE_NAME}`,
    metaDescription:
      'Compute employee overtime wages from hourly pay, extra hours, and multiplier using our free Overtime Pay Calculator.',
    howToUseSteps: [
      'Enter the employee’s base wage in Regular Hourly Rate (PKR).',
      'Type total extra hours worked into Overtime Hours Worked.',
      'Set the pay premium inside Overtime Multiplier (e.g. 1.5) to compute overtime wages.',
    ],
    formulaExplanation:
      'Payroll teams calculate extra-shift compensation by scaling standard hourly pay by the statutory or company overtime factor across all hours worked beyond normal shifts. Formula: Overtime Pay = Regular Hourly Rate × Overtime Hours Worked × Overtime Multiplier.',
    practicalExample:
      'Paying Regular Hourly Rate (PKR) = 800 for Overtime Hours Worked = 15 at Overtime Multiplier (e.g. 1.5) = 1.5x computes 800 × 15 × 1.5 = PKR 18,000.',
    faqs: [
      {
        q: 'When should I enter 2.0 instead of 1.5 in Overtime Multiplier (e.g. 1.5)?',
        a: 'Standard weekday overtime typically pays 1.5x, whereas weekend or public holiday shifts often qualify for double time (2.0x).',
      },
      {
        q: 'Does this output show combined monthly pay or overtime earnings only?',
        a: 'It isolates pure Overtime Pay so payroll managers can add it cleanly as a separate line item on payslips.',
      },
      {
        q: 'How do salaried staff get a Regular Hourly Rate (PKR)?',
        a: 'Divide monthly basic salary by standard monthly contracted hours (commonly 160 to 208 hours).',
      },
    ],
  },

  'business-profit-margin-calc': {
    seoTitle: `Free Profit Margin Calculator – Gross Margin % & Profit | ${SITE_NAME}`,
    metaDescription:
      'Measure business gross margin percentage and rupee profit from revenue and COGS with our free Profit Margin Calculator.',
    howToUseSteps: [
      'Type gross sales proceeds into the Total Revenue (PKR) box.',
      'Enter direct inventory or production outlays in Cost of Goods Sold - COGS (PKR).',
      'Inspect the Profit Margin percentage and Gross Profit displayed immediately.',
    ],
    formulaExplanation:
      'Gross profit margin measures what percentage of every sales rupee survives direct product costs to fund rent, salaries, marketing, and net profit. Formula: Margin (%) = [(Total Revenue − COGS) / Total Revenue] × 100, where Gross Profit equals Total Revenue minus COGS.',
    practicalExample:
      'Generating Total Revenue (PKR) = 500,000 with Cost of Goods Sold - COGS (PKR) = 300,000 produces Gross Profit: PKR 200,000 and a 40.00% Profit Margin.',
    faqs: [
      {
        q: 'Why can Profit Margin never reach or exceed 100% when COGS is positive?',
        a: 'Because Cost of Goods Sold - COGS (PKR) consumes part of revenue, margin always stays strictly below 100% unless direct cost is zero.',
      },
      {
        q: 'Should office rent and marketing ads go into Cost of Goods Sold - COGS (PKR)?',
        a: 'No—COGS tracks direct inventory or manufacturing costs only, while rent and ads belong in Net Profit calculations.',
      },
      {
        q: 'What healthy Profit Margin do retail stores target?',
        a: 'Grocery and electronics often run 15%–25%, while apparel, cosmetics, and software commonly achieve 45%–80% margins.',
      },
    ],
  },

  'business-discount-calc': {
    seoTitle: `Free Discount Calculator – Store Markdown & Customer Savings | ${SITE_NAME}`,
    metaDescription:
      'Calculate promotional markdown prices and customer PKR savings fast with our free Discount Calculator.',
    howToUseSteps: [
      'Type the regular catalog tag into Original Price (PKR).',
      'Enter your campaign reduction inside Discount Percentage (%).',
      'Check the final customer price alongside exact rupee savings.',
    ],
    formulaExplanation:
      'Commercial discount pricing deducts a promotional fraction from list price to quantify customer savings cleanly on price tags, quotes, and point-of-sale banners. Formula: Customer Savings = Original Price × (Discount Percentage / 100); Sale Price = Original Price − Customer Savings.',
    practicalExample:
      'Applying Discount Percentage (%) = 20% on Original Price (PKR) = 10,000 generates You Save: PKR 2,000 (20% off) and a final sale price of PKR 8,000.',
    faqs: [
      {
        q: 'How can store owners avoid eroding margins during Discount Percentage (%) promotions?',
        a: 'Verify that the reduced sale price still stays comfortably above unit Cost Price plus overhead.',
      },
      {
        q: 'Can wholesalers enter bulk trade discounts like 35% here?',
        a: 'Yes, any percentage markdown from 1% up to 99% evaluates instantaneously.',
      },
      {
        q: 'Does Discount Percentage (%) handle decimals such as 17.5%?',
        a: 'Yes, decimal discounts compute exact rupee savings without rounding errors.',
      },
    ],
  },

  'business-sales-tax-calc': {
    seoTitle: `Free Sales Tax / GST Calculator – B2B Invoice Tax in PKR | ${SITE_NAME}`,
    metaDescription:
      'Compute GST amount and tax-inclusive invoice totals in PKR with our free Sales Tax / GST Calculator.',
    howToUseSteps: [
      'Enter your pre-tax invoice value inside Subtotal Amount (PKR).',
      'Type the applicable statutory rate into Sales Tax / GST Rate (%).',
      'Read the tax-inclusive total alongside the standalone GST breakdown.',
    ],
    formulaExplanation:
      'Businesses issuing taxable GST invoices add the statutory tax percentage onto net subtotal goods or services to display both separate tax payable and gross receivable. Formula: Tax Amount = Subtotal Amount × (Sales Tax / GST Rate / 100); Gross Total = Subtotal Amount + Tax Amount.',
    practicalExample:
      'Billing Subtotal Amount (PKR) = 25,000 at Sales Tax / GST Rate (%) = 18% calculates Tax Amount: PKR 4,500 @ 18% and a gross total of PKR 29,500.',
    faqs: [
      {
        q: 'Which standard Sales Tax / GST Rate (%) rates apply across Pakistan?',
        a: 'General sales tax on goods is commonly 18%, while provincial services GST varies around 13%–16% depending on province and sector.',
      },
      {
        q: 'Why must Tax Amount be shown separately from Subtotal Amount (PKR)?',
        a: 'Registered businesses need the standalone GST line to claim input tax adjustments on monthly tax returns.',
      },
      {
        q: 'Can I calculate a zero-rated export invoice?',
        a: 'Yes, entering 0 in Sales Tax / GST Rate (%) outputs PKR 0 tax and leaves Subtotal unchanged.',
      },
    ],
  },

  'business-salary-to-hourly': {
    seoTitle: `Free Salary to Hourly Calculator – Equivalent PKR Hourly Rate | ${SITE_NAME}`,
    metaDescription:
      'Convert monthly PKR compensation into an hourly contractor or payroll rate with our free Salary to Hourly Calculator.',
    howToUseSteps: [
      'Enter monthly gross compensation inside Monthly Salary (PKR).',
      'Input total monthly shift hours inside Working Hours per Month.',
      'Check the exact hourly pay rate rounded to two decimal places.',
    ],
    formulaExplanation:
      'Employers and freelancers convert fixed monthly retainers into hourly figures to price client billables, track project profitability, and benchmark part-time contracts. Formula: Hourly Rate = Monthly Salary (PKR) / Working Hours per Month.',
    practicalExample:
      'Dividing Monthly Salary (PKR) = 120,000 across Working Hours per Month = 160 outputs an hourly pay rate of PKR 750.00 / hour.',
    faqs: [
      {
        q: 'How many Working Hours per Month represent a standard 40-hour week?',
        a: 'Forty hours across four weeks equals 160 hours, whereas multiplying 52 weeks × 40 hours ÷ 12 months averages 173.33 hours.',
      },
      {
        q: 'What if someone works 48 hours a week in a 6-day office?',
        a: 'Enter roughly 192 to 208 in Working Hours per Month to reflect the longer workweek.',
      },
      {
        q: 'What happens if Working Hours per Month is set to 0?',
        a: 'A safety guard alerts that working hours must exceed zero instead of showing infinity.',
      },
    ],
  },

  'business-invoice-total': {
    seoTitle: `Free Invoice Total Calculator – Subtotal, Tax & Shipping | ${SITE_NAME}`,
    metaDescription:
      'Calculate grand client invoice totals combining item subtotal, tax rate, and delivery charges with our free Invoice Total Calculator.',
    howToUseSteps: [
      'Type total line-item product charges into Items Subtotal (PKR).',
      'Enter the applied tax percentage inside Tax Rate (%).',
      'Input courier or freight charges in Shipping / Delivery Fee (PKR) to get the final invoice due.',
    ],
    formulaExplanation:
      'Commercial invoices calculate percentage sales tax on the merchandise subtotal and add flat courier or handling charges afterward to reach the grand payable balance. Formula: Tax = Items Subtotal × (Tax Rate / 100); Invoice Total = Items Subtotal + Tax + Shipping / Delivery Fee.',
    practicalExample:
      'Invoicing Items Subtotal (PKR) = 75,000 with Tax Rate (%) = 16% (Tax: PKR 12,000) plus Shipping / Delivery Fee (PKR) = 1,500 produces a grand total of PKR 88,500.',
    faqs: [
      {
        q: 'Does Tax Rate (%) apply to Shipping / Delivery Fee (PKR) in this formula?',
        a: 'No, percentage tax applies strictly to Items Subtotal (PKR), and Shipping / Delivery Fee adds afterward as a pass-through charge.',
      },
      {
        q: 'How do I prepare a free-shipping invoice?',
        a: 'Simply enter 0 inside Shipping / Delivery Fee (PKR) so only subtotal plus tax are billed.',
      },
      {
        q: 'Can service agencies bill retainers using this invoice tool?',
        a: 'Yes, put monthly retainer fees into Items Subtotal (PKR), provincial service tax into Tax Rate (%), and 0 for shipping.',
      },
    ],
  },

  'business-cash-flow': {
    seoTitle: `Free Cash Flow Calculator – Net Operating Surplus & Deficit | ${SITE_NAME}`,
    metaDescription:
      'Track net cash surplus or shortfall by comparing inflows against outflows in PKR with our free Cash Flow Calculator.',
    howToUseSteps: [
      'Total all customer receipts and capital inflows inside Total Cash Inflows (PKR).',
      'Sum rent, payroll, supplier bills, and debt outlays into Total Cash Outflows (PKR).',
      'Read net cash flow and verify whether the period closed in surplus or deficit.',
    ],
    formulaExplanation:
      'Cash flow tracks real bank movement rather than accrued paper sales, revealing whether a profitable business actually holds enough liquid cash to pay upcoming bills on time. Formula: Net Cash Flow = Total Cash Inflows (PKR) − Total Cash Outflows (PKR).',
    practicalExample:
      'Collecting Total Cash Inflows (PKR) = 1,200,000 against Total Cash Outflows (PKR) = 850,000 yields PKR 350,000 (Positive Net Cash Flow (Surplus)).',
    faqs: [
      {
        q: 'Can a business show Net Profit yet experience negative Cash Flow?',
        a: 'Yes—if customers buy on 60-day credit or too much cash sits tied up in unsold inventory, cash outflow outpaces cash receipts.',
      },
      {
        q: 'Should non-cash depreciation be included in Total Cash Outflows (PKR)?',
        a: 'No, include only actual cash payments leaving bank accounts or registers during the period.',
      },
      {
        q: 'Should loan repayments go inside Total Cash Outflows (PKR)?',
        a: 'Yes, counting scheduled principal and markup outlays gives an accurate picture of true net cash remaining.',
      },
    ],
  },

  'business-net-profit': {
    seoTitle: `Free Net Profit Calculator – Bottom-Line Earnings & Margin | ${SITE_NAME}`,
    metaDescription:
      'Calculate bottom-line PKR earnings and net profit margin after deducting all business expenses with our free Net Profit Calculator.',
    howToUseSteps: [
      'Enter total company sales into the Total Revenue (PKR) field.',
      'Combine COGS, payroll, rent, utilities, and taxes into Total Expenses (PKR).',
      'Inspect net rupee earnings alongside Net Profit Margin percentage.',
    ],
    formulaExplanation:
      'Net profit captures true bottom-line earnings remaining for owners or reinvestment after every operating cost, overhead bill, and tax obligation is paid. Formula: Net Profit = Total Revenue − Total Expenses; Net Profit Margin (%) = (Net Profit / Total Revenue) × 100.',
    practicalExample:
      'Earning Total Revenue (PKR) = 2,000,000 against Total Expenses (PKR) = 1,300,000 generates Net Profit of PKR 700,000 and Net Profit Margin: 35.00%.',
    faqs: [
      {
        q: 'How does Net Profit differ from Gross Profit?',
        a: 'Gross Profit subtracts only direct product cost (COGS), whereas Net Profit deducts rent, marketing, salaries, utilities, and interest as well.',
      },
      {
        q: 'What if Total Expenses (PKR) surpass Total Revenue (PKR)?',
        a: 'Both rupee profit and Net Profit Margin turn negative, indicating an operating net loss for the period.',
      },
      {
        q: 'What is considered a strong Net Profit Margin for small businesses?',
        a: 'Across most retail and service trades, sustaining a 10% to 20% Net Profit Margin signals healthy financial discipline.',
      },
    ],
  },

  'biz-operating-margin': {
    seoTitle: `Free Operating Margin Calculator – EBIT Core Profitability % | ${SITE_NAME}`,
    metaDescription:
      'Assess core operational efficiency from EBIT and revenue in PKR using our free Operating Margin Calculator.',
    howToUseSteps: [
      'Type earnings before interest and taxes into Operating Income / EBIT (PKR).',
      'Enter gross top-line sales inside Total Revenue (PKR).',
      'Read your Operating Margin percentage to measure core business efficiency.',
    ],
    formulaExplanation:
      'Operating margin isolates how efficiently management runs core operations before financing choices (interest) or tax strategies distort results. Dividing EBIT by Total Revenue highlights operational cost control. Formula: Operating Margin (%) = (Operating Income / Total Revenue) × 100.',
    practicalExample:
      'Reporting Operating Income / EBIT (PKR) = 400,000 on Total Revenue (PKR) = 2,000,000 results in a 20.00% Operating Margin.',
    faqs: [
      {
        q: 'Why exclude interest and taxes from Operating Income / EBIT (PKR)?',
        a: 'Excluding debt interest and tax rates lets analysts compare core store or factory efficiency fairly across leveraged and debt-free competitors.',
      },
      {
        q: 'How is Operating Income / EBIT (PKR) derived from Gross Profit?',
        a: 'Subtract selling, general, administrative expenses, and depreciation from Gross Profit to get EBIT.',
      },
      {
        q: 'What triggers an input validation message in Total Revenue (PKR)?',
        a: 'Revenue must be greater than 0 because margin percentages divide directly by Total Revenue (PKR).',
      },
    ],
  },

  'biz-ebitda': {
    seoTitle: `Free EBITDA Calculator – Operating Cash Earnings in PKR | ${SITE_NAME}`,
    metaDescription:
      'Compute EBITDA by adding interest, taxes, depreciation, and amortization back to net income with our free EBITDA Calculator.',
    howToUseSteps: [
      'Enter bottom-line accounting profit into Net Income (PKR).',
      'Add financing charges inside Interest Expense (PKR) and tax bills in Tax Expense (PKR).',
      'Type non-cash write-downs into Depreciation & Amortization (PKR) to compute EBITDA.',
    ],
    formulaExplanation:
      'EBITDA adds financing, tax, and non-cash asset depreciation charges back to net income to estimate operating cash-generating strength for business valuation and bank lending multiples. Formula: EBITDA = Net Income + Interest Expense + Tax Expense + Depreciation & Amortization.',
    practicalExample:
      'Adding Net Income (PKR) = 800,000, Interest Expense (PKR) = 100,000, Tax Expense (PKR) = 150,000, and Depreciation & Amortization (PKR) = 80,000 outputs EBITDA = PKR 1,130,000.',
    faqs: [
      {
        q: 'Why do buyers and investors value companies using EBITDA multiples?',
        a: 'EBITDA strips out capital structure and non-cash accounting depreciation, making cash profitability easier to compare across firms.',
      },
      {
        q: 'Where do I find Depreciation & Amortization (PKR)?',
        a: 'Check operating expense notes on your income statement or cash flow statement where equipment depreciation and intangible amortization appear.',
      },
      {
        q: 'Does EBITDA equal free cash flow available to spend?',
        a: 'Not quite—EBITDA excludes capital expenditures (CapEx) needed to replace aging machinery and working capital shifts.',
      },
    ],
  },

  'biz-cac': {
    seoTitle: `Free Customer Acquisition Cost (CAC) Calculator – Ad Efficiency | ${SITE_NAME}`,
    metaDescription:
      'Calculate average PKR cost to win each paying customer from marketing spend with our free Customer Acquisition Cost (CAC) Calculator.',
    howToUseSteps: [
      'Combine ad spend, agency fees, and sales payroll into Total Marketing & Sales Spend (PKR).',
      'Enter paying signups won during that campaign in New Customers Acquired.',
      'Check your exact acquisition cost per customer below.',
    ],
    formulaExplanation:
      'Customer Acquisition Cost measures whether paid growth channels scale profitably by dividing full sales and marketing outlays by newly converted customers in the same window. Formula: CAC = Total Marketing & Sales Spend (PKR) / New Customers Acquired.',
    practicalExample:
      'Spending Total Marketing & Sales Spend (PKR) = 250,000 to win New Customers Acquired = 500 results in a CAC of PKR 500 per customer.',
    faqs: [
      {
        q: 'Should New Customers Acquired count website visitors, leads, or paying buyers?',
        a: 'Count only paying customers so CAC accurately reflects real revenue-generating conversions rather than unmonetized clicks.',
      },
      {
        q: 'What is a healthy ratio between Customer Lifetime Value and CAC?',
        a: 'Most SaaS and e-commerce operators aim for LTV to be at least 3× CAC to cover overhead and retain strong unit profits.',
      },
      {
        q: 'Should sales team salaries go inside Total Marketing & Sales Spend (PKR)?',
        a: 'Yes, include ad budgets, creative production, CRM software, and sales commissions for a fully loaded CAC.',
      },
    ],
  },

  'biz-ltv': {
    seoTitle: `Free Customer Lifetime Value (LTV) Calculator – Retention Revenue | ${SITE_NAME}`,
    metaDescription:
      'Estimate cumulative PKR revenue per subscriber or repeat buyer using our free Customer Lifetime Value (LTV) Calculator.',
    howToUseSteps: [
      'Type average order value inside Average Purchase Value (PKR).',
      'Enter yearly repeat order count into Purchases per Year.',
      'Specify expected retention horizon in Customer Lifespan (Years) to compute total LTV.',
    ],
    formulaExplanation:
      'Knowing Customer Lifetime Value helps growth teams set maximum ad bids confidently and prioritize retention programs over one-off discounting. Multiplying order size by annual buying cadence and retention duration projects total relationship revenue. Formula: LTV = Average Purchase Value × Purchases per Year × Customer Lifespan.',
    practicalExample:
      'An account with Average Purchase Value (PKR) = 5,000 buying Purchases per Year = 4 over Customer Lifespan (Years) = 3 generates PKR 20,000 annually and a cumulative LTV of PKR 60,000.',
    faqs: [
      {
        q: 'How can subscription brands estimate Customer Lifespan (Years)?',
        a: 'Divide 1 by your annual churn rate—for example, a 25% yearly churn corresponds to a 4-year average Customer Lifespan.',
      },
      {
        q: 'Does increasing Purchases per Year raise LTV faster than cutting prices?',
        a: 'Yes—boosting repeat purchase cadence from 4 to 5 orders per year lifts lifetime value by 25% without hurting unit price.',
      },
      {
        q: 'Should gross margin be applied to LTV when setting marketing budgets?',
        a: 'Yes, multiplying revenue-based LTV by your gross profit margin prevents overspending on low-margin products.',
      },
    ],
  },

  'biz-working-capital': {
    seoTitle: `Free Working Capital Calculator – Short-Term Liquidity | ${SITE_NAME}`,
    metaDescription:
      'Check short-term liquidity and Current Ratio from assets and liabilities in PKR with our free Working Capital Calculator.',
    howToUseSteps: [
      'Enter cash, inventory, and receivables inside Total Current Assets (PKR).',
      'Input payables, short-term credit lines, and accrued bills into Total Current Liabilities (PKR).',
      'Inspect net working capital alongside the Current Ratio displayed underneath.',
    ],
    formulaExplanation:
      'Working capital shows whether short-term liquid resources comfortably cover obligations falling due within the next twelve months, safeguarding day-to-day payroll and supplier payments. Formula: Working Capital = Total Current Assets − Total Current Liabilities; Current Ratio = Total Current Assets / Total Current Liabilities.',
    practicalExample:
      'Holding Total Current Assets (PKR) = 3,500,000 against Total Current Liabilities (PKR) = 2,100,000 yields Working Capital of PKR 1,400,000 and Current Ratio: 1.67.',
    faqs: [
      {
        q: 'What Current Ratio range signals healthy short-term solvency?',
        a: 'A Current Ratio between 1.5 and 2.5 generally indicates comfortable liquidity without letting excessive cash sit idle.',
      },
      {
        q: 'Why exclude long-term factory machinery from Total Current Assets (PKR)?',
        a: 'Fixed assets cannot be converted into cash quickly inside one operating cycle to settle immediate vendor payables.',
      },
      {
        q: 'What does negative Working Capital indicate?',
        a: 'Immediate liabilities exceed current assets, warning of potential cash crunches unless inventory turns over extremely fast.',
      },
    ],
  },

  'biz-quick-ratio': {
    seoTitle: `Free Quick Ratio / Acid-Test Ratio Calculator – Liquid Coverage | ${SITE_NAME}`,
    metaDescription:
      'Test instant debt coverage excluding inventory using cash and receivables with our free Quick Ratio / Acid-Test Ratio Calculator.',
    howToUseSteps: [
      'Type liquid balances into Cash & Marketable Securities (PKR).',
      'Enter collectible customer invoices inside Accounts Receivable (PKR).',
      'Input short-term obligations in Current Liabilities (PKR) to check the acid-test ratio.',
    ],
    formulaExplanation:
      'Unlike the broader Current Ratio, the Acid-Test (Quick) Ratio excludes slow-moving inventory and prepaid expenses to verify whether cash and near-cash receivables alone can satisfy immediate creditors. Formula: Quick Ratio = (Cash & Marketable Securities + Accounts Receivable) / Current Liabilities.',
    practicalExample:
      'Combining Cash & Marketable Securities (PKR) = 1,200,000 and Accounts Receivable (PKR) = 800,000 against Current Liabilities (PKR) = 1,500,000 gives (2,000,000 / 1,500,000) = 1.33 Quick Ratio (Healthy Liquidity).',
    faqs: [
      {
        q: 'Why does the Acid-Test Ratio omit warehouse inventory?',
        a: 'Stock may take months to sell or require heavy discounting during a cash crunch, whereas cash and receivables convert fast.',
      },
      {
        q: 'Is a Quick Ratio below 1.0 always dangerous?',
        a: 'Supermarkets and fast-cash retailers sometimes operate safely below 1.0, though manufacturers typically prefer 1.0 or higher.',
      },
      {
        q: 'Should overdue uncollectible invoices stay inside Accounts Receivable (PKR)?',
        a: 'Remove doubtful bad debts from Accounts Receivable (PKR) so your Quick Ratio does not look artificially strong.',
      },
    ],
  },

  'biz-debt-to-equity': {
    seoTitle: `Free Debt-to-Equity Ratio Calculator – Capital Leverage | ${SITE_NAME}`,
    metaDescription:
      'Evaluate business financial leverage comparing liabilities to shareholder equity with our free Debt-to-Equity Ratio Calculator.',
    howToUseSteps: [
      'Enter combined short- and long-term debts into Total Liabilities (PKR).',
      'Type owner paid-in capital and retained earnings inside Total Shareholder Equity (PKR).',
      'Review the resulting D/E Ratio to gauge borrowing reliance.',
    ],
    formulaExplanation:
      'Commercial lenders scrutinize Debt-to-Equity leverage to measure how aggressively a firm funds expansion with borrowed money versus owner capital. Higher ratios amplify returns in boom years yet raise insolvency risk during downturns. Formula: D/E Ratio = Total Liabilities (PKR) / Total Shareholder Equity (PKR).',
    practicalExample:
      'Carrying Total Liabilities (PKR) = 5,000,000 alongside Total Shareholder Equity (PKR) = 7,500,000 yields 0.67 D/E Ratio.',
    faqs: [
      {
        q: 'What D/E Ratio do commercial banks generally prefer for SME loans?',
        a: 'Many banks look favorably on D/E Ratios below 1.5, though capital-intensive utilities and manufacturing plants often run higher.',
      },
      {
        q: 'Can Total Shareholder Equity (PKR) ever be zero or negative?',
        a: 'Accumulated losses can push equity negative, in which case the calculator requires equity above zero before computing leverage.',
      },
      {
        q: 'How can a company reduce an elevated D/E Ratio?',
        a: 'Retaining profits rather than paying dividends, repaying bank loans, or injecting fresh owner equity lowers leverage.',
      },
    ],
  },

  'biz-employee-turnover': {
    seoTitle: `Free Employee Turnover Rate Calculator – Staff Attrition % | ${SITE_NAME}`,
    metaDescription:
      'Measure workforce attrition percentage from departures and average headcount using our free Employee Turnover Rate Calculator.',
    howToUseSteps: [
      'Enter total resignations and terminations inside Employees Left During Period.',
      'Type mean headcount across that timeframe in Average Number of Employees.',
      'View the percentage staff Turnover Rate immediately.',
    ],
    formulaExplanation:
      'HR departments track employee turnover to spot retention issues, control hiring and onboarding costs, and benchmark departmental stability year over year. Formula: Turnover Rate (%) = (Employees Left During Period / Average Number of Employees) × 100.',
    practicalExample:
      'Experiencing Employees Left During Period = 6 within a team of Average Number of Employees = 50 yields (6 / 50) × 100 = 12.0% Turnover Rate.',
    faqs: [
      {
        q: 'How do I calculate Average Number of Employees for the year?',
        a: 'Add starting headcount and ending headcount and divide by two (or average monthly payroll headcounts).',
      },
      {
        q: 'Should involuntary terminations count inside Employees Left During Period?',
        a: 'Yes, overall turnover includes both voluntary resignations and layoffs so leadership sees total workforce churn.',
      },
      {
        q: 'How do I annualize a quarterly Turnover Rate?',
        a: 'Multiply a single quarter’s turnover percentage by 4—or enter full 12-month departures directly.',
      },
    ],
  },

  'biz-payback-period': {
    seoTitle: `Free Payback Period Calculator – Capital Recovery Years | ${SITE_NAME}`,
    metaDescription:
      'Determine years required to recover initial project investment from yearly cash inflows with our free Payback Period Calculator.',
    howToUseSteps: [
      'Enter upfront project or machine cost inside Initial Investment (PKR).',
      'Type steady yearly net cash returns into Annual Cash Inflow (PKR).',
      'Read the exact recovery horizon in years.',
    ],
    formulaExplanation:
      'Payback period measures liquidity risk by calculating how many years an asset or franchise takes to earn back its upfront cash cost in nominal terms. Shorter payback periods free capital sooner for new ventures. Formula: Payback Period (Years) = Initial Investment (PKR) / Annual Cash Inflow (PKR).',
    practicalExample:
      'Deploying Initial Investment (PKR) = 3,000,000 into equipment generating Annual Cash Inflow (PKR) = 750,000 recovers cost in 4.0 years.',
    faqs: [
      {
        q: 'Does simple Payback Period discount future cash flows for inflation or interest?',
        a: 'No, standard Payback Period uses undiscounted nominal inflows; pair it with ROI or NPV for long-horizon projects.',
      },
      {
        q: 'What if a machine generates zero or negative Annual Cash Inflow (PKR)?',
        a: 'The tool stops with a clear prompt because negative cash flows never recover an Initial Investment.',
      },
      {
        q: 'How do managers use Payback Period when picking between two upgrades?',
        a: 'When cash budgets are tight, owners favor the upgrade with the shorter Payback Period to recover liquidity faster.',
      },
    ],
  },

  'biz-eoq': {
    seoTitle: `Free Economic Order Quantity (EOQ) Calculator – Optimal Batch | ${SITE_NAME}`,
    metaDescription:
      'Find optimal purchase order batch size balancing ordering fees and warehouse holding costs with our free Economic Order Quantity (EOQ) Calculator.',
    howToUseSteps: [
      'Enter total units sold per year inside Annual Demand (Units - D).',
      'Type fixed shipping, PO, and admin fees per shipment in Ordering Cost per Order (PKR - S).',
      'Input yearly storage, insurance, and capital cost per unit in Holding Cost per Unit per Year (PKR - H).',
    ],
    formulaExplanation:
      'The Wilson Economic Order Quantity model balances two opposing warehouse pressures: placing tiny frequent orders inflates administrative shipping fees, whereas ordering huge batches inflates warehouse rent and tied-up cash. Formula: EOQ = √[(2 × Annual Demand × Ordering Cost) / Holding Cost].',
    practicalExample:
      'With Annual Demand (Units - D) = 10,000, Ordering Cost per Order (PKR - S) = 2,500, and Holding Cost per Unit per Year (PKR - H) = 50, √[(2 × 10,000 × 2,500) / 50] = √1,000,000 outputs an optimal batch of 1,000 units.',
    faqs: [
      {
        q: 'How many orders per year does an EOQ of 1,000 units imply here?',
        a: 'Dividing Annual Demand (10,000) by EOQ (1,000) means placing 10 evenly spaced orders annually.',
      },
      {
        q: 'What costs belong in Holding Cost per Unit per Year (PKR - H)?',
        a: 'Include warehouse shelf rent, spoilage risk, inventory insurance, and the opportunity cost of capital locked in stock.',
      },
      {
        q: 'Does EOQ handle bulk supplier price breaks automatically?',
        a: 'Classic EOQ assumes constant unit pricing, so compare EOQ total cost against discounted bulk tiers separately.',
      },
    ],
  },

  'biz-clv': {
    seoTitle: `Free Customer Lifetime Value (CLV) Calculator – Store Loyalty | ${SITE_NAME}`,
    metaDescription:
      'Forecast total PKR spend from loyal retail shoppers using purchase size, frequency, and lifespan with our free Customer Lifetime Value (CLV) Calculator.',
    howToUseSteps: [
      'Input typical basket checkout value inside Average Purchase Value (PKR).',
      'Enter yearly shopping trips per customer in Purchases per Year.',
      'Type loyalty duration in Customer Lifespan (Years) to see annual spend and total CLV.',
    ],
    formulaExplanation:
      'Retailers and service franchises measure Customer Lifetime Value by first computing each patron’s annualized spending run-rate, then projecting that annual spend across total retained years. Formula: Annual Customer Spend = Average Purchase Value × Purchases per Year; CLV = Annual Customer Spend × Customer Lifespan.',
    practicalExample:
      'Suppose a loyal clinic or boutique patron spends Average Purchase Value (PKR) = 8,000 across Purchases per Year = 6 for Customer Lifespan (Years) = 4, delivering PKR 48,000 per year and a total CLV of PKR 192,000.',
    faqs: [
      {
        q: 'Why check Annual customer spend alongside lifetime CLV?',
        a: 'Annual customer spend aligns directly with yearly cash flow budgeting, whereas CLV guides long-term loyalty rewards.',
      },
      {
        q: 'What lifts CLV fastest for brick-and-mortar retail stores?',
        a: 'Cross-selling add-ons raises Average Purchase Value (PKR), while loyalty cards encourage more Purchases per Year.',
      },
      {
        q: 'Can CLV vary significantly across VIP versus casual buyer segments?',
        a: 'Yes—segmenting VIP repeat shoppers separately from seasonal discount buyers produces much sharper forecasts.',
      },
    ],
  },

  'biz-churn-rate': {
    seoTitle: `Free Customer Churn Rate Calculator – Monthly Attrition % | ${SITE_NAME}`,
    metaDescription:
      'Track subscription or client loss percentage from churned accounts using our free Customer Churn Rate Calculator.',
    howToUseSteps: [
      'Type total canceled accounts inside Customers Lost During Period.',
      'Enter active subscriber count at day one in Customers at Start of Period.',
      'Review the percentage Churn Rate and lost-account summary.',
    ],
    formulaExplanation:
      'Recurring-revenue companies monitor churn relentlessly because losing subscribers erodes compounding growth even when new signups look strong. Formula: Churn Rate (%) = (Customers Lost During Period / Customers at Start of Period) × 100.',
    practicalExample:
      'Losing Customers Lost During Period = 15 out of Customers at Start of Period = 250 active accounts produces (15 / 250) × 100 = 6.00% Churn Rate.',
    faqs: [
      {
        q: 'Should brand-new signups gained mid-month be added into Customers at Start of Period?',
        a: 'No, standard logo churn keeps only accounts active on day one in the denominator so new acquisitions do not mask cancellations.',
      },
      {
        q: 'What monthly Churn Rate is typical for B2B software subscriptions?',
        a: 'Healthy B2B SaaS businesses usually keep monthly churn around 1% to 3%, whereas consumer apps often experience higher rates.',
      },
      {
        q: 'How does Churn Rate connect to retention rate?',
        a: 'Retention Rate simply equals 100% minus Churn Rate—so a 6% churn translates to 94% customer retention.',
      },
    ],
  },

  'biz-inventory-turnover': {
    seoTitle: `Free Inventory Turnover Ratio Calculator – Stock Turns & Days | ${SITE_NAME}`,
    metaDescription:
      'Measure annual stock turns and days to sell inventory in PKR with our free Inventory Turnover Ratio Calculator.',
    howToUseSteps: [
      'Enter annual wholesale product cost inside Cost of Goods Sold (COGS in PKR).',
      'Type typical stock value held on hand into Average Inventory Value (PKR).',
      'Check yearly inventory turns alongside average days required to sell stock.',
    ],
    formulaExplanation:
      'Inventory turnover reveals how many times a warehouse completely cycles through its stock during a year; higher turns unlock working cash and lower obsolescence risk. Dividing 365 days by the turnover ratio converts turns into Days Sales of Inventory. Formula: Inventory Turnover = COGS / Average Inventory Value; Average Days to Sell = 365 / Inventory Turnover.',
    practicalExample:
      'Recording Cost of Goods Sold (COGS in PKR) = 12,000,000 with Average Inventory Value (PKR) = 2,000,000 yields 6.00 Turns / Year, meaning stock sells in ~60.8 days.',
    faqs: [
      {
        q: 'Why must Inventory Turnover use COGS rather than retail sales revenue?',
        a: 'Because Average Inventory Value (PKR) sits on balance sheets at wholesale cost, using retail sales would inflate turns artificially by your markup.',
      },
      {
        q: 'How do I compute Average Inventory Value (PKR)?',
        a: 'Add opening warehouse inventory plus closing inventory and divide by two (or average quarterly stock counts).',
      },
      {
        q: 'Can an excessively high Inventory Turnover Ratio ever hurt a business?',
        a: 'Yes, turns that are too high compared with industry norms often mean holding thin stock and suffering frequent stockouts.',
      },
    ],
  },
};
