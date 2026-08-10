import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  Heart,
  FileText
} from 'lucide-react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { generateCallLink, generateGeneralWhatsAppLink } from '../utils/whatsapp';

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenOrderModal }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNav = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-[#0A8F6A]/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-outfit">Medical Shop</h3>
                <p className="text-xs text-[#0A8F6A] font-medium uppercase tracking-wider">Purani Bazar, Paliganj</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Your top-rated neighborhood pharmacy delivering 100% genuine pharmaceuticals, health supplements, baby care and medical equipment in Paliganj, Bihar.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href={generateCallLink()}
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-semibold">+91 {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={generateGeneralWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-slate-200 hover:text-emerald-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-950 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
              </a>

              <div className="flex items-center gap-2.5 text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center text-emerald-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home Page', page: 'home' as PageType },
                { label: 'About Our Pharmacy', page: 'about' as PageType },
                { label: 'Our Healthcare Services', page: 'services' as PageType },
                { label: 'Store Photo Gallery', page: 'gallery' as PageType },
                { label: 'Contact & Store Location', page: 'contact' as PageType },
                { label: 'Online Prescription Order', page: 'order' as PageType }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Medical Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5"><span className="text-emerald-500">•</span> Prescription Medicines</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-500">•</span> OTC Medicines & Pain Care</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-500">•</span> Baby Care & Infant Nutrition</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-500">•</span> Diabetic & BP Monitoring</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-500">•</span> Surgical Supplies & Gloves</li>
              <li className="flex items-center gap-1.5"><span className="text-emerald-500">•</span> Multivitamins & Protein Supplements</li>
            </ul>
          </div>

          {/* Column 4: Store Location & Working Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2.5">
              Store & Hours
            </h4>
            <div className="bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60 text-xs space-y-3">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Store Location:</p>
                  <p className="text-slate-400">{BUSINESS_INFO.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-300 pt-2 border-t border-slate-700/50">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Operating Hours:</p>
                  <p className="text-emerald-300 font-medium">{BUSINESS_INFO.workingHours.timing}</p>
                  <p className="text-[11px] text-slate-400">{BUSINESS_INFO.workingHours.days}</p>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.mapCoordinates.embedUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 font-medium py-1.5 px-3 rounded-lg border border-emerald-500/30 transition-colors text-[11px]"
              >
                <span>View Google Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal links */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">Medical Shop</span>. All Rights Reserved. Located at Purani Bazar, Paliganj, Bihar 801110. Developed by{' '}
           <a href="#" class="wmit-popup-trigger">Developed by WMIT</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => setActiveLegalModal('disclaimer')}
              className="hover:text-emerald-400 transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal Drawer */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 text-slate-200 max-w-xl w-full rounded-2xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveLegalModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            {activeLegalModal === 'privacy' && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Privacy Policy</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  At Medical Shop, Purani Bazar, Paliganj, we respect your health privacy. Any customer details, phone numbers, or prescriptions shared via WhatsApp or web form are strictly used for dispensing your requested medicines and contacting you regarding your order.
                </p>
                <p className="text-xs text-slate-400">
                  We never share your personal health data with third-party advertisers.
                </p>
              </div>
            )}

            {activeLegalModal === 'terms' && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Terms & Conditions</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  1. Doctor prescriptions are mandatory for Schedule H / H1 drugs in compliance with Indian drug regulations.
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  2. All prices mentioned are inclusive of applicable taxes. Discounts apply at the discretion of Medical Shop store management.
                </p>
              </div>
            )}

            {activeLegalModal === 'disclaimer' && (
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Medical Disclaimer</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  The content on this website is provided for informational and local store connectivity purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified physician regarding any medical condition.
                </p>
              </div>
            )}

            <button
              onClick={() => setActiveLegalModal(null)}
              className="mt-5 w-full bg-emerald-600 text-white font-semibold text-xs py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
