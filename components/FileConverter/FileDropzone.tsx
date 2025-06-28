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
      </div>
    </div>
  );
};

export default FileDropzone;
