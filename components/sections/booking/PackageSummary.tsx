import React from 'react';
import { BookingPackage } from '@/constants/booking';
import { Card } from '@heroui/react';
import { FiCalendar, FiClock, FiUsers } from 'react-icons/fi';

interface PackageSummaryProps {
  pkg: BookingPackage;
}

export function PackageSummary({ pkg }: PackageSummaryProps) {
  return (
    <Card className="glass-card p-5 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-4">
      <h3 className="font-bold text-base text-foreground pb-2 border-b border-border/40">
        Package Details
      </h3>

      <div className="flex gap-4 items-center">
        {/* Cover thumbnail */}
        <div className="w-18 h-18 rounded-xl overflow-hidden flex-shrink-0 border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text descriptions */}
        <div className="flex-grow flex flex-col gap-1 text-left">
          <h4 className="font-extrabold text-sm md:text-base text-foreground leading-tight">
            {pkg.title}
          </h4>
          <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
            Premium Curated Trip
          </span>
        </div>
      </div>

      {/* Grid details checklist */}
      <div className="grid grid-cols-3 gap-2 mt-2 pt-3 border-t border-border/40 text-xs text-muted">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[10px] text-muted/60 uppercase font-bold tracking-wider">Duration</span>
          <span className="flex items-center gap-1.5 font-semibold text-foreground truncate">
            <FiClock className="w-3.5 h-3.5 text-primary" />
            {pkg.duration.split(',')[0]}
          </span>
        </div>

        <div className="flex flex-col gap-1 text-left">
          <span className="text-[10px] text-muted/60 uppercase font-bold tracking-wider">Travelers</span>
          <span className="flex items-center gap-1.5 font-semibold text-foreground truncate">
            <FiUsers className="w-3.5 h-3.5 text-primary" />
            {pkg.travelers}
          </span>
        </div>

        <div className="flex flex-col gap-1 text-left">
          <span className="text-[10px] text-muted/60 uppercase font-bold tracking-wider">Dates</span>
          <span className="flex items-center gap-1.5 font-semibold text-foreground truncate">
            <FiCalendar className="w-3.5 h-3.5 text-primary" />
            {pkg.dates.split(' - ')[0]}
          </span>
        </div>
      </div>
    </Card>
  );
}
