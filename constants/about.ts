export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: 'cpu' | 'leaf' | 'shield';
}

export const ABOUT_HERO_DATA = {
  title: 'Reimagining Travel with AI',
  subtitle: 'We combine machine learning algorithms with sustainable offset options to curate customized, premium global journeys.',
};

export const MISSION_VISION_DATA = {
  mission: {
    title: 'Our Mission',
    text: 'To empower global travelers to design customized, eco-conscious adventures effortlessly through our advanced AI planner, making sustainable exploration a baseline option.',
  },
  vision: {
    title: 'Our Vision',
    text: 'A world where planning travel is completely frictionless, carbon offsets are transparently accounted for, and every journey positively impacts local communities.',
  },
};

export const MOCK_VALUES: ValueCard[] = [
  {
    title: 'Intelligent Planning',
    description: 'Our custom-trained travel models analyze thousands of variables to design optimal itineraries instantly, adjusting routes for local timing, weather, and styles.',
    iconName: 'cpu',
  },
  {
    title: 'Eco-Conscious Focus',
    description: 'We track transit carbon footprints and highlight green activities, local rail routes, and eco-certified lodging to reduce global travel impact.',
    iconName: 'leaf',
  },
  {
    title: 'Full Transparency',
    description: 'No hidden booking markups or blackbox algorithms. What you see—prices, ratings, offsets, schedules—is exactly what you get.',
    iconName: 'shield',
  },
];

export const MOCK_TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    bio: 'Former travel strategist and sustainability advocate. Sarah believes machine learning holds the key to making travel eco-conscious and frictionless.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 'team-2',
    name: 'Alex Mercer',
    role: 'Lead AI Architect',
    bio: 'Lead neural networks engineer. Alex curates the multi-agent pathfinding systems powering Neutrip\'s custom dynamic itinerary generator.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    socials: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 'team-3',
    name: 'Elena Rostova',
    role: 'Chief Sustainability Officer',
    bio: 'Environmental footprint expert. Elena oversees carbon offset indexing partnerships and indexes green excursions databases globally.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&q=80',
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
    },
  },
];
