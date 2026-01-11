'use client';

import Link from 'next/link';
import { useState } from 'react';

const CATEGORIES = [
  { name: 'Breaking', slug: 'breaking' },
  { name: 'Local', slug: 'local' },
  { name: 'Politics', slug: 'politics' },
  { name: 'Business', slug: 'business' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Technology', slug: 'technology' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      {/* Top Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between border-b border-[var(--border)]">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Facebook"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Twitter"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <button
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              aria-label="Search"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Masthead */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <h1
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: 'var(--font-oswald)' }}
            >
              THE FEED
            </h1>
          </Link>

          {/* Right Links */}
          <div className="hidden items-center gap-6 sm:flex">
            <Link
              href="/about"
              className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--muted)]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Category Navigation */}
        <nav className="hidden border-b border-[var(--border)] md:block">
          <ul className="flex items-center justify-center gap-8 py-3">
            {CATEGORIES.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/category/${category.slug}`}
                  className="text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--accent)]"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-[var(--border)] bg-white md:hidden">
          <div className="px-4 py-4">
            <div className="mb-4 flex gap-4">
              <Link
                href="/about"
                className="text-sm font-medium text-[var(--foreground)]"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-[var(--foreground)]"
              >
                Contact
              </Link>
            </div>
            <div className="border-t border-[var(--border)] pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                Categories
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {CATEGORIES.map((category) => (
                  <li key={category.slug}>
                    <Link
                      href={`/category/${category.slug}`}
                      className="text-sm text-[var(--foreground)]"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
