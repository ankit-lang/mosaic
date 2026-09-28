"use client";

import React, { useState, useRef } from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, UtensilsCrossed, Flame, Coffee, Camera } from "lucide-react";
import BackgroundSemiCircles from "@/components/common/BackgroundSemiCircles";

interface GalleryItem {
  id: string;
  category: 'signature' | 'grill' | 'cafe' | 'ambiance';
  title: string;
  tag: string;
  description: string;
  img: string;
  span: string; // Tailwind grid span
}

const CATEGORIES = [
  { id: 'all', label: 'All Photos', icon: Camera },
  { id: 'signature', label: 'Signature Cuisine', icon: Sparkles },
  { id: 'grill', label: 'The Charcoal Grill', icon: Flame },
  { id: 'cafe', label: 'Café & Cocktails', icon: Coffee },
  { id: 'ambiance', label: 'Luxury Ambiance', icon: UtensilsCrossed },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    category: 'signature',
    title: 'Royal Dum Biryani Handi',
    tag: '✦ Signature Cuisine',
    description: 'Slow-cooked in sealed clay handis with saffron basmati rice and tender acacia-marinated mutton.',
    img: '/banner/3.png',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    id: '2',
    category: 'ambiance',
    title: 'Main Dining Room Architecture',
    tag: '✦ Luxury Ambiance',
    description: 'Architectural high ceilings paired with warm dark glassmorphism and golden backlight orbs.',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&auto=format&fit=crop',
    span: 'col-span-1 row-span-2',
  },
  {
    id: '3',
    category: 'grill',
    title: 'Smoked Acacia Charcoal Alfaam',
    tag: '✦ Charcoal Grill',
    description: 'Open-flame charcoal grill with 12-hour secret royal spices and charred garlic naan.',
    img: '/banner/1.png',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '4',
    category: 'signature',
    title: 'Indo-Chinese Flame Wok',
    tag: '✦ Signature Cuisine',
    description: 'High-heat wok-tossed specialties featuring bold chili heat and authentic wok hei aroma.',
    img: '/banner/2.png',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '5',
    category: 'cafe',
    title: 'Smoked Rosemary & Citrus Mocktail',
    tag: '✦ Café & Cocktails',
    description: 'Handcrafted artisanal mocktail with fresh botanicals, citrus mist, and gold leaf finish.',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '6',
    category: 'grill',
    title: 'Imperial Raan Kabab Platter',
    tag: '✦ Charcoal Grill',
    description: 'Slow-roasted whole lamb leg marinated for 24 hours in aromatic Kashmiri spices.',
    img: '/banner/5.png',
    span: 'col-span-1 row-span-2',
  },
  {
    id: '7',
    category: 'ambiance',
    title: 'VIP Private Dining Suite',
    tag: '✦ Luxury Ambiance',
    description: 'Intimate, secluded dining room for private celebrations, business dinners, and milestone events.',
    img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: '8',
    category: 'cafe',
    title: 'Single-Origin Arabica Espresso',
    tag: '✦ Café & Cocktails',
    description: 'Freshly roasted single-origin Arabica poured by our expert baristas.',
    img: '/banner/4.png',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '9',
    category: 'signature',
    title: 'Sealed Clay Handi Cooking',
    tag: '✦ Signature Cuisine',
    description: 'Traditional dough-sealed clay vessels preserving every drop of fragrant steam and aroma.',
    img: '/banner/6.png',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '10',
    category: 'cafe',
    title: 'Sommelier Reserve Selection',
    tag: '✦ Café & Cocktails',
    description: 'Curated artisanal beverages and fresh juices paired to elevate your meal.',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
  {
    id: '11',
    category: 'signature',
    title: 'Chef’s Table Special Dessert',
    tag: '✦ Signature Cuisine',
    description: 'Mosaic signature fried ice cream with warm saffron caramel drizzle and pistachio crumble.',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1000&auto=format&fit=crop',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: '12',
    category: 'ambiance',
    title: 'Terrace Dining Under the Stars',
    tag: '✦ Luxury Ambiance',
    description: 'Addis Ababa Drive outdoor patio offering fresh night breezes and romantic lighting.',
    img: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&auto=format&fit=crop',
    span: 'col-span-1 row-span-1',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categoryContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <PageWrapper>
      <div className="bg-black min-h-screen relative overflow-hidden">
        
        {/* ── Background Semi-Circle Arch Ring Animation ───────── */}
        <BackgroundSemiCircles />

        {/* ══════════════════════════════════════════════════════════
            1. HERO SECTION (Compact, No Viewport Clipping)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 pt-28 pb-8 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] font-semibold text-amber-400/90 border border-amber-500/20 rounded-full px-4 py-1.5 bg-amber-500/10 backdrop-blur-md">
              ✦ VISUAL JOURNEY ✦
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-3"
          >
            A Glimpse of{' '}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic font-normal">
              Perfection
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base font-light max-w-xl mx-auto leading-relaxed"
          >
            Immerse yourself in the ambiance, culinary craftsmanship, and soul-stirring moments at MOSAIC.
          </motion.p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            2. CATEGORY FILTER BAR (Frosted Glass Pill Navigation)
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 mb-10">
          <div className="relative flex items-center">
            {/* Left Scroll Button (Mobile/Tablet) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollLeft}
              className="absolute left-0 z-20 md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Scroll Container */}
            <div 
              ref={categoryContainerRef}
              className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto scroll-smooth w-full px-8 md:px-0 py-2 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer shrink-0 ${
                      isActive ? 'text-zinc-950 font-bold' : 'text-zinc-300 hover:text-white bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 backdrop-blur-md'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeGalleryTab"
                        className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] z-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon size={13} className={`relative z-10 ${isActive ? 'text-zinc-950' : 'text-amber-400'}`} />
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Button (Mobile/Tablet) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollRight}
              className="absolute right-0 z-20 md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 shadow-[0_0_15px_rgba(0,0,0,0.8)] backdrop-blur-md"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            3. LUXURY BENTO GRID SHOWCASE
        ══════════════════════════════════════════════════════════ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]"
          >
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group relative rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl cursor-pointer ${item.span}`}
                >
                  {/* High-res Image */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Gradient Hover Scrim */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-5 z-10">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-black/60 border border-amber-500/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                        {item.tag}
                      </span>

                      {/* Expand Icon */}
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center backdrop-blur-md shadow-md group-hover:scale-110 transition-transform">
                        <Maximize2 size={15} />
                      </div>
                    </div>

                    <h3 className="text-base font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Subtle Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-amber-400/40 transition-all duration-300 pointer-events-none z-20" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            4. INTERACTIVE FULL-SCREEN LIGHTBOX MODAL
        ══════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {currentItem && lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 backdrop-blur-2xl bg-black/90"
            >
              {/* Close button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-400 flex items-center justify-center transition-all z-50 cursor-pointer shadow-lg"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              {/* Prev button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-400 flex items-center justify-center transition-all z-50 cursor-pointer shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-400 flex items-center justify-center transition-all z-50 cursor-pointer shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight size={24} />
              </button>

              {/* Lightbox Content Box */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full max-h-[85vh] flex flex-col bg-zinc-900/90 border border-amber-500/30 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
              >
                {/* Image View */}
                <div className="relative w-full h-[55vh] md:h-[65vh] bg-black">
                  <Image
                    src={currentItem.img}
                    alt={currentItem.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Lightbox Footer Info */}
                <div className="p-6 md:p-8 bg-zinc-950 border-t border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                      {currentItem.tag}
                    </span>
                    <h2 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                      {currentItem.title}
                    </h2>
                    <p className="text-xs md:text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-zinc-500 shrink-0">
                    <span className="text-amber-400 font-bold">0{lightboxIndex + 1}</span> / 0{filteredItems.length}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageWrapper>
  );
}
