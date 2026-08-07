"use client";

import React from 'react';
import MagicRings from '../react-bits/MagicRings';
import ShinyText from '../react-bits/ShinyText';
import Link from 'next/link';
import { CalendarDays, UtensilsCrossed } from 'lucide-react';

export default function ImmersiveFooterSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center border-t border-gold/20">
      <div className="absolute inset-0 z-0">
        <MagicRings 
          color="#d4af37" 
          colorTwo="#c5a017"
          ringCount={5}
          speed={0.5}
          attenuation={15}
          baseRadius={0.4}
          opacity={0.3}
          blur={10}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10"></div>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-4">
          Unforgettable Culinary Journeys
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
          Elevate Your Evening
        </h2>
        <p className="text-neutral-300 font-sans text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
          Reserve your VIP table today or explore our 30 Category Collections featuring Arabian charcoal kebabs, Chinese soups & wok specialties.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/reservations" className="btn-primary">
            <CalendarDays size={16} />
            <ShinyText 
              text="BOOK A TABLE" 
              disabled={false} 
              speed={2} 
              className="text-black font-bold uppercase tracking-widest" 
              color="#000000" 
              shineColor="#ffffff" 
            />
          </Link>
          <Link href="/menu" className="btn-outline">
            <UtensilsCrossed size={16} />
            <span>BROWSE FULL MENU</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
