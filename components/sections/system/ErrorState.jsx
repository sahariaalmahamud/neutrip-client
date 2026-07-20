'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiAlertTriangle, FiRefreshCw, FiHome } from 'react-icons/fi';
import Link from 'next/link';

export function ErrorState({ error, reset }) {
  return (
    <div className="flex flex-col w-full min-h-[75vh] bg-background pt-24 pb-16 justify-center items-center px-4">
      <Card className="glass-card p-8 md:p-10 max-w-md w-full mx-auto border border-danger/30 text-center flex flex-col items-center gap-6 bg-surface/30 rounded-3xl shadow-card relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-danger/10 blur-3xl pointer-events-none" />

        {/* Danger Icon */}
        <div className="w-16 h-16 rounded-2xl bg-danger/10 border border-danger/20 text-danger flex items-center justify-center relative z-10">
          <FiAlertTriangle className="w-8 h-8" />
        </div>

        <div className="flex flex-col gap-2 relative z-10">
          <h2 className="font-bold text-xl md:text-2xl text-foreground tracking-tight">
            Something Went Wrong
          </h2>
          <p className="text-xs md:text-sm text-muted leading-relaxed max-w-xs mx-auto">
            {error?.message || 'We encountered an unexpected glitch while loading this travel page.'}
          </p>
        </div>

        {/* Actions Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full relative z-10">
          {reset && (
            <Button
              onClick={reset}
              className="w-full sm:flex-1 h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-xs transition-all duration-200"
            >
              <FiRefreshCw className="w-4 h-4" />
              Try Again
            </Button>
          )}

          <Link href="/" className="w-full sm:flex-1">
            <Button
              variant="outline"
              className="w-full h-11 rounded-xl border border-border/80 bg-background/50 hover:bg-surface text-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs transition-all duration-200"
            >
              <FiHome className="w-4 h-4" />
              Back Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
