import styles from '../../styles/AdBanner.module.css';

export default function AdBanner({ position }) {
  // In a real implementation, you would insert your AdSense or ad code here
  const isHorizontal = position === 'top' || position === 'bottom';

  return (
    <div className={`${styles.adBanner} ${styles[position]}`}>
      <div className={`${styles.adContainer} ${isHorizontal ? styles.horizontal : styles.vertical}`}>
        {/* AdSense or ad service can go here */}
        <div className={styles.adPlaceholder}>
          {isHorizontal ? 'Horizontal Advertisement' : 'Vertical Advertisement'}
        </div>
      </div>
    </div>
  );
}
