import React from 'react';
import { MOCK_PROFILE_WISHLIST } from '@/constants/profile';
import { Card } from '@heroui/react';
import { FiStar, FiMapPin } from 'react-icons/fi';

export function ProfileWishlist() {
  return (
    <div className="flex flex-col gap-4 text-left w-full">
      <h3 className="font-bold text-base text-foreground">My Wishlist</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {MOCK_PROFILE_WISHLIST.map((item) => (
          <Card
            key={item.id}
            className="glass-card border border-border/80 rounded-2xl overflow-hidden text-left bg-surface/30 flex flex-col h-auto transition-all duration-300 hover:border-primary/20"
          >
            {/* Cover image */}
            <div className="h-32 w-full relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 z-10 flex items-center gap-0.5 bg-background/80 border border-border px-2 py-0.5 rounded-full backdrop-blur-md text-[9px] font-bold text-foreground">
                <FiStar className="w-2.5 h-2.5 fill-accent stroke-accent" />
                {item.rating}
              </div>
            </div>

            {/* Info panel */}
            <div className="p-4 flex flex-col justify-between flex-grow gap-2">
              <div>
                <h4 className="font-extrabold text-sm text-foreground">
                  {item.name}
                </h4>
                <span className="text-[10px] text-muted flex items-center gap-1 mt-1">
                  <FiMapPin className="w-3 h-3 text-primary flex-shrink-0" />
                  {item.country}
                </span>
              </div>
              
              <div className="flex justify-between items-center pt-2.5 border-t border-border/40 mt-1">
                <span className="text-[10px] text-muted">Starting from</span>
                <span className="text-xs font-black text-primary">${item.price}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
