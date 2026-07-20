'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { FiSearch, FiHelpCircle, FiX } from 'react-icons/fi';
import { cn } from '@/utils/cn';

export function HelpHero({ search, setSearch }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <section className="relative overflow-hidden pt-28 pb-14 border-b border-border/40 bg-surface/20 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent mx-auto">
            <FiHelpCircle className="w-4 h-4" />
            Support Concierge
          </span>
          
          <h1 className="font-display text-foreground text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mt-1">
            How can we help you?
          </h1>
          
          <p className="text-sm md:text-base text-muted mt-1 leading-relaxed">
            Search our knowledge base for instant answers on bookings, AI travel plans, payments, and safety advisories.
          </p>

          {/* Big Search Bar */}
          <div className="mt-5 max-w-xl w-full mx-auto">
            <div
              className={cn(
                'relative flex items-center bg-background/80 rounded-2xl transition-all duration-300 h-14 border shadow-card backdrop-blur-md',
                searchFocused
                  ? 'border-primary/60 shadow-[0_0_20px_-3px_rgba(6,182,212,0.3)] bg-background'
                  : 'border-border/80 hover:border-border hover:bg-background'
              )}
            >
              <FiSearch className="absolute left-4 text-primary w-5 h-5 pointer-events-none" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                placeholder="Search questions, topics, or keywords..."
                className="w-full bg-transparent h-full pl-12 pr-10 rounded-2xl text-foreground placeholder:text-muted text-sm md:text-base outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 text-muted hover:text-foreground p-1 rounded-full cursor-pointer transition-colors"
                  aria-label="Clear search"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
