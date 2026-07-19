import React from 'react';
import { MAP_COORDINATES } from '@/constants/contact';
import { Card } from '@heroui/react';
import { FiMapPin, FiCompass } from 'react-icons/fi';

export function ContactMap() {
  return (
    <Card className="glass-card p-6 border border-border/80 rounded-2xl bg-surface/30 text-left w-full h-full flex flex-col justify-between gap-5 relative overflow-hidden min-h-[300px]">
      {/* Background map grid design details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-glow)_0%,transparent_70%)] opacity-30 pointer-events-none" />
      
      {/* Stylized background graphics representing roads/tech grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
      
      {/* Target compass focal circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center animate-pulse">
          <FiCompass className="w-8 h-8 text-primary animate-spin-[spin_15s_linear_infinite]" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-1 text-left">
        <h3 className="font-bold text-base text-foreground pb-2 border-b border-border/40">
          Office Location
        </h3>
        
        <div className="flex items-center gap-2 text-xs text-muted mt-2">
          <FiMapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="font-semibold text-foreground">{MAP_COORDINATES.address}</span>
        </div>
      </div>

      {/* Footer coordinates receipt metadata */}
      <div className="relative z-10 flex justify-between items-center bg-background/50 border border-border/80 rounded-xl p-3 text-[11px] font-bold text-muted uppercase tracking-wider">
        <div>
          <span className="text-[9px] text-muted/60 block leading-none mb-1">Latitude</span>
          <span className="text-foreground">{MAP_COORDINATES.lat}</span>
        </div>
        
        <div className="h-6 w-[1px] bg-border/80" />
        
        <div className="text-right">
          <span className="text-[9px] text-muted/60 block leading-none mb-1">Longitude</span>
          <span className="text-foreground">{MAP_COORDINATES.lng}</span>
        </div>
      </div>
    </Card>
  );
}
