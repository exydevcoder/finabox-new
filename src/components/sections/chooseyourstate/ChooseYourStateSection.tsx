import HoverCard from '../../animations/hover-card';
import StaggeredFadeIn from '../../animations/StaggeredFadeIn';
import FadeIn from '../../animations/fade-in';
import { Badge } from '../../ui/badge';
import StateCardsCarousel from './StateCardsCarousel';

export default function ChooseYourStateSection() {
  return (
    <section className="px-5 sm:px-8 w-full flex items-center justify-center py-[96px]">
      <div className="container flex flex-col gap-8">
        <FadeIn direction="up" delay={0.2} duration={0.8} className="flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col text-center justify-center md:text-left gap-2">
            <FadeIn direction="left" delay={0.4} duration={0.6}>
              <h1 className="text-white text-4xl font-semibold leading-10">Choose Your State</h1>
            </FadeIn>
            <FadeIn direction="left" delay={0.6} duration={0.6} className='w-full xs:w-[294px] sm:w-full mx-auto'>
              <p className="text-white/70 text-base font-normal leading-normal">36 states + FCT. 100 slots each. Secure your position early.</p>
            </FadeIn>
          </div>
          <StaggeredFadeIn direction="right" staggerDelay={0.1} initialDelay={0.8} className="flex gap-3 self-center md:self-end max-w-max">
            <HoverCard hoverScale={1.05} hoverElevation className="flex items-center gap-2">
              <Badge variant="secondary" className="h-2.5 w-2.5 bg-green-400 p-0 rounded-full" />
              <span className="text-white/70 text-sm font-normal leading-5">Open</span>
            </HoverCard>
            <HoverCard hoverScale={1.05} hoverElevation className="flex items-center gap-2">
              <Badge variant="secondary" className="h-2.5 w-2.5 bg-yellow-400 p-0 rounded-full" />
              <span className="text-white/70 text-sm font-normal leading-5">Few Left</span>
            </HoverCard>
            <HoverCard hoverScale={1.05} hoverElevation className="flex items-center gap-2">
              <Badge variant="secondary" className="h-2.5 w-2.5 bg-white/20 p-0 rounded-full" />
              <span className="text-white/70 text-sm font-normal leading-5">Full</span>
            </HoverCard>
          </StaggeredFadeIn>
        </FadeIn>

        <FadeIn direction="up" delay={1.0} duration={0.8}>
          <StateCardsCarousel />
        </FadeIn>
      </div>
    </section>
  );
}
