import { StaticImageData } from "next/image"

// pricing.ts
export interface PricingFeature {
  text: string
  icon: StaticImageData
}

export interface PricingButton {
  text: string
  href?: string
  icon?: StaticImageData
  onClick?: () => void
}

export interface PricingPlan {
  name: string
  description: string
  price: {
    amount: string
    currency: string
    period: string
  }
  features: PricingFeature[]
  buttons: PricingButton[]
  popular?: boolean
}

export interface PricingData {
  plans: PricingPlan[]
}