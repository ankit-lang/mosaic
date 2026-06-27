"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}  `} style={{
      padding: "0",
    }}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="logo" className='w-[170px] h-[100px]' />
        </Link>

        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/menu" className={styles.navLink}>Menu</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/reservations" className={styles.navLink}>Reservations</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/menu" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/reservations" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Reservations</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
