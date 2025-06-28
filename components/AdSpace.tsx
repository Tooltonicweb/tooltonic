'use client';

import Script from 'next/script';
import { useEffect, useState, useRef } from 'react';

interface AdSpaceProps {
  type: 'horizontal' | 'vertical';
}

export default function AdSpace({ type }: AdSpaceProps) {
  const [isClient, setIsClient] = useState(false);
  const adLoaded = useRef(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !adLoaded.current) {
      const interval = setInterval(() => {
        try {
          if (
            typeof window !== 'undefined' &&
            Array.isArray((window as any).adsbygoogle)
          ) {
            (window as any).adsbygoogle.push({});
            adLoaded.current = true;
            clearInterval(interval);
          }
        } catch (err) {
          console.error('Adsense error:', err);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div
      className={`ad-space bg-gray-100 rounded-lg flex items-center justify-center my-6  
        ${type === 'horizontal' ? 'w-full h-24' : 'w-48 h-96 sticky top-24'}`}
    >
      <Script
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={type === 'horizontal' ? '1234567890' : '0987654321'}
        data-ad-format={type === 'horizontal' ? 'auto' : 'vertical'}
        data-full-width-responsive="true"
      ></ins>

      <div className="text-center p-4 text-gray-500">Advertisement</div>
    </div>
  );
}
