'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import { FiStar, FiCheckCircle, FiMapPin, FiEdit2, FiTrash2 } from 'react-icons/fi';
import { cn } from '@/utils/cn';

function formatDate(isoString) {
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return isoString;
  }
}

export function ReviewCard({ review, onEdit, onDelete }) {
  return (
    <Card className="glass-card p-6 rounded-2xl border border-border/80 bg-surface/40 hover:border-primary/40 transition-all duration-300 shadow-card flex flex-col gap-4 text-left">
      
      {/* Header: User Avatar + Name + Verified Badge + Destination */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={review.userAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'}
            alt={review.userName}
            className="w-11 h-11 rounded-full object-cover border border-primary/30"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-sm text-foreground">{review.userName}</h3>
              {review.verified && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <FiCheckCircle className="w-3 h-3" />
                  Verified
                </span>
              )}
            </div>
            <span className="text-[11px] text-muted/80 block mt-0.5" suppressHydrationWarning>
              {formatDate(review.createdAt)}
            </span>
          </div>
        </div>

        {/* Destination Pill */}
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
          <FiMapPin className="w-3 h-3" />
          {review.destinationName}
        </span>
      </div>

      {/* Star Rating & Title */}
      <div>
        <div className="flex items-center gap-1 mb-1.5 text-accent">
          {[1, 2, 3, 4, 5].map((star) => (
            <FiStar
              key={star}
              className={cn(
                'w-4 h-4',
                star <= review.rating ? 'fill-accent text-accent' : 'text-border'
              )}
            />
          ))}
          <span className="text-xs font-bold text-foreground ml-1.5">{review.rating}.0</span>
        </div>

        <h4 className="font-bold text-base text-foreground mb-1 leading-snug">
          {review.title}
        </h4>
        
        <p className="text-xs md:text-sm text-muted leading-relaxed">
          {review.comment}
        </p>
      </div>

      {/* Footer: User controls if owned */}
      {review.isUserOwned && (
        <div className="flex items-center justify-end gap-2 pt-3 border-t border-border/40 mt-1">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onEdit(review)}
            className="h-8 px-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold cursor-pointer border border-primary/20 flex items-center gap-1"
          >
            <FiEdit2 className="w-3.5 h-3.5" />
            Edit
          </Button>

          <Button
            size="sm"
            variant="ghost"
            onClick={() => onDelete(review.id)}
            className="h-8 px-3 rounded-xl bg-danger/10 hover:bg-danger/20 text-danger text-xs font-semibold cursor-pointer border border-danger/20 flex items-center gap-1"
          >
            <FiTrash2 className="w-3.5 h-3.5" />
            Delete
          </Button>
        </div>
      )}

    </Card>
  );
}
