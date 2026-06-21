import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>MOSAIC</h2>
            <p>Restaurant & Cafe</p>
          </div>
          <div className={styles.links}>
            <Link href="#home" className={styles.link}>Home</Link>
            <Link href="#menu" className={styles.link}>Menu</Link>
            <Link href="#contact" className={styles.link}>Contact</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} MOSAIC Restaurant & Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
