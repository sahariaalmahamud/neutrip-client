export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  homeBase: string;
  memberSince: string;
  bio: string;
  avatar: string;
  coverImage: string;
}

export interface ProfileStat {
  label: string;
  value: string | number;
  iconName: 'compass' | 'globe' | 'leaf';
}

export interface ProfileTrip {
  id: string;
  destination: string;
  dates: string;
  status: 'Confirmed' | 'Completed' | 'Planning';
  image: string;
}

export interface ProfileWishlist {
  id: string;
  name: string;
  country: string;
  rating: number;
  price: number;
  image: string;
}

export const MOCK_PROFILE: ProfileData = {
  name: 'Sarah Jenkins',
  email: 'sarah.j@example.com',
  phone: '+1 (555) 302-8192',
  homeBase: 'San Francisco, USA',
  memberSince: 'March 2026',
  bio: 'Adventure seeker, photography enthusiast, and digital nomad. I love exploring off-the-beaten-path locations and finding local sustainable stays.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
  coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',
};

export const MOCK_PROFILE_STATS: ProfileStat[] = [
  { label: 'Trips Planned', value: 12, iconName: 'compass' },
  { label: 'Countries Visited', value: 5, iconName: 'globe' },
  { label: 'Carbon Offset', value: '320 kg', iconName: 'leaf' },
];

export const MOCK_PROFILE_TRIPS: ProfileTrip[] = [
  {
    id: 'ptrip-1',
    destination: 'Kyoto, Japan',
    dates: 'Oct 12 - Oct 18, 2026',
    status: 'Confirmed',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'ptrip-2',
    destination: 'Ubud, Bali',
    dates: 'June 02 - June 08, 2026',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=80',
  },
];

export const MOCK_PROFILE_WISHLIST: ProfileWishlist[] = [
  {
    id: 'pwish-1',
    name: 'Santorini',
    country: 'Greece',
    rating: 4.8,
    price: 1350,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&auto=format&fit=crop&q=80',
  },
  {
    id: 'pwish-2',
    name: 'Zermatt',
    country: 'Switzerland',
    rating: 4.9,
    price: 1450,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&auto=format&fit=crop&q=80',
  },
];
