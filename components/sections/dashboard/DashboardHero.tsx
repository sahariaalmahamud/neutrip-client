'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';

export function DashboardHero() {
  const dateStr = typeof window !== 'undefined'
    ? new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';

  return (
    <section className="relative overflow-hidden pt-28 pb-8 flex items-center justify-between border-b border-border/40 bg-surface/20 w-full">
      {/* Background radial overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />
      
      <Container className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              User Dashboard
            </span>
            <h1 className="font-display text-foreground text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mt-1">
              Welcome back, <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sarah</span>
            </h1>
            <p className="text-sm text-muted mt-1 max-w-xl">
              Here is your personal travel snapshot and upcoming custom plans.
            </p>
          </div>

          <div
            suppressHydrationWarning
            className="px-3.5 py-1.5 rounded-xl border border-border bg-background/50 text-[11px] font-bold text-muted uppercase tracking-wider w-max"
          >
            {dateStr || 'Travel Dashboard'}
          </div>
        </div>
      </Container>
    </section>
  );
}
