'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { FAQ_CATEGORIES } from '@/constants/help';
import { cn } from '@/utils/cn';

export function HelpCategories({ category, setCategory, counts }) {
  return (
    <section className="py-6 w-full bg-background border-b border-border/30">
      <Container>
        <div className="glass-card p-3 rounded-2xl border border-border/80 backdrop-blur-md flex items-center gap-2 overflow-x-auto scrollbar-none justify-start md:justify-center">
          {FAQ_CATEGORIES.map((cat) => {
            const isActive = category === cat.value;
            const count = counts[cat.value] || 0;

            return (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={cn(
                  'px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border flex items-center gap-2',
                  isActive
                    ? 'bg-primary text-background border-primary shadow-md shadow-primary/20'
                    : 'bg-surface/50 text-muted border-border/60 hover:border-border hover:text-foreground hover:bg-surface'
                )}
              >
                <span>{cat.label}</span>
                <span
                  className={cn(
                    'px-2 py-0.5 rounded-full text-[10px] font-bold border',
                    isActive
                      ? 'bg-background/20 text-background border-background/30'
                      : 'bg-surface text-muted/80 border-border/50'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
