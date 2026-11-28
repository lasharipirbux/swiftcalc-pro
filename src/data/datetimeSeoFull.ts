import { SITE_NAME } from '../config/site';

export interface DateTimeCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  introDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const datetimeSeoFullMap: Record<string, DateTimeCalculatorSeoEntry> = {
  'dt-age-calc': {
    seoTitle: `Calculate Exact Age From Date of Birth | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate exact age from date of birth in years, months, days, and total days lived for forms, passports, and milestones.',
    introDescription:
      'Whenever you fill out a school admission form, passport application, or job portal, knowing how to calculate exact age from date of birth saves guesswork across uneven month lengths and leap years. This tool breaks down your chronological age into exact years, months, and remaining days while tallying total days lived since birth. Because it handles 28-day Februaries, 30-day months, and February 29 leap days automatically, you get an instant, accurate answer for official paperwork or milestone tracking.',
    howToUseSteps: [
      'Type your birth date inside Date of Birth (YYYY-MM-DD) using four-digit year, month, and day.',
      'Read your chronological age in years, months, and remaining days alongside total days lived.',
    ],
    formulaExplanation:
      'Chronological age subtracts birth year, month, and day from the current calendar date, borrowing the exact day count of the prior month (28–31 days) whenever today’s day is smaller and borrowing 12 months when the birth month lies ahead. Formula: Age = Current Date (Y, M, D) − Birth Date (Y, M, D); Total Days = floor(|Current ms − Birth ms| / 86,400,000).',
    practicalExample:
      'Entering Date of Birth (YYYY-MM-DD) = 1998-03-10 checked on 2026-11-28 returns 28 years, 8 months, 18 days and Total Days Lived: 10,490.',
    faqs: [
      {
        q: 'How is age calculated if I was born on February 29?',
        a: 'In non-leap years, calendar math counts February as 28 days while your total days lived still includes every February 29 since birth.',
      },
      {
        q: 'Why do I need to enter the date in YYYY-MM-DD order?',
        a: 'Putting the four-digit year first prevents confusion between day-first and month-first formats like 04-07.',
      },
      {
        q: 'Does the total days figure include leap years?',
        a: 'Yes, every 366-day leap year between your birth date and today adds an extra day to the total count.',
      },
    ],
  },

  'dt-date-diff': {
    seoTitle: `How to Find Days Between Two Dates | ${SITE_NAME}`,
    metaDescription:
      'See how to find days between two dates quickly with exact years, months, and weeks for leases, visas, and travel planning.',
    introDescription:
      'Planning a lease term, visa stay, or project timeline often requires knowing how to find days between two dates without miscounting 30-day and 31-day months on a paper calendar. Enter any start date and end date to see the exact day gap alongside a full breakdown in years, months, weeks, and leftover days. All math runs in UTC midnight time so daylight saving shifts never add or drop a phantom hour from your schedule.',
    howToUseSteps: [
      'Enter your opening calendar date into Start Date (YYYY-MM-DD).',
      'Type your closing calendar date inside End Date (YYYY-MM-DD).',
      'Inspect total elapsed days alongside years-months-days, weeks, and decimal months.',
    ],
    formulaExplanation:
      'Date span calculation maps both Start Date and End Date onto UTC midnights to eliminate daylight-saving hour drift, computes total elapsed days from millisecond distance, and converts remaining calendar differences across variable month lengths. Formula: Days = round(|End UTC ms − Start UTC ms| / 86,400,000); Weeks = Days / 7; Months = Days / 30.436875.',
    practicalExample:
      'Setting Start Date (YYYY-MM-DD) = 2026-03-01 and End Date (YYYY-MM-DD) = 2026-09-15 measures 198 days (0 years, 6 months, 14 days | 28.3 weeks | 6.5 months).',
    faqs: [
      {
        q: 'Are both the start date and end date included in the day count?',
        a: 'The result measures elapsed days from start to end; add 1 day if your rental or hotel booking counts both endpoints.',
      },
      {
        q: 'What if I accidentally put a later date in the start field?',
        a: 'The calculator uses absolute difference, so you still get a positive day count even when dates are entered in reverse order.',
      },
      {
        q: 'Why does the decimal months figure use 30.44 days?',
        a: 'A full Gregorian leap cycle averages 365.2425 days per year, which divides cleanly by 12 into 30.436875 days per month.',
      },
    ],
  },

  'dt-add-sub-days': {
    seoTitle: `Add or Subtract Days From a Date Online | ${SITE_NAME}`,
    metaDescription:
      'Need to add or subtract days from a date online? Jump 30, 45, 90, or 180 days forward or back for invoices, warranties, and deadlines.',
    introDescription:
      'Whether you are checking a 30-day return window, a 45-day invoice term, or a 90-day visa deadline, being able to add or subtract days from a date online prevents costly calendar mistakes. Pick any starting date, choose whether to move forward or backward, and enter your exact day count. The result immediately displays both the weekday name and the formatted ISO date, smoothly crossing month-end boundaries and leap years.',
    howToUseSteps: [
      'Type your reference date inside Base Date (YYYY-MM-DD).',
      'Select Add Days (+) or Subtract Days (-) in Operation and enter your offset inside Number of Days.',
      'View the resulting weekday date and ISO target date.',
    ],
    formulaExplanation:
      'Calendar date shifting converts the base date into UTC milliseconds and adds or subtracts Number of Days multiplied by 86,400,000 milliseconds per day, stepping accurately across 28-, 30-, and 31-day months as well as year boundaries. Formula: Target Timestamp = Base Timestamp ± (Number of Days × 86,400,000 ms).',
    practicalExample:
      'Starting from Base Date (YYYY-MM-DD) = 2026-06-01 with Operation = Add Days (+) and Number of Days = 45 lands on Thu Jul 16 2026 (2026-07-16).',
    faqs: [
      {
        q: 'Why does adding 30 days to May 1 land on May 31 instead of June 1?',
        a: 'May has 31 calendar days, so stepping ahead 30 days keeps you on the last day of May rather than advancing a calendar month.',
      },
      {
        q: 'Does this tool skip Saturdays and Sundays?',
        a: 'No, it counts every consecutive calendar day; use the Add Business Days calculator when weekends should be skipped.',
      },
      {
        q: 'Can I add more than 365 days at once?',
        a: 'Yes, you can enter hundreds or thousands of days to project multi-year deadlines or look far back in time.',
      },
    ],
  },

  'dt-working-days': {
    seoTitle: `Count Working Days Between Two Dates | ${SITE_NAME}`,
    metaDescription:
      'Easily count working days between two dates with Sundays excluded for school terms, payroll cycles, and factory shift schedules.',
    introDescription:
      'Payroll teams, school administrators, and six-day offices often need to count working days between two dates while excluding weekly Sunday closures. Instead of ticking boxes on a wall calendar, enter your opening and closing dates to get the exact total of Monday-through-Saturday workdays alongside total calendar days. Both boundary dates are checked inclusively, making it straightforward to schedule attendance targets, monthly shifts, and production runs.',
    howToUseSteps: [
      'Enter the opening date inside Start Date (YYYY-MM-DD).',
      'Type the closing inclusive date inside End Date (YYYY-MM-DD).',
      'Inspect total working days excluding Sundays alongside total calendar days.',
    ],
    formulaExplanation:
      'Workday counting loops inclusively day by day from Start Date through End Date and tallies every calendar date whose weekday index is Monday through Saturday (excluding Sunday index 0). Formula: Working Days = Σ [day ∈ Start..End where Weekday(day) ≠ Sunday].',
    practicalExample:
      'Evaluating May 2026 from Start Date (YYYY-MM-DD) = 2026-05-01 to End Date (YYYY-MM-DD) = 2026-05-31 subtracts 5 Sundays from 31 calendar days to give 26 working days.',
    faqs: [
      {
        q: 'Why does this calculator count Saturdays as working days?',
        a: 'Many schools, retail stores, clinics, and offices operate a six-day week with only Sunday closed.',
      },
      {
        q: 'Do both the start and end dates count toward working days?',
        a: 'Yes, both endpoints are included in the count as long as neither date falls on a Sunday.',
      },
      {
        q: 'How should I adjust the result for Eid or national holidays?',
        a: 'Simply subtract the number of weekday public holidays that fall within your selected date range.',
      },
    ],
  },

  'dt-countdown': {
    seoTitle: `How Many Days Until a Future Date | ${SITE_NAME}`,
    metaDescription:
      'Find out how many days until a future date down to the exact hours and minutes for exams, weddings, product launches, and holidays.',
    introDescription:
      'Counting down to board exams, an upcoming wedding, a flight departure, or New Year’s Eve is much easier when you can check how many days until a future date in one glance. Type your target date and the tool compares it against the current clock to show remaining days, hours, and minutes. You can even append a specific clock hour after the date when you want a countdown to an evening deadline.',
    howToUseSteps: [
      'Enter your target milestone date inside Target Date & Time (YYYY-MM-DD).',
      'Check remaining days, hours, and minutes from the current instant.',
    ],
    formulaExplanation:
      'Event countdown subtracts the live system clock timestamp from your target date timestamp and divides remaining milliseconds sequentially by 86,400,000 (days), 3,600,000 (hours), and 60,000 (minutes). Formula: Days = floor(Δms / 86,400,000); Hours = floor((Δms % 86,400,000) / 3,600,000).',
    practicalExample:
      'Targeting Target Date & Time (YYYY-MM-DD) = 2026-12-31 from November 28, 2026 (00:09) computes roughly 32 days, 15 hrs, 50 mins left until New Year’s Eve.',
    faqs: [
      {
        q: 'What message appears if the target date has already passed?',
        a: 'Once the current date and time moves past your target, the result tells you that the target date has already passed.',
      },
      {
        q: 'Can I count down to a specific hour instead of midnight?',
        a: 'Yes, add T followed by 24-hour time, such as 2026-12-31T18:30, to target an exact afternoon or evening moment.',
      },
      {
        q: 'Why does the remaining hours count shift slightly by time zone?',
        a: 'Date-only inputs resolve at UTC midnight, so comparing against your device clock naturally reflects your local UTC offset.',
      },
    ],
  },

  'dt-time-duration': {
    seoTitle: `Calculate Hours Between Two Clock Times | ${SITE_NAME}`,
    metaDescription:
      'Learn how to calculate hours between two clock times in hours and total minutes, including overnight night shifts across midnight.',
    introDescription:
      'Freelancers logging billable sessions, nurses tracking night shifts, and travelers checking layovers frequently need to calculate hours between two clock times without doing base-60 math in their heads. Enter a start time and end time in 24-hour format to see exact elapsed hours and minutes plus total minutes. If your end time is earlier than your start time, the calculator assumes an overnight shift crossing midnight automatically.',
    howToUseSteps: [
      'Type shift or trip start time in 24-hour notation inside Start Time (HH:MM 24hr).',
      'Enter finishing time inside End Time (HH:MM 24hr).',
      'Read total elapsed hours, minutes, and combined minute count.',
    ],
    formulaExplanation:
      'Elapsed clock duration converts both 24-hour timestamps into minutes past midnight (hours × 60 + minutes), adds 1,440 minutes automatically when End Time crosses midnight into the next day, and splits the difference back into hours and minutes. Formula: Elapsed Mins = (End Mins − Start Mins + 1,440) mod 1,440.',
    practicalExample:
      'Logging Start Time (HH:MM 24hr) = 08:30 and End Time (HH:MM 24hr) = 17:15 equals 1,035 − 510 = 525 mins, displayed as 8 hours and 45 minutes.',
    faqs: [
      {
        q: 'Does it work for night shifts from 22:00 to 06:30?',
        a: 'Yes, whenever the end time is earlier than the start time, 24 hours are added so 22:00 to 06:30 returns 8 hours and 30 minutes.',
      },
      {
        q: 'How do I enter PM hours like 5:15 PM in 24-hour format?',
        a: 'Add 12 to afternoon hours after 12:59 PM, so 5:15 PM becomes 17:15 and midnight becomes 00:00.',
      },
      {
        q: 'How can I turn the output into decimal hours for timesheets?',
        a: 'Take the total minutes shown beneath the result and divide by 60—for instance, 525 minutes equals 8.75 hours.',
      },
    ],
  },

  'dt-timezone-conv': {
    seoTitle: `Convert PKT to UAE UK and US Time | ${SITE_NAME}`,
    metaDescription:
      'Instantly convert PKT to UAE UK and US time across Islamabad, Dubai, Riyadh, London, and New York for remote work and family calls.',
    introDescription:
      'Coordinating remote standups, client deadlines, or family video calls is effortless when you can convert PKT to UAE UK and US time in seconds. Enter any 24-hour clock reading, select your starting zone, and choose your target region among Pakistan, UAE, Saudi Arabia, the UK, and US Eastern time. You get the exact local destination time immediately without guessing whether to add or subtract five or ten hours.',
    howToUseSteps: [
      'Type your local 24-hour clock time inside Time (HH:MM 24hr).',
      'Select your origin zone in From Time Zone and destination zone in To Time Zone.',
      'Read the converted 24-hour time and day-shift notice immediately.',
    ],
    formulaExplanation:
      'Time zone conversion maps the entered time from its origin UTC offset (PKT +5, GST +4, AST +3, UK +0, EST −5) back to Coordinated Universal Time, then shifts by the target zone offset while wrapping around 0–1,439 daily minutes. Formula: Target Mins = (Source Mins − Source UTC Offset + Target UTC Offset) mod 1,440.',
    practicalExample:
      'Converting Time (HH:MM 24hr) = 15:00 from From Time Zone = PKT (+5) to To Time Zone = EST (−5) shifts back 10 hours to 05:00 (EST).',
    faqs: [
      {
        q: 'How many hours behind Pakistan are Dubai and Saudi Arabia?',
        a: 'Dubai (GST, UTC+4) is 1 hour behind Pakistan (PKT, UTC+5), and Saudi Arabia (AST, UTC+3) is 2 hours behind.',
      },
      {
        q: 'Do Pakistan, UAE, and Saudi Arabia change clocks for Daylight Saving?',
        a: 'No, all three regions keep fixed year-round UTC offsets without seasonal clock changes.',
      },
      {
        q: 'What changes when London or New York switches to summer time?',
        a: 'During spring and summer DST, London (BST) moves 1 hour closer to PKT (4 hours behind) and New York (EDT) moves to 9 hours behind.',
      },
    ],
  },

  'dt-week-day-finder': {
    seoTitle: `Find ISO Week Number for Any Date | ${SITE_NAME}`,
    metaDescription:
      'Look up the weekday name and find ISO week number for any date from 1 to 53 for sprint planning, logistics, and calendar scheduling.',
    introDescription:
      'Software teams running weekly sprints, accountants filing biweekly payroll, and warehouse coordinators often need to find ISO week number for any date alongside its exact weekday. Enter any historical or upcoming date in YYYY-MM-DD format to reveal whether it lands on a Monday or Friday and which ISO-8601 week of the year (1 through 53) it occupies. It takes the ambiguity out of early January and late December week rollovers.',
    howToUseSteps: [
      'Enter any historical or upcoming date inside Date (YYYY-MM-DD).',
      'View the exact weekday name alongside its ISO-8601 week number of the year.',
    ],
    formulaExplanation:
      'ISO-8601 week numbering starts weeks on Monday, defines Week 1 as the week containing the year’s first Thursday (or January 4), and calculates day offset from that Thursday anchor divided by 7. Formula: ISO Week = 1 + round([(Thursday of Date’s Week) − (Thursday of Week 1)] / 604,800,000 ms).',
    practicalExample:
      'Checking Date (YYYY-MM-DD) = 2026-06-15 returns Monday with ISO Week Number: Week 25 of the year.',
    faqs: [
      {
        q: 'Why does January 1 sometimes show up as Week 52 or Week 53?',
        a: 'Under ISO-8601 rules, Week 1 is the first week with at least four days in the new year, so late-week January starts stay in the prior year’s final week.',
      },
      {
        q: 'Which day begins each ISO week?',
        a: 'ISO-8601 weeks always begin on Monday (day 1) and finish on Sunday (day 7).',
      },
      {
        q: 'Can I check what day of the week I was born on?',
        a: 'Yes, type any past birth date in YYYY-MM-DD format to find both the exact weekday and its ISO week number.',
      },
    ],
  },

  'dt-age-detailed': {
    seoTitle: `Calculate My Age in Months and Hours | ${SITE_NAME}`,
    metaDescription:
      'Curious to calculate my age in months and hours? Convert your birth date into total months, weeks, and hours lived instantly.',
    introDescription:
      'Parents tracking baby milestones and adults curious about lifetime stats often want to calculate my age in months and hours instead of sticking to plain years. Type your date of birth to convert your lifespan into cumulative months, total weeks, and approximate hours lived. Pediatricians, early-childhood programs, and fun birthday trivia cards all rely on exact month and week counts rather than rounded annual ages.',
    howToUseSteps: [
      'Enter your birth date inside Date of Birth (YYYY-MM-DD).',
      'Review cumulative months, weeks, and estimated total hours lived.',
    ],
    formulaExplanation:
      'Lifetime unit breakdown measures exact millisecond duration from Date of Birth to today, converting elapsed hours via 3,600,000 ms, weeks via 7 days, and total months via average 30.436875-day months. Formula: Hours = floor(Δms / 3,600,000); Weeks = floor(Δdays / 7); Months = floor(Δdays / 30.436875).',
    practicalExample:
      'Entering Date of Birth (YYYY-MM-DD) = 2000-01-01 evaluated on 2026-11-28 produces 322 months (1,404 weeks) and Total Hours Lived: ~235,880 hours.',
    faqs: [
      {
        q: 'How accurate is the total hours lived number?',
        a: 'Because only the calendar date is entered without birth clock time, total hours are accurate within roughly 24 hours of your exact birth minute.',
      },
      {
        q: 'Why do total weeks average about 52.18 times my age in years?',
        a: 'A standard year has 52 full weeks plus one extra day (two in leap years), adding up over time.',
      },
      {
        q: 'When is age measured in months most useful?',
        a: 'Infant growth charts, vaccination schedules, and preschool cutoffs routinely measure children up to 36 months old in total months.',
      },
    ],
  },

  'dt-leap-year': {
    seoTitle: `How to Check if a Year Is a Leap Year | ${SITE_NAME}`,
    metaDescription:
      'See how to check if a year is a leap year with 366 days or a standard 365-day year using exact Gregorian century rules.',
    introDescription:
      'Scheduling software tests, checking February 29 birthdays, or building multi-year calendars starts with knowing how to check if a year is a leap year accurately. Enter any four-digit year to verify right away whether it carries 366 days or 365 days. Unlike simple divide-by-four shortcuts, this checker applies the full Gregorian century exceptions so years like 1900 and 2100 are properly flagged as common years while 2000 and 2028 qualify as leap years.',
    howToUseSteps: [
      'Enter any four-digit calendar year inside the Year field.',
      'Check immediately whether that year holds 366 days (leap) or 365 days (common).',
    ],
    formulaExplanation:
      'The Gregorian calendar keeps seasons aligned with Earth’s ~365.2422-day orbit by adding February 29 in years divisible by 4, skipping century years divisible by 100, and reinstating 400-year multiples. Formula: IsLeap = (Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0).',
    practicalExample:
      'Checking Year = 2028 returns 2028 is a Leap Year (366 days) because 2028 divides evenly by 4 without being a century year.',
    faqs: [
      {
        q: 'Why was 2000 a leap year while 2100 will not be?',
        a: 'Century years ending in 00 only keep February 29 if they divide evenly by 400—2000 passes that check, whereas 1900 and 2100 do not.',
      },
      {
        q: 'Why do we need leap years at all?',
        a: 'Earth orbits the sun in about 365.2422 days, so skipping leap days would slowly push calendar seasons backward by nearly a month every century.',
      },
      {
        q: 'Can I test historical years or far-future years?',
        a: 'Yes, enter any positive integer year to run the Gregorian divisibility rules immediately.',
      },
    ],
  },

  'dt-add-business-days': {
    seoTitle: `Add Business Days Skipping Weekends | ${SITE_NAME}`,
    metaDescription:
      'Calculate any shipping, bank clearing, or SLA target date when you add business days skipping weekends automatically.',
    introDescription:
      'Bank transfers, courier deliveries, and service-level agreements rarely count Saturdays or Sundays, so knowing the exact date when you add business days skipping weekends keeps promises realistic. Type your kickoff date and the number of Monday-through-Friday working days to add. The tool steps day by day over weekends and outputs both the weekday name and the clean YYYY-MM-DD delivery date for schedules, contracts, and shipping.',
    howToUseSteps: [
      'Enter the kickoff calendar date into Start Date (YYYY-MM-DD).',
      'Type the SLA or shipping weekday count inside Business Days to Add.',
      'Read the final non-weekend completion date.',
    ],
    formulaExplanation:
      'Business-day stepping advances one UTC calendar day per iteration and decrements the Business Days to Add counter only when the landed day is Monday through Friday (skipping Saturday 6 and Sunday 0). Formula: Advance Date until WeekdayCount(Monday–Friday) = Business Days to Add.',
    practicalExample:
      'Adding Business Days to Add = 15 starting on Monday Start Date (YYYY-MM-DD) = 2026-06-01 skips 3 weekends (6 days) and arrives on Mon Jun 22 2026 (2026-06-22).',
    faqs: [
      {
        q: 'What if my starting date lands on a Saturday or Sunday?',
        a: 'The counter waits until Monday as the first weekday counted, skipping the weekend automatically.',
      },
      {
        q: 'Why do 10 business days take 14 calendar days?',
        a: 'Every 5 weekdays include a 2-day weekend, so 10 working days span two full calendar weeks.',
      },
      {
        q: 'Does it automatically exclude regional public holidays?',
        a: 'No, only Saturdays and Sundays are skipped; simply add 1 extra business day for each bank holiday during that span.',
      },
    ],
  },

  'dt-unix-timestamp': {
    seoTitle: `Convert Date to Unix Timestamp Online | ${SITE_NAME}`,
    metaDescription:
      'Quickly convert date to Unix timestamp online in 10-digit POSIX seconds, 13-digit milliseconds, and UTC format for APIs and logs.',
    introDescription:
      'Backend developers, database engineers, and QA testers frequently need to convert date to Unix timestamp online when building JWT expiration times or querying event logs. Type any calendar date—or add a full ISO clock string—to generate the exact 10-digit POSIX epoch seconds, 13-digit JavaScript milliseconds, and UTC string. It removes manual timezone guesswork when debugging REST APIs, cron schedules, and database records.',
    howToUseSteps: [
      'Type any date or ISO timestamp inside Date & Time (YYYY-MM-DD).',
      'Copy the 10-digit Unix epoch second count, 13-digit milliseconds, or formatted GMT string.',
    ],
    formulaExplanation:
      'POSIX Unix time tracks total non-leap seconds elapsed since 00:00:00 UTC on January 1, 1970, dividing JavaScript’s millisecond epoch timestamp by 1,000. Formula: Unix Seconds = floor(Date.parse(Date & Time) / 1,000).',
    practicalExample:
      'Converting Date & Time (YYYY-MM-DD) = 2026-06-01 generates 1780272000 Unix Timestamp (Milliseconds: 1780272000000 ms | Mon, 01 Jun 2026 00:00:00 GMT).',
    faqs: [
      {
        q: 'Why are some timestamps 10 digits and others 13 digits?',
        a: 'Unix seconds use 10 digits, while JavaScript, Java, and many web APIs multiply by 1,000 to record 13-digit milliseconds.',
      },
      {
        q: 'Can I include exact hours and minutes in the date input?',
        a: 'Yes, use an ISO string such as 2026-06-01T14:30:00Z to encode an exact UTC time of day.',
      },
      {
        q: 'Are dates before 1970 allowed?',
        a: 'Yes, dates prior to January 1, 1970 simply produce negative Unix epoch values.',
      },
    ],
  },

  'dt-meeting-planner': {
    seoTitle: `Plan International Meetings From PKT | ${SITE_NAME}`,
    metaDescription:
      'Compare Islamabad time side by side with Dubai, London, and New York to plan international meetings from PKT without clock mix-ups.',
    introDescription:
      'Distributed teams working across South Asia, the Gulf, Europe, and North America need an easy way to plan international meetings from PKT without waking anyone up at midnight. Enter your proposed Islamabad hour from 0 to 23 to view simultaneous local times in Dubai, London, and New York side by side. It helps managers pick overlapping work hours quickly before sending calendar invites.',
    howToUseSteps: [
      'Enter your proposed meeting hour (0 to 23) inside Islamabad Time (PKT Hour 0-23).',
      'Compare simultaneous local hours in Dubai, London, and New York at a glance.',
    ],
    formulaExplanation:
      'Cross-border scheduling takes an integer 24-hour Islamabad PKT hour (UTC+5) and subtracts standard city offset differences (−1 hour for Dubai, −5 hours for London, and −10 hours for New York) modulo 24 hours. Formula: Dubai = (PKT − 1) mod 24; London = (PKT − 5) mod 24; New York = (PKT − 10) mod 24.',
    practicalExample:
      'Choosing Islamabad Time (PKT Hour 0-23) = 16 (4:00 PM PKT) displays Dubai: 15:00 | London: 11:00 | New York: 6:00 simultaneously.',
    faqs: [
      {
        q: 'What is the best time in Pakistan for a call with Dubai, London, and New York?',
        a: 'Scheduling between 18:00 and 20:00 PKT catches Dubai in early evening (17:00–19:00), London in the afternoon (13:00–15:00), and New York in the morning (08:00–10:00).',
      },
      {
        q: 'How do hours 13 to 23 convert to AM/PM?',
        a: 'Subtract 12 from any hour above 12—for instance, 15 is 3:00 PM and 19 is 7:00 PM.',
      },
      {
        q: 'Do London and New York shift during daylight saving months?',
        a: 'Yes, during spring and summer DST both London and New York move one hour ahead of their standard winter offsets.',
      },
    ],
  },

  'dt-time-add': {
    seoTitle: `How to Add Hours and Minutes to Time | ${SITE_NAME}`,
    metaDescription:
      'Learn how to add hours and minutes to time in 24-hour format for flight arrivals, cooking timers, and shift handovers.',
    introDescription:
      'Cooking a roast, estimating a road-trip arrival, or tracking a lab timer is much simpler when you know how to add hours and minutes to time without tripping over 60-minute rollovers. Enter your starting 24-hour time plus the hours and minutes you want to add. Extra minutes beyond 60 automatically carry into hours, and times passing 23:59 wrap cleanly past midnight into the next morning.',
    howToUseSteps: [
      'Enter your starting clock time in 24-hour format inside Start Time (HH:MM).',
      'Type additional hours into Hours to Add and extra minutes into Minutes to Add.',
      'Check the updated 24-hour result and total duration added.',
    ],
    formulaExplanation:
      'Clock addition converts Start Time into total minutes past midnight, adds (Hours to Add × 60 + Minutes to Add), and applies modulo 1,440 minutes (24 hours) so durations past 23:59 roll cleanly into the next morning. Formula: End Mins = (Start Mins + Hours × 60 + Minutes) mod 1,440.',
    practicalExample:
      'Starting at Start Time (HH:MM) = 10:30 and adding Hours to Add = 3 with Minutes to Add = 45 equals 14:15 (Total added: 3h 45m).',
    faqs: [
      {
        q: 'Can I enter more than 60 in the minutes field?',
        a: 'Yes, extra minutes convert into hours automatically—adding 90 minutes advances the clock by 1 hour and 30 minutes.',
      },
      {
        q: 'What happens when the added time crosses midnight?',
        a: 'The clock wraps around 24:00 cleanly into early morning hours such as 01:15.',
      },
      {
        q: 'Can I add minutes only by leaving hours at zero?',
        a: 'Yes, setting hours to 0 lets you add pure minute intervals like 45 or 120 minutes.',
      },
    ],
  },

  'dt-time-subtract': {
    seoTitle: `Subtract Hours and Minutes From Time | ${SITE_NAME}`,
    metaDescription:
      'Work backward from any arrival or deadline and subtract hours and minutes from time to find when to leave or set your alarm.',
    introDescription:
      'When you have an early flight, an exam start time, or a live broadcast deadline, working backward lets you subtract hours and minutes from time to pinpoint your exact departure or wake-up alarm. Type your target 24-hour deadline alongside the hours and minutes to step backward. If subtracting crosses 00:00 midnight, the calculator wraps seamlessly into the previous evening so you never miscalculate late-night prep.',
    howToUseSteps: [
      'Type your target deadline or arrival time inside Start Time (HH:MM).',
      'Enter hours to count back in Hours to Subtract and minutes inside Minutes to Subtract.',
      'Read the earlier 24-hour departure or start time.',
    ],
    formulaExplanation:
      'Backward clock calculation converts Start Time into minutes since midnight, subtracts (Hours to Subtract × 60 + Minutes to Subtract), and wraps negative results backward across 1,440 minutes into the previous evening. Formula: Target Mins = [(Start Mins − Hours × 60 − Minutes) mod 1,440 + 1,440] mod 1,440.',
    practicalExample:
      'Subtracting Hours to Subtract = 4 and Minutes to Subtract = 30 from Start Time (HH:MM) = 18:00 returns 13:30 (1:30 PM).',
    faqs: [
      {
        q: 'What happens if subtracting goes earlier than midnight?',
        a: 'The result wraps backward into the prior evening—for example, 02:00 minus 4 hours gives 22:00.',
      },
      {
        q: 'How is backward time subtraction useful for airport travel?',
        a: 'Start with your flight boarding time and subtract baggage drop plus commute time to see the exact minute to leave home.',
      },
      {
        q: 'Do I have to enter both hours and minutes?',
        a: 'No, leave either field at 0 whenever you only want to subtract whole hours or standalone minutes.',
      },
    ],
  },

  'dt-event-countdown': {
    seoTitle: `How Many Days Until My Next Birthday | ${SITE_NAME}`,
    metaDescription:
      'Check how many days until my next birthday or anniversary with exact weekday lookup using a simple month-and-day countdown.',
    introDescription:
      'Looking forward to a birthday, wedding anniversary, or annual celebration starts with checking how many days until my next birthday without typing the year. Simply enter the month and day in MM-DD format. If that date already passed earlier this calendar year, the countdown automatically targets next year’s celebration and tells you both the remaining days and the exact day of the week it lands on.',
    howToUseSteps: [
      'Type your celebration month and day inside Event Date (MM-DD) separated by a hyphen.',
      'Check remaining days and the exact weekday of the upcoming occurrence.',
    ],
    formulaExplanation:
      'Recurring annual countdown evaluates your Event Date (MM-DD) in the current calendar year; if that date already passed earlier this year, it automatically rolls forward to next year before computing remaining days. Formula: Days Left = ceil((Next Event Timestamp − Today Midnight) / 86,400,000 ms).',
    practicalExample:
      'Checking Event Date (MM-DD) = 12-25 on November 28, 2026 shows 27 days remaining (Next occurrence: Fri Dec 25 2026).',
    faqs: [
      {
        q: 'Why does it ask only for month and day without a year?',
        a: 'Birthdays and anniversaries repeat every year, so omitting the year lets the tool roll automatically to the next upcoming date.',
      },
      {
        q: 'Should single-digit months and days have a leading zero?',
        a: 'Yes, format dates like March 9 as 03-09 so the month and day parse cleanly.',
      },
      {
        q: 'What happens if my birthday already happened earlier this year?',
        a: 'The calculator shifts ahead to next year automatically and shows how many days remain until then.',
      },
    ],
  },

  'dt-quarter-year': {
    seoTitle: `Find Which Quarter a Date Falls In | ${SITE_NAME}`,
    metaDescription:
      'Quickly find which quarter a date falls in (Q1, Q2, Q3, or Q4) along with the full month name for accounting, KPIs, and tax filings.',
    introDescription:
      'Accountants tagging quarterly invoices, analysts grouping sales logs, and managers organizing OKRs often need to find which quarter a date falls in without checking a reference chart. Enter any calendar date in YYYY-MM-DD format to see immediately whether it belongs to Q1, Q2, Q3, or Q4 alongside the year and full month name. It works across any historical or future year for clean spreadsheet labeling.',
    howToUseSteps: [
      'Enter any date inside Date (YYYY-MM-DD).',
      'Inspect the assigned calendar quarter (Q1–Q4), year, and full month name.',
    ],
    formulaExplanation:
      'Calendar quarters partition 12 months (zero-indexed 0 through 11) into four equal three-month reporting blocks: Q1 (Jan–Mar), Q2 (Apr–Jun), Q3 (Jul–Sep), and Q4 (Oct–Dec). Formula: Quarter = floor(MonthIndex_0_to_11 / 3) + 1.',
    practicalExample:
      'Entering Date (YYYY-MM-DD) = 2026-08-14 places August (index 7) into Quarter Q3 (2026).',
    faqs: [
      {
        q: 'Which months make up Q1, Q2, Q3, and Q4?',
        a: 'Q1 runs January–March, Q2 runs April–June, Q3 runs July–September, and Q4 runs October–December.',
      },
      {
        q: 'Is a government fiscal year always the same as calendar quarters?',
        a: 'Not always—for instance, Pakistan and several US states start fiscal years on July 1, making July–September Fiscal Q1.',
      },
      {
        q: 'Can I check quarters for dates decades in the past or future?',
        a: 'Yes, any valid YYYY-MM-DD date resolves its calendar quarter and month name instantly.',
      },
    ],
  },

  'dt-days-passed-year': {
    seoTitle: `How Many Days Have Passed This Year | ${SITE_NAME}`,
    metaDescription:
      'See how many days have passed this year, today’s ordinal day number (1–366), percentage completed, and days left until December 31.',
    introDescription:
      'Tracking annual sales quotas, daily reading streaks, or seasonal farm cycles is easier when you check how many days have passed this year on any calendar date. Enter a date to view its ordinal day number out of 365 (or 366 in leap years), the exact percentage of the year already completed, and how many days remain until year-end. Leap-year February lengths are factored in automatically.',
    howToUseSteps: [
      'Enter your target date inside Date (YYYY-MM-DD).',
      'View the exact ordinal day number, percent of year elapsed, and remaining days.',
    ],
    formulaExplanation:
      'Julian ordinal day counting subtracts January 1 of the entered date’s year from the entered date, adds 1 inclusive day, and divides by 365 (or 366 in leap years) to report percentage progress. Formula: Day of Year = floor((Date − Jan 1) / 86,400,000 ms) + 1; Year % = (Day / YearDays) × 100.',
    practicalExample:
      'Inspecting Date (YYYY-MM-DD) = 2026-07-01 returns Day 182 of 365 (49.9%) with 183 days remaining in 2026.',
    faqs: [
      {
        q: 'Why is July 1 Day 182 in most years instead of Day 183?',
        a: 'In a normal 365-day year, January through June total 181 days, making July 1 Day 182; in leap years it becomes Day 183.',
      },
      {
        q: 'What day number does December 31 equal?',
        a: 'December 31 is Day 365 in common years and Day 366 in leap years, with zero days remaining.',
      },
      {
        q: 'Who uses ordinal day numbers from 1 to 366?',
        a: 'Manufacturing lot codes, logistics trackers, meteorology logs, and annual goal planners rely on ordinal day numbers.',
      },
    ],
  },

  'dt-retirement-countdown': {
    seoTitle: `Calculate Years Left Until Retirement | ${SITE_NAME}`,
    metaDescription:
      'Quickly calculate years left until retirement and approximate working days remaining based on your current age and target age.',
    introDescription:
      'Planning pension contributions, savings milestones, or a gradual career transition starts when you calculate years left until retirement in clear numbers. Enter your current age and the age you hope to retire—whether 55, 60, or 65—to see your remaining career years alongside approximate calendar days left. Seeing the timeline in both years and days helps turn a distant goal into an actionable savings plan.',
    howToUseSteps: [
      'Type your current age in years inside Current Age (Years).',
      'Enter your planned retirement milestone age inside Retirement Age.',
      'Review remaining years and approximate total days left to retirement.',
    ],
    formulaExplanation:
      'Retirement horizon subtracts Current Age from Retirement Age and multiplies remaining years by 365 days to express long-term career runway in both years and days. Formula: Years Left = max(0, Retirement Age − Current Age); Approx Days = Years Left × 365.',
    practicalExample:
      'Setting Current Age (Years) = 35 and Retirement Age = 60 computes 25 years remaining (~9,125 days) until retirement.',
    faqs: [
      {
        q: 'What is the typical retirement age in Pakistan and globally?',
        a: 'Government employees in Pakistan usually retire at age 60, while private-sector workers and global pension plans often target 55 to 67.',
      },
      {
        q: 'Can I enter half-year ages like 42.5 or 57.5?',
        a: 'Yes, decimal inputs calculate partial years and scale approximate days remaining accurately.',
      },
      {
        q: 'How do I find the exact calendar year I will retire?',
        a: 'Add the remaining years shown in the result onto the current calendar year.',
      },
    ],
  },

  'dt-hourly-to-annual': {
    seoTitle: `Convert Hourly Wage to Annual Salary | ${SITE_NAME}`,
    metaDescription:
      'Compare job offers and convert hourly wage to annual salary, monthly income, and weekly earnings from your weekly work hours.',
    introDescription:
      'Comparing a freelance hourly contract against a full-time salaried job offer is straightforward once you convert hourly wage to annual salary based on your weekly schedule. Enter your hourly pay rate and regular hours worked per week to see annualized 52-week earnings alongside monthly and weekly income totals. Testing 35, 40, or 45 weekly hours helps you evaluate overtime value and time-off trade-offs clearly.',
    howToUseSteps: [
      'Enter your per-hour pay inside Hourly Rate.',
      'Type regular weekly worked hours inside Hours per Week.',
      'Check annualized 52-week salary alongside monthly and weekly income figures.',
    ],
    formulaExplanation:
      'Annualized time-wage conversion multiplies Hourly Rate by Hours per Week for weekly gross income, multiplies by 52 weeks for annual salary, and divides annual pay by 12 for average monthly earnings. Formula: Annual Salary = Hourly Rate × Hours per Week × 52; Monthly = Annual / 12.',
    practicalExample:
      'Earning Hourly Rate = 900 across Hours per Week = 40 hours equals Weekly: 36,000, Monthly: 156,000, and 1,872,000 / year.',
    faqs: [
      {
        q: 'How many working hours are in a standard 40-hour year?',
        a: 'Multiplying 40 hours by 52 weeks gives 2,080 paid hours per year.',
      },
      {
        q: 'How should I adjust if I take unpaid vacation weeks?',
        a: 'If you work 48 weeks instead of 52, multiply the weekly earnings figure by 48 rather than 52.',
      },
      {
        q: 'Does this show gross income or take-home pay after taxes?',
        a: 'It calculates gross pre-tax earnings before income tax, insurance, or pension deductions.',
      },
    ],
  },

  'dt-century-calc': {
    seoTitle: `Find Which Century Any Year Belongs To | ${SITE_NAME}`,
    metaDescription:
      'Check history dates and find which century any year belongs to along with its millennium using exact calendar era math.',
    introDescription:
      'Students reading history timelines or researchers cataloging archives frequently need to find which century any year belongs to without mixing up the 1900s and the 20th century. Enter any positive AD/CE year to see both its century and its millennium right away. Because calendar counting started at Year 1 rather than Year 0, century numbers sit one ahead of the leading digits except on exact hundred-year endings.',
    howToUseSteps: [
      'Type any positive AD/CE calendar year inside the Year input.',
      'Read its corresponding Century and Millennium immediately.',
    ],
    formulaExplanation:
      'Because historical numbering begins at Year 1 CE rather than Year 0, centuries span years xx01–(x+1)00 and millennia span 1,000-year blocks starting at 0001; dividing Year by 100 or 1,000 and rounding upward gives exact era indices. Formula: Century = ceil(Year / 100); Millennium = ceil(Year / 1000).',
    practicalExample:
      'Entering Year = 2026 rounds ceil(2026 / 100) = 21 and ceil(2026 / 1000) = 3, placing 2026 in the 21st Century (21th display) and 3rd Millennium.',
    faqs: [
      {
        q: 'Why is 2026 in the 21st century instead of the 20th?',
        a: 'The 1st century ran from year 1 to 100, pushing every subsequent century one number ahead of its first two digits.',
      },
      {
        q: 'Did the 3rd millennium begin in 2000 or 2001?',
        a: 'Strictly speaking, year 2000 closed the 2nd millennium and January 1, 2001 began the 3rd millennium.',
      },
      {
        q: 'What century does the year 1900 belong to?',
        a: 'Dividing 1900 by 100 gives 19 evenly, making 1900 the final year of the 19th century.',
      },
    ],
  },

  'dt-stopwatch-split': {
    seoTitle: `Calculate Average Lap Split Time Online | ${SITE_NAME}`,
    metaDescription:
      'Track runners, swimmers, and cycling intervals—calculate average lap split time online in clean minutes and seconds per lap.',
    introDescription:
      'Runners pacing a 5K on a track, swimmers logging pool lengths, and coaches timing training drills often need to calculate average lap split time online after finishing a timed workout. Enter your total session duration in minutes and the number of completed laps. The tool divides total time evenly across every lap and formats your pace cleanly in minutes and seconds per circuit.',
    howToUseSteps: [
      'Enter total session time in minutes inside Total Duration (Minutes).',
      'Type how many circuits or intervals finished inside Number of Laps Completed.',
      'Check average split time formatted cleanly in minutes and seconds per lap.',
    ],
    formulaExplanation:
      'Lap pace averaging divides Total Duration (Minutes) by Number of Laps Completed to obtain decimal minutes per lap, converting the fractional part into integer seconds via × 60. Formula: Avg Lap Mins = Total Duration / Laps; Lap Secs = round((Avg Lap Mins − floor(Avg Lap Mins)) × 60).',
    practicalExample:
      'Completing Number of Laps Completed = 8 in Total Duration (Minutes) = 36 calculates 36 / 8 = 4.5 min, returning 4 min 30 sec per lap.',
    faqs: [
      {
        q: 'How can I enter extra seconds in the total duration?',
        a: 'Convert remaining seconds into a decimal by dividing by 60—for instance, 18 minutes and 30 seconds enters as 18.5.',
      },
      {
        q: 'How do I estimate 1 km pace from 400-meter track laps?',
        a: 'Multiply your average 400-meter lap split time by 2.5 to get your pace per kilometer.',
      },
      {
        q: 'Does this work for cycling, rowing, or motorsport laps too?',
        a: 'Yes, average lap split math works identically for any repeated circuit, pool length, or timed interval.',
      },
    ],
  },

  'dt-dst-checker': {
    seoTitle: `Check if Daylight Saving Time Is Active | ${SITE_NAME}`,
    metaDescription:
      'Avoid missed overseas calls—check if daylight saving time is active for any month 1–12 across Europe and North America.',
    introDescription:
      'Seasonal clock shifts in North America and Europe can unexpectedly change call times by an hour if your own country stays on standard time year-round. Use this quick lookup to check if daylight saving time is active for any numeric month from 1 through 12. Entering a month tells you immediately whether Northern Hemisphere spring/summer daylight saving rules typically apply so international schedules stay aligned.',
    howToUseSteps: [
      'Type numeric month index from 1 (January) to 12 (December) inside Month (1 = Jan, 12 = Dec).',
      'View whether Northern Hemisphere spring/summer Daylight Saving Time is typically active.',
    ],
    formulaExplanation:
      'Northern Hemisphere Daylight Saving Time generally shifts clocks forward 1 hour from March (month 3) through October (month 10), returning to standard winter time from November through February. Formula: DST Likely Active = (Month ≥ 3 && Month ≤ 10).',
    practicalExample:
      'Entering Month (1 = Jan, 12 = Dec) = 7 (July) returns Likely Active (Spring / Summer DST) across North America and Europe.',
    faqs: [
      {
        q: 'Which countries do not observe Daylight Saving Time?',
        a: 'Pakistan, the UAE, Saudi Arabia, India, Japan, and most countries near the equator keep fixed clocks all year.',
      },
      {
        q: 'Why do the US and Europe switch clocks on different Sundays?',
        a: 'The US runs DST from the second Sunday of March to the first Sunday of November, while Europe uses the last Sundays of March and October.',
      },
      {
        q: 'Is Daylight Saving Time reversed in Australia?',
        a: 'Yes, Southern Hemisphere regions like Australia and New Zealand observe DST during their summer months from October to April.',
      },
    ],
  },

  'dt-work-hours-year': {
    seoTitle: `Calculate Total Working Hours in a Year | ${SITE_NAME}`,
    metaDescription:
      'Plan budgets and staffing—calculate total working hours in a year after subtracting weekly Sundays and annual public holidays.',
    introDescription:
      'HR planners, agency owners, and project managers estimating annual labor capacity need to calculate total working hours in a year rather than relying on rough guesses. Enter your daily shift length and expected annual public holidays or paid leave days. Starting from 365 days minus 52 weekly Sundays and your leave allowance, the tool gives you exact yearly working hours and net working days.',
    howToUseSteps: [
      'Type normal daily shift duration inside Working Hours per Day.',
      'Enter expected annual leave and public holidays inside Public Holidays / Leaves per Year.',
      'Inspect total working hours per year alongside net working days.',
    ],
    formulaExplanation:
      'Annual work capacity starts from 365 calendar days, subtracts 52 weekly Sundays plus Public Holidays / Leaves per Year to determine net working days, and multiplies by Working Hours per Day. Formula: Annual Hours = max(0, 365 − 52 − Holidays) × Working Hours per Day.',
    practicalExample:
      'Working Working Hours per Day = 8 with Public Holidays / Leaves per Year = 15 yields 298 working days × 8 = 2,384 working hours / year.',
    faqs: [
      {
        q: 'How do I model a five-day week with Saturdays off too?',
        a: 'Add 52 Saturdays onto your holidays and paid leaves—for instance, 52 + 15 = 67 days off per year.',
      },
      {
        q: 'Can I enter 7.5 hours for an 8-hour shift with an unpaid lunch break?',
        a: 'Yes, decimal shift lengths like 7.5 hours compute exact yearly totals cleanly.',
      },
      {
        q: 'How is annual working hours used in hourly billing rates?',
        a: 'Dividing annual salary or overhead costs by total yearly working hours helps agencies set sustainable client billing rates.',
      },
    ],
  },

  'dt-seconds-to-time': {
    seoTitle: `Convert Seconds to Hours Minutes Seconds | ${SITE_NAME}`,
    metaDescription:
      'Turn raw stopwatch, video, or server uptime counts into clean HH:MM:SS clocks—convert seconds to hours minutes seconds online.',
    introDescription:
      'Audio editors, video producers, and developers reading duration logs frequently need to convert seconds to hours minutes seconds for readable schedules and timecodes. Type any raw count of seconds—whether a few hundred seconds for a podcast clip or over 86,400 seconds for server uptime—and get an instant HH:MM:SS display plus the full hours, minutes, and remaining seconds breakdown without doing base-60 division by hand.',
    howToUseSteps: [
      'Enter total raw seconds inside the Total Seconds field.',
      'View the formatted HH:MM:SS string and full hours, minutes, and seconds breakdown.',
    ],
    formulaExplanation:
      'Base-60 time normalization extracts whole hours by dividing Total Seconds by 3,600, computes remaining minutes by dividing the remainder by 60, and leaves modulo-60 seconds padded to two digits each. Formula: Hours = floor(S / 3,600); Mins = floor((S % 3,600) / 60); Secs = floor(S % 60).',
    practicalExample:
      'Converting Total Seconds = 10540 splits into 2 × 3,600 (7,200) + 55 × 60 (3,300) + 40 = 02:55:40 (2 hours, 55 minutes, 40 seconds).',
    faqs: [
      {
        q: 'How many seconds are in one hour and one full day?',
        a: 'There are 3,600 seconds in 1 hour (60 × 60) and 86,400 seconds in a 24-hour day.',
      },
      {
        q: 'What happens if I enter more than 86,400 seconds?',
        a: 'Hours keep counting past 24 cleanly, so 90,000 seconds displays as 25:00:00.',
      },
      {
        q: 'How does 10,000 seconds look in HH:MM:SS format?',
        a: '10,000 seconds converts to 02:46:40 (2 hours, 46 minutes, and 40 seconds).',
      },
    ],
  },

  'dt-weeks-diff': {
    seoTitle: `Convert Number of Days to Weeks and Days | ${SITE_NAME}`,
    metaDescription:
      'Quickly convert number of days to weeks and days plus total hours for pregnancy timelines, notice periods, and project sprints.',
    introDescription:
      'Whether you are reading a 90-day probation clause, tracking a 40-week maternity milestone, or planning two-week software sprints, it helps to convert number of days to weeks and days immediately. Type any day count to see full 7-day weeks, leftover single days, and equivalent total hours. It turns awkward raw numbers like 100 or 280 days into clear calendar timelines you can plan around.',
    howToUseSteps: [
      'Type any integer day count inside Total Number of Days.',
      'Read equivalent whole weeks, remainder days, and total hours.',
    ],
    formulaExplanation:
      'Week-and-day conversion divides Total Number of Days by 7 via integer floor division to count full 7-day weeks, takes modulo 7 for leftover days, and multiplies Total Number of Days by 24 for total hours. Formula: Weeks = floor(Days / 7); Remainder Days = Days % 7; Hours = Days × 24.',
    practicalExample:
      'Entering Total Number of Days = 100 divides 100 by 7 to output 14 Weeks and 2 Days (Total hours: 2,400 hours).',
    faqs: [
      {
        q: 'How many weeks and days are in a 90-day notice period?',
        a: '90 days equals 12 full weeks and 6 remaining days, just one day short of 13 weeks.',
      },
      {
        q: 'Why do doctors measure pregnancy in weeks and days?',
        a: 'Weekly milestones track fetal growth more precisely than uneven 28- to 31-day calendar months.',
      },
      {
        q: 'How many total hours are in 14 days?',
        a: '14 days equals 2 weeks and 0 days, totaling 336 hours.',
      },
    ],
  },

  'dt-unix-epoch-convert': {
    seoTitle: `Convert Unix Epoch Seconds to UTC Date | ${SITE_NAME}`,
    metaDescription:
      'Decode API timestamps and logs—convert Unix epoch seconds to UTC date and GMT time instantly with zero manual timezone math.',
    introDescription:
      'Inspecting server error logs, webhook payloads, or JWT tokens often leaves you staring at a 10-digit integer until you convert Unix epoch seconds to UTC date in plain calendar format. Paste any POSIX epoch integer to decode the exact weekday, calendar date, month, year, and GMT clock time. Because Unix time counts forward from January 1, 1970, decoding it online eliminates timezone conversion bugs.',
    howToUseSteps: [
      'Paste or type a Unix epoch integer in seconds inside Unix Epoch Timestamp (Seconds).',
      'Read the decoded UTC day, date, month, year, and GMT clock time.',
    ],
    formulaExplanation:
      'Epoch decoding multiplies Unix Epoch Timestamp (Seconds) by 1,000 to obtain JavaScript epoch milliseconds and resolves the exact UTC date/time relative to 1970-01-01T00:00:00Z. Formula: UTC Date = new Date(Unix Epoch Seconds × 1,000).',
    practicalExample:
      'Decoding Unix Epoch Timestamp (Seconds) = 1735689600 outputs Wed, 01 Jan 2025 00:00:00 GMT.',
    faqs: [
      {
        q: 'What should I do if my timestamp has 13 digits instead of 10?',
        a: 'A 13-digit number is in milliseconds—remove the last three digits before converting it as epoch seconds.',
      },
      {
        q: 'Why is the decoded time shown in GMT/UTC?',
        a: 'Unix epoch time uses UTC worldwide so logs from servers in different regions stay consistent.',
      },
      {
        q: 'What is the Year 2038 problem with 32-bit epoch integers?',
        a: 'Signed 32-bit Unix timestamps overflow on January 19, 2038, though modern 64-bit systems decode centuries further.',
      },
    ],
  },

  'dt-zodiac-age': {
    seoTitle: `How to Calculate Age in Days Online Free | ${SITE_NAME}`,
    metaDescription:
      'Discover how to calculate age in days online free from your age in years, seeing approximate months and total hours alive.',
    introDescription:
      'If you only know someone’s age in years and want a fast way to see how to calculate age in days online free, this converter gives you total days, approximate months, and hours alive in one step. Type any whole or decimal age—like 25 years or 2.5 years—and the calculation factors in a 365.25-day leap-year average automatically. It is great for quick birthday trivia, classroom math, and milestone cards.',
    howToUseSteps: [
      'Enter your age in years inside the Age in Years box.',
      'Check total days lived, approximate months, and cumulative hours alive.',
    ],
    formulaExplanation:
      'Year-to-day age estimation multiplies Age in Years by 365.25 (accounting for one leap day every four years), multiplies years by 12 for months, and multiplies rounded days by 24 for total hours alive. Formula: Total Days = round(Age Years × 365.25); Months = round(Age Years × 12); Hours = Total Days × 24.',
    practicalExample:
      'Entering Age in Years = 30 computes 10,958 Days (~360 Months) and Total hours alive: ~262,992 hours.',
    faqs: [
      {
        q: 'Why does it multiply years by 365.25 instead of 365?',
        a: 'Using 365.25 accounts for the extra February 29 day added every four years across your lifespan.',
      },
      {
        q: 'Can I enter decimal ages like 1.5 or 2.5 years?',
        a: 'Yes, decimals work cleanly—for example, 2.5 years equals about 913 days and 30 months.',
      },
      {
        q: 'When should I use the Date of Birth Age Calculator instead?',
        a: 'Use the Date of Birth Age Calculator when you know the exact birth date and want a calendar-exact day count.',
      },
    ],
  },
};
