'use client';

import React, { useState } from 'react';
import { Container } from '@/components/layout/Container';
import { DashboardHero } from '@/components/sections/dashboard/DashboardHero';
import { UserProfileCard } from '@/components/sections/dashboard/UserProfileCard';
import { StatsCards } from '@/components/sections/dashboard/StatsCards';
import { UpcomingTrips } from '@/components/sections/dashboard/UpcomingTrips';
import { RecentBookings } from '@/components/sections/dashboard/RecentBookings';
import { WishlistPreview } from '@/components/sections/dashboard/WishlistPreview';
import { RecentActivity } from '@/components/sections/dashboard/RecentActivity';
import { cn } from '@/utils/cn';

export default function DashboardPage() {
  // Lazily retrieve tab selections from sessionStorage to avoid useEffect setState lint errors
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('neutrip-dashboard-tab') || 'overview';
    }
    return 'overview';
  });

  // Lazily retrieve expanded trip card IDs from sessionStorage
  const [expandedTrips, setExpandedTrips] = useState<Set<string>>(() => {
    if (typeof window !== 'undefined') {
      const savedExpanded = sessionStorage.getItem('neutrip-dashboard-expanded');
      if (savedExpanded) {
        try {
          const parsed = JSON.parse(savedExpanded);
          return new Set(parsed);
        } catch (e) {
          console.error('Failed to parse dashboard expanded session flags:', e);
        }
      }
    }
    return new Set();
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    sessionStorage.setItem('neutrip-dashboard-tab', tab);
  };

  const handleToggleTrip = (id: string) => {
    setExpandedTrips((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      sessionStorage.setItem('neutrip-dashboard-expanded', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <DashboardHero />

      <Container className="py-8 relative z-10 text-left">
        {/* Persistent Tab Selection Controls */}
        <div suppressHydrationWarning className="flex border-b border-border/60 mb-6 gap-6 text-sm">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'trips', label: 'My Trips' },
            { id: 'bookings', label: 'Recent Bookings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "pb-3.5 font-semibold transition-all duration-200 cursor-pointer border-b-2 text-sm leading-none",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Responsive 12-Column Grid */}
        <div suppressHydrationWarning className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Main Area Column (Grid-cols span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {activeTab === 'overview' && (
              <>
                <StatsCards />
                <UpcomingTrips expandedTrips={expandedTrips} toggleTrip={handleToggleTrip} />
                <RecentBookings />
              </>
            )}
            
            {activeTab === 'trips' && (
              <UpcomingTrips expandedTrips={expandedTrips} toggleTrip={handleToggleTrip} />
            )}

            {activeTab === 'bookings' && (
              <RecentBookings />
            )}
          </div>

          {/* Sidebar Area Column (Grid-cols span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <UserProfileCard />
            <WishlistPreview />
            <RecentActivity />
          </div>

        </div>
      </Container>
    </div>
  );
}
