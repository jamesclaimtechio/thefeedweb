import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about The Feed - your trusted source for hot on the minute news from Cape Town and beyond. Created by BIOHACKERMATT.',
};

const TEAM_VALUES = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: 'Hot on the Minute',
    description:
      'We deliver news as it happens. No delays, no waiting — just real-time updates from the ground.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: 'Hyperlocal Focus',
    description:
      'Starting with Cape Town, we cover the stories that matter to your community. London, Miami, Dubai, and California coming soon.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: 'Trusted & Verified',
    description:
      'Every story is fact-checked and verified. We believe in responsible journalism that serves the public interest.',
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Community First',
    description:
      'We exist to serve our readers. Your stories, your voices, your news — amplified for the world to hear.',
  },
];

const MILESTONES = [
  { year: '2024', event: 'The Feed concept born' },
  { year: '2025', event: 'Development & planning phase' },
  { year: '2026', event: 'Cape Town edition launches' },
  { year: 'Soon', event: 'London, Miami, Dubai & California' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="category-label mb-4">About Us</p>
            <h1
              className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              News That Moves at Your Pace
            </h1>
            <p className="text-lg text-[var(--muted)] sm:text-xl">
              The Feed is a next-generation news platform built for the modern
              reader. We bring you hyperlocal stories from cities around the
              world — fast, accurate, and always relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="category-label mb-4">Our Story</p>
              <h2
                className="mb-6 text-3xl font-bold sm:text-4xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                From Cape Town to the World
              </h2>
              <div className="space-y-4 text-[var(--muted)]">
                <p>
                  The Feed was created with a simple mission: to deliver news
                  that matters, when it matters. In a world of information
                  overload, we cut through the noise to bring you the stories
                  that impact your daily life.
                </p>
                <p>
                  Starting in Cape Town — the vibrant Mother City of South
                  Africa — we&apos;re building a global network of hyperlocal
                  news coverage. From breaking news to community stories, we
                  cover it all with the speed and accuracy you deserve.
                </p>
                <p>
                  Our vision is to become the go-to source for local news in
                  cities around the world, starting with Cape Town and expanding
                  to London, Miami, Dubai, and California.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="lg:pl-8">
              <div className="relative border-l-2 border-[var(--accent)] pl-8">
                {MILESTONES.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative mb-8 last:mb-0"
                  >
                    <div className="absolute -left-[2.6rem] flex h-5 w-5 items-center justify-center rounded-full bg-[var(--accent)]">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                    <p className="text-sm font-semibold text-[var(--accent)]">
                      {milestone.year}
                    </p>
                    <p className="mt-1 font-medium">{milestone.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="category-label mb-4">What Drives Us</p>
            <h2
              className="text-3xl font-bold sm:text-4xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_VALUES.map((value, index) => (
              <div
                key={index}
                className="border border-[var(--border)] p-6 transition-all hover:border-[var(--accent)]"
              >
                <div className="mb-4 text-[var(--accent)]">{value.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-[var(--muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="category-label mb-4">Created By</p>
            <h2
              className="mb-6 text-3xl font-bold sm:text-4xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              BIOHACKERMATT
            </h2>
            <p className="mb-8 text-lg text-[var(--muted)]">
              The Feed was built from the ground up by BIOHACKERMATT — blending
              cutting-edge technology with a passion for meaningful journalism.
              Every pixel, every line of code, and every editorial decision is
              crafted to serve our readers better.
            </p>
            <div className="inline-flex items-center gap-2 border border-[var(--border)] bg-white px-6 py-3">
              <svg
                className="h-5 w-5 text-[var(--accent)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              <span className="font-medium">
                Built with code, powered by passion
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="mb-4 text-2xl font-bold sm:text-3xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ready to Stay Informed?
            </h2>
            <p className="mb-8 text-[var(--muted)]">
              Explore our latest stories or get in touch with our team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/cape-town" className="btn-subscribe">
                Explore Cape Town News
              </Link>
              <Link href="/contact" className="btn-read-more">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
