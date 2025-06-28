'use client';

interface FilePreviewProps {
  originalFile: File | null;
  compressedFile: File | null;
}

export default function FilePreview({ originalFile, compressedFile }: FilePreviewProps) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Preview</h3>

      {originalFile && (
        <div>
          <p>Original:</p>
          <img src={URL.createObjectURL(originalFile)} width={200} alt="original" />
          <p>Size: {(originalFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

      {compressedFile && (
        <div style={{ marginTop: 20 }}>
          <p>Compressed:</p>
          <img src={URL.createObjectURL(compressedFile)} width={200} alt="compressed" />
          <p>Size: {(compressedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}
