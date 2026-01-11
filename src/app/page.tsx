import Link from 'next/link';
import Image from 'next/image';
import {
  TrendingStories,
  FeaturedArticle,
  ArticleCard,
  NewsletterSection,
} from '@/components/ui';
import {
  CAPE_TOWN_STORIES,
  getFeaturedStory,
  getSecondaryFeaturedStory,
  getTrendingStories,
  getLatestStories,
} from '@/lib/stories';

// Transform stories to the format TrendingStories expects
const trendingStories = getTrendingStories(6).map((story, index) => ({
  id: String(index + 1),
  category: story.category,
  title: story.title,
  date: story.date,
  author: story.author,
  slug: story.slug,
}));

// Get stories for different sections
const featuredStory = getFeaturedStory();
const secondaryStory = getSecondaryFeaturedStory();
const spotlightStories = getLatestStories(4, 2); // Stories 3-6
const allCategoriesStories = getLatestStories(4, 6); // Stories 7-10
const sidebarStories = getLatestStories(4, 4); // Stories 5-8

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Three Column Layout */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Left - Trending Stories */}
            <div className="lg:col-span-3">
              <TrendingStories stories={trendingStories} />
            </div>

            {/* Center - Featured Image */}
            <div className="lg:col-span-5">
              <FeaturedArticle
                title={featuredStory.title}
                subtitle={featuredStory.category}
                excerpt={featuredStory.excerpt}
                image={featuredStory.image}
                slug={featuredStory.slug}
                layout="vertical"
              />
            </div>

            {/* Right - Article Preview */}
            <div className="flex flex-col justify-center lg:col-span-4">
              <p className="category-label mb-2">{secondaryStory.category}</p>
              <h2
                className="mb-4 text-3xl font-bold leading-tight md:text-4xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {secondaryStory.title}
              </h2>
              <p className="mb-6 text-[var(--muted)]">
                {secondaryStory.excerpt}
              </p>
              <div>
                <Link
                  href={`/article/${secondaryStory.slug}`}
                  className="btn-read-more"
                >
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
            title={CAPE_TOWN_STORIES[2].title}
            subtitle={CAPE_TOWN_STORIES[2].category}
            excerpt={CAPE_TOWN_STORIES[2].excerpt}
            image={CAPE_TOWN_STORIES[2].image}
            slug={CAPE_TOWN_STORIES[2].slug}
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
            {/* Left Sidebar - Recent Stories */}
            <div className="lg:col-span-3">
              <p className="category-label mb-4">Recent</p>
              <div className="space-y-0">
                {sidebarStories.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    title={article.title}
                    date={article.date}
                    category={article.category}
                    author={article.author}
                    slug={article.slug}
                    image={article.image}
                    variant="compact"
                  />
                ))}
              </div>
            </div>

            {/* Center - Featured Story */}
            <div className="lg:col-span-5">
              <Link
                href={`/article/${CAPE_TOWN_STORIES[3].slug}`}
                className="group block"
              >
                <div className="relative mb-6 aspect-square overflow-hidden bg-[var(--surface)]">
                  <Image
                    src={CAPE_TOWN_STORIES[3].image}
                    alt={CAPE_TOWN_STORIES[3].title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="mb-2 text-center text-2xl font-bold group-hover:text-[var(--accent)]"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {CAPE_TOWN_STORIES[3].title}
                </h3>
                <p className="text-center text-sm text-[var(--muted)]">
                  {CAPE_TOWN_STORIES[3].category}
                </p>
                <p className="mt-2 text-center text-sm">
                  By{' '}
                  <span className="text-[var(--accent)]">
                    {CAPE_TOWN_STORIES[3].author}
                  </span>
                </p>
              </Link>
            </div>

            {/* Right - More Stories */}
            <div className="lg:col-span-4">
              <p className="category-label mb-4">More Stories</p>

              {/* Main Story */}
              <Link
                href={`/article/${CAPE_TOWN_STORIES[8].slug}`}
                className="group mb-6 block"
              >
                <div className="relative mb-4 aspect-video overflow-hidden bg-[var(--surface)]">
                  <Image
                    src={CAPE_TOWN_STORIES[8].image}
                    alt={CAPE_TOWN_STORIES[8].title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-1 font-semibold group-hover:text-[var(--accent)]">
                  {CAPE_TOWN_STORIES[8].title}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {CAPE_TOWN_STORIES[8].author}
                </p>
              </Link>

              {/* Two smaller cards */}
              <div className="grid grid-cols-2 gap-4">
                {CAPE_TOWN_STORIES.slice(9, 11).map((article) => (
                  <Link
                    key={article.slug}
                    href={`/article/${article.slug}`}
                    className="group"
                  >
                    <div className="relative mb-2 aspect-square overflow-hidden bg-[var(--surface)]">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
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
            <p className="category-label">Cape Town</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spotlightStories.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="group"
              >
                <div className="relative mb-3 aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
            {allCategoriesStories.map((article) => (
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
      </section>
    </div>
  );
}
