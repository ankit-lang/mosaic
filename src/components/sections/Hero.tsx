"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';
import ShinyText from '@/components/react-bits/ShinyText';
import { UtensilsCrossed, CalendarDays, Star, ArrowRight, Flame } from 'lucide-react';

// ── Image slideshow (UNCHANGED) ──────────────────────────────────
const images = [
  '/banner/1.png',
  '/banner/2.png',
  '/banner/3.png',
  '/banner/4.png',
  '/banner/5.png',
  '/banner/6.png',
];

// ── Anti-gravity particles (UNCHANGED) ───────────────────────────
const PARTICLES = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: ((i * 7) % 6) + 4,
  x: ((i * 13) % 95) + 2,
  delay: (i * 0.6) % 4,
  duration: ((i * 1.5) % 8) + 10,
}));

// ── Cuisine chips ─────────────────────────────────────────────────
const CHIPS = [
  { label: '🔥 Arabian Charcoal' },
  { label: '🍗 Tandoori' },
  { label: '🍜 Indo-Chinese' },
  { label: '🍚 Royal Biryani' },
  { label: '☕ Artisanal Café' },
];

// ── Floating badges data ──────────────────────────────────────────
const BADGES = [
  {
    id: 'bestseller',
    icon: '🔥',
    title: 'Bestseller',
    sub: 'Dum Gosht Biryani · ZK 290',
    top: '18%',
    left: '-12%',
    delay: 1.8,
  },
  {
    id: 'rating',
    icon: '⭐',
    title: '4.9 / 5',
    sub: 'from 1,200+ happy diners',
    top: '68%',
    right: '-8%',
    delay: 2.1,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ── Slideshow timer (UNCHANGED) ────────────────────────────────
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className={styles.hero}>

      {/* ── Cinematic Ken Burns Image Sequence (UNCHANGED) ───────── */}
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

      {/* ── Anti-Gravity Droplets Overlay (UNCHANGED) ────────────── */}
      <div className={styles.particlesContainer}>
        {PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            className={styles.particle}
            style={{ width: p.size, height: p.size, left: `${p.x}%` }}
            initial={{ y: '100vh', opacity: 0 }}
            animate={{
              y: '-10vh',
              opacity: [0, 0.8, 0.8, 0],
              x: p.x % 2 === 0 ? '20px' : '-20px',
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

      {/* ── Richer overlay: heavier vignette + golden ambient ──────── */}
      <div className={styles.overlay} />
      <div
        aria-hidden
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(120,60,0,0.22) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 50% 80% at 100% 50%, rgba(0,0,0,0.55) 0%, transparent 70%)',
        }}
      />

      {/* ══════════════════════════════════════════════════════════════
          SPLIT HERO CONTENT
      ══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-[3] flex items-center px-6 md:px-12 lg:px-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ═══ LEFT — Copy & Conversion ═══════════════════════════ */}
          <div className="flex flex-col items-start text-left">

            {/* Cuisine chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {CHIPS.map((c) => (
                <span
                  key={c.label}
                  className="text-[11px] px-3 py-1 rounded-full font-medium text-amber-300 border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm whitespace-nowrap"
                >
                  {c.label}
                </span>
              ))}
            </motion.div>

            {/* Brand title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="mb-3"
            >
              <h1
                className="font-serif font-bold leading-none mb-2"
                style={{ fontSize: 'clamp(4rem, 10vw, 7.5rem)' }}
              >
                <ShinyText text="MOSAIC" disabled={false} speed={3} className="" />
              </h1>
              <p
                className="font-sans font-light tracking-[0.18em] uppercase text-white/80"
                style={{ fontSize: 'clamp(0.7rem, 1.5vw, 1rem)' }}
              >
                Where Every Bite Becomes a Memory
              </p>
            </motion.div>

            {/* Single punchline — replaces the 4-line paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="text-zinc-300 font-light leading-relaxed max-w-md mb-8"
              style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}
            >
              Savor masterfully crafted charcoal grills, slow-dum biryanis, and artisanal café
              creations — built for unforgettable dining moments.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-wrap gap-3 mb-7"
            >
              {/* Primary */}
              <Link href="/menu">
                <motion.span
                  whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(245,158,11,0.42)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-zinc-950 cursor-pointer select-none"
                  style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d4af37 50%, #b45309 100%)' }}
                >
                  <UtensilsCrossed size={15} />
                  Explore Menu &amp; Order
                  <ArrowRight size={14} />
                </motion.span>
              </Link>

              {/* Secondary */}
              <Link href="/reservations">
                <motion.span
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white border border-white/25 bg-white/6 backdrop-blur-sm cursor-pointer select-none transition-colors"
                >
                  <CalendarDays size={15} />
                  Reserve a Table
                </motion.span>
              </Link>
            </motion.div>

            {/* Social proof bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {/* Stars */}
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-zinc-300 font-medium">4.9/5 Rating</span>
              </div>
              <div className="w-px h-3.5 bg-zinc-600" />
              <div className="flex items-center gap-1.5">
                <Flame size={13} className="text-amber-400" />
                <span className="text-xs text-zinc-300">100% Fresh Halal</span>
              </div>
              <div className="w-px h-3.5 bg-zinc-600" />
              <span className="text-xs text-zinc-400">Dine-In · Takeaway · Private Dining</span>
            </motion.div>
          </div>

          {/* ═══ RIGHT — Food Showcase (desktop only) ════════════════ */}
          <div className="hidden lg:flex justify-center items-center relative">
            {/* Golden ambient backlight */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full opacity-25 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #d4af37 0%, transparent 65%)' }}
            />

            {/* Hero dish image — floats gently */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[480px] h-[480px]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="w-full h-full rounded-3xl overflow-hidden border border-amber-400/20 shadow-2xl"
                style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 60px rgba(212,175,55,0.12)' }}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={'right-' + currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={images[(currentIndex + 2) % images.length]}
                      alt="Signature dish at MOSAIC"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlay on image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(160deg, transparent 50%, rgba(5,5,5,0.6) 100%)',
                  }}
                />
              </motion.div>

              {/* ── Floating glassmorphism badges ─────────────────── */}
              {BADGES.map((b) => (
                <motion.div
                  key={b.id}
                  initial={{ opacity: 0, scale: 0.75, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: b.delay }}
                  style={{
                    position: 'absolute',
                    top: b.top,
                    left: (b as { left?: string }).left,
                    right: (b as { right?: string }).right,
                  }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl backdrop-blur-md border border-white/15 bg-black/50 shadow-xl"
                >
                  <span className="text-xl leading-none">{b.icon}</span>
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{b.title}</p>
                    <p className="text-[10px] text-zinc-400 leading-tight">{b.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Scroll indicator (UNCHANGED) ──────────────────────────── */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </motion.div>
    </section>
  );
}
