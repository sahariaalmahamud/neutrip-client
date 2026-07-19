import React from 'react';
import { MOCK_PROFILE } from '@/constants/profile';
import { Button } from '@heroui/react';
import { FiEdit3 } from 'react-icons/fi';
import Link from 'next/link';

export function ProfileHeader() {
  return (
    <div className="w-full relative rounded-3xl overflow-hidden border border-border shadow-modal bg-surface/20">
      {/* Cover image banner */}
      <div className="h-44 md:h-64 w-full relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={MOCK_PROFILE.coverImage}
          alt="Profile cover banner"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Ambient darken gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Avatar details panel */}
      <div className="px-6 md:px-8 pb-6 -mt-16 md:-mt-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-5 text-left">
        <div className="flex flex-col md:flex-row md:items-end gap-4.5">
          {/* Avatar frame */}
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-background bg-background shadow-md flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={MOCK_PROFILE.avatar}
              alt={MOCK_PROFILE.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-1.5 pb-2">
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-none">
              {MOCK_PROFILE.name}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full inline-block uppercase tracking-wider">
                Explorer Gold
              </span>
              <span className="text-xs text-muted">Joined {MOCK_PROFILE.memberSince}</span>
            </div>
          </div>
        </div>

        {/* Action routing button */}
        <div className="pb-2">
          <Link href="/settings">
            <Button
              className="h-10 px-5 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-xs transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full md:w-auto"
            >
              <FiEdit3 className="w-3.5 h-3.5" />
              Edit Profile settings
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
