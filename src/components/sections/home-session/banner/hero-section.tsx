import React from 'react';
import heroImage from '../../../../assets/hero-image.png';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import nccImg from '../../../../assets/ncc.png';
import ndpaImg from '../../../../assets/ndpa.png';

export default function HeroSection() {
  return (
    <section className="px-5 sm:px-8 w-full flex items-center justify-center mt-[180px] 2xl:mt-[210px]">
      <div className="container relative flex flex-col items-center">
        <FadeIn direction="up" delay={0.2} distance={40} duration={0.8}>
          <div className="w-[300px] x320:w-[360px] x360:w-[400px] xs:w-[440px] sm:w-[670px] 2xl:w-[938px]">
            <Image src={heroImage} width={938} height={938} className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]" alt="Hero illustration" priority />
          </div>
        </FadeIn>

        <div className="relative -top-[35px] md:-top-[30px] lg:-top-[75px] 2xl:-top-[145px] flex flex-col items-center justify-center">
          <FadeIn direction="up" delay={0.4} distance={60} duration={0.8} className="max-w-[328px] sm:max-w-[1049px]">
            <h1 className="font-bold gradientTextColor text-[55px] x360:text-[60px] xs:text-[80px] sm:text-[120px] lg:text-[200px] 2xl:text-[256px] leading-[80px] sm:leading-[130px] lg:leading-[210px] 2xl:leading-[350px]">
              Finabox
            </h1>
          </FadeIn>

          <StaggeredFadeIn
            direction="up"
            initialDelay={0.6}
            staggerDelay={0.15}
            distance={20}
            duration={0.6}
            className="w-full sm:w-[400px] 2xl:w-[512px] flex flex-col items-center justify-center gap-3 lg:gap-2 2xl:gap-3 text-center mt-5 sm:mt-0"
          >
            <h3 className="max-w-[220px] sm:max-w-[100%] text-[20px] lg:text-[16px] 2xl:text-[24px] text-white leading-[24px] font-medium">The smart, secure inbox for your money</h3>
            <p className="max-w-[316px] sm:max-w-[100%] text-[14px] lg:text-[12px] 2xl:text-[16px] text-[#FFFFFF80] leading-[22px] lg:leading-[18px] 2xl:leading-[24px] font-[400]">
              Cut SMS costs, stay compliant, and deliver instant transaction messages — built for banks and their customers.
            </p>
          </StaggeredFadeIn>

          <StaggeredFadeIn
            direction="up"
            initialDelay={0.6}
            staggerDelay={0.15}
            distance={20}
            duration={0.6}
            className="w-full sm:w-[563px] 2xl:w-[560px] p-8 mt-7 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl l shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm flex flex-col sm:flex-row sm:items-center gap-6 border-t border-l border-r border-indigo-600"
          >
            <div className="flex items-center sm:justify-between gap-6">
              <span className="text-base">Licensed by NCC</span>
              <Image src={nccImg} width={40} height={40} alt="nccImg" className="w-10 h-10" />
            </div>
            <div className="flex items-center justify-between gap-6">
              <span className="text-base">Data compliant with NDPA</span>
              <Image src={ndpaImg} width={40} height={40} alt="ndpaImg" className="w-10 h-10" />
            </div>
          </StaggeredFadeIn>
        </div>
      </div>
    </section>
  );
}
