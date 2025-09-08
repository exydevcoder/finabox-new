import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import { Toaster } from '@/components/ui/sonner';
import StructuredData from '@/components/seo/StructuredData';
import { siteMetadata } from '@/lib/metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap', // Add this
  preload: true // Add this
});
export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <NavBar />
        <main>{children}</main>
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
