'use client';

import React from 'react';
import access from '../../../../assets/trsutedby/access.png';
import wema from '../../../../assets/trsutedby/wema.png';
import uba from '../../../../assets/trsutedby/uba.png';
import firstbank from '../../../../assets/trsutedby/firstbank.png';
import stanbic from '../../../../assets/trsutedby/stanbic.png';
import unknown from '../../../../assets/trsutedby/unknown.png';
import moniepoint from '../../../../assets/trsutedby/moniepoint.png';
import opay from '../../../../assets/trsutedby/opay.png';
import geepay from '../../../../assets/trsutedby/geepay.png';
import Image from 'next/image';
import FadeIn from '@/components/animations/fade-in';
import HoverCard from '@/components/animations/hover-card';

export default function TrustedBySection() {
  const logos = [
    { src: access, alt: 'Access Bank logo' },
    { src: wema, alt: 'Wema Bank logo' },
    { src: uba, alt: 'UBA Bank logo' },
    { src: firstbank, alt: 'First Bank logo' },
    { src: stanbic, alt: 'Stanbic IBTC logo' },
    { src: unknown, alt: 'Unknown bank logo' },
    { src: moniepoint, alt: 'Moniepoint logo' },
    { src: opay, alt: 'OPay logo' },
    { src: geepay, alt: 'Geepay logo' }
  ];

  return (
    <FadeIn direction="up" distance={20} duration={0.6} className="md:py-[64px] py-[83px] w-full flex items-center justify-center overflow-hidden">
      <div className="container">
        <FadeIn direction="up" delay={0.2} duration={0.5}>
          <h3 className="font-[400] text-center text-[16px] leading-[100%] text-white mb-12">Trusted by top-tier banks and fintechs</h3>
        </FadeIn>

        {/* Container with hidden overflow */}
        <div className="relative w-full overflow-hidden">
          {/* Animated logos container */}
          <div className="flex items-center gap-[10px] x360:gap-[20px] md:gap-[32px] lg:gap-[50px] 2xl:gap-[100px] animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <HoverCard key={`first-${index}`} hoverScale={1.1}>
                <Image
                  src={logo.src}
                  width={56}
                  height={56}
                  className="w-[40px] h-[40px] 2xl:w-[56px] 2xl:h-[56px] filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  alt={logo.alt}
                  priority
                />
              </HoverCard>
            ))}

            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <HoverCard key={`second-${index}`} hoverScale={1.1}>
                <Image
                  src={logo.src}
                  width={56}
                  height={56}
                  className="w-[40px] h-[40px] 2xl:w-[56px] 2xl:h-[56px] object-contain filter grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
                  alt={logo.alt}
                  priority
                />
              </HoverCard>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: calc(200% + 16rem); /* Account for gaps */
          will-change: transform; /* Optimize animation performance */
        }

        /* Pause animation on hover */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </FadeIn>
  );
}
