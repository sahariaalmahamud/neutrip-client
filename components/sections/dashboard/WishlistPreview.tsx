import React from 'react';
import { MOCK_WISHLIST } from '@/constants/dashboard';
import { Card } from '@heroui/react';
import { FiStar, FiMapPin, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

export function WishlistPreview() {
  return (
    <div className="flex flex-col gap-4 text-left w-full">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-base text-foreground">Wishlist Preview</h3>
        <Link
          href="/explore"
          className="text-xs font-semibold text-primary hover:text-accent flex items-center gap-0.5 transition-colors duration-200"
        >
          View All
          <FiArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <Card className="glass-card p-4.5 border border-border/80 rounded-2xl bg-surface/30">
        <div className="flex flex-col gap-4">
          {MOCK_WISHLIST.map((item) => (
            <div key={item.id} className="flex gap-3 group items-center">
              {/* Thumbnail image */}
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Text info */}
              <div className="flex-grow text-left">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-0.5 text-accent">
                    <FiStar className="w-3 h-3 fill-accent stroke-accent" />
                    <span className="text-[10px] font-bold text-foreground">{item.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-muted">
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-3 h-3 text-primary" />
                    {item.country}
                  </span>
                  <span className="font-bold text-foreground/90">${item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
