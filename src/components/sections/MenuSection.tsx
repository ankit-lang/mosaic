"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuData, MenuItem, MenuCategory, MenuVariant } from '@/data/menu';
import { Search, Sparkles, Clock, LayoutGrid, ListFilter, Plus, Check, UtensilsCrossed } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import VariantModal from '@/components/cart/VariantModal';
import styles from './MenuSection.module.css';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg' | 'signature'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'classic'>('classic');
  const [selectedItemForVariant, setSelectedItemForVariant] = useState<MenuItem | null>(null);

  const { addItem, items } = useCart();

  // Find active category
  const activeCatObj = useMemo(() => {
    return menuData.find(cat => cat.id === activeCategory) || menuData[0];
  }, [activeCategory]);

  // Filtered items based on search query or dietary filter
  const isSearchingOrFiltering = searchQuery.trim().length > 0 || dietaryFilter !== 'all';

  const filteredCategories = useMemo(() => {
    return menuData.map(cat => {
      const items = cat.items.filter(item => {
        // Search filter
        const matchesSearch = searchQuery.trim() === '' || 
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase());

        // Dietary filter
        let matchesDietary = true;
        if (dietaryFilter === 'veg') matchesDietary = !!item.isVeg;
        if (dietaryFilter === 'non-veg') matchesDietary = item.isVeg === false;
        if (dietaryFilter === 'signature') matchesDietary = !!item.isSignature;

        return matchesSearch && matchesDietary;
      });

      return {
        ...cat,
        items
      };
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
    <section id="menu" className="section relative py-12">
      <VariantModal 
        item={selectedItemForVariant} 
        onClose={() => setSelectedItemForVariant(null)} 
      />

      <div className="container max-w-7xl mx-auto px-4">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2 mb-2">
              <UtensilsCrossed size={14} /> Culinary Masterpieces
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white font-bold">
              Explore Our Full Menu
            </h2>
          </div>

          {/* View Toggle & Search */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Search input */}
            <div className="relative flex-1 md:flex-initial min-w-[240px]">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search dishes or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 rounded-full pl-10 pr-4 py-2.5 text-sm text-white focus:border-gold outline-none transition-all placeholder:text-neutral-500"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Layout Toggle Button */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1">
              <button
                onClick={() => setViewMode('classic')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'classic' ? 'bg-gold text-black font-bold shadow' : 'text-neutral-400 hover:text-white'
                }`}
                title="Classic Restaurant Menu Layout"
              >
                <ListFilter size={14} />
                <span>Classic Menu</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  viewMode === 'grid' ? 'bg-gold text-black font-bold shadow' : 'text-neutral-400 hover:text-white'
                }`}
                title="Visual Card Grid Layout"
              >
                <LayoutGrid size={14} />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dietary Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mr-2 shrink-0">Filter:</span>
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all shrink-0 ${
                dietaryFilter === 'all'
                  ? 'bg-neutral-800 text-white border border-gold/40'
                  : 'bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              All Items ({menuData.reduce((acc, c) => acc + c.items.length, 0)})
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                  : 'bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
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
                  : 'bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              Non-Veg
            </button>
            <button
              onClick={() => setDietaryFilter('signature')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shrink-0 ${
                dietaryFilter === 'signature'
                  ? 'bg-gold/20 text-gold border border-gold'
                  : 'bg-neutral-900/50 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <Sparkles size={12} className="text-gold" />
              Signatures Only
            </button>
          </div>
        </div>

        {/* Category Navigation Pills (When not searching) */}
        {!isSearchingOrFiltering && (
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-neutral-800/80">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-2 shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-gold text-neutral-950 font-bold shadow-lg shadow-gold/20 scale-105 border border-amber-200/50'
                    : 'bg-neutral-900/80 text-neutral-300 border border-neutral-800 hover:border-gold/40 hover:text-white'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                  activeCategory === cat.id ? 'bg-black/20 text-black' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  {cat.items.length}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Menu Items Container */}
        {isSearchingOrFiltering ? (
          /* Search / Filter Results View */
          <div className="space-y-16">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-24 bg-neutral-900/30 rounded-3xl border border-neutral-800">
                <p className="text-neutral-400 font-serif text-xl mb-2">No menu dishes found</p>
                <p className="text-xs text-neutral-500 mb-6">Try adjusting your search query or dietary filters.</p>
                <button
                  onClick={() => { setSearchQuery(''); setDietaryFilter('all'); }}
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-gold text-xs uppercase tracking-wider font-bold rounded-full transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredCategories.map((cat) => (
                <div key={cat.id} className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-gold/20 pb-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-2xl font-serif text-gold font-bold">{cat.title}</h3>
                    <span className="text-xs text-neutral-500 uppercase tracking-widest font-mono">
                      ({cat.items.length} dishes)
                    </span>
                  </div>

                  {viewMode === 'classic' ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                      {cat.items.map((item) => (
                        <ClassicMenuItemCard 
                          key={item.id} 
                          item={item} 
                          onAdd={handleAddItem}
                          quantity={getItemCartQuantity(item.id)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cat.items.map((item) => (
                        <GridMenuItemCard 
                          key={item.id} 
                          item={item} 
                          onAdd={handleAddItem}
                          quantity={getItemCartQuantity(item.id)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        ) : (
          /* Single Category View */
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + viewMode}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gold/20 pb-4 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{activeCatObj.icon}</span>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold/80 font-bold block">
                      {activeCatObj.subtitle || "Category Collection"}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white font-bold">
                      {activeCatObj.title}
                    </h3>
                  </div>
                </div>
                <div className="text-xs text-neutral-400 font-mono">
                  Displaying {activeCatObj.items.length} chef specialties
                </div>
              </div>

              {/* Items Render */}
              {viewMode === 'classic' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 bg-neutral-950/40 p-6 md:p-8 rounded-3xl border border-white/5 shadow-2xl">
                  {activeCatObj.items.map((item) => (
                    <ClassicMenuItemCard 
                      key={item.id} 
                      item={item} 
                      onAdd={handleAddItem}
                      quantity={getItemCartQuantity(item.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeCatObj.items.map((item) => (
                    <GridMenuItemCard 
                      key={item.id} 
                      item={item} 
                      onAdd={handleAddItem}
                      quantity={getItemCartQuantity(item.id)}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

/* Classic Numbered Restaurant Layout Card */
function ClassicMenuItemCard({ 
  item, 
  onAdd,
  quantity
}: { 
  item: MenuItem; 
  onAdd: (item: MenuItem, e?: React.MouseEvent) => void;
  quantity: number;
}) {
  return (
    <div className="group relative flex flex-col justify-between p-4 rounded-2xl hover:bg-neutral-900/80 transition-all border border-transparent hover:border-gold/20">
      <div>
        <div className="flex items-baseline justify-between gap-3 mb-1.5">
          <div className="flex items-baseline gap-2.5 flex-1 min-w-0">
            {/* Dish Number */}
            <span className="font-mono text-sm font-bold text-gold/60 group-hover:text-gold shrink-0">
              {item.number}.
            </span>
            
            {/* Dish Name */}
            <h4 className="font-serif text-lg text-white font-bold group-hover:text-gold transition-colors truncate">
              {item.name}
            </h4>

            {/* Dietary Badge */}
            {item.isVeg ? (
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 inline-block" title="Vegetarian" />
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 inline-block" title="Non-Vegetarian" />
            )}

            {/* Dotted Leader Line */}
            <div className="flex-1 border-b border-dotted border-neutral-700/60 mx-1 hidden sm:block"></div>
          </div>

          {/* Price & Add Button */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="font-serif text-base font-bold text-gold">
              ZK {item.price}
            </span>

            <button
              onClick={(e) => onAdd(item, e)}
              className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                quantity > 0 
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                  : 'bg-gold/10 hover:bg-gold hover:text-black text-gold border border-gold/30'
              }`}
              title="Add to order basket"
            >
              {quantity > 0 ? (
                <>
                  <Check size={14} />
                  <span>{quantity}</span>
                </>
              ) : (
                <>
                  <Plus size={14} />
                  <span>Add</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Badges & Prep Note */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {item.isSignature && (
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/40 font-semibold tracking-wide uppercase">
              <Sparkles size={10} /> Signature
            </span>
          )}

          {item.prepTime && (
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
              <Clock size={10} /> Prep: {item.prepTime}
            </span>
          )}

          {item.portionNote && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 font-mono">
              {item.portionNote}
            </span>
          )}
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-2">
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

/* Visual Card Grid Item */
function GridMenuItemCard({ 
  item, 
  onAdd,
  quantity
}: { 
  item: MenuItem; 
  onAdd: (item: MenuItem, e?: React.MouseEvent) => void;
  quantity: number;
}) {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800/80 hover:border-gold/40 rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-lg group">
      <div>
        {/* Top bar with category & badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-gold/70 font-bold">#{item.number}</span>
            {item.isVeg ? (
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800/60">VEG</span>
            ) : (
              <span className="px-2 py-0.5 rounded bg-red-950 text-red-400 text-[10px] font-bold border border-red-800/60">NON-VEG</span>
            )}
          </div>

          {item.isSignature && (
            <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/40 font-semibold uppercase tracking-wider">
              <Sparkles size={10} /> Signature
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors mb-2">
          {item.name}
        </h4>

        {/* Prep / Portion Notes */}
        {(item.prepTime || item.portionNote) && (
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {item.prepTime && (
              <span className="inline-flex items-center gap-1 text-[10px] text-amber-300 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded font-mono">
                <Clock size={10} /> {item.prepTime}
              </span>
            )}
            {item.portionNote && (
              <span className="text-[10px] text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded font-mono">
                {item.portionNote}
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-neutral-400 font-sans leading-relaxed mb-6 line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Footer Price & Action */}
      <div className="flex items-center justify-between border-t border-neutral-800/80 pt-4 mt-2">
        <div>
          <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-sans">Price</span>
          <span className="text-lg font-serif font-bold text-gold">ZK {item.price}</span>
        </div>

        <button
          onClick={(e) => onAdd(item, e)}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            quantity > 0 
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
              : 'bg-gold hover:bg-gold-dark text-black font-bold shadow-md hover:scale-105'
          }`}
        >
          {quantity > 0 ? (
            <>
              <Check size={14} />
              <span>In Basket ({quantity})</span>
            </>
          ) : (
            <>
              <Plus size={14} />
              <span>Add to Order</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
