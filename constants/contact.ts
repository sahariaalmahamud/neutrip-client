export interface ContactCard {
  title: string;
  value: string;
  description: string;
  iconName: 'mail' | 'phone' | 'mapPin' | 'clock';
}

export const CONTACT_HERO_DATA = {
  title: 'Get in Touch',
  subtitle: 'Have questions about customized AI itineraries, sustainable pricing offsets, or booking confirmations? Reach out to our global support crew.',
};

export const CONTACT_INFO_CARDS: ContactCard[] = [
  {
    title: 'Email Us',
    value: 'support@neutrip.com',
    description: 'For planner settings help & business collaborations',
    iconName: 'mail',
  },
  {
    title: 'Call Us',
    value: '+1 (555) 302-8192',
    description: 'Mon-Fri from 9:00 AM to 6:00 PM PST',
    iconName: 'phone',
  },
  {
    title: 'HQ Office',
    value: '100 Pine Street, San Francisco, CA',
    description: 'Sustainable tech development headquarters',
    iconName: 'mapPin',
  },
  {
    title: 'Support Hours',
    value: '24/7 Virtual AI Assistant',
    description: 'Human agents available weekdays during office hours',
    iconName: 'clock',
  },
];

export const MAP_COORDINATES = {
  lat: '37.7925° N',
  lng: '122.3998° W',
  address: '100 Pine St, San Francisco, CA 94111',
};
