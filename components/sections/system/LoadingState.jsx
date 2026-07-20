'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { Card } from '@heroui/react';
import { FiCompass } from 'react-icons/fi';

export function LoadingState() {
  return (
    <div className="flex flex-col w-full min-h-[70vh] bg-background pt-24 pb-16 justify-center items-center">
      <Container>
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto w-full">
          
          {/* Centered Pulse Spinner Icon */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="relative w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center animate-pulse">
              <FiCompass className="w-8 h-8 animate-spin text-primary" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-lg pointer-events-none" />
            </div>
            <h2 className="font-bold text-lg text-foreground tracking-tight mt-1">
              Preparing your travel experience...
            </h2>
            <p className="text-xs text-muted max-w-xs">
              Fetching itinerary data, price updates, and destination highlights.
            </p>
          </div>

          {/* Skeleton Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-4">
            {[1, 2, 3].map((item) => (
              <Card
                key={item}
                className="glass-card p-5 rounded-2xl border border-border/60 bg-surface/30 flex flex-col gap-4 overflow-hidden"
              >
                <div className="h-44 w-full bg-surface/60 rounded-xl animate-pulse" />
                <div className="flex flex-col gap-2.5">
                  <div className="h-4 w-3/4 bg-surface/60 rounded-md animate-pulse" />
                  <div className="h-3 w-1/2 bg-surface/40 rounded-md animate-pulse" />
                  <div className="h-3 w-full bg-surface/40 rounded-md animate-pulse mt-1" />
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-border/40 mt-1">
                  <div className="h-4 w-16 bg-surface/60 rounded-md animate-pulse" />
                  <div className="h-8 w-24 bg-surface/60 rounded-xl animate-pulse" />
                </div>
              </Card>
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}
