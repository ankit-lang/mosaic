"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowUp, Send, Sparkles, UtensilsCrossed } from 'lucide-react';
import ShinyText from '@/components/react-bits/ShinyText';

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040405] text-white border-t border-gold/20 relative overflow-hidden pt-20 pb-10">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top VIP Newsletter & Pre-order Banner */}
        <div className="bg-gradient-to-r from-neutral-900/90 via-neutral-900/60 to-neutral-900/90 border border-gold/30 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2 mb-2">
                <Sparkles size={14} /> MOSAIC VIP Club
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Join Us for Exclusive Tasting Events & Offers
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm font-sans max-w-xl">
                Subscribe to receive seasonal chef specials, secret menu access, and priority table reservations at Lusaka&apos;s premier dining destination.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-gold/10 border border-gold/40 rounded-2xl p-4 text-center">
                  <span className="text-gold font-serif font-bold text-sm block">✨ Welcome to MOSAIC VIP Circle!</span>
                  <p className="text-xs text-neutral-300 font-sans mt-1">Thank you for subscribing. Check your inbox soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 bg-neutral-950/80 border border-neutral-800 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:border-gold outline-none transition-all"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap py-3.5 px-6 shrink-0"
                  >
                    <span>Subscribe</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6">
                <img src="/logo.png" alt="MOSAIC" className="w-[180px] h-auto object-contain" />
              </Link>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                A celebration of flavour bringing together Arabian Charcoal, Tandoori, Indo-Chinese, Royal Biryani & Artisanal Café under one roof. Taste the difference. Feel the warmth. Create the memory.
              </p>
            </div>

            {/* Social Links Badges */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold transition-all"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold hover:border-gold transition-all"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/260771036277"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-500 transition-all"
                title="WhatsApp Direct"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <UtensilsCrossed size={14} /> Navigation
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-gold transition-colors block">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-neutral-400 hover:text-gold transition-colors block">
                  Explore Full Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-neutral-400 hover:text-gold transition-colors block">
                  Ambience & Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-gold transition-colors block">
                  Our Culinary Story
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="text-neutral-400 hover:text-gold transition-colors block">
                  Book VIP Table
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-gold transition-colors block">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Menu Category Shortcuts (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-[0.2em] mb-6">
              Featured Categories
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/menu#chinese-soups" className="text-neutral-400 hover:text-gold transition-colors flex items-center gap-2">
                  <span>🥣</span> Chinese Soups Collection
                </Link>
              </li>
              <li>
                <Link href="/menu#tandoori-non-veg" className="text-neutral-400 hover:text-gold transition-colors flex items-center gap-2">
                  <span>🍗</span> Tandoori Charcoal Kebabs
                </Link>
              </li>
              <li>
                <Link href="/menu#indo-chinese-starters-non-veg" className="text-neutral-400 hover:text-gold transition-colors flex items-center gap-2">
                  <span>🔥</span> Indo-Chinese Wok Starters
                </Link>
              </li>
              <li>
                <Link href="/menu#mutton" className="text-neutral-400 hover:text-gold transition-colors flex items-center gap-2">
                  <span>🥩</span> Slow-Roasted Mutton & Raan
                </Link>
              </li>
              <li>
                <Link href="/menu#biryani-special" className="text-neutral-400 hover:text-gold transition-colors flex items-center gap-2">
                  <span>🏺</span> Royal Dum Biryanis
                </Link>
              </li>
              <li>
                <Link href="/menu#coffee-hot-drinks" className="text-neutral-400 hover:text-gold transition-colors flex items-center gap-2">
                  <span>☕</span> Artisanal Coffee, Boba & Slush
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-gold uppercase tracking-[0.2em] mb-6">
              Location & Hours
            </h4>

            <div className="space-y-4 text-xs sm:text-sm font-sans">
              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>4622-2 Beit Road, Addis Ababa Drive, Lusaka, Zambia</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+260771036277" className="hover:text-gold transition-colors">
                  +260 771036277
                </a>
              </div>

              <div className="flex items-center gap-3 text-neutral-300">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:mosaic2503@gmail.com" className="hover:text-gold transition-colors">
                  mosaic2503@gmail.com
                </a>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                  <Clock size={14} /> Operating Hours
                </div>
                <div className="text-neutral-400 text-xs space-y-1 font-mono">
                  <div className="flex justify-between">
                    <span>Mon – Thu:</span>
                    <span>10:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fri – Sun:</span>
                    <span>10:00 AM – 11:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          <p>© {new Date().getFullYear()} MOSAIC Restaurant & Cafe. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-gold transition-colors group cursor-pointer"
          >
            <span className="uppercase tracking-widest text-[10px] font-bold">Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 group-hover:border-gold group-hover:text-gold flex items-center justify-center transition-all">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
