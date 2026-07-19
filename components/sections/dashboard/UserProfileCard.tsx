'use client';

import React from 'react';
import { MOCK_USER } from '@/constants/dashboard';
import { FiMail, FiMapPin, FiCalendar, FiSettings } from 'react-icons/fi';
import { Card, Button } from '@heroui/react';
import { toast } from 'sonner';

export function UserProfileCard() {
  const handleEditProfile = () => {
    toast.info('Profile settings updates are under development.');
  };

  return (
    <Card className="glass-card p-5 border border-border/80 rounded-2xl text-left bg-surface/30 relative overflow-hidden transition-all duration-300 hover:border-primary/20">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="flex items-center gap-4.5 mb-5">
        {/* Avatar image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MOCK_USER.avatar}
          alt={MOCK_USER.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
          loading="lazy"
        />
        <div>
          <h3 className="font-extrabold text-base text-foreground leading-tight">{MOCK_USER.name}</h3>
          <span className="text-[10px] font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
            Explorer Gold
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-xs border-t border-border/40 pt-4 mb-4">
        <div className="flex items-center gap-2.5 text-muted">
          <FiMail className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="truncate">{MOCK_USER.email}</span>
        </div>
        
        <div className="flex items-center gap-2.5 text-muted">
          <FiMapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <span>{MOCK_USER.homeBase}</span>
        </div>
        
        <div className="flex items-center gap-2.5 text-muted">
          <FiCalendar className="w-4 h-4 text-primary flex-shrink-0" />
          <span>Joined {MOCK_USER.memberSince}</span>
        </div>
      </div>

      <Button
        onClick={handleEditProfile}
        variant="outline"
        className="w-full h-9 rounded-xl border border-border bg-background/50 hover:bg-surface text-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer text-xs transition-all duration-300 hover:scale-103 active:scale-97"
      >
        <FiSettings className="w-3.5 h-3.5" />
        Edit Settings
      </Button>
    </Card>
  );
}
