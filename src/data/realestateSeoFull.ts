import { SITE_NAME } from '../config/site';

export interface RealestateCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const realestateSeoFullMap: Record<string, RealestateCalculatorSeoEntry> = {
  'rental-yield': {
    seoTitle: `Free Rental Yield Calculator – Gross & Net PKR Return | ${SITE_NAME}`,
    metaDescription:
      'Compute gross and net annual rental yield percentages on residential or commercial Pakistani properties with our free Rental Yield Calculator.',
    howToUseSteps: [
      'Type expected tenant rent per month in rupees inside Monthly Rent (PKR).',
      'Enter total acquisition cost of the house or flat into Purchase Price (PKR).',
      'Input yearly maintenance, property tax, and repair costs inside Annual Expenses (PKR).',
    ],
    formulaExplanation:
      'Rental yield measures yearly cash income relative to property acquisition price, separating gross rent from net return after upkeep costs. Formula: Gross Yield (%) = [(Monthly Rent × 12) / Purchase Price] × 100; Net Yield (%) = [((Monthly Rent × 12) − Annual Expenses) / Purchase Price] × 100.',
    practicalExample:
      'Leasing a 10-Marla Lahore house bought at Purchase Price (PKR) = 15,000,000 for Monthly Rent (PKR) = 150,000 (PKR 1,800,000/year) with Annual Expenses (PKR) = 100,000 gives Gross Yield: 12.00% and Net Yield: 11.33%.',
    faqs: [
      {
        q: 'What qualifies as Annual Expenses (PKR) when figuring Net Yield?',
        a: 'Include society maintenance charges, annual property taxes, landlord repairs, and any unpaid utility bills between tenants.',
      },
      {
        q: 'What rental yield percentage is typical for houses in Pakistani cities?',
        a: 'Residential homes in Lahore, Karachi, or Islamabad often yield 3%–5% net annually, whereas prime commercial shops can reach 7%–10%+.',
      },
      {
        q: 'Does Purchase Price (PKR) include transfer fees and stamp duty?',
        a: 'Add stamp duty, FBR tax, and agent commission into Purchase Price (PKR) if you want true net yield on total cash outlay.',
      },
    ],
  },

  'plot-area-converter': {
    seoTitle: `Free Plot Area Converter Calculator – Marla, Kanal & Sq Ft | ${SITE_NAME}`,
    metaDescription:
      'Convert land sizes instantly between marla, kanal, square feet, square yards, and square meters using our free Plot Area Converter Calculator.',
    howToUseSteps: [
      'Enter the numeric plot measurement into the Area Value field.',
      'Select your starting land unit from From Unit (Marla, Kanal, Square Feet, Square Yard, or Square Meter).',
      'View equivalent measurements across all five real estate units simultaneously.',
    ],
    formulaExplanation:
      'Pakistani standard revenue land conversion fixes 1 Marla at 272.25 square feet (30.25 square yards) and 1 Kanal at 20 Marlas (5,445 sq ft), scaling metric conversions via 1 sq m = 10.7639 sq ft. Formula: Area (sq ft) = Marla × 272.25 = Kanal × 5,445.',
    practicalExample:
      'Converting Area Value = 5 with From Unit = Marla equals 1361.25 sq ft, 0.250 Kanal, 151.25 sq yd, and 126.46 sq m.',
    faqs: [
      {
        q: 'Why do some housing societies in Lahore use 225 or 250 sq ft per Marla instead of 272.25?',
        a: 'While standard revenue records define 1 Marla as 272.25 sq ft, private developments such as DHA or Bahria Town frequently standardize residential plots at 225 sq ft per Marla.',
      },
      {
        q: 'How many Marlas make 1 Kanal across Pakistan?',
        a: 'One Kanal always equals exactly 20 Marlas—so 5 Marla equals 0.250 Kanal and 10 Marla equals half a Kanal.',
      },
      {
        q: 'How do square yards (Gaj) used in Karachi compare to Marla?',
        a: 'A 125 sq yd Karachi plot equals 1,125 sq ft, or roughly 4.13 standard 272.25 sq ft Marlas.',
      },
    ],
  },

  'plot-price-calc': {
    seoTitle: `Free Plot Price Calculator – Marla & Kanal Land Value (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Compute total land value in rupees from per-marla rate and plot size in marlas or kanals using our free Plot Price Calculator.',
    howToUseSteps: [
      'Type the market rate for one marla in rupees inside Price per Marla (PKR).',
      'Enter total plot dimension inside Plot Size.',
      'Choose Marla or Kanal under Plot Size Unit to compute total land price.',
    ],
    formulaExplanation:
      'Total land valuation converts Kanal sizes into Marlas (multiplying Kanals by 20) and multiplies total Marlas by the quoted Price per Marla in PKR. Formula: Total Price (PKR) = Price per Marla × (Plot Size in Marlas, or Kanal × 20).',
    practicalExample:
      'Valuing a Plot Size = 10 plot in Plot Size Unit = Marla at Price per Marla (PKR) = 1,200,000 totals PKR 12,000,000.',
    faqs: [
      {
        q: 'How does switching Plot Size Unit to Kanal alter the calculation?',
        a: 'Selecting Kanal automatically multiplies your Plot Size by 20 Marlas before multiplying by Price per Marla (PKR)—so 1 Kanal at PKR 1,200,000/marla equals PKR 24,000,000.',
      },
      {
        q: 'Can I enter fractional sizes like 7.5 into Plot Size?',
        a: 'Yes—decimals such as 5.5 Marla or 1.5 Kanal compute exact proportional rupee amounts.',
      },
      {
        q: 'Does PKR 12,000,000 include society development charges or corner premiums?',
        a: 'No—this computes base land value only; add corner, main-boulevard, or park-facing surcharges separately.',
      },
    ],
  },

  'marla-to-sqft-price': {
    seoTitle: `Free Price per Marla to Price per Sq Ft Calculator (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Convert quoted land price per marla into exact PKR cost per square foot using our free Price per Marla to Price per Sq Ft Calculator.',
    howToUseSteps: [
      'Enter the asking land rate for one marla in rupees inside Price per Marla (PKR).',
      'Read the equivalent rupee cost per square foot based on 272.25 sq ft per marla.',
    ],
    formulaExplanation:
      'Comparing plots across societies that measure Marlas differently becomes straightforward when converted to rupee cost per square foot using the standard 272.25 sq ft marla denominator. Formula: Price per Sq Ft (PKR) = Price per Marla (PKR) / 272.25.',
    practicalExample:
      'A plot quoted at Price per Marla (PKR) = 1,500,000 works out to 1,500,000 / 272.25 = PKR 5509.64 / sq ft.',
    faqs: [
      {
        q: 'Why is dividing by 272.25 useful when comparing apartments and residential plots?',
        a: 'Apartments and commercial shops price by square foot while residential plots quote by Marla, so converting puts both options on the same PKR/sq ft yardstick.',
      },
      {
        q: 'What is the price per sq ft if a 1-Kanal plot sells for PKR 40,000,000?',
        a: 'At PKR 2,000,000 per Marla (40,000,000 ÷ 20), entering 2000000 returns PKR 7,346.19 / sq ft.',
      },
      {
        q: 'Does this converter apply 225 sq ft or 272.25 sq ft per Marla?',
        a: 'It uses the standard 272.25 sq ft revenue marla benchmark across all inputs.',
      },
    ],
  },

  'construction-cost-est': {
    seoTitle: `Free Construction Cost Estimator Calculator – Covered Area PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate total house building budget in rupees from covered square footage and contractor rate using our free Construction Cost Estimator Calculator.',
    howToUseSteps: [
      'Enter total ground plus upper-floor built area into Covered Area (sq ft).',
      'Type grey-structure or turnkey rate per square foot inside Rate per Sq Ft (PKR).',
      'Check estimated total construction cost in Pakistani Rupees.',
    ],
    formulaExplanation:
      'Residential contractors in Pakistan price grey structure and A-grade turnkey builds per square foot of covered slab area across all floors, excluding open setback lawns. Formula: Total Construction Cost (PKR) = Covered Area (sq ft) × Rate per Sq Ft (PKR).',
    practicalExample:
      'Building a 5-Marla double-story house with Covered Area (sq ft) = 2500 at a turnkey Rate per Sq Ft (PKR) = 4500 totals PKR 11,250,000.',
    faqs: [
      {
        q: 'Does Covered Area (sq ft) mean plot size or total floor slab area?',
        a: 'Always enter total built-up covered square footage across basement, ground, first floor, and mumty—not raw plot area.',
      },
      {
        q: 'What is the difference between grey structure and complete turnkey rates in Rate per Sq Ft (PKR)?',
        a: 'Grey structure covers foundation, brickwork, plaster, and rough plumbing/conduits, whereas turnkey adds tiles, wood, paint, fixtures, and kitchen cabinets.',
      },
      {
        q: 'Should boundary walls and underground water tanks be budgeted outside this number?',
        a: 'Many contractors quote covered area only and bill boundary walls, septic tanks, and elevation stonework separately—confirm contract inclusions.',
      },
    ],
  },

  'property-installment': {
    seoTitle: `Free Property Installment Calculator – Monthly Plan (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Calculate equal monthly payment installments for society plots or apartments after down payment with our free Property Installment Calculator.',
    howToUseSteps: [
      'Enter full booking value of the plot or flat into Total Price (PKR).',
      'Type initial booking and confirmation deposit inside Down Payment (PKR).',
      'Specify payment plan length inside Number of Months to see your monthly installment.',
    ],
    formulaExplanation:
      'Zero-markup housing society payment plans subtract your upfront booking down payment from the total booking price and divide the remaining balance evenly across monthly installments. Formula: Monthly Installment (PKR) = (Total Price − Down Payment) / Number of Months.',
    practicalExample:
      'Booking a 5-Marla plot at Total Price (PKR) = 12,000,000 with Down Payment (PKR) = 3,000,000 over Number of Months = 36 leaves PKR 9,000,000 balance, or PKR 250,000 / month.',
    faqs: [
      {
        q: 'How do quarterly installment plans translate into Number of Months?',
        a: 'Multiply quarterly installments by 3 for Number of Months, or multiply the monthly result by 3 to budget quarterly payments.',
      },
      {
        q: 'What if possession or balloting payments are billed separately from monthly installments?',
        a: 'Subtract lump-sum balloting and possession charges along with Down Payment (PKR) if you want only regular monthly installment cash flow.',
      },
      {
        q: 'Does this calculator apply bank markup?',
        a: 'No—it models interest-free developer installment schedules; bank home loans with markup follow amortizing EMI math.',
      },
    ],
  },

  'down-payment-calc': {
    seoTitle: `Free Down Payment Calculator – Property Booking Cash (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Calculate required booking cash and remaining financing balance from total property value and deposit percentage with our free Down Payment Calculator.',
    howToUseSteps: [
      'Type agreed sale or booking value inside Total Property Price (PKR).',
      'Enter required upfront deposit percentage into Down Payment Percentage (%).',
      'Check cash needed upfront alongside the remaining balance to finance or pay on schedule.',
    ],
    formulaExplanation:
      'Upfront booking deposits convert the seller’s required percentage into decimal form, multiply by agreed property price for cash required today, and subtract from total price to show remaining financing balance. Formula: Down Payment (PKR) = Total Property Price × (Down Payment Percentage / 100).',
    practicalExample:
      'Purchasing a plot at Total Property Price (PKR) = 10,000,000 with Down Payment Percentage (%) = 25 requires PKR 2,500,000 upfront and leaves PKR 7,500,000 balance.',
    faqs: [
      {
        q: 'What Down Payment Percentage (%) do Pakistani housing societies and banks usually ask?',
        a: 'Developer plot plans commonly ask 15%–25% upfront booking, while SBP-regulated bank home financing typically requires 20%–30% equity.',
      },
      {
        q: 'Does Down Payment cover stamp duty and transfer fees?',
        a: 'No—keep an additional 4%–8% cash reserve aside for FBR withholding tax, stamp duty, and society transfer fees.',
      },
      {
        q: 'How does increasing Down Payment Percentage (%) help bank buyers?',
        a: 'Putting down 30% instead of 20% shrinks borrowed principal and noticeably lowers monthly bank markup payments.',
      },
    ],
  },

  'property-profit-calc': {
    seoTitle: `Free Property Profit & ROI Calculator – Resale Gain (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Find net capital profit and percentage ROI on selling a plot or house after purchase cost and taxes using our free Property Profit & ROI Calculator.',
    howToUseSteps: [
      'Enter original acquisition price inside Purchase Buy Price (PKR).',
      'Type final agreed resale price into Selling Price (PKR).',
      'Add stamp duty, commission, and transfer taxes inside Taxes & Expenses (PKR) to read net profit and ROI.',
    ],
    formulaExplanation:
      'True property resale profit adds transaction expenses onto original buy price to find total invested capital, subtracts that cost from resale price, and divides profit by total invested capital for ROI percentage. Formula: Net Profit = Selling Price − (Buy Price + Taxes & Expenses); ROI (%) = (Net Profit / Total Investment) × 100.',
    practicalExample:
      'Reselling a 5-Marla plot bought at Purchase Buy Price (PKR) = 8,000,000 for Selling Price (PKR) = 11,500,000 after Taxes & Expenses (PKR) = 300,000 earns PKR 3,200,000 net profit and 38.55% ROI.',
    faqs: [
      {
        q: 'Which fees belong inside Taxes & Expenses (PKR)?',
        a: 'Include buyer and seller agent commissions, society NDC/transfer charges, stamp duty, and capital gains tax paid on exit.',
      },
      {
        q: 'Why can Selling Price look profitable while Net Profit turns tiny?',
        a: 'High non-filer transaction taxes, dealer fees, and society transfer levies eat directly into apparent price appreciation.',
      },
      {
        q: 'Does ROI (%) adjust for how many years you held the plot?',
        a: 'No—this computes total holding-period ROI; divide ROI by years held for a quick annualized comparison.',
      },
    ],
  },

  're-fbr-property-tax': {
    seoTitle: `Free FBR Property Tax Calculator (Pakistan) – Filer vs Non-Filer | ${SITE_NAME}`,
    metaDescription:
      'Estimate Pakistani FBR withholding tax on property transactions in PKR for filers and non-filers using our free FBR Property Tax Calculator (Pakistan).',
    howToUseSteps: [
      'Enter declared DC or FBR valuation rate in rupees inside Property Value / FBR Valuation (PKR).',
      'Select Filer (Active Taxpayer) or Non-Filer from the Tax Status dropdown.',
      'Check estimated tax payable in Pakistani Rupees.',
    ],
    formulaExplanation:
      'Federal Board of Revenue (FBR) withholding property rates depend heavily on Active Taxpayer List (ATL) status, applying a baseline 2% rate for filers versus 6% for non-filers in this estimator against FBR valuation. Formula: Property Tax (PKR) = Property Value / FBR Valuation × Applicable Tax Rate.',
    practicalExample:
      'On a plot assessed at Property Value / FBR Valuation (PKR) = 10,000,000 with Tax Status = Filer (Active Taxpayer) (2%), tax estimates at PKR 200,000 Annual Tax (versus PKR 600,000 for a Non-Filer).',
    faqs: [
      {
        q: 'Why is Tax Status = Non-Filer charged three times higher here?',
        a: 'Pakistan tax budgets impose steep withholding penalties on non-filers under Sections 236C and 236K to encourage tax-return filing.',
      },
      {
        q: 'Does FBR calculate tax on DC rate, FBR table value, or actual market price?',
        a: 'Withholding tax applies against the official notified FBR valuation table (or declared consideration if higher), not lower DC rates.',
      },
      {
        q: 'Should I verify current budget slabs before transfer day?',
        a: 'Yes—annual Finance Acts adjust 236C/236K progressive slabs by property value tier, so confirm current FBR notifications with your tax consultant.',
      },
    ],
  },

  're-stamp-duty': {
    seoTitle: `Free Stamp Duty & Registration Fee Calculator – Registry PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate provincial stamp duty and registry charges in rupees for property deed transfer using our free Stamp Duty & Registration Fee Calculator.',
    howToUseSteps: [
      'Type the official deed valuation or DC value in rupees inside Property Value (PKR).',
      'Inspect total transfer charges broken down between Stamp Duty (2%) and Registration Fee (1%).',
    ],
    formulaExplanation:
      'Provincial property registry in Pakistan levies stamp paper duty (modeled at 2%) plus sub-registrar registration fee (modeled at 1%) against notified deed valuation. Formula: Total Fees (PKR) = (Property Value × 0.02) + (Property Value × 0.01).',
    practicalExample:
      'Registering a 10-Marla property valued at Property Value (PKR) = 15,000,000 computes Stamp Duty (2%): PKR 300,000 plus Registration (1%): PKR 150,000 for PKR 450,000 Total Fees.',
    faqs: [
      {
        q: 'Are Stamp Duty rates identical in Punjab, Sindh, Islamabad, and KPK?',
        a: 'No—provinces periodically revise stamp duty and TMA/corporation taxes (typically 1%–3% combined), so verify local DC/e-Stamp rates before generating challans.',
      },
      {
        q: 'Do society file transfers pay Stamp Duty immediately?',
        a: 'Unregistered allotment files typically pay society transfer fees first, whereas Stamp Duty and registration apply when executing a formal sale deed (Registry).',
      },
      {
        q: 'Who normally pays Stamp Duty & Registration Fees in Pakistan?',
        a: 'By market custom in Pakistan, the property buyer pays stamp duty, registration fee, and e-stamp charges unless negotiated otherwise.',
      },
    ],
  },

  're-cgt-property': {
    seoTitle: `Free Capital Gains Tax (CGT) on Property Calculator – PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate Pakistani Capital Gains Tax on property resale profit based on holding years using our free Capital Gains Tax (CGT) on Property Calculator.',
    howToUseSteps: [
      'Enter net taxable resale gain in rupees inside Capital Gain / Profit (PKR).',
      'Type complete years owned from purchase to sale under Holding Period (Years).',
      'View applicable CGT rate and total tax amount in PKR.',
    ],
    formulaExplanation:
      'This holding-period model tapers Capital Gains Tax as ownership duration lengthens: 15% for year 1 or under, 10% at 2 years, 5% at 3 years, and 0% once held 4 or more years. Formula: CGT (PKR) = Capital Gain / Profit × Holding-Period Rate.',
    practicalExample:
      'Realizing Capital Gain / Profit (PKR) = 3,000,000 after Holding Period (Years) = 2 applies the 10% bracket for PKR 300,000 CGT.',
    faqs: [
      {
        q: 'What counts as Capital Gain / Profit (PKR) instead of gross sale price?',
        a: 'Capital gain equals Selling Price minus original Purchase Cost and documented acquisition/improvement expenses—not total sale proceeds.',
      },
      {
        q: 'Why does Holding Period (Years) = 4 return PKR 0 CGT here?',
        a: 'Under this tapered holding-period schedule, properties held 4+ years qualify for 0% capital gains exemption (verify latest Finance Act dates for plots acquired after July 2024).',
      },
      {
        q: 'Is CGT calculated differently for open plots versus constructed houses?',
        a: 'Recent Pakistani tax schedules distinguish plots, flats, and constructed houses by acquisition date—consult your tax filer when submitting annual returns.',
      },
    ],
  },

  're-cap-rate': {
    seoTitle: `Free Rent Capitalization Rate (Cap Rate) Calculator – NOI % | ${SITE_NAME}`,
    metaDescription:
      'Measure unleveraged annual return from Net Operating Income and property cost using our free Rent Capitalization Rate (Cap Rate) Calculator.',
    howToUseSteps: [
      'Type annual rental profit after upkeep costs inside Net Operating Income - NOI (PKR / year).',
      'Enter total asset price in rupees into Property Value / Cost (PKR).',
      'Read annual capitalization rate percentage immediately.',
    ],
    formulaExplanation:
      'Rent capitalization rate evaluates real estate profitability independently of bank debt by dividing yearly Net Operating Income (gross rent minus operating expenses) by total property price. Formula: Cap Rate (%) = [Net Operating Income (PKR / year) / Property Value (PKR)] × 100.',
    practicalExample:
      'A commercial plaza earning Net Operating Income - NOI (PKR / year) = 1,200,000 on Property Value / Cost (PKR) = 15,000,000 delivers an 8.00% Cap Rate.',
    faqs: [
      {
        q: 'Should mortgage EMI payments be deducted before entering Net Operating Income - NOI (PKR / year)?',
        a: 'No—NOI deliberately excludes loan principal and interest so investors can compare all-cash property yields cleanly.',
      },
      {
        q: 'Is a higher Cap Rate always better?',
        a: 'Higher cap rates yield stronger current cash income per rupee invested, though lower cap rates often reflect safer, prime-location appreciation.',
      },
      {
        q: 'Can Cap Rate estimate fair market value if market cap rates are known?',
        a: 'Yes—rearranging the formula gives Fair Value = NOI ÷ Market Cap Rate.',
      },
    ],
  },

  're-mortgage-affordability': {
    seoTitle: `Free Mortgage Affordability Calculator – Max Home Loan PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate maximum home loan capacity and monthly EMI budget from household income and debts using our free Mortgage Affordability Calculator.',
    howToUseSteps: [
      'Enter combined monthly take-home pay into Monthly Household Income (PKR).',
      'Type total car lease, credit card, or personal loan EMIs inside Existing Monthly Debt Payments (PKR).',
      'Read maximum affordable housing EMI and estimated home loan ceiling in PKR.',
    ],
    formulaExplanation:
      'Mortgage underwriters cap housing installments around 40% of gross/net household income minus existing monthly debt obligations, then scale affordable monthly EMI by an 85× 15-year borrowing factor. Formula: Max EMI = (Monthly Household Income × 0.40) − Existing Monthly Debt; Max Loan = Max EMI × 85.',
    practicalExample:
      'With Monthly Household Income (PKR) = 300,000 and Existing Monthly Debt Payments (PKR) = 40,000, max housing EMI is PKR 80,000, supporting PKR 6,800,000 Max Loan.',
    faqs: [
      {
        q: 'Why does Existing Monthly Debt Payments (PKR) cut home loan eligibility rupee-for-rupee?',
        a: 'Banks sum all active debt installments against your 40% debt-burden ratio ceiling, so paying off a PKR 40,000 car loan unlocks PKR 40,000 more monthly EMI capacity.',
      },
      {
        q: 'Does Max Loan include the buyer’s cash down payment?',
        a: 'No—add your own 20%–30% cash down payment onto Max Loan to find the highest house price you can shop for.',
      },
      {
        q: 'How do KIBOR interest shifts affect the 85× loan factor?',
        a: 'Lower bank markup rates stretch each PKR of EMI into a larger loan, whereas higher KIBOR reduces maximum borrowable principal.',
      },
    ],
  },

  're-grm': {
    seoTitle: `Free Gross Rent Multiplier (GRM) Calculator – Payback Years | ${SITE_NAME}`,
    metaDescription:
      'Compare rental deals quickly by dividing property price by gross yearly rent using our free Gross Rent Multiplier (GRM) Calculator.',
    howToUseSteps: [
      'Enter asking sale price in rupees inside Property Price (PKR).',
      'Type total annual rent before expenses into Gross Annual Rent (PKR).',
      'Review the Gross Rent Multiplier ratio to judge payback speed.',
    ],
    formulaExplanation:
      'Gross Rent Multiplier expresses roughly how many years of gross collected rent would equal the property purchase price, offering a fast screening metric before detailed expense audits. Formula: GRM = Property Price (PKR) / Gross Annual Rent (PKR).',
    practicalExample:
      'Buying a flat at Property Price (PKR) = 12,000,000 renting for Gross Annual Rent (PKR) = 1,440,000 (PKR 120,000/month) gives 8.33 GRM.',
    faqs: [
      {
        q: 'Is a lower or higher GRM more attractive for cash-flow buyers?',
        a: 'A lower GRM (such as 8 vs 18) means the property collects more annual rent relative to its asking price and repays capital faster.',
      },
      {
        q: 'What major factor does Gross Rent Multiplier ignore?',
        a: 'GRM ignores vacancy losses, property taxes, and building maintenance—always follow up with Net Operating Income and Cap Rate.',
      },
      {
        q: 'Why do residential plots with houses in Pakistan show GRMs of 20–30?',
        a: 'Because land appreciation dominates market prices in major cities, residential rents typically lag behind purchase price.',
      },
    ],
  },

  're-flipping-profit': {
    seoTitle: `Free Property Flipping Profit Calculator – Fix & Flip ROI | ${SITE_NAME}`,
    metaDescription:
      'Calculate net house-flipping profit, capital invested, and ROI after rehab costs with our free Property Flipping Profit Calculator.',
    howToUseSteps: [
      'Type acquisition price inside Purchase Price (PKR).',
      'Enter contractor remodeling budget into Renovation Cost (PKR).',
      'Fill in Target Resale Price (PKR) plus Holding & Closing Costs (PKR) to inspect net flip profit and ROI.',
    ],
    formulaExplanation:
      'House flipping profit totals all cash committed across acquisition, remodeling labor/materials, and holding/transfer fees before subtracting from projected resale proceeds. Formula: Net Profit = Target Resale Price − (Purchase Price + Renovation Cost + Holding & Closing Costs); Flip ROI (%) = (Net Profit / Total Capital) × 100.',
    practicalExample:
      'Buying a 5-Marla shell at Purchase Price (PKR) = 8,000,000, spending Renovation Cost (PKR) = 1,500,000 and Holding & Closing Costs (PKR) = 400,000 (PKR 9,900,000 invested), and selling at Target Resale Price (PKR) = 12,000,000 nets PKR 2,100,000 Net Profit (21.21% Flip ROI).',
    faqs: [
      {
        q: 'What belongs inside Holding & Closing Costs (PKR) on a 6-month flip?',
        a: 'Include stamp duty, transfer fees, property utility bills, watchman/security wages, selling agent commission, and short-term financing costs.',
      },
      {
        q: 'Why do experienced flippers keep a 10%–15% contingency inside Renovation Cost (PKR)?',
        a: 'Hidden plumbing leaks, wiring replacements, and material price jumps quickly erode thin flip margins if unbudgeted.',
      },
      {
        q: 'How do property taxes affect short-term flips held under 1 year?',
        a: 'Short-term resales incur higher capital gains tax rates in Pakistan, so factor exit tax into Holding & Closing Costs (PKR).',
      },
    ],
  },

  're-remodeling-roi': {
    seoTitle: `Free House Remodeling ROI Calculator – Upgrade Value Gain | ${SITE_NAME}`,
    metaDescription:
      'Check whether kitchen, bath, or facade upgrades add more market value than their renovation cost using our free House Remodeling ROI Calculator.',
    howToUseSteps: [
      'Type total upgrade invoice in rupees inside Renovation Cost (PKR).',
      'Enter projected boost in home appraisal inside Estimated Property Value Increase (PKR).',
      'Inspect net equity gain and remodeling return percentage.',
    ],
    formulaExplanation:
      'Remodeling return compares incremental property appraisal gain directly against renovation outlay to verify whether upgrades build equity or over-improve the home for its neighborhood. Formula: Net Value Gain (PKR) = Value Increase − Renovation Cost; ROI (%) = (Net Value Gain / Renovation Cost) × 100.',
    practicalExample:
      'Investing Renovation Cost (PKR) = 2,000,000 in kitchen and bath updates yielding Estimated Property Value Increase (PKR) = 2,500,000 creates PKR 500,000 Net Value Gain (25.0% ROI).',
    faqs: [
      {
        q: 'Which home upgrades usually deliver the highest Remodeling ROI in Pakistan?',
        a: 'Fresh exterior paint, modern kitchen cabinetry, updated bathroom vanities, and clean tile flooring typically recapture cost fastest at resale.',
      },
      {
        q: 'What does a negative Net Value Gain mean?',
        a: 'If Renovation Cost exceeds Value Increase, the remodel adds personal lifestyle comfort rather than immediate resale profit.',
      },
      {
        q: 'How should owners estimate Property Value Increase realistically?',
        a: 'Compare recent sale prices of renovated versus unrenovated 5-Marla or 10-Marla homes on the same block.',
      },
    ],
  },

  're-insurance-cost': {
    seoTitle: `Free Home Insurance Cost Estimator Calculator – Annual PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate annual and monthly home hazard insurance premiums from rebuild value and rate using our free Home Insurance Cost Estimator.',
    howToUseSteps: [
      'Enter rebuild cost of the house structure (excluding land) into Home Structure Replacement Value (PKR).',
      'Type insurer quoted percentage inside Annual Premium Rate (%).',
      'Read estimated yearly and monthly hazard insurance premiums in PKR.',
    ],
    formulaExplanation:
      'Home hazard insurance prices coverage against structural rebuild cost—not plot land value—multiplied by the policy’s annual percentage rate, divided by 12 for monthly budgeting. Formula: Annual Premium (PKR) = Home Structure Replacement Value × (Annual Premium Rate / 100).',
    practicalExample:
      'Insuring a home with Home Structure Replacement Value (PKR) = 15,000,000 at Annual Premium Rate (%) = 0.3 costs PKR 45,000 / year (PKR 3,750 monthly).',
    faqs: [
      {
        q: 'Why exclude plot land price from Home Structure Replacement Value (PKR)?',
        a: 'Fire, storm, or earthquake policies only rebuild damaged physical walls, roof, and finishes—not the underlying land itself.',
      },
      {
        q: 'Is home structure insurance mandatory for bank mortgages in Pakistan?',
        a: 'Yes—virtually all Pakistani commercial banks require active fire and hazard takaful/insurance covering the financed structure value.',
      },
      {
        q: 'What typical Annual Premium Rate (%) covers standard residential houses?',
        a: 'Basic fire and allied perils coverage generally runs between 0.15% and 0.40% per year depending on construction grade and city zone.',
      },
    ],
  },

  're-agent-commission': {
    seoTitle: `Free Property Agent Commission Calculator – Dealer Fee (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Calculate real estate broker commission in Pakistani Rupees from deal price and commission percentage with our free Property Agent Commission Calculator.',
    howToUseSteps: [
      'Enter final negotiated property deal value inside Property Transaction Price (PKR).',
      'Type broker fee percentage into Commission Rate (%) (commonly 1% or 2%).',
      'View exact dealer commission payable in rupees.',
    ],
    formulaExplanation:
      'Real estate brokerage fees scale proportionally with agreed sale value by multiplying total transaction price by the negotiated commission percentage. Formula: Commission (PKR) = Property Transaction Price × (Commission Rate / 100).',
    practicalExample:
      'Closing a 10-Marla sale at Property Transaction Price (PKR) = 15,000,000 with Commission Rate (%) = 1.0 yields PKR 150,000 agent commission.',
    faqs: [
      {
        q: 'What is the customary Commission Rate (%) in Pakistani real estate deals?',
        a: 'Sale deals typically carry 1% commission each from buyer and seller (2% total), while rental leases usually charge one month’s rent.',
      },
      {
        q: 'Can Commission Rate (%) accommodate tiered or split fees like 0.5% or 1.5%?',
        a: 'Yes—enter decimals such as 0.5 or 1.5 on high-value Kanal or commercial deals where discounted rates are agreed.',
      },
      {
        q: 'Should agent commission be calculated on gross deal value before FBR taxes?',
        a: 'Brokerage fees are calculated directly on the agreed market Transaction Price, not reduced by FBR valuation differences.',
      },
    ],
  },

  're-plot-split': {
    seoTitle: `Free Land Sub-division / Plot Splitting Calculator – Marla Plots | ${SITE_NAME}`,
    metaDescription:
      'Count saleable 5-marla or 10-marla plots from raw land after road deductions using our free Land Sub-division / Plot Splitting Calculator.',
    howToUseSteps: [
      'Enter gross raw acreage converted to marlas inside Total Land Area (Marlas).',
      'Type desired individual plot size inside Target Size per Plot (Marlas).',
      'Set streets, parks, and mosque allowance under Land Allocated for Roads & Amenities (%).',
    ],
    formulaExplanation:
      'Town planning deducts mandatory roads, greenbelts, and utility setbacks from gross land before dividing remaining net usable marlas by target plot size and rounding down to whole saleable plots. Formula: Saleable Plots = floor([Total Land Area × (1 − Roads % / 100)] / Target Size per Plot).',
    practicalExample:
      'Subdividing Total Land Area (Marlas) = 100 (5 Kanals) into Target Size per Plot (Marlas) = 5 after Land Allocated for Roads & Amenities (%) = 25 leaves 75.0 net Marlas, producing 15 Saleable Plots (5 Marla each).',
    faqs: [
      {
        q: 'How much Land Allocated for Roads & Amenities (%) do development authorities require?',
        a: 'Authorities like LDA, CDA, and SBCA often mandate 25%–40% combined open space for wide roads, parks, graveyards, and commercial zones.',
      },
      {
        q: 'Why does the output round down using whole integers?',
        a: 'Leftover fractional marlas cannot become a standalone standard plot and instead become odd-size corner extensions or green pockets.',
      },
      {
        q: 'How many Marlas equal 1 Acre (Killa) if converting farmland?',
        a: 'One standard acre equals 160 Marlas (8 Kanals = 43,560 sq ft), which you can enter directly into Total Land Area (Marlas).',
      },
    ],
  },

  're-commercial-valuation': {
    seoTitle: `Free Commercial Property Valuation Calculator – GIM Appraisal | ${SITE_NAME}`,
    metaDescription:
      'Appraise commercial plazas and shops from gross annual rent and market multiplier using our free Commercial Property Valuation Calculator.',
    howToUseSteps: [
      'Type total annual lease income from all shop or office units inside Gross Annual Rental Income (PKR).',
      'Enter local commercial market multiplier into Market Gross Income Multiplier (GIM).',
      'Read estimated market valuation in Pakistani Rupees.',
    ],
    formulaExplanation:
      'Commercial income valuation multiplies gross annual rent collected from shops, warehouses, or offices by the prevailing neighborhood Gross Income Multiplier (derived from comparable commercial sales). Formula: Commercial Value (PKR) = Gross Annual Rental Income × Market GIM.',
    practicalExample:
      'A commercial floor generating Gross Annual Rental Income (PKR) = 3,000,000 at Market Gross Income Multiplier (GIM) = 8.5 appraises at PKR 25,500,000 Valuation.',
    faqs: [
      {
        q: 'How do appraisers find the right Market Gross Income Multiplier (GIM)?',
        a: 'Divide recent comparable commercial building sale prices in the same business district by their gross yearly rents.',
      },
      {
        q: 'How does GIM differ from Cap Rate valuation?',
        a: 'GIM uses gross rent before expenses, making it ideal for fast screening, whereas Cap Rate accounts for building upkeep and management costs.',
      },
      {
        q: 'Should vacant shop units count inside Gross Annual Rental Income (PKR)?',
        a: 'Use stabilized market rent adjusted for expected vacancy rather than assuming 100% permanent occupancy.',
      },
    ],
  },

  're-apartment-maintenance': {
    seoTitle: `Free Apartment Maintenance Fee Calculator – Monthly & Yearly PKR | ${SITE_NAME}`,
    metaDescription:
      'Calculate monthly and annual condo or flat maintenance charges from square footage and per-sq-ft rate with our free Apartment Maintenance Fee Calculator.',
    howToUseSteps: [
      'Enter covered flat area inside Apartment Size (Square Feet).',
      'Type building union fee per square foot in Maintenance Rate per Sq Ft (PKR / month).',
      'Check both monthly society dues and total annual maintenance outlay in PKR.',
    ],
    formulaExplanation:
      'High-rise apartment complexes apportion elevator, backup generator, security, and cleaning expenses proportionally by each flat’s covered floor area. Formula: Monthly Fee (PKR) = Apartment Size (sq ft) × Maintenance Rate per Sq Ft; Annual Fee = Monthly Fee × 12.',
    practicalExample:
      'A flat of Apartment Size (Square Feet) = 1400 billed at Maintenance Rate per Sq Ft (PKR / month) = 8 pays PKR 11,200 / month, or PKR 134,400 annually.',
    faqs: [
      {
        q: 'Are backup generator diesel charges normally included inside Maintenance Rate per Sq Ft?',
        a: 'Usually common-area lighting and elevator backup are included, while in-apartment generator kWh usage is metered separately.',
      },
      {
        q: 'Should landlords factor apartment maintenance into net rental yield?',
        a: 'If the lease requires the owner to pay building union dues rather than the tenant, include the annual PKR figure as an operating expense.',
      },
      {
        q: 'How do studio vs 3-bed flat fees compare under per-sq-ft billing?',
        a: 'Because every resident pays the exact same rate per sq ft, a 2,100 sq ft unit pays 50% more monthly maintenance than a 1,400 sq ft unit.',
      },
    ],
  },

  're-appreciation': {
    seoTitle: `Free Annual Property Appreciation Calculator – Compound PKR Growth | ${SITE_NAME}`,
    metaDescription:
      'Project future compound value of plots and homes over years at an annual growth rate with our free Annual Property Appreciation Calculator.',
    howToUseSteps: [
      'Enter today’s market appraisal inside Current Property Value (PKR).',
      'Type expected yearly growth percentage into Annual Appreciation Rate (%).',
      'Set holding horizon under Years to view compounded future value and total rupee gain.',
    ],
    formulaExplanation:
      'Long-term real estate appreciation compounds year-over-year just like compound interest, multiplying current value by (1 + annual rate) raised to holding years. Formula: Future Value (PKR) = Current Property Value × (1 + Annual Appreciation Rate / 100)^Years.',
    practicalExample:
      'A 10-Marla house at Current Property Value (PKR) = 20,000,000 growing at Annual Appreciation Rate (%) = 10 over Years = 5 reaches PKR 32,210,200 (PKR 12,210,200 gain).',
    faqs: [
      {
        q: 'Why does 10% appreciation over 5 years yield PKR 12,210,200 instead of PKR 10,000,000?',
        a: 'Compound growth earns 10% on each prior year’s appreciated value rather than simple linear 10% × 5 = 50% growth.',
      },
      {
        q: 'Do developing plot files appreciate evenly every year?',
        a: 'Real estate often moves in jumps around balloting, road carpeting, and possession milestones—treat Annual Appreciation Rate (%) as a multi-year average.',
      },
      {
        q: 'Can I compare property appreciation against inflation?',
        a: 'Subtract average annual CPI inflation from Annual Appreciation Rate (%) to model real purchasing-power growth.',
      },
    ],
  },

  're-payoff-acceleration': {
    seoTitle: `Free Mortgage Payoff Acceleration Calculator – Extra Principal PKR | ${SITE_NAME}`,
    metaDescription:
      'Estimate interest saved on home financing by paying extra monthly principal in PKR using our free Mortgage Payoff Acceleration Calculator.',
    howToUseSteps: [
      'Type unpaid bank loan principal into Remaining Loan Balance (PKR).',
      'Enter additional voluntary principal paid monthly inside Extra Monthly Principal Payment (PKR).',
      'Supply your mortgage markup percentage under Annual Markup Rate (%) to preview estimated interest savings.',
    ],
    formulaExplanation:
      'Extra monthly principal prepayments immediately shrink the interest-bearing balance every billing cycle, cutting compounded markup across five-year horizons roughly proportional to half the annual markup rate on prepaid principal. Formula: Est. 5-Yr Interest Saved (PKR) ≈ (Extra Monthly Principal × 12) × (Annual Markup Rate / 200) × 5.',
    practicalExample:
      'Adding Extra Monthly Principal Payment (PKR) = 25,000 against Remaining Loan Balance (PKR) = 8,000,000 at Annual Markup Rate (%) = 16 saves Approx. PKR 120,000 Interest Saved over five years.',
    faqs: [
      {
        q: 'Do Pakistani banks charge an early partial-prepayment penalty?',
        a: 'Some Islamic and conventional home finance contracts allow penalty-free annual partial prepayments up to a capped percentage, while others charge 1%–3%—check your offer letter.',
      },
      {
        q: 'Should extra payments be marked explicitly toward principal reduction?',
        a: 'Always instruct the bank branch that extra cash reduces principal balance rather than advancing next month’s scheduled EMI.',
      },
      {
        q: 'When in a 15-year mortgage do extra principal payments save the most markup?',
        a: 'Prepayments made in the first 1–5 years eliminate decades of future markup compounding.',
      },
    ],
  },

  're-home-equity': {
    seoTitle: `Free Home Equity Calculator – Net Ownership Share (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Calculate your net home equity in rupees and ownership percentage by subtracting mortgage debt using our free Home Equity Calculator.',
    howToUseSteps: [
      'Type current appraised resale price inside Current Market Value (PKR).',
      'Enter unpaid principal still owed to your lender into Remaining Mortgage Balance (PKR).',
      'View total rupee equity and percentage of the home you own debt-free.',
    ],
    formulaExplanation:
      'Home equity represents the net rupee value you truly own free and clear, calculated by deducting remaining mortgage payoff balance from current market property value. Formula: Home Equity (PKR) = Current Market Value − Remaining Mortgage Balance; Equity (%) = (Home Equity / Current Market Value) × 100.',
    practicalExample:
      'Owning a house worth Current Market Value (PKR) = 25,000,000 with Remaining Mortgage Balance (PKR) = 9,000,000 provides PKR 16,000,000 Equity (64.0%).',
    faqs: [
      {
        q: 'How can Home Equity grow even faster than monthly loan repayments?',
        a: 'Rising local property prices boost Current Market Value (PKR) while regular EMIs simultaneously shrink Remaining Mortgage Balance (PKR).',
      },
      {
        q: 'What happens if Remaining Mortgage Balance exceeds Current Market Value?',
        a: 'The calculator floors displayed equity at PKR 0, signaling an underwater loan where selling wouldn’t cover debt without cash.',
      },
      {
        q: 'Does Home Equity equal cash I receive immediately upon selling?',
        a: 'Subtract selling agent commission, transfer fees, and taxes from PKR 16,000,000 Equity to find net cash walk-away proceeds.',
      },
    ],
  },

  're-noi': {
    seoTitle: `Free Gross vs Net Operating Income (NOI) Calculator – PKR | ${SITE_NAME}`,
    metaDescription:
      'Compute property Net Operating Income (NOI) in PKR from gross rent and upkeep bills with our free Gross vs Net Operating Income (NOI) Calculator.',
    howToUseSteps: [
      'Enter total yearly rent collected before bills inside Gross Annual Rental Income (PKR).',
      'Type annual repairs, management, insurance, and tax costs into Operating Expenses / Maintenance (PKR).',
      'Read annual Net Operating Income in Pakistani Rupees.',
    ],
    formulaExplanation:
      'Net Operating Income isolates core property cash earnings prior to financing or income taxes by subtracting unavoidable operating and upkeep expenses from gross rental revenue. Formula: NOI (PKR) = Gross Annual Rental Income − Operating Expenses / Maintenance.',
    practicalExample:
      'Collecting Gross Annual Rental Income (PKR) = 1,800,000 against Operating Expenses / Maintenance (PKR) = 250,000 produces PKR 1,550,000 NOI.',
    faqs: [
      {
        q: 'Which items should stay out of Operating Expenses / Maintenance (PKR) for NOI?',
        a: 'Exclude mortgage payments, loan markup, and personal FBR income tax; NOI strictly evaluates property-level revenue minus property-level upkeep.',
      },
      {
        q: 'Why is NOI essential before calculating Cap Rate?',
        a: 'Cap Rate divides NOI by property price—using gross rent instead of NOI overstates real property yield.',
      },
      {
        q: 'How should vacancy periods be treated inside Gross Annual Rental Income (PKR)?',
        a: 'Subtract 1 month of expected vacancy between tenants (using 11 months rent instead of 12) for conservative budgeting.',
      },
    ],
  },

  're-property-cap-rate': {
    seoTitle: `Free Property Capitalization Rate (Cap Rate) Calculator – Yield % | ${SITE_NAME}`,
    metaDescription:
      'Evaluate unleveraged annual property investment yield from NOI and purchase price using our free Property Capitalization Rate (Cap Rate) Calculator.',
    howToUseSteps: [
      'Type yearly net rental earnings in rupees inside Net Operating Income (NOI in PKR).',
      'Enter full acquisition price or valuation inside Property Value / Purchase Price (PKR).',
      'Inspect annual unleveraged Cap Rate percentage immediately.',
    ],
    formulaExplanation:
      'Property capitalization rate expresses unleveraged yearly income performance as a percentage of purchase price, enabling apples-to-apples comparisons across plots, apartments, and commercial shops. Formula: Property Cap Rate (%) = [Net Operating Income (NOI in PKR) / Property Value (PKR)] × 100.',
    practicalExample:
      'A 1-Kanal rented bungalow generating Net Operating Income (NOI in PKR) = 1,500,000 on Property Value / Purchase Price (PKR) = 25,000,000 returns a 6.00% Cap Rate.',
    faqs: [
      {
        q: 'How many years does a 6.00% Cap Rate take to recover purchase cost from rent alone?',
        a: 'Dividing 100 by 6.00 shows roughly 16.7 years of steady net rent, excluding any land price appreciation.',
      },
      {
        q: 'Why do commercial shops often trade at higher Cap Rates than residential houses?',
        a: 'Commercial leases deliver stronger immediate cash flow per rupee, whereas residential villas rely heavily on long-term capital appreciation.',
      },
      {
        q: 'What changes if you pay all cash versus taking a mortgage?',
        a: 'Cap Rate stays identical because it ignores debt; use Cash-on-Cash Return when evaluating leveraged down-payment returns.',
      },
    ],
  },

  're-cash-on-cash': {
    seoTitle: `Free Property Cash on Cash Return Calculator – Equity Yield % | ${SITE_NAME}`,
    metaDescription:
      'Compute annual cash-on-cash return percentage on actual down payment and cash invested using our free Property Cash on Cash Return Calculator.',
    howToUseSteps: [
      'Type yearly rent profit remaining after mortgage EMIs and upkeep into Annual Pre-Tax Cash Flow (PKR).',
      'Enter total out-of-pocket down payment, fees, and rehab cash inside Total Cash Invested / Down Payment (PKR).',
      'Check annual percentage yield earned directly on your invested cash.',
    ],
    formulaExplanation:
      'Cash-on-Cash Return measures actual annual cash profit earned relative solely to the buyer’s out-of-pocket cash deposit rather than total property value including borrowed bank funds. Formula: Cash-on-Cash Return (%) = [Annual Pre-Tax Cash Flow (PKR) / Total Cash Invested (PKR)] × 100.',
    practicalExample:
      'Putting Total Cash Invested / Down Payment (PKR) = 5,000,000 into an apartment yielding Annual Pre-Tax Cash Flow (PKR) = 600,000 earns a 12.00% Cash-on-Cash Return.',
    faqs: [
      {
        q: 'Why does Total Cash Invested / Down Payment (PKR) include closing fees and initial repairs?',
        a: 'Every rupee spent out of pocket before tenant move-in—down payment, stamp duty, transfer fee, and paint—ties up your cash capital.',
      },
      {
        q: 'How can Cash-on-Cash Return beat Cap Rate on financed properties?',
        a: 'When rental yield exceeds bank financing cost (positive leverage), borrowing amplifies cash return on your smaller down payment.',
      },
      {
        q: 'Does Annual Pre-Tax Cash Flow include property appreciation?',
        a: 'No—Cash-on-Cash focuses strictly on spendable yearly cash flow rather than unrealized paper equity gains.',
      },
    ],
  },

  're-refinance-breakeven': {
    seoTitle: `Free Mortgage Refinance Breakeven Calculator – Months to Payback | ${SITE_NAME}`,
    metaDescription:
      'Find how many months lower loan payments need to repay switching fees using our free Mortgage Refinance Breakeven Calculator.',
    howToUseSteps: [
      'Enter bank processing, valuation, and legal charges inside Refinancing Closing Costs (PKR).',
      'Type monthly installment reduction achieved under the new loan into Monthly Payment Savings (PKR).',
      'Read exact payback timeline in months and years.',
    ],
    formulaExplanation:
      'Refinancing only saves money if you keep the property long enough for cumulative monthly EMI reductions to exceed upfront switching fees. Formula: Breakeven Months = Refinancing Closing Costs (PKR) / Monthly Payment Savings (PKR).',
    practicalExample:
      'Paying Refinancing Closing Costs (PKR) = 150,000 to cut payments by Monthly Payment Savings (PKR) = 12,000 reaches payback in ~12.5 Months to Breakeven (1.0 years).',
    faqs: [
      {
        q: 'When does refinancing make financial sense based on Breakeven Months?',
        a: 'If you plan to keep the home well past 12.5 months—say 3 to 10 more years—refinancing captures net positive savings.',
      },
      {
        q: 'What fees belong inside Refinancing Closing Costs (PKR)?',
        a: 'Sum early settlement charges from your old bank, new loan processing fee, property valuation, and legal mortgage registration.',
      },
      {
        q: 'What if Monthly Payment Savings (PKR) comes from stretching the loan term longer?',
        a: 'Check total remaining interest paid too—extending a 10-year balance back to 20 years lowers monthly bills while raising lifetime markup.',
      },
    ],
  },

  're-equity-loan-limit': {
    seoTitle: `Free Home Equity Loan Borrowing Limit Calculator – 80% LTV PKR | ${SITE_NAME}`,
    metaDescription:
      'Calculate maximum borrowable home equity under an 80% LTV rule minus mortgage debt with our free Home Equity Loan Borrowing Limit Calculator.',
    howToUseSteps: [
      'Type current appraised house or plot value into Current Property Market Value (PKR).',
      'Enter any remaining home loan balance inside Outstanding Mortgage Balance (PKR) (enter 0 if debt-free).',
      'Check maximum total home equity borrowing limit based on 80% LTV.',
    ],
    formulaExplanation:
      'Lenders typically cap combined property-backed borrowing at 80% of appraised market value (Loan-to-Value, LTV), then subtract existing mortgage debt to determine remaining borrowable home equity. Formula: Max Equity Loan (PKR) = max(0, [Current Market Value × 0.80] − Outstanding Mortgage Balance).',
    practicalExample:
      'On a 1-Kanal home at Current Property Market Value (PKR) = 30,000,000 (80% LTV = PKR 24,000,000) with Outstanding Mortgage Balance (PKR) = 10,000,000, borrowing capacity equals PKR 14,000,000 Max Loan Limit.',
    faqs: [
      {
        q: 'Why do banks enforce an 80% LTV ceiling instead of lending 100% of equity?',
        a: 'Keeping a 20% collateral cushion shields the bank against temporary property price dips and legal recovery expenses.',
      },
      {
        q: 'What happens if Outstanding Mortgage Balance already exceeds 80% of market value?',
        a: 'The formula outputs PKR 0 Max Loan Limit because existing debt already consumes the bank’s collateral threshold.',
      },
      {
        q: 'Can business owners or salaried homeowners verify income eligibility separately?',
        a: 'Yes—even with PKR 14,000,000 collateral room, banks still require monthly income proof supporting the resulting installment.',
      },
    ],
  },

  're-usa-home-affordability': {
    seoTitle: `Free Home Affordability Calculator – Budget & DTI | ${SITE_NAME}`,
    metaDescription:
      'Estimate how much house you can afford from income, debts, down payment, and mortgage rates with our free Home Affordability Calculator.',
    howToUseSteps: [
      'Enter household pay in Annual Gross Income ($), existing obligations in Monthly Debt Payments ($), and cash ready in Down Payment ($).',
      'Set your quoted Mortgage Interest Rate (%) and Loan Term (Years).',
      'Customize Max Back-End DTI Ratio (%) and Annual Property Tax & Insurance (% of Home) to view your maximum affordable home price.',
    ],
    formulaExplanation:
      'Allowable monthly housing payment equals (Annual Gross Income / 12 × Max Back-End DTI Ratio %) minus Monthly Debt Payments ($). Solving for home price combines principal-and-interest mortgage factor on (Home Price − Down Payment) with monthly property tax and insurance. Formula: Max PITI = (Gross Monthly Income × DTI%) − Monthly Debts.',
    practicalExample:
      'Earning Annual Gross Income ($) = $110,000 with Monthly Debt Payments ($) = $500, Down Payment ($) = $60,000, Mortgage Interest Rate (%) = 6.5%, Loan Term (Years) = 30, Max Back-End DTI Ratio (%) = 36%, and Annual Property Tax & Insurance (% of Home) = 1.5% yields $419,941 Max Home Price ($359,941 loan and $2,800 monthly PITI).',
    faqs: [
      {
        q: 'Why does Max Back-End DTI Ratio (%) subtract Monthly Debt Payments ($)?',
        a: 'Back-end debt-to-income counts auto loans, student loans, and credit card minimums together with housing costs against gross monthly pay.',
      },
      {
        q: 'Does Annual Property Tax & Insurance (% of Home) vary across US states?',
        a: 'Yes—local county tax assessments and homeowner insurance premiums vary widely, so adjust this percentage to fit your target zip code.',
      },
      {
        q: 'How can I raise my affordable home budget without increasing Annual Gross Income ($)?',
        a: 'Paying down Monthly Debt Payments ($) or adding to Down Payment ($) directly raises maximum purchasing power.',
      },
    ],
  },

  're-usa-rent-vs-buy': {
    seoTitle: `Free Rent vs Buy Calculator – Homeownership Cost | ${SITE_NAME}`,
    metaDescription:
      'Compare net buying costs and home equity against escalating rent over your planned stay with our free Rent vs Buy Calculator.',
    howToUseSteps: [
      'Enter Home Purchase Price ($), Down Payment ($), Mortgage Rate (%), and Loan Term (Years) for the buying scenario.',
      'Type current Monthly Rent ($) and Annual Rent Increase (%) for the renting alternative.',
      'Set Annual Home Appreciation (%) and Years You Plan to Stay to compare net buying cost against cumulative rent.',
    ],
    formulaExplanation:
      'Buying tracks your upfront down payment, cumulative mortgage payments, and estimated property upkeep minus projected home equity (appreciated home value minus remaining loan balance). Renting compounds Monthly Rent ($) yearly by Annual Rent Increase (%) over Years You Plan to Stay. Formula: Net Buy Cost = Outflows − (Future Home Value − Remaining Loan).',
    practicalExample:
      'Comparing Home Purchase Price ($) = $400,000, Down Payment ($) = $80,000, Mortgage Rate (%) = 6.5%, Loan Term (Years) = 30, Monthly Rent ($) = $2,400, Annual Rent Increase (%) = 3%, Annual Home Appreciation (%) = 3.5%, and Years You Plan to Stay = 7 yields Buying saves ~$148,359 ($72,320 net buy cost vs $220,679 rent).',
    faqs: [
      {
        q: 'Why does Years You Plan to Stay change whether renting or buying wins?',
        a: 'Longer stays allow mortgage amortization and Annual Home Appreciation (%) to outweigh upfront ownership and maintenance costs.',
      },
      {
        q: 'What ongoing ownership expenses are reflected in Net Buy Cost?',
        a: 'Alongside mortgage principal and interest, the model adds an estimated 1.5% annual allowance for property taxes and upkeep.',
      },
      {
        q: 'How sensitive is Rent vs Buy to Annual Home Appreciation (%)?',
        a: 'Higher appreciation lowers Net Buy Cost significantly, whereas flat home prices over short stays often favor renting.',
      },
    ],
  },

  're-usa-down-payment-savings': {
    seoTitle: `Free Down Payment Savings Calculator – Monthly Plan | ${SITE_NAME}`,
    metaDescription:
      'Calculate how many months it takes to save your target home down payment with APY growth using our free Down Payment Savings Calculator.',
    howToUseSteps: [
      'Set Target Home Price ($) and your desired Target Down Payment (%) (such as 10% or 20%).',
      'Enter cash already set aside in Current Savings ($) plus your Monthly Savings Contribution ($).',
      'Input your high-yield Savings Account APY (%) to calculate months needed to hit your down payment target.',
    ],
    formulaExplanation:
      'First multiplying Target Home Price ($) by Target Down Payment (%) sets your dollar goal, then month-by-month simulation adds Monthly Savings Contribution ($) and compounds monthly interest at Savings Account APY (%) / 12 until reaching the goal. Formula: Target = Home Price × Down Payment %.',
    practicalExample:
      'Saving toward Target Home Price ($) = $380,000 at Target Down Payment (%) = 20% ($76,000 target) starting from Current Savings ($) = $22,000 with Monthly Savings Contribution ($) = $1,500 and Savings Account APY (%) = 4.2% reaches the target in 33 Months (2.8 yrs).',
    faqs: [
      {
        q: 'Do I always need 20% in Target Down Payment (%) to buy a home in the USA?',
        a: 'No—many conventional and government-backed mortgages accept 3% to 10% down, though 20% generally avoids private mortgage insurance (PMI).',
      },
      {
        q: 'How much faster does Savings Account APY (%) help reach the goal?',
        a: 'Keeping funds in a 4%+ APY account instead of 0.1% checking shaves months off a multi-year savings timeline through monthly interest.',
      },
      {
        q: 'Should closing costs also be budgeted beyond Target Down Payment (%)?',
        a: 'Yes—buyers often budget an extra 2% to 5% of Target Home Price ($) for lender, appraisal, and title closing fees.',
      },
    ],
  },
};
