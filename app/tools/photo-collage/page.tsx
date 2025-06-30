'use client';

import Head from 'next/head';
import { useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FileUploader from '../../../components/PhotoCollage/FileUploader';
import CollageEditor from '../../../components/PhotoCollage/CollageEditor';
import AdBanner from '../../../components/PhotoCollage/AdBanner';
import styles from '../../../styles/Home.module.css';
import generateCollage from '../../../components/PhotoCollage/generateCollage';

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [collageUrl, setCollageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [settings, setSettings] = useState({
    layout: 'grid',
    rows: 2,
    columns: 2,
    spacing: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    outputFormat: 'jpeg',
    quality: 80,
  });

  const handleFilesUpload = (uploadedFiles: File[]) => {
    setFiles(uploadedFiles);
  };

  const handleGenerateCollage = async () => {
    setIsProcessing(true);
    const collageBlob = await generateCollage(files, settings);
    if (collageBlob && collageBlob instanceof Blob) {
      setCollageUrl(URL.createObjectURL(collageBlob));
    }
    setIsProcessing(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Free Photo Collage Maker | ToolTonic - AI Powered File First Aid</title>
        <meta
          name="description"
          content="Create beautiful photo collages online for free with ToolTonic's AI-powered collage maker. No registration required."
        />
        <meta
          name="keywords"
          content="photo collage, collage maker, free collage, online collage, picture collage, photo grid"
        />
        <meta property="og:title" content="Free Photo Collage Maker | ToolTonic" />
        <meta
          property="og:description"
          content="Create beautiful photo collages online for free with ToolTonic&apos;s AI-powered collage maker."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tooltonic.io/photo-collage" />
        <meta property="og:image" content="https://tooltonic.io/images/collage-maker-preview.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdBanner position="top" />

      <main className={styles.main}>
        <h1 className={styles.title}>AI-Powered Photo Collage Maker</h1>
        <p className={styles.subtitle}>
          Create stunning collages in seconds with ToolTonic&apos;s free online tool
        </p>

        <div className={styles.toolContainer}>
          <FileUploader onFilesUpload={handleFilesUpload} />

          {files.length > 0 && (
            <div className={styles.editorSection}>
              <CollageEditor
                files={files}
                settings={settings}
                onSettingsChange={setSettings}
                onGenerate={handleGenerateCollage}
                isProcessing={isProcessing}
                collage={collageUrl}
              />
            </div>
          )}
        </div>

        <div className={styles.features}>
          <h2>Why Use ToolTonic Collage Maker?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Multiple Layouts</h3>
              <p>Choose from grid, mosaic, freeform and other creative layouts</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Instant Processing</h3>
              <p>Our AI-powered tools create collages in seconds</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Mobile Friendly</h3>
              <p>Works perfectly on all devices</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Privacy Focused</h3>
              <p>All processing happens in your browser</p>
            </div>
          </div>
        </div>
      </main>

      <AdBanner position="bottom" />
    </div>
  );
}
