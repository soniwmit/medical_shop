export type PageType = 'home' | 'about' | 'services' | 'gallery' | 'contact' | 'order';

export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  location: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  workingHours: {
    days: string;
    timing: string;
    emergency: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
    embedUrl: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  image: string;
  badge?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  itemCount: number;
  featuredImage: string;
}

export interface MedicineItem {
  id: string;
  name: string;
  category: string;
  description: string;
  prescriptionRequired: boolean;
  mrp?: string;
  price?: string;
  discount?: string;
  inStock: boolean;
  image: string;
  uses: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'prescription' | 'order' | 'delivery';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'shelves' | 'products' | 'equipment' | 'customers' | 'staff';
  image: string;
  description: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: boolean;
  prescriptionFileName?: string;
  message: string;
  preferredDeliveryTime: string;
}
