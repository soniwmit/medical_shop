import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/ServicesSection';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { WhyTrustUs } from '../components/WhyTrustUs';
import { WorkingProcess } from '../components/WorkingProcess';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { ContactCTA } from '../components/ContactCTA';

interface HomePageProps {
  onOpenOrderModal: (prefilledMedicine?: string) => void;
  onOpenSearchModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenOrderModal,
  onOpenSearchModal
}) => {
  return (
    <div className="space-y-0">
      <HeroSection
        onOpenOrderModal={() => onOpenOrderModal()}
        onOpenSearchModal={onOpenSearchModal}
      />
      
      <WhyChooseUs />

      <ServicesSection onOpenOrderModal={onOpenOrderModal} />

      <FeaturedCategories
        onSelectCategory={(categoryName) => {
          onOpenSearchModal();
        }}
      />

      <WhyTrustUs />

      <WorkingProcess />

      <TestimonialsSection />

      <FAQSection />

      <GoogleMapSection />

      <ContactCTA onOpenOrderModal={() => onOpenOrderModal()} />
    </div>
  );
};
