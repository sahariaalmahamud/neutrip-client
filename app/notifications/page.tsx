import React from 'react';
import { Metadata } from 'next';
import { NotificationList } from '@/components/sections/notifications/NotificationList';

export const metadata: Metadata = {
  title: 'Notifications | Neutrip',
  description: 'Stay updated on your Neutrip bookings, itinerary updates, price drop alerts, and safety advisories.',
};

export default function NotificationsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <NotificationList />
    </div>
  );
}
