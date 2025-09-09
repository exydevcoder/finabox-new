'use client';

import React from 'react';
import { Button } from '../ui/button';
import { IoArrowDownOutline } from 'react-icons/io5';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { slugify } from '@/lib/slugify';
import Image from 'next/image';
import FadeIn from '../animations/fade-in';
import footerLogo from '../../assets/logo.png';
import HoverCard from '../animations/hover-card';
import PlayStoreIcon from '@/assets/icons/play-store.svg';
import AppleStoreIcon from '@/assets/icons/apple-store.svg';
import StaggeredFadeIn from '../animations/StaggeredFadeIn';
import { scrollToTop } from '../scrollToTop';

export default function Footer() {
  const socialIcons = [
    { name: 'Instagram', icon: FaInstagram, url: '#' },
    { name: 'X', icon: FaXTwitter, url: '#' },
    { name: 'LinkedIn', icon: GrLinkedinOption, url: '#' },
    { name: 'YouTube', icon: FaYoutube, url: '#' }
  ];

  const quickLinks = ['Home', 'Features', 'Pricing', 'Agent'];
  const otherLinks = ['Contact', 'Terms & Conditions'];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <FadeIn direction="up" distance={40} duration={0.8} className="footerBgImg px-5 sm:px-8 py-[85px] flex items-center justify-center w-full">
      <div className="container p-6 xs:p-[32px] gap-[64px] bg-[#111111] border border-white/8 rounded-[32px]">
        <div className="flex flex-col lg:flex-row justify-between pb-6 gap-16">
          {/* Logo and Social */}
          <FadeIn direction="right" delay={0.2} duration={0.6} className="w-full lg:w-[232px] flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <HoverCard hoverScale={1.05}>
                <Image
                  src={footerLogo}
                  width={56}
                  height={56}
                  className="w-[40px] lg:w-[56px] h-[40px] lg:h-[56px] transition-transform duration-300 hover:rotate-[10deg]"
                  alt="Finabox logo"
                  priority
                />
              </HoverCard>
              <span className="font-bold text-xl lg:text-[28px] leading-[100%] transition-colors duration-300">Finabox</span>
            </div>
            <p className="text-white/50 max-w-full lg:max-w-[192px] text-sm font-normal leading-[21px] hover:text-white/70 transition-colors duration-300">
              The cost efficient smart and secure inbox built for your money
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ name, icon: Icon, url }, index) => (
                <FadeIn key={name} direction="up" delay={0.3 + index * 0.1} duration={0.4}>
                  <HoverCard hoverScale={1.1}>
                    <a href={url} className="w-8 h-8 p-1 rounded-full flex items-center justify-center text-white bg-white/10 border border-white/8 transition-all duration-300" aria-label={name}>
                      <Icon className="text-white hover:scale-110 transition-transform duration-300" size={20} />
                    </a>
                  </HoverCard>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {/* Links */}
          <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.4} className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Quick Links */}
            <div className="w-full lg:w-[109px] flex flex-col gap-8">
              <h4 className="text-white text-base font-medium hover:text-white/70 transition-colors duration-300">Quick Links</h4>
              <div className="flex flex-col gap-5">
                {quickLinks.map((link, index) => {
                  const targetId = link === 'Home' ? 'home' : slugify(link);
                  return (
                    <li key={index} className="list-none">
                      <FadeIn direction="down" delay={0.3 + index * 0.1} duration={0.4}>
                        <Link href={`#${targetId}`} onClick={e => handleScroll(e, targetId)} className="text-white/50 text-base font-normal hover:text-white/70 transition-colors duration-300">
                          {link}
                        </Link>
                      </FadeIn>
                    </li>
                  );
                })}
              </div>
            </div>

            {/* Other Links */}
            <div className="w-[156px] flex flex-col gap-8">
              <h4 className="text-white text-base font-medium hover:text-white/70 transition-colors duration-300">Others</h4>
              <div className="flex flex-col gap-5">
                {otherLinks.map((link, index) => (
                  <FadeIn key={link} direction="right" delay={0.6 + index * 0.1} duration={0.4}>
                    <Link href={`/${slugify(link)}`} className="text-white/50 text-base font-normal hover:text-white/70 transition-colors duration-300">
                      {link}
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </StaggeredFadeIn>

          {/* App Buttons */}
          <FadeIn direction="left" delay={0.4} duration={0.6} className="w-full lg:w-[278px] flex flex-col gap-8">
            <p className="text-white text-base font-medium hover:text-white/70 transition-colors duration-300">Begin to monitoring your transaction without extra cost</p>
            <div className="w-full flex flex-col gap-[13px]">
              <HoverCard hoverScale={1.03} hoverElevation>
                <Button variant="customWithGradient" className="w-full lg:w-[210px] gap-3 transition-all duration-300 hover:shadow-[0_0_15px_rgba(137,33,255,0.3)]">
                  <Image src={PlayStoreIcon} alt="Play store" width={24} height={24} className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                  Play store
                </Button>
              </HoverCard>
              <HoverCard hoverScale={1.03} hoverElevation>
                <Button
                  variant="customWithGradient"
                  className="w-full lg:w-[210px] bg-white text-black gap-3 hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <Image src={AppleStoreIcon} alt="App store" width={24} height={24} className="w-6 h-6 transition-transform duration-300 hover:scale-110" />
                  App store
                </Button>
              </HoverCard>
            </div>
          </FadeIn>
        </div>

        {/* Copyright and Back to Top */}
        <FadeIn direction="up" delay={0.8} duration={0.5} className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <p className="text-white text-base font-normal hover:text-white/70 transition-colors duration-300">
            <span className="text-white/50">Copyright ©</span> Finabox 2025
          </p>
          <HoverCard hoverScale={1.1} hoverElevation>
            <Button
              className="w-[72px] h-[72px] rounded-[14px] flex items-center justify-center text-white bg-white/10 border border-white/8 hover:bg-white/10 transition-all duration-300"
              aria-label="Back to top"
              onClick={scrollToTop}
            >
              <IoArrowDownOutline className="rotate-180 transition-transform duration-300 hover:-translate-y-1" size={20} />
            </Button>
          </HoverCard>
        </FadeIn>
      </div>
    </FadeIn>
  );
}
