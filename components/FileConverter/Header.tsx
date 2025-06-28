import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/" className={styles.logoLink}>
          <h1 className={styles.logo}>ToolTonic</h1>
        </Link>
        <p className={styles.tagline}>AI Powered File First Aid</p>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/tools" className={styles.navLink}>All Tools</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
