'use client';

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../../styles/compress.module.css';
import AdBanner from '../../../components/AdBanner';
import FilePreview from '../../../components/FilePreview';
import CompressionControls from '../../../components/CompressionControls';
import SocialShare from '../../../components/SocialShare';
import { FaBolt, FaShieldAlt, FaSlidersH, FaMobileAlt } from 'react-icons/fa';
import imageCompression from 'browser-image-compression';

export default function CompressFiles() {
  const [file, setFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [settings, setSettings] = useState({
    format: 'original',
    quality: 80,
    width: 1920,
    height: null,
    maintainRatio: true,
    brightness: 100,
    contrast: 100,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dropZoneRef = useRef<HTMLDivElement | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) processFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) processFile(selectedFile);
  };

  const processFile = (file: File) => {
    if (!file.type.match('image.*')) {
      alert('Please upload an image file (JPG, PNG, etc)');
      return;
    }
    setFile(file);
    setCompressedFile(null);
    setProgress(0);
  };

  const handleCompress = async () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 200);

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: settings.width || 1920,
        useWebWorker: true,
        initialQuality: settings.quality / 100,
      };

      const compressedBlob = await imageCompression(file, options);

      const compressed = new File([compressedBlob], `compressed_${file.name}`, {
        type: file.type,
        lastModified: Date.now(),
      });

      setCompressedFile(compressed);
      setProgress(100);
    } catch (error) {
      console.error("Compression failed:", error);
      alert("Compression failed. Please try again.");
    } finally {
      clearInterval(interval);
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!compressedFile) return;
    const url = URL.createObjectURL(compressedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = compressedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSettingsChange = (newSettings: any) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  useEffect(() => {
    const preventDefaults = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
    };
    const dropZone = dropZoneRef.current;
    if (dropZone) {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        dropZone.addEventListener(eventName, preventDefaults, false);
      });
    }
    return () => {
      if (dropZone) {
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
          dropZone.removeEventListener(eventName, preventDefaults, false);
        });
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Compress Files Online - ToolTonic</title>
        <meta name="description" content="Free online file compression tool." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdBanner position="top" />
      <main className={styles.main}>
        <div className={styles.leftAd}><AdBanner position="left" /></div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <span className={styles.brand}>ToolTonic</span>
            <span className={styles.tagline}>AI Powered File First Aid</span>
          </h1>
          <div
            ref={dropZoneRef}
            className={styles.dropZone}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className={styles.fileInput}
            />
            <div className={styles.dropContent}>
              <svg className={styles.uploadIcon} viewBox="0 0 24 24">
                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
              <p>Drag & drop your image here or click to browse</p>
              <p className={styles.supportedFormats}>Supported formats: JPG, PNG, GIF</p>
            </div>
          </div>

          {file && (
            <div className={styles.fileInfo}>
              <div className={styles.fileDetails}>
                <span className={styles.fileName}>{file.name}</span>
                <span className={styles.fileSize}>{(file.size / 1024).toFixed(2)} KB</span>
              </div>
              <button className={styles.clearButton} onClick={() => {
                setFile(null);
                setCompressedFile(null);
              }}>Clear</button>
            </div>
          )}

          {file && (
            <>
              <CompressionControls
                settings={settings}
                onSettingsChange={handleSettingsChange}
                onCompress={handleCompress}
                isProcessing={isProcessing}
              />

              {isProcessing && (
                <div className={styles.progressContainer}>
                  <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                  <span className={styles.progressText}>{progress}%</span>
                </div>
              )}

              {compressedFile && (
                <div className={styles.resultsSection}>
                  <FilePreview
                    originalFile={file}
                    compressedFile={compressedFile}
                    settings={settings}
                  />
                  <div className={styles.actionButtons}>
                    <button className={styles.downloadButton} onClick={handleDownload}>
                      Download Compressed File
                    </button>
                    <SocialShare fileName={compressedFile.name} />
                  </div>
                  <div className={styles.compressionStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Original Size:</span>
                      <span className={styles.statValue}>{(file.size / 1024).toFixed(2)} KB</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Compressed Size:</span>
                      <span className={styles.statValue}>{(compressedFile.size / 1024).toFixed(2)} KB</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Reduction:</span>
                      <span className={styles.statValue}>
                        {((1 - compressedFile.size / file.size) * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          <div className={styles.featuresSection}>
            <h2>Why Use Our File Compressor?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}><div className={styles.featureIcon}><FaBolt /></div><h3>Fast Processing</h3><p>Our AI-powered engine compresses files in seconds without quality loss.</p></div>
              <div className={styles.featureCard}><div className={styles.featureIcon}><FaShieldAlt /></div><h3>Secure</h3><p>All processing happens in your browser. Your files never leave your device.</p></div>
              <div className={styles.featureCard}><div className={styles.featureIcon}><FaSlidersH /></div><h3>Advanced Controls</h3><p>Adjust quality, dimensions, format and more to get perfect results.</p></div>
              <div className={styles.featureCard}><div className={styles.featureIcon}><FaMobileAlt /></div><h3>Mobile Friendly</h3><p>Works perfectly on all devices from smartphones to desktop computers.</p></div>
            </div>
          </div>
        </div>
        <div className={styles.userManual}>
  <a
    href="/manuals/User Manual for Compress Files.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.manualLink}
  >
    📄 Download User Manual (PDF)
  </a>
</div>

        <div className={styles.rightAd}><AdBanner position="right" /></div>
      </main>
      <AdBanner position="bottom" />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <span className={styles.brand}>ToolTonic</span>
            <span className={styles.tagline}>AI Powered File First Aid</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/contact">Contact Us</a>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} tooltonic.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
