import React from 'react';
import { HelpCenterContent } from '@/components/sections/help/HelpCenterContent';

export const metadata = {
  title: 'Help Center & FAQ | Neutrip',
  description: 'Search Neutrip travel knowledge base for instant answers on bookings, AI planner, vouchers, payments, and safety advisories.',
};

export default function HelpPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <HelpCenterContent />
    </div>
  );
}
