import { Badge } from '@/components/ui/badge';
import React from 'react';
import checkIcon from '@/assets/icons/check-icon.svg';
import whyUsImg from '@/assets/whyus.png';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import HoverCard from '@/components/animations/hover-card';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';

const data = [
  {
    icon: checkIcon,
    title: 'Built for Clarity & Compliance',
    description: 'Give your customers visibility and peace of mind — while cutting SMS costs and staying audit-ready.'
  },
  {
    icon: checkIcon,
    title: 'Fast to Integrate, Easy to Use',
    description: 'Use our secure API or on-prem agent to start dispatching alerts instantly. No need to change your core system.'
  },
  {
    icon: checkIcon,
    title: 'Financial-Grade Security',
    description: 'All messages are encrypted end-to-end, with full access control and data protection built in.'
  }
];

export default function WhyUsSection() {
  return (
    <FadeIn direction="up" distance={30} duration={0.7} className="px-5 sm:px-8 py-[83px] w-full flex items-center justify-center">
      <div className="container">
        <div className="flex flex-col-reverse lg:flex-row gap-[24px] xl:gap-[112px] justify-between">
          <div className="w-full max-w-[100%] lg:max-w-[560px] flex flex-col gap-[40px]">
            <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.3}>
              <div className="flex flex-col gap-[23.09px]">
                <Badge variant="customBadgeStyle">Why Us</Badge>
                <h1 className="titleStyle max-w-[376px] xl:max-w-[350px] 2xl:max-w-[100%]">
                  Why<span className="gradientTextColor"> Finabox</span>
                </h1>
              </div>
            </StaggeredFadeIn>

            <div className="flex flex-col gap-[32px] lg:gap-[20px] 2xl:gap-[32px]">
              {data.map((items, index) => (
                <FadeIn key={index} direction="up" delay={0.4 + index * 0.15} duration={0.6}>
                  <HoverCard hoverScale={1.01} className="rounded-lg transition-colors duration-300">
                    <div className="flex flex-col gap-[16px] lg:gap-[10px] 2xl:gap-[16px]">
                      <div className="flex sm:items-center gap-[10px]">
                        <Image width={24} height={24} src={items.icon} alt="Check Icon" className="w-6 h-6 lg:w-4.5 lg:h-4.5 2xl:w-6 2xl:h-6 transition-transform duration-300 hover:scale-110" />
                        <h3 className="text-white text-xl lg:text-base 2xl:text-2xl font-semibold">{items.title}</h3>
                      </div>
                      <p className="text-white/50 text-[16px] lg:text-[12px] 2xl:text-[16px] font-normal hover:text-white/70 transition-colors duration-300">{items.description}</p>
                    </div>
                  </HoverCard>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="max-w-[376px] lg:max-w-[736px] self-center lg:self-start">
            <Image src={whyUsImg} alt="Why Us" className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]" />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
