import React from 'react';
import { CATEGORIES_DATA } from '../data/businessData';
import { CategoryItem } from '../types';
import { Pill, Droplets, Syringe, Monitor, Dumbbell, Sparkles, Sun, Baby, Shield, Activity, Heart } from 'lucide-react';

interface FeaturedCategoriesProps {
  onSelectCategory: (categoryName: string) => void;
}

const catIconMap: Record<string, React.ReactNode> = {
  Pill: <Pill className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Capsule: <Pill className="w-5 h-5 text-emerald-600 dark:text-emerald-400 rotate-45" />,
  Droplets: <Droplets className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Syringe: <Syringe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Monitor: <Monitor className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Dumbbell: <Dumbbell className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Sun: <Sun className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Baby: <Baby className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Shield: <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Activity: <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Heart: <Heart className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
};

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
            Featured Product Categories
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Browse by Healthcare Category
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Click any category to search available items or send a quick stock inquiry.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.name)}
              className="group bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/40 border border-slate-200/80 dark:border-slate-700/80 hover:border-[#0A8F6A]/40 dark:hover:border-[#0A8F6A]/50 p-4 rounded-[24px] text-center transition-all duration-200 hover:shadow-lg flex flex-col items-center justify-between cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform text-[#0A8F6A]">
                {catIconMap[cat.icon] || <Pill className="w-5 h-5 text-[#0A8F6A]" />}
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-outfit group-hover:text-[#0A8F6A] dark:group-hover:text-emerald-300 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1">
                  {cat.itemCount}+ Items In Stock
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
