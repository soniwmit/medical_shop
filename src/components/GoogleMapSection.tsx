import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { generateCallLink, generateGeneralWhatsAppLink } from '../utils/whatsapp';

export const GoogleMapSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
            Store Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-outfit">
            Visit Our Medical Store in Paliganj
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Conveniently located at Purani Bazar, Paliganj, Bihar 801110.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-7 rounded-2xl shadow-sm space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-700">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center font-bold text-2xl shadow-md">
                  ✚
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-outfit">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    {BUSINESS_INFO.category}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Store Address</h4>
                    <p className="text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.location}</p>
                    <p className="text-[11px] text-slate-400">Pincode: {BUSINESS_INFO.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Phone & Emergency Contact</h4>
                    <a href={generateCallLink()} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                      +91 {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-slate-400">Call for instant medicine stock check</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Store Timings</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">{BUSINESS_INFO.workingHours.timing}</p>
                    <p className="text-[11px] text-slate-400">{BUSINESS_INFO.workingHours.days}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction & Call Actions */}
            <div className="pt-4 grid grid-cols-2 gap-3 border-t border-slate-100 dark:border-slate-700">
              <a
                href={BUSINESS_INFO.mapCoordinates.embedUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <a
                href={generateCallLink()}
                className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Store</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Map Iframe */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl overflow-hidden shadow-sm min-h-[350px]">
            <iframe
              title="Medical Shop Purani Bazar Paliganj Map"
              src={BUSINESS_INFO.mapCoordinates.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
