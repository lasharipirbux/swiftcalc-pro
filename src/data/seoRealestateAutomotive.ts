import { ConstructionHealthSeoContent } from './seoConstructionHealth';

export const realestateAutomotiveSeoMap: Record<string, ConstructionHealthSeoContent> = {
  // ==========================================
  // REAL ESTATE & PROPERTY (29 Calculators)
  // ==========================================
  'rental-yield': {
    intro: 'Evaluating a house, apartment, or commercial shop in Karachi, Lahore, or Islamabad by its monthly rent alone can be misleading if the property purchase price is high. Rental yield expresses your annual rental return as a percentage of the property’s purchase price so you can compare real estate against bank term deposits or National Savings. This calculator computes both Gross Rental Yield and Net Rental Yield after annual maintenance expenses.',
    howItWorks: 'Monthly rent in PKR is multiplied by 12 to determine Gross Annual Rent. Gross Yield divides Gross Annual Rent by Purchase Price and multiplies by 100, while Net Yield subtracts annual maintenance, society charges, and property tax expenses from Gross Annual Rent before dividing by Purchase Price. Formula: Net Yield = [(Monthly Rent × 12 − Annual Expenses) / Purchase Price] × 100.',
    workedExample: 'Suppose you purchase a 5-Marla house in Johar Town Lahore for PKR 15,000,000 that rents for PKR 150,000 per month (PKR 1,800,000 annual rent) with PKR 100,000 in annual maintenance expenses. Your Gross Yield is 12.00% and your Net Yield after expenses is [(1,800,000 − 100,000) / 15,000,000] × 100 = 11.33%.',
    faqs: [
      { q: 'What is the average residential vs commercial rental yield in Pakistan?', a: 'Residential houses in DHA, Bahria Town, and CDA sectors typically yield 3.5% to 5.5% annually, while commercial shops and plazas often yield 6% to 9%.' },
      { q: 'Why do Pakistani investors buy low-yield residential plots or houses?', a: 'Because historically a large share of total return in Pakistani real estate comes from long-term capital appreciation rather than monthly rental cash flow alone.' },
      { q: 'What annual expenses should a landlord deduct when calculating Net Yield?', a: 'Include society security/maintenance charges, annual whitewash/plumbing repairs, property agent 1-month commission, and Excise urban immovable property tax (UIPT).' },
      { q: 'Does a 10% annual rent escalation clause improve my yield over time?', a: 'Yes! Standard Pakistani tenancy agreements include a 10% annual rent increase, which steadily boosts your yield on original cost every year.' }
    ],
    whoUses: 'Who uses this: Real estate investors, overseas Pakistanis buying rental units, landlords, and property portfolio managers.'
  },
  'plot-area-converter': {
    intro: 'Land measurement units across Pakistan vary by region—housing societies in Lahore, Islamabad, Rawalpindi, and Peshawar price plots in Marlas and Kanals, whereas Karachi uses Square Yards (Gazz) and architectural blueprints use Square Feet. This multi-unit converter translates any plot area across Marla, Kanal, Square Feet, Square Yards, and Square Meters simultaneously.',
    howItWorks: 'The calculator first converts your entered value into Square Feet using the standard revenue conversion factor where 1 Marla = 272.25 sq ft, 1 Kanal = 20 Marlas (5,445 sq ft), 1 Square Yard = 9 sq ft, and 1 Square Meter = 10.7639 sq ft. It then divides that Square Feet figure back into all five units. Formula: 1 Marla = 272.25 sq ft; 1 Kanal = 20 Marla = 5,445 sq ft; 1 Sq Yd = 9 sq ft.',
    workedExample: 'Converting a 5 Marla residential plot under the 272.25 sq ft revenue standard yields 1,361.25 sq ft, which equals 0.250 Kanal, 151.25 sq yd (Gazz), or 126.46 sq m.',
    faqs: [
      { q: 'What is the difference between a 272.25 sq ft Marla and a 225 sq ft Marla?', a: 'Under the British-era Patwar land revenue system and in Islamabad/Rawalpindi/rural Punjab, 1 Marla is 272.25 sq ft (30.25 sq yd); in Lahore/Faisalabad private societies like DHA and Bahria, 1 Marla is standardized at 225 sq ft (25 sq yd).' },
      { q: 'How many Square Yards (Gazz) is a 500-yard plot in DHA Karachi?', a: 'At 9 sq ft per Square Yard, a 500-yard plot in Karachi equals 4,500 sq ft (which corresponds to a 1-Kanal plot in Lahore).' },
      { q: 'How many Marlas are in 1 Kanal and 1 Acre (Killa)?', a: '1 Kanal always equals 20 Marlas, and 1 Acre (Killa) equals 8 Kanals (160 Marlas).' },
      { q: 'Why do architects convert Marlas to Square Feet before designing a floor plan?', a: 'Covered area, room dimensions, setback bylaws, and grey-structure contractor rates are always calculated per Square Foot.' }
    ],
    whoUses: 'Who uses this: Plot buyers in DHA/Bahria/CDA, Patwaris, civil architects, and real estate dealers.'
  },
  'plot-price-calc': {
    intro: 'In agricultural estates, semi-urban housing schemes, and commercial land deals across Punjab and KPK, land prices are negotiated as a "per Marla rate" (such as PKR 1,200,000 per Marla) even when the buyer is purchasing a 10-Marla, 1-Kanal, or 4-Kanal parcel. This calculator computes the exact total plot price in PKR.',
    howItWorks: 'If your plot size unit is selected as "Kanal", the calculator first multiplies the Kanal count by 20 to convert the land into Total Marlas. It then multiplies Total Marlas by your entered Price per Marla in PKR. Formula: Total Price (PKR) = Rate per Marla × Total Marlas (where 1 Kanal = 20 Marlas).',
    workedExample: 'Buying a 10-Marla residential plot at a market rate of PKR 1,200,000 per Marla gives a Total Price of PKR 12,000,000. If you switch the unit to 1 Kanal (20 Marlas) at the same rate, the total price becomes PKR 24,000,000.',
    faqs: [
      { q: 'Can I enter odd or fractional Marla sizes like 5.5 Marlas or 1.25 Kanals?', a: 'Yes! Corner plots or irregular "extra-land" plots often measure 5.4 or 11.2 Marlas; entering decimals calculates the exact pro-rata price.' },
      { q: 'Do housing societies charge extra for corner, park-facing, or main-boulevard plots?', a: 'Yes, most societies in Pakistan add a 10% premium for a corner or park-facing plot (and 15% if it is both corner and park-facing).' },
      { q: 'How do I calculate the price of 1 Acre (8 Kanals) using a per-Marla rate?', a: 'Select "Kanal" as the Plot Size Unit and enter 8 as the Plot Size (which equals 160 Marlas).' },
      { q: 'Does this price include society transfer fees and FBR taxes?', a: 'This calculates the base land price paid to the seller; transfer fees, stamp duty, and withholding taxes are paid separately at transfer.' }
    ],
    whoUses: 'Who uses this: Land investors, housing society booking offices, property dealers, and agricultural land buyers.'
  },
  'marla-to-sqft-price': {
    intro: 'When comparing a residential plot priced per Marla against a commercial shop or apartment priced per Square Foot, you need a common yardstick. This converter divides your Price per Marla in PKR by 272.25 to reveal the exact land cost per square foot.',
    howItWorks: 'Using the standard 272.25 square feet per Marla conversion factor, the calculator divides your Price per Marla (PKR) by 272.25 and rounds to two decimal places. Formula: Price per Sq Ft (PKR) = Price per Marla / 272.25.',
    workedExample: 'A plot in Islamabad priced at PKR 1,500,000 per Marla works out to 1,500,000 / 272.25 = PKR 5,509.64 per square foot of land.',
    faqs: [
      { q: 'What if my society uses the 225 sq ft Marla standard (like in Lahore)?', a: 'For a 225 sq ft Marla, the per-sq-ft price will be roughly 21% higher than the 272.25 sq ft figure (divide Price per Marla by 225).' },
      { q: 'Why is commercial land always quoted per Square Foot instead of per Marla?', a: 'Because commercial shops, offices, and high-rise floor plates vary in exact square footage and carry high per-foot valuations (often PKR 35,000–100,000+ per sq ft).' },
      { q: 'How can builders use this to price apartments?', a: 'Dividing the plot’s per-sq-ft land cost by the allowed Floor Area Ratio (FAR, e.g., 5 stories) shows the land cost component per sq ft of built apartment.' },
      { q: 'Does this include construction cost per sq ft?', a: 'No, this converts pure land cost; add your grey/finishing construction rate per sq ft to find the total built-house cost.' }
    ],
    whoUses: 'Who uses this: Real estate developers, commercial plaza builders, valuers, and home buyers.'
  },
  'construction-cost-est': {
    intro: 'Before breaking ground on a 5-Marla, 10-Marla, or 1-Kanal house in Pakistan, homeowners must budget total construction expenditure based on the architect’s total covered area (ground floor + first floor + mumty) and the prevailing contractor rate per square foot in PKR.',
    howItWorks: 'The calculator multiplies your total Covered Area in square feet by the construction Rate per Sq Ft in PKR (whether for Grey Structure only or Turnkey A-Category Finishing). Formula: Total Construction Cost (PKR) = Covered Area (sq ft) × Rate per Sq Ft (PKR).',
    workedExample: 'Building a double-story 5-Marla or single-unit 10-Marla house with 2,500 sq ft of covered area at a turnkey rate of PKR 4,500 per sq ft requires a total construction budget of PKR 11,250,000.',
    faqs: [
      { q: 'What is typical Covered Area for a double-story 5-Marla vs 10-Marla house in Pakistan?', a: 'A double-story 5-Marla house typically spans 1,800 to 2,100 sq ft of covered area, while a double-story 10-Marla house spans 3,200 to 3,600 sq ft.' },
      { q: 'What is the difference between Grey Structure rate and Turnkey (With Material) rate?', a: 'Grey Structure (bricks, cement, steel, plaster, plumbing/wiring conduits) typically costs PKR 2,600–3,200/sq ft, while full A-grade finishing costs PKR 4,500–6,500+/sq ft.' },
      { q: 'Are porches, balconies, and mumty counted at 100% covered area?', a: 'Contractors usually measure slab-covered car porches and mumty rooms at 100% area, while open boundary walls and courtyard flooring are billed separately or at 50%.' },
      { q: 'What if I hire a labor-only contractor and buy materials myself?', a: 'Enter the labor-only rate per sq ft (typically PKR 650 to PKR 950/sq ft for grey structure labor) to estimate your contractor labor bill.' }
    ],
    whoUses: 'Who uses this: Homeowners planning house construction, civil turnkey contractors, architects, and bank house-building loan officers.'
  },
  'property-installment': {
    intro: 'New housing societies, high-rise apartment towers, and commercial malls across Lahore, Islamabad, Karachi, and Multan sell files, plots, and flats on 3-year or 4-year monthly installment plans. By entering the total booking price, down payment, and installment months, you can calculate your exact monthly outlay.',
    howItWorks: 'The calculator subtracts your upfront Down Payment (booking + confirmation amount) from the Total Property Price to find the Remaining Financed Balance, then divides equally by the Number of Months. Formula: Monthly Installment (PKR) = (Total Price − Down Payment) / Number of Months.',
    workedExample: 'Purchasing a luxury apartment priced at PKR 12,000,000 with a PKR 3,000,000 down payment (25%) leaves a remaining balance of PKR 9,000,000. Spread over a 36-month (3-year) payment plan, the monthly installment is PKR 250,000 / month.',
    faqs: [
      { q: 'How do I account for a 10% or 15% "On Possession" or "Balloting" lump-sum payment?', a: 'Add the possession/balloting lump sum to the Down Payment field so the remaining balance reflects only the amount divided across monthly installments.' },
      { q: 'How do I convert monthly installments into quarterly (every 3 months) installments?', a: 'Multiply the calculated monthly installment by 3—for example, PKR 250,000/month equals PKR 750,000 per quarter across 12 quarters.' },
      { q: 'Do developer installment plans in Pakistan charge bank interest?', a: 'Developer payment plans are usually advertised at 0% interest (fixed schedule price), though cash buyers often get a 10% lump-sum discount.' },
      { q: 'Are development charges included in the plot booking price?', a: 'Always check whether your file is "With Development Charges" or "Without Development Charges," as society development charges can add 20%–35% later.' }
    ],
    whoUses: 'Who uses this: Plot file buyers, apartment investors, real estate sales consultants, and overseas Pakistani buyers.'
  },
  'down-payment-calc': {
    intro: 'Whether you are booking a commercial shop with a 25% down payment or applying for an Islamic house financing facility (Diminishing Musharakah) from Meezan Bank or HBL that requires a 20% to 30% customer equity contribution, this calculator finds both your upfront cash requirement and the remaining balance.',
    howItWorks: 'The calculator multiplies Total Property Price (PKR) by the Down Payment Percentage divided by 100 to determine the upfront Down Payment, and subtracts that amount from the total price to show the Remaining Financing Balance. Formula: Down Payment = Total Price × (Percentage / 100); Balance = Total Price − Down Payment.',
    workedExample: 'For a property priced at PKR 10,000,000 requiring a 25% down payment, you need PKR 2,500,000 upfront cash, leaving a Financing / Balance of PKR 7,500,000.',
    faqs: [
      { q: 'What is the typical down payment percentage for housing societies in Pakistan?', a: 'Most societies require 10% on booking plus 10% on confirmation within 30 days (20% total down payment), while apartments typically ask for 25% to 30%.' },
      { q: 'What is "Token Money" vs "Biana" (Earnest Money) in resale property deals?', a: 'In resale transactions, buyers pay a small Token first, followed within 7 days by Biana (usually 10% to 25% down payment) upon signing the Agreement to Sell.' },
      { q: 'Does a higher down payment reduce my monthly bank mortgage installment?', a: 'Yes, putting 35% or 40% down reduces the principal borrowed, lowering both your monthly installment and total markup paid over the tenure.' },
      { q: 'Are transfer fees and stamp duty part of the down payment?', a: 'No, closing costs (typically 4% to 6% of property value) must be budgeted in cash on top of your down payment.' }
    ],
    whoUses: 'Who uses this: First-time home buyers, Islamic mortgage applicants, and property booking agents.'
  },
  'property-profit-calc': {
    intro: 'Many property investors think they made a PKR 3.5 million profit when buying a plot for PKR 8 million and selling it for PKR 11.5 million—forgetting to deduct FBR taxes, society transfer fees, stamp duty, and dealer commissions. This calculator computes your true net profit in PKR and exact Return on Investment (ROI %).',
    howItWorks: 'Your Purchase Buy Price and Total Taxes & Expenses are added together to establish your true Total Investment Cost. Subtracting Total Investment Cost from the Selling Price gives Net Profit, which is divided by Total Investment Cost and multiplied by 100 for ROI %. Formula: Net Profit = Selling Price − (Buy Price + Expenses); ROI % = [Net Profit / (Buy Price + Expenses)] × 100.',
    workedExample: 'Buying a plot for PKR 8,000,000, incurring PKR 300,000 in transfer taxes and dealer commissions (Total Investment = PKR 8,300,000), and selling it for PKR 11,500,000 yields a Net Profit of PKR 3,200,000 and an ROI of 38.55%.',
    faqs: [
      { q: 'Why is ROI divided by (Buy Price + Expenses) instead of just Buy Price?', a: 'Because the PKR 300,000 paid for transfer fees and taxes came out of your pocket as invested capital required to execute the deal.' },
      { q: 'What expenses should I include in the "Taxes & Expenses" box?', a: 'Include buyer FBR tax (236K), society transfer fee, stamp duty, seller FBR tax (236C), and the 1% + 1% dealer commission on buying and selling.' },
      { q: 'How do I calculate annualized ROI if I held the plot for 3 years?', a: 'Divide the total ROI percentage (38.55%) by 3 years for a simple average (~12.85%/year), or use our Annual Property Appreciation calculator for compound growth.' },
      { q: 'What happens if Selling Price is lower than Buy Price + Expenses?', a: 'The calculator outputs a negative PKR figure and negative ROI %, showing your exact net capital loss.' }
    ],
    whoUses: 'Who uses this: Plot investors, real estate traders, tax advisors, and wealth managers.'
  },
  're-fbr-property-tax': {
    intro: 'Under the Income Tax Ordinance in Pakistan, purchasing or selling immovable property triggers mandatory FBR advance withholding tax (Sections 236K and 236C), where Active Taxpayers (Filers on the ATL list) pay a fraction of the rate charged to Non-Filers. This calculator estimates the tax difference in PKR.',
    howItWorks: 'Based on your selected Tax Status, the calculator applies a benchmark Filer withholding rate (2%) or Non-Filer withholding rate (6%) to the FBR Valuation / DC Rate of the property. Formula: Withholding Tax (PKR) = Property FBR Value × Applicable Tax Rate (2% Filer / 6% Non-Filer).',
    workedExample: 'On a property with an FBR Valuation Table value of PKR 10,000,000, an Active Taxpayer (Filer) pays an estimated PKR 200,000 (at 2%), whereas a Non-Filer pays PKR 600,000 (at 6%)—a PKR 400,000 penalty for not being on the Active Taxpayers List!',
    faqs: [
      { q: 'What is the difference between DC Rate, FBR Valuation Rate, and Market Value?', a: 'DC Rate is set by the District Collector for stamp duty; FBR Rate is notified by the Federal Board of Revenue for 236C/236K taxes; Market Value is the actual transaction price.' },
      { q: 'Has the FBR introduced progressive slabs based on property value (up to PKR 50M, 50M–100M, and 100M+)?', a: 'Yes, recent Finance Acts introduced tiered slabs for Filers, Late Filers, and Non-Filers where higher-value properties attract slightly higher percentages.' },
      { q: 'Is Section 236K (Buyer Tax) adjustable in my annual income tax return?', a: 'Yes, advance tax collected under Section 236K on property purchase is adjustable against your annual tax liability if you are a Filer.' },
      { q: 'How can an overseas Pakistani holding a NICOP get Filer tax rates on property?', a: 'Overseas Pakistanis can either join the ATL by filing a return or apply for the FBR Non-Resident verification exemption certificate via IRIS.' }
    ],
    whoUses: 'Who uses this: Property buyers and sellers, real estate consultants, tax lawyers, and registry deed writers (Wasiqa Navees).'
  },
  're-stamp-duty': {
    intro: 'When registering a Sale Deed (Registry) at the Sub-Registrar office in Punjab, Sindh, KPK, or Balochistan, the buyer must purchase provincial e-Stamp papers and pay the registration fee. This calculator estimates your combined Stamp Duty (2%) and Registration Fee (1%) in PKR.',
    howItWorks: 'The calculator multiplies the property’s valuation by 2% ($0.02$) for Provincial Stamp Duty and by 1% ($0.01$) for the Registration / Mutation Fee, summing both to display your Total Transfer Fees. Formula: Total Fees = Stamp Duty (2% of Value) + Registration Fee (1% of Value) = 3% Total.',
    workedExample: 'For a residential property valued at PKR 15,000,000 on the valuation table, Stamp Duty (2%) is PKR 300,000 and Registration Fee (1%) is PKR 150,000, resulting in PKR 450,000 Total Fees.',
    faqs: [
      { q: 'How are e-Stamps generated for property registries in Pakistan?', a: 'Through the provincial Board of Revenue e-Stamping portal (e.g., `estamp.punjab.gov.pk` or `estamp.sindh.gov.pk`), generating a 32-A challan payable at Bank of Punjab / National Bank.' },
      { q: 'Do private housing societies like DHA or Bahria Town require Stamp Duty on allotment transfers?', a: 'File and allotment-letter transfers inside society offices typically charge a fixed per-Marla Society Transfer Fee instead of a full Sub-Registrar Sale Deed stamp duty.' },
      { q: 'Who pays the Stamp Duty and Registration Fee—the buyer or the seller?', a: 'By market convention across Pakistan, the buyer always pays the Stamp Duty, Registration Fee, and society transfer charges.' },
      { q: 'Do provincial stamp duty percentages change in provincial budgets?', a: 'Yes, Punjab and Sindh periodically adjust urban stamp duty between 1% and 2% in their annual July provincial finance bills.' }
    ],
    whoUses: 'Who uses this: Property buyers preparing for registry day, real estate lawyers, and deed writers.'
  },
  're-cgt-property': {
    intro: 'Capital Gains Tax (CGT) under Section 37 of Pakistan’s Income Tax Ordinance is levied on the net profit (Selling Price minus Purchase Cost) earned when disposing of a property. For properties acquired under the holding-period regime, the tax rate steps down the longer you hold the asset. This calculator computes your CGT liability.',
    howItWorks: 'Based on your entered Holding Period in years, the calculator selects the applicable CGT rate bracket: 15% for 1 year or less, 10% for 2 years, 5% for 3 years, and 0% (exempt) for 4 or more years held, multiplying that rate by your Capital Gain in PKR. Formula: CGT = Capital Gain × Applicable Holding Period Rate %.',
    workedExample: 'If you sell a plot for a net Capital Gain (profit) of PKR 3,000,000 after a holding period of 2 years, the applicable rate is 10%, resulting in PKR 300,000 CGT.',
    faqs: [
      { q: 'Is Capital Gains Tax calculated on the total selling price or only on the profit?', a: 'CGT is calculated strictly on the net Capital Gain (Selling Price minus documented Purchase Price), unlike Section 236C withholding tax which is collected on gross value.' },
      { q: 'How did recent Finance Act updates affect CGT on newly acquired properties?', a: 'For properties acquired on or after July 1, 2024, FBR aligned CGT at a flat 15% for Filers regardless of holding period, while older acquisitions retain holding-period slabs.' },
      { q: 'Can I deduct society transfer fees and stamp duty from my Capital Gain?', a: 'Yes, documented incidental costs of acquisition and transfer are deductible when computing net taxable capital gain in your IRIS tax return.' },
      { q: 'Is CGT applicable on selling your personal residential house?', a: 'Certain exemptions or credits apply for a first-time sale of a personal residence lived in by the taxpayer, subject to FBR conditions.' }
    ],
    whoUses: 'Who uses this: Real estate investors, income tax practitioners, and property sellers filing FBR returns.'
  },
  're-cap-rate': {
    intro: 'The Capitalization Rate (Cap Rate) is the gold-standard metric used by commercial real estate analysts to compare income-producing properties—such as Blue Area Islamabad offices, Gulberg Lahore showrooms, or Clifton Karachi retail outlets—independent of debt financing.',
    howItWorks: 'The calculator divides the property’s annual Net Operating Income (NOI, which is gross annual rent minus operating expenses, excluding mortgage payments) by the current Property Value or Purchase Cost, and multiplies by 100. Formula: Cap Rate (%) = (Net Operating Income / Property Value) × 100.',
    workedExample: 'A commercial showroom costing PKR 15,000,000 that generates PKR 1,200,000 per year in Net Operating Income (NOI) delivers a Cap Rate of (1,200,000 / 15,000,000) × 100 = 8.00%.',
    faqs: [
      { q: 'How is Cap Rate different from Gross Rental Yield?', a: 'Gross Rental Yield uses raw rent before expenses; Cap Rate uses Net Operating Income (NOI) after deducting maintenance, taxes, insurance, and vacancy.' },
      { q: 'Does a higher Cap Rate mean a better investment?', a: 'A higher Cap Rate means higher cash return per Rupee invested (faster payback), though prime Grade-A locations often trade at slightly lower Cap Rates due to lower risk and higher appreciation.' },
      { q: 'Are bank mortgage installments subtracted when calculating NOI for Cap Rate?', a: 'Never! Cap Rate measures the un-leveraged performance of the physical property itself so cash buyers and financed buyers can compare properties fairly.' },
      { q: 'How can I use Cap Rate in reverse to value a commercial shop?', a: 'Divide the shop’s annual NOI by the prevailing market Cap Rate (e.g., PKR 1,200,000 NOI ÷ 0.08 = PKR 15,000,000 fair value).' }
    ],
    whoUses: 'Who uses this: Commercial property investors, REIT analysts (such as Dolmen City REIT followers), and corporate leasing managers.'
  },
  're-mortgage-affordability': {
    intro: 'Before house hunting or applying for bank home financing (such as Meezan Easy Home, HBL Home Loan, or MCB Ghar), you need to know the maximum monthly installment and total loan amount banks will approve based on your household income and existing debt obligations.',
    howItWorks: 'Under State Bank of Pakistan (SBP) Prudential Regulations for Consumer Financing, banks typically cap your total Debt Burden Ratio (DBR) at 40% of net monthly take-home income. The calculator subtracts your existing monthly car/personal loan payments from 40% of your income to find your Max Affordable EMI, then multiplies by a 15-year loan factor (85) to estimate Max Loan. Formula: Max EMI = max(0, (Monthly Income × 0.40) − Existing Monthly Debt); Est. Max Loan = Max EMI × 85.',
    workedExample: 'A family with a monthly household income of PKR 300,000 and existing car loan payments of PKR 40,000/month has a 40% debt cap of PKR 120,000. Subtracting the PKR 40,000 debt leaves a Max Affordable Monthly EMI of PKR 80,000, supporting an estimated Max Loan of PKR 6,800,000.',
    faqs: [
      { q: 'What is the Debt Burden Ratio (DBR) rule set by the State Bank of Pakistan?', a: 'SBP Prudential Regulations stipulate that a borrower’s total monthly installments across all credit cards, auto loans, and housing loans cannot exceed 40% to 50% of net disposable income.' },
      { q: 'Can husband and wife combine their salaries to qualify for a larger home loan in Pakistan?', a: 'Yes! Almost all Pakistani commercial and Islamic banks allow co-applicants (spouse, parents, or children) to club their monthly incomes together.' },
      { q: 'Do credit card limits count toward Existing Monthly Debt?', a: 'Banks typically count 5% of your utilized credit card balance (or minimum payment due) on your eCIB credit report toward your monthly debt obligation.' },
      { q: 'How do I calculate the total house price I can afford from the Max Loan?', a: 'Add your available cash savings for the down payment to the Max Loan amount.' }
    ],
    whoUses: 'Who uses this: Salaried professionals, co-borrowing couples, mortgage relationship managers, and home buyers.'
  },
  're-grm': {
    intro: 'When screening ten different rental houses or commercial units quickly, you may not yet have detailed maintenance expense records for each building. The Gross Rent Multiplier (GRM) tells you how many years of gross annual rent it takes for the property to pay for its purchase price.',
    howItWorks: 'The calculator divides the total Property Purchase Price (PKR) by the Gross Annual Rental Income (PKR) before any expenses. Formula: Gross Rent Multiplier (GRM) = Property Price / Gross Annual Rent.',
    workedExample: 'A property priced at PKR 12,000,000 that generates PKR 1,440,000 in gross annual rent (PKR 120,000/month) has a GRM of 12,000,000 / 1,440,000 = 8.33.',
    faqs: [
      { q: 'Is a lower or higher GRM better for a rental buyer?', a: 'A lower GRM is better for cash-flow investors because it means you recover the purchase price in fewer years of rent (8.33 years vs 20 years).' },
      { q: 'How is GRM mathematically related to Gross Rental Yield?', a: 'GRM and Gross Yield are simple reciprocals: $\\text{GRM} = 100 / \\text{Gross Yield \\%}$ (so a GRM of 8.33 equals a 12% Gross Yield, and a GRM of 20 equals a 5% Gross Yield).' },
      { q: 'What is a typical GRM for residential houses in Lahore or Islamabad?', a: 'Because residential yields are around 4% to 5%, typical residential GRMs in major Pakistani cities range between 18 and 25.' },
      { q: 'Why should I check Cap Rate after screening with GRM?', a: 'GRM ignores operating expenses; an older building with a low GRM might require heavy roof waterproofing and plumbing repairs that eat up net income.' }
    ],
    whoUses: 'Who uses this: Real estate brokers, rental property hunters, and commercial valuation surveyors.'
  },
  're-flipping-profit': {
    intro: 'House flipping—buying an older or under-construction house in DHA, Bahria Town, or Gulberg, renovating its facade, tiles, and kitchen, and reselling it at a premium—requires strict cost control. This calculator computes your exact Net Flip Profit and Flip ROI % after purchase, renovation, and holding costs.',
    howItWorks: 'The calculator sums Purchase Price, Renovation Cost, and Holding/Closing Costs (taxes, utility bills during renovation, dealer commission) to find Total Capital Invested. It subtracts Total Capital Invested from Target Resale Price for Net Profit and divides by Total Capital Invested for Flip ROI %. Formula: Net Profit = Resale Price − (Purchase + Renovation + Holding Costs).',
    workedExample: 'Buying an old 5-Marla house for PKR 8,000,000, spending PKR 1,500,000 on modern porcelain tiles and kitchen remodeling, paying PKR 400,000 in taxes and holding costs (Total Invested = PKR 9,900,000), and reselling for PKR 12,000,000 yields a Net Profit of PKR 2,100,000 and a Flip ROI of 21.21%.',
    faqs: [
      { q: 'What is the "70% Rule" used by professional house flippers?', a: 'Flippers aim to pay no more than 70% of the After-Repair Value (ARV) minus renovation costs to leave a 30% buffer for taxes, holding costs, and profit.' },
      { q: 'Which renovations add the most resale value when flipping a house in Pakistan?', a: 'Modernizing the front elevation (Spanish or contemporary look), upgrading bathroom vanities/tiles, and installing a sleek UV/acrylic kitchen.' },
      { q: 'Why do holding and closing costs matter so much in Pakistan?', a: 'Buying and reselling within 1 year triggers FBR 236K, 236C, CGT (15% on gain), society transfer fees, and two broker commissions, easily totaling 5%–7% of property value.' },
      { q: 'How long does a typical house flip take?', a: 'Cosmetic remodeling and resale marketing typically take 4 to 6 months from purchase to final payout.' }
    ],
    whoUses: 'Who uses this: Investor-builders, architectural renovators, and real estate syndicates.'
  },
  're-remodeling-roi': {
    intro: 'Not every home improvement project pays for itself at resale—some luxury upgrades cost more than buyers are willing to pay extra for, while adding an extra bedroom, servant quarter, or modern kitchen can boost property value above the construction cost. This calculator computes Net Value Gain and Renovation ROI %.',
    howItWorks: 'The calculator subtracts your Renovation Cost (PKR) from the Estimated Property Value Increase (PKR) to determine Net Value Gain, then divides Net Value Gain by Renovation Cost and multiplies by 100. Formula: Net Gain = Value Increase − Renovation Cost; ROI % = (Net Gain / Renovation Cost) × 100.',
    workedExample: 'Spending PKR 2,000,000 to build an additional first-floor bedroom and renovate the kitchen increases your house’s market appraisal by PKR 2,500,000. This creates a Net Value Gain of PKR 500,000 and a Renovation ROI of 25.0%.',
    faqs: [
      { q: 'What happens if the Value Increase equals the Renovation Cost?', a: 'Net Value Gain is PKR 0 (0% ROI), meaning you recovered 100% of your renovation outlay in home equity while enjoying the upgraded living space for free.' },
      { q: 'Does installing a rooftop solar system increase house resale value in Pakistan?', a: 'Yes, homes with an installed 5kW–10kW hybrid solar system and green meter sell faster and command a strong price premium due to zero electricity bills.' },
      { q: 'Why does adding usable covered area (like a first-floor portion) give high ROI?', a: 'In Pakistani cities, a house with an independent upper portion can be rented out separately, immediately raising the property’s market valuation.' },
      { q: 'How can I estimate the "Property Value Increase" before starting work?', a: 'Ask two local estate agents in your sector what renovated houses vs unrenovated houses on your street recently sold for.' }
    ],
    whoUses: 'Who uses this: Homeowners planning renovations, interior designers, and pre-sale home stagers.'
  },
  're-insurance-cost': {
    intro: 'Protecting your house or commercial building against fire, earthquake, flood, and structural hazards via general insurance or Islamic Takaful costs a small fraction of the building’s reconstruction value each year. Note that property insurance covers the physical structure replacement cost, not the underlying land cost.',
    howItWorks: 'The calculator converts the Annual Premium Rate percentage into a decimal (Rate / 100) and multiplies it by your Home Structure Replacement Value (PKR) to find the Annual Premium, dividing by 12 for the monthly equivalent. Formula: Annual Premium (PKR) = Structure Replacement Value × (Premium Rate % / 100).',
    workedExample: 'Insuring a house whose brick-and-mortar structure replacement value is PKR 15,000,000 at an annual property Takaful/insurance rate of 0.3% costs PKR 45,000 per year (or PKR 3,750 per month).',
    faqs: [
      { q: 'Why should I enter "Structure Replacement Value" instead of total market price including plot land?', a: 'Even if a fire or earthquake damages the building, your 5-Marla or 1-Kanal plot of land remains intact; insurance only reimburses the cost to rebuild the structure!' },
      { q: 'How do I estimate my home’s Structure Replacement Value?', a: 'Multiply your house’s covered area in sq ft by the current turnkey construction rate (for example, 3,000 sq ft × PKR 5,000/sq ft = PKR 15,000,000).' },
      { q: 'Is property Takaful / insurance mandatory when taking a bank home loan in Pakistan?', a: 'Yes, all banks require fire, earthquake, and natural disaster coverage on the mortgaged structure (as well as life/disability Takaful on the borrower).' },
      { q: 'Can household furniture and electronics be added to the policy?', a: 'Yes, insurers offer a "Home Contents" rider (usually at 0.4%–0.6% of declared contents value) to cover appliances, furniture, and solar panels.' }
    ],
    whoUses: 'Who uses this: Homeowners, Takaful/insurance agents (EFU, Jubilee, Adamjee, Pak-Qatar), and mortgage borrowers.'
  },
  're-agent-commission': {
    intro: 'In Pakistan’s real estate market, property dealers and agency consultants charge a percentage commission on the transaction value for connecting buyers and sellers, verifying title documents at the society office, and supervising the Biana and transfer process. This calculator computes the exact broker fee in PKR.',
    howItWorks: 'The calculator multiplies the agreed Property Transaction Price (PKR) by the Commission Rate percentage divided by 100. Formula: Commission (PKR) = Property Transaction Price × (Commission Rate % / 100).',
    workedExample: 'On a house or plot transaction priced at PKR 15,000,000 with the standard 1.0% dealer commission rate, the agent commission equals PKR 150,000.',
    faqs: [
      { q: 'What is the standard property dealer commission rate in Pakistan?', a: 'For transactions above PKR 5 million, standard market practice in Lahore, Islamabad, and Karachi is 1% from the buyer and 1% from the seller (2% total for smaller plots under PKR 5M).' },
      { q: 'What is agent commission on renting out a house or shop?', a: 'For rental agreements, Pakistani estate agents charge half a month’s rent to one full month’s rent as commission from each party.' },
      { q: 'When is the property dealer’s commission paid?', a: 'Usually 50% of the commission is paid at the signing of the Biana (Agreement to Sell) and the remaining 50% at final transfer/registry.' },
      { q: 'Can I enter 0.5% or 1.5% if I negotiated a custom commission rate?', a: 'Yes, the Commission Rate (%) field accepts any decimal percentage you negotiate with your broker.' }
    ],
    whoUses: 'Who uses this: Property buyers and sellers, real estate agency owners, and freelance property Realtors.'
  },
  're-plot-split': {
    intro: 'Land developers and town planners acquiring agricultural or raw urban land in Marlas or Kanals to carve out a residential housing society or gated lane must allocate 25% to 35% of the gross area for roads, streets, parks, and graveyard/mosque amenities under LDA/CDA/RDA bylaws before counting saleable plots.',
    howItWorks: 'The calculator first deducts the percentage of land allocated for roads and public amenities from Total Land Area (Marlas) to find Net Usable Saleable Land. It then divides Net Usable Land by the Target Size per Plot (Marlas) and takes the integer floor. Formula: Saleable Plots = floor([Total Marlas × (1 − Road % / 100)] / Plot Size in Marlas).',
    workedExample: 'Subdividing 100 Marlas (5 Kanals) of raw land into 5-Marla residential plots while allocating 25% of the land for streets and open spaces leaves 75.0 Marlas of net saleable land, yielding 15 Saleable Plots of 5 Marlas each.',
    faqs: [
      { q: 'What percentage of land do LDA, CDA, and RDA Town Planning bylaws require for roads and parks?', a: 'Formal housing scheme approvals typically mandate 25% to 30% for roads/streets, 7% to 8% for open parks, 2% for graveyard, and 2%–5% for public buildings (35%–40% total).' },
      { q: 'How many Marlas are in 1 Acre (Killa) of land for town planning?', a: '1 Acre equals 8 Kanals, which is 160 Marlas. After 35% road/park deductions, 1 Acre yields roughly 104 Marlas of net saleable plot area (about twenty 5-Marla plots).' },
      { q: 'Why does the calculator round down using floor()?', a: 'You cannot sell a fraction of a standard plot as a full unit; any leftover odd Marlas become corner extra-land or greenbelts.' },
      { q: 'Can I test 3-Marla, 7-Marla, or 10-Marla plot cutting sizes?', a: 'Yes, simply change "Target Size per Plot (Marlas)" to compare which plot cutting mix maximizes revenue.' }
    ],
    whoUses: 'Who uses this: Town planners, housing scheme developers, land investors, and civil surveyors.'
  },
  're-commercial-valuation': {
    intro: 'Appraising a commercial plaza, bank branch building, warehouse, or retail arcade relies on the Income Capitalization / Gross Income Multiplier (GIM) approach—valuing the asset as a multiple of the gross annual rental revenue it commands in the market.',
    howItWorks: 'The calculator multiplies the property’s Gross Annual Rental Income (PKR) by the prevailing Market Gross Income Multiplier (GIM) for comparable commercial buildings in that zone. Formula: Commercial Valuation (PKR) = Gross Annual Rental Income × Market GIM.',
    workedExample: 'A commercial plaza generating PKR 3,000,000 in gross annual rental income (PKR 250,000/month) in a market where commercial plazas trade at an 8.5 Gross Income Multiplier has an estimated valuation of PKR 25,500,000.',
    faqs: [
      { q: 'What does a GIM of 8.5 or 12.5 mean in percentage yield terms?', a: 'A GIM of 8.5 corresponds to an 11.76% gross yield ($100 / 8.5$), while a GIM of 12.5 corresponds to an 8.0% gross yield.' },
      { q: 'Why do commercial buildings rented to multinational banks or pharmacies command a higher GIM?', a: 'Long-term 10-year corporate leases with guaranteed 10% annual escalations and zero default risk make investors willing to pay a higher multiple.' },
      { q: 'Should I include rooftop telecom tower rent or billboard rent in Gross Annual Revenue?', a: 'Yes, Gross Income Multiplier uses all recurring gross property income (shops, offices, basement storage, and rooftop leases).' },
      { q: 'How do Pakistan Banks Association (PBA) valuers use this alongside physical land+building cost?', a: 'Valuers reconcile the Cost Approach (land + depreciated structure) with the Income Capitalization Approach to certify collateral value.' }
    ],
    whoUses: 'Who uses this: Commercial property investors, PBA-approved bank valuers, and corporate real estate teams.'
  },
  're-apartment-maintenance': {
    intro: 'High-rise residential apartment towers and gated condominium projects in Karachi (Clifton, DHA, Gulshan), Islamabad (F-11, Bahria Enclave, Gulberg Greens), and Lahore charge a monthly common-area maintenance fee based on the apartment’s square-foot floor area to fund elevators, standby generators, security guards, and lobby cleaning.',
    howItWorks: 'The calculator multiplies your Apartment Size in Square Feet by the building union or society’s monthly Maintenance Rate per Sq Ft (PKR), and multiplies by 12 to show the annual maintenance budget. Formula: Monthly Fee (PKR) = Apartment Size (sq ft) × Rate per Sq Ft.',
    workedExample: 'An apartment measuring 1,400 square feet in a building charging PKR 8 per sq ft per month owes PKR 11,200 / month (or PKR 134,400 per year) in common maintenance dues.',
    faqs: [
      { q: 'Why do luxury apartments charge per square foot instead of an equal flat fee per flat?', a: 'A 3,000 sq ft penthouse occupies more building share, water consumption, and parking allocation than an 800 sq ft 1-bedroom studio.' },
      { q: 'What is a typical per-sq-ft maintenance rate in Pakistani apartment towers?', a: 'Standard residential buildings charge PKR 5 to PKR 12 per sq ft, while luxury serviced towers with 24/7 central HVAC and swimming pools charge PKR 18 to PKR 30+ per sq ft.' },
      { q: 'Does this fee include inside-apartment electricity or gas bills?', a: 'No, common maintenance covers corridor lighting, lift operation, water pumps, and security; your flat’s internal electricity and gas meters are billed separately.' },
      { q: 'Can commercial mall shopkeepers use this for CAM (Common Area Maintenance) charges?', a: 'Yes! Shopping malls in Pakistan bill shop tenants monthly CAM charges per square foot using this exact formula.' }
    ],
    whoUses: 'Who uses this: Apartment owners and tenants, building management committees (unions), and shopping mall shopkeepers.'
  },
  're-appreciation': {
    intro: 'Real estate in developing corridors of Pakistan compounds in value over multi-year holding horizons as infrastructure, ring roads, and population density expand. This calculator projects the Future Property Value and Total Value Gain of a plot or house using compound annual growth.',
    howItWorks: 'Using the compound appreciation formula, the calculator multiplies Current Property Value (PKR) by $(1 + \\text{Annual Appreciation Rate})^\\text{Years}$. Subtracting the current value from the future value reveals the net capital gain. Formula: $\\text{Future Value} = \\text{Current Value} \\times (1 + r)^n$.',
    workedExample: 'A 10-Marla plot currently worth PKR 20,000,000 appreciating at an average compound rate of 10% per year over 5 years grows to PKR 32,210,200—a Total Value Gain of PKR 12,210,200.',
    faqs: [
      { q: 'Why does a 10% annual appreciation over 5 years produce a 61% gain instead of 50%?', a: 'Because appreciation compounds—in Year 2 you earn 10% not just on the original PKR 20M, but also on Year 1’s PKR 2M gain!' },
      { q: 'How many years does it take for a property’s value to double at 10% or 12% annual growth?', a: 'By the Rule of 72 ($72 / \\text{Rate}$), property value doubles in about 7.2 years at 10% annual growth, or in 6 years at 12% annual growth.' },
      { q: 'What is a realistic long-term property appreciation rate in Pakistan?', a: 'Over 10-to-15-year cycles, prime urban real estate in Pakistan has historically averaged 10% to 15% annualized nominal growth (closely tracking inflation plus urban expansion).' },
      { q: 'Does property appreciate in a straight line every single year?', a: 'No, real estate moves in 3-to-5-year boom and consolidation cycles; the annual rate represents the smoothed compound annual growth rate (CAGR).' }
    ],
    whoUses: 'Who uses this: Long-term land investors, retirement planners, overseas Pakistanis, and wealth advisors.'
  },
  're-payoff-acceleration': {
    intro: 'When carrying a home mortgage or Diminishing Musharakah facility at 15% to 20% annual markup, paying even a modest extra PKR 20,000 or PKR 25,000 per month directly toward the principal balance dramatically cuts total markup paid and shaves years off your loan tenure.',
    howItWorks: 'Every Rupee of extra principal paid reduces the outstanding loan balance on which future monthly markup is charged. The calculator estimates the cumulative 5-year interest/markup savings generated by your recurring extra monthly principal payment at your annual markup rate. Formula: Estimated 5-Year Markup Saved ≈ Extra Monthly Principal × 12 × (Rate / 2) × 5.',
    workedExample: 'On a remaining home loan balance of PKR 8,000,000 at a 16% annual markup rate, paying an extra PKR 25,000 per month toward principal outputs Approx. PKR 120,000 Interest Saved over a 5-year horizon.',
    faqs: [
      { q: 'How do extra principal payments work in an Islamic Diminishing Musharakah home loan?', a: 'In Diminishing Musharakah, buying extra ownership units from the bank each month increases your equity share faster, immediately reducing the monthly rent payable on the bank’s remaining share!' },
      { q: 'Do Pakistani banks charge a penalty for early principal prepayment on home loans?', a: 'Many Islamic and conventional banks allow partial principal prepayments (e.g., up to 20%–25% of principal per year on anniversary dates) with zero prepayment penalty.' },
      { q: 'Is it better to make extra payments in the first 5 years of a mortgage or the last 5 years?', a: 'In the first 5 years! Early in an amortization schedule, 80%+ of your regular installment goes toward markup, so extra principal cuts future compounding massively.' },
      { q: 'Should I instruct the bank specifically to apply the extra cash to Principal?', a: 'Yes, always submit a written instruction to apply the lump sum toward principal/unit purchase rather than treating it as an advance next-month installment.' }
    ],
    whoUses: 'Who uses this: Home mortgage borrowers looking to become debt-free early and financial planners.'
  },
  're-home-equity': {
    intro: 'Your Home Equity is the portion of your property that you truly own free and clear of bank debt. As your house appreciates in market value and your monthly installments pay down the mortgage balance, your net equity grows. This calculator computes your exact PKR equity and ownership percentage.',
    howItWorks: 'The calculator subtracts your Remaining Mortgage Balance (PKR) from the property’s Current Market Value (PKR) to find Home Equity in PKR, then divides Home Equity by Current Market Value and multiplies by 100 to show your equity percentage. Formula: Home Equity = Current Market Value − Remaining Mortgage Balance.',
    workedExample: 'If your house in Islamabad has a Current Market Value of PKR 25,000,000 and you owe a Remaining Mortgage Balance of PKR 9,000,000 to the bank, your net Home Equity is PKR 16,000,000 (64.0% ownership).',
    faqs: [
      { q: 'What are the two ways Home Equity increases over time?', a: 'First, by paying down your loan principal each month; second, through market price appreciation of the property itself.' },
      { q: 'What is Loan-to-Value (LTV) ratio and how does it relate to Equity %?', a: 'LTV % plus Equity % always equals 100%—so having 64% Home Equity means your current Loan-to-Value ratio is only 36%.' },
      { q: 'What happens if property prices drop below my mortgage balance?', a: 'That situation is called "negative equity" (being underwater on a loan), which is rare in Pakistan because banks require 25%–30% initial down payments.' },
      { q: 'Can I tap into my Home Equity to finance home construction or business expansion?', a: 'Yes, banks offer home equity / mortgage refinance loans against properties with high equity percentages.' }
    ],
    whoUses: 'Who uses this: Mortgaged homeowners tracking net worth, refinance applicants, and bank credit officers.'
  },
  're-noi': {
    intro: 'Net Operating Income (NOI) is the core profitability metric of any rental building, commercial plaza, warehouse, or marriage hall before taxes and financing. It reveals how much net cash the property generates from operations after paying all recurring upkeep costs.',
    howItWorks: 'The calculator subtracts annual Operating Expenses & Maintenance (PKR) from Gross Annual Rental Income (PKR). Formula: Net Operating Income (NOI) = Gross Annual Rental Income − Annual Operating Expenses.',
    workedExample: 'A commercial property collecting PKR 1,800,000 in Gross Annual Rental Income with PKR 250,000 in annual operating expenses (security, common electricity, repairs, and property tax) produces a Net Operating Income of PKR 1,550,000 NOI.',
    faqs: [
      { q: 'Which expenses ARE included in Operating Expenses for NOI?', a: 'Property management fees, security guards, common-area WAPDA bills, routine plumbing/paint maintenance, insurance, and Excise property tax.' },
      { q: 'Which expenses are NOT included in Operating Expenses for NOI?', a: 'Bank loan installments (principal and interest), personal income tax, and major one-time structural additions (capital expenditures).' },
      { q: 'Where do I use the NOI figure once I calculate it?', a: 'Feed your NOI directly into the Cap Rate Calculator or divide NOI by your annual bank mortgage payment to find your Debt Service Coverage Ratio (DSCR).' },
      { q: 'How should I account for tenant turnover or vacant months?', a: 'Deduct 5% to 8% (about 1 month of rent every 1–2 years) from Gross Annual Rent as a vacancy allowance.' }
    ],
    whoUses: 'Who uses this: Plaza owners, commercial real estate analysts, hotel/hostel operators, and bank commercial lenders.'
  },
  're-property-cap-rate': {
    intro: 'When comparing a PKR 25 million commercial shop in DHA Phase 6 against a PKR 25 million industrial warehouse on Raiwind Road, the Property Capitalization Rate (Cap Rate) shows you the exact un-leveraged annual return percentage based on Net Operating Income.',
    howItWorks: 'The calculator divides your property’s annual Net Operating Income (NOI in PKR) by the total Property Value or Purchase Price (PKR) and multiplies by 100. Formula: Cap Rate (%) = (Net Operating Income / Property Value) × 100.',
    workedExample: 'An investment property valued at PKR 25,000,000 that generates PKR 1,500,000 in annual Net Operating Income yields a Cap Rate of (1,500,000 / 25,000,000) × 100 = 6.00%.',
    faqs: [
      { q: 'What does a 6.00% Cap Rate tell me about payback period?', a: 'Without compounding or rent escalation, a 6% Cap Rate means the net operating cash flow recovers the entire property value in $100 / 6 = 16.67$ years.' },
      { q: 'Why do warehouses and schools often have higher Cap Rates (8%–10%) than prime retail shops (5%–6%)?', a: 'Prime retail shops have higher land liquidity and capital appreciation expectations, so buyers bid their prices up, compressing the Cap Rate.' },
      { q: 'If market Cap Rates remain at 6% and I raise my tenant’s NOI from PKR 1.5M to PKR 1.8M, what happens to my building’s value?', a: 'At a 6% Cap Rate, raising NOI by PKR 300,000 increases your building’s market valuation by PKR 5,000,000 (to PKR 30,000,000)!' },
      { q: 'Is Cap Rate useful for vacant residential plots?', a: 'No, vacant plots have zero rental NOI; Cap Rate applies strictly to income-producing built properties.' }
    ],
    whoUses: 'Who uses this: Institutional property investors, commercial brokers, and real estate investment analysts.'
  },
  're-cash-on-cash': {
    intro: 'When you buy a rental property using a bank mortgage or developer installment leverage rather than paying 100% cash, Cap Rate no longer reflects the return on your actual out-of-pocket cash. The Cash-on-Cash Return calculator measures your annual pre-tax cash flow as a percentage of the actual cash down payment you invested.',
    howItWorks: 'The calculator divides your Annual Pre-Tax Cash Flow (Net Operating Income minus annual debt service/installments) by your Total Cash Invested (down payment plus closing costs) and multiplies by 100. Formula: Cash-on-Cash Return (%) = (Annual Pre-Tax Cash Flow / Total Cash Invested) × 100.',
    workedExample: 'If you invest PKR 5,000,000 in total upfront cash (down payment + transfer costs) to acquire a commercial unit that leaves you with PKR 600,000 per year in net positive cash flow after payments, your Cash-on-Cash Return is (600,000 / 5,000,000) × 100 = 12.00%.',
    faqs: [
      { q: 'How can Cash-on-Cash Return differ from Cap Rate?', a: 'If you pay 100% cash with no loan, Cash-on-Cash Return equals Cap Rate; when you use financing or low-cost developer installments, leverage magnifies your Cash-on-Cash percentage.' },
      { q: 'What is included in "Total Cash Invested"?', a: 'Include your down payment, stamp duty, FBR buyer tax, society transfer fee, agent commission, and any initial furnishing/renovation cash spent.' },
      { q: 'How do I calculate "Annual Pre-Tax Cash Flow"?', a: 'Take your annual rental income, subtract annual maintenance expenses, and subtract 12 months of loan/installment payments.' },
      { q: 'Does Cash-on-Cash Return include property price appreciation?', a: 'No, it strictly measures liquid annual cash dividend velocity on your invested cash; appreciation is an additional bonus on top.' }
    ],
    whoUses: 'Who uses this: Leveraged real estate investors, Airbnb/serviced-apartment hosts, and financial analysts.'
  },
  're-refinance-breakeven': {
    intro: 'When State Bank policy rates drop and banks reduce home financing markup rates, refinancing (switching or repricing your mortgage) can lower your monthly installment by thousands of Rupees. However, refinancing involves legal valuation and processing fees. This calculator finds how many months it takes for your monthly savings to pay back those closing costs.',
    howItWorks: 'The calculator divides your total upfront Refinancing Closing Costs (PKR) by your Monthly Payment Savings (PKR) to determine the exact Breakeven Months (and years). Formula: Breakeven Months = Refinancing Closing Costs / Monthly Payment Savings.',
    workedExample: 'If switching your home loan to a lower-rate bank costs PKR 150,000 in valuation, legal, and documentation fees and reduces your monthly installment by PKR 12,000 per month, you reach breakeven in 150,000 / 12,000 = 12.5 Months (1.0 year).',
    faqs: [
      { q: 'When does refinancing make financial sense?', a: 'If you plan to keep the property and mortgage for significantly longer than the Breakeven Months (e.g., staying 5+ years when breakeven is 12.5 months), every month after breakeven is pure savings!' },
      { q: 'What closing costs are involved in a Balance Transfer Facility (BTF) in Pakistan?', a: 'Bank processing fee, PBA property valuation fee, legal opinion charge, e-Stamp mortgage deed fee, and any early-settlement charge from the old bank.' },
      { q: 'Why do most Pakistani home loans reprice automatically every 12 months without refinancing?', a: 'Most Pakistani mortgages are pegged to 1-Year KIBOR + Bank Spread, so when KIBOR drops, your rate resets automatically on your annual anniversary date!' },
      { q: 'Why would I refinance if KIBOR resets automatically?', a: 'To move from a bank charging KIBOR + 3.5% spread to a competitor offering KIBOR + 1.5% spread, or to switch from conventional to Islamic Diminishing Musharakah.' }
    ],
    whoUses: 'Who uses this: Home loan borrowers, bank Balance Transfer (BTF) sales officers, and mortgage advisors.'
  },
  're-equity-loan-limit': {
    intro: 'Homeowners who have built substantial equity in their house can unlock cash for construction, children’s university education, or business expansion through a Home Equity / Mortgage Refinance Loan. Banks typically lend up to a maximum 80% Loan-to-Value (LTV) ceiling minus any existing mortgage debt.',
    howItWorks: 'The calculator multiplies your property’s Current Market Value (PKR) by 0.80 (the standard 80% LTV limit) and subtracts your Outstanding Mortgage Balance (PKR), flooring at zero if debt exceeds 80%. Formula: Max Loan Limit = max(0, (Current Market Value × 0.80) − Outstanding Mortgage).',
    workedExample: 'For a house with a Current Market Value of PKR 30,000,000 and an Outstanding Mortgage Balance of PKR 10,000,000, the 80% LTV ceiling is PKR 24,000,000. Subtracting the PKR 10,000,000 existing mortgage gives a PKR 14,000,000 Max Loan Limit.',
    faqs: [
      { q: 'What if I own my house 100% debt-free with no existing mortgage?', a: 'Simply enter 0 in the "Outstanding Mortgage Balance" field—for a PKR 30,000,000 house, your 80% borrowing limit will be PKR 24,000,000.' },
      { q: 'Why do banks cap lending at 70% to 80% of market value instead of 100%?', a: 'The 20%–30% equity cushion protects the bank against market price fluctuations and legal recovery costs in case of default.' },
      { q: 'Who determines the "Current Property Market Value" for the bank?', a: 'The bank appoints an independent PBA-approved valuation engineering firm to inspect the property and issue an official Forced Sale Value (FSV) and Market Value report.' },
      { q: 'Does qualifying for this limit also depend on my monthly income?', a: 'Yes, the property sets the collateral ceiling (LTV limit), while your monthly income must also satisfy the 40% Debt Burden Ratio (DBR) to service the monthly installments.' }
    ],
    whoUses: 'Who uses this: Homeowners unlocking property equity, business owners seeking collateralized finance, and bank relationship managers.'
  },

  // ==========================================
  // AUTOMOTIVE & VEHICLE (29 Calculators)
  // ==========================================
  'auto-fuel-mileage': {
    intro: 'With petrol prices in Pakistan hovering near PKR 260–290+ per liter, tracking your car or motorcycle’s real-world fuel average in kilometers per liter (km/L) is the fastest way to spot clogged fuel injectors, dirty air filters, or under-inflated tires. This calculator computes both km/L and European-style Liters per 100 km.',
    howItWorks: 'The calculator divides the Distance Traveled (km) between two full-tank refills by the exact Fuel Consumed (Liters) to output fuel efficiency in km/L, and divides 100 by km/L for L/100km. Formula: Mileage (km/L) = Distance Traveled (km) / Fuel Consumed (Liters).',
    workedExample: 'If you drive your sedan 450 km from Lahore to Islamabad and refill the tank to the auto-click cutoff with 35 Liters of petrol, your real fuel mileage is 450 / 35 = 12.86 km/L (or 7.78 L / 100km).',
    faqs: [
      { q: 'What is the most accurate way to measure fuel consumed in Pakistan?', a: 'Use the "tank-to-tank" method: fill the tank until the nozzle auto-clicks, reset your trip-A meter to 0, drive 300+ km, and refill at the same pump until auto-click to see exact liters used.' },
      { q: 'What is typical city vs highway mileage for popular cars in Pakistan?', a: 'Suzuki Alto 660cc gets 18–22 km/L; Cultus/Swift gets 14–17 km/L; Corolla/City/Yaris gets 12–16 km/L; and hybrid HEVs (Haval, Corolla Cross, Aqua) get 18–24 km/L.' },
      { q: 'Why does my car’s mileage drop by 2–3 km/L in summer?', a: 'Running the AC compressor in 45°C summer traffic places continuous load on the engine and increases idling consumption.' },
      { q: 'What mileage does a Honda CD-70 or CG-125 motorcycle get?', a: 'A well-tuned 70cc bike achieves 50–60 km/L, while a 125cc motorcycle typically delivers 35–42 km/L.' }
    ],
    whoUses: 'Who uses this: Daily commuters, Careem/InDrive/Yango captains, fleet managers, and used-car buyers.'
  },
  'auto-trip-fuel-cost': {
    intro: 'Planning a family road trip from Karachi to Hyderabad, Lahore to Murree, or Islamabad to Naran? Before setting off, enter your round-trip distance in km, your car’s fuel average in km/L, and the current OGRA petrol or diesel price per liter in PKR to budget your exact fuel expenditure.',
    howItWorks: 'First, the calculator divides Trip Distance (km) by Vehicle Mileage (km/L) to determine total Liters of fuel required. Next, it multiplies Liters Required by the Petrol Price per Liter (PKR). Formula: Total Fuel Cost (PKR) = (Trip Distance / Vehicle Mileage) × Petrol Price per Liter.',
    workedExample: 'Driving a 350 km journey in a car averaging 12 km/L when petrol costs PKR 285 per liter requires 350 / 12 = 29.2 Liters of petrol, resulting in a total fuel cost of PKR 8,313.',
    faqs: [
      { q: 'Should I reduce my expected mileage when driving uphill to Murree, Nathia Gali, or Hunza?', a: 'Yes! Steep mountain gradients and low-gear climbing increase fuel consumption by 25%–35%, so enter 9–10 km/L instead of your flat motorway 13 km/L.' },
      { q: 'How often do petrol and diesel prices change in Pakistan?', a: 'The Ministry of Finance and OGRA review and notify updated ex-depot petrol and high-speed diesel (HSD) prices every fortnight (on the 1st and 16th of each month).' },
      { q: 'Does driving at 120 km/h on the Motorway burn more fuel than driving at 100 km/h?', a: 'Yes, aerodynamic wind drag increases with the square of speed; cruising at 100–105 km/h uses roughly 15%–20% less petrol than pushing 125 km/h.' },
      { q: 'Does this include Motorway toll taxes?', a: 'This calculates pure fuel cost; use our Toll Tax Trip Cost Calculator to add M-1/M-2/M-3 toll plaza charges.' }
    ],
    whoUses: 'Who uses this: Families planning northern areas vacations, inter-city travelers, sales reps claiming fuel reimbursement, and tour operators.'
  },
  'auto-cost-per-km': {
    intro: 'Corporate HR departments setting employee mileage reimbursement rates, ride-hailing drivers evaluating fare profitability, and logistics companies pricing deliveries all need to know the exact PKR running cost for every single kilometer driven.',
    howItWorks: 'The calculator divides your Total Trip or Monthly Running Cost (PKR) by Total Distance Driven (km) to output the exact Cost per Kilometer to two decimal places. Formula: Cost per Kilometer (PKR/km) = Total Cost (PKR) / Total Distance (km).',
    workedExample: 'If a 400 km inter-city business trip costs PKR 8,500 in combined fuel and tolls, the driving cost works out to 8,500 / 400 = PKR 21.25 / km.',
    faqs: [
      { q: 'How do I calculate "true all-in" cost per km vs "fuel-only" cost per km?', a: 'For fuel-only, enter just your petrol bill; for true ownership cost per km, include fuel + engine oil change + tire wear + routine maintenance over that distance.' },
      { q: 'How much do engine oil and tire wear add per kilometer in Pakistan?', a: 'An PKR 8,000 oil change every 5,000 km adds PKR 1.60/km, and a PKR 60,000 set of tires lasting 50,000 km adds PKR 1.20/km—about PKR 3 to PKR 5/km in maintenance.' },
      { q: 'How do InDrive and Yango drivers use Cost per Km?', a: 'If your car’s fuel + maintenance costs PKR 24/km, accepting a 10 km ride requires a fare well above PKR 240 just to break even and earn a profit for your time.' },
      { q: 'What is typical corporate car mileage allowance in Pakistan?', a: 'Companies typically reimburse employees between PKR 25/km and PKR 40/km when using a personal car for official field visits.' }
    ],
    whoUses: 'Who uses this: Ride-hailing captains, corporate finance teams setting travel allowances, and delivery fleet owners.'
  },
  'auto-speed-dist-time': {
    intro: 'Whether you want to know how long a 300 km drive on the Indus Highway will take at 80 km/h, what average speed you achieved on a trip, or how far you can travel in 4 hours, this 3-in-1 calculator solves Time, Speed, or Distance from the other two variables.',
    howItWorks: 'Depending on the mode selected in the dropdown, the calculator applies the classic kinematics triangle: Time = Distance / Speed (formatting decimal hours into whole hours and minutes), Speed = Distance / Time, or Distance = Speed × Time. Formula: $T = D / S$; $S = D / T$; $D = S \\times T$.',
    workedExample: 'Selecting "Time (Distance / Speed)" with a Distance of 300 km and an average Speed of 80 km/h computes $300 / 80 = 3.75\\text{ hours}$, displayed clearly as 3 hours and 45 minutes.',
    faqs: [
      { q: 'Why is my actual trip time longer than dividing distance by my top cruising speed?', a: 'Because toll plazas, city exit traffic, tea/prayer stops, and slow truck overtaking reduce your overall door-to-door Average Speed to around 75–85 km/h even if you cruise at 115 km/h.' },
      { q: 'How do I enter 2 hours and 30 minutes when calculating Speed or Distance?', a: 'Enter time as decimal hours—so 2 hours 30 minutes is entered as `2.5` hours, and 1 hour 15 minutes is `1.25` hours.' },
      { q: 'How long does the 357 km Lahore-to-Islamabad M-2 Motorway take at an average speed of 100 km/h?', a: 'At a true 100 km/h average, 357 km takes 3.57 hours, which is 3 hours and 34 minutes (excluding the Bhera service area stop).' },
      { q: 'Can cyclists and runners use this calculator too?', a: 'Yes, any speed in km/h and distance in km works identically for cycling, running, trains, or aviation.' }
    ],
    whoUses: 'Who uses this: Motorway travelers, bus and truck dispatchers, logistics planners, and students.'
  },
  'auto-depreciation': {
    intro: 'Vehicles experience annual value depreciation due to model age, odometer mileage, mechanical wear, and new-generation facelifts. This calculator uses the compound declining-balance method to estimate a vehicle’s current resale value and total value lost after a given number of years.',
    howItWorks: 'Each year, the car’s value decreases by the Annual Depreciation Rate percentage ($r$). After $n$ years of age, the remaining value equals Initial Purchase Price multiplied by $(1 - r)^n$. Formula: $\\text{Current Value} = \\text{Purchase Price} \\times (1 - \\text{Rate \\%} / 100)^{\\text{Age}}$.',
    workedExample: 'A car purchased new for PKR 4,500,000 that depreciates at an annual rate of 10% over 3 years has a current value of $4,500,000 \\times (0.90)^3 = \\text{PKR } 3,280,500$, representing a Total Value Lost of PKR 1,219,500.',
    faqs: [
      { q: 'Why do car prices in Pakistan sometimes rise in nominal PKR terms instead of depreciating?', a: 'During periods of steep Rupee devaluation, assemblers raise brand-new car invoice prices, pulling used car prices up; in constant real/dollar terms or stable currency periods, cars depreciate 8%–12% annually.' },
      { q: 'How do Pakistani insurance companies calculate "Insured Depreciation" on spare parts during an accident claim?', a: 'Insurers apply a fixed age-based depreciation table (e.g., 10% per year after Year 1, up to 50%–60% after 5 years) on replacement body and mechanical parts.' },
      { q: 'Which car brands hold their resale value best (lowest depreciation rate) in Pakistan?', a: 'Toyota Corolla/Yaris, Honda City/Civic, and Suzuki Alto ("cash checks" in local market slang) depreciate slower than low-volume CBU imported crossover models.' },
      { q: 'How does body paint touch-ups affect resale depreciation in Pakistan?', a: 'A "total genuine / bumper-to-bumper" car commands top market value, whereas roof/pillar repaints or accidental repairs can knock 10%–20% off resale price immediately.' }
    ],
    whoUses: 'Who uses this: Used-car buyers and sellers on PakWheels, corporate fleet accountants, and insurance surveyors.'
  },
  'auto-tank-range': {
    intro: 'Knowing how many kilometers your car or motorcycle can travel on a single full tank of fuel prevents getting stranded on long stretches like the M-5 Multan–Sukkur Motorway, Makran Coastal Highway, or Balochistan N-25 where reputable petrol pumps are far apart.',
    howItWorks: 'The calculator multiplies your vehicle’s Fuel Tank Capacity (Liters) by its average Fuel Mileage (km/L) to compute maximum theoretical driving range on a full tank. Formula: Total Range (km) = Tank Capacity (Liters) × Vehicle Mileage (km/L).',
    workedExample: 'A sedan with a 50-Liter fuel tank capacity averaging 14 km/L on the highway has a full-tank driving range of $50 \\times 14 = 700\\text{ kilometers}$.',
    faqs: [
      { q: 'Should I drive all the way to 700 km until the tank is bone dry?', a: 'Never! The electric fuel pump inside your tank relies on surrounding liquid petrol to stay cool. Always refuel when the gauge hits the quarter-tank mark (leaving an 8–10 Liter safety reserve).' },
      { q: 'What is the fuel tank capacity of popular Pakistani vehicles?', a: 'Honda CD-70 = 8.5L, Suzuki Alto = 27L, Suzuki Cultus/Swift = 37L, Honda City = 40L, Toyota Yaris = 42L, Toyota Corolla = 50L–55L, and Fortuner = 80L.' },
      { q: 'How many kilometers are left when the orange low-fuel warning light turns on?', a: 'In most Japanese and Pakistani sedans, the reserve warning light triggers with about 6 to 8 Liters remaining—roughly 60 to 90 km of cautious driving.' },
      { q: 'Why is my highway range almost 150 km longer than my city tank range?', a: 'Steady 5th-gear/CVT cruising on the highway yields 3–4 km/L better mileage than stop-and-go city traffic.' }
    ],
    whoUses: 'Who uses this: Long-distance highway drivers, northern areas tourists, overland adventure riders, and fleet dispatchers.'
  },
  'auto-cost-sharing': {
    intro: 'Carpooling daily with office colleagues in Karachi or Lahore, or taking a weekend road trip to Nathia Gali with university friends, is one of the smartest ways to beat high petrol and toll costs. This calculator splits the total trip bill evenly per passenger.',
    howItWorks: 'The calculator divides the Total Trip Cost in PKR (petrol + motorway tolls + parking) by the total Number of Travelers in the vehicle (minimum 1). Formula: Cost per Person (PKR) = Total Trip Cost / Number of Travelers.',
    workedExample: 'If a round-trip weekend excursion costs PKR 12,000 in petrol and motorway tolls shared among 4 travelers, each person pays exactly PKR 3,000.',
    faqs: [
      { q: 'Should the car owner/driver also be counted in "Number of Travelers"?', a: 'If the car owner is splitting fuel equally with friends, enter 4 (for driver + 3 passengers); if passengers are covering the fuel because the owner provided the car and maintenance, enter 3!' },
      { q: 'How much money can an office worker save per month by carpooling with 3 colleagues?', a: 'Splitting a PKR 36,000 monthly petrol commute among 4 colleagues drops each person’s monthly fuel expense to just PKR 9,000—saving PKR 27,000 every month.' },
      { q: 'Can we include food, hotel rooms, and jeep rentals in Total Trip Cost?', a: 'Yes! Add all shared group receipts together and divide by the headcount for a one-click settlement via Raast, JazzCash, or Easypaisa.' },
      { q: 'What if the result has odd paisas?', a: 'The calculator automatically rounds to the nearest whole Rupee for easy cash or digital transfer.' }
    ],
    whoUses: 'Who uses this: Office carpool groups, university students on group trips, and hostel friends sharing rides.'
  },
  'auto-oil-change': {
    intro: 'Regular engine oil and oil filter changes are the single most important maintenance habit to protect your car’s engine against sludge and piston ring wear in Pakistan’s dusty, hot stop-and-go traffic. Enter your current odometer reading, last oil change reading, and oil interval to see exact kilometers remaining.',
    howItWorks: 'The calculator subtracts your Odometer at Last Oil Change from your Current Odometer to find kilometers driven since the last service, then subtracts that driven distance from your Recommended Oil Interval. Formula: Remaining km = Recommended Interval − (Current Odometer − Last Oil Change Odometer).',
    workedExample: 'If your car’s current odometer reads 48,200 km, your last oil change sticker says 43,000 km, and you use synthetic oil with a 5,000 km interval, you have driven 5,200 km—so the calculator alerts: "Oil change overdue by 200 km!".',
    faqs: [
      { q: 'What is the recommended oil change interval for Mineral vs Fully Synthetic oil in Pakistan?', a: 'Standard mineral oil (20W-50 / 10W-30) should be changed every 3,000 to 3,500 km; semi-synthetic every 5,000 km; and API SP fully synthetic (0W-20 / 5W-30) every 7,000 to 8,000 km.' },
      { q: 'Why shouldn’t I run 10,000–15,000 km on one oil change in Pakistan like in Europe?', a: 'High ambient dust, summer temperatures above 45°C, fuel sulfur/manganese additives, and hours of traffic idling degrade oil viscosity much faster in Pakistan.' },
      { q: 'Should I replace the oil filter and air filter with every oil change?', a: 'Always replace the genuine oil filter at every single oil change, and blow out or replace the air filter every 5,000–10,000 km.' },
      { q: 'What oil viscosity grade do modern Pakistani cars (Alto, Yaris, City, Civic, Sportage) require?', a: 'Modern tight-clearance engines require thin low-viscosity synthetic oils like 0W-20 or 5W-30—pouring thick 20W-50 into a new engine starves VVT solenoids and ruins fuel economy!' }
    ],
    whoUses: 'Who uses this: Car and motorcycle owners, lube-shop technicians, and corporate fleet maintenance supervisors.'
  },
  'auto-token-tax': {
    intro: 'Every registered motor vehicle in Punjab, Sindh, Islamabad, and KPK must pay an annual provincial Excise & Taxation Token Tax based on its engine displacement in Cubic Centimeters (CC). Paying before the June 30 / September 30 deadline avoids late penalties and e-Pay blocks.',
    howItWorks: 'Based on your vehicle’s Engine Capacity (CC), the calculator assigns the representative annual excise token tax bracket: PKR 2,500 for up to 1,000cc (or lifetime token), PKR 4,500 for 1,001–1,500cc, PKR 7,500 for 1,501–2,000cc, and PKR 15,000 for engines above 2,000cc. Formula: Tiered Excise Bracket lookup by Engine CC.',
    workedExample: 'Entering 1,300 CC (such as a Toyota Corolla 1.3 GLi or Honda City 1.3) places the vehicle in the 1,001–1,500cc bracket, estimating PKR 4,500 Annual Token Tax.',
    faqs: [
      { q: 'How can I pay my car’s annual Token Tax online in Pakistan?', a: 'Use the ePay Punjab app, Sindh Excise online portal, or Islamabad City App to generate a PSID number and pay instantly via any mobile banking app or ATM.' },
      { q: 'Do 660cc to 1000cc cars (like Suzuki Alto, Cultus, WagonR) have Lifetime Token Tax?', a: 'In Punjab and Islamabad, cars up to 1000cc typically have a one-time Lifetime Token paid at registration or transfer.' },
      { q: 'Why is the total token tax payment higher for Non-Filers?', a: 'Alongside the provincial Excise token fee, the government collects an FBR Section 234 adjustable withholding tax that is double or triple for Non-Filers.' },
      { q: 'Has Punjab recently introduced invoice-value-based token tax for luxury cars above 2000cc?', a: 'Yes, recent provincial finance updates assess newer high-displacement luxury vehicles as a percentage of invoice value.' }
    ],
    whoUses: 'Who uses this: Car owners renewing annual Excise tokens, used-car buyers checking unpaid arrears, and Excise clearing agents.'
  },
  'auto-motorway-toll': {
    intro: 'Before traveling on Pakistan’s National Highway Authority (NHA) motorway network—including M-1 (Islamabad–Peshawar), M-2 (Lahore–Islamabad), M-3 (Lahore–Abdul Hakeem), M-4 (Pindi Bhattian–Multan), or M-5 (Multan–Sukkur)—use this calculator to estimate your M-Tag motorway toll tax by distance and vehicle class.',
    howItWorks: 'The calculator multiplies your Motorway Distance (km) by the representative NHA per-kilometer toll rate for your selected Vehicle Category: PKR 3.5/km for Car/Jeep/SUV, PKR 6.0/km for Coaster/Mini Bus, and PKR 9.5/km for Large Bus/Truck. Formula: Total Toll (PKR) = Motorway Distance (km) × Category Rate per km.',
    workedExample: 'Driving a Car/SUV across the full 365 km stretch of the M-2 Motorway from Lahore to Islamabad at an average rate of PKR 3.5/km estimates approximately PKR 1,278 in Toll Tax.',
    faqs: [
      { q: 'Is an M-Tag RFID sticker mandatory on Pakistani motorways?', a: 'Yes, NHA enforces mandatory M-Tag entry across all motorways, charging a hefty extra surcharge (or denying entry into fast lanes) for vehicles without an active M-Tag.' },
      { q: 'How can I recharge my M-Tag balance before hitting the toll plaza?', a: 'You can top up your M-Tag instantly using the One Network app, JazzCash, Easypaisa, or any mobile banking app using your M-Tag ID.' },
      { q: 'What are the exact motorway distances between major Pakistani cities?', a: 'Islamabad to Peshawar (M-1) is 155 km; Lahore to Islamabad (M-2) is 357 km; Lahore to Multan (M-3/M-4) is 335 km; and Multan to Sukkur (M-5) is 392 km.' },
      { q: 'Does NHA revise motorway toll rates periodically?', a: 'Yes, under BOT/concession agreements and NHA revenue updates, per-km toll tariffs are periodically adjusted—keep an extra PKR 300–500 buffer on your M-Tag.' }
    ],
    whoUses: 'Who uses this: Motorway commuters, inter-city bus operators, trucking fleets, and families topping up their M-Tag.'
  },
  'auto-fuel-budget': {
    intro: 'For salaried employees, university students, and business owners commuting daily in city traffic, petrol is often the second-largest household expense after rent or groceries. This calculator projects your monthly fuel requirement in Liters and total 30-day fuel budget in PKR.',
    howItWorks: 'Your Daily Commute Distance (km) is multiplied by 30 days to find total monthly distance, divided by your Vehicle Mileage (km/L) to find Monthly Liters Required, and multiplied by the Petrol Price per Liter (PKR). Formula: Monthly Budget (PKR) = [(Daily km × 30) / Mileage] × Petrol Price.',
    workedExample: 'Commuting 40 km round-trip every day (1,200 km/month) in a car averaging 13 km/L requires ~92 Liters of petrol per month. At PKR 285 per liter, your monthly fuel budget is PKR 26,308 / month.',
    faqs: [
      { q: 'What if I only commute to the office 22 or 26 days a month?', a: 'Even if you work 22–26 days, weekend family errands, grocery runs, and social visits usually bring total monthly driving close to 30× your daily commute.' },
      { q: 'How much would switching from a 12 km/L sedan to a 20 km/L 660cc Alto or Hybrid save per month?', a: 'On a 40 km/day commute at PKR 285/L, moving from 12 km/L (PKR 28,500/mo) to 20 km/L (PKR 17,100/mo) saves PKR 11,400 every month (PKR 136,800 per year)!' },
      { q: 'Can motorcycle commuters use this calculator?', a: 'Yes! For a Honda 70cc or 125cc bike averaging 45 km/L on a 40 km daily commute, monthly petrol drops to just 27 Liters (~PKR 7,600/month).' },
      { q: 'How can I improve my city fuel mileage by 10%–15% without changing cars?', a: 'Keep tires inflated to 32–33 PSI, clean the throttle body and MAF sensor, use the manufacturer’s 0W-20/5W-30 oil, and avoid hard jackrabbit acceleration.' }
    ],
    whoUses: 'Who uses this: Office commuters, household budget planners, students, and HR departments designing fuel allowances.'
  },
  'auto-ev-charging': {
    intro: 'As electric vehicles (such as BYD Atto 3, Seal, MG ZS EV, Ora 03, and Audi e-tron) and electric scooters gain popularity in Pakistan, buyers want to know how much a full 0% to 100% home or commercial charger refill actually costs in PKR.',
    howItWorks: 'One kilowatt-hour (kWh) of EV battery capacity equals 1 commercial electricity unit on your meter. The calculator multiplies your EV Battery Capacity (kWh) by your Electricity Tariff Rate (PKR / kWh). Formula: Full Charge Cost (PKR) = EV Battery Capacity (kWh) × Tariff Rate (PKR / kWh).',
    workedExample: 'Charging a 60 kWh EV crossover battery from 0% to 100% at a residential off-peak electricity tariff of PKR 35 per kWh costs PKR 2,100 for a full charge (delivering roughly 400 km of driving range, or just PKR 5.25 per km!).',
    faqs: [
      { q: 'What if I charge my EV at home using rooftop solar panels?', a: 'If you charge during sunny daytime hours or via net-metering export credits, your effective electricity rate drops near PKR 0–15/kWh, making driving almost free!' },
      { q: 'What do commercial DC fast-charging stations on the M-2 Motorway or in cities charge per kWh?', a: 'Public DC fast chargers in Pakistan typically bill between PKR 70 and PKR 110 per kWh (or per minute), which is still roughly half the per-km cost of petrol.' },
      { q: 'What is the battery capacity of an electric bike or scooter in Pakistan?', a: 'Electric scooters (like Yadea, Metro, or Benling) usually have a 1.5 kWh to 2.5 kWh battery—costing just PKR 50 to PKR 90 for a full charge (60–80 km range)!' },
      { q: 'Should I add 10% for onboard charger heat loss?', a: 'Yes, AC wall-box charging is about 90% efficient, so putting 60 kWh into the battery pack draws roughly 66 kWh from the wall meter.' }
    ],
    whoUses: 'Who uses this: EV and hybrid buyers, solar homeowners considering an EV or e-bike, and fleet electrifiers.'
  },
  'auto-finance-emi': {
    intro: 'Financing a brand-new or used car through bank auto loans or Islamic Car Ijarah / Musharakah (from Meezan Car Ijarah, HBL CarLoan, Bank Alfalah, or Dubai Islamic Bank) requires budgeting your fixed monthly installment over a 1-to-5-year tenure. This calculator computes your exact monthly payment and total outflow.',
    howItWorks: 'The annual markup rate is converted into a monthly decimal rate ($r = \\text{Annual Rate} / 12 / 100$) and the tenure in years is converted into monthly installments ($n = \\text{Years} \\times 12$). The standard amortizing annuity formula computes the monthly payment. Formula: $\\text{EMI} = [P \\times r \\times (1 + r)^n] / [(1 + r)^n - 1]$.',
    workedExample: 'Financing PKR 3,000,000 for a new car at a 17% annual markup rate over a 3-year (36-month) tenure results in a monthly installment of PKR 106,958 / month, with Total Payments of PKR 3,850,495 over the 3 years.',
    faqs: [
      { q: 'What is the State Bank of Pakistan (SBP) maximum tenure limit for car loans?', a: 'Under SBP Auto Financing Prudential Regulations, the maximum financing tenure is capped at 3 years for cars above 1000cc and 5 years for cars up to 1000cc.' },
      { q: 'What is the minimum down payment required for a bank car loan in Pakistan?', a: 'SBP regulations mandate a minimum 30% down payment (equity contribution) from the customer, meaning the maximum loan amount cannot exceed 70% (or PKR 3,000,000 cap).' },
      { q: 'Does this monthly installment include Takaful / comprehensive insurance and tracker fees?', a: 'This calculates principal + markup; banks add comprehensive insurance (typically 1.8%–2.5% of car value per year) and tracker charges on top.' },
      { q: 'Can I finance a used car through a Pakistani bank?', a: 'Yes, most banks finance locally assembled used cars up to 5 to 9 years old, provided the total age at loan maturity does not exceed 9–12 years.' }
    ],
    whoUses: 'Who uses this: Car buyers comparing bank auto-finance quotes, dealership finance desks, and bankers.'
  },
  'auto-braking-distance': {
    intro: 'When an obstacle or slow-moving tractor trolley suddenly appears on the highway, how many meters will your car skid or brake before coming to a complete stop? Because kinetic energy grows with the square of speed, braking distance from 120 km/h is more than double the braking distance from 80 km/h!',
    howItWorks: 'Vehicle speed in km/h is first converted into meters per second ($v = \\text{km/h} / 3.6$). Using the work-energy principle where tire friction force ($\\mu m g$) dissipates kinetic energy ($\\frac{1}{2}mv^2$), the calculator computes pure mechanical braking distance in meters. Formula: $\\text{Braking Distance (m)} = v^2 / (2 \\times \\mu \\times 9.8)$.',
    workedExample: 'Braking hard from $100\\text{ km/h}$ ($27.78\\text{ m/s}$) on dry asphalt with a tire-road friction coefficient of $\\mu = 0.7$ requires $27.78^2 / (2 \\times 0.7 \\times 9.8) = 56.2\\text{ Meters}$ of pure braking distance.',
    faqs: [
      { q: 'What happens to braking distance when the road is wet during monsoon rains ($\\mu = 0.4$)?', a: 'At $100\\text{ km/h}$, dropping friction from $0.7$ (dry) to $0.4$ (wet road) stretches braking distance from $56.2\\text{ meters}$ to $98.4\\text{ meters}$—nearly the length of a football field!' },
      { q: 'Does this include "Driver Reaction Distance" before my foot hits the brake pedal?', a: 'No! Human reaction time takes ~1.5 seconds; at 100 km/h ($27.8\\text{ m/s}$), your car travels an extra $41.7\\text{ meters}$ before the brakes even engage!' },
      { q: 'Why do old, hard, or bald tires increase stopping distance?', a: 'Hardened rubber compound and worn tread grooves reduce the friction coefficient ($\\mu$) and cause hydroplaning on wet roads.' },
      { q: 'How does ABS (Anti-lock Braking System) help during emergency braking?', a: 'ABS prevents the wheels from locking into a skid (where sliding friction is lower than peak static rolling friction) and lets you steer around the obstacle while braking.' }
    ],
    whoUses: 'Who uses this: Motorway safety instructors, defensive driving trainers, accident reconstruction experts, and physics students.'
  },
  'auto-cc-to-hp': {
    intro: 'In Pakistan, cars are traditionally classified by engine displacement in Cubic Centimeters (CC)—such as 660cc, 1000cc, 1300cc, 1500cc, or 1800cc. However, modern small-displacement turbocharged engines (like the 1.5L Turbo in Honda Civic RS, Haval H6, or Changan Oshan X7) produce far more Horsepower than naturally aspirated engines of the same CC.',
    howItWorks: 'Based on volumetric efficiency and forced induction benchmarks, the calculator multiplies Engine Displacement (CC) by $0.075\\text{ HP/cc}$ for Naturally Aspirated engines or by $0.11\\text{ HP/cc}$ for Turbocharged engines. Formula: $\\text{Estimated HP} = \\text{CC} \\times \\text{Induction Factor (0.075 NA / 0.11 Turbo)}$.',
    workedExample: 'A 1,500 CC Naturally Aspirated engine (like Toyota Yaris 1.5 or Honda City 1.5) produces approximately $1500 \\times 0.075 = 113\\text{ Horsepower (HP)}$. Switching the dropdown to Turbocharged estimates $1500 \\times 0.11 = 165\\text{ HP}$ (matching modern 1.5T crossovers).',
    faqs: [
      { q: 'Why does a 1500cc Turbo engine produce as much power as an old 2400cc Naturally Aspirated engine?', a: 'A turbocharger uses exhaust gas to compress extra air into the cylinders, allowing the engine to burn more fuel per stroke and generate 40%–50% more horsepower per CC.' },
      { q: 'How much horsepower does a 660cc Japanese kei car produce?', a: 'A 660cc naturally aspirated engine produces around 50–54 HP, while a 660cc turbo intercooled engine produces the Japanese legal cap of 64 HP.' },
      { q: 'Does fuel octane (High-Octane RON 95/97 vs Regular RON 92) affect turbo horsepower?', a: 'Yes, high-compression turbocharged engines often require High-Octane fuel to prevent knock sensor timing retardation in hot weather.' },
      { q: 'Is this an exact dyno figure or an engineering rule-of-thumb?', a: 'It is a reliable automotive engineering benchmark; exact factory horsepower varies slightly by redline RPM and cam tuning.' }
    ],
    whoUses: 'Who uses this: Car enthusiasts, buyers comparing 1.5L NA sedans against 1.5L Turbo crossovers, and automotive bloggers.'
  },
  'auto-carbon-footprint': {
    intro: 'Burning 1 liter of petrol in an internal combustion engine releases approximately 2.31 kilograms of carbon dioxide ($\\text{CO}_2$) gas into the atmosphere—why a 1-liter bottle of petrol weighing 0.75 kg produces 2.31 kg of $\\text{CO}_2$ is because each carbon atom bonds with two heavy oxygen atoms from the air! This calculator measures your annual driving carbon footprint.',
    howItWorks: 'The calculator divides your Annual Distance Driven (km) by Vehicle Mileage (km/L) to find total liters of petrol burned per year, multiplies by $2.31\\text{ kg CO}_2/\\text{liter}$, and divides by 1,000 to report metric Tonnes of $\\text{CO}_2$ per year. Formula: $\\text{CO}_2\\text{ (kg)} = (\\text{Annual Distance} / \\text{Mileage}) \\times 2.31$.',
    workedExample: 'Driving 15,000 km per year in a car averaging 12 km/L consumes 1,250 Liters of petrol, generating $1250 \\times 2.31 = 2,888\\text{ kg}$ ($2.89\\text{ Tonnes}$) of $\\text{CO}_2$ per year.',
    faqs: [
      { q: 'How many mature trees are needed to absorb 2.89 Tonnes of CO2 per year?', a: 'A mature tree absorbs roughly 21 to 25 kg of $\\text{CO}_2$ per year, meaning it takes about 120 trees to offset one average car’s annual emissions.' },
      { q: 'How much does switching to a Hybrid (HEV) getting 22 km/L cut annual CO2 emissions?', a: 'At 15,000 km/year, a 22 km/L hybrid burns only 682 Liters, cutting emissions from 2.89 Tonnes down to 1.57 Tonnes—a 46% reduction!' },
      { q: 'Why is reducing vehicular emissions critical in Lahore and Karachi?', a: 'Vehicular tailpipe emissions are one of the primary contributors to winter smog and high PM2.5 Air Quality Index (AQI) levels in Punjab and Sindh.' },
      { q: 'What is the CO2 emission factor for Diesel vs Petrol?', a: 'Diesel has higher carbon density (~2.68 kg $\\text{CO}_2$/liter), though diesel engines often achieve slightly higher km/L mileage.' }
    ],
    whoUses: 'Who uses this: Corporate ESG sustainability officers, environmental science students, and eco-conscious drivers.'
  },
  'auto-monthly-value-loss': {
    intro: 'When calculating the true monthly cost of owning a car, most drivers count petrol and oil changes but overlook monthly resale value loss. If you bought a car for PKR 5,000,000 and its current market offer two years later is PKR 3,800,000, that depreciation cost you real money every single month.',
    howItWorks: 'The calculator subtracts the car’s Estimated Current Value (PKR) from its Initial Purchase Price (PKR) to find Total Depreciation Loss, then divides by the Number of Months Owned. Formula: Monthly Value Loss (PKR) = (Purchase Price − Current Value) / Months Owned.',
    workedExample: 'A vehicle bought for PKR 5,000,000 whose market resale value is PKR 3,800,000 after 24 months of ownership has lost PKR 1,200,000 in total value, which equals PKR 50,000 / month in hidden depreciation cost.',
    faqs: [
      { q: 'Why do brand-new zero-meter cars lose the most value in the first 12 to 24 months?', a: 'Once a new car leaves the showroom and loses its "zero-meter unregistered" status (plus registration and withholding taxes paid), its steepest drop occurs in Years 1 and 2.' },
      { q: 'What if my car’s current PKR value is higher than what I paid 3 years ago?', a: 'The calculator will output a negative loss (meaning a net nominal gain per month), which happened in Pakistan during high inflation/devaluation years.' },
      { q: 'How can I minimize monthly resale value loss when buying a car in Pakistan?', a: 'Buy a 2-to-3-year-old well-maintained car in a popular color (white, silver, or black) where the first owner has already absorbed the initial registration and depreciation hit.' },
      { q: 'Should I include registration and FBR tax in Purchase Price?', a: 'Yes, entering your total on-road landed cost gives your true net pocket loss.' }
    ],
    whoUses: 'Who uses this: Car owners evaluating true cost of ownership, fleet managers, and financial planners.'
  },
  'auto-road-trip-planner': {
    intro: 'Planning a long-haul cross-country journey—such as driving 900 km from Lahore to Karachi or Islamabad to Quetta—requires estimating both total active behind-the-wheel driving hours and how many times you will need to stop to refill your fuel tank.',
    howItWorks: 'Total Driving Hours are calculated by dividing Total Journey Distance (km) by Average Driving Speed (km/h). The minimum number of en-route Fuel Stops (assuming you start with a full tank) is the integer floor of Total Distance divided by Full Tank Driving Range. Formula: Drive Hours = Distance / Avg Speed; Fuel Stops = floor(Distance / Tank Range).',
    workedExample: 'For a 900 km road trip at an average speed of 85 km/h in a car with a 550 km full-tank range, active driving time is ~10.6 hours with 1 mandatory en-route Fuel Stop.',
    faqs: [
      { q: 'If my tank range is 550 km, why shouldn’t I wait until 540 km to stop for fuel?', a: 'In real life, plan a fuel stop every 350–400 km (around the half-to-quarter tank mark) so you can combine refueling with a 20-minute driver rest, tea, and tire check.' },
      { q: 'What is a realistic door-to-door Average Driving Speed on Pakistani highways?', a: 'On access-controlled Motorways (M-1/M-2/M-3/M-5), average speed is 90–100 km/h; on single-carriageway N-5 GT Road or KKH, average speed is 50–65 km/h.' },
      { q: 'How many hours should one person drive continuously before taking a break?', a: 'Highway safety experts recommend a 15-to-20-minute rest break every 2.5 to 3 hours of continuous driving to prevent highway hypnosis and fatigue.' },
      { q: 'Does theDriving Time include meal and prayer stops?', a: 'No, 10.6 hours is pure wheel-rolling time; add 1.5 to 2 hours for meal, washroom, and refueling stops.' }
    ],
    whoUses: 'Who uses this: Long-distance families, tour company dispatchers, and inter-provincial drivers.'
  },
  'auto-oil-consumption': {
    intro: 'Older high-mileage engines (above 150,000 km) or turbocharged engines with worn valve stem seals or piston rings may begin burning engine oil ("oil kam karna" in Pakistani mechanic terminology) between oil changes. This calculator measures your engine’s exact oil burn rate in kilometers per liter of oil.',
    howItWorks: 'The calculator divides the Distance Driven (km) by the top-up Oil Consumed (Liters) over that period to determine how many kilometers the engine travels per 1 Liter of oil burned. Formula: Km per Liter of Oil = Distance Driven (km) / Oil Consumed (Liters).',
    workedExample: 'If your car’s dipstick drops and requires 1.5 Liters of top-up oil over 3,000 km of driving, your oil burn rate is 3,000 / 1.5 = 2,000 km per Liter of Oil.',
    faqs: [
      { q: 'What is considered normal vs excessive engine oil consumption?', a: 'A healthy engine burns less than 0.2–0.3L over a 5,000 km change (>15,000 km/L of oil). Burning 1 Liter every 1,000–2,000 km indicates worn piston rings, valve seals, or a faulty PCV valve!' },
      { q: 'How much oil does the range between the L (Low) and F (Full) marks on a car dipstick represent?', a: 'On almost all passenger cars, the distance from the Bottom hole/mark to the Top hole/mark on the dipstick equals exactly 1.0 Liter of oil.' },
      { q: 'Does bluish-white smoke from the exhaust tailpipe mean the engine is burning oil?', a: 'Yes, blue-tinted exhaust smoke (especially on morning startup or hard acceleration) is the classic sign of oil entering the combustion chamber.' },
      { q: 'Can a stuck PCV (Positive Crankcase Ventilation) valve cause oil consumption on a healthy engine?', a: 'Yes! Before paying a mechanic for an expensive engine overhaul, always check and clean/replace the cheap PCV valve and check for external oil pan/seal leaks.' }
    ],
    whoUses: 'Who uses this: Car owners monitoring aging engines, pre-purchase car inspectors, and workshop mechanics.'
  },
  'auto-insurance-cost': {
    intro: 'Comprehensive car insurance or Islamic Motor Takaful in Pakistan protects your vehicle against total theft, snatching, accidental collision damage, fire, floods, and third-party liability. Premiums are calculated as a percentage of the vehicle’s current insured market value.',
    howItWorks: 'The calculator converts the annual Insurance Rate percentage into a decimal (Rate / 100) and multiplies it by your Car Market Value (PKR) to compute the Annual Premium, dividing by 12 for the monthly cost. Formula: Annual Premium (PKR) = Car Market Value × (Insurance Rate % / 100).',
    workedExample: 'Insuring a sedan with a current market value of PKR 4,000,000 at a comprehensive Takaful/insurance rate of 2.5% costs PKR 100,000 per year (or PKR 8,333 per month).',
    faqs: [
      { q: 'What are typical comprehensive car insurance / Takaful rates in Pakistan?', a: 'Rates typically range from 1.5% to 2.5% of the car’s value per year (often around 1.75%–2.0% without tracker, or 2.25%–2.75% with a satellite tracker included).' },
      { q: 'What is a "No-Claim Bonus" (NCB) discount on renewal?', a: 'If you complete a full policy year without filing an accident claim, Pakistani insurers reduce your renewal premium by 10% to 30%!' },
      { q: 'Why should I update my car’s "Sum Insured" to current market value each year?', a: 'If your car is worth PKR 4M in the market but you insure it for only PKR 2.5M, the insurer will apply an "under-insurance penalty" or pay only PKR 2.5M if it is stolen.' },
      { q: 'Does comprehensive insurance cover zero-depreciation on new cars?', a: 'During the first 6 to 12 months of a brand-new car, policies usually offer 0% parts depreciation on dealership repairs.' }
    ],
    whoUses: 'Who uses this: Car owners comparing Takaful/insurance quotes, bank-leased vehicle buyers, and corporate fleet managers.'
  },
  'auto-hp-to-kw': {
    intro: 'While petrol and diesel engines are traditionally rated in Horsepower (HP), modern Electric Vehicles (EVs), hybrid motors, and European/Chinese vehicle spec sheets list motor output in Kilowatts (kW). This converter translates Horsepower into Kilowatts instantly.',
    howItWorks: 'One mechanical Imperial Horsepower equals exactly 745.7 Watts ($0.7457\\text{ kW}$). The calculator multiplies your entered Horsepower rating by $0.7457$ to output power in Kilowatts. Formula: $\\text{Kilowatts (kW)} = \\text{Horsepower (HP)} \\times 0.7457$.',
    workedExample: 'An engine or electric motor rated at $150\\text{ Horsepower (HP)}$ converts to $150 \\times 0.7457 = 111.86\\text{ kW (Kilowatts)}$.',
    faqs: [
      { q: 'How do I convert Kilowatts (kW) on a Chinese EV spec sheet (like a 150 kW BYD Atto 3) back into Horsepower?', a: 'Divide kW by $0.7457$ (or multiply kW by $1.341$)—so a $150\\text{ kW}$ electric motor equals $201\\text{ Horsepower}$!' },
      { q: 'What is the difference between Mechanical HP (745.7W) and Metric PS / bhp (735.5W)?', a: 'European and Japanese brochures sometimes use Metric Horsepower (PS), where $1\\text{ kW} = 1.36\\text{ PS}$ ($1.341\\text{ mechanical HP}$)—the difference is only 1.4%.' },
      { q: 'Does a 111.86 kW EV motor consume 111.86 kWh of battery energy every hour?', a: 'Only if you hold the accelerator pedal flat to the floor at 100% full power continuously! Normal highway cruising at 100 km/h uses only 15 to 20 kW of power.' },
      { q: 'Why are EV motors rated in kW?', a: 'Because battery capacity is measured in kWh and chargers are rated in kW, keeping motor output in kW makes electrical energy calculations seamless.' }
    ],
    whoUses: 'Who uses this: EV buyers reading spec sheets, automotive journalists, and mechanical engineers.'
  },
  'auto-average-speed': {
    intro: 'Modern motorway enforcement systems and Safe City camera corridors calculate your average speed between two timestamped camera gantry points separated by a known distance in meters. This calculator computes your exact speed in km/h from distance in meters and elapsed time in seconds.',
    howItWorks: 'Dividing Distance (Meters) by Time Taken (Seconds) gives speed in meters per second ($\text{m/s}$). Multiplying $\text{m/s}$ by $3.6$ ($3,600\\text{ seconds/hour} \\div 1,000\\text{ meters/km}$) converts the result into kilometers per hour ($\text{km/h}$). Formula: $\\text{Average Speed (km/h)} = [\\text{Distance (m)} / \\text{Time (s)}] \\times 3.6$.',
    workedExample: 'Covering a 5,000-meter (5 km) camera sector in 200 seconds equals $5000 / 200 = 25.0\\text{ m/s}$, which converts to $25.0 \\times 3.6 = 90.0\\text{ km/h Average Speed}$.',
    faqs: [
      { q: 'Why can’t you beat an Average Speed Camera by braking right in front of the second camera?', a: 'Because an average speed system divides total sector distance by total elapsed time between Camera A and Camera B—if you covered 5 km in 140 seconds (128.6 km/h), braking at the end doesn’t erase the early speed!' },
      { q: 'How many seconds does it take to travel 1 kilometer (1,000 meters) at the 120 km/h motorway limit?', a: 'At 120 km/h (2 km per minute), covering 1,000 meters takes exactly 30 seconds.' },
      { q: 'Can I use this to check if my car’s dashboard speedometer is accurate?', a: 'Yes! Hold a steady speed on the motorway, time how many seconds it takes to pass between two green 1-km milestone markers (1,000 m), and enter the seconds here.' },
      { q: 'Why do car speedometers usually read 3–5 km/h higher than GPS speed?', a: 'International UNECE regulations require speedometers to never under-read true speed, so manufacturers calibrate them 3%–5% optimistic.' }
    ],
    whoUses: 'Who uses this: Motorway drivers calibrating speedometers, traffic engineers, and track timing enthusiasts.'
  },
  'auto-battery-health': {
    intro: 'In Pakistan’s extreme summer heat (45°C+ under the hood) followed by cold January mornings, a 12V car starter battery (AGS, Exide, Phoenix, Daewoo) typically lasts 2.5 to 4 years. By checking your battery’s age in months and its morning resting voltage with a multimeter, this tool diagnoses its health status.',
    howItWorks: 'A fully charged 12V lead-acid automotive battery consists of six 2.1V cells in series, reading 12.6V to 12.7V at rest (engine off). The calculator evaluates both resting voltage drop and operating age: below 12.0V or older than 48 months triggers "Replacement Recommended Soon"; below 12.3V or older than 36 months triggers "Fair / Monitor Closely"; otherwise "Good Health". Formula: Threshold diagnostic evaluation of Resting Voltage (V) and Age (Months).',
    workedExample: 'A car battery that is 36 months (3 years) old with a morning resting voltage of 12.4V is rated in "Good Health" (right on the 36-month cusp—worth monitoring electrolyte levels closely before winter).',
    faqs: [
      { q: 'When should I measure "Resting Voltage" with a multimeter?', a: 'Measure in the morning before starting the car (after the car has sat parked for at least 4–6 hours) so surface charge from the alternator has dissipated.' },
      { q: 'What voltage should the multimeter show when the engine IS running?', a: 'With the engine running, a healthy car alternator should charge the battery at 13.8V to 14.4V.' },
      { q: 'What does a resting voltage of 12.6V vs 12.2V vs 11.9V mean for state of charge?', a: '12.6V+ is 100% charged, 12.4V is ~75% charged, 12.2V is ~50% charged, and below 12.0V is discharged or sulfated.' },
      { q: 'Do dry maintenance-free (MF) batteries last longer than liquid lead-acid batteries in Pakistan?', a: 'Maintenance-free calcium batteries are convenient and don’t spill acid on the battery tray, while traditional liquid batteries tolerate heat well if topped up with distilled water monthly.' }
    ],
    whoUses: 'Who uses this: Car owners troubleshooting slow morning engine cranking, auto-electricians, and battery shop dealers.'
  },
  'auto-parking-fee': {
    intro: 'Airport long-stay parking lots (Jinnah International Karachi, Allama Iqbal Lahore, Islamabad International), hospital garages, and commercial plazas charge hourly or daily parking tariffs. This calculator multiplies your parked duration in hours by the hourly rate in PKR.',
    howItWorks: 'The calculator multiplies Parking Duration (Hours) by the Rate per Hour (PKR) to compute the Total Parking Fee. Formula: Total Parking Fee (PKR) = Parking Duration (Hours) × Rate per Hour (PKR).',
    workedExample: 'Parking a car at a commercial plaza or airport executive lot for 4 hours at a rate of PKR 100 per hour costs PKR 400.',
    faqs: [
      { q: 'How can I calculate monthly office parking costs using this tool?', a: 'Enter your total monthly parked hours (e.g., 8 hours/day × 24 workdays = 192 hours) or enter 24 days as "Hours" and your daily flat parking rate as "Rate".' },
      { q: 'How do airport parking lots bill partial hours?', a: 'Most automated boom-barrier parking systems round any partial hour up to the next full hour (so 3 hours and 15 minutes is billed as 4 hours).' },
      { q: 'Can plaza management use this to estimate daily parking revenue?', a: 'Yes—enter total vehicle-hours billed across the lot in a day and the hourly tariff to audit cash collection.' },
      { q: 'What if a mall charges a flat entry fee instead of hourly?', a: 'Set "Parking Duration (Hours)" to the number of visits per month and "Rate" to the flat entry ticket price.' }
    ],
    whoUses: 'Who uses this: Daily commuters, airport travelers, and commercial parking lot contractors.'
  },
  'auto-rpm-speed': {
    intro: 'Ever wondered why your 1800cc sedan cruises quietly at 120 km/h at just 2,200 RPM while a small 660cc or 1000cc hatchback buzzes at 3,800 RPM at the exact same speed? The relationship between engine crankshaft RPM and road speed is governed by your transmission’s overall gear ratio.',
    howItWorks: 'The calculator divides Engine RPM by the Total Gear Ratio (Selected Transmission Gear Ratio × Final Drive Differential Ratio) to find Wheel RPM, then multiplies by a standard passenger tire circumference factor ($0.055$) to estimate road speed in km/h. Formula: Wheel RPM = Engine RPM / Total Gear Ratio; Speed (km/h) ≈ Wheel RPM × 0.055.',
    workedExample: 'At an Engine RPM of 2,500 RPM in top overdrive gear with a Total Gear Ratio of 3.2, the wheels spin at 781 RPM, propelling the vehicle at ~43.0 km/h (or at a 1.8 overdrive ratio, ~76.4 km/h).',
    faqs: [
      { q: 'What is "Total Gear Ratio"?', a: 'It is the transmission gear ratio multiplied by the differential final drive ratio—for example, if 5th gear is $0.75$ and the final drive is $4.10$, Total Gear Ratio is $0.75 \\times 4.10 = 3.075$.' },
      { q: 'Why does cruising at lower RPM in top gear save petrol?', a: 'Lower RPM means fewer piston strokes and lower internal engine pumping and friction losses per kilometer traveled.' },
      { q: 'What if my car’s RPM rises when I press the accelerator in a manual car, but speed doesn’t increase proportionally?', a: 'If RPM shoots up without a matching speed increase in a manual transmission car, your clutch plate is slipping and needs replacement!' },
      { q: 'How do CVT (Continuously Variable Transmissions) in Yaris, Corolla, and Civic work?', a: 'Instead of fixed gear steps, a CVT uses variable-diameter steel belt pulleys to continuously adjust the gear ratio, keeping the engine in its most fuel-efficient RPM band.' }
    ],
    whoUses: 'Who uses this: Automotive engineers, manual transmission drivers diagnosing clutch slip, and gear-ratio tuners.'
  },
  'auto-loan-emi': {
    intro: 'When comparing multiple car loan offers from commercial banks, leasing companies, or employer car-loan schemes in Pakistan, you need a quick way to check the exact monthly Equal Monthly Installment (EMI) and total cumulative repayment over the loan tenure.',
    howItWorks: 'The calculator converts the Annual Interest Rate (%) into a monthly decimal rate ($r = \\text{Rate} / 100 / 12$) and Loan Tenure (Years) into months ($n = \\text{Years} \\times 12$), applying the standard compound amortization formula. Formula: $\\text{EMI} = [P \\cdot r \\cdot (1 + r)^n] / [(1 + r)^n - 1]$.',
    workedExample: 'Borrowing a Loan Amount of PKR 3,000,000 at an 18% annual interest rate for a 3-year (36-month) tenure yields a monthly EMI of PKR 108,457 / month, with a total payment over 3 years of PKR 3,904,459.',
    faqs: [
      { q: 'How much total markup/interest is paid in the worked example above?', a: 'Subtracting the PKR 3,000,000 principal from the PKR 3,904,459 total payment shows that PKR 904,459 goes toward cumulative 3-year interest.' },
      { q: 'What happens if my employer gives me a 0% interest-free company car loan?', a: 'Enter `0` in the Annual Interest Rate (%) field—the calculator automatically switches to zero-interest division and outputs PKR 83,333 / month!' },
      { q: 'Is a 3-year car loan better than a 5-year car loan?', a: 'A 3-year loan has a higher monthly EMI, but saves you hundreds of thousands of Rupees in total interest compared to stretching the loan over 5 years.' },
      { q: 'Are car loan rates in Pakistan fixed or floating?', a: 'Banks offer both Fixed Rate options (slightly higher initial rate, locked for 3 years) and Variable Rate options (pegged to 1-Year KIBOR + 2% to 4% bank spread).' }
    ],
    whoUses: 'Who uses this: Salaried employees taking company or bank car loans, car showroom managers, and auto buyers.'
  },
  'auto-hp-torque': {
    intro: 'In engine dynamometer testing and automotive engineering, Horsepower (HP) and Torque (lb-ft) are locked together by a famous mathematical constant: 5,252. Knowing any engine’s torque in pound-feet (lb-ft) at a given RPM allows you to calculate the exact Horsepower being produced at that RPM.',
    howItWorks: 'Because 1 mechanical Horsepower is defined as 33,000 foot-pounds of work per minute divided by $2\\pi$ radians per revolution ($33000 / 2\\pi = 5252.11$), multiplying Torque (lb-ft) by Engine RPM and dividing by 5,252 yields Horsepower. Formula: $\\text{HP} = (\\text{Torque in lb-ft} \\times \\text{RPM}) / 5252$.',
    workedExample: 'An engine generating $250\\text{ lb-ft}$ of torque at $5,250\\text{ RPM}$ produces $(250 \\times 5250) / 5252 = 249.9\\text{ Horsepower (HP)}$.',
    faqs: [
      { q: 'Why do Horsepower and Torque curves on every dyno chart in the world always cross at exactly 5,252 RPM?', a: 'Because in $\\text{HP} = (\\text{Torque} \\times \\text{RPM}) / 5252$, when $\\text{RPM} = 5252$, the fraction $5252 / 5252$ cancels out to $1$, forcing $\\text{HP} = \\text{Torque}$ mathematically!' },
      { q: 'How do I convert Newton-meters (N·m) from a Pakistani car brochure into lb-ft before entering?', a: 'Multiply $\\text{N}\\cdot\\text{m}$ by $0.7376$—for example, a Civic RS Turbo with $240\\text{ N}\\cdot\\text{m}$ of torque equals $177\\text{ lb-ft}$.' },
      { q: 'What is the practical driving difference between high Torque and high Horsepower?', a: 'Torque is the immediate shove you feel pushing you into the seat at low RPM when overtaking; Horsepower is how fast the engine can sustain that work at high RPM.' },
      { q: 'Why do electric vehicles feel so quick off the traffic light?', a: 'Electric motors deliver 100% of their peak torque at 0 RPM immediately, whereas petrol engines must rev up to 3,000–4,500 RPM to reach peak torque.' }
    ],
    whoUses: 'Who uses this: Dyno tuners, mechanical engineering students, motorsport enthusiasts, and car reviewers.'
  },
  'auto-tire-profile': {
    intro: 'Every car tire in Pakistan has a size code molded on its rubber sidewall—such as `205/55R16` (Corolla Grande), `185/65R15` (Honda City / Yaris), or `145/80R13` (Suzuki Alto). Many Pakistani drivers upsize their tire profile slightly to increase ground clearance over high speed breakers. This calculator computes exact sidewall height in mm and overall tire diameter in inches.',
    howItWorks: 'In a tire code like `205/55R16`, `205` is the tread Width in millimeters, `55` is the Aspect Ratio (sidewall height as a percentage of width), and `16` is the alloy Rim Diameter in inches. Sidewall height in mm is $\\text{Width} \\times (\\text{Aspect Ratio} / 100)$, which is divided by $25.4\\text{ mm/inch}$, doubled (top + bottom sidewall), and added to the Rim Diameter. Formula: $\\text{Overall Diameter (in)} = \\text{Rim} + 2 \\times [(\\text{Width} \\times \\text{Aspect\\%} / 100) / 25.4]$.',
    workedExample: 'For a `205/55R16` tire (Width = 205 mm, Aspect Ratio = 55%, Rim = 16 inches), the sidewall height is $205 \\times 0.55 = 112.8\\text{ mm}$ ($4.44\\text{ in}$), giving an Overall Diameter of $16 + (2 \\times 4.44) = 24.9\\text{ inches}$.',
    faqs: [
      { q: 'What is the "3% Rule" when upsizing tires for better ground clearance over Pakistani speed breakers?', a: 'Tire engineers recommend keeping the new tire’s Overall Diameter within $+3\\%$ of the factory size so tires don’t rub the fender liners, suspension geometry stays safe, and braking isn’t compromised.' },
      { q: 'How much ground clearance do I gain if Overall Diameter increases by 1.0 inch?', a: 'Because the axle sits in the center of the wheel, half of the diameter increase is above the axle and half is below—so a $+1.0\\text{ inch}$ diameter increase raises ground clearance by $+0.5\\text{ inches}$ ($12.7\\text{ mm}$).' },
      { q: 'Why does fitting overly wide or heavy tires reduce fuel mileage in Pakistan?', a: 'Wider tires increase rolling resistance and rotational unsprung weight, often costing 1 to 2 km/L in city driving.' },
      { q: 'Does changing tire diameter affect my speedometer reading?', a: 'Yes, a larger overall diameter makes the car travel slightly farther per wheel revolution, so at a speedometer reading of 100 km/h your true GPS speed may be 103 km/h.' }
    ],
    whoUses: 'Who uses this: Car owners visiting tire shops (Neela Gumbad Lahore, Saddar Rawalpindi/Karachi), wheel alignment technicians, and off-roaders.'
  },
  'auto-speeding-fine': {
    intro: 'National Highway & Motorway Police (NHMP) and provincial City Traffic Police (PSCA e-Challan cameras in Lahore, Islamabad, and Karachi) enforce strict speed limits (typically 120 km/h for cars on motorways and 50–80 km/h on city avenues). This calculator checks whether you exceeded the limit and estimates the fine tier in PKR.',
    howItWorks: 'The calculator subtracts the posted Speed Limit (km/h) from your Actual Speed Driven (km/h) to determine Excess Speed. If Excess Speed is $\\le 0$, no violation occurred; otherwise it maps the excess speed across escalating penalty tiers (PKR 1,000 up to +10 km/h, PKR 1,500 for +11–20 km/h, PKR 2,500 for +21–30 km/h, and PKR 5,000 for +30 km/h over). Formula: Excess = Actual Speed − Speed Limit → Mapped to Fine Tier.',
    workedExample: 'Driving at 145 km/h in a 120 km/h motorway zone represents an excess speed of +25 km/h over the limit, estimating a PKR 2,500 Fine.',
    faqs: [
      { q: 'What are the official NHMP speed limits on Pakistani Motorways?', a: 'On most motorways (M-1, M-2, M-3, M-4, M-5), the speed limit is 120 km/h for LTV cars/SUVs and 100–110 km/h for HTV buses and trucks (lower in fog or rain).' },
      { q: 'How do Safe City e-Challans work in Lahore, Islamabad, and Karachi?', a: 'ANPR (Automatic Number Plate Recognition) speed cameras capture your license plate and mail or SMS an e-Challan linked to your CNIC and Excise vehicle record.' },
      { q: 'What happens if I ignore unpaid Safe City e-Challans?', a: 'Unpaid e-Challans block annual Excise Token Tax renewal, vehicle transfer of ownership, and driving license renewal until cleared via ePay.' },
      { q: 'Why is driving at 115–120 km/h safer and cheaper than speeding at 145 km/h?', a: 'Not only do you avoid PKR 2,500+ fines and tire blowouts in summer heat, you also save ~20% on petrol consumption!' }
    ],
    whoUses: 'Who uses this: Motorway drivers, commercial transport managers, and road safety educators.'
  }
};
