import HeroSection from '@/components/sections/home-session/banner/hero-section';
import FaqSection from '@/components/sections/home-session/faq/faq-section';
import FeaturesSection from '@/components/sections/home-session/features/features-section';
import MakeAlertSection from '@/components/sections/home-session/makealert/makealert-section';
import PricingSection from '@/components/sections/home-session/pricing/pricing-section';
import TestimonialsSection from '@/components/sections/home-session/testimonials/testimonials-section';
import TrustedBySection from '@/components/sections/home-session/trustedby/trustedby-section';
import WeBuildForSection from '@/components/sections/home-session/webuildfor/webuildfor-section';
import WhyUsSection from '@/components/sections/home-session/whyus/whyus-section';

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <TrustedBySection />
      <div id="features" className="pt-10">
        <FeaturesSection />
      </div>
      <WhyUsSection />
      <WeBuildForSection />
      <TestimonialsSection />
      <div id="pricing" className="pt-10">
        <PricingSection />
      </div>
      <FaqSection />
      <MakeAlertSection />
    </>
  );
}
