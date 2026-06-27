"use client";

import React from 'react';
import ShinyText from '../react-bits/ShinyText';
import ScrollStack, { ScrollStackItem } from '../react-bits/ScrollStack';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "An absolute masterpiece of culinary art. From the moment we walked in, the ambiance and the service were impeccable.",
      author: "The Culinary Review",
    },
    {
      quote: "A symphony of flavors. The Wagyu Ribeye was cooked to absolute perfection. The best dining experience in Lusaka.",
      author: "Zambia Fine Dining",
    },
    {
      quote: "Stunning presentation and world-class service. MOSAIC truly lives up to its name as a luxurious destination.",
      author: "Chef's Table Magazine",
    }
  ];

  return (
    <section className="bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10 pt-32 pb-16">
        <div className="text-center mb-4">
          <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-gold mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white">What Our Guests Say</h3>
        </div>
        
        <ScrollStack
          useWindowScroll={true}
          itemDistance={80}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="25%"
          scaleEndPosition="10%"
          baseScale={0.9}
          scaleDuration={0.5}
          rotationAmount={0}
          blurAmount={0}
        >
          {testimonials.map((testimonial, idx) => (
            <ScrollStackItem key={idx} itemClassName="bg-[#111] border border-neutral-800 !h-auto min-h-[300px]">
              <div className="flex flex-col items-center text-center gap-8">
                <Quote size={48} className="text-gold/40" />
                <p className="text-white text-xl md:text-2xl font-serif leading-relaxed italic tracking-wide">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col items-center justify-center gap-2">
                  <ShinyText 
                    text="★ ★ ★ ★ ★" 
                    disabled={false} 
                    speed={3} 
                    className="text-2xl tracking-[0.5em]" 
                    color="#a3a3a3" 
                    shineColor="#d4af37" 
                  />
                  <p className="text-neutral-400 font-sans tracking-widest uppercase text-sm mt-4 font-bold">
                    — {testimonial.author}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
