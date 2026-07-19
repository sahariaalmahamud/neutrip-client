'use client';

import React, { useState } from 'react';
import { Card, Button } from '@heroui/react';
import { FiSearch, FiMapPin, FiStar, FiTrash2, FiArrowRight, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { WishlistHero } from '@/components/sections/wishlist/WishlistHero';
import { EmptyWishlist } from '@/components/sections/wishlist/EmptyWishlist';
import {
  WishlistItem,
  WishlistSortKey,
  WISHLIST_CATEGORIES,
  SORT_OPTIONS,
  MOCK_WISHLIST,
  WISHLIST_STORAGE_KEY,
} from '@/constants/wishlist';
import { cn } from '@/utils/cn';

const CHEVRON_SVG = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

function loadFromStorage(): WishlistItem[] {
  if (typeof window === 'undefined') return MOCK_WISHLIST;
  try {
    const raw = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (raw) return JSON.parse(raw) as WishlistItem[];
  } catch {
    // ignore parse errors
  }
  // seed with mock data on first visit
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(MOCK_WISHLIST));
  return MOCK_WISHLIST;
}

function saveToStorage(items: WishlistItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
}

function formatSavedDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

export function WishlistGrid() {
  const [items, setItems] = useState<WishlistItem[]>(() => loadFromStorage());
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState<WishlistSortKey>('savedAt');
  const [searchFocused, setSearchFocused] = useState(false);

  const handleRemove = (id: string, name: string) => {
    setItems((prev) => {
      const next = prev.filter((item) => item.id !== id);
      saveToStorage(next);
      return next;
    });
    toast.success(`${name} removed from wishlist`);
  };

  const handleReset = () => {
    setSearch('');
    setCategory('all');
    setSort('savedAt');
  };

  // Derived filtered + sorted list
  const filtered = items
    .filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.country.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'all' || item.category === category;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'price') return a.startingPrice - b.startingPrice;
      // savedAt — most recent first
      return new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime();
    });

  const hasActiveFilter = search !== '' || category !== 'all' || sort !== 'savedAt';

  return (
    <>
      {/* Hero receives live count */}
      <WishlistHero count={items.length} />

      {/* Filters bar */}
      {items.length > 0 && (
        <section className="py-8 w-full bg-background">
          <Container>
            <div className="glass-card shadow-card p-5 rounded-2xl border border-border/80 backdrop-blur-md">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">

                {/* Search */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="wishlist-search" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                    Search
                  </label>
                  <div className={cn(
                    'relative flex items-center bg-background/40 rounded-xl transition-all duration-300 h-11 border',
                    searchFocused
                      ? 'border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60'
                      : 'border-border/80 hover:bg-background/60 hover:border-border',
                  )}>
                    <FiSearch className="absolute left-3.5 text-primary w-4 h-4 pointer-events-none" />
                    <input
                      id="wishlist-search"
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      placeholder="Search destinations..."
                      className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="wishlist-category" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                    Category
                  </label>
                  <div className="relative flex items-center bg-background/40 rounded-xl h-11 border border-border/80 hover:border-border hover:bg-background/60 transition-all duration-300">
                    <FiMapPin className="absolute left-3.5 text-primary w-4 h-4 pointer-events-none" />
                    <select
                      id="wishlist-category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer"
                      style={{ backgroundImage: CHEVRON_SVG, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                    >
                      {WISHLIST_CATEGORIES.map((cat) => (
                        <option key={cat.value} value={cat.value} className="bg-surface text-foreground">
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Sort */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="wishlist-sort" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                    Sort By
                  </label>
                  <div className="relative flex items-center bg-background/40 rounded-xl h-11 border border-border/80 hover:border-border hover:bg-background/60 transition-all duration-300">
                    <FiStar className="absolute left-3.5 text-primary w-4 h-4 pointer-events-none" />
                    <select
                      id="wishlist-sort"
                      value={sort}
                      onChange={(e) => setSort(e.target.value as WishlistSortKey)}
                      className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer"
                      style={{ backgroundImage: CHEVRON_SVG, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-surface text-foreground">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {hasActiveFilter && (
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs font-semibold text-primary hover:text-accent cursor-pointer transition-colors duration-200 flex items-center gap-1"
                  >
                    <FiX className="w-3.5 h-3.5" />
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Grid or empty states */}
      {items.length === 0 ? (
        <EmptyWishlist />
      ) : filtered.length === 0 ? (
        <div className="flex-grow flex items-center justify-center py-20 px-4">
          <div className="glass-card p-10 max-w-sm w-full mx-auto border border-border text-center flex flex-col items-center gap-4 rounded-2xl bg-surface/30">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
              <FiMapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-foreground">No Matches Found</h3>
              <p className="text-sm text-muted mt-1">Try a different search or reset the filters.</p>
            </div>
            <Button
              onClick={handleReset}
              className="px-6 h-10 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 cursor-pointer text-sm"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      ) : (
        <section className="py-10 px-4 w-full bg-background flex-grow">
          <Container>
            <AnimatePresence mode="popLayout">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
              >
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Card className="group flex flex-col h-full bg-surface border border-border/80 hover:border-primary/45 rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-primary/10 hover:-translate-y-1.5">

                      {/* Image */}
                      <div className="h-52 w-full relative overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-[1]" />

                        {/* Category badge */}
                        <span className="absolute top-4 left-4 z-10 text-[9px] font-extrabold uppercase tracking-wider bg-black/55 backdrop-blur-md text-primary border border-primary/25 px-2.5 py-1 rounded-full">
                          {item.category}
                        </span>

                        {/* Remove button */}
                        <button
                          onClick={() => handleRemove(item.id, item.name)}
                          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-danger/80 border border-white/10 backdrop-blur-md text-white transition-all duration-300 cursor-pointer shadow-sm"
                          aria-label={`Remove ${item.name} from wishlist`}
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Body */}
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Country + Rating row */}
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-1 text-primary">
                              <FiMapPin className="w-3.5 h-3.5" />
                              <span className="text-xs text-muted font-medium">{item.country}</span>
                            </div>
                            <div className="flex items-center gap-1 text-accent">
                              <FiStar className="w-3.5 h-3.5 fill-accent stroke-accent" />
                              <span className="text-xs font-bold text-foreground">{item.rating}</span>
                            </div>
                          </div>

                          {/* Name */}
                          <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                            {item.name}
                          </h3>

                          {/* Description */}
                          <p className="text-xs text-muted mb-4 leading-relaxed line-clamp-2">
                            {item.shortDescription}
                          </p>

                          {/* Saved date */}
                          <span className="text-[10px] text-muted/60 block mb-4" suppressHydrationWarning>
                            Saved {formatSavedDate(item.savedAt)}
                          </span>
                        </div>

                        {/* Price + CTA */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/50">
                          <div>
                            <span className="text-[9px] text-muted block uppercase tracking-wider">From</span>
                            <span className="text-base font-extrabold text-foreground">${item.startingPrice}</span>
                          </div>

                          <Link href={`/destinations/${item.destinationId}`}>
                            <Button
                              variant="ghost"
                              className="rounded-xl border border-border bg-background hover:bg-surface hover:border-primary/50 hover:text-primary text-foreground text-xs font-semibold cursor-pointer py-1.5 px-3 h-8 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1 group/btn"
                            >
                              View Details
                              <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                            </Button>
                          </Link>
                        </div>
                      </div>

                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Container>
        </section>
      )}
    </>
  );
}
