'use client';

import React, { useState } from 'react';
import { FiSearch, FiStar, FiX } from 'react-icons/fi';
import { Container } from '@/components/layout/Container';
import { RATING_FILTER_OPTIONS, SORT_OPTIONS } from '@/constants/reviews';
import { cn } from '@/utils/cn';

const CHEVRON_SVG = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`;

export function ReviewFilters({
  search,
  setSearch,
  ratingFilter,
  setRatingFilter,
  sortBy,
  setSortBy,
  onReset,
  hasActiveFilter,
}) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <section className="py-6 w-full bg-background">
      <Container>
        <div className="glass-card p-4 rounded-2xl border border-border/80 backdrop-blur-md flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div
            className={cn(
              'relative flex items-center bg-background/40 rounded-xl transition-all duration-300 h-11 border min-w-[240px] md:w-72',
              searchFocused
                ? 'border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60'
                : 'border-border/80 hover:bg-background/60 hover:border-border'
            )}
          >
            <FiSearch className="absolute left-3.5 text-primary w-4 h-4 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search destination or review..."
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none"
            />
          </div>

          {/* Rating filter tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {RATING_FILTER_OPTIONS.map((opt) => {
              const isActive = ratingFilter === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setRatingFilter(opt.value)}
                  className={cn(
                    'px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border flex items-center gap-1',
                    isActive
                      ? 'bg-primary text-background border-primary shadow-md shadow-primary/20'
                      : 'bg-surface/50 text-muted border-border/60 hover:border-border hover:text-foreground hover:bg-surface'
                  )}
                >
                  {opt.value !== 'all' && <FiStar className={isActive ? 'fill-background' : 'fill-accent text-accent'} />}
                  {opt.label}
                </button>
              );
            })}
          </div>

          {/* Sort Select + Reset */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <div className="relative flex items-center bg-background/40 rounded-xl h-11 border border-border/80 hover:border-border hover:bg-background/60 transition-all duration-300 w-44">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent h-full pl-4 pr-10 rounded-xl text-xs font-semibold text-foreground appearance-none outline-none cursor-pointer"
                style={{
                  backgroundImage: CHEVRON_SVG,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '16px',
                }}
              >
                {SORT_OPTIONS.map((s) => (
                  <option key={s.value} value={s.value} className="bg-surface text-foreground">
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {hasActiveFilter && (
              <button
                onClick={onReset}
                className="text-xs font-semibold text-muted hover:text-foreground cursor-pointer transition-colors duration-200 flex items-center gap-1 px-2 h-11"
              >
                <FiX className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
