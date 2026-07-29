import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { useTracker } from './hooks/useTracker';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { WhatsAppModal } from './components/WhatsAppModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { OrderPage } from './pages/OrderPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
    if (['about', 'services', 'gallery', 'contact', 'order'].includes(path)) {
      return path as PageType;
    }
    return 'home';
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');

  // Global Tracking Hook for SPA page changes
  useTracker(currentPage);

  useEffect(() => {
    const targetPath = currentPage === 'home' ? '/' : `/${currentPage}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
      if (['about', 'services', 'gallery', 'contact', 'order'].includes(path)) {
        setCurrentPage(path as PageType);
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleOpenOrderModal = (medicineName?: string) => {
    if (medicineName) {
      setPrefilledMedicine(medicineName);
    } else {
      setPrefilledMedicine('');
    }
    setIsOrderModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onOpenOrderModal={handleOpenOrderModal}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
          />
        );
      case 'services':
        return (
          <ServicesPage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
          />
        );
      case 'contact':
        return (
          <ContactPage
            setCurrentPage={setCurrentPage}
            onOpenOrderModal={handleOpenOrderModal}
          />
        );
      case 'order':
        return <OrderPage setCurrentPage={setCurrentPage} />;
      default:
        return (
          <HomePage
            onOpenOrderModal={handleOpenOrderModal}
            onOpenSearchModal={() => setIsSearchModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
      
      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenOrderModal={handleOpenOrderModal}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* Persistent Floating Quick Call & WhatsApp Buttons */}
      <FloatingActions onOpenOrderModal={handleOpenOrderModal} />

      {/* WhatsApp Order & Inquiry Popup Modal */}
      <WhatsAppModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        prefilledMedicine={prefilledMedicine}
      />

      {/* Interactive Medicine Search Catalog Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectMedicineForOrder={(medName) => handleOpenOrderModal(medName)}
      />

    </div>
  );
}
