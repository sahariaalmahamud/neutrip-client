'use client';

import React from 'react';
import { Card, Button } from '@heroui/react';
import {
  FiCheckCircle,
  FiTrash2,
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiHeart,
  FiZap,
  FiTag,
  FiShield,
  FiMail,
} from 'react-icons/fi';
import Link from 'next/link';
import { NotificationItem, NotificationType } from '@/constants/notifications';
import { cn } from '@/utils/cn';

interface NotificationCardProps {
  notification: NotificationItem;
  onToggleRead: (id: string) => void;
  onDelete: (id: string) => void;
}

function getTypeBadgeDetails(type: NotificationType) {
  switch (type) {
    case 'Booking':
      return {
        icon: FiCalendar,
        color: 'text-primary bg-primary/10 border-primary/20',
      };
    case 'AI Planner':
      return {
        icon: FiZap,
        color: 'text-accent bg-accent/10 border-accent/20',
      };
    case 'Offer':
      return {
        icon: FiTag,
        color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      };
    case 'Safety':
      return {
        icon: FiShield,
        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      };
    case 'Wishlist':
      return {
        icon: FiHeart,
        color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      };
    case 'Reminder':
    default:
      return {
        icon: FiClock,
        color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      };
  }
}

function formatDate(isoString: string): string {
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return isoString;
  }
}

export function NotificationCard({ notification, onToggleRead, onDelete }: NotificationCardProps) {
  const { icon: TypeIcon, color: badgeColor } = getTypeBadgeDetails(notification.type);

  return (
    <Card
      className={cn(
        'group flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-2xl border transition-all duration-300 gap-4 text-left shadow-card',
        notification.isRead
          ? 'bg-surface/30 border-border/60 opacity-80 hover:opacity-100 hover:border-border'
          : 'bg-surface/80 border-primary/40 shadow-primary/5 hover:border-primary/60'
      )}
    >
      {/* Left section: Icon + Content */}
      <div className="flex items-start gap-4 flex-1">
        {/* Type Icon Badge */}
        <div
          className={cn(
            'w-11 h-11 rounded-xl flex items-center justify-center border flex-shrink-0 mt-0.5',
            badgeColor
          )}
        >
          <TypeIcon className="w-5 h-5" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={cn(
                'text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border',
                badgeColor
              )}
            >
              {notification.type}
            </span>

            {!notification.isRead && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                New
              </span>
            )}

            <span className="text-[11px] text-muted/70 ml-auto md:ml-0" suppressHydrationWarning>
              {formatDate(notification.createdAt)}
            </span>
          </div>

          <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-200">
            {notification.title}
          </h3>

          <p className="text-xs text-muted mt-1 leading-relaxed">
            {notification.description}
          </p>
        </div>
      </div>

      {/* Right section: Action Buttons */}
      <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-border/40 w-full md:w-auto justify-end">
        {notification.actionLink && (
          <Link href={notification.actionLink}>
            <Button
              size="sm"
              variant="ghost"
              className="rounded-xl border border-border bg-background hover:bg-surface hover:border-primary/50 hover:text-primary text-foreground text-xs font-semibold cursor-pointer h-9 px-3 transition-all duration-200 flex items-center gap-1 group/btn"
            >
              View
              <FiArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </Button>
          </Link>
        )}

        <Button
          size="sm"
          variant="ghost"
          onClick={() => onToggleRead(notification.id)}
          aria-label={notification.isRead ? 'Mark as unread' : 'Mark as read'}
          className={cn(
            'h-9 px-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all duration-200',
            notification.isRead
              ? 'bg-surface/50 border-border/60 text-muted hover:text-foreground'
              : 'bg-primary/10 border-primary/20 text-primary hover:bg-primary/20'
          )}
        >
          {notification.isRead ? (
            <FiMail className="w-4 h-4" />
          ) : (
            <FiCheckCircle className="w-4 h-4" />
          )}
        </Button>

        <Button
          size="sm"
          variant="ghost"
          onClick={() => onDelete(notification.id)}
          aria-label="Delete notification"
          className="h-9 px-2.5 rounded-xl bg-danger/10 hover:bg-danger/20 text-danger border border-danger/20 text-xs font-medium cursor-pointer transition-all duration-200"
        >
          <FiTrash2 className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
