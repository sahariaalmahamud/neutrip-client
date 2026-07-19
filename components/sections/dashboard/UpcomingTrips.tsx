'use client';

import React from 'react';
import { MOCK_UPCOMING_TRIPS } from '@/constants/dashboard';
import { Card } from '@heroui/react';
import { FiCalendar, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface UpcomingTripsProps {
  expandedTrips: Set<string>;
  toggleTrip: (id: string) => void;
}

export function UpcomingTrips({ expandedTrips, toggleTrip }: UpcomingTripsProps) {
  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Upcoming Trips</h2>
      
      <div className="flex flex-col gap-5">
        {MOCK_UPCOMING_TRIPS.map((trip) => {
          const isExpanded = expandedTrips.has(trip.id);

          return (
            <Card
              key={trip.id}
              className="glass-card border border-border/80 rounded-2xl overflow-hidden text-left bg-surface/30 flex flex-col md:flex-row h-auto transition-all duration-300 hover:border-primary/20"
            >
              {/* Cover Image Column */}
              <div className="h-44 md:h-auto w-full md:w-56 relative overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                
                {/* Status Badge */}
                <span
                  className={`absolute top-4 left-4 z-10 text-[9px] font-extrabold uppercase tracking-wider border px-2.5 py-0.5 rounded-full backdrop-blur-md ${
                    trip.status === 'Confirmed'
                      ? 'bg-success/15 border-success/20 text-success'
                      : 'bg-primary/15 border-primary/20 text-primary'
                  }`}
                >
                  {trip.status}
                </span>
              </div>

              {/* Info Column */}
              <div className="p-5 flex-grow flex flex-col justify-between gap-4 text-left">
                <div className="flex flex-col gap-2">
                  {/* Location & Date */}
                  <div className="flex flex-wrap items-center gap-3.5 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="w-3.5 h-3.5 text-primary" />
                      {trip.destination}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="w-3.5 h-3.5 text-primary" />
                      {trip.dateRange}
                    </span>
                  </div>

                  {/* Title Name */}
                  <h3 className="font-extrabold text-lg text-foreground mt-1">
                    Custom Journey to {trip.destination.split(',')[0]}
                  </h3>

                  {/* Progress Indicator */}
                  <div className="flex flex-col gap-1.5 mt-2.5 w-full max-w-sm">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted">
                      <span>Planning Progress</span>
                      <span className="text-primary font-semibold">{trip.progress}%</span>
                    </div>
                    {/* Progress slider bar */}
                    <div className="w-full bg-background rounded-full h-1.5 overflow-hidden border border-border/40">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${trip.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Expanse Trigger */}
                <div className="flex flex-col gap-3 pt-3.5 border-t border-border/40">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-muted italic">Itinerary preview and logs</span>
                    
                    <button
                      onClick={() => toggleTrip(trip.id)}
                      className="text-xs font-semibold text-primary hover:text-accent flex items-center gap-1 cursor-pointer transition-colors duration-200"
                    >
                      {isExpanded ? (
                        <>
                          Hide Details
                          <FiChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Details
                          <FiChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Expanded detail box */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs md:text-sm text-muted leading-relaxed pb-2.5 pt-1.5">
                          {trip.description} This custom plan includes optimized eco-friendly transport, curated local meals, and skip-the-line passes. Open the planner section to adjust routes or export to calendar lists.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
