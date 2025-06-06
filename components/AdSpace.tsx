'use client'; 
 
import Script from 'next/script'; 
 
interface AdSpaceProps { 
  type: 'horizontal' | 'vertical'; 
} 
 
export default function AdSpace({ type }: AdSpaceProps) { 
  return ( 
    <div className={`ad-space bg-gray-100 rounded-lg flex items-center just
 ify-center my-6  
      ${type === 'horizontal' ? 'w-full h-24' : 'w-48 h-96 sticky top-24'}`
 } 
    > 
      {/* Google AdSense */} 
      <Script  
        strategy="afterInteractive"  
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.j
 s?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`} 
        crossOrigin="anonymous" 
      /> 
      <ins  
        className="adsbygoogle" 
        style={{ display: 'block' }} 
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID} 
        data-ad-slot={type === 'horizontal' ? '1234567890' : '0987654321'} 
        data-ad-format={type === 'horizontal' ? 'auto' : 'vertical'} 
        data-full-width-responsive="true" 
      /> 
      <Script id="ad-script"> 
        {`(adsbygoogle = window.adsbygoogle || []).push({});`} 
      </Script> 
       
      {/* Fallback */} 
      <div className="text-center p-4 text-gray-500"> 
        Advertisement 
      </div> 
    </div> 
  ); 
}