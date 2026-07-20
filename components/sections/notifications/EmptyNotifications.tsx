'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiBell, FiCompass } from 'react-icons/fi';
import Link from 'next/link';

interface EmptyNotificationsProps {
  hasActiveFilter?: boolean;
  onReset?: () => void;
}

export function EmptyNotifications({ hasActiveFilter, onReset }: EmptyNotificationsProps) {
  return (
    <div className="flex-grow flex items-center justify-center py-16 px-4 w-full">
      <Card className="glass-card p-10 max-w-md w-full mx-auto border border-border/80 text-center flex flex-col items-center gap-5 bg-surface/30 rounded-3xl">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
          <FiBell className="w-7 h-7" />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl text-foreground tracking-tight">
            {hasActiveFilter ? 'No Matching Notifications' : 'No Notifications'}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {hasActiveFilter
              ? 'No updates match your current filter criteria. Try clearing search or selecting a different tab.'
              : 'You are all caught up! Booking updates, trip reminders, and alerts will appear here.'}
          </p>
        </div>

        {hasActiveFilter && onReset ? (
          <Button
            onClick={onReset}
            className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-200"
          >
            Reset Filters
          </Button>
        ) : (
          <Link href="/explore" className="w-full">
            <Button className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
              <FiCompass className="w-4 h-4" />
              Explore Destinations
            </Button>
          </Link>
        )}
      </Card>
    </div>
  );
}
