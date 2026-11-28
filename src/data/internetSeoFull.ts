import { SITE_NAME } from '../config/site';

export interface InternetCalculatorSeoEntry {
  seoTitle: string;
  metaDescription: string;
  howToUseSteps: string[];
  formulaExplanation: string;
  practicalExample: string;
  faqs: { q: string; a: string }[];
}

export const internetSeoFullMap: Record<string, InternetCalculatorSeoEntry> = {
  'tech-download-time': {
    seoTitle: `Free Download Time Calculator – File Size & Speed ETA | ${SITE_NAME}`,
    metaDescription:
      'Estimate exact file download duration from file size in MB, GB, or TB and connection speed in Mbps using our free Download Time Calculator.',
    howToUseSteps: [
      'Type your numeric package or installer size into File Size Value.',
      'Select Megabytes (MB), Gigabytes (GB), or Terabytes (TB) under File Size Unit.',
      'Enter your connection rate in Internet Speed (Mbps) to read completion time and effective MB/s throughput.',
    ],
    formulaExplanation:
      'Download duration converts binary file capacity into megabytes, divides advertised megabits per second by 8 bits per byte to obtain megabytes per second, and splits total seconds into hours, minutes, and seconds. Formula: Time (s) = File Size (MB) / (Internet Speed Mbps / 8).',
    practicalExample:
      'Downloading a File Size Value = 25 with File Size Unit = GB at Internet Speed (Mbps) = 200 (25,600 MB at 25.00 MB/s) finishes in 17m 4s (Total Seconds: 1,024 s).',
    faqs: [
      {
        q: 'Why does a 100 Mbps connection only reach 12.50 MB/s instead of 100 MB/s?',
        a: 'Internet service providers advertise speeds in megabits (Mb), whereas browsers report file transfers in megabytes (MB), where 1 byte holds 8 bits.',
      },
      {
        q: 'Why can real downloads take slightly longer than 17m 4s?',
        a: 'TCP/IP packet headers, Wi-Fi interference, background traffic, and remote server throttling typically absorb 5% to 15% of raw line capacity.',
      },
      {
        q: 'How many megabytes does 1 GB equal inside File Size Unit?',
        a: 'Binary file calculation uses 1,024 MB per GB and 1,048,576 MB per TB to match operating system storage reporting.',
      },
    ],
  },

  'tech-mbps-mbs': {
    seoTitle: `Free Mbps to MB/s Converter Calculator – Internet Speed Units | ${SITE_NAME}`,
    metaDescription:
      'Convert megabits per second (Mbps) to megabytes per second (MB/s) for ISP plans and downloads using our free Mbps to MB/s Converter Calculator.',
    howToUseSteps: [
      'Type your broadband or fiber plan rating inside Speed in Mbps (Megabits/sec).',
      'Inspect the equivalent sustained transfer rate in megabytes per second immediately.',
    ],
    formulaExplanation:
      'Networking equipment measures link bandwidth in bits per second while storage and download managers count bytes per second; dividing megabits per second by eight converts bit rate directly into byte rate. Formula: MB/s = Speed in Mbps / 8.',
    practicalExample:
      'Converting Speed in Mbps (Megabits/sec) = 250 divides 250 by 8 to yield 31.25 MB/s maximum theoretical file throughput.',
    faqs: [
      {
        q: 'What is the difference between a lowercase Mb and an uppercase MB?',
        a: 'Lowercase b stands for bits (network speed like Mbps), while uppercase B stands for bytes (file size and MB/s disk write speed), equal to 8 bits.',
      },
      {
        q: 'Is 31.25 MB/s enough for smooth 4K HDR streaming?',
        a: 'Yes—even high-bitrate 4K streams need roughly 25 Mbps (about 3.1 MB/s), leaving abundant headroom for multiple devices.',
      },
      {
        q: 'How can I convert MB/s back into Mbps manually?',
        a: 'Multiply any MB/s download figure displayed by Steam or your browser by 8 to see the Mbps bandwidth consumed.',
      },
    ],
  },

  'tech-data-usage': {
    seoTitle: `Free Data Usage Calculator – Monthly Bandwidth Tracker | ${SITE_NAME}`,
    metaDescription:
      'Estimate monthly internet GB consumed by daily streaming, video calls, and web browsing using our free Data Usage Calculator.',
    howToUseSteps: [
      'Enter daily hours watched in HD Video Streaming (Hours / Day).',
      'Input daily meeting duration under Video Calls (Hours / Day).',
      'Add daily surfing time in Web Browsing & Social Media (Hours / Day) to view daily and 30-day gigabyte totals.',
    ],
    formulaExplanation:
      'Monthly internet consumption multiplies each daily activity by typical hourly data weights (3.0 GB/hr for HD video, 0.75 GB/hr for video calls, and 0.3 GB/hr for social browsing) and scales across a 30-day billing cycle. Formula: Monthly GB = [(HD hrs × 3.0) + (Call hrs × 0.75) + (Web hrs × 0.3)] × 30.',
    practicalExample:
      'Logging HD Video Streaming = 3, Video Calls = 1.5, and Web Browsing & Social Media = 4 consumes 11.33 GB/day, totaling 339.8 GB / month.',
    faqs: [
      {
        q: 'How much more data does 4K Ultra HD streaming use compared to HD?',
        a: '4K streaming consumes roughly 7 GB per hour versus 3 GB per hour for 1080p HD, more than doubling video bandwidth.',
      },
      {
        q: 'Do audio-only calls consume as much as Video Calls (Hours / Day)?',
        a: 'No—turning off your camera drops call consumption from around 0.75 GB/hour down below 0.06 GB/hour.',
      },
      {
        q: 'Does this estimate include game downloads or OS updates?',
        a: 'No—large console patches (20–100 GB each) should be added on top of recurring daily habit totals when budgeting capped plans.',
      },
    ],
  },

  'tech-file-size-conv': {
    seoTitle: `Free File Size Converter Calculator – KB, MB, GB & TB | ${SITE_NAME}`,
    metaDescription:
      'Convert digital storage sizes across Kilobytes, Megabytes, Gigabytes, and Terabytes in base-1024 using our free File Size Converter Calculator.',
    howToUseSteps: [
      'Enter your numeric capacity or file weight inside Size Value.',
      'Choose Kilobytes (KB), Megabytes (MB), Gigabytes (GB), or Terabytes (TB) under From Unit.',
      'Check converted KB, MB, GB, and TB values simultaneously.',
    ],
    formulaExplanation:
      'Binary computer storage scales each tier by powers of 1,024 (2¹⁰) bytes, converting the chosen input unit into raw bytes first before dividing sequentially into KB, MB, GB, and TB. Formula: Next Higher Unit = Current Unit / 1,024.',
    practicalExample:
      'Entering Size Value = 8 with From Unit = GB outputs 8.000 GB alongside 8,388,608 KB, 8192.00 MB, and 0.0078 TB.',
    faqs: [
      {
        q: 'Why does a 1 TB hard drive show roughly 931 GB in Windows Explorer?',
        a: 'Drive manufacturers count decimal terabytes (1,000⁴ bytes), whereas Windows reports binary gibibytes/gigabytes using 1,024³ steps.',
      },
      {
        q: 'How many megabytes sit inside 1 gigabyte here?',
        a: 'Using standard binary conversion, 1 GB equals exactly 1,024 MB (and 1,048,576 KB).',
      },
      {
        q: 'Can Size Value accept decimals like 2.5 or 0.75?',
        a: 'Yes—fractional numbers convert cleanly across every smaller and larger storage tier.',
      },
    ],
  },

  'tech-bandwidth': {
    seoTitle: `Free Bandwidth Calculator – Transfer Speed for Data Volume | ${SITE_NAME}`,
    metaDescription:
      'Calculate required Mbps network speed to move a gigabyte dataset within seconds, minutes, or hours using our free Bandwidth Calculator.',
    howToUseSteps: [
      'Type total transfer payload size inside Data Volume (GB).',
      'Enter deadline duration into Timeframe Value and select Seconds, Minutes, or Hours under Timeframe Unit.',
      'Read minimum sustained speed required in Mbps.',
    ],
    formulaExplanation:
      'Required link throughput converts binary gigabytes into total bits (GB × 1,024³ × 8), converts the transfer window into seconds, and divides bits by seconds then 1,000,000 to report Mbps. Formula: Bandwidth (Mbps) = (Data Volume GB × 1,024³ × 8) / (Time Seconds × 1,000,000).',
    practicalExample:
      'Moving Data Volume (GB) = 120 over Timeframe Value = 4 with Timeframe Unit = hours requires 71.58 Mbps sustained throughput.',
    faqs: [
      {
        q: 'Why does cloud backup planning require higher provisioned Mbps than 71.58 Mbps?',
        a: 'Protocol overhead, encryption handshakes, and peak office traffic mean IT teams normally provision 20%–30% above theoretical minimums.',
      },
      {
        q: 'Does upload speed matter more than download speed for offsite backups?',
        a: 'Yes—asymmetric broadband plans often offer 100 Mbps download but only 10–20 Mbps upload, which caps outbound transfer time.',
      },
      {
        q: 'Can I calculate short burst transfers measured in seconds?',
        a: 'Yes—switch Timeframe Unit to Seconds to size real-time server sync or live media ingest links.',
      },
    ],
  },

  'tech-aspect-ratio': {
    seoTitle: `Free Screen Resolution and Aspect Ratio Calculator – Megapixels | ${SITE_NAME}`,
    metaDescription:
      'Simplify screen width and height into reduced aspect ratio and megapixels with our free Screen Resolution and Aspect Ratio Calculator.',
    howToUseSteps: [
      'Enter horizontal pixel dimension inside Width (Pixels).',
      'Type vertical pixel dimension into Height (Pixels).',
      'Inspect simplified aspect ratio and total megapixel count.',
    ],
    formulaExplanation:
      'Display aspect reduction computes the Greatest Common Divisor (GCD) of horizontal and vertical pixel counts to express screen proportions in lowest integers alongside total megapixel area. Formula: Aspect Ratio = (Width / GCD) : (Height / GCD); Megapixels = (Width × Height) / 1,000,000.',
    practicalExample:
      'Testing Width (Pixels) = 3840 and Height (Pixels) = 2160 (GCD = 240) returns 16:9 Aspect Ratio at 8.29 Megapixels.',
    faqs: [
      {
        q: 'Why do 1920×1080 and 3840×2160 both reduce to 16:9 Aspect Ratio?',
        a: 'Both resolutions share identical width-to-height proportion (1.778:1), while 4K packs four times as many pixels (8.29 MP vs 2.07 MP).',
      },
      {
        q: 'What aspect ratio do ultrawide 3440×1440 monitors produce?',
        a: 'Their reduced integer ratio is 43:18 (roughly 21:9 marketing ratio), totaling 4.95 Megapixels.',
      },
      {
        q: 'Does Height (Pixels) accept odd numbers like 1366×768?',
        a: 'Yes—the GCD algorithm works on any positive integer pair, reducing 1366×768 cleanly to 683:384.',
      },
    ],
  },

  'tech-image-resize': {
    seoTitle: `Free Image Resize Calculator (Keep Aspect Ratio) – Scale px | ${SITE_NAME}`,
    metaDescription:
      'Calculate proportional height from original dimensions and target width with our free Image Resize Calculator (Keep Aspect Ratio).',
    howToUseSteps: [
      'Type current image width into Original Width (px) and current height into Original Height (px).',
      'Enter desired horizontal size under New Target Width (px).',
      'Read exact proportional New Height and combined pixel dimensions.',
    ],
    formulaExplanation:
      'Proportional image scaling preserves the source width-to-height ratio by multiplying the target width by the original height divided by original width, preventing stretching or squashing. Formula: New Height = (Original Height / Original Width) × New Target Width.',
    practicalExample:
      'Resizing Original Width = 2400 and Original Height = 1600 down to New Target Width = 900 produces New Height: 600 px (900 × 600 px).',
    faqs: [
      {
        q: 'Why does rounding to whole pixels matter when exporting web thumbnails?',
        a: 'Raster PNG and JPEG formats only store integer pixel grids; fractional heights must round to avoid blurry 1-pixel edge artifacts.',
      },
      {
        q: 'Can I scale an image upward to a larger New Target Width (px)?',
        a: 'Mathematically yes, though upscaling raster photos beyond 100% reduces crispness unless AI super-resolution or vector SVG assets are used.',
      },
      {
        q: 'How do I solve for a target height instead of width?',
        a: 'Swap width and height values across the inputs so your fixed target dimension sits in New Target Width (px).',
      },
    ],
  },

  'tech-password-strength': {
    seoTitle: `Free Password Strength Estimator Calculator – Local Entropy Bits | ${SITE_NAME}`,
    metaDescription:
      'Measure password entropy bits and strength tier locally inside your browser with zero transmission using our free Password Strength Estimator Calculator.',
    howToUseSteps: [
      'Type or paste a sample passphrase inside Password to Test (Local Only).',
      'Review calculated Shannon-style bit entropy, strength label, and character length directly offline.',
    ],
    formulaExplanation:
      'Password entropy counts active character sets (26 lowercase, 26 uppercase, 10 digits, 32 symbols = up to 94) to form pool size N and multiplies length L by log₂(N) to measure keyspace bits locally in browser memory. Formula: Entropy (bits) = Length × log₂(Character Pool Size).',
    practicalExample:
      'Testing Password to Test (Local Only) = N@seeb2026!Tech (15 characters spanning all 4 sets, pool = 94) yields Very Strong 🔒 (98.3 bits).',
    faqs: [
      {
        q: 'Is my typed password ever sent across the network or logged?',
        a: 'Never—all character checks and log₂ calculations run strictly in local JavaScript memory with zero server requests or storage.',
      },
      {
        q: 'Why is 80+ bits considered Very Strong?',
        a: 'Every extra bit doubles brute-force search work; 80+ bits represents over 10²⁴ possible combinations.',
      },
      {
        q: 'Why can a long 20-letter passphrase beat a short 8-character symbol password?',
        a: 'Length multiplies log₂(Pool) linearly, so adding characters boosts entropy far faster than swapping one letter for a symbol.',
      },
    ],
  },

  'tech-ping-latency': {
    seoTitle: `Free Ping & Network Latency Quality Calculator – Gaming Grade | ${SITE_NAME}`,
    metaDescription:
      'Rate gaming and streaming responsiveness from ping (ms) and packet loss % with our free Ping & Network Latency Quality Calculator.',
    howToUseSteps: [
      'Enter measured round-trip delay in milliseconds inside Ping Latency (ms).',
      'Type dropped packet percentage into Packet Loss (%).',
      'Read overall connection grade from Excellent down to Poor.',
    ],
    formulaExplanation:
      'Network quality grading pairs round-trip latency thresholds (≤40 ms Excellent, ≤80 ms Good, ≤150 ms Fair, >150 ms Poor) with packet loss penalties (>1% drops to Fair, >5% drops to Poor) reflecting real-time responsiveness. Formula: Grade = f(Ping Latency ms, Packet Loss %).',
    practicalExample:
      'Evaluating Ping Latency (ms) = 52 with Packet Loss (%) = 0.2 scores Good Connection because latency sits between 41 and 80 ms with <1% loss.',
    faqs: [
      {
        q: 'Why does even 2% Packet Loss ruin voice calls and shooters?',
        a: 'Dropped UDP packets cause robotic audio cutouts and player rubber-banding even when Ping Latency (ms) looks low.',
      },
      {
        q: 'What Ping Latency (ms) do competitive esports players target?',
        a: 'Under 40 ms feels crisp for competitive titles, while 40–80 ms remains comfortably playable for casual online play.',
      },
      {
        q: 'How can I lower high ping or packet loss at home?',
        a: 'Switch from congested Wi-Fi to a Cat6 Ethernet cable, pause cloud uploads, and connect to the closest regional game server.',
      },
    ],
  },

  'tech-wifi-range': {
    seoTitle: `Free Wi-Fi Router Range & Obstruction Estimator Calculator | ${SITE_NAME}`,
    metaDescription:
      'Estimate indoor Wi-Fi signal reach across drywall, brick, or concrete obstructions using our free Wi-Fi Router Range & Obstruction Estimator Calculator.',
    howToUseSteps: [
      'Enter wireless transmit output inside Router Power (dBm).',
      'Type wall count between router and device into Number of Walls / Obstructions.',
      'Check estimated indoor effective coverage distance in meters.',
    ],
    formulaExplanation:
      'Indoor wireless coverage models open-air baseline router reach (30 meters) reduced linearly by ~7 meters of attenuation per solid wall obstruction, floored at a 5-meter minimum link threshold. Formula: Effective Range (m) = max(5, 30 − Number of Walls × 7).',
    practicalExample:
      'Entering Router Power (dBm) = 20 across Number of Walls / Obstructions = 3 calculates 30 − (3 × 7) = ~9 Meters Effective Range.',
    faqs: [
      {
        q: 'Which home building materials block Wi-Fi signals most severely?',
        a: 'Reinforced concrete, brick walls, metal ductwork, and tiled bathrooms attenuate 5 GHz and 6 GHz signals far faster than hollow drywall.',
      },
      {
        q: 'Why does 2.4 GHz travel farther through walls than 5 GHz?',
        a: 'Lower radio frequencies diffract better around solid obstacles, trading peak speed for stronger wall penetration.',
      },
      {
        q: 'When should I add a wired access point or mesh node?',
        a: 'Whenever devices sit behind 3 or more solid walls (around 9 meters or less range), placing a wired mesh node restores full speed.',
      },
    ],
  },

  'tech-cloud-storage-cost': {
    seoTitle: `Free Cloud Storage Cost Comparison Calculator – Annual TB Spend | ${SITE_NAME}`,
    metaDescription:
      'Project monthly and 12-month cloud object storage bills from terabyte capacity and per-TB pricing using our free Cloud Storage Cost Comparison Calculator.',
    howToUseSteps: [
      'Enter total backup or dataset footprint in Storage Volume (TB).',
      'Type provider price per terabyte inside Monthly Rate per TB (USD/PKR).',
      'Inspect total annual expenditure alongside monthly recurring charge.',
    ],
    formulaExplanation:
      'Cloud capacity budgeting multiplies provisioned terabytes by the monthly per-terabyte unit fee and scales across 12 billing cycles to reveal annualized storage spend. Formula: Annual Cost = Storage Volume (TB) × Monthly Rate per TB × 12.',
    practicalExample:
      'Storing Storage Volume (TB) = 12 at Monthly Rate per TB = 15 totals $180 monthly and $2,160 / year.',
    faqs: [
      {
        q: 'What hidden cloud fees sit outside Monthly Rate per TB?',
        a: 'Watch for outbound data egress fees, API PUT/GET request charges, and minimum early-deletion windows on Glacier/Archive tiers.',
      },
      {
        q: 'Can I enter Pakistani Rupees (PKR) inside Monthly Rate per TB (USD/PKR)?',
        a: 'Yes—the math works identically for any currency unit; simply read the output figure in your entered currency.',
      },
      {
        q: 'How do teams cut annual storage bills on large inactive archives?',
        a: 'Lifecycle policies automatically move older backups from hot storage (~$20/TB) to cold archive tiers (~$1–$4/TB).',
      },
    ],
  },

  'tech-mobile-data-limit': {
    seoTitle: `Free Mobile Data Plan Exhaustion Days Calculator – GB Runway | ${SITE_NAME}`,
    metaDescription:
      'Find how many days remaining mobile data lasts at your daily GB burn rate using our free Mobile Data Plan Exhaustion Days Calculator.',
    howToUseSteps: [
      'Type your current carrier bundle balance into Remaining Data (GB).',
      'Enter average daily usage inside Daily Consumption (GB/day).',
      'Check estimated days until your bundle reaches zero.',
    ],
    formulaExplanation:
      'Mobile data runway divides remaining gigabyte quota by average daily consumption rate to forecast exactly how many full days remain before throttling or overage fees trigger. Formula: Days Remaining = Remaining Data (GB) / Daily Consumption (GB/day).',
    practicalExample:
      'With Remaining Data (GB) = 18 and Daily Consumption (GB/day) = 2.25, your bundle runs for Lasts ~8.0 Days.',
    faqs: [
      {
        q: 'How can I check my true Daily Consumption (GB/day) on Android or iOS?',
        a: 'Divide total cellular GB used since your cycle reset date by the number of days elapsed in Settings → Mobile Network.',
      },
      {
        q: 'What eats mobile data fastest without users noticing?',
        a: 'Auto-playing HD social videos, cloud photo backups over LTE/5G, and OS app auto-updates silently burn gigabytes.',
      },
      {
        q: 'What if I have 14 days left in my billing month but only 8.0 days of data?',
        a: 'Lower your daily allowance target to Remaining Data ÷ 14 (about 1.29 GB/day) by enabling Data Saver mode and limiting video to 480p.',
      },
    ],
  },

  'tech-video-bitrate': {
    seoTitle: `Free Video Bitrate & File Size Calculator – Recording MB/GB | ${SITE_NAME}`,
    metaDescription:
      'Calculate recorded or exported video file size in GB from clip duration in minutes and Mbps bitrate with our free Video Bitrate & File Size Calculator.',
    howToUseSteps: [
      'Type clip length in minutes inside Video Duration (Minutes).',
      'Enter encoding stream rate in Video Bitrate (Mbps).',
      'View resulting storage footprint in GB and total megabits.',
    ],
    formulaExplanation:
      'Video storage estimation multiplies minutes by 60 seconds and encoding bitrate (Mbps) to compute total megabits, then divides by 8 bits/byte and 1,024 MB/GB for gigabytes. Formula: File Size (GB) = (Duration Mins × 60 × Bitrate Mbps) / 8 / 1,024.',
    practicalExample:
      'Encoding Video Duration (Minutes) = 15 at Video Bitrate (Mbps) = 8 produces 7,200 Mb, giving 0.88 GB File Size.',
    faqs: [
      {
        q: 'What Video Bitrate (Mbps) does YouTube recommend for 1080p vs 4K?',
        a: 'YouTube recommends 8–12 Mbps for standard 1080p uploads and 35–45 Mbps for 4K 30fps uploads.',
      },
      {
        q: 'Does Variable Bitrate (VBR) match Constant Bitrate (CBR) exactly?',
        a: 'CBR matches this formula strictly, while VBR hovers near your average target bitrate depending on scene motion complexity.',
      },
      {
        q: 'Why is 7,200 Mb equal to 0.88 GB instead of 0.90 GB?',
        a: 'Dividing by 8 yields 900 MB, and dividing 900 MB by binary 1,024 MB/GB yields 0.88 GiB/GB.',
      },
    ],
  },

  'tech-server-uptime': {
    seoTitle: `Free Server Uptime Percentage Calculator – SLA Downtime | ${SITE_NAME}`,
    metaDescription:
      'Convert SLA uptime targets like 99.9% or 99.99% into allowed yearly or monthly downtime minutes using our free Server Uptime Percentage Calculator.',
    howToUseSteps: [
      'Enter your SLA reliability goal inside Target Uptime (%).',
      'Choose Per Year (365 days) or Per Month (30 days) under Time Period.',
      'Check exact permissible outage minutes for your service contract.',
    ],
    formulaExplanation:
      'SLA availability math subtracts target uptime percentage from 100% to obtain allowed downtime ratio and multiplies by total minutes in a 365-day year (525,600) or 30-day month (43,200). Formula: Allowed Downtime (min) = Total Period Minutes × [(100 − Target Uptime %) / 100].',
    practicalExample:
      'Targeting Target Uptime (%) = 99.95 over Time Period = year allows 525,600 × 0.0005 = 262.8 Minutes Allowed Downtime.',
    faqs: [
      {
        q: 'How much downtime does "four nines" (99.99%) permit annually?',
        a: '99.99% annual uptime leaves only 52.6 minutes of total outage across an entire 365-day year.',
      },
      {
        q: 'Does scheduled maintenance count against SLA uptime?',
        a: 'Many enterprise cloud SLAs exclude pre-announced maintenance windows, so verify your provider contract wording.',
      },
      {
        q: 'What happens if you switch Time Period from year to month at 99.9%?',
        a: 'A 30-day month contains 43,200 minutes, so 99.9% limits outages to 43.2 minutes per month.',
      },
    ],
  },

  'tech-qr-code-capacity': {
    seoTitle: `Free QR Code Data Capacity Estimator Calculator – Version Chars | ${SITE_NAME}`,
    metaDescription:
      'Estimate alphanumeric character capacity for QR Code Versions 1–40 and error correction tiers using our free QR Code Data Capacity Estimator Calculator.',
    howToUseSteps: [
      'Choose module grid size from 1 to 40 inside QR Code Version (1 to 40).',
      'Select Low (~7%), Medium (~15%), Quartile (~25%), or High (~30%) under Error Correction.',
      'Review estimated alphanumeric payload capacity.',
    ],
    formulaExplanation:
      'QR symbol scaling approximates ISO/IEC 18004 module matrix growth across Versions 1 (21×21 modules) through 40 (177×177 modules), scaling character allowance linearly by version index alongside chosen Reed-Solomon redundancy level. Formula: Estimated Characters ≈ min(40, max(1, Version)) × 65.',
    practicalExample:
      'Setting QR Code Version (1 to 40) = 12 with Error Correction = Q estimates ~780 Alphanumeric Characters capacity.',
    faqs: [
      {
        q: 'Why does higher Error Correction shrink real QR character room?',
        a: 'More Reed-Solomon recovery blocks occupy matrix modules so scanners can still read damaged, dirty, or logo-overlaid codes.',
      },
      {
        q: 'Should I keep URLs short instead of jumping to QR Code Version 20+?',
        a: 'Yes—smaller versions (Versions 1–6) use larger individual squares that smartphone cameras focus and decode reliably from farther away.',
      },
      {
        q: 'Which Error Correction tier works best when placing a center brand logo?',
        a: 'Choose Quartile (~25%) or High (~30%) so the center logo artwork leaves enough redundant data modules intact.',
      },
    ],
  },

  'tech-battery-drain': {
    seoTitle: `Free Smartphone Battery Drain Time Calculator – mAh Runtime | ${SITE_NAME}`,
    metaDescription:
      'Estimate phone or power-bank screen-on runtime hours from mAh capacity and mA current draw using our free Smartphone Battery Drain Time Calculator.',
    howToUseSteps: [
      'Type cell capacity in milliamp-hours inside Battery Capacity (mAh).',
      'Enter device load current in milliamps under Average Current Draw (mA).',
      'Inspect projected continuous runtime in hours.',
    ],
    formulaExplanation:
      'Direct DC battery endurance divides rated charge capacity in milliamp-hours by steady discharge current in milliamps to yield ideal continuous operating hours. Formula: Hours = Battery Capacity (mAh) / Average Current Draw (mA).',
    practicalExample:
      'Running a Battery Capacity (mAh) = 4500 cell under Average Current Draw (mA) = 500 yields ~9.0 Hours Battery Life.',
    faqs: [
      {
        q: 'Why can real screen-on runtime fall 10%–15% short of ~9.0 Hours?',
        a: 'Screen brightness spikes, 5G cellular handoffs, battery aging below 100% health, and DC converter heat add extra drain.',
      },
      {
        q: 'What typical Average Current Draw (mA) do modern smartphones pull?',
        a: 'Idle screen-off standby pulls ~20–50 mA, web browsing ~350–500 mA, and 3D mobile gaming often exceeds 900–1,400 mA.',
      },
      {
        q: 'Can this tool estimate power-bank or IoT sensor runtime too?',
        a: 'Yes—any DC battery rated in mAh paired with measured mA load works identically.',
      },
    ],
  },

  'tech-ssd-transfer': {
    seoTitle: `Free SSD Data Transfer Time Calculator – NVMe & SATA Copy | ${SITE_NAME}`,
    metaDescription:
      'Calculate copy duration in seconds or minutes for folders on SATA or NVMe SSDs using our free SSD Data Transfer Time Calculator.',
    howToUseSteps: [
      'Enter total backup or folder weight into Folder Size (GB).',
      'Type sustained sequential drive throughput inside SSD Speed (MB/s).',
      'Check estimated file copy time in seconds or minutes.',
    ],
    formulaExplanation:
      'Solid-state copy time multiplies gigabytes by 1,024 megabytes per gigabyte and divides by sustained sequential drive MB/s, formatting values of 60 seconds or more directly into minutes. Formula: Time (s) = (Folder Size GB × 1,024) / SSD Speed (MB/s).',
    practicalExample:
      'Copying Folder Size (GB) = 180 onto an NVMe drive at SSD Speed (MB/s) = 2400 transfers 184,320 MB in 1.3 minutes (76.8 seconds).',
    faqs: [
      {
        q: 'Why do thousands of tiny photos copy slower than one 180 GB video file?',
        a: 'Small-file random 4K IOPS and filesystem metadata updates run much slower than sustained sequential throughput.',
      },
      {
        q: 'What realistic SSD Speed (MB/s) should I enter for SATA vs PCIe Gen4 NVMe?',
        a: 'SATA III SSDs top out near 500–550 MB/s, Gen3 NVMe around 2,000–3,500 MB/s, and Gen4 NVMe between 5,000 and 7,000 MB/s.',
      },
      {
        q: 'Can SLC write cache exhaustion slow down huge transfers mid-copy?',
        a: 'Yes—once a consumer SSD fills its fast SLC buffer during massive writes, native TLC/QLC speed can drop significantly.',
      },
    ],
  },

  'tech-brute-force': {
    seoTitle: `Free Password Brute Force Time Estimator Calculator – Crack Time | ${SITE_NAME}`,
    metaDescription:
      'Estimate brute-force password crack time from length, character pool, and guesses/sec using our free Password Brute Force Time Estimator Calculator.',
    howToUseSteps: [
      'Enter total character count inside Password Length.',
      'Pick Lowercase Only (26), Letters + Numbers (62), or Full ASCII Symbols (94) in Character Pool Size.',
      'Type attacker hash rate inside Guesses per Second to view total combinations and expected crack time.',
    ],
    formulaExplanation:
      'Exhaustive keyspace testing computes total possible passwords as Pool^Length and divides by attacker guesses per second times two, assuming an average hit halfway through the keyspace. Formula: Average Time (s) = (Pool Size ^ Length) / (Guesses per Second × 2).',
    practicalExample:
      'Testing Password Length = 8 with Character Pool Size = 62 at Guesses per Second = 1000000000 yields 2.18e+14 combinations and Estimated Time: 1.09e+5 seconds (~30.3 hours).',
    faqs: [
      {
        q: 'Why does switching from 8 characters to 12 characters change hours into millennia?',
        a: 'Password Length sits in the exponent (62¹² vs 62⁸), multiplying total combinations by nearly 14.8 million times.',
      },
      {
        q: 'Why does the formula divide total combinations by 2?',
        a: 'Statistically, a brute-force search finds the correct key halfway through checking all combinations on average.',
      },
      {
        q: 'Do modern GPUs really reach 1,000,000,000 Guesses per Second?',
        a: 'Yes against weak unsalted MD5/SHA1 leaks; strong adaptive hashes like Argon2id or bcrypt reduce speeds to thousands per second.',
      },
    ],
  },

  'tech-api-rate-limit': {
    seoTitle: `Free API Rate Limit Consumption Calculator – Quota Headroom | ${SITE_NAME}`,
    metaDescription:
      'Track remaining API requests per minute from rate quota and current utilization percentage using our free API Rate Limit Consumption Calculator.',
    howToUseSteps: [
      'Type your endpoint ceiling inside Rate Limit (Requests per Minute).',
      'Enter current traffic saturation under Current Usage (%).',
      'Read remaining headroom requests per minute before HTTP 429 throttling.',
    ],
    formulaExplanation:
      'Quota headroom calculation computes consumed calls as limit multiplied by decimal usage percentage and subtracts consumed calls from the total ceiling to report available requests per minute. Formula: Remaining = Limit − [Limit × (Current Usage % / 100)].',
    practicalExample:
      'Monitoring Rate Limit (Requests per Minute) = 120 at Current Usage (%) = 65 shows 78 used and 42 Requests Remaining / min.',
    faqs: [
      {
        q: 'What HTTP error happens when Requests Remaining / min drops below zero?',
        a: 'APIs respond with HTTP 429 Too Many Requests and commonly include a Retry-After header.',
      },
      {
        q: 'Why should production apps alert before reaching 100% Current Usage (%)?',
        a: 'Leaving a 20%–30% buffer absorbs unexpected user traffic bursts or webhook retries without failing live requests.',
      },
      {
        q: 'How can developers stretch tight API rate limits?',
        a: 'Cache identical GET responses locally, batch bulk records into fewer POST calls, and add exponential backoff on retries.',
      },
    ],
  },

  'tech-ram-bandwidth': {
    seoTitle: `Free RAM Memory Bandwidth Calculator – Dual-Channel GB/s | ${SITE_NAME}`,
    metaDescription:
      'Compute theoretical dual-channel DDR memory throughput in GB/s from bus width and clock MHz using our free RAM Memory Bandwidth Calculator.',
    howToUseSteps: [
      'Type per-DIMM data bus size in bits inside Bus Width (Bits) (usually 64).',
      'Enter effective memory data rate inside Clock Frequency (MHz).',
      'Inspect dual-channel peak memory bandwidth in GB/s.',
    ],
    formulaExplanation:
      'Dual-channel DDR memory throughput multiplies effective data rate (MHz) by bytes transferred per clock (Bus Width / 8) and by 2 memory channels, dividing MB/s by 1,024 to express GB/s. Formula: Bandwidth (GB/s) = [Frequency × (Bus Width / 8) × 2] / 1,024.',
    practicalExample:
      'Pairing Bus Width (Bits) = 64 with Clock Frequency (MHz) = 4800 computes 76,800 MB/s, equal to 75.00 GB/s Bandwidth.',
    faqs: [
      {
        q: 'Why does installing two matching RAM sticks double bandwidth vs one stick?',
        a: 'Two sticks populate both 64-bit memory channels simultaneously (×2 multiplier), effectively widening the CPU memory bus to 128 bits.',
      },
      {
        q: 'For DDR4-3200 or DDR5-4800, should I enter MT/s or half clock MHz?',
        a: 'Enter the advertised MT/s transfer rating (e.g., 3200 or 4800) inside Clock Frequency (MHz) because DDR transfers twice per physical clock cycle.',
      },
      {
        q: 'Does real-world CPU copy speed reach 100% of 75.00 GB/s?',
        a: 'Memory refresh cycles, latency timings (CL), and controller overhead mean real benchmarks typically hit 75%–90% of peak theoretical rate.',
      },
    ],
  },

  'tech-pixel-density': {
    seoTitle: `Free PPI (Pixels Per Inch) Display Density Calculator – Sharpness | ${SITE_NAME}`,
    metaDescription:
      'Compute display sharpness in PPI from pixel resolution and diagonal screen inches using our free PPI (Pixels Per Inch) Display Density Calculator.',
    howToUseSteps: [
      'Enter horizontal resolution inside Width (Pixels) and vertical resolution inside Height (Pixels).',
      'Type physical screen measurement under Diagonal Screen Size (Inches).',
      'Inspect pixel density in PPI.',
    ],
    formulaExplanation:
      'Display pixel density applies the Pythagorean theorem to find total diagonal pixels across the panel and divides that diagonal pixel span by physical diagonal inches. Formula: PPI = √(Width² + Height²) / Diagonal Screen Size (Inches).',
    practicalExample:
      'Evaluating a Width = 1920, Height = 1080 laptop panel at Diagonal Screen Size (Inches) = 15.6 yields 2,202.91 / 15.6 = 141.2 PPI.',
    faqs: [
      {
        q: 'What PPI looks "Retina-sharp" on phones vs desktop monitors?',
        a: 'Smartphones viewed close up need 300+ PPI for invisible pixels, whereas 27-inch monitors viewed at arm’s length look sharp around 110–163 PPI.',
      },
      {
        q: 'Why does a 24-inch 1080p monitor look crisper than a 32-inch 1080p TV?',
        a: 'Spreading the same 1920×1080 pixels over a wider diagonal drops density from 91.8 PPI down to 68.8 PPI.',
      },
      {
        q: 'Does pixel layout (OLED PenTile vs RGB stripe) affect perceived sharpness?',
        a: 'Yes—standard RGB stripes deliver three subpixels per pixel, making text edges slightly sharper than diamond subpixel grids at identical PPI.',
      },
    ],
  },

  'tech-audio-file-size': {
    seoTitle: `Free Audio File Size & Bitrate Calculator – MP3 & WAV Storage | ${SITE_NAME}`,
    metaDescription:
      'Compute MP3, AAC, or uncompressed audio file size in MB from track length and kbps bitrate using our free Audio File Size & Bitrate Calculator.',
    howToUseSteps: [
      'Type track or podcast length in minutes inside Audio Duration (Minutes).',
      'Enter audio encoding rate in kilobits per second under Bitrate (kbps).',
      'Check estimated output file weight in megabytes.',
    ],
    formulaExplanation:
      'Audio storage calculation converts duration minutes into seconds, multiplies by bitrate in kilobits per second for total kilobits, and divides by 8 bits/byte and 1,024 KB/MB. Formula: File Size (MB) = (Audio Duration Mins × 60 × Bitrate kbps) / 8 / 1,024.',
    practicalExample:
      'Recording Audio Duration (Minutes) = 5 at Bitrate (kbps) = 256 produces 76,800 kb, giving 9.38 MB File Size.',
    faqs: [
      {
        q: 'What Bitrate (kbps) corresponds to uncompressed CD-quality WAV audio?',
        a: 'Standard 16-bit / 44.1 kHz stereo PCM audio runs at 1,411 kbps, taking roughly 10.3 MB per minute.',
      },
      {
        q: 'Is 128 kbps or 320 kbps better for spoken-word podcasts?',
        a: 'Voice podcasts sound transparent at 96–128 kbps MP3/AAC, saving over half the bandwidth compared to 320 kbps music files.',
      },
      {
        q: 'Do embedded album cover images increase final file size slightly?',
        a: 'Yes—high-resolution ID3 cover art adds ~200 KB to 2 MB on top of raw audio stream bytes.',
      },
    ],
  },

  'tech-subnet-hosts': {
    seoTitle: `Free IPv4 Subnet Host Count Calculator – CIDR Usable IPs | ${SITE_NAME}`,
    metaDescription:
      'Calculate usable host IPs and total addresses for any IPv4 CIDR prefix (/0 to /32) using our free IPv4 Subnet Host Count Calculator.',
    howToUseSteps: [
      'Enter a network mask length from 0 to 32 inside CIDR Prefix (/xx).',
      'Inspect usable device host count and total raw IP address block size.',
    ],
    formulaExplanation:
      'IPv4 CIDR subnetting subtracts prefix bits from 32 total address bits to determine host bits h, computes 2^h total addresses, and subtracts 2 reserved addresses (network ID and broadcast IP) for usable hosts. Formula: Usable Hosts = max(0, 2^(32 − CIDR) − 2).',
    practicalExample:
      'Entering CIDR Prefix (/xx) = 26 leaves 6 host bits (2⁶ = 64 total IP addresses), yielding 62 Usable IP Hosts.',
    faqs: [
      {
        q: 'Why are 2 IP addresses subtracted from every standard IPv4 subnet?',
        a: 'The lowest address identifies the subnet itself (network ID) and the highest serves as the subnet broadcast address.',
      },
      {
        q: 'How many usable hosts does a common home /24 subnet hold?',
        a: 'A /24 subnet holds 2⁸ = 256 total addresses and 254 usable host IPs for routers, phones, and PCs.',
      },
      {
        q: 'What happens on /31 point-to-point links or /32 host routes?',
        a: 'General host subtraction gives 0 usable hosts, though RFC 3021 lets routers assign both IPs of a /31 on point-to-point WAN links.',
      },
    ],
  },

  'tech-json-payload': {
    seoTitle: `Free JSON Payload Data Size Estimator Calculator – REST API KB/MB | ${SITE_NAME}`,
    metaDescription:
      'Estimate uncompressed JSON API response weight in KB or MB from record count and field count using our free JSON Payload Data Size Estimator Calculator.',
    howToUseSteps: [
      'Enter returned object row count inside Number of Records.',
      'Type average property count per object under Fields per Record.',
      'Check estimated UTF-8 JSON transmission size in KB or MB.',
    ],
    formulaExplanation:
      'Payload sizing multiplies object count by properties per object and assumes an average ~65 UTF-8 bytes per key-value entry (including quotes, colons, keys, values, and braces), converting bytes by 1,024 into KB or MB. Formula: Bytes = Number of Records × Fields per Record × 65.',
    practicalExample:
      'Serializing Number of Records = 500 with Fields per Record = 12 estimates 390,000 bytes, equal to 380.9 KB Payload.',
    faqs: [
      {
        q: 'How much smaller is a 380.9 KB JSON payload when gzip or Brotli compression is active?',
        a: 'Repetitive JSON keys compress dramatically—gzip typically shrinks text JSON by 70% to 85% over HTTPS.',
      },
      {
        q: 'Why should mobile APIs paginate responses exceeding 500 KB?',
        a: 'Large JSON blobs block mobile UI threads during parsing and slow rendering on high-latency 3G/4G connections.',
      },
      {
        q: 'When can real JSON exceed 65 bytes per field?',
        a: 'Long HTML snippets, base64 thumbnails, or nested arrays push average bytes per field much higher than flat metadata fields.',
      },
    ],
  },

  'tech-load-budget': {
    seoTitle: `Free Web Page Load Time Budget Calculator – Asset Weight MB | ${SITE_NAME}`,
    metaDescription:
      'Determine maximum total web page size in MB for a target load time and connection speed using our free Web Page Load Time Budget Calculator.',
    howToUseSteps: [
      'Type maximum acceptable page wait inside Target Load Time (Seconds).',
      'Enter baseline visitor connection rate into Network Speed (Mbps).',
      'Read total allowed HTML, CSS, JS, font, and image payload budget in MB.',
    ],
    formulaExplanation:
      'Performance budgeting multiplies allowed download seconds by network megabits per second to obtain transfer bits, then divides by 8 bits per byte to establish the strict maximum asset budget in megabytes. Formula: Budget (MB) = (Target Seconds × Network Speed Mbps) / 8.',
    practicalExample:
      'Targeting Target Load Time (Seconds) = 2.5 on a Network Speed (Mbps) = 12 connection permits a maximum 3.75 MB Page Budget.',
    faqs: [
      {
        q: 'Why does real page rendering take longer than pure download time?',
        a: 'DNS lookup, TLS handshake, server TTFB, and JavaScript execution consume roughly 0.5–1.5 seconds before bytes even finish rendering.',
      },
      {
        q: 'What Web Page Load Time Budget do Core Web Vitals teams aim for on mobile?',
        a: 'Many speed-focused teams enforce a strict 1.0–1.5 MB total asset budget so Largest Contentful Paint stays under 2.5 seconds.',
      },
      {
        q: 'Which page assets eat a 3.75 MB Page Budget fastest?',
        a: 'Uncompressed hero PNGs, auto-playing background videos, and heavy third-party analytics/ad scripts usually dominate page weight.',
      },
    ],
  },

  'tech-ssl-expiry': {
    seoTitle: `Free SSL Certificate Expiry Days Calculator – Renewal Status | ${SITE_NAME}`,
    metaDescription:
      'Check HTTPS SSL/TLS renewal urgency status from remaining certificate validity days using our free SSL Certificate Expiry Days Calculator.',
    howToUseSteps: [
      'Enter active days left before certificate expiration into Days Remaining on Certificate.',
      'Check immediately whether status is Secure & Active, Renewal Recommended Soon, or EXPIRED.',
    ],
    formulaExplanation:
      'SSL lifecycle monitoring evaluates days remaining against standard 30-day renewal warning thresholds and zero-day expiration cutoffs so DevOps teams prevent browser security warnings before outages occur. Formula: Status = Expired (≤0), Renew Soon (1–30), Active (>30).',
    practicalExample:
      'Entering Days Remaining on Certificate = 18 flags 18 Days Remaining (Renewal Recommended Soon) for prompt certificate rotation.',
    faqs: [
      {
        q: 'At how many Days Remaining do Let’s Encrypt Certbot jobs renew automatically?',
        a: 'Standard 90-day Let’s Encrypt certificates trigger automated ACME renewal once fewer than 30 days remain.',
      },
      {
        q: 'What happens to site visitors if Days Remaining hits 0?',
        a: 'Every modern browser blocks HTTPS access with a full-screen security warning, halting checkouts, APIs, and search traffic.',
      },
      {
        q: 'Why are industry TLS certificate lifetimes shrinking below 398 days?',
        a: 'Shorter lifetimes limit exposure from compromised private keys and encourage automated zero-downtime certificate rotation.',
      },
    ],
  },

  'tech-dns-prop': {
    seoTitle: `Free DNS Propagation Time Estimator Calculator – TTL Cache Hours | ${SITE_NAME}`,
    metaDescription:
      'Estimate global DNS record update propagation hours across ISP resolvers from TTL seconds using our free DNS Propagation Time Estimator Calculator.',
    howToUseSteps: [
      'Enter your domain record Time-To-Live in seconds inside DNS TTL (Seconds).',
      'Inspect estimated hours for global recursive DNS caches to refresh.',
    ],
    formulaExplanation:
      'DNS cache convergence scales your record Time-To-Live (TTL) against typical 24-hour recursive resolver refresh spreads—dividing TTL by 3,600 seconds and multiplying by 24 with a 1-hour practical floor. Formula: Propagation Hours ≈ max(1, round((TTL / 3,600) × 24)).',
    practicalExample:
      'Setting DNS TTL (Seconds) = 1800 (30 minutes) projects ~12 Hours Global Propagation across stubborn ISP caches worldwide.',
    faqs: [
      {
        q: 'Why should admins lower DNS TTL to 300 seconds a day before migrating servers?',
        a: 'Lowering TTL well ahead of migration ensures old cached entries expire first, letting the final IP swap propagate swiftly.',
      },
      {
        q: 'Why do some ISPs take hours even when TTL is 300 seconds?',
        a: 'Certain regional ISPs ignore ultra-short TTLs and clamp minimum cache lifetimes internally to cut upstream query load.',
      },
      {
        q: 'How can I verify DNS updates faster than waiting on my home router cache?',
        a: 'Query public resolvers directly with dig @1.1.1.1 or dig @8.8.8.8 after clearing your local OS DNS cache.',
      },
    ],
  },

  'tech-base64': {
    seoTitle: `Free Base64 String Length Calculator – Encoded Characters | ${SITE_NAME}`,
    metaDescription:
      'Compute exact Base64 encoded output character count and ~33% expansion from raw byte length using our free Base64 String Length Calculator.',
    howToUseSteps: [
      'Type binary buffer, image, or text size in bytes inside Raw Data Size (Bytes).',
      'Read exact Base64 character count including = padding.',
    ],
    formulaExplanation:
      'Base64 encoding maps every group of 3 raw binary bytes (24 bits) into 4 ASCII 6-bit characters, rounding any trailing partial 3-byte block upward with = padding. Formula: Base64 Length = ceil(Raw Data Size Bytes / 3) × 4.',
    practicalExample:
      'Encoding Raw Data Size (Bytes) = 600 divides cleanly into 200 blocks × 4 = 800 Characters.',
    faqs: [
      {
        q: 'Why does Base64 inflate file size by roughly 33%?',
        a: 'Representing 8-bit binary bytes using 6-bit printable ASCII characters forces 4 output bytes for every 3 input bytes (4/3 ≈ 1.333×).',
      },
      {
        q: 'Why do Base64 strings sometimes end with = or ==?',
        a: 'When Raw Data Size (Bytes) is not divisible by 3, Base64 appends one or two equals signs so output length stays a clean multiple of 4.',
      },
      {
        q: 'Should large images be embedded as Base64 data URIs inside HTML or CSS?',
        a: 'Reserve Base64 data URIs for tiny icons (<2 KB); larger images load faster as standalone cacheable WebP or AVIF files.',
      },
    ],
  },

  'tech-rgb-hex': {
    seoTitle: `Free RGB to HEX Color Code Converter Calculator – CSS Hex | ${SITE_NAME}`,
    metaDescription:
      'Convert Red, Green, and Blue (0–255) color channel values into 6-digit CSS hexadecimal codes using our free RGB to HEX Color Code Converter Calculator.',
    howToUseSteps: [
      'Enter red intensity between 0 and 255 inside Red (0 - 255).',
      'Type green channel value inside Green (0 - 255) and blue value inside Blue (0 - 255).',
      'Copy the formatted 6-digit uppercase CSS HEX color code.',
    ],
    formulaExplanation:
      'Web hex encoding clamps each decimal RGB channel between 0 and 255, converts each integer into a zero-padded two-digit base-16 pair (00–FF), and prefixes a # symbol. Formula: Hex = # + Hex₂(R) + Hex₂(G) + Hex₂(B).',
    practicalExample:
      'Converting Red (0 - 255) = 37, Green (0 - 255) = 99, and Blue (0 - 255) = 235 (0x25, 0x63, 0xEB) yields HEX: #2563EB.',
    faqs: [
      {
        q: 'How does 255 convert into FF inside hexadecimal?',
        a: 'Base-16 digits count 0–9 then A–F (10–15), making FF equal (15 × 16) + 15 = 255 maximum channel brightness.',
      },
      {
        q: 'Can HEX codes also store transparency (alpha channel)?',
        a: 'Yes—modern CSS supports 8-digit #RRGGBBAA codes where the final two hex digits control opacity from 00 (transparent) to FF (opaque).',
      },
      {
        q: 'What does entering 0, 0, 0 or 255, 255, 255 produce?',
        a: 'Zero across all three channels produces pure black (#000000), whereas 255 across all three produces pure white (#FFFFFF).',
      },
    ],
  },
};
