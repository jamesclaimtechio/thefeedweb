import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dubai News | The Feed - Coming Soon',
  description:
    'The Feed is expanding to Dubai! Stay tuned for breaking news and local stories from the UAE.',
};

export default function DubaiPage() {
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Dubai
      </h1>
      <p className="mt-2 text-xl text-zinc-500 dark:text-zinc-400">
        Coming Soon
      </p>
      <p className="mt-6 max-w-md text-zinc-600 dark:text-zinc-400">
        We&apos;re expanding The Feed to Dubai! Sign up to be notified when we
        launch coverage in the UAE.
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
