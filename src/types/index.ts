// City types for The Feed's multi-city coverage
export type CitySlug = 'cape-town' | 'london' | 'miami' | 'dubai' | 'california';

export interface City {
  name: string;
  slug: CitySlug;
  country: string;
  isActive: boolean;
  comingSoon: boolean;
}

// News article types
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  author: Author;
  category: Category;
  city: CitySlug;
  publishedAt: Date;
  updatedAt?: Date;
  isBreaking: boolean;
  isFeatured: boolean;
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

// City configuration
export const CITIES: City[] = [
  {
    name: 'Cape Town',
    slug: 'cape-town',
    country: 'South Africa',
    isActive: true,
    comingSoon: false,
  },
  {
    name: 'London',
    slug: 'london',
    country: 'United Kingdom',
    isActive: false,
    comingSoon: true,
  },
  {
    name: 'Miami',
    slug: 'miami',
    country: 'United States',
    isActive: false,
    comingSoon: true,
  },
  {
    name: 'Dubai',
    slug: 'dubai',
    country: 'United Arab Emirates',
    isActive: false,
    comingSoon: true,
  },
  {
    name: 'California',
    slug: 'california',
    country: 'United States',
    isActive: false,
    comingSoon: true,
  },
];
