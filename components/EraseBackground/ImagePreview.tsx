'use client';

import Image from 'next/image';
import styles from '../../styles/ImagePreview.module.css';

const ImagePreview = ({ originalImage, processedImage, isProcessing }) => {
  return (
    <div className={styles.previewContainer}>
      <div className={styles.previewColumn}>
        <h3 className={styles.previewTitle}>Original Image</h3>
        <div className={styles.imageWrapper}>
          {originalImage && (
            <Image
              src={originalImage}
              alt="Original"
              fill
              className={styles.previewImage}
              unoptimized // Optional: If image is from blob URL or external
            />
          )}
        </div>
      </div>

      <div className={styles.previewColumn}>
        <h3 className={styles.previewTitle}>Background Removed</h3>
        <div className={styles.imageWrapper}>
          {isProcessing ? (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner}></div>
              <p>Processing your image...</p>
            </div>
          ) : processedImage ? (
            <Image
              src={processedImage}
              alt="Processed"
              fill
              className={styles.previewImage}
              unoptimized
            />
          ) : (
            <div className={styles.placeholder}>Preview will appear here</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
