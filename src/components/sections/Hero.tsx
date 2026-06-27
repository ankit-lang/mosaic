"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';
import MagicRings from '@/components/react-bits/MagicRings';
import ShinyText from '@/components/react-bits/ShinyText';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* MagicRings background container */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <MagicRings
          color="#d4af37"      // Gold color
          colorTwo="#ffffff"   // White color
          ringCount={8}
          speed={0.5}
          attenuation={15}
          lineThickness={3}
          baseRadius={0.4}
          radiusStep={0.12}
          opacity={0.8}
          blur={0}
          noiseAmount={0.05}
          rotation={0}
          ringGap={1.2}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.1}
          hoverScale={1.1}
          parallax={0.02}
          clickBurst={true}
        />
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
          Experience premium dining in the heart of Lusaka. A symphony of flavors crafted just for you.
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
