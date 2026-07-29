import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageType, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/businessData';
import { SERVICES_DATA as SERVICES_LIST } from '../data/businessData';
import { Check, ArrowRight, MessageSquare, Phone, Search, ShieldCheck } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';
import { generateCallLink } from '../utils/whatsapp';

interface ServicesPageProps {
  setCurrentPage: (page: PageType) => void;
  onOpenOrderModal: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage, onOpenOrderModal }) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredServices = SERVICES_LIST.filter((s) =>
    s.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
    s.features.some((f) => f.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <Breadcrumbs currentPage="services" setCurrentPage={setCurrentPage} pageTitle="Healthcare Services" />

      {/* Hero Header */}
      <section className="py-12 bg-[#0A8F6A] text-white text-center space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold text-white uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-md">
            Dedicated Pharmacy Care
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit mt-2">
            Our Healthcare Services
          </h1>
          <p className="text-xs sm:text-sm text-emerald-50 max-w-2xl mx-auto">
            Comprehensive prescription, OTC, baby care, surgical supplies, and monitoring device fulfillment at Purani Bazar, Paliganj.
          </p>
        </div>
      </section>

      {/* Services Grid & Search */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Search Filter */}
          <div className="max-w-md mx-auto mb-10 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. Diabetic, Baby care, First Aid)..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    {service.badge && (
                      <span className="absolute top-3 right-3 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                        {service.badge}
                      </span>
                    )}

                    <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white font-outfit">
                      {service.title}
                    </h3>
                  </div>

                  <div className="p-5 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                        Key Features & Offerings:
                      </h4>
                      <ul className="space-y-1.5">
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenOrderModal(service.title)}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Inquire / Order {service.title}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <ContactCTA onOpenOrderModal={() => onOpenOrderModal()} />
    </div>
  );
};
