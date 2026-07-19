export type WishlistCategory = 'beaches' | 'mountains' | 'cultural' | 'cities';

export interface WishlistItem {
  id: string;
  destinationId: string;
  name: string;
  country: string;
  category: WishlistCategory;
  rating: number;
  startingPrice: number;
  image: string;
  shortDescription: string;
  savedAt: string; // ISO date string
}

export const WISHLIST_CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'beaches', label: 'Beaches' },
  { value: 'mountains', label: 'Mountains' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'cities', label: 'Cities' },
] as const;

export const SORT_OPTIONS = [
  { value: 'savedAt', label: 'Recently Saved' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price', label: 'Lowest Price' },
] as const;

export type WishlistSortKey = typeof SORT_OPTIONS[number]['value'];

export const MOCK_WISHLIST: WishlistItem[] = [
  {
    id: 'wl-1',
    destinationId: 'exp-dest-1',
    name: 'Santorini',
    country: 'Greece',
    category: 'beaches',
    rating: 4.9,
    startingPrice: 1350,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Iconic white-washed villages perched above the caldera, offering world-class sunsets and crystal-clear Aegean waters.',
    savedAt: '2026-07-15T10:30:00Z',
  },
  {
    id: 'wl-2',
    destinationId: 'exp-dest-2',
    name: 'Zermatt',
    country: 'Switzerland',
    category: 'mountains',
    rating: 4.8,
    startingPrice: 1450,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Car-free alpine village beneath the Matterhorn, a paradise for skiers and hikers with breathtaking panoramic trails.',
    savedAt: '2026-07-12T08:15:00Z',
  },
  {
    id: 'wl-3',
    destinationId: 'exp-dest-3',
    name: 'Kyoto',
    country: 'Japan',
    category: 'cultural',
    rating: 4.9,
    startingPrice: 1180,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Japan\'s ancient capital boasting thousands of temples, traditional tea houses, and vibrant autumn foliage.',
    savedAt: '2026-07-10T14:00:00Z',
  },
  {
    id: 'wl-4',
    destinationId: 'exp-dest-4',
    name: 'Lisbon',
    country: 'Portugal',
    category: 'cities',
    rating: 4.7,
    startingPrice: 980,
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Sun-drenched city of seven hills with colorful trams, Moorish castles, and legendary fado music echoing through cobblestone streets.',
    savedAt: '2026-07-08T09:45:00Z',
  },
  {
    id: 'wl-5',
    destinationId: 'exp-dest-5',
    name: 'Ubud',
    country: 'Bali, Indonesia',
    category: 'cultural',
    rating: 4.8,
    startingPrice: 850,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'The cultural heart of Bali with lush rice terraces, Hindu temples, world-class wellness retreats and traditional dance performances.',
    savedAt: '2026-07-05T16:20:00Z',
  },
  {
    id: 'wl-6',
    destinationId: 'exp-dest-6',
    name: 'Patagonia',
    country: 'Argentina',
    category: 'mountains',
    rating: 4.9,
    startingPrice: 1620,
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&auto=format&fit=crop&q=80',
    shortDescription: 'Dramatic landscapes of glaciers, granite peaks, and windswept steppes at the end of the world, a bucket-list trekking destination.',
    savedAt: '2026-07-01T11:00:00Z',
  },
];

export const WISHLIST_STORAGE_KEY = 'neutrip_wishlist';
