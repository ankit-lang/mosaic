"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} style={{ padding: "0" }}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="MOSAIC" className='w-[170px] h-[100px] object-contain' />
        </Link>

        <div className={styles.desktopMenu}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/menu" className={styles.navLink}>Full Menu</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/about" className={styles.navLink}>About Us</Link>
          <Link href="/reservations" className={styles.navLink}>Reservations</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full bg-gold/10 hover:bg-gold/20 text-gold border border-gold/30 transition-all"
            title="Open Order Basket"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-black font-bold text-[11px] rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/menu" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Full Menu</Link>
          <Link href="/gallery" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link href="/about" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/reservations" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Reservations</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
