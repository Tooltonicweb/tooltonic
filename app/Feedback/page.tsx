'use client';

import React from 'react';

const FeedbackPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">Share Your Feedback – Help Us Improve ToolTonic.io!</h1>
      <p className="text-sm text-gray-500 mb-8">We appreciate your time and suggestions 🙌</p>

      <section className="space-y-6">
        <p>
          Thank you for using <strong>ToolTonic.io</strong> – your input is invaluable to us! We’re constantly working to
          enhance your experience with our AI-powered file tools, and we’d love to hear your thoughts.
        </p>

        <h2 className="text-xl font-semibold">✅ User Experience (UX)</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Is the website easy to navigate?</li>
          <li>Are the tools (Image Resize, Compress Files, QR Code Generator, etc.) intuitive?</li>
          <li>Any features you’d like added or improved?</li>
        </ul>

        <h2 className="text-xl font-semibold">✅ Performance & Speed</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>How fast do the tools process files?</li>
          <li>Did you encounter any lag or errors?</li>
        </ul>

        <h2 className="text-xl font-semibold">✅ Design & Accessibility</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Is the interface visually appealing and mobile-friendly?</li>
          <li>Are the ads non-intrusive? (We follow Google AdSense guidelines.)</li>
        </ul>

        <h2 className="text-xl font-semibold">✅ Feature Requests</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>What new tools would you find useful? (e.g., Video Compressor, PDF Merge)</li>
          <li>Would you prefer batch processing for multiple files?</li>
        </ul>

        <h2 className="text-xl font-semibold">✅ Bug Reports</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Did you face any issues? Please describe them.</li>
        </ul>

        <h2 className="text-xl font-semibold">📩 How to Share Feedback</h2>
        <p>
          Please email us at:{' '}
          <a
            href="mailto:tooltonicapp@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            tooltonicapp@gmail.com
          </a>
        </p>

        <p className="mt-6">Your feedback helps us make ToolTonic.io faster, smarter, and more user-friendly. We appreciate your support!</p>

        <p className="font-semibold mt-4">— The ToolTonic Team 🚀</p>
      </section>
    </main>
  );
};

export default FeedbackPage;
