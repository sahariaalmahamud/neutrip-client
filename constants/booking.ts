export interface BookingPackage {
  id: string;
  title: string;
  duration: string;
  travelers: string;
  basePrice: number;
  image: string;
  dates: string;
}

export interface PromoCode {
  code: string;
  discountType: 'percent' | 'flat';
  value: number;
}

export const MOCK_PACKAGES: BookingPackage[] = [
  {
    id: 'pkg-1',
    title: 'Kyoto Cultural Immersion',
    duration: '3 Days, 2 Nights',
    travelers: '2 Adults',
    basePrice: 890,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&auto=format&fit=crop&q=80',
    dates: 'Oct 12 - Oct 15, 2026',
  },
  {
    id: 'pkg-2',
    title: 'Bali Wellness Escape',
    duration: '4 Days, 3 Nights',
    travelers: '2 Adults',
    basePrice: 1200,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&auto=format&fit=crop&q=80',
    dates: 'Nov 05 - Nov 09, 2026',
  },
];

export const MOCK_PROMO_CODES: PromoCode[] = [
  {
    code: 'WELCOME10',
    discountType: 'percent',
    value: 10, // 10% off
  },
  {
    code: 'NEUTRIP25',
    discountType: 'flat',
    value: 25, // $25 off
  },
];

export const SERVICE_FEE = 30;
export const TAX_RATE = 0.08; // 8% tax
