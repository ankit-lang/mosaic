"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, UtensilsCrossed, CalendarDays, Flame, Award, Users, Coffee, Utensils, FlameKindling } from 'lucide-react';

export default function AboutSection() {
  const flavorWorlds = [
    {
      emoji: "🍢",
      title: "Arabian Charcoal & Tandoori",
      description: "Experience the irresistible aroma of perfectly grilled kebabs, juicy tandoori specialties, and slow-roasted delicacies prepared over charcoal for an authentic smoky flavour."
    },
    {
      emoji: "🔥",
      title: "Indo-Chinese Wok Specialties",
      description: "From delicious starters to flavour-packed noodles, fried rice, and main courses, our Indo-Chinese selection brings together vibrant sauces, fresh ingredients, and bold Asian flavours."
    },
    {
      emoji: "🏺",
      title: "Royal Dum Biryani",
      description: "Fragrant rice, aromatic spices, and perfectly cooked meat come together in our signature dum biryanis — a royal feast crafted for true food lovers."
    },
    {
      emoji: "☕",
      title: "Artisanal Café",
      description: "Complete your dining experience with handcrafted coffees, iced lattes, frappes, boba drinks, smoothies, mocktails, milkshakes, and refreshing juices."
    }
  ];

  const pillars = [
    {
      icon: <Flame className="w-6 h-6 text-gold" />,
      title: "Authentic Flavours",
      description: "Traditional recipes and carefully selected spices create flavours that feel genuine and unforgettable."
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "Fresh & Quality Ingredients",
      description: "We believe exceptional food begins with exceptional ingredients."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Passion on Every Plate",
      description: "Every dish is prepared with care, creativity, and attention to detail."
    },
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "A Place to Connect",
      description: "MOSAIC is a place where food, conversations, celebrations, and memories come together."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-[#0a0a0c] to-black border-t border-gold/20 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-bold flex items-center justify-center gap-2 mb-3">
            <Sparkles size={14} /> ABOUT MOSAIC
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            More Than a Restaurant.<br />
            <span className="text-gold italic font-normal">A Celebration of Flavour.</span>
          </h2>
          <p className="text-neutral-300 font-sans text-base md:text-lg leading-relaxed mb-6">
            At MOSAIC Restaurant & Cafe, we believe great food is more than what is served on a plate — it is an experience that brings people together.
          </p>
          <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed">
            Born from a passion for bold flavours and memorable dining, MOSAIC brings together the best of <strong className="text-gold font-semibold">Arabian Charcoal, Tandoori, Indo-Chinese, Royal Biryani,</strong> and <strong className="text-gold font-semibold">Artisanal Café</strong> under one roof. Every cuisine adds a different colour to our story, creating a dining experience as diverse and vibrant as a mosaic itself.
          </p>
        </div>

        {/* Section: A World of Flavours, One Table */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
              OUR CUISINE SELECTION
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-4">
              A World of Flavours, One Table
            </h3>
            <p className="text-neutral-300 max-w-2xl mx-auto text-sm md:text-base font-sans">
              At MOSAIC, we bring together a carefully curated collection of flavours inspired by different culinary traditions. Whether you&apos;re craving sizzling charcoal kebabs, comforting Chinese soups, aromatic biryanis, flavourful wok dishes, or a refreshing café drink, there is something special waiting for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flavorWorlds.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-900/80 border border-gold/20 hover:border-gold/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h4 className="text-lg font-serif font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans mb-4">{item.description}</p>
                </div>
                <Link href="/menu" className="text-gold text-xs font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1">
                  Explore Dishes &rarr;
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Crafted With Passion Banner */}
        <div className="bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-neutral-900/90 border border-gold/30 rounded-3xl p-8 md:p-12 mb-20 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
                EXCELLENCE IN EVERY DETAIL
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
                Crafted With Passion. Served With Pride.
              </h3>
              <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                Every dish at MOSAIC is created with attention to flavour, freshness, presentation, and quality. Our chefs combine traditional techniques with contemporary creativity to create dishes that look as good as they taste.
              </p>

              {/* 4 Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-medium">
                <span className="bg-gold/10 border border-gold/40 text-gold px-3.5 py-1.5 rounded-full">Fresh Ingredients</span>
                <span className="bg-gold/10 border border-gold/40 text-gold px-3.5 py-1.5 rounded-full">Authentic Flavours</span>
                <span className="bg-gold/10 border border-gold/40 text-gold px-3.5 py-1.5 rounded-full">Expert Preparation</span>
                <span className="bg-gold/10 border border-gold/40 text-gold px-3.5 py-1.5 rounded-full">Memorable Experience</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-gold/20 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-right">
                <span className="text-gold text-3xl md:text-4xl font-serif font-bold block mb-2">MOSAIC</span>
                <p className="text-neutral-400 text-xs tracking-wider uppercase mb-6">Taste. Discover. Enjoy.</p>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full">
                  <Link href="/menu" className="btn-primary justify-center">
                    <UtensilsCrossed size={16} />
                    <span>Explore Our Menu</span>
                  </Link>
                  <Link href="/reservations" className="btn-outline justify-center">
                    <CalendarDays size={16} />
                    <span>Book Your Table</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-gold mb-3">
              What Makes Us Different?
            </h3>
            <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
              We care about the details — from the food on your table to the atmosphere around you and the hospitality you receive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-900/60 border border-gold/20 hover:border-gold/60 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-serif font-bold text-white mb-2">{item.title}</h4>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Promise Banner */}
        <div className="bg-gradient-to-r from-amber-950/40 via-neutral-900/80 to-amber-950/40 border border-gold/40 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl relative">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold mb-3 block">
            OUR PROMISE
          </span>
          <blockquote className="text-xl md:text-2xl font-serif italic text-white mb-6 leading-relaxed">
            &ldquo;We don&apos;t just want you to enjoy your meal. We want you to remember it. At MOSAIC, every plate has a story, every flavour has a purpose, and every guest becomes a part of ours.&rdquo;
          </blockquote>
          <p className="text-gold font-sans font-medium text-sm md:text-base tracking-wider uppercase">
            Come hungry. Leave with memories.
          </p>
        </div>
      </div>
    </section>
  );
}
