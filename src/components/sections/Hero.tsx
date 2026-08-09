"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import ShinyText from '@/components/react-bits/ShinyText';
import { UtensilsCrossed, CalendarDays } from 'lucide-react';

const images = [
  '/banner/1.png',
  '/banner/2.png',
  '/banner/3.png',
  '/banner/4.png',
  '/banner/5.png',
  '/banner/6.png',
];

const PARTICLES = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: ((i * 7) % 6) + 4,
  x: ((i * 13) % 95) + 2,
  delay: (i * 0.6) % 4,
  duration: ((i * 1.5) % 8) + 10,
}));

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Cinematic Ken Burns Image Sequence */}
      <div className={styles.imageSequenceContainer}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" },
            }}
            className={styles.imageWrapper}
          >
            <Image
              src={images[currentIndex]}
              alt="MOSAIC Premium Dining"
              fill
              priority={currentIndex === 0}
              className={styles.bgImage}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Anti-Gravity Droplets Overlay */}
      <div className={styles.particlesContainer}>
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className={styles.particle}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
            }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ 
              y: '-10vh', 
              opacity: [0, 0.8, 0.8, 0],
              x: p.x % 2 === 0 ? '20px' : '-20px'
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-gold font-bold mb-3 inline-block">
            Arabian Charcoal • Tandoori • Indo-Chinese • Biryani • Artisanal Café
          </span>
          <h1 className={styles.title}>
            <ShinyText text="MOSAIC" disabled={false} speed={3} className="" />
          </h1>
          <h2 className={styles.subtitle}>Where Every Bite Becomes a Memory</h2>
        </motion.div>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Welcome to MOSAIC Restaurant & Cafe, where bold flavours, premium ingredients, and unforgettable dining come together. From smoky Arabian charcoal kebabs and authentic tandoori specialties to flavourful Indo-Chinese creations, royal dum biryanis, and handcrafted café beverages — every dish is prepared to give you a truly memorable experience.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={styles.buttonGroup}
        >
          <Link href="/menu" className="btn-primary">
            <UtensilsCrossed size={16} />
            <span>Explore Our Menu</span>
          </Link>
          <Link href="/reservations" className="btn-outline">
            <CalendarDays size={16} />
            <span>Book Your Table</span>
          </Link>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </motion.div>
    </section>
  );
}
