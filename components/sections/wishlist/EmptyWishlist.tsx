import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiHeart, FiCompass } from 'react-icons/fi';
import Link from 'next/link';

export function EmptyWishlist() {
  return (
    <div className="flex-grow flex items-center justify-center py-20 px-4 w-full">
      <Card className="glass-card p-10 max-w-md w-full mx-auto border border-border/80 text-center flex flex-col items-center gap-5 bg-surface/30 rounded-3xl">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
          <FiHeart className="w-7 h-7" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl text-foreground tracking-tight">
            No Saved Destinations
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            You haven&apos;t added any destinations to your wishlist yet. Explore our catalog and save the ones that inspire you.
          </p>
        </div>

        <Link href="/explore" className="w-full">
          <Button className="w-full h-11 rounded-xl bg-primary text-background font-semibold hover:opacity-90 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
            <FiCompass className="w-4 h-4" />
            Explore Destinations
          </Button>
        </Link>
      </Card>
    </div>
  );
}
