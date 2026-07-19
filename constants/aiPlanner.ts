export interface TimelineActivity {
  timeOfDay: 'Morning' | 'Afternoon' | 'Evening';
  activity: string;
  location: string;
  duration: string;
  description: string;
}

export interface DayPlan {
  dayNumber: number;
  activities: TimelineActivity[];
}

export interface BudgetSplit {
  category: string;
  percentage: number;
  estimatedCost: number;
}

export interface PlannerTripPlan {
  destination: string;
  title: string;
  description: string;
  style: string;
  duration: string;
  estimatedTotal: number;
  budgetBreakdown: BudgetSplit[];
  itinerary: DayPlan[];
  tips: string[];
}

export const PLANNER_DESTINATIONS = [
  { value: 'Kyoto', label: 'Kyoto, Japan' },
  { value: 'Paris', label: 'Paris, France' },
  { value: 'Bali', label: 'Bali, Indonesia' },
  { value: 'Rome', label: 'Rome, Italy' },
  { value: 'Zermatt', label: 'Zermatt, Switzerland' },
] as const;

export const PLANNER_BUDGETS = [
  { value: 'economy', label: 'Economy ($500 - $1,000)' },
  { value: 'standard', label: 'Standard ($1,000 - $2,000)' },
  { value: 'luxury', label: 'Luxury ($2,000+)' },
] as const;

export const PLANNER_DURATIONS = [
  { value: '3', label: '3 Days' },
  { value: '5', label: '5 Days' },
] as const;

export const PLANNER_STYLES = [
  { value: 'Cultural', label: 'Cultural & Historic' },
  { value: 'Adventure', label: 'Adventure & Active' },
  { value: 'Relax', label: 'Relax & Leisure' },
  { value: 'Luxury', label: 'Luxury & Culinary' },
] as const;

export const PLANNER_TRAVELERS = [
  { value: '1', label: '1 Traveler' },
  { value: '2', label: '2 Travelers' },
  { value: 'family', label: 'Family (3-5)' },
  { value: 'group', label: 'Group (6+)' },
] as const;

// Base itineraries database mapping destination + duration -> Full Plan
export const MOCK_ITINERARIES: Record<string, Record<string, Omit<PlannerTripPlan, 'destination' | 'duration' | 'style'>>> = {
  Kyoto: {
    '3': {
      title: 'Kyoto Historic Shrine & Bamboo Exploration',
      description: 'Immerse yourself in traditional Japanese culture, exploring historic wooden shrines, bamboo groves, and golden pavilions.',
      estimatedTotal: 850,
      budgetBreakdown: [
        { category: 'Lodging (Ryokan)', percentage: 40, estimatedCost: 340 },
        { category: 'Food & Tea ceremonies', percentage: 25, estimatedCost: 212.5 },
        { category: 'Transit & Passes', percentage: 15, estimatedCost: 127.5 },
        { category: 'Temples & Entry Tickets', percentage: 20, estimatedCost: 170 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            {
              timeOfDay: 'Morning',
              activity: 'Arashiyama Bamboo Grove Walk',
              location: 'Arashiyama, West Kyoto',
              duration: '2.5 Hours',
              description: 'Walk through the towering stalks of bamboo, listening to the rustling of wind, followed by a visit to Tenryu-ji Temple.',
            },
            {
              timeOfDay: 'Afternoon',
              activity: 'Kinkaku-ji (Golden Pavilion)',
              location: 'Kita Ward, North Kyoto',
              duration: '1.5 Hours',
              description: 'View the stunning Zen temple covered in gold leaf, reflecting beautifully in the surrounding Kyoko-chi pond.',
            },
            {
              timeOfDay: 'Evening',
              activity: 'Gion District Evening Tour',
              location: 'Gion, East Kyoto',
              duration: '3 Hours',
              description: 'Stroll past traditional Machiya wooden houses and lanterns, keeping an eye out for Geisha/Maiko on their way to appointments.',
            },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            {
              timeOfDay: 'Morning',
              activity: 'Fushimi Inari Shrine Hike',
              location: 'Fushimi, South Kyoto',
              duration: '3 Hours',
              description: 'Hike through the iconic tunnel of over 10,000 vermilion Torii gates stretching up Mount Inari.',
            },
            {
              timeOfDay: 'Afternoon',
              activity: 'Kiyomizu-dera & Sannenzaka Walk',
              location: 'Higashiyama, East Kyoto',
              duration: '3.5 Hours',
              description: 'Visit the historic wooden temple built without nails, overlooking the city, followed by matching streets.',
            },
            {
              timeOfDay: 'Evening',
              activity: 'Kaiseki Multi-course Dining',
              location: 'Pontocho Alley, Central Kyoto',
              duration: '2.5 Hours',
              description: 'Savor an authentic, beautifully curated Japanese multi-course dinner along a narrow historic alley.',
            },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            {
              timeOfDay: 'Morning',
              activity: 'Nijo Castle historical walkthrough',
              location: 'Nakagyo Ward, Central Kyoto',
              duration: '2 Hours',
              description: 'Explore the Shogun palace featuring defensive nightingale squeaking floors and peaceful gardens.',
            },
            {
              timeOfDay: 'Afternoon',
              activity: 'Matcha Tea Ceremony & Nishiki Market',
              location: 'Nishiki, Central Kyoto',
              duration: '3 Hours',
              description: 'Learn tea whisking techniques from a licensed master, followed by snacking at Kyoto’s primary food market.',
            },
            {
              timeOfDay: 'Evening',
              activity: 'Kamo River sunset stroll',
              location: 'Kamogawa embankment',
              duration: '1.5 Hours',
              description: 'Stroll alongside the riverbanks where locals gather to relax and listen to street musicians.',
            },
          ],
        },
      ],
      tips: [
        'Buy a ICOCA IC Card at the train station for seamless bus and subway tap-ins.',
        'Respect temple protocols: remove shoes when entering halls and do not take photos inside shrines unless permitted.',
        'Wear highly comfortable walking shoes as Kyoto involves heavy walking over cobbles.',
      ],
    },
    '5': {
      title: 'Grand Kyoto & Uji Heritage Journey',
      description: 'Extended exploration of Kyoto, including tea plantations in Uji, historic castle districts, and natural bamboo sanctuaries.',
      estimatedTotal: 1350,
      budgetBreakdown: [
        { category: 'Ryokan Inn & Lodging', percentage: 42, estimatedCost: 567 },
        { category: 'Dining & Gastronomy', percentage: 28, estimatedCost: 378 },
        { category: 'Transit Passes', percentage: 12, estimatedCost: 162 },
        { category: 'Sights & Excursions', percentage: 18, estimatedCost: 243 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Arashiyama Bamboo Grove Walk', location: 'Arashiyama, West Kyoto', duration: '2.5 Hours', description: 'Walk through the towering stalks of bamboo and visit Tenryu-ji Temple.' },
            { timeOfDay: 'Afternoon', activity: 'Kinkaku-ji (Golden Pavilion)', location: 'Kita Ward', duration: '1.5 Hours', description: 'View the Zen temple covered in gold leaf reflecting in the pond.' },
            { timeOfDay: 'Evening', activity: 'Gion District Evening Tour', location: 'Gion Ward', duration: '3 Hours', description: 'Stroll past traditional wooden houses and geisha alleys.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Fushimi Inari Torii gates', location: 'Fushimi Ward', duration: '3 Hours', description: 'Hike through 10,000 vermilion Torii gates up Mount Inari.' },
            { timeOfDay: 'Afternoon', activity: 'Kiyomizu-dera Temple', location: 'Higashiyama Ward', duration: '3 Hours', description: 'Explore the massive wooden temple deck looking out over Kyoto.' },
            { timeOfDay: 'Evening', activity: 'Pontocho Alley dinner', location: 'Nakagyo Ward', duration: '2.5 Hours', description: 'Experience dining overlooking the Kamogawa River.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Uji Matcha Plantation Excursion', location: 'Uji City, Kyoto Prefecture', duration: '4 Hours', description: 'Take a short train to the tea fields of Uji, tasting authentic ceremonial grade matcha.' },
            { timeOfDay: 'Afternoon', activity: 'Byodoin Temple (Phoenix Hall)', location: 'Uji City', duration: '1.5 Hours', description: 'Visit the historic temple hall appearing on the 10 yen coin.' },
            { timeOfDay: 'Evening', activity: 'Casual Yakitori dinner in Kyoto', location: 'Central Kyoto', duration: '2 Hours', description: 'Enjoy charcoal-grilled skewers at a local izakaya.' },
          ],
        },
        {
          dayNumber: 4,
          activities: [
            { timeOfDay: 'Morning', activity: 'Nijo Castle & Palace', location: 'Central Kyoto', duration: '2.5 Hours', description: 'Explore shogun history and the Nightingale-floor palace.' },
            { timeOfDay: 'Afternoon', activity: 'Philosopher’s Path walk', location: 'Northeast Kyoto', duration: '2 Hours', description: 'Walk alongside a scenic stone path following a canal lined with cherry trees.' },
            { timeOfDay: 'Evening', activity: 'Craft Sake Tasting', location: 'Fushimi Sake District', duration: '2.5 Hours', description: 'Learn sake-making history and taste local brews at a 300-year-old brewery.' },
          ],
        },
        {
          dayNumber: 5,
          activities: [
            { timeOfDay: 'Morning', activity: 'Tofuku-ji Zen Gardens', location: 'East Kyoto', duration: '2 Hours', description: 'Marvel at some of Japan’s most famous rock gardens and red maple valley bridges.' },
            { timeOfDay: 'Afternoon', activity: 'Nishiki Market food tasting tour', location: 'Central Kyoto', duration: '3 Hours', description: 'Sample fresh seafood, pickles, and sweet tamagoyaki.' },
            { timeOfDay: 'Evening', activity: 'Kyoto Tower panoramic sunset', location: 'Kyoto Station', duration: '1.5 Hours', description: 'Look out at the complete Kyoto basin circle from the observation deck.' },
          ],
        },
      ],
      tips: [
        'Uji is highly recommended for matcha lovers; reserve tea picking tours in advance.',
        'A 5-day trip makes the Kansai Thru Pass or local rail passes highly cost-efficient.',
        'Plan temple visits early in the morning to beat the crowds, especially at Kiyomizudera.',
      ],
    },
  },
  Paris: {
    '3': {
      title: 'Paris Landmarks & Seine Cruise Weekend',
      description: 'A classic sightseeing journey through Paris, taking in world-class art, culinary hotspots, and iconic views.',
      estimatedTotal: 990,
      budgetBreakdown: [
        { category: 'Boutique Hotel Stay', percentage: 48, estimatedCost: 475.2 },
        { category: 'Pastries & French Diners', percentage: 22, estimatedCost: 217.8 },
        { category: 'Metro & Train passes', percentage: 10, estimatedCost: 99 },
        { category: 'Museum Skip-Line passes', percentage: 20, estimatedCost: 198 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Eiffel Tower Climb', location: 'Champ de Mars', duration: '3 Hours', description: 'Climb or lift to the summit of Paris’ iconic monument for panoramic city views.' },
            { timeOfDay: 'Afternoon', activity: 'Champs-Élysées & Arc de Triomphe', location: '8th Arrondissement', duration: '2 Hours', description: 'Stroll along the historic luxury shopping street to the monumental arch.' },
            { timeOfDay: 'Evening', activity: 'Seine River Sunset Dinner Cruise', location: 'Port de la Bourdonnais', duration: '2.5 Hours', description: 'Dine on French food as monuments light up along the river banks.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Louvre Museum Tour', location: 'Musée du Louvre', duration: '3.5 Hours', description: 'See iconic art masterpieces like the Mona Lisa and Winged Victory.' },
            { timeOfDay: 'Afternoon', activity: 'Jardin des Tuileries & Place de la Concorde', location: '1st Arrondissement', duration: '2 Hours', description: 'Relax in green park chairs with fresh croissants from a bakery.' },
            { timeOfDay: 'Evening', activity: 'Montmartre Artists Walk', location: 'Place du Tertre', duration: '3 Hours', description: 'Walk through historic village paths, finishing at the Sacré-Cœur Basilica.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Notre-Dame & Latin Quarter', location: 'Île de la Cité', duration: '2.5 Hours', description: 'View the cathedral reconstruction progress and explore narrow medieval streets.' },
            { timeOfDay: 'Afternoon', activity: 'Centre Pompidou Modern Art', location: 'Beaubourg', duration: '2 Hours', description: 'Visit Europe’s largest museum of modern art, looking at high-tech design architecture.' },
            { timeOfDay: 'Evening', activity: 'Wine & Cheese Tasting', location: 'Marais District', duration: '2 Hours', description: 'Conclude the trip learning about wine regions and artisanal cheeses.' },
          ],
        },
      ],
      tips: [
        'Purchase tickets for Eiffel Tower and Louvre weeks in advance to avoid 2-hour lines.',
        'Use the standard Metro network; it is highly clean, fast, and covers all points.',
        'Learn basic greetings: starting conversations with "Bonjour" improves service dramatically.',
      ],
    },
    '5': {
      title: 'Grand Paris & Palace of Versailles Journey',
      description: 'Extended exploration of Paris including the lavish Palace of Versailles, artistic districts, and culinary cooking classes.',
      estimatedTotal: 1550,
      budgetBreakdown: [
        { category: 'Boutique Hotel Lodging', percentage: 46, estimatedCost: 713 },
        { category: 'Fine Dining & Cooking class', percentage: 24, estimatedCost: 372 },
        { category: 'Metro & RER Rail passes', percentage: 12, estimatedCost: 186 },
        { category: 'Sights & Palaces entry', percentage: 18, estimatedCost: 279 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Eiffel Tower Climb', location: 'Champ de Mars', duration: '3 Hours', description: 'Ascend to the summit for breathtaking city views.' },
            { timeOfDay: 'Afternoon', activity: 'Arc de Triomphe climb', location: 'Champs-Élysées', duration: '2 Hours', description: 'Climb the monument for stellar views down the converging avenues.' },
            { timeOfDay: 'Evening', activity: 'Seine River Cruise', location: 'Port de la Bourdonnais', duration: '2 Hours', description: 'Relax on the river as historic landmarks light up.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Louvre Museum Tour', location: 'Musée du Louvre', duration: '3.5 Hours', description: 'Admire the Venus de Milo and other art treasures.' },
            { timeOfDay: 'Afternoon', activity: 'Jardin des Tuileries stroll', location: 'Tuileries Gardens', duration: '1.5 Hours', description: 'Walk through the grand French formal gardens.' },
            { timeOfDay: 'Evening', activity: 'Montmartre & Sacre-Coeur', location: 'Montmartre Hill', duration: '3 Hours', description: 'Stroll the cobblestone streets where artists paint.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Palace of Versailles Day Trip', location: 'Versailles (RER Train)', duration: '5 Hours', description: 'Tour the Palace Hall of Mirrors and walk the grand fountains gardens.' },
            { timeOfDay: 'Afternoon', activity: 'Marie Antoinette Estate tour', location: 'Versailles Gardens', duration: '2 Hours', description: 'Explore the rustic private hamlet of the queen.' },
            { timeOfDay: 'Evening', activity: 'Traditional Parisian Bistro dining', location: 'Saint-Germain-des-Prés', duration: '2.5 Hours', description: 'Enjoy classic duck confit or steak frites.' },
          ],
        },
        {
          dayNumber: 4,
          activities: [
            { timeOfDay: 'Morning', activity: 'Macaron Baking Masterclass', location: 'Marais Culinary School', duration: '3 Hours', description: 'Learn the delicate process of making French macarons with a pastry chef.' },
            { timeOfDay: 'Afternoon', activity: 'Musée de l’Orangerie (Water Lilies)', location: 'Tuileries', duration: '2 Hours', description: 'Admire Monet’s massive circular water lily canvases.' },
            { timeOfDay: 'Evening', activity: 'Marais historic walk', location: 'Le Marais', duration: '2.5 Hours', description: 'Walk past medieval mansions, chic shops, and hip cafes.' },
          ],
        },
        {
          dayNumber: 5,
          activities: [
            { timeOfDay: 'Morning', activity: 'Sainte-Chapelle Stained Glass', location: 'Île de la Cité', duration: '1.5 Hours', description: 'Marvel at the breathtaking 13th-century Gothic stained glass windows.' },
            { timeOfDay: 'Afternoon', activity: 'Latin Quarter & Pantheon', location: '5th Arrondissement', duration: '2.5 Hours', description: 'Explore university alleys and the grand mausoleum.' },
            { timeOfDay: 'Evening', activity: 'Sunset over Tour Montparnasse', location: 'Montparnasse Deck', duration: '1.5 Hours', description: 'Capture the Eiffel Tower light show from Paris’ tallest deck.' },
          ],
        },
      ],
      tips: [
        'A Navigo Decouverte weekly transit pass is highly recommended for 5-day itineraries.',
        'Versailles is massive; plan for a full day of walking and bring comfortable shoes.',
        'Book the macaron baking class early as masterclasses sell out weeks in advance.',
      ],
    },
  },
  Bali: {
    '3': {
      title: 'Bali Beaches & Rice Terrace Relaxation',
      description: 'A refreshing escape through Ubud and coastal Bali, focusing on natural sights and peaceful resorts.',
      estimatedTotal: 650,
      budgetBreakdown: [
        { category: 'Eco-Resort Stay', percentage: 38, estimatedCost: 247 },
        { category: 'Local Food & Cafes', percentage: 22, estimatedCost: 143 },
        { category: 'Private Driver Hire', percentage: 20, estimatedCost: 130 },
        { category: 'Activities & Excursions', percentage: 20, estimatedCost: 130 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Ubud Monkey Forest Walk', location: 'Ubud Sanctuary', duration: '2 Hours', description: 'Walk through the mossy temple forest home to hundreds of playful macaques.' },
            { timeOfDay: 'Afternoon', activity: 'Tegalalang Rice Terraces', location: 'North Ubud', duration: '3 Hours', description: 'Explore the cascading rice paddies and take photos on the giant swings.' },
            { timeOfDay: 'Evening', activity: 'Organic Dining in Ubud', location: 'Ubud Center', duration: '2 Hours', description: 'Enjoy healthy, farm-to-table Balinese dining under a bamboo canopy.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Sunrise Mount Batur Trekking', location: 'Kintamani Volcano', duration: '5 Hours', description: 'Wake up early to hike the volcano, watching the sunrise over Lake Batur.' },
            { timeOfDay: 'Afternoon', activity: 'Tirta Empul Holy Springs', location: 'Tampaksiring', duration: '2 Hours', description: 'Experience the traditional ritual purification bath in holy spring water.' },
            { timeOfDay: 'Evening', activity: 'Balinese Dance Performance', location: 'Ubud Royal Palace', duration: '1.5 Hours', description: 'Watch the Legong or Barong traditional dance with gamelan music.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Seminyak Beach Surfing', location: 'Seminyak Coastal', duration: '3 Hours', description: 'Take a beginner surfing lesson on the sandy beach breaks.' },
            { timeOfDay: 'Afternoon', activity: 'Uluwatu Temple Cliff Walk', location: 'Uluwatu Cliff', duration: '2.5 Hours', description: 'Visit the sea temple perched on a cliff edge, 70 meters above the ocean.' },
            { timeOfDay: 'Evening', activity: 'Jimbaran Bay Seafood dinner', location: 'Jimbaran Beach', duration: '2 Hours', description: 'Dine on grilled snapper and prawns with your feet in the sand at sunset.' },
          ],
        },
      ],
      tips: [
        'Hiring a private driver is highly cost-efficient in Bali (around $45/day total).',
        'Respect local temples: always wear a sarong and sash (usually provided at entries).',
        'Drink only bottled water (avoid "Bali Belly") and stay hydrated in the tropical climate.',
      ],
    },
    '5': {
      title: 'Grand Bali Nature & Nusa Penida Island Exploration',
      description: 'Comprehensive 5-day route including private driver Ubud tours, volcano hikes, and a speedboat trip to Nusa Penida island.',
      estimatedTotal: 980,
      budgetBreakdown: [
        { category: 'Eco-lodge & Villa stay', percentage: 40, estimatedCost: 392 },
        { category: 'Dining & Beach club', percentage: 22, estimatedCost: 215.6 },
        { category: 'Private driver & Boats', percentage: 20, estimatedCost: 196 },
        { category: 'Excursion guides & entries', percentage: 18, estimatedCost: 176.4 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Ubud Monkey Forest Walk', location: 'Ubud', duration: '2 Hours', description: 'Walk through the sacred forest sanctuary.' },
            { timeOfDay: 'Afternoon', activity: 'Tegalalang Rice Terraces', location: 'North Ubud', duration: '3.5 Hours', description: 'Explore terraced valleys and swings.' },
            { timeOfDay: 'Evening', activity: 'Ubud Royal Palace Dance show', location: 'Ubud Palace', duration: '1.5 Hours', description: 'Watch local dancers perform under the stars.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Mount Batur Sunrise Trek', location: 'Kintamani', duration: '5 Hours', description: 'Hike up the active volcano for sunrise views.' },
            { timeOfDay: 'Afternoon', activity: 'Tirta Empul purification bath', location: 'Tampaksiring', duration: '2 Hours', description: 'Purify yourself in spring pools.' },
            { timeOfDay: 'Evening', activity: 'Traditional Balinese Spa massage', location: 'Ubud Center', duration: '2 Hours', description: 'Relax with a Balinese flower massage.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Speedboat to Nusa Penida Island', location: 'Sanur Port', duration: '1 Hour', description: 'Board a speedboat to the pristine Penida island.' },
            { timeOfDay: 'Afternoon', activity: 'Kelingking Beach T-Rex Cliff', location: 'West Nusa Penida', duration: '3 Hours', description: 'Gaze down at the dinosaur-shaped cliff and turquoise waters.' },
            { timeOfDay: 'Evening', activity: 'Nusa Penida sunset dinner', location: 'Crystal Bay', duration: '2 Hours', description: 'Dine on grilled local fish at the beach.' },
          ],
        },
        {
          dayNumber: 4,
          activities: [
            { timeOfDay: 'Morning', activity: 'Angel’s Billabong & Broken Beach', location: 'West Nusa Penida', duration: '2 Hours', description: 'View natural rock lagoons and arches.' },
            { timeOfDay: 'Afternoon', activity: 'Snorkeling with Manta Rays', location: 'Manta Point, Penida', duration: '3 Hours', description: 'Swim with giant, gentle reef manta rays in the wild.' },
            { timeOfDay: 'Evening', activity: 'Return speedboat to Bali mainland', location: 'Sanur Port', duration: '1 Hour', description: 'Travel back to Seminyak hotel.' },
          ],
        },
        {
          dayNumber: 5,
          activities: [
            { timeOfDay: 'Morning', activity: 'Uluwatu Temple cliff walk', location: 'Uluwatu', duration: '2 Hours', description: 'Stroll the clifftop temple looking over the Indian Ocean.' },
            { timeOfDay: 'Afternoon', activity: 'Kecak Fire Dance sunset show', location: 'Uluwatu Amphitheater', duration: '1.5 Hours', description: 'Watch the spectacular vocal-chanting fire dance.' },
            { timeOfDay: 'Evening', activity: 'Jimbaran Bay beach seafood dinner', location: 'Jimbaran', duration: '2 Hours', description: 'Enjoy sunset dining on the beach.' },
          ],
        },
      ],
      tips: [
        'Nusa Penida roads are extremely bumpy; hire a local driver instead of riding scooters there.',
        'Bring sunscreen and rash guards for snorkeling sessions.',
        'Uluwatu monkeys are notorious pickpockets; secure glasses, phones, and loose items.',
      ],
    },
  },
  Rome: {
    '3': {
      title: 'Rome Imperial History & Pasta Tasting',
      description: 'Uncover the relics of the Roman Empire and experience the culinary masterpieces of Italy.',
      estimatedTotal: 890,
      budgetBreakdown: [
        { category: 'Boutique Hotel Stay', percentage: 45, estimatedCost: 400.5 },
        { category: 'Trattoria dining & Pasta', percentage: 25, estimatedCost: 222.5 },
        { category: 'City Passes & Transit', percentage: 10, estimatedCost: 89 },
        { category: 'Colosseum & Vatican entries', percentage: 20, estimatedCost: 178 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Colosseum Skip-Line Tour', location: 'Piazza del Colosseo', duration: '3 Hours', description: 'Explore the legendary amphitheater arena floor, learning about gladiators.' },
            { timeOfDay: 'Afternoon', activity: 'Roman Forum & Palatine Hill', location: 'Via dei Fori Imperiali', duration: '2.5 Hours', description: 'Walk the ruins of the ancient Roman political center.' },
            { timeOfDay: 'Evening', activity: 'Trastevere Food Stroll', location: 'Trastevere District', duration: '3 Hours', description: 'Sample local street foods like suppli and pizza al taglio in a trendy district.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Vatican Museums & Sistine Chapel', location: 'Vatican City', duration: '4 Hours', description: 'Marvel at Michelangelo’s ceiling frescoes and historical art collections.' },
            { timeOfDay: 'Afternoon', activity: 'St. Peter’s Basilica climb', location: 'Piazza San Pietro', duration: '2 Hours', description: 'Climb the dome of the basilica for views over Rome.' },
            { timeOfDay: 'Evening', activity: 'Trevi Fountain & Spanish Steps walk', location: 'Historic Center', duration: '2.5 Hours', description: 'Throw a coin in the fountain and enjoy gelato at the steps.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Pantheon & Piazza Navona', location: 'Centro Storico', duration: '2 Hours', description: 'Enter the 2,000-year-old temple dome and see Bernini’s fountains.' },
            { timeOfDay: 'Afternoon', activity: 'Handmade Pasta Making Class', location: 'Piazza Campo de’ Fiori', duration: '3 Hours', description: 'Learn to knead pasta dough and make carbonara from scratch.' },
            { timeOfDay: 'Evening', activity: 'Sunset over Terrazza del Pincio', location: 'Villa Borghese', duration: '1.5 Hours', description: 'Look out at the city skyline as lights activate across church domes.' },
          ],
        },
      ],
      tips: [
        'Vatican and Colosseum require booking tickets at least 1 month in advance.',
        'Never pay for bottled water in Rome; bring a flask and fill it at "nasoni" street fountains.',
        'Wear supportive footwear, as walking over ancient Roman cobbles is hard on the ankles.',
      ],
    },
    '5': {
      title: 'Grand Rome & Ancient Appian Way Journey',
      description: 'Extended exploration of Rome, including the Vatican, Roman Forum, the ancient catacombs along the Appian Way, and Borghese Gardens.',
      estimatedTotal: 1420,
      budgetBreakdown: [
        { category: 'Hotel Accommodation', percentage: 44, estimatedCost: 624.8 },
        { category: 'Trattorias & Cooking class', percentage: 24, estimatedCost: 340.8 },
        { category: 'Metro/Train rail card', percentage: 12, estimatedCost: 170.4 },
        { category: 'Catacomb & Museum entry', percentage: 20, estimatedCost: 284 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Colosseum Skip-Line Tour', location: 'Piazza del Colosseo', duration: '3 Hours', description: 'Tour the ancient gladiator arena.' },
            { timeOfDay: 'Afternoon', activity: 'Roman Forum & Palatine Hill', location: 'Fori Imperiali', duration: '2.5 Hours', description: 'Stroll the ruins of the Roman empire.' },
            { timeOfDay: 'Evening', activity: 'Trastevere Food tasting', location: 'Trastevere', duration: '3 Hours', description: 'Sample traditional Roman pastas at a local taverna.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Vatican Museums & Sistine Chapel', location: 'Vatican City', duration: '4 Hours', description: 'Admire historic masterpieces and frescoes.' },
            { timeOfDay: 'Afternoon', activity: 'St. Peter’s Basilica tour', location: 'Vatican City', duration: '2 Hours', description: 'See Michelangelo’s Pietà and scale the dome.' },
            { timeOfDay: 'Evening', activity: 'Trevi Fountain sunset walk', location: 'Trevi', duration: '2 Hours', description: 'Throw a coin in the fountain and enjoy gelato.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Ancient Appian Way bike tour', location: 'Via Appia Antica', duration: '4 Hours', description: 'Rent an e-bike to cycle the historic cobblestone Roman military highway.' },
            { timeOfDay: 'Afternoon', activity: 'Catacombs of San Callisto', location: 'Appian Way', duration: '1.5 Hours', description: 'Guided tour of the sprawling underground early-Christian burial vaults.' },
            { timeOfDay: 'Evening', activity: 'Pizza making workshop', location: 'Piazza Navona', duration: '2.5 Hours', description: 'Roll and bake your own wood-fired Roman pizza.' },
          ],
        },
        {
          dayNumber: 4,
          activities: [
            { timeOfDay: 'Morning', activity: 'Galleria Borghese Art Tour', location: 'Villa Borghese Gardens', duration: '2.5 Hours', description: 'See breathtaking marble sculptures by Bernini.' },
            { timeOfDay: 'Afternoon', activity: 'Borghese Gardens rowboat rental', location: 'Villa Borghese Pond', duration: '1.5 Hours', description: 'Row a boat around the temple of Aesculapius.' },
            { timeOfDay: 'Evening', activity: 'Jewish Ghetto historic walk', location: 'Teatro di Marcello', duration: '2.5 Hours', description: 'Try the famous local Jewish-style fried artichokes.' },
          ],
        },
        {
          dayNumber: 5,
          activities: [
            { timeOfDay: 'Morning', activity: 'Pantheon engineering tour', location: 'Piazza della Rotonda', duration: '1.5 Hours', description: 'Marvel at the ancient concrete dome and its open oculus.' },
            { timeOfDay: 'Afternoon', activity: 'Capuchin Crypt skeleton walk', location: 'Via Veneto', duration: '1.5 Hours', description: 'Visit the unique, somber chapel decorated with the bones of 4,000 monks.' },
            { timeOfDay: 'Evening', activity: 'Farewell fine dining overlooking Rome', location: 'Janiculum Hill', duration: '3 Hours', description: 'Savor upscale Italian gastronomy looking down on the illuminated city.' },
          ],
        },
      ],
      tips: [
        'E-bikes make touring the Appian Way much easier and more enjoyable.',
        'Borghese Gallery enforces strict 2-hour slots; you must exit immediately when the time is up.',
        'Fountains in Rome are drinking water; look for the "Nasone" spouts for cold, clean water.',
      ],
    },
  },
  Zermatt: {
    '3': {
      title: 'Zermatt Matterhorn Skiing & Glacier Paradise',
      description: 'An alpine adventure featuring skiing, snowy peaks, and relaxing Swiss fondue chalet dining.',
      estimatedTotal: 1250,
      budgetBreakdown: [
        { category: 'Alpine Chalet Stay', percentage: 50, estimatedCost: 625 },
        { category: 'Alpine Stew & Fondue', percentage: 20, estimatedCost: 250 },
        { category: 'Gondola & Cableways', percentage: 18, estimatedCost: 225 },
        { category: 'Ski & Gear Rental', percentage: 12, estimatedCost: 150 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Gornergrat Cog Railway Ride', location: 'Zermatt Station', duration: '1.5 Hours', description: 'Board the historic cog railway climbing up to 3,089 meters for alpine views.' },
            { timeOfDay: 'Afternoon', activity: 'Gornergrat Matterhorn Observatory', location: 'Gornergrat Ridge', duration: '2 Hours', description: 'View the Matterhorn and massive glaciers from the observation deck.' },
            { timeOfDay: 'Evening', activity: 'Traditional Cheese Fondue Dinner', location: 'Zermatt Village', duration: '2 Hours', description: 'Enjoy melted Swiss cheese fondue at a cozy, firelit village stube.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Matterhorn Glacier Paradise', location: 'Zermatt Cableways', duration: '4 Hours', description: 'Ride the highest cable car in Europe to 3,883 meters, exploring the Ice Palace.' },
            { timeOfDay: 'Afternoon', activity: 'Snow skiing or snowshoeing', location: 'Theodul Glacier', duration: '3 Hours', description: 'Enjoy year-round snow activities on the glaciers.' },
            { timeOfDay: 'Evening', activity: 'Apres-ski drinks in Zermatt', location: 'Bahnhofstrasse', duration: '2 Hours', description: 'Unwind at lively village pubs with local beers.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: 'Hinterdorf Historic Village walk', location: 'Hinterdorfstrasse', duration: '1.5 Hours', description: 'Walk past 30 traditional, ancient larch-wood houses dating from the 16th century.' },
            { timeOfDay: 'Afternoon', activity: 'Matterhorn Museum Zermatlantis', location: 'Kirchplatz', duration: '2 Hours', description: 'Learn about the first Matterhorn climb and village history.' },
            { timeOfDay: 'Evening', activity: 'Farewell Alpine Steak Dinner', location: 'Zermatt Center', duration: '2 Hours', description: 'Indulge in fine dining at a local grill house.' },
          ],
        },
      ],
      tips: [
        'Zermatt is car-free; you must park in Tasch and take the shuttle train.',
        'Buy a Swiss Travel Pass to get discounts on local cog railways and gondolas.',
        'Prepare warm layers, as peak temperatures are below freezing even in summer.',
      ],
    },
    '5': {
      title: 'Grand Zermatt Alpine Peaks & Five Lakes Trek',
      description: 'Extended alpine exploration, including glacier caves, village walks, Matterhorn viewpoints, and the Five Lakes hiking trail.',
      estimatedTotal: 1850,
      budgetBreakdown: [
        { category: 'Alpine Chalet Lodging', percentage: 48, estimatedCost: 888 },
        { category: 'Gondola & Cable passes', percentage: 22, estimatedCost: 407 },
        { category: 'Swiss Dining & Fondue', percentage: 18, estimatedCost: 333 },
        { category: 'Ski/Hiking guides', percentage: 12, estimatedCost: 222 },
      ],
      itinerary: [
        {
          dayNumber: 1,
          activities: [
            { timeOfDay: 'Morning', activity: 'Gornergrat Cog Railway Ride', location: 'Zermatt Station', duration: '1.5 Hours', description: 'Ride the cog railway up to 3,089 meters.' },
            { timeOfDay: 'Afternoon', activity: 'Gornergrat peak viewing', location: 'Gornergrat Summit', duration: '2 Hours', description: 'Look out at the Monte Rosa massif and Matterhorn.' },
            { timeOfDay: 'Evening', activity: 'Traditional Cheese Fondue Dinner', location: 'Zermatt', duration: '2 Hours', description: 'Enjoy authentic Swiss cheese fondue.' },
          ],
        },
        {
          dayNumber: 2,
          activities: [
            { timeOfDay: 'Morning', activity: 'Matterhorn Glacier Paradise ride', location: 'Klein Matterhorn', duration: '4 Hours', description: 'Ride the highest cable car in Europe to the peak.' },
            { timeOfDay: 'Afternoon', activity: 'Glacier Palace ice cave tour', location: 'Klein Matterhorn Glacier', duration: '1.5 Hours', description: 'Walk through chambers carved directly into glacial ice.' },
            { timeOfDay: 'Evening', activity: 'Bahnhofstrasse village walk', location: 'Zermatt Center', duration: '2 Hours', description: 'Shop and explore the car-free mountain village.' },
          ],
        },
        {
          dayNumber: 3,
          activities: [
            { timeOfDay: 'Morning', activity: '5-Lakes Hiking Trail (5-Seenweg)', location: 'Blauherd to Sunnegga', duration: '4.5 Hours', description: 'Hike past 5 alpine lakes, including Stellisee, reflecting the Matterhorn.' },
            { timeOfDay: 'Afternoon', activity: 'Mountain lunch at Chez Vrony', location: 'Findeln Village', duration: '2 Hours', description: 'Savor gourmet Swiss food at a historic mountain chalet.' },
            { timeOfDay: 'Evening', activity: 'Alpine Spa relaxation', location: 'Hotel Wellness Spa', duration: '2 Hours', description: 'Soak in outdoor thermal pools under the stars.' },
          ],
        },
        {
          dayNumber: 4,
          activities: [
            { timeOfDay: 'Morning', activity: 'Gorner Gorge wooden walkway', location: 'Furi', duration: '2 Hours', description: 'Walk the wooden planks suspended above the roaring glacial river gorge.' },
            { timeOfDay: 'Afternoon', activity: 'Furi to Zermatt forest hike', location: 'Furi Forest', duration: '2 Hours', description: 'Enjoy a gentle downhill forest walk past old barns.' },
            { timeOfDay: 'Evening', activity: 'Valais wine tasting session', location: 'Local Enoteca', duration: '2 Hours', description: 'Taste local white and red Swiss mountain wines.' },
          ],
        },
        {
          dayNumber: 5,
          activities: [
            { timeOfDay: 'Morning', activity: 'Hinterdorf historical village walk', location: 'Hinterdorfstrasse', duration: '1.5 Hours', description: 'Tour the ancient larch-wood village houses.' },
            { timeOfDay: 'Afternoon', activity: 'Matterhorn Museum Zermatlantis', location: 'Kirchplatz', duration: '2 Hours', description: 'Explore mountaineering history and displays.' },
            { timeOfDay: 'Evening', activity: 'Sunset over Rothorn peak', location: 'Rothorn Cable Station', duration: '2 Hours', description: 'Watch the sun paint the Matterhorn peak gold.' },
          ],
        },
      ],
      tips: [
        'The 5-Lakes trail is open June-October; check snow conditions before departing.',
        'Eat lunch at Chez Vrony, but book a table weeks ahead for outdoor decks.',
        'Zermatt weather changes rapidly; carry an windproof shell jacket during hikes.',
      ],
    },
  },
};
