import HeroSection from '@/components/sections/agent-session/banner/HeroSection';
import ChooseYourStateSection from '@/components/sections/agent-session/chooseyourstate/ChooseYourStateSection';
import ContactSection from '@/components/sections/agent-session/contact/ContactSection';
import CoreAgentSection from '@/components/sections/agent-session/CoreAgentSection';
import FinaboxAgentSection from '@/components/sections/agent-session/FinaboxAgentSection';

export default function AgentPage() {
  return (
    <>
      <div>
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
