import React from 'react';
import { CalculationHistoryItem, CalculatorItem } from '../types';
import { formatCalculatorResult } from '../utils/formatResult';
import { X, History, Trash2, ArrowRight } from 'lucide-react';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: CalculationHistoryItem[];
  onClearHistory: () => void;
  allCalculators: CalculatorItem[];
  onSelectCalculator: (calc: CalculatorItem) => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onClearHistory,
  allCalculators,
  onSelectCalculator,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <History className="w-5 h-5 text-teal-500" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Recent Calculation History ({history.length})
            </h3>
          </div>
          
          <div className="flex items-center gap-2">
            {history.length > 0 && (
              <button
                onClick={onClearHistory}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 dark:bg-rose-950/40 text-rose-600 hover:bg-rose-100 rounded-xl text-xs font-semibold transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-xl"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {history.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <History className="w-10 h-10 mx-auto text-slate-300 dark:text-slate-700" />
              <p className="text-sm font-medium">No calculation history recorded yet.</p>
              <p className="text-xs text-slate-500">Your recent calculations will appear here automatically.</p>
            </div>
          ) : (
            history.map((item) => {
              const calc = allCalculators.find((c) => c.id === item.calculatorId);
              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl hover:border-teal-500 transition-all group"
                >
                  <div
                    className="flex-1 pr-4 cursor-pointer"
                    onClick={() => {
                      if (calc) {
                        onSelectCalculator(calc);
                        onClose();
                      }
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                        {item.calculatorName}
                      </span>
                      <span className="text-[10px] text-slate-400">· {item.categoryName}</span>
                    </div>
                    <div className="text-sm font-mono font-bold text-slate-900 dark:text-white">
                      Result: {formatCalculatorResult(item.result, item.calculatorId)}
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </span>
                  </div>

                  {calc && (
                    <button
                      onClick={() => {
                        onSelectCalculator(calc);
                        onClose();
                      }}
                      className="p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl transition-colors shrink-0"
                      title="Open Calculator"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
