import React from 'react';
import { Store, FileSearch, PackageCheck, CreditCard, ArrowRight } from 'lucide-react';
import { WORKING_PROCESS } from '../data/businessData';

const stepIconMap: Record<string, React.ReactNode> = {
  Store: <Store className="w-6 h-6 text-white" />,
  FileSearch: <FileSearch className="w-6 h-6 text-white" />,
  PackageCheck: <PackageCheck className="w-6 h-6 text-white" />,
  CreditCard: <CreditCard className="w-6 h-6 text-white" />
};

export const WorkingProcess: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Simple 4-Step Working Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Getting your authentic medicines at Purani Bazar is fast, convenient, and hassle-free.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKING_PROCESS.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/80 p-6 rounded-[28px] flex flex-col items-center text-center group hover:border-[#0A8F6A]/50 transition-all shadow-sm"
            >
              <span className="absolute top-4 right-4 text-xs font-bold text-slate-400 dark:text-slate-500 font-mono">
                0{item.step}
              </span>

              <div className="w-14 h-14 rounded-2xl bg-[#0A8F6A] flex items-center justify-center shadow-lg shadow-[#0A8F6A]/20 mb-4 group-hover:scale-110 transition-transform">
                {stepIconMap[item.icon] || <Store className="w-6 h-6 text-white" />}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-outfit mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
