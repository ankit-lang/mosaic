"use client";

import React from 'react';
import ShinyText from '../react-bits/ShinyText';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, UtensilsCrossed, Star } from 'lucide-react';

export default function ImmersiveFooterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black border-t border-amber-500/20 py-24 sm:py-28">
      {/* ── Ambient Radial Lighting Orbs ───────────────────────── */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] opacity-[0.14] blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(217,119,6,0.4), transparent 70%)' }}
      />

      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto flex flex-col items-center">
        {/* Star Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-1.5 mb-5 bg-zinc-900/80 border border-amber-500/20 px-4 py-1.5 rounded-full backdrop-blur-md shadow-md"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
          ))}
          <span className="text-xs text-zinc-300 font-medium ml-1">4.9 · Loved by 1,200+ diners</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-[11px] uppercase tracking-[0.35em] text-amber-400/90 font-semibold mb-4 block"
        >
          Your Table Awaits
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight"
        >
          Make Your Next Meal{' '}
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
            Extraordinary
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-zinc-400 font-sans text-sm sm:text-base mb-10 max-w-xl leading-relaxed font-light"
        >
          Discover the flavours of MOSAIC — where every plate tells a story.
          Reserve your table today and let us craft an unforgettable culinary journey.
        </motion.p>

        {/* CTA buttons — clean flex-wrap, no clipping */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full"
        >
          {/* Primary CTA */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(245,158,11,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="/reservations" className="btn-primary shadow-[0_0_25px_rgba(245,158,11,0.35)]">
              <CalendarDays size={16} />
              <ShinyText
                text="BOOK A TABLE"
                disabled={false}
                speed={2}
                className="text-zinc-950 font-bold uppercase tracking-widest"
                color="#000000"
                shineColor="#ffffff"
              />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="/menu" className="btn-outline border-amber-500/30">
              <UtensilsCrossed size={16} />
              <span>EXPLORE FULL MENU</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 mt-12 text-xs text-zinc-400"
        >
          <span className="flex items-center gap-1.5">🌿 100% Fresh Halal</span>
          <span className="w-px h-3 bg-zinc-800 hidden sm:inline" />
          <span className="flex items-center gap-1.5">🔥 Open-Flame Charcoal Grills</span>
          <span className="w-px h-3 bg-zinc-800 hidden sm:inline" />
          <span className="flex items-center gap-1.5">📅 Free Table Reservations</span>
        </motion.div>
      </div>
    </section>
  );
}
