import HeroSection from '@/components/sections/banner/HeroSection';
import ChooseYourStateSection from '@/components/sections/chooseyourstate/ChooseYourStateSection';
import ContactSection from '@/components/sections/contact/ContactSection';
import CoreAgentSection from '@/components/sections/CoreAgentSection';
import FinaboxAgentSection from '@/components/sections/FinaboxAgentSection';

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div className="">
        <FinaboxAgentSection />
      </div>
      <div className="">
        <CoreAgentSection />
      </div>
      <div className="">
        <ChooseYourStateSection />
      </div>
      <div id="contact" className="scroll-mt-32 sm:scroll-mt-5">
        <ContactSection />
      </div>
    </>
  );
}
