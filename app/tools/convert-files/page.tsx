'use client';

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { jsPDF } from 'jspdf';
import Layout from '../../../components/Layout';
import FileDropzone from '../../../components/FileConverter/FileDropzone';
import FilePreview from '../../../components/FileConverter/FilePreview';
import ConversionOptions from '../../../components/FileConverter/ConversionOptions';
import AdBanner from '../../../components/FileConverter/AdBanner';
import styles from '../../../styles/Home.module.css';

export default function Home() {
  const [file, setFile] = useState(null);
  const [convertedFile, setConvertedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const [options, setOptions] = useState({
    format: 'original',
    quality: 80,
    width: null,
    height: null,
    maintainAspect: true,
    brightness: 100,
    contrast: 100,
    purpose: 'web',
  });

  const canvasRef = useRef(null);

  const handleFileChange = (selectedFile) => {
    if (!selectedFile) return;

    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(selectedFile.type)) {
      setError('Please upload an image file (JPEG, PNG, WEBP, GIF)');
      return;
    }

    setError(null);
    setFile(selectedFile);
    setConvertedFile(null);
  };

  const handleConvert = async () => {
    if (!file) return;

    setIsProcessing(true);

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          if (options.format === 'pdf') {
            const doc = new jsPDF({
              orientation: img.width > img.height ? 'landscape' : 'portrait',
              unit: 'px',
              format: [img.width, img.height],
            });

            doc.addImage(img, 'PNG', 0, 0, img.width, img.height);
            const pdfBlob = doc.output('blob');

            const converted = new File(
              [pdfBlob],
              `converted_${file.name.split('.')[0]}.pdf`,
              { type: 'application/pdf' }
            );

            setConvertedFile(converted);
            setIsProcessing(false);
          } else {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            const width = options.width || img.width;
            const height = options.height || img.height;

            canvas.width = width;
            canvas.height = height;

            ctx.filter = `brightness(${options.brightness}%) contrast(${options.contrast}%)`;
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob(
              (blob) => {
                if (blob) {
                  const ext =
                    options.format === 'original'
                      ? file.type.split('/')[1]
                      : options.format;
                  const converted = new File(
                    [blob],
                    `converted_${file.name.split('.')[0]}.${ext}`,
                    { type: `image/${ext}` }
                  );
                  setConvertedFile(converted);
                } else {
                  setError('Conversion failed.');
                }
                setIsProcessing(false);
              },
              `image/${
                options.format === 'original'
                  ? file.type.split('/')[1]
                  : options.format
              }`,
              options.quality / 100
            );
          }
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError('Conversion failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;

    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleOptionChange = (newOptions) => {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  };

  const resetAll = () => {
    setFile(null);
    setConvertedFile(null);
    setError(null);
  };

  return (
    <Layout>
      <Head>
        <title>ToolTonic | AI File Converter</title>
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>ToolTonic</h1>
        <p className={styles.tagline}>AI Powered File First Aid</p>

        <AdBanner position="top" />

        <div className={styles.content}>
          <AdBanner position="left" />

          <div className={styles.converterContainer}>
            {!file ? (
              <FileDropzone onFileChange={handleFileChange} />
            ) : (
              <>
                <div className={styles.previewSection}>
                  <FilePreview
                    file={file}
                    convertedFile={convertedFile}
                    options={options}
                  />
                </div>

                <div className={styles.optionsSection}>
                  <ConversionOptions
                    file={file}
                    options={options}
                    onOptionChange={handleOptionChange}
                    onConvert={handleConvert}
                    onDownload={handleDownload}
                    onReset={resetAll}
                    isProcessing={isProcessing}
                    convertedFile={convertedFile}
                  />
                </div>
              </>
            )}

            {error && <div className={styles.error}>{error}</div>}
          </div>

          <AdBanner position="right" />
        </div>

        <AdBanner position="bottom" />
      </div>
    </Layout>
  );
}
