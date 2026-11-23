import { categories, getAllCalculators } from './src/data/calculatorsData';
import { getCalculatorSlug } from './src/utils/slugs';
import { SITE_URL } from './src/config/site';
import fs from 'fs';

const domain = SITE_URL.replace(/\/+$/, '');
const lastmod = new Date().toISOString().split('T')[0];
const allCalcs = getAllCalculators();

const entries = [
  { loc: `${domain}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${domain}/about`, priority: '0.6', changefreq: 'monthly' },
  { loc: `${domain}/contact`, priority: '0.6', changefreq: 'monthly' },
  { loc: `${domain}/privacy`, priority: '0.5', changefreq: 'monthly' },
  { loc: `${domain}/terms`, priority: '0.5', changefreq: 'monthly' },
  { loc: `${domain}/disclaimer`, priority: '0.5', changefreq: 'monthly' },
];

categories.forEach((cat) => {
  entries.push({
    loc: `${domain}/category/${cat.id}`,
    priority: '0.8',
    changefreq: 'weekly',
  });
});

allCalcs.forEach((calc) => {
  entries.push({
    loc: `${domain}${getCalculatorSlug(calc)}`,
    priority: '0.8',
    changefreq: 'weekly',
  });
});

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

entries.forEach((entry) => {
  xml += `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>
`;
});

xml += `</urlset>\n`;

fs.writeFileSync('./public/sitemap.xml', xml);

const robots = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;

fs.writeFileSync('./public/robots.txt', robots);

console.log(`Sitemap generated for ${domain} with total pages:`, entries.length);
console.log('First 6 entries:');
entries.slice(0, 6).forEach((e, i) => console.log(`${i + 1}: ${e.loc}`));
