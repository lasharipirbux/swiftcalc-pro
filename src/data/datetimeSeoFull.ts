import { SITE_NAME } from '../config/site';

export interface DateTimeCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const datetimeSeoFullMap: Record<string, DateTimeCalculatorSeoEntry> = {
  'dt-age-calc': {
    seoTitle: `Free Age Calculator – Exact Years, Months & Days | ${SITE_NAME}`,
    metaDescription:
      'Compute exact chronological age in years, months, days, and total days lived from any birth date using our free Age Calculator.',
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
        q: 'How does the Age Calculator treat leap-year birthdays on February 29?',
        a: 'In non-leap years, calendar borrowing accounts for February having 28 days so your cumulative days lived stays exact.',
      },
      {
        q: 'Why must Date of Birth (YYYY-MM-DD) follow year-month-day order?',
        a: 'ISO ordering avoids swapping day and month on ambiguous dates such as 05-06 versus 06-05.',
      },
      {
        q: 'Does Total Days Lived include every February 29 since birth?',
        a: 'Yes—dividing exact millisecond timestamps by 86,400,000 ms counts every leap day occurring between birth and today.',
      },
    ],
  },

  'dt-date-diff': {
    seoTitle: `Free Date Difference Calculator – Days, Weeks & Months | ${SITE_NAME}`,
    metaDescription:
      'Measure exact days, weeks, months, and calendar years between two dates with our free Date Difference Calculator.',
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
        q: 'Does 198 days include both March 1 and September 15 inclusively?',
        a: 'It counts net elapsed days (End minus Start); add 1 day if your rental lease or event includes both endpoints.',
      },
      {
        q: 'Why is decimal Months based on 30.436875 days?',
        a: 'Dividing the 365.2425-day Gregorian leap-cycle average year by 12 gives 30.436875 days per average month.',
      },
      {
        q: 'What happens if Start Date (YYYY-MM-DD) is later than End Date (YYYY-MM-DD)?',
        a: 'Absolute timestamp subtraction returns a positive day count regardless of which date comes first.',
      },
    ],
  },

  'dt-add-sub-days': {
    seoTitle: `Free Add or Subtract Days from a Date Calculator – Future Date | ${SITE_NAME}`,
    metaDescription:
      'Shift any calendar date forward or backward by an exact day count using our free Add or Subtract Days from a Date Calculator.',
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
        a: 'Because May contains 31 days, shifting exactly 30 calendar days advances to the final day of May rather than crossing into June.',
      },
      {
        q: 'Does Add or Subtract Days skip Saturdays or Sundays?',
        a: 'No—every consecutive calendar day counts; switch to Add Business Days when weekends must be excluded.',
      },
      {
        q: 'Can Number of Days exceed 365 to look years ahead or back?',
        a: 'Yes—multi-hundred or multi-thousand day offsets cross multiple leap years automatically.',
      },
    ],
  },

  'dt-working-days': {
    seoTitle: `Free Working Days Calculator – Count Workdays Minus Sundays | ${SITE_NAME}`,
    metaDescription:
      'Count working days between two dates with Sundays automatically excluded using our free Working Days Calculator.',
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
        q: 'Are both Start Date and End Date counted when neither falls on Sunday?',
        a: 'Yes—this range loop evaluates both endpoints inclusively unless one lands on a Sunday.',
      },
      {
        q: 'Why does Working Days exclude only Sundays instead of Saturdays too?',
        a: 'Many schools, banks, retail teams, and factories in Pakistan and South Asia operate six days a week with Sunday off.',
      },
      {
        q: 'How do I account for Eid or national gazetted holidays?',
        a: 'Subtract the number of weekday public holidays falling inside your chosen interval from the returned working day total.',
      },
    ],
  },

  'dt-countdown': {
    seoTitle: `Free Countdown to a Date Calculator – Days, Hours & Minutes | ${SITE_NAME}`,
    metaDescription:
      'Calculate remaining days, hours, and minutes until any future exam, launch, or holiday using our free Countdown to a Date Calculator.',
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
        q: 'What displays if Target Date & Time (YYYY-MM-DD) has already passed?',
        a: 'Once the current clock moves past your entered target timestamp, the calculator reports that the target date has passed.',
      },
      {
        q: 'Can Target Date & Time accept a clock time after the date?',
        a: 'Yes—ISO strings like 2026-12-31T18:30 target an exact evening hour rather than midnight.',
      },
      {
        q: 'Does the remaining hour figure adjust to my device timezone?',
        a: 'Plain YYYY-MM-DD strings parse as UTC midnight, so differences against your local device clock reflect your UTC offset.',
      },
    ],
  },

  'dt-time-duration': {
    seoTitle: `Free Time Duration Calculator – Elapsed Hours & Minutes | ${SITE_NAME}`,
    metaDescription:
      'Find exact elapsed hours, minutes, and total minutes between two 24-hour clock times using our free Time Duration Calculator.',
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
        q: 'Does Time Duration handle overnight shifts like 22:00 to 06:30?',
        a: 'Yes—whenever End Time is earlier than Start Time, 24 hours (1,440 minutes) are added automatically so 22:00 to 06:30 equals 8 hours and 30 minutes.',
      },
      {
        q: 'How should afternoon times like 5:15 PM be typed into End Time (HH:MM 24hr)?',
        a: 'Add 12 to afternoon hours after 12:59 PM—so 5:15 PM enters as 17:15 and midnight enters as 00:00.',
      },
      {
        q: 'How do I convert 8 hours and 45 minutes into decimal hours for payroll?',
        a: 'Divide Total Minutes (525) by 60 to obtain 8.75 decimal billable hours.',
      },
    ],
  },

  'dt-timezone-conv': {
    seoTitle: `Free Time Zone Converter Calculator – PKT, GST, AST, GMT & EST | ${SITE_NAME}`,
    metaDescription:
      'Convert clock times across PKT, Dubai GST, Riyadh AST, London GMT/BST, and New York EST/EDT using our free Time Zone Converter Calculator.',
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
        q: 'Why does converting 23:00 PKT to EST show 13:00 while 02:00 PKT shows Previous Day?',
        a: 'When subtracting the time-zone offset pushes minutes below 00:00 midnight, the destination clock sits on the previous calendar day.',
      },
      {
        q: 'Do Pakistan (PKT), Dubai (GST), and Saudi Arabia (AST) ever change for Daylight Saving?',
        a: 'No—PKT (UTC+5), GST (UTC+4), and AST (UTC+3) maintain fixed year-round UTC offsets.',
      },
      {
        q: 'When London or New York runs summer DST, how does the difference from PKT shift?',
        a: 'During March–October/November DST, London (BST UTC+1) sits 4 hours behind PKT and New York (EDT UTC−4) sits 9 hours behind PKT.',
      },
    ],
  },

  'dt-week-day-finder': {
    seoTitle: `Free Week Number and Day of Week Finder Calculator – ISO Week | ${SITE_NAME}`,
    metaDescription:
      'Identify the weekday name and ISO-8601 week number (1–53) for any calendar date using our free Week Number and Day of Week Finder Calculator.',
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
        q: 'Why can January 1 sometimes belong to Week 52 or Week 53 of the previous year?',
        a: 'Under ISO-8601, if January 1 lands on Friday, Saturday, or Sunday, its week contains fewer than 4 days of the new year and stays in the prior year’s final week.',
      },
      {
        q: 'Can you look up the weekday of your birth date or a date 50 years ahead?',
        a: 'Yes—any valid Gregorian YYYY-MM-DD date from past centuries to future decades resolves immediately.',
      },
      {
        q: 'Which weekday starts each new ISO week?',
        a: 'ISO-8601 weeks run Monday (day 1) through Sunday (day 7).',
      },
    ],
  },

  'dt-age-detailed': {
    seoTitle: `Free Age in Months, Weeks & Hours Calculator – Life Stats | ${SITE_NAME}`,
    metaDescription:
      'Convert your date of birth into total months, weeks, and hours lived using our free Age in Months, Weeks & Hours Calculator.',
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
        q: 'Why do total weeks equal roughly 52.14 times your age in years?',
        a: 'Because a calendar year holds 365 days (or 366 in leap years), dividing 365.2425 by 7 yields ~52.177 weeks per year.',
      },
      {
        q: 'Is Total Hours Lived exact to the birth hour?',
        a: 'Since Date of Birth (YYYY-MM-DD) starts at midnight UTC, total hours stay accurate within ±24 hours of your exact birth minute.',
      },
      {
        q: 'How is age in months helpful for infant and pediatric tracking?',
        a: 'Pediatric growth charts, school cutoffs, and vaccination schedules track milestones in total months rather than rounded years.',
      },
    ],
  },

  'dt-leap-year': {
    seoTitle: `Free Leap Year Checker Calculator – Verify 366-Day Years | ${SITE_NAME}`,
    metaDescription:
      'Verify instantly whether any calendar year is a 366-day leap year or 365-day common year using our free Leap Year Checker Calculator.',
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
        q: 'Why was 2000 a leap year while 1900 and 2100 are not?',
        a: 'Century years divisible by 100 skip February 29 unless they also divide evenly by 400—passing 2000 but failing 1900 and 2100.',
      },
      {
        q: 'Without leap years, how quickly would calendar seasons drift?',
        a: 'Calendar dates would shift nearly 24 days every century, moving winter months gradually into summer over time.',
      },
      {
        q: 'Does Year accept far-future years like 2400 or historical years like 1600?',
        a: 'Yes—any positive integer year evaluates the exact Gregorian divisibility rules instantly.',
      },
    ],
  },

  'dt-add-business-days': {
    seoTitle: `Free Add Business Days to a Date Calculator – Skip Weekends | ${SITE_NAME}`,
    metaDescription:
      'Find the exact completion date after adding Monday–Friday business days using our free Add Business Days to a Date Calculator.',
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
        q: 'What happens if Start Date (YYYY-MM-DD) falls on a Saturday or Sunday?',
        a: 'Stepping starts advancing forward onto Monday as the first counted business day.',
      },
      {
        q: 'Why does adding 15 business days span 21 calendar days?',
        a: 'Every 5 weekdays pair with a 2-day weekend, so 15 working days stretch across three full weeks (21 total calendar days).',
      },
      {
        q: 'Are national bank holidays automatically skipped?',
        a: 'Only Saturdays and Sundays are excluded automatically; add one extra day to Business Days to Add for each public holiday in the window.',
      },
    ],
  },

  'dt-unix-timestamp': {
    seoTitle: `Free Unix Timestamp Converter Calculator – Date to Epoch Seconds | ${SITE_NAME}`,
    metaDescription:
      'Convert any calendar date into Unix epoch seconds, milliseconds, and UTC timestamp string using our free Unix Timestamp Converter Calculator.',
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
        q: 'Why do modern APIs return 13-digit numbers while Unix seconds have 10 digits?',
        a: 'Languages like JavaScript and Java count milliseconds (1,000× larger, 13 digits), whereas POSIX C, Python, and JWT exp claims use 10-digit seconds.',
      },
      {
        q: 'Can I include clock time after the date in Date & Time (YYYY-MM-DD)?',
        a: 'Yes—append T14:30:00Z (for instance 2026-06-01T14:30:00Z) to encode exact UTC hours, minutes, and seconds.',
      },
      {
        q: 'What does a negative Unix timestamp represent?',
        a: 'Any date prior to January 1, 1970 resolves to negative seconds before the Unix epoch.',
      },
    ],
  },

  'dt-meeting-planner': {
    seoTitle: `Free Meeting Time Planner Across Cities Calculator – PKT Sync | ${SITE_NAME}`,
    metaDescription:
      'Compare Islamabad PKT hours side by side with Dubai, London, and New York clocks using our free Meeting Time Planner Across Cities Calculator.',
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
        q: 'Which Islamabad PKT hours fit Dubai, London, and New York business hours together?',
        a: 'Between 18:00 and 20:00 PKT puts Dubai at 17:00–19:00, London at 13:00–15:00, and New York right inside 08:00–10:00 morning hours.',
      },
      {
        q: 'How should I read 18 or 21 in Islamabad Time (PKT Hour 0-23)?',
        a: 'Values 13–23 map to afternoon/evening PM hours (subtract 12: 18 equals 6:00 PM, 21 equals 9:00 PM), while 0 equals midnight.',
      },
      {
        q: 'How do London and New York hours change during summer DST?',
        a: 'During March–October/November daylight saving months, London shifts 1 hour closer (+1 hr) and New York shifts 1 hour closer (+1 hr) to Islamabad.',
      },
    ],
  },

  'dt-time-add': {
    seoTitle: `Free Time Addition Calculator – Add Hours & Minutes Easily | ${SITE_NAME}`,
    metaDescription:
      'Add hours and minutes onto any 24-hour clock time with automatic midnight wrap using our free Time Addition Calculator.',
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
        q: 'What if Minutes to Add exceeds 60, such as 90 minutes?',
        a: 'Extra minutes carry smoothly into hours automatically—entering 1 hour and 90 minutes advances the clock by 2 hours and 30 minutes.',
      },
      {
        q: 'Does adding past 23:59 flag when the result crosses midnight?',
        a: 'Yes—whenever total minutes reach or pass 1,440, the output appends (Next Day) alongside the wrapped 24-hour clock time.',
      },
      {
        q: 'Where is Time Addition most helpful day to day?',
        a: 'Flight arrival planning, recipe baking timers, lab incubation windows, and shift handovers all rely on adding exact hours and minutes.',
      },
    ],
  },

  'dt-time-subtract': {
    seoTitle: `Free Time Subtraction Calculator – Subtract Hours & Minutes | ${SITE_NAME}`,
    metaDescription:
      'Subtract hours and minutes from any 24-hour clock time to plan departure or wake-up times using our free Time Subtraction Calculator.',
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
        q: 'What happens if subtracting pushes the clock earlier than 00:00 midnight?',
        a: 'The clock wraps cleanly into the prior evening (for example, 02:00 minus 4 hours gives 22:00 Previous Day).',
      },
      {
        q: 'How can travelers use Time Subtraction before international flights?',
        a: 'Enter your boarding time in Start Time (HH:MM) and subtract airport check-in plus commute time to see the exact minute to leave home.',
      },
      {
        q: 'Can I enter 0 in Hours to Subtract and only subtract minutes?',
        a: 'Yes—setting Hours to Subtract = 0 and Minutes to Subtract = 45 shifts back three-quarters of an hour cleanly.',
      },
    ],
  },

  'dt-event-countdown': {
    seoTitle: `Free Days Until Birthday / Event Calculator – Annual Countdown | ${SITE_NAME}`,
    metaDescription:
      'Count remaining days until your next birthday, anniversary, or recurring annual event using our free Days Until Birthday / Event Calculator.',
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
        q: 'Why does Event Date (MM-DD) omit the year?',
        a: 'Because birthdays and anniversaries repeat annually, entering just month and day lets the calculator find the next upcoming date automatically.',
      },
      {
        q: 'What displays if Event Date (MM-DD) matches today’s date?',
        a: 'It reports 0 days remaining because the celebration falls on today itself.',
      },
      {
        q: 'Should single-digit months or days include leading zeros like 03-09?',
        a: 'Yes—two-digit MM-DD formatting (03-09 for March 9) parses cleanly every time.',
      },
    ],
  },

  'dt-quarter-year': {
    seoTitle: `Free Quarter of the Year Finder Calculator – Q1 to Q4 Lookup | ${SITE_NAME}`,
    metaDescription:
      'Identify the calendar quarter (Q1, Q2, Q3, or Q4) and month name for any date using our free Quarter of the Year Finder Calculator.',
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
        q: 'Which months belong inside Q1, Q2, Q3, and Q4?',
        a: 'Q1 covers January–March, Q2 covers April–June, Q3 covers July–September, and Q4 covers October–December.',
      },
      {
        q: 'Does a company or Pakistan fiscal year match Q1–Q4?',
        a: 'Many corporations follow standard Jan–Dec Q1–Q4, whereas Pakistan’s government fiscal year starts July 1 (making July–September Fiscal Q1).',
      },
      {
        q: 'Can Date (YYYY-MM-DD) look up quarters for past or future years?',
        a: 'Yes—enter any year in YYYY-MM-DD format to tag historical sales logs or future project milestones.',
      },
    ],
  },

  'dt-days-passed-year': {
    seoTitle: `Free Days Passed in Current Year Calculator – Day Number & % | ${SITE_NAME}`,
    metaDescription:
      'Find ordinal day of the year (1–366), year completion percentage, and days remaining with our free Days Passed in Current Year Calculator.',
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
        q: 'Why does July 1 equal Day 182 in 2026 instead of 183?',
        a: 'Because 2026 is a common 365-day year (February has 28 days), Jan–Jun total 181 days, making July 1 Day 182; in leap years it becomes Day 183.',
      },
      {
        q: 'What day number does December 31 equal?',
        a: 'December 31 evaluates to Day 365 in standard years and Day 366 in leap years (100.0% elapsed, 0 days remaining).',
      },
      {
        q: 'Where do teams use ordinal Day of Year numbers?',
        a: 'Logistics batch codes, agriculture calendars, seasonal retail pacing, and ISO annual quota trackers rely on Day 1–366 pacing.',
      },
    ],
  },

  'dt-retirement-countdown': {
    seoTitle: `Free Retirement Countdown Calculator – Years & Days Left | ${SITE_NAME}`,
    metaDescription:
      'Calculate remaining working years and approximate days until your target retirement age using our free Retirement Countdown Calculator.',
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
        q: 'What is the standard government retirement age in Pakistan?',
        a: 'Most civil and public-sector employees in Pakistan retire at age 60, while private-sector professionals often plan anywhere from 55 to 65.',
      },
      {
        q: 'Can Current Age (Years) or Retirement Age accept halves like 57.5?',
        a: 'Yes—decimals calculate fractional years and scale approximate days left proportionally.',
      },
      {
        q: 'How can I turn remaining years into an exact future calendar year?',
        a: 'Add Years Left directly onto the current calendar year (for example, 2026 + 25 = 2051).',
      },
    ],
  },

  'dt-hourly-to-annual': {
    seoTitle: `Free Hourly Wage to Annual Salary (Time-based) Calculator | ${SITE_NAME}`,
    metaDescription:
      'Convert hourly pay and weekly working hours into annual, monthly, and weekly earnings using our free Hourly Wage to Annual Salary (Time-based) Calculator.',
    howToUseSteps: [
      'Enter your per-hour pay inside Hourly Rate (PKR).',
      'Type regular weekly worked hours inside Hours per Week.',
      'Check annualized 52-week salary alongside monthly and weekly income figures.',
    ],
    formulaExplanation:
      'Annualized time-wage conversion multiplies Hourly Rate by Hours per Week for weekly gross income, multiplies by 52 weeks for annual salary, and divides annual pay by 12 for average monthly earnings. Formula: Annual Salary = Hourly Rate × Hours per Week × 52; Monthly = Annual / 12.',
    practicalExample:
      'Earning Hourly Rate (PKR) = 900 across Hours per Week = 40 hours equals Weekly: PKR 36,000, Monthly: PKR 156,000, and PKR 1,872,000 / year.',
    faqs: [
      {
        q: 'How many total annual hours does a 40 Hours per Week schedule represent?',
        a: '40 hours × 52 weeks equals 2,080 paid work hours per year when paid time off is included.',
      },
      {
        q: 'What if I take 4 unpaid weeks off per year as a freelancer?',
        a: 'Reduce Annual Salary by 4/52 (roughly 7.7%), or multiply Hourly Rate × Hours per Week × 48 weeks.',
      },
      {
        q: 'Does this converter subtract income tax or EOBI deductions?',
        a: 'No—outputs represent gross pre-tax earnings before statutory payroll taxes.',
      },
    ],
  },

  'dt-century-calc': {
    seoTitle: `Free Century & Millennium Calculator – Find Any Year's Era | ${SITE_NAME}`,
    metaDescription:
      'Determine the exact century and millennium of any historical or future year using our free Century & Millennium Calculator.',
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
        q: 'Why is the year 2026 in the 21st Century instead of the 20th Century?',
        a: 'The 1st Century ran from years 1 to 100, so every century sits one number ahead of its leading two digits (2001–2100 is the 21st Century).',
      },
      {
        q: 'Did the 3rd Millennium start in 2000 or 2001?',
        a: 'Strict calendar math places year 2000 as the final year of the 2nd Millennium (ceil(2000/1000) = 2) and 2001 as the start of the 3rd Millennium.',
      },
      {
        q: 'Which century does the year 1900 belong to?',
        a: '1900 divided by 100 equals 19 exactly, making 1900 the closing year of the 19th Century.',
      },
    ],
  },

  'dt-stopwatch-split': {
    seoTitle: `Free Stopwatch Lap Split Time Calculator – Average Pace | ${SITE_NAME}`,
    metaDescription:
      'Divide total workout or race minutes by completed laps to find exact average split time using our free Stopwatch Lap Split Time Calculator.',
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
        q: 'How can runners convert 400m track splits into 1 km pace?',
        a: 'Multiply a 400m average lap time by 2.5 (since 2.5 × 400m = 1,000m) to estimate per-kilometer race pace.',
      },
      {
        q: 'Can Total Duration (Minutes) include decimals like 18.5 for 18m 30s?',
        a: 'Yes—convert extra seconds by dividing by 60 (for instance, 30s = 0.50 min, 15s = 0.25 min) before entering Total Duration (Minutes).',
      },
      {
        q: 'Why must Number of Laps Completed stay greater than zero?',
        a: 'Dividing total workout minutes by zero laps is mathematically undefined.',
      },
    ],
  },

  'dt-dst-checker': {
    seoTitle: `Free Daylight Saving Time (DST) Detector Calculator – Season Check | ${SITE_NAME}`,
    metaDescription:
      'Check whether spring/summer Daylight Saving Time is active for any month 1–12 using our free Daylight Saving Time (DST) Detector Calculator.',
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
        q: 'Does Pakistan or the Middle East observe Daylight Saving Time?',
        a: 'No—Pakistan (PKT), UAE, and Saudi Arabia keep constant year-round standard time without spring or autumn clock shifts.',
      },
      {
        q: 'Why do exact switch days vary between the US and Europe in March and October/November?',
        a: 'The US starts DST on the second Sunday of March and ends on the first Sunday of November, whereas Europe shifts on the last Sundays of March and October.',
      },
      {
        q: 'How does Southern Hemisphere DST differ from March–October?',
        a: 'Countries like Australia and New Zealand reverse seasons, running DST roughly from October through early April.',
      },
    ],
  },

  'dt-work-hours-year': {
    seoTitle: `Free Annual Working Hours Calculator – Yearly Work Hours | ${SITE_NAME}`,
    metaDescription:
      'Compute total annual working hours from daily shift length and yearly holidays/leaves using our free Annual Working Hours Calculator.',
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
        q: 'What should I enter in Public Holidays / Leaves per Year if my office takes Saturdays off too?',
        a: 'Add 52 Saturdays onto your annual public holidays and paid leaves (e.g., 52 + 15 = 67) to model a 5-day workweek accurately.',
      },
      {
        q: 'How do HR managers use 2,384 working hours / year?',
        a: 'Dividing annual payroll cost or project retainers by total annual working hours yields accurate hourly labor cost rates.',
      },
      {
        q: 'Can Working Hours per Day take decimals such as 7.5 hours?',
        a: 'Yes—7.5 hours (for an 8-hour shift excluding a 30-minute unpaid break) computes exact yearly totals.',
      },
    ],
  },

  'dt-seconds-to-time': {
    seoTitle: `Free Seconds to Hours:Minutes:Seconds Converter Calculator – HH:MM:SS | ${SITE_NAME}`,
    metaDescription:
      'Convert any raw count of seconds into clean HH:MM:SS clock format using our free Seconds to Hours:Minutes:Seconds Converter Calculator.',
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
        q: 'Can Total Seconds exceed 86,400 (more than 24 hours)?',
        a: 'Yes—hours accumulate cleanly past 24 (for instance, 90,000 seconds displays 25:00:00) for long race or server-uptime logs.',
      },
      {
        q: 'How many seconds sit inside 1 hour and inside 1 full day?',
        a: 'One hour contains 3,600 seconds (60 × 60), and one 24-hour day contains 86,400 seconds.',
      },
      {
        q: 'What happens if I enter decimal seconds like 125.8?',
        a: 'Seconds floor cleanly to whole integer display seconds so HH:MM:SS formatting stays uniform.',
      },
    ],
  },

  'dt-weeks-diff': {
    seoTitle: `Free Date Difference in Weeks & Days Calculator – Day Breakdown | ${SITE_NAME}`,
    metaDescription:
      'Convert any total number of days into full weeks, leftover days, and total hours using our free Date Difference in Weeks & Days Calculator.',
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
        q: 'Why is converting days to weeks useful during pregnancy or project sprints?',
        a: 'Obstetric timelines (40 weeks = 280 days) and two-week software sprints measure progress in Weeks + Days rather than raw days.',
      },
      {
        q: 'What do 90-day probation or notice periods equal in weeks?',
        a: '90 days divides into 12 Weeks and 6 Days (just one day shy of 13 full weeks).',
      },
      {
        q: 'Can Total Number of Days accept large counts like 1,000 days?',
        a: 'Yes—1,000 days converts cleanly to 142 Weeks and 6 Days (24,000 hours).',
      },
    ],
  },

  'dt-unix-epoch-convert': {
    seoTitle: `Free Unix Epoch Timestamp Converter Calculator – Epoch to UTC | ${SITE_NAME}`,
    metaDescription:
      'Decode any 10-digit Unix epoch second counter into a human-readable UTC date and clock time using our free Unix Epoch Timestamp Converter Calculator.',
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
        q: 'What if my log file gave a 13-digit timestamp like 1735689600000?',
        a: 'A 13-digit timestamp is in milliseconds—drop the last three zeros (divide by 1,000) before entering it into Unix Epoch Timestamp (Seconds).',
      },
      {
        q: 'Why does output display in GMT / UTC instead of local PKT time?',
        a: 'Unix epoch time is standardized globally in UTC/GMT so servers across every continent interpret the exact same instant identically.',
      },
      {
        q: 'What is the Year 2038 limit for 32-bit Unix timestamps?',
        a: 'Signed 32-bit integers max out at 2,147,483,647 (January 19, 2038), whereas modern 64-bit systems decode timestamps centuries into the future.',
      },
    ],
  },

  'dt-zodiac-age': {
    seoTitle: `Free Age in Days & Hours Calculator – Years to Days & Hours | ${SITE_NAME}`,
    metaDescription:
      'Convert your current age in years into total days, approximate months, and total hours alive using our free Age in Days & Hours Calculator.',
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
        q: 'Why does the calculator multiply Age in Years by 365.25 instead of 365?',
        a: 'Because every fourth year adds February 29, 365.25 averages leap years accurately across multi-decade lifespans.',
      },
      {
        q: 'When should I use Age in Days & Hours instead of the Date of Birth Age Calculator?',
        a: 'Use this quick tool when you only know someone’s age in years (such as 30) rather than their exact calendar birth date.',
      },
      {
        q: 'Can Age in Years accept decimal ages like 2.5 years for a toddler?',
        a: 'Yes—2.5 years converts cleanly to 913 Days (~30 Months) and ~21,912 hours.',
      },
    ],
  },
};
