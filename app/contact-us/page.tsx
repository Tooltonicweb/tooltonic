// app/contact-us/page.tsx
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Contact ToolTonic - AI File Tools Support | tooltonic.io',
  description: 'Need help with ToolTonic? Contact us at tooltonicapp@gmail.com for inquiries, feedback, or support.',
  keywords: ['ToolTonic support', 'contact file tools', 'PDF compressor contact', 'AI tools feedback'],
  openGraph: {
    title: 'Contact ToolTonic - Get Help with AI File Tools',
    description: 'Reach out at tooltonicapp@gmail.com for support with ToolTonic&#39;s file conversion, compression, and editing tools.',
    url: 'https://tooltonic.io/contact-us',
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

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://tooltonic.io/contact-us" />
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
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Contact ToolTonic</h1>
        <p className="text-center mb-8 text-gray-600">
          For any queries, suggestions, or technical issues, feel free to reach out. We&apos;re here to help you!
        </p>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
<p className="mb-2">
  📧 Email: <a href="mailto:tooltonicapp@gmail.com" className="text-blue-600 hover:underline">tooltonicapp@gmail.com</a>
</p>
<p className="mb-2">
  📞 Phone: <a href="tel:+919344072130" className="text-blue-600 hover:underline">+91-9344072130</a>
</p>
<p className="mb-2">
  🌐 Website: <a href="https://tooltonic.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tooltonic.io</a>
</p>
<p className="mb-2">📍 Location: India 🇮🇳</p>

        </div>
      </section>
    </>
  );
}
