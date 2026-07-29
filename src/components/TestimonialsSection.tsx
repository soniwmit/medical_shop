import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/businessData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
            Customer Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            What Our Paliganj Community Says
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Real feedback from local residents, patients, and healthcare practitioners.
          </p>
        </div>

        {/* 6 Animated Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 p-6 rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-[#0A8F6A]/10 dark:text-emerald-400/10 absolute top-4 right-4 pointer-events-none" />

              <div className="space-y-3">
                {/* Star Ratings */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white font-outfit">
                      {t.name}
                    </h4>
                    {t.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100 dark:fill-emerald-950 shrink-0" title="Verified Customer" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t.location} • {t.date}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
