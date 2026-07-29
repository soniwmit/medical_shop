import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageType } from '../types';
import { OWNER_MESSAGE, TIMELINE, GALLERY_ITEMS, BUSINESS_INFO } from '../data/businessData';
import { ShieldCheck, Target, Eye, Heart, Award, CheckCircle, Clock, MapPin, UserCheck, MessageSquare } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

interface AboutPageProps {
  setCurrentPage: (page: PageType) => void;
  onOpenOrderModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage, onOpenOrderModal }) => {
  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <Breadcrumbs currentPage="about" setCurrentPage={setCurrentPage} pageTitle="About Our Pharmacy" />

      {/* Hero Banner */}
      <section className="py-12 bg-[#0A8F6A] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-3">
          <span className="text-xs font-bold text-white uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-md">
            Est. Purani Bazar, Paliganj
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit">
            About Medical Shop
          </h1>
          <p className="text-xs sm:text-sm text-emerald-50 max-w-2xl mx-auto">
            Your Trusted Neighborhood Pharmacy for 100% Genuine Medicines, Surgical Supplies & Healthcare Essentials in Bihar 801110.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="py-16 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-outfit text-slate-900 dark:text-white">
                Serving Paliganj with Care, Honesty & Dedication
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Located in the heart of Purani Bazar, Paliganj, <strong>Medical Shop</strong> was founded with a singular commitment: to make reliable, 100% authentic pharmaceuticals and emergency medical items readily accessible to every local family.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Over the years, we have expanded our inventory from daily prescription pills to cold-chain stored insulin, pediatric nutrition, surgical disposables, diabetic monitors, and personal hygiene products—all while keeping prices affordable and transparent.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Licensed Chemist & Druggist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Call Support on 9204447667</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cold Refrigerator Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Digital WhatsApp Ordering</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800"
                  alt="Medical Shop Store Front Purani Bazar"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs">
                  <p className="font-bold text-emerald-300">Medical Shop Store Front</p>
                  <p className="text-slate-300">Purani Bazar, Paliganj, Bihar 801110</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mission */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-6 rounded-2xl shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">Our Mission</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To deliver 100% genuine medicines and healthcare essentials with accurate guidance, rapid availability, and compassionate service to every resident in Purani Bazar, Paliganj.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-6 rounded-2xl shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                To be the most trusted, transparent, and technology-friendly community pharmacy in Bihar, ensuring no patient ever suffers due to medicine unavailability or fake supplies.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-6 rounded-2xl shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-outfit text-slate-900 dark:text-white">Our Values</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Integrity in sourcing, empathy for elderly and chronic patients, fair pricing with zero hidden markups, and unwavering adherence to pharmaceutical safety standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Owner Message Section */}
      <section className="py-16 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden border border-slate-800">
            <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
              <img
                src={OWNER_MESSAGE.avatar}
                alt={OWNER_MESSAGE.ownerName}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-emerald-400 shrink-0 shadow-lg"
              />
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded border border-emerald-800">
                  Message from Management
                </span>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{OWNER_MESSAGE.message}"
                </p>
                <div className="pt-1">
                  <h4 className="text-sm font-bold text-white font-outfit">{OWNER_MESSAGE.ownerName}</h4>
                  <p className="text-xs text-emerald-400">{OWNER_MESSAGE.role} • Purani Bazar, Paliganj</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">
              Growth & Milestones in Paliganj
            </h2>
          </div>

          <div className="space-y-6">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-20 shrink-0 text-right font-bold text-xs text-emerald-600 dark:text-emerald-400 pt-1 font-mono">
                  {item.year}
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1.5 shrink-0 ring-4 ring-emerald-100 dark:ring-emerald-950"></div>
                <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-4 rounded-xl flex-1 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white font-outfit">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Photos Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
              Store Preview
            </span>
            <h2 className="text-2xl font-bold font-outfit text-slate-900 dark:text-white">
              Take a Glance Inside Medical Shop
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GALLERY_ITEMS.slice(0, 3).map((img) => (
              <div key={img.id} className="relative rounded-xl overflow-hidden shadow-sm group">
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <p className="absolute bottom-3 left-3 text-white text-xs font-bold font-outfit">
                  {img.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA onOpenOrderModal={onOpenOrderModal} />
    </div>
  );
};
