import { Metadata } from 'next';
import Link from 'next/link';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Convert slug to readable title
function formatArticleTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleTitle = formatArticleTitle(slug);

  return {
    title: `${articleTitle} | The Feed - Coming Soon`,
    description: `Read about ${articleTitle} on The Feed. Article coming soon!`,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articleTitle = formatArticleTitle(slug);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <svg
          className="h-12 w-12 text-zinc-400 dark:text-zinc-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Article Coming Soon
      </h1>
      <p className="mt-4 max-w-lg text-lg text-zinc-500 dark:text-zinc-400">
        &ldquo;{articleTitle}&rdquo;
      </p>
      <p className="mt-6 max-w-md text-zinc-600 dark:text-zinc-400">
        We&apos;re working on this article. Check back soon for the full story!
      </p>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
