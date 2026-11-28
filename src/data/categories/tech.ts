import type { Category } from "../../types.ts";

export const techCategory: Category = {
    id: 'tech',
    name: 'Internet & Technology',
    iconName: 'Wifi',
    description: 'Download time, Mbps to MB/s, data usage, file size converter, bandwidth, aspect ratio, image resize, password strength, ping, Wi-Fi range, storage costs, and API rate limits.',
    color: 'from-cyan-700 to-slate-900',
    calculators: [
      {
        id: 'tech-download-time',
        name: 'Download Time Calculator',
        categoryId: 'tech',
        description: 'Calculate file download completion time based on file size and internet speed.',
        inputs: [
          { id: 'size', label: 'File Size Value', type: 'number', defaultValue: 10 },
          { id: 'unit', label: 'File Size Unit', type: 'select', defaultValue: 'GB', options: [
            { label: 'Megabytes (MB)', value: 'MB' },
            { label: 'Gigabytes (GB)', value: 'GB' },
            { label: 'Terabytes (TB)', value: 'TB' }
          ]},
          { id: 'speed', label: 'Internet Speed (Mbps)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          let sizeMB = Number(vals.size);
          if (vals.unit === 'GB') sizeMB *= 1024;
          else if (vals.unit === 'TB') sizeMB *= 1024 * 1024;
          const speedMbps = Number(vals.speed);
          if (speedMbps <= 0) return { result: 'Speed must be > 0' };
          const speedMBs = speedMbps / 8;
          const totalSeconds = sizeMB / speedMBs;
          const hrs = Math.floor(totalSeconds / 3600);
          const mins = Math.floor((totalSeconds % 3600) / 60);
          const secs = Math.round(totalSeconds % 60);
          return {
            result: hrs > 0 ? `${hrs}h ${mins}m ${secs}s` : `${mins}m ${secs}s`,
            secondaryResult: `Total Seconds: ${Math.round(totalSeconds).toLocaleString()} s | Speed: ${speedMBs.toFixed(2)} MB/s`,
            formula: 'Time (s) = File Size (MB) / (Speed Mbps / 8)'
          };
        }
      },
      {
        id: 'tech-mbps-mbs',
        name: 'Mbps to MB/s Converter',
        categoryId: 'tech',
        description: 'Convert Megabits per second (Mbps) to Megabytes per second (MB/s).',
        inputs: [
          { id: 'mbps', label: 'Speed in Mbps (Megabits/sec)', type: 'number', defaultValue: 100 }
        ],
        calculate: (vals) => {
          const mbps = Number(vals.mbps);
          const mbs = mbps / 8;
          return {
            result: `${mbs.toFixed(2)} MB/s`,
            secondaryResult: `1 Megabyte (MB) = 8 Megabits (Mb)`,
            formula: 'MB/s = Mbps / 8'
          };
        }
      },
      {
        id: 'tech-data-usage',
        name: 'Data Usage Calculator',
        categoryId: 'tech',
        description: 'Calculate monthly internet data consumption based on daily video streaming, calls, and browsing.',
        inputs: [
          { id: 'hdHours', label: 'HD Video Streaming (Hours / Day)', type: 'number', defaultValue: 2 },
          { id: 'callHours', label: 'Video Calls (Hours / Day)', type: 'number', defaultValue: 1 },
          { id: 'webHours', label: 'Web Browsing & Social Media (Hours / Day)', type: 'number', defaultValue: 3 }
        ],
        calculate: (vals) => {
          const dailyGB = (Number(vals.hdHours) * 3.0) + (Number(vals.callHours) * 0.75) + (Number(vals.webHours) * 0.3);
          const monthlyGB = dailyGB * 30;
          return {
            result: `${monthlyGB.toFixed(1)} GB / month`,
            secondaryResult: `Daily Usage: ~${dailyGB.toFixed(2)} GB/day`,
            formula: 'Monthly Data = (HD hrs × 3GB + Call hrs × 0.75GB + Web hrs × 0.3GB) × 30 days'
          };
        }
      },
      {
        id: 'tech-file-size-conv',
        name: 'File Size Converter',
        categoryId: 'tech',
        description: 'Convert storage sizes between KB, MB, GB, and TB.',
        inputs: [
          { id: 'val', label: 'Size Value', type: 'number', defaultValue: 4.5 },
          { id: 'unit', label: 'From Unit', type: 'select', defaultValue: 'GB', options: [
            { label: 'Kilobytes (KB)', value: 'KB' },
            { label: 'Megabytes (MB)', value: 'MB' },
            { label: 'Gigabytes (GB)', value: 'GB' },
            { label: 'Terabytes (TB)', value: 'TB' }
          ]}
        ],
        calculate: (vals) => {
          let bytes = Number(vals.val);
          if (vals.unit === 'KB') bytes *= 1024;
          else if (vals.unit === 'MB') bytes *= 1024 * 1024;
          else if (vals.unit === 'GB') bytes *= 1024 * 1024 * 1024;
          else if (vals.unit === 'TB') bytes *= 1024 * 1024 * 1024 * 1024;

          const kb = bytes / 1024;
          const mb = kb / 1024;
          const gb = mb / 1024;
          const tb = gb / 1024;

          return {
            result: `${gb.toFixed(3)} GB`,
            secondaryResult: `${kb.toLocaleString(undefined, {maximumFractionDigits: 1})} KB | ${mb.toFixed(2)} MB | ${tb.toFixed(4)} TB`,
            formula: 'Base 1024 binary storage conversion'
          };
        }
      },
      {
        id: 'tech-bandwidth',
        name: 'Bandwidth Calculator',
        categoryId: 'tech',
        description: 'Calculate required network bandwidth to transfer a data volume within a timeframe.',
        inputs: [
          { id: 'dataSize', label: 'Data Volume (GB)', type: 'number', defaultValue: 50 },
          { id: 'timeVal', label: 'Timeframe Value', type: 'number', defaultValue: 2 },
          { id: 'timeUnit', label: 'Timeframe Unit', type: 'select', defaultValue: 'hours', options: [
            { label: 'Seconds', value: 'seconds' },
            { label: 'Minutes', value: 'minutes' },
            { label: 'Hours', value: 'hours' }
          ]}
        ],
        calculate: (vals) => {
          let gb = Number(vals.dataSize);
          let tVal = Number(vals.timeVal);
          if (tVal <= 0) return { result: 'Timeframe must be > 0' };
          let totalSecs = tVal;
          if (vals.timeUnit === 'minutes') totalSecs *= 60;
          else if (vals.timeUnit === 'hours') totalSecs *= 3600;

          const totalBits = gb * 1024 * 1024 * 1024 * 8;
          const bps = totalBits / totalSecs;
          const mbps = bps / 1_000_000;
          return {
            result: `${mbps.toFixed(2)} Mbps`,
            secondaryResult: `Required speed to transfer ${gb} GB in ${tVal} ${vals.timeUnit}`,
            formula: 'Bandwidth (Mbps) = (Data Size in Bits) / Time in Seconds / 1,000,000'
          };
        }
      },
      {
        id: 'tech-aspect-ratio',
        name: 'Screen Resolution and Aspect Ratio Calculator',
        categoryId: 'tech',
        description: 'Calculate display aspect ratio (e.g. 16:9) and total megapixels from screen resolution.',
        inputs: [
          { id: 'width', label: 'Width (Pixels)', type: 'number', defaultValue: 1920 },
          { id: 'height', label: 'Height (Pixels)', type: 'number', defaultValue: 1080 }
        ],
        calculate: (vals) => {
          const w = Number(vals.width);
          const h = Number(vals.height);
          if (h <= 0) return { result: 'Height must be > 0' };
          const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
          const common = gcd(w, h);
          const rx = w / common;
          const ry = h / common;
          const megapixels = (w * h) / 1_000_000;
          return {
            result: `${rx}:${ry} Aspect Ratio`,
            secondaryResult: `Resolution: ${w}×${h} (${megapixels.toFixed(2)} Megapixels)`,
            formula: 'Simplified width-to-height ratio using GCD'
          };
        }
      },
      {
        id: 'tech-image-resize',
        name: 'Image Resize Calculator (Keep Aspect Ratio)',
        categoryId: 'tech',
        description: 'Calculate proportional new image height when resizing width while maintaining aspect ratio.',
        inputs: [
          { id: 'origW', label: 'Original Width (px)', type: 'number', defaultValue: 1920 },
          { id: 'origH', label: 'Original Height (px)', type: 'number', defaultValue: 1080 },
          { id: 'newW', label: 'New Target Width (px)', type: 'number', defaultValue: 800 }
        ],
        calculate: (vals) => {
          const ow = Number(vals.origW);
          const oh = Number(vals.origH);
          const nw = Number(vals.newW);
          if (ow <= 0) return { result: 'Original width must be > 0' };
          const nh = (oh / ow) * nw;
          return {
            result: `New Height: ${Math.round(nh)} px`,
            secondaryResult: `New Dimension: ${nw} × ${Math.round(nh)} px`,
            formula: 'New Height = (Original Height / Original Width) × New Width'
          };
        }
      },
      {
        id: 'tech-password-strength',
        name: 'Password Strength Estimator',
        categoryId: 'tech',
        description: 'Estimate password strength and entropy (Runs securely in browser; never stored or sent).',
        inputs: [
          { id: 'pwd', label: 'Password to Test (Local Only)', type: 'text', defaultValue: 'SecureP@ss123!' }
        ],
        calculate: (vals) => {
          const pwd = String(vals.pwd || '');
          const L = pwd.length;
          let pool = 0;
          if (/[a-z]/.test(pwd)) pool += 26;
          if (/[A-Z]/.test(pwd)) pool += 26;
          if (/[0-9]/.test(pwd)) pool += 10;
          if (/[^a-zA-Z0-9]/.test(pwd)) pool += 32;

          const entropy = pool > 0 ? L * Math.log2(pool) : 0;
          let strength = 'Very Weak';
          if (entropy >= 80) strength = 'Very Strong 🔒';
          else if (entropy >= 60) strength = 'Strong';
          else if (entropy >= 40) strength = 'Moderate';
          else if (entropy >= 25) strength = 'Weak';

          return {
            result: `${strength} (${entropy.toFixed(1)} bits)`,
            secondaryResult: `Length: ${L} chars | Runs only in browser, never stored or transmitted.`,
            formula: 'Entropy (bits) = Length × log₂(Character Pool Size)'
          };
        }
      },
      // 17 New Calculators to reach 25
      {
        id: 'tech-ping-latency',
        name: 'Ping & Network Latency Quality Calculator',
        categoryId: 'tech',
        description: 'Evaluate gaming and streaming connection quality based on ping (ms) and packet loss.',
        inputs: [
          { id: 'ping', label: 'Ping Latency (ms)', type: 'number', defaultValue: 35 },
          { id: 'loss', label: 'Packet Loss (%)', type: 'number', defaultValue: 0 }
        ],
        calculate: (vals) => {
          const p = Number(vals.ping);
          const l = Number(vals.loss);
          let quality = 'Excellent';
          if (l > 5 || p > 150) quality = 'Poor (Laggy)';
          else if (l > 1 || p > 80) quality = 'Fair';
          else if (p > 40) quality = 'Good';
          return {
            result: `${quality} Connection`,
            secondaryResult: `Latency: ${p} ms | Packet Loss: ${l}%`,
            formula: 'Network quality rating based on ping thresholds & packet loss'
          };
        }
      },
      {
        id: 'tech-wifi-range',
        name: 'Wi-Fi Router Range & Obstruction Estimator',
        categoryId: 'tech',
        description: 'Estimate effective Wi-Fi signal range through walls and barriers.',
        inputs: [
          { id: 'power', label: 'Router Power (dBm)', type: 'number', defaultValue: 20 },
          { id: 'walls', label: 'Number of Walls / Obstructions', type: 'number', defaultValue: 2 }
        ],
        calculate: (vals) => {
          const w = Number(vals.walls);
          let estMeters = 30 - (w * 7);
          estMeters = Math.max(5, estMeters);
          return {
            result: `~${estMeters} Meters Effective Range`,
            secondaryResult: `Estimated signal degradation per solid wall obstacle`,
            formula: 'Effective Range = Base Range - (Obstructions × Loss Factor)'
          };
        }
      },
      {
        id: 'tech-cloud-storage-cost',
        name: 'Cloud Storage Cost Comparison Calculator',
        categoryId: 'tech',
        description: 'Compare annual cloud storage costs for large datasets.',
        inputs: [
          { id: 'tb', label: 'Storage Volume (TB)', type: 'number', defaultValue: 5 },
          { id: 'rate', label: 'Monthly Rate per TB (USD/PKR)', type: 'number', defaultValue: 20 }
        ],
        calculate: (vals) => {
          const tb = Number(vals.tb);
          const rate = Number(vals.rate);
          const annual = tb * rate * 12;
          return {
            result: `$${annual.toLocaleString()} / year`,
            secondaryResult: `Monthly Cost: $${(tb * rate).toLocaleString()} for ${tb} TB`,
            formula: 'Annual Cost = Storage TB × Monthly Rate × 12'
          };
        }
      },
      {
        id: 'tech-mobile-data-limit',
        name: 'Mobile Data Plan Exhaustion Days Calculator',
        categoryId: 'tech',
        description: 'Calculate how many days remaining mobile data will last at current daily consumption.',
        inputs: [
          { id: 'remaining', label: 'Remaining Data (GB)', type: 'number', defaultValue: 12.5 },
          { id: 'daily', label: 'Daily Consumption (GB/day)', type: 'number', defaultValue: 1.5 }
        ],
        calculate: (vals) => {
          const rem = Number(vals.remaining);
          const d = Number(vals.daily);
          if (d <= 0) return { result: 'Daily consumption must be > 0' };
          const days = rem / d;
          return {
            result: `Lasts ~${days.toFixed(1)} Days`,
            secondaryResult: `At average rate of ${d} GB per day`,
            formula: 'Days Remaining = Remaining Data / Daily Consumption'
          };
        }
      },
      {
        id: 'tech-video-bitrate',
        name: 'Video Bitrate & File Size Calculator',
        categoryId: 'tech',
        description: 'Calculate video file size based on duration and bitrate.',
        inputs: [
          { id: 'mins', label: 'Video Duration (Minutes)', type: 'number', defaultValue: 10 },
          { id: 'bitrate', label: 'Video Bitrate (Mbps)', type: 'number', defaultValue: 5 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mins);
          const b = Number(vals.bitrate);
          const totalSecs = m * 60;
          const totalMegabits = totalSecs * b;
          const totalGB = totalMegabits / 8 / 1024;
          return {
            result: `${totalGB.toFixed(2)} GB File Size`,
            secondaryResult: `Total Megabits: ${totalMegabits.toLocaleString()} Mb`,
            formula: 'File Size (GB) = (Duration Secs × Bitrate Mbps) / 8 / 1024'
          };
        }
      },
      {
        id: 'tech-server-uptime',
        name: 'Server Uptime Percentage Calculator',
        categoryId: 'tech',
        description: 'Calculate allowed downtime per year/month for a target uptime percentage (e.g. 99.9%).',
        inputs: [
          { id: 'target', label: 'Target Uptime (%)', type: 'number', defaultValue: 99.9 },
          { id: 'period', label: 'Time Period', type: 'select', defaultValue: 'year', options: [
            { label: 'Per Year (365 days)', value: 'year' },
            { label: 'Per Month (30 days)', value: 'month' }
          ]}
        ],
        calculate: (vals) => {
          const t = Number(vals.target);
          const totalMins = vals.period === 'year' ? 365 * 24 * 60 : 30 * 24 * 60;
          const downtimeMins = totalMins * ((100 - t) / 100);
          return {
            result: `${downtimeMins.toFixed(1)} Minutes Allowed Downtime`,
            secondaryResult: `For ${t}% uptime over ${vals.period}`,
            formula: 'Downtime = Total Period Minutes × ((100 - Uptime %) / 100)'
          };
        }
      },
      {
        id: 'tech-qr-code-capacity',
        name: 'QR Code Data Capacity Estimator',
        categoryId: 'tech',
        description: 'Estimate max character capacity and error correction for QR codes.',
        inputs: [
          { id: 'version', label: 'QR Code Version (1 to 40)', type: 'number', defaultValue: 10 },
          { id: 'ecLevel', label: 'Error Correction', type: 'select', defaultValue: 'M', options: [
            { label: 'Low (~7%)', value: 'L' },
            { label: 'Medium (~15%)', value: 'M' },
            { label: 'Quartile (~25%)', value: 'Q' },
            { label: 'High (~30%)', value: 'H' }
          ]}
        ],
        calculate: (vals) => {
          const v = Math.min(40, Math.max(1, Number(vals.version)));
          const estChars = v * 65; // Approximate scaling
          return {
            result: `~${estChars} Alphanumeric Characters`,
            secondaryResult: `Version ${v} with error correction level ${vals.ecLevel}`,
            formula: 'Standard ISO/IEC 18004 QR capacity matrix estimation'
          };
        }
      },
      {
        id: 'tech-battery-drain',
        name: 'Smartphone Battery Drain Time Calculator',
        categoryId: 'tech',
        description: 'Estimate screen-on battery life based on battery capacity and power draw.',
        inputs: [
          { id: 'mah', label: 'Battery Capacity (mAh)', type: 'number', defaultValue: 5000 },
          { id: 'maDraw', label: 'Average Current Draw (mA)', type: 'number', defaultValue: 450 }
        ],
        calculate: (vals) => {
          const mah = Number(vals.mah);
          const ma = Number(vals.maDraw);
          if (ma <= 0) return { result: 'Current draw must be > 0' };
          const hours = mah / ma;
          return {
            result: `~${hours.toFixed(1)} Hours Battery Life`,
            secondaryResult: `Based on ${mah} mAh capacity at ${ma} mA draw`,
            formula: 'Hours = Capacity (mAh) / Current Draw (mA)'
          };
        }
      },
      {
        id: 'tech-ssd-transfer',
        name: 'SSD Data Transfer Time Calculator',
        categoryId: 'tech',
        description: 'Calculate file copy duration for high-speed NVMe or SATA SSDs.',
        inputs: [
          { id: 'sizeGB', label: 'Folder Size (GB)', type: 'number', defaultValue: 250 },
          { id: 'speed', label: 'SSD Speed (MB/s)', type: 'number', defaultValue: 3500 }
        ],
        calculate: (vals) => {
          const gb = Number(vals.sizeGB);
          const s = Number(vals.speed);
          if (s <= 0) return { result: 'Speed must be > 0' };
          const sizeMB = gb * 1024;
          const secs = sizeMB / s;
          return {
            result: `${secs < 60 ? secs.toFixed(1) + ' seconds' : (secs / 60).toFixed(1) + ' minutes'}`,
            secondaryResult: `Transfer rate: ${s} MB/s for ${gb} GB`,
            formula: 'Time (s) = (Size GB × 1024 MB) / Speed MB/s'
          };
        }
      },
      {
        id: 'tech-brute-force',
        name: 'Password Brute Force Time Estimator',
        categoryId: 'tech',
        description: 'Estimate time required to crack a password via brute force attempts.',
        inputs: [
          { id: 'len', label: 'Password Length', type: 'number', defaultValue: 10 },
          { id: 'pool', label: 'Character Pool Size', type: 'select', defaultValue: '62', options: [
            { label: 'Lowercase Only (26)', value: '26' },
            { label: 'Letters + Numbers (62)', value: '62' },
            { label: 'Full ASCII Symbols (94)', value: '94' }
          ]},
          { id: 'guessesPerSec', label: 'Guesses per Second', type: 'number', defaultValue: 1_000_000_000 }
        ],
        calculate: (vals) => {
          const L = Number(vals.len);
          const p = Number(vals.pool);
          const gps = Number(vals.guessesPerSec);
          if (gps <= 0) return { result: 'Guesses/sec must be > 0' };
          const totalCombinations = Math.pow(p, L);
          const seconds = totalCombinations / gps / 2; // Average time is half total
          let timeStr = `${seconds.toExponential(2)} seconds`;
          if (seconds > 31536000) timeStr = `${(seconds / 31536000).toExponential(2)} years`;
          return {
            result: `Estimated Time: ${timeStr}`,
            secondaryResult: `Total combinations: ${totalCombinations.toExponential(2)}`,
            formula: 'Time = (Pool Size ^ Length) / (Guesses/sec × 2)'
          };
        }
      },
      {
        id: 'tech-api-rate-limit',
        name: 'API Rate Limit Consumption Calculator',
        categoryId: 'tech',
        description: 'Calculate request capacity and consumption against API rate limits.',
        inputs: [
          { id: 'limit', label: 'Rate Limit (Requests per Minute)', type: 'number', defaultValue: 60 },
          { id: 'usedPct', label: 'Current Usage (%)', type: 'number', defaultValue: 75 }
        ],
        calculate: (vals) => {
          const lim = Number(vals.limit);
          const pct = Number(vals.usedPct);
          const used = lim * (pct / 100);
          const remaining = lim - used;
          return {
            result: `${remaining.toFixed(0)} Requests Remaining / min`,
            secondaryResult: `Used: ${used.toFixed(0)} of ${lim} req/min (${pct}%)`,
            formula: 'Remaining = Limit - (Limit × Usage %)'
          };
        }
      },
      {
        id: 'tech-ram-bandwidth',
        name: 'RAM Memory Bandwidth Calculator',
        categoryId: 'tech',
        description: 'Calculate theoretical maximum memory bandwidth for RAM modules.',
        inputs: [
          { id: 'busWidth', label: 'Bus Width (Bits)', type: 'number', defaultValue: 64 },
          { id: 'freq', label: 'Clock Frequency (MHz)', type: 'number', defaultValue: 3200 }
        ],
        calculate: (vals) => {
          const width = Number(vals.busWidth);
          const freq = Number(vals.freq);
          // Dual channel multiplier 2x usually assumed or direct calculation
          const bandwidthMBs = (freq * 1_000_000 * (width / 8) * 2) / 1_000_000;
          return {
            result: `${(bandwidthMBs / 1024).toFixed(2)} GB/s Bandwidth`,
            secondaryResult: `Dual-channel transfer rate at ${freq} MHz`,
            formula: 'Bandwidth = Frequency × (Bus Width / 8) × 2 (channels)'
          };
        }
      },
      {
        id: 'tech-pixel-density',
        name: 'PPI (Pixels Per Inch) Display Density',
        categoryId: 'tech',
        description: 'Calculate pixel density (PPI) for screens and monitors.',
        inputs: [
          { id: 'w', label: 'Width (Pixels)', type: 'number', defaultValue: 2560 },
          { id: 'h', label: 'Height (Pixels)', type: 'number', defaultValue: 1440 },
          { id: 'diag', label: 'Diagonal Screen Size (Inches)', type: 'number', defaultValue: 27 }
        ],
        calculate: (vals) => {
          const w = Number(vals.w);
          const h = Number(vals.h);
          const diag = Number(vals.diag);
          if (diag <= 0) return { result: 'Diagonal size must be > 0' };
          const ppi = Math.sqrt(w * w + h * h) / diag;
          return {
            result: `${ppi.toFixed(1)} PPI`,
            secondaryResult: `Retina / Sharpness display classification`,
            formula: 'PPI = √(Width² + Height²) / Diagonal Inches'
          };
        }
      },
      {
        id: 'tech-audio-file-size',
        name: 'Audio File Size & Bitrate Calculator',
        categoryId: 'tech',
        description: 'Calculate audio recording file size based on bitrate and duration.',
        inputs: [
          { id: 'mins', label: 'Audio Duration (Minutes)', type: 'number', defaultValue: 3 },
          { id: 'kbps', label: 'Bitrate (kbps)', type: 'number', defaultValue: 320 }
        ],
        calculate: (vals) => {
          const m = Number(vals.mins);
          const kbps = Number(vals.kbps);
          const totalKilobits = m * 60 * kbps;
          const totalMB = totalKilobits / 8 / 1024;
          return {
            result: `${totalMB.toFixed(2)} MB File Size`,
            secondaryResult: `Uncompressed or compressed audio storage estimate`,
            formula: 'Size (MB) = (Duration Secs × Bitrate kbps) / 8 / 1024'
          };
        }
      },
      {
        id: 'tech-subnet-hosts',
        name: 'IPv4 Subnet Host Count Calculator',
        categoryId: 'tech',
        description: 'Calculate usable IP host addresses given CIDR subnet prefix.',
        inputs: [
          { id: 'cidr', label: 'CIDR Prefix (/xx)', type: 'number', defaultValue: 24 }
        ],
        calculate: (vals) => {
          const c = Math.min(32, Math.max(0, Number(vals.cidr)));
          const hostBits = 32 - c;
          const totalHosts = Math.pow(2, hostBits);
          const usableHosts = Math.max(0, totalHosts - 2);
          return {
            result: `${usableHosts.toLocaleString()} Usable IP Hosts`,
            secondaryResult: `Total IP addresses: ${totalHosts.toLocaleString()} (incl. network & broadcast)`,
            formula: 'Usable Hosts = 2^(32 - CIDR) - 2'
          };
        }
      },
      {
        id: 'tech-json-payload',
        name: 'JSON Payload Data Size Estimator',
        categoryId: 'tech',
        description: 'Estimate network transmission size for JSON objects and records.',
        inputs: [
          { id: 'records', label: 'Number of Records', type: 'number', defaultValue: 1000 },
          { id: 'fields', label: 'Fields per Record', type: 'number', defaultValue: 15 }
        ],
        calculate: (vals) => {
          const recs = Number(vals.records);
          const fields = Number(vals.fields);
          // Approx 60 bytes per field including keys and syntax
          const bytes = recs * fields * 65;
          const kb = bytes / 1024;
          const mb = kb / 1024;
          return {
            result: mb >= 1 ? `${mb.toFixed(2)} MB Payload` : `${kb.toFixed(1)} KB Payload`,
            secondaryResult: `Estimated raw UTF-8 string serialization size`,
            formula: 'Payload Size = Records × Fields × ~65 bytes'
          };
        }
      },
      {
        id: 'tech-load-budget',
        name: 'Web Page Load Time Budget Calculator',
        categoryId: 'tech',
        description: 'Calculate max allowed page asset size for target load time on mobile networks.',
        inputs: [
          { id: 'targetSecs', label: 'Target Load Time (Seconds)', type: 'number', defaultValue: 3 },
          { id: 'speedMbps', label: 'Network Speed (Mbps)', type: 'number', defaultValue: 10 }
        ],
        calculate: (vals) => {
          const t = Number(vals.targetSecs);
          const s = Number(vals.speedMbps);
          if (s <= 0) return { result: 'Speed must be > 0' };
          const maxMegabits = t * s;
          const maxMB = maxMegabits / 8;
          return {
            result: `${maxMB.toFixed(2)} MB Page Budget`,
            secondaryResult: `Max total asset weight for ${t}s load at ${s} Mbps`,
            formula: 'Budget (MB) = (Target Seconds × Speed Mbps) / 8'
          };
        }
      },
      {
        id: 'tech-ssl-expiry',
        name: 'SSL Certificate Expiry Days Calculator',
        categoryId: 'tech',
        description: 'Calculate remaining days until SSL/TLS security certificate expiration.',
        inputs: [
          { id: 'daysLeft', label: 'Days Remaining on Certificate', type: 'number', defaultValue: 45 }
        ],
        calculate: (vals) => {
          const d = Number(vals.daysLeft);
          let status = 'Secure & Active';
          if (d <= 0) status = 'EXPIRED (Action Required Immediately)';
          else if (d <= 30) status = 'Renewal Recommended Soon';
          return {
            result: `${d} Days Remaining (${status})`,
            secondaryResult: `Standard Let's Encrypt or commercial SSL tracking`,
            formula: 'Remaining certificate validity duration in days'
          };
        }
      },
      {
        id: 'tech-dns-prop',
        name: 'DNS Propagation Time Estimator',
        categoryId: 'tech',
        description: 'Estimate global DNS records propagation duration across global nameservers.',
        inputs: [
          { id: 'ttl', label: 'DNS TTL (Seconds)', type: 'number', defaultValue: 3600 }
        ],
        calculate: (vals) => {
          const ttl = Number(vals.ttl);
          const maxHours = (ttl / 3600) * 24; // typical global cache spread
          return {
            result: `~${Math.max(1, Math.round(maxHours))} Hours Global Propagation`,
            secondaryResult: `Based on DNS TTL of ${ttl} seconds`,
            formula: 'Propagation Est. proportional to record TTL and ISP cache'
          };
        }
      },
      {
        id: 'tech-base64',
        name: 'Base64 String Length Calculator',
        categoryId: 'tech',
        description: 'Calculate encoded Base64 string length from raw text byte length.',
        inputs: [
          { id: 'bytes', label: 'Raw Data Size (Bytes)', type: 'number', defaultValue: 1024 }
        ],
        calculate: (vals) => {
          const b = Number(vals.bytes);
          const base64Len = Math.ceil(b / 3) * 4;
          return {
            result: `${base64Len.toLocaleString()} Characters`,
            secondaryResult: `Base64 expansion ratio is ~33% larger than raw binary`,
            formula: 'Base64 Length = Ceil(Bytes / 3) × 4'
          };
        }
      },
      {
        id: 'tech-rgb-hex',
        name: 'RGB to HEX Color Code Converter',
        categoryId: 'tech',
        description: 'Convert RGB color decimal values to web hexadecimal color code format.',
        inputs: [
          { id: 'r', label: 'Red (0 - 255)', type: 'number', defaultValue: 13 },
          { id: 'g', label: 'Green (0 - 255)', type: 'number', defaultValue: 148 },
          { id: 'b', label: 'Blue (0 - 255)', type: 'number', defaultValue: 136 }
        ],
        calculate: (vals) => {
          const r = Math.min(255, Math.max(0, Math.round(Number(vals.r))));
          const g = Math.min(255, Math.max(0, Math.round(Number(vals.g))));
          const b = Math.min(255, Math.max(0, Math.round(Number(vals.b))));
          const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
          return {
            result: `HEX: ${hex}`,
            secondaryResult: `RGB(${r}, ${g}, ${b}) web color format`,
            formula: 'Hex = # + ToHex(R) + ToHex(G) + ToHex(B)'
          };
        }
      }
    ]
  };
