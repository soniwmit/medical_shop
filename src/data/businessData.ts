import {
  BusinessInfo,
  ServiceItem,
  CategoryItem,
  MedicineItem,
  Testimonial,
  FAQItem,
  GalleryItem
} from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Medical Shop",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  category: "Pharmacy | Medical Store",
  location: "Purani Bazar, Paliganj, Bihar 801110",
  address: "Purani Bazar, Near Main Market",
  city: "Paliganj",
  state: "Bihar",
  pincode: "801110",
  phone: "9204447667",
  whatsapp: "9204447667",
  email: "contact@medicalshoppaliganj.com",
  workingHours: {
    days: "Monday - Sunday (All 7 Days)",
    timing: "7:00 AM - 10:00 PM",
    emergency: "24/7 Emergency Support Available on Call"
  },
  mapCoordinates: {
    lat: 25.3582,
    lng: 84.8219,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14435.539316410196!2d84.8093155138127!3d25.358241416434455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d338f0e4bbf47%3A0xb36f2f9f8c627581!2sPaliganj%2C%20Bihar%20801110!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  }
};

export const WHY_CHOOSE_US = [
  {
    id: "genuine",
    title: "100% Genuine Medicines",
    desc: "Sourced directly from authorized pharmaceutical distributors & trusted manufacturers.",
    icon: "ShieldCheck"
  },
  {
    id: "staff",
    title: "Experienced Staff",
    desc: "Friendly, knowledgeable pharmacists available to guide you on dosage and usage.",
    icon: "UserCheck"
  },
  {
    id: "affordable",
    title: "Affordable Prices",
    desc: "Fair, transparent pricing with special discounts on healthcare products.",
    icon: "Tag"
  },
  {
    id: "fast",
    title: "Fast Service",
    desc: "Quick medicine pickup, zero long queues, and fast WhatsApp order fulfillment.",
    icon: "Zap"
  },
  {
    id: "prescription",
    title: "Prescription Medicines",
    desc: "Complete stock of life-saving, acute, and chronic disease prescription drugs.",
    icon: "FileText"
  },
  {
    id: "healthcare",
    title: "Healthcare Products",
    desc: "Wide array of wellness, fitness, baby care, personal hygiene and daily essentials.",
    icon: "HeartPulse"
  },
  {
    id: "trusted",
    title: "Trusted Local Pharmacy",
    desc: "Proudly serving thousands of families in Purani Bazar, Paliganj for years.",
    icon: "MapPin"
  },
  {
    id: "whatsapp",
    title: "Easy WhatsApp Support",
    desc: "Send your prescription photo via WhatsApp & get instant availability confirmation.",
    icon: "MessageSquare"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "medicine-sales",
    title: "Medicine Sales",
    description: "Complete inventory of branded & generic pharmaceuticals stored under temperature-controlled conditions.",
    iconName: "Pill",
    features: ["Branded & Generic Medicines", "Cold-chain Maintenance", "Batch Verified Stock"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    badge: "Core Service"
  },
  {
    id: "prescription-medicines",
    title: "Prescription Medicines",
    description: "Accurate dispensing of doctor-prescribed medications with dosage instructions and allergy double-checks.",
    iconName: "FileCheck",
    features: ["Doctor Prescription Review", "Proper Dosage Labeling", "Chronic Medication Supply"],
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=600",
    badge: "Rx Verified"
  },
  {
    id: "otc-medicines",
    title: "OTC Medicines",
    description: "Over-the-counter remedies for cough, cold, fever, pain relief, acidity, digestive care, and minor ailments.",
    iconName: "Stethoscope",
    features: ["Pain Relievers & Analgesics", "Cough & Cold Syrups", "Digestive & Antacid Care"],
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "baby-care",
    title: "Baby Care Products",
    description: "Gentle baby wipes, diapers, infant formula, baby food, baby oils, powders, and skin-safe pediatric care.",
    iconName: "Baby",
    features: ["Dermatologist Tested Products", "Infant Nutrition", "Soft Diapers & Wipes"],
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "personal-care",
    title: "Personal Care Products",
    description: "Skincare creams, soaps, antiseptics, dental hygiene, hair care, and daily wellness items from trusted brands.",
    iconName: "Sparkles",
    features: ["Skin & Body Care", "Oral Hygiene Items", "Antiseptic Soaps & Lotions"],
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "diabetic-care",
    title: "Diabetic Care",
    description: "Glucose meters, test strips, lancets, insulin accessories, sugar-free supplements, and diabetic foot creams.",
    iconName: "Activity",
    features: ["Glucometers & Test Strips", "Insulin Storage Guidance", "Sugar-Free Healthy Snacks"],
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
    badge: "Specialized"
  },
  {
    id: "bp-monitor",
    title: "Blood Pressure Monitor",
    description: "Digital and manual BP monitors, pulse oximeters, thermometers, and nebulizers for home health monitoring.",
    iconName: "HeartPulse",
    features: ["Digital BP Instruments", "Pulse Oximeters", "On-site BP Checking"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "first-aid",
    title: "First Aid Supplies",
    description: "Bandages, gauze rolls, medical tape, antiseptic liquids (Betadine, Dettol), burn ointments, and emergency kits.",
    iconName: "Cross",
    features: ["Emergency First Aid Kits", "Sterile Dressing Supplies", "Burn & Wound Ointments"],
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "surgical-items",
    title: "Surgical Items",
    description: "Medical gloves, surgical masks, syringes, IV sets, urinary catheters, cotton rolls, and hospital disposables.",
    iconName: "Scissors",
    features: ["Sterile Latex Gloves", "Disposable Syringes & IV", "Hospital Grade Disposables"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "health-supplements",
    title: "Health Supplements",
    description: "Multivitamins, Calcium + Vitamin D3, Omega-3 fish oil, whey protein, immunity boosters, and herbal tonics.",
    iconName: "Shield",
    features: ["Nutritional Protein Powders", "Daily Multivitamins", "Immunity Boosters"],
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "medical-devices",
    title: "Medical Devices",
    description: "Nebulizers, steam inhalers, digital thermometers, heating pads, glucometer strips, and orthopedic aids.",
    iconName: "Cpu",
    features: ["Compressor Nebulizers", "Orthopedic Belts & Support", "Electric Heating Pads"],
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1cdb?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "home-care",
    title: "Home Care Products",
    description: "Adult diapers, underpads, bed sore prevention cushions, walking sticks, wheelchairs, and commode chairs.",
    iconName: "Home",
    features: ["Adult Incontinence Care", "Mobility Assistance Aids", "Home Patient Care Essentials"],
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=600"
  }
];

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "tablets",
    name: "Tablets",
    description: "Wide range of oral tablet formulations for fever, pain, infection, and chronic health.",
    icon: "Pill",
    itemCount: 250,
    featuredImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "capsules",
    name: "Capsules",
    description: "Softgel and hard gelatin capsules including antibiotics, multivitamins, and antacids.",
    icon: "Capsule",
    itemCount: 180,
    featuredImage: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "syrups",
    name: "Syrups",
    description: "Pediatric and adult cough syrups, tonic syrups, digestive enzymes, and iron liquids.",
    icon: "Droplets",
    itemCount: 120,
    featuredImage: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "injection",
    name: "Injection",
    description: "Sterile life-saving injectable vials, ampoules, and IV fluids for clinical use.",
    icon: "Syringe",
    itemCount: 95,
    featuredImage: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "medical-equipment",
    name: "Medical Equipment",
    description: "BP monitors, pulse oximeters, digital thermometers, nebulizers, and steam inhalers.",
    icon: "Monitor",
    itemCount: 45,
    featuredImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "protein-supplements",
    name: "Protein Supplements",
    description: "Whey protein, nutritional drinks, sugar-free protein powders for stamina and muscle support.",
    icon: "Dumbbell",
    itemCount: 35,
    featuredImage: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "vitamins",
    name: "Vitamins",
    description: "Vitamin C, D3, B-Complex, Zinc, and daily multivitamin formulations for immunity.",
    icon: "Sparkles",
    itemCount: 85,
    featuredImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "skin-care",
    name: "Skin Care",
    description: "Dermatological creams, antiseptic lotions, moisturizing gels, and acne treatments.",
    icon: "Sun",
    itemCount: 110,
    featuredImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "baby-products",
    name: "Baby Products",
    description: "Baby wipes, baby food, feeding bottles, diapers, and gentle baby soaps.",
    icon: "Baby",
    itemCount: 90,
    featuredImage: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "personal-hygiene",
    name: "Personal Hygiene",
    description: "Hand sanitizers, disinfectants, dental care, intimate washes, and face masks.",
    icon: "Shield",
    itemCount: 75,
    featuredImage: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "orthopedic-support",
    name: "Orthopedic Support",
    description: "Knee braces, lumbar belts, cervical collars, wrist splints, and crepe bandages.",
    icon: "Activity",
    itemCount: 40,
    featuredImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: "diabetic-care-cat",
    name: "Diabetic Care",
    description: "Sugar test strips, lancets, diabetic socks, sugar-free sweeteners, and foot care.",
    icon: "Heart",
    itemCount: 60,
    featuredImage: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=400"
  }
];

export const FEATURED_MEDICINES: MedicineItem[] = [
  {
    id: "m1",
    name: "Paracetamol 650mg Tablets",
    category: "Tablets",
    description: "Effective fever reducer and mild to moderate pain reliever.",
    prescriptionRequired: false,
    mrp: "₹30",
    price: "₹25",
    discount: "16% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300",
    uses: ["Fever", "Headache", "Body Ache", "Cold Relief"]
  },
  {
    id: "m2",
    name: "Multivitamin & Mineral Capsules",
    category: "Capsules",
    description: "Daily energy and immunity booster fortified with Zinc and B-Complex.",
    prescriptionRequired: false,
    mrp: "₹180",
    price: "₹150",
    discount: "17% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=300",
    uses: ["Immunity", "Daily Energy", "Nutritional Support"]
  },
  {
    id: "m3",
    name: "Cough & Cold Herbal Syrup 100ml",
    category: "Syrups",
    description: "Fast-acting non-drowsy formula for dry and chesty cough relief.",
    prescriptionRequired: false,
    mrp: "₹110",
    price: "₹95",
    discount: "13% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=300",
    uses: ["Dry Cough", "Sore Throat", "Congestion"]
  },
  {
    id: "m4",
    name: "Digital Blood Pressure Monitor",
    category: "Medical Equipment",
    description: "Fully automatic arm BP monitor with memory display and irregular heartbeat detection.",
    prescriptionRequired: false,
    mrp: "₹1,850",
    price: "₹1,450",
    discount: "21% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300",
    uses: ["BP Checking", "Pulse Rate", "Home Monitoring"]
  },
  {
    id: "m5",
    name: "Glucometer with 25 Test Strips",
    category: "Diabetic Care",
    description: "Quick 5-second blood sugar level testing kit with painless lancing device.",
    prescriptionRequired: false,
    mrp: "₹1,200",
    price: "₹999",
    discount: "17% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=300",
    uses: ["Blood Glucose Test", "Diabetes Tracking"]
  },
  {
    id: "m6",
    name: "High Protein Health Supplement 400g",
    category: "Protein Supplements",
    description: "Balanced nutritional powder with whey protein, DHA, and essential minerals.",
    prescriptionRequired: false,
    mrp: "₹450",
    price: "₹390",
    discount: "13% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&q=80&w=300",
    uses: ["Muscle Strength", "Post-Illness Recovery", "Vitality"]
  },
  {
    id: "m7",
    name: "Gentle Baby Wipes & Lotion Combo",
    category: "Baby Products",
    description: "99% pure water wipes with gentle baby moisturizer, safe for sensitive skin.",
    prescriptionRequired: false,
    mrp: "₹320",
    price: "₹270",
    discount: "15% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=300",
    uses: ["Infant Hygiene", "Soft Skin Care"]
  },
  {
    id: "m8",
    name: "Adjustable Lumbar Orthopedic Support Belt",
    category: "Orthopedic Support",
    description: "Provides back alignment and pain relief for posture and lower back strains.",
    prescriptionRequired: false,
    mrp: "₹750",
    price: "₹599",
    discount: "20% OFF",
    inStock: true,
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=300",
    uses: ["Lower Back Pain", "Posture Support"]
  }
];

export const TRUST_REASONS = [
  {
    title: "Experienced Pharmacy",
    desc: "Years of dedicated community service with qualified pharmacists managing your health requirements.",
    icon: "Award"
  },
  {
    title: "Quality Medicines",
    desc: "Only authentic, top-tier pharmaceutical brands stored under optimum temperature controls.",
    icon: "CheckCircle2"
  },
  {
    title: "Quick Service",
    desc: "Fast dispensing and quick WhatsApp order response to save your valuable time.",
    icon: "Clock"
  },
  {
    title: "Friendly Staff",
    desc: "Warm, supportive staff offering clear advice on medicine dosage and general wellness.",
    icon: "Smile"
  },
  {
    title: "Reasonable Pricing",
    desc: "Affordable costs and discounts so quality healthcare remains accessible to every family in Paliganj.",
    icon: "Percent"
  },
  {
    title: "Convenient Location",
    desc: "Prime location at Purani Bazar, Paliganj with easy parking and accessible storefront.",
    icon: "MapPin"
  }
];

export const WORKING_PROCESS = [
  {
    step: "01",
    title: "Visit Store or Order Online",
    desc: "Walk into Purani Bazar store or upload prescription on WhatsApp / Website.",
    icon: "Store"
  },
  {
    step: "02",
    title: "Share Prescription",
    desc: "Our qualified pharmacist verifies doctor prescription and checks stock.",
    icon: "FileSearch"
  },
  {
    step: "03",
    title: "Get Genuine Medicines",
    desc: "Medicines are carefully packed with expiry check and clear usage labels.",
    icon: "PackageCheck"
  },
  {
    step: "04",
    title: "Easy Payment & Support",
    desc: "Pay via Cash, UPI, GPay, PhonePe or Paytm with receipt.",
    icon: "CreditCard"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Rajesh Kumar",
    location: "Purani Bazar, Paliganj",
    rating: 5,
    comment: "Medical Shop is my go-to store for all my family's monthly medicines. Always 100% genuine products and very humble behavior of the owner.",
    date: "July 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t2",
    name: "Sunita Devi",
    location: "Paliganj Main Market",
    rating: 5,
    comment: "I regularly order my mother's diabetes medicines and BP strips via WhatsApp. They confirm stock instantly and keep everything ready!",
    date: "June 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t3",
    name: "Amit Sharma",
    location: "Kewra, Paliganj",
    rating: 5,
    comment: "Best medical store in Paliganj. They give genuine advice and always maintain cold storage for injections and insulin.",
    date: "May 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t4",
    name: "Pooja Singh",
    location: "Purani Bazar, Paliganj",
    rating: 5,
    comment: "Got baby care products like diapers, formula milk, and baby wipes at very fair prices. Highly recommended pharmacy for young parents!",
    date: "July 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t5",
    name: "Rameshwar Verma",
    location: "Mahuanganj, Paliganj",
    rating: 5,
    comment: "Very quick service. When emergency arose late in evening, I called 9204447667 and they arranged the required surgical bandage immediately.",
    date: "June 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "t6",
    name: "Dr. Alok Prasad",
    location: "Paliganj Local Clinic",
    rating: 5,
    comment: "As a local practitioner, I recommend Medical Shop in Purani Bazar to my patients for authentic formulations and reliable service.",
    date: "July 2026",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=150"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "How can I order medicines via WhatsApp from Medical Shop?",
    answer: "Simply click on the WhatsApp button or call 9204447667. Take a clear photo of your prescription or write down the medicine names with dosage, send it to us on WhatsApp, and our staff will confirm stock and pricing within minutes.",
    category: "order"
  },
  {
    id: "faq2",
    question: "Are all medicines at Medical Shop 100% genuine?",
    answer: "Yes, 100%. All pharmaceuticals, health supplements, baby care, and surgical supplies are procured exclusively from verified, licensed medical distributors and top manufacturing brands with strict quality control.",
    category: "general"
  },
  {
    id: "faq3",
    question: "Do I need a doctor's prescription for prescription medicines?",
    answer: "Yes. For Schedule H, Schedule H1, and life-saving prescription drugs, a valid doctor's prescription is required by law. OTC (Over-the-Counter) items like pain relievers, baby products, and health supplements do not require a prescription.",
    category: "prescription"
  },
  {
    id: "faq4",
    question: "Where is Medical Shop located in Paliganj?",
    answer: "We are located at Purani Bazar, Paliganj, Bihar 801110. You can easily find us near the main market area. Search for 'Medical Shop Purani Bazar' on Google Maps or click 'Get Directions' on our website.",
    category: "general"
  },
  {
    id: "faq5",
    question: "What are your store working hours?",
    answer: "We are open 7 days a week from 7:00 AM to 10:00 PM. For emergency medicine requests outside regular hours, you can reach us on call at 9204447667.",
    category: "general"
  },
  {
    id: "faq6",
    question: "Which payment methods do you accept?",
    answer: "We accept Cash, UPI payments (Google Pay, PhonePe, Paytm, BHIM), and direct bank transfers. Digital bill receipts are provided upon request.",
    category: "order"
  },
  {
    id: "faq7",
    question: "Do you offer discounts on monthly chronic medicines?",
    answer: "Yes! We offer attractive prices and special courtesy discounts for senior citizens and patients requiring continuous monthly medicine supplies for diabetes, hypertension, and heart care.",
    category: "general"
  },
  {
    id: "faq8",
    question: "Do you store temperature-sensitive medicines like Insulin and Vaccines?",
    answer: "Yes, we maintain dedicated medical refrigeration units with 24/7 power backup to preserve the temperature integrity of insulin, injections, vaccines, and eye drops.",
    category: "prescription"
  },
  {
    id: "faq9",
    question: "Can I get medical equipment like BP Monitors or Glucometers here?",
    answer: "Yes, we stock digital blood pressure monitors, glucometers with test strips, pulse oximeters, steam inhalers, nebulizers, heating pads, and orthopedic supports.",
    category: "general"
  },
  {
    id: "faq10",
    question: "What if a specific medicine is currently unavailable?",
    answer: "In the rare event that a specialized medicine is out of stock, we can order it specially from our central distributor network and make it available for you within 12 to 24 hours.",
    category: "order"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Medical Shop Store Front",
    category: "store",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800",
    description: "Modern, clean, and well-lit store entrance at Purani Bazar, Paliganj."
  },
  {
    id: "g2",
    title: "Organized Medicine Racks",
    category: "shelves",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=800",
    description: "Systematically categorized pharmaceutical section ensuring fast retrieval."
  },
  {
    id: "g3",
    title: "Healthcare Essentials Display",
    category: "products",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800",
    description: "Wide assortment of health supplements, vitamins, and personal care items."
  },
  {
    id: "g4",
    title: "Digital Medical Monitoring Equipment",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    description: "High accuracy digital BP monitors, pulse oximeters and glucometers."
  },
  {
    id: "g5",
    title: "Baby Care & Infant Products Shelf",
    category: "products",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
    description: "Top-rated dermatologically tested baby wipes, lotions, and infant foods."
  },
  {
    id: "g6",
    title: "Qualified Pharmacist Dispensing",
    category: "staff",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
    description: "Experienced staff double-checking prescription doses and providing guidance."
  },
  {
    id: "g7",
    title: "Surgical Supplies & Wound Care",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=800",
    description: "Sterile first aid kits, surgical gloves, bandaging, and antiseptic solutions."
  },
  {
    id: "g8",
    title: "Cold Chain Storage Unit",
    category: "shelves",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
    description: "Regulated medical refrigerator for insulin, vaccines, and biologics."
  },
  {
    id: "g9",
    title: "Happy Customer Service Counter",
    category: "customers",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    description: "Serving Purani Bazar residents with warmth, care, and transparency."
  }
];

export const OWNER_MESSAGE = {
  ownerName: "Medical Shop Management",
  role: "Founder & Registered Pharmacist",
  location: "Purani Bazar, Paliganj",
  message: "Our goal from Day 1 has been simple: to ensure every family in Paliganj has immediate access to 100% genuine medicines at fair prices without having to travel to the city. Health is life's greatest priority, and we handle every prescription with extreme dedication, accuracy, and care.",
  avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300"
};

export const TIMELINE = [
  {
    year: "Establishment",
    title: "Opened Doors in Purani Bazar",
    desc: "Started as a trusted local chemist shop providing essential prescription medicines."
  },
  {
    year: "Expansion",
    title: "Added Surgical & Baby Care Range",
    desc: "Expanded storage and brought authorized baby care brands and surgical dis-posables to Paliganj."
  },
  {
    year: "Digital Age",
    title: "WhatsApp Order & Home Pickup",
    desc: "Launched WhatsApp prescription ordering system so patients can confirm stock in advance."
  },
  {
    year: "Present Day",
    title: "Top-Rated Community Pharmacy",
    desc: "Serving thousands of satisfied families with 100% genuine products, cold-chain storage & digital payment convenience."
  }
];
