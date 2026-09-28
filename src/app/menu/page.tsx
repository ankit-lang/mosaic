"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import MenuSection from "@/components/sections/MenuSection";
import MenuHeroBanner from "@/components/layout/MenuHeroBanner";
import MagicBento from "@/components/react-bits/MagicBento";
import { Sparkles, Clock, Flame, Utensils } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
  const specials = [
    {
      title: "Raan Kabab (Mutton)",
      description: "800–900gm whole leg slow-marinated in royal Arabian spices and roasted in tandoor. | Prep Time: Approx. 2 Hours",
      label: "Royal Signature • ZK 290",
      color: "#120F17"
    },
    {
      title: "Patyala Chicken",
      description: "Mosaic special house-style rich chicken curry cooked with aromatic spices and signature Punjabi cream gravy.",
      label: "Chef's Special • ZK 290",
      color: "#120F17"
    },
    {
      title: "Matcha Mango / Strawberry Iced Latte",
      description: "Artisanal chocolate matcha layered with fresh fruit twist and velvety cold milk.",
      label: "Beverage Star • ZK 130",
      color: "#120F17"
    }
  ];

  return (
    <PageWrapper>
      <MenuHeroBanner />

      <div className="pb-32 px-4 bg-[#050505]">
        {/* Chef's Signature Spotlight */}
        <div className="max-w-7xl mx-auto pt-16 mb-20">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center justify-center gap-2 mb-2">
              <Sparkles size={14} /> Culinary & Beverage Masterpieces
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-3">
              House Signature Highlights
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mx-auto font-sans">
              Handpicked by our Executive Chef & Barista. Taste authentic wood-fired tandoor marinations, wok wok-tossed creations, and artisanal beverages.
            </p>
            <div className="w-16 h-[2px] bg-gold mx-auto mt-4"></div>
          </div>

          <MagicBento 
            cards={specials}
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={10}
            glowColor="212, 175, 55"
          />

          {/* Quick Notice Banner for Raan Kabab */}
          <div className="mt-8 bg-neutral-900/80 border border-gold/30 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-serif">Planning for Raan Kabab (800-900gm)?</h4>
                <p className="text-xs text-neutral-400 font-sans">
                  Due to our authentic slow charcoal roasting technique, preparation time is approx. 2 hours. Pre-orders recommended!
                </p>
              </div>
            </div>
            <Link
              href="/reservations"
              className="px-5 py-2.5 bg-gold hover:bg-gold-dark text-black text-xs font-bold uppercase tracking-wider rounded-xl whitespace-nowrap transition-all shadow-md shrink-0"
            >
              Pre-Order & Reserve Table
            </Link>
          </div>
        </div>

        {/* Complete Menu Section */}
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-12">
          <MenuSection />
        </div>
      </div>
    </PageWrapper>
  );
}
