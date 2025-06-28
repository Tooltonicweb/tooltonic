import Head from 'next/head'

export default function SeoHead({ title, description, canonical }) {
  return (
    <Head>
      <title>{title || 'ToolTonic - AI Powered File First Aid'}</title>
      <meta name="description" content={description || 'ToolTonic offers free online tools to simplify your digital workflow. Resize images, generate QR codes, compress files, and more with AI efficiency.'} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title || 'ToolTonic'} />
      <meta property="og:description" content={description || 'AI-powered tools for your digital needs.'} />
      <meta property="og:url" content={canonical || 'https://tooltonic.io'} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://tooltonic.io/images/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'ToolTonic'} />
      <meta name="twitter:description" content={description || 'AI-powered tools for your digital needs.'} />
      <meta name="twitter:image" content="https://tooltonic.io/images/og-image.png" />
    </Head>
  )
}
