// pages/contact-us.tsx
import Head from 'next/head';
import { useState } from 'react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact Us | ToolTonic</title>
        <meta name="description" content="Get in touch with the ToolTonic team. We'd love to hear from you." />
      </Head>

      <section className="container mt-4 animate-slide">
        <h1 className="text-center mb-4" style={{ color: 'var(--primary-color)' }}>Contact Us</h1>

        {!submitted ? (
          <form className="card p-4" onSubmit={handleSubmit}>
            <label className="mb-2">Your Name</label>
            <input type="text" className="form-control mb-3" required />

            <label className="mb-2">Your Email</label>
            <input type="email" className="form-control mb-3" required />

            <label className="mb-2">Message</label>
            <textarea className="form-control mb-3" rows={5} required />

            <button type="submit" className="btn">Send Message</button>
          </form>
        ) : (
          <div className="card p-4 text-center">
            <h2>Thank you!</h2>
            <p>We received your message and will get back to you shortly.</p>
          </div>
        )}
      </section>
    </>
  );
}
