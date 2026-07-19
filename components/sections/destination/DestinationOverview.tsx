import React from 'react';
import { ExploreDestination } from '@/constants/explore';

interface DestinationOverviewProps {
  destination: ExploreDestination;
}

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  return (
    <div className="flex flex-col gap-4 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Overview</h2>
      <p className="text-sm md:text-base text-muted leading-relaxed">
        {destination.description} Additional bespoke tours and dynamic itineraries are fully integrated to fit your preferred budget and timing. Experience the unique lifestyle, landmarks, and culinary flavors that define this place.
      </p>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {destination.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1.5 rounded-lg bg-surface border border-border/80 text-muted font-medium cursor-default"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
