"use client";

import React from "react";
import Link from "next/link";
import PageWrapper from "@/components/layout/PageWrapper";
import MagicBento from "@/components/react-bits/MagicBento";
import SplitText from "@/components/react-bits/SplitText";
import Image from "next/image";
import PageBanner from "@/components/layout/PageBanner";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Sparkles, UtensilsCrossed, CalendarDays, Flame, HeartHandshake, Award, Users, Quote } from "lucide-react";
import ShinyText from "@/components/react-bits/ShinyText";

export default function AboutPage() {
  const philosophyContent = [
    {
      title: "Authentic & Bold Flavours",
      description:
        "From the first aroma of charcoal-grilled kebabs to the rich spices of our dum biryani, every dish is thoughtfully prepared using quality ingredients, authentic flavours, and modern presentation. Our chefs combine traditional recipes with their own creative touch, ensuring that every visit gives you something delicious to discover.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white relative rounded-2xl overflow-hidden border border-gold/30">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="Arabian Charcoal and Tandoori Kebabs"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <span className="text-gold font-serif text-lg font-bold">Arabian Charcoal & Tandoori</span>
          </div>
        </div>
      ),
    },
    {
      title: "Crafted for Every Occasion",
      description:
        "Whether you're enjoying a relaxed family meal, catching up with friends, celebrating a special moment, or simply treating yourself to your favourite dish, MOSAIC is designed to make every occasion feel special. We care about the details — from the food on your table to the atmosphere around you and the hospitality you receive.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white relative rounded-2xl overflow-hidden border border-gold/30">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="Dining atmosphere at MOSAIC"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <span className="text-gold font-serif text-lg font-bold">Warm & Vibrant Hospitality</span>
          </div>
        </div>
      ),
    },
    {
      title: "A Tapestry of 5 Culinary Worlds",
      description:
        "MOSAIC brings together the best of Arabian Charcoal, Tandoori, Indo-Chinese, Royal Biryani, and Artisanal Café under one roof. Every cuisine adds a different colour to our story, creating a dining experience as diverse and vibrant as a mosaic itself.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white relative rounded-2xl overflow-hidden border border-gold/30">
          <Image
            src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&auto=format&fit=crop"
            width={500}
            height={500}
            className="h-full w-full object-cover"
            alt="Indo-Chinese and Dum Biryani Specialties"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <span className="text-gold font-serif text-lg font-bold">5 Cuisines Under One Roof</span>
          </div>
        </div>
      ),
    },
  ];

  const differenceCards = [
    {
      title: "Authentic Flavours",
      description: "Traditional recipes and carefully selected spices create flavours that feel genuine and unforgettable.",
      label: "Authenticity",
      color: "#120F17"
    },
    {
      title: "Fresh & Quality Ingredients",
      description: "We believe exceptional food begins with exceptional ingredients.",
      label: "Quality",
      color: "#120F17"
    },
    {
      title: "Passion on Every Plate",
      description: "Every dish is prepared with care, creativity, and attention to detail.",
      label: "Craftsmanship",
      color: "#120F17"
    },
    {
      title: "A Place to Connect",
      description: "MOSAIC is a place where food, conversations, celebrations, and memories come together.",
      label: "Community",
      color: "#120F17"
    }
  ];

  return (
    <PageWrapper>
      <PageBanner
        title="About MOSAIC"
        description="More Than a Restaurant. A Celebration of Flavour."
      />

      {/* Main Brand Story Section */}
      <section className="py-24 bg-[#060608] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-bold flex items-center justify-center gap-2 mb-4">
              <Sparkles size={14} /> OUR STORY & HERITAGE
            </span>
            <SplitText
              text="More Than a Restaurant."
              className="text-4xl md:text-6xl font-serif text-white mb-4"
              delay={40}
              duration={0.8}
            />
            <h2 className="text-2xl md:text-4xl font-serif text-gold italic font-normal mb-8">
              A Celebration of Flavour.
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10" />
            
            <p className="text-lg md:text-xl font-sans text-neutral-200 leading-relaxed max-w-4xl mx-auto mb-6">
              At <strong className="text-gold">MOSAIC Restaurant & Cafe</strong>, we believe great food is more than what is served on a plate — it is an experience that brings people together.
            </p>
            <p className="text-base md:text-lg font-sans text-neutral-400 leading-relaxed max-w-4xl mx-auto">
              Born from a passion for bold flavours and memorable dining, MOSAIC brings together the best of <strong className="text-gold font-semibold">Arabian Charcoal, Tandoori, Indo-Chinese, Royal Biryani,</strong> and <strong className="text-gold font-semibold">Artisanal Café</strong> under one roof. Every cuisine adds a different colour to our story, creating a dining experience as diverse and vibrant as a mosaic itself.
            </p>
          </div>

          {/* Quick Highlight Stats / Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {[
              { number: "5+", label: "Distinct Culinary World Traditions" },
              { number: "30+", label: "Handcrafted Category Collections" },
              { number: "100%", label: "Authentic Charcoal & Tandoor" },
              { number: "1", label: "Unforgettable Experience" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-neutral-900/50 border border-gold/20 rounded-2xl p-6 text-center hover:border-gold/50 transition-all">
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold block mb-1">{stat.number}</span>
                <span className="text-xs text-neutral-400 font-sans uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-24 bg-[#0a0a0d] border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3 block">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Different Flavours. One Extraordinary Experience.
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base font-sans">
              Thoughtfully prepared using quality ingredients, authentic flavours, and modern presentation.
            </p>
          </div>
          <StickyScroll content={philosophyContent} />
        </div>
      </section>

      {/* What Makes Us Different? (Magic Bento Grid) */}
      <section className="py-24 bg-[#060608] border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3 block">
              OUR CORE VALUES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
              What Makes Us Different?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-sans text-base">
              The four pillars that guide every dish we serve and every memory we host.
            </p>
          </div>
          <MagicBento
            cards={differenceCards}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={15}
            glowColor="212, 175, 55"
          />
        </div>
      </section>

      {/* Our Promise & Motto Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0d] via-neutral-950 to-black border-t border-gold/20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-neutral-900/80 border border-gold/40 rounded-3xl p-8 md:p-14 text-center shadow-2xl backdrop-blur-xl relative">
            <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-4 block">
              OUR PROMISE
            </span>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8">
              &ldquo;We don&apos;t just want you to enjoy your meal. We want you to remember it. At MOSAIC, every plate has a story, every flavour has a purpose, and every guest becomes a part of ours.&rdquo;
            </blockquote>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
            
            <h3 className="text-lg md:text-xl font-serif text-gold font-bold tracking-wider mb-8">
              Welcome to MOSAIC. Taste the difference. Feel the warmth. Create the memory.
            </h3>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link href="/menu" className="btn-primary">
                <UtensilsCrossed size={18} />
                <ShinyText
                  text="EXPLORE OUR MENU"
                  disabled={false}
                  speed={2}
                  className="text-black font-bold uppercase tracking-widest text-sm"
                  color="#000000"
                  shineColor="#ffffff"
                />
              </Link>
              <Link href="/reservations" className="btn-outline">
                <CalendarDays size={18} />
                <span className="font-bold tracking-widest text-sm uppercase">BOOK YOUR TABLE</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
