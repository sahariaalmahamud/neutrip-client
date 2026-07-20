'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { DestinationGrid } from '@/components/sections/destination/DestinationGrid';
import { FilterBar } from '@/components/sections/destination/FilterBar';
import { EXPLORE_DESTINATIONS } from '@/constants/explore';
import { FiGlobe } from 'react-icons/fi';

export function DestinationsCatalog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [maxBudget, setMaxBudget] = useState('any');
  const [minRating, setMinRating] = useState('any');

  const resetFilters = () => {
    setSearch('');
    setCategory('all');
    setMaxBudget('any');
    setMinRating('any');
  };

  const filtered = EXPLORE_DESTINATIONS.filter((dest) => {
    if (search.trim() !== '') {
      const query = search.toLowerCase();
      const matchName = dest.name.toLowerCase().includes(query);
      const matchCountry = dest.country.toLowerCase().includes(query);
      const matchTags = dest.tags.some((tag) => tag.toLowerCase().includes(query));
      if (!matchName && !matchCountry && !matchTags) return false;
    }

    if (category !== 'all' && dest.category !== category) return false;

    if (maxBudget !== 'any') {
      const limit = parseInt(maxBudget, 10);
      if (dest.price > limit) return false;
    }

    if (minRating !== 'any') {
      const limit = parseFloat(minRating);
      if (dest.rating < limit) return false;
    }

    return true;
  });

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-10 border-b border-border/40 bg-surface/20 w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

        <Container className="relative z-10 w-full">
          <div className="flex flex-col gap-2.5 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent mx-auto">
              <FiGlobe className="w-4 h-4" />
              Global Destinations
            </span>
            <h1 className="font-display text-foreground text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Explore All <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Destinations
              </span>
            </h1>
            <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
              Find inspiration across beaches, alpine peaks, ancient cultural hubs, and vibrant cities.
            </p>
          </div>
        </Container>
      </section>

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        maxBudget={maxBudget}
        setMaxBudget={setMaxBudget}
        minRating={minRating}
        setMinRating={setMinRating}
        onReset={resetFilters}
      />

      <DestinationGrid
        destinations={filtered}
        onResetFilters={resetFilters}
      />
    </>
  );
}
