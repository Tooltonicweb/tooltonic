'use client';

import React from 'react';

const TermsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10">Last Updated: 30-06-2025</p>

      <section className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6">
        <p>
          Welcome to <strong>ToolTonic.io</strong> (&quot;ToolTonic&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our website (https://tooltonic.io), you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) agree to comply with and be bound by these Terms of Service (ToS). If you do not agree, please refrain from using our services.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using ToolTonic.io, you confirm that you have read, understood, and accepted these Terms along with our Privacy Policy. These terms apply to tools like:
        </p>
        <ul>
          <li>Image Resizing</li>
          <li>File Compression</li>
          <li>File Conversion</li>
          <li>QR Code Generation</li>
          <li>Photo Collage Creation</li>
          <li>QR Code Scanning</li>
        </ul>

        <h2>2. Eligibility</h2>
        <p>You must be at least 13 years old. If under 18, you confirm parental or guardian consent.</p>

        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Use only for lawful purposes.</li>
          <li>No malicious, spam, or copyrighted files.</li>
          <li>Keep account credentials confidential.</li>
        </ul>

        <h2>4. Intellectual Property Rights</h2>
        <ul>
          <li>ToolTonic retains rights to branding and tech.</li>
          <li>Users own their files, but grant us a license to process them.</li>
        </ul>

        <h2>5. Advertisements &amp; Monetization</h2>
        <ul>
          <li>We use Google AdSense and others.</li>
          <li>You consent to personalized/non-personalized ads.</li>
          <li>We are not responsible for third-party ad content.</li>
        </ul>

        <h2>6. Prohibited Activities</h2>
        <ul>
          <li>No reverse engineering or vulnerability exploitation.</li>
          <li>No scraping via bots.</li>
          <li>No malware or phishing.</li>
          <li>No violation of laws.</li>
        </ul>

        <h2>7. Data Privacy &amp; Security</h2>
        <ul>
          <li>We use client-side processing when possible.</li>
          <li>Uploaded files are temporarily stored and auto-deleted.</li>
          <li>See our Privacy Policy for more.</li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <ul>
          <li>Service is provided &quot;as is&quot;.</li>
          <li>We are not liable for data loss, damages, or errors.</li>
        </ul>

        <h2>9. Termination</h2>
        <p>We may suspend or terminate accounts for violations without prior notice.</p>

        <h2>10. Changes to Terms</h2>
        <p>We may update terms anytime. Continued use means acceptance.</p>

        <h2>11. Governing Law</h2>
        <p>These terms are governed by the laws of India.</p>

        <h2>12. Contact Us</h2>
        <p>Email: <a href="mailto:tooltonicapp@gmail.com" className="text-blue-600">tooltonicapp@gmail.com</a></p>
      </section>

      <hr className="my-10 border-gray-300 dark:border-gray-600" />

      <h2 className="text-2xl font-bold mb-4">FAQs</h2>
      <section className="grid gap-6">
        {[
          ['Is ToolTonic.io free to use?', 'Yes, all tools are 100% free.'],
          ['How does file compression work?', 'Our AI optimizes encoding to reduce size without quality loss.'],
          ['Are uploaded files stored permanently?', 'No, they are deleted after processing.'],
          ['What file formats are supported?', 'JPEG, PNG, WebP, PDF, and more depending on the tool.'],
          ['Can I use ToolTonic.io on mobile?', 'Yes, the site is fully responsive.'],
          ['Why do I see ads?', 'Ads keep our services free and comply with Google policies.'],
          ['How do I report a bug?', 'Email us at tooltonicapp@gmail.com.'],
          ['Is there a file size limit?', 'Yes, typically up to 50MB per tool.'],
          ['Can I convert PDF to JPG?', 'Yes, via the &quot;Convert File&quot; tool.'],
          ['Do you support batch processing?', 'Currently, one file at a time for best performance.'],
          ['How do I download my file?', 'Click the download button after processing.'],
          ['Is ToolTonic.io secure?', 'Yes, client-side processing is prioritized.'],
          ['Can I resize without quality loss?', 'Yes, our AI minimizes quality loss.'],
          ['How do QR code tools work?', 'Generate or scan QR codes instantly.'],
          ['Where can I suggest features?', 'Email tooltonicapp@gmail.com with your ideas!'],
        ].map(([q, a], i) => (
          <div
            key={i}
            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <h3 className="font-semibold text-gray-900 dark:text-white">{i + 1}. {q}</h3>
            <p className="mt-1 text-gray-700 dark:text-gray-300 text-sm">{a}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TermsPage;
