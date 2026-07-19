import React from 'react';
import { PlannerTripPlan } from '@/constants/aiPlanner';
import { FiSun, FiSunset, FiMoon, FiCompass, FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ItineraryTimelineProps {
  plan: PlannerTripPlan;
}

const timeIconMap = {
  Morning: FiSun,
  Afternoon: FiSunset,
  Evening: FiMoon,
};

const timeColorMap = {
  Morning: 'text-amber-500 bg-amber-500/10 border-amber-500/25',
  Afternoon: 'text-primary bg-primary/10 border-primary/25',
  Evening: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/25',
};

export function ItineraryTimeline({ plan }: ItineraryTimelineProps) {
  return (
    <div className="flex flex-col gap-6 text-left w-full">
      <h2 className="text-xl md:text-2xl font-bold text-foreground">Day-by-Day Itinerary</h2>
      
      <div className="flex flex-col gap-8">
        {plan.itinerary.map((day) => (
          <div key={day.dayNumber} className="relative border-b border-border/40 pb-8 last:border-0 last:pb-0">
            {/* Day Header Badge */}
            <div className="flex items-center gap-3.5 mb-6">
              <span className="w-10 h-10 rounded-xl bg-primary text-background font-extrabold flex items-center justify-center text-sm shadow-md">
                D{day.dayNumber}
              </span>
              <div>
                <h4 className="font-bold text-base text-foreground">Day {day.dayNumber} Itinerary</h4>
                <span className="text-[10px] text-muted uppercase tracking-wider block">Custom AI Route</span>
              </div>
            </div>

            {/* Vertical timeline elements */}
            <div className="relative border-l-2 border-border/80 ml-5 pl-5 flex flex-col gap-5">
              {day.activities.map((act, idx) => {
                const TimeIcon = timeIconMap[act.timeOfDay] || FiCompass;
                const timeStyles = timeColorMap[act.timeOfDay] || 'text-primary bg-primary/10';

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative group p-4.5 rounded-2xl border border-border/80 bg-surface/30 hover:border-primary/20 hover:bg-surface transition-all duration-300 text-left"
                  >
                    {/* Floating Bullet Time Icon */}
                    <span className={`absolute -left-[33px] top-5 w-6.5 h-6.5 rounded-full border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 ${timeStyles}`}>
                      <TimeIcon className="w-3.5 h-3.5" />
                    </span>

                    {/* Content Block */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5 text-xs">
                        <span className="font-semibold text-foreground bg-surface/50 border border-border/60 px-2 py-0.5 rounded">
                          {act.timeOfDay}
                        </span>
                        
                        <span className="text-muted flex items-center gap-1.5">
                          <FiClock className="w-3.5 h-3.5 text-muted/60" />
                          {act.duration}
                        </span>
                      </div>
                      
                      <h5 className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-200">
                        {act.activity}
                      </h5>
                      
                      <p className="text-xs text-primary flex items-center gap-1 mt-1.5">
                        <FiCompass className="w-3.5 h-3.5" />
                        {act.location}
                      </p>
                      
                      <p className="text-xs md:text-sm text-muted mt-3 leading-relaxed">
                        {act.description}
                      </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
