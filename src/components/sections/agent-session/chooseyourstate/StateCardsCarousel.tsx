'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import FadeIn from '@/components/animations/fade-in';
import HoverCard from '@/components/animations/hover-card';
import { stateData } from './mockData';
import StaggeredFadeIn from '@/components/animations/StaggeredFadeIn';
import { BOOK_MEETING_URL } from '@/utils/globalUrl';
import { scrollToSection } from '@/lib/scrollTo';

export default function StateCardsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'bg-green-400';
      case 'few left':
        return 'bg-yellow-400';
      case 'full':
        return 'bg-white/20';
      default:
        return 'bg-green-400';
    }
  };

  return (
    <div className="relative">
      <Swiper
        onSwiper={swiper => (swiperRef.current = swiper)}
        modules={[Grid, Navigation]}
        slidesPerView={2}
        spaceBetween={12}
        grid={{
          rows: 2,
          fill: 'row'
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            grid: { rows: 2 }
          },
          640: {
            slidesPerView: 2,
            grid: { rows: 2 }
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2 }
          },
          1280: {
            slidesPerView: 4,
            grid: { rows: 2 }
          }
        }}
        className="w-full"
      >
        {stateData.map((state, index) => (
          <SwiperSlide key={index}>
            <FadeIn direction="up" delay={0.1 + index * 0.1} duration={0.6} className="h-full">
              <HoverCard
                hoverScale={1.02}
                hoverElevation
                className="h-full p-5 flex flex-col gap-5 bg-gradient-to-b from-white/5 to-white/0 rounded-2xl shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] outline outline-offset-[-1px] outline-white/10 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:outline-white/20"
              >
                <StaggeredFadeIn direction="up" staggerDelay={0.05} initialDelay={0.3 + index * 0.1} className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-white text-lg font-medium leading-7">{state.name}</h3>
                    <div className="flex items-center gap-2">
                      <HoverCard hoverScale={1.1} className="flex items-center">
                        <Badge variant="secondary" className={`h-2.5 w-2.5 p-0 rounded-full ${getStatusColor(state.status)} transition-all duration-300`} />
                      </HoverCard>
                      <span className="text-white/70 capitalize text-sm font-normal leading-5">{state.status}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-right text-white/60 text-xs font-normal leading-4">Slots Remaining</p>
                    <h3 className="text-right text-white text-xl font-semibold leading-7">{state.value}</h3>
                  </div>
                </StaggeredFadeIn>

                <FadeIn direction="up" delay={0.5 + index * 0.1} duration={0.6} className="w-full flex gap-3">
                  <HoverCard hoverScale={1.02} hoverElevation className="w-full">
                    {state.status === 'Full' ? (
                      <Button
                        variant={state.status === 'Full' ? 'disableStyle' : 'customWithGradient'}
                        disabled={state.status === 'Full'}
                        className="text-center gap-3 !w-full !h-[48px] !text-sm rounded-[10px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(137,33,255,0.3)]"
                      >
                        Join Now
                      </Button>
                    ) : (
                      <Button
                        variant={state.status === 'Full' ? 'disableStyle' : 'customWithGradient'}
                        disabled={state.status === 'Full'}
                        className="text-center gap-3 !w-full !h-[48px] !text-sm rounded-[10px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(137,33,255,0.3)]"
                        onClick={() => scrollToSection('contact')}
                      >
                        Join Now
                      </Button>
                    )}
                  </HoverCard>

                  <HoverCard hoverScale={1.02} hoverElevation className="w-full">
                    {state.status === 'Full' ? (
                      <Button
                        variant={state.status === 'Full' ? 'disableStyle' : 'customWithGradient'}
                        disabled={state.status === 'Full'}
                        className="bg-white text-center !w-full !h-[48px] !text-sm text-black rounded-[10px] gap-3 hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] "
                      >
                        Book a <br />
                        Meeting
                      </Button>
                    ) : (
                      <a href={BOOK_MEETING_URL} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant={state.status === 'Full' ? 'disableStyle' : 'customWithGradient'}
                          disabled={state.status === 'Full'}
                          className="bg-white text-center !w-full !h-[48px] !text-sm text-black rounded-[10px] gap-3 hover:bg-gray-100 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] "
                        >
                          Book a <br />
                          Meeting
                        </Button>
                      </a>
                    )}
                  </HoverCard>
                </FadeIn>
              </HoverCard>
            </FadeIn>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button variant="outline" size="icon" className="absolute hidden left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background" onClick={() => swiperRef.current?.slidePrev()}>
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button variant="outline" size="icon" className="absolute hidden right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background" onClick={() => swiperRef.current?.slideNext()}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
