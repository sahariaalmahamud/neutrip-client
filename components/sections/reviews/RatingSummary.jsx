'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiStar, FiEdit3 } from 'react-icons/fi';
import { Container } from '@/components/layout/Container';

export function RatingSummary({ reviews, onOpenWriteModal }) {
  const total = reviews.length;

  const averageRating =
    total > 0
      ? (reviews.reduce((acc, item) => acc + item.rating, 0) / total).toFixed(1)
      : '0.0';

  const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  reviews.forEach((r) => {
    const star = Math.min(5, Math.max(1, Math.round(r.rating)));
    counts[star] = (counts[star] || 0) + 1;
  });

  return (
    <section className="py-8 w-full bg-background border-b border-border/40">
      <Container>
        <Card className="glass-card p-6 md:p-8 rounded-3xl border border-border/80 bg-surface/30 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Score column */}
            <div className="md:col-span-4 flex flex-col items-center justify-center text-center md:border-r border-border/50 md:pr-8">
              <span className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
                {averageRating}
              </span>
              <div className="flex items-center gap-1 my-2 text-accent">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    className={`w-5 h-5 ${
                      star <= Math.round(Number(averageRating))
                        ? 'fill-accent text-accent'
                        : 'text-border'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-medium text-muted">
                Based on {total} verified traveler {total === 1 ? 'review' : 'reviews'}
              </p>

              <Button
                onClick={onOpenWriteModal}
                className="mt-4 px-5 h-10 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center gap-2 cursor-pointer text-xs transition-all duration-200 hover:-translate-y-0.5"
              >
                <FiEdit3 className="w-4 h-4" />
                Write a Review
              </Button>
            </div>

            {/* Bars column */}
            <div className="md:col-span-8 flex flex-col gap-2.5">
              {[5, 4, 3, 2, 1].map((num) => {
                const count = counts[num] || 0;
                const percent = total > 0 ? (count / total) * 100 : 0;
                return (
                  <div key={num} className="flex items-center gap-3 text-xs">
                    <span className="w-8 text-right font-semibold text-muted flex items-center justify-end gap-1">
                      {num} <FiStar className="w-3 h-3 fill-accent text-accent" />
                    </span>
                    <div className="flex-1 bg-surface/60 h-2.5 rounded-full overflow-hidden border border-border/40">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <span className="w-10 text-left font-medium text-muted/80">
                      {count}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </Card>
      </Container>
    </section>
  );
}
