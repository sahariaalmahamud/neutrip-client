'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Container } from '@/components/layout/Container';
import { NotificationsHero } from '@/components/sections/notifications/NotificationsHero';
import { NotificationFilters } from '@/components/sections/notifications/NotificationFilters';
import { NotificationCard } from '@/components/sections/notifications/NotificationCard';
import { EmptyNotifications } from '@/components/sections/notifications/EmptyNotifications';
import {
  NotificationItem,
  NotificationFilterKey,
  MOCK_NOTIFICATIONS,
  NOTIFICATION_STORAGE_KEY,
} from '@/constants/notifications';

function saveToStorage(items: NotificationItem[]) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore quota/security errors
  }
}

export function NotificationList() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<NotificationFilterKey>('all');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(NOTIFICATION_STORAGE_KEY);
      if (raw) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNotifications(JSON.parse(raw) as NotificationItem[]);
      } else {
        localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(MOCK_NOTIFICATIONS));
      }
    } catch {
      // ignore parse errors
    }
  }, []);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleToggleRead = (id: string) => {
    setNotifications((prev) => {
      const updated = prev.map((n) => (n.id === id ? { ...n, isRead: !n.isRead } : n));
      saveToStorage(updated);
      return updated;
    });
  };

  const handleDelete = (id: string) => {
    setNotifications((prev) => {
      const itemToDelete = prev.find((n) => n.id === id);
      const updated = prev.filter((n) => n.id !== id);
      saveToStorage(updated);
      if (itemToDelete) {
        toast.success('Notification removed');
      }
      return updated;
    });
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => {
      const updated = prev.map((n) => ({ ...n, isRead: true }));
      saveToStorage(updated);
      return updated;
    });
    toast.success('All notifications marked as read');
  };

  const handleReset = () => {
    setSearch('');
    setFilter('all');
  };

  const filtered = notifications.filter((n) => {
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.description.toLowerCase().includes(search.toLowerCase());

    let matchesFilter = true;
    if (filter === 'unread') {
      matchesFilter = !n.isRead;
    } else if (filter !== 'all') {
      matchesFilter = n.type === filter;
    }

    return matchesSearch && matchesFilter;
  });

  const hasActiveFilter = search !== '' || filter !== 'all';

  return (
    <>
      <NotificationsHero totalCount={notifications.length} unreadCount={unreadCount} />

      {notifications.length > 0 && (
        <NotificationFilters
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          unreadCount={unreadCount}
          onMarkAllAsRead={handleMarkAllAsRead}
          onReset={handleReset}
          hasActiveFilter={hasActiveFilter}
        />
      )}

      <section className="py-10 px-4 w-full bg-background flex-grow">
        <Container>
          {filtered.length === 0 ? (
            <EmptyNotifications hasActiveFilter={hasActiveFilter} onReset={handleReset} />
          ) : (
            <AnimatePresence mode="popLayout">
              <div className="flex flex-col gap-4">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                  >
                    <NotificationCard
                      notification={item}
                      onToggleRead={handleToggleRead}
                      onDelete={handleDelete}
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          )}
        </Container>
      </section>
    </>
  );
}
