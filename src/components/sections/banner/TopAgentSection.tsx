import Image from 'next/image';
import topAgentImg from '../../../assets/topagent.png';
import topAgentMobileImg from '../../../assets/topagent-mobile.png';
import topAgentIcon from '../../../assets/icons/top-agent-icon.svg';
import FadeIn from '../../animations/fade-in';
import StaggeredFadeIn from '../../animations/StaggeredFadeIn';
import HoverCard from '../../animations/hover-card';

export default function TopAgentSection() {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center gap-8">
      <FadeIn
        direction="left"
        delay={0.2}
        duration={0.8}
        className="flex flex-col gap-4 2xl:gap-8 p-6 2xl:p-8 w-full bg-neutral-900 rounded-2xl outline-2 outline-offset-[-2px] outline-indigo-600 backdrop-blur-[10px]"
      >
        <FadeIn direction="up" delay={0.4} duration={0.6} className="flex items-center gap-3">
          <HoverCard hoverScale={1.1} hoverElevation={false}>
            <Image width={32} height={32} src={topAgentIcon} alt="topAgentIcon" className="transition-transform duration-500" />
          </HoverCard>
          <span className="text-base font-normal text-white/70">Top Agent Performance Highlights</span>
        </FadeIn>
        <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.6} duration={0.6} className="flex flex-col lg:flex-row gap-3 2xl:gap-4 px-0 sm:px-5 2xl:px-7">
          <HoverCard
            hoverScale={1.03}
            hoverElevation={true}
            className="w-full lg:w-[172.67px] p-3 2xl:p-4 flex flex-col gap-2 2xl:gap-3 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl l shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm border-t border-l border-r border-indigo-600"
          >
            <span className="text-white/60 text-xs font-normal leading-none">Registered Users</span>
            <span className="text-white text-2xl font-semibold leading-loose">1,284</span>
            <span className="text-white text-xs font-normal leading-none">+12% this week</span>
          </HoverCard>
          <HoverCard
            hoverScale={1.03}
            hoverElevation={true}
            className="w-full lg:w-[172.67px] p-3 2xl:p-4 flex flex-col gap-2 2xl:gap-3 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl l shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm border-t border-l border-r border-indigo-600"
          >
            <span className="text-white/60 text-xs font-normal leading-none">Commission</span>
            <span className="text-white text-2xl font-semibold leading-loose">₦842k</span>
            <span className="text-white text-xs font-normal leading-none">+8% this week</span>
          </HoverCard>
          <HoverCard
            hoverScale={1.03}
            hoverElevation={true}
            className="w-full lg:w-[172.67px] p-3 2xl:p-4 flex flex-col gap-2 2xl:gap-3 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl l shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm border-t border-l border-r border-indigo-600"
          >
            <span className="text-white/60 text-xs font-normal leading-none">Active States</span>
            <span className="text-white text-2xl font-semibold leading-loose">37</span>
            <span className="text-white text-xs font-normal leading-none">Nationwide</span>
          </HoverCard>
        </StaggeredFadeIn>
      </FadeIn>

      <FadeIn direction="right" delay={0.3} duration={0.8} className="w-full">
        <HoverCard hoverScale={1.02} hoverElevation={true}>
          <Image width={664} height={360} src={topAgentImg} alt="topAgentImg" className="hidden md:block w-full h-auto object-cover rounded-lg transition-transform duration-500" />
          <Image width={392} height={360} src={topAgentMobileImg} alt="topAgentMobileImg" className="block md:hidden w-full h-auto object-cover rounded-lg transition-transform duration-500" />
        </HoverCard>
      </FadeIn>
    </div>
  );
}
