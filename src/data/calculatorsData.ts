import { Category } from "../types";
import { mathCategory } from "./categories/math";
import { financeCategory } from "./categories/finance";
import { businessCategory } from "./categories/business";
import { constructionCategory } from "./categories/construction";
import { healthCategory } from "./categories/health";
import { datetimeCategory } from "./categories/datetime";
import { electricalCategory } from "./categories/electrical";
import { educationCategory } from "./categories/education";
import { engineeringCategory } from "./categories/engineering";
import { realestateCategory } from "./categories/realestate";
import { automotiveCategory } from "./categories/automotive";
import { cookingCategory } from "./categories/cooking";
import { statisticsCategory } from "./categories/statistics";
import { techCategory } from "./categories/tech";

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
