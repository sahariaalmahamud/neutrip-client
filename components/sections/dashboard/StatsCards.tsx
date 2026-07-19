import React from 'react';
import { MOCK_STATS } from '@/constants/dashboard';
import { FiCompass, FiGlobe, FiAward, FiHeart } from 'react-icons/fi';
import { Card } from '@heroui/react';

const iconMap = {
  compass: FiCompass,
  globe: FiGlobe,
  leaf: FiAward,
  heart: FiHeart,
};

const iconColorMap = {
  compass: 'text-primary bg-primary/10 border-primary/20',
  globe: 'text-accent bg-accent/10 border-accent/20',
  leaf: 'text-success bg-success/10 border-success/20',
  heart: 'text-danger bg-danger/10 border-danger/20',
};

export function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {MOCK_STATS.map((stat, idx) => {
        const Icon = iconMap[stat.iconName] || FiCompass;
        const colorStyles = iconColorMap[stat.iconName] || 'text-primary bg-primary/10';

        return (
          <Card
            key={idx}
            className="glass-card p-4 border border-border/80 rounded-2xl text-left bg-surface/30 flex flex-col gap-3 relative overflow-hidden transition-all duration-300 hover:border-primary/20"
          >
            {/* Icon circle */}
            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorStyles}`}>
              <Icon className="w-4.5 h-4.5" />
            </div>

            <div>
              <span className="text-[10px] text-muted font-bold uppercase tracking-wider block mb-0.5 leading-none">
                {stat.label}
              </span>
              <span className="text-xl md:text-2xl font-black text-foreground leading-none">
                {stat.value}
              </span>
              <span className="text-[9px] text-muted/80 block mt-1.5 leading-none">
                {stat.description}
              </span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
