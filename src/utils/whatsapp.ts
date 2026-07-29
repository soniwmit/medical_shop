import { BUSINESS_INFO } from '../data/businessData';
import { WhatsAppOrderFormData } from '../types';

/**
 * Creates a formatted WhatsApp link with prefilled user order details.
 */
export function generateWhatsAppOrderLink(formData: WhatsAppOrderFormData): string {
  const cleanPhone = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
  // Format Indian phone number with 91 prefix
  const targetPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

  const text = `*Medical Shop - Medicine Order / Inquiry*
----------------------------------
*Customer Name:* ${formData.customerName || 'N/A'}
*Mobile Number:* ${formData.mobileNumber || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Address:* ${formData.address || 'Purani Bazar / Paliganj Area'}

*Medicine / Products Required:*
${formData.medicineName || 'As attached in prescription'}

*Prescription Uploaded:* ${formData.hasPrescription ? 'YES (Will attach image/doc)' : 'NO'}
${formData.prescriptionFileName ? `*File Name:* ${formData.prescriptionFileName}` : ''}

*Preferred Delivery / Pickup Time:* ${formData.preferredDeliveryTime || 'As soon as possible'}

*Message / Notes:*
${formData.message || 'Please confirm availability, total price, and pickup time.'}
----------------------------------
_Sent via Medical Shop Website_`;

  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates a simple direct WhatsApp chat link for general inquiries.
 */
export function generateGeneralWhatsAppLink(customMessage?: string): string {
  const cleanPhone = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
  const targetPhone = cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone;

  const msg = customMessage || `Hello Medical Shop, I have an inquiry regarding medicines available at Purani Bazar, Paliganj. Please guide me.`;
  return `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Formats tel: link for phone calls.
 */
export function generateCallLink(): string {
  const cleanPhone = BUSINESS_INFO.phone.replace(/\D/g, '');
  return `tel:+91${cleanPhone}`;
}
