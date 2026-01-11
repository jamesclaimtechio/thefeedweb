import Link from 'next/link';
import {
  TrendingStories,
  MOCK_TRENDING_STORIES,
  FeaturedArticle,
  ArticleCard,
  NewsletterSection,
} from '@/components/ui';

// Extended mock data for articles
const SPOTLIGHT_ARTICLES = [
  {
    title: 'Exploring Cape Town Culinary Scene',
    date: '11/01/2026',
    category: 'Food',
    author: 'Martha Collins',
    slug: 'culinary-scene',
  },
  {
    title: 'Hidden Gems of the Winelands',
    date: '10/01/2026',
    category: 'Food',
    author: 'Thomas Newman',
    slug: 'winelands-gems',
  },
  {
    title: 'Street Food Revolution',
    date: '09/01/2026',
    category: 'Food',
    author: 'Sarah Johnson',
    slug: 'street-food',
  },
  {
    title: 'Farm to Table Movement',
    date: '08/01/2026',
    category: 'Food',
    author: 'Michael Peters',
    slug: 'farm-to-table',
  },
];

const ALL_ARTICLES = [
  {
    title: 'Cape Town Leads the Way in Sustainable Development',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    date: '11/01/2026',
    category: 'Local',
    author: 'Sarah Johnson',
    slug: 'sustainable-development',
  },
  {
    title: 'New Cultural Hub Opens in Historic District',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    date: '10/01/2026',
    category: 'Culture',
    author: 'Michael Peters',
    slug: 'cultural-hub',
  },
  {
    title: 'Tech Innovation Driving Economic Growth',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    date: '10/01/2026',
    category: 'Business',
    author: 'Emma Williams',
    slug: 'tech-innovation',
  },
  {
    title: 'Community Gardens Transform Urban Spaces',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    date: '09/01/2026',
    category: 'Local',
    author: 'David Chen',
    slug: 'community-gardens',
  },
];

const SIDEBAR_ARTICLES = [
  {
    title: 'Architecture of Tomorrow',
    date: '11/01/2026',
    category: 'Design',
    author: 'Enzo Romano',
    slug: 'architecture-tomorrow',
  },
  {
    title: 'No Fear Of Perfection',
    date: '10/01/2026',
    category: 'Design',
    author: 'Martha Collins',
    slug: 'no-fear-perfection',
  },
  {
    title: 'The Light Goes Out',
    date: '09/01/2026',
    category: 'Design',
    author: 'Thomas Newman',
    slug: 'light-goes-out',
  },
  {
    title: 'Your Comfort Zone',
    date: '08/01/2026',
    category: 'Design',
    author: 'Enzo Romano',
    slug: 'comfort-zone',
  },
];

const OPINION_ARTICLES = [
  {
    title: 'Green Transition Is Happening Fast',
    author: 'Liv Gunther',
    slug: 'green-transition',
  },
  {
    title: '2 Wrongs Makes a Right',
    author: 'Thomas Newman',
    slug: 'two-wrongs',
  },
  {
    title: 'Is There Any End',
    author: 'Liv Gunther',
    slug: 'is-there-any-end',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Three Column Layout */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left - Trending Stories */}
            <div className="lg:col-span-3">
              <TrendingStories stories={MOCK_TRENDING_STORIES} />
            </div>

            {/* Center - Featured Image */}
            <div className="lg:col-span-5">
              <FeaturedArticle
                title="Cape Town Leads the Way in Sustainable Urban Development"
                subtitle="A New Era for South African Cities"
                excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
                image="/featured-1.jpg"
                slug="sustainable-development"
                layout="vertical"
              />
            </div>

            {/* Right - Article Preview */}
            <div className="flex flex-col justify-center lg:col-span-4">
              <h2
                className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Find Out Why This Is The Right Thing
              </h2>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                Temporibus modi voluptate
              </p>
              <p className="mb-6 text-[var(--muted)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </p>
              <div>
                <Link href="/article/right-thing" className="btn-read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Featured Article - Horizontal */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <FeaturedArticle
            title="Community Comes Together for Historic Celebration"
            subtitle="Temporibus modi voluptate"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."
            image="/featured-2.jpg"
            slug="historic-celebration"
            layout="horizontal"
          />
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Three Column Content Section */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left Sidebar - Design Articles */}
            <div className="lg:col-span-3">
              <p className="category-label mb-4">Design</p>
              <div className="space-y-0">
                {SIDEBAR_ARTICLES.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    {...article}
                    variant="compact"
                  />
                ))}
              </div>
            </div>

            {/* Center - Featured Tech Article */}
            <div className="lg:col-span-5">
              <Link href="/article/tech-future" className="group block">
                <div className="relative mb-6 aspect-square overflow-hidden bg-[var(--surface)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
                    <svg
                      className="h-20 w-20 opacity-30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                </div>
                <h3
                  className="mb-2 text-center text-2xl font-bold group-hover:text-[var(--accent)]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  Believing Their Own Hype
                </h3>
                <p className="text-center text-sm text-[var(--muted)]">
                  Temporibus modi voluptate
                </p>
                <p className="mt-2 text-center text-sm">
                  By{' '}
                  <span className="text-[var(--accent)]">Thomas Newman</span>
                </p>
              </Link>
            </div>

            {/* Right - Opinion Articles */}
            <div className="lg:col-span-4">
              <p className="category-label mb-4">Opinion</p>

              {/* Main Opinion Article */}
              <Link
                href="/article/green-transition"
                className="group mb-6 block"
              >
                <div className="relative mb-4 aspect-video overflow-hidden bg-[var(--surface)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
                </div>
                <h3 className="mb-1 font-semibold group-hover:text-[var(--accent)]">
                  Green Transition Is Happening Fast
                </h3>
                <p className="text-sm text-[var(--muted)]">Liv Gunther</p>
              </Link>

              {/* Two smaller opinion cards */}
              <div className="grid grid-cols-2 gap-4">
                {OPINION_ARTICLES.slice(1).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/article/${article.slug}`}
                    className="group"
                  >
                    <div className="relative mb-2 aspect-square overflow-hidden bg-[var(--surface)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
                    </div>
                    <h4 className="text-sm font-semibold group-hover:text-[var(--accent)]">
                      {article.title}
                    </h4>
                    <p className="text-xs text-[var(--muted)]">
                      {article.author}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2
              className="mb-2 text-3xl font-bold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Spotlight
            </h2>
            <p className="category-label">Food</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SPOTLIGHT_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="group"
              >
                <div className="relative mb-3 aspect-[4/3] overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
                </div>
                <h3 className="font-semibold group-hover:text-[var(--accent)]">
                  {article.title}
                </h3>
                <div className="divider my-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="category-label mb-8">All Categories</p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ALL_ARTICLES.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
