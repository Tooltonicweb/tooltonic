import { useCallback } from 'react';
import styles from '../../styles/FileUploader.module.css';

const FileUploader = ({ onFileChange }) => {
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onFileChange(e.dataTransfer.files[0]);
      }
    },
    [onFileChange]
  );

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className={styles.uploadArea} onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className={styles.uploadContent}>
        <svg className={styles.uploadIcon} viewBox="0 0 24 24">
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <h3 className={styles.uploadTitle}>Drag & Drop your image here</h3>
        <p className={styles.uploadSubtitle}>or</p>
        <label className={styles.uploadButton}>
          Browse Files
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className={styles.fileInput}
          />
        </label>
        <p className={styles.uploadInfo}>Supports: JPG, PNG, WEBP (Max 5MB)</p>
      </div>
    </div>
  );
};

export default FileUploader;
