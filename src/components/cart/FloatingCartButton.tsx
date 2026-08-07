"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCartButton() {
  const { totalItems, subtotal, setIsCartOpen } = useCart();

  if (totalItems === 0) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-gold hover:bg-gold-dark text-black px-5 py-3.5 rounded-full shadow-2xl border border-white/20 flex items-center gap-3 group transition-all transform hover:scale-105"
      >
        <div className="relative">
          <ShoppingBag size={22} className="text-black" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-gold font-bold text-[11px] rounded-full flex items-center justify-center border border-gold">
            {totalItems}
          </span>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase font-bold tracking-wider text-black/70 leading-none">View Basket</span>
          <span className="text-sm font-serif font-bold text-black leading-tight">ZK {subtotal}</span>
        </div>
      </motion.button>
    </AnimatePresence>
  );
}
