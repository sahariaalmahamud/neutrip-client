import React from 'react';
import { Container } from '@/components/layout/Container';
import { FiHeart } from 'react-icons/fi';

interface WishlistHeroProps {
  count: number;
}

export function WishlistHero({ count }: WishlistHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 border-b border-border/40 bg-surface/20 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-2.5 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            My Collection
          </span>
          <h1 className="font-display text-foreground text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mt-1">
            Saved Destinations
          </h1>
          <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
            Your curated collection of dream destinations, ready to be turned into unforgettable journeys.
          </p>

          {/* Count badge */}
          <div className="flex justify-center mt-3">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3.5 py-1.5 rounded-full">
              <FiHeart className="w-3.5 h-3.5 fill-primary" />
              {count} {count === 1 ? 'destination' : 'destinations'} saved
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
