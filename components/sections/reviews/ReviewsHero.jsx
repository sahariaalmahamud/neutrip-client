import React from 'react';
import { Container } from '@/components/layout/Container';
import { FiStar, FiMessageSquare } from 'react-icons/fi';

export function ReviewsHero({ totalReviews, averageRating }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 border-b border-border/40 bg-surface/20 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-2.5 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Traveler Community
          </span>
          <h1 className="font-display text-foreground text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mt-1">
            Reviews & Ratings
          </h1>
          <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
            Real experiences, authentic ratings, and stories from travelers around the globe exploring Neutrip destinations.
          </p>

          <div className="flex justify-center items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3.5 py-1.5 rounded-full">
              <FiStar className="w-3.5 h-3.5 fill-primary" />
              {averageRating} Average Rating
            </span>
            <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent text-xs font-bold px-3.5 py-1.5 rounded-full">
              <FiMessageSquare className="w-3.5 h-3.5" />
              {totalReviews} {totalReviews === 1 ? 'Review' : 'Reviews'}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
