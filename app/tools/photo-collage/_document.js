// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2c3e50" />
        <meta name="description" content="Create beautiful photo collages easily with Tooltonic Collage. Customize layout, download, and share. Free and fast!" />
        <meta name="keywords" content="Photo collage, image grid, collage maker, online collage tool, Tooltonic" />
        <meta name="author" content="Tooltonic Team" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Tooltonic Collage" />
        <meta property="og:description" content="Free online photo collage maker. Customize, download & share!" />
        <meta property="og:image" content="/icons/social-share-preview.png" />
        <meta property="og:url" content="https://tooltonic.io/collage" />
        <meta property="og:type" content="website" />

        {/* PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
