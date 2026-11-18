"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { MenuCategory, MenuItem } from '@/data/menu';
import type { CartItem } from '@/context/CartContext';

/* Colours sampled from the printed menus */
const TITLE_GOLD = '#F8C96A';
const ITEM_GOLD = '#D19A3E';
const ORN = '/menu/beverages';
const FOOD = '/menu/food';

interface Props {
  category: MenuCategory;
  items: MenuItem[];
  cartItems: CartItem[];
  onAdd: (item: MenuItem, e?: React.MouseEvent) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
}

/**
 * Renders a category as a page of the printed menu.
 *  - theme "fire" (food): grill-fire background, MOSAIC logo, white bold title,
 *    photos on top, white two-column list.
 *  - default (beverages): black page, gold corner flourishes, ornamented gold
 *    title, gold two-column list with the photo underneath.
 */
export default function MenuPoster({ category, items, cartItems, onAdd, updateQuantity, removeItem }: Props) {
  const fire = category.theme === 'fire';
  const hasDescriptions = items.some(i => i.description.trim().length > 0);
  // Left column gets the first half, right column the rest — same reading order as the PDF.
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];
  const displayName = (name: string) =>
    category.nameSuffix && name.endsWith(category.nameSuffix)
      ? name.slice(0, -category.nameSuffix.length)
      : name;

  const photos = category.images && category.images.length > 0 && (
    <div className={fire
      ? 'mt-6 flex flex-nowrap items-center justify-center gap-2 sm:mt-8 sm:gap-4 md:mt-10'
      : 'mt-10 flex flex-col items-center gap-8 md:mt-14'}>
      {category.images.map(src => (
        <img
          key={src}
          src={src}
          alt={`${category.title} at Mosaic`}
          loading="lazy"
          className={fire
            ? 'h-auto max-h-[220px] w-auto min-w-0 max-w-full shrink rounded-md object-contain shadow-[0_10px_30px_rgba(0,0,0,0.6)] sm:max-h-[280px]'
            : 'h-auto max-h-[460px] w-auto max-w-full object-contain mix-blend-lighten'}
        />
      ))}
    </div>
  );

  const list = (
    <div className={`grid grid-cols-1 md:grid-cols-2 md:gap-x-14 ${fire ? 'mt-10 md:mt-12' : 'mt-10 md:mt-14'} ${hasDescriptions ? '' : 'mx-auto max-w-3xl'}`}>
      {columns.map((col, ci) => (
        <div key={ci} className="flex flex-col">
          {col.map(item => (
            <PosterRow
              key={item.id}
              item={item}
              name={displayName(item.name)}
              compact={!hasDescriptions}
              fire={fire}
              cartItems={cartItems}
              onAdd={onAdd}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className={`relative mx-auto max-w-4xl overflow-hidden rounded-sm border border-white/5 bg-[#040404] shadow-[0_30px_80px_rgba(0,0,0,0.7)] ${
        fire
          ? 'px-5 pb-40 pt-6 sm:px-10 sm:pb-56 md:px-14 md:pb-72 md:pt-8'
          : 'px-5 pb-10 pt-8 sm:px-10 md:px-16 md:pb-14 md:pt-12'
      }`}
      style={fire ? {
        backgroundImage: `url(${FOOD}/fire-bg.jpg)`,
        backgroundSize: '100% auto',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
      } : undefined}
    >
      {fire ? (
        <>
          <header className="relative flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <img src={`${FOOD}/logo.png`} alt="Mosaic Restaurant & Cafe" className="w-24 shrink-0 select-none sm:w-28 md:w-32" />
            <h3
              className="flex-1 text-center font-sans text-2xl font-bold uppercase tracking-wide text-white sm:pr-28 sm:text-3xl md:pr-32 md:text-[2.1rem]"
              style={{ lineHeight: 1.2, fontFamily: 'var(--font-body)' }}
            >
              {category.title}
            </h3>
          </header>
          {photos}
          {list}
        </>
      ) : (
        <>
          {/* Corner flourishes */}
          <img src={`${ORN}/ornament-corner.png`} alt="" aria-hidden className="pointer-events-none absolute left-3 top-4 w-14 select-none sm:left-5 sm:top-6 sm:w-20 md:w-24" />
          <img src={`${ORN}/ornament-corner.png`} alt="" aria-hidden className="pointer-events-none absolute right-3 top-4 w-14 -scale-x-100 select-none sm:right-5 sm:top-6 sm:w-20 md:w-24" />

          <header className="relative flex flex-col items-center px-10 text-center sm:px-20">
            <img src={`${ORN}/ornament-top.png`} alt="" aria-hidden className="w-[55%] max-w-[240px] select-none" />
            <h3
              className="my-3 font-serif text-[1.6rem] font-bold uppercase tracking-wide sm:text-4xl md:text-[3.25rem]"
              style={{ color: TITLE_GOLD, lineHeight: 1.25 }}
            >
              {category.title}
            </h3>
            <img src={`${ORN}/ornament-divider.png`} alt="" aria-hidden className="w-[80%] max-w-[360px] select-none" />
          </header>
          {list}
          {photos}
        </>
      )}
    </motion.article>
  );
}

function PosterRow({
  item,
  name,
  compact,
  fire,
  cartItems,
  onAdd,
  updateQuantity,
  removeItem,
}: {
  item: MenuItem;
  name: string;
  compact: boolean;
  fire: boolean;
  cartItems: CartItem[];
  onAdd: (item: MenuItem, e?: React.MouseEvent) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
}) {
  const quantity = cartItems.filter(ci => ci.menuItemId === item.id).reduce((n, ci) => n + ci.quantity, 0);
  const plainEntry = cartItems.find(ci => ci.menuItemId === item.id && !ci.selectedVariant);

  const decrement = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!plainEntry) return;
    if (plainEntry.quantity <= 1) removeItem(plainEntry.id);
    else updateQuantity(plainEntry.id, plainEntry.quantity - 1);
  };

  const accent = fire ? '#F5B041' : ITEM_GOLD;

  return (
    <div className={`group flex items-start justify-between gap-4 ${compact ? 'items-center py-2' : fire ? 'pb-6' : 'pb-7'}`}>
      <div className="min-w-0" style={fire ? { textShadow: '0 1px 6px rgba(0,0,0,0.9)' } : undefined}>
        {fire ? (
          <h4 className="flex items-start gap-1.5 font-sans text-[15px] font-semibold leading-snug text-white sm:text-base" style={{ fontFamily: 'var(--font-body)' }}>
            <span
              className={`mt-[0.3em] inline-flex h-3 w-3 shrink-0 items-center justify-center border ${item.isVeg ? 'border-emerald-500' : 'border-red-500'}`}
              title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${item.isVeg ? 'bg-emerald-500' : 'bg-red-500'}`} />
            </span>
            <span>
              {name}
              {item.portionNote && <span className="ml-1.5 text-xs font-normal text-white/60">({item.portionNote})</span>}
              {item.isSignature && <span className="ml-1.5 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-amber-400">Signature</span>}
            </span>
          </h4>
        ) : (
          <h4
            className={`font-serif font-normal leading-tight ${compact ? 'text-xl sm:text-2xl' : 'text-[1.4rem] sm:text-[1.65rem]'}`}
            style={{ color: ITEM_GOLD }}
          >
            {name}
          </h4>
        )}
        {item.description && (
          <p className={fire
            ? 'mt-1 max-w-[38ch] text-[12.5px] leading-snug text-white/70'
            : 'mt-1 max-w-[30ch] font-serif text-[13px] leading-snug text-white/90 sm:text-sm'}>
            {item.description}
          </p>
        )}
        {fire && item.prepTime && (
          <p className="mt-1 text-[11px] font-medium text-amber-400/90">Prep time: {item.prepTime}</p>
        )}
      </div>

      <div className={`flex shrink-0 items-end gap-2 ${compact ? 'flex-row-reverse items-center gap-4' : 'flex-col pt-0.5'}`}>
        <span
          className={fire
            ? 'font-sans text-[15px] font-bold tabular-nums leading-none text-white sm:text-base'
            : `font-serif tabular-nums leading-none ${compact ? 'w-12 text-right ' : ''}${compact ? 'text-xl sm:text-2xl' : 'text-[1.4rem] sm:text-[1.6rem]'}`}
          style={fire ? { fontFamily: 'var(--font-body)', textShadow: '0 1px 6px rgba(0,0,0,0.9)' } : { color: ITEM_GOLD }}
        >
          {item.price}
        </span>

        <AnimatePresence mode="wait" initial={false}>
          {quantity === 0 || !plainEntry ? (
            <motion.button
              key="add"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              whileTap={{ scale: 0.9 }}
              onClick={e => { e.stopPropagation(); onAdd(item, e); }}
              aria-label={`Add ${item.name} to order`}
              className="flex h-7 cursor-pointer items-center gap-1 rounded-full border border-[color:var(--accent-soft)] bg-black/40 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--accent)] transition-colors hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-black"
              style={{ '--accent': accent, '--accent-soft': `${accent}80` } as React.CSSProperties}
            >
              <Plus size={12} strokeWidth={2.5} />
              {quantity > 0 ? quantity : 'Add'}
            </motion.button>
          ) : (
            <motion.div
              key="stepper"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="flex h-7 items-center overflow-hidden rounded-full text-black"
              style={{ background: accent }}
            >
              <button onClick={decrement} aria-label={`Remove one ${item.name}`} className="flex h-7 w-7 cursor-pointer items-center justify-center hover:bg-black/10">
                <Minus size={12} strokeWidth={3} />
              </button>
              <span className="min-w-[1.25rem] text-center font-mono text-xs font-bold">{quantity}</span>
              <button onClick={e => { e.stopPropagation(); onAdd(item, e); }} aria-label={`Add one more ${item.name}`} className="flex h-7 w-7 cursor-pointer items-center justify-center hover:bg-black/10">
                <Plus size={12} strokeWidth={3} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
