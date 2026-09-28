"use client";

import React from 'react';
import { motion } from 'framer-motion';
import MagicRings from '@/components/react-bits/MagicRings';

export default function BackgroundSemiCircles() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[520px] overflow-hidden pointer-events-none z-0">
      {/* ── WebGL Animated Golden Rings ─────────────────────── */}
      <div className="absolute inset-0 z-0">
        <MagicRings
          color="#d4af37"
          colorTwo="#f5e0a3"
          ringCount={7}
          speed={0.45}
          attenuation={14}
          lineThickness={2.5}
          baseRadius={0.35}
          radiusStep={0.12}
          opacity={0.55}
          blur={0}
          noiseAmount={0.04}
          rotation={0}
          ringGap={1.2}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={true}
          mouseInfluence={0.06}
          hoverScale={1.05}
          parallax={0.02}
        />
      </div>

      {/* ── SVG Concentric Golden Semi-Circle Arches ─────────── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] flex items-start justify-center z-10 opacity-40">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full max-w-[900px]"
          fill="none"
        >
          <defs>
            <linearGradient id="goldArchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {[140, 200, 260, 320, 380, 440].map((radius, idx) => (
            <motion.path
              key={radius}
              d={`M ${500 - radius} 400 A ${radius} ${radius} 0 0 1 ${500 + radius} 400`}
              stroke="url(#goldArchGradient)"
              strokeWidth={1.5 + idx * 0.25}
              initial={{ opacity: 0.25, scale: 0.98 }}
              animate={{
                opacity: [0.25, 0.65, 0.25],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 4.5 + idx * 0.7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.25,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Dark Vignette Overlay to blend seamlessly into page background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-20" />
    </div>
  );
}
