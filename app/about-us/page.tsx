import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ToolTonic - AI File Tools Support | tooltonic.io',
  description: 'Need help with ToolTonic? Contact us at tooltonicapp@gmail.com for inquiries, feedback, or support.',
  keywords: ['ToolTonic support', 'contact file tools', 'PDF compressor contact', 'AI tools feedback'],
  openGraph: {
    title: 'About ToolTonic - Get Help with AI File Tools',
    description: 'Reach out at tooltonicapp@gmail.com for support with ToolTonic\'s file conversion, compression, and editing tools.',
    url: 'https://tooltonic.io/about-us',
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

export default function AboutUsPage() {
  return (
    <section className="container mt-4 animate-fade">
      <h1 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>About ToolTonic</h1>
      <p className="text-center mb-4">
        ToolTonic is a modern platform offering powerful AI-based tools to simplify your digital tasks.
      </p>

      <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title">Our Mission</h2>
          <p className="card-text">
            At ToolTonic, our mission is to make AI tools accessible, free, and easy-to-use for everyone.
            Whether you&apos;re editing a file, converting a format, or scanning a QR code — we&apos;ve got your back.
          </p>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title">Who We Are</h2>
          <p className="card-text">
            We are a team of developers, designers, and innovators passionate about simplifying technology
            for everyday users. ToolTonic is proudly made in India 🇮🇳.
          </p>
        </div>
      </div>
    </section>
  );
}
