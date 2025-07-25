// components/MetaTags.js

import Head from 'next/head';

const MetaTags = () => {
  return (
    <Head>
      <title>ToolTonic - AI Powered File First Aid | Convert Files Online</title>
      <meta
        name="description"
        content="Convert your files online with ToolTonic. Free AI-powered file conversion for images, documents, and more. Fast, secure, and easy to use."
      />
      <meta
        name="keywords"
        content="file converter, image converter, PDF converter, online file conversion, free file converter, AI file conversion"
      />
       <meta name="google-site-verification" content="HHgvf8IYHQHr34iBsu8fo7TNGWtIFLcFjLcpdt4QptY" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tooltonic.io/" />
      <meta property="og:title" content="ToolTonic - AI Powered File First Aid" />
      <meta
        property="og:description"
        content="Convert your files online with ToolTonic. Free AI-powered file conversion for images, documents, and more."
      />
      <meta property="og:image" content="https://tooltonic.io/og-image.png" />
      <meta property="og:image:width" content="100" />
<meta property="og:image:height" content="100" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tooltonic.io/" />
      <meta property="twitter:title" content="ToolTonic - AI Powered File First Aid" />
      <meta
        property="twitter:description"
        content="Convert your files online with ToolTonic. Free AI-powered file conversion for images, documents, and more."
      />
      <meta property="twitter:image" content="https://tooltonic.io/og-image.png" />

      {/* Favicon & Manifest */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      

      {/* Canonical URL */}
      <link rel="canonical" href="https://tooltonic.io/" />
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ToolTonic",
            url: "https://tooltonic.io",
            logo: "https://tooltonic.io/og-image.png",
          }),
        }}
      />
     
    </Head>
  );
};

export default MetaTags;
