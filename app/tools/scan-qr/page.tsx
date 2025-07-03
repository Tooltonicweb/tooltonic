'use client';

import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function QRScannerPage() {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [qrScanner, setQrScanner] = useState<any>(null);
  const [scanResult, setScanResult] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState('');
  const [filePreview, setFilePreview] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  const initScanner = async () => {
    try {
      if (!videoRef.current) {
        setError('Video element not found.');
        return null;
      }

      const { default: QrScanner } = await import('qr-scanner');

      const hasCam = await QrScanner.hasCamera();
      if (!hasCam) {
        setError('No camera found on this device.');
        return null;
      }

      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          setScanResult(result.data);
          setIsScanning(false);
          scanner.stop();
        },
        {
          preferredCamera: 'environment',
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 5,
          returnDetailedScanResult: true,
        }
      );

      setQrScanner(scanner);
      return scanner;
    } catch (err) {
      console.error('Failed to initialize scanner:', err);
      setError('QR Scanner initialization failed.');
      return null;
    }
  };

  const toggleScanning = async () => {
    try {
      let scanner = qrScanner;

      if (!scanner) {
        scanner = await initScanner();
        if (!scanner) return;
      }

      if (isScanning) {
        scanner.stop();
        setIsScanning(false);
      } else {
        await scanner.start(); // triggers permission prompt
        setIsScanning(true);
        setScanResult('');
        setError('');
      }
    } catch (err: any) {
      console.error('Camera error:', err);
      if (err.name === 'NotAllowedError') {
        setError('Camera access denied. Please allow permission in browser.');
      } else if (err.name === 'NotFoundError') {
        setError('No camera found on this device.');
      } else {
        setError('Failed to access camera. Try refreshing or changing browser.');
      }
    }
  };

  const handleFileUpload = async (event: any) => {
    const file = event.target?.files?.[0] || event.dataTransfer?.files?.[0];
    if (!file) return;

    setError('');
    setScanResult('');

    try {
      const previewUrl = URL.createObjectURL(file);
      setFilePreview(previewUrl);

      const { default: QrScanner } = await import('qr-scanner');
      const result = await QrScanner.scanImage(file, {
        returnDetailedScanResult: true,
      });

      if (result?.data) {
        setScanResult(result.data);
      } else {
        throw new Error('Invalid scan result');
      }
    } catch (err) {
      setError('No QR code found in the image.');
      console.error(err);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleFileUpload(e);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scanResult);
  };

  const shareResult = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'QR Code Scan Result',
          text: scanResult,
          url: scanResult,
        });
      } else {
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(scanResult)}`;
        window.open(shareUrl, '_blank');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  useEffect(() => {
    const checkAdBlock = async () => {
      try {
        await fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
          method: 'HEAD',
          mode: 'no-cors',
        });
        setAdBlockDetected(false);
      } catch {
        setAdBlockDetected(true);
      }
    };
    checkAdBlock();
  }, []);

  useEffect(() => {
    let scanner: any;
    const loadScanner = async () => {
      scanner = await initScanner();
    };
    loadScanner();

    return () => {
      scanner?.stop();
      scanner?.destroy();
    };
  }, []);

  useEffect(() => {
    if (filePreview) {
      return () => {
        URL.revokeObjectURL(filePreview);
      };
    }
  }, [filePreview]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'adsbygoogle' in window) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsense push failed:', e);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>QR Code Scanner | ToolTonic</title>
        <meta name="description" content="Scan any QR code instantly with ToolTonic." />
        <meta property="og:url" content={`https://tooltonic.io${pathname}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://tooltonic.io${pathname}`} />
      </Head>

      <Script
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
        crossOrigin="anonymous"
        onError={() => setAdBlockDetected(true)}
      />

      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">QR Code Scanner</h1>

        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="cursor-pointer border-2 border-dashed border-gray-400 dark:border-gray-600 p-6 rounded text-center"
        >
          {filePreview ? (
            <div className="relative">
              <Image
                src={filePreview}
                alt="QR preview"
                width={400}
                height={400}
                className="mx-auto mb-4 rounded"
                unoptimized
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setFilePreview('');
                  setScanResult('');
                }}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                ✕
              </button>
            </div>
          ) : (
            <>
              <p className="text-lg">Drag & drop a QR code image here</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">or use the buttons below</p>

              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button
                  onClick={toggleScanning}
                  className={`px-4 py-2 rounded-lg text-white ${
                    isScanning ? 'bg-red-500' : 'bg-blue-500'
                  }`}
                >
                  {isScanning ? 'Stop Camera' : 'Use Camera'}
                </button>
              </div>
            </>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
        </div>

        {isScanning && (
          <div className="my-6">
            <video
              ref={videoRef}
              className="w-full max-h-64 rounded"
              playsInline
              autoPlay
              muted
            />
          </div>
        )}

        {scanResult && (
          <div className="bg-green-100 dark:bg-green-900 p-4 my-4 rounded">
            <h2 className="font-semibold mb-2">Scan Result:</h2>
            <div className="break-words mb-2">{scanResult}</div>
            <div className="flex gap-2 flex-wrap">
              <button onClick={copyToClipboard} className="bg-blue-500 text-white px-4 py-1 rounded">
                Copy
              </button>
              {scanResult.startsWith('http') && (
                <a
                  href={scanResult}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-1 rounded"
                >
                  Visit
                </a>
              )}
              <button onClick={shareResult} className="bg-purple-500 text-white px-4 py-1 rounded">
                Share
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 p-4 my-4 rounded">
            {error}
          </div>
        )}
      </div>
    </>
  );
}
