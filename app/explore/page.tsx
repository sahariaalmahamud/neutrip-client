'use client';

import React, { useState } from 'react';
import { ExploreHeader } from '@/components/sections/explore/ExploreHeader';
import { FilterBar } from '@/components/sections/explore/FilterBar';
import { DestinationGrid } from '@/components/sections/explore/DestinationGrid';
import { EXPLORE_DESTINATIONS } from '@/constants/explore';

export default function ExplorePage() {
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

  // Perform full client-side search & filtering over mock destinations constants
  const filteredDestinations = EXPLORE_DESTINATIONS.filter((dest) => {
    // 1. Search text comparison (name, country, or tags)
    if (search.trim() !== '') {
      const query = search.toLowerCase();
      const matchName = dest.name.toLowerCase().includes(query);
      const matchCountry = dest.country.toLowerCase().includes(query);
      const matchTags = dest.tags.some((tag) => tag.toLowerCase().includes(query));
      if (!matchName && !matchCountry && !matchTags) return false;
    }

    // 2. Category matching
    if (category !== 'all') {
      if (dest.category !== category) return false;
    }

    // 3. Price limit ceiling check
    if (maxBudget !== 'any') {
      const budgetLimit = parseInt(maxBudget, 10);
      if (dest.price > budgetLimit) return false;
    }

    // 4. Rating floor check
    if (minRating !== 'any') {
      const ratingLimit = parseFloat(minRating);
      if (dest.rating < ratingLimit) return false;
    }

    return true;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <ExploreHeader />
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
        destinations={filteredDestinations}
        onResetFilters={resetFilters}
      />
    </div>
  );
}
