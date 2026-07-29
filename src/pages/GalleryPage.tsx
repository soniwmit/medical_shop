import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageType, GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/businessData';
import { GalleryModal } from '../components/GalleryModal';
import { ZoomIn, MapPin } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

interface GalleryPageProps {
  setCurrentPage: (page: PageType) => void;
  onOpenOrderModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ setCurrentPage, onOpenOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Store Photos' },
    { id: 'store', label: 'Store Front & Entrance' },
    { id: 'shelves', label: 'Medicine Shelves' },
    { id: 'products', label: 'Healthcare Products' },
    { id: 'equipment', label: 'Medical Devices' },
    { id: 'staff', label: 'Pharmacists & Staff' },
    { id: 'customers', label: 'Customer Service' }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <Breadcrumbs currentPage="gallery" setCurrentPage={setCurrentPage} pageTitle="Store Photo Gallery" />

      {/* Hero Banner */}
      <section className="py-12 bg-[#0A8F6A] text-white text-center space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold text-white uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-md">
            Purani Bazar, Paliganj
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit mt-2">
            Store Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-emerald-50 max-w-2xl mx-auto">
            Explore our modern store setup, medicine shelves, cold-chain storage, and health equipment displays.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl font-semibold cursor-pointer transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0A8F6A] text-white shadow'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Masonry / Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold font-outfit text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    {item.description}
                  </p>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Popup */}
      <GalleryModal
        isOpen={selectedItemIndex !== null}
        onClose={() => setSelectedItemIndex(null)}
        currentItem={selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <ContactCTA onOpenOrderModal={onOpenOrderModal} />
    </div>
  );
};
