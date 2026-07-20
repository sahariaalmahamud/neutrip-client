export const SITE_NAME = 'Neutrip';
export const SITE_DESCRIPTION = 'Discover destinations, book trips, and plan journeys with AI.';

export const DEFAULT_METADATA = {
  title: {
    default: 'Neutrip — AI Powered Travel Platform',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: '/favicon.ico',
  },
};

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/neutrip',
  facebook: 'https://facebook.com/neutrip',
  instagram: 'https://instagram.com/neutrip',
  linkedin: 'https://linkedin.com/company/neutrip',
} as const;

export const NAVIGATION_LINKS = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'AI Planner', href: '/ai-planner' },
    { label: 'Wishlist', href: '/wishlist' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Help', href: '/help' },
  ],
  footer: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Notifications', href: '/notifications' },
    { label: 'Help Center', href: '/help' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;
