'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/PreviewPanel.module.css';

type PreviewPanelProps = {
  files: File[];
  selectedImages: File[];
  onImageSelect: (file: File, isSelected: boolean) => void;
  previewUrl: string | null;
  settings: {
    borderRadius: number;
    backgroundColor: string;
    spacing: number;
  };
};

export default function PreviewPanel({
  files,
  selectedImages,
  onImageSelect,
  previewUrl,
  settings,
}: PreviewPanelProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  // Clean up object URLs on unmount or file change
  useEffect(() => {
    const urls = files.map(file => URL.createObjectURL(file));
    setImageUrls(urls);

    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [files]);

  return (
    <div className={styles.previewPanel}>
      <div className={styles.previewHeader}>
        <h3 className={styles.previewTitle}>Image Selection</h3>
        <div className={styles.viewToggle}>
          <button
            onClick={() => setViewMode('grid')}
            className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
          >
            List
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className={styles.imageGrid}>
          {files.map((file, index) => {
            const isSelected = selectedImages.includes(file);
            const url = imageUrls[index];

            return (
              <div
                key={index}
                className={`${styles.imageItem} ${isSelected ? styles.selected : ''}`}
                onClick={() => onImageSelect(file, !isSelected)}
              >
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className={styles.imageThumbnail}
                />
                {isSelected && (
                  <div className={styles.selectedBadge}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.imageList}>
          {files.map((file, index) => {
            const isSelected = selectedImages.includes(file);
            const url = imageUrls[index];

            return (
              <div
                key={index}
                className={`${styles.listItem} ${isSelected ? styles.selected : ''}`}
                onClick={() => onImageSelect(file, !isSelected)}
              >
                <div className={styles.listItemCheckbox}>
                  {isSelected ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <div className={styles.emptyCheckbox} />
                  )}
                </div>
                <img
                  src={url}
                  alt={`Preview ${index + 1}`}
                  className={styles.listThumbnail}
                />
                <div className={styles.listInfo}>
                  <div className={styles.listName}>{file.name}</div>
                  <div className={styles.listSize}>{(file.size / 1024).toFixed(1)} KB</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {previewUrl && (
        <div className={styles.collagePreview}>
          <h3 className={styles.previewTitle}>Collage Preview</h3>
          <div className={styles.previewContainer}>
            <img
              src={previewUrl}
              alt="Generated collage preview"
              className={styles.collageImage}
              style={{
                borderRadius: `${settings.borderRadius}px`,
                backgroundColor: settings.backgroundColor,
                padding: `${settings.spacing}px`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
