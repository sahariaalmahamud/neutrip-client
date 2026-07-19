export interface Destination {
  id: string;
  name: string;
  country: string;
  rating: number;
  price: number;
  image: string;
  tag: string;
}

export interface Experience {
  id: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  price: number;
  image: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  destinationTag: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'cpu' | 'compass' | 'users' | 'shield';
}

export interface ItineraryNode {
  id: string;
  time: string;
  activity: string;
  location: string;
  type: 'food' | 'culture' | 'sightseeing' | 'leisure' | 'dining';
  duration: string;
}

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    id: 'dest-1',
    name: 'Paris',
    country: 'France',
    rating: 4.8,
    price: 1250,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80',
    tag: 'Romantic',
  },
  {
    id: 'dest-2',
    name: 'Kyoto',
    country: 'Japan',
    rating: 4.9,
    price: 1450,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    tag: 'Cultural',
  },
  {
    id: 'dest-3',
    name: 'Bali',
    country: 'Indonesia',
    rating: 4.7,
    price: 890,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80',
    tag: 'Tropical',
  },
  {
    id: 'dest-4',
    name: 'Rome',
    country: 'Italy',
    rating: 4.8,
    price: 1100,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=80',
    tag: 'Historical',
  },
];

export const FEATURED_EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    title: 'Amalfi Coast Catamaran Sailing',
    location: 'Amalfi, Italy',
    duration: 'Full Day',
    rating: 4.9,
    reviewsCount: 312,
    price: 145,
    image: 'https://images.unsplash.com/photo-1505080856163-267d49b30626?w=600&auto=format&fit=crop&q=80',
    tag: 'Adventure',
  },
  {
    id: 'exp-2',
    title: 'Swiss Alps Sunrise Trekking',
    location: 'Zermatt, Switzerland',
    duration: '5 Hours',
    rating: 4.8,
    reviewsCount: 184,
    price: 95,
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&auto=format&fit=crop&q=80',
    tag: 'Nature',
  },
  {
    id: 'exp-3',
    title: 'Kyoto Hidden Temples & Food Crawl',
    location: 'Kyoto, Japan',
    duration: '4 Hours',
    rating: 4.9,
    reviewsCount: 428,
    price: 75,
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&auto=format&fit=crop&q=80',
    tag: 'Gastronomy',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'why-1',
    title: 'Hyper-Personalized AI Plans',
    description: 'Our advanced travel model analyzes millions of flight routes, hotel reviews, and local experiences to compile plans mapped exactly to your mood.',
    iconName: 'cpu',
  },
  {
    id: 'why-2',
    title: 'Sustainable Eco-Routing',
    description: 'Find paths that minimize your environmental footprints, prioritizing train linkages, fuel-efficient flights, and green hotels.',
    iconName: 'compass',
  },
  {
    id: 'why-3',
    title: 'Vetted Local Guides & Stays',
    description: 'We connect directly with local communities to catalog experiences you cannot locate on standard travel aggregate portals.',
    iconName: 'users',
  },
  {
    id: 'why-4',
    title: '24/7 Smart Safety Alerts',
    description: 'Receive immediate notifications regarding weather alerts, transit delays, or local policy changes directly to your dashboard.',
    iconName: 'shield',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The AI Trip Planner created a completely customized 10-day itinerary for my Kyoto trip in under 30 seconds. Every single recommendation was spot on!',
    destinationTag: 'Kyoto, Japan',
  },
  {
    id: 'test-2',
    name: 'Marcus Chen',
    role: 'Travel Journalist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'I travel for a living, and Neutrip has quickly become my go-to planning companion. The combination of carbon footprint calculators and local food crawls is unmatched.',
    destinationTag: 'Amalfi Coast, Italy',
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    role: 'Wildlife Photographer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The real-time transit alerts saved me from a major flight cancellation delay in Geneva. Absolutely essential tool for any serious traveler.',
    destinationTag: 'Swiss Alps',
  },
];

export const MOCK_AI_ITINERARY: ItineraryNode[] = [
  {
    id: 'node-1',
    time: '09:00 AM',
    activity: 'Espresso & Pastries at Kyoto Roast',
    location: 'Higashiyama Ward',
    type: 'food',
    duration: '45 mins',
  },
  {
    id: 'node-2',
    time: '10:30 AM',
    activity: 'Kiyomizu-dera Temple VIP Guided Tour',
    location: 'Otowa Mountain',
    type: 'culture',
    duration: '2 hours',
  },
  {
    id: 'node-3',
    time: '01:00 PM',
    activity: 'Traditional Soba Lunch overlooking gardens',
    location: 'Sano Restaurant',
    type: 'dining',
    duration: '1 hour',
  },
  {
    id: 'node-4',
    time: '02:30 PM',
    activity: 'Bamboo Grove Forest Stroll',
    location: 'Arashiyama District',
    type: 'leisure',
    duration: '1.5 hours',
  },
  {
    id: 'node-5',
    time: '04:30 PM',
    activity: 'Hozugawa River Cruise Scenic Drift',
    location: 'Kameoka Bridge',
    type: 'sightseeing',
    duration: '2 hours',
  },
];
