import React from 'react';
import { MOCK_PROFILE_TRIPS } from '@/constants/profile';
import { Card } from '@heroui/react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export function RecentTrips() {
  return (
    <div className="flex flex-col gap-4 text-left w-full">
      <h3 className="font-bold text-base text-foreground">Recent Trips</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {MOCK_PROFILE_TRIPS.map((trip) => (
          <Card
            key={trip.id}
            className="glass-card border border-border/80 rounded-2xl overflow-hidden text-left bg-surface/30 flex flex-col h-auto transition-all duration-300 hover:border-primary/20"
          >
            {/* Image banner */}
            <div className="h-32 w-full relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={trip.image}
                alt={trip.destination}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span
                className={`absolute top-3 left-3 z-10 text-[8px] font-extrabold uppercase tracking-wider border px-2 py-0.5 rounded-full backdrop-blur-md ${
                  trip.status === 'Completed'
                    ? 'bg-success/15 border-success/20 text-success'
                    : 'bg-primary/15 border-primary/20 text-primary'
                }`}
              >
                {trip.status}
              </span>
            </div>

            {/* Content text */}
            <div className="p-4 flex flex-col gap-2">
              <h4 className="font-extrabold text-sm text-foreground">
                {trip.destination}
              </h4>
              
              <div className="flex flex-col gap-1 text-[10px] text-muted">
                <span className="flex items-center gap-1">
                  <FiMapPin className="w-3 h-3 text-primary flex-shrink-0" />
                  {trip.destination.split(',')[1]?.trim() || 'Global'}
                </span>
                
                <span className="flex items-center gap-1 mt-0.5">
                  <FiCalendar className="w-3 h-3 text-primary flex-shrink-0" />
                  {trip.dates}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
