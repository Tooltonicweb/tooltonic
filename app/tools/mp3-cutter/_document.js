// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free online MP3 cutter tool. Cut and edit your audio files quickly with our AI-powered file first aid solution." />
        <meta name="keywords" content="MP3 cutter, audio editor, online audio tool, MP3 trimmer, ToolTonic, AI audio tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tooltonic.io/" />
        <meta property="og:title" content="MP3 Cutter - ToolTonic | AI Powered File First Aid" />
        <meta property="og:description" content="Free online MP3 cutter tool. Cut and edit your audio files quickly with our AI-powered file first aid solution." />
        <meta property="og:image" content="https://tooltonic.io/images/og-image.jpg" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tooltonic.io/" />
        <meta property="twitter:title" content="MP3 Cutter - ToolTonic | AI Powered File First Aid" />
        <meta property="twitter:description" content="Free online MP3 cutter tool. Cut and edit your audio files quickly with our AI-powered file first aid solution." />
        <meta property="twitter:image" content="https://tooltonic.io/images/og-image.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
