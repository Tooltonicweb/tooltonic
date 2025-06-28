'use client';

import { useState } from 'react';
import Head from 'next/head';
import FileUploader from '../../../components/EraseBackground/FileUploader';
import ImagePreview from '../../../components/EraseBackground/ImagePreview';
import SettingsPanel from '../../../components/EraseBackground/SettingsPanel';
import AdBanner from '../../../components/EraseBackground/AdBanner';
import styles from '../../../styles/Home.module.css';

export default function EraseBackgroundPage() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [settings, setSettings] = useState({
    format: 'png',
    quality: 90,
    size: 'original',
    brightness: 100,
    purpose: 'general',
  });

  const processImage = async (imageFile: File) => {
    setIsProcessing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('image_file', imageFile);
      formData.append('size', settings.size);
      formData.append('format', settings.format);

      const response = await fetch('/api/remove-bg', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to process image');

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setProcessedImage(imageUrl);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      console.error('Error processing image:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFileChange = (file: File) => {
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setError('File size exceeds 5MB limit');
      return;
    }

    setOriginalFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      processImage(file);
    };
    reader.readAsDataURL(file);
  };

  const handleSettingsChange = (newSettings: typeof settings) => {
    setSettings(newSettings);
    if (originalFile) {
      processImage(originalFile);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Free Background Remover | ToolTonic</title>
        <meta name="description" content="Remove image backgrounds instantly with AI. Free online tool with no quality loss." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Free Background Remover | ToolTonic" />
        <meta property="og:description" content="Remove image backgrounds instantly with AI. Free online tool with no quality loss." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tooltonic.io" />
        <meta property="og:image" content="https://tooltonic.io/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdBanner position="top" />

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.brand}>ToolTonic</span>
            <span className={styles.tagline}>AI Powered file first aid</span>
          </h1>
          <p className={styles.subtitle}>Remove backgrounds from images in seconds</p>
        </div>

        <div className={styles.content}>
          <div className={styles.adSidebarLeft}>
            <AdBanner position="left" />
          </div>

          <div className={styles.toolContainer}>
            {!originalImage ? (
              <FileUploader onFileChange={handleFileChange} />
            ) : (
              <>
                <ImagePreview
                  originalImage={originalImage}
                  processedImage={processedImage}
                  isProcessing={isProcessing}
                />
                <SettingsPanel
                  settings={settings}
                  onSettingsChange={handleSettingsChange}
                  onReset={() => {
                    setOriginalImage(null);
                    setOriginalFile(null);
                    setProcessedImage(null);
                  }}
                  processedImage={processedImage}
                />
              </>
            )}
            {error && <div className={styles.error}>{error}</div>}
          </div>

          <div className={styles.adSidebarRight}>
            <AdBanner position="right" />
          </div>
        </div>
      </main>

      <AdBanner position="bottom" />

      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com/tooltonic" aria-label="Facebook">
            <i className="icon-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/tooltonic" aria-label="Twitter">
            <i className="icon-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://pinterest.com/tooltonic" aria-label="Pinterest">
            <i className="icon-pinterest" aria-hidden="true"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} ToolTonic.io - All rights reserved
        </p>
      </footer>
    </div>
  );
}
