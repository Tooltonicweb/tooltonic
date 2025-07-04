// File: components/FileConverter/FileDropzone.tsx
import { useCallback } from 'react';
import styles from '../../styles/Home.module.css';

type Props = {
  onFileChange: (file: File) => void;
};

const FileDropzone: React.FC<Props> = ({ onFileChange }) => {
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      onFileChange(files[0]);
    }
  }, [onFileChange]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileChange(files[0]);
    }
  };

  return (
    <div className={styles.dropzone} onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className={styles.dropzoneContent}>
        <p>Drag & drop your file here</p>
        <p>or</p>
        <label className={styles.browseButton}>
          Browse files
          <input
            type="file"
            onChange={handleFileInput}
            className={styles.fileInput}
            accept="image/*,application/pdf"
          />
        </label>
        <div className={styles.userManual}>
  <a
    href="/manuals/User Manual for Convert File.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.manualLink}
  >
    📄 Download User Manual (PDF)
  </a>
</div>
        {/* ✅ Supported formats info */}
    <p className={`${styles.supportedFormatsText} text-sm text-gray-500 mt-2`}>
      Supported formats: <span className="font-medium">JPEG, PNG, WEBP, GIF, PDF</span>
    </p>
      </div>
    </div>
  );
};

export default FileDropzone;
