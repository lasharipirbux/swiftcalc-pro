import { SITE_NAME } from '../config/site';

export interface FinanceCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const financeSeoFullMap: Record<string, FinanceCalculatorSeoEntry> = {
  'loan-calc': {
    seoTitle: `Free Loan & EMI Calculator – Monthly Payments & Total Cost | ${SITE_NAME}`,
    metaDescription:
      'Estimate monthly loan installments, interest costs, and total repayment in dollars with our free Loan & EMI Calculator.',
    howToUseSteps: [
      'Type the total borrowed sum into the Loan Amount ($) box.',
      'Enter the lender’s quoted yearly rate inside the Annual Interest Rate (%) field.',
      'Set your repayment duration in years inside the Loan Term (Years) input.',
      'Read the fixed monthly EMI at the top and total cumulative payout directly beneath it.',
    ],
    formulaExplanation:
      'Fixed-rate amortizing loans divide the yearly interest percentage by 12 to derive the monthly rate r and multiply the year count by 12 to obtain total installments n. Each payment covers accrued monthly interest first and reduces remaining principal over time. Formula: EMI = [P × r × (1 + r)^n] / [(1 + r)^n − 1], where P = Loan Amount ($), r = Annual Interest Rate / 1200, and n = Loan Term (Years) × 12.',
    practicalExample:
      'Borrowing Loan Amount ($) = $300,000 at Annual Interest Rate (%) = 6.5% over Loan Term (Years) = 30 years (360 months, r = 0.0054167) yields a monthly EMI of $1,896.20 / month and a Total Payment of $682,633.47.',
    faqs: [
      {
        q: 'How does switching from a 30-year to a 15-year Loan Term (Years) affect total interest?',
        a: 'Shortening the term raises the monthly EMI slightly while cutting total interest paid across the life of the loan by more than half.',
      },
      {
        q: 'What does the calculator display if Annual Interest Rate (%) is set to 0?',
        a: 'With zero interest, the tool bypasses compounding and divides Loan Amount ($) evenly across total months.',
      },
      {
        q: 'Does this EMI estimate include property taxes or origination fees?',
        a: 'No, it models pure principal and interest amortization so you can compare baseline loan offers accurately.',
      },
    ],
  },

  'compound-interest': {
    seoTitle: `Free Compound Interest Calculator – Growth With Contributions | ${SITE_NAME}`,
    metaDescription:
      'Project long-term investment growth from starting principal and monthly deposits using our free Compound Interest Calculator.',
    howToUseSteps: [
      'Enter your starting deposit in the Principal ($) field.',
      'Input your expected annual yield inside the Interest Rate (%) box.',
      'Specify how long the money stays invested in the Years field.',
      'Type your recurring deposit amount into Monthly Contribution ($) to view ending balance and earned interest.',
    ],
    formulaExplanation:
      'Compound growth adds monthly deposits at the start of each month and applies 1/12th of the annual return to the combined balance every month so prior interest earns additional returns. Formula: Month_k Balance = (Balance_(k−1) + Monthly Contribution) × (1 + Interest Rate / 1200), repeated for Years × 12 months, with Interest = Final Balance − Total Contributed.',
    practicalExample:
      'Investing Principal ($) = $15,000 at Interest Rate (%) = 8.5% for Years = 15 with Monthly Contribution ($) = $300 compounds across 180 months to a final balance of $162,744.50, including Interest: $93,744.50.',
    faqs: [
      {
        q: 'Are Monthly Contribution ($) deposits credited at the start or end of each month?',
        a: 'They are added at the beginning of each month before monthly interest is applied, slightly boosting long-term returns.',
      },
      {
        q: 'Why does Interest grow faster in later years than in early years?',
        a: 'Because each subsequent year earns percentage returns on both newly added cash and all previously accumulated interest.',
      },
      {
        q: 'Can I evaluate a lump-sum investment without recurring deposits?',
        a: 'Yes, simply type 0 into Monthly Contribution ($) to isolate pure compounding on your initial Principal ($).',
      },
    ],
  },

  'mortgage-calc': {
    seoTitle: `Free Mortgage Calculator – Home Loan Payment Estimator | ${SITE_NAME}`,
    metaDescription:
      'Compute monthly home mortgage installments after down payment deductions with this free Mortgage Calculator.',
    howToUseSteps: [
      'Enter the property purchase price in the Home Price ($) input.',
      'Type your upfront cash contribution into the Down Payment ($) field.',
      'Supply your mortgage APR in Rate (%) and amortization span in Years.',
      'Inspect the resulting monthly installment alongside the net financed Loan Amount.',
    ],
    formulaExplanation:
      'A mortgage amortizes the difference between Home Price ($) and Down Payment ($) over monthly periods using the standard annuity factor. Raising the Down Payment lowers financed principal directly and shrinks monthly obligations. Formula: P = max(0, Home Price − Down Payment); Monthly Payment = [P × r × (1 + r)^n] / [(1 + r)^n − 1], where r = Rate / 1200 and n = Years × 12.',
    practicalExample:
      'Buying a Home Price ($) = $450,000 property with Down Payment ($) = $90,000 leaves Loan Amount: $360,000; at Rate (%) = 6% over Years = 30, the monthly mortgage payment equals $2,158.38 / mo.',
    faqs: [
      {
        q: 'What happens if Down Payment ($) exceeds Home Price ($)?',
        a: 'The financed principal floors cleanly at $0 so the monthly mortgage payment never drops into negative numbers.',
      },
      {
        q: 'Why do lenders emphasize putting at least 20% down on Home Price ($)?',
        a: 'A 20% Down Payment reduces the financed Loan Amount to 80% of property value, commonly avoiding private mortgage insurance.',
      },
      {
        q: 'Should escrow for homeowners insurance be added separately?',
        a: 'Yes, add estimated monthly property tax and insurance on top of the principal-and-interest figure shown here.',
      },
    ],
  },

  'roi-calc': {
    seoTitle: `Free ROI (Return on Investment) Calculator – Net Return % | ${SITE_NAME}`,
    metaDescription:
      'Measure percentage gain and net dollar profit from any capital outlay with our free ROI (Return on Investment) Calculator.',
    howToUseSteps: [
      'Type your total upfront capital cost into the Invested ($) field.',
      'Enter the ending sale or payout value inside the Returned ($) box.',
      'Check the percentage ROI figure and Net Profit amount displayed right below.',
    ],
    formulaExplanation:
      'Return on Investment normalizes absolute profit relative to initial capital cost, making small and large investments directly comparable on one percentage scale. Formula: Net Profit = Returned ($) − Invested ($); ROI (%) = (Net Profit / Invested ($)) × 100.',
    practicalExample:
      'Putting Invested ($) = $10,000 into a project that yields Returned ($) = $14,500 delivers Net Profit: $4,500 and an overall ROI of (4,500 / 10,000) × 100 = 45.00%.',
    faqs: [
      {
        q: 'Can ROI turn negative when Returned ($) is smaller than Invested ($)?',
        a: 'Yes, if ending proceeds fall short of initial cost, both Net Profit and ROI display negative values indicating a loss.',
      },
      {
        q: 'Does simple ROI account for how many years an asset was held?',
        a: 'No, standard ROI measures total cumulative return regardless of holding duration; use CAGR when comparing multi-year timelines.',
      },
      {
        q: 'Should brokerage commissions be included inside Invested ($)?',
        a: 'Including acquisition fees in Invested ($) gives a truer net profitability reading after transaction costs.',
      },
    ],
  },

  'sales-tax': {
    seoTitle: `Free Sales Tax & VAT Calculator – Checkout Price Breakdown | ${SITE_NAME}`,
    metaDescription:
      'Calculate added sales tax or VAT and final retail checkout price quickly with our free Sales Tax & VAT Calculator.',
    howToUseSteps: [
      'Type the pre-tax item subtotal into the Original Price ($) field.',
      'Enter the applicable local percentage in the Tax Rate (%) input.',
      'View both the tax-inclusive Total checkout price and standalone Tax amount.',
    ],
    formulaExplanation:
      'Retail sales tax and value-added tax apply a percentage surcharge onto the net base price before checkout. Separating the tax surcharge from the gross total simplifies invoice verification and bookkeeping. Formula: Tax Amount = Original Price × (Tax Rate / 100); Total Price = Original Price × (1 + Tax Rate / 100).',
    practicalExample:
      'Applying Tax Rate (%) = 8.25% to an Original Price ($) = $85.00 item produces Tax: $7.01 and a final checkout Total: $92.01.',
    faqs: [
      {
        q: 'Can this tool compute both US sales tax and European/UK VAT?',
        a: 'Yes, any percentage consumption tax added on top of a pre-tax Original Price ($) follows the exact same multiplier.',
      },
      {
        q: 'How are fractional cents handled in the final Total?',
        a: 'Both the Total price and Tax breakdown round to two decimal places matching standard currency billing.',
      },
      {
        q: 'What should I enter if multiple local levies apply together?',
        a: 'Sum state, county, and municipal percentages into a single combined Tax Rate (%) figure before calculating.',
      },
    ],
  },

  'tip-calc': {
    seoTitle: `Free Tip & Bill Split Calculator – Per-Person Restaurant Split | ${SITE_NAME}`,
    metaDescription:
      'Compute gratuity and split restaurant checks evenly per diner using this free Tip & Bill Split Calculator.',
    howToUseSteps: [
      'Type the pre-tip restaurant receipt amount into the Bill ($) field.',
      'Enter your chosen gratuity percentage inside the Tip % box.',
      'Set the headcount sharing the check inside the People field.',
      'Review the exact per-person share along with the tip-inclusive group Total.',
    ],
    formulaExplanation:
      'Gratuity scales the base check by one plus the tip percentage, then divides the combined grand total evenly across all diners at the table. Formula: Grand Total = Bill × (1 + Tip % / 100); Per Person Share = Grand Total / max(1, People).',
    practicalExample:
      'A Bill ($) = $95.50 dinner with Tip % = 20% adds $19.10 gratuity for Total: $114.60, which splits across People = 3 diners at $38.20 / person.',
    faqs: [
      {
        q: 'What happens if someone enters 0 in the People box?',
        a: 'The denominator safely defaults to at least 1 diner so division-by-zero never occurs.',
      },
      {
        q: 'Should Tip % be calculated on the pre-tax or post-tax Bill ($)?',
        a: 'Etiquette typically bases gratuity on the pre-tax food and drink subtotal, though either figure can be typed into Bill ($).',
      },
      {
        q: 'Can I calculate a zero-tip even split for shared groceries?',
        a: 'Yes, entering 0 in Tip % divides the exact Bill ($) figure evenly among the number of People.',
      },
    ],
  },

  'loan-emi-months': {
    seoTitle: `Free Loan EMI Calculator (Months) – PKR Monthly Installment | ${SITE_NAME}`,
    metaDescription:
      'Calculate PKR monthly loan payments across exact month tenures using our free Loan EMI Calculator (Months).',
    howToUseSteps: [
      'Enter the principal rupee amount in the Loan Amount (PKR) box.',
      'Type the bank’s yearly markup percentage into Annual Interest Rate (%).',
      'Input the exact installment count inside Term in Months.',
      'Check the monthly rupee installment and cumulative Total Payment readout.',
    ],
    formulaExplanation:
      'Short-term personal, salary, and appliance loans are commonly quoted in exact months rather than years. Converting annual percentage rate to a monthly decimal rate produces equal monthly installments covering principal and markup. Formula: EMI = [P × r × (1 + r)^n] / [(1 + r)^n − 1], where P = Loan Amount (PKR), r = Annual Interest Rate / 1200, and n = Term in Months.',
    practicalExample:
      'Financing Loan Amount (PKR) = 500,000 at Annual Interest Rate (%) = 12% for Term in Months = 24 yields an installment of PKR 23,537 / month and Total Payment: PKR 564,882.',
    faqs: [
      {
        q: 'How is this different from a year-based loan calculator?',
        a: 'Term in Months accepts exact durations like 18, 24, or 36 months directly without converting months into fractional years.',
      },
      {
        q: 'Why is the monthly installment rounded to the nearest whole rupee?',
        a: 'Pakistani rupee loan schedules typically settle in whole PKR amounts without paisa fractions.',
      },
      {
        q: 'Does a 0% installment plan work in Term in Months?',
        a: 'Yes, setting Annual Interest Rate (%) to 0 divides Loan Amount (PKR) cleanly by Term in Months.',
      },
    ],
  },

  'simple-interest': {
    seoTitle: `Free Simple Interest Calculator – Non-Compounding PKR Yield | ${SITE_NAME}`,
    metaDescription:
      'Compute flat non-compounding interest and maturity total quickly with our free Simple Interest Calculator.',
    howToUseSteps: [
      'Enter the starting rupee sum inside Principal Amount (PKR).',
      'Fill in the flat yearly percentage in Annual Interest Rate (%).',
      'Type the lending or deposit duration into the Time (Years) box.',
      'Inspect standalone interest earned alongside combined Principal plus Interest.',
    ],
    formulaExplanation:
      'Unlike compounding schemes, simple interest accrues strictly against the original Principal Amount (PKR) every year without earning interest on prior interest. Formula: Simple Interest = (Principal Amount × Annual Interest Rate × Time) / 100; Total Maturity Amount = Principal Amount + Simple Interest.',
    practicalExample:
      'Placing Principal Amount (PKR) = 100,000 at Annual Interest Rate (%) = 10% for Time (Years) = 3 generates PKR 30,000 in interest and Total Amount: PKR 130,000.',
    faqs: [
      {
        q: 'When is simple interest used instead of compound interest?',
        a: 'Short-term promissory notes, treasury bills, and flat-rate personal loans frequently accrue simple interest rather than compounding.',
      },
      {
        q: 'Can I enter fractional durations in Time (Years) such as 0.5 or 1.5?',
        a: 'Yes, entering 0.5 computes half-year simple interest and 1.5 computes 18 months accurately.',
      },
      {
        q: 'Does interest double when Time (Years) doubles?',
        a: 'Yes, because there is no compounding curve, simple interest scales in direct linear proportion to Time (Years).',
      },
    ],
  },

  'compound-interest-freq': {
    seoTitle: `Free Compound Interest Frequency Calculator – Monthly & Yearly | ${SITE_NAME}`,
    metaDescription:
      'Compare monthly, quarterly, and annual compounding returns in PKR using our free Compound Interest Frequency Calculator.',
    howToUseSteps: [
      'Type your initial rupee investment into the Principal (PKR) field.',
      'Enter the nominal yearly rate in Annual Interest Rate (%).',
      'Specify investment duration inside Time (Years).',
      'Choose Monthly (12 times/yr), Quarterly (4 times/yr), or Annually (1 time/yr) under Compounding Frequency.',
    ],
    formulaExplanation:
      'More frequent compounding intervals credit interest sooner, enabling reinvested profit to grow faster within the same nominal annual rate. The formula divides nominal rate r by compounding frequency n and compounds across n × t total periods. Formula: A = P × (1 + r / n)^(n × t), where P = Principal (PKR), r = Annual Interest Rate / 100, t = Time (Years), and n = Compounding Frequency.',
    practicalExample:
      'Investing Principal (PKR) = 200,000 at Annual Interest Rate (%) = 9% for Time (Years) = 5 under Monthly (12 times/yr) Compounding Frequency grows to PKR 313,136, yielding Interest Earned: PKR 113,136.',
    faqs: [
      {
        q: 'How much difference does Monthly vs Annually Compounding Frequency make?',
        a: 'Monthly compounding produces a higher effective annual yield because interest starts earning return every 30 days instead of waiting all year.',
      },
      {
        q: 'Does this tool include recurring monthly additions?',
        a: 'No, it measures lump-sum growth on Principal (PKR) so you can isolate the exact effect of Compounding Frequency.',
      },
      {
        q: 'Which banks or accounts typically credit profits quarterly?',
        a: 'Many corporate savings schemes and term deposit payouts use Quarterly (4 times/yr) profit distribution.',
      },
    ],
  },

  'savings-goal-calc': {
    seoTitle: `Free Savings Goal Calculator – Monthly Target Plan | ${SITE_NAME}`,
    metaDescription:
      'Find how much to save monthly in PKR to hit any financial milestone with our free Savings Goal Calculator.',
    howToUseSteps: [
      'Enter your desired rupee milestone in the Target Amount (PKR) box.',
      'Specify your deadline in Months to Reach Goal.',
      'Type your expected yearly investment yield inside Expected Annual Return (%).',
      'Review the required monthly deposit alongside cumulative principal saved across your timeline.',
    ],
    formulaExplanation:
      'This sinking-fund annuity equation solves backward from a future cash goal to determine the constant monthly contribution needed when monthly compounding helps carry part of the target. Formula: Monthly Saving = [Target × r] / [(1 + r)^n − 1], where r = Expected Annual Return / 1200 and n = Months to Reach Goal (or Target / n if return is 0%).',
    practicalExample:
      'Reaching Target Amount (PKR) = 1,000,000 in Months to Reach Goal = 24 at Expected Annual Return (%) = 7% requires saving PKR 38,939 / month (contributing PKR 934,542 cash while compound profit covers the remaining PKR 65,458).',
    faqs: [
      {
        q: 'Why is Total Saved less than Target Amount (PKR) when Expected Annual Return (%) is positive?',
        a: 'Earned compound return bridges the gap between your out-of-pocket monthly deposits and the final Target Amount.',
      },
      {
        q: 'Can I calculate plain cash saving without bank profit?',
        a: 'Yes, entering 0 in Expected Annual Return (%) divides Target Amount (PKR) evenly by Months to Reach Goal.',
      },
      {
        q: 'What happens if I enter 0 for Months to Reach Goal?',
        a: 'The calculator prompts that Months must exceed zero so division errors never appear.',
      },
    ],
  },

  'salary-breakdown-calc': {
    seoTitle: `Free Salary Breakdown Calculator – Yearly, Daily & Hourly PKR | ${SITE_NAME}`,
    metaDescription:
      'Convert monthly PKR salary into annual, daily, and hourly pay rates using our free Salary Breakdown Calculator.',
    howToUseSteps: [
      'Type your gross monthly pay in the Monthly Salary (PKR) field.',
      'Enter your schedule’s working days inside Working Days per Month.',
      'Input your daily shift length in the Working Hours per Day box.',
      'Check annualized yearly income alongside daily and hourly rupee pay rates.',
    ],
    formulaExplanation:
      'Breaking a fixed monthly paycheck down to daily and hourly rates helps salaried employees benchmark freelance rates, overtime value, and job offers accurately. Formula: Yearly = Monthly Salary × 12; Daily = Monthly Salary / Working Days per Month; Hourly = Daily / Working Hours per Day.',
    practicalExample:
      'A Monthly Salary (PKR) = 150,000 package across Working Days per Month = 22 and Working Hours per Day = 8 equals PKR 1,800,000 / year, Daily: PKR 6,818, and Hourly: PKR 852.',
    faqs: [
      {
        q: 'Should I adjust Working Days per Month if I work 6 days a week?',
        a: 'Yes, 5-day corporate weeks typically use 22 working days per month, whereas 6-day schedules usually use 26 days.',
      },
      {
        q: 'Does this breakdown deduct income tax automatically?',
        a: 'No, it converts whatever figure you enter in Monthly Salary (PKR)—enter net take-home pay if you prefer post-tax hourly rates.',
      },
      {
        q: 'Why is hourly rate useful for salaried workers?',
        a: 'Comparing hourly pay reveals whether a slightly higher monthly offer requiring 10-hour shifts actually pays less per hour.',
      },
    ],
  },

  'discount-sale-calc': {
    seoTitle: `Free Discount and Sale Price Calculator – Savings & Markdown | ${SITE_NAME}`,
    metaDescription:
      'Compute markdown savings and final discounted PKR price instantly with our free Discount and Sale Price Calculator.',
    howToUseSteps: [
      'Enter the listed tag amount in the Original Price (PKR) input.',
      'Type the promotional markdown rate into Discount Percentage (%).',
      'Read the final discounted checkout price and exact rupee savings underneath.',
    ],
    formulaExplanation:
      'Retail promotions subtract a percentage share from the listed sticker price. Computing both the rupee markdown and remaining payable amount avoids checkout surprises during seasonal sales. Formula: Savings = Original Price × (Discount Percentage / 100); Final Sale Price = Original Price − Savings.',
    practicalExample:
      'Taking Discount Percentage (%) = 25% off an Original Price (PKR) = 5,000 jacket saves PKR 1,250 and leaves a final payable price of PKR 3,750.',
    faqs: [
      {
        q: 'How do I calculate two stacked discounts like 20% plus an extra 10%?',
        a: 'Compute the first discount first, then type that reduced result back into Original Price (PKR) and apply the extra 10%.',
      },
      {
        q: 'Can Discount Percentage (%) accept fractional percentages like 12.5%?',
        a: 'Yes, decimals such as 7.5 or 12.5 evaluate accurately to the exact rupee markdown.',
      },
      {
        q: 'Does the final sale price include GST or sales tax?',
        a: 'No, this reflects the discounted pre-tax item price before any store-level tax additions.',
      },
    ],
  },

  'manual-currency-conv': {
    seoTitle: `Free Manual Currency Conversion Calculator – Custom FX Rate | ${SITE_NAME}`,
    metaDescription:
      'Convert PKR to USD, EUR, SAR, or AED using your exact exchange rate with our free Manual Currency Conversion Calculator.',
    howToUseSteps: [
      'Enter the rupee sum you plan to exchange in the Amount in PKR field.',
      'Type your dealer or bank’s quoted rate into Exchange Rate (Foreign Currency per 1 PKR).',
      'Read the converted foreign currency total displayed immediately.',
    ],
    formulaExplanation:
      'Bank counters, open-market exchangers, and remittance apps each quote slightly different spreads around mid-market rates. Entering your exact quoted rate prevents misleading online averages. Formula: Converted Foreign Amount = Amount in PKR × Exchange Rate (Foreign Currency per 1 PKR).',
    practicalExample:
      'Converting Amount in PKR = 50,000 at Exchange Rate (Foreign Currency per 1 PKR) = 0.0036 outputs 180.00 Foreign Units (1 PKR = 0.0036 Foreign Currency).',
    faqs: [
      {
        q: 'Why do I enter Exchange Rate manually instead of using a static feed?',
        a: 'Manual entry lets you plug in the exact open-market, interbank, or card FX rate your bank actually charges you.',
      },
      {
        q: 'How do I get Exchange Rate (Foreign Currency per 1 PKR) if USD is quoted as 278 PKR?',
        a: 'Divide 1 by the rupee-per-dollar quote (for example, 1 / 278 = 0.0036) and enter that decimal rate.',
      },
      {
        q: 'Can I also convert PKR to Saudi Riyals or UAE Dirhams here?',
        a: 'Yes, multiply by whatever foreign units equal 1 PKR for SAR, AED, GBP, EUR, or any currency.',
      },
    ],
  },

  'profit-margin-calc': {
    seoTitle: `Free Business Profit Margin Calculator – Gross Margin % | ${SITE_NAME}`,
    metaDescription:
      'Calculate gross profit and percentage margin from revenue and COGS using our free Business Profit Margin Calculator.',
    howToUseSteps: [
      'Enter total sales income inside the Total Revenue (PKR) field.',
      'Input direct product or service costs in Cost of Goods Sold - COGS (PKR).',
      'View the resulting Profit Margin percentage and Gross Profit in rupees.',
    ],
    formulaExplanation:
      'Gross profit margin measures how many rupees out of every 100 rupees in sales revenue remain after paying direct production or wholesale inventory costs. Formula: Gross Profit = Total Revenue − COGS; Profit Margin (%) = [(Total Revenue − COGS) / Total Revenue] × 100.',
    practicalExample:
      'Recording Total Revenue (PKR) = 250,000 against Cost of Goods Sold - COGS (PKR) = 160,000 yields Gross Profit: PKR 90,000 and a 36.00% Profit Margin.',
    faqs: [
      {
        q: 'How does Profit Margin differ from markup percentage?',
        a: 'Margin divides profit by Total Revenue (PKR), whereas markup divides profit by COGS—so margin is always smaller than markup.',
      },
      {
        q: 'What should go into Cost of Goods Sold - COGS (PKR)?',
        a: 'Include wholesale inventory cost, raw materials, packaging, and direct manufacturing labor, excluding office rent or marketing.',
      },
      {
        q: 'What happens when COGS exceeds Total Revenue (PKR)?',
        a: 'Both Gross Profit and Profit Margin turn negative, signaling that items are selling below direct cost.',
      },
    ],
  },

  'finance-fbr-tax': {
    seoTitle: `Free Pakistan Income Tax Slabs Calculator (FBR) – Salary Tax | ${SITE_NAME}`,
    metaDescription:
      'Estimate annual and monthly salary tax under progressive brackets with our free Pakistan Income Tax Slabs Calculator (FBR).',
    howToUseSteps: [
      'Type your gross taxable yearly pay into Annual Taxable Salary (PKR).',
      'Check the total yearly FBR tax liability in the main readout.',
      'Inspect the Monthly Tax Deduction underneath to anticipate monthly payroll withholding.',
    ],
    formulaExplanation:
      'Salaried income tax in Pakistan follows progressive marginal slabs rather than a flat rate on total pay: income up to PKR 600,000 is 0%, and each higher bracket taxes only the excess above its threshold (5%, 15%, 25%, 30%, and 35% above PKR 4.1M). Formula: Total Tax = Fixed Slab Base + (Salary − Bracket Floor) × Marginal Slab Rate; Monthly Deduction = Total Tax / 12.',
    practicalExample:
      'On an Annual Taxable Salary (PKR) = 1,800,000 (bracket PKR 1.2M–2.2M), tax equals PKR 30,000 + (1,800,000 − 1,200,000) × 15% = PKR 120,000 / year, or Monthly Tax Deduction: PKR 10,000.',
    faqs: [
      {
        q: 'Does crossing into a higher FBR slab tax my entire salary at the higher rate?',
        a: 'No, progressive slabs apply the higher percentage only to the salary slice above that bracket threshold.',
      },
      {
        q: 'Should I enter monthly pay or 12 months combined in Annual Taxable Salary (PKR)?',
        a: 'Multiply your taxable monthly salary by 12 (plus taxable bonuses) and enter the full annual figure.',
      },
      {
        q: 'Up to what annual income is salaried tax zero under these FBR brackets?',
        a: 'Annual Taxable Salary (PKR) up to PKR 600,000 remains completely exempt at PKR 0 tax.',
      },
    ],
  },

  'finance-car-lease': {
    seoTitle: `Free Car Lease / Auto Installment Calculator – PKR Auto Loan | ${SITE_NAME}`,
    metaDescription:
      'Estimate monthly auto lease installments after equity down payment in PKR with our free Car Lease / Auto Installment Calculator.',
    howToUseSteps: [
      'Enter the vehicle invoice amount inside Car Price (PKR).',
      'Type your upfront equity deposit into Down Payment (PKR).',
      'Fill in the bank’s quoted rate in Annual Markup Rate (%) and repayment length in Lease Tenure (Years).',
      'Review your monthly auto installment alongside the Total Financed Amount.',
    ],
    formulaExplanation:
      'Pakistani auto financing subtracts your Down Payment from Car Price to determine financed principal, then amortizes that balance across monthly lease installments using the reducing-balance EMI formula. Formula: P = max(0, Car Price − Down Payment); Monthly Installment = [P × r × (1 + r)^n] / [(1 + r)^n − 1], where r = Annual Markup Rate / 1200 and n = Lease Tenure (Years) × 12.',
    practicalExample:
      'Financing a Car Price (PKR) = 4,500,000 vehicle with Down Payment (PKR) = 1,350,000 leaves Total Financed Amount: PKR 3,150,000; at Annual Markup Rate (%) = 18% over Lease Tenure (Years) = 3, the payment is PKR 113,880 / month.',
    faqs: [
      {
        q: 'Does the monthly installment include comprehensive car tracker and insurance?',
        a: 'No, banks typically bill annual comprehensive insurance and tracker fees separately on top of the principal-plus-markup installment.',
      },
      {
        q: 'What happens to monthly installments if I increase Down Payment (PKR)?',
        a: 'Every extra rupee put down reduces the Total Financed Amount directly and trims both monthly installments and total markup.',
      },
      {
        q: 'Are 0% dealership installment campaigns supported?',
        a: 'Yes, setting Annual Markup Rate (%) to 0 divides the remaining financed balance evenly across months.',
      },
    ],
  },

  'finance-home-loan': {
    seoTitle: `Free Home Loan / House Financing Calculator – PKR Monthly EMI | ${SITE_NAME}`,
    metaDescription:
      'Plan house construction or purchase repayments in PKR with our free Home Loan / House Financing Calculator.',
    howToUseSteps: [
      'Type the approved bank financing principal into Financing Amount (PKR).',
      'Enter the bank’s yearly financing charge in Annual Profit Rate (%).',
      'Set the repayment horizon inside Term (Years) to view monthly installment and total payout.',
    ],
    formulaExplanation:
      'Long-term housing finance amortizes the net Financing Amount (PKR) across 12 monthly payments per year so early installments carry mostly profit/interest while later payments pay down principal aggressively. Formula: Monthly Payment = [P × r × (1 + r)^n] / [(1 + r)^n − 1], where P = Financing Amount (PKR), r = Annual Profit Rate / 1200, and n = Term (Years) × 12.',
    practicalExample:
      'Taking Financing Amount (PKR) = 10,000,000 at Annual Profit Rate (%) = 15% over Term (Years) = 15 (180 months) produces an installment of PKR 139,959 / month and Total Payment: PKR 25,192,568.',
    faqs: [
      {
        q: 'Should I put the house market price or the bank loan sum in Financing Amount (PKR)?',
        a: 'Enter only the financed portion borrowed from the bank after subtracting your own cash down payment.',
      },
      {
        q: 'Why is Total Payment so much higher over a 15-year or 20-year Term (Years)?',
        a: 'Longer tenures keep principal outstanding for more years, multiplying cumulative profit paid even though monthly payments look lower.',
      },
      {
        q: 'Does this apply equally to conventional mortgages and Islamic diminishing musharakah?',
        a: 'Yes, both structures follow equivalent monthly payment math for any fixed quoted Annual Profit Rate (%).',
      },
    ],
  },

  'finance-mutual-fund': {
    seoTitle: `Free Mutual Fund Investment Return Calculator – SIP Wealth | ${SITE_NAME}`,
    metaDescription:
      'Forecast mutual fund lump-sum and monthly SIP returns in PKR using our free Mutual Fund Investment Return Calculator.',
    howToUseSteps: [
      'Type any starting lump sum into Initial Investment (PKR).',
      'Enter your recurring systematic deposit in Monthly SIP Contribution (PKR).',
      'Input your projected yearly yield in Expected Annual Return (%) and timeframe in Investment Horizon (Years).',
      'Inspect ending portfolio value, total capital deposited, and net investment profit.',
    ],
    formulaExplanation:
      'Combining an initial lump sum with a monthly Systematic Investment Plan (SIP) compounds both existing capital and every fresh monthly installment at 1/12th of the annual return rate. Formula: Balance_k = (Balance_(k−1) + Monthly SIP) × (1 + Expected Annual Return / 1200) across Investment Horizon × 12 months; Profit = Final Value − Total Invested.',
    practicalExample:
      'Starting with Initial Investment (PKR) = 100,000 plus Monthly SIP Contribution (PKR) = 20,000 at Expected Annual Return (%) = 18% over Investment Horizon (Years) = 5 grows Total Invested: PKR 1,300,000 to PKR 2,197,479 (Profit: PKR 897,479).',
    faqs: [
      {
        q: 'Can I model a pure Monthly SIP Contribution (PKR) with zero upfront lump sum?',
        a: 'Yes, set Initial Investment (PKR) to 0 to forecast wealth built strictly from monthly SIP deposits.',
      },
      {
        q: 'Are mutual fund returns guaranteed to hit Expected Annual Return (%) every month?',
        a: 'Money-market funds stay fairly steady, while equity funds fluctuate—use conservative long-term averages for planning.',
      },
      {
        q: 'Does this output subtract front-end load or capital gains tax?',
        a: 'No, it calculates gross compounded wealth before fund-specific sales loads or applicable capital gains withholding.',
      },
    ],
  },

  'finance-fixed-deposit': {
    seoTitle: `Free Fixed Deposit Profit Calculator – PKR Term Maturity | ${SITE_NAME}`,
    metaDescription:
      'Compute term deposit profit and maturity payout in PKR with our free Fixed Deposit Profit Calculator.',
    howToUseSteps: [
      'Enter your locked principal rupee sum inside Deposit Amount (PKR).',
      'Type the bank’s annual certificate rate into Annual Profit Rate (%).',
      'Set the lock-in duration in Tenure (Months) to see maturity total and profit earned.',
    ],
    formulaExplanation:
      'Bank Term Deposit Receipts (TDRs) pay simple pro-rated annual return across the chosen month lock-in period and return full principal plus earned profit at maturity. Formula: Total Profit = Deposit Amount × (Annual Profit Rate / 100) × (Tenure in Months / 12); Maturity Amount = Deposit Amount + Total Profit.',
    practicalExample:
      'Locking Deposit Amount (PKR) = 500,000 at Annual Profit Rate (%) = 14% for Tenure (Months) = 12 earns Total Profit Earned: PKR 70,000 and pays out PKR 570,000 at maturity.',
    faqs: [
      {
        q: 'Can I check short-term 3-month or 6-month TDR certificates?',
        a: 'Yes, simply enter 3 or 6 in Tenure (Months) and the calculator scales annual profit proportionally.',
      },
      {
        q: 'Is tax deducted from Total Profit Earned by Pakistani banks?',
        a: 'Banks withhold applicable profit-on-debt tax at payout (lower for filers than non-filers) on top of gross profit shown.',
      },
      {
        q: 'Does Fixed Deposit Profit compound monthly inside this tool?',
        a: 'No, standard maturity TDRs calculate flat simple yield for the selected Tenure (Months).',
      },
    ],
  },

  'finance-national-savings': {
    seoTitle: `Free National Savings Profit Calculator – Monthly PKR Payout | ${SITE_NAME}`,
    metaDescription:
      'Estimate monthly and yearly certificate payouts in PKR using our free National Savings Profit Calculator.',
    howToUseSteps: [
      'Type your certificate principal into the Investment Amount (PKR) box.',
      'Enter the prevailing scheme rate in Annual Return Rate (%).',
      'View both your monthly cash payout and cumulative annual profit immediately.',
    ],
    formulaExplanation:
      'Income-oriented National Savings schemes such as Behbood Savings Certificates and Regular Income Certificates distribute annual yield across 12 equal monthly payouts without eroding principal. Formula: Annual Profit = Investment Amount × (Annual Return Rate / 100); Monthly Profit = Annual Profit / 12.',
    practicalExample:
      'Placing Investment Amount (PKR) = 1,000,000 at Annual Return Rate (%) = 15.5% pays Monthly Profit of PKR 12,917 / month and Annual Profit: PKR 155,000.',
    faqs: [
      {
        q: 'Which National Savings certificates pay out monthly like this calculator?',
        a: 'Behbood Savings Certificates, Pensioners Benefit Accounts, and Regular Income Certificates distribute profit monthly.',
      },
      {
        q: 'Does Monthly Profit change if I reinvest profits elsewhere?',
        a: 'Monthly payout remains constant on Investment Amount (PKR) unless scheme rates revise upon renewal.',
      },
      {
        q: 'Are withholding tax or Zakat deducted from National Savings profit?',
        a: 'Standard certificates may face tax/Zakat depending on filer status and exemption rules, whereas Behbood enjoys special tax rules up to statutory caps.',
      },
    ],
  },

  'finance-gold-val': {
    seoTitle: `Free Gold Price & Weight Calculator – Tola & Grams to PKR | ${SITE_NAME}`,
    metaDescription:
      'Value gold jewelry or bullion across Tola and grams in PKR using our free Gold Price & Weight Calculator.',
    howToUseSteps: [
      'Enter whole tola units inside the Gold Weight (Tola) field.',
      'Add leftover gram weight in the Additional Grams box (or leave 0).',
      'Input today’s sarafa market rate inside Current Rate per Tola (PKR) to compute total valuation.',
    ],
    formulaExplanation:
      'Pakistani bullion markets price gold per Tola, where 1 Tola equals exactly 11.664 grams. Converting both Tola and leftover grams into unified total grams ensures accurate valuation when jewelry weighs mixed units. Formula: Total Grams = (Gold Weight in Tola × 11.664) + Additional Grams; Total Value = Total Grams × (Rate per Tola / 11.664).',
    practicalExample:
      'Valuing Gold Weight (Tola) = 2 plus Additional Grams = 5 at Current Rate per Tola (PKR) = 250,000 combines to Total Weight: 28.33 grams worth PKR 607,167.',
    faqs: [
      {
        q: 'How many grams equal 1 Tola in Pakistani bullion markets?',
        a: 'One standard Pakistani Tola equals exactly 11.664 grams (while 10 grams equals roughly 0.857 Tola).',
      },
      {
        q: 'How do I value gold measured only in grams?',
        a: 'Enter 0 in Gold Weight (Tola), put your full weight in Additional Grams, and enter the 24K or 22K Rate per Tola (PKR).',
      },
      {
        q: 'Does this include jeweler making charges (mazdoori)?',
        a: 'No, it calculates pure bullion metal value so you can separate gold melt worth from crafting fees.',
      },
    ],
  },

  'finance-cash-counter': {
    seoTitle: `Free Currency Denomination Cash Counter Calculator – PKR Notes | ${SITE_NAME}`,
    metaDescription:
      'Tally bundles of 5000, 1000, 500, and 100 rupee banknotes fast with our free Currency Denomination Cash Counter.',
    howToUseSteps: [
      'Enter your count of five-thousand rupee notes into 5000 PKR Notes.',
      'Type bundle quantities into 1000 PKR Notes and 500 PKR Notes.',
      'Fill in your count of hundred-rupee notes inside 100 PKR Notes to view total cash.',
    ],
    formulaExplanation:
      'Shopkeepers, bank tellers, and cashiers tally physical registers quickly by multiplying each currency note stack by its face value and summing every denomination together. Formula: Total Cash (PKR) = (5000 PKR Notes × 5,000) + (1000 PKR Notes × 1,000) + (500 PKR Notes × 500) + (100 PKR Notes × 100).',
    practicalExample:
      'Counting 5000 PKR Notes = 10 (50,000), 1000 PKR Notes = 25 (25,000), 500 PKR Notes = 20 (10,000), and 100 PKR Notes = 50 (5,000) totals PKR 90,000.',
    faqs: [
      {
        q: 'What should I enter if I have zero notes of a certain denomination?',
        a: 'Type 0 in that denomination’s box so it contributes zero to the total sum.',
      },
      {
        q: 'How much does one standard bank bundle of 100 notes equal for each field?',
        a: '100 notes equal PKR 500,000 for 5000 PKR Notes, PKR 100,000 for 1000 PKR Notes, PKR 50,000 for 500 PKR Notes, and PKR 10,000 for 100 PKR Notes.',
      },
      {
        q: 'Are any counted cash figures saved on external servers?',
        a: 'No, every note tally executes privately inside your browser with zero server transmission.',
      },
    ],
  },

  'finance-inflation': {
    seoTitle: `Free Inflation Impact Calculator – Future Cost in PKR | ${SITE_NAME}`,
    metaDescription:
      'See how yearly inflation raises future living costs in PKR using our free Inflation Impact Calculator.',
    howToUseSteps: [
      'Enter today’s expense or cash amount in the Current Amount (PKR) field.',
      'Type the expected yearly price rise inside Annual Inflation Rate (%).',
      'Specify your time horizon in Years to view the inflation-adjusted future cost.',
    ],
    formulaExplanation:
      'Inflation compounds prices year over year just like interest compounds savings, eroding what a fixed rupee sum can purchase later. Multiplying today’s price by one plus the inflation rate raised to the power of years yields the equivalent future cost. Formula: Future Value = Current Amount × (1 + Annual Inflation Rate / 100)^Years.',
    practicalExample:
      'An expense of Current Amount (PKR) = 100,000 facing Annual Inflation Rate (%) = 12% over Years = 5 rises to an equivalent future cost of PKR 176,234.',
    faqs: [
      {
        q: 'Why do expenses rise faster than linear multiplication over 5 or 10 years?',
        a: 'Each year’s percentage increase applies on top of already inflated prices from previous years, creating exponential compounding.',
      },
      {
        q: 'What does this mean if my savings yield less than Annual Inflation Rate (%)?',
        a: 'Whenever investment returns trail inflation, your money loses real purchasing power even though the account balance rises.',
      },
      {
        q: 'Can I estimate college tuition inflation separately from general groceries?',
        a: 'Yes, simply enter your sector-specific cost trend into Annual Inflation Rate (%).',
      },
    ],
  },

  'finance-cagr': {
    seoTitle: `Free Compound Annual Growth Rate (CAGR) Calculator – Annual Yield | ${SITE_NAME}`,
    metaDescription:
      'Compute smoothed annual investment growth rate between start and end values with our free Compound Annual Growth Rate (CAGR) Calculator.',
    howToUseSteps: [
      'Enter your starting investment or revenue sum in Initial Value (PKR).',
      'Type the ending portfolio or asset value inside Final Value (PKR).',
      'Specify total elapsed holding years in Time (Years) to display annualized CAGR.',
    ],
    formulaExplanation:
      'Compound Annual Growth Rate smooths volatile year-to-year swings into one steady annual rate that links your starting and ending asset values. It works identically for mutual funds, property prices, and company sales. Formula: CAGR (%) = [(Final Value / Initial Value)^(1 / Time in Years) − 1] × 100.',
    practicalExample:
      'Growing an investment from Initial Value (PKR) = 100,000 to Final Value (PKR) = 250,000 over Time (Years) = 4 produces 25.74% CAGR per year.',
    faqs: [
      {
        q: 'Why must Initial Value (PKR) and Time (Years) both exceed zero?',
        a: 'Dividing by zero initial capital or raising to an infinite 1/0 exponent is mathematically undefined.',
      },
      {
        q: 'Does CAGR change if the asset dropped in year 2 before recovering in year 4?',
        a: 'No, CAGR measures only the smoothed geometric average linking start to finish regardless of intermediate volatility.',
      },
      {
        q: 'How is CAGR better than dividing total return by Time (Years)?',
        a: 'Simple division ignores annual compounding and significantly overstates true annualized growth on multi-year gains.',
      },
    ],
  },

  'finance-retirement': {
    seoTitle: `Free Retirement Nest Egg Calculator – PKR Corpus Planner | ${SITE_NAME}`,
    metaDescription:
      'Project your long-term retirement fund from existing savings and monthly deposits with our free Retirement Nest Egg Calculator.',
    howToUseSteps: [
      'Type your existing retirement balance inside Current Savings (PKR).',
      'Enter how much you contribute each month in Monthly Saving (PKR).',
      'Specify your expected yearly investment return in Annual Return Rate (%) and horizon in Years to Retirement.',
      'Check the projected retirement corpus accumulated by your target retirement year.',
    ],
    formulaExplanation:
      'Retirement accumulation compounds both your existing Current Savings (PKR) and every ongoing Monthly Saving (PKR) deposit each month at 1/12th of your Annual Return Rate (%) until retirement. Formula: Balance_k = (Balance_(k−1) + Monthly Saving) × (1 + Annual Return Rate / 1200) across Years to Retirement × 12 months.',
    practicalExample:
      'Starting with Current Savings (PKR) = 2,000,000, adding Monthly Saving (PKR) = 50,000 at Annual Return Rate (%) = 15% over Years to Retirement = 20 accumulates a nest egg of PKR 115,228,736.',
    faqs: [
      {
        q: 'How dramatically does starting 5 years earlier affect the final nest egg?',
        a: 'Because compounding is heaviest in the final years, adding 5 extra years often nearly doubles the ending retirement balance.',
      },
      {
        q: 'Should I adjust my target nest egg for inflation?',
        a: 'Yes, you can subtract expected inflation from Annual Return Rate (%) to project your corpus in today’s purchasing power.',
      },
      {
        q: 'Can this include employer provident fund matching?',
        a: 'Yes, combine both your deduction and your employer’s monthly match inside Monthly Saving (PKR).',
      },
    ],
  },

  'fin-net-worth': {
    seoTitle: `Free Net Worth Calculator – Assets Minus Liabilities (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Measure true personal wealth by subtracting debts from total assets in PKR using our free Net Worth Calculator.',
    howToUseSteps: [
      'Sum your cash, investments, gold, and real estate into Total Assets (PKR).',
      'Add mortgages, car leases, credit cards, and loans inside Total Liabilities & Debts (PKR).',
      'Read your net personal wealth balance immediately below the inputs.',
    ],
    formulaExplanation:
      'Net worth represents true financial equity—what remains if every asset were sold at market value and every outstanding debt were paid off today. Formula: Net Worth (PKR) = Total Assets (PKR) − Total Liabilities & Debts (PKR).',
    practicalExample:
      'Holding Total Assets (PKR) = 15,000,000 against Total Liabilities & Debts (PKR) = 3,000,000 yields a Net Worth of PKR 12,000,000.',
    faqs: [
      {
        q: 'Should I enter the full market value of a financed house under Total Assets (PKR)?',
        a: 'Yes—list the property’s fair market price in Total Assets (PKR) and put the remaining unpaid loan balance in Total Liabilities & Debts (PKR).',
      },
      {
        q: 'What does a negative Net Worth mean?',
        a: 'It means Total Liabilities & Debts currently exceed Total Assets, which is common early in careers or after taking student or business loans.',
      },
      {
        q: 'How frequently should individuals recalculate their Net Worth?',
        a: 'Reviewing quarterly or twice a year tracks whether savings growth and debt paydown are moving you forward.',
      },
    ],
  },

  'fin-dividend-yield': {
    seoTitle: `Free Dividend Yield & Annual Payout Calculator – Stock Return | ${SITE_NAME}`,
    metaDescription:
      'Compute annual cash dividend yield percentage on shares in PKR using our free Dividend Yield & Annual Payout Calculator.',
    howToUseSteps: [
      'Enter the current share market price inside Stock Price per Share (PKR).',
      'Type total yearly cash dividends per share in Annual Dividend per Share (PKR).',
      'Check the Dividend Yield percentage alongside per-share annual cash payout.',
    ],
    formulaExplanation:
      'Dividend yield measures how much yearly cash income a stock pays relative to its current share price, enabling direct comparison between dividend stocks and fixed-income yields. Formula: Dividend Yield (%) = (Annual Dividend per Share / Stock Price per Share) × 100.',
    practicalExample:
      'A stock trading at Stock Price per Share (PKR) = 150 that pays Annual Dividend per Share (PKR) = 12 offers an 8.00% Dividend Yield (Annual return of PKR 12 per share).',
    faqs: [
      {
        q: 'What happens if a company pays quarterly or semi-annual dividends instead of one annual payout?',
        a: 'Add all four quarterly or two semi-annual cash payouts together and enter their full-year sum in Annual Dividend per Share (PKR).',
      },
      {
        q: 'Why does Dividend Yield rise when Stock Price per Share (PKR) falls?',
        a: 'Because share price sits in the denominator, a lower stock price produces a higher yield assuming the cash dividend holds steady.',
      },
      {
        q: 'Does Dividend Yield include share price appreciation?',
        a: 'No, it measures cash income yield only—total stock return combines dividend yield plus capital price gains.',
      },
    ],
  },

  'fin-debt-payoff': {
    seoTitle: `Free Debt Payoff Estimator (Snowball vs Avalanche) Calculator | ${SITE_NAME}`,
    metaDescription:
      'Estimate months needed to clear debts with extra monthly payments in PKR using our free Debt Payoff Estimator Calculator.',
    howToUseSteps: [
      'Enter your combined unpaid loans or card balances in Total Debt Balance (PKR).',
      'Type your weighted borrowing rate inside Average Interest Rate (%).',
      'Input any extra budget above base payments into Extra Monthly Payment (PKR).',
      'Review estimated months to become debt-free and your combined monthly installment.',
    ],
    formulaExplanation:
      'This debt amortization estimator adds a 5% base monthly payment on Total Debt Balance (PKR) to your Extra Monthly Payment (PKR), then solves logarithmically for the number of months until principal hits zero. Formula: Monthly Payment = (0.05 × B) + Extra; Months = ceil(−ln(1 − (B × r) / Monthly Payment) / ln(1 + r)), where r = Average Interest Rate / 1200.',
    practicalExample:
      'Clearing Total Debt Balance (PKR) = 500,000 at Average Interest Rate (%) = 20% with Extra Monthly Payment (PKR) = 25,000 creates a total monthly installment of PKR 50,000 and pays off the debt in ~12 Months to Payoff.',
    faqs: [
      {
        q: 'What is the difference between Debt Snowball and Debt Avalanche?',
        a: 'Snowball targets the smallest balance first for psychological wins, while Avalanche targets the highest interest rate first to minimize total interest paid.',
      },
      {
        q: 'Why does adding Extra Monthly Payment (PKR) cut payoff months so quickly?',
        a: 'Every extra rupee reduces principal immediately, shrinking next month’s interest charge and accelerating balance elimination.',
      },
      {
        q: 'What triggers the warning that monthly payment is too low to cover interest?',
        a: 'If monthly accrued interest exceeds or equals the total monthly installment, principal never shrinks and the debt cannot amortize.',
      },
    ],
  },
};
