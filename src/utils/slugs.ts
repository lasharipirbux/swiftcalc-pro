import { CalculatorItem } from '../types';

export const getCalculatorBaseSlug = (calc: CalculatorItem): string => {
  return calc.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const getCalculatorSlug = (calc: CalculatorItem): string => {
  return `/calculator/${getCalculatorBaseSlug(calc)}`;
};

export const findCalculatorBySlug = (
  slug: string,
  allCalculators: CalculatorItem[]
): CalculatorItem | undefined => {
  let decoded = slug;
  try {
    decoded = decodeURIComponent(slug);
  } catch {
    decoded = slug;
  }
  const normalized = (decoded.startsWith('/') ? decoded : `/${decoded}`)
    .replace(/\/+$/, '')
    .toLowerCase();
  const withoutPrefix = normalized.startsWith('/calculator/')
    ? normalized.slice('/calculator/'.length)
    : normalized.slice(1);

  if (!withoutPrefix) return undefined;

  return allCalculators.find((c) => getCalculatorBaseSlug(c) === withoutPrefix);
};
