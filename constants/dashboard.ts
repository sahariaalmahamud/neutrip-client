export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  homeBase: string;
  memberSince: string;
}

export interface TravelStat {
  label: string;
  value: string | number;
  iconName: 'compass' | 'globe' | 'leaf' | 'heart';
  description: string;
}

export interface UpcomingTrip {
  id: string;
  destination: string;
  dateRange: string;
  status: 'Confirmed' | 'Planning';
  progress: number;
  image: string;
  description: string;
}

export interface RecentBooking {
  id: string;
  serviceName: string;
  bookingDate: string;
  price: number;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
}

export interface WishlistItem {
  id: string;
  name: string;
  country: string;
  rating: number;
  price: number;
  image: string;
}

export interface ActivityLog {
  id: string;
  text: string;
  timeAgo: string;
}

export const MOCK_USER: UserProfile = {
  name: 'Sarah Jenkins',
  email: 'sarah.j@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  homeBase: 'San Francisco, USA',
  memberSince: 'March 2026',
};

export const MOCK_STATS: TravelStat[] = [
  {
    label: 'Trips Planned',
    value: 12,
    iconName: 'compass',
    description: 'Custom AI plans generated',
  },
  {
    label: 'Countries Visited',
    value: 5,
    iconName: 'globe',
    description: 'Global countries explored',
  },
  {
    label: 'Carbon Offset',
    value: '320 kg',
    iconName: 'leaf',
    description: 'Estimated eco-transit savings',
  },
  {
    label: 'Wishlisted Spots',
    value: 6,
    iconName: 'heart',
    description: 'Destinations saved to favorites',
  },
];

export const MOCK_UPCOMING_TRIPS: UpcomingTrip[] = [
  {
    id: 'trip-1',
    destination: 'Kyoto, Japan',
    dateRange: 'Oct 12 - Oct 18, 2026',
    status: 'Confirmed',
    progress: 85,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    description: 'Cultural tour exploring gold temples, zen rock gardens, traditional ryokan tea rooms, and forest treks.',
  },
  {
    id: 'trip-2',
    destination: 'Zermatt, Switzerland',
    dateRange: 'Dec 20 - Dec 26, 2026',
    status: 'Planning',
    progress: 40,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80',
    description: 'Alpine ski resort vacation visiting the Gornergrat observatory and Klein Matterhorn Glacier Ice Palace.',
  },
];

export const MOCK_BOOKINGS: RecentBooking[] = [
  {
    id: 'bk-1',
    serviceName: 'Louvre Museum Skip-Line Access',
    bookingDate: 'July 15, 2026',
    price: 45,
    status: 'Confirmed',
  },
  {
    id: 'bk-2',
    serviceName: 'Seine River Sunset Dinner Cruise',
    bookingDate: 'July 16, 2026',
    price: 95,
    status: 'Confirmed',
  },
  {
    id: 'bk-3',
    serviceName: 'Ubud Geothermal Spa Day Pass',
    bookingDate: 'June 02, 2026',
    price: 30,
    status: 'Completed',
  },
];

export const MOCK_WISHLIST: WishlistItem[] = [
  {
    id: 'wish-1',
    name: 'Santorini',
    country: 'Greece',
    rating: 4.8,
    price: 1350,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'wish-2',
    name: 'Bali',
    country: 'Indonesia',
    rating: 4.7,
    price: 890,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&auto=format&fit=crop&q=80',
  },
];

export const MOCK_ACTIVITIES: ActivityLog[] = [
  {
    id: 'act-1',
    text: 'Generated a 5-day Kyoto cultural itinerary plan',
    timeAgo: '2 hours ago',
  },
  {
    id: 'act-2',
    text: 'Booked Seine River dinner cruise voucher',
    timeAgo: '1 day ago',
  },
  {
    id: 'act-3',
    text: 'Added Santorini, Greece to your wishlist board',
    timeAgo: '3 days ago',
  },
  {
    id: 'act-4',
    text: 'Created Neutrip travel account profile',
    timeAgo: '5 days ago',
  },
];
