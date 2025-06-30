'use client';

import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last Updated: 28 June 2025</p>

      <section className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-6">
        <h2>1. Introduction</h2>
        <p>
          Welcome to ToolTonic. We operate the website ToolTonic.io (<span className="italic">&quot;Website&quot;</span>), an AI-powered platform offering free online tools for file compression, conversion, QR code generation, photo collage creation, and more. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Website. By using our services, you agree to the terms outlined in this policy.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>A. Personal Information</h3>
        <ul>
          <li>Name (if provided via contact forms)</li>
          <li>Email address (for support inquiries or newsletters)</li>
          <li>IP address (for analytics and security)</li>
          <li>Browser and device information (for optimization)</li>
        </ul>

        <h3>B. Non-Personal Information</h3>
        <ul>
          <li>Cookies and tracking technologies (Google Analytics, AdSense)</li>
          <li>Usage data (pages visited, session duration, clicks)</li>
          <li>Device type (mobile, desktop, tablet)</li>
          <li>Referral sources (search engines, social media)</li>
        </ul>

        <h3>C. User-Uploaded Files</h3>
        <ul>
          <li>Uploaded files are temporarily stored and not retained after processing.</li>
          <li>We do not access, share, or store files beyond required processing.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>Providing Services: file compression, conversion, QR generation, etc.</li>
          <li>Improving User Experience: website performance and features.</li>
          <li>Analytics &amp; SEO: traffic and behavior monitoring.</li>
          <li>Advertising: relevant ads via Google AdSense.</li>
          <li>Customer Support: response to tooltonicapp@gmail.com.</li>
        </ul>

        <h2>4. Data Sharing &amp; Disclosure</h2>
        <p>We do not sell your personal data. We may share information with:</p>
        <ul>
          <li>Third-party service providers (Google Analytics, AdSense, Vercel hosting)</li>
          <li>Legal authorities (if required by law)</li>
          <li>Business partners (affiliate programs, if applicable)</li>
        </ul>

        <h2>5. Cookies &amp; Tracking Technologies</h2>
        <p>We use:</p>
        <ul>
          <li>Essential Cookies: for core functionality</li>
          <li>Analytics Cookies: to track usage</li>
          <li>Advertising Cookies: for personalized ads</li>
        </ul>
        <p>
          You may disable cookies in your browser, but some features may not function correctly.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>Our Website integrates:</p>
        <ul>
          <li>Google AdSense (ads)</li>
          <li>Google Analytics (traffic)</li>
          <li>Social Plugins (Facebook, Twitter, LinkedIn)</li>
        </ul>
        <p>Each service has its own privacy policy. We are not responsible for their practices.</p>

        <h2>7. Data Security</h2>
        <ul>
          <li>SSL encryption for secure data transfer</li>
          <li>Temporary file storage (auto-deletion post-processing)</li>
          <li>Hosted on Vercel with industry-standard security</li>
        </ul>
        <p>Note: No online platform is 100% secure. Use our tools at your own discretion.</p>

        <h2>8. User Rights &amp; Choices</h2>
        <ul>
          <li>Access, correct, or delete your personal data</li>
          <li>Opt-out of marketing emails</li>
          <li>Disable cookies via browser settings</li>
        </ul>
        <p>Contact us for any requests at tooltonicapp@gmail.com.</p>

        <h2>9. Children&apos;s Privacy</h2>
        <p>This website is not intended for users under 13. We do not knowingly collect their data.</p>

        <h2>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Please review this page regularly.</p>

        <h2>11. Contact Us</h2>
        <p>
          For any questions, contact us at:&nbsp;
          <a href="mailto:tooltonicapp@gmail.com" className="text-blue-600 underline">
            tooltonicapp@gmail.com
          </a>
        </p>

        <h2>Additional Legal Disclosures</h2>

        <h3>GDPR Compliance (EU Users)</h3>
        <ul>
          <li>Request data portability</li>
          <li>Withdraw consent</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>

        <h3>CCPA Compliance (California Users)</h3>
        <ul>
          <li>Request disclosure of data collected</li>
          <li>Opt-out of data sale</li>
          <li>Request deletion of personal data</li>
        </ul>

        <h3>Data Retention Policy</h3>
        <ul>
          <li>Uploaded files: deleted immediately after processing</li>
          <li>Analytics: retained up to 26 months</li>
          <li>Contact form data: used only for customer support</li>
        </ul>

        <h2>Final Notes</h2>
        <p>
          By using ToolTonic.io, you confirm you&apos;ve read and understood this Privacy Policy. Thank you for trusting ToolTonic 🚀
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
