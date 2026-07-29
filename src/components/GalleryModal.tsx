import React from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentItem: GalleryItem | null;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  isOpen,
  onClose,
  currentItem,
  onNext,
  onPrev
}) => {
  if (!isOpen || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto">
        
        {/* Modal Top Bar */}
        <div className="p-4 bg-slate-950 flex items-center justify-between text-white border-b border-slate-800">
          <div>
            <h3 className="text-sm sm:text-base font-bold font-outfit">
              {currentItem.title}
            </h3>
            <p className="text-xs text-emerald-400 capitalize">
              Category: {currentItem.category} • Medical Shop
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="relative bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px]">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[65vh] w-auto object-contain mx-auto"
          />

          {/* Prev Button */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 sm:p-3 rounded-full border border-slate-700 shadow transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-2 sm:p-3 rounded-full border border-slate-700 shadow transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Details */}
        <div className="p-4 bg-slate-950 text-slate-300 text-xs sm:text-sm border-t border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p>{currentItem.description}</p>
          <span className="text-[11px] text-emerald-400 flex items-center gap-1 shrink-0">
            <MapPin className="w-3.5 h-3.5" /> Purani Bazar, Paliganj
          </span>
        </div>

      </div>
    </div>
  );
};
