// app/contact-us/page.tsx
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'ToolTonic - AI File Tools Support | tooltonic.io',
  description: 'Need help with ToolTonic? Contact us at tooltonicapp@gmail.com for inquiries, feedback, or support.',
  keywords: ['ToolTonic support', 'contact file tools', 'PDF compressor contact', 'AI tools feedback'],
  openGraph: {
    title: 'ToolTonic - Get Help with AI File Tools',
    description: 'Reach out at tooltonicapp@gmail.com for support with ToolTonic&#39;s file conversion, compression, and editing tools.',
    url: 'https://tooltonic.io/register',
    type: 'website',
    images: [
      {
        url: 'https://tooltonic.io/logo.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ToolTonic - AI File Tools Support',
    description: 'Email us at tooltonicapp@gmail.com for questions about ToolTonic&#39;s file tools.',
    images: ['https://tooltonic.io/logo.png'],
  },
};

export default function RegisterPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://tooltonic.io/register" />
      </Head>

      {/* JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ToolTonic",
            "url": "https://tooltonic.io",
            "logo": "https://tooltonic.io/logo.png",
            "email": "tooltonicapp@gmail.com",
            "description": "ToolTonic is an AI-powered file tools platform that helps you convert, compress, and manage files easily.",
            "sameAs": [
              "https://facebook.com/yourpage",
              "https://twitter.com/yourhandle",
              "https://instagram.com/yourprofile",
              "https://linkedin.com/company/yourcompany",
              "https://youtube.com/@yourchannel",
              "https://github.com/yourrepo"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "tooltonicapp@gmail.com",
              "contactType": "Customer Support",
              "availableLanguage": ["English", "Hindi"],
              "areaServed": "IN"
            }
          }),
        }}
      />

      <section className="container mx-auto px-4 py-12 animate-fade">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Register</h1>
        
      </section>
    </>
  );
}
