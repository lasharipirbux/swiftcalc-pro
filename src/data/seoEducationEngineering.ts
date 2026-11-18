import { ConstructionHealthSeoContent } from './seoConstructionHealth';

export const educationEngineeringSeoMap: Record<string, ConstructionHealthSeoContent> = {
  // ==========================================
  // EDUCATION & STUDENT (29 Calculators)
  // ==========================================
  'edu-gpa-calc': {
    intro: 'Universities across Pakistan—including NUST, COMSATS, FAST-NU, LUMS, UET, and Punjab University—evaluate semester academic performance on a 4.00 Grade Point Average (GPA) scale. Because a 4-credit lab course carries more weight than a 2-credit elective, a simple average of your grade points will give the wrong result. This calculator computes your exact weighted semester GPA and total quality points.',
    howItWorks: 'Each course’s numeric grade point (e.g., 4.0 for A, 3.7 for A−, 3.3 for B+, 3.0 for B) is multiplied by its credit hours to find the Quality Points for that subject. The sum of all quality points is then divided by the total credit hours taken in the semester. Formula: GPA = Σ(Course Grade Point × Course Credit Hours) / Σ(Course Credit Hours).',
    workedExample: 'Suppose a BS Computer Science student in Islamabad takes four courses with grade points of 4.0, 3.7, 3.0, and 3.5, and corresponding credit hours of 3, 3, 4, and 3. Multiplying each pair gives 12.0 + 11.1 + 12.0 + 10.5 = 45.6 Total Quality Points across 13 Total Credits, yielding a semester GPA of 3.51 / 4.0.',
    faqs: [
      { q: 'What is the standard HEC 4.0 grading scale used in Pakistani universities?', a: 'Under standard HEC guidelines, an A is 4.00, A− is 3.67 (or 3.70), B+ is 3.33, B is 3.00, B− is 2.67, C+ is 2.33, C is 2.00, and F is 0.00.' },
      { q: 'Why must grades and credit hours have the same number of comma-separated entries?', a: 'Every grade must pair one-to-one with its respective course credit hour weight so quality points can be multiplied accurately.' },
      { q: 'Does failing a 1-credit lab hurt my GPA as much as failing a 3-credit theory course?', a: 'No, a 3-credit course carries three times the weight of a 1-credit lab in the denominator, so high-credit courses shift your GPA much more.' },
      { q: 'What minimum semester GPA is required to avoid academic probation?', a: 'Most HEC-recognized universities require undergraduate students to maintain a minimum GPA of 2.00 out of 4.00 to remain in good academic standing.' }
    ],
    whoUses: 'Who uses this: Undergraduate and graduate university students across Pakistan, academic advisors, and scholarship applicants.'
  },
  'edu-cgpa-calc': {
    intro: 'Your Cumulative Grade Point Average (CGPA) tracks your overall academic standing across all completed semesters from freshman year to graduation. Because some semesters have 15 credit hours while others have 18 or 21 credit hours, your true CGPA must weight each semester’s GPA by that semester’s credit load.',
    howItWorks: 'For each completed semester, the calculator multiplies the Semester GPA (SGPA) by the total credit hours completed in that semester. It then sums the cumulative quality points across all semesters and divides by total cumulative credit hours. Formula: CGPA = Σ(Semester GPA × Semester Credits) / Σ(Semester Credits).',
    workedExample: 'An engineering student at UET Lahore completes three semesters with GPAs of 3.5, 3.7, and 3.6, carrying 15, 16, and 15 credit hours respectively. Total quality points equal (3.5×15) + (3.7×16) + (3.6×15) = 52.5 + 59.2 + 54.0 = 165.7 divided by 46 cumulative credits, resulting in a 3.60 CGPA.',
    faqs: [
      { q: 'Why can’t I just add my semester GPAs and divide by the number of semesters?', a: 'A simple average only works if every single semester had the exact same number of credit hours; if credit hours vary, weighting by credits is required.' },
      { q: 'What CGPA is required to graduate with a BS degree in Pakistan?', a: 'HEC regulations require a minimum cumulative CGPA of 2.00 for a 4-year BS degree and typically 2.50 for an MS/MPhil degree.' },
      { q: 'How do repeated courses affect my CGPA?', a: 'When you repeat a course to improve a D or F grade, only the newer improved grade and single credit count are retained in your cumulative totals.' },
      { q: 'What CGPA is considered competitive for Fulbright or Commonwealth scholarships?', a: 'While minimum eligibility is often 3.00 CGPA, competitive shortlisted candidates typically hold a CGPA of 3.50 or higher.' }
    ],
    whoUses: 'Who uses this: Final-year university students preparing CVs, HEC degree attestation applicants, and graduate school candidates.'
  },
  'edu-marks-percentage': {
    intro: 'Every year, millions of Pakistani students receive Matric (SSC), Intermediate (FSc/FA/ICS), MDCAT, and NTS results expressed as raw marks out of a total (such as 945 out of 1100 or 980 out of 1200). This calculator converts your obtained marks and total marks into an exact percentage to two decimal places.',
    howItWorks: 'The calculator divides your Marks Obtained by the Total Maximum Marks of the examination and multiplies the ratio by 100. Formula: Percentage (%) = (Marks Obtained / Total Marks) × 100.',
    workedExample: 'A student scoring 425 marks out of 500 in FSc Part-I board exams achieves (425 / 500) × 100 = 85.00%. Similarly, scoring 990 out of 1100 in BISE Matric equals 90.00%.',
    faqs: [
      { q: 'What are the total marks for Matric and Intermediate in BISE Punjab and Federal Board?', a: 'Historically 1100 marks (550 per part), though recent BISE revisions have updated total marks to 1200 in several boards after adding Holy Quran translation.' },
      { q: 'How do medical colleges calculate the MDCAT merit aggregate in Pakistan?', a: 'PMDC aggregate typically combines 10% Matric percentage + 40% FSc Pre-Medical percentage + 50% MDCAT percentage.' },
      { q: 'Why do two decimal places matter in Pakistani university admissions?', a: 'On public-sector medical (KEMU, AIMC, DUHS) and engineering merit lists, tens of candidates are separated by just 0.01% to 0.05%!' },
      { q: 'Can I use this for single-subject test scores?', a: 'Yes, enter any quiz or paper score (such as 68 out of 75 in Physics) to see your exact subject percentage.' }
    ],
    whoUses: 'Who uses this: Matric and FSc board students, parents, college admission clerks, and CSS exam candidates.'
  },
  'edu-grade-calc': {
    intro: 'Converting raw marks and exam percentages into standard academic letter grades (A+, A, B, C, D, or F) helps teachers prepare report cards and students gauge where their performance stands on institutional grading rubrics.',
    howItWorks: 'First, the calculator computes your percentage score as (Marks Obtained / Total Marks) × 100. It then maps that percentage against standard academic tier cutoffs: 90%+ for A+, 80–89.9% for A, 70–79.9% for B, 60–69.9% for C, 50–59.9% for D, and below 50% for F. Formula: Percentage = (Obtained / Total) × 100 → Mapped to Letter Tier.',
    workedExample: 'Scoring 82 marks out of 100 in a university midterm exam yields 82.0%, which maps to the letter grade "A (Excellent)".',
    faqs: [
      { q: 'What is the passing percentage in most Pakistani universities vs BISE boards?', a: 'Most universities set 50% as the minimum passing threshold (Grade D), whereas BISE Matric/Inter boards historically set 33% (recently moving toward 40% under IBCC reforms).' },
      { q: 'What percentage is required for an A+ (A-One) grade in BISE board exams?', a: 'In BISE boards, 80% and above earns an A+ (A1) grade; in university absolute grading scales, A+ or A typically starts at 85% or 90%.' },
      { q: 'Does this use absolute grading or relative (curve) grading?', a: 'This calculator uses fixed absolute percentage cutoffs; in relative grading, cutoffs shift based on the class average and standard deviation.' },
      { q: 'Can I enter total marks other than 100, like 75 or 1100?', a: 'Yes, you can enter any total marks value and the calculator automatically normalizes it to a 100% scale first.' }
    ],
    whoUses: 'Who uses this: School and college teachers grading papers, university students, and tuition academy instructors.'
  },
  'edu-average-marks': {
    intro: 'When you have completed five or six subjects in a school term or multiple monthly class tests at a coaching academy (like KIPS or Step), knowing both your total aggregate sum and your mean score per subject highlights your overall consistency.',
    howItWorks: 'The calculator parses your comma-separated list of marks, sums all valid numeric scores together, and divides the total sum by the number of exams entered. Formula: Average = (x₁ + x₂ + ... + xₙ) / n.',
    workedExample: 'A student who scores 80, 85, 90, 88, and 95 across 5 monthly subject tests accumulates a Total Sum of 438 marks across 5 exams, resulting in an Average of 87.60 marks per exam.',
    faqs: [
      { q: 'How many test scores can I enter at once?', a: 'You can enter as many comma-separated scores as you like—from 2 quizzes up to 20+ full-length mock tests.' },
      { q: 'What happens if I accidentally type an extra space after a comma?', a: 'The parser automatically trims whitespace around each number so spaces never affect the calculation.' },
      { q: 'Is the average the same as my overall percentage?', a: 'If every test was out of 100 marks, your average marks equal your overall percentage; if tests had different total marks, use the Percentage Calculator with the summed totals.' },
      { q: 'How can teachers use this for class performance analysis?', a: 'A teacher can paste the marks of all students in a section to instantly find the class mean score for a midterm paper.' }
    ],
    whoUses: 'Who uses this: School teachers calculating class averages, students tracking academy test series, and parents reviewing report cards.'
  },
  'edu-attendance-calc': {
    intro: 'Under Pakistan Engineering Council (PEC), PMDC, and HEC university regulations, students must maintain at least 75% lecture attendance in every course to sit in the final semester examination. Being "short of attendance" leads to exam debarment. This calculator shows your current attendance percentage and the exact number of consecutive classes you must attend to reach the 75% safe zone.',
    howItWorks: 'Current attendance is (Attended / Total) × 100. If your attendance is below 75%, each future class you attend increases both the numerator and denominator by 1: (Attended + N) / (Total + N) ≥ 0.75. Solving for N yields the exact consecutive classes needed. Formula: Classes Needed (N) = ceil((0.75 × Total − Attended) / 0.25).',
    workedExample: 'A student who has attended 32 out of 45 lectures held so far has 71.1% attendance. To cross the mandatory 75% threshold, they must attend ceil((0.75 × 45 − 32) / 0.25) = ceil(1.75 / 0.25) = 7 more consecutive classes without a single absence.',
    faqs: [
      { q: 'Why do I need 7 consecutive classes when 75% of 45 is only 33.75 (about 2 classes away)?', a: 'Because every new class you attend also increases the "Total Classes Held" denominator! After 7 more classes, you will have 39 attended out of 52 total, which is exactly 75.0%.' },
      { q: 'What is the maximum number of absences allowed in a standard 45-lecture 3-credit university course?', a: '25% of 45 lectures is 11.25, meaning you can miss at most 11 single-hour lectures (or five 1.5-hour sessions) in a semester.' },
      { q: 'Do medical certificates excuse absences from the 75% HEC/PEC rule?', a: 'Most Pakistani universities treat the 25% margin itself as the buffer for illness and emergencies, rarely granting waivers below 75%.' },
      { q: 'What if the calculator says I am already above 75%?', a: 'It confirms you are safe and currently eligible to receive your final exam roll number slip.' }
    ],
    whoUses: 'Who uses this: University and medical college students monitoring lecture attendance, class representatives, and course coordinators.'
  },
  'edu-final-exam-marks': {
    intro: 'Heading into final exams week, every university student asks the same question: "Given my quiz, assignment, and midterm marks so far, what exact score do I need on the final exam to get an A or B in this course?" This calculator solves that exact target.',
    howItWorks: 'Your current percentage score multiplied by the completed course weight gives the points you have already locked in. Subtracting those locked-in points from your Target Overall Grade and dividing by the remaining Final Exam Weight gives the exact percentage you must score on the final paper. Formula: Required Final % = [Target % − (Current % × Completed Weight)] / (1 − Completed Weight).',
    workedExample: 'Suppose you currently hold a 78% average across quizzes, assignments, and midterms that make up 60% of the course grade, and you want an 85% overall grade (an A). With the final exam worth the remaining 40%, you need [85 − (78 × 0.60)] / 0.40 = 38.2 / 0.40 = 95.5% on the final exam.',
    faqs: [
      { q: 'What if the required score on the final exam comes out above 100%?', a: 'If the result is over 100% (e.g., 108%), reaching that target grade is mathematically impossible without bonus marks, so lower your target grade slightly (e.g., from 85% to 80%).' },
      { q: 'How do I convert the required final exam percentage into raw marks out of 50?', a: 'Multiply the required percentage by 0.50—for example, needing 95.5% on a 50-mark final paper means scoring 47.75 out of 50.' },
      { q: 'What is the typical weight of a Final Exam in Pakistani universities?', a: 'Most universities weight the Final Exam at 40% to 50%, Midterms at 25% to 30%, and Quizzes/Assignments/Projects at 20% to 30%.' },
      { q: 'What if the required final score is negative?', a: 'A negative or zero result means you have already secured enough sessional marks to pass that target threshold even with a 0 on the final (provided there is no separate final-exam passing rule).' }
    ],
    whoUses: 'Who uses this: University students prioritizing exam preparation during finals week and academic tutors.'
  },
  'edu-study-planner': {
    intro: 'Preparing for comprehensive board exams (Matric/FSc), CA module exams, or CSS papers requires covering dozens of textbook chapters before exam day. Instead of cramming at the last minute, this planner calculates how many hours you must study each day to finish your syllabus on time.',
    howItWorks: 'The calculator multiplies the total number of chapters or topics by the average hours required to master one chapter to find Total Study Hours Needed, then divides by the number of days remaining until the exam. Formula: Daily Study Hours = (Total Chapters × Hours per Chapter) / Days Until Exam.',
    workedExample: 'With 14 days left until an exam, 28 chapters to cover, and an average of 1.5 hours needed per chapter, the total workload is 42.0 study hours. Dividing 42 by 14 days requires exactly 3.0 hours of focused study per day.',
    faqs: [
      { q: 'Should I set "Days Until Exam" to the exact exam day or 2 days earlier?', a: 'Always subtract 2 to 3 buffer days from your available days so you have dedicated time for past-paper revision and mock tests before the exam.' },
      { q: 'What is a realistic "Average Hours per Chapter" for FSc Physics or Chemistry?', a: 'For first-time study including numericals, allow 3 to 4 hours per chapter; for revision of already-studied chapters, 1.5 hours per chapter is realistic.' },
      { q: 'What if the required daily study hours exceed 10–12 hours a day?', a: 'Prioritize high-weightage chapters using BISE pairing schemes so you cover the highest-scoring topics first.' },
      { q: 'Does this include break times?', a: 'This outputs net focused study hours; add roughly 10 minutes of rest per hour for a sustainable daily timetable.' }
    ],
    whoUses: 'Who uses this: Matric/FSc board candidates, CA/ACCA students, MDCAT/ECAT aspirants, and CSS preparation mentors.'
  },
  'edu-sgpa-to-pct': {
    intro: 'When applying for government jobs (FPSC, PPSC, SPSC), armed forces commissions, or foreign admissions, application forms often ask for an equivalent percentage even if your university transcript only lists a 4.0-scale SGPA or CGPA. This converter calculates the standard linear percentage equivalent.',
    howItWorks: 'On a linear 4.00 grading scale where 4.00 corresponds to 100%, each grade point equals 25 percentage points. The calculator multiplies your SGPA by 25 and caps the output at 100%. Formula: Percentage = SGPA × 25.',
    workedExample: 'A student with a semester SGPA of 3.40 out of 4.00 converts to 3.40 × 25 = 85.00% Equivalent.',
    faqs: [
      { q: 'Do all Pakistani universities use the exact same GPA-to-percentage formula?', a: 'While SGPA × 25 is the standard direct proportional conversion, some universities print a custom conversion table on the back of their transcript; always check your transcript back page for official FPSC verification.' },
      { q: 'What percentage is a 3.00 GPA on this scale?', a: '3.00 × 25 equals 75.00%.' },
      { q: 'What percentage is the minimum passing 2.00 GPA?', a: '2.00 × 25 equals 50.00%, which aligns with the standard 50% passing mark in Pakistani universities.' },
      { q: 'Can I use this for both SGPA and CGPA?', a: 'Yes, the 4.00 scale conversion applies identically whether you enter a single-semester SGPA or a cumulative CGPA.' }
    ],
    whoUses: 'Who uses this: Fresh graduates filling out job portals (FPSC, PPSC, NTS, OTS) and university admission offices.'
  },
  'edu-pct-to-gpa': {
    intro: 'Students transitioning from percentage-based annual systems (such as BISE FSc/Matric or B.Com/BA annual exams) to 4.0-scale university programs or US/Canadian graduate applications via WES often need an instant estimate of their percentage on a 4.0 GPA scale.',
    howItWorks: 'The calculator divides your percentage score by 100 and multiplies by 4.0 to project your score onto a standard 4.00 Grade Point Average scale. Formula: GPA = (Percentage / 100) × 4.0.',
    workedExample: 'An applicant with 82% marks in their annual degree examinations converts to (82 / 100) × 4.0 = 3.28 / 4.0 GPA.',
    faqs: [
      { q: 'Why do US and Canadian universities ask for a 4.0 GPA during admissions?', a: 'North American admissions committees benchmark all international transcripts against the 4.00 grade point scale.' },
      { q: 'What GPA does 75% correspond to?', a: '(75 / 100) × 4.0 equals 3.00 / 4.0 GPA.' },
      { q: 'How does HEC or WES evaluate annual-system First Division (60%+) degrees?', a: 'While proportional math gives 2.40 for 60%, credential evaluators like WES often treat 60%–70% in rigorous annual British-style exams more generously (around 3.0).' },
      { q: 'Can I enter decimal percentages like 84.65%?', a: 'Yes, decimal percentages are fully supported for exact GPA estimation.' }
    ],
    whoUses: 'Who uses this: Study-abroad applicants applying to US/EU universities, annual-system graduates, and scholarship counselors.'
  },
  'edu-weighted-grade': {
    intro: 'University courses in Pakistan divide the 100% semester evaluation across three main pillars: sessional homework/quizzes (20%), the midterm exam (30%), and the final exam (50%). This calculator computes your exact weighted final course percentage from your average score in each category.',
    howItWorks: 'Each category’s percentage score is multiplied by its fixed course weight (0.20 for Homework, 0.30 for Midterm, and 0.50 for Final Exam), and the three weighted contributions are summed together. Formula: Final Grade = (Homework % × 0.20) + (Midterm % × 0.30) + (Final % × 0.50).',
    workedExample: 'A student who averages 90% on homework/quizzes, scores 78% on the midterm exam, and achieves 85% on the final exam earns (90 × 0.2) + (78 × 0.3) + (85 × 0.5) = 18.0 + 23.4 + 42.5 = 83.90% Final Grade.',
    faqs: [
      { q: 'Why did my 78% midterm pull my grade down less than a low final exam would?', a: 'Because the midterm carries a 30% weight whereas the final exam carries 50% (half of your entire course grade).' },
      { q: 'How do I convert raw marks (like 24 out of 30 on the midterm) before entering?', a: 'Divide 24 by 30 and multiply by 100 to get 80%, then enter 80 in the Midterm Exam (%) field.' },
      { q: 'Why are sessional marks (20%) called "free marks" by professors?', a: 'Submitting all assignments and preparing for quizzes is completely controllable and provides an 18–20 point cushion before exams.' },
      { q: 'What letter grade does 83.90% usually receive?', a: 'In most Pakistani universities, 80%–84% earns an A− (3.67 GPA) or B+ (3.33 GPA) depending on the department rubric.' }
    ],
    whoUses: 'Who uses this: University students calculating end-of-semester grades and teaching assistants compiling gradebooks.'
  },
  'edu-reading-speed': {
    intro: 'Whether you are preparing for the IELTS Reading module, CSS English Precis & Composition, or reviewing dense medical and law textbooks, your reading speed in Words Per Minute (WPM) determines how fast you can absorb written material under exam time pressure.',
    howItWorks: 'The calculator divides the total number of words read during a timed passage by the exact number of minutes taken, rounding to the nearest whole word per minute. Formula: WPM = Total Words Read / Time Taken (Minutes).',
    workedExample: 'Reading a 1,200-word newspaper editorial from Dawn in 5 minutes yields a reading speed of 1,200 / 5 = 240 Words Per Minute (WPM).',
    faqs: [
      { q: 'What is the average silent reading speed for university students?', a: 'Average adult silent reading speed is 200 to 250 WPM with ~70% comprehension; speed readers reach 350 to 450+ WPM.' },
      { q: 'What reading speed is needed to finish all 3 passages of the IELTS Academic Reading test in 60 minutes?', a: 'IELTS Reading contains ~2,500 words plus 40 questions; aiming for 250–300 WPM during skimming leaves enough time to verify answers.' },
      { q: 'How do I enter 4 minutes and 30 seconds into the Minutes field?', a: 'Convert seconds to decimal minutes by dividing by 60—so 4 minutes 30 seconds is entered as 4.5 minutes.' },
      { q: 'How can I increase my WPM without losing comprehension?', a: 'Use a pen or finger as a visual pacer beneath each line and avoid sub-vocalizing (silently pronouncing every word in your throat).' }
    ],
    whoUses: 'Who uses this: IELTS/TOEFL test takers, CSS/PMS aspirants, law students, and avid book readers.'
  },
  'edu-quiz-score': {
    intro: 'Competitive entrance tests in Pakistan—including ECAT (UET), NUST NET, FAST, GIKI, PPSC/FPSC One-Paper MCQs, and previously MDCAT—enforce negative marking where every wrong MCQ deducts 0.25 or 1.0 mark from your earned score. This calculator computes your net score and exact penalty deductions.',
    howItWorks: 'Assuming 1 mark per correct answer, the calculator multiplies your Incorrect Answers count by the Negative Mark Penalty per wrong answer and subtracts that penalty from your Correct Answers count. Formula: Net Score = Correct Answers − (Incorrect Answers × Negative Penalty).',
    workedExample: 'On a 50-MCQ PPSC test where you get 40 Correct Answers, mark 5 Incorrect Answers (leaving 5 unattempted), with a 0.25 negative mark per wrong answer, your penalty is 5 × 0.25 = −1.25 marks, giving a Final Score of 38.75.',
    faqs: [
      { q: 'Do unattempted (skipped) MCQs carry any negative marking?', a: 'No, leaving a question blank deducts 0 marks; only marked incorrect answers trigger the negative penalty.' },
      { q: 'Is it mathematically worth guessing on a 4-option MCQ test with 0.25 negative marking?', a: 'If you can eliminate at least 1 or 2 wrong options, the expected mathematical value of an educated guess becomes positive!' },
      { q: 'What if each correct MCQ is worth 4 marks and each wrong answer deducts −1 mark (like ECAT)?', a: 'Calculate your score on a 1-mark scale using penalty = 0.25, then multiply the final result by 4 (e.g., 38.75 × 4 = 155 marks).' },
      { q: 'Does FPSC One-Paper MCQ testing use 0.25 negative marking?', a: 'Check the specific syllabus: PPSC regularly applies 0.25 negative marking per wrong MCQ, while FPSC policies vary by recruitment batch.' }
    ],
    whoUses: 'Who uses this: PPSC/FPSC job test candidates, ECAT/NET engineering applicants, and entry-test coaching students.'
  },
  'edu-pomodoro-planner': {
    intro: 'Studying for 4 or 6 hours straight without structured breaks leads to mental fatigue and poor memory retention. The Pomodoro Technique breaks your planned study hours into focused 25-minute work sprints separated by 5-minute rest intervals. This planner structures your daily study session automatically.',
    howItWorks: 'Your total planned study hours are converted into minutes (Hours × 60) and divided by 25 minutes per Pomodoro focus block. The calculator then adds a 5-minute recovery break for each session to show your complete study-plus-break breakdown. Formula: Pomodoro Sessions = round((Study Hours × 60) / 25); Break Time = Sessions × 5 mins.',
    workedExample: 'Planning 4 hours (240 minutes) of deep study divides into 10 Pomodoro Sessions (250 minutes of focused study accompanied by 50 minutes of short 5-minute breaks).',
    faqs: [
      { q: 'Why is 25 minutes the standard Pomodoro session length?', a: 'Neuroscience research shows human selective attention peaks for 20–30 minutes before brief mental recovery is needed to consolidate short-term memory.' },
      { q: 'What should I do during the 5-minute break?', a: 'Step away from screens—stretch, drink water, or walk around the room. Avoid scrolling social media reels, which hijacks dopamine and focus.' },
      { q: 'Should I take a longer break after completing 4 Pomodoro sessions?', a: 'Yes, after every 4 Pomodoros (about 2 hours), take a 15-to-20-minute break for tea, prayer (Namaz), or a light snack.' },
      { q: 'Can I use this for coding or thesis writing as well as exam study?', a: 'Absolutely—software developers and academic writers use Pomodoro blocks to overcome procrastination.' }
    ],
    whoUses: 'Who uses this: Medical and engineering students, CA trainees, remote programmers, and competitive exam aspirants.'
  },
  'edu-tuition-installment': {
    intro: 'Private and public-sector universities in Pakistan allow parents and self-financing students to split hefty semester tuition fees (ranging from PKR 80,000 to PKR 350,000+) into 2, 3, or 4 monthly bank challan installments. This calculator determines the exact PKR amount payable per installment.',
    howItWorks: 'The total semester tuition fee in PKR is divided equally by the approved number of installments (minimum 1), rounding to the nearest Rupee. Formula: Installment Amount (PKR) = Total Semester Tuition Fee / Number of Installments.',
    workedExample: 'A student whose total semester tuition fee at a private university in Lahore is PKR 150,000 approved for 3 installments pays PKR 50,000 per installment.',
    faqs: [
      { q: 'When are the 3 semester installments typically due in Pakistani universities?', a: 'Usually Installment 1 is due at course registration, Installment 2 before Midterm exams, and Installment 3 before Final exam roll-number slip issuance.' },
      { q: 'Do universities charge extra markup for splitting semester fees into installments?', a: 'Most Pakistani university finance offices offer interest-free (0% markup) fee splitting upon submitting an installment application before the due date.' },
      { q: 'How can I include hostel and transport charges in this calculation?', a: 'Add your semester hostel fee and bus fee to the "Total Semester Tuition Fee (PKR)" before dividing.' },
      { q: 'Where can Pakistani students pay university fee challans?', a: 'Most universities now support 1Link/1Bill digital challan payment via JazzCash, Easypaisa, HBL, Meezan, or any banking app.' }
    ],
    whoUses: 'Who uses this: Parents budgeting household cash flow, self-supporting university students, and university fee sections.'
  },
  'edu-reading-time-essay': {
    intro: 'Whether you are preparing an MS/PhD thesis defense presentation, rehearsing a university declamation speech, or estimating how long an examiner will take to read your term paper, this calculator converts total word count into both silent reading time and spoken presentation time.',
    howItWorks: 'Silent reading time is computed by dividing total word count by the standard adult reading pace of 250 Words Per Minute (WPM). Spoken presentation time is computed by dividing word count by the natural public-speaking pace of 130 WPM. Formula: Reading Mins = Words / 250; Speaking Mins = Words / 130.',
    workedExample: 'A 3,500-word research essay takes approximately 14.0 minutes to read silently (at 250 WPM), or 26.9 minutes to deliver aloud as a spoken presentation (at 130 WPM).',
    faqs: [
      { q: 'How many words should I write for a 5-minute university presentation speech?', a: 'At a natural speaking pace of 130 words per minute, a 5-minute speech requires approximately 650 words.' },
      { q: 'Why is speaking speed (130 WPM) almost half of silent reading speed (250 WPM)?', a: 'Clear vocal articulation, breathing pauses, and slide transitions limit spoken delivery to 120–140 words per minute.' },
      { q: 'How long is a standard CSS English Essay in words?', a: 'FPSC requires 2,500 to 3,000 words for the CSS English Essay paper, which takes an examiner roughly 10 to 12 minutes to read through.' },
      { q: 'Can bloggers and content writers use this for "Minute Read" article badges?', a: 'Yes, dividing blog post word count by 250 WPM gives the standard "X min read" estimate shown on Medium and news sites.' }
    ],
    whoUses: 'Who uses this: Thesis defense presenters, public speakers, debate club members, and academic content writers.'
  },
  'edu-score-std-dev': {
    intro: 'In universities that use relative grading (grading on a curve, such as LUMS, NUST, FAST, and GIKI), your final letter grade depends not just on the class mean, but on how many standard deviations above or below the mean your score sits. This calculator finds the mean, sample variance, and sample standard deviation of exam scores.',
    howItWorks: 'First, the arithmetic mean ($\\bar{x}$) of the comma-separated scores is found. Next, the squared deviation of each score from the mean is summed and divided by $n - 1$ (Bessel’s correction for sample variance $s^2$). Taking the square root gives Sample Standard Deviation ($s$). Formula: $s = \\sqrt{\\sum(x_i - \\bar{x})^2 / (n - 1)}$.',
    workedExample: 'For five test scores of 70, 75, 80, 85, and 90, the Mean Score is 80.0, the Sample Variance is 62.50, and the Standard Deviation is 7.91 marks.',
    faqs: [
      { q: 'How does relative grading use Mean and Standard Deviation to assign grades?', a: 'Typically, a score near the Mean ($\\bar{x}$) gets a B or B−, Mean + $1s$ earns an A−/A, and Mean + $1.5s$ earns an A/A+.' },
      { q: 'What does a small vs large standard deviation mean on a midterm exam?', a: 'A small standard deviation (e.g., 4 marks) means almost everyone scored close to the average; a large SD (e.g., 18 marks) means scores were widely spread out.' },
      { q: 'Why does the formula divide by (n − 1) instead of n?', a: 'Dividing by $n - 1$ is the standard unbiased sample variance estimator used in educational statistics.' },
      { q: 'How many scores do I need to enter?', a: 'Enter at least 2 comma-separated numeric scores; for a whole class section, you can paste all 40–50 student marks.' }
    ],
    whoUses: 'Who uses this: University professors curving exams, students in relative-grading universities, and educational researchers.'
  },
  'edu-scholarship-check': {
    intro: 'Most private and public universities in Pakistan award automatic semester tuition fee waivers (25%, 50%, or 100% merit scholarships) and Dean’s Honor List certificates based on your CGPA bracket. Enter your current CGPA out of 4.00 to see which typical merit scholarship tier you qualify for.',
    howItWorks: 'The calculator evaluates your CGPA against standard university merit scholarship thresholds: 3.80+ for Highest Honors / 100% Full Tuition Waiver, 3.50–3.79 for Dean’s List / 50% Partial Tuition Waiver, 3.20–3.49 for Merit Recognition (25% Waiver), and below 3.20 as ineligible for merit-tier waivers. Formula: Bracket threshold evaluation on 4.00 CGPA scale.',
    workedExample: 'Entering a CGPA of 3.65 out of 4.00 places the student in the "Dean’s List / Partial Scholarship Tier (50% Tuition Waiver)".',
    faqs: [
      { q: 'What CGPA is required for the Prime Minister’s Laptop Scheme or Ehsaas/Honhaar Scholarships?', a: 'Government merit programs typically require a minimum CGPA of 2.80 to 3.00+, with higher CGPAs prioritized on departmental merit lists.' },
      { q: 'Can I keep a merit scholarship if I drop a course or get an F grade?', a: 'Almost all universities require a full regular credit load (15–18 credits) with zero F or W grades to retain a semester merit waiver.' },
      { q: 'What is the difference between Rector’s List and Dean’s List?', a: 'In universities like COMSATS, FAST, and NUST, a 3.50+ GPA earns Dean’s Honor List, while 3.80–4.00 GPA earns the Rector’s / Chancellor’s Gold Medal list.' },
      { q: 'Does this apply to need-based scholarships?', a: 'Need-based scholarships (like HEC Need-Based or PEEF) evaluate family income first and usually require only a 2.00–2.50 passing CGPA.' }
    ],
    whoUses: 'Who uses this: University students tracking scholarship retention targets and prospective admission applicants.'
  },
  'edu-textbook-planner': {
    intro: 'Facing a 450-page medical textbook like Guyton Physiology, a CA auditing manual, or a CSS history book with only 30 days left can feel overwhelming. This planner breaks total book pages down into a manageable daily page quota so you finish on schedule.',
    howItWorks: 'The calculator divides the total number of pages in your textbook by the number of days available before your deadline, rounding up to the next whole page via the ceiling function so you never fall short. Formula: Pages per Day = ceil(Total Textbook Pages / Days Available).',
    workedExample: 'To finish a 450-page textbook in 30 days, you need to read 450 / 30 = 15 pages per day.',
    faqs: [
      { q: 'Why does the calculator round up to the next whole page?', a: 'If 450 pages over 28 days equals 16.07 pages/day, reading 16 pages would leave pages unread on the final day; rounding up to 17 pages/day guarantees completion early.' },
      { q: 'How long does it take to read 15 textbook pages with note-taking?', a: 'Dense academic textbook pages average 400–500 words plus diagrams, taking roughly 3 to 4 minutes per page—so 15 pages takes about 45–60 minutes a day.' },
      { q: 'Should I exclude index and bibliography pages from Total Pages?', a: 'Yes, subtract the preface, references, and index pages so you only divide the actual content pages you need to study.' },
      { q: 'What if I want Sundays off from reading?', a: 'Subtract the number of Sundays in your timeframe from "Days Available" before calculating (e.g., enter 26 days instead of 30).' }
    ],
    whoUses: 'Who uses this: MBBS/BDS students, CSS candidates reading recommended books, law students, and book club readers.'
  },
  'edu-assignment-contrib': {
    intro: 'When a professor returns a graded assignment, project, or lab report marked out of 100%, you often want to know how many actual absolute percentage points out of the final 100-mark course total you just banked. This calculator computes the exact weighted contribution.',
    howItWorks: 'The calculator converts the assignment’s course weight from a percentage to a decimal (Weight / 100) and multiplies it by your percentage score on that assignment. Formula: Course Contribution (%) = Assignment Score (%) × (Course Weight % / 100).',
    workedExample: 'Scoring 92% on a semester term project that is weighted at 15% of the overall course grade contributes +13.80% toward your Final Grade (out of the possible 15.00%).',
    faqs: [
      { q: 'How many points did I lose from the total 100% course grade in the example above?', a: 'Since the assignment was worth 15.00% and you earned 13.80%, you only lost 1.20% off the maximum possible 100% course score.' },
      { q: 'What if my assignment was graded as 18 out of 20 instead of a percentage?', a: 'Convert 18/20 to a percentage first (18 ÷ 20 × 100 = 90%) and enter 90 as the Assignment Score.' },
      { q: 'Can I use this to calculate the contribution of a 25% Midterm exam?', a: 'Yes! Enter your midterm percentage and 25 as the Course Weight to see how many absolute points out of 100 you secured.' },
      { q: 'Why is tracking absolute points helpful?', a: 'Adding up the absolute contributions of all quizzes, assignments, and midterms tells you your exact standing out of 100 before the final exam.' }
    ],
    whoUses: 'Who uses this: University students tracking sessional marks (quizzes, labs, projects) and course instructors.'
  },
  'edu-flashcard-intervals': {
    intro: 'Cognitive psychology proves that reviewing flashcards (such as Anki decks for USMLE/PLAB/FCPS, vocabulary for GRE/CSS, or Quranic memorization) right before you are about to forget them locks knowledge into long-term memory. This planner calculates the optimal spaced-repetition review interval in days.',
    howItWorks: 'Based on exponential spaced-repetition curves (similar to SuperMemo SM-2), each consecutive time you successfully recall a flashcard without error, the review interval multiplies exponentially with base 2.2 raised to the repetition number. Formula: Review Interval (Days) = round(2.2^(Repetition Number)).',
    workedExample: 'On your 3rd consecutive successful recall of a flashcard deck (Repetition #3), the calculator schedules your next review in round(2.2³) = 11 Days.',
    faqs: [
      { q: 'What are the review intervals for Repetition 1, 2, 3, 4, and 5?', a: 'Rep 1 = 2 days, Rep 2 = 5 days, Rep 3 = 11 days, Rep 4 = 23 days, and Rep 5 = 52 days.' },
      { q: 'What should I do if I forget a card during review?', a: 'Reset that specific card’s repetition counter back to Repetition 1 (review again in 1–2 days) so weak concepts get reinforced immediately.' },
      { q: 'Why is spaced repetition better than re-reading notes five times in one night?', a: 'Cramming relies on short-term working memory that fades in 48 hours; spaced retrieval forces synaptic consolidation in long-term cortex storage.' },
      { q: 'Which Pakistani exams benefit most from spaced-repetition flashcards?', a: 'MDCAT biology/chemistry facts, FCPS Part-1 medical pathology, CA law sections, and CSS vocabulary.' }
    ],
    whoUses: 'Who uses this: Medical students (MBBS/FCPS/USMLE), GRE/IELTS vocabulary learners, and Hafiz-e-Quran revision students.'
  },
  'edu-credit-cost': {
    intro: 'Most private and semi-government universities in Pakistan (such as FAST, COMSATS, Bahria, Air University, UMT, and UCP) charge tuition fees per credit hour rather than a flat semester fee. By entering the number of credit hours you are registering for and your university’s per-credit rate in PKR, you can calculate your exact semester tuition.',
    howItWorks: 'The calculator multiplies your registered credit hours by the fee per credit hour in PKR. Formula: Total Tuition (PKR) = Number of Credit Hours × Fee per Credit Hour (PKR).',
    workedExample: 'Registering for a full load of 18 credit hours at a fee of PKR 7,500 per credit hour results in a semester tuition fee of PKR 135,000.',
    faqs: [
      { q: 'How many credit hours is a standard university course in Pakistan?', a: 'A standard theory course is 3 credit hours; a course with a weekly 3-hour laboratory session is typically 4 credit hours (3+1).' },
      { q: 'How much does it cost to repeat a failed 3-credit course in summer semester?', a: 'Enter 3 credit hours and your university’s per-credit fee (e.g., 3 × PKR 7,500 = PKR 22,500) to find the exact summer registration cost.' },
      { q: 'How many total credit hours are in a 4-year BS degree in Pakistan?', a: 'Under HEC curriculum guidelines, a 4-year BS degree requires between 130 and 136 total credit hours across 8 semesters.' },
      { q: 'Does this include one-time admission or semester registration charges?', a: 'This calculates pure credit-hour tuition; add any fixed semester miscellaneous/lab fee (usually PKR 10,000–20,000) for your final bank challan total.' }
    ],
    whoUses: 'Who uses this: University students planning course registration loads, summer-semester repeaters, and parents.'
  },
  'edu-grade-deficit': {
    intro: 'If your current CGPA has slipped below a critical threshold—such as 2.00 to avoid dismissal, 2.50 for degree eligibility, or 3.00 for scholarship/job criteria—you need to know what exact GPA you must average across your remaining degree credit hours to recover. This calculator solves your required future GPA.',
    howItWorks: 'The calculator determines total quality points needed at graduation by multiplying Target CGPA by total degree credits (Completed + Future). It subtracts your currently earned quality points (Current CGPA × Completed Credits) and divides the deficit by Remaining Future Credit Hours. Formula: Required Future GPA = [Target × (Completed + Future) − (Current × Completed)] / Future Credits.',
    workedExample: 'A student at the halfway mark of their degree with a 2.70 CGPA across 60 completed credits wants to graduate with a 3.00 CGPA after their remaining 60 credit hours. The calculator shows they must average 3.30 GPA across all future semesters.',
    faqs: [
      { q: 'What if the calculator says the required GPA "Exceeds 4.0 maximum scale limit"?', a: 'Because 4.00 is the highest possible GPA in any semester, a required GPA above 4.00 means you cannot reach that target purely through remaining courses—you should repeat 1 or 2 old D/F courses to replace low grades!' },
      { q: 'Why is it easier to raise your CGPA in 2nd or 3rd semester than in 7th semester?', a: 'In early semesters, completed credits are low and remaining future credits are high; by 7th semester, 100+ completed credits act like a heavy anchor.' },
      { q: 'How many total credit hours shouldCompleted + Future equal?', a: 'For a standard 4-year Pakistani BS program, Completed + Future normally equals around 130 to 136 credit hours.' },
      { q: 'Does repeating an old course raise CGPA faster than taking a new course?', a: 'Yes! Repeating a D (1.0) and getting an A (4.0) adds +3.0 net quality points per credit without increasing total denominator credits.' }
    ],
    whoUses: 'Who uses this: University students on academic warning, academic counselors, and students aiming for a 3.0+ graduation CGPA.'
  },
  'edu-class-percentile': {
    intro: 'Foreign graduate schools, scholarship boards, and gold-medal committees often ask for your Class Rank Percentile—showing what percentage of your graduating batch you outperformed. By entering your numeric class rank (where 1 is the class topper) and total students in your batch, this tool computes your exact percentile.',
    howItWorks: 'The calculator subtracts your numeric rank from the total number of students in the class to find how many peers ranked below you, divides by total students, and multiplies by 100. Formula: Percentile = [(Total Students − Your Rank) / Total Students] × 100.',
    workedExample: 'Being ranked #5 out of 120 students in an electrical engineering batch places you at the [(120 − 5) / 120] × 100 = 95.8th Percentile (top 5% of the class).',
    faqs: [
      { q: 'What is the difference between Percentage and Percentile?', a: 'Percentage is your own exam score out of 100; Percentile compares you against peers—the 95.8th percentile means you scored higher than 95.8% of your classmates.' },
      { q: 'Why do GRE, GMAT, and SAT scores report percentiles?', a: 'Because exam difficulty varies slightly across test dates, percentiles show admissions officers your exact relative standing among all test takers.' },
      { q: 'What percentile is required for a university Reference Letter saying "Top 10%"?', a: 'Any percentile at or above the 90.0th percentile places you in the top 10% of your class.' },
      { q: 'Why must Rank be less than or equal to Total Students?', a: 'You cannot rank 150th in a class that only has 120 students.' }
    ],
    whoUses: 'Who uses this: Graduates applying for Erasmus Mundus/Fulbright scholarships, professors writing recommendation letters, and registrars.'
  },
  'edu-gpa-difference': {
    intro: 'Before final grades are posted, students love to test "what-if" scenarios: "If I currently have a 3.20 CGPA over 45 credits and I score a 3.80 GPA in my upcoming 15-credit semester, how much will my overall CGPA jump?" This calculator projects your new CGPA and the exact +/- shift.',
    howItWorks: 'Your existing quality points (Current CGPA × Earned Credits) are added to your projected semester quality points (Next GPA × Next Credits), and divided by the new combined credit total (Earned + Next Credits). Formula: New CGPA = [(Current CGPA × Earned Credits) + (Next GPA × Next Credits)] / (Earned Credits + Next Credits).',
    workedExample: 'With a 3.20 Current CGPA over 45 earned credits and an expected 3.80 GPA in a 15-credit semester, your new cumulative total is [(3.2 × 45) + (3.8 × 15)] / 60 = 201 / 60 = 3.35 New CGPA (+0.15 increase).',
    faqs: [
      { q: 'What happens to my CGPA if my next semester GPA is lower than my current CGPA?', a: 'The calculator will show a negative shift (for example, −0.08 decrease in overall CGPA) so you can see the exact risk of a weak semester.' },
      { q: 'Can I use this to predict the impact of an 8-credit Summer Semester?', a: 'Yes, enter your current earned credits and enter 6 or 8 in the "Next Semester Credits" box for a summer session.' },
      { q: 'Why did a 3.80 semester GPA only raise my 3.20 CGPA by +0.15?', a: 'Because the 15 new credits represent only one-fourth (25%) of your 60 total credits; one-fourth of the 0.60 gap is exactly +0.15.' },
      { q: 'Is this accurate for all 4.0-scale universities?', a: 'Yes, the credit-weighted cumulative formula is mathematical law across all semester-system universities.' }
    ],
    whoUses: 'Who uses this: University students running end-of-semester GPA simulations and academic advisors.'
  },
  'edu-cgpa-semesters': {
    intro: 'When all four semesters of a 2-year Associate Degree (ADP), MPhil/MS, MBA, or the first two years of a BS program carry an equal credit load per semester, you can quickly find your 4-semester Cumulative GPA by entering your four individual Semester GPAs.',
    howItWorks: 'The calculator sums the four entered Semester GPAs (Semester 1 through Semester 4) and divides by 4 to find the unweighted multi-semester mean CGPA. Formula: CGPA = (Sem 1 GPA + Sem 2 GPA + Sem 3 GPA + Sem 4 GPA) / 4.',
    workedExample: 'A student who scores 3.20 in Semester 1, 3.40 in Semester 2, 3.60 in Semester 3, and 3.50 in Semester 4 achieves a 4-semester CGPA of (3.2 + 3.4 + 3.6 + 3.5) / 4 = 3.42.',
    faqs: [
      { q: 'When should I use this calculator vs the credit-weighted CGPA calculator?', a: 'Use this quick 4-box calculator when your semesters have equal credit hours (e.g., 15 credits each); if credit hours differ between semesters, use the credit-weighted CGPA calculator.' },
      { q: 'How many semesters are in an HEC Associate Degree Program (ADP) or MS degree?', a: 'Both Associate Degrees and MS/MPhil programs in Pakistan consist of exactly 4 regular semesters (2 years).' },
      { q: 'What if I have only completed 2 or 3 semesters so far?', a: 'For 2 semesters, enter your first two GPAs in Sem 1 & 2 and repeat them in Sem 3 & 4, or use the main comma-separated CGPA calculator.' },
      { q: 'Does an upward trend from 3.2 to 3.6 look good on transcripts?', a: 'Yes, admissions panels and employers value a positive semester-over-semester trajectory.' }
    ],
    whoUses: 'Who uses this: ADP, MBA, and MS/MPhil students in 4-semester degree programs.'
  },
  'edu-final-exam-weight': {
    intro: 'Want a streamlined way to check the exact percentage score needed on your final exam when you already know your current overall course percentage and the final exam’s weight percentage (such as 30%, 40%, or 50%)? This calculator computes your required final exam target directly.',
    howItWorks: 'If the final exam has weight $W$ (expressed as a decimal), then your already-completed coursework has weight $(1 - W)$. Subtracting $Current \\times (1 - W)$ from your Target Grade and dividing by $W$ gives the exact required score on the final. Formula: $\\text{Required Final \\%} = [\\text{Target} - (\\text{Current} \\times (1 - W))] / W$.',
    workedExample: 'To achieve an 85% Target Overall Grade when your Current Course Grade is 80% and the Final Exam Weight is 30% ($0.30$), you need $[85 - (80 \\times 0.70)] / 0.30 = 29 / 0.30 = 96.7\\%$ on the final exam.',
    faqs: [
      { q: 'Why do I need 96.7% on the final just to raise my grade from 80% to 85%?', a: 'Because the final exam is only worth 30% of the course! Raising the entire course average by +5 points using a 30%-weight exam requires scoring 16.7 points above your current 80% average.' },
      { q: 'What if my university final exam is worth 50% instead of 30%?', a: 'Change the Final Exam Weight to 50—then raising an 80% current grade to an 85% target only requires scoring 90.0% on the final.' },
      { q: 'How do I calculate what I need just to pass the course (50% overall)?', a: 'Set "Target Overall Grade (%)" to 50; the result will show the minimum final exam percentage required to pass.' },
      { q: 'Does my university require passing the final exam separately?', a: 'Check your university handbook—some engineering departments require scoring at least 40% or 50% on the final exam paper regardless of sessional marks.' }
    ],
    whoUses: 'Who uses this: College and university students planning final exam score targets.'
  },
  'edu-flashcard-timer': {
    intro: 'When reviewing digital Anki flashcards or paper index cards before an exam, knowing how many minutes a 120-card or 300-card deck will take helps you slot flashcard review into your daily routine between classes or during your commute.',
    howItWorks: 'The calculator multiplies the total number of flashcards in your deck by your average review pace in seconds per card to find total seconds, then divides by 60 for minutes and by 3,600 for hours. Formula: Total Minutes = (Cards Count × Seconds per Card) / 60.',
    workedExample: 'Reviewing a deck of 120 flashcards at an average pace of 30 seconds per card takes (120 × 30) / 60 = 60.0 Minutes Total (1.00 hour).',
    faqs: [
      { q: 'What is a fast vs thorough pace in "Seconds per Card"?', a: 'For simple vocabulary or pharmacology drug-class recall, 10 to 15 seconds per card is normal; for complex pathology mechanisms or math formulas, 30 to 45 seconds per card is realistic.' },
      { q: 'How many flashcards can I review in a single 25-minute Pomodoro session at 15 seconds per card?', a: 'At 15 seconds per card (4 cards per minute), you can review 100 flashcards in 25 minutes.' },
      { q: 'What if I have to re-read failed cards during the same session?', a: 'Add roughly 20% to your card count (e.g., enter 145 cards for a 120-card deck) to account for cards that loop back for a second look.' },
      { q: 'Is it better to do 500 cards in one sitting or split them up?', a: 'Splitting into morning and evening sessions of 100–150 cards prevents review fatigue and improves accuracy.' }
    ],
    whoUses: 'Who uses this: Medical students using Anki decks, language learners, and entry-test students.'
  },
  'edu-grade-letter': {
    intro: 'Sometimes an older transcript, foreign certificate, or school assessment sheet lists only a letter grade (A+, A, B, or C) without numeric marks. When an online job or admission portal requires a numeric percentage, this converter provides the standard midpoint percentage equivalent for each letter grade tier.',
    howItWorks: 'Each letter grade spans a 10-percentage-point bracket (A+ = 90–100%, A = 80–89%, B = 70–79%, C = 60–69%). The calculator returns the mathematical midpoint of the selected bracket so neither the top nor bottom boundary is biased. Formula: Midpoint % = (Bracket Lower Bound + Bracket Upper Bound) / 2.',
    workedExample: 'Selecting Letter Grade "A (80 - 89%)" outputs the standard midpoint equivalent of ~85%.',
    faqs: [
      { q: 'How does IBCC (Inter Board Committee of Chairmen) convert O-Level and A-Level letter grades in Pakistan?', a: 'IBCC assigns fixed equivalence midpoints to Cambridge grades (such as A* = 90%, A = 85%, B = 75%, C = 65%, D = 55%, E = 45%) when computing Matric/FSc equivalence.' },
      { q: 'Why use the midpoint (85% for A) instead of the minimum (80%)?', a: 'Because students holding an A grade are distributed across 80% to 89%, 85% is the statistically fair representation used by equivalence boards.' },
      { q: 'What midpoint corresponds to A+ vs B vs C?', a: 'A+ maps to 95%, A maps to 85%, B maps to 75%, and C maps to 65%.' },
      { q: 'Should I get an official IBCC equivalence certificate for university admissions in Pakistan?', a: 'Yes, all Pakistani universities and PMDC/PEC require an official IBCC equivalence certificate for O/A Level and foreign high-school transcripts.' }
    ],
    whoUses: 'Who uses this: O-Level / A-Level students estimating IBCC equivalence, HR recruiters, and admissions staff.'
  },

  // ==========================================
  // ENGINEERING & SCIENCE (29 Calculators)
  // ==========================================
  'physics-velocity': {
    intro: 'Newtonian kinematics equations govern the motion of everything from a car accelerating onto the M-2 Motorway to an object falling under gravity. Given initial velocity ($u$), constant acceleration ($a$), and time ($t$), this calculator simultaneously finds both final velocity ($v$) and total distance traveled ($s$).',
    howItWorks: 'The calculator applies the first and second equations of linear motion under constant acceleration: final velocity equals initial velocity plus acceleration times time, and displacement equals initial velocity times time plus half acceleration times time squared. Formula: $v = u + at$; $s = ut + 0.5at^2$.',
    workedExample: 'An object dropped from rest ($u = 0\\text{ m/s}$) under Earth’s gravitational acceleration ($a = 9.8\\text{ m/s}^2$) for $t = 4\\text{ seconds}$ reaches a final velocity of $v = 39.20\\text{ m/s}$ and falls a distance of $0.5 \\times 9.8 \\times 16 = 78.40\\text{ m}$.',
    faqs: [
      { q: 'How do I convert km/h (like 120 km/h on the motorway) into m/s before entering?', a: 'Divide km/h by 3.6—for example, $108\\text{ km/h} \\div 3.6 = 30\\text{ m/s}$. To convert the result back to km/h, multiply m/s by 3.6.' },
      { q: 'Can I enter a negative number for acceleration (deceleration / braking)?', a: 'Yes! If a car moving at $u = 25\\text{ m/s}$ brakes at $a = -5\\text{ m/s}^2$ for 3 seconds, enter $-5$ to find the reduced speed and braking distance.' },
      { q: 'Why is gravitational acceleration $9.8\\text{ m/s}^2$?', a: 'Near Earth’s surface, gravity accelerates freely falling bodies downward by 9.8 meters per second every second (ignoring air resistance).' },
      { q: 'Are these the exact FSc Part-1 Physics Chapter 3 equations of motion?', a: 'Yes, $v_f = v_i + at$ and $S = v_i t + \\frac{1}{2}at^2$ are the universal kinematic equations taught in Matric and FSc Physics.' }
    ],
    whoUses: 'Who uses this: Matric and FSc physics students, mechanical engineers, automotive safety analysts, and teachers.'
  },
  'eng-kinetic-energy': {
    intro: 'Every moving object—whether a 1,200 kg sedan cruising down Shahrah-e-Faisal, a cricket ball bowled at 145 km/h, or wind spinning a turbine in Jhimpir—possesses Kinetic Energy ($KE$). Because velocity is squared in the formula, doubling speed quadruples kinetic energy and stopping distance.',
    howItWorks: 'The calculator squares the object’s velocity ($v$ in m/s), multiplies by its mass ($m$ in kg), and multiplies by 0.5 to output Kinetic Energy in Joules (J). Formula: $KE = 0.5 \\times \\text{Mass} \\times \\text{Velocity}^2$.',
    workedExample: 'A 1,200 kg car traveling at a velocity of $25\\text{ m/s}$ ($90\\text{ km/h}$) carries $0.5 \\times 1200 \\times 25^2 = 375,000\\text{ Joules (J)}$ (or $375\\text{ kJ}$) of kinetic energy.',
    faqs: [
      { q: 'Why does doubling a car’s speed from 60 km/h to 120 km/h make a crash four times as destructive?', a: 'Because velocity is squared ($v^2$) in $KE = \\frac{1}{2}mv^2$; doubling $v$ multiplies the kinetic energy that brakes or crumple zones must absorb by $2^2 = 4$.' },
      { q: 'What is 1 Joule of energy equivalent to in everyday terms?', a: 'One Joule equals 1 Newton-meter ($1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2$), or the energy required to lift a 100-gram apple 1 meter straight up.' },
      { q: 'Can kinetic energy ever be negative?', a: 'No, mass is always positive and velocity squared ($v^2$) is always positive regardless of the direction of motion.' },
      { q: 'How do I convert Joules into kilojoules (kJ) or Watt-hours (Wh)?', a: 'Divide Joules by 1,000 for kJ, or divide by 3,600 to convert Joules into Watt-hours.' }
    ],
    whoUses: 'Who uses this: Physics students, automotive crash investigators, mechanical design engineers, and wind energy analysts.'
  },
  'eng-potential-energy': {
    intro: 'Raising an object against gravity—such as pumping water into an overhead rooftop tank on a 3-story house in Karachi or storing water behind Tarbela Dam—stores Gravitational Potential Energy ($PE$). This calculator computes stored energy in Joules from mass, height, and gravitational acceleration.',
    howItWorks: 'The calculator multiplies the object’s mass ($m$ in kg), gravitational acceleration ($g$, default $9.8\\text{ m/s}^2$), and vertical elevation height ($h$ in meters). Formula: $PE = \\text{Mass} \\times \\text{Gravity} \\times \\text{Height}$.',
    workedExample: 'Lifting a 50 kg cement bag to a vertical height of 20 meters on a construction hoist under standard gravity ($9.8\\text{ m/s}^2$) stores $50 \\times 9.8 \\times 20 = 9,800\\text{ Joules (J)}$ of gravitational potential energy.',
    faqs: [
      { q: 'How can I calculate the energy needed to pump 1,000 liters of water to a rooftop tank?', a: 'Since 1 liter of water has a mass of 1 kg, enter Mass = 1000 kg and your roof height in meters (e.g., 10 m) to find the exact minimum hydraulic energy in Joules.' },
      { q: 'Does potential energy depend on whether the object was lifted straight up or carried up a sloped ramp?', a: 'No, gravity is a conservative force, so potential energy depends only on net vertical height ($h$), not the path taken.' },
      { q: 'What happens to Potential Energy if the object is dropped?', a: 'By conservation of energy, as the object falls, its Potential Energy converts directly into Kinetic Energy ($PE_{lost} = KE_{gained}$).' },
      { q: 'Can I change the Gravity input to simulate the Moon or Mars?', a: 'Yes! Enter $1.62\\text{ m/s}^2$ for the Moon or $3.71\\text{ m/s}^2$ for Mars.' }
    ],
    whoUses: 'Who uses this: Hydropower engineers, civil hoist operators, water pump designers, and FSc/O-Level physics students.'
  },
  'eng-newton-force': {
    intro: 'Newton’s Second Law of Motion ($F = ma$) is the cornerstone of classical mechanics and structural engineering, stating that the net force required to accelerate an object is proportional to its mass and acceleration. This calculator computes force in Newtons (N).',
    howItWorks: 'The calculator multiplies Mass ($m$ in kilograms) by Acceleration ($a$ in meters per second squared) to output Force in Newtons ($1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$). Formula: $\\text{Force } (F) = \\text{Mass } (m) \\times \\text{Acceleration } (a)$.',
    workedExample: 'Accelerating a 100 kg motorcycle and rider at $5\\text{ m/s}^2$ requires a net forward thrust force of $100 \\times 5 = 500.00\\text{ Newtons (N)}$.',
    faqs: [
      { q: 'How do I calculate the downward weight force of an object in Newtons?', a: 'Weight is simply gravitational force ($W = mg$): enter your object’s mass in kg and enter $9.8$ in the Acceleration field.' },
      { q: 'How many Newtons is 1 kilogram-force (kgf)?', a: '1 kgf equals approximately 9.81 Newtons—so a 500 N force is equivalent to roughly 51 kg of static push.' },
      { q: 'What if multiple forces act on the object at the same time (like engine thrust and friction)?', a: 'The $F$ in $F = ma$ represents the Net Resultant Force ($F_{thrust} - F_{friction}$) acting on the mass.' },
      { q: 'Why does a loaded truck take much longer to stop than an empty Suzuki Bolan?', a: 'With a much larger mass ($m$), the same braking force ($F$) produces a much smaller deceleration ($a = F / m$).' }
    ],
    whoUses: 'Who uses this: Mechanical engineers, physics teachers, robotics builders, and automotive dynamics students.'
  },
  'eng-gravity': {
    intro: 'Newton’s Law of Universal Gravitation explains the attractive force between any two masses in the universe—from Earth holding the Moon in orbit to satellite trajectory calculations at SUPARCO. Because the gravitational constant $G$ is tiny, this calculator handles scientific notation seamlessly.',
    howItWorks: 'The calculator multiplies Mass 1 ($m_1$) and Mass 2 ($m_2$), multiplies by the Universal Gravitational Constant ($G = 6.6743 \\times 10^{-11}\\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$), and divides by the square of the center-to-center distance ($r^2$). Formula: $F = G \\times (m_1 \\times m_2) / r^2$.',
    workedExample: 'Using Earth’s mass (5.97e24 kg), the Moon’s mass (7.348e22 kg), and the mean Earth–Moon distance (384,400,000 m), the calculator outputs 1.981e+20 Newtons (N) (1.981 × 10²⁰ N).',
    faqs: [
      { q: 'How do I type scientific notation (like $5.97 \\times 10^{24}$) into the input boxes?', a: 'Use standard `e` notation: type `5.97e24` for $5.97 \\times 10^{24}$ or `6.67e-11` for $6.67 \\times 10^{-11}$.' },
      { q: 'What happens to gravitational force if the distance between two planets is doubled?', a: 'Because Universal Gravitation follows an inverse-square law ($1/r^2$), doubling the distance reduces gravitational pull to one-fourth ($1/4$) of its original value.' },
      { q: 'Why don’t we feel gravitational attraction between two people standing 1 meter apart?', a: 'For two 70 kg people 1 meter apart, $F = 6.674 \\times 10^{-11} \\times 4900 / 1 = 3.27 \\times 10^{-7}\\text{ N}$, which is imperceptibly tiny compared to Earth’s pull.' },
      { q: 'Why is distance measured between centers of mass rather than surface-to-surface?', a: 'By Newton’s Shell Theorem, a uniform sphere attracts external objects as if all of its mass were concentrated at its exact geometric center.' }
    ],
    whoUses: 'Who uses this: Astrophysics and space science students, FSc physics learners, and orbital mechanics enthusiasts.'
  },
  'eng-ideal-gas': {
    intro: 'In chemical engineering, CNG cylinder storage, industrial boilers, and chemistry labs, the Ideal Gas Law ($PV = nRT$) relates the pressure, volume, absolute temperature, and molar quantity of a gas. This calculator computes gas pressure in Atmospheres (atm) from moles, Kelvin temperature, and volume in Liters.',
    howItWorks: 'Using the universal gas constant $R = 0.082057\\text{ L}\\cdot\\text{atm}/(\\text{mol}\\cdot\\text{K})$, the calculator multiplies number of moles ($n$), absolute temperature ($T$ in Kelvin), and $R$, then divides by cylinder volume ($V$ in Liters). Formula: $P = (n \\times 0.082057 \\times T) / V$.',
    workedExample: 'Confining $2\\text{ moles}$ of an ideal gas at a room temperature of $300\\text{ K}$ ($27^\\circ\\text{C}$) inside a $25\\text{ Liter}$ vessel produces an internal pressure of $(2 \\times 0.082057 \\times 300) / 25 = 1.969\\text{ Atmospheres (atm)}$.',
    faqs: [
      { q: 'How do I convert Celsius temperature (°C) into Kelvin (K)?', a: 'Always add 273.15 to the Celsius temperature—for example, $27^\\circ\\text{C} + 273.15 = 300.15\\text{ K}$. Never enter negative or zero Celsius directly into gas law formulas!' },
      { q: 'How do I convert Atmospheres (atm) into PSI, Bar, or Pascals?', a: '1 atm equals 14.696 PSI, 1.01325 Bar, or 101,325 Pascals (101.3 kPa).' },
      { q: 'What is the volume of 1 mole of an ideal gas at Standard Temperature and Pressure (STP)?', a: 'At STP ($273.15\\text{ K}$ and $1\\text{ atm}$), 1 mole of any ideal gas occupies 22.414 Liters.' },
      { q: 'Why does CNG cylinder pressure rise when filling or sitting in the summer sun?', a: 'By Gay-Lussac’s Law ($P \\propto T$ at constant volume), raising gas temperature from $290\\text{ K}$ to $325\\text{ K}$ directly increases cylinder pressure.' }
    ],
    whoUses: 'Who uses this: Chemical engineers at fertilizer/petrochemical plants (Engro, Fatima, PARCO), FSc chemistry students, and lab technicians.'
  },
  'eng-reynolds': {
    intro: 'When designing water supply pipelines, irrigation canals, oil pipelines, or HVAC ducts, engineers must know whether fluid flow inside the pipe is smooth (Laminar) or chaotic and eddy-filled (Turbulent). The dimensionless Reynolds Number ($Re$) classifies the flow regime using dynamic viscosity.',
    howItWorks: 'The calculator multiplies Fluid Density ($\\rho$ in $\\text{kg/m}^3$), Flow Velocity ($v$ in $\\text{m/s}$), and Internal Pipe Diameter ($D$ in meters), then divides by Dynamic Viscosity ($\\mu$ in $\\text{Pa}\\cdot\\text{s}$). It classifies $Re < 2300$ as Laminar Flow, $2300 \\le Re < 4000$ as Transitional Flow, and $Re \\ge 4000$ as Turbulent Flow. Formula: $Re = (\\rho \\times v \\times D) / \\mu$.',
    workedExample: 'Water ($\\rho = 1000\\text{ kg/m}^3$, dynamic viscosity $\\mu = 0.001\\text{ Pa}\\cdot\\text{s}$) flowing at $2\\text{ m/s}$ through a $0.1\\text{ m}$ (100 mm / 4-inch) pipe yields $Re = (1000 \\times 2 \\times 0.1) / 0.001 = 200,000$, which is deep in the Turbulent Flow regime.',
    faqs: [
      { q: 'Why do almost all domestic and industrial water pipes operate in Turbulent Flow ($Re > 4000$)?', a: 'Because water has a very low viscosity ($0.001\\text{ Pa}\\cdot\\text{s}$), even modest velocities in 1-inch to 4-inch pipes produce Reynolds numbers in the tens of thousands.' },
      { q: 'What is the difference between Dynamic Viscosity ($\\mu$) and Kinematic Viscosity ($\\nu$)?', a: 'Dynamic viscosity ($\\mu$, in $\\text{Pa}\\cdot\\text{s}$) measures internal shear resistance; dividing $\\mu$ by density $\\rho$ gives kinematic viscosity ($\\nu = \\mu / \\rho$, in $\\text{m}^2/\\text{s}$).' },
      { q: 'Why does turbulent flow matter for pump sizing?', a: 'Turbulent flow creates higher wall friction head loss (calculated via the Moody chart and Darcy-Weisbach equation), requiring more pump horsepower.' },
      { q: 'Where does Laminar Flow ($Re < 2300$) typically occur?', a: 'In heavy lubricating oils, honey, microfluidic blood capillaries, and slow groundwater seepage.' }
    ],
    whoUses: 'Who uses this: Civil water-supply engineers, WASA pipeline designers, mechanical/chemical engineers, and fluid mechanics students.'
  },
  'eng-thermal-expansion': {
    intro: 'Steel railway tracks across Pakistan Railways, concrete highway bridge decks, and rooftop hot-water PPR/GI pipes expand noticeably during $48^\\circ\\text{C}$ summer heatwaves and contract in winter. Leaving no expansion gap causes buckling and cracking. This calculator computes linear thermal expansion ($\\Delta L$) in meters and millimeters.',
    howItWorks: 'The change in length ($\\Delta L$) is proportional to the original length ($L_0$), the material’s linear thermal expansion coefficient ($\\alpha$, entered in units of $\\times 10^{-6}/^\\circ\\text{C}$), and the temperature change ($\\Delta T$ in $^\\circ\\text{C}$). Formula: $\\Delta L = L_0 \\times (\\alpha \\times 10^{-6}) \\times \\Delta T$.',
    workedExample: 'A 10-meter steel girder ($\\alpha = 12 \\times 10^{-6}/^\\circ\\text{C}$) subjected to a $50^\\circ\\text{C}$ seasonal temperature swing expands by $10 \\times 0.000012 \\times 50 = 0.0060\\text{ meters}$ ($6.00\\text{ mm}$).',
    faqs: [
      { q: 'What are typical thermal expansion coefficients ($\\alpha$) for common construction materials?', a: 'Structural Steel & Concrete $\\approx 12 \\times 10^{-6}/^\\circ\\text{C}$, Copper $\\approx 17 \\times 10^{-6}/^\\circ\\text{C}$, Aluminum $\\approx 23 \\times 10^{-6}/^\\circ\\text{C}$, and Glass $\\approx 9 \\times 10^{-6}/^\\circ\\text{C}$.' },
      { q: 'Why do reinforced concrete slabs and steel rebars work together without cracking from heat?', a: 'Remarkably, both steel and concrete share almost the exact same thermal expansion coefficient ($\\sim 12 \\times 10^{-6}/^\\circ\\text{C}$), so they expand and contract in lockstep!' },
      { q: 'Why do highway bridges have toothed finger joints at the ends?', a: 'A 100-meter bridge span expands by 60 mm (6 cm) over a $50^\\circ\\text{C}$ temperature swing; expansion joints absorb that movement safely.' },
      { q: 'Does PPR plastic pipe expand more than GI steel pipe?', a: 'Yes, unreinforced plastic pipes have a much higher expansion coefficient ($\\sim 70-150 \\times 10^{-6}/^\\circ\\text{C}$) and require expansion loops on long rooftop runs.' }
    ],
    whoUses: 'Who uses this: Civil bridge engineers, railway track inspectors, HVAC piping contractors, and physics students.'
  },
  'eng-projectile-range': {
    intro: 'In classical ballistics, sports biomechanics (like a javelin throw or a six hit at Gaddafi Stadium), and fountain nozzle design, an object launched at speed $v$ and angle $\\theta$ follows a parabolic trajectory. This calculator determines the maximum horizontal range on level ground.',
    howItWorks: 'The launch angle in degrees is converted into radians ($\\theta_{rad} = \\theta \\times \\pi / 180$). The calculator squares the initial launch velocity ($v^2$), multiplies by $\\sin(2\\theta)$, and divides by gravitational acceleration ($g$). Formula: $\\text{Range } (R) = (v^2 \\times \\sin(2\\theta)) / g$.',
    workedExample: 'A cricket ball struck at an initial velocity of $30\\text{ m/s}$ ($108\\text{ km/h}$) at the optimal launch angle of $45^\\circ$ under standard gravity ($9.8\\text{ m/s}^2$) travels $(900 \\times \\sin(90^\\circ)) / 9.8 = 91.84\\text{ Meters}$—clearing the boundary rope easily!',
    faqs: [
      { q: 'Why does a 45° launch angle always give the maximum possible horizontal range?', a: 'In the formula $R = (v^2 \\sin(2\\theta))/g$, the sine function reaches its maximum value of $1.0$ when $2\\theta = 90^\\circ$, which occurs at $\\theta = 45^\\circ$.' },
      { q: 'Which two different launch angles produce the exact same horizontal range?', a: 'Any two complementary angles that add up to $90^\\circ$—such as $30^\\circ$ and $60^\\circ$, or $20^\\circ$ and $70^\\circ$—yield the exact same range!' },
      { q: 'Does this formula account for air drag or wind?', a: 'This is the ideal vacuum ballistic formula taught in physics; in real air, aerodynamic drag reduces range slightly and lowers the optimal angle to around $38^\\circ-42^\\circ$.' },
      { q: 'What happens if I enter a 90° launch angle?', a: 'At $90^\\circ$ (straight up), $\\sin(180^\\circ) = 0$, so the horizontal range is 0 meters—the object goes straight up and lands back on the launch spot.' }
    ],
    whoUses: 'Who uses this: Physics students, sports science analysts, irrigation sprinkler designers, and teachers.'
  },
  'eng-centripetal-force': {
    intro: 'Whenever a vehicle rounds a curved highway interchange, a stone whirls on a string, or a centrifuge spins blood samples in a diagnostic lab, an inward Centripetal Force ($F_c$) is required to keep the mass moving along a circular path of radius $r$.',
    howItWorks: 'The calculator multiplies the object’s mass ($m$ in kg) by the square of its tangential velocity ($v^2$ in $\\text{m}^2/\\text{s}^2$) and divides by the turn radius ($r$ in meters). Formula: $F_c = (\\text{Mass} \\times \\text{Velocity}^2) / \\text{Radius}$.',
    workedExample: 'A 1,000 kg car rounding a motorway cloverleaf loop of radius $50\\text{ meters}$ at a speed of $20\\text{ m/s}$ ($72\\text{ km/h}$) requires $(1000 \\times 400) / 50 = 8,000\\text{ Newtons (N)}$ of inward lateral tire friction force to stay on the road.',
    faqs: [
      { q: 'What provides the centripetal force for a car turning on a flat road?', a: 'Static friction between the rubber tires and the asphalt road surface provides the inward force; if $F_c$ exceeds tire grip (e.g., on wet roads), the car skids outward.' },
      { q: 'Why do highway engineers bank (tilt) sharp curves on motorways and hill roads?', a: 'Banking tilts the road normal force inward so a component of gravity/normal force supplies centripetal force without relying solely on tire friction.' },
      { q: 'What happens to required centripetal force if you enter a curve at twice the speed?', a: 'Because velocity is squared ($v^2$), doubling your speed through the same corner requires 4 times as much cornering force!' },
      { q: 'Is Centrifugal Force the same as Centripetal Force?', a: 'Centripetal force is the real inward force acting on the object; centrifugal force is the apparent outward inertia felt inside the rotating frame.' }
    ],
    whoUses: 'Who uses this: Highway geometric design engineers, physics students, mechanical rotor designers, and lab technicians.'
  },
  'eng-momentum': {
    intro: 'Linear momentum ($p$) measures "mass in motion"—explaining why a slow-moving 40-ton freight truck on GT Road is much harder to stop than a fast-moving tennis ball. Conservation of momentum governs all elastic and inelastic collisions in physics and engineering.',
    howItWorks: 'The calculator multiplies the object’s mass ($m$ in kilograms) by its velocity ($v$ in meters per second) to compute linear momentum in kilogram-meters per second ($\\text{kg}\\cdot\\text{m/s}$, which is equivalent to Newton-seconds $\\text{N}\\cdot\\text{s}$). Formula: $p = \\text{Mass } (m) \\times \\text{Velocity } (v)$.',
    workedExample: 'A 1,500 kg SUV traveling at $20\\text{ m/s}$ ($72\\text{ km/h}$) has a linear momentum of $1500 \\times 20 = 30,000\\text{ kg}\\cdot\\text{m/s}$.',
    faqs: [
      { q: 'How is Momentum related to Impulse ($F \\times \\Delta t$)?', a: 'By the Impulse-Momentum Theorem, the change in an object’s momentum ($\\Delta p$) equals the applied force multiplied by the time duration ($F \\times \\Delta t$).' },
      { q: 'Why do airbags and crumple zones save lives in a car crash?', a: 'To stop the passenger’s momentum ($\\Delta p$), airbags increase the stopping time ($\\Delta t$), which drastically reduces the peak impact force ($F = \\Delta p / \\Delta t$) on the body.' },
      { q: 'Is momentum a vector or a scalar quantity?', a: 'Momentum is a vector quantity having the exact same direction as the velocity vector.' },
      { q: 'Are $\\text{kg}\\cdot\\text{m/s}$ and $\\text{N}\\cdot\\text{s}$ the exact same unit?', a: 'Yes! Since $1\\text{ N} = 1\\text{ kg}\\cdot\\text{m/s}^2$, multiplying Newtons by seconds gives $\\text{kg}\\cdot\\text{m/s}$.' }
    ],
    whoUses: 'Who uses this: Physics students, vehicle safety engineers, ballistics analysts, and mechanical engineers.'
  },
  'eng-torque': {
    intro: 'Whether you are tightening cylinder-head bolts on a tractor engine with a torque wrench, loosening a stubborn wheel lug nut with a long pipe extension, or sizing a robotic arm joint, Torque ($\\tau$, moment of force) measures rotational twisting power.',
    howItWorks: 'Assuming force is applied perpendicular ($90^\\circ$) to the wrench or lever arm, the calculator multiplies the applied Force ($F$ in Newtons) by the perpendicular Lever Arm Radius ($r$ in meters) to output Torque in Newton-meters ($\\text{N}\\cdot\\text{m}$). Formula: $\\text{Torque } (\\tau) = \\text{Force } (F) \\times \\text{Radius } (r)$.',
    workedExample: 'Applying $250\\text{ N}$ of push force (about $25.5\\text{ kgf}$) at the end of a $0.6\\text{ meter}$ ($60\\text{ cm}$) wheel spanner generates $250 \\times 0.6 = 150.00\\text{ N}\\cdot\\text{m}$ of rotational torque.',
    faqs: [
      { q: 'Why do truck mechanics slip a 1-meter steel pipe over a wheel wrench to loosen tight nuts?', a: 'Doubling or tripling the lever arm radius ($r$) multiplies the output torque by 2× or 3× with the exact same muscular effort!' },
      { q: 'How do I convert Newton-meters (N·m) into foot-pounds (ft-lbs)?', a: 'Multiply $\\text{N}\\cdot\\text{m}$ by $0.7376$ to get foot-pounds (so $150\\text{ N}\\cdot\\text{m} \\approx 110.6\\text{ ft-lbs}$).' },
      { q: 'Are Newton-meters of torque the same as Joules of energy?', a: 'Although both have base dimensions of $\\text{N}\\cdot\\text{m}$, torque is a rotational vector ($\\vec{r} \\times \\vec{F}$) and is never written as Joules.' },
      { q: 'What if the force is applied at an angle other than 90 degrees?', a: 'Only the perpendicular component counts: $\\tau = F \\times r \\times \\sin(\\theta)$.' }
    ],
    whoUses: 'Who uses this: Automotive mechanics, mechanical engineers, crane/rigging supervisors, and physics students.'
  },
  'eng-frequency-period': {
    intro: 'Every repeating wave or oscillation—from Pakistan’s 50 Hz AC power grid and engine crankshaft vibrations to quartz clock crystals—is characterized by its Frequency ($f$, cycles per second in Hertz) and its Period ($T$, duration of a single cycle in seconds). This converter links the two reciprocals.',
    howItWorks: 'Because Period and Frequency are exact mathematical reciprocals, the calculator divides 1 by the entered Frequency in Hertz (Hz) to find the Period in seconds, and also multiplies by 1,000 to display milliseconds (ms). Formula: $\\text{Period } (T) = 1 / \\text{Frequency } (f)$.',
    workedExample: 'Entering Pakistan’s standard AC grid frequency of $50\\text{ Hz}$ computes $T = 1 / 50 = 0.0200\\text{ seconds}$ ($20.0\\text{ ms}$) per complete sine-wave cycle.',
    faqs: [
      { q: 'Why does a 50 Hz AC wave cross zero voltage 100 times per second?', a: 'One full cycle ($20\\text{ ms}$) contains one positive half-cycle ($10\\text{ ms}$) and one negative half-cycle ($10\\text{ ms}$), crossing zero twice per cycle.' },
      { q: 'How can I use this calculator to convert Period (T) back into Frequency (f)?', a: 'Since $f = 1 / T$ uses the exact same reciprocal math, entering your Period in seconds into the input box outputs the numerical Frequency!' },
      { q: 'What is the period of a 1 kHz (1,000 Hz) audio test tone?', a: 'Entering 1000 Hz yields $0.0010\\text{ seconds}$, which is exactly $1.0\\text{ millisecond (ms)}$.' },
      { q: 'What does 1 Hertz (Hz) mean?', a: '1 Hz means exactly 1 complete cycle, vibration, or oscillation per second ($1\\text{ s}^{-1}$).' }
    ],
    whoUses: 'Who uses this: Oscilloscope users, electrical technicians, acoustics engineers, and physics students.'
  },
  'eng-wave-speed': {
    intro: 'Whether you are analyzing acoustic sound waves in air, ultrasonic NDT flaw-detection pulses in steel pipes, or water ripples in a hydraulics flume, the universal wave equation relates propagation speed ($v$), frequency ($f$), and wavelength ($\\lambda$).',
    howItWorks: 'A wave travels a distance of one wavelength ($\\lambda$) during one time period ($T = 1/f$). Multiplying Frequency ($f$ in Hz) by Wavelength ($\\lambda$ in meters) yields the Wave Propagation Speed ($v$ in meters per second). Formula: $\\text{Wave Speed } (v) = \\text{Frequency } (f) \\times \\text{Wavelength } (\\lambda)$.',
    workedExample: 'A musical tuning fork or loudspeaker vibrating at $440\\text{ Hz}$ (concert pitch A4) producing sound waves with a wavelength of $0.78\\text{ meters}$ in air propagates at $440 \\times 0.78 = 343.20\\text{ m/s}$ (the speed of sound at room temperature).',
    faqs: [
      { q: 'Does changing the frequency of a sound wave change its speed in air?', a: 'No! In a uniform medium at constant temperature, wave speed ($v$) stays constant (~343 m/s in air at 20°C); doubling the frequency simply halves the wavelength.' },
      { q: 'How does summer heat in Pakistan affect the speed of sound in air?', a: 'Sound travels faster in warm air ($v \\approx 331 + 0.6T_C$): at $40^\\circ\\text{C}$ in Multan, the speed of sound rises to about $355\\text{ m/s}$.' },
      { q: 'Does sound travel faster in water and steel than in air?', a: 'Much faster—about $1,480\\text{ m/s}$ in fresh water and nearly $5,960\\text{ m/s}$ in structural steel.' },
      { q: 'Does this formula apply to both transverse and longitudinal waves?', a: 'Yes, $v = f\\lambda$ holds universally for sound waves, seismic waves, string vibrations, and light waves.' }
    ],
    whoUses: 'Who uses this: Acoustics engineers, ultrasonic testing technicians, physics students, and audio engineers.'
  },
  'eng-decibel': {
    intro: 'Human hearing spans a trillion-fold range of acoustic energy—from the threshold of hearing ($10^{-12}\\text{ W/m}^2$) to a factory generator or jet engine. Because of this vast range, engineers measure noise levels on the logarithmic Decibel (dB) scale. This calculator converts sound intensity in $\\text{W/m}^2$ into dB.',
    howItWorks: 'The calculator divides the measured Sound Intensity ($I$ in $\\text{W/m}^2$) by the standard human hearing threshold reference intensity ($I_0 = 10^{-12}\\text{ W/m}^2$), takes the base-10 logarithm, and multiplies by 10. Formula: $\\text{Sound Level (dB)} = 10 \\times \\log_{10}(I / 10^{-12})$.',
    workedExample: 'A noisy industrial workshop or busy traffic intersection with a sound intensity of $1 \\times 10^{-4}\\text{ W/m}^2$ (`1e-4`) registers $10 \\times \\log_{10}(10^{-4} / 10^{-12}) = 10 \\times 8 = 80.0\\text{ dB}$.',
    faqs: [
      { q: 'Why does a +3 dB increase represent doubling the sound intensity?', a: 'Because $10 \\times \\log_{10}(2) \\approx 3.01\\text{ dB}$, turning on two identical generators side by side adds $+3\\text{ dB}$ to the noise level (e.g., from 80 dB to 83 dB, not 160 dB!).' },
      { q: 'How many dB increase feels "twice as loud" to the human ear?', a: 'Psychoacoustically, a $+10\\text{ dB}$ increase (which is $10\\times$ the acoustic power intensity) is perceived by human ears as roughly twice as loud.' },
      { q: 'What is the NEQS / OSHA safe workplace noise limit for an 8-hour factory shift?', a: 'Occupational health standards mandate hearing protection (earplugs/earmuffs) when continuous 8-hour workplace noise reaches or exceeds 85 dB.' },
      { q: 'How do I enter scientific notation like $10^{-6}$ in the Intensity field?', a: 'Type `1e-6` (or `0.000001`), which outputs $60.0\\text{ dB}$ (normal conversation level).' }
    ],
    whoUses: 'Who uses this: HSE occupational safety officers in textile/manufacturing plants, acoustics engineers, and physics students.'
  },
  'eng-coulomb': {
    intro: 'Coulomb’s Law is the electrostatic twin of Newton’s gravity equation, quantifying the attractive or repulsive force in Newtons between two point electric charges ($q_1$ and $q_2$) separated by a distance $r$. It forms the basis of FSc Part-2 Physics Chapter 12 (Electrostatics).',
    howItWorks: 'Using Coulomb’s constant $k = 8.98755 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$, the calculator multiplies $k$ by the absolute product of the two charges in Coulombs ($|q_1 \\times q_2|$) and divides by the square of the separation distance ($r^2$ in meters). Formula: $F_e = k \\times |q_1 \\times q_2| / r^2$.',
    workedExample: 'Two microcoulomb point charges of $q_1 = 2 \\times 10^{-6}\\text{ C}$ (`2e-6`) and $q_2 = 3 \\times 10^{-6}\\text{ C}$ (`3e-6`) placed $0.05\\text{ m}$ ($5\\text{ cm}$) apart exert an electrostatic force of $(8.98755 \\times 10^9 \\times 6 \\times 10^{-12}) / 0.0025 = 21.57\\text{ Newtons (N)}$.',
    faqs: [
      { q: 'How do I know if the force is attractive or repulsive?', a: 'Like charges (both positive or both negative) repel each other; opposite charges (one positive, one negative) attract each other.' },
      { q: 'Why do textbook problems always use microcoulombs ($\\mu\\text{C}$, `1e-6`) or nanocoulombs ($\\text{nC}$, `1e-9`)?', a: 'Because 1 full Coulomb is an enormous electrostatic charge—two 1 C charges 1 meter apart would exert nearly 9 billion Newtons of force!' },
      { q: 'What happens to the force if a dielectric insulator like glass or water is placed between the charges?', a: 'The electrostatic force decreases by the medium’s relative permittivity ($\\varepsilon_r$): $F_{medium} = F_{vacuum} / \\varepsilon_r$.' },
      { q: 'What happens if the distance between the charges is halved?', a: 'Halving the distance ($r/2$) quadruples ($4\\times$) the electrostatic force under the inverse-square law.' }
    ],
    whoUses: 'Who uses this: FSc Part-2 and A-Level physics students, MDCAT/ECAT candidates, and electrical engineering students.'
  },
  'eng-radioactive-decay': {
    intro: 'In nuclear physics, hospital nuclear medicine (such as Technetium-99m or Iodine-131 used at INMOL and KIRAN hospitals in Pakistan), and radiocarbon archaeological dating, radioactive isotopes decay exponentially by half-lives. This calculator finds the exact mass remaining after $n$ elapsed half-lives.',
    howItWorks: 'After every single half-life period ($T_{1/2}$), exactly half ($0.5$) of the radioactive nuclei remain undecayed. The calculator multiplies the Initial Mass ($M_0$) by $0.5$ raised to the power of the number of elapsed half-lives ($n$). Formula: $\\text{Remaining Mass} = M_0 \\times (0.5)^n$.',
    workedExample: 'Starting with $100\\text{ grams}$ of a radioactive medical isotope, after $3$ half-lives have elapsed ($100 \\to 50 \\to 25 \\to 12.5$), exactly $12.500\\text{ grams}$ of the original isotope remain.',
    faqs: [
      { q: 'Can I enter a decimal number of half-lives (such as 2.5 half-lives)?', a: 'Yes! Because the calculator uses the continuous exponential function $(0.5)^n$, entering $n = 2.5$ accurately computes $100 \\times (0.5)^{2.5} = 17.678\\text{ grams}$.' },
      { q: 'How do I find the number of elapsed half-lives ($n$) from total time?', a: 'Divide total elapsed time by the isotope’s half-life ($n = t / T_{1/2}$)—for example, 24 hours for an isotope with an 8-hour half-life equals $n = 3$ half-lives.' },
      { q: 'Does the missing mass disappear into thin air?', a: 'No, the decayed parent nuclei transform into daughter nuclei (plus alpha/beta/gamma radiation), so total mass is conserved except for a tiny binding-energy fraction.' },
      { q: 'How many half-lives does it take for radioactivity to drop below 1% of its initial value?', a: 'After 7 half-lives ($0.5^7 = 0.78\\%$), less than 1% of the original radioactive isotope remains.' }
    ],
    whoUses: 'Who uses this: Medical physicists, nuclear engineering students, radiopharmacists, and FSc/A-Level physics students.'
  },
  'eng-density': {
    intro: 'Material density ($\\rho$, mass per unit volume) determines whether an object floats or sinks, how much a cubic meter of concrete or steel weighs on a construction crane, and whether milk or fuel has been adulterated. This calculator computes density in $\\text{kg/m}^3$ from mass and volume.',
    howItWorks: 'The calculator divides the object’s Mass ($m$ in kilograms) by its Volume ($V$ in cubic meters $\\text{m}^3$) to output Density in kilograms per cubic meter ($\\text{kg/m}^3$). Formula: $\\text{Density } (\\rho) = \\text{Mass } (m) / \\text{Volume } (V)$.',
    workedExample: 'A cast metal machine block with a mass of $500\\text{ kg}$ and a volume of $0.05\\text{ m}^3$ has a density of $500 / 0.05 = 10,000\\text{ kg/m}^3$.',
    faqs: [
      { q: 'What are the standard densities of water, concrete, and steel in $\\text{kg/m}^3$?', a: 'Fresh Water = $1,000\\text{ kg/m}^3$, Plain Concrete $\\approx 2,400\\text{ kg/m}^3$, Structural Steel = $7,850\\text{ kg/m}^3$, and Gold = $19,320\\text{ kg/m}^3$.' },
      { q: 'How do I convert $\\text{g/cm}^3$ into $\\text{kg/m}^3$?', a: 'Multiply $\\text{g/cm}^3$ by 1,000—for example, water at $1.0\\text{ g/cm}^3$ equals $1,000\\text{ kg/m}^3$, and steel at $7.85\\text{ g/cm}^3$ equals $7,850\\text{ kg/m}^3$.' },
      { q: 'How many cubic meters ($\\text{m}^3$) is 1 Liter?', a: '1 cubic meter equals 1,000 Liters, so 1 Liter is $0.001\\text{ m}^3$.' },
      { q: 'How do dairy collection centers in Punjab test milk purity using density?', a: 'Pure buffalo/cow milk has a density around $1,028$ to $1,032\\text{ kg/m}^3$ (measured with a lactometer); adding water lowers the density toward $1,000\\text{ kg/m}^3$.' }
    ],
    whoUses: 'Who uses this: Materials engineers, civil concrete testing labs, quality control inspectors, and science students.'
  },
  'eng-specific-heat': {
    intro: 'In thermodynamics, boilers, geysers, and industrial chillers, the heat energy ($Q$) required to raise or lower the temperature of a substance without changing its phase depends on its mass, its Specific Heat Capacity ($c$), and the temperature change ($\\Delta T$).',
    howItWorks: 'The calculator multiplies Mass ($m$ in kg), Specific Heat Capacity ($c$ in $\\text{J}/(\\text{kg}\\cdot{^\\circ\\text{C}})$), and Temperature Change ($\\Delta T$ in $^\\circ\\text{C}$) to compute thermal energy in Joules (J). Formula: $Q = m \\times c \\times \\Delta T$.',
    workedExample: 'Heating $2\\text{ kg}$ ($2\\text{ Liters}$) of water ($c = 4,184\\text{ J/kg}\\cdot{^\\circ\\text{C}}$) in a kettle by $\\Delta T = 25^\\circ\\text{C}$ (e.g., from $25^\\circ\\text{C}$ to $50^\\circ\\text{C}$) requires $2 \\times 4184 \\times 25 = 209,200\\text{ Joules (J)}$ of heat energy.',
    faqs: [
      { q: 'Why does water have such a high specific heat capacity ($4,184\\text{ J/kg}\\cdot{^\\circ\\text{C}}$) compared to metals?', a: 'Hydrogen bonding between water molecules absorbs large amounts of thermal energy before molecular kinetic temperature rises—making water an ideal engine coolant.' },
      { q: 'What are the specific heat capacities of aluminum, iron/steel, and copper?', a: 'Aluminum $\\approx 900\\text{ J/kg}\\cdot{^\\circ\\text{C}}$, Iron/Steel $\\approx 450\\text{ J/kg}\\cdot{^\\circ\\text{C}}$, and Copper $\\approx 385\\text{ J/kg}\\cdot{^\\circ\\text{C}}$ (nearly 11× easier to heat than water).' },
      { q: 'Does this formula include the heat needed to boil water into steam at 100°C?', a: 'No, $Q = mc\\Delta T$ calculates sensible heat; boiling water at $100^\\circ\\text{C}$ requires adding the Latent Heat of Vaporization ($2,260,000\\text{ J/kg}$).' },
      { q: 'How do I convert Joules of heat into kWh electricity units?', a: 'Divide Joules by $3,600,000$ ($3.6 \\times 10^6\\text{ J/kWh}$).' }
    ],
    whoUses: 'Who uses this: HVAC and boiler engineers, chemical process engineers, and physics/chemistry students.'
  },
  'eng-pendulum': {
    intro: 'From grandfather pendulum clocks to FSc physics practical laboratory experiments determining local acceleration due to gravity ($g$), the oscillation period ($T$) of a simple pendulum depends solely on its string length ($L$) and gravity ($g$), independent of bob mass.',
    howItWorks: 'For small swing angles ($< 15^\\circ$), the calculator divides Pendulum Length ($L$ in meters) by Gravity ($g$ in $\\text{m/s}^2$), takes the square root, and multiplies by $2\\pi$ to compute the full back-and-forth swing period in seconds. Formula: $T = 2\\pi \\times \\sqrt{L / g}$.',
    workedExample: 'A simple pendulum with a length of $1.0\\text{ meter}$ swinging under standard Earth gravity ($9.8\\text{ m/s}^2$) has a complete oscillation period of $2 \\times 3.14159 \\times \\sqrt{1.0 / 9.8} = 2.007\\text{ Seconds}$.',
    faqs: [
      { q: 'Why is a 1-meter pendulum called a "Seconds Pendulum"?', a: 'Because a pendulum of length $\\approx 0.993\\text{ m}$ ($1\\text{ m}$) takes 1 second for each one-way swing and 2.0 seconds for a complete back-and-forth period!' },
      { q: 'What happens to the pendulum period if I use a heavier brass bob instead of a light iron bob?', a: 'Nothing! Mass cancels out of the equation completely, so a heavy bob and a light bob of the same length swing at the exact same period.' },
      { q: 'How do I double the time period of a simple pendulum?', a: 'Because $L$ is inside a square root ($\\sqrt{L}$), you must quadruple ($4\\times$) the string length to double the oscillation period.' },
      { q: 'How is length ($L$) measured in a college physics practical?', a: 'Measure from the point of suspension at the split cork down to the center of mass of the metallic bob (string length + radius of the bob).' }
    ],
    whoUses: 'Who uses this: Matric and FSc physics practical students, lab demonstrators, horologists, and seismic instrument designers.'
  },
  'eng-hookes-law': {
    intro: 'Hooke’s Law governs elastic springs—from motorcycle shock absorbers and industrial valve springs to weighing scales and mechanical dynamometers. Within the elastic limit, the restoring force exerted by a spring is directly proportional to how far it is stretched or compressed.',
    howItWorks: 'The calculator multiplies the Spring Constant / Stiffness ($k$ in Newtons per meter $\\text{N/m}$) by the linear Displacement or extension ($x$ in meters) to find the magnitude of the spring force in Newtons (N). Formula: $\\text{Force } (F) = \\text{Spring Constant } (k) \\times \\text{Displacement } (x)$.',
    workedExample: 'A coil spring with a stiffness constant of $k = 250\\text{ N/m}$ stretched by $x = 0.08\\text{ meters}$ ($8\\text{ cm}$) exerts a restoring force of $250 \\times 0.08 = 20.00\\text{ Newtons (N)}$.',
    faqs: [
      { q: 'What does a high spring constant ($k$) mean physically?', a: 'A high $k$ value means a stiff, heavy-duty spring (like a truck suspension coil with $k = 50,000\\text{ N/m}$); a low $k$ means a soft spring (like a ballpoint pen spring).' },
      { q: 'Why is Hooke’s Law sometimes written with a minus sign ($F = -kx$)?', a: 'The negative sign simply indicates that the spring’s internal restoring force pulls in the opposite direction of your stretch or compression.' },
      { q: 'What happens if a spring is stretched beyond its Elastic Limit?', a: 'It undergoes permanent plastic deformation and will no longer obey Hooke’s Law or return to its original length.' },
      { q: 'How do I calculate the elastic potential energy stored in the stretched spring?', a: 'Elastic potential energy is $PE_s = \\frac{1}{2}kx^2 = \\frac{1}{2}Fx$ (in the worked example, $0.5 \\times 20 \\times 0.08 = 0.80\\text{ Joules}$).' }
    ],
    whoUses: 'Who uses this: Mechanical design engineers, automotive suspension technicians, and physics students.'
  },
  'eng-stress-strain': {
    intro: 'Before choosing the thickness of a steel tie-rod, concrete column, or elevator cable, structural and mechanical engineers calculate Mechanical Stress ($\\sigma$)—the internal force intensity per unit cross-sectional area—to ensure it stays well below the material’s yield strength.',
    howItWorks: 'The calculator divides the Applied Axial Force ($F$ in Newtons) by the Cross-Sectional Area ($A$ in square meters $\\text{m}^2$) to compute stress in Pascals ($\\text{Pa} = \\text{N/m}^2$), and divides by $10^6$ to express the result in Megapascals ($\\text{MPa}$). Formula: $\\text{Stress } (\\sigma) = F / A$.',
    workedExample: 'A steel tension rod with a cross-sectional area of $0.002\\text{ m}^2$ ($2,000\\text{ mm}^2$) supporting a tensile load of $50,000\\text{ Newtons}$ ($\\approx 5\\text{ tons}$) experiences a tensile stress of $50,000 / 0.002 = 25,000,000\\text{ Pa} = 25.00\\text{ MPa}$.',
    faqs: [
      { q: 'Why do engineers prefer Megapascals (MPa) over Pascals (Pa)?', a: '1 Pascal is tiny ($1\\text{ N}$ spread over $1\\text{ m}^2$), whereas $1\\text{ MPa}$ equals exactly $1\\text{ Newton per square millimeter (N/mm}^2\\text{)}$, which is ideal for engineering sections.' },
      { q: 'What is the yield strength in MPa of Grade 60 steel rebars used in Pakistan?', a: 'Grade 60 steel (60,000 PSI) has a minimum yield strength of approximately $414\\text{ MPa}$ ($420\\text{ MPa}$).' },
      { q: 'How do I convert $\\text{mm}^2$ into $\\text{m}^2$ for the Area input?', a: 'Divide $\\text{mm}^2$ by $1,000,000$ ($10^6$)—for example, $500\\text{ mm}^2 = 0.0005\\text{ m}^2$.' },
      { q: 'How do I find Strain ($\\varepsilon$) from Stress ($\\sigma$)?', a: 'Divide Stress by the material’s Young’s Modulus of Elasticity ($E$): $\\varepsilon = \\sigma / E$ (for steel, $E \\approx 200,000\\text{ MPa}$).' }
    ],
    whoUses: 'Who uses this: Structural and civil engineers, mechanical machine designers, metallurgy labs, and engineering students.'
  },
  'eng-refractive-index': {
    intro: 'When a ray of light passes from one transparent medium into another—such as from air into optical crown glass, water, or a fiber-optic cable core—it bends at the boundary according to Snell’s Law of Refraction. This calculator computes the exact Angle of Refraction ($\\theta_2$) or detects Total Internal Reflection.',
    howItWorks: 'The Angle of Incidence ($\\theta_1$ in degrees) is converted to radians, and Snell’s Law is solved for $\\sin(\\theta_2) = (n_1 \\times \\sin(\\theta_1)) / n_2$. If $|\\sin(\\theta_2)| > 1$, Total Internal Reflection occurs; otherwise $\\arcsin$ converts the result back to degrees. Formula: $n_1 \\sin(\\theta_1) = n_2 \\sin(\\theta_2)$.',
    workedExample: 'A laser beam traveling through air ($n_1 = 1.0$) strikes a flat glass block ($n_2 = 1.5$) at an angle of incidence of $\\theta_1 = 30^\\circ$. Since $\\sin(30^\\circ) = 0.5$, $\\sin(\\theta_2) = (1.0 \\times 0.5) / 1.5 = 0.3333$, giving an Angle of Refraction of $\\theta_2 = 19.47^\\circ$.',
    faqs: [
      { q: 'Does light bend toward or away from the normal when entering a denser medium (like air to glass)?', a: 'When $n_2 > n_1$, light slows down and bends toward the normal line ($\\theta_2 < \\theta_1$).' },
      { q: 'When does Total Internal Reflection occur?', a: 'When light travels from a denser medium to a rarer medium ($n_1 > n_2$, like glass to air) at an incidence angle greater than the Critical Angle $\\theta_c = \\arcsin(n_2/n_1)$.' },
      { q: 'How do PTCL/Nayatel fiber-optic internet cables use Snell’s Law?', a: 'Laser pulses travel inside a high-index silica glass core ($n_1 \\approx 1.48$) surrounded by lower-index cladding ($n_2 \\approx 1.46$), reflecting 100% internally over kilometers.' },
      { q: 'What are typical refractive indices ($n$) for common media?', a: 'Air $\\approx 1.0003$, Water $= 1.333$, Crown Glass $\\approx 1.52$, and Diamond $= 2.417$.' }
    ],
    whoUses: 'Who uses this: Optics and photonics students, optometrists, telecom fiber engineers, and FSc/O-Level physics students.'
  },
  'eng-doppler-effect': {
    intro: 'When an Edhi or Rescue 1122 ambulance approaches you with its siren wailing, the pitch sounds noticeably higher than when the vehicle is parked. This frequency shift caused by motion of the wave source is the Doppler Effect, used in radar speed guns, Doppler echocardiography, and astronomy.',
    howItWorks: 'For a sound source moving toward a stationary observer at speed $v_s$ in a medium where the speed of sound is $v$, sound wavefronts bunch closer together, increasing the observed frequency $f$. Formula: $f = f_0 \\times [v / (v - v_s)]$.',
    workedExample: 'An ambulance siren emitting a true frequency of $f_0 = 1,000\\text{ Hz}$ approaches at $v_s = 20\\text{ m/s}$ ($72\\text{ km/h}$) when the speed of sound is $v = 343\\text{ m/s}$. The observer hears a higher pitch of $1000 \\times [343 / (343 - 20)] = 1,061.9\\text{ Hz}$.',
    faqs: [
      { q: 'How do I calculate the lower frequency heard after the ambulance passes and moves away?', a: 'Enter a negative number for Source Speed (e.g., `vs = -20`), which changes the denominator to $(v + v_s)$ and outputs $944.9\\text{ Hz}$!' },
      { q: 'What happens if the source speed ($v_s$) equals or exceeds the speed of sound ($v$)?', a: 'The wavefronts pile up into a supersonic shockwave (sonic boom) at Mach 1, where the subsonic Doppler denominator reaches zero.' },
      { q: 'How do Motorway Police radar guns use the Doppler Effect in Pakistan?', a: 'The radar gun bounces a microwave beam off a moving car and measures the Doppler frequency shift of the reflected wave to calculate speed in km/h.' },
      { q: 'How is Doppler ultrasound used in hospitals?', a: 'By measuring the Doppler shift of ultrasound waves bouncing off moving red blood cells, cardiologists measure blood flow velocity through heart valves.' }
    ],
    whoUses: 'Who uses this: Physics students, medical ultrasound technicians, radar/sonar engineers, and acoustics researchers.'
  },
  'eng-thermal-conductivity': {
    intro: 'In hot Pakistani summers, heat pours into rooms through brick walls and concrete roofs via thermal conduction. Fourier’s Law of Heat Conduction calculates the exact heat transfer rate in Watts ($Q$) passing through a wall of given thermal conductivity ($k$), area ($A$), thickness ($x$), and indoor-outdoor temperature difference ($\\Delta T$).',
    howItWorks: 'The calculator multiplies the material’s Thermal Conductivity ($k$ in $\\text{W}/(\\text{m}\\cdot\\text{K})$), Wall Surface Area ($A$ in $\\text{m}^2$), and Temperature Difference ($\\Delta T$ in $^\\circ\\text{C}$), then divides by Wall Thickness ($x$ in meters). Formula: $Q = (k \\times A \\times \\Delta T) / x$.',
    workedExample: 'A sun-facing brick wall of area $20\\text{ m}^2$, thickness $0.2\\text{ m}$ ($9\\text{ inches}$), and thermal conductivity $k = 0.8\\text{ W}/(\\text{m}\\cdot\\text{K})$, with an outside surface at $55^\\circ\\text{C}$ and room air at $25^\\circ\\text{C}$ ($\\Delta T = 30^\\circ\\text{C}$), conducts $(0.8 \\times 20 \\times 30) / 0.2 = 2,400.00\\text{ Watts}$ of heat into the room.',
    faqs: [
      { q: 'Why did the 20 m² brick wall let 2,400 Watts of heat in (almost equal to a 1-Ton AC’s entire cooling capacity)?', a: 'Uninsulated 9-inch brick or concrete roofs have relatively high thermal conductivity ($k \\approx 0.8 - 1.5\\text{ W/m}\\cdot\\text{K}$); adding 2 inches of Jumbolon/XPS foam insulation ($k = 0.03\\text{ W/m}\\cdot\\text{K}$) cuts roof heat gain by 75%!' },
      { q: 'What are typical thermal conductivity ($k$) values for building materials vs metals?', a: 'XPS/PU Foam Insulation $\\approx 0.03$, Wood $\\approx 0.15$, Brick $\\approx 0.7-0.8$, Concrete $\\approx 1.4$, Steel $\\approx 50$, and Copper $\\approx 385\\text{ W/m}\\cdot\\text{K}$.' },
      { q: 'Is a $1^\\circ\\text{C}$ temperature difference equal to a $1\\text{ K}$ (Kelvin) difference?', a: 'Yes, the step size of 1 degree Celsius is identical to 1 Kelvin, so $\\Delta T$ in $^\\circ\\text{C}$ and $\\text{K}$ are interchangeable.' },
      { q: 'How does doubling wall thickness affect heat transfer?', a: 'Doubling the thickness ($x$) halves the conductive heat transfer rate ($Q$).' }
    ],
    whoUses: 'Who uses this: HVAC load-sizing engineers, green building architects, cold-storage designers, and mechanical engineering students.'
  },
  'eng-reynolds-kinematic': {
    intro: 'Fluid mechanics handbooks and Moody tables frequently list fluid viscosity as Kinematic Viscosity ($\\nu$ in $\\text{m}^2/\\text{s}$, where density is already combined with dynamic viscosity: $\\nu = \\mu / \\rho$). This specialized calculator computes the Reynolds Number ($Re$) directly from velocity, pipe diameter, and kinematic viscosity.',
    howItWorks: 'The calculator multiplies Flow Velocity ($v$ in $\\text{m/s}$) by Internal Pipe Diameter ($d$ in meters) and divides by Kinematic Viscosity ($\\nu$ in $\\text{m}^2/\\text{s}$), classifying the flow as Laminar ($Re < 2300$), Transitional ($2300 \\le Re \\le 4000$), or Turbulent ($Re > 4000$). Formula: $Re = (v \\times d) / \\nu$.',
    workedExample: 'Water at $20^\\circ\\text{C}$ (kinematic viscosity $\\nu = 0.000001\\text{ m}^2/\\text{s}$, or $10^{-6}\\text{ m}^2/\\text{s}$) flowing at $v = 2.0\\text{ m/s}$ inside a $0.1\\text{ m}$ diameter pipe gives $Re = (2.0 \\times 0.1) / 0.000001 = 200,000\\text{ (Turbulent Flow)}$.',
    faqs: [
      { q: 'What is the kinematic viscosity of water vs air at $20^\\circ\\text{C}$?', a: 'Water is approximately $1.0 \\times 10^{-6}\\text{ m}^2/\\text{s}$ ($1\\text{ centistoke}$), whereas air is roughly $1.5 \\times 10^{-5}\\text{ m}^2/\\text{s}$ ($15\\times$ higher kinematic viscosity than water).' },
      { q: 'How do I convert Centistokes (cSt) from an engine oil bottle into $\\text{m}^2/\\text{s}$?', a: 'Multiply Centistokes by $10^{-6}$—for example, SAE 40 oil at $100\\text{ cSt}$ equals $0.0001\\text{ m}^2/\\text{s}$.' },
      { q: 'When should I use this calculator instead of the Dynamic Viscosity Reynolds calculator?', a: 'Use this one whenever your problem statement or fluid property table gives Kinematic Viscosity ($\\nu$ in $\\text{m}^2/\\text{s}$ or $\\text{cSt}$) without needing fluid density.' },
      { q: 'What happens to the Reynolds number of water when heated from $20^\\circ\\text{C}$ to $80^\\circ\\text{C}$?', a: 'Hot water is much less viscous ($\\nu \\approx 0.36 \\times 10^{-6}\\text{ m}^2/\\text{s}$), so its Reynolds number nearly triples at the same flow speed.' }
    ],
    whoUses: 'Who uses this: Mechanical and chemical engineers, lubrication specialists, hydraulics students, and pipeline designers.'
  },
  'eng-torque-power': {
    intro: 'In automotive engines, electric motors, diesel generators, and industrial gearboxes, mechanical output power depends on the combination of rotational Torque ($\\tau$) and rotational speed ($\\text{RPM}$). This calculator converts Torque in $\\text{N}\\cdot\\text{m}$ and speed in $\\text{RPM}$ into mechanical Power in Watts and kilowatts (kW).',
    howItWorks: 'Rotational speed in Revolutions Per Minute (RPM) is converted into angular velocity in radians per second ($\\omega = \\text{RPM} \\times 2\\pi / 60$). Multiplying Torque ($\\text{N}\\cdot\\text{m}$) by angular velocity ($\\omega$) yields mechanical shaft power in Watts. Formula: $\\text{Power (W)} = \\text{Torque} \\times (\\text{RPM} \\times 2\\pi / 60)$.',
    workedExample: 'An engine or industrial motor delivering $150\\text{ N}\\cdot\\text{m}$ of torque at a rotational speed of $3,000\\text{ RPM}$ produces $(150 \\times 3000 \\times 6.28318) / 60 = 47,123.9\\text{ Watts}$ ($47.12\\text{ kW}$, or about $63.2\\text{ HP}$).',
    faqs: [
      { q: 'Why does a gear reducer (gearbox) increase torque while keeping power roughly constant?', a: 'Because $\\text{Power} = \\text{Torque} \\times \\omega$: stepping down RPM by a 10:1 gear ratio multiplies output shaft torque by nearly 10× for the same motor kW!' },
      { q: 'What is the standard synchronous RPM of a 4-pole AC induction motor in Pakistan (at 50 Hz)?', a: 'A 4-pole motor runs at $1,500\\text{ RPM}$ synchronous speed (about $1,440\\text{ RPM}$ under full load slip), while a 2-pole motor runs near $2,900\\text{ RPM}$.' },
      { q: 'How do I convert the kW output into Horsepower (HP)?', a: 'Multiply kW by $1.341$ (or divide Watts by $745.7$) to get mechanical Horsepower.' },
      { q: 'Why do diesel tractor engines produce high pulling force at low RPM?', a: 'Diesel engines generate high peak torque ($\\text{N}\\cdot\\text{m}$) at low RPM (1,400–1,800 RPM), giving massive wheel lugging force.' }
    ],
    whoUses: 'Who uses this: Automotive engineers, industrial motor/gearbox selectors, mechanical engineering students, and dyno tuners.'
  },
  'eng-bernoulli': {
    intro: 'Bernoulli’s Equation describes conservation of energy in a flowing fluid: when water flows into a narrower pipe constriction (like a Venturi meter, spray nozzle, or carburetor throat) and speeds up from $v_1$ to $v_2$, its static fluid pressure drops from $P_1$ to $P_2$. This calculator computes the final pressure $P_2$ for water flow.',
    howItWorks: 'Assuming horizontal flow of incompressible water ($\\rho = 1,000\\text{ kg/m}^3$), total pressure head remains constant: $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$. The calculator solves for $P_2$ in Pascals (Pa). Formula: $P_2 = P_1 + 0.5 \\times 1000 \\times (v_1^2 - v_2^2)$.',
    workedExample: 'Water flowing in a horizontal pipe at an initial pressure of $P_1 = 100,000\\text{ Pa}$ ($1\\text{ bar}$) and initial velocity $v_1 = 5\\text{ m/s}$ enters a constricted nozzle where velocity rises to $v_2 = 15\\text{ m/s}$. The static pressure drops to $100,000 + 500 \\times (25 - 225) = 0\\text{ Pa}$ (gauge vacuum threshold!).',
    faqs: [
      { q: 'Why does static pressure drop when fluid velocity increases?', a: 'Because total mechanical energy per unit volume is conserved; gaining kinetic energy per unit volume ($\\frac{1}{2}\\rho v^2$) must come at the expense of static pressure potential energy ($P$).' },
      { q: 'What happens if $P_2$ drops below the vapor pressure of water?', a: 'Cavitation occurs—tiny vapor bubbles form and violently collapse downstream, eroding pump impellers and pipe valves.' },
      { q: 'How do agricultural Venturi fertilizer injectors in Pakistan use Bernoulli’s principle?', a: 'By accelerating irrigation water through a narrow throat ($v_2 > v_1$), pressure $P_2$ drops below atmospheric pressure, sucking liquid fertilizer into the water stream without an extra pump!' },
      { q: 'What if the pipe widens so that $v_2$ is slower than $v_1$?', a: 'When fluid slows down in a diffuser ($v_2 < v_1$), kinetic head converts back into static pressure, so $P_2$ increases above $P_1$.' }
    ],
    whoUses: 'Who uses this: Hydraulics and irrigation engineers, mechanical pump designers, and FSc/university fluid mechanics students.'
  },
  'eng-linear-thermal-expansion': {
    intro: 'When precision machining shafts, laying long welded steel pipelines, or installing overhead aluminum conductors, engineers need both the exact millimeter expansion ($\\Delta L$) and the new total expanded length ($L_{final} = L_0 + \\Delta L$). This calculator outputs both values simultaneously.',
    howItWorks: 'The calculator multiplies Initial Length ($L_0$ in meters) by the Linear Thermal Expansion Coefficient ($\\alpha \\times 10^{-6}/^\\circ\\text{C}$) and Temperature Change ($\\Delta T$ in $^\\circ\\text{C}$) to find $\\Delta L$, then adds $\\Delta L$ to $L_0$ for the final length. Formula: $\\Delta L = L_0 \\times \\alpha \\times 10^{-6} \\times \\Delta T$; $L_{final} = L_0 + \\Delta L$.',
    workedExample: 'A 10-meter steel bar ($\\alpha = 12 \\times 10^{-6}/^\\circ\\text{C}$) heated by $\\Delta T = 50^\\circ\\text{C}$ expands by $\\Delta L = 6.00\\text{ mm}$ ($0.00600\\text{ m}$), reaching a Final Length of $10.0060\\text{ meters}$.',
    faqs: [
      { q: 'Can I enter a negative Temperature Change ($\\Delta T$) for winter contraction?', a: 'Yes! Entering $\\Delta T = -30^\\circ\\text{C}$ yields a negative $\\Delta L = -3.60\\text{ mm}$ and a contracted Final Length of $9.9964\\text{ meters}$.' },
      { q: 'How do machinists use thermal expansion for "shrink-fitting" steel bearings or gears onto a shaft?', a: 'Heating a steel gear ring by $150^\\circ\\text{C}$ expands its bore diameter slightly so it slips easily onto a cold shaft, locking with immense grip once it cools!' },
      { q: 'Why do overhead WAPDA transmission lines sag lower in June than in January?', a: 'High ambient air temperature plus $I^2R$ electrical heating causes the aluminum ACSR conductor to expand linearly, increasing vertical sag between towers.' },
      { q: 'What is Invar alloy and why is it used in precision instruments?', a: 'Invar (64% iron, 36% nickel) has an ultra-low expansion coefficient ($\\alpha \\approx 1.2 \\times 10^{-6}/^\\circ\\text{C}$, $10\\times$ less than regular steel).' }
    ],
    whoUses: 'Who uses this: Precision machinists, power transmission line engineers, pipeline fabricators, and physics students.'
  }
};
