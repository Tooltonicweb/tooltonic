// components/FileConverter/AdBanner.js

import styles from '../../styles/Home.module.css';

const AdBanner = ({ position }) => {
  // Determine which ad class to apply based on the position
  const getAdClass = () => {
    switch (position) {
      case 'top':
      case 'bottom':
        return styles.horizontalAd;
      case 'left':
      case 'right':
        return styles.verticalAd;
      default:
        return '';
    }
  };

  return (
    <div className={`${styles.adBanner} ${getAdClass()}`}>
      <div className={styles.adContent}>
        {position === 'top' && <p>Advertisement</p>}
        {position === 'bottom' && <p>Advertisement</p>}
        {position === 'left' && <p>Ad</p>}
        {position === 'right' && <p>Ad</p>}

        {/* Placeholder for AdSense or any ad script */}
        <div className={styles.adPlaceholder}>
          {position === 'top' || position === 'bottom' ? (
            <span>Horizontal Ad Banner (728×90)</span>
          ) : (
            <span>Vertical Ad Banner (300×600)</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
