import React from 'react';
import { Metadata } from 'next';
import { DestinationsCatalog } from '@/components/sections/destination/DestinationsCatalog';

export const metadata: Metadata = {
  title: 'Destinations Catalog | Neutrip',
  description: 'Browse all curated global destinations, luxury stays, cultural hubs, and scenic retreats on Neutrip.',
};

export default function DestinationsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <DestinationsCatalog />
    </div>
  );
}
