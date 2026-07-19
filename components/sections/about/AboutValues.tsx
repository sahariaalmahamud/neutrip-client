import React from 'react';
import { MOCK_VALUES } from '@/constants/about';
import { Card } from '@heroui/react';
import { FiCpu, FiAward, FiShield } from 'react-icons/fi';

const iconMap = {
  cpu: FiCpu,
  leaf: FiAward,
  shield: FiShield,
};

const colorStylesMap = {
  cpu: 'text-primary bg-primary/10 border-primary/20',
  leaf: 'text-success bg-success/10 border-success/20',
  shield: 'text-accent bg-accent/10 border-accent/20',
};

export function AboutValues() {
  return (
    <section className="py-8 w-full text-left">
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Company Principles
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-foreground mt-1">
          Our Core Values
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {MOCK_VALUES.map((val, idx) => {
          const Icon = iconMap[val.iconName] || FiCpu;
          const colorStyles = colorStylesMap[val.iconName] || 'text-primary bg-primary/10';

          return (
            <Card
              key={idx}
              className="glass-card p-6 border border-border/80 rounded-2xl bg-surface/30 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-primary/20"
            >
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorStyles}`}>
                <Icon className="w-5 h-5" />
              </div>
              
              <div>
                <h3 className="font-extrabold text-base text-foreground mb-2 leading-tight">
                  {val.title}
                </h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed">
                  {val.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
