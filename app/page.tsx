import { Hero } from '@/components/sections/home/Hero';
import { SearchBar } from '@/components/sections/home/SearchBar';
import { PopularDestinations } from '@/components/sections/home/PopularDestinations';
import { AITripPlannerCTA } from '@/components/sections/home/AITripPlannerCTA';
import { FeaturedExperiences } from '@/components/sections/home/FeaturedExperiences';
import { WhyChooseNeutrip } from '@/components/sections/home/WhyChooseNeutrip';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { NewsletterCTA } from '@/components/sections/home/NewsletterCTA';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <SearchBar />
      <PopularDestinations />
      <AITripPlannerCTA />
      <FeaturedExperiences />
      <WhyChooseNeutrip />
      <Testimonials />
      <NewsletterCTA />
    </div>
  );
}
