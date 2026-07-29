import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { generateCallLink, generateGeneralWhatsAppLink } from '../utils/whatsapp';

interface ContactCTAProps {
  onOpenOrderModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0A8F6A] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 shadow-2xl shadow-[#0A8F6A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
            <div className="space-y-2">
              <span className="bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md">
                Fast Local Response • Purani Bazar
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-outfit text-white">
                Need Medicines Urgently?
              </h2>
              <p className="text-xs sm:text-sm text-emerald-50 max-w-xl">
                Call us or WhatsApp us now. Send your prescription photo for instant price and stock confirmation in Paliganj.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#0A8F6A] font-bold text-xs sm:text-sm py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current text-[#0A8F6A]" />
                <span>WhatsApp Prescription</span>
              </button>

              <a
                href={generateCallLink()}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0A8F6A]" />
                <span>Call ({BUSINESS_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
