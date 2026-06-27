"use client";

import React from "react";
import PageWrapper from "@/components/layout/PageWrapper";
import SplitText from "@/components/react-bits/SplitText";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import Image from "next/image";

import PageBanner from "@/components/layout/PageBanner";

export default function GalleryPage() {
  const images = [
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop", style: "col-span-1 md:col-span-2 row-span-2 h-[600px]" },
    { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&auto=format&fit=crop", style: "col-span-1 h-[290px]" },
    { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&auto=format&fit=crop", style: "col-span-1 h-[290px]" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop", style: "col-span-1 md:col-span-2 h-[400px]" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&auto=format&fit=crop", style: "col-span-1 h-[400px]" },
    { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop", style: "col-span-1 md:col-span-3 h-[500px]" }
  ];

  return (
    <PageWrapper>
      <PageBanner 
        title="Visual Journey"
        description="A glimpse into the ambiance, artistry, and culinary perfection at MOSAIC."
      />
      <div className="pb-24 px-4 bg-[#0a0a0a] min-h-screen pt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className={`relative overflow-hidden rounded-3xl group ${img.style}`}>
              <Image 
                src={img.src}
                alt={`Gallery Image ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <span className="text-white border-b border-transparent group-hover:border-white pb-1 uppercase tracking-[0.3em] text-xs font-sans opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Discover
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
