"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, CheckCircle2, Utensils, Bike, Store } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ShinyText from "@/components/react-bits/ShinyText";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, clearCart, subtotal, totalItems } = useCart();
  const [orderMode, setOrderMode] = useState<"dine-in" | "takeaway" | "delivery">("dine-in");
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "details" | "confirmed">("cart");
  
  // Checkout Form Details
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [orderId, setOrderId] = useState("");

  const deliveryFee = orderMode === "delivery" ? 30 : 0;
  const grandTotal = subtotal + deliveryFee;

  // Listen for Escape key to close cart drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = "MOS-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setCheckoutStep("confirmed");
  };

  const handleReset = () => {
    clearCart();
    setCheckoutStep("cart");
    setIsCartOpen(false);
  };

  const handleClose = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#0a0a0c] border-l border-gold/30 flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.9)] z-[99999]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#111114] shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                  <ShoppingBag size={20} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-white font-bold">Your Order Basket</h3>
                  <p className="text-xs text-neutral-400 font-sans">{totalItems} {totalItems === 1 ? 'item' : 'items'} selected</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="p-2.5 text-neutral-400 hover:text-gold rounded-full bg-neutral-800/60 hover:bg-neutral-800 transition-all border border-neutral-700/60 cursor-pointer active:scale-95 z-50"
                aria-label="Close basket"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            {checkoutStep === "confirmed" ? (
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  type="spring"
                  className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mb-6 border border-gold/40"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
                <span className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Order Confirmed!</span>
                <h4 className="text-2xl font-serif text-white font-bold mb-2">Thank You for Ordering</h4>
                <p className="text-sm text-neutral-400 mb-4 font-sans">
                  Your order reference code is:
                </p>
                <div className="bg-neutral-900 border border-gold/30 px-6 py-3 rounded-xl mb-6">
                  <span className="text-xl font-mono text-gold font-bold tracking-widest">{orderId}</span>
                </div>
                <p className="text-xs text-neutral-400 max-w-xs mb-8">
                  Our chef is preparing your dishes with fresh ingredients and authentic spices.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full btn-primary py-4"
                >
                  Back to Menu
                </button>
              </div>
            ) : checkoutStep === "details" ? (
              <form onSubmit={handlePlaceOrder} className="flex-1 flex flex-col p-6 overflow-y-auto">
                <div className="mb-6">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("cart")}
                    className="text-xs text-gold uppercase tracking-wider font-bold mb-4 inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    ← Edit Order Items
                  </button>
                  <h4 className="text-xl font-serif text-white font-bold">Checkout Details</h4>
                </div>

                {/* Order Type Selection */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setOrderMode("dine-in")}
                    className={`py-3 px-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      orderMode === "dine-in"
                        ? "bg-gold/20 border-gold text-gold font-bold"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Utensils size={18} />
                    <span className="text-xs">Dine-In</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderMode("takeaway")}
                    className={`py-3 px-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      orderMode === "takeaway"
                        ? "bg-gold/20 border-gold text-gold font-bold"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Store size={18} />
                    <span className="text-xs">Takeaway</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderMode("delivery")}
                    className={`py-3 px-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      orderMode === "delivery"
                        ? "bg-gold/20 border-gold text-gold font-bold"
                        : "border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Bike size={18} />
                    <span className="text-xs">Delivery</span>
                  </button>
                </div>

                <div className="flex flex-col gap-4 mb-6">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-neutral-400 mb-1 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Ankit Sharma"
                      className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-neutral-400 mb-1 block">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="e.g. +260 971 234 567"
                      className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                    />
                  </div>

                  {orderMode === "dine-in" && (
                    <div>
                      <label className="text-xs uppercase tracking-wider text-neutral-400 mb-1 block">Table Number (If Seated)</label>
                      <input
                        type="text"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        placeholder="e.g. Table 12 or Tandoori Terrace"
                        className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                      />
                    </div>
                  )}

                  {orderMode === "delivery" && (
                    <div>
                      <label className="text-xs uppercase tracking-wider text-neutral-400 mb-1 block">Delivery Address *</label>
                      <textarea
                        required
                        rows={2}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Street, area, landmarks..."
                        className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none resize-none"
                      />
                    </div>
                  )}

                  <div>
                    <label className="text-xs uppercase tracking-wider text-neutral-400 mb-1 block">Special Cooking Request</label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Medium spicy, separate chutney..."
                      className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-3 text-white text-sm focus:border-gold outline-none"
                    />
                  </div>
                </div>

                {/* Bill Summary */}
                <div className="mt-auto border-t border-neutral-800 pt-4 mb-4 space-y-2 text-sm">
                  <div className="flex justify-between text-neutral-400">
                    <span>Subtotal</span>
                    <span>ZK {subtotal}</span>
                  </div>
                  {orderMode === "delivery" && (
                    <div className="flex justify-between text-neutral-400">
                      <span>Delivery Fee</span>
                      <span>ZK {deliveryFee}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-white font-serif text-lg font-bold pt-2 border-t border-neutral-800">
                    <span>Total Pay</span>
                    <span className="text-gold">ZK {grandTotal}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4 flex items-center justify-center gap-2"
                >
                  <ShinyText text="Confirm & Send Order" disabled={false} speed={2} className="text-black font-bold" color="#000" shineColor="#fff" />
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="flex-1 flex flex-col justify-between p-6 overflow-hidden">
                {items.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 mb-4">
                      <ShoppingBag size={28} />
                    </div>
                    <h4 className="text-white font-serif text-lg font-bold mb-1">Your Basket is Empty</h4>
                    <p className="text-xs text-neutral-400 max-w-xs mb-6 font-sans">
                      Browse our authentic Chinese Soups, Tandoori Delicacies, Indo-Chinese Mains, and Biryanis to add dishes.
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto pr-1 space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {item.isVeg ? (
                              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" title="Vegetarian" />
                            ) : (
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" title="Non-Vegetarian" />
                            )}
                            <h5 className="text-sm font-medium text-white line-clamp-1">{item.name}</h5>
                          </div>
                          <p className="text-xs text-gold font-serif font-semibold">
                            ZK {item.unitPrice * item.quantity}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-lg p-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-white rounded transition-colors cursor-pointer"
                          >
                            {item.quantity === 1 ? <Trash2 size={14} className="text-red-400" /> : <Minus size={14} />}
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-neutral-400 hover:text-white rounded transition-colors cursor-pointer"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer Subtotal & Checkout button */}
                {items.length > 0 && (
                  <div className="border-t border-white/10 pt-4 mt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider text-neutral-400">Total Subtotal</span>
                      <span className="text-xl font-serif font-bold text-gold">ZK {subtotal}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCheckoutStep("details")}
                      className="w-full btn-primary py-4 flex items-center justify-center gap-2"
                    >
                      <span>Proceed to Order</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
