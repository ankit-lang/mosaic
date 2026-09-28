"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowUp, Send, Sparkles, ExternalLink, CalendarDays } from 'lucide-react';
import OperatingStatusBadge from '@/components/common/OperatingStatusBadge';

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
    <footer className="bg-zinc-950/90 text-white border-t border-amber-500/20 relative overflow-hidden backdrop-blur-md pt-16 pb-12">
      {/* Centered Soft Golden Top Radial Glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.14] blur-[100px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(217,119,6,0.25), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* ── Top VIP Circle Banner ──────────────────────────── */}
        <div className="bg-zinc-900/80 border border-amber-500/20 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.3em] font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent flex items-center gap-2 mb-2">
                <Sparkles size={14} className="text-amber-400" /> MOSAIC VIP Circle
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Join Us for Exclusive Tasting Events & Secret Specials
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl leading-relaxed">
                Subscribe to receive seasonal chef specials, secret menu access, and priority table reservations at Lusaka&apos;s premier luxury dining destination.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-amber-500/10 border border-amber-400/40 rounded-2xl p-4 text-center backdrop-blur-md">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-serif font-bold text-sm block">
                    ✨ Welcome to MOSAIC VIP Circle!
                  </span>
                  <p className="text-xs text-zinc-300 font-light mt-1">Thank you for subscribing. Check your inbox soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 bg-zinc-950/80 border border-amber-500/20 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400 outline-none transition-all backdrop-blur-md"
                  />
                  <button
                    type="submit"
                    className="btn-primary whitespace-nowrap py-3.5 px-6 shrink-0 cursor-pointer shadow-md"
                  >
                    <span>Subscribe</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Asymmetric 4-Column Master Footer Grid ─────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">

          {/* ── Column 1: Brand & Social Hub (4 Cols) ───────────── */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-block relative group mb-4">
                <div className="absolute inset-0 bg-amber-500/15 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                <img src="/logo.png" alt="MOSAIC Logo" className="w-[170px] h-auto object-contain relative z-10" />
              </Link>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-light mt-2">
                A symphony of flavours bringing together Arabian Charcoal, Royal Dum Biryani, Indo-Chinese Wok mastery, and Artisanal Café crafts under one roof.
              </p>
            </div>

            {/* Glassmorphism Social Concierge Icon Buttons */}
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-400/80 font-mono font-semibold block mb-3">
                Social Concierge
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300"
                  title="Follow us on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300"
                  title="Follow us on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* WhatsApp */}
                <a
                  href="https://wa.me/260771036277"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-300 flex items-center justify-center hover:border-emerald-400 hover:text-emerald-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300"
                  title="Chat on WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Column 2: Navigation Links (2 Cols) ─────────────── */}
          <div className="lg:col-span-2">
            <span className="text-xs font-serif uppercase tracking-widest text-amber-300/90 font-medium mb-5 block">
              [ NAVIGATION ]
            </span>
            <ul className="space-y-3">
              {[
                { label: 'Home Overview', href: '/' },
                { label: 'Explore Full Menu', href: '/menu' },
                { label: 'Visual Gallery', href: '/gallery' },
                { label: 'Our Culinary Story', href: '/about' },
                { label: 'Reserve a Table', href: '/reservations' },
                { label: 'Contact Concierge', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-amber-200 hover:translate-x-1 transition-all duration-200 text-sm font-light inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Featured Collections (3 Cols) ─────────── */}
          <div className="lg:col-span-3">
            <span className="text-xs font-serif uppercase tracking-widest text-amber-300/90 font-medium mb-5 block">
              [ CULINARY SHOWCASE ]
            </span>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-zinc-400 hover:text-amber-200 transition-colors text-sm font-light flex items-center justify-between group">
                  <span className="flex items-center gap-1.5">
                    <span className="text-amber-400 text-xs">✦</span> Chinese & Pan-Asian Soups
                  </span>
                  <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono">
                    Bestseller
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-zinc-400 hover:text-amber-200 transition-colors text-sm font-light flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">✦</span> Arabian Charcoal Kebabs
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-zinc-400 hover:text-amber-200 transition-colors text-sm font-light flex items-center justify-between group">
                  <span className="flex items-center gap-1.5">
                    <span className="text-amber-400 text-xs">✦</span> Royal Awadhi Dum Biryani
                  </span>
                  <span className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono">
                    Signature
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-zinc-400 hover:text-amber-200 transition-colors text-sm font-light flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">✦</span> Sizzling Indo-Chinese Wok
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-zinc-400 hover:text-amber-200 transition-colors text-sm font-light flex items-center gap-1.5">
                  <span className="text-amber-400 text-xs">✦</span> Artisanal Brews & Boba
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Location, Hours & Direct Booking (3 Cols) ─ */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-serif uppercase tracking-widest text-amber-300/90 font-medium mb-5 block">
              [ HOURS & RESERVATIONS ]
            </span>

            {/* Synchronized Operating Hours */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 space-y-2.5">
              <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-zinc-800">
                <div className="flex items-center gap-1.5 text-amber-400 font-semibold text-xs">
                  <Clock size={14} /> Operating Hours
                </div>
                <OperatingStatusBadge />
              </div>
              <div className="text-zinc-400 text-xs space-y-1 font-mono">
                <div className="flex justify-between">
                  <span className="text-zinc-300 font-sans">Mon – Thu:</span>
                  <span>10:30 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300 font-sans">Fri – Sat:</span>
                  <span>10:30 AM – 11:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-300 font-sans">Sun:</span>
                  <span>09:30 AM – 11:00 PM</span>
                </div>
              </div>
            </div>

            {/* Direct Address */}
            <div className="flex items-start gap-2.5 text-xs text-zinc-400 font-light">
              <MapPin size={15} className="text-amber-400 shrink-0 mt-0.5" />
              <span>4622-2 Beit Road, Addis Ababa Drive, Lusaka, Zambia</span>
            </div>

            {/* Quick VIP Booking Button */}
            <Link
              href="/reservations"
              className="bg-amber-500/10 border border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-zinc-950 rounded-lg py-2.5 px-4 text-xs font-semibold transition-all w-full text-center mt-3 flex items-center justify-center gap-1.5 shadow-md group cursor-pointer"
            >
              <CalendarDays size={14} />
              <span>Book a Table →</span>
            </Link>
          </div>

        </div>

        {/* ── Lower Sub-Footer (Copyright & Legal Bar) ─────────── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-light">
          <p>© {new Date().getFullYear()} MOSAIC Restaurant & Café. All Rights Reserved.</p>

          <p className="text-zinc-400 italic">Crafted with passion in Lusaka, Zambia.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-800">•</span>
            <Link href="/terms" className="hover:text-amber-300 transition-colors">
              Terms of Service
            </Link>
            <span className="text-zinc-800">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-300 transition-colors cursor-pointer group"
            >
              <span className="uppercase tracking-widest text-[10px] font-semibold">Back to Top</span>
              <div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-amber-400 flex items-center justify-center transition-all">
                <ArrowUp size={12} />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
