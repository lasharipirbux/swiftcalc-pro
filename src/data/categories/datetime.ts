import { Category } from "../../types";

export const datetimeCategory: Category = {
    id: 'datetime',
    name: 'Date & Time',
    iconName: 'Calendar',
    description: 'Age, date differences, add/subtract days, working days, countdown, time duration, time zones, week numbers, unix timestamps, and leap years.',
    color: 'from-purple-600 to-indigo-800',
    calculators: [
      {
        id: 'dt-age-calc',
        name: 'Age Calculator',
        categoryId: 'datetime',
        description: 'Calculate exact age in years, months, and days from date of birth.',
        inputs: [
          { id: 'dob', label: 'Date of Birth (YYYY-MM-DD)', type: 'text', defaultValue: '1995-06-15' }
        ],
        calculate: (vals) => {
          const birth = new Date(String(vals.dob));
          const now = new Date();
          if (isNaN(birth.getTime())) return { result: 'Invalid Date Format (use YYYY-MM-DD)' };
          let years = now.getFullYear() - birth.getFullYear();
          let months = now.getMonth() - birth.getMonth();
          let days = now.getDate() - birth.getDate();
          if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
          }
          if (months < 0) {
            years--;
            months += 12;
          }
          const totalDays = Math.floor(Math.abs(now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
          return {
            result: `${years} years, ${months} months, ${days} days`,
            secondaryResult: `Total Days Lived: ${totalDays.toLocaleString()}`,
            formula: 'Exact calendar difference calculation'
          };
        }
      },
      {
        id: 'dt-date-diff',
        name: 'Date Difference Calculator',
        categoryId: 'datetime',
        description: 'Calculate exact number of days, years, months, and weeks between two dates.',
        inputs: [
          { id: 'start', label: 'Start Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-01-01' },
          { id: 'end', label: 'End Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-12-31' }
        ],
        calculate: (vals) => {
          const parseUTC = (raw: string) => {
            const trimmed = String(raw || '').trim();
            const match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(trimmed);
            if (match) {
              const y = Number(match[1]);
              const m = Number(match[2]) - 1;
              const d = Number(match[3]);
              const ms = Date.UTC(y, m, d);
              const dt = new Date(ms);
              if (dt.getUTCFullYear() === y && dt.getUTCMonth() === m && dt.getUTCDate() === d) {
                return { y, m, d, ms };
              }
              return null;
            }
            const fallback = new Date(trimmed);
            if (isNaN(fallback.getTime())) return null;
            const y = fallback.getFullYear();
            const m = fallback.getMonth();
            const d = fallback.getDate();
            return { y, m, d, ms: Date.UTC(y, m, d) };
          };

          const p1 = parseUTC(vals.start);
          const p2 = parseUTC(vals.end);
          if (!p1 || !p2) return { result: 'Invalid Date format (use YYYY-MM-DD)' };

          const totalDays = Math.round(Math.abs(p2.ms - p1.ms) / 86400000);
          const earlier = p1.ms <= p2.ms ? p1 : p2;
          const later = p1.ms <= p2.ms ? p2 : p1;

          let years = later.y - earlier.y;
          let months = later.m - earlier.m;
          let remDays = later.d - earlier.d;

          if (remDays < 0) {
            months -= 1;
            // Exact days in the month immediately preceding `later` (accounts for 28/29 Feb in leap years and 30/31 day months)
            const daysInPrevMonth = new Date(Date.UTC(later.y, later.m, 0)).getUTCDate();
            remDays = later.d + (daysInPrevMonth - Math.min(earlier.d, daysInPrevMonth));
          }
          if (months < 0) {
            years -= 1;
            months += 12;
          }

          const weeksDec = (totalDays / 7).toFixed(1);
          const monthsDec = (totalDays / 30.436875).toFixed(1);
          const totalFullMonths = years * 12 + months;

          return {
            result: `${totalDays} days`,
            secondaryResult: `${years} years, ${months} months, ${remDays} days\nWeeks: ${weeksDec} weeks (${Math.floor(totalDays / 7)} weeks, ${totalDays % 7} days)\nMonths: ${monthsDec} months (${totalFullMonths} months, ${remDays} days)`,
            formula: 'Exact calendar difference (Years, Months, Days) with leap year & month-length adjustment'
          };
        }
      },
      {
        id: 'dt-add-sub-days',
        name: 'Add or Subtract Days from a Date',
        categoryId: 'datetime',
        description: 'Add or subtract a number of days from any base date.',
        inputs: [
          { id: 'base', label: 'Base Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-06-01' },
          { id: 'op', label: 'Operation', type: 'select', defaultValue: 'add', options: [
            { label: 'Add Days (+)', value: 'add' },
            { label: 'Subtract Days (-)', value: 'subtract' }
          ]},
          { id: 'days', label: 'Number of Days', type: 'number', defaultValue: 45 }
        ],
        calculate: (vals) => {
          const base = new Date(String(vals.base));
          const d = Number(vals.days);
          if (isNaN(base.getTime())) return { result: 'Invalid Base Date' };
          const target = new Date(base.getTime() + (vals.op === 'add' ? 1 : -1) * d * 24 * 60 * 60 * 1000);
          return {
            result: target.toDateString(),
            secondaryResult: `Target Date: ${target.toISOString().split('T')[0]}`,
            formula: 'Base Date ± (Days × 86,400,000 ms)'
          };
        }
      },
      {
        id: 'dt-working-days',
        name: 'Working Days Calculator',
        categoryId: 'datetime',
        description: 'Calculate working days between two dates excluding Sundays.',
        inputs: [
          { id: 'start', label: 'Start Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-05-01' },
          { id: 'end', label: 'End Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-05-31' }
        ],
        calculate: (vals) => {
          let curr = new Date(String(vals.start));
          let end = new Date(String(vals.end));
          if (isNaN(curr.getTime()) || isNaN(end.getTime())) return { result: 'Invalid Date format' };
          if (curr > end) [curr, end] = [end, curr];
          let workingDays = 0;
          let totalDays = 0;
          while (curr <= end) {
            totalDays++;
            if (curr.getDay() !== 0) {
              workingDays++;
            }
            curr.setDate(curr.getDate() + 1);
          }
          return {
            result: `${workingDays} working days`,
            secondaryResult: `Total Days: ${totalDays} (Sundays excluded)`,
            formula: 'Count of days between start and end excluding Sundays'
          };
        }
      },
      {
        id: 'dt-countdown',
        name: 'Countdown to a Date Calculator',
        categoryId: 'datetime',
        description: 'Calculate remaining days, hours, and minutes until a future target date.',
        inputs: [
          { id: 'target', label: 'Target Date & Time (YYYY-MM-DD)', type: 'text', defaultValue: '2026-12-31' }
        ],
        calculate: (vals) => {
          const target = new Date(String(vals.target));
          const now = new Date();
          if (isNaN(target.getTime())) return { result: 'Invalid Date format (use YYYY-MM-DD)' };
          const diffMs = target.getTime() - now.getTime();
          if (diffMs <= 0) return { result: 'Target date has already passed' };
          const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
          return {
            result: `${days} days, ${hours} hrs, ${mins} mins`,
            formula: 'Target Timestamp - Current Timestamp'
          };
        }
      },
      {
        id: 'dt-time-duration',
        name: 'Time Duration Calculator',
        categoryId: 'datetime',
        description: 'Calculate elapsed time duration between start time and end time.',
        inputs: [
          { id: 'start', label: 'Start Time (HH:MM 24hr)', type: 'text', defaultValue: '08:30' },
          { id: 'end', label: 'End Time (HH:MM 24hr)', type: 'text', defaultValue: '17:15' }
        ],
        calculate: (vals) => {
          const [sh, sm] = String(vals.start).split(':').map(Number);
          const [eh, em] = String(vals.end).split(':').map(Number);
          if (isNaN(sh) || isNaN(sm) || isNaN(eh) || isNaN(em)) return { result: 'Invalid Time format (HH:MM)' };
          let startMins = sh * 60 + sm;
          let endMins = eh * 60 + em;
          if (endMins < startMins) endMins += 24 * 60;
          const diff = endMins - startMins;
          const hrs = Math.floor(diff / 60);
          const mins = diff % 60;
          return {
            result: `${hrs} hours and ${mins} minutes`,
            secondaryResult: `Total Minutes: ${diff} mins`,
            formula: 'End Time Minutes - Start Time Minutes'
          };
        }
      },
      {
        id: 'dt-timezone-conv',
        name: 'Time Zone Converter',
        categoryId: 'datetime',
        description: 'Convert times between Pakistan (PKT), UAE (GST), Saudi Arabia (AST), UK (GMT/BST), and USA (EST).',
        inputs: [
          { id: 'time', label: 'Time (HH:MM 24hr)', type: 'text', defaultValue: '14:30' },
          { id: 'fromZone', label: 'From Time Zone', type: 'select', defaultValue: 'PKT', options: [
            { label: 'Pakistan (PKT, UTC+5)', value: 'PKT' },
            { label: 'UAE (GST, UTC+4)', value: 'GST' },
            { label: 'Saudi Arabia (AST, UTC+3)', value: 'AST' },
            { label: 'UK (GMT, UTC+0)', value: 'GMT' },
            { label: 'USA (EST, UTC-5)', value: 'EST' }
          ]},
          { id: 'toZone', label: 'To Time Zone', type: 'select', defaultValue: 'UK', options: [
            { label: 'Pakistan (PKT, UTC+5)', value: 'PKT' },
            { label: 'UAE (GST, UTC+4)', value: 'GST' },
            { label: 'Saudi Arabia (AST, UTC+3)', value: 'AST' },
            { label: 'UK (GMT, UTC+0)', value: 'GMT' },
            { label: 'USA (EST, UTC-5)', value: 'EST' }
          ]}
        ],
        calculate: (vals) => {
          const [h, m] = String(vals.time).split(':').map(Number);
          if (isNaN(h) || isNaN(m)) return { result: 'Invalid Time (HH:MM)' };
          const offsets: Record<string, number> = { PKT: 5, GST: 4, AST: 3, GMT: 0, EST: -5 };
          const fromOffset = offsets[vals.fromZone] ?? 5;
          const toOffset = offsets[vals.toZone] ?? 0;
          const utcMins = (h * 60 + m) - (fromOffset * 60);
          let targetMins = utcMins + (toOffset * 60);
          if (targetMins < 0) targetMins += 24 * 60;
          if (targetMins >= 24 * 60) targetMins %= 24 * 60;
          const th = Math.floor(targetMins / 60);
          const tm = targetMins % 60;
          const fmtH = String(th).padStart(2, '0');
          const fmtM = String(tm).padStart(2, '0');
          return {
            result: `${fmtH}:${fmtM} (${vals.toZone})`,
            secondaryResult: `Converted from ${vals.time} (${vals.fromZone})`,
            formula: 'UTC Offset Conversion between Time Zones'
          };
        }
      },
      {
        id: 'dt-week-day-finder',
        name: 'Week Number and Day of Week Finder',
        categoryId: 'datetime',
        description: 'Find the day of the week and ISO week number of the year for any date.',
        inputs: [
          { id: 'date', label: 'Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-06-15' }
        ],
        calculate: (vals) => {
          const d = new Date(String(vals.date));
          if (isNaN(d.getTime())) return { result: 'Invalid Date format (YYYY-MM-DD)' };
          const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          const dayName = daysOfWeek[d.getDay()];
          
          const target = new Date(d.valueOf());
          const dayNr = (d.getDay() + 6) % 7;
          target.setDate(target.getDate() - dayNr + 3);
          const firstThursday = target.valueOf();
          target.setMonth(0, 1);
          if (target.getDay() !== 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
          }
          const weekNo = Math.ceil((1 + Math.floor((firstThursday - target.valueOf()) / (7 * 24 * 60 * 60 * 1000))) / 1);

          return {
            result: `${dayName}`,
            secondaryResult: `ISO Week Number: Week ${weekNo} of the year`,
            formula: 'Standard calendar day and ISO week number calculation'
          };
        }
      },
      // 17 New Date & Time Calculators Added Below
      {
        id: 'dt-age-detailed',
        name: 'Age in Months, Weeks & Hours Calculator',
        categoryId: 'datetime',
        description: 'Calculate detailed age breakdown in total months, weeks, days, and hours.',
        inputs: [
          { id: 'dob', label: 'Date of Birth (YYYY-MM-DD)', type: 'text', defaultValue: '1990-01-01' }
        ],
        calculate: (vals) => {
          const birth = new Date(String(vals.dob));
          const now = new Date();
          if (isNaN(birth.getTime())) return { result: 'Invalid Date format' };
          const diffMs = now.getTime() - birth.getTime();
          const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
          const totalWeeks = Math.floor(totalDays / 7);
          const totalMonths = Math.floor(totalDays / 30.44);
          const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
          return {
            result: `${totalMonths.toLocaleString()} months (${totalWeeks.toLocaleString()} weeks)`,
            secondaryResult: `Total Hours Lived: ~${totalHours.toLocaleString()} hours`,
            formula: 'Exact time elapsed converted to months, weeks, and hours'
          };
        }
      },
      {
        id: 'dt-leap-year',
        name: 'Leap Year Checker',
        categoryId: 'datetime',
        description: 'Check if any given year is a leap year (366 days instead of 365).',
        inputs: [
          { id: 'year', label: 'Year', type: 'number', defaultValue: 2028 }
        ],
        calculate: (vals) => {
          const y = Number(vals.year);
          const isLeap = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
          return {
            result: isLeap ? `${y} is a Leap Year (366 days)` : `${y} is NOT a Leap Year (365 days)`,
            secondaryResult: isLeap ? 'Divisible by 4 (and 400 if century)' : 'Does not meet leap year criteria',
            formula: 'Leap Year Rule: (Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0)'
          };
        }
      },
      {
        id: 'dt-add-business-days',
        name: 'Add Business Days to a Date Calculator',
        categoryId: 'datetime',
        description: 'Calculate target date after adding working business days (skipping Saturdays and Sundays).',
        inputs: [
          { id: 'start', label: 'Start Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-06-01' },
          { id: 'businessDays', label: 'Business Days to Add', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const startStr = String(vals.start ?? '').trim();
          const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(startStr);
          let curr: Date;
          if (match) {
            const [, y, m, d] = match.map(Number);
            curr = new Date(y, m - 1, d);
            if (curr.getFullYear() !== y || curr.getMonth() !== m - 1 || curr.getDate() !== d) {
              return { result: 'Invalid Start Date' };
            }
          } else {
            curr = new Date(startStr);
          }
          if (isNaN(curr.getTime())) return { result: 'Invalid Start Date' };
          const rawDays = Number(vals.businessDays ?? 0);
          if (!Number.isFinite(rawDays) || rawDays < 0) {
            return { result: 'Business days must be 0 or greater' };
          }
          const daysToAdd = Math.floor(rawDays);
          let added = 0;
          while (added < daysToAdd) {
            curr.setDate(curr.getDate() + 1);
            const day = curr.getDay();
            if (day !== 0 && day !== 6) { // Skip Saturdays and Sundays
              added++;
            }
          }
          const yyyy = curr.getFullYear();
          const mm = String(curr.getMonth() + 1).padStart(2, '0');
          const dd = String(curr.getDate()).padStart(2, '0');
          return {
            result: curr.toDateString(),
            secondaryResult: `Target Business Date: ${yyyy}-${mm}-${dd}`,
            formula: 'Iterate day by day adding business days (excluding Saturdays and Sundays)'
          };
        }
      },
      {
        id: 'dt-unix-timestamp',
        name: 'Unix Timestamp Converter',
        categoryId: 'datetime',
        description: 'Convert between human-readable date and Unix epoch timestamp (seconds).',
        inputs: [
          { id: 'dateStr', label: 'Date & Time (YYYY-MM-DD)', type: 'text', defaultValue: '2026-06-01' }
        ],
        calculate: (vals) => {
          const d = new Date(String(vals.dateStr));
          if (isNaN(d.getTime())) return { result: 'Invalid Date format' };
          const timestamp = Math.floor(d.getTime() / 1000);
          return {
            result: `${timestamp} Unix Timestamp`,
            secondaryResult: `Milliseconds: ${d.getTime()} ms | UTC: ${d.toUTCString()}`,
            formula: 'Timestamp = Date object value in milliseconds / 1000'
          };
        }
      },
      {
        id: 'dt-meeting-planner',
        name: 'Meeting Time Planner Across Cities',
        categoryId: 'datetime',
        description: 'Plan meetings across Islamabad (PKT), Dubai (GST), London (GMT), and New York (EST).',
        inputs: [
          { id: 'pktHour', label: 'Islamabad Time (PKT Hour 0-23)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const h = Number(vals.pktHour);
          const dubai = (h - 1 + 24) % 24;
          const london = (h - 5 + 24) % 24;
          const newyork = (h - 10 + 24) % 24;
          return {
            result: `Dubai: ${dubai}:00 | London: ${london}:00 | New York: ${newyork}:00`,
            secondaryResult: `Based on Islamabad ${h}:00 PKT`,
            formula: 'Global time offset calculation relative to PKT'
          };
        }
      },
      {
        id: 'dt-time-add',
        name: 'Time Addition Calculator',
        categoryId: 'datetime',
        description: 'Add hours and minutes to a starting time.',
        inputs: [
          { id: 'startTime', label: 'Start Time (HH:MM)', type: 'text', defaultValue: '10:30' },
          { id: 'addHrs', label: 'Hours to Add', type: 'number', defaultValue: 3 },
          { id: 'addMins', label: 'Minutes to Add', type: 'number', defaultValue: 45 }
        ],
        calculate: (vals) => {
          const [sh, sm] = String(vals.startTime).split(':').map(Number);
          const ah = Number(vals.addHrs);
          const am = Number(vals.addMins);
          if (isNaN(sh) || isNaN(sm)) return { result: 'Invalid Start Time' };
          let totalMins = (sh * 60) + sm + (ah * 60) + am;
          const resH = Math.floor(totalMins / 60) % 24;
          const resM = totalMins % 60;
          return {
            result: `${String(resH).padStart(2, '0')}:${String(resM).padStart(2, '0')}`,
            secondaryResult: `Total added: ${ah}h ${am}m`,
            formula: 'Target Time = Start Mins + Added Mins (modulo 1440 mins)'
          };
        }
      },
      {
        id: 'dt-time-subtract',
        name: 'Time Subtraction Calculator',
        categoryId: 'datetime',
        description: 'Subtract hours and minutes from a starting time.',
        inputs: [
          { id: 'startTime', label: 'Start Time (HH:MM)', type: 'text', defaultValue: '18:00' },
          { id: 'subHrs', label: 'Hours to Subtract', type: 'number', defaultValue: 4 },
          { id: 'subMins', label: 'Minutes to Subtract', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const [sh, sm] = String(vals.startTime).split(':').map(Number);
          const shrs = Number(vals.subHrs);
          const smins = Number(vals.subMins);
          if (isNaN(sh) || isNaN(sm)) return { result: 'Invalid Start Time' };
          let totalMins = (sh * 60) + sm - (shrs * 60) - smins;
          if (totalMins < 0) totalMins += 24 * 60;
          const resH = Math.floor(totalMins / 60) % 24;
          const resM = totalMins % 60;
          return {
            result: `${String(resH).padStart(2, '0')}:${String(resM).padStart(2, '0')}`,
            secondaryResult: `Total subtracted: ${shrs}h ${smins}m`,
            formula: 'Target Time = Start Mins - Subtracted Mins'
          };
        }
      },
      {
        id: 'dt-event-countdown',
        name: 'Days Until Birthday / Event Calculator',
        categoryId: 'datetime',
        description: 'Calculate exact number of days remaining until your next birthday or annual event.',
        inputs: [
          { id: 'eventDate', label: 'Event Date (MM-DD)', type: 'text', defaultValue: '12-25' }
        ],
        calculate: (vals) => {
          const now = new Date();
          const [m, d] = String(vals.eventDate).split('-').map(Number);
          if (isNaN(m) || isNaN(d)) return { result: 'Invalid Format (MM-DD)' };
          let nextEvent = new Date(now.getFullYear(), m - 1, d);
          if (nextEvent < now) {
            nextEvent.setFullYear(now.getFullYear() + 1);
          }
          const diffMs = nextEvent.getTime() - now.getTime();
          const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
          return {
            result: `${days} days remaining`,
            secondaryResult: `Next occurrence: ${nextEvent.toDateString()}`,
            formula: 'Days until target month/day occurrence'
          };
        }
      },
      {
        id: 'dt-quarter-year',
        name: 'Quarter of the Year Finder',
        categoryId: 'datetime',
        description: 'Find which fiscal or calendar quarter a specific date falls into.',
        inputs: [
          { id: 'date', label: 'Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-08-14' }
        ],
        calculate: (vals) => {
          const d = new Date(String(vals.date));
          if (isNaN(d.getTime())) return { result: 'Invalid Date format' };
          const month = d.getMonth();
          const quarter = Math.floor(month / 3) + 1;
          return {
            result: `Quarter Q${quarter} (${d.getFullYear()})`,
            secondaryResult: `Month: ${d.toLocaleString('default', { month: 'long' })}`,
            formula: 'Quarter = Math.floor(Month / 3) + 1'
          };
        }
      },
      {
        id: 'dt-days-passed-year',
        name: 'Days Passed in Current Year Calculator',
        categoryId: 'datetime',
        description: 'Calculate how many days have elapsed in the year and percentage completed.',
        inputs: [
          { id: 'date', label: 'Date (YYYY-MM-DD)', type: 'text', defaultValue: '2026-07-01' }
        ],
        calculate: (vals) => {
          const d = new Date(String(vals.date));
          if (isNaN(d.getTime())) return { result: 'Invalid Date format' };
          const start = new Date(d.getFullYear(), 0, 1);
          const diff = Math.floor((d.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
          const isLeap = (d.getFullYear() % 4 === 0 && d.getFullYear() % 100 !== 0) || (d.getFullYear() % 400 === 0);
          const totalDays = isLeap ? 366 : 365;
          const pct = (diff / totalDays) * 100;
          return {
            result: `Day ${diff} of ${totalDays} (${pct.toFixed(1)}%)`,
            secondaryResult: `${totalDays - diff} days remaining in ${d.getFullYear()}`,
            formula: 'Days Passed = Date - January 1st + 1'
          };
        }
      },
      {
        id: 'dt-retirement-countdown',
        name: 'Retirement Countdown Calculator',
        categoryId: 'datetime',
        description: 'Calculate years, months, and days remaining until retirement age.',
        inputs: [
          { id: 'currentAge', label: 'Current Age (Years)', type: 'number', defaultValue: 35 },
          { id: 'retirementAge', label: 'Retirement Age', type: 'number', defaultValue: 60 }
        ],
        calculate: (vals) => {
          const cur = Number(vals.currentAge);
          const ret = Number(vals.retirementAge);
          if (ret <= cur) return { result: 'Retirement age must be greater than current age' };
          const yrsLeft = ret - cur;
          const daysLeft = yrsLeft * 365;
          return {
            result: `${yrsLeft} years remaining (~${daysLeft.toLocaleString()} days)`,
            secondaryResult: `Target retirement at age ${ret}`,
            formula: 'Years Left = Retirement Age - Current Age'
          };
        }
      },
      {
        id: 'dt-hourly-to-annual',
        name: 'Hourly Wage to Annual Salary (Time-based)',
        categoryId: 'datetime',
        description: 'Calculate annual earnings based on hourly wage and weekly hours.',
        inputs: [
          { id: 'hourly', label: 'Hourly Rate (PKR)', type: 'number', defaultValue: 750 },
          { id: 'hoursPerWeek', label: 'Hours per Week', type: 'number', defaultValue: 40 }
        ],
        calculate: (vals) => {
          const hr = Number(vals.hourly);
          const hpw = Number(vals.hoursPerWeek);
          const annual = hr * hpw * 52;
          return {
            result: `PKR ${annual.toLocaleString()} / year`,
            secondaryResult: `Monthly: PKR ${Math.round(annual / 12).toLocaleString()} | Weekly: PKR ${Math.round(hpw * hr).toLocaleString()}`,
            formula: 'Annual Salary = Hourly Rate × Hours per Week × 52 weeks'
          };
        }
      },
      {
        id: 'dt-century-calc',
        name: 'Century & Millennium Calculator',
        categoryId: 'datetime',
        description: 'Determine which century and millennium any given year belongs to.',
        inputs: [
          { id: 'year', label: 'Year', type: 'number', defaultValue: 2026 }
        ],
        calculate: (vals) => {
          const y = Number(vals.year);
          const century = Math.ceil(y / 100);
          const millennium = Math.ceil(y / 1000);
          return {
            result: `${century}${century === 1 ? 'st' : century === 2 ? 'nd' : century === 3 ? 'rd' : 'th'} Century`,
            secondaryResult: `${millennium}${millennium === 1 ? 'st' : millennium === 2 ? 'nd' : 'rd'} Millennium`,
            formula: 'Century = Math.ceil(Year / 100)'
          };
        }
      },
      {
        id: 'dt-stopwatch-split',
        name: 'Stopwatch Lap Split Time Calculator',
        categoryId: 'datetime',
        description: 'Calculate average lap time and total duration from multiple lap splits.',
        inputs: [
          { id: 'totalMins', label: 'Total Duration (Minutes)', type: 'number', defaultValue: 45 },
          { id: 'laps', label: 'Number of Laps Completed', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const t = Number(vals.totalMins);
          const l = Number(vals.laps);
          if (l <= 0) return { result: 'Laps must be > 0' };
          const avgMins = t / l;
          const am = Math.floor(avgMins);
          const as = Math.round((avgMins - am) * 60);
          return {
            result: `${am} min ${as} sec per lap`,
            secondaryResult: `Total Duration: ${t} minutes across ${l} laps`,
            formula: 'Average Lap Time = Total Duration / Number of Laps'
          };
        }
      },
      {
        id: 'dt-dst-checker',
        name: 'Daylight Saving Time (DST) Detector',
        categoryId: 'datetime',
        description: 'Check if Daylight Saving Time is typically active for a given month.',
        inputs: [
          { id: 'month', label: 'Month (1 = Jan, 12 = Dec)', type: 'number', defaultValue: 6 }
        ],
        calculate: (vals) => {
          const m = Number(vals.month);
          const isDst = m >= 3 && m <= 10; // Northern hemisphere standard approximation (March to October)
          return {
            result: isDst ? 'Likely Active (Spring / Summer DST)' : 'Not Active (Standard Time)',
            secondaryResult: 'Northern Hemisphere General DST Window (March - October)',
            formula: 'Month between March (3) and October (10)'
          };
        }
      },
      {
        id: 'dt-work-hours-year',
        name: 'Annual Working Hours Calculator',
        categoryId: 'datetime',
        description: 'Calculate total working hours in a year factoring standard workdays and holidays.',
        inputs: [
          { id: 'hoursPerDay', label: 'Working Hours per Day', type: 'number', defaultValue: 8 },
          { id: 'publicHolidays', label: 'Public Holidays / Leaves per Year', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const h = Number(vals.hoursPerDay);
          const hol = Number(vals.publicHolidays);
          // Standard working days in year = 365 - 52 Sundays - holidays
          const workingDays = 365 - 52 - hol;
          const totalHours = workingDays * h;
          return {
            result: `${totalHours.toLocaleString()} working hours / year`,
            secondaryResult: `Based on ${workingDays} working days per year`,
            formula: 'Annual Hours = (365 - 52 Sundays - Holidays) × Hours per Day'
          };
        }
      },
      {
        id: 'dt-seconds-to-time',
        name: 'Seconds to Hours:Minutes:Seconds Converter',
        categoryId: 'datetime',
        description: 'Convert total seconds elapsed into readable hh:mm:ss format.',
        inputs: [
          { id: 'totalSeconds', label: 'Total Seconds', type: 'number', defaultValue: 10540 }
        ],
        calculate: (vals) => {
          const sec = Number(vals.totalSeconds);
          const hrs = Math.floor(sec / 3600);
          const mins = Math.floor((sec % 3600) / 60);
          const s = sec % 60;
          return {
            result: `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`,
            secondaryResult: `${hrs} hours, ${mins} minutes, ${s} seconds`,
            formula: 'Hours = Total / 3600, Minutes = Remainder / 60, Seconds = Remainder % 60'
          };
        }
      },
      {
        id: 'dt-weeks-diff',
        name: 'Date Difference in Weeks & Days',
        categoryId: 'datetime',
        description: 'Calculate exact time interval between two dates in weeks and remaining days.',
        inputs: [
          { id: 'days', label: 'Total Number of Days', type: 'number', defaultValue: 90 }
        ],
        calculate: (vals) => {
          const d = Number(vals.days);
          const weeks = Math.floor(d / 7);
          const remDays = d % 7;
          return {
            result: `${weeks} Weeks and ${remDays} Days`,
            secondaryResult: `Total hours: ${(d * 24).toLocaleString()} hours`,
            formula: 'Weeks = Floor(Days / 7); Remaining Days = Days % 7'
          };
        }
      },
      {
        id: 'dt-unix-epoch-convert',
        name: 'Unix Epoch Timestamp Converter',
        categoryId: 'datetime',
        description: 'Convert Unix epoch seconds to readable calendar estimation.',
        inputs: [
          { id: 'epoch', label: 'Unix Epoch Timestamp (Seconds)', type: 'number', defaultValue: 1735689600 }
        ],
        calculate: (vals) => {
          const epoch = Number(vals.epoch);
          const d = new Date(epoch * 1000);
          return {
            result: isNaN(d.getTime()) ? 'Invalid Epoch Timestamp' : d.toUTCString(),
            secondaryResult: `Converted from Unix epoch second counter`,
            formula: 'Date = Epoch Seconds × 1000 ms'
          };
        }
      },
      {
        id: 'dt-zodiac-age',
        name: 'Age in Days & Hours Calculator',
        categoryId: 'datetime',
        description: 'Calculate total age expressed in exact days, hours, and approximate months.',
        inputs: [
          { id: 'years', label: 'Age in Years', type: 'number', defaultValue: 25 }
        ],
        calculate: (vals) => {
          const yrs = Number(vals.years);
          const totalDays = Math.round(yrs * 365.25);
          const totalHours = totalDays * 24;
          return {
            result: `${totalDays.toLocaleString()} Days (~${(yrs * 12).toLocaleString()} Months)`,
            secondaryResult: `Total hours alive: ~${totalHours.toLocaleString()} hours`,
            formula: 'Total Days = Age Years × 365.25 days'
          };
        }
      }
    ]
  };
