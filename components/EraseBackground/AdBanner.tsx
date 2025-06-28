import styles from '../../styles/AdBanner.module.css';

const AdBanner = ({ position }) => {
  const getAdClass = () => {
    switch (position) {
      case 'top':
      case 'bottom':
        return styles.horizontalAd;
      case 'left':
      case 'right':
        return styles.verticalAd;
      default:
        return styles.adContainer;
    }
  };

  return (
    <div className={`${styles.adContainer} ${getAdClass()}`}>
      <div className={styles.adPlaceholder}>
        {position === 'top' && <p>Advertisement</p>}
        {position === 'bottom' && <p>Advertisement</p>}
        {position === 'left' && <p>Ad</p>}
        {position === 'right' && <p>Ad</p>}

        {/* ✅ In production, replace this with actual AdSense script */}
        {/*
        <script async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXX"
          data-ad-slot="XXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        */}
      </div>
    </div>
  );
};

export default AdBanner;
