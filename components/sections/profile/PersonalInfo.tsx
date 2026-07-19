import React from 'react';
import { MOCK_PROFILE } from '@/constants/profile';
import { Card } from '@heroui/react';
import { FiMail, FiPhone, FiMapPin, FiInfo } from 'react-icons/fi';

export function PersonalInfo() {
  return (
    <Card className="glass-card p-5 md:p-6 border border-border/80 rounded-2xl bg-surface/30 text-left flex flex-col gap-4">
      <h3 className="font-bold text-base text-foreground pb-2 border-b border-border/40">
        Personal Information
      </h3>

      {/* Bio section */}
      <div className="flex flex-col gap-1.5 text-xs text-muted">
        <span className="text-[10px] text-muted/60 uppercase font-bold tracking-wider flex items-center gap-1">
          <FiInfo className="w-3.5 h-3.5 text-primary" />
          About Me
        </span>
        <p className="leading-relaxed mt-0.5">{MOCK_PROFILE.bio}</p>
      </div>

      {/* Detailed rows */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5 pt-4.5 border-t border-border/40 text-xs">
        <div className="flex items-center gap-2.5 text-muted text-left">
          <FiMapPin className="w-4 h-4 text-primary flex-shrink-0" />
          <div>
            <span className="text-[9px] text-muted/50 block font-semibold uppercase leading-none">Home Base</span>
            <span className="font-bold text-foreground mt-0.5 block leading-tight">{MOCK_PROFILE.homeBase}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-muted text-left">
          <FiMail className="w-4 h-4 text-primary flex-shrink-0" />
          <div className="truncate w-full">
            <span className="text-[9px] text-muted/50 block font-semibold uppercase leading-none">Email Address</span>
            <span className="font-bold text-foreground mt-0.5 block leading-tight truncate">{MOCK_PROFILE.email}</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5 text-muted text-left">
          <FiPhone className="w-4 h-4 text-primary flex-shrink-0" />
          <div>
            <span className="text-[9px] text-muted/50 block font-semibold uppercase leading-none">Phone Number</span>
            <span className="font-bold text-foreground mt-0.5 block leading-tight">{MOCK_PROFILE.phone}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
