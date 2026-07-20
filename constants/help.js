export const FAQ_CATEGORIES = [
  { value: 'all', label: 'All FAQs' },
  { value: 'Bookings', label: 'Bookings & Flights' },
  { value: 'AI Planner', label: 'AI Planner' },
  { value: 'Payments', label: 'Payments & Vouchers' },
  { value: 'Safety', label: 'Safety & Insurance' },
  { value: 'Account', label: 'Account & Settings' },
];

export const MOCK_FAQS = [
  {
    id: 'faq-1',
    category: 'Bookings',
    question: 'How do I view or download my travel vouchers?',
    answer: 'Once your booking is confirmed, your vouchers and itinerary coordinates are stored in your Dashboard under Recent Bookings. You can also view details directly from your confirmed booking notifications.',
    popular: true,
  },
  {
    id: 'faq-2',
    category: 'AI Planner',
    question: 'How does the Neutrip AI Itinerary Planner create trip plans?',
    answer: 'Our AI engine analyzes your preferred travel style, budget, group size, and destination highlights to generate day-by-day itineraries with optimal transit routes, hidden gem recommendations, and estimated costs.',
    popular: true,
  },
  {
    id: 'faq-3',
    category: 'Payments',
    question: 'What payment methods does Neutrip accept?',
    answer: 'Neutrip accepts major credit and debit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and verified regional digital wallets. All transactions are SSL encrypted.',
    popular: false,
  },
  {
    id: 'faq-4',
    category: 'Safety',
    question: 'Are global destination safety advisories updated in real-time?',
    answer: 'Yes, Neutrip aggregates official travel advisories, weather reports, and local health guidelines daily. Safety notifications are delivered directly to your Neutrip Notifications inbox.',
    popular: true,
  },
  {
    id: 'faq-5',
    category: 'Bookings',
    question: 'What is the cancellation and refund policy for experience bookings?',
    answer: 'Most experience vouchers allow free cancellation up to 48 hours prior to the scheduled start time. Cancellation terms vary by partner provider and are clearly shown on each package detail page.',
    popular: true,
  },
  {
    id: 'faq-6',
    category: 'Account',
    question: 'How do I update my profile details and home base location?',
    answer: 'Navigate to Settings from the user menu or dashboard. Under Profile Settings, you can update your display name, email, avatar, home base location, and preferred currency.',
    popular: false,
  },
  {
    id: 'faq-7',
    category: 'AI Planner',
    question: 'Can I customize an AI-generated itinerary after creation?',
    answer: 'Absoluty! You can add or remove destinations, reorder day schedules, adjust budget preferences, and save customized plans directly to your Neutrip profile board.',
    popular: false,
  },
  {
    id: 'faq-8',
    category: 'Payments',
    question: 'Will I receive an itemized receipt after completing a booking?',
    answer: 'Yes, an official electronic receipt with booking reference code and breakdown of taxes is sent to your registered email immediately upon payment approval.',
    popular: false,
  },
];

export const SUPPORT_CARDS = [
  {
    id: 'sup-1',
    title: '24/7 Live Chat',
    description: 'Instant assistance from our Neutrip support concierge team.',
    actionText: 'Start Live Chat',
    actionLink: '/contact',
    badge: 'Fastest',
    iconType: 'chat',
  },
  {
    id: 'sup-2',
    title: 'Email Support',
    description: 'Send detailed inquiries and receive responses within 2 hours.',
    actionText: 'Send Email',
    actionLink: '/contact',
    badge: 'Detailed',
    iconType: 'email',
  },
  {
    id: 'sup-3',
    title: 'Phone Hotline',
    description: 'Speak directly with a Neutrip travel specialist worldwide.',
    actionText: 'Call Hotline',
    actionLink: '/contact',
    badge: 'Urgent',
    iconType: 'phone',
  },
  {
    id: 'sup-4',
    title: 'Traveler Forum',
    description: 'Ask questions and get answers from experienced Neutrip explorers.',
    actionText: 'Join Community',
    actionLink: '/reviews',
    badge: 'Community',
    iconType: 'users',
  },
];

export const POPULAR_RESOURCES = [
  {
    id: 'res-1',
    title: 'Getting Started with Neutrip AI Travel',
    summary: 'A step-by-step guide to generating your first multi-city AI itinerary in minutes.',
    category: 'Guide',
    readTime: '3 min read',
  },
  {
    id: 'res-2',
    title: 'Travel Insurance & Emergency Protocols',
    summary: 'Essential coverage details, claim steps, and global emergency assistance contact numbers.',
    category: 'Safety',
    readTime: '5 min read',
  },
  {
    id: 'res-3',
    title: 'Managing Wishlists & Saved Destinations',
    summary: 'How to organize dream destinations, track price drops, and share lists with friends.',
    category: 'Tips',
    readTime: '2 min read',
  },
];
