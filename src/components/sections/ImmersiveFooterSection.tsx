"use client";

import React from 'react';
import MagicRings from '../react-bits/MagicRings';
import ShinyText from '../react-bits/ShinyText';
import Link from 'next/link';

export default function ImmersiveFooterSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center">
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
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Elevate Your Evening</h2>
        <p className="text-neutral-300 font-sans text-lg mb-10 max-w-xl">
          Reserve your table today and immerse yourself in a world of unparalleled flavors and ambiance.
        </p>
        
        <Link 
          href="/reservations"
          className="px-10 py-4 bg-transparent border-2 border-gold rounded-full hover:bg-gold hover:text-black transition-all duration-300 group overflow-hidden"
        >
          <ShinyText 
            text="BOOK NOW" 
            disabled={false} 
            speed={2} 
            className="text-gold group-hover:text-black font-bold uppercase tracking-[0.2em]" 
            color="#d4af37" 
            shineColor="#ffffff" 
          />
        </Link>
      </div>
    </section>
  );
}
