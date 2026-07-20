'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { HelpHero } from '@/components/sections/help/HelpHero';
import { HelpCategories } from '@/components/sections/help/HelpCategories';
import { FAQAccordion } from '@/components/sections/help/FAQAccordion';
import { SupportCards } from '@/components/sections/help/SupportCards';
import { HelpResources } from '@/components/sections/help/HelpResources';
import { EmptySearch } from '@/components/sections/help/EmptySearch';
import { MOCK_FAQS, FAQ_CATEGORIES } from '@/constants/help';

export function HelpCenterContent() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const handleReset = () => {
    setSearch('');
    setCategory('all');
  };

  // Compute category count badges based on overall list
  const categoryCounts = { all: MOCK_FAQS.length };
  FAQ_CATEGORIES.forEach((cat) => {
    if (cat.value !== 'all') {
      categoryCounts[cat.value] = MOCK_FAQS.filter((f) => f.category === cat.value).length;
    }
  });

  // Filtered array
  const filtered = MOCK_FAQS.filter((item) => {
    const query = search.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query);

    const matchesCategory = category === 'all' || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <HelpHero search={search} setSearch={setSearch} />

      <HelpCategories
        category={category}
        setCategory={setCategory}
        counts={categoryCounts}
      />

      <section className="py-10 px-4 w-full bg-background flex-grow">
        <Container>
          {filtered.length === 0 ? (
            <EmptySearch search={search} onReset={handleReset} />
          ) : (
            <div className="max-w-4xl mx-auto flex flex-col gap-10">
              <FAQAccordion faqs={filtered} />
              <SupportCards />
              <HelpResources />
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
