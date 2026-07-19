import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiCompass, FiCpu } from 'react-icons/fi';
import Link from 'next/link';

export function AboutCTA() {
  return (
    <section className="py-12 w-full">
      <Card className="glass-card p-8 md:p-10 border border-border/80 rounded-3xl bg-surface/30 text-center flex flex-col items-center gap-6 relative overflow-hidden">
        {/* Background radial glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />

        <div className="max-w-xl flex flex-col gap-2 relative z-10">
          <h2 className="text-2xl md:text-3xl font-black text-foreground tracking-tight leading-tight">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xs md:text-sm text-muted mt-1 leading-relaxed">
            Generate a completely custom day-by-day plan tailored to your travel style, or explore our curated catalog of global destinations.
          </p>
        </div>

        {/* Buttons row */}
        <div className="flex flex-col sm:flex-row gap-4.5 justify-center relative z-10 w-full sm:w-auto">
          <Link href="/explore" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full sm:w-44 h-11 rounded-xl border border-border bg-background/50 hover:bg-surface text-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs"
            >
              <FiCompass className="w-4 h-4 text-primary" />
              Explore Destinations
            </Button>
          </Link>
          
          <Link href="/ai-planner" className="w-full sm:w-auto">
            <Button
              className="w-full sm:w-44 h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-xs transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FiCpu className="w-4 h-4" />
              AI Trip Planner
            </Button>
          </Link>
        </div>
      </Card>
    </section>
  );
}
