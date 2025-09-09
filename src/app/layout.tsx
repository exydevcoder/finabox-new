import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/footer/Footer';
import StructuredData from '@/components/seo/StructuredData';
import { siteMetadata } from '@/lib/metadata';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins'
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
        <Footer />
      </body>
    </html>
  );
}
