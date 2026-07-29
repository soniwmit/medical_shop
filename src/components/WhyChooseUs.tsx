import React from 'react';
import {
  ShieldCheck,
  UserCheck,
  Tag,
  Zap,
  FileText,
  HeartPulse,
  MapPin,
  MessageSquare
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/businessData';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  UserCheck: <UserCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Tag: <Tag className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Zap: <Zap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  FileText: <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Your Healthcare Partner in Purani Bazar, Paliganj
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            We blend pharmaceutical expertise with neighborhood trust to keep your family healthy and safe.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-5 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-emerald-600/5 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-emerald-600" />}
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 font-outfit">
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
