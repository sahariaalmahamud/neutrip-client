export type NotificationType = 'Booking' | 'Reminder' | 'Wishlist' | 'AI Planner' | 'Offer' | 'Safety';

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  type: NotificationType;
  isRead: boolean;
  createdAt: string; // ISO date string
  actionLink?: string;
}

export const NOTIFICATION_STORAGE_KEY = 'neutrip_notifications';

export const NOTIFICATION_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'unread', label: 'Unread' },
  { value: 'Booking', label: 'Booking' },
  { value: 'AI Planner', label: 'Planner' },
  { value: 'Offer', label: 'Offers' },
] as const;

export type NotificationFilterKey = typeof NOTIFICATION_FILTERS[number]['value'];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Booking Confirmed: Seine River Sunset Cruise',
    description: 'Your voucher for the Paris dinner cruise is confirmed. Tap to view your access tickets.',
    type: 'Booking',
    isRead: false,
    createdAt: '2026-07-20T07:30:00Z',
    actionLink: '/booking',
  },
  {
    id: 'notif-2',
    title: 'AI Travel Itinerary Ready: Kyoto 5-Day Tour',
    description: 'Your personalized Kyoto cultural plan has been generated with temple tours and tea experiences.',
    type: 'AI Planner',
    isRead: false,
    createdAt: '2026-07-19T14:15:00Z',
    actionLink: '/ai-planner',
  },
  {
    id: 'notif-3',
    title: 'Price Drop Alert: Santorini Hotel Package',
    description: 'Starting price for Santorini luxury Caldera suites dropped by 15% for September dates.',
    type: 'Offer',
    isRead: false,
    createdAt: '2026-07-18T11:00:00Z',
    actionLink: '/explore',
  },
  {
    id: 'notif-4',
    title: 'Weather & Safety Advisory: Alpine Altitude Trek',
    description: 'Zermatt mountain trails updated weather forecast: clear skies expected over Matterhorn peaks.',
    type: 'Safety',
    isRead: true,
    createdAt: '2026-07-17T09:45:00Z',
    actionLink: '/explore',
  },
  {
    id: 'notif-5',
    title: 'Wishlist Item Update: Ubud Rice Terraces',
    description: 'Your saved destination Ubud added 3 new eco-resort guided experiences to catalog.',
    type: 'Wishlist',
    isRead: true,
    createdAt: '2026-07-15T16:20:00Z',
    actionLink: '/wishlist',
  },
  {
    id: 'notif-6',
    title: 'Upcoming Trip Reminder: Pack for Kyoto',
    description: 'Your departure for Kyoto is in 85 days. Check recommended packing items and passport validity.',
    type: 'Reminder',
    isRead: true,
    createdAt: '2026-07-12T10:00:00Z',
    actionLink: '/dashboard',
  },
];
