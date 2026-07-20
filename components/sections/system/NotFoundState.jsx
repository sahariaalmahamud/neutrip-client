'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiCompass, FiHome, FiMapPin, FiCpu } from 'react-icons/fi';
import Link from 'next/link';

export function NotFoundState() {
  return (
    <div className="flex flex-col w-full min-h-[80vh] bg-background pt-24 pb-16 justify-center items-center px-4 relative overflow-hidden">
      {/* Background Ambient Blur Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/10 blur-[120px] pointer-events-none z-0" />

      <Card className="glass-card p-8 md:p-12 max-w-lg w-full mx-auto border border-border/80 text-center flex flex-col items-center gap-6 bg-surface/40 rounded-3xl shadow-card relative z-10">
        
        {/* Travel Themed 404 Icon */}
        <div className="relative">
          <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shadow-lg shadow-primary/10">
            <FiCompass className="w-10 h-10 animate-pulse" />
          </div>
          <span className="absolute -bottom-2 -right-2 bg-accent text-background text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-background">
            404
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Off The Map
          </span>
          <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Destination Not Found
          </h1>
          <p className="text-xs md:text-sm text-muted leading-relaxed max-w-sm mx-auto mt-1">
            The page or travel route you are looking for has been moved, renamed, or doesn&apos;t exist in our global catalog.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 w-full mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <Link href="/explore" className="w-full">
              <Button className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-xs transition-all duration-200 hover:-translate-y-0.5">
                <FiMapPin className="w-4 h-4" />
                Explore Destinations
              </Button>
            </Link>

            <Link href="/ai-planner" className="w-full">
              <Button
                variant="outline"
                className="w-full h-11 rounded-xl border border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs transition-all duration-200"
              >
                <FiCpu className="w-4 h-4 text-primary" />
                AI Travel Planner
              </Button>
            </Link>
          </div>

          <Link href="/" className="w-full">
            <button className="text-xs font-semibold text-muted hover:text-foreground cursor-pointer transition-colors duration-200 flex items-center justify-center gap-1.5 w-full py-2">
              <FiHome className="w-3.5 h-3.5" />
              Return to Homepage
            </button>
          </Link>
        </div>

      </Card>
    </div>
  );
}
