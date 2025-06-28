import styles from '../../styles/Home.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>ToolTonic</h3>
          <p>AI Powered File First Aid</p>
          <p>© {new Date().getFullYear()} ToolTonic.io</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Connect</h4>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com/tooltonic" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com/tooltonic" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/tooltonic" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>tooltonic.io - Your one-stop solution for file conversions</p>
      </div>
    </footer>
  );
};

export default Footer;
