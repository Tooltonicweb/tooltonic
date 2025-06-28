import styles from '../../styles/ImagePreview.module.css';

const ImagePreview = ({ originalImage, processedImage, isProcessing }) => {
  return (
    <div className={styles.previewContainer}>
      <div className={styles.previewColumn}>
        <h3 className={styles.previewTitle}>Original Image</h3>
        <div className={styles.imageWrapper}>
          <img src={originalImage} alt="Original" className={styles.previewImage} />
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
            <img src={processedImage} alt="Processed" className={styles.previewImage} />
          ) : (
            <div className={styles.placeholder}>Preview will appear here</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
