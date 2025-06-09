import type { Metadata } from 'next'; 
import { Inter } from 'next/font/google'; 
import '../globals.css'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
 
const inter = Inter({ subsets: ['latin'] }); 
 
export const metadata: Metadata = { 
  title: 'ToolTonic - AI Powered File First Aid', 
  description: `Free online tools for image editing, file conversion, QR codes and more. 
AI-powered solutions for all your file needs.`, 
  keywords: `image resize, compress files, convert files, QR code generator,
MP3 cutter, photo collage, background remover`,
  authors: [{ name: 'ToolTonic', url: 'https://tooltonic.io' }], 
  openGraph: { 
    title: 'ToolTonic - AI Powered File First Aid', 
    description: 'Free online tools for image editing, file conversion, QR codes and more.', 
    url: 'https://tooltonic.io', 
    siteName: 'ToolTonic', 
    images: [ 
      { 
        url: 'https://tooltonic.io/og-image.png', 
        width: 1200, 
        height: 630, 
      }, 
    ], 
    locale: 'en_US', 
    type: 'website', 
  }, 
  twitter: { 
    card: 'summary_large_image', 
    title: 'ToolTonic - AI Powered File First Aid', 
    description: 'Free online tools for image editing, file conversion, QR codes and more.', 
    images: ['https://tooltonic.io/og-image.png'], 
  }, 
}; 
 
export default function RootLayout({ 
  children, 
}: { 
  children: React.ReactNode 
}) { 
  return ( 
    <html lang="en"> 
      <body className={inter.className}> 
        <Header /> 
        {children} 
        <Footer /> 
      </body> 
    </html> 
  ); 
}
