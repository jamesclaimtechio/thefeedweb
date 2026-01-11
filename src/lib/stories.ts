/**
 * Centralized stories data for The Feed
 * All real Cape Town stories are defined here and imported throughout the app
 */

export interface Story {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  author: string;
  slug: string;
  image: string;
}

/**
 * All Cape Town stories - ordered by date (newest first)
 */
export const CAPE_TOWN_STORIES: Story[] = [
  {
    title: "Cape Town's Water Supply Dwindles as Crisis Deepens",
    excerpt:
      "Cape Town faces mounting water challenges as dam levels continue to drop. Residents urged to reduce consumption immediately.",
    date: '11/01/2026',
    category: 'Local',
    author: 'The Feed CPT',
    slug: 'water-crisis-cape-town',
    image: '/images/cape-town/water-crisis.jpg',
  },
  {
    title: 'Dunoon Fire Leaves More Than 100 People Homeless',
    excerpt:
      "A devastating fire swept through Dunoon, displacing over 100 residents. Emergency services respond to the tragic blaze.",
    date: '11/01/2026',
    category: 'Breaking',
    author: 'The Feed CPT',
    slug: 'dunoon-fire-homeless',
    image: '/images/cape-town/dunoon-fire.jpg',
  },
  {
    title: "Emirates' Next-Gen A350 Comes to Cape Town",
    excerpt:
      "Cape Town becomes the first Southern African destination to welcome Emirates' next-generation Airbus A350 from July 2026.",
    date: '10/01/2026',
    category: 'Travel',
    author: 'The Feed CPT',
    slug: 'emirates-a350-cape-town',
    image: '/images/cape-town/emirates-a350.jpg',
  },
  {
    title: 'Taxi Overturns in Camps Bay, Two Dead in Parow Crash',
    excerpt:
      "Tragic accidents rock Cape Town as a taxi overturns in Camps Bay and two people lose their lives in a Parow crash.",
    date: '10/01/2026',
    category: 'Local',
    author: 'The Feed CPT',
    slug: 'taxi-crash-camps-bay-parow',
    image: '/images/cape-town/taxi-crash.jpg',
  },
  {
    title: 'Identikidz Reunites 227 Lost Children at Cape Town Beaches',
    excerpt:
      "Identikidz records positive outcomes in Cape Town beach safety operations, reuniting 227 lost children with their families.",
    date: '10/01/2026',
    category: 'Community',
    author: 'The Feed CPT',
    slug: 'identikidz-beach-safety',
    image: '/images/cape-town/beach-safety.jpg',
  },
  {
    title: 'Cape Town Tourism Stays Strong in January',
    excerpt:
      "Despite economic challenges, Cape Town's tourism sector remains resilient with strong visitor numbers this January.",
    date: '09/01/2026',
    category: 'Travel',
    author: 'The Feed CPT',
    slug: 'cape-town-tourism-january',
    image: '/images/cape-town/tourism-strong.jpg',
  },
  {
    title: 'Budget-Friendly Ways to Enjoy Cape Town in January',
    excerpt:
      "Affordable ways to explore the Mother City this January without breaking the bank.",
    date: '09/01/2026',
    category: 'Lifestyle',
    author: 'The Feed CPT',
    slug: 'budget-cape-town-january',
    image: '/images/cape-town/budget-travel.jpg',
  },
  {
    title: 'Health Inspectors Close Tafelsig Spaza Shops Over Expired Food',
    excerpt:
      "Three Tafelsig spaza shops shut down over shocking hygiene violations and expired food products.",
    date: '09/01/2026',
    category: 'Local',
    author: 'The Feed CPT',
    slug: 'tafelsig-spaza-shops-closed',
    image: '/images/cape-town/spaza-shop.jpg',
  },
  {
    title: 'Nestlé Recalls NAN Baby Formula Over Toxic Fears',
    excerpt:
      "Nestlé removes infant formula from South African shelves as precaution over contamination concerns.",
    date: '08/01/2026',
    category: 'Health',
    author: 'The Feed CPT',
    slug: 'nestle-nan-recall',
    image: '/images/cape-town/baby-formula.jpg',
  },
  {
    title: 'Illegal Liquor Plant Uncovered in Durbanville',
    excerpt:
      "Five people arrested in Durbanville for producing illegal alcohol in underground operation.",
    date: '08/01/2026',
    category: 'Crime',
    author: 'The Feed CPT',
    slug: 'illegal-liquor-durbanville',
    image: '/images/cape-town/liquor-plant.jpg',
  },
  {
    title: 'Wizkid Becomes First African Artist to Reach 10 Billion Streams',
    excerpt:
      "Nigerian superstar Wizkid makes history as the first African artist to reach 10 billion streams on Spotify.",
    date: '07/01/2026',
    category: 'Entertainment',
    author: 'The Feed CPT',
    slug: 'wizkid-10-billion-streams',
    image: '/images/cape-town/wizkid-streams.jpg',
  },
  {
    title: 'SABC Issues Alert Over Fake TV Licence Inspectors',
    excerpt:
      "SABC urges residents to be vigilant of armed impostors posing as TV licence inspectors.",
    date: '07/01/2026',
    category: 'Safety',
    author: 'The Feed CPT',
    slug: 'sabc-fake-inspectors-alert',
    image: '/images/cape-town/fake-inspectors.jpg',
  },
  {
    title: 'Russia Recruited South African Gamers for War',
    excerpt:
      "From video games to the actual battlefield — reports emerge of South African gamers recruited by Russia.",
    date: '06/01/2026',
    category: 'National',
    author: 'The Feed CPT',
    slug: 'russia-sa-gamers-war',
    image: '/images/cape-town/sa-gamers.jpg',
  },
];

// Helper functions

/**
 * Get the featured (first) story
 */
export function getFeaturedStory(): Story {
  return CAPE_TOWN_STORIES[0];
}

/**
 * Get the secondary featured story
 */
export function getSecondaryFeaturedStory(): Story {
  return CAPE_TOWN_STORIES[1];
}

/**
 * Get trending stories (top N stories)
 */
export function getTrendingStories(count: number = 6): Story[] {
  return CAPE_TOWN_STORIES.slice(0, count);
}

/**
 * Get latest stories, optionally skipping the first N
 */
export function getLatestStories(count: number = 4, skip: number = 0): Story[] {
  return CAPE_TOWN_STORIES.slice(skip, skip + count);
}

/**
 * Get stories by category
 */
export function getStoriesByCategory(category: string): Story[] {
  return CAPE_TOWN_STORIES.filter(
    (story) => story.category.toLowerCase() === category.toLowerCase()
  );
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const categories = CAPE_TOWN_STORIES.map((story) => story.category);
  return [...new Set(categories)];
}
