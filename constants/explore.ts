export interface DestinationHighlights {
  bestSeason: string;
  duration: string;
  language: string;
  currency: string;
  transport: string;
}

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
  highlights: DestinationHighlights;
  gallery: string[];
  included: string[];
  notIncluded: string[];
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
    highlights: {
      bestSeason: 'Spring & Fall',
      duration: '5 - 7 Days',
      language: 'French',
      currency: 'Euro (€)',
      transport: 'Metro & Walking',
    },
    gallery: [
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Hotel stay (4-star Double Room)',
      'Daily buffet continental breakfast',
      'Skip-the-line Louvre Museum ticket',
      'Seine River dinner cruise ticket',
      'Local airport transit shuttles',
    ],
    notIncluded: [
      'International flight tickets',
      'Luncheons & standard dinners',
      'Optional excursion additions',
      'Personal travel insurance policies',
    ],
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
    highlights: {
      bestSeason: 'Spring & Autumn',
      duration: '4 - 6 Days',
      language: 'Japanese',
      currency: 'Yen (¥)',
      transport: 'Bus & Subway',
    },
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Ryokan traditional inn stay',
      'Authentic Kaiseki multi-course dinner',
      'Guided Fushimi Inari shrine tour',
      'Tea ceremony experience tickets',
      'Pocket Wi-Fi device rental',
    ],
    notIncluded: [
      'Flight transit fares',
      'Subway card top-up balances',
      'Personal shopping & souvenirs',
      'Travel medical coverage services',
    ],
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
    highlights: {
      bestSeason: 'April - October',
      duration: '7 - 10 Days',
      language: 'Indonesian',
      currency: 'Rupiah (IDR)',
      transport: 'Private Car & Scooter',
    },
    gallery: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Eco-lodge double villa stay',
      'Daily morning yoga & breakfast',
      'Guided rice terrace trekking tour',
      'Private driver for 3 excursions',
      'Snorkeling gear equipment rental',
    ],
    notIncluded: [
      'International visa fees',
      'Massage/Spa optional upgrades',
      'Daily lunch & dinners',
      'Tips for local tour drivers',
    ],
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
    highlights: {
      bestSeason: 'Spring & Autumn',
      duration: '3 - 5 Days',
      language: 'Italian',
      currency: 'Euro (€)',
      transport: 'Metro & Walking',
    },
    gallery: [
      'https://images.unsplash.com/photo-1515542690876-879e0a5ea2fa?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529260830199-4455b97c5d9f?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Centrally located boutique hotel',
      'Colosseum skip-the-line access',
      'Guided Vatican museum tour',
      'Handmade pasta cooking class',
      'City tourism pass card',
    ],
    notIncluded: [
      'Flight booking costs',
      'Dinner meals (except cooking class)',
      'Local municipal city tax fees',
      'Personal tour expenses',
    ],
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
    highlights: {
      bestSeason: 'December - April',
      duration: '4 - 7 Days',
      language: 'German & French',
      currency: 'Swiss Franc (CHF)',
      transport: 'Electric Taxi & Gondola',
    },
    gallery: [
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486916856992-e4db22c8df33?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Chalet lodging stay',
      'Daily breakfast & hot spa pass',
      'Standard ski equipment rental',
      'Gornergrat cog railway return ticket',
      'Guided alpine hike safety leader',
    ],
    notIncluded: [
      'Ski lift seasonal passes',
      'Evening dinner outings',
      'Transit from Zurich airport',
      'Ski instruction school fees',
    ],
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
    highlights: {
      bestSeason: 'May - October',
      duration: '3 - 5 Days',
      language: 'Greek',
      currency: 'Euro (€)',
      transport: 'Bus & ATV rental',
    },
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1469796466635-455ede028ca2?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Cliffside white villa stay',
      'Infinity pool privileges & breakfast',
      'Volcanic caldera sailing cruise',
      'Local wine tasting vineyard tour',
      'Port/Airport transfer services',
    ],
    notIncluded: [
      'Meals not outlined in cruise',
      'ATV/Scooter daily hire rates',
      'Tips for sailing crew members',
      'Travel flight transit fares',
    ],
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
    highlights: {
      bestSeason: 'September - November',
      duration: '5 - 7 Days',
      language: 'English',
      currency: 'US Dollar ($)',
      transport: 'Subway & Yellow Cab',
    },
    gallery: [
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1532960401447-7dd05bef20b0?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Manhattan downtown hotel room',
      'Broadway show ticket booking',
      'Empire State Building deck ticket',
      'Metropolitan Museum pass',
      'Unlimited 7-day Subway pass',
    ],
    notIncluded: [
      'Air travel flights',
      'Standard dining bills & tips',
      'Central park carriage rides',
      'Valet luggage transfer services',
    ],
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
    highlights: {
      bestSeason: 'June - August',
      duration: '4 - 6 Days',
      language: 'Icelandic',
      currency: 'Krona (ISK)',
      transport: 'Bus & Car Rental',
    },
    gallery: [
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508873696983-2df519f0397e?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1504893524553-ac55fce69cbf?w=600&auto=format&fit=crop&q=80',
    ],
    included: [
      'Eco-hotel double room lodging',
      'Daily hot breakfast buffet',
      'Blue Lagoon geothermal entry pass',
      'Northern lights guided bus excursion',
      'Golden Circle day route tour guide',
    ],
    notIncluded: [
      'International flights',
      'Rental vehicle gasoline refuels',
      'Lunch & evening dinners',
      'Dry-suit scuba diving upgrades',
    ],
  },
];
