import React from 'react';
import { CONTACT_INFO_CARDS } from '@/constants/contact';
import { Card } from '@heroui/react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const iconMap = {
  mail: FiMail,
  phone: FiPhone,
  mapPin: FiMapPin,
  clock: FiClock,
};

export function ContactInfo() {
  return (
    <section className="py-6 w-full text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {CONTACT_INFO_CARDS.map((card, idx) => {
          const Icon = iconMap[card.iconName] || FiMail;

          return (
            <Card
              key={idx}
              className="glass-card p-5 border border-border/80 rounded-2xl bg-surface/30 flex flex-col gap-3 relative overflow-hidden transition-all duration-300 hover:border-primary/20"
            >
              {/* Icon bullet circle */}
              <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                <Icon className="w-4.5 h-4.5" />
              </div>
              
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-xs text-muted uppercase tracking-wider block mb-1">
                    {card.title}
                  </h3>
                  <span className="font-extrabold text-sm md:text-base text-foreground block tracking-tight leading-snug">
                    {card.value}
                  </span>
                </div>
                <span className="text-[10px] text-muted block mt-3 leading-tight">
                  {card.description}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
