'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiMessageSquare, FiMail, FiPhone, FiUsers, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { SUPPORT_CARDS } from '@/constants/help';

function getIcon(type) {
  switch (type) {
    case 'chat':
      return FiMessageSquare;
    case 'email':
      return FiMail;
    case 'phone':
      return FiPhone;
    case 'users':
    default:
      return FiUsers;
  }
}

export function SupportCards() {
  return (
    <section className="py-12 w-full bg-background border-t border-border/40">
      <div className="flex flex-col gap-2 text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          Direct Assistance
        </span>
        <h2 className="font-bold text-2xl md:text-3xl text-foreground tracking-tight">
          Still need help?
        </h2>
        <p className="text-xs md:text-sm text-muted">
          Our global support team is available 24/7 to assist with your travel itineraries and vouchers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {SUPPORT_CARDS.map((card) => {
          const IconComponent = getIcon(card.iconType);
          return (
            <Card
              key={card.id}
              className="glass-card p-6 rounded-2xl border border-border/80 bg-surface/30 hover:border-primary/40 transition-all duration-300 shadow-card flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2.5 py-0.5 rounded-full border border-accent/20">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-foreground mb-1.5 group-hover:text-primary transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <Link href={card.actionLink}>
                <Button
                  size="sm"
                  className="w-full h-10 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-md shadow-primary/20 flex items-center justify-center gap-1.5 cursor-pointer text-xs transition-transform duration-200 group-hover:-translate-y-0.5"
                >
                  {card.actionText}
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
