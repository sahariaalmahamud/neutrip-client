import React from 'react';
import { MOCK_PROFILE_STATS } from '@/constants/profile';
import { Card } from '@heroui/react';
import { FiCompass, FiGlobe, FiAward } from 'react-icons/fi';

const iconMap = {
  compass: FiCompass,
  globe: FiGlobe,
  leaf: FiAward,
};

const colorsMap = {
  compass: 'text-primary bg-primary/10 border-primary/20',
  globe: 'text-accent bg-accent/10 border-accent/20',
  leaf: 'text-success bg-success/10 border-success/20',
};

export function ProfileStats() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {MOCK_PROFILE_STATS.map((stat, idx) => {
        const Icon = iconMap[stat.iconName] || FiCompass;
        const colorStyles = colorsMap[stat.iconName] || 'text-primary bg-primary/10';

        return (
          <Card
            key={idx}
            className="glass-card p-4 border border-border/80 rounded-2xl text-left bg-surface/30 flex flex-col gap-3 relative overflow-hidden transition-all duration-300 hover:border-primary/20"
          >
            <div className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorStyles}`}>
              <Icon className="w-4 h-4" />
            </div>

            <div>
              <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-0.5 leading-none">
                {stat.label}
              </span>
              <span className="text-lg md:text-xl font-black text-foreground leading-none">
                {stat.value}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
