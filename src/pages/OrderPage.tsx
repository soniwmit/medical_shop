import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PageType, WhatsAppOrderFormData } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { generateWhatsAppOrderLink, generateCallLink } from '../utils/whatsapp';
import { MessageSquare, Phone, Upload, ShieldCheck, FileText, CheckCircle2, Clock, MapPin } from 'lucide-react';

interface OrderPageProps {
  setCurrentPage: (page: PageType) => void;
}

export const OrderPage: React.FC<OrderPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Purani Bazar, Paliganj',
    medicineName: '',
    hasPrescription: false,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'As soon as possible'
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        hasPrescription: true,
        prescriptionFileName: file.name
      }));

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPrescriptionPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setPrescriptionPreview(null);
      }
    }
  };

  const removePrescription = () => {
    setFormData((prev) => ({
      ...prev,
      hasPrescription: false,
      prescriptionFileName: ''
    }));
    setPrescriptionPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppOrderLink(formData);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen">
      <Breadcrumbs currentPage="order" setCurrentPage={setCurrentPage} pageTitle="Online WhatsApp Medicine Order" />

      {/* Hero Header */}
      <section className="py-12 bg-[#0A8F6A] text-white text-center space-y-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold text-white uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-md">
            Convenient Home & Pickup Order
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-outfit mt-2">
            Order Medicines via WhatsApp
          </h1>
          <p className="text-xs sm:text-sm text-emerald-50 max-w-2xl mx-auto">
            Upload your prescription photo or write down required medicines. Get fast stock confirmation from Medical Shop, Purani Bazar, Paliganj.
          </p>
        </div>
      </section>

      {/* Main Order Form Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6">
            
            <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">100% Genuine Medicine Assurance</p>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-300 mt-0.5">
                  Your prescription is reviewed by our qualified pharmacist. Valid doctor prescription is required for Schedule H prescription drugs.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Customer Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9204447667"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. ramesh@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Delivery / Area Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Purani Bazar / Near High School, Paliganj"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Medicine Name & Required Quantity <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="List your medicines (e.g. Paracetamol 650mg - 2 strips, Vitamin C tablets, Baby wipes)"
                  value={formData.medicineName}
                  onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              {/* Upload Prescription */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Upload Prescription Document / Photo
                </label>

                {formData.hasPrescription ? (
                  <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 rounded-xl p-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300">
                      <FileText className="w-4 h-4 text-emerald-600" />
                      <span className="font-semibold">{formData.prescriptionFileName}</span>
                    </div>
                    <button
                      type="button"
                      onClick={removePrescription}
                      className="text-xs text-rose-600 font-bold hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer bg-white dark:bg-slate-900 transition-colors">
                    <Upload className="w-6 h-6 text-emerald-600 mb-1" />
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Click to upload doctor prescription
                    </span>
                    <span className="text-[10px] text-slate-400">Supports JPG, PNG, PDF</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                )}

                {prescriptionPreview && (
                  <div className="mt-3 text-center">
                    <img
                      src={prescriptionPreview}
                      alt="Prescription document preview"
                      className="max-h-32 mx-auto rounded-xl border border-slate-300 shadow-sm"
                    />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredDeliveryTime}
                    onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                    <option value="Store Pickup in 30 mins">Store Pickup in 30 mins</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Additional Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Substitute allowed if main brand unavailable"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="bg-[#0A8F6A] hover:bg-[#087758] text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-[#0A8F6A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send via WhatsApp</span>
                </button>

                <a
                  href={generateCallLink()}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Store ({BUSINESS_INFO.phone})</span>
                </a>
              </div>

            </form>

          </div>

        </div>
      </section>
    </div>
  );
};
