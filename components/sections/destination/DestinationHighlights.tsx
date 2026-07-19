import React from 'react';
import { DestinationHighlights as HighlightsType } from '@/constants/explore';
import { FiCalendar, FiClock, FiMessageSquare, FiCreditCard, FiCompass } from 'react-icons/fi';

interface DestinationHighlightsProps {
  highlights: HighlightsType;
}

export function DestinationHighlights({ highlights }: DestinationHighlightsProps) {
  const items = [
    {
      label: 'Best Season',
      value: highlights.bestSeason,
      icon: FiCalendar,
    },
    {
      label: 'Recommended Duration',
      value: highlights.duration,
      icon: FiClock,
    },
    {
      label: 'Local Language',
      value: highlights.language,
      icon: FiMessageSquare,
    },
    {
      label: 'Currency',
      value: highlights.currency,
      icon: FiCreditCard,
    },
    {
      label: 'Local Transport',
      value: highlights.transport,
      icon: FiCompass,
    },
  ];

  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Travel Highlights</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border/80 bg-surface/50 flex flex-col gap-2.5 items-start transition-all duration-300 hover:border-primary/30 hover:bg-surface"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                <Icon className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-0.5 leading-none">
                  {item.label}
                </span>
                <span className="text-xs font-semibold text-foreground leading-tight">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
