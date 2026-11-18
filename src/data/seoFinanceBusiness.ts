export interface SeoContent {
  intro: string;
  howItWorks: string;
  workedExample: string;
  faqs: { q: string; a: string }[];
  whoUses: string;
  medicalDisclaimer?: string;
}

export const financeBusinessSeoMap: Record<string, SeoContent> = {
  // --- FINANCE & MONEY ---
  'loan-calc': {
    intro: 'Plan your borrowing strategy effectively with our precise Loan EMI Calculator, designed to determine monthly repayment installments for personal or commercial loans in Pakistan. By entering your borrowed principal, annual interest rate, and repayment tenure in years, you instantly see your exact monthly commitment.',
    howItWorks: 'The calculator uses standard amortization math to split each payment between principal reduction and accumulated interest. Formula: EMI = [P × r × (1 + r)^n] / [(1 + r)^n - 1], where P is principal, r is monthly interest rate, and n is tenure in months.',
    workedExample: 'For a loan of 1,000,000 at 15% annual interest over 3 years (36 months), the monthly installment outputs 34,665.33 / month with total payment of 1,247,951.83 (247,951.83 in total interest).',
    faqs: [
      { q: 'How is the monthly interest rate calculated?', a: 'Divide the annual percentage rate (APR) by 12 months.' },
      { q: 'Does this calculator apply to car financing in Pakistan?', a: 'Yes, it works for any declining balance amortized loan.' },
      { q: 'Can I pay off my loan early?', a: 'Most banks in Pakistan allow early settlement, sometimes with nominal prepayment penalties.' },
      { q: 'Why is early-year interest higher?', a: 'Because interest is calculated on the remaining principal balance, which is highest at the start.' }
    ],
    whoUses: 'Who uses this: Borrowers, banking applicants, financial planners, and loan officers.'
  },
  'compound-interest': {
    intro: 'Witness the incredible power of exponential growth using our Compound Interest Calculator. Whether investing in mutual funds or saving in bank accounts, this tool projects your wealth accumulation over time.',
    howItWorks: 'Compound interest earns returns on both initial principal and accumulated interest from prior periods. Formula: A = P(1 + r/n)^(nt), where P is principal, r is annual rate, n is compounding frequency, and t is years.',
    workedExample: 'Investing 500,000 with 0 monthly contributions at a 16% annual rate compounded monthly for 5 years grows to 1,106,903.44 (with 606,903.44 in total interest).',
    faqs: [
      { q: 'What is the difference between simple and compound interest?', a: 'Simple interest only earns on principal; compound interest earns on principal plus accumulated interest.' },
      { q: 'How often does compounding occur?', a: 'It can be daily, monthly, quarterly, or annually.' },
      { q: 'Is this useful for National Savings certificates?', a: 'Yes, especially for long-term profit reinvestment schemes.' },
      { q: 'How does inflation affect compound returns?', a: 'Inflation reduces real purchasing power, so your real return is nominal rate minus inflation.' }
    ],
    whoUses: 'Who uses this: Long-term investors, savers, students, and wealth managers.'
  },
  'mortgage-calc': {
    intro: 'Navigate real estate financing with confidence using our Mortgage and Home Loan Calculator. Evaluate monthly housing loan payments, property financing structures, and total borrowing costs.',
    howItWorks: 'It calculates monthly mortgage installments based on property purchase price, down payment percentage, loan duration, and bank markup rate. Formula utilizes standard mortgage amortization equations.',
    workedExample: 'Purchasing a home priced at 15,000,000 with a 3,000,000 down payment (Loan Amount: 12,000,000) at 18% over 10 years outputs a monthly payment of 216,222.24 / mo.',
    faqs: [
      { q: 'What is a typical down payment in Pakistan?', a: 'Banks usually require between 15% to 30% equity contribution.' },
      { q: 'Can mortgage rates be variable?', a: 'Yes, many markup rates are pegged to KIBOR (Karachi Interbank Offered Rate) plus a bank spread.' },
      { q: 'Are property taxes included?', a: 'No, property taxes and insurance are usually separate ongoing expenses.' },
      { q: 'What is KIBOR?', a: 'KIBOR is the benchmark interest rate at which banks lend to one another in Pakistan.' }
    ],
    whoUses: 'Who uses this: Home buyers, real estate investors, and mortgage brokers.'
  },
  'roi-calc': {
    intro: 'Measure the profitability and financial efficiency of any investment venture with our Return on Investment (ROI) Calculator. Instantly evaluate whether a project generated positive net returns.',
    howItWorks: 'ROI divides net profit by initial investment cost expressed as a percentage. Formula: ROI = [(Final Value - Initial Investment) / Initial Investment] × 100.',
    workedExample: 'If you invest PKR 200,000 in a small business venture and it generates a net return of PKR 260,000, your net profit is PKR 60,000, yielding a 30% ROI.',
    faqs: [
      { q: 'Is ROI annualized?', a: 'Standard ROI represents total return; divide by years for annualized ROI.' },
      { q: 'Can ROI be negative?', a: 'Yes, if your investment value drops below your initial capital.' },
      { q: 'Does ROI account for inflation?', a: 'Nominal ROI does not; real ROI adjusts for inflation.' },
      { q: 'What is a good ROI?', a: 'It depends on industry risk; 15% to 20% is often targeted in commercial ventures.' }
    ],
    whoUses: 'Who uses this: Business analysts, investors, entrepreneurs, and project managers.'
  },
  'sales-tax': {
    intro: 'Calculate federal and provincial sales tax, GST, or value-added tax amounts effortlessly. Perfect for retail pricing, invoicing, and tax compliance in Pakistan.',
    howItWorks: 'It multiplies base price by the applicable sales tax percentage to find tax amount and gross total. Formula: Total = Price × (1 + Tax Rate / 100).',
    workedExample: 'For an item priced at PKR 10,000 with a standard 18% sales tax rate, the tax added is PKR 1,800, bringing the total invoice amount to PKR 11,800.',
    faqs: [
      { q: 'What is standard GST in Pakistan?', a: 'Standard federal GST is generally 18%, though provincial services sales tax varies.' },
      { q: 'How do I extract tax from a gross price?', a: 'Divide gross price by (1 + tax rate).' },
      { q: 'Is sales tax applicable on services?', a: 'Yes, provincial revenue boards (SRB, PRA, BRA, KPRA) levy services sales tax.' },
      { q: 'Are registered businesses exempt?', a: 'Registered businesses can usually claim input tax adjustments.' }
    ],
    whoUses: 'Who uses this: Retailers, accountants, consumers, and tax filers.'
  },
  'tip-calc': {
    intro: 'Quickly calculate restaurant tips and split bills evenly among friends or family members. Ensures fast and accurate dining calculations.',
    howItWorks: 'Calculates tip amount by multiplying bill subtotal by tip percentage, then dividing total by number of diners. Formula: Tip = Bill × (Tip% / 100).',
    workedExample: 'A restaurant bill of PKR 4,500 with a 10% tip adds PKR 450, making the grand total PKR 4,950. Split among 3 people, each person pays PKR 1,650.',
    faqs: [
      { q: 'Should tip be calculated before or after GST?', a: 'Usually calculated on the pre-tax bill subtotal, though either is acceptable.' },
      { q: 'Is tipping mandatory in Pakistan?', a: 'No, but it is customary in sit-down restaurants as a gesture of good service.' },
      { q: 'Can I split uneven amounts?', a: 'Yes, rounding to the nearest hundred rupees makes cash splitting easier.' },
      { q: 'Are service charges the same as tips?', a: 'Some restaurants add a mandatory 10% service charge instead of discretionary tips.' }
    ],
    whoUses: 'Who uses this: Diners, tourists, hospitality guests, and party organizers.'
  },
  'loan-emi-months': {
    intro: 'Determine the exact loan tenure in months required to pay off a debt given your fixed monthly budget. Ideal for custom debt restructuring.',
    howItWorks: 'Solves the amortization formula for n (number of months). Formula uses logarithmic functions based on principal, interest rate, and monthly payment.',
    workedExample: 'Borrowing PKR 300,000 at 14% annual interest for 24 months outputs an EMI of PKR 14,404 / month with a Total Payment of PKR 345,693.',
    faqs: [
      { q: 'What if my payment is lower than monthly interest?', a: 'Your loan balance will increase instead of decreasing (negative amortization).' },
      { q: 'Can I shorten my loan tenure?', a: 'Yes, paying extra principal each month reduces total months significantly.' },
      { q: 'Is compounding monthly standard?', a: 'Yes, retail loans compound interest monthly.' },
      { q: 'How does tenure affect total interest?', a: 'Longer tenures reduce monthly burden but drastically increase total interest paid.' }
    ],
    whoUses: 'Who uses this: Loan applicants, debt advisors, and financial counselors.'
  },
  'simple-interest': {
    intro: 'Calculate straightforward non-compounding interest on short-term loans or informal financial agreements. Quick and transparent calculation.',
    howItWorks: 'Simple interest is calculated purely on the principal amount. Formula: Interest = P × r × t, where P is principal, r is annual rate, and t is time in years.',
    workedExample: 'Lending PKR 100,000 at 10% simple annual interest for 2 years yields PKR 20,000 in total interest, making the total repayment PKR 120,000.',
    faqs: [
      { q: 'Where is simple interest used?', a: 'Often used in short-term personal promissory notes and certain vehicle loans.' },
      { q: 'Does interest accumulate on interest?', a: 'No, simple interest never compounds.' },
      { q: 'How is partial year calculated?', a: 'Multiply time in months by (1/12).' },
      { q: 'Is simple interest better for borrowers?', a: 'Yes, over multi-year periods simple interest is significantly cheaper than compound interest.' }
    ],
    whoUses: 'Who uses this: Informal lenders, students, and short-term borrowers.'
  },
  'compound-interest-freq': {
    intro: 'Analyze how different compounding frequencies (daily, monthly, semi-annually) impact your investment returns over time.',
    howItWorks: 'Compares nominal interest rate with Effective Annual Rate (EAR) based on compounding periods per year. Formula: EAR = (1 + r/n)^n - 1.',
    workedExample: 'Investing PKR 200,000 at a 15% annual rate for 1 year compounded monthly (12 times/year) outputs a final balance of PKR 232,151 with PKR 32,151 in Interest Earned.',
    faqs: [
      { q: 'Which compounding frequency is best for investors?', a: 'Daily or continuous compounding yields the highest return.' },
      { q: 'What is nominal vs effective rate?', a: 'Nominal is stated rate; effective reflects actual compounding growth.' },
      { q: 'Do Pakistani banks compound monthly?', a: 'Many savings accounts and fixed deposits compound profit semi-annually or monthly.' },
      { q: 'Does frequency matter for small amounts?', a: 'For small amounts and short durations, the difference is minimal.' }
    ],
    whoUses: 'Who uses this: Fixed income investors, bankers, and financial analysts.'
  },
  'savings-goal-calc': {
    intro: 'Set a financial target and calculate exactly how much you need to save each month to achieve your goal on time.',
    howItWorks: 'Uses the future value of an ordinary annuity formula solved for periodic payment P.',
    workedExample: 'To reach a target of PKR 1,000,000 in 36 months (3 years) at a 12% annual return rate, the calculator outputs a required saving of PKR 23,214 / month (Total Saved principal: PKR 835,715).',
    faqs: [
      { q: 'Does this factor in investment returns?', a: 'Yes, assuming consistent compounding returns during the savings period.' },
      { q: 'What if interest rates change?', a: 'Variable rates will alter your final accumulation.' },
      { q: 'Is it better to save weekly or monthly?', a: 'Monthly aligns with standard salary cycles in Pakistan.' },
      { q: 'How can I reach my goal faster?', a: 'Increase monthly contributions or invest in higher-yield instruments.' }
    ],
    whoUses: 'Who uses this: Goal-oriented savers, newlyweds, parents, and planners.'
  },
  'salary-breakdown-calc': {
    intro: 'Break down your monthly or annual salary into components like basic pay, allowances, house rent, and estimated income tax deductions.',
    howItWorks: 'Applies standard payroll percentages and FBR tax slab rates to gross salary figures.',
    workedExample: 'A gross monthly salary of PKR 150,000 based on 22 working days per month and 8 hours per day outputs PKR 1,800,000 / year, Daily: PKR 6,818, and Hourly: PKR 852.',
    faqs: [
      { q: 'Is medical allowance tax-exempt in Pakistan?', a: 'Up to 10% of basic salary is typically exempt under FBR rules.' },
      { q: 'How is annual tax calculated?', a: 'FBR taxes salaries based on progressive annual income slabs.' },
      { q: 'Are bonuses taxable?', a: 'Yes, bonuses are added to annual taxable income.' },
      { q: 'What is Provident Fund deduction?', a: 'A retirement savings contribution deducted by employers.' }
    ],
    whoUses: 'Who uses this: Salaried professionals, HR managers, and job applicants.'
  },
  'discount-sale-calc': {
    intro: 'Calculate markdown savings and final discounted sale prices during shopping sales and promotional events.',
    howItWorks: 'Multiplies original price by discount percentage to find savings, then subtracts from original. Formula: Final = Price × (1 - Discount%).',
    workedExample: 'A jacket marked at PKR 8,000 with a 25% promotional discount saves you PKR 2,000, making the final purchase price PKR 6,000.',
    faqs: [
      { q: 'How do I calculate successive discounts?', a: 'Apply each discount percentage sequentially to the reduced balance.' },
      { q: 'Does sale price include GST?', a: 'Usually marked prices in Pakistan are inclusive of sales tax unless stated otherwise.' },
      { q: 'What is 50% off plus extra 20%?', a: 'It means 50% off first, then 20% off the remaining balance (total 60% off).' },
      { q: 'Are clearance items returnable?', a: 'Depends on store policy.' }
    ],
    whoUses: 'Who uses this: Shoppers, retail buyers, and merchants.'
  },
  'manual-currency-conv': {
    intro: 'Convert currency amounts manually using custom exchange rates for travel, remittances, or international trade.',
    howItWorks: 'Multiplies foreign currency amount by exchange rate. Formula: Converted = Amount × Rate.',
    workedExample: 'Converting 500 US Dollars to Pakistani Rupees at an exchange rate of PKR 278 per USD yields PKR 139,000.',
    faqs: [
      { q: 'Are market exchange rates volatile?', a: 'Yes, exchange rates fluctuate continuously throughout business days.' },
      { q: 'Do banks charge conversion fees?', a: 'Banks and exchange companies add a spread or commission fee.' },
      { q: 'Where do official rates come from?', a: 'State Bank of Pakistan (SBP) publishes daily interbank closing rates.' },
      { q: 'Is open market rate different?', a: 'Open market rates can differ slightly from interbank rates.' }
    ],
    whoUses: 'Who uses this: Travelers, importers, freelancers, and remittance recipients.'
  },
  'profit-margin-calc': {
    intro: 'Calculate gross and net profit margins on retail or wholesale products to ensure profitable pricing.',
    howItWorks: 'Divides gross profit by revenue. Formula: Margin (%) = [(Revenue - Cost) / Revenue] × 100.',
    workedExample: 'Selling a product for PKR 1,000 that cost PKR 700 yields a gross profit of PKR 300, resulting in a 30% profit margin.',
    faqs: [
      { q: 'What is markup vs margin?', a: 'Markup is based on cost; margin is based on selling price.' },
      { q: 'What is a healthy retail margin?', a: 'Typically 30% to 50% depending on industry.' },
      { q: 'Does margin include overheads?', a: 'Gross margin does not; net profit margin does.' },
      { q: 'How do I set price with desired margin?', a: 'Price = Cost / (1 - Desired Margin).' }
    ],
    whoUses: 'Who uses this: E-commerce sellers, merchants, and business owners.'
  },
  'finance-fbr-tax': {
    intro: 'Estimate your annual income tax liability based on current Federal Board of Revenue (FBR) salary tax slabs in Pakistan.',
    howItWorks: 'Applies progressive tax brackets based on taxable annual salary income.',
    workedExample: 'Entering an annual taxable salary of PKR 2,400,000 outputs PKR 230,000 / year in annual FBR income tax (Monthly Tax Deduction: PKR 19,167).',
    faqs: [
      { q: 'Are non-filers taxed higher?', a: 'FBR levies withholding taxes at higher rates for non-active taxpayers.' },
      { q: 'How do I become a filer?', a: 'Register on the IRIS portal and file annual income tax returns.' },
      { q: 'Can I claim tax rebates?', a: 'Tax credits are available for full-time teachers, researchers, and charitable donations.' },
      { q: 'When is the filing deadline?', a: 'Typically September 30th each year unless extended by FBR.' }
    ],
    whoUses: 'Who uses this: Taxpayers, salaried employees, accountants, and consultants.'
  },
  'finance-car-lease': {
    intro: 'Calculate monthly rental lease installments for vehicle financing through commercial banks in Pakistan.',
    howItWorks: 'Computes monthly lease payments based on car price, security deposit percentage, insurance, and KIBOR markup.',
    workedExample: 'Leasing a car priced at PKR 4,000,000 with a PKR 1,200,000 down payment (Total Financed Amount: PKR 2,800,000) at 18% annual markup over 3 years outputs PKR 101,227 / month.',
    faqs: [
      { q: 'Is insurance included in lease rentals?', a: 'Comprehensive car insurance is usually bundled into monthly lease payments.' },
      { q: 'What is a security deposit?', a: 'An advance equity payment refunded or adjusted at lease maturity.' },
      { q: 'Can I terminate lease early?', a: 'Yes, with early termination charges and settlement of remaining principal.' },
      { q: 'Is Islamic car financing available?', a: 'Yes, running on Musharakah or Ijarah compliant structures.' }
    ],
    whoUses: 'Who uses this: Car buyers, corporate fleets, and auto finance applicants.'
  },
  'finance-home-loan': {
    intro: 'Plan your residential property acquisition with our specialized home loan and markup calculation tool.',
    howItWorks: 'Calculates amortized housing finance payments based on property value, equity share, and markup rates.',
    workedExample: 'Financing PKR 10,000,000 for a home loan at 17% annual markup over 15 years outputs PKR 153,900 / month with a Total Payment of PKR 27,702,077.',
    faqs: [
      { q: 'What is the maximum loan tenure?', a: 'Banks in Pakistan offer housing loans up to 20 or 25 years.' },
      { q: 'Is mortgage insurance mandatory?', a: 'Life and property insurance are standard requirements.' },
      { q: 'What is Mera Pakistan Mera Ghar scheme?', a: 'Government-subsidized low-cost housing finance scheme.' },
      { q: 'Can overseas Pakistanis apply?', a: 'Yes, specialized Roshan Digital Accounts facilitate overseas property financing.' }
    ],
    whoUses: 'Who uses this: Home seekers, overseas Pakistanis, and real estate developers.'
  },
  'finance-mutual-fund': {
    intro: 'Estimate future returns on open-end mutual fund investments across equity, income, or money market funds.',
    howItWorks: 'Projects investment growth using expected annual return rates and SIP (Systematic Investment Plan) contributions.',
    workedExample: 'Starting with PKR 0 initial investment and contributing a PKR 10,000 monthly SIP at a 20% expected annual return for 5 years outputs PKR 1,034,542 (Total Invested: PKR 600,000 | Profit: PKR 434,542).',
    faqs: [
      { q: 'Are mutual funds risk-free?', a: 'No, equity funds carry market risk while money market funds are low risk.' },
      { q: 'What is a Systematic Investment Plan (SIP)?', a: 'Investing a fixed amount regularly regardless of market conditions (Rupee Cost Averaging).' },
      { q: 'Who regulates mutual funds in Pakistan?', a: 'Securities and Exchange Commission of Pakistan (SECP).' },
      { q: 'Can I withdraw anytime?', a: 'Yes, open-end funds allow redemption within 2-3 business days.' }
    ],
    whoUses: 'Who uses this: Mutual fund investors, wealth builders, and retail savers.'
  },
  'finance-fixed-deposit': {
    intro: 'Calculate maturity payout and profit earned on bank Fixed Deposit Receipts (FDR) or Term Deposit Receipts.',
    howItWorks: 'Multiplies principal by profit rate and tenure. Formula accounts for monthly or semi-annual profit payouts.',
    workedExample: 'Investing PKR 1,000,000 in a 1-year fixed deposit at 15% annual profit yields PKR 150,000 in total return.',
    faqs: [
      { q: 'Is withholding tax deducted on profits?', a: 'Yes, withholding tax is deducted on bank profits (higher for non-filers).' },
      { q: 'Can I break a fixed deposit early?', a: 'Early encashment usually incurs a penalty or lower profit rate.' },
      { q: 'Are Islamic term deposits different?', a: 'Islamic banks offer halal profit based on Mudarabah or Wakalah pools.' },
      { q: 'Is principal secure?', a: 'Deposits with scheduled banks are secure and regulated.' }
    ],
    whoUses: 'Who uses this: Conservative savers, retirees, and fixed-income earners.'
  },
  'finance-national-savings': {
    intro: 'Calculate estimated returns on Pakistan National Savings schemes such as Behbood, Defence Savings, or Regular Income Certificates.',
    howItWorks: 'Computes government-backed profit payouts based on prevailing National Savings Directorate rates.',
    workedExample: 'Investing PKR 500,000 in a National Savings scheme at a 14% annual profit rate outputs PKR 5,833 / month (Annual Profit: PKR 70,000).',
    faqs: [
      { q: 'Who can invest in Behbood Savings Certificates?', a: 'Senior citizens aged 60+ and widows.' },
      { q: 'Are National Savings secure?', a: 'Yes, they are backed directly by the Government of Pakistan.' },
      { q: 'Are profits taxable?', a: 'Certain schemes have tax exemptions, while others are subject to withholding tax.' },
      { q: 'Can certificates be pledged for bank loans?', a: 'Generally no, transferability is restricted.' }
    ],
    whoUses: 'Who uses this: Pensioners, senior citizens, and risk-averse investors.'
  },
  'finance-gold-val': {
    intro: 'Calculate the total market valuation of gold jewelry, bullion, or biscuits based on current per tola or per gram rates in Pakistan.',
    howItWorks: 'Multiplies gold weight by purity factor and current market rate. Formula: Value = Weight × Rate.',
    workedExample: 'Valuing 2 tolas of 24k gold when the market rate is PKR 240,000 per tola gives a total value of PKR 480,000.',
    faqs: [
      { q: 'What is the weight of 1 tola in grams?', a: '1 tola equals exactly 11.664 grams.' },
      { q: 'What is 21k vs 24k gold?', a: '24k is 99.9% pure gold; 21k is 87.5% pure alloy.' },
      { q: 'Do jewelers deduct making charges on resale?', a: 'Yes, jewelers deduct wastage and making charges when buying back jewelry.' },
      { q: 'Is gold a good hedge against inflation?', a: 'Traditionally, gold protects purchasing power against currency depreciation.' }
    ],
    whoUses: 'Who uses this: Gold investors, jewelers, wedding planners, and asset holders.'
  },
  'finance-cash-counter': {
    intro: 'Count and tally currency notes across different denominations quickly and accurately during cash drawer balancing.',
    howItWorks: 'Multiplies note count of each denomination (PKR 5000, 1000, 500, etc.) and sums them up.',
    workedExample: 'Ten PKR 5,000 notes and twenty PKR 1,000 notes total PKR 50,000 + PKR 20,000 = PKR 70,000.',
    faqs: [
      { q: 'Is this useful for daily shop closing?', a: 'Yes, it eliminates manual addition errors during cash drawer tallying.' },
      { q: 'Are coin denominations supported?', a: 'Most counters focus on paper currency notes.' },
      { q: 'How do I spot counterfeit notes?', a: 'Check security threads and watermarks manually.' },
      { q: 'Can I save my count total?', a: 'You can copy the result for your daily ledger.' }
    ],
    whoUses: 'Who uses this: Cashiers, shopkeepers, accountants, and bank tellers.'
  },
  'finance-inflation': {
    intro: 'Calculate how inflation erodes purchasing power over time and determine future costs of goods and services.',
    howItWorks: 'Projects future value using average annual inflation rate. Formula: Future Cost = Present Cost × (1 + Inflation%)^Years.',
    workedExample: 'With an annual inflation rate of 10%, an expense costing PKR 100,000 today will cost approximately PKR 161,051 in 5 years.',
    faqs: [
      { q: 'What is CPI?', a: 'Consumer Price Index measures average change in prices of a basket of consumer goods.' },
      { q: 'How does inflation affect savings?', a: 'If your bank profit rate is lower than inflation, your real wealth decreases.' },
      { q: 'Why is inflation high sometimes?', a: 'Supply chain shocks, currency devaluation, and fiscal deficits.' },
      { q: 'Can investments beat inflation?', a: 'Equity stocks and real estate historically outpace inflation.' }
    ],
    whoUses: 'Who uses this: Financial planners, retirees, economists, and budgeters.'
  },
  'finance-cagr': {
    intro: 'Calculate Compound Annual Growth Rate (CAGR) to measure smoothed investment performance over multi-year periods.',
    howItWorks: 'Formula: CAGR = (Ending Value / Beginning Value)^(1 / Years) - 1.',
    workedExample: 'An investment growing from PKR 100,000 to PKR 250,000 over 4 years yields a CAGR of approximately 25.74% per year.',
    faqs: [
      { q: 'Why use CAGR instead of average return?', a: 'CAGR accounts for compounding volatility and gives accurate geometric growth.' },
      { q: 'Can CAGR be negative?', a: 'Yes, if your ending portfolio value is less than your starting value.' },
      { q: 'Is CAGR applicable to crypto and stocks?', a: 'Yes, for measuring historical asset growth.' },
      { q: 'Does CAGR show year-by-year volatility?', a: 'No, it smooths out ups and downs.' }
    ],
    whoUses: 'Who uses this: Stock investors, fund managers, and financial analysts.'
  },
  'finance-retirement': {
    intro: 'Estimate your retirement corpus requirement and monthly pension potential to secure your golden years.',
    howItWorks: 'Projects retirement savings needs based on current age, retirement age, life expectancy, and post-retirement expenses.',
    workedExample: 'With PKR 2,000,000 in current savings and PKR 50,000 added monthly at a 15% annual return over 20 years, the accumulated retirement fund outputs PKR 115,228,736.',
    faqs: [
      { q: 'When should I start saving for retirement?', a: 'As early as possible to maximize compounding benefits.' },
      { q: 'What is the 4% rule?', a: 'A retirement guideline suggesting you can withdraw 4% of your portfolio annually.' },
      { q: 'Are pensions taxable in Pakistan?', a: 'Government pensions are generally tax-exempt.' },
      { q: 'How does inflation impact retirement?', a: 'You need significantly larger funds to maintain lifestyle decades from now.' }
    ],
    whoUses: 'Who uses this: Working professionals, retirement planners, and individuals.'
  },
  'fin-net-worth': {
    intro: 'Calculate your personal or family net worth by subtracting total liabilities from total assets.',
    howItWorks: 'Net Worth = Total Assets (cash, property, investments) - Total Liabilities (loans, credit card debt, mortgages).',
    workedExample: 'Having assets worth PKR 20,000,000 and total liabilities of PKR 5,000,000 gives a net worth of PKR 15,000,000.',
    faqs: [
      { q: 'How often should I calculate net worth?', a: 'Annually or semi-annually to track financial health progress.' },
      { q: 'Should I include personal vehicles?', a: 'Vehicles depreciate, but current market resale value can be included.' },
      { q: 'Is positive net worth enough?', a: 'Liquidity matters just as much as total asset valuation.' },
      { q: 'How do I increase net worth?', a: 'Save more, invest wisely, and pay down high-interest debt.' }
    ],
    whoUses: 'Who uses this: Individuals, high-net-worth clients, and loan applicants.'
  },
  'fin-dividend-yield': {
    intro: 'Calculate stock dividend yield to evaluate cash return generated from share price investments.',
    howItWorks: 'Formula: Dividend Yield (%) = (Annual Dividend per Share / Stock Price) × 100.',
    workedExample: 'If a stock trades at PKR 200 per share and pays an annual dividend of PKR 16 per share, its dividend yield is 8%.',
    faqs: [
      { q: 'Are high dividend yields always good?', a: 'Not necessarily; exceptionally high yields can indicate a distressed stock price (value trap).' },
      { q: 'How often are dividends paid in Pakistan?', a: 'Usually annually, semi-annually, or quarterly.' },
      { q: 'Are cash dividends taxed?', a: 'Yes, companies deduct withholding tax on dividend payouts.' },
      { q: 'What is dividend payout ratio?', a: 'Percentage of net income paid out as dividends.' }
    ],
    whoUses: 'Who uses this: Equity investors, dividend income seekers, and stock traders.'
  },
  'fin-debt-payoff': {
    intro: 'Estimate time and interest saved when deploying debt snowball or debt avalanche repayment strategies.',
    howItWorks: 'Calculates loan clearance timeline when applying extra monthly budget toward principal reduction.',
    workedExample: 'For a PKR 400,000 balance at 20% annual interest rate with PKR 15,000 extra monthly payment (Total monthly installment: PKR 35,000), the calculator outputs ~13 Months to Payoff.',
    faqs: [
      { q: 'What is debt snowball?', a: 'Paying off debts from smallest balance to largest for psychological momentum.' },
      { q: 'What is debt avalanche?', a: 'Paying off debts from highest interest rate to lowest to minimize total interest paid.' },
      { q: 'Should I stop investing while paying debt?', a: 'Focusing on high-interest debt first is generally recommended.' },
      { q: 'Can banks offer debt consolidation?', a: 'Yes, combining multiple loans into one lower-rate personal loan.' }
    ],
    whoUses: 'Who uses this: Debt-conscious individuals, budgeters, and financial coaches.'
  },

  // --- BUSINESS ---
  'business-break-even': {
    intro: 'Calculate your exact break-even point in units and sales revenue to know when your business covers all costs.',
    howItWorks: 'Formula: Break-Even Units = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit).',
    workedExample: 'With fixed costs of PKR 500,000, selling price of PKR 1,000 per unit, and variable cost of PKR 600 per unit, you need to sell 1,250 units to break even.',
    faqs: [
      { q: 'What are fixed costs?', a: 'Expenses that do not change with production volume, such as rent and salaries.' },
      { q: 'What are variable costs?', a: 'Costs that scale directly with production, such as raw materials and packaging.' },
      { q: 'Can break-even be calculated in revenue?', a: 'Yes, multiply break-even units by selling price.' },
      { q: 'Why is break-even analysis important?', a: 'It establishes minimum sales targets required to avoid operating losses.' }
    ],
    whoUses: 'Who uses this: Startup founders, manufacturers, restaurant owners, and business planners.'
  },
  'product-markup-calc': {
    intro: 'Determine selling prices by applying percentage markups over product manufacturing or wholesale costs.',
    howItWorks: 'Formula: Selling Price = Cost × (1 + Markup% / 100).',
    workedExample: 'A product costing PKR 2,000 with a 50% markup has a calculated retail selling price of PKR 3,000.',
    faqs: [
      { q: 'What is markup vs margin?', a: 'Markup is percentage added to cost; margin is percentage of selling price.' },
      { q: 'How do I markup 100%?', a: 'Doubling the cost price represents a 100% markup.' },
      { q: 'Does markup cover overhead?', a: 'Markup should be high enough to cover operating expenses and net profit.' },
      { q: 'Can markup be negative?', a: 'Only if selling below cost (clearance sale).' }
    ],
    whoUses: 'Who uses this: Wholesalers, retailers, e-commerce sellers, and merchandisers.'
  },
  'business-roi-calc': {
    intro: 'Evaluate capital expenditure returns and commercial project profitability for corporate decision making.',
    howItWorks: 'Formula: ROI = (Net Profit / Total Investment Cost) × 100.',
    workedExample: 'Generating PKR 350,000 in net profit on an investment of PKR 1,000,000 outputs a 35.00% ROI.',
    faqs: [
      { q: 'How does business ROI differ from personal ROI?', a: 'Business ROI often factors in depreciation, tax shields, and working capital.' },
      { q: 'What is Payback Period?', a: 'Time required to recover initial investment cost.' },
      { q: 'Is ROI the only metric to use?', a: 'No, combine with Net Present Value (NPV) and Internal Rate of Return (IRR).' },
      { q: 'Can marketing campaigns be measured with ROI?', a: 'Yes, return on ad spend (ROAS) measures marketing ROI.' }
    ],
    whoUses: 'Who uses this: Corporate executives, financial directors, and investors.'
  },
  'sales-commission-calc': {
    intro: 'Calculate sales agent commissions, tiered bonuses, and sales representative incentive payouts.',
    howItWorks: 'Multiplies total sales volume by agreed commission percentage rate. Formula: Commission = Sales × (Rate%).',
    workedExample: 'A sales rep achieving PKR 2,500,000 in monthly sales at a 5% commission rate earns PKR 125,000 in commission.',
    faqs: [
      { q: 'What is tiered commission?', a: 'Higher commission percentages unlocked upon reaching higher sales milestones.' },
      { q: 'Is commission calculated on gross or net sales?', a: 'Depends on company policy (usually gross revenue).' },
      { q: 'Are commissions subject to withholding tax?', a: 'Yes, companies deduct withholding tax on commission payments.' },
      { q: 'Can commission be based on gross profit?', a: 'Yes, profit-sharing commission incentivizes high-margin sales.' }
    ],
    whoUses: 'Who uses this: Sales managers, real estate agents, insurance brokers, and business owners.'
  },
  'cost-per-unit-calc': {
    intro: 'Calculate exact unit production costs by dividing total fixed and variable manufacturing expenses by total units produced.',
    howItWorks: 'Formula: Cost per Unit = (Total Fixed Costs + Total Variable Costs) / Units Produced.',
    workedExample: 'Producing 5,000 units with total monthly expenses of PKR 500,000 results in a unit cost of PKR 100.',
    faqs: [
      { q: 'Why does unit cost decrease with scale?', a: 'Fixed costs are distributed across a larger volume of units (economies of scale).' },
      { q: 'Should I include marketing in unit cost?', a: 'Direct production costs are primary; overheads can be allocated proportionally.' },
      { q: 'How does unit cost guide pricing?', a: 'Your selling price must comfortably exceed unit cost for profitability.' },
      { q: 'What if production volume fluctuates?', a: 'Fixed cost per unit changes whenever production volume changes.' }
    ],
    whoUses: 'Who uses this: Manufacturers, factory managers, and cost accountants.'
  },
  'sales-target-calc': {
    intro: 'Set monthly or annual revenue targets for sales teams based on business growth objectives and historical performance.',
    howItWorks: 'Calculates required daily or monthly sales velocity to hit annual revenue goals.',
    workedExample: 'Targeting PKR 3,000,000 in revenue over 25 working days outputs a required daily sales target of PKR 120,000 / day.',
    faqs: [
      { q: 'Should targets be stretched or realistic?', a: 'Achievable stretch targets motivate sales teams without causing burnout.' },
      { q: 'How do seasonal trends affect targets?', a: 'Allocate higher targets during peak shopping seasons (e.g., Eid shopping in Pakistan).' },
      { q: 'Can sales targets be tracked daily?', a: 'Yes, daily run-rate tracking ensures teams stay on track.' },
      { q: 'What if targets are missed consistently?', a: 'Review pricing, marketing strategy, or sales team training.' }
    ],
    whoUses: 'Who uses this: Sales directors, business development managers, and entrepreneurs.'
  },
  'inventory-reorder-calc': {
    intro: 'Calculate exact inventory reorder points to prevent stockouts while avoiding excess warehouse holding costs.',
    howItWorks: 'Formula: Reorder Point = (Average Daily Usage × Lead Time in Days) + Safety Stock.',
    workedExample: 'Selling 20 units daily with a 5-day supplier lead time and safety stock of 30 units gives a reorder point of 130 units.',
    faqs: [
      { q: 'What is lead time?', a: 'The time elapsed between placing an order with a supplier and receiving the stock.' },
      { q: 'Why keep safety stock?', a: 'To buffer against unexpected demand surges or delivery delays.' },
      { q: 'What is Economic Order Quantity (EOQ)?', a: 'The optimal order quantity that minimizes total inventory holding and ordering costs.' },
      { q: 'How does inventory turnover affect cash flow?', a: 'Faster inventory turnover frees up working capital.' }
    ],
    whoUses: 'Who uses this: Inventory managers, warehouse supervisors, and retail operators.'
  },
  'overtime-pay-calc': {
    intro: 'Calculate employee overtime compensation accurately based on standard hourly wages and overtime multipliers (e.g., 1.5x or 2x).',
    howItWorks: 'Formula: Overtime Pay = Overtime Hours × Regular Hourly Rate × Overtime Multiplier.',
    workedExample: 'Working 10 overtime hours at a regular rate of PKR 500/hr with a 1.5x multiplier yields PKR 7,500 in overtime pay.',
    faqs: [
      { q: 'What is standard overtime rate in Pakistan?', a: 'Labor laws often stipulate 1.5x to 2x regular hourly rates for hours beyond standard 48-hour workweeks.' },
      { q: 'Is overtime taxable?', a: 'Yes, overtime earnings are part of gross taxable salary.' },
      { q: 'Are salaried staff eligible for overtime?', a: 'Depends on company policy and employment contract terms.' },
      { q: 'How do I calculate regular hourly rate?', a: 'Divide monthly salary by standard monthly working hours (approx 160-200 hours).' }
    ],
    whoUses: 'Who uses this: Payroll administrators, HR managers, and employees.'
  },
  'business-profit-margin-calc': {
    intro: 'Analyze gross, operating, and net profit margins to evaluate overall business financial health.',
    howItWorks: 'Divides profit metric by total revenue. Formula: Net Profit Margin = (Net Income / Revenue) × 100.',
    workedExample: 'A business generating PKR 5,000,000 in revenue with PKR 4,250,000 in COGS (Gross Profit: PKR 750,000) outputs a 15.00% Profit Margin.',
    faqs: [
      { q: 'What is operating margin?', a: 'Profitability after subtracting operating expenses but before interest and taxes (EBIT).' },
      { q: 'Why is net margin important?', a: 'It reveals actual bottom-line profitability kept by owners.' },
      { q: 'What constitutes a good profit margin?', a: 'Varies widely; software businesses have high margins, grocery stores have low margins.' },
      { q: 'How can margins be improved?', a: 'Increase prices, reduce cost of goods sold, or streamline overhead.' }
    ],
    whoUses: 'Who uses this: Business owners, CFOs, investors, and analysts.'
  },
  'business-discount-calc': {
    intro: 'Calculate bulk purchase discounts, trade discounts, and promotional price cuts for commercial B2B transactions.',
    howItWorks: 'Formula: Discounted Price = List Price × (1 - Trade Discount%).',
    workedExample: 'A wholesale order listed at PKR 500,000 with a negotiated 12% B2B volume discount reduces total cost by PKR 60,000 to PKR 440,000.',
    faqs: [
      { q: 'What is a trade discount?', a: 'A price reduction offered to channel partners or bulk buyers.' },
      { q: 'How do cash discounts work (e.g. 2/10 net 30)?', a: '2% discount if paid within 10 days; otherwise full amount due in 30 days.' },
      { q: 'Are discounts subject to sales tax?', a: 'Sales tax is calculated on the net discounted invoice price.' },
      { q: 'Can multiple discounts be combined?', a: 'Chain discounts are applied sequentially, not added together.' }
    ],
    whoUses: 'Who uses this: Procurement officers, sales reps, and wholesale traders.'
  },
  'business-sales-tax-calc': {
    intro: 'Compute comprehensive sales tax and withholding tax liabilities for business invoices and commercial transactions.',
    howItWorks: 'Applies applicable provincial or federal tax rates to taxable commercial billing amounts.',
    workedExample: 'Calculating 18% sales tax on a commercial invoice subtotal of PKR 1,000,000 outputs PKR 1,180,000 total (Tax Amount: PKR 180,000 @ 18%).',
    faqs: [
      { q: 'What is withholding tax?', a: 'Tax deducted at source by the buyer when paying supplier invoices.' },
      { q: 'Are service providers required to register with SRB/FBR?', a: 'Yes, withholding agents must verify active taxpayer status.' },
      { q: 'What is input vs output tax?', a: 'Input tax is tax paid on business purchases; output tax is tax collected on sales.' },
      { q: 'When must sales tax be filed?', a: 'Monthly filing is standard for registered sales tax entities.' }
    ],
    whoUses: 'Who uses this: Corporate accountants, tax consultants, and business owners.'
  },
  'business-salary-to-hourly': {
    intro: 'Convert annual or monthly salaries into equivalent hourly wage rates for budgeting and part-time contracting.',
    howItWorks: 'Formula: Hourly Rate = Annual Salary / (Weeks Worked × Weekly Hours).',
    workedExample: 'A monthly salary of PKR 120,000 across 160 working hours per month outputs PKR 750.00 / hour.',
    faqs: [
      { q: 'How many working hours in a standard year?', a: 'Approximately 2,080 hours (40 hours × 52 weeks).' },
      { q: 'Does salary include benefits?', a: 'Base salary conversion does not automatically include medical or bonuses.' },
      { q: 'Why convert salary to hourly?', a: 'Useful for evaluating freelance gigs or contractor proposals.' },
      { q: 'Are Pakistani salaried workers paid hourly?', a: 'Most full-time office jobs use monthly salary structures.' }
    ],
    whoUses: 'Who uses this: Freelancers, HR recruiters, contractors, and job seekers.'
  },
  'business-invoice-total': {
    intro: 'Calculate grand total invoice amounts including subtotal, shipping fees, sales tax, and applied discounts.',
    howItWorks: 'Formula: Invoice Total = (Subtotal - Discount) + Shipping + Sales Tax.',
    workedExample: 'An invoice with a PKR 50,000 subtotal, 18% sales tax (PKR 9,000), and PKR 1,500 shipping outputs a final payable total of PKR 60,500.',
    faqs: [
      { q: 'In what order should discounts and taxes be applied?', a: 'Discount is subtracted from subtotal first, then sales tax is added to the discounted subtotal.' },
      { q: 'Should shipping be taxed?', a: 'Depends on local tax regulations regarding freight charges.' },
      { q: 'What is a proforma invoice?', a: 'A preliminary bill sent before shipment to confirm order details.' },
      { q: 'How long are payment terms?', a: 'Common terms are Net 30 or Net 60 days.' }
    ],
    whoUses: 'Who uses this: Billing clerks, freelancers, small business owners, and vendors.'
  },
  'business-cash-flow': {
    intro: 'Track operating, investing, and financing cash inflows and outflows to maintain healthy business liquidity.',
    howItWorks: 'Formula: Net Cash Flow = Total Cash Inflows - Total Cash Outflows.',
    workedExample: 'With monthly cash inflows of PKR 3,000,000 and cash outflows of PKR 2,400,000, your net operating cash flow is PKR 600,000.',
    faqs: [
      { q: 'What is the difference between profit and cash flow?', a: 'Profit is accounting revenue minus expenses; cash flow is actual cash moving in and out.' },
      { q: 'Why do profitable businesses fail?', a: 'Lack of liquidity (insolvency) when customers delay payments while expenses remain due.' },
      { q: 'What is operating cash flow?', a: 'Cash generated from core business operations.' },
      { q: 'How can I improve cash flow?', a: 'Collect receivables faster, negotiate longer supplier payment terms.' }
    ],
    whoUses: 'Who uses this: CFOs, business owners, accountants, and financial controllers.'
  },
  'business-net-profit': {
    intro: 'Calculate true bottom-line net profit after deducting all operating expenses, interest, taxes, and overheads.',
    howItWorks: 'Formula: Net Profit = Total Revenue - Total Expenses (COGS + Operating Expenses + Interest + Taxes).',
    workedExample: 'Total revenue of PKR 10,000,000 minus total expenses of PKR 7,500,000 leaves a net profit of PKR 2,500,000.',
    faqs: [
      { q: 'What is Gross Profit vs Net Profit?', a: 'Gross profit subtracts only cost of goods sold; net profit subtracts all business expenses.' },
      { q: 'Is net profit the same as taxable income?', a: 'Almost, though certain accounting adjustments and tax deductions may apply.' },
      { q: 'Can net profit be reinvested?', a: 'Yes, as retained earnings to fund business expansion.' },
      { q: 'Why is net profit critical?', a: 'It reflects true commercial viability and shareholder wealth creation.' }
    ],
    whoUses: 'Who uses this: Entrepreneurs, shareholders, tax auditors, and corporate managers.'
  },
  'biz-operating-margin': {
    intro: 'Calculate operating profit margin to evaluate core business profitability before interest and taxes.',
    howItWorks: 'Formula: Operating Margin = (Operating Income / Revenue) × 100, where Operating Income = Gross Profit - Operating Expenses.',
    workedExample: 'Generating PKR 8,000,000 in revenue with PKR 2,000,000 in operating income yields a 25% operating margin.',
    faqs: [
      { q: 'What is EBIT?', a: 'Earnings Before Interest and Taxes, equivalent to operating income.' },
      { q: 'Why exclude interest and taxes?', a: 'To evaluate management efficiency in running core operations.' },
      { q: 'What is a strong operating margin?', a: 'Generally 15% or higher is considered healthy across many industries.' },
      { q: 'How does debt affect operating margin?', a: 'Interest expense is excluded, so debt does not impact operating margin directly.' }
    ],
    whoUses: 'Who uses this: Financial analysts, equity researchers, and corporate executives.'
  },
  'biz-ebitda': {
    intro: 'Calculate EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) to measure raw operational profitability.',
    howItWorks: 'Formula: EBITDA = Net Income + Interest + Taxes + Depreciation + Amortization.',
    workedExample: 'A company with net income of PKR 4,000,000, interest of PKR 500,000, taxes of PKR 1,000,000, and depreciation of PKR 500,000 has an EBITDA of PKR 6,000,000.',
    faqs: [
      { q: 'Why is EBITDA popular in M&A?', a: 'It normalizes profitability across companies with different capital structures and tax brackets.' },
      { q: 'Does EBITDA show cash flow?', a: 'Not entirely, but it serves as a proxy for cash earnings from operations.' },
      { q: 'Is EBITDA mandated by GAAP or IFRS?', a: 'No, it is a non-GAAP financial metric.' },
      { q: 'What are non-cash expenses?', a: 'Depreciation and amortization do not involve actual cash outflows.' }
    ],
    whoUses: 'Who uses this: Private equity investors, business buyers, and corporate finance teams.'
  },
  'biz-cac': {
    intro: 'Calculate Customer Acquisition Cost (CAC) to measure total sales and marketing expenses required to win a new customer.',
    howItWorks: 'Formula: CAC = Total Sales & Marketing Spend / Number of New Customers Acquired.',
    workedExample: 'Spending PKR 500,000 on marketing campaigns that successfully acquire 200 new customers results in a CAC of PKR 2,500 per customer.',
    faqs: [
      { q: 'Why is CAC important?', a: 'When compared against LTV (Lifetime Value), it determines customer profitability.' },
      { q: 'Should salaries of sales reps be included in CAC?', a: 'Yes, all direct marketing and sales overhead expenses should be included.' },
      { q: 'What is a good LTV to CAC ratio?', a: 'A 3:1 ratio or higher is widely considered healthy in business.' },
      { q: 'How can CAC be reduced?', a: 'Improve conversion rates, leverage organic marketing, and optimize ad spend.' }
    ],
    whoUses: 'Who uses this: Growth marketers, startup founders, and CMOs.'
  },
  'biz-ltv': {
    intro: 'Estimate Customer Lifetime Value (LTV) to project total gross revenue a business expects from a single customer relationship.',
    howItWorks: 'Formula: LTV = Average Purchase Value × Purchase Frequency × Customer Lifespan.',
    workedExample: 'A customer spending PKR 3,000 per purchase, buying 4 times a year, and staying active for 3 years yields an LTV of PKR 36,000.',
    faqs: [
      { q: 'How does LTV guide marketing budgets?', a: 'You can afford to spend up to your LTV threshold in acquisition costs (keeping margins in mind).' },
      { q: 'Can LTV be calculated using gross margin?', a: 'Yes, Gross Margin LTV gives a more accurate profit-based view.' },
      { q: 'How do you increase customer lifespan?', a: 'Enhance customer service, loyalty programs, and product quality.' },
      { q: 'Why is retention cheaper than acquisition?', a: 'Acquiring new customers costs significantly more than retaining existing ones.' }
    ],
    whoUses: 'Who uses this: Subscription businesses, SaaS companies, and retail strategists.'
  },
  'biz-working-capital': {
    intro: 'Calculate Working Capital to assess short-term financial health and operational liquidity.',
    howItWorks: 'Formula: Working Capital = Current Assets - Current Liabilities.',
    workedExample: 'Having current assets of PKR 8,000,000 and current liabilities of PKR 5,000,000 leaves a positive working capital of PKR 3,000,000.',
    faqs: [
      { q: 'What are current assets?', a: 'Cash, inventory, and accounts receivable expected to be converted to cash within 1 year.' },
      { q: 'What are current liabilities?', a: 'Debts and accounts payable due within 1 year.' },
      { q: 'Is negative working capital always bad?', a: 'Not necessarily in retail where customers pay upfront before suppliers are paid.' },
      { q: 'How do you fund working capital deficits?', a: 'Short-term bank loans, overdraft facilities, or equity injection.' }
    ],
    whoUses: 'Who uses this: Corporate treasurers, bankers, and financial controllers.'
  },
  'biz-quick-ratio': {
    intro: 'Calculate the Quick Ratio (Acid-Test Ratio) to measure ability to pay short-term obligations without relying on inventory sales.',
    howItWorks: 'Formula: Quick Ratio = (Cash + Marketable Securities + Accounts Receivable) / Current Liabilities.',
    workedExample: 'With PKR 2,000,000 in cash and PKR 3,000,000 in receivables against PKR 4,000,000 in current liabilities, your quick ratio is 1.25.',
    faqs: [
      { q: 'Why exclude inventory from quick ratio?', a: 'Inventory can take time to liquidate, whereas cash and receivables are immediate.' },
      { q: 'What is a benchmark quick ratio?', a: 'A ratio of 1.0 or higher indicates strong short-term liquidity.' },
      { q: 'How does it differ from current ratio?', a: 'Current ratio includes inventory; quick ratio excludes inventory.' },
      { q: 'Can a low quick ratio cause bankruptcy?', a: 'Yes, if short-term debts fall due and cash is unavailable.' }
    ],
    whoUses: 'Who uses this: Creditors, lenders, and financial analysts.'
  },
  'biz-debt-to-equity': {
    intro: 'Calculate the Debt-to-Equity Ratio to evaluate corporate financial leverage and risk exposure.',
    howItWorks: 'Formula: Debt-to-Equity = Total Liabilities / Total Shareholders’ Equity.',
    workedExample: 'Having total debt of PKR 15,000,000 and equity of PKR 10,000,000 results in a Debt-to-Equity ratio of 1.5.',
    faqs: [
      { q: 'What does a high D/E ratio mean?', a: 'The company is heavily financed by debt, carrying higher financial risk.' },
      { q: 'What is a good D/E ratio?', a: 'Varies by industry; capital-intensive sectors tolerate higher ratios (e.g., 2.0).' },
      { q: 'Does debt help boost returns?', a: 'Yes, financial leverage can magnify equity returns when business is profitable.' },
      { q: 'How do banks view high leverage?', a: 'Banks may charge higher markup rates or deny credit if leverage is excessive.' }
    ],
    whoUses: 'Who uses this: Lenders, investors, credit rating agencies, and CFOs.'
  },
  'biz-employee-turnover': {
    intro: 'Calculate employee turnover rate to measure workforce stability and staff retention efficiency.',
    howItWorks: 'Formula: Turnover Rate (%) = (Number of Employees Left / Average Number of Employees) × 100.',
    workedExample: 'If 10 employees leave during a year with an average workforce of 100 employees, the annual turnover rate is 10%.',
    faqs: [
      { q: 'Why is high turnover costly?', a: 'Recruitment, onboarding, training, and lost productivity drain resources.' },
      { q: 'What is a normal turnover rate?', a: 'Typically 10% to 15% across many industries, though higher in tech and retail.' },
      { q: 'How can employee retention be improved?', a: 'Competitive salaries, career growth opportunities, and positive workplace culture.' },
      { q: 'Is voluntary vs involuntary turnover different?', a: 'Voluntary means employees quit; involuntary means layoffs or termination.' }
    ],
    whoUses: 'Who uses this: HR directors, talent acquisition managers, and business leaders.'
  },
  'biz-payback-period': {
    intro: 'Calculate the payback period to determine how many months or years are needed to recover initial capital investment.',
    howItWorks: 'Formula: Payback Period = Initial Investment / Annual Cash Inflow.',
    workedExample: 'Investing PKR 2,000,000 in a project generating PKR 500,000 in annual cash flow results in a payback period of 4 years.',
    faqs: [
      { q: 'Does payback period account for time value of money?', a: 'Traditional payback does not; discounted payback period accounts for interest rates.' },
      { q: 'Is a shorter payback better?', a: 'Yes, shorter payback reduces liquidity risk and capital exposure.' },
      { q: 'What are limitations of payback?', a: 'It ignores cash flows generated after the payback milestone is reached.' },
      { q: 'Can payback be used for small businesses?', a: 'Yes, it is widely used by small business owners for quick project screening.' }
    ],
    whoUses: 'Who uses this: Capital budgeters, project managers, and investors.'
  },
  'biz-eoq': {
    intro: 'Calculate Economic Order Quantity (EOQ) to determine optimal inventory order size that minimizes total inventory costs.',
    howItWorks: 'Formula: EOQ = √[(2 × Annual Demand × Ordering Cost) / Holding Cost per Unit].',
    workedExample: 'With annual demand of 10,000 units, ordering cost of PKR 2,500 per order, and holding cost of PKR 50 per unit, EOQ is 1,000 units.',
    faqs: [
      { q: 'What costs are included in EOQ?', a: 'Ordering costs (shipping, paperwork) and holding costs (storage, insurance, spoilage).' },
      { q: 'Does EOQ assume constant demand?', a: 'Yes, standard EOQ assumes steady, predictable demand throughout the year.' },
      { q: 'How does bulk ordering affect holding cost?', a: 'Larger orders reduce ordering frequency but increase warehouse holding costs.' },
      { q: 'Can EOQ be used in manufacturing?', a: 'Yes, for raw material inventory replenishment.' }
    ],
    whoUses: 'Who uses this: Supply chain managers, procurement specialists, and warehouse operators.'
  },
  'biz-clv': {
    intro: 'Calculate Customer Lifetime Value (CLV) to determine total net profit generated from a customer over their entire relationship.',
    howItWorks: 'Formula: CLV = Average Purchase Value × Purchase Frequency × Customer Lifespan × Gross Margin.',
    workedExample: 'A customer with an average purchase value of PKR 2,500, buying 4 times per year (PKR 10,000 annual spend) over a 4-year lifespan outputs a CLV of PKR 40,000.',
    faqs: [
      { q: 'What is the difference between revenue LTV and profit CLV?', a: 'Revenue LTV looks at top-line spend; profit CLV factors in cost of goods sold.' },
      { q: 'Why is CLV crucial for e-commerce?', a: 'It helps determine maximum viable customer acquisition spend.' },
      { q: 'How do you maximize CLV?', a: 'Cross-selling, upselling, and exceptional customer experience.' },
      { q: 'What is churn rate impact on CLV?', a: 'Higher churn rates drastically shorten customer lifespan and reduce CLV.' }
    ],
    whoUses: 'Who uses this: E-commerce executives, marketing directors, and SaaS founders.'
  },
  'biz-churn-rate': {
    intro: 'Calculate customer churn rate to measure percentage of customers or subscribers who cancel or stop doing business.',
    howItWorks: 'Formula: Churn Rate (%) = (Customers Lost During Period / Customers at Start of Period) × 100.',
    workedExample: 'Starting the month with 500 subscribers and losing 25 subscribers results in a monthly churn rate of 5%.',
    faqs: [
      { q: 'What is a healthy churn rate?', a: 'For SaaS businesses, monthly churn under 3% to 5% is targeted.' },
      { q: 'How does churn impact growth?', a: 'High churn requires constant new customer acquisition just to stand still (leaky bucket).' },
      { q: 'What causes customer churn?', a: 'Poor product fit, lack of customer support, or aggressive competitor pricing.' },
      { q: 'How can churn be monitored?', a: 'Through customer feedback surveys, usage analytics, and exit interviews.' }
    ],
    whoUses: 'Who uses this: Customer success managers, SaaS founders, and subscription business owners.'
  },
  'biz-inventory-turnover': {
    intro: 'Calculate Inventory Turnover Ratio to measure how efficiently a company sells and replaces its stock of goods.',
    howItWorks: 'Formula: Inventory Turnover = Cost of Goods Sold (COGS) / Average Inventory Value.',
    workedExample: 'With an annual COGS of PKR 12,000,000 and average inventory of PKR 2,000,000, your inventory turnover is 6 turns per year.',
    faqs: [
      { q: 'What does high inventory turnover indicate?', a: 'Strong sales demand and efficient inventory management.' },
      { q: 'What are days to sell inventory?', a: 'Divide 365 days by inventory turnover ratio (e.g., 365 / 6 = ~61 days).' },
      { q: 'Is low turnover bad?', a: 'Low turnover ties up working capital in stagnant or obsolete stock.' },
      { q: 'How can turnover be accelerated?', a: 'Discount slow-moving items, improve demand forecasting, and optimize purchasing.' }
    ],
    whoUses: 'Who uses this: Retailers, supply chain analysts, and inventory controllers.'
  }
};
