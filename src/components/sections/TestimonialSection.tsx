"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ShinyText from '../react-bits/ShinyText';
import { Quote, ChevronLeft, ChevronRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote: "An absolute masterpiece of culinary art. The Raan Kabab was slow-roasted to absolute perfection and the spices were deeply fragrant. Hands down the best dining experience in Lusaka.",
    author: "The Culinary Review",
    role: "Food & Dining Critic",
    dish: "Raan Kabab & Tandoori Platter",
    rating: 5,
  },
  {
    quote: "A symphony of rich flavors! The Chicken Bowl Soup and Wok-tossed Hakka Noodles brought authentic Asian aromas. The service was impeccable and the ambience is world-class.",
    author: "Zambia Fine Dining Guide",
    role: "Executive Reviewer",
    dish: "Signature Soups & Indo-Chinese Wok",
    rating: 5,
  },
  {
    quote: "Stunning presentation and atmosphere. The Matcha Iced Latte and Fried Ice Cream Mosaic Special were unforgettable highlights. MOSAIC truly lives up to its luxury reputation.",
    author: "Chef's Table Magazine",
    role: "International Gourmet Journal",
    dish: "Artisanal Cafe & Mosaic Special Dessert",
    rating: 5,
  },
  {
    quote: "From charcoal-grilled Alfaam Chicken to rich Mutton Roghan Josh, every dish was served sizzling hot with extraordinary depth of flavor. We will definitely be returning!",
    author: "Lusaka Lifestyle & Taste",
    role: "Verified VIP Guest",
    dish: "Charcoal Grill & Mutton Specialties",
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

  return (
    <section 
      className="bg-[#050507] py-28 relative overflow-hidden border-t border-b border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient Radial Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/5 blur-[140px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-bold flex items-center justify-center gap-2 mb-3">
            <Sparkles size={14} /> Guest Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-neutral-400 font-sans text-sm max-w-lg mx-auto">
            Read authentic reviews from renowned food critics and valued diners who experienced MOSAIC.
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
        </div>
        
        {/* Smooth Interactive Card Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-neutral-900/60 border border-gold/30 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-md relative"
            >
              {/* Top Quote Icon & Rating Stars */}
              <div className="flex items-center justify-between gap-4 mb-8 border-b border-neutral-800 pb-6">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <Quote size={24} />
                </div>

                <div className="flex items-center gap-1.5 bg-neutral-950/80 px-4 py-2 rounded-full border border-neutral-800">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                  <span className="text-xs font-mono text-gold font-bold ml-1">5.0</span>
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="text-xl md:text-2xl font-serif text-white leading-relaxed italic mb-8">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>

              {/* Author Info & Verified Tag */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-800/80 pt-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-lg font-serif font-bold text-gold">
                      {testimonials[activeIndex].author}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded-full">
                      <CheckCircle2 size={10} /> Verified Reviewer
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans">
                    {testimonials[activeIndex].role} • <span className="text-neutral-300 italic">{testimonials[activeIndex].dish}</span>
                  </p>
                </div>

                {/* Counter indicator */}
                <div className="text-xs font-mono text-neutral-500">
                  <span className="text-gold font-bold">0{activeIndex + 1}</span> / 0{testimonials.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrow Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 hover:border-gold hover:text-gold text-neutral-300 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
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
                      ? 'w-8 bg-gold'
                      : 'w-2.5 bg-neutral-800 hover:bg-neutral-700'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-800 hover:border-gold hover:text-gold text-neutral-300 flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
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
