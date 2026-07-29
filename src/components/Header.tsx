import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Menu,
  X,
  Search,
  Moon,
  Sun,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { generateCallLink, generateGeneralWhatsAppLink } from '../utils/whatsapp';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenOrderModal: (medicineName?: string) => void;
  onOpenSearchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  darkMode,
  setDarkMode,
  onOpenOrderModal,
  onOpenSearchModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'order', label: 'Order Online' }
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Top Banner - Emergency & Location bar */}
      <div className="bg-slate-900 text-white text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0A8F6A]" />
              {BUSINESS_INFO.location}
            </span>
            <span className="hidden md:inline-block text-slate-700">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#0A8F6A]" />
              {BUSINESS_INFO.workingHours.timing}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-[#0A8F6A]/10 text-emerald-400 border border-[#0A8F6A]/30 px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#0A8F6A]" /> 100% Genuine Medicines
            </span>
            <a
              href={generateCallLink()}
              className="font-bold hover:underline flex items-center gap-1 text-white hover:text-emerald-300"
            >
              <Phone className="w-3 h-3 text-[#0A8F6A]" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo & Brand Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0A8F6A] text-white flex items-center justify-center font-bold text-xl shadow-md shadow-[#0A8F6A]/20 group-hover:scale-105 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight font-outfit">
              Medical Shop
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
              Pharmacy & Healthcare
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors duration-150 cursor-pointer ${
                currentPage === item.id
                  ? 'text-[#0A8F6A] font-bold border-b-2 border-[#0A8F6A] pb-0.5'
                  : 'hover:text-[#0A8F6A]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons: Search, Dark Toggle, WhatsApp Order & Call */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Search Trigger */}
          <button
            onClick={onOpenSearchModal}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-[#0A8F6A] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            title="Search Medicines & Products"
            aria-label="Search Medicines"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-[#0A8F6A] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Call Now Button */}
          <a
            href={generateCallLink()}
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#0A8F6A]" />
            <span>9204447667</span>
          </a>

          {/* WhatsApp Order Button */}
          <button
            onClick={() => onOpenOrderModal()}
            className="hidden sm:flex items-center gap-2 bg-[#0A8F6A] hover:bg-[#087758] active:scale-95 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-[#0A8F6A]/20 transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Order via WhatsApp</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <button
              onClick={() => {
                onOpenOrderModal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold text-xs py-2.5 rounded-lg shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Order
            </button>
            <a
              href={generateCallLink()}
              className="flex items-center justify-center gap-2 bg-slate-800 text-white font-semibold text-xs py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Now
            </a>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left py-2.5 px-3 text-sm font-semibold rounded-lg flex items-center justify-between ${
                  currentPage === item.id
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                {currentPage === item.id && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>}
              </button>
            ))}
          </div>

          <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
            <span>Location: Purani Bazar, Paliganj</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">7:00 AM - 10:00 PM</span>
          </div>
        </div>
      )}
    </header>
  );
};
