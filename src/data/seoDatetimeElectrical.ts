import { ConstructionHealthSeoContent } from './seoConstructionHealth';

export const datetimeElectricalSeoMap: Record<string, ConstructionHealthSeoContent> = {
  // ==========================================
  // DATE & TIME (28 Calculators)
  // ==========================================
  'dt-age-calc': {
    intro: 'Determining your exact chronological age in years, months, and days is essential for CNIC applications, school admissions, and official government job eligibility in Pakistan. Because calendar months vary from 28 to 31 days and leap years add an extra day every four years, mental calculation often leads to off-by-one errors. This tool computes your exact calendar age alongside the total number of days you have lived since birth.',
    howItWorks: 'The calculator compares your birth date (YYYY-MM-DD) against the current calendar date. It subtracts birth years, months, and days from today’s date, borrowing days from the preceding month when the current day number is smaller than the birth day, and borrowing 12 months when the current month is earlier in the year. Formula: Age = Current Date (Y, M, D) − Birth Date (Y, M, D); Total Days = floor(|Current Timestamp − Birth Timestamp| / 86,400,000 ms).',
    workedExample: 'Suppose an applicant for a Federal Public Service Commission (FPSC) exam was born on 1995-06-15 and checks their age on 2026-11-17. Subtracting the dates yields an exact age of 31 years, 5 months, and 2 days, with approximately 11,478 total days lived.',
    faqs: [
      { q: 'How does the calculator handle leap year birthdays on February 29?', a: 'In non-leap years, the calendar borrows the exact 28 days of February so your chronological day count remains accurate to the millisecond.' },
      { q: 'Why do CSS and PMS exams in Pakistan require exact day-level age calculation?', a: 'Competitive civil service exams enforce strict cut-off dates (such as January 1 of the exam year), where being even one day over the 30-year limit disqualifies a candidate.' },
      { q: 'Does the total days count include leap days?', a: 'Yes, because total days are computed using UTC timestamps divided by 86,400,000 milliseconds per day, every leap year February 29 between your birth and today is automatically counted.' },
      { q: 'What date format should I enter?', a: 'Use the standard ISO format YYYY-MM-DD (for example, 1998-08-14) to avoid confusion between day-first and month-first notations.' }
    ],
    whoUses: 'Who uses this: Job applicants verifying FPSC/PPSC age limits, parents registering children for NADRA B-Forms, HR officers, and visa applicants.'
  },
  'dt-date-diff': {
    intro: 'Measuring the exact span between two calendar dates helps project managers track construction milestones, landlords calculate lease durations, and travelers verify visa validity windows. Instead of counting pages on a wall calendar, this calculator instantly finds the absolute number of days, equivalent weeks, and approximate months separating any start and end date.',
    howItWorks: 'Both the start date and end date are converted into Unix timestamps in milliseconds. The calculator takes the absolute difference between the two timestamps and divides by the number of milliseconds in a standard 24-hour day. Formula: Days = round(|End Date − Start Date| / 86,400,000); Weeks = Days / 7; Months = Days / 30.44.',
    workedExample: 'If a commercial shop rental agreement in Lahore begins on 2026-01-01 and concludes on 2026-12-31, the difference is 364 days (52.0 weeks or 12.0 months). If you include the end date itself as a full day, that represents a complete 365-day calendar year.',
    faqs: [
      { q: 'Does the date difference include both the start and end dates?', a: 'It calculates the net span between the two dates (End minus Start). If you need inclusive counting—such as counting both the first and last day of leave—add 1 day to the result.' },
      { q: 'Why is 30.44 used to estimate months?', a: 'A standard Gregorian year of 365.25 days divided by 12 months equals an average month length of 30.4375 days, rounded to 30.44.' },
      { q: 'Can I enter an end date that is earlier than the start date?', a: 'Yes, the formula uses the absolute difference, so swapping the start and end dates still gives the positive day count between them.' },
      { q: 'How are 31-day months like July and August handled?', a: 'Because JavaScript date objects map to exact calendar days, 31-day months, 30-day months, and February are counted with 100% calendar precision.' }
    ],
    whoUses: 'Who uses this: Legal clerks drafting tenancy contracts, project planners, banking officers calculating maturity tenures, and event coordinators.'
  },
  'dt-add-sub-days': {
    intro: 'When an invoice states "payable within 45 days" or a doctor schedules a follow-up visit 90 days after surgery, manually counting across month boundaries is tedious. This calculator lets you add or subtract any number of calendar days from a starting date to pinpoint the exact target date and day of the week.',
    howItWorks: 'The starting date is converted into milliseconds since the Unix epoch. Depending on whether you select addition or subtraction, the tool multiplies your entered day count by 86,400,000 milliseconds and shifts the base timestamp accordingly. Formula: Target Date = Base Date ± (Number of Days × 86,400,000 ms).',
    workedExample: 'A textile exporter in Faisalabad ships a consignment on 2026-06-01 with a 45-day credit period. Adding 45 days to 2026-06-01 crosses the 30-day month of June and lands exactly on Thursday, July 16, 2026 (2026-07-16).',
    faqs: [
      { q: 'Does adding 30 days always land on the same day number next month?', a: 'Only if the current month has exactly 30 days. Adding 30 days to a 31-day month like May lands one day earlier in June.' },
      { q: 'Can I subtract hundreds of days to find a past date?', a: 'Yes, you can subtract any number of days—even several years worth—to find historical deadlines or retroactive eligibility dates.' },
      { q: 'Does this skip weekends or public holidays?', a: 'No, this calculator shifts by pure calendar days. If you need to skip Sundays, use our Add Business Days calculator instead.' },
      { q: 'What happens if the calculation crosses February in a leap year?', a: 'The underlying calendar engine automatically accounts for February 29 during leap years like 2028.' }
    ],
    whoUses: 'Who uses this: Accounts receivable teams tracking 30/60/90-day credit terms,供应链 logistics managers, patients, and immigration applicants.'
  },
  'dt-working-days': {
    intro: 'In Pakistan, factories, retail markets, construction sites, and many private offices operate on a six-day workweek from Monday through Saturday, observing Sunday as the weekly holiday. This calculator counts the exact number of working days between two dates by iterating through the calendar and excluding all Sundays.',
    howItWorks: 'Starting from your initial date and moving day-by-day through the end date (inclusive), the algorithm checks the weekday index of each date. Every day whose index is not Sunday (day 0) increments the working day counter. Formula: Working Days = Total Inclusive Calendar Days − Count of Sundays in Interval.',
    workedExample: 'For a garments production run scheduled from 2026-05-01 to 2026-05-31, there are 31 total calendar days in May 2026. Because May 2026 contains 5 Sundays (May 3, 10, 17, 24, and 31), the calculator outputs exactly 26 working days.',
    faqs: [
      { q: 'Are both the start date and end date included in the count?', a: 'Yes, the loop runs inclusively from the start date through the end date so full monthly pay periods are counted accurately.' },
      { q: 'Why does it exclude only Sundays instead of Saturdays and Sundays?', a: 'Most commercial enterprises, banks (with Saturday branches), schools, and industrial units in Pakistan follow a 6-day Monday–Saturday schedule.' },
      { q: 'Does it automatically deduct gazetted holidays like Eid or August 14?', a: 'No, because lunar holidays shift each year, you should manually subtract any gazetted public holidays falling on Monday–Saturday from the result.' },
      { q: 'How can I use this for daily-wage labor payroll?', a: 'Multiply the resulting working days by the daily wage rate (for example, 26 working days × PKR 1,500/day = PKR 39,000).' }
    ],
    whoUses: 'Who uses this: Factory floor supervisors, HR payroll administrators, school principals planning academic terms, and civil contractors.'
  },
  'dt-countdown': {
    intro: 'Whether you are counting down to a university entrance test, a product launch, a wedding ceremony, or the end of the fiscal year, seeing the exact remaining days, hours, and minutes builds clarity and urgency. This live countdown calculator compares any future target date against the current time.',
    howItWorks: 'The tool reads your computer or phone clock for the exact current timestamp and subtracts it from the midnight timestamp of your target date. The remaining milliseconds are broken down into whole days, residual hours, and residual minutes. Formula: Remaining Time = Target Timestamp − Current Timestamp.',
    workedExample: 'If today is November 17, 2026, and you set a target date of 2026-12-31 for closing annual corporate accounts, the calculator displays 43 days, along with the exact remaining hours and minutes until midnight of December 31.',
    faqs: [
      { q: 'What happens if I enter a date that has already passed?', a: 'The calculator detects a negative time difference and displays a message stating that the target date has already passed.' },
      { q: 'Which time zone does the countdown use?', a: 'It uses your device’s local system clock (such as Pakistan Standard Time PKT if you are browsing from Pakistan).' },
      { q: 'Why do hours and minutes show up when I only enter a date?', a: 'The target date defaults to 00:00 (midnight) at the start of that calendar day, while your current time includes hours and minutes elapsed today.' },
      { q: 'Can I use this for multi-year goals?', a: 'Yes, you can enter a target date several years in the future to see the total days remaining until a bond matures or a degree finishes.' }
    ],
    whoUses: 'Who uses this: Students preparing for MDCAT/ECAT exams, event planners, marketing teams launching campaigns, and families counting down to celebrations.'
  },
  'dt-time-duration': {
    intro: 'Calculating the exact hours and minutes worked during a shift, the duration of a train journey from Karachi to Rawalpindi, or the runtime of a generator during load-shedding requires base-60 arithmetic. This calculator computes the exact elapsed hours, minutes, and total minutes between any two 24-hour clock times.',
    howItWorks: 'Both the start time and end time (HH:MM) are converted into total minutes past midnight by multiplying hours by 60 and adding minutes. If the end time is smaller than the start time, the calculator assumes an overnight shift crossing midnight and adds 1,440 minutes (24 hours). Formula: Duration (mins) = (End H × 60 + End M) − (Start H × 60 + Start M) [+ 1440 if overnight].',
    workedExample: 'An office employee in Karachi clocks in at 08:30 and clocks out at 17:15. Converting to minutes gives 510 minutes and 1,035 minutes. The difference is 525 total minutes, which equals 8 hours and 45 minutes.',
    faqs: [
      { q: 'How should I enter afternoon and evening times?', a: 'Use 24-hour military clock format—for example, enter 13:00 for 1:00 PM, 17:15 for 5:15 PM, and 22:30 for 10:30 PM.' },
      { q: 'Does it work for night shifts that start before midnight and end the next morning?', a: 'Yes, if your start time is 22:00 and end time is 06:30, the calculator automatically bridges midnight and calculates 8 hours and 30 minutes.' },
      { q: 'Why is base-60 subtraction tricky to do on a regular calculator?', a: 'Standard calculators use base-10 decimals, where 17.15 minus 8.30 gives 8.85 instead of 8 hours 45 minutes (8.75 hours).' },
      { q: 'How do I convert the total minutes into decimal hours for billing?', a: 'Divide the "Total Minutes" shown in the secondary result by 60 (for instance, 525 mins / 60 = 8.75 billable hours).' }
    ],
    whoUses: 'Who uses this: Freelancers logging billable hours, factory shift supervisors, security guards, and transport dispatchers.'
  },
  'dt-timezone-conv': {
    intro: 'Pakistan has millions of overseas workers and remote IT professionals collaborating daily with clients and relatives in the UAE, Saudi Arabia, the UK, and the United States. This converter translates any 24-hour clock time between Pakistan Standard Time (PKT), Gulf Standard Time (GST), Arabia Standard Time (AST), UK Time (GMT), and US Eastern Time (EST).',
    howItWorks: 'The calculator first normalizes your input time to Coordinated Universal Time (UTC) by subtracting the source zone’s UTC offset (PKT = +5, GST = +4, AST = +3, GMT = 0, EST = −5). It then adds the destination zone’s UTC offset and wraps around 24 hours if the time crosses midnight. Formula: Target Time = Input Time − Source Offset + Target Offset (mod 24 hours).',
    workedExample: 'A software house in Islamabad schedules a client call at 14:30 PKT (2:30 PM). Converting from PKT (UTC+5) to UK (GMT, UTC+0) subtracts 5 hours, showing that the meeting takes place at 09:30 in London.',
    faqs: [
      { q: 'What is the time difference between Pakistan and Dubai (UAE)?', a: 'Pakistan (UTC+5) is exactly 1 hour ahead of the UAE (UTC+4). When it is 14:30 in Lahore, it is 13:30 in Dubai.' },
      { q: 'How many hours ahead is Pakistan compared to Saudi Arabia?', a: 'Pakistan is 2 hours ahead of Saudi Arabia (UTC+3). For example, 14:30 PKT corresponds to 12:30 AST in Riyadh and Makkah.' },
      { q: 'Does Pakistan observe Daylight Saving Time?', a: 'No, Pakistan stays on UTC+5 year-round, whereas the UK and USA shift their clocks by 1 hour during summer months.' },
      { q: 'Why is there a 10-hour gap between PKT and US Eastern Standard Time?', a: 'PKT is 5 hours ahead of UTC (+5) and EST is 5 hours behind UTC (−5), creating a total offset of 10 hours.' }
    ],
    whoUses: 'Who uses this: Remote software engineers, BPO call centers, overseas Pakistani families, and travel agents.'
  },
  'dt-week-day-finder': {
    intro: 'Supply chain planners, international shipping companies, and academic registrars frequently schedule deliveries and semesters by ISO week numbers (such as "Delivery in Week 25"). This calculator takes any calendar date and tells you both the exact day of the week (Monday through Sunday) and its official ISO-8601 week number of the year.',
    howItWorks: 'The weekday name is retrieved from the Gregorian calendar day index (0 = Sunday to 6 = Saturday). To compute the ISO week number, the algorithm locates the Thursday of the current week and counts how many 7-day intervals have elapsed since the first Thursday of January. Formula: ISO Week = ceil((1 + floor((Current Week Thursday − First Thursday of Year) / 604,800,000 ms))).',
    workedExample: 'Entering 2026-06-15 reveals that June 15, 2026 falls on a Monday and belongs to ISO Week 25 of the year.',
    faqs: [
      { q: 'What is the ISO-8601 week numbering standard?', a: 'Under ISO-8601, weeks always start on Monday, and Week 1 is defined as the week containing the year’s first Thursday (or January 4).' },
      { q: 'How many ISO weeks are in a year?', a: 'Most years have 52 ISO weeks, though years that start on a Thursday (or Wednesday in a leap year) have 53 weeks.' },
      { q: 'Can I check what day of the week I was born on?', a: 'Yes, simply type your birth date in YYYY-MM-DD format and the primary result will display the exact weekday you were born.' },
      { q: 'Why do garment exporters in Pakistan use week numbers?', a: 'European and UK retail buyers issue purchase orders with shipment deadlines specified by ISO calendar week numbers.' }
    ],
    whoUses: 'Who uses this: Textile merchandisers, freight forwarders, production schedulers, and historians.'
  },
  'dt-age-detailed': {
    intro: 'While standard age calculators show years, months, and days, sometimes you want to see your life span expressed purely in cumulative months, total weeks, and total hours lived. This calculator breaks down your time since birth into high-granularity time units for pediatric tracking, milestone celebrations, or personal curiosity.',
    howItWorks: 'The calculator subtracts your birth timestamp from the current timestamp in milliseconds. It then divides that millisecond span by the exact unit factors for days, weeks, average months (30.44 days), and hours. Formula: Total Hours = floor(Elapsed ms / 3,600,000); Total Weeks = floor(Total Days / 7); Total Months = floor(Total Days / 30.44).',
    workedExample: 'For a person born on 1990-01-01 checking their detailed age in November 2026, the tool calculates approximately 442 total months (1,924 weeks) and over 323,200 total hours lived.',
    faqs: [
      { q: 'Why do pediatricians track infant age in weeks and months?', a: 'During the first 24 months of life, vaccination schedules in Pakistan’s EPI program and growth charts are benchmarked by exact weeks and months.' },
      { q: 'How accurate is the total hours calculation?', a: 'It calculates hours from 00:00 midnight on your birth date up to the exact hour you open the calculator.' },
      { q: 'Why is total months slightly different from multiplying years by 12?', a: 'It includes the completed months of the current partial year in addition to all full years lived.' },
      { q: 'When does a person reach 10,000 days or 250,000 hours old?', a: '10,000 days occurs at roughly 27.38 years of age, while 250,000 hours occurs around 28.52 years of age.' }
    ],
    whoUses: 'Who uses this: Parents tracking baby vaccination schedules, biology students, milestone enthusiasts, and actuaries.'
  },
  'dt-leap-year': {
    intro: 'A leap year contains 366 days instead of the usual 365, adding February 29 to keep our calendar aligned with Earth’s orbit around the sun. Because century years follow a special exception rule, not every fourth year is a leap year. This checker verifies whether any historical or future year is a leap year.',
    howItWorks: 'The calculator tests three modular arithmetic conditions: a year must be divisible by 4, must not be divisible by 100 unless it is also divisible by 400. Formula: Leap Year = (Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0).',
    workedExample: 'Entering the year 2028 shows that 2028 is divisible by 4 and not a century year, so the result confirms: "2028 is a Leap Year (366 days)". Conversely, entering 2100 shows it is NOT a leap year because 2100 is divisible by 100 but not by 400.',
    faqs: [
      { q: 'Why do we need leap years in the Gregorian calendar?', a: 'Earth takes approximately 365.2422 days to orbit the sun; adding one day every four years prevents seasonal drift.' },
      { q: 'Why was the year 2000 a leap year while 1900 was not?', a: 'Century years (ending in 00) are only leap years if they are divisible by 400. 2000 ÷ 400 = 5, whereas 1900 is not divisible by 400.' },
      { q: 'How does a leap year affect annual interest or daily salary calculations?', a: 'In a leap year, daily interest and per-diem rates are sometimes divided by 366 days instead of 365 under Actual/Actual day-count conventions.' },
      { q: 'When are the next three leap years after 2026?', a: 'The next three leap years are 2028, 2032, and 2036.' }
    ],
    whoUses: 'Who uses this: Software developers writing date logic, financial analysts using Actual/Actual day counts, teachers, and students.'
  },
  'dt-add-business-days': {
    intro: 'When a government department, bank, or courier service promises delivery within "15 working days," weekends (Saturdays and Sundays) do not count toward that deadline. This calculator steps forward day-by-day from your start date, automatically skipping every Saturday and Sunday so you know the exact calendar date when a business commitment is due.',
    howItWorks: 'The algorithm initializes a date pointer at your start date and advances one day at a time in a loop. Whenever the new date falls on Monday through Friday (weekday index 1 to 5), the business-day counter increases by 1 until your target number of business days is reached. Formula: Iterate Date + 1 day while skipping weekday === 0 (Sunday) and weekday === 6 (Saturday).',
    workedExample: 'Suppose you submit an application on 2026-06-01 (Monday) with a 15-business-day processing time. Stepping forward 15 working days (skipping Saturdays and Sundays: June 6–7, June 13–14, and June 20–21) lands on Monday, June 22, 2026 (Mon Jun 22 2026 / 2026-06-22).',
    faqs: [
      { q: 'How is this different from the regular Add Days calculator?', a: 'Regular addition counts Saturdays and Sundays as normal days, whereas this tool pauses the counter on every weekend day, pushing the deadline out accurately.' },
      { q: 'How many calendar days does adding 15 business days take?', a: 'At 5 business days per week, 15 business days equals 3 full weeks (21 calendar days) when starting on a Monday.' },
      { q: 'Does the start date count as Day 0 or Day 1?', a: 'The start date is Day 0 (the day of submission), and the next working day counts as Business Day 1.' },
      { q: 'What if a public holiday falls during the period?', a: 'Add 1 extra business day to your input for each Monday–Friday public holiday that occurs during that window.' }
    ],
    whoUses: 'Who uses this: E-commerce sellers estimating COD delivery dates, legal practitioners tracking court filing windows, and procurement officers.'
  },
  'dt-unix-timestamp': {
    intro: 'Software engineers, database administrators, and API integrators store dates and times as Unix epoch timestamps—the total number of seconds elapsed since January 1, 1970 at 00:00:00 UTC. This converter transforms any human-readable date (YYYY-MM-DD) into its exact Unix timestamp in seconds and milliseconds.',
    howItWorks: 'The input date string is parsed into a UTC Date object. The calculator retrieves the internal millisecond counter via getTime() and divides by 1,000 to produce standard Unix epoch seconds. Formula: Unix Timestamp (s) = floor(Date.getTime() / 1000).',
    workedExample: 'Entering 2026-06-01 generates a Unix timestamp of 1,780,272,000 seconds (or 1,780,272,000,000 milliseconds), corresponding to Mon, 01 Jun 2026 00:00:00 GMT.',
    faqs: [
      { q: 'What is the Unix Epoch?', a: 'The Unix Epoch is the reference point of 00:00:00 UTC on January 1, 1970, used universally across Linux, macOS, Windows, and web servers.' },
      { q: 'What is the difference between a 10-digit and a 13-digit timestamp?', a: 'A 10-digit timestamp measures seconds since 1970 (used in PHP, Python, MySQL), while a 13-digit timestamp measures milliseconds (used in JavaScript and Java).' },
      { q: 'Are Unix timestamps affected by local time zones like PKT?', a: 'No, a Unix timestamp is always referenced to UTC, making it ideal for storing logs across global servers without timezone ambiguity.' },
      { q: 'What is the Year 2038 problem?', a: 'Legacy 32-bit signed integers overflow on January 19, 2038 at 2,147,483,647 seconds; modern 64-bit systems have solved this completely.' }
    ],
    whoUses: 'Who uses this: Backend web developers, mobile app engineers, database administrators, and cybersecurity analysts reading server logs.'
  },
  'dt-meeting-planner': {
    intro: 'Coordinating a live video conference across offices in Islamabad, Dubai, London, and New York can easily result in scheduling someone at 3:00 AM. By entering a proposed hour in Pakistan Standard Time (PKT), this planner displays the simultaneous local hours in Dubai, London, and New York on one screen.',
    howItWorks: 'Using Islamabad (PKT, UTC+5) as the anchor hour (0 to 23), the calculator applies fixed timezone offsets modulo 24: subtracting 1 hour for Dubai (GST), 5 hours for London (GMT), and 10 hours for New York (EST). Formula: City Hour = (PKT Hour − Offset + 24) % 24.',
    workedExample: 'If a project manager in Islamabad proposes a meeting at 15:00 PKT (3:00 PM), the calculator shows it will be 14:00 (2:00 PM) in Dubai, 10:00 (10:00 AM) in London, and 05:00 (5:00 AM) in New York—signaling that pushing the call to 18:00 PKT would be kinder to New York participants.',
    faqs: [
      { q: 'What is the best overlap window for Pakistan, UK, and US East Coast?', a: 'Between 18:00 and 20:00 PKT (6:00 PM – 8:00 PM in Pakistan), which corresponds to 13:00–15:00 in London and 08:00–10:00 AM in New York.' },
      { q: 'How do I enter evening hours into the calculator?', a: 'Enter the hour as a number from 0 to 23—for example, enter 18 for 6:00 PM or 21 for 9:00 PM.' },
      { q: 'Does London or New York shift by an hour in the summer?', a: 'Yes, during British Summer Time (BST) and Eastern Daylight Time (EDT), London is 4 hours behind PKT and New York is 9 hours behind PKT.' },
      { q: 'Why is Dubai so easy to coordinate with from Pakistan?', a: 'Dubai is only 1 hour behind Pakistan, so business hours overlap by nearly 90% every day.' }
    ],
    whoUses: 'Who uses this: IT project managers, SaaS sales teams, multinational executives, and academic webinar organizers.'
  },
  'dt-time-add': {
    intro: 'When a flight departs Karachi at 10:30 and has a total travel time of 3 hours and 45 minutes, or when you want to know when a 2-hour 30-minute UPS battery backup will expire, this calculator adds hours and minutes to any starting clock time.',
    howItWorks: 'The starting time (HH:MM) is converted into minutes past midnight. The added hours (multiplied by 60) and added minutes are summed with the start minutes, and the result is wrapped modulo 1,440 minutes (24 hours) back into HH:MM format. Formula: Target Time = ((Start H × 60 + Start M) + (Add H × 60 + Add M)) mod 1440.',
    workedExample: 'Starting at 10:30 and adding 3 hours and 45 minutes equals 630 + 225 = 855 minutes past midnight. Dividing 855 by 60 gives 14 hours with 15 minutes remainder, which is 14:15 (2:15 PM).',
    faqs: [
      { q: 'What happens if adding hours pushes the time past midnight?', a: 'The modulo-24 logic wraps the clock seamlessly into the next morning—for example, 22:30 plus 3 hours becomes 01:30.' },
      { q: 'Can I add more than 60 minutes in the minutes field?', a: 'Yes, if you enter 0 hours and 90 minutes, the calculator properly converts those 90 minutes into 1 hour and 30 minutes.' },
      { q: 'How do I read the 24-hour output in AM/PM?', a: 'Any hour from 00 to 11 is AM, 12 is noon (PM), and for 13 to 23 simply subtract 12 to get the PM hour (14:15 = 2:15 PM).' },
      { q: 'Is this useful for medication or cooking timers?', a: 'Yes, nurses use it to schedule 6-hour or 8-hour antibiotic doses and bakers use it to time dough proofing.' }
    ],
    whoUses: 'Who uses this: Airline passengers, nurses scheduling IV doses, kitchen chefs, and logistics coordinators.'
  },
  'dt-time-subtract': {
    intro: 'Working backward from a deadline—such as figuring out what time to leave home in Lahore to catch a flight 4 hours and 30 minutes before takeoff—requires subtracting hours and minutes across the 60-minute clock boundary. This calculator subtracts any duration from a starting clock time.',
    howItWorks: 'The starting clock time is converted into total minutes since midnight, and the subtracted hours and minutes are deducted. If the result drops below zero (crossing backward past midnight into the previous night), 1,440 minutes are added before formatting as HH:MM. Formula: Target Time = ((Start H × 60 + Start M) − (Sub H × 60 + Sub M) + 1440) mod 1440.',
    workedExample: 'If a wedding banquet starts at 18:00 (6:00 PM) and catering preparation must begin 4 hours and 30 minutes earlier, subtracting 4h 30m from 18:00 yields 13:30 (1:30 PM).',
    faqs: [
      { q: 'What if I subtract 5 hours from 02:00 AM?', a: 'The calculator wraps backward across midnight into the previous evening, outputting 21:00 (9:00 PM the night before).' },
      { q: 'Why do people make mistakes subtracting time in their head?', a: 'When subtracting 45 minutes from :15 past the hour, people often forget to borrow 60 minutes from the hour column.' },
      { q: 'Can I use this to plan airport arrival times?', a: 'Yes, enter your flight departure time and subtract 3 hours for international flights (plus your drive time to the airport).' },
      { q: 'What format should the starting time be in?', a: 'Enter the time as HH:MM in 24-hour notation, such as 08:15 or 18:00.' }
    ],
    whoUses: 'Who uses this: Travelers planning airport departures, event caterers, broadcast producers, and shift planners.'
  },
  'dt-event-countdown': {
    intro: 'Annual events like birthdays, wedding anniversaries, Quaid-e-Azam Day (December 25), or Pakistan Day (March 23) recur on the same month and day every year. By entering just the two-digit month and day (MM-DD), this calculator automatically determines the next upcoming occurrence and counts the exact days remaining.',
    howItWorks: 'The tool parses your MM-DD input and constructs a date in the current calendar year. If that date has already passed earlier this year, it increments the year by 1 and computes the ceiling difference in days from today. Formula: Days Remaining = ceil((Next Event Date − Current Date) / 86,400,000 ms).',
    workedExample: 'Entering 12-25 on November 17, 2026 checks December 25, 2026 and calculates that 38 days remain until the next occurrence on Fri Dec 25 2026.',
    faqs: [
      { q: 'Why do I only need to enter MM-DD instead of the full year?', a: 'Because birthdays and anniversaries repeat annually, the calculator automatically picks either this year or next year depending on today’s date.' },
      { q: 'What should I enter for Independence Day in Pakistan?', a: 'Enter 08-14 for August 14 to see how many days remain until the next Independence Day celebration.' },
      { q: 'Does it work if the event is tomorrow?', a: 'Yes, if the event is tomorrow it will show 1 day remaining.' },
      { q: 'How are leap-year birthdays (02-29) handled?', a: 'In standard non-leap years, JavaScript rolls 02-29 to March 1 so the annual day countdown remains continuous.' }
    ],
    whoUses: 'Who uses this: Families planning birthday parties, retail marketers preparing Independence Day sales, and HR teams tracking employee work anniversaries.'
  },
  'dt-quarter-year': {
    intro: 'Corporate financial reporting, FBR advance tax filings, and sales quotas are organized into four three-month calendar quarters (Q1 through Q4). This tool takes any date and identifies its exact calendar quarter and month name.',
    howItWorks: 'The calculator extracts the zero-indexed month (0 for January through 11 for December) from your entered date, divides by 3, takes the integer floor, and adds 1. Formula: Quarter = floor(Zero-Indexed Month / 3) + 1.',
    workedExample: 'Entering 2026-08-14 (August 14, 2026) identifies August as month index 7. Computing floor(7 / 3) + 1 yields Quarter Q3 (2026).',
    faqs: [
      { q: 'Which months belong to each calendar quarter?', a: 'Q1 is Jan–Mar, Q2 is Apr–Jun, Q3 is Jul–Sep, and Q4 is Oct–Dec.' },
      { q: 'How does Pakistan’s fiscal year differ from the calendar year?', a: 'Pakistan’s government and FBR fiscal year runs from July 1 to June 30, meaning calendar Q3 (Jul–Sep) is Fiscal Q1 in Pakistan.' },
      { q: 'When are quarterly corporate financial statements due on the PSX?', a: 'Listed companies on the Pakistan Stock Exchange report at the end of March, June, September, and December.' },
      { q: 'Can I check future or historical dates?', a: 'Yes, any valid YYYY-MM-DD date from any year works instantly.' }
    ],
    whoUses: 'Who uses this: Chartered accountants, FBR tax consultants, sales directors, and stock market investors.'
  },
  'dt-days-passed-year': {
    intro: 'Tracking what day of the year today is (also known as the ordinal day of the year, from Day 1 to Day 365) and what percentage of the year has already elapsed helps businesses benchmark annual revenue pacing and individuals review yearly goals.',
    howItWorks: 'The calculator finds January 1 of the entered date’s year, computes the elapsed days up to your entered date (adding 1 so January 1 is Day 1), and divides by 365 (or 366 in a leap year) to find the completion percentage. Formula: Day of Year = floor((Date − Jan 1) / 86,400,000) + 1; Percentage = (Day of Year / Total Days in Year) × 100.',
    workedExample: 'Entering 2026-07-01 (the start of Pakistan’s new fiscal year) shows that July 1 is Day 182 of 365, meaning 49.9% of the calendar year has passed and 183 days remain in 2026.',
    faqs: [
      { q: 'What day of the year is the exact midpoint of a non-leap year?', a: 'Day 183 (July 2) is the exact middle day of a 365-day year, with 182 days before it and 182 days after it.' },
      { q: 'Does the calculator adjust automatically for leap years?', a: 'Yes, if you enter a date in 2028, it divides by 366 total days and accounts for February 29.' },
      { q: 'Why is Day-of-Year used in manufacturing batch codes?', a: 'Food and pharmaceutical factories in Pakistan often print Julian date codes (like 26182 for Day 182 of 2026) on packaging to track production day.' },
      { q: 'How can I check if my annual sales target is on track?', a: 'If 49.9% of the year has passed, your cumulative sales should ideally be at least 50% of your annual target.' }
    ],
    whoUses: 'Who uses this: Quality assurance engineers reading Julian batch codes, sales managers, and productivity planners.'
  },
  'dt-retirement-countdown': {
    intro: 'In Pakistan, the standard superannuation age for federal and provincial government servants is 60 years, while private-sector professionals often target retirement between 55 and 65. This calculator estimates the exact years and approximate days remaining until you reach your chosen retirement age.',
    howItWorks: 'The tool subtracts your current age in years from your target retirement age and multiplies the remaining career years by 365 days. Formula: Years Left = Retirement Age − Current Age; Approximate Days = Years Left × 365.',
    workedExample: 'A 35-year-old civil servant planning for mandatory retirement at age 60 has 25 years remaining, which equals approximately 9,125 days of active service.',
    faqs: [
      { q: 'What is the official retirement age for government employees in Pakistan?', a: 'Under Civil Servants Act rules, the standard superannuation age is 60 years.' },
      { q: 'At what age can a Pakistani worker claim an EOBI old-age pension?', a: 'Insured workers Generally qualify for an EOBI old-age pension at age 60 for men and age 55 for women, subject to minimum contribution years.' },
      { q: 'Why is knowing the number of days left useful for financial planning?', a: 'Seeing your remaining career as a finite number of days encourages consistent monthly contributions to a Voluntary Pension System (VPS) or mutual fund.' },
      { q: 'What if I enter a retirement age lower than my current age?', a: 'The calculator alerts you that the retirement age must be greater than your current age.' }
    ],
    whoUses: 'Who uses this: Government employees, pension planners, insurance advisors, and mid-career professionals.'
  },
  'dt-hourly-to-annual': {
    intro: 'Many Pakistani freelancers on Upwork, Fiverr, and Toptal, as well as visiting university lecturers and part-time consultants, charge an hourly rate in PKR. This time-based salary converter translates your hourly wage and weekly billable hours into total annual, monthly, and weekly income.',
    howItWorks: 'The calculator multiplies your hourly rate by the number of hours worked per week to find weekly income, then multiplies by 52 weeks in a calendar year. Monthly income is derived by dividing annual earnings by 12. Formula: Annual Salary = Hourly Rate × Hours per Week × 52.',
    workedExample: 'A graphic designer billing PKR 750 per hour for 40 hours per week earns PKR 30,000 per week, which equals PKR 1,560,000 per year (or PKR 130,000 per month).',
    faqs: [
      { q: 'Why is monthly income divided by 12 instead of multiplying weekly pay by 4?', a: 'Most months have 4.33 weeks (52 weeks ÷ 12 months = 4.333), so multiplying weekly pay by 4 understates your true monthly earnings by 8.3%.' },
      { q: 'How do I account for unpaid vacation weeks as a freelancer?', a: 'If you take 4 weeks off per year, reduce your average "Hours per Week" input proportionally (for example, enter 37 hours instead of 40).' },
      { q: 'Does this include income tax deductions?', a: 'No, this calculates gross pre-tax earnings; remote IT exporters in Pakistan typically pay a reduced final withholding tax rate on foreign remittances.' },
      { q: 'Can visiting faculty use this to estimate semester pay?', a: 'Yes, enter your per-lecture hourly honorarium and weekly teaching hours to see annualized and monthly equivalents.' }
    ],
    whoUses: 'Who uses this: Remote freelancers, software contractors, visiting university faculty, and HR compensation analysts.'
  },
  'dt-century-calc': {
    intro: 'Students of Pakistan Studies, world history, and literature often confuse century numbers with year prefixes—for example, assuming the year 1947 was in the 19th century when it actually belongs to the 20th century. This calculator instantly identifies the exact century and millennium for any year.',
    howItWorks: 'Because the 1st century ran from Year 1 through Year 100, the calculator divides the entered year by 100 (for century) or 1,000 (for millennium) and rounds up to the nearest whole integer using the ceiling function. Formula: Century = ceil(Year / 100); Millennium = ceil(Year / 1000).',
    workedExample: 'Entering the year 2026 computes ceil(2026 / 100) = 21st Century and ceil(2026 / 1000) = 3rd Millennium.',
    faqs: [
      { q: 'Why is 2026 in the 21st century even though it starts with 20?', a: 'The 1st century covered years 1–100, the 20th century covered 1901–2000, and the 21st century covers 2001–2100.' },
      { q: 'Which century did Pakistan gain independence in (1947)?', a: 'ceil(1947 / 100) = 20, so 1947 falls in the 20th century and the 2nd millennium.' },
      { q: 'Does the year 2000 belong to the 20th or 21st century?', a: 'Strictly speaking, 2000 ÷ 100 = 20, so the year 2000 was the final year of the 20th century and the 2nd millennium.' },
      { q: 'Which century was the Mughal Emperor Akbar’s reign (1556–1605)?', a: 'It began in the 16th century (1556) and concluded in the early 17th century (1605).' }
    ],
    whoUses: 'Who uses this: History students, school teachers, competitive exam (CSS/PMS) candidates, and researchers.'
  },
  'dt-stopwatch-split': {
    intro: 'Whether you are running laps around a park track in Islamabad, timing delivery riders on a fixed route, or measuring assembly-line cycle times in a Sialkot sports goods factory, knowing your average split time per lap is essential for pacing.',
    howItWorks: 'The calculator divides the total elapsed duration (in minutes) by the total number of completed laps. The integer part gives whole minutes per lap, while the decimal remainder is multiplied by 60 to yield exact seconds. Formula: Average Lap Time = Total Duration (mins) / Number of Laps.',
    workedExample: 'An athlete completes 10 laps around a 400-meter track in a total duration of 45 minutes. Dividing 45 by 10 gives 4.5 minutes, which the calculator formats as 4 min 30 sec per lap.',
    faqs: [
      { q: 'Can I enter decimal minutes for total duration?', a: 'Yes, if your total time was 22 minutes and 30 seconds, enter 22.5 in the Total Duration field.' },
      { q: 'How can army/police physical test candidates use this?', a: 'Candidates preparing for the 1.6 km (4-lap) ISSB or police running test in 7.5 minutes can enter 7.5 minutes and 4 laps to see their target pace of 1 min 53 sec per lap.' },
      { q: 'Does this work for factory production units instead of track laps?', a: 'Absolutely—enter total shift minutes and number of units produced to find average cycle time per unit.' },
      { q: 'What happens if I enter 0 laps?', a: 'The calculator prevents division by zero and prompts you to enter a lap count greater than 0.' }
    ],
    whoUses: 'Who uses this: Track runners, ISSB/police physical test candidates, sports coaches, and industrial time-study engineers.'
  },
  'dt-dst-checker': {
    intro: 'Although Pakistan no longer observes Daylight Saving Time, Pakistani businesses trading with Europe and North America must track when Western clocks spring forward or fall back. This detector checks whether Daylight Saving Time (DST) is typically active during a given calendar month in the Northern Hemisphere.',
    howItWorks: 'In the Northern Hemisphere (UK, EU, USA, Canada), Daylight Saving Time runs approximately from March (Month 3) through October (Month 10). The calculator checks whether your selected month number (1 to 12) falls inside that window. Formula: DST Active if 3 ≤ Month ≤ 10.',
    workedExample: 'Entering Month 6 (June) returns "Likely Active (Spring / Summer DST)", reminding you that London is on BST (UTC+1) and New York is on EDT (UTC−4) during June.',
    faqs: [
      { q: 'Does Pakistan currently use Daylight Saving Time?', a: 'No, Pakistan last experimented with Daylight Saving Time in 2009 and has remained on standard UTC+5 ever since.' },
      { q: 'When do UK and European clocks change?', a: 'Clocks in the UK and EU spring forward on the last Sunday of March and fall back on the last Sunday of October.' },
      { q: 'When do US and Canadian clocks change?', a: 'In North America, DST begins on the second Sunday of March and ends on the first Sunday of November.' },
      { q: 'How does DST affect remote workers in Pakistan?', a: 'During summer (March–October), UK and US meeting times shift 1 hour earlier in Pakistan time if the client keeps the same local clock hour.' }
    ],
    whoUses: 'Who uses this: Remote IT teams, forex and stock traders tracking London/New York market opens, and international travelers.'
  },
  'dt-work-hours-year': {
    intro: 'Estimating the true number of billable or productive working hours in a full calendar year is vital for setting annual consulting retainers, factory machine utilization targets, and employee hourly costing. This calculator deducts Sundays and public/annual leaves from 365 days before multiplying by daily shift hours.',
    howItWorks: 'Starting from 365 days in a standard year, the formula subtracts 52 Sundays and your entered number of public holidays or paid leave days to find net working days, then multiplies by daily working hours. Formula: Annual Hours = (365 − 52 − Holidays/Leaves) × Hours per Day.',
    workedExample: 'For a standard Pakistani commercial employee working 8 hours per day with 15 public holidays and casual leaves per year, there are 365 − 52 − 15 = 298 working days, yielding 2,384 working hours per year.',
    faqs: [
      { q: 'How do I adjust the input if my company gives both Saturday and Sunday off?', a: 'Add 52 Saturdays to the "Public Holidays / Leaves per Year" input (for example, 52 Saturdays + 15 holidays = enter 67).' },
      { q: 'How many gazetted public holidays are there in Pakistan each year?', a: 'Pakistan typically observes around 14 to 16 gazetted public holidays annually (including Eid-ul-Fitr, Eid-ul-Azha, Ashura, August 14, and December 25).' },
      { q: 'How can I find my effective hourly wage from my annual salary?', a: 'Divide your total annual salary in PKR by the annual working hours calculated here.' },
      { q: 'What is the statutory weekly working hour limit under Pakistan Factories Act?', a: 'Standard adult working hours are capped at 48 hours per week (8 hours/day across 6 days) before overtime rates apply.' }
    ],
    whoUses: 'Who uses this: Cost accountants, HR managers, industrial engineers, and independent consultants.'
  },
  'dt-seconds-to-time': {
    intro: 'Video editors exporting footage, telecom engineers analyzing call-duration logs, and programmers profiling code execution often receive durations as raw seconds (such as 10,540 seconds). This converter transforms any large number of seconds into standard HH:MM:SS clock format.',
    howItWorks: 'The total seconds are divided by 3,600 to extract whole hours. The remainder after dividing by 3,600 is divided by 60 to extract whole minutes, and the final modulo-60 remainder gives the leftover seconds. Formula: Hours = floor(S / 3600); Minutes = floor((S % 3600) / 60); Seconds = S % 60.',
    workedExample: 'Converting 10,540 total seconds yields floor(10540 / 3600) = 2 hours, with 3,340 seconds left over. Dividing 3,340 by 60 gives 55 minutes and 40 seconds, formatted as 02:55:40.',
    faqs: [
      { q: 'How many seconds are in 1 hour and in 24 hours?', a: 'There are exactly 3,600 seconds in 1 hour (60 × 60) and 86,400 seconds in a 24-hour day.' },
      { q: 'Does it work if total seconds exceed 24 hours (86,400 seconds)?', a: 'Yes, the hours counter scales past 24 (for example, 90,000 seconds displays as 25:00:00).' },
      { q: 'Why do call centers in Pakistan track Talk Time in seconds?', a: 'Dialer software logs Average Handle Time (AHT) in seconds for precision, which managers then convert into minutes and seconds for KPI reports.' },
      { q: 'How are single-digit minutes or seconds formatted?', a: 'They are automatically padded with a leading zero (such as 02:05:09) to match standard digital timecode displays.' }
    ],
    whoUses: 'Who uses this: Video editors, call center QA analysts, software developers, and physics students.'
  },
  'dt-weeks-diff': {
    intro: 'Pregnancy trimesters, university semesters, construction schedules, and poultry/crop growth cycles in Pakistan are typically tracked in weeks and remaining days rather than months. Enter any total number of days to break it down into full weeks, leftover days, and total hours.',
    howItWorks: 'The calculator divides the total number of days by 7 and takes the integer floor to find completed weeks, while the modulo operator (%) captures the remaining 0 to 6 days. Formula: Weeks = floor(Days / 7); Remaining Days = Days % 7; Total Hours = Days × 24.',
    workedExample: 'A 90-day probation period for a new bank employee in Karachi equals floor(90 / 7) = 12 Weeks and 6 Days (totaling 2,160 hours).',
    faqs: [
      { q: 'Why do doctors measure pregnancy in weeks and days instead of months?', a: 'Calendar months vary between 28 and 31 days, whereas a week is always exactly 7 days, allowing precise tracking of a 40-week (280-day) gestation.' },
      { q: 'How many weeks and days are in a standard 365-day year?', a: '365 divided by 7 equals 52 Weeks and 1 Day (or 52 Weeks and 2 Days in a 366-day leap year).' },
      { q: 'How many weeks is a 180-day short-term Treasury Bill or TDR?', a: '180 days equals 25 Weeks and 5 Days.' },
      { q: 'Does the calculator also show total hours?', a: 'Yes, the secondary result multiplies your day count by 24 to display total elapsed hours.' }
    ],
    whoUses: 'Who uses this: Expectant parents, OB/GYN clinics, HR managers tracking 90-day probations, and agriculturalists.'
  },
  'dt-unix-epoch-convert': {
    intro: 'When debugging an API response, inspecting a JWT token expiration (`exp`), or reading a server log, you often encounter a raw 10-digit number like 1735689600. This converter translates Unix epoch seconds directly into a human-readable UTC calendar date and time.',
    howItWorks: 'Because JavaScript’s Date constructor expects milliseconds since January 1, 1970 UTC, the calculator multiplies your 10-digit Unix epoch second counter by 1,000 and formats the resulting date into a standard UTC string. Formula: Calendar Date = new Date(Epoch Seconds × 1000).toUTCString().',
    workedExample: 'Entering the Unix epoch timestamp 1735689600 multiplies by 1,000 to get 1,735,689,600,000 ms, which converts to "Wed, 01 Jan 2025 00:00:00 GMT".',
    faqs: [
      { q: 'How do I convert the UTC result into Pakistan Standard Time (PKT)?', a: 'Simply add 5 hours to the GMT/UTC time shown—for example, 00:00:00 GMT on Jan 1 is 05:00:00 AM PKT on Jan 1.' },
      { q: 'What if my timestamp has 13 digits instead of 10?', a: 'A 13-digit number is already in milliseconds; remove the last 3 digits (divide by 1,000) before entering it here.' },
      { q: 'Can I enter negative epoch numbers for dates before 1970?', a: 'Yes, negative seconds count backward prior to January 1, 1970 UTC.' },
      { q: 'Where are epoch timestamps commonly used?', a: 'They are used in JWT authentication tokens, Firebase/MongoDB metadata, blockchain block headers, and Linux cron logs.' }
    ],
    whoUses: 'Who uses this: Full-stack developers, DevOps engineers, QA testers inspecting JWT tokens, and data scientists.'
  },
  'dt-zodiac-age': {
    intro: 'Want a quick way to convert a round number of years—such as turning 25, 40, or 50 years old—into exact days, approximate months, and total hours lived without looking up a calendar date? This calculator converts any age in years into cumulative days, months, and hours.',
    howItWorks: 'To account for one leap day every four years, the calculator multiplies your entered age in years by the astronomical Julian year length of 365.25 days, then multiplies by 24 for hours and 12 for months. Formula: Total Days = round(Years × 365.25); Total Months = Years × 12; Total Hours = Total Days × 24.',
    workedExample: 'Entering an age of 25 years computes 25 × 365.25 = 9,131 Days (~300 Months) and approximately 219,144 total hours alive.',
    faqs: [
      { q: 'Why does the formula multiply by 365.25 instead of 365?', a: 'Every four years includes one leap year of 366 days, making the average year length 365.25 days.' },
      { q: 'How many days old is someone on their 18th birthday (CNIC eligibility age)?', a: 'At age 18, a person has lived approximately 6,575 days (or 157,800 hours).' },
      { q: 'Can I enter decimal years like 2.5 years?', a: 'Yes, entering 2.5 years accurately calculates 913 days (~30 months), which is useful for toddler or equipment age tracking.' },
      { q: 'How is this different from the main Age Calculator?', a: 'The main Age Calculator takes a specific YYYY-MM-DD birth date, whereas this tool converts a numeric year count directly.' }
    ],
    whoUses: 'Who uses this: Students, birthday card writers, educators, and general users curious about life milestones.'
  },

  // ==========================================
  // ELECTRICAL & ELECTRONICS (29 Calculators)
  // ==========================================
  'elec-ohms-law': {
    intro: 'Ohm’s Law is the foundational equation of electrical engineering, linking voltage, current, resistance, and power in any DC or resistive AC circuit. Whether you are testing a 230V household heating element in Pakistan or designing a 12V automotive circuit, this tool calculates current draw in Amps and power dissipation in Watts.',
    howItWorks: 'Given Voltage (V) in Volts and Resistance (R) in Ohms (Ω), the calculator divides voltage by resistance to find electrical current (I) in Amperes, then multiplies voltage by current to determine power (P) in Watts. Formula: Current (I) = V / R; Power (P) = V × I.',
    workedExample: 'A domestic electric iron connected to Pakistan’s standard 230V single-phase supply has a heating coil resistance of 46 Ω. Dividing 230V by 46 Ω gives a current draw of 5.00 Amps and a power consumption of 1,150.0 Watts.',
    faqs: [
      { q: 'What is the standard single-phase supply voltage in Pakistan?', a: 'WAPDA, K-Electric, and all regional DISCOs supply 230V AC at 50 Hz (often fluctuating between 210V and 240V).' },
      { q: 'What happens to current if resistance is cut in half at constant voltage?', a: 'According to I = V / R, halving the resistance doubles the current and quadruples the heat power!' },
      { q: 'Can I use Ohm’s Law directly on inductive loads like water pump motors?', a: 'For AC motors, impedance (Z) and power factor must be considered rather than pure DC resistance alone.' },
      { q: 'Why does the calculator disallow zero resistance?', a: 'Zero resistance represents a dead short circuit where current theoretically approaches infinity, tripping the circuit breaker immediately.' }
    ],
    whoUses: 'Who uses this: Electrical engineering students, DAE diploma technicians, electronics hobbyists, and appliance repairmen.',
    medicalDisclaimer: 'Safety Notice: Please consult a qualified electrician for real wiring work, panel modifications, or high-voltage troubleshooting.'
  },
  'elec-bill-calc': {
    intro: 'Rising electricity tariffs across LESCO, K-Electric, IESCO, FESCO, and MEPCO make it essential for Pakistani households and shopkeepers to estimate their monthly electricity bill before it arrives. By entering your meter units consumed (kWh) and your applicable per-unit tariff rate in PKR, you can calculate your energy charge instantly.',
    howItWorks: 'One commercial "unit" of electricity on a WAPDA/DISCO meter equals 1 kilowatt-hour (kWh). The calculator multiplies total kWh units consumed during the billing cycle by your entered PKR rate per unit. Formula: Total Bill (PKR) = Units Consumed (kWh) × Rate per Unit (PKR/kWh).',
    workedExample: 'If a household in Lahore consumes 350 kWh units in a month and their effective slab rate (including FPA and surcharges) is PKR 35 per unit, the calculated electricity bill is PKR 12,250.',
    faqs: [
      { q: 'How do I find my units consumed from my digital electricity meter?', a: 'Subtract last month’s meter reading (printed on your previous bill) from your current kWh reading on the meter display.' },
      { q: 'Why does the per-unit rate jump when consumption exceeds 200 or 300 units in Pakistan?', a: 'NEPRA and DISCOs use progressive slab tariffs where crossing 200 units (protected vs unprotected) or 300 units moves your billing into a higher PKR/kWh tier.' },
      { q: 'Should I include taxes and Fuel Price Adjustment (FPA) in the rate per unit?', a: 'For a pure energy charge, enter your base tariff; to estimate the final payable bill including GST and FPA, enter your effective all-in rate (e.g., PKR 45–60/unit).' },
      { q: 'What is peak vs off-peak billing on a 3-phase Time of Use (ToU) meter?', a: 'Residential ToU meters charge a higher rate during evening peak hours (typically 4 hours in the evening) and a lower rate during the remaining 20 off-peak hours.' }
    ],
    whoUses: 'Who uses this: Homeowners, tenants splitting sub-meter bills, commercial shopkeepers, and solar net-metering users.',
    medicalDisclaimer: 'Safety Notice: Always consult a qualified electrician for real wiring work or sub-meter installation.'
  },
  'elec-appliance-cost': {
    intro: 'Wondering how much your pedestal fan, iron, deep freezer, or gaming PC actually adds to your monthly WAPDA or K-Electric bill? This calculator takes any appliance’s wattage rating, daily usage hours, and per-unit tariff to reveal both its daily and 30-day running cost in PKR.',
    howItWorks: 'The calculator multiplies appliance power in Watts by hours used per day and divides by 1,000 to convert Watt-hours into daily kilowatt-hours (units). It then multiplies daily units by your PKR tariff rate and by 30 days. Formula: Monthly Cost = [(Watts × Hours/Day) / 1000] × Rate × 30.',
    workedExample: 'Running a 1,500-Watt electric room heater or iron for 6 hours a day consumes 9.00 kWh per day. At PKR 35 per unit, that costs PKR 315 per day or PKR 9,450 per month.',
    faqs: [
      { q: 'Where can I find the Watt rating of my home appliance?', a: 'Check the silver manufacturer nameplate sticker on the back or bottom of the appliance, or multiply its rated Volts × Amps.' },
      { q: 'How many units does a 100-Watt ceiling fan consume in 10 hours?', a: '100W × 10 hours = 1,000 Watt-hours = exactly 1 kWh unit per day (or 30 units a month).' },
      { q: 'Why are AC/DC inverter ceiling fans popular in Pakistan?', a: 'An AC/DC BLDC fan consumes only 30–35 Watts instead of 90–100 Watts, cutting fan electricity bills by up to 65%.' },
      { q: 'Do refrigerators run at full wattage 24 hours a day?', a: 'No, a refrigerator compressor cycles on and off with its thermostat, so enter roughly 8 to 10 effective compressor hours per day.' }
    ],
    whoUses: 'Who uses this: Budget-conscious families, hostel wardens, office administrators, and energy auditors.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work, heavy-load sockets, or circuit breaker sizing.'
  },
  'elec-resistor-calc': {
    intro: 'When building or repairing electronic circuit boards, you often need a specific resistance value that isn’t in your parts bin, or you need to analyze a network of resistors. This calculator computes the exact equivalent resistance ($R_{eq}$) of two resistors connected either in series or in parallel.',
    howItWorks: 'In a series connection, current flows through both resistors sequentially so their resistances add directly. In a parallel connection, current splits across two paths so the reciprocal product-over-sum formula is used. Formula: Series $R_{eq} = R_1 + R_2$; Parallel $R_{eq} = (R_1 \\times R_2) / (R_1 + R_2)$.',
    workedExample: 'Connecting a 100 Ω resistor and a 150 Ω resistor in series yields 250.00 Ω. Switching the connection type to parallel yields $(100 \\times 150) / (100 + 150) = 60.00\\,\\Omega$.',
    faqs: [
      { q: 'Why is parallel equivalent resistance always smaller than the smallest individual resistor?', a: 'Adding a parallel branch creates an additional pathway for current to flow, reducing overall opposition to current.' },
      { q: 'What happens if I connect two identical 100 Ω resistors in parallel?', a: 'Connecting two equal resistors in parallel halves the resistance to exactly 50 Ω while doubling the total power-handling wattage.' },
      { q: 'How can I calculate three or more resistors using this tool?', a: 'Calculate the equivalent resistance of the first two resistors, then enter that result as Resistor 1 alongside your third resistor as Resistor 2.' },
      { q: 'Does connecting resistors in series increase their wattage rating?', a: 'Yes, power dissipation divides across series resistors proportional to their resistance values.' }
    ],
    whoUses: 'Who uses this: Electronics engineering students, PCB repair technicians, Arduino/ESP32 makers, and lab instructors.',
    medicalDisclaimer: 'Safety Notice: Please consult a qualified electrician for real wiring work and mains-voltage electronics.'
  },
  'elec-battery-backup': {
    intro: 'With load-shedding and power outages across Pakistan, every home and office relies on a 12V or 24V UPS or solar hybrid inverter paired with tubular or lead-acid batteries (such as Osaka, Phoenix, Exide, or Daewoo). This calculator estimates how many hours and minutes your battery will power a given Watt load.',
    howItWorks: 'Total stored energy in Watt-hours is found by multiplying Battery Capacity (Ah) by Battery Voltage (V). To account for inverter conversion loss and safe discharge depth, a 0.80 efficiency factor is applied before dividing by the connected load in Watts. Formula: Backup Hours = (Battery Ah × Voltage × 0.8) / Load Watts.',
    workedExample: 'A single 200 Ah, 12V tall tubular battery powering 300 Watts of load (roughly three ceiling fans and four LED bulbs) provides $(200 \\times 12 \\times 0.8) / 300 = 6.40$ hours, or 6 hours and 24 minutes of backup time.',
    faqs: [
      { q: 'Why does the formula multiply by 0.8 instead of using 100% of battery capacity?', a: 'Inverters lose about 10–15% energy as heat when converting 12V DC to 230V AC, and lead-acid batteries cannot deliver full rated Ah under continuous load.' },
      { q: 'What is the battery voltage of a double-battery UPS or 2.5 kW solar inverter?', a: 'Two 12V batteries wired in series operate at 24 Volts; four 12V batteries in series (common on 5 kW inverters) operate at 48 Volts.' },
      { q: 'Why does my old UPS battery give less backup than calculated?', a: 'Lead-acid batteries lose plate capacity over 2 to 3 years due to sulfation, reducing their effective Ah rating.' },
      { q: 'How do lithium (LiFePO4) batteries compare to tubular lead-acid batteries?', a: 'LiFePO4 batteries (typically 48V 100Ah) have higher round-trip efficiency (~95%) and last 4,000+ cycles compared to 800–1,200 cycles for tubular batteries.' }
    ],
    whoUses: 'Who uses this: Pakistani homeowners buying UPS batteries, solar installers, shopkeepers, and clinic operators.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work; DC battery terminals can produce dangerous high-current sparks if shorted.'
  },
  'elec-solar-estimator': {
    intro: 'Installing a rooftop solar system in Karachi, Lahore, Islamabad, or Multan is the smartest way to eliminate high electricity bills. By entering how many kWh units you consume per day and your city’s average peak sun hours, this estimator calculates the required solar PV array capacity in kilowatts (kW).',
    howItWorks: 'The calculator divides your daily energy requirement (kWh) by average daily peak sun hours, then divides by a 0.80 derating factor to account for panel temperature heat loss, dust on panels, and inverter inefficiency. Formula: System Size (kW) = (Daily Units / Peak Sun Hours) / 0.8.',
    workedExample: 'A household using 15 kWh units per day (450 units/month) in a city with 5 peak sun hours per day requires $(15 / 5) / 0.8 = 3.75\\text{ kW}$ of solar panels (typically seven 550W–580W N-Type bifacial panels).',
    faqs: [
      { q: 'How many Peak Sun Hours does Pakistan get per day?', a: 'Most plains of Punjab, Sindh, and Balochistan average 5.0 to 5.5 peak sun hours per day year-round (around 4 hours in winter and 6+ hours in summer).' },
      { q: 'Why is there a 20% system loss factor (0.8)?', a: 'High summer roof temperatures in Pakistan (40°C–48°C), airborne dust, cable drop, and inverter conversion reduce real-world output by roughly 18–20%.' },
      { q: 'How many 585W solar panels are needed for a 6 kW system?', a: '6,000 Watts divided by 585 Watts equals 10.25, so installers typically mount 10 or 11 panels.' },
      { q: 'What is the minimum system size for Three-Phase Net Metering in Pakistan?', a: 'Three-phase net metering (green meter) is typically installed on 5 kW, 10 kW, 15 kW, and larger three-phase inverters.' }
    ],
    whoUses: 'Who uses this: Homeowners planning solar installations, AEDB-certified solar EPC engineers, and commercial property owners.',
    medicalDisclaimer: 'Safety Notice: Always consult a qualified electrician or certified solar installer for real DC/AC wiring work and earthing.'
  },
  'elec-led-resistor': {
    intro: 'Connecting a light-emitting diode (LED) directly to a 5V, 9V, or 12V DC battery without a current-limiting resistor will burn out the LED instantaneously. This calculator finds the exact series resistance in Ohms and resistor power rating in Watts needed to run an LED safely.',
    howItWorks: 'The resistor must drop the excess voltage between the DC supply ($V_s$) and the LED’s forward voltage ($V_f$) at the desired current ($I$ in Amps, converted from mA by dividing by 1,000). Power dissipated in the resistor is voltage drop times current. Formula: $R = (V_{source} - V_{LED}) / (I_{mA} / 1000)$; $P = (V_{source} - V_{LED}) \\times I$.',
    workedExample: 'Running a standard red indicator LED ($V_f = 2.2\\text{V}$, current = $20\\text{ mA}$) from a 12V car or UPS battery requires $(12 - 2.2) / 0.02 = 490\\,\\Omega$, with a resistor power dissipation of $0.20\\text{ W}$ (making a standard 1/2-Watt 510 Ω resistor ideal).',
    faqs: [
      { q: 'What is typical Forward Voltage (Vf) for different LED colors?', a: 'Red, amber, and yellow LEDs typically drop 1.8V–2.2V, while blue, green, and white LEDs drop 3.0V–3.4V.' },
      { q: 'What current should I use for a standard 5mm indicator LED?', a: '15 mA to 20 mA is standard for full brightness; 5 mA to 10 mA is plenty for low-power board indicators.' },
      { q: 'What if the exact calculated Ohm value is not a standard resistor size?', a: 'Always round up to the next standard E12/E24 resistor value (for example, use 510 Ω or 560 Ω instead of 490 Ω).' },
      { q: 'Why does the resistor wattage rating matter?', a: 'If the resistor dissipates 0.20W and you use a tiny 1/8W (0.125W) resistor, it will overheat and char; choose a resistor rated at least 2× the calculated power.' }
    ],
    whoUses: 'Who uses this: Electronics students, auto-electricians wiring 12V LED indicators, sign makers, and hobbyists.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work.'
  },
  'elec-watts-to-amps': {
    intro: 'When choosing the right circuit breaker (MCB), plug socket, or extension cord for a heavy appliance like a microwave, geyser, or air conditioner, you need to know how many Amps it draws. This calculator converts electrical power in Watts to current in Amps at any voltage.',
    howItWorks: 'Using the power law $P = V \\times I$, the calculator divides active power in Watts by supply voltage in Volts to determine current flow in Amperes. Formula: Current (Amps) = Power (Watts) / Voltage (Volts).',
    workedExample: 'A 2,000-Watt electric kettle or heater plugged into a standard 230V Pakistani wall socket draws $2000 / 230 = 8.70\\text{ Amps}$, meaning a standard 13A or 15A power plug is required rather than a light 5A two-pin socket.',
    faqs: [
      { q: 'How many Amps does a 1.5-ton inverter AC draw at 230V?', a: 'At peak cooling (~1,800 Watts), it draws roughly 7.8 Amps at 230V, ramping down to 2–4 Amps once the room cools.' },
      { q: 'What size MCB breaker should I use for an 8.7 Amp load?', a: 'Circuit breakers are typically sized at 125% of continuous load—so a 16A MCB is standard for power socket radials.' },
      { q: 'Why does current draw increase on a 12V DC system compared to 230V AC?', a: 'Because voltage is nearly 20 times lower on 12V DC, drawing 1,200 Watts from a 12V UPS battery requires a massive 100 Amps on the battery cables!' },
      { q: 'Does power factor affect AC Amps?', a: 'For purely resistive loads (heaters, irons, kettles) PF = 1.0 so W/V is exact; for motors, actual Amps are slightly higher (Watts / (Volts × PF)).' }
    ],
    whoUses: 'Who uses this: Domestic electricians selecting MCB breakers, solar users, homeowners, and site technicians.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work and distribution board breaker selection.'
  },
  'elec-kwh-cost': {
    intro: 'Whether you are billing a tenant for a dedicated sub-meter, calculating EV or hybrid charging costs, or auditing factory machine energy consumption, this calculator multiplies exact kilowatt-hours (kWh) consumed by your tariff rate per kWh in PKR.',
    howItWorks: 'The tool multiplies the total electrical energy in kWh by the unit tariff rate in PKR/kWh. Formula: Total Cost (PKR) = Energy Consumed (kWh) × Tariff Rate (PKR / kWh).',
    workedExample: 'If a ground-floor tenant’s sub-meter records 250 kWh in a month at an agreed tariff rate of PKR 32 per kWh, the total energy cost is PKR 8,000.',
    faqs: [
      { q: 'Is 1 kWh the same thing as 1 Unit on a WAPDA bill?', a: 'Yes, 1 Board of Trade (BoT) "Unit" on every electricity meter in Pakistan is defined as exactly 1 kilowatt-hour (1,000 Watt-hours).' },
      { q: 'How can I check if a sub-meter is accurate?', a: 'Turn off all other loads, run a known 1,000W appliance (like an iron or heater) continuously for 1 hour, and verify that the sub-meter advances by 1.0 kWh.' },
      { q: 'What rate per kWh do commercial plazas charge tenants in Pakistan?', a: 'Commercial tariffs (A-2) and backup generator rates are higher than residential tariffs, often ranging from PKR 55 to PKR 85+ per unit.' },
      { q: 'Can I use this to value exported solar net-metering units?', a: 'Yes, enter your exported off-peak units and your DISCO’s National Average Power Purchase Price (NAPPP) buyback rate.' }
    ],
    whoUses: 'Who uses this: Landlords, plaza building managers, solar net-metering owners, and industrial cost accountants.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work and sub-meter connections.'
  },
  'elec-rectifier-v': {
    intro: 'When designing a linear DC power supply or battery charger using a step-down transformer, a 4-diode full-wave bridge rectifier, and a smoothing capacitor, the unloaded DC voltage is significantly higher than the transformer’s AC RMS rating. This calculator finds both the raw peak voltage and the post-rectifier DC voltage.',
    howItWorks: 'An AC transformer’s rated voltage (e.g., 12V AC) is its Root Mean Square (RMS) value. Multiplying RMS voltage by $\\sqrt{2}$ (1.4142) gives the sinusoidal peak voltage ($V_{peak}$). Subtracting 1.4V accounts for the forward voltage drop across two silicon bridge rectifier diodes (0.7V each). Formula: $V_{peak} = V_{rms} \\times \\sqrt{2}$; $V_{DC} \\approx V_{peak} - 1.4\\text{V}$.',
    workedExample: 'A 12V AC RMS transformer secondary fed into a full-wave bridge rectifier with a filter capacitor produces a peak voltage of $12 \\times 1.414 = 16.97\\text{V}$, and an unloaded smoothed DC output of approximately $15.57\\text{V}$ after the 1.4V diode drop.',
    faqs: [
      { q: 'Why does my 12V transformer read nearly 16V DC on a multimeter after the capacitor?', a: 'The filter capacitor charges up to the peak of the AC sine wave ($12 \\times 1.414 = 16.97\\text{V}$) minus the diode drop, not the 12V RMS average!' },
      { q: 'Why is 1.4V subtracted for the rectifier drop?', a: 'In a 4-diode bridge rectifier, current flows through two silicon diodes in series during each half-cycle ($2 \\times 0.7\\text{V} = 1.4\\text{V}$).' },
      { q: 'Is a 12V AC transformer suitable for an LM7812 12V voltage regulator?', a: 'Yes, an LM7812 requires at least 14.5V DC input (2.5V dropout headroom), and a rectified 12V AC transformer supplies ~15.5V DC.' },
      { q: 'What voltage rating should I pick for the smoothing electrolytic capacitor?', a: 'Always choose a capacitor voltage rating at least 50% above $V_{peak}$—for example, use a 25V or 35V capacitor for a 12V AC transformer.' }
    ],
    whoUses: 'Who uses this: Electronics repair technicians, UPS/stabilizer builders, university lab students, and power supply designers.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work on mains-connected transformer primaries.'
  },
  'elec-transformer-turns': {
    intro: 'Step-down and step-up transformers—used everywhere from WAPDA 11kV/400V pole-mounted distribution transformers to local servo voltage stabilizers and UPS coils in Pakistan—operate on the magnetic turns ratio between primary and secondary windings. This calculator computes secondary voltage and turns ratio.',
    howItWorks: 'In an ideal transformer, voltage is directly proportional to the number of wire turns on each coil winding. Dividing Primary Turns ($N_p$) by Secondary Turns ($N_s$) gives the turns ratio, while multiplying Primary Voltage ($V_p$) by $(N_s / N_p)$ yields Secondary Voltage ($V_s$). Formula: $V_s = V_p \\times (N_s / N_p)$; Turns Ratio = $N_p / N_s$.',
    workedExample: 'A transformer with 500 primary turns ($N_p = 500$) and 50 secondary turns ($N_s = 50$) connected to a 230V AC primary supply has a 10.0 : 1 step-down ratio and produces a secondary output of $230 \\times (50 / 500) = 23.00\\text{ Volts}$.',
    faqs: [
      { q: 'What is the difference between a step-down and a step-up transformer?', a: 'If Secondary Turns ($N_s$) are fewer than Primary Turns ($N_p$), voltage steps down; if $N_s$ is greater than $N_p$, voltage steps up.' },
      { q: 'How does the turns ratio affect current in the secondary winding?', a: 'Current is inversely proportional to the turns ratio—a 10:1 voltage step-down transformer multiplies available secondary current by up to 10×.' },
      { q: 'Why do local voltage stabilizers in Pakistan use multi-tap transformers?', a: 'By switching relays across different primary turn taps as WAPDA voltage drops to 150V or rises to 250V, the stabilizer keeps secondary output near 220V.' },
      { q: 'Does this formula work for DC voltage?', a: 'No, transformers require alternating current (AC) or pulsed switching waveforms to create a changing magnetic flux in the core.' }
    ],
    whoUses: 'Who uses this: Coil winders, stabilizer/UPS manufacturers, electrical engineering students, and maintenance technicians.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work; transformer terminals carry lethal voltages.'
  },
  'elec-capacitive-reactance': {
    intro: 'Unlike a resistor that opposes current equally at all frequencies, a capacitor’s opposition to alternating current—called Capacitive Reactance ($X_c$)—decreases as AC frequency or capacitance increases. This tool calculates $X_c$ in Ohms for fan capacitors, motor run capacitors, and audio crossover filters.',
    howItWorks: 'The calculator converts microfarads ($\\mu\\text{F}$) into Farads by multiplying by $10^{-6}$, then applies the standard AC reactance formula using frequency $f$ in Hertz. Formula: $X_c = 1 / (2 \\times \\pi \\times f \\times C)$.',
    workedExample: 'A $10\\,\\mu\\text{F}$ motor-run capacitor operating on Pakistan’s 50 Hz AC grid exhibits a capacitive reactance of $1 / (2 \\times \\pi \\times 50 \\times 0.000010) = 318.31\\,\\Omega$.',
    faqs: [
      { q: 'Why does a ceiling fan in Pakistan slow down when its 2.5 µF or 3.5 µF capacitor weakens?', a: 'As capacitance ($C$) drops with age, capacitive reactance ($X_c$) increases, choking the current and phase shift needed by the auxiliary motor winding.' },
      { q: 'What is the capacitive reactance of a capacitor to steady DC (0 Hz)?', a: 'At $f = 0\\text{ Hz}$, $X_c$ becomes infinite, which is why a capacitor blocks steady DC while passing AC signals.' },
      { q: 'How are capacitive dropper power supplies used in cheap LED bulbs?', a: 'A small polyester capacitor (e.g., 1 µF at 50 Hz has $X_c \\approx 3,183\\,\\Omega$) limits 230V AC current without generating heat like a resistor.' },
      { q: 'What is the grid frequency in Pakistan?', a: 'Pakistan’s national grid operates at a nominal frequency of 50 Hz.' }
    ],
    whoUses: 'Who uses this: AC motor technicians, electronics engineers, audio system designers, and physics students.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work; discharge high-voltage capacitors safely before handling.'
  },
  'elec-inductive-reactance': {
    intro: 'Coils, chokes, transformer windings, and motor inductors oppose changes in alternating current through Inductive Reactance ($X_L$). Unlike capacitors, an inductor’s reactance increases proportionally with frequency. This calculator computes $X_L$ in Ohms from inductance in millihenries (mH) and frequency in Hertz (Hz).',
    howItWorks: 'Inductance in millihenries (mH) is converted to Henries (H) by multiplying by $10^{-3}$, then multiplied by $2\\pi$ and the AC frequency $f$ in Hertz. Formula: $X_L = 2 \\times \\pi \\times f \\times L$.',
    workedExample: 'An inductor coil with an inductance of $50\\text{ mH}$ ($0.05\\text{ H}$) connected to a 50 Hz AC circuit presents an inductive reactance of $2 \\times \\pi \\times 50 \\times 0.05 = 15.71\\,\\Omega$.',
    faqs: [
      { q: 'Why do inductors pass DC easily but block high-frequency AC?', a: 'Because $X_L = 2\\pi f L$, at 0 Hz (DC) inductive reactance is 0 Ω, whereas at high frequencies (kHz or MHz) $X_L$ becomes thousands of Ohms.' },
      { q: 'Where are inductive chokes used in everyday electrical equipment?', a: 'They are used in traditional fluorescent tube-light ballasts, solar inverter MPPT buck/boost stages, and EMI power line filters.' },
      { q: 'How does inductive reactance affect phase angle?', a: 'In an inductive circuit, current lags behind voltage by up to 90 degrees, which lowers the power factor of industrial plants.' },
      { q: 'How do I calculate total impedance (Z) if the coil also has wire resistance (R)?', a: 'Total impedance is the vector sum: $Z = \\sqrt{R^2 + X_L^2}$.' }
    ],
    whoUses: 'Who uses this: Power electronics engineers, filter designers, electrical diploma students, and industrial electricians.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work.'
  },
  'elec-rc-time-constant': {
    intro: 'Resistor-Capacitor (RC) timing networks control delay circuits, microcontroller reset pins, contact debouncing, and power supply smoothing filters. This calculator determines the RC time constant ($\\tau$, tau) in seconds from resistance in Ohms and capacitance in microfarads.',
    howItWorks: 'Capacitance in microfarads ($\\mu\\text{F}$) is converted to Farads ($\\times 10^{-6}$) and multiplied by Resistance in Ohms ($\\Omega$). One time constant ($\\tau$) represents the time required for the capacitor voltage to charge to 63.2% of the supply voltage (or discharge to 36.8%). Formula: $\\tau = R \\times C$.',
    workedExample: 'Pairing a $10,000\\,\\Omega$ ($10\\text{ k}\\Omega$) resistor with a $100\\,\\mu\\text{F}$ capacitor produces a time constant of $10,000 \\times 0.0001 = 1.000\\text{ Second (}\\tau\\text{)}$.',
    faqs: [
      { q: 'How many time constants does it take for a capacitor to become fully charged?', a: 'A capacitor is considered fully charged (over 99.3% of supply voltage) after 5 time constants ($5\\tau$)—so 5.0 seconds in the worked example.' },
      { q: 'How is the RC time constant related to filter cutoff frequency?', a: 'The −3 dB cutoff frequency of a passive RC low-pass or high-pass filter is $f_c = 1 / (2\\pi\\tau)$.' },
      { q: 'Why are RC delay circuits used in Pakistani refrigerator and AC voltage protectors?', a: 'An RC timer creates a 3-minute delay before reconnecting the compressor after a power blink, allowing refrigerant pressure to equalize.' },
      { q: 'Can I enter kilohms by typing zeros?', a: 'Yes, for $47\\text{ k}\\Omega$ simply enter 47000 in the Resistance field.' }
    ],
    whoUses: 'Who uses this: Embedded systems engineers, appliance timer designers, electronics students, and automation technicians.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work.'
  },
  'elec-voltage-drop': {
    intro: 'Running long copper cables from a main distribution board to a submersible water bore pump, outhouse, or rooftop solar inverter causes voltage loss along the wire’s internal resistance. Excessive voltage drop makes motors run hot and inverters trip. This calculator estimates round-trip voltage drop across 10, 12, or 14 AWG copper wire.',
    howItWorks: 'Current flows out along the live wire and returns along the neutral/negative wire, so total conductor path length is $2 \\times \\text{One-Way Length}$. The calculator multiplies round-trip length in meters by current in Amps and the wire gauge’s resistance per kilometer ($3.3\\,\\Omega/\\text{km}$ for 10 AWG, $5.2\\,\\Omega/\\text{km}$ for 12 AWG, $8.3\\,\\Omega/\\text{km}$ for 14 AWG). Formula: $\\text{Drop (V)} = (2 \\times L \\times I \\times R_{\\text{per km}}) / 1000$.',
    workedExample: 'Running 15 Amps across a 30-meter one-way cable run using 12 AWG copper wire results in a drop of $(2 \\times 30 \\times 15 \\times 5.2) / 1000 = 4.68\\text{ Volts}$ (or 2.0% of a 230V supply).',
    faqs: [
      { q: 'What is the maximum acceptable voltage drop for residential wiring?', a: 'Electrical standards recommend keeping voltage drop under 3% for lighting/branch circuits (about 6.9V on a 230V system) and under 5% overall.' },
      { q: 'What are the Pakistani Imperial cable equivalents (7/0.029, 7/0.036, 7/0.044) to AWG?', a: '3/0.029 is roughly 14 AWG (~2.0 mm²), 7/0.029 is roughly 12 AWG (~3.0 mm²), and 7/0.036 is roughly 10 AWG (~4.5 mm²).' },
      { q: 'Why is voltage drop much more critical on 12V or 24V DC solar/battery wires?', a: 'Losing 4.68V on a 230V AC line is only a 2% loss, but losing 4.68V on a 12V DC battery line is a catastrophic 39% voltage drop!' },
      { q: 'How do I reduce voltage drop on a long submersible pump run?', a: 'Step up to a thicker copper wire gauge (lower AWG number, such as 10 AWG instead of 14 AWG) to reduce cable resistance.' }
    ],
    whoUses: 'Who uses this: Building electricians, solar PV installers, tube-well pump contractors, and civil site engineers.',
    medicalDisclaimer: 'Safety Notice: Always consult a qualified electrician for real wiring work and cable sizing compliance.'
  },
  'elec-motor-hp': {
    intro: 'In Pakistan, domestic water pumps ("donkey pumps" and centrifugal mono-blocks), wheat flour chakkis, air compressors, and industrial lathe machines are rated in Horsepower (HP), whereas generators, solar inverters, and electricity meters are rated in Watts and kilowatts (kW). This converter bridges the two units instantly.',
    howItWorks: 'One mechanical/electrical Imperial Horsepower is standardized as 745.7 Watts (approx. 0.746 kW). The calculator multiplies your entered Horsepower rating by 745.7 to output Watts and kW. Formula: Watts = Horsepower (HP) × 745.7.',
    workedExample: 'A 2 HP domestic borehole water pump or industrial motor equals $2 \\times 745.7 = 1,491\\text{ Watts}$ ($1.49\\text{ kW}$) of continuous mechanical power.',
    faqs: [
      { q: 'Does a 1 HP water pump consume exactly 746 Watts from the wall socket?', a: '746W is the shaft output power; because small single-phase motors are 70%–80% efficient, a 1 HP pump typically draws around 950W–1,050W of electrical input.' },
      { q: 'Why does my 1 HP water pump trip a 2,000W UPS when starting?', a: 'Induction motors draw 3 to 5 times their running wattage (inrush starting surge of 3,000W–4,000W) for a split second when spinning up from rest.' },
      { q: 'How many Horsepower is a 15 kW solar tube-well motor?', a: '15 kW divided by 0.7457 equals approximately 20 HP.' },
      { q: 'Can I enter fractional horsepower like 0.5 HP for a small water motor?', a: 'Yes, entering 0.5 HP calculates 373 Watts (0.37 kW).' }
    ],
    whoUses: 'Who uses this: Agricultural tube-well farmers, factory maintenance managers, plumber-electricians, and generator buyers.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work, motor starters, and thermal overload relays.'
  },
  'elec-three-phase': {
    intro: 'Commercial plazas, cold storages, textile mills, and large residential homes in Pakistan use 400V three-phase AC connections. Calculating true active power in a balanced three-phase system requires incorporating the $\\sqrt{3}$ phase factor and the load’s Power Factor (PF).',
    howItWorks: 'The calculator multiplies Line-to-Line Voltage ($V_{LL}$), Line Current ($I$), the three-phase constant $\\sqrt{3}$ ($1.732$), and Power Factor ($\\cos\\phi$), then divides by 1,000 to express real power in kilowatts (kW) and equivalent horsepower. Formula: $\\text{Power (kW)} = (\\sqrt{3} \\times V \\times I \\times PF) / 1000$.',
    workedExample: 'An industrial three-phase motor operating at 400V line-to-line voltage, drawing 25 Amps per phase at a 0.85 power factor, consumes $(1.732 \\times 400 \\times 25 \\times 0.85) / 1000 = 14.72\\text{ kW}$ ($19.74\\text{ HP}$).',
    faqs: [
      { q: 'What is standard Three-Phase voltage in Pakistan?', a: 'Standard three-phase supply from WAPDA/DISCO transformers is 400V (or 415V) between any two phases (Line-to-Line) and 230V between any phase and Neutral.' },
      { q: 'Why is √3 (1.732) used in the three-phase power formula?', a: 'In a three-phase system with phases separated by 120 electrical degrees, the vector relationship between phase and line quantities introduces $\\sqrt{3}$.' },
      { q: 'What is a typical Power Factor for industrial factories?', a: 'Uncompensated induction motors run around 0.75 to 0.85 PF; DISCOs in Pakistan require industrial B-tariff consumers to maintain at least 0.90 PF to avoid low-PF penalties.' },
      { q: 'Does the 25 Amps input mean 25A per wire or total across all three wires?', a: 'Enter the Line Current measured on a single phase conductor with a clamp meter (assuming a balanced 3-phase load).' }
    ],
    whoUses: 'Who uses this: Industrial electrical engineers, factory supervisors, HVAC chiller technicians, and 3-phase solar designers.',
    medicalDisclaimer: 'Safety Notice: Three-phase 400V circuits are lethal; always consult a qualified electrician for real wiring work.'
  },
  'elec-power-factor': {
    intro: 'Industrial factories, flour mills, and cold storage plants in Pakistan face hefty "Low Power Factor Penalties" on their monthly LESCO/FESCO/K-Electric B2 and B3 electricity bills if their power factor drops below 0.90. This calculator determines the exact capacitor bank size in kVAR needed to raise your power factor to the safe target.',
    howItWorks: 'The calculator finds the initial phase angle $\\theta_1 = \\arccos(PF_1)$ and target phase angle $\\theta_2 = \\arccos(PF_2)$. The required reactive power compensation in kVAR equals real power (kW) multiplied by the difference of their tangents. Formula: $\\text{kVAR} = \\text{kW} \\times [\\tan(\\arccos(PF_1)) - \\tan(\\arccos(PF_2))]$.',
    workedExample: 'A small plastic molding factory in Gujranwala with a 50 kW real load running at an initial power factor of 0.75 wants to reach 0.95 PF. The calculator computes $50 \\times (0.8819 - 0.3287) = 27.7\\text{ kVAR}$ capacitor bank required.',
    faqs: [
      { q: 'What causes a low power factor in Pakistani factories?', a: 'Inductive loads such as induction motors, air compressors, welding transformers, and pumps draw lagging reactive current (kVAR) from the grid.' },
      { q: 'Below what threshold do Pakistani DISCOs charge a Low Power Factor penalty?', a: 'Industrial consumers with MDI/kVARh meters typically incur a penalty surcharge when average monthly power factor falls below 0.90.' },
      { q: 'Does installing a PFI (Power Factor Improvement) capacitor panel reduce kWh consumption?', a: 'It primarily eliminates the utility reactive penalty and reduces current ($I$) in your cables and transformer, which slightly reduces $I^2R$ heat losses.' },
      { q: 'Why shouldn’t I over-correct power factor above 1.0?', a: 'Over-capacitance causes a leading power factor and dangerous voltage rise on the transformer busbar when heavy motors switch off.' }
    ],
    whoUses: 'Who uses this: PFI panel manufacturers, industrial plant engineers, energy auditors, and electrical contractors.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work and PFI capacitor panel installation.'
  },
  'elec-frequency-wavelength': {
    intro: 'Radio transmitters, FM broadcast stations, Wi-Fi routers, and cellular 4G/5G towers operate using electromagnetic waves where wavelength is inversely proportional to frequency. By entering a frequency in Megahertz (MHz), this tool calculates the exact free-space wavelength in meters.',
    howItWorks: 'The calculator converts Megahertz (MHz) into Hertz (Hz) by multiplying by $10^6$, then divides the speed of light in vacuum ($c = 3 \\times 10^8\\text{ m/s}$) by the frequency in Hz. Formula: $\\text{Wavelength } (\\lambda) = (3 \\times 10^8\\text{ m/s}) / (f_{\\text{MHz}} \\times 10^6)$.',
    workedExample: 'An FM radio station broadcasting at 100 MHz in Karachi has an electromagnetic wavelength of $(3 \\times 10^8) / (100 \\times 10^6) = 3.00\\text{ Meters}$.',
    faqs: [
      { q: 'Why is wavelength important when designing an antenna?', a: 'A standard half-wave dipole antenna is cut to half the wavelength ($\\lambda / 2$), and a quarter-wave monopole is cut to $\\lambda / 4$ (e.g., 0.75 m for 100 MHz FM).' },
      { q: 'What is the wavelength of a 2.4 GHz Wi-Fi router?', a: 'Entering 2400 MHz (2.4 GHz) gives a wavelength of 0.125 meters (12.5 cm).' },
      { q: 'Does higher frequency mean shorter or longer wavelength?', a: 'Higher frequency always means a shorter wavelength because all electromagnetic waves travel at the same speed of light.' },
      { q: 'Can I use this for sound waves in air?', a: 'No, this calculator uses the speed of light ($3 \\times 10^8\\text{ m/s}$) for radio/EM waves; for acoustic sound waves in air, use the Wave Speed Calculator in the Engineering category.' }
    ],
    whoUses: 'Who uses this: Telecom RF engineers, amateur radio (ham) operators, physics students, and wireless network technicians.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician or RF technician for real antenna wiring work.'
  },
  'elec-charge-current': {
    intro: 'Electric current is defined as the rate of flow of electric charge past a point in a circuit. Whether you are studying FSc physics electrostatics, sizing electroplating baths, or analyzing capacitor discharge pulses, this calculator computes total electric charge in Coulombs (C) from current and time.',
    howItWorks: 'Since 1 Ampere equals 1 Coulomb of charge flowing per second, the calculator multiplies steady current ($I$) in Amps by the elapsed duration ($t$) in seconds. Formula: $\\text{Charge } (Q) = \\text{Current } (I) \\times \\text{Time } (t)$.',
    workedExample: 'A steady current of 5 Amps flowing through a conductor for 60 seconds transfers $5 \\times 60 = 300\\text{ Coulombs (C)}$ of electric charge.',
    faqs: [
      { q: 'How many Coulombs are in 1 Amp-hour (Ah) of battery capacity?', a: 'Since 1 hour has 3,600 seconds, 1 Amp-hour equals $1\\text{ A} \\times 3,600\\text{ s} = 3,600\\text{ Coulombs}$.' },
      { q: 'How many individual electrons make up 1 Coulomb of charge?', a: 'One Coulomb equals approximately $6.242 \\times 10^{18}$ electrons.' },
      { q: 'Where is Coulomb counting used in modern electronics?', a: 'Smartphones, laptops, and solar lithium BMS (Battery Management Systems) use a "Coulomb counter" chip to track exact state-of-charge percentage.' },
      { q: 'What if my time is in minutes or hours?', a: 'Multiply minutes by 60 (or hours by 3,600) to convert into seconds before entering it into the calculator.' }
    ],
    whoUses: 'Who uses this: Physics and engineering students, battery BMS developers, and electroplating technicians.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work.'
  },
  'elec-battery-charge-time': {
    intro: 'After a prolonged load-shedding outage drains your 12V UPS or solar battery, how many hours of grid or solar power will it take to recharge it completely? This calculator estimates full recharge time from battery capacity (Ah) and charger current (Amps).',
    howItWorks: 'Dividing Battery Capacity (Ah) by Charger Current (Amps) gives ideal charging hours. Because lead-acid and tubular batteries lose energy to heat and gassing during the absorption stage, the calculator multiplies by a 1.20 charging overhead factor (20% loss). Formula: $\\text{Charging Hours} = (\\text{Battery Ah} / \\text{Charger Amps}) \\times 1.2$.',
    workedExample: 'Recharging a fully depleted 150 Ah tubular UPS battery using a 15-Amp charger takes $(150 / 15) \\times 1.2 = 12.0\\text{ Hours}$.',
    faqs: [
      { q: 'What charging current (Amps) should I set on my UPS or solar inverter for a tubular battery?', a: 'Manufacturers in Pakistan (Osaka, Phoenix, Exide) recommend charging lead-acid batteries at C/10 (10% of Ah rating)—so 15A to 20A for a 150Ah–200Ah battery.' },
      { q: 'What happens if I set the UPS charging current too high (e.g., 30A on a 100Ah battery)?', a: 'Excessive charging current overheats the electrolyte, boils off distilled water rapidly, warps the lead plates, and ruins battery life.' },
      { q: 'Why does the last 20% of battery charging take longer?', a: 'Smart multi-stage chargers switch from constant-current (Bulk) mode to constant-voltage (Absorption) mode near 14.4V, tapering the current down.' },
      { q: 'What if my battery was only 50% discharged?', a: 'If the battery is half full, enter half of its Ah capacity (e.g., 75 Ah for a 150 Ah battery) to find the top-up time.' }
    ],
    whoUses: 'Who uses this: UPS owners, solar hybrid inverter users, auto battery shops, and telecom tower technicians.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work and ensure battery rooms are ventilated.'
  },
  'elec-inverter-load': {
    intro: 'UPS units, solar inverters, and portable generators are frequently marketed in Volt-Amps (VA) or kVA (such as a "1000 VA" or "1200 VA" UPS), which confuses buyers into thinking a 1,200 VA UPS can run 1,200 Watts of appliances. This calculator converts VA rating and power factor into maximum safe real Watts.',
    howItWorks: 'Apparent power (VA) multiplied by the inverter’s rated Power Factor (PF, typically 0.7 or 0.8 for home UPS units) gives the maximum continuous real power in Watts. Formula: $\\text{Safe Load (Watts)} = \\text{Inverter Rating (VA)} \\times \\text{Power Factor}$.',
    workedExample: 'A home UPS rated at 1,200 VA with a 0.8 power factor can safely support a maximum continuous load of $1,200 \\times 0.8 = 960\\text{ Watts}$.',
    faqs: [
      { q: 'Why are inverters rated in VA instead of Watts?', a: 'Inverter internal MOSFETs and transformers are limited by total current (Amps) at 230 Volts regardless of load power factor, which defines Volt-Amps (VA).' },
      { q: 'What is the power factor of modern 3 kW to 6 kW hybrid solar inverters?', a: 'Many modern Tier-1 hybrid solar inverters (such as Inverex, Knox, Solis, GoodWe) have a unity power factor (PF = 1.0), where 6,000 VA equals 6,000W.' },
      { q: 'Should I run my UPS at 100% of its calculated safe Watt limit continuously?', a: 'For long life during hot Pakistani summers, keep continuous load at 75% to 80% of the safe Watt rating to prevent MOSFET overheating.' },
      { q: 'How many ceiling fans and LED lights can a 960W inverter run?', a: 'Assuming 80W per regular fan and 12W per LED bulb, 960W can easily run 8–9 fans and 15 LED bulbs simultaneously.' }
    ],
    whoUses: 'Who uses this: Homeowners shopping for a UPS, solar system buyers, office IT managers, and electrical retailers.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work and UPS changeover switch installation.'
  },
  'elec-water-heater': {
    intro: 'During winter natural gas (Sui gas) load-shedding in Punjab, KPK, and Islamabad, many households switch to instant electric geysers or storage electric water heaters. Because heating water electrically draws 1,500W to 3,000W, this calculator estimates your daily energy consumption and monthly cost in PKR.',
    howItWorks: 'The calculator multiplies heater element wattage by active heating hours per day and divides by 1,000 to find daily kWh units, then multiplies by your PKR tariff rate and 30 days. Formula: $\\text{Monthly Cost (PKR)} = [(\\text{Watts} \\times \\text{Hours/Day}) / 1000] \\times \\text{Rate} \\times 30$.',
    workedExample: 'A 2,000-Watt electric water geyser whose heating element runs actively for 3 hours a day consumes $6.0\\text{ kWh/day}$. At PKR 35 per unit, that adds PKR 6,300 per month to your winter electricity bill.',
    faqs: [
      { q: 'Does an electric geyser consume electricity the entire time the switch is left on?', a: 'No, once the water tank reaches the thermostat temperature (e.g., 60°C), the heating element clicks off; enter only the hours the element is actively heating.' },
      { q: 'How can I reduce electric geyser bills in winter?', a: 'Set the thermostat to 50°C–55°C instead of 75°C, ensure the tank has thick polyurethane insulation, and turn it on only 45 minutes before bathing.' },
      { q: 'What wire size and plug should be used for a 2,000W electric geyser?', a: 'A 2,000W geyser draws nearly 9 Amps continuously and must be connected via a dedicated 15A/16A power socket or DP switch with 7/0.029 (2.5mm²–4mm²) copper wire.' },
      { q: 'Why is proper earthing mandatory for electric water heaters?', a: 'If the immersion heating element corrodes and leaks current into the water pipe, a proper earth wire and RCCB breaker prevent fatal electric shocks in the shower.' }
    ],
    whoUses: 'Who uses this: Homeowners in Sui-gas shortage areas, hostel managers, plumbers, and winter budget planners.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work; electric water heaters require a dedicated circuit and earth leakage protection.'
  },
  'elec-ac-power': {
    intro: 'Air conditioning accounts for 50% to 70% of summer electricity bills in Pakistani cities like Karachi, Lahore, Multan, and Sukkur. By entering your AC capacity in Tons (such as 1 Ton, 1.5 Ton, or 2 Ton), daily usage hours, and tariff rate in PKR, this calculator estimates your monthly AC electricity bill.',
    howItWorks: 'The calculator estimates average running electrical power at 1,200 Watts per Ton of cooling capacity, multiplies by daily operating hours, divides by 1,000 to get daily kWh units, and multiplies by your tariff rate and 30 days. Formula: $\\text{Monthly Cost} = [(\\text{Tons} \\times 1200\\text{W} \\times \\text{Hours/Day}) / 1000] \\times \\text{Rate} \\times 30$.',
    workedExample: 'Running a 1.5-Ton split AC (estimated at 1,800W average power) for 8 hours every night consumes $14.4\\text{ kWh/day}$. At a tariff of PKR 35 per unit, the monthly cost is PKR 15,120.',
    faqs: [
      { q: 'How does setting the AC thermostat to 26°C instead of 18°C save money in Pakistan?', a: 'On a DC Inverter AC, setting 26°C allows the compressor to throttle down to 400W–600W once the room cools, cutting unit consumption by 35%–50%.' },
      { q: 'Why does 1 Ton of AC equal roughly 1,200 Watts of electrical power?', a: '1 Ton of refrigeration equals 12,000 BTU/hr of cooling; divided by an Energy Efficiency Ratio (EER) of ~10 BTU/Wh, electrical input averages 1,200 Watts.' },
      { q: 'Should I run my AC during Peak Hours (evening) if I have a 3-phase green meter?', a: 'Try to pre-cool the room before peak hours begin or use Eco/Amp-limit mode during the 4 evening peak hours when DISCO tariffs are highest.' },
      { q: 'Does dirty indoor filter mesh increase AC power consumption?', a: 'Yes, clogged filters restrict airflow over the evaporator coil, forcing the compressor to run longer and consume 10%–15% more electricity.' }
    ],
    whoUses: 'Who uses this: Household consumers, office facility managers, solar sizing engineers, and AC buyers.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real AC wiring work, dedicated MCB breakers, and outdoor unit earthing.'
  },
  'elec-voltage-divider': {
    intro: 'A resistive voltage divider is one of the most common building blocks in electronics—used to scale down a 12V battery voltage so a 5V Arduino or 3.3V ESP32 ADC pin can measure it safely without burning out. This calculator computes the exact output voltage ($V_{out}$) from input voltage and two series resistors.',
    howItWorks: 'When two resistors $R_1$ (top, connected to $V_{in}$) and $R_2$ (bottom, connected to ground) are wired in series, the output voltage tapped at the junction between them is proportional to the ratio of $R_2$ to total series resistance $(R_1 + R_2)$. Formula: $V_{out} = V_{in} \\times [R_2 / (R_1 + R_2)]$.',
    workedExample: 'Applying an input voltage of $12\\text{V}$ across two equal resistors $R_1 = 1,000\\,\\Omega$ and $R_2 = 1,000\\,\\Omega$ divides the voltage in half, giving $V_{out} = 12 \\times (1000 / 2000) = 6.00\\text{ Volts}$.',
    faqs: [
      { q: 'Can I use a resistor voltage divider to power a heavy load like a 5V motor from a 12V battery?', a: 'No! A resistive voltage divider is only for high-impedance signal sensing (microcontroller pins, op-amps). Connecting a low-resistance load in parallel with $R_2$ collapses $V_{out}$.' },
      { q: 'What resistor values should I use to step 12V down to 3.0V for an ESP32 battery monitor?', a: 'Use a 3:1 ratio such as $R_1 = 30\\text{ k}\\Omega$ and $R_2 = 10\\text{ k}\\Omega$, which gives $12 \\times (10 / 40) = 3.00\\text{V}$.' },
      { q: 'Why use 10 kΩ resistors instead of 10 Ω resistors if the ratio is the same?', a: 'Two 10 Ω resistors across 12V would draw 0.6 Amps and waste 7.2 Watts of heat continuously, whereas two 10 kΩ resistors draw only 0.6 milliamps!' },
      { q: 'How does an LDR light sensor or NTC thermistor work in a voltage divider?', a: 'Replacing $R_2$ with a sensor whose resistance changes with light or temperature converts that resistance change into a measurable $V_{out}$ for a microcontroller.' }
    ],
    whoUses: 'Who uses this: Arduino/ESP32 developers, IoT hardware engineers, instrumentation technicians, and university students.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work; never use un-isolated resistive dividers directly on 230V AC mains.'
  },
  'elec-resistor-color': {
    intro: 'Through-hole axial carbon-film and metal-film resistors are too small for printed numbers, so manufacturers paint colored bands around the body to indicate resistance in Ohms. This estimator decodes the first two digit bands and the multiplier band of a standard 4-band resistor.',
    howItWorks: 'The first band gives the tens digit ($D_1$), the second band gives the units digit ($D_2$), and the third band specifies the power-of-10 multiplier ($\\times 1, \\times 10, \\times 100, \\times 1,000$). Values of $1,000\\,\\Omega$ and above are formatted in kilohms ($\\text{k}\\Omega$). Formula: $\\text{Resistance } (\\Omega) = [(D_1 \\times 10) + D_2] \\times \\text{Multiplier}$.',
    workedExample: 'Selecting Band 1 = Brown (1), Band 2 = Black (0), and Multiplier = Red (× 100) computes (10) × 100 = 1,000 Ω, displayed as 1.0 kΩ—the classic "Brown-Black-Red" 1 kΩ resistor found on nearly every circuit board.',
    faqs: [
      { q: 'How do I know which end of the resistor to start reading from?', a: 'Hold the resistor so the metallic gold or silver tolerance band is on the right-hand side; read the color bands from left to right.' },
      { q: 'What does a Gold or Silver 4th band mean?', a: 'A Gold 4th band indicates $\\pm 5\\%$ tolerance (standard carbon film), while a Silver band indicates $\\pm 10\\%$ tolerance.' },
      { q: 'What are the colors for a 4.7 kΩ or 10 kΩ resistor?', a: '10 kΩ is Brown (1), Black (0), Orange (×1k). 4.7 kΩ is Yellow (4), Violet (7), Red (×100).' },
      { q: 'What if a resistor band is burnt and unreadable on a faulty UPS board?', a: 'Unsolder one leg shows if it’s open-circuit; otherwise check the schematic or compare with an identical channel on the PCB.' }
    ],
    whoUses: 'Who uses this: Electronics repair technicians in Hall Road Lahore and Saddar Karachi, DAE students, and hobbyists.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work and disconnect power before probing circuit boards.'
  },
  'elec-led-series': {
    intro: 'When designing custom LED lighting strips, 12V DC solar room lamps, or indicator panels, selecting the exact current-limiting resistor prevents thermal runaway and premature LED failure. This calculator outputs the exact resistance to one decimal place along with the exact wattage dissipated in the resistor.',
    howItWorks: 'The calculator subtracts the LED forward voltage ($V_f$) from the DC source voltage ($V_s$), converts forward current from milliamps to Amps ($I = I_{mA} / 1000$), and divides voltage drop by current. Power dissipation is computed as $(V_s - V_f) \\times I$. Formula: $R = (V_s - V_f) / (I_{mA} / 1000)$; $P = (V_s - V_f) \\times (I_{mA} / 1000)$.',
    workedExample: 'For a 12V source voltage, a 2.2V LED forward voltage, and a 20 mA target current, the calculator finds $\\text{Resistor} = 490.0\\,\\Omega$ with a power dissipation of $0.20\\text{ Watts}$.',
    faqs: [
      { q: 'Can I wire three 3.2V white LEDs in series on a 12V battery with a single resistor?', a: 'Yes! Sum the forward voltages ($3 \\times 3.2\\text{V} = 9.6\\text{V}$) and enter 9.6V as the LED Forward Voltage—you will only need a $120\\,\\Omega$ resistor and waste far less heat.' },
      { q: 'Why shouldn’t I connect LEDs directly in parallel sharing one resistor?', a: 'Slight manufacturing differences in $V_f$ cause one LED to hog more current, overheat, and fail in a chain reaction; give each series string its own resistor.' },
      { q: 'What happens when a 12V battery is charging at 14.4V?', a: 'If the circuit runs on a vehicle or solar battery, enter 14.4V as the Source Voltage so the LEDs aren’t over-driven during battery charging.' },
      { q: 'How do high-power 1W or 3W LED beads differ from 20mA LEDs?', a: '1W LEDs draw ~300 mA and 3W LEDs draw ~700 mA; at those currents, a constant-current buck driver is much more efficient than a series resistor.' }
    ],
    whoUses: 'Who uses this: 12V DC solar lamp assemblers, automotive accessory installers, and electronics engineers.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work.'
  },
  'elec-battery-charge': {
    intro: 'From 3,000 mAh AA NiMH cells and 18650 lithium-ion cells used in power banks to 5,000 mAh smartphone batteries, small rechargeable batteries are rated in milliamp-hours (mAh) and charged by adapters rated in milliamps (mA). This estimator calculates charging duration factoring in charger efficiency.',
    howItWorks: 'The calculator divides Battery Capacity (mAh) by Charger Output Current (mA) and divides by the charging efficiency percentage (converted to a decimal, e.g., $85\\% = 0.85$) to account for heat losses in the charging IC and cell chemistry. Formula: $\\text{Hours} = (\\text{Capacity}_{mAh} / \\text{Current}_{mA}) / (\\text{Efficiency} / 100)$.',
    workedExample: 'Charging a 3,000 mAh lithium-ion battery with a 1,000 mA (1A) USB charger at 85% charging efficiency takes $(3000 / 1000) / 0.85 \\approx 3.5\\text{ Hours}$.',
    faqs: [
      { q: 'How many mA is a 2A USB phone charger?', a: '1 Amp equals 1,000 milliamps (mA), so a 2A charger outputs 2,000 mA.' },
      { q: 'Why does fast-charging slow down once a phone reaches 80%?', a: 'To protect the lithium-ion anode from lithium plating and heat, the phone’s internal BMS throttles current during the constant-voltage top-off phase.' },
      { q: 'What is a typical charging efficiency for Lithium-ion vs NiMH batteries?', a: 'Lithium-ion cells are roughly 85%–92% efficient, whereas NiMH rechargeable AA batteries are about 70%–80% efficient.' },
      { q: 'If I plug a 33W fast charger into a device that only supports 10W (5V 2A), what current should I enter?', a: 'Always enter the maximum current accepted by the device (2,000 mA), as the device regulates how much current it draws.' }
    ],
    whoUses: 'Who uses this: Mobile repair technicians, 18650 battery pack builders, drone hobbyists, and everyday gadget users.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician or technician when assembling lithium-ion cells; always use a protective BMS circuit.'
  },
  'elec-max-power': {
    intro: 'In electrical network theory, RF antenna matching, audio amplifier speaker matching, and solar MPPT design, the Maximum Power Transfer Theorem states that a source delivers maximum external power when the load resistance ($R_L$) equals the source’s internal Thevenin resistance ($R_{th}$). This calculator computes $P_{max}$ and the optimal load resistance.',
    howItWorks: 'When $R_L = R_{th}$, the voltage across the load is exactly half of the Thevenin source voltage ($V_{th} / 2$). Squaring $V_{th}$ and dividing by $4 \\times R_{th}$ yields the maximum power transferred to the load in Watts. Formula: $P_{max} = V_{th}^2 / (4 \\times R_{th})$ at $R_L = R_{th}$.',
    workedExample: 'A DC source with a Thevenin equivalent voltage of $24\\text{V}$ and an internal Thevenin resistance of $50\\,\\Omega$ transfers a maximum power of $24^2 / (4 \\times 50) = 576 / 200 = 2.88\\text{ Watts}$ when connected to a $50\\,\\Omega$ load resistor.',
    faqs: [
      { q: 'What is the circuit efficiency when operating at Maximum Power Transfer ($R_L = R_{th}$)?', a: 'Efficiency is exactly 50%, because an equal amount of power ($2.88\\text{W}$) is dissipated inside the source’s internal resistance $R_{th}$.' },
      { q: 'Why don’t WAPDA power grids operate at $R_L = R_{th}$?', a: 'Power utilities want 95%+ efficiency rather than 50% efficiency, so grid source impedance is kept as close to zero as possible; Maximum Power Transfer is used in communications, RF, and audio.' },
      { q: 'Why are coaxial cables and RF antennas standardized at 50 Ω or 75 Ω?', a: 'Matching a 50 Ω transmitter output to a 50 Ω cable and 50 Ω antenna ensures maximum RF power transfer with zero reflected standing waves.' },
      { q: 'How do solar MPPT controllers use this principle?', a: 'An MPPT controller dynamically adjusts its DC-DC converter input impedance to match the solar panel’s characteristic impedance at the maximum power point.' }
    ],
    whoUses: 'Who uses this: Electrical engineering students, RF/telecom engineers, audio amplifier technicians, and solar electronics researchers.',
    medicalDisclaimer: 'Safety Notice: Consult a qualified electrician for real wiring work.'
  }
};
