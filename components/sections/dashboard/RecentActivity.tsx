import React from 'react';
import { MOCK_ACTIVITIES } from '@/constants/dashboard';
import { Card } from '@heroui/react';
import { FiClock } from 'react-icons/fi';

export function RecentActivity() {
  return (
    <div className="flex flex-col gap-4 text-left w-full">
      <h3 className="font-bold text-base text-foreground">Recent Activity</h3>
      
      <Card className="glass-card p-5 border border-border/80 rounded-2xl bg-surface/30">
        <div className="relative border-l border-border pl-4.5 flex flex-col gap-5 text-left ml-1.5">
          {MOCK_ACTIVITIES.map((act) => (
            <div key={act.id} className="relative group text-left">
              {/* Bullet circle dot */}
              <span className="absolute -left-[24.5px] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background shadow-sm" />
              
              <div>
                <p className="text-xs font-semibold text-foreground/90 leading-snug">
                  {act.text}
                </p>
                
                <span className="text-[9px] text-muted flex items-center gap-1 mt-1 leading-none">
                  <FiClock className="w-3 h-3 text-muted/60" />
                  {act.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
