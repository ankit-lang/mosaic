"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem, MenuVariant } from "@/data/menu";

export interface CartItem {
  id: string; // unique cart item id (e.g. menuItemId + selectedVariantLabel)
  menuItemId: string;
  name: string;
  category: string;
  selectedVariant?: string;
  unitPrice: number;
  priceDisplay: string;
  quantity: number;
  isVeg?: boolean;
  isSignature?: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, variant?: MenuVariant) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mosaic_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("mosaic_cart", JSON.stringify(items));
    }
  }, [items, isHydrated]);

  const addItem = (item: MenuItem, variant?: MenuVariant) => {
    const variantLabel = variant ? variant.label : undefined;
    const unitPrice = variant ? variant.price : item.basePrice;
    const cartItemId = variantLabel ? `${item.id}-${variantLabel}` : item.id;
    const displayName = variantLabel ? `${item.name} (${variantLabel})` : item.name;

    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartItemId);
      if (existing) {
        return prev.map((i) =>
          i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          menuItemId: item.id,
          name: displayName,
          category: item.category,
          selectedVariant: variantLabel,
          unitPrice,
          priceDisplay: `ZK ${unitPrice}`,
          quantity: 1,
          isVeg: item.isVeg,
          isSignature: item.isSignature,
        },
      ];
    });
    setIsCartOpen(true);
  };

  const removeItem = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === cartItemId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
