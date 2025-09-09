'use client';

import React from 'react';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import nccImg from '../../../../assets/ncc.png';
import ndpaImg from '../../../../assets/ndpa.png';
import { Badge } from '@/components/ui/badge';
import HoverCard from '@/components/animations/hover-card';
import { Button } from '@/components/ui/button';
import TopAgentSection from './TopAgentSection';
import { BOOK_MEETING_URL } from '@/utils/globalUrl';
import { scrollToSection } from '@/lib/scrollTo';

export default function HeroSection() {
  return (
    <section className="px-5 xs:px-8 w-full flex flex-col items-center gap-6 sm:gap-16 md:gap-32 justify-center mt-[150px] md:mt-[180px] pb-[80px] 2xl:mt-[132px]">
      <div className="container2 relative flex flex-col md:flex-row items-center gap-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center sm:items-start gap-6 w-full">
            <FadeIn direction="up" delay={0.2} distance={40} duration={0.8}>
              <Badge variant="customBadgeStyle">New Program 2025</Badge>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} distance={40} duration={0.8}>
              <h1 className="titleStyle2 text-center sm:text-left w-full md:w-[600px]">
                Become a Certified
                <span className="gradientTextColor"> Finabox</span> Agent
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
              <p className="w-full sm:w-[684px] text-base sm:text-[24px] text-[#FFFFFF80] font-normal text-center sm:text-left">
                Redefine financial communication in your state and earn commissions while making banking more secure.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.5} duration={0.6} className="w-full md:w-[441px] flex flex-col sm:flex-row gap-3">
              <HoverCard hoverScale={1.03} hoverElevation className="w-full">
                <Button variant="customWithGradient" className="gap-3 w-full" onClick={() => scrollToSection('contact')}>
                  Join Now
                </Button>
              </HoverCard>
              <HoverCard hoverScale={1.03} hoverElevation className="w-full">
                <a href={BOOK_MEETING_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="customWithGradient" className="w-full bg-white text-black gap-3 hover:bg-gray-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    Book a Meeting
                  </Button>
                </a>
              </HoverCard>
            </FadeIn>
          </div>
          <StaggeredFadeIn
            direction="up"
            initialDelay={0.6}
            staggerDelay={0.15}
            distance={20}
            duration={0.6}
            className="w-full sm:w-[563px] 2xl:w-[560px] p-8 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl l shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm flex flex-col sm:flex-row sm:items-center gap-6 border-t border-l border-r border-indigo-600"
          >
            <div className="flex items-center sm:justify-between gap-6">
              <span className="text-base font-normal">Licensed by NCC</span>
              <Image src={nccImg} width={40} height={40} alt="nccImg" className="w-10 h-10" />
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-base font-normal">Data compliant with NDPA</span>
              <Image src={ndpaImg} width={40} height={40} alt="ndpaImg" className="w-10 h-10" />
            </div>
          </StaggeredFadeIn>
        </div>

        {/* <div className="border w-[35%]"></div> */}
      </div>

      <TopAgentSection />
    </section>
  );
}
