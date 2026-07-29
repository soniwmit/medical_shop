import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageType } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { generateCallLink, generateGeneralWhatsAppLink } from '../utils/whatsapp';

interface ContactPageProps {
  setCurrentPage: (page: PageType) => void;
  onOpenOrderModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage, onOpenOrderModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Contact Form Submission - Medical Shop Website*
----------------------------------
*Name:* ${formState.name}
*Phone:* ${formState.phone}
*Email:* ${formState.email || 'N/A'}
*Message / Inquiry:* ${formState.message}`;

    const cleanPhone = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
    const targetPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;
    const link = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;

    window.open(link, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <Breadcrumbs currentPage="contact" setCurrentPage={setCurrentPage} pageTitle="Contact Us & Store Location" />

      {/* Hero Header */}
      <section className="py-12 bg-[#0A8F6A] text-white text-center space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold text-white uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-md">
            Purani Bazar, Paliganj
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit mt-2">
            Contact Medical Shop
          </h1>
          <p className="text-xs sm:text-sm text-emerald-50 max-w-2xl mx-auto">
            Have questions about medicine availability or prescriptions? Call, WhatsApp, or visit our store.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 p-6 rounded-2xl space-y-5">
                <h2 className="text-xl font-bold font-outfit text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3">
                  Store Contact Information
                </h2>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Store Address</h3>
                      <p className="text-slate-600 dark:text-slate-300 mt-0.5">{BUSINESS_INFO.location}</p>
                      <p className="text-xs text-slate-400">Pincode: {BUSINESS_INFO.pincode}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Phone & Emergency Line</h3>
                      <a href={generateCallLink()} className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline">
                        +91 {BUSINESS_INFO.phone}
                      </a>
                      <p className="text-xs text-slate-400">Direct call for urgent medicine inquiry</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">WhatsApp Order Number</h3>
                      <a
                        href={generateGeneralWhatsAppLink()}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                      >
                        +91 {BUSINESS_INFO.whatsapp}
                      </a>
                      <p className="text-xs text-slate-400">Send prescription photo 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">Working Hours</h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold">{BUSINESS_INFO.workingHours.timing}</p>
                      <p className="text-xs text-slate-400">{BUSINESS_INFO.workingHours.days}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Emergency Call Box */}
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-5 rounded-2xl shadow-lg space-y-2">
                <div className="flex items-center gap-2 font-bold font-outfit text-sm">
                  <span>24/7 Emergency Medicine Need?</span>
                </div>
                <p className="text-xs text-amber-100">
                  Call us immediately at <strong>9204447667</strong> for life-saving drugs or emergency surgical items.
                </p>
                <a
                  href={generateCallLink()}
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-xs py-2 px-4 rounded-xl mt-1 hover:bg-slate-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" /> Call Emergency Line
                </a>
              </div>

            </div>

            {/* Quick Inquiry Form Column */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
              <div>
                <h2 className="text-xl font-bold font-outfit text-slate-900 dark:text-white">
                  Send Us a Message
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Fill in your query and click submit to send directly to our WhatsApp support team.
                </p>
              </div>

              {submitted && (
                <div className="bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 p-4 rounded-xl text-xs text-emerald-800 dark:text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thank you! Your message has been forwarded to Medical Shop on WhatsApp.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9204447667"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Inquiry <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your questions about medicine availability, prices, or store directions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A8F6A] hover:bg-[#087758] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-[#0A8F6A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>

            </div>

          </div>

          {/* Map Preview */}
          <div className="mt-12 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 h-80">
            <iframe
              title="Paliganj Medical Store Google Map"
              src={BUSINESS_INFO.mapCoordinates.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};
