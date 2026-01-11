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
