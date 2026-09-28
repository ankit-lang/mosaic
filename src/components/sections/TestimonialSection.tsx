"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "An absolute masterpiece of culinary art. The Raan Kabab was slow-roasted to absolute perfection and the spices were deeply fragrant. Hands down the best dining experience in Lusaka.",
    author: "The Culinary Review",
    role: "Food & Dining Critic",
    dish: "Raan Kabab & Tandoori Platter",
    avatar: "/banner/1.png",
    rating: 5,
  },
  {
    id: 2,
    quote: "A symphony of rich flavors! The Chicken Bowl Soup and Wok-tossed Hakka Noodles brought authentic Asian aromas. The service was impeccable and the ambience is world-class.",
    author: "Zambia Fine Dining Guide",
    role: "Executive Reviewer",
    dish: "Signature Soups & Indo-Chinese Wok",
    avatar: "/banner/2.png",
    rating: 5,
  },
  {
    id: 3,
    quote: "Stunning presentation and atmosphere. The Matcha Iced Latte and Fried Ice Cream Mosaic Special were unforgettable highlights. MOSAIC truly lives up to its luxury reputation.",
    author: "Chef's Table Magazine",
    role: "International Gourmet Journal",
    dish: "Artisanal Cafe & Special Dessert",
    avatar: "/banner/3.png",
    rating: 5,
  },
  {
    id: 4,
    quote: "From charcoal-grilled Alfaam Chicken to rich Mutton Roghan Josh, every dish was served sizzling hot with extraordinary depth of flavor. We will definitely be returning!",
    author: "Lusaka Lifestyle & Taste",
    role: "Verified VIP Guest",
    dish: "Charcoal Grill & Mutton Specialties",
    avatar: "/banner/4.png",
    rating: 5,
  }
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section 
      className="bg-black py-28 relative overflow-hidden border-t border-amber-500/20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Ambient Radial Lighting Orbs ───────────────────────── */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] blur-[150px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(217,119,6,0.12), transparent 70%)' }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-bold flex items-center justify-center gap-2 mb-3">
            <Sparkles size={14} className="text-amber-400" /> Guest Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-zinc-400 font-sans text-sm max-w-xl mx-auto font-light leading-relaxed">
            Loved by food critics and diners alike for extraordinary flavours, warm hospitality, and unforgettable moments.
          </p>
        </motion.div>
        
        {/* Interactive Swipeable Carousel Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden"
            >
              {/* Background watermark quote */}
              <Quote className="absolute -top-4 -right-4 w-40 h-40 text-amber-500/5 pointer-events-none rotate-12" />

              {/* Top Row: Quote Icon + Rating Stars */}
              <div className="flex items-center justify-between gap-4 mb-8 border-b border-amber-500/15 pb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <Quote size={22} />
                </div>

                <div className="flex items-center gap-1.5 bg-zinc-950/80 px-4 py-2 rounded-full border border-amber-500/20 backdrop-blur-md">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono text-amber-300 font-bold ml-1">5.0</span>
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-xl md:text-2xl font-serif text-white leading-relaxed italic mb-8 font-normal">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author Info & Verified Tag */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-amber-500/15 pt-6">
                <div className="flex items-center gap-4">
                  {/* Photo Avatar */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/40 shadow-md shrink-0 bg-zinc-800">
                    <Image
                      src={current.avatar}
                      alt={current.author}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="text-lg font-serif font-bold text-amber-300">
                        {current.author}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                        <CheckCircle2 size={10} /> Verified
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-sans">
                      {current.role} • <span className="text-amber-200/80 italic">{current.dish}</span>
                    </p>
                  </div>
                </div>

                {/* Counter indicator */}
                <div className="text-xs font-mono text-zinc-500 self-end sm:self-center">
                  <span className="text-amber-400 font-bold">0{activeIndex + 1}</span> / 0{testimonials.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrow Controls & Dots */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-zinc-900/80 border border-amber-500/20 hover:border-amber-400/60 hover:text-amber-300 text-zinc-300 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg backdrop-blur-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-8 bg-gradient-to-r from-amber-400 to-yellow-400 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                      : 'w-2.5 bg-zinc-800 hover:bg-zinc-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-zinc-900/80 border border-amber-500/20 hover:border-amber-400/60 hover:text-amber-300 text-zinc-300 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg backdrop-blur-md"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
