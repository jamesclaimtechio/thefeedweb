import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingStories, ArticleCard } from '@/components/ui';
import {
  CAPE_TOWN_STORIES,
  getTrendingStories,
} from '@/lib/stories';

export const metadata: Metadata = {
  title: 'Cape Town News | The Feed',
  description:
    'Breaking news, local stories, and updates from Cape Town, South Africa. Your trusted source for hot on the minute news.',
};

// Transform stories to the format TrendingStories expects
const trendingStories = getTrendingStories(4).map((story, index) => ({
  id: String(index + 1),
  category: story.category,
  title: story.title,
  date: story.date,
  author: story.author,
  slug: story.slug,
}));

export default function CapeTownPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex items-center gap-2 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--foreground)]">
          Home
        </Link>
        <span>/</span>
        <span className="text-[var(--foreground)]">Cape Town</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Content */}
        <div className="lg:col-span-8">
          {/* Page Header */}
          <div className="mb-8 border-b border-[var(--border)] pb-6">
            <h1
              className="text-4xl font-bold sm:text-5xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Cape Town
            </h1>
            <p className="mt-2 text-lg text-[var(--muted)]">
              Your source for breaking news and local stories from the Mother
              City
            </p>
          </div>

          {/* Featured Article */}
          <Link
            href={`/article/${CAPE_TOWN_STORIES[0].slug}`}
            className="group mb-8 block border-b border-[var(--border)] pb-8"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
                <Image
                  src={CAPE_TOWN_STORIES[0].image}
                  alt={CAPE_TOWN_STORIES[0].title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="category-label mb-2">
                  {CAPE_TOWN_STORIES[0].category}
                </p>
                <h2
                  className="mb-3 text-2xl font-bold leading-tight group-hover:text-[var(--accent)]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {CAPE_TOWN_STORIES[0].title}
                </h2>
                <p className="mb-4 text-[var(--muted)]">
                  {CAPE_TOWN_STORIES[0].excerpt}
                </p>
                <p className="text-xs text-[var(--muted)]">
                  {CAPE_TOWN_STORIES[0].date} • {CAPE_TOWN_STORIES[0].author}
                </p>
              </div>
            </div>
          </Link>

          {/* Article Grid */}
          <p className="category-label mb-6">Latest Stories</p>
          <div className="grid gap-8 sm:grid-cols-2">
            {CAPE_TOWN_STORIES.slice(1).map((article) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                category={article.category}
                author={article.author}
                slug={article.slug}
                image={article.image}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-20">
            <TrendingStories stories={trendingStories} />

            {/* City Info Box */}
            <div className="mt-8 border border-[var(--border)] p-6">
              <h3
                className="mb-4 text-xl font-bold"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                About Cape Town
              </h3>
              <p className="mb-4 text-sm text-[var(--muted)]">
                Cape Town is a port city on South Africa&apos;s southwest
                coast, on a peninsula beneath the imposing Table Mountain.
                Known for its stunning natural beauty, vibrant culture, and
                rich history.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Population:</span>
                  <span className="font-medium">4.7 million</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Country:</span>
                  <span className="font-medium">South Africa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted)]">Status:</span>
                  <span className="font-medium text-green-600">Live</span>
                </div>
              </div>
            </div>

            {/* Other Cities */}
            <div className="mt-8">
              <h3 className="category-label mb-4">Coming Soon</h3>
              <div className="space-y-3">
                {['London', 'Miami', 'Dubai', 'California'].map((city) => (
                  <Link
                    key={city}
                    href={`/${city.toLowerCase()}`}
                    className="flex items-center justify-between border-b border-[var(--border)] pb-3 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                  >
                    <span>{city}</span>
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
