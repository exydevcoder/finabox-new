import type { PricingData } from '@/types/pricing';
import CheckIcon from '@/assets/icons/check-icon.svg';
import PlayStoreIcon from '@/assets/icons/play-store.svg';
import AppleStoreIcon from '@/assets/icons/apple-store.svg';

export const pricingData: PricingData = {
  plans: [
    {
      name: 'End-Users',
      description: 'No hidden fees. No subscriptions. You only pay for what you receive. Billed through your wallet. ',
      price: {
        amount: '₦1.00',
        currency: 'NGN',
        period: '/Per Message'
      },
      features: [
        {
          text: 'Enjoy 3 months free when you sign up',
          icon: CheckIcon
        },
        {
          text: 'After that, it’s just ₦1 per message',
          icon: CheckIcon
        },
        {
          text: 'No hidden fees',
          icon: CheckIcon
        },
        {
          text: 'No subscriptions',
          icon: CheckIcon
        },
        {
          text: 'You only pay for what you receive',
          icon: CheckIcon
        },
        {
          text: 'Billed through your wallet',
          icon: CheckIcon
        }
      ],
      buttons: [
        {
          text: 'Play store',
          icon: PlayStoreIcon
        },
        {
          text: 'App store',
          icon: AppleStoreIcon
        }
      ]
    },
    {
      name: 'Banks & Fintechs',
      description: 'One time setup fee for banks an fintechs',
      price: {
        amount: '₦100,000.00',
        currency: 'NGN',
        period: '/Per Setup'
      },
      features: [
        {
          text: 'Unlimited alerts',
          icon: CheckIcon
        },
        {
          text: 'Multiple integrations',
          icon: CheckIcon
        },
        {
          text: 'Full delivery & dispute logs',
          icon: CheckIcon
        },
        {
          text: 'Dedicated infrastructure setup',
          icon: CheckIcon
        },
        {
          text: 'Custom SLAs + audit compliance',
          icon: CheckIcon
        },
        {
          text: 'Dedicated account manager',
          icon: CheckIcon
        },
        {
          text: 'Priority support',
          icon: CheckIcon
        }
      ],
      buttons: [
        {
          text: 'Get Started'
        },
        {
          text: 'Book a Demo'
        }
      ],
      popular: true
    }
  ]
};
