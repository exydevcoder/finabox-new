'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import FadeIn from '@/components/animations/fade-in';
import HoverCard from '@/components/animations/hover-card';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import moreQuestionIcon from '@/assets/icons/more-question.svg';
import Image from 'next/image';
import Link from 'next/link';

interface AccordionData {
  id: string;
  title: string;
  content: string;
}

const accordionData: AccordionData[] = [
  {
    id: 'item-1',
    title: 'How secure is Finabox for sending alerts?',
    content: 'All messages are encrypted, access-controlled, and fully compliant with financial regulations.'
  },
  {
    id: 'item-2',
    title: 'Can users dispute a transaction from the app?',
    content:
      'TypeScript adds static type definitions to JavaScript, helping you catch errors early in development. It provides better IDE support with autocomplete, refactoring, and navigation features. TypeScript also makes your code more maintainable and self-documenting.'
  },
  {
    id: 'item-3',
    title: 'What’s the cost per alert?',
    content:
      'TypeScript adds static type definitions to JavaScript, helping you catch errors early in development. It provides better IDE support with autocomplete, refactoring, and navigation features. TypeScript also makes your code more maintainable and self-documenting.'
  },
  {
    id: 'item-4',
    title: 'Can we integrate with our existing systems?',
    content:
      "The accordion component allows you to show and hide content sections. It's built with accessibility in mind, supporting keyboard navigation and screen readers. You can configure it to allow single or multiple items to be open at once."
  },
  {
    id: 'item-5',
    title: 'Is this for end-users or banks?',
    content:
      "You can customize the accordion's appearance using Tailwind CSS classes, modify the trigger icons, adjust animations, and control the default open/closed state of items. The component is fully responsive and works well on all device sizes."
  }
];

export default function FaqAccordion() {
  return (
    <StaggeredFadeIn direction="up" staggerDelay={0.1} initialDelay={0.2} distance={20} duration={0.6} className="">
      <Accordion type="single" collapsible className="w-full flex flex-col gap-[6px] md:gap-[32px] lg:gap-[20px] 2xl:gap-[32px]" defaultValue="item-1">
        {accordionData.map((item, index) => (
          <FadeIn key={item.id} direction="up" delay={0.3 + index * 0.1} distance={30} duration={0.6}>
            <HoverCard hoverScale={1.01} hoverElevation>
              <AccordionItem value={item.id} className="flex flex-col gap-[24px] lg:gap-[20px] 2xl:gap-[24px] border border-white/24 pb-[25px] lg:pb-[25px] 2xl:pb-[25px] rounded-[32px] lg:rounded-[25px] 2xl:rounded-[32px] bg-[#111111] group">
                <AccordionTrigger className="text-left cursor-pointer hover:no-underline transition-colors p-[20px] pb-0 xs:p-[33px] xs:pb-0 sm:p-[33px] sm:pb-0 lg:p-[25px] lg:pb-0 2xl:p-[33px] 2xl:pb-0 [&>svg]:hidden">
                  <div className="flex sm:items-center gap-3 w-full">
                    <FadeIn direction="right" delay={0.4 + index * 0.1} duration={0.4} className="gradientBgColor flex items-center justify-center xs:text-[18px] sm:text-[24px] lg:text-[20px] 2xl:text-[24px text-white w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 lg:w-7 lg:h-7 2xl:w-10 2xl:h-10 rounded-full">
                      {index + 1}
                    </FadeIn>
                    <span className="text-white text-sm xs:text-lg sm:text-lg lg:text-sm 2xl:text-xl font-normal flex-1 transition-colors duration-300">{item.title}</span>
                    <div className="flex items-center justify-center w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 border border-white/24 bg-white/8 text-white rounded-[10px] lg:rounded-[8px] 2xl:rounded-[10px] text-sm font-bold transition-all duration-300">
                      <FaPlus className="group-data-[state=open]:hidden" />
                      <FaMinus className="hidden group-data-[state=open]:inline" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-[16px] lg:text-[12px] 2xl:text-[16px] font-normal px-[20px] xs:px-[33px] sm:px-[33px] lg:px-[25px] 2xl:px-[33px] pb-0 group-hover:text-white/70 transition-colors duration-300">{item.content}</AccordionContent>
              </AccordionItem>
            </HoverCard>
          </FadeIn>
        ))}

        <div className="mt-[32px] flex items-center justify-center scroll-mt-32" id="contact">
          <Link href="#" className='group flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300'>
            <Image src={moreQuestionIcon} alt="more question" width={48} height={48} className="w-[48px] h-[48px]" />
            <span className='text-white text-base font-medium group-hover:text-white/70'> More questions?</span>
          </Link>
        </div>
      </Accordion>
    </StaggeredFadeIn>
  );
}
