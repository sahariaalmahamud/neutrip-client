'use client';

import React, { useState } from 'react';
import { Button } from '@heroui/react';
import { FiSearch, FiCheckSquare, FiX } from 'react-icons/fi';
import { Container } from '@/components/layout/Container';
import { NOTIFICATION_FILTERS, NotificationFilterKey } from '@/constants/notifications';
import { cn } from '@/utils/cn';

interface NotificationFiltersProps {
  search: string;
  setSearch: (val: string) => void;
  filter: NotificationFilterKey;
  setFilter: (filter: NotificationFilterKey) => void;
  unreadCount: number;
  onMarkAllAsRead: () => void;
  onReset: () => void;
  hasActiveFilter: boolean;
}

export function NotificationFilters({
  search,
  setSearch,
  filter,
  setFilter,
  unreadCount,
  onMarkAllAsRead,
  onReset,
  hasActiveFilter,
}: NotificationFiltersProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <section className="py-6 w-full bg-background border-b border-border/30">
      <Container>
        <div className="glass-card p-4 rounded-2xl border border-border/80 backdrop-blur-md flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className={cn(
            'relative flex items-center bg-background/40 rounded-xl transition-all duration-300 h-11 border min-w-[240px] md:w-72',
            searchFocused
              ? 'border-primary/60 shadow-[0_0_15px_-3px_rgba(6,182,212,0.25)] bg-background/60'
              : 'border-border/80 hover:bg-background/60 hover:border-border',
          )}>
            <FiSearch className="absolute left-3.5 text-primary w-4 h-4 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              placeholder="Search notifications..."
              className="w-full bg-transparent h-full pl-10 pr-4 rounded-xl text-foreground placeholder:text-muted text-sm outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {NOTIFICATION_FILTERS.map((tab) => {
              const isActive = filter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setFilter(tab.value)}
                  className={cn(
                    'px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer border',
                    isActive
                      ? 'bg-primary text-background border-primary shadow-md shadow-primary/20'
                      : 'bg-surface/50 text-muted border-border/60 hover:border-border hover:text-foreground hover:bg-surface'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Actions: Mark All Read + Reset */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            {unreadCount > 0 && (
              <Button
                onClick={onMarkAllAsRead}
                size="sm"
                variant="ghost"
                className="h-9 px-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 text-xs font-semibold cursor-pointer transition-all duration-200 flex items-center gap-1.5"
              >
                <FiCheckSquare className="w-3.5 h-3.5" />
                Mark all read
              </Button>
            )}

            {hasActiveFilter && (
              <button
                onClick={onReset}
                className="text-xs font-semibold text-muted hover:text-foreground cursor-pointer transition-colors duration-200 flex items-center gap-1 px-2 h-9"
              >
                <FiX className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}
