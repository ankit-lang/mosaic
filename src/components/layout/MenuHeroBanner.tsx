"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import SplitText from '@/components/react-bits/SplitText';
import MagicRings from '@/components/react-bits/MagicRings';

// ── Animation helper ────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

const CHIPS = [
  { emoji: '🔥', label: 'Tandoori Grills' },
  { emoji: '🍜', label: 'Indo-Chinese Wok' },
  { emoji: '☕', label: 'Artisanal Coffee' },
  { emoji: '🧋', label: 'Boba & Frappes' },
  { emoji: '🥩', label: 'Slow-Marinated Mutton' },
  { emoji: '🍹', label: 'Signature Mocktails' },
];

export default function MenuHeroBanner() {
  return (
    <section
      className="relative flex items-center justify-center text-center overflow-hidden bg-[#050505]"
      style={{ minHeight: '660px', paddingTop: '120px', paddingBottom: '80px' }}
    >
      {/* ── Ambient golden orb ─────────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[420px] rounded-full opacity-[0.16]"
          style={{
            background: 'radial-gradient(ellipse at center, #d4af37 0%, #92400e 40%, transparent 75%)',
            filter: 'blur(90px)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* ── MagicRings (subtle) ────────────────────────────────── */}
      <div className="absolute inset-0 z-0 opacity-35">
        <MagicRings
          color="#d4af37"
          colorTwo="#ffffff"
          ringCount={6}
          speed={0.35}
          attenuation={20}
          lineThickness={2}
          baseRadius={0.35}
          radiusStep={0.1}
          opacity={0.5}
          blur={0}
          noiseAmount={0.04}
          rotation={0}
          ringGap={1.4}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.08}
          hoverScale={1.05}
          parallax={0.015}
          clickBurst={true}
        />
      </div>

      {/* ── Overlay ────────────────────────────────────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.52) 55%, rgba(5,5,5,0.97) 100%)',
        }}
      />

      {/* ── Content ────────────────────────────────────────────── */}
      <div className="relative z-[2] w-full max-w-4xl mx-auto px-6 flex flex-col items-center">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.1)} className="mb-5">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-400/80 border border-amber-500/20 rounded-full px-4 py-1.5 bg-amber-500/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Restaurant &amp; Café · Lusaka, Zambia
          </span>
        </motion.div>

        {/* Title — UNCHANGED */}
        <div className="mb-4">
          <SplitText
            text="Exquisite Dining & Cafe Menu"
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-gold tracking-wide text-center leading-[1.1]"
            delay={40}
            duration={0.9}
            textAlign="center"
          />
        </div>

        {/* Subtitle — UNCHANGED */}
        <motion.p
          {...fadeUp(0.55)}
          className="font-sans font-light text-sm md:text-base text-white/70 uppercase tracking-[0.22em] mb-7"
        >
          30 Category Collections · 150+ Masterpiece Dishes &amp; Beverages
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65, ease: 'easeOut' }}
          className="w-20 h-[1px] mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }}
        />

        {/* Category chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-2xl"
        >
          {CHIPS.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.38, delay: 0.85 + i * 0.07 }}
              whileHover={{ scale: 1.07 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-amber-200/90 border border-amber-500/20 bg-white/5 backdrop-blur-sm cursor-default select-none transition-colors hover:bg-amber-500/10 hover:border-amber-400/50 hover:text-amber-200"
            >
              <span>{chip.emoji}</span>
              {chip.label}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary */}
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.04, boxShadow: '0 0 28px rgba(245,158,11,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm text-zinc-950 transition-shadow"
            style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d4af37 50%, #b45309 100%)' }}
          >
            🍽️ Explore Full Menu
          </motion.a>

          {/* Secondary */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm transition-all hover:border-amber-400/40 hover:bg-white/8"
            >
              📅 Reserve a Table
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll nudge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-600">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-amber-400/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
