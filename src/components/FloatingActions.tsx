import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';
import { generateCallLink, generateGeneralWhatsAppLink } from '../utils/whatsapp';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating Call Button */}
      <a
        href={generateCallLink()}
        className="pointer-events-auto flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer border border-slate-700"
        title={`Call ${BUSINESS_INFO.phone}`}
      >
        <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Call: {BUSINESS_INFO.phone}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenOrderModal}
        className="pointer-events-auto relative flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087758] active:scale-95 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-[#0A8F6A]/30 transition-all duration-200 group cursor-pointer"
        title="Quick WhatsApp Order & Prescription"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white"></span>
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Order
        </span>
      </button>

      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 p-2.5 rounded-full shadow-md border border-slate-200 dark:border-slate-700 transition-all cursor-pointer hover:scale-110"
          title="Back To Top"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
