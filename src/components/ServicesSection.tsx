import React from 'react';
import {
  Pill,
  FileCheck,
  Stethoscope,
  Baby,
  Sparkles,
  Activity,
  HeartPulse,
  Cross,
  Scissors,
  Shield,
  Cpu,
  Home,
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES_DATA } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenOrderModal: (serviceTitle?: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Pill: <Pill className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  FileCheck: <FileCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Baby: <Baby className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Activity: <Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Cross: <Cross className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Scissors: <Scissors className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Shield: <Shield className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
  Home: <Home className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
            Our Complete Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Comprehensive Pharmacy & Healthcare Offerings
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            From daily prescription fills to surgical disposables and baby care essentials.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-[#0A8F6A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow text-[#0A8F6A]">
                      {serviceIconMap[service.iconName] || <Pill className="w-5 h-5 text-[#0A8F6A]" />}
                    </div>
                    <h3 className="text-base font-bold text-white font-outfit drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#0A8F6A] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenOrderModal(service.title)}
                  className="w-full bg-slate-100 hover:bg-[#0A8F6A] dark:bg-slate-700/60 dark:hover:bg-[#0A8F6A] text-slate-800 hover:text-white dark:text-slate-200 font-semibold text-xs py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                >
                  <span>Inquire / Order {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
