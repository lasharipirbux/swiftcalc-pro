export interface CalculatorItem {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  tags?: string[];
  inputs: {
    id: string;
    label: string;
    type: 'number' | 'text' | 'select' | 'range' | 'date';
    defaultValue: number | string;
    options?: { label: string; value: string | number }[];
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
  }[];
  calculate: (values: Record<string, any>) => {
    result: string | number;
    secondaryResult?: string | number;
    note?: string;
    steps?: string[];
    formula?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  description: string;
  color: string;
  calculators: CalculatorItem[];
}

export interface CalculationHistoryItem {
  id: string;
  calculatorId: string;
  calculatorName: string;
  categoryName: string;
  inputs: Record<string, any>;
  result: string | number;
  timestamp: number;
}
