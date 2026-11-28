import type { Category } from "../types.ts";
import { mathCategory } from "./categories/math.ts";
import { financeCategory } from "./categories/finance.ts";
import { businessCategory } from "./categories/business.ts";
import { constructionCategory } from "./categories/construction.ts";
import { healthCategory } from "./categories/health.ts";
import { datetimeCategory } from "./categories/datetime.ts";
import { electricalCategory } from "./categories/electrical.ts";
import { educationCategory } from "./categories/education.ts";
import { engineeringCategory } from "./categories/engineering.ts";
import { realestateCategory } from "./categories/realestate.ts";
import { automotiveCategory } from "./categories/automotive.ts";
import { cookingCategory } from "./categories/cooking.ts";
import { statisticsCategory } from "./categories/statistics.ts";
import { techCategory } from "./categories/tech.ts";

export const categories: Category[] = [
  mathCategory,
  financeCategory,
  businessCategory,
  constructionCategory,
  healthCategory,
  datetimeCategory,
  electricalCategory,
  educationCategory,
  engineeringCategory,
  realestateCategory,
  automotiveCategory,
  cookingCategory,
  statisticsCategory,
  techCategory,
];

export const getAllCalculators = () => {
  return categories.flatMap(cat => cat.calculators);
};
