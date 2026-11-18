import { CalculatorItem } from '../types';

export const getCalculatorSlug = (calc: CalculatorItem): string => {
  return '/' + calc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

export const findCalculatorBySlug = (slug: string, allCalculators: CalculatorItem[]): CalculatorItem | undefined => {
  const cleanSlug = slug.startsWith('/') ? slug : '/' + slug;
  return allCalculators.find(c => getCalculatorSlug(c) === cleanSlug);
};
