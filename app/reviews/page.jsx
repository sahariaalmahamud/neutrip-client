import React from 'react';
import { ReviewList } from '@/components/sections/reviews/ReviewList';

export const metadata = {
  title: 'Reviews & Ratings | Neutrip',
  description: 'Explore verified traveler reviews, ratings, and authentic stories across Neutrip global destinations.',
};

export default function ReviewsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background pb-16">
      <ReviewList />
    </div>
  );
}
