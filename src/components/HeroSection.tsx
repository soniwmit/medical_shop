import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { generateCallLink, generateGeneralWhatsAppLink } from '../utils/whatsapp';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
  onOpenSearchModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenOrderModal,
  onOpenSearchModal
}) => {
  return (
    <section className="relative bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-hidden py-12 sm:py-20 border-b border-slate-200/80 dark:border-slate-800">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute -right-20 -top-20 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute -left-20 -bottom-20 w-[400px] h-[400px] bg-emerald-100/60 dark:bg-emerald-900/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Content Side */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-800/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A8F6A]"></span>
              </span>
              Certified Genuine Medicines • Purani Bazar
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-outfit leading-[1.15] tracking-tight">
              Your Trusted <span className="text-[#0A8F6A]">Pharmacy</span> in Paliganj
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              Providing 100% genuine medicines, healthcare products, surgical supplies, and baby care essentials at affordable prices since 1998.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#0A8F6A] hover:bg-[#087758] text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#0A8F6A]/25 transition-all cursor-pointer group"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Order via WhatsApp</span>
                <ArrowRight className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={generateCallLink()}
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0A8F6A]" />
                <span>Call Store</span>
              </a>

              <a
                href={BUSINESS_INFO.mapCoordinates.embedUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#0A8F6A]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Trust Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-200">
                  JD
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                  SK
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-100 text-[#0A8F6A] flex items-center justify-center text-xs font-bold">
                  AR
                </div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium text-left">
                Trusted by <strong className="text-slate-900 dark:text-white">5,000+ local families</strong><br />
                in Paliganj & Purani Bazar.
              </p>
            </div>

          </div>

          {/* Right Side: Clean Minimalism Rounded Feature Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-white dark:bg-slate-800/90 p-6 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700/80 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/60 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white font-outfit text-base">Genuine Meds</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Batch tested and sourced directly from verified pharma manufacturers.
                </p>
              </div>

              {/* Card 2 - Brand Colored Highlight Card */}
              <div className="bg-[#0A8F6A] p-6 rounded-[28px] sm:rounded-[32px] shadow-lg shadow-[#0A8F6A]/20 text-white space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white font-outfit text-base">Fast Local Service</h3>
                <p className="text-xs text-white/90 leading-relaxed">
                  Quick dispensing with priority counter for urgent prescription orders.
                </p>
                <button
                  onClick={onOpenSearchModal}
                  className="mt-1 text-[11px] font-bold bg-white text-[#0A8F6A] px-3.5 py-1.5 rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Search Stock Catalog →
                </button>
              </div>
            </div>

            <div className="space-y-4 sm:pt-6">
              {/* Card 3 */}
              <div className="bg-white dark:bg-slate-800/90 p-6 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700/80 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/60 rounded-2xl flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white font-outfit text-base">Healthcare Devices</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  BP monitors, digital thermometers, nebulizers, and orthopedic supports in stock.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white dark:bg-slate-800/90 p-6 rounded-[28px] sm:rounded-[32px] shadow-sm border border-slate-100 dark:border-slate-700/80 space-y-3 hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl flex items-center justify-center text-[#0A8F6A] dark:text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white font-outfit text-base">Baby & Hygiene</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Premium baby food, diapers, wipes, and skincare range for gentle protection.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
