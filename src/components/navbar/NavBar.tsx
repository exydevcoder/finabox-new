'use client';

import React, { useState } from 'react';
import navLogo from '../../assets/logo.png';
import hamburgerOpen from '../../assets/icons/hamburger-icon.svg';
import hamburgerClose from '../../assets/icons/hamburger-icon-close.svg';
import Image from 'next/image';
import FadeIn from '../animations/fade-in';
import HoverCard from '../animations/hover-card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { slugify } from '@/lib/slugify';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ['Home', 'Features', 'Pricing', 'Agent'];

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
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Reusable nav links component
  const NavLinks = ({ isMobile = false }) => (
    <ul className={`flex ${isMobile ? 'flex-col gap-8' : 'gap-[2px] 2xl:gap-1.5'}`}>
      {navLinks.map((link, index) => {
        const targetId = link === 'Home' ? 'home' : slugify(link);
        return (
          <li key={index}>
            <FadeIn direction="down" delay={0.3 + index * 0.1} duration={0.4}>
              <Link
                href={`#${targetId}`}
                onClick={e => handleScroll(e, targetId)}
                className="text-white font-[400] flex items-center justify-center px-3 lg:px-3 2xl:px-4 py-2 text-[16px] lg:text-[12px] 2xl:text-[16px] leading-[19.2px] hover:text-white/70 transition-colors duration-300 hover:cursor-pointer"
              >
                {link}
              </Link>
            </FadeIn>
          </li>
        );
      })}
    </ul>
  );

  // Reusable Get Started button
  const GetStartedButton = () => (
    <FadeIn direction="left" delay={0.6} duration={0.5}>
      <HoverCard hoverScale={1.05} hoverElevation>
        <Button variant="customWithGradient" className="!w-[160px] lg:!w-[130px] 2xl:!w-[160px] !h-[40px] 2xl:!h-[48px]">
          Get Started
        </Button>
      </HoverCard>
    </FadeIn>
  );

  return (
    <FadeIn
      direction="down"
      distance={20}
      duration={0.6}
      className={`fixed z-50 top-0 px-5 sm:px-8 pt-4 sm:pt-5 pb-5 w-full flex flex-col gap-[32px] items-center justify-center transition-all duration-300 ${
        isMobileMenuOpen ? 'bg-[#111111] rounded-bl-3xl rounded-br-3xl pb-10' : ''
      }`}
    >
      <div className="w-full flex items-center justify-center">
        <div className="bg-[#111111] flex items-center justify-between border border-[#FFFFFF14] w-[625px] 2xl:w-[837.81px] rounded-full px-[9px] py-[8px] lg:px-4 lg:py-2.5 2xl:px-5 2xl:py-3">
          <FadeIn direction="right" delay={0.2} duration={0.5}>
            <Link href="/" className="font-bold flex items-center gap-2 2xl:gap-3 text-[17px] 2xl:text-[24px] leading-[100%] hover:cursor-pointer" onClick={e => handleScroll(e, 'home')}>
              <Image src={navLogo} width={48} height={48} className="w-[40px] lg:w-[35px] 2xl:w-[48px] h-[40px] lg:h-[35px] 2xl:h-[48px]" alt="Finabox logo" priority />
              <span className="hidden sm:block">Finabox</span>
            </Link>
          </FadeIn>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavLinks />
          </nav>

          {/* Desktop Get Started Button */}
          <div className={`${isMobileMenuOpen ? 'hidden' : 'block'}`}>
            <GetStartedButton />
          </div>

          {/* Mobile Menu Toggle */}
          <FadeIn direction="left" delay={0.6} duration={0.5} className="block md:hidden">
            <HoverCard hoverScale={1.1} className="flex items-center justify-center">
              <Button className="!p-0 bg-transparent border-none" onClick={toggleMobileMenu}>
                <Image src={isMobileMenuOpen ? hamburgerClose : hamburgerOpen} width={40} height={40} className="w-[40px] h-[40px]" alt={isMobileMenuOpen ? 'Menu close icon' : 'Menu open icon'} />
              </Button>
            </HoverCard>
          </FadeIn>
        </div>
      </div>
      {/* Mobile Navigation - Only show when menu is open */}
      {isMobileMenuOpen && (
        <nav className="block md:hidden">
          <NavLinks isMobile={true} />
          <div className="mt-8">
            <GetStartedButton />
          </div>
        </nav>
      )}
    </FadeIn>
  );
}
