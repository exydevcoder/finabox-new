'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/' && typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [pathname]);

  return null;
}
