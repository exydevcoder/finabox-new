'use client';

import { Badge } from '@/components/ui/badge';
import React from 'react';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import makeAlertImg from '../../../../assets/makealert.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HoverCard from '@/components/animations/hover-card';
import FadeIn from '@/components/animations/fade-in';

export default function MakeAlertSection() {
  return (
    <FadeIn direction="up" distance={30} duration={0.7} className="px-5 sm:px-8 py-[42px] sm:py-[85px] w-full flex items-center justify-center">
      <div className="w-full md:w-[842.66px] flex flex-col items-center justify-center">
        <div className="max-w-[310px] lg:max-w-[550px] 2xl:max-w-[750px]">
          <Image width={672} height={672} src={makeAlertImg} alt="make alert" className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]" />
        </div>

        <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.4} className="w-full md:w-[592px] mx-auto flex flex-col">
          <div className="w-full flex flex-col items-center justify-center gap-[23.09px]">
            <Badge variant="customBadgeStyle">Ready to Get Started?</Badge>
            <h1 className="titleStyle text-center">
              Make Alerts <span className="gradientTextColor">Smarter</span>
            </h1>
          </div>
          <FadeIn
            direction="up"
            delay={0.6}
            duration={0.6}
            className="max-w-[504px] mx-auto text-center justify-center text-white/50 text-base font-normal mb-[32px] mt-[16px] transition-colors duration-300 hover:text-white/70"
          >
            Cut costs, improve delivery, and give your users total visibility. Try Finabox today — no commitment required.
          </FadeIn>
          <div className="w-full md:max-w-[452px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <FadeIn direction="up" delay={0.8} duration={0.5} className='w-full'>
              <HoverCard hoverScale={1.01} hoverElevation >
                <Button variant="customWithGradient" className="w-full">
                  Get Started
                </Button>
              </HoverCard>
            </FadeIn>
            <FadeIn direction="up" delay={0.8} duration={0.5} className='w-full'>
              <HoverCard hoverScale={1.01} hoverElevation>
                <Button variant="customWithGradient" className="w-full bg-white text-black">
                  Book a Demo
                </Button>
              </HoverCard>
            </FadeIn>
          </div>
        </StaggeredFadeIn>
      </div>
    </FadeIn>
  );
}
