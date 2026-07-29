import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageType } from '../types';

interface BreadcrumbsProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  pageTitle: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentPage,
  setCurrentPage,
  pageTitle
}) => {
  return (
    <nav className="bg-slate-100/80 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400">
        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1 transition-colors cursor-pointer"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </button>

        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

        <span className="text-emerald-600 dark:text-emerald-400 font-semibold capitalize">
          {pageTitle}
        </span>
      </div>
    </nav>
  );
};
