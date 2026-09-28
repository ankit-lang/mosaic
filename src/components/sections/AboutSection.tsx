"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Sparkles, UtensilsCrossed, CalendarDays,
  Flame, Award, Users, ArrowRight, Quote,
} from 'lucide-react';

const CUISINE_CARDS = [
  {
    id: 'tandoori',
    title: 'Arabian Charcoal & Tandoori',
    hook: 'Smoked over acacia charcoal with secret royal spices',
    img: '/banner/1.png',
    accent: 'from-orange-900/80',
  },
  {
    id: 'indochinese',
    title: 'Indo-Chinese Wok Specialties',
    hook: 'High-flame wok-tossed sauces, bold heat, and wok hei aroma',
    img: '/banner/2.png',
    accent: 'from-red-900/80',
  },
  {
    id: 'biryani',
    title: 'Royal Dum Biryani',
    hook: 'Saffron-layered, slow-sealed in a sealed clay handi for hours',
    img: '/banner/3.png',
    accent: 'from-amber-900/80',
  },
  {
    id: 'cafe',
    title: 'Artisanal Café',
    hook: 'Single-origin espresso, cold brews, boba & signature mocktails',
    img: '/banner/4.png',
    accent: 'from-stone-900/80',
  },
];

const CRAFT_BADGES = [
  { icon: '🔥', label: 'Open-Flame Charcoal' },
  { icon: '🌿', label: 'Hand-Ground Spices' },
  { icon: '☕', label: 'Single-Origin Arabica' },
];

const pillars = [
  {
    icon: <Flame className="w-6 h-6 text-amber-400" />,
    title: "Authentic Flavours",
    description: "Traditional recipes and carefully selected spices create flavours that feel genuine and unforgettable.",
  },
  {
    icon: <Award className="w-6 h-6 text-amber-400" />,
    title: "Fresh & Quality Ingredients",
    description: "We believe exceptional food begins with exceptional, farm-fresh ingredients.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-amber-400" />,
    title: "Passion on Every Plate",
    description: "Every dish is prepared with culinary care, artistic flair, and relentless attention to detail.",
  },
  {
    icon: <Users className="w-6 h-6 text-amber-400" />,
    title: "A Place to Connect",
    description: "MOSAIC is where food, conversations, celebrations, and cherished memories come together.",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-black via-[#0a0a0c] to-black border-t border-amber-500/20 relative overflow-hidden">

      {/* ── Ambient Orbs & Golden Lighting ─────────────────────── */}
      <div
        aria-hidden
        className="absolute top-1/4 left-0 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.12), transparent 70%)' }}
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] blur-[150px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ══════════════════════════════════════════════════════════
            SECTION 1 — EDITORIAL SPLIT: Story + Visual Collage
        ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 pb-16">

          {/* ─── LEFT: The Philosophy ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className="flex flex-col"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-amber-400/90 font-semibold mb-6">
              <span className="text-amber-400">✦</span> The MOSAIC Philosophy
            </span>

            {/* Headline */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
              Culinary Artistry<br />
              Across Continents,{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
                Centered at One Table.
              </span>
            </h2>

            {/* Punchy story copy */}
            <p className="text-zinc-400 text-base leading-relaxed mb-4 font-light">
              MOSAIC was born from a singular obsession — to bring the world's most soul-stirring
              culinary traditions under one roof and make them extraordinary. Our pitmasters tend
              live charcoal beds for 12-hour marinades. Our biryani simmers sealed in clay. Our wok
              stations ignite with pure wok hei flame.
            </p>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light">
              Every dish carries a lineage of technique. Every flavour was argued over, refined, and
              tasted again before it earned its place on your plate.
            </p>

            {/* Craft trust badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {CRAFT_BADGES.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-300 border border-amber-500/30 bg-amber-500/10 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm"
                >
                  <span>{b.icon}</span> {b.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href="/menu">
                <motion.span
                  whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(245,158,11,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-zinc-950 cursor-pointer shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d4af37 50%, #b45309 100%)' }}
                >
                  <UtensilsCrossed size={15} /> Explore Our Menu
                </motion.span>
              </Link>
              <Link href="/reservations">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white border border-amber-500/30 bg-zinc-900/60 backdrop-blur-xl hover:border-amber-400/60 transition-colors cursor-pointer"
                >
                  <CalendarDays size={15} /> Book a Table
                </motion.span>
              </Link>
            </div>
          </motion.div>

          {/* ─── RIGHT: Asymmetric visual collage ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative h-[480px] lg:h-[520px]"
          >
            {/* Primary image — large */}
            <div className="absolute top-0 left-0 w-[75%] h-[82%] rounded-3xl overflow-hidden border border-amber-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]">
              <Image
                src="/banner/5.png"
                alt="Tandoori skewers over charcoal at MOSAIC"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Secondary floating card — overlapping bottom-right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-0 right-0 w-[58%] h-[52%] rounded-2xl overflow-hidden border border-amber-500/30 backdrop-blur-xl bg-zinc-900/60"
              style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 35px rgba(245,158,11,0.15)' }}
            >
              <Image
                src="/banner/6.png"
                alt="Steaming dum biryani handi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Gold caption tag */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-amber-300 bg-zinc-950/80 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  Signature Dum Handi
                </span>
              </div>
            </motion.div>

            {/* Corner accent glow */}
            <div
              aria-hidden
              className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full opacity-25 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
            />
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 — CUISINE SHOWCASE: Photo-first vertical cards
        ══════════════════════════════════════════════════════════ */}
        <div className="pb-20">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.32em] text-amber-400/80 font-semibold block mb-3">
              Our Cuisine Selection
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 leading-tight">
              A World of Flavours,{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
                One Table
              </span>
            </h3>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
              Five culinary traditions. One menu. Every plate crafted with obsessive care for flavour,
              technique, and presentation.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {CUISINE_CARDS.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative h-[360px] rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-400/50 bg-zinc-900/60 backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]"
              >
                {/* Background photo */}
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />

                {/* Dark scrim */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${card.accent} via-zinc-950/70 to-transparent group-hover:via-zinc-950/60 transition-all duration-300`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-amber-400/40 transition-all duration-300 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  {/* Accent bullet */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400/90">
                      {idx === 0 ? 'Grill & Charcoal' : idx === 1 ? 'Wok & Flame' : idx === 2 ? 'Clay Sealed' : 'Brewed Fresh'}
                    </span>
                  </div>

                  <h4 className="text-[15px] font-semibold text-white leading-snug mb-1.5 group-hover:text-amber-200 transition-colors duration-200">
                    {card.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-2 font-light">
                    {card.hook}
                  </p>

                  <Link
                    href="/menu"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Explore Dishes <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 — "Crafted With Passion" Editorial Banner
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden"
        >
          {/* Ambient inner backlight */}
          <div
            aria-hidden
            className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none opacity-20 blur-3xl"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(245,158,11,0.25), transparent 70%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent mb-3 block">
                [ EXCELLENCE IN EVERY DETAIL ]
              </span>
              <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Crafted With Passion.{' '}
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
                  Served With Pride.
                </span>
              </h3>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                Every dish at MOSAIC is created with uncompromised attention to flavour, freshness, presentation, and quality.
                Our master chefs combine centuries-old culinary heritage with modern creativity to deliver an unforgettable dining experience.
              </p>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                {['Fresh Ingredients', 'Authentic Flavours', 'Expert Preparation', 'Memorable Hospitality'].map((badge) => (
                  <span
                    key={badge}
                    className="bg-amber-500/10 border border-amber-500/30 text-amber-300 px-3.5 py-1.5 rounded-full backdrop-blur-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-amber-500/20 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-right w-full">
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent text-3xl md:text-4xl font-serif font-bold block mb-2">
                  MOSAIC
                </span>
                <p className="text-zinc-400 text-xs tracking-wider uppercase mb-6 font-light">Taste. Discover. Enjoy.</p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
                  <Link href="/menu" className="w-full">
                    <motion.span
                      whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(245,158,11,0.35)' }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-primary w-full justify-center"
                    >
                      <UtensilsCrossed size={15} />
                      <span>Explore Our Menu</span>
                    </motion.span>
                  </Link>
                  <Link href="/reservations" className="w-full">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="btn-outline w-full justify-center"
                    >
                      <CalendarDays size={15} />
                      <span>Book Your Table</span>
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 — What Makes Us Different (4 Animated Cards)
        ══════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[11px] uppercase tracking-[0.32em] text-amber-400/80 font-semibold block mb-3">
              The Mosaic Distinction
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3">
              What Makes Us{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
                Different?
              </span>
            </h3>
            <p className="text-zinc-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
              We obsess over the details — from the hand-picked ingredients on your plate to the warm atmosphere around you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 hover:border-amber-400/50 p-7 rounded-2xl transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),_0_0_25px_rgba(245,158,11,0.15)] flex flex-col justify-between overflow-hidden"
              >
                {/* Animated border-beam hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-amber-400/40 transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Glowing Amber Glass Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:bg-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 — "Our Promise" Center-Focused Quote Banner
        ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-3xl p-8 md:p-14 text-center max-w-4xl mx-auto overflow-hidden mb-12"
        >
          {/* Subtle gold quotation mark watermark */}
          <Quote className="absolute top-4 left-6 w-28 h-28 text-amber-500/10 pointer-events-none -rotate-12" />
          <Quote className="absolute bottom-4 right-6 w-28 h-28 text-amber-500/10 pointer-events-none rotate-180" />

          {/* Soft Amber Glow Aura */}
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] opacity-25 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(217,119,6,0.3), transparent 70%)' }}
          />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-amber-400 font-bold mb-4 block">
              ✦ OUR PROMISE ✦
            </span>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif italic text-white mb-6 leading-relaxed max-w-3xl mx-auto font-normal">
              &ldquo;We don&apos;t just want you to enjoy your meal. We want you to remember it. At MOSAIC,
              every plate has a story, every flavour has a purpose, and every guest becomes a cherished part of ours.&rdquo;
            </blockquote>
            <p className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-sans font-bold text-sm md:text-base tracking-widest uppercase">
              Come hungry. Leave with memories.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
