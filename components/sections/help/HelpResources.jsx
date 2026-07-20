'use client';

import React from 'react';
import { Card } from '@heroui/react';
import { FiBookOpen, FiClock, FiArrowRight } from 'react-icons/fi';
import { POPULAR_RESOURCES } from '@/constants/help';

export function HelpResources() {
  return (
    <section className="py-8 w-full bg-background">
      <div className="flex flex-col gap-2 text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Knowledge Base
        </span>
        <h2 className="font-bold text-2xl text-foreground tracking-tight">
          Popular Articles & Guides
        </h2>
        <p className="text-xs text-muted">
          Recommended reading for planning seamless trips and maximizing your Neutrip experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {POPULAR_RESOURCES.map((res) => (
          <Card
            key={res.id}
            className="glass-card p-6 rounded-2xl border border-border/80 bg-surface/30 hover:border-primary/40 transition-all duration-300 shadow-card flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-0.5 rounded-md border border-primary/20">
                  {res.category}
                </span>
                <span className="text-[11px] text-muted/70 flex items-center gap-1">
                  <FiClock className="w-3 h-3 text-muted/50" />
                  {res.readTime}
                </span>
              </div>

              <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-200 mb-2">
                {res.title}
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-4">
                {res.summary}
              </p>
            </div>

            <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:text-accent transition-colors pt-2 border-t border-border/40">
              <FiBookOpen className="w-3.5 h-3.5" />
              Read Guide
              <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200 ml-auto" />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
