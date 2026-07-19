import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/layout/Container';
import { DestinationHero } from '@/components/sections/destination/DestinationHero';
import { DestinationOverview } from '@/components/sections/destination/DestinationOverview';
import { DestinationHighlights } from '@/components/sections/destination/DestinationHighlights';
import { DestinationGallery } from '@/components/sections/destination/DestinationGallery';
import { DestinationIncluded } from '@/components/sections/destination/DestinationIncluded';
import { BookingCard } from '@/components/sections/destination/BookingCard';
import { SimilarDestinations } from '@/components/sections/destination/SimilarDestinations';
import { EXPLORE_DESTINATIONS } from '@/constants/explore';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static routes for all 8 destinations in constants/explore.ts
export async function generateStaticParams() {
  return EXPLORE_DESTINATIONS.map((dest) => ({
    id: dest.id,
  }));
}

// Generate dynamic SEO metadata matching Next.js 16 requirements
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const destination = EXPLORE_DESTINATIONS.find((dest) => dest.id === id);

  if (!destination) {
    return {
      title: 'Destination Not Found | Neutrip',
    };
  }

  return {
    title: `${destination.name} Travel Guide | Neutrip`,
    description: destination.description,
    openGraph: {
      title: `${destination.name} - ${destination.country} Travel Guide | Neutrip`,
      description: destination.description,
      images: [
        {
          url: destination.image,
          width: 1200,
          height: 630,
          alt: destination.name,
        },
      ],
    },
  };
}

// Dynamic Server Component page
export default async function DestinationPage({ params }: PageProps) {
  const { id } = await params;
  const destination = EXPLORE_DESTINATIONS.find((dest) => dest.id === id);

  if (!destination) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <DestinationHero destination={destination} />

      <Container className="py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left">
          
          {/* Left details grid area */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <DestinationOverview destination={destination} />
            <DestinationHighlights highlights={destination.highlights} />
            <DestinationGallery images={destination.gallery} />
            <DestinationIncluded included={destination.included} notIncluded={destination.notIncluded} />
          </div>

          {/* Right sticky sidebar booking/checkout card area */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-24 z-10 w-full">
              <BookingCard destination={destination} />
            </div>
          </div>

        </div>
      </Container>

      <SimilarDestinations currentId={destination.id} category={destination.category} />
    </div>
  );
}
