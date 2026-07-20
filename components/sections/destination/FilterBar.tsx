'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { FiSearch, FiMapPin, FiStar, FiDollarSign } from 'react-icons/fi';
import { EXPLORE_CATEGORIES } from '@/constants/explore';
import { cn } from '@/utils/cn';

interface FilterBarProps {
  search: string;
  setSearch: (val: string) => void;
  category: string;
  setCategory: (val: string) => void;
  maxBudget: string;
  setMaxBudget: (val: string) => void;
  minRating: string;
  setMinRating: (val: string) => void;
  onReset: () => void;
}

export function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
  maxBudget,
  setMaxBudget,
  minRating,
  setMinRating,
  onReset,
}: FilterBarProps) {
  const [searchFocused, setSearchFocused] = useState(false);
  const [catFocused, setCatFocused] = useState(false);
  const [budgetFocused, setBudgetFocused] = useState(false);
  const [ratingFocused, setRatingFocused] = useState(false);

  const showReset = search !== '' || category !== 'all' || maxBudget !== 'any' || minRating !== 'any';

  return (
    <section className="relative z-20 py-8 px-4 w-full bg-background">
      <Container>
        <div className="glass-card shadow-card p-5 rounded-2xl max-w-5xl mx-auto border border-border/80 backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            
            {/* Search Input */}
            <div className="flex flex-col gap-1.5 w-full text-left">
              <label htmlFor="explore-search" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                Where to?
              </label>
              <div
                className={cn(
                  "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
                  searchFocused 
                    ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                    : "border-border/80 hover:bg-background/60 hover:border-border"
                )}
              >
                <FiSearch className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
                <input
                  id="explore-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search destination..."
                  className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none"
                />
              </div>
            </div>

            {/* Category Select */}
            <div className="flex flex-col gap-1.5 w-full text-left">
              <label htmlFor="explore-category" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                Category
              </label>
              <div
                className={cn(
                  "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
                  catFocused 
                    ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                    : "border-border/80 hover:bg-background/60 hover:border-border"
                )}
              >
                <FiMapPin className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
                <select
                  id="explore-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  onFocus={() => setCatFocused(true)}
                  onBlur={() => setCatFocused(false)}
                  className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px',
                  }}
                >
                  {EXPLORE_CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value} className="bg-surface text-foreground">
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget Select */}
            <div className="flex flex-col gap-1.5 w-full text-left">
              <label htmlFor="explore-budget" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                Max Budget
              </label>
              <div
                className={cn(
                  "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
                  budgetFocused 
                    ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                    : "border-border/80 hover:bg-background/60 hover:border-border"
                )}
              >
                <FiDollarSign className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
                <select
                  id="explore-budget"
                  value={maxBudget}
                  onChange={(e) => setMaxBudget(e.target.value)}
                  onFocus={() => setBudgetFocused(true)}
                  onBlur={() => setBudgetFocused(false)}
                  className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px',
                  }}
                >
                  <option value="any" className="bg-surface text-foreground">Any Price</option>
                  <option value="1000" className="bg-surface text-foreground">Under $1,000</option>
                  <option value="1300" className="bg-surface text-foreground">Under $1,300</option>
                  <option value="1500" className="bg-surface text-foreground">Under $1,500</option>
                </select>
              </div>
            </div>

            {/* Rating Select */}
            <div className="flex flex-col gap-1.5 w-full text-left">
              <label htmlFor="explore-rating" className="text-xs font-semibold text-accent uppercase tracking-wider pl-1">
                Min Rating
              </label>
              <div
                className={cn(
                  "relative flex items-center w-full bg-background/40 rounded-xl transition-all duration-300 h-11 border",
                  ratingFocused 
                    ? "border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60" 
                    : "border-border/80 hover:bg-background/60 hover:border-border"
                )}
              >
                <FiStar className="absolute left-3.5 text-primary w-4.5 h-4.5 pointer-events-none" />
                <select
                  id="explore-rating"
                  value={minRating}
                  onChange={(e) => setMinRating(e.target.value)}
                  onFocus={() => setRatingFocused(true)}
                  onBlur={() => setRatingFocused(false)}
                  className="w-full bg-transparent h-full pl-10 pr-10 rounded-xl text-sm text-foreground appearance-none outline-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '16px',
                  }}
                >
                  <option value="any" className="bg-surface text-foreground">Any Rating</option>
                  <option value="4.5" className="bg-surface text-foreground">4.5+ Stars</option>
                  <option value="4.8" className="bg-surface text-foreground">4.8+ Stars</option>
                </select>
              </div>
            </div>

          </div>

          {/* Reset Filters Option */}
          {showReset && (
            <div className="flex justify-end mt-4">
              <button
                onClick={onReset}
                className="text-xs font-semibold text-primary hover:text-accent cursor-pointer transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
