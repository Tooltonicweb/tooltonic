// pages/about-us.tsx
import Head from 'next/head';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | ToolTonic</title>
        <meta name="description" content="Learn more about ToolTonic, our mission, and the team behind it." />
      </Head>

      <section className="container mt-4 animate-fade">
        <h1 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>About ToolTonic</h1>
        <p className="text-center mb-4">ToolTonic is a modern platform offering powerful AI-based tools to simplify your digital tasks.</p>

        <div className="card mt-3">
          <div className="card-body">
            <h2 className="card-title">Our Mission</h2>
            <p className="card-text">
              At ToolTonic, our mission is to make AI tools accessible, free, and easy-to-use for everyone. Whether you're editing a file, converting a format, or scanning a QR code — we've got your back.
            </p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h2 className="card-title">Who We Are</h2>
            <p className="card-text">
              We are a team of developers, designers, and innovators passionate about simplifying technology for everyday users. ToolTonic is proudly made in India 🇮🇳.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
