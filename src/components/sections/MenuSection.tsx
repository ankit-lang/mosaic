"use client";

import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, MenuItem } from '@/data/menu';
import { Search, Sparkles, Clock, Plus, UtensilsCrossed, Minus, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import VariantModal from '@/components/cart/VariantModal';

// Food image pool — cycles through banner images for visual richness
const FOOD_IMAGES = [
  '/banner/1.png',
  '/banner/2.png',
  '/banner/3.png',
  '/banner/4.png',
  '/banner/5.png',
  '/banner/6.png',
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'signature'>('all');
  const [selectedItemForVariant, setSelectedItemForVariant] = useState<MenuItem | null>(null);

  const categoryContainerRef = useRef<HTMLDivElement>(null);
  const { addItem, items, updateQuantity, removeItem } = useCart();

  const handleScrollLeft = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Find active category
  const activeCatObj = useMemo(() => {
    return menuData.find(cat => cat.id === activeCategory) || menuData[0];
  }, [activeCategory]);

  const isSearchingOrFiltering = searchQuery.trim().length > 0 || dietaryFilter !== 'all';

  const filteredCategories = useMemo(() => {
    return menuData.map(cat => {
      const items = cat.items.filter(item => {
        const matchesSearch = searchQuery.trim() === '' ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());

        let matchesDietary = true;
        if (dietaryFilter === 'veg') matchesDietary = !!item.isVeg;
        if (dietaryFilter === 'non-veg') matchesDietary = item.isVeg === false;
        if (dietaryFilter === 'signature') matchesDietary = !!item.isSignature;

        return matchesSearch && matchesDietary;
      });

      return { ...cat, items };
    }).filter(cat => cat.items.length > 0);
  }, [searchQuery, dietaryFilter]);

  const handleAddItem = (item: MenuItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (item.variants && item.variants.length > 0) {
      setSelectedItemForVariant(item);
    } else {
      addItem(item);
    }
  };

  const getItemCartQuantity = (menuItemId: string) => {
    return items
      .filter(i => i.menuItemId === menuItemId)
      .reduce((sum, i) => sum + i.quantity, 0);
  };

  return (
    <section id="menu" className="relative py-20 bg-black overflow-hidden border-t border-amber-500/20">
      {/* ── Ambient Background Lighting ─────────────────────── */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] blur-[160px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 20%, rgba(217,119,6,0.12), transparent 70%)' }}
      />

      <VariantModal 
        item={selectedItemForVariant} 
        onClose={() => setSelectedItemForVariant(null)} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Header & Search Controls ───────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-amber-500/20 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-bold flex items-center gap-2 mb-2">
              <UtensilsCrossed size={14} className="text-amber-400" /> Culinary Masterpieces
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold">
              Explore Our Full Menu
            </h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Search input */}
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-400/70" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/80 border border-amber-500/20 rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:border-amber-400 outline-none transition-all placeholder:text-zinc-500 backdrop-blur-md"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ── Dietary Filters Bar ────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mr-2 shrink-0">Filter:</span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
                dietaryFilter === 'all'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/50'
                  : 'bg-zinc-900/60 text-zinc-400 border border-amber-500/10 hover:border-amber-500/30'
              }`}
            >
              All Items ({menuData.reduce((acc, c) => acc + c.items.length, 0)})
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                  : 'bg-zinc-900/60 text-zinc-400 border border-amber-500/10 hover:border-amber-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Pure Veg
            </button>
            <button
              onClick={() => setDietaryFilter('non-veg')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                dietaryFilter === 'non-veg'
                  ? 'bg-red-950/80 text-red-300 border border-red-500/50'
                  : 'bg-zinc-900/60 text-zinc-400 border border-amber-500/10 hover:border-amber-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Non-Veg
            </button>
            <button
              onClick={() => setDietaryFilter('signature')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                dietaryFilter === 'signature'
                  ? 'bg-amber-500/25 text-amber-300 border border-amber-400/60'
                  : 'bg-zinc-900/60 text-zinc-400 border border-amber-500/10 hover:border-amber-500/30'
              }`}
            >
              <Sparkles size={12} className="text-amber-400" />
              Signatures Only
            </button>
          </div>
        </div>

        {/* ── Category Pill Navigation with Left/Right Scroll Buttons & Hidden Scrollbar ── */}
        {!isSearchingOrFiltering && (
          <div className="relative flex items-center gap-3 mb-12 border-b border-amber-500/15 pb-4">
            {/* Left Scroll Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleScrollLeft}
              className="shrink-0 w-9 h-9 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 hover:text-amber-200 hover:bg-amber-500/20 hover:border-amber-400/60 flex items-center justify-center transition-all shadow-md cursor-pointer z-10"
              title="Scroll left"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </motion.button>

            {/* Scrollable Pills Container (Scrollbar completely deleted) */}
            <div
              ref={categoryContainerRef}
              className="flex items-center gap-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth py-1 px-1 flex-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {menuData.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-5 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 shrink-0 cursor-pointer ${
                      isActive ? 'text-zinc-950 font-bold' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.35)] z-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 text-sm">{cat.icon}</span>
                    <span className="relative z-10">{cat.title}</span>
                    <span className={`relative z-10 text-[10px] px-2 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-black/20 text-zinc-950 font-bold' : 'bg-zinc-800/80 text-zinc-400'
                    }`}>
                      {cat.items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Scroll Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleScrollRight}
              className="shrink-0 w-9 h-9 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-400 hover:text-amber-200 hover:bg-amber-500/20 hover:border-amber-400/60 flex items-center justify-center transition-all shadow-md cursor-pointer z-10"
              title="Scroll right"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        )}

        {/* ── Menu Items Grid / Collection Display ──────────── */}
        {isSearchingOrFiltering ? (
          <div className="space-y-16">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-24 bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl">
                <p className="text-zinc-300 font-serif text-xl mb-2">No menu dishes found</p>
                <p className="text-xs text-zinc-500 mb-6 font-light">Try adjusting your search query or dietary filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setDietaryFilter('all'); }}
                  className="px-6 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs uppercase tracking-wider font-bold rounded-full border border-amber-400/40 transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredCategories.map((cat) => (
                <div key={cat.id} className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-amber-500/20 pb-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-2xl font-serif bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-bold">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
                      ({cat.items.length} dishes)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {cat.items.map((item, index) => (
                      <MenuCard2Col
                        key={item.id}
                        item={item}
                        onAdd={handleAddItem}
                        quantity={getItemCartQuantity(item.id)}
                        index={index}
                        cartItems={items}
                        updateQuantity={updateQuantity}
                        removeItem={removeItem}
                      />
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-amber-500/20 pb-4 gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="text-4xl">{activeCatObj.icon}</span>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-amber-400/80 font-bold block mb-0.5">
                      {activeCatObj.subtitle || "Category Collection"}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white font-bold">
                      {activeCatObj.title}
                    </h3>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  Displaying {activeCatObj.items.length} master dishes
                </div>
              </div>

              {/* Responsive 2-Column Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {activeCatObj.items.map((item, index) => (
                  <MenuCard2Col
                    key={item.id}
                    item={item}
                    onAdd={handleAddItem}
                    quantity={getItemCartQuantity(item.id)}
                    index={index}
                    cartItems={items}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Modern 2-Column Menu Card Component (Fixed layout & zero dead space)
   Left 65% content | Right 35% Food Thumbnail + Add overlay
══════════════════════════════════════════════════════════════════ */
function MenuCard2Col({
  item,
  onAdd,
  quantity,
  index,
  cartItems,
  updateQuantity,
  removeItem,
}: {
  item: MenuItem;
  onAdd: (item: MenuItem, e?: React.MouseEvent) => void;
  quantity: number;
  index: number;
  cartItems: import('@/context/CartContext').CartItem[];
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
}) {
  const imgSrc = FOOD_IMAGES[item.number % FOOD_IMAGES.length];
  const cartEntry = cartItems.find(ci => ci.menuItemId === item.id && !ci.selectedVariant);

  const handleDecrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!cartEntry) return;
    if (cartEntry.quantity <= 1) removeItem(cartEntry.id);
    else updateQuantity(cartEntry.id, cartEntry.quantity - 1);
  };

  const handleIncrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAdd(item, e);
  };

  const dishNumberStr = `#${item.number.toString().padStart(2, '0')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      whileHover={{ y: -4 }}
      className="group relative bg-zinc-900/60 backdrop-blur-xl border border-amber-500/20 hover:border-amber-400/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),_0_0_25px_rgba(245,158,11,0.12)] rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-300 overflow-hidden"
    >
      {/* ── LEFT / INNER CONTENT (65%) ───────────────────────── */}
      <div className="flex-1 min-w-0 flex flex-col justify-between h-full space-y-2.5">

        {/* Top: Index, Title & Dietary Tag */}
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            {/* Dish index */}
            <span className="font-mono text-[11px] font-semibold text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              {dishNumberStr}
            </span>

            {/* Dietary mark (Veg dot / Non-veg mark) inside glass container */}
            <span
              className={`inline-flex items-center justify-center w-[18px] h-[18px] rounded-[4px] border-2 shrink-0 ${
                item.isVeg
                  ? 'border-emerald-500 bg-emerald-950/50'
                  : 'border-red-500 bg-red-950/50'
              }`}
              title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <span className={`w-2 h-2 rounded-full ${item.isVeg ? 'bg-emerald-400' : 'bg-red-500'}`} />
            </span>

            {item.isSignature && (
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                <Flame size={10} className="text-amber-400" /> Bestseller
              </span>
            )}
            {item.prepTime && (
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-zinc-800/80 text-zinc-400 font-mono">
                <Clock size={9} /> {item.prepTime}
              </span>
            )}
          </div>

          {/* Dish Title */}
          <h4 className="text-lg font-semibold text-zinc-100 group-hover:text-amber-200 transition-colors leading-snug">
            {item.name}
          </h4>
        </div>

        {/* Middle: Appetizing 2-Line Description */}
        <p className="text-zinc-400 text-xs leading-relaxed line-clamp-2 font-light">
          {item.description || "Crafted using premium seasonal ingredients and authentic chef spices."}
        </p>

        {/* Bottom: Price Badge */}
        <div className="pt-1">
          <span className="inline-block text-amber-400 font-bold text-base bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/20">
            ZK {item.price}
          </span>
          {item.portionNote && (
            <span className="text-[10px] text-zinc-500 font-mono ml-2">{item.portionNote}</span>
          )}
        </div>
      </div>

      {/* ── RIGHT / VISUAL CONTAINER (35%) ─────────────────────── */}
      <div className="relative shrink-0 flex flex-col items-center justify-center pb-2">
        {/* Generous High-Res Food Thumbnail */}
        <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden relative shadow-lg border border-amber-500/20 bg-zinc-800">
          <img
            src={imgSrc}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Overlay "+ Add" CTA resting cleanly on the lower edge */}
        <div className="absolute -bottom-1 z-10 w-[90%]">
          <AnimatePresence mode="wait">
            {quantity === 0 ? (
              <motion.button
                key="add"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.18 }}
                whileTap={{ scale: 0.92 }}
                onClick={(e) => { e.stopPropagation(); onAdd(item, e); }}
                className="w-full py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-zinc-950 border border-amber-300/50 shadow-[0_4px_12px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus size={13} strokeWidth={2.5} />
                Add
              </motion.button>
            ) : (
              <motion.div
                key="stepper"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.18 }}
                className="flex items-center justify-between bg-amber-400 rounded-lg overflow-hidden shadow-[0_4px_12px_rgba(245,158,11,0.4)]"
              >
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={handleDecrement}
                  className="w-7 h-7 flex items-center justify-center text-zinc-950 hover:bg-amber-500 transition-colors cursor-pointer"
                >
                  <Minus size={13} strokeWidth={3} />
                </motion.button>
                <span className="text-xs font-bold text-zinc-950 font-mono">
                  {quantity}
                </span>
                <motion.button
                  whileTap={{ scale: 0.88 }}
                  onClick={handleIncrement}
                  className="w-7 h-7 flex items-center justify-center text-zinc-950 hover:bg-amber-500 transition-colors cursor-pointer"
                >
                  <Plus size={13} strokeWidth={3} />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
