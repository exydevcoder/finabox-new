import Image from 'next/image';
import finaboxAgentImg from '../../../assets/finabox-agent/1.png';
import finaboxAgentIcon from '../../../assets/finabox-agent/finabox-agent-icon.svg';
import HoverCard from '../../animations/hover-card';
import StaggeredFadeIn from '../../animations/StaggeredFadeIn';
import FadeIn from '../../animations/fade-in';
import { Badge } from '../../ui/badge';

export default function FinaboxAgentSection() {
  return (
    <section className="px-5 xs:px-8 w-full flex items-center justify-center">
      <div className="container2 flex flex-col md:flex-row items-start sm:items-center justify-between gap-10">
        <div className="flex flex-col items-start gap-6 max-w-full w-[785px]">
          <FadeIn direction="up" delay={0.3} distance={40} duration={0.8}>
            <h1 className="titleStyle2 max-w-[250px] xs:max-w-[340px] sm:max-w-[500px]">
              Who is a<span className="gradientTextColor"> Finabox</span> Agent?
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
            <p className="max-w-[392px] sm:max-w-[684px] text-base sm:text-[22px] text-[#FFFFFF80] font-normal">
              Agents are certified Finabox partners who act as local representatives, onboarding users, providing support, and driving adoption in their state.{' '}
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.5} duration={0.6} className="w-full flex flex-col xs:flex-row gap-1.5 xs:gap-3">
            <FadeIn direction="up" delay={0.2} distance={40} duration={0.8}>
              <Badge variant="customBadgeStyle">Trusted Locally</Badge>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} distance={40} duration={0.8}>
              <Badge variant="customBadgeStyle">Audited Annually</Badge>
            </FadeIn>
          </FadeIn>
        </div>
        <FadeIn
          direction="left"
          delay={0.2}
          duration={0.8}
          className="pb-0 p-4 max-w-full w-[503px] bg-gradient-to-b from-white/5 to-white/0 rounded-2xl l shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm border-t border-l border-r border-indigo-600"
        >
          <FadeIn direction="up" delay={0.4} duration={0.6} className="flex flex-col sm:flex-row gap-4 sm:mr-7">
            <div className="flex-shrink-0">
              <HoverCard hoverScale={1.1} hoverElevation={false} className="">
                <Image width={45} height={45} src={finaboxAgentIcon} alt="finaboxAgentIcon" className="transition-transform duration-500" />
              </HoverCard>
            </div>
            <div className="flex flex-col gap-1.5 w-full sm:max-w-[409px]">
              <h3 className="text-white text-base font-semibold leading-normal">Community & Connection</h3>
              <p className="text-white/70 text-sm font-normal leading-5">You become the trusted face of secure financial messaging—bridging banks, customers, and Finabox.</p>
              <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.6} duration={0.6} className="mt-6">
                <Image width={418} height={296} src={finaboxAgentImg} alt="finaboxAgentImg" className="w-full transition-transform duration-500" />
              </StaggeredFadeIn>
            </div>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
}
