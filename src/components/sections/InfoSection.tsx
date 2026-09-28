"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, ExternalLink } from 'lucide-react';

import OperatingStatusBadge from '../common/OperatingStatusBadge';

const CARDS = [
  {
    icon: MapPin,
    badge: 'Find Us',
    title: 'Our Location',
    body: '4622-2 Beit Road, Addis Ababa Drive. Near Standard Chartered Bank, Lusaka, Zambia',
    cta: { label: 'Open in Maps', href: 'https://maps.google.com/?q=MOSAIC+Restaurant+Lusaka', external: true },
    gradient: 'from-amber-900/20',
  },
  {
    icon: Phone,
    badge: 'Call Us',
    title: 'Reservations',
    body: 'Call us to book your table for an exclusive dining experience. Same-day bookings welcome.',
    cta: { label: '+260 771 036 277', href: 'tel:+260771036277', external: false },
    gradient: 'from-amber-900/20',
  },
  {
    icon: Mail,
    badge: 'Write to Us',
    title: 'Email & Events',
    body: 'For large events, private dining lounge & catering enquiries, drop us an email.',
    cta: { label: 'mosaic2503@gmail.com', href: 'mailto:mosaic2503@gmail.com', external: false },
    gradient: 'from-amber-900/20',
  },
];

const HOURS = [
  { day: 'Mon – Thu', time: '10:30 AM – 10:30 PM' },
  { day: 'Fri – Sat', time: '10:30 AM – 11:30 PM' },
  { day: 'Sun',       time: '09:30 AM – 11:00 PM' },
];

export default function InfoSection() {
  return (
    <section id="contact" className="relative bg-black py-24 overflow-hidden border-t border-amber-500/20">
      {/* ── Ambient Radial Glow ────────────────────────────── */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[160px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(217,119,6,0.12), transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-amber-400/80 font-semibold mb-3 block">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" /> Visit MOSAIC
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 leading-tight">
            Come Find Us
          </h2>
          <p className="text-zinc-400 text-sm max-w-md mx-auto font-light leading-relaxed">
            Walk in, call ahead, or write to us — we are always ready to welcome you.
          </p>
        </motion.div>

        {/* 3 Unified Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CARDS.map(({ icon: Icon, badge, title, body, cta, gradient }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 hover:border-amber-400/50 rounded-2xl p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),_0_0_25px_rgba(245,158,11,0.15)] transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Corner ambient gradient */}
              <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent opacity-40 pointer-events-none`} />
              
              {/* Hover ring */}
              <div aria-hidden className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-amber-400/40 transition-all duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Badge */}
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/90 font-semibold mb-4 block">
                  {badge}
                </span>

                {/* Glowing Amber Glass Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center mb-5 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:bg-amber-500/20 group-hover:border-amber-400/50 transition-all duration-300">
                  <Icon size={20} className="text-amber-400" />
                </div>

                <h3 className="text-lg font-serif font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-light mb-6">
                  {body}
                </p>
              </div>

              {/* Action Link */}
              <div className="relative z-10 pt-2 border-t border-amber-500/15">
                <a
                  href={cta.href}
                  target={cta.external ? '_blank' : undefined}
                  rel={cta.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group/link"
                >
                  {cta.label}
                  {cta.external
                    ? <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    : <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  }
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hours bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-zinc-900/60 border border-amber-500/20 backdrop-blur-xl rounded-2xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg"
        >
          <div className="flex items-center gap-3">
            <Clock size={16} className="text-amber-400 shrink-0" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-300">Opening Hours</span>
            <OperatingStatusBadge />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {HOURS.map(({ day, time }) => (
              <div key={day} className="text-center">
                <p className="text-[10px] uppercase tracking-wider text-amber-400/80 mb-0.5 font-mono font-semibold">{day}</p>
                <p className="text-xs font-medium text-zinc-200">{time}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
