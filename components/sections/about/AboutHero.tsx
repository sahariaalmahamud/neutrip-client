import React from 'react';
import { Container } from '@/components/layout/Container';
import { ABOUT_HERO_DATA } from '@/constants/about';

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 flex items-center justify-between border-b border-b-border/40 bg-surface/20 w-full">
      {/* Background glowing overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-2.5 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            About Neutrip
          </span>
          <h1 className="font-display text-foreground text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mt-1">
            {ABOUT_HERO_DATA.title}
          </h1>
          <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
            {ABOUT_HERO_DATA.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
