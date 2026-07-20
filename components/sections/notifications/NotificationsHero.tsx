import React from 'react';
import { Container } from '@/components/layout/Container';
import { FiBell } from 'react-icons/fi';

interface NotificationsHeroProps {
  totalCount: number;
  unreadCount: number;
}

export function NotificationsHero({ totalCount, unreadCount }: NotificationsHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 border-b border-border/40 bg-surface/20 w-full">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-2.5 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Updates & Alerts
          </span>
          <h1 className="font-display text-foreground text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mt-1">
            Notifications
          </h1>
          <p className="text-sm md:text-base text-muted mt-2 leading-relaxed">
            Stay informed on your travel bookings, itinerary updates, price alerts, and safety advisories.
          </p>

          <div className="flex justify-center items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 text-primary text-xs font-bold px-3.5 py-1.5 rounded-full">
              <FiBell className="w-3.5 h-3.5 fill-primary" />
              {totalCount} {totalCount === 1 ? 'notification' : 'notifications'}
            </span>
            {unreadCount > 0 && (
              <span className="inline-flex items-center gap-1.5 bg-accent/10 border border-accent/20 text-accent text-xs font-bold px-3 py-1.5 rounded-full">
                {unreadCount} unread
              </span>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
