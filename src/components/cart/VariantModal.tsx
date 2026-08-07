"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Sparkles } from "lucide-react";
import { MenuItem, MenuVariant } from "@/data/menu";
import { useCart } from "@/context/CartContext";

interface VariantModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function VariantModal({ item, onClose }: VariantModalProps) {
  const { addItem } = useCart();

  if (!item) return null;

  const handleSelectVariant = (variant: MenuVariant) => {
    addItem(item, variant);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#121214] border border-gold/30 rounded-2xl p-6 max-w-md w-full shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800/50 hover:bg-neutral-800 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              {item.category}
            </span>
            {item.isSignature && (
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30 font-semibold">
                <Sparkles size={10} /> Signature
              </span>
            )}
          </div>

          <h3 className="text-xl font-serif text-white font-bold mb-1">
            {item.name}
          </h3>
          <p className="text-xs text-neutral-400 mb-6 font-sans">
            {item.description}
          </p>

          <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
            Select Preparation Option:
          </p>

          <div className="flex flex-col gap-3">
            {item.variants?.map((v) => (
              <button
                key={v.label}
                onClick={() => handleSelectVariant(v)}
                className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 hover:bg-gold/10 hover:border-gold/50 transition-all text-left group"
              >
                <div>
                  <span className="text-sm font-medium text-white group-hover:text-gold transition-colors">
                    {v.label}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-serif font-bold text-gold">
                    ZK {v.price}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-gold/20 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-colors">
                    <Plus size={16} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
