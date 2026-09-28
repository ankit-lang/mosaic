"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageWrapper from "@/components/layout/PageWrapper";
import { motion } from "framer-motion";
import { Sparkles, UtensilsCrossed, CalendarDays, Flame, CookingPot, Users } from "lucide-react";
import ShinyText from "@/components/react-bits/ShinyText";
import BackgroundSemiCircles from "@/components/common/BackgroundSemiCircles";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const HERITAGE_STATS = [
  { number: "150+", label: "Masterpiece Dishes" },
  { number: "30", label: "Curated Collections" },
  { number: "100%", label: "Wood-Fired & Halal Certified" },
];

const PHILOSOPHY_CONTENT = [
  {
    title: "Authentic & Bold Flavours",
    description:
      "From the first aroma of charcoal-grilled kebabs to the rich spices of our dum biryani, every dish is thoughtfully prepared using quality ingredients, authentic flavours, and modern presentation. Our chefs combine traditional recipes with their own creative touch, ensuring that every visit gives you something delicious to discover.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative rounded-2xl overflow-hidden border border-amber-500/30">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Arabian Charcoal and Tandoori Kebabs"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-serif text-lg font-bold">
            Arabian Charcoal & Tandoori
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Crafted for Every Occasion",
    description:
      "Whether you're enjoying a relaxed family meal, catching up with friends, celebrating a special moment, or simply treating yourself to your favourite dish, MOSAIC is designed to make every occasion feel special. We care about the details — from the food on your table to the atmosphere around you and the hospitality you receive.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative rounded-2xl overflow-hidden border border-amber-500/30">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Dining atmosphere at MOSAIC"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-serif text-lg font-bold">
            Warm & Vibrant Hospitality
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "A Tapestry of 5 Culinary Worlds",
    description:
      "MOSAIC brings together the best of Arabian Charcoal, Tandoori, Indo-Chinese, Royal Biryani, and Artisanal Café under one roof. Every cuisine adds a different colour to our story, creating a dining experience as diverse and vibrant as a mosaic itself.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative rounded-2xl overflow-hidden border border-amber-500/30">
        <Image
          src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="Indo-Chinese and Dum Biryani Specialties"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
          <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-serif text-lg font-bold">
            5 Cuisines Under One Roof
          </span>
        </div>
      </div>
    ),
  },
];

const PHILOSOPHY_PILLARS = [
  {
    icon: Flame,
    title: "The Fire & The Wok",
    badge: "Grill & Flame Mastery",
    description: "The mastery of high-heat acacia charcoal, high-flame wok hei, and clay-sealed dum biryani traditions built on centuries of culinary lineage.",
  },
  {
    icon: CookingPot,
    title: "Authentic Ingredients",
    badge: "Obsessive Craftsmanship",
    description: "Hand-ground royal spice blends, 12-hour marinades, and fresh farm-sourced produce prepared with meticulous technique.",
  },
  {
    icon: Users,
    title: "The Gathering Table",
    badge: "Warm Hospitality",
    description: "A warm, architectural haven designed for family gatherings, milestone celebrations, and intimate private lounge dining.",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="bg-black min-h-screen relative overflow-hidden">
        
        {/* ── Background Semi-Circle Arch Ring Animation ───────── */}
        <BackgroundSemiCircles />

        {/* ══════════════════════════════════════════════════════════
            1. HERO HEADER (Clean offset, Single Headline, No Duplication)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 pt-28 pb-8 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] font-semibold text-amber-400/90 border border-amber-500/20 rounded-full px-4 py-1.5 bg-amber-500/10 backdrop-blur-md">
              ✦ ABOUT MOSAIC ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4"
          >
            Where Heritage Meets the Flame:{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
              More Than a Restaurant, A Celebration of Flavour.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed"
          >
            Five culinary worlds under one roof — crafted with obsessive care for tradition, technique, and unforgettable memories.
          </motion.p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            2. "OUR STORY & HERITAGE" EDITORIAL SPLIT LAYOUT (7 / 5 COLS)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column (7 cols) — Culinary Story */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col justify-between"
            >
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-400/90 mb-3 block">
                [ OUR STORY & HERITAGE ]
              </span>

              <h2 className="text-2xl md:text-4xl font-serif font-bold text-zinc-100 mb-6 leading-snug">
                Culinary Artistry Across Continents,{' '}
                <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
                  Centered at One Table.
                </span>
              </h2>

              <p className="text-zinc-300 text-base leading-relaxed font-light mb-4">
                MOSAIC was born from a singular obsession — to bring the world&apos;s most soul-stirring
                culinary traditions under one roof and make them extraordinary. Our pitmasters tend
                live acacia charcoal beds for 12-hour marinades. Our dum biryani simmers dough-sealed in authentic clay. Our wok stations ignite with pure wok hei flame.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed font-light mb-8">
                From handcrafted Indo-Chinese dim sums to single-origin Arabica espresso and artisanal mocktails, every dish carries a lineage of technique. Every flavour was argued over, refined, and tasted again before earning its place on your table.
              </p>

              {/* Founder / Chef Quote Block */}
              <div className="bg-zinc-900/80 border-l-2 border-amber-400 rounded-r-2xl p-5 mb-8 backdrop-blur-md">
                <blockquote className="text-sm md:text-base font-serif italic text-amber-200/90 mb-2">
                  &ldquo;Every plate has a story, every flavour has a purpose, and every guest becomes a cherished part of ours.&rdquo;
                </blockquote>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block font-semibold">
                  — The Master Chefs at MOSAIC
                </span>
              </div>

              {/* Quick Heritage Stats */}
              <div className="grid grid-cols-3 gap-4 border-t border-amber-500/20 pt-6">
                {HERITAGE_STATS.map((stat, idx) => (
                  <div key={idx}>
                    <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent text-2xl md:text-3xl font-serif font-bold block">
                      {stat.number}
                    </span>
                    <span className="text-[10px] md:text-xs text-zinc-400 font-sans uppercase tracking-wider font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column (5 cols) — Layered Dual Imagery Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              {/* Primary Image Frame */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-[380px] w-full rounded-2xl overflow-hidden border border-amber-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-zinc-900"
              >
                <Image
                  src="/banner/5.png"
                  alt="Sizzling Charcoal Kebabs at MOSAIC"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>

              {/* Overlapping Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-zinc-900/90 backdrop-blur-xl border border-amber-500/30 rounded-xl p-4 shadow-2xl flex items-center gap-3.5 z-20 max-w-[280px]"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0 text-amber-400">
                  <Flame size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block mb-0.5">Wood-Fired & Dum Embers</span>
                  <span className="text-[10px] text-zinc-400 font-light leading-tight block">
                    Crafted over authentic charcoal & slow-cooked clay vessels
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            3. STICKY SCROLL REVEAL ANIMATION SECTION (Our Philosophy)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[11px] font-sans uppercase tracking-[0.3em] text-amber-400 font-semibold mb-2 block">
              ✦ OUR PHILOSOPHY ✦
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Different Flavours.{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
                One Extraordinary Experience.
              </span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base font-sans font-light">
              Thoughtfully prepared using quality ingredients, authentic flavours, and modern presentation.
            </p>
          </div>

          <div className="bg-zinc-950/60 border border-amber-500/20 rounded-3xl p-2 md:p-6 backdrop-blur-xl shadow-2xl">
            <StickyScroll content={PHILOSOPHY_CONTENT} />
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            4. CORE PILLARS / THE MOSAIC PHILOSOPHY (3-Card Bento Grid)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-400/90 block mb-2">
              The Mosaic Distinction
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3">
              The MOSAIC{' '}
              <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
                Pillars
              </span>
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto font-light leading-relaxed">
              Three core principles that guide every dish we prepare, every flame we ignite, and every guest we welcome.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-amber-400/40 rounded-2xl p-7 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
                >
                  <div className="relative z-10">
                    <span className="text-[10px] uppercase tracking-widest font-mono font-semibold text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20 inline-block mb-4">
                      {pillar.badge}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-5 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:bg-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-zinc-400 text-xs leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-amber-400/30 transition-all duration-300 pointer-events-none z-20" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            5. DIRECT BRIDGE TO CONVERSION (Bottom Section)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Ambient backlight */}
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] opacity-20 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(217,119,6,0.3), transparent 70%)' }}
            />

            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-amber-400 mb-3 block">
              ✦ YOUR TABLE AWAITS ✦
            </span>

            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3">
              Experience the craftsmanship in person.
            </h2>

            <p className="text-zinc-400 text-sm max-w-lg mx-auto font-light leading-relaxed mb-8">
              Join us at 4622-2 Beit Road, Lusaka for an extraordinary dining journey across continents.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/reservations">
                <motion.span
                  whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(245,158,11,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  <CalendarDays size={16} />
                  <ShinyText
                    text="RESERVE A TABLE"
                    disabled={false}
                    speed={2}
                    className="text-zinc-950 font-bold uppercase tracking-widest text-xs"
                    color="#000000"
                    shineColor="#ffffff"
                  />
                </motion.span>
              </Link>

              <Link href="/menu">
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline border-amber-500/30"
                >
                  <UtensilsCrossed size={16} />
                  <span>EXPLORE OUR MENU</span>
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </PageWrapper>
  );
}
