import React from 'react';
import { Award, CheckCircle2, Clock, Smile, Percent, MapPin, Users, PackageCheck, ShieldCheck } from 'lucide-react';
import { TRUST_REASONS } from '../data/businessData';

const trustIconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Clock: <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Smile: <Smile className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  Percent: <Percent className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
  MapPin: <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
};

export const WhyTrustUs: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute -top-10 left-1/3 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800/80">
            Why Customers Trust Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-outfit">
            Built on Integrity, Quality & Community Care
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Purani Bazar, Paliganj's most dependable pharmacy for everyday healthcare needs.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TRUST_REASONS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/70 border border-slate-700/80 p-6 rounded-[28px] flex items-start gap-4 hover:border-[#0A8F6A]/50 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 text-[#0A8F6A]">
                {trustIconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-[#0A8F6A]" />}
              </div>

              <div>
                <h3 className="text-base font-bold text-white font-outfit mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metric Counters Banner */}
        <div className="bg-slate-800/90 border border-slate-700 p-6 sm:p-8 rounded-[28px] grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0A8F6A] font-outfit">10,000+</p>
            <p className="text-xs text-slate-300 mt-1">Satisfied Patients & Families</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-300 font-outfit">100%</p>
            <p className="text-xs text-slate-300 mt-1">Genuine Sourced Medicines</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#0A8F6A] font-outfit">5,000+</p>
            <p className="text-xs text-slate-300 mt-1">Medicines & Healthcare SKUs</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-outfit">7 Days</p>
            <p className="text-xs text-slate-300 mt-1">Open 7:00 AM - 10:00 PM</p>
          </div>
        </div>

      </div>
    </section>
  );
};
