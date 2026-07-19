import React from 'react';
import { PlannerTripPlan } from '@/constants/aiPlanner';
import { Card } from '@heroui/react';
import { FiDollarSign, FiClock, FiCompass, FiMapPin } from 'react-icons/fi';

interface TripSummaryProps {
  plan: PlannerTripPlan;
}

export function TripSummary({ plan }: TripSummaryProps) {
  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Trip Summary</h2>
      
      <Card className="glass-card p-6 border border-border/80 rounded-2xl bg-surface/30 relative overflow-hidden transition-all duration-300 hover:border-primary/20">
        
        {/* Glow decorative block */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          {/* Left information columns */}
          <div className="flex-1">
            <span className="text-[10px] text-accent font-bold uppercase tracking-wider block mb-1">
              AI Generated Custom Route
            </span>
            <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-3 leading-tight">
              {plan.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-2xl">
              {plan.description}
            </p>
          </div>

          {/* Right meta pill rows */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3.5 w-full md:w-auto border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-6 text-sm">
            
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                <FiMapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-muted block uppercase tracking-wider leading-none mb-0.5">Destination</span>
                <span className="font-bold text-foreground leading-none">{plan.destination}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                <FiClock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-muted block uppercase tracking-wider leading-none mb-0.5">Duration</span>
                <span className="font-bold text-foreground leading-none">{plan.duration}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                <FiCompass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-muted block uppercase tracking-wider leading-none mb-0.5">Style</span>
                <span className="font-bold text-foreground leading-none">{plan.style}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                <FiDollarSign className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-muted block uppercase tracking-wider leading-none mb-0.5">Est. Budget</span>
                <span className="font-bold text-primary leading-none">${plan.estimatedTotal} / person</span>
              </div>
            </div>

          </div>
        </div>

      </Card>
    </div>
  );
}
