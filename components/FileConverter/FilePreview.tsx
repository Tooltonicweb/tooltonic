'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const FilePreview = ({ file, convertedFile, options }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    let url: string | null = null;

    if (convertedFile) {
      url = URL.createObjectURL(convertedFile);
      setPreviewUrl(url);
    } else if (file) {
      url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }

    return () => {
      if (url) URL.revokeObjectURL(url);
    };
  }, [file, convertedFile]);

  if (!previewUrl) return null;

  const isPDF =
    options.format === 'pdf' ||
    (convertedFile && convertedFile.type === 'application/pdf');

  return (
    <div>
      <h4>Preview:</h4>
      {isPDF ? (
        <div
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            backgroundColor: '#fefefe',
          }}
        >
          <p>📄 PDF file ready. Click download to view.</p>
        </div>
      ) : (
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            height: '300px',
            border: '1px solid #ccc',
            marginTop: '10px',
          }}
        >
          <Image
            src={previewUrl}
            alt="Preview"
            fill
            style={{ objectFit: 'contain' }}
            unoptimized // Important for blob/object URLs
          />
        </div>
      )}
    </div>
  );
};

export default FilePreview;
