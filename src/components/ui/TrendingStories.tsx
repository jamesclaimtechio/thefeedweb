import Link from 'next/link';

interface TrendingStory {
  id: string;
  category: string;
  title: string;
  date: string;
  author: string;
  slug: string;
}

interface TrendingStoriesProps {
  stories: TrendingStory[];
}

// Mock data for demo
export const MOCK_TRENDING_STORIES: TrendingStory[] = [
  {
    id: '1',
    category: 'Breaking',
    title: 'Major Development in Table Mountain Conservation Efforts',
    date: '11/01/2026',
    author: 'Sarah Johnson',
    slug: 'table-mountain-conservation',
  },
  {
    id: '2',
    category: 'Local',
    title: 'New Transport Routes Announced for Cape Town CBD',
    date: '11/01/2026',
    author: 'Michael Peters',
    slug: 'new-transport-routes',
  },
  {
    id: '3',
    category: 'Politics',
    title: 'City Council Approves Historic Budget Allocation',
    date: '10/01/2026',
    author: 'Emma Williams',
    slug: 'city-council-budget',
  },
  {
    id: '4',
    category: 'Business',
    title: 'Tech Startup Hub Opens in Woodstock District',
    date: '10/01/2026',
    author: 'David Chen',
    slug: 'tech-startup-hub',
  },
  {
    id: '5',
    category: 'Sports',
    title: 'Stormers Secure Historic Victory in Championship',
    date: '09/01/2026',
    author: 'James Miller',
    slug: 'stormers-victory',
  },
  {
    id: '6',
    category: 'Technology',
    title: 'Solar Farm Project Set to Power Thousands of Homes',
    date: '09/01/2026',
    author: 'Lisa Anderson',
    slug: 'solar-farm-project',
  },
];

export function TrendingStories({ stories }: TrendingStoriesProps) {
  return (
    <div className="w-full">
      <h2
        className="mb-6 text-2xl italic text-[var(--accent)]"
        style={{ fontFamily: 'var(--font-playfair)' }}
      >
        Trending Stories
      </h2>

      <div className="space-y-0">
        {stories.map((story, index) => (
          <Link
            key={story.id}
            href={`/article/${story.slug}`}
            className="group block border-b border-[var(--border)] py-4 first:pt-0 last:border-b-0"
          >
            <p className="category-label mb-2">{story.category}</p>
            <div className="flex items-start gap-3">
              <span className="trending-number">{index + 1}</span>
              <div className="flex-1">
                <h3 className="mb-1 font-semibold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)]">
                  {story.title}
                </h3>
                <p className="text-xs text-[var(--muted)]">
                  {story.date} • {story.author}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
