import { useState, useRef, useCallback } from 'react';
import styles from '../../styles/FileUploader.module.css';

export default function FileUploader({ onFilesUpload }) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFiles = useCallback((files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length === 0) {
      alert('Please upload only image files (JPEG, PNG, etc.)');
      return;
    }
    onFilesUpload(imageFiles);
  }, [onFilesUpload]);

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, [handleFiles]);

  const handleFileInputChange = useCallback((e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  }, [handleFiles]);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current.click();
  }, []);

  return (
    <div
      className={`${styles.uploadContainer} ${isDragging ? styles.dragging : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerFileInput}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        accept="image/*"
        multiple
        className={styles.fileInput}
      />

      <div className={styles.uploadContent}>
        <div className={styles.uploadIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" width="40" height="40">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <h3 className={styles.uploadTitle}>
          {isDragging ? 'Drop images here' : 'Drag & drop images here or click to browse'}
        </h3>
        <p className={styles.uploadSubtitle}>Supports JPEG, PNG, WEBP (Max 20 images)</p>
      </div>
    </div>
  );
}
