import { SITE_NAME } from '../config/site';

export interface EducationCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const educationSeoFullMap: Record<string, EducationCalculatorSeoEntry> = {
  'edu-gpa-calc': {
    seoTitle: `Free GPA Calculator (4.0 Scale) – Credit-Weighted Grades | ${SITE_NAME}`,
    metaDescription:
      'Compute your semester GPA on a 4.0 scale using course grade points and credit weights with our free GPA Calculator (4.0 Scale).',
    howToUseSteps: [
      'List your numeric course grade points separated by commas inside Grades (comma separated, e.g. 4.0, 3.7, 3.0).',
      'Type each matching subject weight in the same order under Credit Hours (comma separated, e.g. 3, 3, 4, 3).',
      'Read your weighted 4.0 semester GPA alongside total quality points and attempted credits.',
    ],
    formulaExplanation:
      'A credit-weighted semester GPA prevents 1-credit lab classes from carrying the same influence as 4-credit lecture courses by multiplying every grade point by its unit weight before dividing by total credits. Formula: GPA = Sum(Grade × Credits) / Sum(Credits).',
    practicalExample:
      'Entering Grades (comma separated, e.g. 4.0, 3.7, 3.0) = 4.0, 3.7, 3.0, 3.5 with Credit Hours (comma separated, e.g. 3, 3, 4, 3) = 3, 3, 4, 3 totals 45.6 quality points across 13 credits for 3.51 / 4.0 GPA.',
    faqs: [
      {
        q: 'Why must Grades and Credit Hours contain the same number of entries?',
        a: 'Each grade point pairs position-by-position with its corresponding credit load so mismatched lists cannot produce valid quality points.',
      },
      {
        q: 'How does a 4-credit course affect GPA compared with a 2-credit elective?',
        a: 'A 4-credit class contributes twice as many quality points toward your numerator, magnifying both A grades and low marks.',
      },
      {
        q: 'Can pass/fail courses without grade points go into Credit Hours?',
        a: 'Omit non-graded pass/fail credits because universities exclude ungraded units when computing numeric term GPA.',
      },
    ],
  },

  'edu-cgpa-calc': {
    seoTitle: `Free CGPA Calculator (Multiple Semesters) – Cumulative GPA | ${SITE_NAME}`,
    metaDescription:
      'Combine term GPAs and credit loads across semesters to track your cumulative standing with our free CGPA Calculator (Multiple Semesters).',
    howToUseSteps: [
      'Type each term grade average separated by commas into Semester GPAs (comma separated, e.g. 3.5, 3.8, 3.6).',
      'Enter matching credit totals for those terms in Semester Credits (comma separated, e.g. 15, 16, 15).',
      'Inspect your cumulative CGPA and combined credit hours completed across all listed terms.',
    ],
    formulaExplanation:
      'Cumulative Grade Point Average weights every past semester by how many credit hours you completed during that term rather than averaging term GPAs equally. Formula: CGPA = Sum(Semester GPA × Semester Credits) / Total Cumulative Credits.',
    practicalExample:
      'Using Semester GPAs (comma separated, e.g. 3.5, 3.8, 3.6) = 3.5, 3.7, 3.6 and Semester Credits (comma separated, e.g. 15, 16, 15) = 15, 16, 15 sums to 46 credits and 3.60 CGPA.',
    faqs: [
      {
        q: 'When does weighted CGPA differ from a simple mean of semester GPAs?',
        a: 'Whenever semesters carry unequal credit loads—such as a 18-credit fall term versus a 6-credit summer session—heavier terms pull CGPA more strongly.',
      },
      {
        q: 'How many semesters can I enter inside Semester GPAs?',
        a: 'List two, four, eight, or any number of completed terms separated by commas as long as Semester Credits matches every entry.',
      },
      {
        q: 'Should repeated courses be entered twice in Semester GPAs?',
        a: 'Follow your registrar transcript: if your university replaces the older grade, use the adjusted term GPA.',
      },
    ],
  },

  'edu-marks-percentage': {
    seoTitle: `Free Percentage Calculator for Marks – Exam Score % | ${SITE_NAME}`,
    metaDescription:
      'Convert obtained test points and maximum possible marks into an exact percentage with our free Percentage Calculator for Marks.',
    howToUseSteps: [
      'Enter the score you earned inside the Marks Obtained field.',
      'Type the maximum possible exam or aggregate score into Total Marks.',
      'View your exact two-decimal percentage score right away.',
    ],
    formulaExplanation:
      'Converting raw exam marks into a percentage normalizes scores from any test scale—whether out of 75, 500, or 1,100—onto a universal 100-point benchmark for admissions and transcripts. Formula: Percentage = (Marks Obtained / Total Marks) × 100.',
    practicalExample:
      'Recording Marks Obtained = 425 out of Total Marks = 500 calculates (425 / 500) × 100 = 85.00%.',
    faqs: [
      {
        q: 'Can I combine multiple board subjects into Marks Obtained and Total Marks?',
        a: 'Yes—add all subject scores together for Marks Obtained and sum maximum paper marks for Total Marks to get your overall aggregate percentage.',
      },
      {
        q: 'Why does Total Marks require a positive number greater than zero?',
        a: 'Dividing earned points by zero is mathematically undefined and cannot express a valid proportion.',
      },
      {
        q: 'What if bonus questions pushed Marks Obtained slightly above Total Marks?',
        a: 'The formula accurately reflects extra credit by returning a figure above 100%, such as 103.00%.',
      },
    ],
  },

  'edu-grade-calc': {
    seoTitle: `Free Grade Calculator (Marks to Grade) – Letter Scale A+ to F | ${SITE_NAME}`,
    metaDescription:
      'Turn raw test points into letter grades from A+ through F with percentage output using our free Grade Calculator (Marks to Grade).',
    howToUseSteps: [
      'Type your achieved exam score into Marks Obtained.',
      'Specify the full paper score in Total Marks.',
      'Check both your assigned letter tier (A+ through F) and converted score percentage.',
    ],
    formulaExplanation:
      'Letter grading maps your computed score percentage onto standard academic brackets: 90%+ earns A+ (Exemplary), 80%–89.9% earns A (Excellent), 70%–79.9% earns B (Good), 60%–69.9% earns C (Satisfactory), 50%–59.9% earns D (Passing), and below 50% is F. Formula: Score % = (Marks Obtained / Total Marks) × 100.',
    practicalExample:
      'Scoring Marks Obtained = 82 against Total Marks = 100 equals 82.0%, placing your paper in A (Excellent).',
    faqs: [
      {
        q: 'At what exact score does D (Passing) begin on this scale?',
        a: 'Any percentage from 50.0% up to 59.9% qualifies for D (Passing), while 49.9% or lower maps to F (Failing).',
      },
      {
        q: 'Do all universities use 90% as the cutoff for A+?',
        a: 'Grading cutoffs vary by institution—some departments award A at 85% or 93%, so always double-check your syllabus.',
      },
      {
        q: 'Can I evaluate a 60-mark midterm without converting it first?',
        a: 'Yes—enter your score in Marks Obtained and put 60 in Total Marks to convert the percentage automatically.',
      },
    ],
  },

  'edu-average-marks': {
    seoTitle: `Free Average Marks Calculator – Mean Score & Sum | ${SITE_NAME}`,
    metaDescription:
      'Find the arithmetic mean, combined total, and paper count across multiple exam scores with our free Average Marks Calculator.',
    howToUseSteps: [
      'Type all test or assignment scores separated by commas inside Marks (comma separated, e.g. 78, 85, 90, 92).',
      'Check your arithmetic mean along with the cumulative point sum and count of exams entered.',
    ],
    formulaExplanation:
      'Arithmetic mean treats every listed exam or quiz equally by summing all individual scores and dividing by how many scores were entered. Formula: Average = Sum of Marks / Number of Exams.',
    practicalExample:
      'Entering Marks (comma separated, e.g. 78, 85, 90, 92) = 80, 85, 90, 88, 95 totals 438 across 5 exams for Average: 87.60.',
    faqs: [
      {
        q: 'Should I use this tool if every test carries equal weight?',
        a: 'Yes—equal-weight quizzes, weekly lab scores, and unit tests align directly with a straight arithmetic average.',
      },
      {
        q: 'What happens if I accidentally leave a trailing comma in Marks?',
        a: 'Non-numeric blanks are filtered out cleanly so only valid scores affect your exam count and mean.',
      },
      {
        q: 'Can I mix percentage scores and raw marks in the same list?',
        a: 'Keep all values on the same scale—such as all out of 100—before interpreting the combined average.',
      },
    ],
  },

  'edu-attendance-calc': {
    seoTitle: `Free Attendance Percentage & 75% Target Calculator | ${SITE_NAME}`,
    metaDescription:
      'Check current class attendance percentage and how many consecutive lectures you need for 75% with our free Attendance Percentage & 75% Target Calculator.',
    howToUseSteps: [
      'Input the number of sessions you showed up for in Classes Attended.',
      'Enter total sessions conducted so far inside Total Classes Held.',
      'Review your current attendance ratio and consecutive classes required to hit the 75% threshold.',
    ],
    formulaExplanation:
      'When your attendance sits below 75%, each future attended class adds 1 to both numerator and denominator, closing the gap toward 0.75 × (Total + n) = Attended + n. Solving for n tells you the minimum streak needed without missing another lecture. Formula: Attendance % = (Classes Attended / Total Classes Held) × 100; Classes Needed = ceil((0.75 × Total − Attended) / 0.25).',
    practicalExample:
      'With Classes Attended = 32 and Total Classes Held = 45, current attendance is 71.1%, and attending 7 more consecutive classes reaches 39 / 52 = 75.0%.',
    faqs: [
      {
        q: 'Why does jumping from 71.1% to 75% require 7 consecutive classes?',
        a: 'Because each new session raises Total Classes Held too, every attended lecture only recovers 0.25 of a missed-class deficit against a 75% target.',
      },
      {
        q: 'What does the message show once I exceed 75%?',
        a: 'Once your ratio hits or passes 75.0%, the tool confirms you already satisfy the 75% attendance rule.',
      },
      {
        q: 'Should approved medical leaves count inside Classes Attended?',
        a: 'Only include excused absences in Classes Attended if your department registrar credits medical waivers toward exam eligibility.',
      },
    ],
  },

  'edu-final-exam-marks': {
    seoTitle: `Free Marks Needed in Final Exam Calculator – Target Grade | ${SITE_NAME}`,
    metaDescription:
      'Find the exact percentage you must score on your upcoming final exam to hit your goal using our free Marks Needed in Final Exam Calculator.',
    howToUseSteps: [
      'Type your standing percentage before finals into Current Grade / Marks (%).',
      'Enter the combined syllabus percentage already graded inside Current Weight Completed (%).',
      'Set your desired semester percentage in Target Overall Grade (%) to see the required final score.',
    ],
    formulaExplanation:
      'Course grades blend your weighted pre-final coursework with the remaining final exam weight (100% minus completed weight). Isolating the final exam variable solves directly for the paper score needed to hit your target. Formula: Required Final % = [Target Overall Grade − (Current Grade × Current Weight)] / (1 − Current Weight).',
    practicalExample:
      'With Current Grade / Marks (%) = 78, Current Weight Completed (%) = 60, and Target Overall Grade (%) = 85 (leaving 40% final weight), you need 95.5% on Final Exam.',
    faqs: [
      {
        q: 'What if Required Final % exceeds 100%?',
        a: 'A number above 100% indicates your chosen Target Overall Grade (%) is unreachable without extra credit given the remaining final exam weight.',
      },
      {
        q: 'Why cannot Current Weight Completed (%) equal 100%?',
        a: 'If 100% of coursework is already graded, zero weight remains for any final exam to alter your grade.',
      },
      {
        q: 'Can Current Grade / Marks (%) reflect multiple assignments averaged together?',
        a: 'Yes—use your current portal gradebook average covering all quizzes, labs, and midterms graded so far.',
      },
    ],
  },

  'edu-study-planner': {
    seoTitle: `Free Study Time Planner Calculator – Daily Exam Hours | ${SITE_NAME}`,
    metaDescription:
      'Split syllabus chapters and reading hours into a realistic daily schedule before finals using our free Study Time Planner Calculator.',
    howToUseSteps: [
      'Type remaining calendar days before test day inside Days Until Exam.',
      'Enter how many syllabus units you must cover in Total Chapters / Topics.',
      'Estimate preparation time per unit under Average Hours per Chapter to get your daily hour target.',
    ],
    formulaExplanation:
      'Effective exam pacing calculates total syllabus workload by multiplying chapter count by expected study time per chapter, then spreads those hours evenly across remaining prep days. Formula: Daily Study Hours = (Total Chapters × Average Hours per Chapter) / Days Until Exam.',
    practicalExample:
      'Preparing Total Chapters / Topics = 28 at Average Hours per Chapter = 1.5 over Days Until Exam = 14 requires 42.0 total hours, or 3.0 hours / day.',
    faqs: [
      {
        q: 'Should Average Hours per Chapter include practice problem sets?',
        a: 'Yes—budget extra time per chapter if you plan to solve past papers alongside initial reading and note summaries.',
      },
      {
        q: 'How can I reserve one buffer day for full mock review?',
        a: 'Reduce Days Until Exam by 1 so your daily workload finishes all chapters a day ahead of the test.',
      },
      {
        q: 'What if Total Chapters / Topics vary widely in difficulty?',
        a: 'Estimate a realistic blended average across short introductory units and dense technical chapters.',
      },
    ],
  },

  'edu-sgpa-to-pct': {
    seoTitle: `Free SGPA to Percentage Converter Calculator – 4.0 Scale | ${SITE_NAME}`,
    metaDescription:
      'Translate your 4.0-scale semester SGPA into an equivalent percentage score instantly with our free SGPA to Percentage Converter Calculator.',
    howToUseSteps: [
      'Enter your semester GPA figure inside SGPA (out of 4.0).',
      'Review the equivalent percentage score calculated on the standard linear 4.0 conversion scale.',
    ],
    formulaExplanation:
      'On a direct 4.0-to-100 proportional scale, every 1.00 GPA point corresponds to 25 percentage points, capped at 100%. Formula: Percentage = SGPA × 25.',
    practicalExample:
      'Converting SGPA (out of 4.0) = 3.4 computes 3.4 × 25 = 85.00% Equivalent.',
    faqs: [
      {
        q: 'Do Pakistani and international universities always use SGPA × 25?',
        a: 'Many employers and portals use SGPA × 25 for quick conversion, though HEC/university-specific charts sometimes subtract 0.5 or apply piecewise tables.',
      },
      {
        q: 'Can I convert a cumulative CGPA with this same SGPA (out of 4.0) box?',
        a: 'Yes—because both SGPA and CGPA share the 4.0 scale, entering either produces its proportional percentage equivalent.',
      },
      {
        q: 'Why is the output capped at 100.00%?',
        a: 'Percentages on standard transcripts cannot exceed 100% even if an accidental input over 4.0 is typed.',
      },
    ],
  },

  'edu-pct-to-gpa': {
    seoTitle: `Free Percentage to GPA Converter Calculator – 100% to 4.0 | ${SITE_NAME}`,
    metaDescription:
      'Convert percentage exam marks into an estimated 4.0-scale GPA figure using our free Percentage to GPA Converter Calculator.',
    howToUseSteps: [
      'Type your academic score percentage inside the Percentage (%) input.',
      'Check the estimated 4.0-scale GPA equivalent immediately below.',
    ],
    formulaExplanation:
      'Proportional GPA conversion scales a 0–100 percentage score down to a 0–4.0 grade-point framework by dividing by 100 and multiplying by 4.0. Formula: GPA = (Percentage / 100) × 4.0.',
    practicalExample:
      'Entering Percentage (%) = 82 yields (82 / 100) × 4.0 = 3.28 / 4.0 GPA.',
    faqs: [
      {
        q: 'Why do some US admissions evaluators convert 82% higher than 3.28 GPA?',
        a: 'Credential evaluators like WES often treat 80%+ international board marks as an A (3.7–4.0) rather than using linear scaling.',
      },
      {
        q: 'Is linear (Percentage / 100) × 4.0 reversible with SGPA × 25?',
        a: 'Yes—both formulas are exact mathematical inverses of each other on the proportional 4.0 scale.',
      },
      {
        q: 'Should I enter 82 or 0.82 into Percentage (%)?',
        a: 'Always enter the whole percentage value such as 82 rather than decimal 0.82.',
      },
    ],
  },

  'edu-weighted-grade': {
    seoTitle: `Free Final Grade Calculator (Weighted Categories) | ${SITE_NAME}`,
    metaDescription:
      'Calculate your overall course grade from homework, midterm, and final exam weights with our free Final Grade Calculator (Weighted Categories).',
    howToUseSteps: [
      'Type your combined assignment score into Homework Average (%).',
      'Enter your mid-semester exam percentage inside Midterm Exam (%).',
      'Fill in Final Exam (%) to calculate your overall weighted course average.',
    ],
    formulaExplanation:
      'Weighted syllabus grading multiplies each assessment category by its fixed share of the course—20% for Homework, 30% for Midterm, and 50% for the Final Exam—before adding them together. Formula: Final Grade = (Homework Average × 0.2) + (Midterm Exam × 0.3) + (Final Exam × 0.5).',
    practicalExample:
      'Combining Homework Average (%) = 90, Midterm Exam (%) = 78, and Final Exam (%) = 85 computes (90 × 0.2) + (78 × 0.3) + (85 × 0.5) = 83.90% Final Grade.',
    faqs: [
      {
        q: 'Why does Final Exam (%) sway the grade more than Homework Average (%)?',
        a: 'Because the final carries 50% weight versus 20% for homework, every 10-point jump on the final moves your course grade by 5 full points.',
      },
      {
        q: 'Can I simulate a target final score before taking the exam?',
        a: 'Yes—type your real Homework Average (%) and Midterm Exam (%) alongside different trial numbers in Final Exam (%) to test outcomes.',
      },
      {
        q: 'What if my course splits grading differently than 20/30/50?',
        a: 'For custom category weights, check our Assignment Score Contribution Calculator to compute each component weight individually.',
      },
    ],
  },

  'edu-reading-speed': {
    seoTitle: `Free Reading Speed (WPM) Calculator – Words Per Minute | ${SITE_NAME}`,
    metaDescription:
      'Measure how many words per minute you read from word count and timer duration using our free Reading Speed (WPM) Calculator.',
    howToUseSteps: [
      'Enter passage length inside Total Words Read.',
      'Type elapsed stopwatch duration into Time Taken (Minutes).',
      'Inspect your rounded Words Per Minute (WPM) reading pace.',
    ],
    formulaExplanation:
      'Reading speed divides total words processed in a timed passage by minutes spent reading, letting students benchmark comprehension fluency against the typical 200–250 WPM adult average. Formula: WPM = Total Words Read / Time Taken (Minutes).',
    practicalExample:
      'Finishing Total Words Read = 1200 in Time Taken (Minutes) = 5 produces 1200 / 5 = 240 Words Per Minute (WPM).',
    faqs: [
      {
        q: 'What WPM score represents good academic reading fluency?',
        a: 'Most college students read nonfiction textbooks at 200–300 WPM, while dense technical or legal material slows to 120–180 WPM.',
      },
      {
        q: 'How do I enter 4 minutes and 30 seconds into Time Taken (Minutes)?',
        a: 'Convert seconds into decimal minutes by dividing by 60, entering 4.5 for 4 minutes 30 seconds.',
      },
      {
        q: 'Should I measure speed while skimming or reading for full comprehension?',
        a: 'Test at your normal comprehension pace so your WPM figure realistically forecasts exam and textbook study blocks.',
      },
    ],
  },

  'edu-quiz-score': {
    seoTitle: `Free Quiz Score & Negative Marking Calculator – MCQ Net Marks | ${SITE_NAME}`,
    metaDescription:
      'Compute net MCQ test marks after negative marking deductions for wrong answers with our free Quiz Score & Negative Marking Calculator.',
    howToUseSteps: [
      'Enter right responses into Correct Answers.',
      'Type missed questions (excluding blanks) inside Incorrect Answers.',
      'Set the deduction per mistake in Negative Mark per Wrong Answer to view your net score.',
    ],
    formulaExplanation:
      'Competitive entrance exams such as ECAT, MDCAT, and GRE subject tests penalize random guessing by subtracting a fractional mark for every wrong option selected. Formula: Score = Correct Answers − (Incorrect Answers × Negative Mark per Wrong Answer).',
    practicalExample:
      'Answering Correct Answers = 40 and Incorrect Answers = 5 with Negative Mark per Wrong Answer = 0.25 deducts 1.25 marks for 38.75 Final Score.',
    faqs: [
      {
        q: 'Should unanswered skipped questions be included in Incorrect Answers?',
        a: 'No—negative marking exams only subtract penalties for wrong guesses, leaving skipped blanks at zero impact.',
      },
      {
        q: 'What Negative Mark per Wrong Answer fits typical 4-option MCQs?',
        a: 'Standard 4-choice tests usually deduct 0.25 marks (1/4), while 5-choice exams often deduct 0.20 or 0.33.',
      },
      {
        q: 'Can Score drop below zero on a tough quiz?',
        a: 'Yes—if wrong-answer deductions exceed points from Correct Answers, the calculator displays the negative net result.',
      },
    ],
  },

  'edu-pomodoro-planner': {
    seoTitle: `Free Study Break (Pomodoro) Time Planner Calculator | ${SITE_NAME}`,
    metaDescription:
      'Convert planned study hours into 25-minute focus blocks and 5-minute rest breaks using our free Study Break (Pomodoro) Time Planner Calculator.',
    howToUseSteps: [
      'Type your intended study block length inside Total Study Hours Planned.',
      'Review how many 25-minute Pomodoro cycles and 5-minute break intervals fit your schedule.',
    ],
    formulaExplanation:
      'The Pomodoro method converts total planned hours into minutes and divides by 25-minute deep-focus intervals, pairing each finished sprint with a 5-minute mental reset. Formula: Pomodoro Sessions = round((Total Study Hours Planned × 60) / 25); Break Minutes = Sessions × 5.',
    practicalExample:
      'Planning Total Study Hours Planned = 4 (240 minutes) yields 10 Pomodoro Sessions (250 mins study + 50 mins breaks).',
    faqs: [
      {
        q: 'Why does 4 hours show 250 minutes study plus 50 minutes of breaks?',
        a: 'The tool rounds 240 / 25 = 9.6 up to 10 complete 25-minute focus sprints and allocates 5 rest minutes per sprint.',
      },
      {
        q: 'When should students take a longer 15–30 minute break?',
        a: 'Classic Pomodoro guidelines recommend taking a longer 20-minute recharge break after completing every 4 focus sessions.',
      },
      {
        q: 'Can I enter half-hour increments like 1.5 in Total Study Hours Planned?',
        a: 'Yes—decimals such as 1.5 or 2.5 convert cleanly to 90 or 150 minutes before computing session counts.',
      },
    ],
  },

  'edu-tuition-installment': {
    seoTitle: `Free University Tuition Fee Installment Calculator (PKR) | ${SITE_NAME}`,
    metaDescription:
      'Divide your semester university tuition into equal rupee installment payments using our free University Tuition Fee Installment Calculator (PKR).',
    howToUseSteps: [
      'Enter your full billed fee inside Total Semester Tuition Fee (PKR).',
      'Type how many split payments your university approves into Number of Installments.',
      'Read the rupee amount due per installment.',
    ],
    formulaExplanation:
      'Fee installment planning splits a lump-sum semester invoice evenly across approved payment dates so families can budget monthly cash flow. Formula: Installment Amount (PKR) = Total Semester Tuition Fee (PKR) / Number of Installments.',
    practicalExample:
      'Splitting Total Semester Tuition Fee (PKR) = 150000 across Number of Installments = 3 produces PKR 50,000 / installment.',
    faqs: [
      {
        q: 'What if Number of Installments is set below 1?',
        a: 'The tool enforces a minimum divisor of 1 installment so the result always reflects at least one full payment.',
      },
      {
        q: 'Does this account for university installment processing fees?',
        a: 'Add any one-time admin surcharge directly onto Total Semester Tuition Fee (PKR) before splitting if your campus charges a fee.',
      },
      {
        q: 'Should scholarships or waivers be subtracted first?',
        a: 'Yes—enter your net payable balance after merit discounts inside Total Semester Tuition Fee (PKR).',
      },
    ],
  },

  'edu-reading-time-essay': {
    seoTitle: `Free Essay & Thesis Reading Time Calculator – Speaking Minutes | ${SITE_NAME}`,
    metaDescription:
      'Estimate silent reading minutes and aloud speech delivery time from essay word count using our free Essay & Thesis Reading Time Calculator.',
    howToUseSteps: [
      'Type the length of your paper or speech into Total Word Count.',
      'Check silent reading time alongside estimated presentation speaking duration.',
    ],
    formulaExplanation:
      'Silent reading averages roughly 250 words per minute, whereas clear oral thesis defenses and class presentations flow slower at about 130 words per minute. Formula: Reading Time (mins) = Total Word Count / 250; Speaking Time (mins) = Total Word Count / 130.',
    practicalExample:
      'A paper with Total Word Count = 3500 takes ~14.0 mins reading time silently and ~26.9 minutes to present aloud at 130 WPM.',
    faqs: [
      {
        q: 'How many words fit cleanly inside a 10-minute thesis presentation?',
        a: 'At 130 spoken words per minute, aim for roughly 1,250–1,300 scripted words to leave brief pauses for slides.',
      },
      {
        q: 'Should footnotes and bibliography entries go into Total Word Count?',
        a: 'Exclude citation lists when timing a spoken talk, though silent reviewers often skim references quickly.',
      },
      {
        q: 'Why is silent reading nearly twice as fast as speaking aloud?',
        a: 'Vocal articulation, breathing pauses, and audience pacing constrain spoken delivery compared with visual reading.',
      },
    ],
  },

  'edu-score-std-dev': {
    seoTitle: `Free Standard Deviation of Test Scores Calculator – Class Spread | ${SITE_NAME}`,
    metaDescription:
      'Measure score spread, variance, and class average across student exam results using our free Standard Deviation of Test Scores Calculator.',
    howToUseSteps: [
      'List at least two exam grades separated by commas inside Scores (comma separated).',
      'Inspect sample standard deviation alongside the class mean score and sample variance.',
    ],
    formulaExplanation:
      'Sample standard deviation quantifies how tightly test marks cluster around the class mean using Bessel’s correction (n − 1) in the denominator. Formula: s = √[ Σ(x − x̄)² / (n − 1) ].',
    practicalExample:
      'Evaluating Scores (comma separated) = 70, 75, 80, 85, 90 yields Mean Score: 80.0, Variance: 62.50, and Standard Deviation = 7.91.',
    faqs: [
      {
        q: 'Why does the calculator require at least 2 entries in Scores (comma separated)?',
        a: 'Sample variance divides by (n − 1), which becomes zero—an invalid divisor—if only one score is supplied.',
      },
      {
        q: 'What does a small Standard Deviation tell teachers about an exam?',
        a: 'Low spread means nearly all students scored close to the average, whereas high spread shows wide gaps between top and struggling performers.',
      },
      {
        q: 'How is Variance related to Standard Deviation = 7.91?',
        a: 'Standard deviation is the square root of variance (√62.50 ≈ 7.91), bringing spread back into original test-score units.',
      },
    ],
  },

  'edu-scholarship-check': {
    seoTitle: `Free Scholarship Eligibility GPA Checker Calculator – Merit Tiers | ${SITE_NAME}`,
    metaDescription:
      'Check if your 4.0 CGPA qualifies for 25%, 50%, or 100% merit tuition waivers using our free Scholarship Eligibility GPA Checker Calculator.',
    howToUseSteps: [
      'Type your transcript cumulative grade point average into Current CGPA (out of 4.0).',
      'View the corresponding merit waiver tier immediately.',
    ],
    formulaExplanation:
      'University merit scholarship brackets compare your Current CGPA against standard honor tiers: 3.80+ reaches Full Scholarship (100% Tuition Waiver), 3.50–3.79 reaches Dean’s List (50% Waiver), and 3.20–3.49 reaches Merit Recognition (25% Waiver). Formula: Tier = Benchmark Lookup(Current CGPA).',
    practicalExample:
      'Entering Current CGPA (out of 4.0) = 3.65 qualifies under Dean’s List / Partial Scholarship Tier (50% Tuition Waiver).',
    faqs: [
      {
        q: 'Do merit scholarships look at Current CGPA alone or also credit load?',
        a: 'Most financial aid offices require full-time enrollment (typically 12+ credits per semester) with no failing grades alongside minimum CGPA.',
      },
      {
        q: 'What happens if my CGPA sits at 3.49 instead of 3.50?',
        a: 'Because tiers use strict thresholds, 3.49 maps to the 25% Merit Recognition Tier unless rounded or reviewed by petition.',
      },
      {
        q: 'Are campus-specific scholarship cutoffs identical everywhere?',
        a: 'No—private and public universities set their own GPA cutoffs each academic year, so confirm exact brackets with your financial aid office.',
      },
    ],
  },

  'edu-textbook-planner': {
    seoTitle: `Free Textbook Reading Schedule Planner Calculator – Daily Pages | ${SITE_NAME}`,
    metaDescription:
      'Calculate daily page targets to finish any assigned textbook before exam week with our free Textbook Reading Schedule Planner Calculator.',
    howToUseSteps: [
      'Enter book length inside Total Pages in Textbook.',
      'Type how many study days remain in Days Available.',
      'Check the rounded daily page target needed to finish on schedule.',
    ],
    formulaExplanation:
      'Daily reading pacing divides total book length by available calendar days and rounds up to whole pages so no reading spills past your deadline. Formula: Pages per Day = ceil(Total Pages in Textbook / Days Available).',
    practicalExample:
      'Reading Total Pages in Textbook = 450 across Days Available = 30 requires 450 / 30 = 15 pages / day.',
    faqs: [
      {
        q: 'Should Total Pages in Textbook include index and appendix pages?',
        a: 'Subtract back-matter index pages so your daily pace covers only actual assigned chapter content.',
      },
      {
        q: 'Why does the output round up partial page numbers?',
        a: 'Rounding up guarantees you complete every required page on or before your final study day rather than falling short.',
      },
      {
        q: 'How should I adjust Days Available if I skip reading on Sundays?',
        a: 'Count only active reading days—such as 25 study days inside a 30-day month—so rest days are built into the plan.',
      },
    ],
  },

  'edu-assignment-contrib': {
    seoTitle: `Free Assignment Score Contribution Calculator – Weighted Points | ${SITE_NAME}`,
    metaDescription:
      'See how many final percentage points a single project or lab adds to your grade with our free Assignment Score Contribution Calculator.',
    howToUseSteps: [
      'Type the mark you earned on the task inside Assignment Score (%).',
      'Enter what share of the syllabus the task holds into Assignment Course Weight (%).',
      'Read the exact percentage points added toward your final course grade.',
    ],
    formulaExplanation:
      'Every weighted task earns only a fraction of its syllabus value equal to your percentage score on that task multiplied by its decimal weight. Formula: Course Contribution (%) = Assignment Score (%) × (Assignment Course Weight / 100).',
    practicalExample:
      'Earning Assignment Score (%) = 92 on a project with Assignment Course Weight (%) = 15 adds 92 × 0.15 = +13.80% toward Final Grade (out of the 15% maximum possible).',
    faqs: [
      {
        q: 'What is the maximum possible contribution if Assignment Course Weight (%) is 15%?',
        a: 'Even a 100% score can add at most +15.00% toward Final Grade, so +13.80% means you captured nearly all available points.',
      },
      {
        q: 'Can I add multiple assignment contributions together?',
        a: 'Yes—compute each syllabus item separately and sum the contributions as long as total weights equal 100%.',
      },
      {
        q: 'How much did losing 8% on a 15%-weighted assignment cost overall?',
        a: 'Missing 8% of 15% deducted only 1.20 percentage points from your total semester score.',
      },
    ],
  },

  'edu-flashcard-intervals': {
    seoTitle: `Free Flashcard Review Interval Planner Calculator – Spaced Days | ${SITE_NAME}`,
    metaDescription:
      'Calculate optimal spaced-repetition review gaps in days based on recall streak using our free Flashcard Review Interval Planner Calculator.',
    howToUseSteps: [
      'Enter how many times in a row you recalled a card correctly inside Successful Repetition Number.',
      'Check the recommended wait interval in days before your next active recall session.',
    ],
    formulaExplanation:
      'Spaced repetition strengthens long-term memory by stretching review gaps exponentially after every accurate recall rather than cramming daily. Formula: Review Interval (Days) = round(2.2 ^ Successful Repetition Number).',
    practicalExample:
      'For Successful Repetition Number = 3, 2.2³ = 10.65 rounds to Review in 11 Days.',
    faqs: [
      {
        q: 'What happens to Successful Repetition Number if I forget a flashcard?',
        a: 'Reset that card back to repetition 1 (about 2 days) so weak concepts receive immediate reinforcement.',
      },
      {
        q: 'How long does the gap stretch by repetition #5?',
        a: 'At 2.2⁵ ≈ 51.5, well-mastered cards wait roughly 52 days between reviews, freeing time for harder material.',
      },
      {
        q: 'Why does spaced repetition beat rereading notes?',
        a: 'Forcing active retrieval right before memory fades strengthens neural pathways far better than passive review.',
      },
    ],
  },

  'edu-credit-cost': {
    seoTitle: `Free College Credit Hours Cost Estimator (PKR) Calculator | ${SITE_NAME}`,
    metaDescription:
      'Estimate total rupee tuition from enrolled credit hours and per-credit fees with our free College Credit Hours Cost Estimator (PKR).',
    howToUseSteps: [
      'Type your enrolled course load inside Number of Credit Hours.',
      'Enter your university’s charge per unit into Fee per Credit Hour (PKR).',
      'Read total estimated semester tuition cost in Pakistani Rupees.',
    ],
    formulaExplanation:
      'Credit-hour billing calculates base semester tuition strictly from registered academic units multiplied by your program’s published rupee rate per credit hour. Formula: Total Tuition (PKR) = Number of Credit Hours × Fee per Credit Hour (PKR).',
    practicalExample:
      'Registering Number of Credit Hours = 18 at Fee per Credit Hour (PKR) = 7500 estimates 18 × 7,500 = PKR 135,000.',
    faqs: [
      {
        q: 'Are university admission, lab, or library fees included in PKR 135,000?',
        a: 'No—this calculation estimates credit-hour tuition only; add fixed semester registration or lab charges separately.',
      },
      {
        q: 'How much does dropping one 3-credit elective save at PKR 7,500/credit?',
        a: 'Dropping 3 credit hours reduces variable tuition by PKR 22,500 before any refund-deadline penalties.',
      },
      {
        q: 'Do summer semester courses bill using the same credit-hour math?',
        a: 'Yes—enter your summer credit load (typically 3 to 6) and campus per-credit rate to estimate summer billing.',
      },
    ],
  },

  'edu-grade-deficit': {
    seoTitle: `Free Grade Point Deficit Calculator – Future GPA Target | ${SITE_NAME}`,
    metaDescription:
      'Find the exact GPA needed across remaining credit hours to raise your CGPA to your goal using our free Grade Point Deficit Calculator.',
    howToUseSteps: [
      'Enter your standing cumulative average into Current CGPA.',
      'Input finished credits under Completed Credit Hours.',
      'Set your goal inside Target CGPA and enter remaining degree credits in Remaining Credit Hours.',
    ],
    formulaExplanation:
      'Raising a cumulative GPA requires generating enough extra quality points over future credits to overcome any prior deficit against your target average across total degree credits. Formula: Required GPA = [Target CGPA × (Completed Credits + Remaining Credits) − (Current CGPA × Completed Credits)] / Remaining Credits.',
    practicalExample:
      'With Current CGPA = 2.7 across Completed Credit Hours = 60, reaching Target CGPA = 3.0 over Remaining Credit Hours = 60 demands 3.30 GPA needed in future semesters.',
    faqs: [
      {
        q: 'What does it mean if Required GPA exceeds 4.00?',
        a: 'When the output climbs above 4.0, raising your CGPA to that target within the remaining credits is mathematically impossible without retaking failed courses.',
      },
      {
        q: 'Why does having fewer Remaining Credit Hours make CGPA harder to move?',
        a: 'With 90+ credits already locked in, new quality points represent a smaller fraction of your total transcript denominator.',
      },
      {
        q: 'Can I enter just next semester’s 15 credits inside Remaining Credit Hours?',
        a: 'Yes—setting Remaining Credit Hours = 15 reveals what GPA you would need in a single semester to hit Target CGPA immediately.',
      },
    ],
  },

  'edu-class-percentile': {
    seoTitle: `Free Class Rank Percentile Calculator – Cohort Standing | ${SITE_NAME}`,
    metaDescription:
      'Convert your numeric class position and cohort size into a percentile rank with our free Class Rank Percentile Calculator.',
    howToUseSteps: [
      'Enter your standing position (where 1 is top rank) inside Your Class Rank (1 = Top).',
      'Type total cohort headcount into Total Students in Class.',
      'Check what percentage of classmates your rank outperforms.',
    ],
    formulaExplanation:
      'Academic percentile rank measures the share of students in your cohort scoring below your position by subtracting your rank from class size and dividing by total enrollment. Formula: Percentile = [(Total Students in Class − Your Class Rank) / Total Students in Class] × 100.',
    practicalExample:
      'Holding Your Class Rank (1 = Top) = 5 out of Total Students in Class = 120 calculates [(120 − 5) / 120] × 100 = 95.8th Percentile.',
    faqs: [
      {
        q: 'Why does Rank 1 out of 120 show 99.2nd Percentile rather than 100th?',
        a: 'Subtracting 1 from 120 counts strictly the 119 students ranked below you (119 / 120 = 99.2%), as you cannot outrank yourself.',
      },
      {
        q: 'What percentile qualifies for top-10% honors lists?',
        a: 'Any position producing the 90.0th Percentile or higher places you within the top tenth of your graduating cohort.',
      },
      {
        q: 'Why must Your Class Rank never exceed Total Students in Class?',
        a: 'A student cannot rank 125th in a 120-person class; ensure Total Students in Class is equal to or larger than your rank.',
      },
    ],
  },

  'edu-gpa-difference': {
    seoTitle: `Free Semester GPA Impact Calculator – Next Term CGPA Shift | ${SITE_NAME}`,
    metaDescription:
      'See exactly how much one upcoming semester will boost or lower your cumulative average using our free Semester GPA Impact Calculator.',
    howToUseSteps: [
      'Type your existing cumulative average inside Current CGPA.',
      'Enter cumulative units already finished into Total Earned Credits So Far.',
      'Fill in Expected Next Semester GPA and Next Semester Credits to preview your updated CGPA and net shift.',
    ],
    formulaExplanation:
      'Your updated cumulative GPA combines existing quality points (Current CGPA × Earned Credits) with projected next-term quality points, then divides by total cumulative credits. Formula: New CGPA = [(Current CGPA × Earned Credits) + (Expected Next GPA × Next Credits)] / (Earned Credits + Next Credits).',
    practicalExample:
      'Combining Current CGPA = 3.2 across Total Earned Credits So Far = 45 with Expected Next Semester GPA = 3.8 over Next Semester Credits = 15 yields 3.35 New CGPA (+0.15 increase).',
    faqs: [
      {
        q: 'How can I tell instantly whether next semester will raise my CGPA?',
        a: 'Whenever Expected Next Semester GPA exceeds Current CGPA, your overall average rises; scoring below Current CGPA pulls it down.',
      },
      {
        q: 'Why does taking 18 credits instead of 12 amplify CGPA movement?',
        a: 'More Next Semester Credits assign greater weight to your upcoming semester relative to previously earned units.',
      },
      {
        q: 'Should transfer credits without GPA points go into Total Earned Credits So Far?',
        a: 'Exclude non-graded pass/transfer hours so only GPA-bearing credits weight your quality-point total.',
      },
    ],
  },

  'edu-cgpa-semesters': {
    seoTitle: `Free Multi-Semester CGPA Calculator – 4-Term Average | ${SITE_NAME}`,
    metaDescription:
      'Average your four semester GPAs quickly to check multi-term academic standing with our free Multi-Semester CGPA Calculator.',
    howToUseSteps: [
      'Enter your first-term result inside Semester 1 GPA.',
      'Type your second-term grade point average into Semester 2 GPA.',
      'Fill in Semester 3 GPA and Semester 4 GPA to compute the four-term cumulative average.',
    ],
    formulaExplanation:
      'When all four semesters carry identical credit loads, cumulative GPA equals the unweighted arithmetic average of the four term GPAs. Formula: CGPA = (Semester 1 GPA + Semester 2 GPA + Semester 3 GPA + Semester 4 GPA) / 4.',
    practicalExample:
      'Averaging Semester 1 GPA = 3.2, Semester 2 GPA = 3.4, Semester 3 GPA = 3.6, and Semester 4 GPA = 3.5 calculates 13.7 / 4 = CGPA = 3.42.',
    faqs: [
      {
        q: 'When should I use this 4-box tool versus the weighted CGPA Calculator?',
        a: 'Use this 4-semester view when each term carried roughly equal credit hours (such as 15 credits every semester); use the weighted tool when credit loads varied.',
      },
      {
        q: 'Can I preview a fourth semester that has not finished yet?',
        a: 'Yes—enter your three transcript GPAs plus a target estimate in Semester 4 GPA to project where Year 2 ends.',
      },
      {
        q: 'Why does (3.2 + 3.4 + 3.6 + 3.5) / 4 display 3.42?',
        a: 'Standard binary floating-point rounding at two decimals outputs 3.42 from 3.425 (13.7 ÷ 4).',
      },
    ],
  },

  'edu-final-exam-weight': {
    seoTitle: `Free Final Exam Required Score Calculator – Course Goal | ${SITE_NAME}`,
    metaDescription:
      'Determine the minimum final exam percentage required based on final syllabus weight with our free Final Exam Required Score Calculator.',
    howToUseSteps: [
      'Set your desired final semester score inside Target Overall Grade (%).',
      'Enter your standing coursework percentage in Current Course Grade (%).',
      'Specify how much the final counts in Final Exam Weight (%) to compute the score required.',
    ],
    formulaExplanation:
      'Knowing how heavily the final exam counts toward the syllabus lets you isolate its contribution by subtracting your weighted pre-final marks from your goal grade. Formula: Required Final Score = [Target Overall Grade − (Current Course Grade × (1 − Final Exam Weight))] / Final Exam Weight.',
    practicalExample:
      'Aiming for Target Overall Grade (%) = 85 with Current Course Grade (%) = 80 and Final Exam Weight (%) = 30 yields [85 − (80 × 0.70)] / 0.30 = 96.7% Required on Final.',
    faqs: [
      {
        q: 'Why does a 30% Final Exam Weight (%) require 96.7% just to rise from 80% to 85%?',
        a: 'Because 70% of your grade is already set at 80%, the remaining 30% paper must supply all 5 extra overall percentage points.',
      },
      {
        q: 'What happens if Target Overall Grade (%) is lower than Current Course Grade (%)?',
        a: 'The formula calculates the lowest safety score you can get on the final without slipping below your target grade.',
      },
      {
        q: 'Can Final Exam Weight (%) be entered as 0?',
        a: 'No—if a course has no final exam (0% weight), your Current Course Grade (%) is already final.',
      },
    ],
  },

  'edu-flashcard-timer': {
    seoTitle: `Free Flashcard Study Session Timer Calculator – Deck Pace | ${SITE_NAME}`,
    metaDescription:
      'Estimate total minutes and hours needed to review a full flashcard deck at your recall pace with our free Flashcard Study Session Timer Calculator.',
    howToUseSteps: [
      'Type your deck size inside Total Flashcards.',
      'Enter your average recall speed into Seconds per Card.',
      'Check total study duration displayed in both minutes and decimal hours.',
    ],
    formulaExplanation:
      'Deck review timing multiplies card count by average seconds spent reading, recalling, and flipping each card, then divides by 60 to express minutes and by 3,600 for hours. Formula: Total Minutes = (Total Flashcards × Seconds per Card) / 60.',
    practicalExample:
      'Reviewing Total Flashcards = 120 at Seconds per Card = 30 takes (120 × 30) / 60 = ~60.0 Minutes Total (1.00 hours).',
    faqs: [
      {
        q: 'What Seconds per Card pace works best for medical or language vocabulary?',
        a: 'Quick recall terms often average 10–15 seconds per card, while multi-step anatomy or pharmacology cards take 30–45 seconds.',
      },
      {
        q: 'How can I fit a 120-card deck inside two 30-minute bus rides?',
        a: 'Trimming pace to 20 Seconds per Card drops total deck duration to 40 minutes, or split the deck into 60 cards per commute.',
      },
      {
        q: 'Does this timer add extra minutes for reshuffling missed cards?',
        a: 'Add roughly 20% extra cards to Total Flashcards if you plan a second pass for cards answered wrong.',
      },
    ],
  },

  'edu-grade-letter': {
    seoTitle: `Free Grade Letter to Percentage Converter Calculator – A+ to C | ${SITE_NAME}`,
    metaDescription:
      'Map letter grades A+, A, B, and C to standard academic midpoint percentages instantly using our free Grade Letter to Percentage Converter Calculator.',
    howToUseSteps: [
      'Select your transcript grade tier from the Letter Grade dropdown (A+, A, B, or C).',
      'Read the standard midpoint percentage equivalent displayed immediately.',
    ],
    formulaExplanation:
      'When transcripts report only letter grades without numeric marks, admissions systems commonly substitute the midpoint of each standard 10-point percentage band: A+ (90–100%) → 95%, A (80–89%) → 85%, B (70–79%) → 75%, and C (60–69%) → 65%. Formula: Equivalent % = Band Midpoint(Letter Grade).',
    practicalExample:
      'Choosing Letter Grade = A (80 - 89%) returns ~85% Equivalent midpoint.',
    faqs: [
      {
        q: 'Why do letter-to-percentage converters use midpoints like 85% for an A?',
        a: 'Without raw exam scores, the midpoint of the 80%–89% band provides an unbiased statistical estimate across large student cohorts.',
      },
      {
        q: 'Can an A+ still correspond to 90% on a transcript?',
        a: 'Yes—actual earned scores inside A+ span 90% to 100%, with 95% representing the center of that interval.',
      },
      {
        q: 'Should I use midpoint estimates on official scholarship applications if raw marks exist?',
        a: 'Always report exact transcript percentages when available, reserving letter midpoints for estimates when numeric marks are unlisted.',
      },
    ],
  },
};
