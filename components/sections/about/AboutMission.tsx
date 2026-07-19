import React from 'react';
import { MISSION_VISION_DATA } from '@/constants/about';
import { Card } from '@heroui/react';
import { FiTarget, FiEye } from 'react-icons/fi';

export function AboutMission() {
  return (
    <section className="py-12 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        {/* Mission card */}
        <Card className="glass-card p-6 md:p-8 border border-border/85 rounded-2xl bg-surface/30 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-primary/20">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
            <FiTarget className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground tracking-tight leading-snug mb-2">
              {MISSION_VISION_DATA.mission.title}
            </h2>
            <p className="text-xs md:text-sm text-muted leading-relaxed">
              {MISSION_VISION_DATA.mission.text}
            </p>
          </div>
        </Card>

        {/* Vision card */}
        <Card className="glass-card p-6 md:p-8 border border-border/85 rounded-2xl bg-surface/30 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-accent/20">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center">
            <FiEye className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-foreground tracking-tight leading-snug mb-2">
              {MISSION_VISION_DATA.vision.title}
            </h2>
            <p className="text-xs md:text-sm text-muted leading-relaxed">
              {MISSION_VISION_DATA.vision.text}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
