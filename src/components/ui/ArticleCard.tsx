import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  excerpt?: string;
  image?: string;
  date: string;
  category: string;
  author: string;
  slug: string;
  variant?: 'default' | 'compact' | 'horizontal';
}

export function ArticleCard({
  title,
  excerpt,
  image,
  date,
  category,
  author,
  slug,
  variant = 'default',
}: ArticleCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        href={`/article/${slug}`}
        className="group flex gap-4 border-b border-[var(--border)] py-4"
      >
        {/* Thumbnail */}
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden bg-[var(--surface)]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="mb-1 font-semibold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--muted)]">{date}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link
        href={`/article/${slug}`}
        className="group flex gap-6 border-b border-[var(--border)] py-6"
      >
        {/* Thumbnail */}
        <div className="relative aspect-square w-32 flex-shrink-0 overflow-hidden bg-[var(--surface)]">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <p className="category-label mb-2">{category}</p>
          <h3 className="mb-2 text-lg font-semibold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--muted)]">
            {date} • {author}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${slug}`} className="article-card group block">
      {/* Image */}
      <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-[var(--surface)]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="article-image object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="article-image absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
            {/* Placeholder icon */}
            <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
              <svg
                className="h-12 w-12 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div>
        <h3
          className="mb-2 text-lg font-bold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)]"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {title}
        </h3>
        {excerpt && (
          <p className="mb-3 line-clamp-3 text-sm text-[var(--muted)]">
            {excerpt}
          </p>
        )}
        <div className="flex items-center gap-2 text-xs text-[var(--muted)]">
          <span>{date}</span>
          <span>•</span>
          <span>{category}</span>
          <span>•</span>
          <span>{author}</span>
        </div>
      </div>
    </Link>
  );
}
