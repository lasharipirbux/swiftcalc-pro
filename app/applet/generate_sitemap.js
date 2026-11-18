import { categories, getAllCalculators } from './src/data/calculatorsData';
import { getCalculatorSlug } from './src/utils/slugs';
import fs from 'fs';

const domain = 'https://swiftcalc.pro';
const allCalcs = getAllCalculators();

let urls = [
  `${domain}/`,
  `${domain}/about`,
  `${domain}/contact`,
  `${domain}/privacy`,
  `${domain}/terms`,
];

categories.forEach(cat => {
  urls.push(`${domain}/category/${cat.id}`);
});

allCalcs.forEach(calc => {
  urls.push(`${domain}${getCalculatorSlug(calc)}`);
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

urls.forEach(u => {
  xml += `  <url>
    <loc>${u}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u === domain + '/' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

xml += `</urlset>`;

fs.writeFileSync('./public/sitemap.xml', xml);

const robots = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync('./public/robots.txt', robots);

console.log('Sitemap generated with total pages:', urls.length);
console.log('First 5 entries:');
urls.slice(0, 5).forEach((u, i) => console.log(`${i+1}: ${u}`));
