import type { Category } from "../../types.ts";

export const educationCategory: Category = {
    id: 'education',
    name: 'Education & Student',
    iconName: 'GraduationCap',
    description: 'GPA, CGPA, marks percentage, letter grades, average marks, attendance analysis, final exam required marks, study planners, SGPA converters, and tuition fee calculators.',
    color: 'from-violet-600 to-purple-800',
    calculators: [
      {
        id: 'edu-gpa-calc',
        name: 'GPA Calculator (4.0 Scale)',
        categoryId: 'education',
        description: 'Calculate semester Grade Point Average (GPA) on a 4.0 scale.',
        inputs: [
          { id: 'grades', label: 'Grades (comma separated, e.g. 4.0, 3.7, 3.0)', type: 'text', defaultValue: '4.0, 3.7, 3.0, 3.5' },
          { id: 'credits', label: 'Credit Hours (comma separated, e.g. 3, 3, 4, 3)', type: 'text', defaultValue: '3, 3, 4, 3' }
        ],
        calculate: (vals) => {
          const gList = String(vals.grades).split(',').map(n => parseFloat(n.trim()));
          const cList = String(vals.credits).split(',').map(n => parseFloat(n.trim()));
          if (gList.length !== cList.length || gList.some(isNaN) || cList.some(isNaN)) {
            return { result: 'Ensure matching valid grades and credits' };
          }
          let totalPoints = 0;
          let totalCredits = 0;
          for (let i = 0; i < gList.length; i++) {
            totalPoints += gList[i] * cList[i];
            totalCredits += cList[i];
          }
          const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
          return {
            result: `${gpa.toFixed(2)} / 4.0 GPA`,
            secondaryResult: `Total Quality Points: ${totalPoints.toFixed(1)} | Total Credits: ${totalCredits}`,
            formula: 'GPA = Sum(Grade × Credits) / Sum(Credits)'
          };
        }
      },
      {
        id: 'edu-cgpa-calc',
        name: 'CGPA Calculator (Multiple Semesters)',
        categoryId: 'education',
        description: 'Calculate Cumulative Grade Point Average (CGPA) across multiple semesters.',
        inputs: [
          { id: 'semGpas', label: 'Semester GPAs (comma separated, e.g. 3.5, 3.8, 3.6)', type: 'text', defaultValue: '3.5, 3.7, 3.6' },
          { id: 'semCredits', label: 'Semester Credits (comma separated, e.g. 15, 16, 15)', type: 'text', defaultValue: '15, 16, 15' }
        ],
        calculate: (vals) => {
          const gList = String(vals.semGpas).split(',').map(n => parseFloat(n.trim()));
          const cList = String(vals.semCredits).split(',').map(n => parseFloat(n.trim()));
          if (gList.length !== cList.length || gList.some(isNaN) || cList.some(isNaN)) {
            return { result: 'Ensure matching valid semester GPAs and credits' };
          }
          let totalPts = 0;
          let totalCreds = 0;
          for (let i = 0; i < gList.length; i++) {
            totalPts += gList[i] * cList[i];
            totalCreds += cList[i];
          }
          const cgpa = totalCreds > 0 ? totalPts / totalCreds : 0;
          return {
            result: `${cgpa.toFixed(2)} CGPA`,
            secondaryResult: `Total Cumulative Credits: ${totalCreds}`,
            formula: 'CGPA = Sum(Semester GPA × Semester Credits) / Total Cumulative Credits'
          };
        }
      },
      {
        id: 'edu-marks-percentage',
        name: 'Percentage Calculator for Marks',
        categoryId: 'education',
        description: 'Calculate exam percentage from obtained marks and total marks.',
        inputs: [
          { id: 'obtained', label: 'Marks Obtained', type: 'number', defaultValue: 425 },
          { id: 'total', label: 'Total Marks', type: 'number', defaultValue: 500 }
        ],
        calculate: (vals) => {
          const obt = Number(vals.obtained);
          const tot = Number(vals.total);
          if (tot <= 0) return { result: 'Total marks must be > 0' };
          const pct = (obt / tot) * 100;
          return {
            result: `${pct.toFixed(2)}%`,
            secondaryResult: `Obtained ${obt} out of ${tot} marks`,
            formula: 'Percentage = (Marks Obtained / Total Marks) × 100'
          };
        }
      },
      {
        id: 'edu-grade-calc',
        name: 'Grade Calculator (Marks to Grade)',
        categoryId: 'education',
        description: 'Convert exam percentage into letter grade (A+, A, B, C, D, F).',
        inputs: [
          { id: 'obtained', label: 'Marks Obtained', type: 'number', defaultValue: 82 },
          { id: 'total', label: 'Total Marks', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const obt = Number(vals.obtained);
          const tot = Number(vals.total);
          if (tot <= 0) return { result: 'Total marks must be > 0' };
          const pct = (obt / tot) * 100;
          let grade = 'F';
          if (pct >= 90) grade = 'A+ (Exemplary)';
          else if (pct >= 80) grade = 'A (Excellent)';
          else if (pct >= 70) grade = 'B (Good)';
          else if (pct >= 60) grade = 'C (Satisfactory)';
          else if (pct >= 50) grade = 'D (Passing)';
          else grade = 'F (Failing)';
          return {
            result: grade,
            secondaryResult: `Percentage: ${pct.toFixed(1)}%`,
            formula: 'Percentage threshold grading scale'
          };
        }
      },
      {
        id: 'edu-average-marks',
        name: 'Average Marks Calculator',
        categoryId: 'education',
        description: 'Calculate arithmetic average and total sum of multiple test or exam marks.',
        inputs: [
          { id: 'marks', label: 'Marks (comma separated, e.g. 78, 85, 90, 92)', type: 'text', defaultValue: '80, 85, 90, 88, 95' }
        ],
        calculate: (vals) => {
          const arr = String(vals.marks).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (!arr.length) return { result: 'Enter valid numbers' };
          const sum = arr.reduce((a, b) => a + b, 0);
          const avg = sum / arr.length;
          return {
            result: `Average: ${avg.toFixed(2)}`,
            secondaryResult: `Total Sum: ${sum} | Exams Count: ${arr.length}`,
            formula: 'Average = Sum of Marks / Number of Exams'
          };
        }
      },
      {
        id: 'edu-attendance-calc',
        name: 'Attendance Percentage & 75% Target Calculator',
        categoryId: 'education',
        description: 'Calculate attendance percentage and classes needed to reach 75% attendance.',
        inputs: [
          { id: 'attended', label: 'Classes Attended', type: 'number', defaultValue: 32 },
          { id: 'total', label: 'Total Classes Held', type: 'number', defaultValue: 45 }
        ],
        calculate: (vals) => {
          const att = Number(vals.attended);
          const tot = Number(vals.total);
          if (tot <= 0) return { result: 'Total classes must be > 0' };
          const pct = (att / tot) * 100;
          const needed = Math.ceil((0.75 * tot - att) / 0.25);
          return {
            result: `${pct.toFixed(1)}% Attendance`,
            secondaryResult: needed > 0 ? `You need to attend ${needed} more consecutive classes to reach 75%.` : `You are already above 75% attendance!`,
            formula: 'Attendance % = (Attended / Total) × 100'
          };
        }
      },
      {
        id: 'edu-final-exam-marks',
        name: 'Marks Needed in Final Exam Calculator',
        categoryId: 'education',
        description: 'Calculate required score on final exam to achieve your target overall grade.',
        inputs: [
          { id: 'current', label: 'Current Grade / Marks (%)', type: 'number', defaultValue: 78 },
          { id: 'currentWeight', label: 'Current Weight Completed (%)', type: 'number', defaultValue: 60 },
          { id: 'target', label: 'Target Overall Grade (%)', type: 'number', defaultValue: 85 }
        ],
        calculate: (vals) => {
          const cur = Number(vals.current);
          const curWt = Number(vals.currentWeight) / 100;
          const target = Number(vals.target);
          const finalWt = 1 - curWt;
          if (finalWt <= 0) return { result: 'Current weight cannot be 100%' };
          const needed = (target - (cur * curWt)) / finalWt;
          return {
            result: `${needed.toFixed(1)}% on Final Exam`,
            secondaryResult: `Final Exam Weight: ${Math.round(finalWt * 100)}%`,
            formula: 'Required Final % = [Target - (Current % × Current Weight)] / Final Weight'
          };
        }
      },
      {
        id: 'edu-study-planner',
        name: 'Study Time Planner',
        categoryId: 'education',
        description: 'Plan daily study hours needed before your exam date.',
        inputs: [
          { id: 'days', label: 'Days Until Exam', type: 'number', defaultValue: 14 },
          { id: 'chapters', label: 'Total Chapters / Topics', type: 'number', defaultValue: 28 },
          { id: 'hoursPerChapter', label: 'Average Hours per Chapter', type: 'number', defaultValue: 1.5 }
        ],
        calculate: (vals) => {
          const days = Number(vals.days);
          const ch = Number(vals.chapters);
          const hrs = Number(vals.hoursPerChapter);
          if (days <= 0) return { result: 'Days until exam must be > 0' };
          const totalHrs = ch * hrs;
          const dailyHrs = totalHrs / days;
          return {
            result: `${dailyHrs.toFixed(1)} hours / day`,
            secondaryResult: `Total Study Hours Needed: ${totalHrs.toFixed(1)} hours across ${days} days`,
            formula: 'Daily Study Hours = (Chapters × Hours per Chapter) / Days Until Exam'
          };
        }
      },
      // 17 New Education Calculators Added Below
      {
        id: 'edu-sgpa-to-pct',
        name: 'SGPA to Percentage Converter',
        categoryId: 'education',
        description: 'Convert 4.0 scale SGPA into equivalent percentage score.',
        inputs: [
          { id: 'sgpa', label: 'SGPA (out of 4.0)', type: 'number', defaultValue: 3.4 }
        ],
        calculate: (vals) => {
          const s = Number(vals.sgpa);
          // Standard conversion formula: Percentage = SGPA * 25 (or (SGPA * 10) + 50 for some boards)
          const pct = s * 25;
          return {
            result: `${Math.min(100, pct).toFixed(2)}% Equivalent`,
            secondaryResult: `Standard Formula (SGPA × 25)`,
            formula: 'Percentage = SGPA × 25'
          };
        }
      },
      {
        id: 'edu-pct-to-gpa',
        name: 'Percentage to GPA Converter',
        categoryId: 'education',
        description: 'Convert percentage marks into a 4.0 scale GPA.',
        inputs: [
          { id: 'percentage', label: 'Percentage (%)', type: 'number', defaultValue: 82 }
        ],
        calculate: (vals) => {
          const p = Number(vals.percentage);
          const gpa = (p / 100) * 4.0;
          return {
            result: `${Math.min(4.0, gpa).toFixed(2)} / 4.0 GPA`,
            secondaryResult: `Estimated 4.0 scale equivalent`,
            formula: 'GPA = (Percentage / 100) × 4.0'
          };
        }
      },
      {
        id: 'edu-weighted-grade',
        name: 'Final Grade Calculator (Weighted Categories)',
        categoryId: 'education',
        description: 'Calculate final course grade from weighted assignments, midterms, and finals.',
        inputs: [
          { id: 'hwScore', label: 'Homework Average (%)', type: 'number', defaultValue: 90 },
          { id: 'midScore', label: 'Midterm Exam (%)', type: 'number', defaultValue: 78 },
          { id: 'finalScore', label: 'Final Exam (%)', type: 'number', defaultValue: 85 }
        ],
        calculate: (vals) => {
          // Weights: HW = 20%, Mid = 30%, Final = 50%
          const finalGrade = (Number(vals.hwScore) * 0.2) + (Number(vals.midScore) * 0.3) + (Number(vals.finalScore) * 0.5);
          return {
            result: `${finalGrade.toFixed(2)}% Final Grade`,
            secondaryResult: `Weights: HW (20%), Midterm (30%), Final (50%)`,
            formula: 'Final Grade = (HW × 0.2) + (Mid × 0.3) + (Final × 0.5)'
          };
        }
      },
      {
        id: 'edu-reading-speed',
        name: 'Reading Speed (WPM) Calculator',
        categoryId: 'education',
        description: 'Calculate words per minute (WPM) reading speed from text word count and time.',
        inputs: [
          { id: 'words', label: 'Total Words Read', type: 'number', defaultValue: 1200 },
          { id: 'minutes', label: 'Time Taken (Minutes)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const w = Number(vals.words);
          const m = Number(vals.minutes);
          if (m <= 0) return { result: 'Minutes must be > 0' };
          const wpm = w / m;
          return {
            result: `${Math.round(wpm)} Words Per Minute (WPM)`,
            secondaryResult: `Reading comprehension speed metric`,
            formula: 'WPM = Total Words / Time in Minutes'
          };
        }
      },
      {
        id: 'edu-quiz-score',
        name: 'Quiz Score & Negative Marking Calculator',
        categoryId: 'education',
        description: 'Calculate final quiz score factoring correct answers and negative marking penalties.',
        inputs: [
          { id: 'correct', label: 'Correct Answers', type: 'number', defaultValue: 40 },
          { id: 'incorrect', label: 'Incorrect Answers', type: 'number', defaultValue: 5 },
          { id: 'penalty', label: 'Negative Mark per Wrong Answer', type: 'number', defaultValue: 0.25 }
        ],
        calculate: (vals) => {
          const c = Number(vals.correct);
          const inc = Number(vals.incorrect);
          const pen = Number(vals.penalty);
          const score = c - (inc * pen);
          return {
            result: `${score.toFixed(2)} Final Score`,
            secondaryResult: `Deductions: -${(inc * pen).toFixed(2)} marks for ${inc} wrong answers`,
            formula: 'Score = Correct Answers - (Incorrect Answers × Negative Penalty)'
          };
        }
      },
      {
        id: 'edu-pomodoro-planner',
        name: 'Study Break (Pomodoro) Time Planner',
        categoryId: 'education',
        description: 'Plan study sessions and break intervals using the Pomodoro technique.',
        inputs: [
          { id: 'studyHours', label: 'Total Study Hours Planned', type: 'number', defaultValue: 4 }
        ],
        calculate: (vals) => {
          const hrs = Number(vals.studyHours);
          const totalMins = hrs * 60;
          const sessions = Math.round(totalMins / 25);
          const breakMins = sessions * 5;
          return {
            result: `${sessions} Pomodoro Sessions (${sessions * 25} mins study + ${breakMins} mins breaks)`,
            secondaryResult: `Recommended 25-minute focus blocks with 5-minute short breaks`,
            formula: 'Sessions = Total Study Minutes / 25 minutes per focus block'
          };
        }
      },
      {
        id: 'edu-tuition-installment',
        name: 'University Tuition Fee Installment Calculator (PKR)',
        categoryId: 'education',
        description: 'Calculate semester tuition fee installments and payment breakdown (PKR).',
        inputs: [
          { id: 'fee', label: 'Total Semester Tuition Fee (PKR)', type: 'number', defaultValue: 150000 },
          { id: 'installments', label: 'Number of Installments', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const fee = Number(vals.fee);
          const inst = Math.max(1, Number(vals.installments));
          const perInst = fee / inst;
          return {
            result: `PKR ${Math.round(perInst).toLocaleString()} / installment`,
            secondaryResult: `Split into ${inst} equal payments of total PKR ${fee.toLocaleString()}`,
            formula: 'Installment Amount = Total Semester Fee / Number of Installments'
          };
        }
      },
      {
        id: 'edu-reading-time-essay',
        name: 'Essay & Thesis Reading Time Calculator',
        categoryId: 'education',
        description: 'Estimate presentation or reading time based on essay word count.',
        inputs: [
          { id: 'words', label: 'Total Word Count', type: 'number', defaultValue: 3500 }
        ],
        calculate: (vals) => {
          const w = Number(vals.words);
          // Average speaking speed 130 wpm, reading speed 250 wpm
          const readingMins = w / 250;
          const speakingMins = w / 130;
          return {
            result: `~${readingMins.toFixed(1)} mins reading time`,
            secondaryResult: `Speaking / Presentation Time: ~${speakingMins.toFixed(1)} minutes (at 130 WPM)`,
            formula: 'Reading Time = Word Count / 250 WPM'
          };
        }
      },
      {
        id: 'edu-score-std-dev',
        name: 'Standard Deviation of Test Scores Calculator',
        categoryId: 'education',
        description: 'Calculate standard deviation and variance for a set of student exam scores.',
        inputs: [
          { id: 'scores', label: 'Scores (comma separated)', type: 'text', defaultValue: '70, 75, 80, 85, 90' }
        ],
        calculate: (vals) => {
          const arr = String(vals.scores).split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
          if (arr.length <= 1) return { result: 'Enter at least 2 valid scores' };
          const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
          const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (arr.length - 1);
          const stdDev = Math.sqrt(variance);
          return {
            result: `Standard Deviation = ${stdDev.toFixed(2)}`,
            secondaryResult: `Mean Score: ${mean.toFixed(1)} | Variance: ${variance.toFixed(2)}`,
            formula: 'Sample Standard Deviation formula s = √[ Σ(x - x̄)² / (n - 1) ]'
          };
        }
      },
      {
        id: 'edu-scholarship-check',
        name: 'Scholarship Eligibility GPA Checker',
        categoryId: 'education',
        description: 'Check if your CGPA meets typical university merit scholarship requirements.',
        inputs: [
          { id: 'cgpa', label: 'Current CGPA (out of 4.0)', type: 'number', defaultValue: 3.65 }
        ],
        calculate: (vals) => {
          const g = Number(vals.cgpa);
          let status = 'Not Eligible for Merit Scholarship';
          if (g >= 3.8) status = 'Highest Honors / Full Scholarship Tier (100% Tuition Waiver)';
          else if (g >= 3.5) status = 'Dean’s List / Partial Scholarship Tier (50% Tuition Waiver)';
          else if (g >= 3.2) status = 'Merit Recognition Tier (25% Waiver)';
          return {
            result: status,
            secondaryResult: `Based on CGPA ${g.toFixed(2)} / 4.0`,
            formula: 'Standard university merit scholarship CGPA threshold brackets'
          };
        }
      },
      {
        id: 'edu-textbook-planner',
        name: 'Textbook Reading Schedule Planner',
        categoryId: 'education',
        description: 'Calculate daily pages to read to finish a textbook before your deadline.',
        inputs: [
          { id: 'pages', label: 'Total Pages in Textbook', type: 'number', defaultValue: 450 },
          { id: 'days', label: 'Days Available', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const p = Number(vals.pages);
          const d = Number(vals.days);
          if (d <= 0) return { result: 'Days available must be > 0' };
          const dailyPages = p / d;
          return {
            result: `${Math.ceil(dailyPages)} pages / day`,
            secondaryResult: `To finish ${p} pages in ${d} days`,
            formula: 'Pages per Day = Total Textbook Pages / Days Available'
          };
        }
      },
      {
        id: 'edu-assignment-contrib',
        name: 'Assignment Score Contribution Calculator',
        categoryId: 'education',
        description: 'Calculate how much a specific assignment grade contributes to your final course score.',
        inputs: [
          { id: 'assignmentScore', label: 'Assignment Score (%)', type: 'number', defaultValue: 92 },
          { id: 'weight', label: 'Assignment Course Weight (%)', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const s = Number(vals.assignmentScore);
          const w = Number(vals.weight) / 100;
          const contribution = s * w;
          return {
            result: `+${contribution.toFixed(2)}% toward Final Grade`,
            secondaryResult: `Scored ${s}% on an assignment weighted at ${vals.weight}%`,
            formula: 'Contribution = Assignment Score (%) × Course Weight (%)'
          };
        }
      },
      {
        id: 'edu-flashcard-intervals',
        name: 'Flashcard Review Interval Planner',
        categoryId: 'education',
        description: 'Calculate spaced repetition review intervals for efficient study retention.',
        inputs: [
          { id: 'repetition', label: 'Successful Repetition Number', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const rep = Math.max(1, Number(vals.repetition));
          // Fibonacci or exponential spacing interval in days
          const daysInterval = Math.round(Math.pow(2.2, rep));
          return {
            result: `Review in ${daysInterval} Days`,
            secondaryResult: `Spaced repetition interval for repetition #${rep}`,
            formula: 'Review Interval = 2.2^(Repetition Number) days'
          };
        }
      },
      {
        id: 'edu-credit-cost',
        name: 'College Credit Hours Cost Estimator (PKR)',
        categoryId: 'education',
        description: 'Calculate total university semester fee based on credit hours and per-credit rate (PKR).',
        inputs: [
          { id: 'credits', label: 'Number of Credit Hours', type: 'number', defaultValue: 18 },
          { id: 'ratePerCredit', label: 'Fee per Credit Hour (PKR)', type: 'number', defaultValue: 7500 }
        ],
        calculate: (vals) => {
          const c = Number(vals.credits);
          const r = Number(vals.ratePerCredit);
          const total = c * r;
          return {
            result: `PKR ${total.toLocaleString()}`,
            secondaryResult: `${c} credit hours @ PKR ${r} per credit | Estimate only.`,
            formula: 'Total Tuition = Credit Hours × Fee per Credit Hour'
          };
        }
      },
      {
        id: 'edu-grade-deficit',
        name: 'Grade Point Deficit Calculator',
        categoryId: 'education',
        description: 'Calculate grade points needed to raise your cumulative GPA to a target GPA.',
        inputs: [
          { id: 'currentCgpa', label: 'Current CGPA', type: 'number', defaultValue: 2.7 },
          { id: 'completedCredits', label: 'Completed Credit Hours', type: 'number', defaultValue: 60 },
          { id: 'targetCgpa', label: 'Target CGPA', type: 'number', defaultValue: 3.0 },
          { id: 'futureCredits', label: 'Remaining Credit Hours', type: 'number', defaultValue: 60 }
        ],
        calculate: (vals) => {
          const cur = Number(vals.currentCgpa);
          const cc = Number(vals.completedCredits);
          const tar = Number(vals.targetCgpa);
          const fc = Number(vals.futureCredits);
          if (fc <= 0) return { result: 'Remaining credits must be > 0' };
          const totalTargetPoints = (tar * (cc + fc)) - (cur * cc);
          const requiredGpa = totalTargetPoints / fc;
          return {
            result: `${requiredGpa.toFixed(2)} GPA needed in future semesters`,
            secondaryResult: requiredGpa <= 4.0 ? 'Achievable within 4.0 scale limits' : 'Exceeds 4.0 maximum scale limit',
            formula: 'Required GPA = [Target × (Completed + Future) - (Current × Completed)] / Future Credits'
          };
        }
      },
      {
        id: 'edu-class-percentile',
        name: 'Class Rank Percentile Calculator',
        categoryId: 'education',
        description: 'Calculate your academic percentile rank within your class.',
        inputs: [
          { id: 'rank', label: 'Your Class Rank (1 = Top)', type: 'number', defaultValue: 5 },
          { id: 'totalStudents', label: 'Total Students in Class', type: 'number', defaultValue: 120 }
        ],
        calculate: (vals) => {
          const r = Number(vals.rank);
          const t = Number(vals.totalStudents);
          if (t <= 0 || r > t) return { result: 'Invalid rank or total students' };
          const percentile = ((t - r) / t) * 100;
          return {
            result: `${percentile.toFixed(1)}th Percentile`,
            secondaryResult: `Ranked #${r} out of ${t} students`,
            formula: 'Percentile = [(Total Students - Your Rank) / Total Students] × 100'
          };
        }
      },
      {
        id: 'edu-gpa-difference',
        name: 'Semester GPA Impact Calculator',
        categoryId: 'education',
        description: 'Calculate how a specific upcoming semester GPA will shift your overall CGPA.',
        inputs: [
          { id: 'currentCgpa', label: 'Current CGPA', type: 'number', defaultValue: 3.2 },
          { id: 'earnedCredits', label: 'Total Earned Credits So Far', type: 'number', defaultValue: 45 },
          { id: 'nextGpa', label: 'Expected Next Semester GPA', type: 'number', defaultValue: 3.8 },
          { id: 'nextCredits', label: 'Next Semester Credits', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const cur = Number(vals.currentCgpa);
          const ec = Number(vals.earnedCredits);
          const nx = Number(vals.nextGpa);
          const nc = Number(vals.nextCredits);
          const newCgpa = ((cur * ec) + (nx * nc)) / (ec + nc);
          const diff = newCgpa - cur;
          return {
            result: `${newCgpa.toFixed(2)} New CGPA`,
            secondaryResult: diff >= 0 ? `+${diff.toFixed(2)} increase in overall CGPA` : `${diff.toFixed(2)} decrease in overall CGPA`,
            formula: 'New CGPA = [(Current CGPA × Earned Credits) + (Next GPA × Next Credits)] / Total Credits'
          };
        }
      },
      {
        id: 'edu-cgpa-semesters',
        name: 'Multi-Semester CGPA Calculator',
        categoryId: 'education',
        description: 'Calculate cumulative grade point average across up to 4 academic semesters.',
        inputs: [
          { id: 'sem1', label: 'Semester 1 GPA', type: 'number', defaultValue: 3.2 },
          { id: 'sem2', label: 'Semester 2 GPA', type: 'number', defaultValue: 3.4 },
          { id: 'sem3', label: 'Semester 3 GPA', type: 'number', defaultValue: 3.6 },
          { id: 'sem4', label: 'Semester 4 GPA', type: 'number', defaultValue: 3.5 }
        ],
        calculate: (vals) => {
          const s1 = Number(vals.sem1), s2 = Number(vals.sem2), s3 = Number(vals.sem3), s4 = Number(vals.sem4);
          const avg = (s1 + s2 + s3 + s4) / 4;
          return {
            result: `CGPA = ${avg.toFixed(2)}`,
            secondaryResult: `Average across 4 semesters`,
            formula: 'CGPA = Sum of Semester GPAs / 4'
          };
        }
      },
      {
        id: 'edu-final-exam-weight',
        name: 'Final Exam Required Score Calculator',
        categoryId: 'education',
        description: 'Calculate exact score needed on final exam to achieve target course grade.',
        inputs: [
          { id: 'target', label: 'Target Overall Grade (%)', type: 'number', defaultValue: 85 },
          { id: 'current', label: 'Current Course Grade (%)', type: 'number', defaultValue: 80 },
          { id: 'weight', label: 'Final Exam Weight (%)', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const target = Number(vals.target);
          const cur = Number(vals.current);
          const w = Number(vals.weight) / 100;
          if (w <= 0) return { result: 'Final weight must be > 0' };
          const requiredScore = (target - (cur * (1 - w))) / w;
          return {
            result: `${requiredScore.toFixed(1)}% Required on Final`,
            secondaryResult: `To achieve overall grade of ${target}%`,
            formula: 'Required = [Target - (Current × (1 - Weight))] / Weight'
          };
        }
      },
      {
        id: 'edu-flashcard-timer',
        name: 'Flashcard Study Session Timer',
        categoryId: 'education',
        description: 'Calculate total study time required for a deck of flashcards based on pace.',
        inputs: [
          { id: 'cards', label: 'Total Flashcards', type: 'number', defaultValue: 120 },
          { id: 'secsPerCard', label: 'Seconds per Card', type: 'number', defaultValue: 30 }
        ],
        calculate: (vals) => {
          const c = Number(vals.cards);
          const s = Number(vals.secsPerCard);
          const totalSecs = c * s;
          const mins = totalSecs / 60;
          return {
            result: `~${mins.toFixed(1)} Minutes Total (${(mins / 60).toFixed(2)} hours)`,
            secondaryResult: `For ${c} flashcards at ${s} seconds each`,
            formula: 'Total Time = Cards Count × Seconds per Card'
          };
        }
      },
      {
        id: 'edu-grade-letter',
        name: 'Grade Letter to Percentage Converter',
        categoryId: 'education',
        description: 'Convert letter grades (A+, A, B, C) to standard percentage equivalents.',
        inputs: [
          { id: 'grade', label: 'Letter Grade', type: 'select', defaultValue: 'A', options: [
            { label: 'A+ (90 - 100%)', value: 'A+' },
            { label: 'A (80 - 89%)', value: 'A' },
            { label: 'B (70 - 79%)', value: 'B' },
            { label: 'C (60 - 69%)', value: 'C' }
          ]}
        ],
        calculate: (vals) => {
          let pct = 85;
          if (vals.grade === 'A+') pct = 95;
          else if (vals.grade === 'A') pct = 85;
          else if (vals.grade === 'B') pct = 75;
          else if (vals.grade === 'C') pct = 65;
          return {
            result: `~${pct}% Equivalent midpoint`,
            secondaryResult: `Standard academic grading scale mapping`,
            formula: 'Midpoint percentage for letter grade tier'
          };
        }
      }
    ]
  };
