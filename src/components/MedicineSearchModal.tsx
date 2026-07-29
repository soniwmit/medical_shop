import React, { useState } from 'react';
import { Search, X, Pill, Check, Tag, AlertCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { FEATURED_MEDICINES, CATEGORIES_DATA } from '../data/businessData';
import { MedicineItem } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineForOrder: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicineForOrder
}) => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const filteredMedicines = FEATURED_MEDICINES.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      item.uses.some((u) => u.toLowerCase().includes(query.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || item.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden relative my-auto flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-outfit">
                Search Medicine & Product Catalog
              </h3>
              <p className="text-xs text-slate-500">
                Medical Shop • Purani Bazar, Paliganj
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar & Category Filters */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              placeholder="Search by name, symptom (e.g., Fever, Cough, BP, Diabetes, Baby)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Categories Filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1 rounded-full font-medium whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#0A8F6A] text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              All Items
            </button>
            {['Tablets', 'Capsules', 'Syrups', 'Diabetic Care', 'Medical Equipment', 'Baby Products', 'Orthopedic Support'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0A8F6A] text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {filteredMedicines.length === 0 ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                No matching medicines found in sample preview list.
              </p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We maintain over 5,000+ medicines in stock at Purani Bazar. Click below to inquire directly about "{query}".
              </p>
              <button
                onClick={() => {
                  onSelectMedicineForOrder(query || 'Inquiry for unlisted medicine');
                  onClose();
                }}
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold text-xs py-2 px-4 rounded-xl shadow"
              >
                Inquire "{query}" on WhatsApp <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            filteredMedicines.map((med) => (
              <div
                key={med.id}
                className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-xl p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:border-emerald-500/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={med.image}
                    alt={med.name}
                    className="w-14 h-14 object-cover rounded-lg border border-slate-200 shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {med.name}
                      </h4>
                      <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                        {med.category}
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                      {med.description}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300 mt-1">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{med.price}</span>
                      {med.mrp && <span className="line-through text-slate-400 text-[10px]">{med.mrp}</span>}
                      {med.discount && <span className="text-amber-600 font-semibold text-[10px]">{med.discount}</span>}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectMedicineForOrder(med.name);
                    onClose();
                  }}
                  className="w-full sm:w-auto bg-[#0A8F6A] hover:bg-[#087758] text-white font-semibold text-xs py-2 px-3.5 rounded-xl shadow-sm flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-100 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500">
          📍 Store Location: Purani Bazar, Paliganj, Bihar 801110 • Contact: 9204447667
        </div>

      </div>
    </div>
  );
};
