import React from 'react';
import { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { ProfileHeader } from '@/components/sections/profile/ProfileHeader';
import { PersonalInfo } from '@/components/sections/profile/PersonalInfo';
import { ProfileStats } from '@/components/sections/profile/ProfileStats';
import { RecentTrips } from '@/components/sections/profile/RecentTrips';
import { ProfileWishlist } from '@/components/sections/profile/ProfileWishlist';

export const metadata: Metadata = {
  title: 'My Profile | Neutrip',
  description: 'View your Neutrip traveler profile, travel statistics, recent trips, and wishlist destinations.',
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16 pt-20">
      <Container className="flex flex-col gap-6 relative z-10">
        <ProfileHeader />
        <ProfileStats />
        <PersonalInfo />
        <RecentTrips />
        <ProfileWishlist />
      </Container>
    </div>
  );
}
