"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import ShinyText from '@/components/react-bits/ShinyText';

const images = [
  '/banner/1.png',
  '/banner/2.png',
  '/banner/3.png',
  '/banner/4.png',
  '/banner/5.png',
  '/banner/6.png',
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Generate floating anti-gravity particles (droplets)
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // 4px to 12px
    x: Math.random() * 100, // 0 to 100%
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10, // 10 to 25 seconds to float up
  }));

  return (
    <section id="home" className={styles.hero}>
      {/* Cinematic Ken Burns Image Sequence */}
      <div className={styles.imageSequenceContainer}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }} // Slow scale up
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 10, ease: "linear" }, // Slow motion pan
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
        {particles.map((p) => (
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
              x: p.x % 2 === 0 ? '20px' : '-20px' // gentle sway
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
          <h1 className={styles.title}>
            <ShinyText text="MOSAIC" disabled={false} speed={3} className="" />
          </h1>
          <h2 className={styles.subtitle}>Restaurant & Cafe</h2>
        </motion.div>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A surreal dining experience where culinary art defies gravity.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className={styles.buttonGroup}
        >
          <Link href="#menu" className="btn-primary">
            Explore Menu
          </Link>
          <Link href="#contact" className="btn-outline">
            Visit Us
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
