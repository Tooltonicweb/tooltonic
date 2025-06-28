'use client';
import { useEffect, useState } from 'react';

const FilePreview = ({ file, convertedFile, options }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (convertedFile) {
      const url = URL.createObjectURL(convertedFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }

    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }

    setPreviewUrl(null);
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
        <img
          src={previewUrl}
          alt="Preview"
          style={{
            maxWidth: '100%',
            maxHeight: '300px',
            border: '1px solid #ccc',
            marginTop: '10px',
          }}
        />
      )}
    </div>
  );
};

export default FilePreview;
