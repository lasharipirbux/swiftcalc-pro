import React from 'react';
import { CalculatorItem } from '../types';
import { X, Star, ArrowRight } from 'lucide-react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteIds: string[];
  allCalculators: CalculatorItem[];
  onSelectCalculator: (calc: CalculatorItem) => void;
  onRemoveFavorite: (calcId: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favoriteIds,
  allCalculators,
  onSelectCalculator,
  onRemoveFavorite,
}) => {
  if (!isOpen) return null;

  const favCalculators = allCalculators.filter((c) => favoriteIds.includes(c.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Saved Favorite Calculators ({favCalculators.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {favCalculators.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Star className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700" />
              <p className="text-sm font-medium">No favorite calculators saved yet.</p>
              <p className="text-xs text-slate-500">Click the star icon on any calculator to save it here for instant access.</p>
            </div>
          ) : (
            favCalculators.map((calc) => (
              <div
                key={calc.id}
                className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl hover:border-emerald-500 transition-all group"
              >
                <div className="flex-1 pr-4 cursor-pointer" onClick={() => { onSelectCalculator(calc); onClose(); }}>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {calc.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {calc.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onRemoveFavorite(calc.id)}
                    className="p-2 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/30 rounded-xl transition-colors"
                    title="Remove favorite"
                  >
                    <Star className="w-4 h-4 fill-amber-500" />
                  </button>
                  <button
                    onClick={() => { onSelectCalculator(calc); onClose(); }}
                    className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors"
                    title="Open Calculator"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
