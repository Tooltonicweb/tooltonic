import styles from '../../styles/SocialShare.module.css';

export default function SocialShare({ fileUrl, toolName }) {
  const encodedUrl = encodeURIComponent(fileUrl);
  const text = encodeURIComponent(`Check out this collage I made using ${toolName}!`);

  return (
    <div className={styles.shareContainer}>
      <h4 className={styles.shareTitle}>Share your collage</h4>
      <div className={styles.buttonGroup}>
        <a
          href={`https://twitter.com/intent/tweet?text=${text}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          Facebook
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${text}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shareButton}
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
