"use client";

import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import MagicBento from "@/components/react-bits/MagicBento";
import SplitText from "@/components/react-bits/SplitText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import Image from "next/image";

import PageBanner from "@/components/layout/PageBanner";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

export default function AboutPage() {
  const philosophyContent = [
    {
      title: "Locally Sourced",
      description:
        "We believe in the power of local ingredients. By partnering with local farmers and artisans, we ensure that every dish is crafted with the freshest, highest-quality produce available.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1593113543329-87588cf41a02?w=800&auto=format&fit=crop"
            width={400}
            height={400}
            className="h-full w-full object-cover"
            alt="Fresh produce"
          />
        </div>
      ),
    },
    {
      title: "Art on a Plate",
      description:
        "Every plate that leaves our kitchen is a masterpiece. We meticulously design each dish to be a feast for the eyes as well as the palate, turning dining into a multi-sensory experience.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&auto=format&fit=crop"
            width={400}
            height={400}
            className="h-full w-full object-cover"
            alt="Plated dish"
          />
        </div>
      ),
    },
    {
      title: "Sustainable Practices",
      description:
        "Sustainability is at the core of our operations. From minimizing food waste to utilizing eco-friendly packaging, we are committed to reducing our environmental footprint while delivering excellence.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop"
            width={400}
            height={400}
            className="h-full w-full object-cover"
            alt="Sustainable kitchen"
          />
        </div>
      ),
    },
    {
      title: "Unforgettable Service",
      description:
        "Our dedication extends beyond the kitchen. We pride ourselves on providing impeccable service, ensuring that every guest feels welcomed, valued, and pampered from the moment they arrive.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop"
            width={400}
            height={400}
            className="h-full w-full object-cover"
            alt="Restaurant service"
          />
        </div>
      ),
    },
  ];

  const cards = [
    {
      title: "Culinary Excellence",
      description: "Every dish is prepared with the finest ingredients and utmost care.",
      label: "Quality",
      color: "#120F17"
    },
    {
      title: "Award Winning",
      description: "Recognized locally for our exceptional service.",
      label: "Prestige",
      color: "#120F17"
    },
    {
      title: "Always Open",
      description: "We are open 7 days a week to serve you better.",
      label: "Availability",
      color: "#120F17"
    },
    {
      title: "Prime Location",
      description: "Located at Beit Road, Addis Ababa Drive, Lusaka.",
      label: "Location",
      color: "#120F17"
    }
  ];

  return (
    <PageWrapper>
      <PageBanner
        title="Our Story"
        description="MOSAIC is more than just a restaurant."
      />

      {/* Philosophy Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-sans uppercase tracking-[0.3em] text-gold mb-4">Our Philosophy</h2>
            <SplitText
              text="Art on a Plate"
              className="text-4xl md:text-6xl font-serif text-white mb-8"
              delay={50}
              duration={0.8}
            />
          </div>
          <StickyScroll content={philosophyContent} />
        </div>
      </section>

      {/* Key Highlights (Magic Bento) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-gold mb-6">Why Choose Us</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto font-sans text-lg">The pillars that make MOSAIC a unique dining destination.</p>
          </div>
          <MagicBento
            cards={cards}
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
    </PageWrapper>
  );
}
