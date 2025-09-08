import Image from 'next/image';
import ambassadorsIcon from '../../assets/core-agent/ambassadors.svg';
import customersIcon from '../../assets/core-agent/customers.svg';
import educateIcon from '../../assets/core-agent/educate.svg';
import supportIcon from '../../assets/core-agent/support.svg';

import certIcon from '../../assets/core-agent/cert.svg';
import exclusiveIcon from '../../assets/core-agent/exclusive.svg';
import earningsIcon from '../../assets/core-agent/earnings.svg';
import toolsIcon from '../../assets/core-agent/tools.svg';
import premiumIcon from '../../assets/core-agent/premium.svg';

import governanceIcon from '../../assets/core-agent/governance.svg';

import HoverCard from '../animations/hover-card';
import StaggeredFadeIn from '../animations/StaggeredFadeIn';
import FadeIn from '../animations/fade-in';
import { Button } from '../ui/button';

export default function CoreAgentSection() {
  const CoreRespData = [
    {
      icon: customersIcon,
      title: 'Onboard customers',
      desc: 'Register users, verify identities, and help them activate secure alerts.'
    },
    {
      icon: educateIcon,
      title: 'Educate communities',
      desc: 'Host meetups and share best practices for safer banking communication.'
    },
    {
      icon: supportIcon,
      title: 'Provide first-level support',
      desc: 'Resolve basic issues and escalate verified cases to Finabox.'
    },
    {
      icon: ambassadorsIcon,
      title: 'Act as ambassadors',
      desc: 'Represent Finabox with professionalism and brand consistency.'
    }
  ];

  const AgentBenefitData = [
    {
      icon: certIcon,
      title: 'Official Finabox Certification',
      desc: 'Get verified status and digital credential.'
    },
    {
      icon: exclusiveIcon,
      title: '100 Exclusive Slots per State',
      desc: 'Operate with territorial clarity and focus.'
    },
    {
      icon: earningsIcon,
      title: '50% Commission Earnings',
      desc: 'Earn as you grow adoption in your state.'
    },
    {
      icon: toolsIcon,
      title: 'Training & Tools Provided',
      desc: 'Onboarding, playbooks, and outreach kits.'
    },
    {
      icon: premiumIcon,
      title: 'Free Finabox Premium',
      desc: 'Enjoy full product access for your operations.'
    }
  ];

  return (
    <section className="px-8 w-full flex items-center justify-center pb-[40px] sm:pb-[80px]">
      <div className="container flex flex-col gap-10">
        <div className="w-full flex flex-col gap-3 px-0 sm:px-6 pt-24">
          <FadeIn direction="up" delay={0.3} distance={40} duration={0.8}>
            <h1 className="titleStyle w-[300px] sm:w-full">
              Core<span className="gradientTextColor"> Responsibilities</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
            <p className="w-[344px] sm:w-full text-base sm:text-[22px] text-[#FFFFFF80] font-normal">Operate with clarity, integrity, and measurable impact across your state.</p>
          </FadeIn>
          <StaggeredFadeIn direction="up" staggerDelay={0.15} initialDelay={0.4} duration={0.7} distance={30} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-7">
            {CoreRespData.map((item, i) => (
              <HoverCard
                hoverScale={1.02}
                hoverElevation={true}
                key={i}
                className="w-full h-full flex flex-col gap-6 p-6 bg-neutral-900 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] outline-1 outline-offset-[-1px] outline-white/25 backdrop-blur-[10px]"
              >
                <div className="flex flex-col gap-3">
                  <HoverCard hoverScale={1.02} hoverElevation={false}>
                    <Image width={32} height={32} src={item.icon} alt="customersIcon" className="transition-transform duration-500" />
                  </HoverCard>
                  <h3 className="text-white text-lg font-medium leading-[24px]">{item.title}</h3>
                </div>
                <p className="text-white/50 text-sm font-normal leading-[20px]">{item.desc}</p>
              </HoverCard>
            ))}
          </StaggeredFadeIn>
        </div>

        <div className="w-full flex flex-col gap-3 px-0 sm:px-6 py-8 sm:py-24">
          <FadeIn direction="up" delay={0.3} distance={40} duration={0.8}>
            <h1 className="titleStyle">
              Agent<span className="gradientTextColor"> Benefits</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} distance={40} duration={0.8}>
            <p className="w-[344px] sm:w-full text-base sm:text-[22px] text-[#FFFFFF80] font-normal">Designed to reward performance and long-term impact.</p>
          </FadeIn>
          <StaggeredFadeIn
            direction="up"
            staggerDelay={0.12}
            initialDelay={0.4}
            duration={0.7}
            distance={30}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-7"
          >
            {AgentBenefitData.map((item, i) => (
              <HoverCard
                key={i}
                hoverScale={1.02}
                hoverElevation={true}
                className="w-full h-full flex flex-col gap-6 p-6 bg-neutral-900 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] outline-1 outline-offset-[-1px] outline-white/25 backdrop-blur-[10px]"
              >
                <div className="flex flex-col gap-3">
                  <HoverCard hoverScale={1.02} hoverElevation={false}>
                    <Image width={20} height={32} src={item.icon} alt="customersIcon" className="transition-transform duration-500" />
                  </HoverCard>
                  <h3 className="text-white text-base font-medium leading-[24px]">{item.title}</h3>
                </div>
                <p className="text-white/50 w-[296px] sm:w-full text-sm font-normal leading-[20px]">{item.desc}</p>
              </HoverCard>
            ))}
          </StaggeredFadeIn>
        </div>

        <HoverCard
          hoverScale={1.008}
          hoverElevation={true}
          className="p-8 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-b from-white/5 to-white/0 rounded-2xl shadow-[inset_0px_1px_0px_1px_rgba(255,255,255,0.03)] backdrop-blur-sm border-t border-l border-r border-indigo-600 gap-6 sm:gap-0"
        >
          <FadeIn direction="left" delay={0.4} duration={0.7} className="flex flex-col sm:flex-row gap-6 items-center sm:items-start w-full sm:w-auto">
            <div className="flex-shrink-0">
              <HoverCard hoverScale={1.08} hoverElevation={false} className="">
                <Image width={48} height={48} src={governanceIcon} alt="governanceIcon" className="transition-transform duration-500" />
              </HoverCard>
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-[700px]">
              <h3 className="text-white text-center sm:text-left text-xl sm:text-2xl font-semibold leading-7 sm:leading-8">Governance</h3>
              <p className="w-[326px] sm:w-full text-white/80 text-center sm:text-left text-sm sm:text-base font-normal leading-6">
                Agents follow a strict code of conduct, pay ₦20,000 annual license fee, and must renew annually based on compliance.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.5} duration={0.6} className="w-full sm:w-auto">
            <HoverCard hoverScale={1.03} hoverElevation>
              <Button variant="customWithGradient" className="!w-full sm:!w-[156px] !h-[48px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(137,33,255,0.3)]">
                Apply
              </Button>
            </HoverCard>
          </FadeIn>
        </HoverCard>
      </div>
    </section>
  );
}
