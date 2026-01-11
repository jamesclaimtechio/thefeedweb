import Image from 'next/image';
import Link from 'next/link';

interface FeaturedArticleProps {
  title: string;
  subtitle?: string;
  excerpt: string;
  image: string;
  slug: string;
  category?: string;
  layout?: 'horizontal' | 'vertical';
}

export function FeaturedArticle({
  title,
  subtitle,
  excerpt,
  image,
  slug,
  category,
  layout = 'vertical',
}: FeaturedArticleProps) {
  if (layout === 'horizontal') {
    return (
      <Link href={`/article/${slug}`} className="group block">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
                <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
                  <svg
                    className="h-16 w-16 opacity-50"
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
          <div className="flex flex-col justify-center">
            <h2
              className="mb-4 text-3xl font-bold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)] md:text-4xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                {subtitle}
              </p>
            )}
            <p className="mb-6 text-[var(--muted)]">{excerpt}</p>
            <div>
              <span className="btn-read-more">Read More</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/article/${slug}`} className="group block">
      {/* Image */}
      <div className="relative mb-6 aspect-[4/3] overflow-hidden bg-[var(--surface)]">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300" />
            <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
              <svg
                className="h-20 w-20 opacity-50"
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
        <h2
          className="mb-3 text-2xl font-bold leading-tight text-[var(--foreground)] group-hover:text-[var(--accent)] md:text-3xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
            {subtitle}
          </p>
        )}
        <p className="mb-4 text-[var(--muted)]">{excerpt}</p>
        <span className="btn-read-more">Read More</span>
      </div>
    </Link>
  );
}
