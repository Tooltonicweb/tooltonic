// app/contact-us/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ToolTonic - AI File Tools Support | tooltonic.io',
  description: 'Need help with ToolTonic? Contact us at tooltonicapp@gmail.com for inquiries, feedback, or support.',
  keywords: ['ToolTonic support', 'contact file tools', 'PDF compressor contact', 'AI tools feedback'],
  openGraph: {
    title: 'Contact ToolTonic - Get Help with AI File Tools',
    description: 'Reach out at tooltonicapp@gmail.com for support with ToolTonic\'s file conversion, compression, and editing tools.',
    url: 'https://tooltonic.io/contact',
    type: 'website',
    images: [
      {
        url: 'https://tooltonic.io/images/contact-preview.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ToolTonic - AI File Tools Support',
    description: 'Email us at tooltonicapp@gmail.com for questions about ToolTonic\'s file tools.',
    images: ['https://tooltonic.io/images/contact-twitter-card.png'],
  },
};


export default function ContactUsPage() {
  return (
    <section className="container mt-4 animate-slide">
      <h1 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>
        Contact Us
      </h1>
      {/* Form or Thank You Message */}
    </section>
  );
}
