import React from 'react';
import { Category } from '../types';
import { getAllCalculators } from '../data/calculatorsData';
import { 
  Calculator, DollarSign, Briefcase, Home, HeartPulse, 
  Calendar, RefreshCw, Zap, GraduationCap, Cpu, Building, 
  Car, Utensils, BarChart3, Wifi, Layers
} from 'lucide-react';

interface SidebarProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (catId: string | null) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const totalCount = getAllCalculators().length;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator': return <Calculator className="w-4 h-4" />;
      case 'DollarSign': return <DollarSign className="w-4 h-4" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4" />;
      case 'Home': return <Home className="w-4 h-4" />;
      case 'HeartPulse': return <HeartPulse className="w-4 h-4" />;
      case 'Calendar': return <Calendar className="w-4 h-4" />;
      case 'RefreshCw': return <RefreshCw className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Building': return <Building className="w-4 h-4" />;
      case 'Car': return <Car className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4" />;
      case 'Wifi': return <Wifi className="w-4 h-4" />;
      default: return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-2">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 px-2">
          Categories ({categories.length})
        </h3>
        <nav className="space-y-1">
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              selectedCategory === null
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <Layers className="w-4 h-4" />
              <span>All Calculators</span>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === null ? 'bg-emerald-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}>
              {totalCount}
            </span>
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3 truncate">
                  <span className={`${isSelected ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`}>
                    {getIcon(cat.iconName)}
                  </span>
                  <span className="truncate">{cat.name}</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                  isSelected ? 'bg-emerald-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {cat.calculators.length}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
