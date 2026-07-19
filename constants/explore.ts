export interface ExploreDestination {
  id: string;
  name: string;
  country: string;
  rating: number;
  price: number;
  image: string;
  category: 'beaches' | 'mountains' | 'cultural' | 'cities';
  tags: string[];
  description: string;
}

export const EXPLORE_CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'beaches', label: 'Beaches' },
  { value: 'mountains', label: 'Mountains' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'cities', label: 'Cities' },
] as const;

export const EXPLORE_DESTINATIONS: ExploreDestination[] = [
  {
    id: 'exp-dest-1',
    name: 'Paris',
    country: 'France',
    rating: 4.8,
    price: 1250,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80',
    category: 'cities',
    tags: ['Culture', 'Romantic', 'Museums'],
    description: 'The city of light and romance, famous for historical architecture, fashion houses, and classical art museums.',
  },
  {
    id: 'exp-dest-2',
    name: 'Kyoto',
    country: 'Japan',
    rating: 4.9,
    price: 1450,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    category: 'cultural',
    tags: ['Historic', 'Temples', 'Gardens'],
    description: 'Ancient capital of Japan, famous for traditional wooden houses, golden shrines, bamboo groves, and zen temples.',
  },
  {
    id: 'exp-dest-3',
    name: 'Bali',
    country: 'Indonesia',
    rating: 4.7,
    price: 890,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80',
    category: 'beaches',
    tags: ['Tropical', 'Surfing', 'Wellness'],
    description: 'A paradise island renowned for forested volcanic mountains, iconic rice paddies, beaches, and coral reefs.',
  },
  {
    id: 'exp-dest-4',
    name: 'Rome',
    country: 'Italy',
    rating: 4.8,
    price: 1100,
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=80',
    category: 'cultural',
    tags: ['Historic', 'Colosseum', 'Dining'],
    description: 'A sprawling city filled with almost 3,000 years of globally influential art, architecture, and ruins.',
  },
  {
    id: 'exp-dest-5',
    name: 'Zermatt',
    country: 'Switzerland',
    rating: 4.9,
    price: 1650,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80',
    category: 'mountains',
    tags: ['Skiing', 'Adventure', 'Alps'],
    description: 'Famed mountain resort town lying below the iconic, pyramid-shaped Matterhorn peak, offering world-class skiing.',
  },
  {
    id: 'exp-dest-6',
    name: 'Santorini',
    country: 'Greece',
    rating: 4.8,
    price: 1350,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=80',
    category: 'beaches',
    tags: ['Coastal', 'Sunsets', 'Luxury'],
    description: 'One of the Cyclades islands in the Aegean Sea, devastated by a volcanic eruption in the 16th century BC.',
  },
  {
    id: 'exp-dest-7',
    name: 'New York City',
    country: 'USA',
    rating: 4.6,
    price: 1500,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=80',
    category: 'cities',
    tags: ['Urban', 'Broadway', 'Shopping'],
    description: 'Comprising 5 boroughs sitting where the Hudson River meets the Atlantic, home to globally recognizable sights.',
  },
  {
    id: 'exp-dest-8',
    name: 'Reykjavik',
    country: 'Iceland',
    rating: 4.7,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?w=600&auto=format&fit=crop&q=80',
    category: 'mountains',
    tags: ['Nature', 'Aurora', 'HotSprings'],
    description: 'Coastal capital city of Iceland, home to the National and Saga museums, tracing Iceland’s Viking history.',
  },
];
