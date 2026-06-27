"use client";

import { motion } from 'framer-motion';
import styles from '@/components/sections/Hero.module.css';
import MagicRings from '@/components/react-bits/MagicRings';
import SplitText from '@/components/react-bits/SplitText';
import ScrollReveal from '@/components/react-bits/ScrollReveal';
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageBanner({ title, subtitle, description }: PageBannerProps) {
  return (
    <section className={styles.hero} style={{ height: '60vh', minHeight: '500px' }}>
      {/* MagicRings background container */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <MagicRings
          color="#d4af37"
          colorTwo="#ffffff"
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
      <div className={`${styles.content} w-full`}>
        <div className="text-center max-w-4xl mx-auto w-full pt-16">
          <SplitText
            text={title}
            className="text-5xl md:text-7xl font-serif text-gold mb-6 tracking-wide text-center"
            delay={50}
            duration={0.8}
            textAlign="center"
          />
          
          {subtitle && (
            <motion.h2 
              className="font-sans font-light text-lg md:text-2xl text-white uppercase tracking-[0.2em] mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {subtitle}
            </motion.h2>
          )}

          {description && (
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={2}
              blurStrength={10}
              containerClassName="max-w-3xl mx-auto text-center flex flex-col items-center justify-center mt-6"
              textClassName="text-neutral-300 text-lg md:text-xl leading-relaxed font-sans font-light tracking-wide text-center mx-auto"
            >
              {description}
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
