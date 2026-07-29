import React, { useState, useEffect } from 'react';
import {
  X,
  MessageSquare,
  Phone,
  Upload,
  CheckCircle2,
  FileText,
  Clock,
  Sparkles,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { WhatsAppOrderFormData } from '../types';
import { generateWhatsAppOrderLink, generateCallLink } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/businessData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Purani Bazar, Paliganj',
    medicineName: prefilledMedicine,
    hasPrescription: false,
    prescriptionFileName: '',
    message: '',
    preferredDeliveryTime: 'As soon as possible'
  });

  const [prescriptionPreview, setPrescriptionPreview] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledMedicine) {
      setFormData((prev) => ({ ...prev, medicineName: prefilledMedicine }));
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        hasPrescription: true,
        prescriptionFileName: file.name
      }));

      // Create preview if it's an image
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 max-w-xl w-full rounded-2xl shadow-2xl overflow-hidden relative my-auto">
        
        {/* Header */}
        <div className="bg-[#0A8F6A] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-xl">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold font-outfit leading-tight">
                Quick WhatsApp Order & Inquiry
              </h3>
              <p className="text-xs text-emerald-100">
                {BUSINESS_INFO.name} • {BUSINESS_INFO.location}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl p-3 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span>
              Fill out your requirements below. Clicking <strong>Send via WhatsApp</strong> will open WhatsApp with your preformatted order details ready to send!
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Name */}
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
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Mobile Number */}
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
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Email (Optional) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. email@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Delivery / Area Address
              </label>
              <input
                type="text"
                placeholder="e.g. Purani Bazar / Main Road, Paliganj"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Medicine Required */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Medicine / Health Product Required <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              required
              placeholder="List medicine names with strength/quantity (e.g. Paracetamol 650mg - 2 strips, BP monitor, Baby wipes)"
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Upload Prescription Photo / PDF (Optional)
            </label>
            
            {formData.hasPrescription ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-700 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-800 dark:text-emerald-300">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold truncate max-w-[200px]">
                    {formData.prescriptionFileName}
                  </span>
                  <span className="bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-100 text-[10px] px-1.5 py-0.5 rounded">
                    Attached
                  </span>
                </div>
                <button
                  type="button"
                  onClick={removePrescription}
                  className="text-xs text-rose-600 hover:underline font-semibold cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ) : (
              <label className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer bg-slate-50 dark:bg-slate-800/50 hover:bg-emerald-50/50 transition-colors">
                <Upload className="w-5 h-5 text-emerald-600 mb-1" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Click to select prescription image
                </span>
                <span className="text-[10px] text-slate-500">JPG, PNG, PDF max 10MB</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            )}

            {prescriptionPreview && (
              <div className="mt-2 text-center">
                <img
                  src={prescriptionPreview}
                  alt="Prescription preview"
                  className="max-h-24 mx-auto rounded-lg border border-slate-200 shadow-sm"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred Time
              </label>
              <select
                value={formData.preferredDeliveryTime}
                onChange={(e) => setFormData({ ...formData, preferredDeliveryTime: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="As soon as possible">As soon as possible</option>
                <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                <option value="Store Pickup in 30 mins">Store Pickup in 30 mins</option>
              </select>
            </div>

            {/* Extra Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Special Instructions
              </label>
              <input
                type="text"
                placeholder="e.g. Call before coming or check substitute brand"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="submit"
              className="w-full bg-[#0A8F6A] hover:bg-[#087758] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-lg shadow-[#0A8F6A]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={generateCallLink()}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Now ({BUSINESS_INFO.phone})</span>
            </a>
          </div>

          <div className="text-center text-[11px] text-slate-500 pt-1">
            ⚡ Quick Response Guaranteed during store hours (7:00 AM - 10:00 PM)
          </div>

        </form>

      </div>
    </div>
  );
};
