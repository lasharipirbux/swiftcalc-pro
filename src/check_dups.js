import { categories } from './data/calculatorsData';

let total = 0;
const nameCounts = new Map();
categories.forEach(cat => {
  console.log(`${cat.name} (${cat.id}): ${cat.calculators.length}`);
  total += cat.calculators.length;
  cat.calculators.forEach(calc => {
    nameCounts.set(calc.name, (nameCounts.get(calc.name) || 0) + 1);
  });
});

console.log('Total Calculators:', total);
console.log('Duplicates:');
let dupCount = 0;
for (const [name, count] of nameCounts.entries()) {
  if (count > 1) {
    console.log(`- ${name} (appears ${count} times)`);
    dupCount++;
  }
}
console.log('Total duplicate names:', dupCount);
