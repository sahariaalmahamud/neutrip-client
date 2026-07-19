import React from 'react';
import { Metadata } from 'next';
import { WishlistGrid } from '@/components/sections/wishlist/WishlistGrid';

export const metadata: Metadata = {
  title: 'My Wishlist | Neutrip',
  description: 'Browse your saved Neutrip destinations. Filter, sort, and remove items from your personal travel wishlist.',
};

export default function WishlistPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <WishlistGrid />
    </div>
  );
}
