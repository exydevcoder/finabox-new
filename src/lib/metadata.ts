import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  // Add metadataBase to resolve relative URLs
  metadataBase: new URL('https://finabox.com.ng'),
  
  title: 'Finabox - Smart, Secure Inbox for Your Money | Financial Communication Platform',
  description: 'Cut SMS costs and deliver instant transaction messages with Finabox. Built for banks and fintechs with secure message delivery, real-time dispute actions, and full compliance.',
  keywords: 'transaction alerts, banking notifications, SMS alternative, financial messaging, secure alerts, bank compliance, fintech solutions',
  authors: [{ name: 'Finabox Team' }],
  creator: 'Finabox',
  publisher: 'Finabox',
  robots: 'index, follow',
  openGraph: {
    title: 'Finabox - Smart, Secure Inbox for Your Money',
    description: 'Cut SMS costs and deliver instant transaction messages. Built for banks with secure delivery and real-time dispute actions.',
    url: 'https://finabox.com.ng',
    siteName: 'Finabox',
    // banner with size 1200 x 630: This image shows when someone shares your link on platforms like Facebook, LinkedIn, or WhatsApp.
    images: [
      {
        url: '/og-image.png', // This will now resolve to https://finabox.com.ng/og-image.png
        width: 1200,
        height: 630,
        alt: 'Finabox - Smart Financial Messaging Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  //twitter display info
  twitter: {
    card: 'summary_large_image',
    title: 'Finabox - Smart, Secure Inbox for Your Money',
    description: 'Cut SMS costs and deliver instant transaction messages. Built for banks with secure delivery.',
    // banner with size 1200 x 675: This image shows when someone shares your link on platforms like Twitter.
    images: ['/twitter-image.png'], // This will now resolve to https://finabox.com.ng/twitter-image.png
    creator: '@finabox', // Add your Twitter handle
  },
  alternates: {
    canonical: 'https://finabox.com.ng',
  },
  verification: {
    google: 'p3g-tQF24T8Cxh-KeXKenIEbSgc-1oGunTQXi2UAP5g',
  },
};