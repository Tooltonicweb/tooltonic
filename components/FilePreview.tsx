'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

// ✅ Exporting props interface
export interface FilePreviewProps {
  originalFile: File | null;
  compressedFile: File | null;
  settings?: {
    format: string;
    quality: number;
    width: number;
    height: number | null;
    maintainRatio: boolean;
    brightness: number;
    contrast: number;
  };
}

// ✅ Using props interface
export default function FilePreview({
  originalFile,
  compressedFile,
  settings,
}: FilePreviewProps) {
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (originalFile) {
      const url = URL.createObjectURL(originalFile);
      setOriginalUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setOriginalUrl(null);
    }
  }, [originalFile]);

  useEffect(() => {
    if (compressedFile) {
      const url = URL.createObjectURL(compressedFile);
      setCompressedUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setCompressedUrl(null);
    }
  }, [compressedFile]);

  return (
    <div style={{ marginTop: 20 }}>
      <h3 style={{ marginBottom: 10 }}>Preview</h3>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {originalFile && originalUrl && (
          <div>
            <p><strong>Original:</strong></p>
            <Image
              src={originalUrl}
              alt="original"
              width={200}
              height={200}
              unoptimized
              style={{ objectFit: 'contain', borderRadius: 8 }}
            />
            <p>Size: {(originalFile.size / 1024).toFixed(2)} KB</p>
          </div>
        )}

        {compressedFile && compressedUrl && (
          <div>
            <p><strong>Compressed:</strong></p>
            <Image
              src={compressedUrl}
              alt="compressed"
              width={200}
              height={200}
              unoptimized
              style={{ objectFit: 'contain', borderRadius: 8 }}
            />
            <p>Size: {(compressedFile.size / 1024).toFixed(2)} KB</p>

            {settings && (
              <div style={{ marginTop: 10, fontSize: '0.9rem' }}>
                <p><strong>Compression Settings:</strong></p>
                <ul style={{ paddingLeft: 20, marginTop: 5 }}>
                  <li>Format: {settings.format}</li>
                  <li>Quality: {settings.quality}%</li>
                  <li>Width: {settings.width}px</li>
                  {settings.height !== null && <li>Height: {settings.height}px</li>}
                  <li>Maintain Ratio: {settings.maintainRatio ? 'Yes' : 'No'}</li>
                  <li>Brightness: {settings.brightness}%</li>
                  <li>Contrast: {settings.contrast}%</li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
