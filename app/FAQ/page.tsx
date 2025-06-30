'use client';

import React from 'react';

const faqs = [
  {
    q: 'What is ToolTonic.io?',
    a: 'ToolTonic.io is a free AI-powered online toolkit designed for quick file optimization. It offers tools like image resizing, file compression, format conversion, QR code generation, photo collage creation, and QR code scanning—all in one place.',
  },
  {
    q: 'Is ToolTonic.io completely free?',
    a: 'Yes! All tools on ToolTonic.io are 100% free to use with no hidden charges.',
  },
  {
    q: 'How do I compress files using ToolTonic.io?',
    a: 'Drag & drop your file or click to browse. Select your preferred compression level. Download the compressed file instantly.',
  },
  {
    q: 'Can I resize images without losing quality?',
    a: 'Yes! ToolTonic.io uses AI-powered resizing to maintain optimal quality while adjusting dimensions. You can also preview changes before downloading.',
  },
  {
    q: 'What file formats are supported for conversion?',
    a: 'Supported formats include JPEG, PNG, WebP, PDF, and more, depending on the tool.',
  },
  {
    q: 'Does ToolTonic.io work on mobile devices?',
    a: 'Absolutely! The website is fully responsive and works smoothly on mobile phones, tablets, and desktops.',
  },
  {
    q: 'How do I generate a QR code?',
    a: 'Go to the QR Code Generator tool. Enter your URL or text. Customize size and color if needed. Download the QR code instantly.',
  },
  {
    q: 'Are my uploaded files stored on your servers?',
    a: 'No, all processing happens client-side (in your browser). Your files are never stored on our servers.',
  },
  {
    q: 'Why should I use ToolTonic.io instead of other tools?',
    a: 'AI-powered optimizations for better results. No watermarks on downloads. Faster processing with no wait times. Ad-supported but non-intrusive.',
  },
  {
    q: 'Can I compress multiple files at once?',
    a: 'Currently, bulk processing is not supported, but you can process files one by one efficiently.',
  },
  {
    q: 'How do I scan a QR code using ToolTonic.io?',
    a: 'Open the Scan QR Code tool. Allow camera access. Point your camera at the QR code to decode it instantly.',
  },
  {
    q: 'Does ToolTonic.io support dark mode?',
    a: 'Yes! The website automatically adjusts to light/dark mode based on your device settings.',
  },
  {
    q: 'How can I contact support for issues?',
    a: 'For any queries, email us at tooltonicapp@gmail.com.',
  },
  {
    q: 'Is ToolTonic.io SEO-friendly?',
    a: 'Yes! The website is optimized for search engines, ensuring better visibility and traffic.',
  },
  {
    q: 'Can I use ToolTonic.io for commercial purposes?',
    a: 'Yes, all tools are free for personal and commercial use. However, redistribution of processed files may have restrictions based on original file licenses.',
  },
];

const FAQsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions (FAQs)</h1>
      <section className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index}>
            <h2 className="font-semibold text-lg mb-1">
              {index + 1}. {item.q}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-4">{item.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default FAQsPage;
