'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CompressionSettings {
  format: string;
  quality: number;
  width: number;
  height: number | null;
  maintainRatio: boolean;
  brightness: number;
  contrast: number;
}

interface FilePreviewProps {
  originalFile: File | null;
  compressedFile: File | null;
  settings?: CompressionSettings;
}

export default function FilePreview({ originalFile, compressedFile, settings }: FilePreviewProps) {
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!originalFile) return;
    const url = URL.createObjectURL(originalFile);
    setOriginalUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [originalFile]);

  useEffect(() => {
    if (!compressedFile) return;
    const url = URL.createObjectURL(compressedFile);
    setCompressedUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [compressedFile]);

  return (
    <div style={{ marginTop: 20 }}>
      <h3 style={{ fontWeight: 600, marginBottom: 10 }}>Preview</h3>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {originalFile && originalUrl && (
          <div>
            <p style={{ fontWeight: 500 }}>Original Image:</p>
            <Image
              src={originalUrl}
              alt="original"
              width={200}
              height={200}
              unoptimized
              style={{ objectFit: 'contain', border: '1px solid #ccc', borderRadius: 8 }}
            />
            <p>Size: {(originalFile.size / 1024).toFixed(2)} KB</p>
          </div>
        )}

        {compressedFile && compressedUrl && (
          <div>
            <p style={{ fontWeight: 500 }}>Compressed Image:</p>
            <Image
              src={compressedUrl}
              alt="compressed"
              width={200}
              height={200}
              unoptimized
              style={{ objectFit: 'contain', border: '1px solid #ccc', borderRadius: 8 }}
            />
            <p>Size: {(compressedFile.size / 1024).toFixed(2)} KB</p>
          </div>
        )}
      </div>

      {settings && (
        <div style={{ marginTop: 30 }}>
          <h4 style={{ fontWeight: 600 }}>Compression Settings Used:</h4>
          <ul style={{ lineHeight: '1.6' }}>
            <li>Format: {settings.format}</li>
            <li>Quality: {settings.quality}%</li>
            <li>Width: {settings.width}px</li>
            <li>Height: {settings.height ?? 'Auto'}</li>
            <li>Maintain Aspect Ratio: {settings.maintainRatio ? 'Yes' : 'No'}</li>
            <li>Brightness: {settings.brightness}%</li>
            <li>Contrast: {settings.contrast}%</li>
          </ul>
        </div>
      )}
    </div>
  );
}
