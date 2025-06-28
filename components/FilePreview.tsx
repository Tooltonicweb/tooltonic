'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FilePreviewProps {
  originalFile: File | null;
  compressedFile: File | null;
}

export default function FilePreview({ originalFile, compressedFile }: FilePreviewProps) {
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [compressedUrl, setCompressedUrl] = useState<string | null>(null);

  useEffect(() => {
    if (originalFile) {
      const url = URL.createObjectURL(originalFile);
      setOriginalUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [originalFile]);

  useEffect(() => {
    if (compressedFile) {
      const url = URL.createObjectURL(compressedFile);
      setCompressedUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [compressedFile]);

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Preview</h3>

      {originalFile && originalUrl && (
        <div>
          <p>Original:</p>
          <Image
            src={originalUrl}
            alt="original"
            width={200}
            height={200}
            unoptimized
            style={{ objectFit: 'contain' }}
          />
          <p>Size: {(originalFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

      {compressedFile && compressedUrl && (
        <div style={{ marginTop: 20 }}>
          <p>Compressed:</p>
          <Image
            src={compressedUrl}
            alt="compressed"
            width={200}
            height={200}
            unoptimized
            style={{ objectFit: 'contain' }}
          />
          <p>Size: {(compressedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}
