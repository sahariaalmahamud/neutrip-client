import React from 'react';
import { PlannerTripPlan } from '@/constants/aiPlanner';
import { FiCheckSquare, FiInfo } from 'react-icons/fi';

interface PlannerTipsProps {
  plan: PlannerTripPlan;
}

export function PlannerTips({ plan }: PlannerTipsProps) {
  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">AI Travel Tips</h2>
      
      <div className="p-6 rounded-2xl border border-border/80 bg-surface/30 flex flex-col gap-4">
        <h3 className="font-semibold text-base text-foreground flex items-center gap-2">
          <FiInfo className="w-5 h-5 text-accent" />
          Insider Recommendations
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
          {plan.tips.map((tip, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border/60 bg-surface/40 flex items-start gap-3 transition-colors duration-200 hover:border-primary/20 hover:bg-surface/60"
            >
              <FiCheckSquare className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-xs md:text-sm text-muted leading-relaxed">
                {tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
