'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiHelpCircle, FiX } from 'react-icons/fi';

export function EmptySearch({ search, onReset }) {
  return (
    <div className="flex-grow flex items-center justify-center py-16 px-4 w-full">
      <Card className="glass-card p-10 max-w-md w-full mx-auto border border-border/80 text-center flex flex-col items-center gap-5 bg-surface/30 rounded-3xl">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
          <FiHelpCircle className="w-7 h-7" />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl text-foreground tracking-tight">
            No Matching FAQs Found
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            We couldn&apos;t find any questions matching &quot;{search}&quot;. Try adjusting your search query or selecting a different category tab.
          </p>
        </div>

        <Button
          onClick={onReset}
          className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-200"
        >
          <FiX className="w-4 h-4" />
          Clear Search & Filters
        </Button>
      </Card>
    </div>
  );
}
