import { Badge } from '@/components/ui/badge';
import React from 'react';
import quoteIcon from '../../../../assets/icons/quotes-icon.svg';
import userAvatar1 from '../../../../assets/testimonials/client1.png';
import userAvatar2 from '../../../../assets/testimonials/client2.png';
import userAvatar3 from '../../../../assets/testimonials/client3.png';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import Image, { StaticImageData } from 'next/image';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import HoverCard from '@/components/animations/hover-card';
import FadeIn from '@/components/animations/fade-in';

interface TestimoniaCard {
  icon: StaticImageData;
  title: string;
  msg: string;
  avatar: StaticImageData;
  name: string;
  role: string;
}

const testimonys: TestimoniaCard[] = [
  {
    icon: quoteIcon,
    title: 'Cost Efficiency',
    msg: '“We reduced SMS costs and improved alert reliability instantly. Finabox just works.”',
    avatar: userAvatar1,
    name: 'Adaobi I.',
    role: 'Operations Lead at Microfinance Bank'
  },
  {
    icon: quoteIcon,
    title: 'Fraud Mitigation',
    msg: '“The dispute tool helped us detect fraud faster and protect customers with less overhead.”',
    avatar: userAvatar2,
    name: 'Tunde F.',
    role: 'Risk Manager'
  },
  {
    icon: quoteIcon,
    title: 'Reliable Money Inbox',
    msg: '“Now I get all my bank alerts in one place — secure, simple, and always on time.”',
    avatar: userAvatar3,
    name: 'Janet E.',
    role: 'Finabox User'
  }
];

export default function TestimonialsSection() {
  return (
    <FadeIn direction="up" distance={40} duration={0.8} className="px-5 sm:px-8 py-[64px] sm:py-[83px] w-full flex items-center justify-center">
      <div className="container flex items-center justify-center flex-col gap-[64px]">
        <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.2} className="w-full flex flex-col items-center justify-center gap-[23.09px]">
          <Badge variant="customBadgeStyle">Testimonials</Badge>
          <h1 className="titleStyle text-center">
            They Choose <br />
            <span className="gradientTextColor">Finabox</span>
          </h1>
        </StaggeredFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonys.map((testimony, index) => (
            <FadeIn key={index} direction="up" delay={0.3 + index * 0.15} distance={30} duration={0.6}>
              <HoverCard hoverScale={1.01} hoverElevation className="h-full">
                <Card className="p-[35px] lg:py-[25px] lg:px-[30px] 2xl:px-[41px] 2xl:py-[41px] gap-[32px] lg:gap-[25px] 2xl:gap-[32px] border-[#FFFFFF3D] bg-[#111111] rounded-[32px] lg:rounded-[20px] 2xl:rounded-[32px] flex flex-col justify-between h-full group hover:border-[#FFFFFF66] transition-colors duration-300">
                  <CardHeader className="gap-[23.09px] p-0">
                    <Image src={testimony.icon} width={48} height={48} alt={`${testimony.title} icon`} className="w-12 h-12 lg:w-[33px] lg:h-[33px] 2xl:w-12 2xl:h-12 transition-transform duration-500 hover:scale-110" />

                    <CardTitle className="text-[24px] lg:text-[20px] 2xl:text-[32px] font-medium text-white leading-[100%] transition-colors duration-300">{testimony.title}</CardTitle>
                    <CardDescription className="text-[#FFFFFF80] italic font-[400] text-base lg:text-[11px] 2xl:text-[16px] leading-normal transition-colors duration-300 group-hover:text-[#FFFFFFA0]">
                      {testimony.msg}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 w-full">
                    <div className="flex items-center gap-4 w-full group-hover:translate-x-1 transition-transform duration-300">
                      <div className="relative w-14 h-14 lg:w-10 lg:h-10 2xl:w-14 2xl:h-14 rounded-full transition-all duration-300 overflow-hidden">
                        <Image src={testimony.avatar} width={56} height={56} alt={`${testimony.name} avatar`} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-normal text-[16px] lg:text-[12px] 2xl:text-[16px] transition-colors duration-300">{testimony.name}</span>
                        <span className="text-[#FFFFFF60] font-normal text-sm lg:text-[10px] 2xl:text-sm group-hover:text-[#FFFFFF90] transition-colors duration-300">{testimony.role}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
