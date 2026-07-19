import React from 'react';
import { Container } from '@/components/layout/Container';

export function PlannerHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 flex items-center justify-center border-b border-border/40 bg-surface/20 w-full">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />
      
      <Container className="relative z-10 text-center max-w-3xl flex flex-col items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          AI Trip Planner
        </span>
        <h1 className="font-display text-foreground text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
          Design Your Custom <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vacation Instantly
          </span>
        </h1>
        <p className="text-sm md:text-base text-muted max-w-xl leading-relaxed mt-2">
          Tell us where you want to go, your budget, and travel style. Our smart generator constructs fully tailored multi-day itineraries instantly.
        </p>
      </Container>
    </section>
  );
}
