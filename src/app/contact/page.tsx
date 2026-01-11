'use client';

import { useState } from 'react';
import Link from 'next/link';

const CONTACT_METHODS = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Email Us',
    value: 'hello@thefeed.news',
    href: 'mailto:hello@thefeed.news',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    title: 'Instagram',
    value: '@thefeedcpt',
    href: 'https://instagram.com/thefeedcpt',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    title: 'Twitter',
    value: '@thefeedcpt',
    href: 'https://twitter.com/thefeedcpt',
  },
];

const INQUIRY_TYPES = [
  'General Inquiry',
  'News Tip',
  'Advertising',
  'Partnership',
  'Feedback',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', inquiryType: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="category-label mb-4">Get In Touch</p>
            <h1
              className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              We&apos;d Love to Hear From You
            </h1>
            <p className="text-lg text-[var(--muted)] sm:text-xl">
              Have a news tip? Want to collaborate? Or just want to say hello?
              Drop us a message and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <p className="category-label mb-4">Send a Message</p>
              <h2
                className="mb-8 text-2xl font-bold sm:text-3xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Contact Form
              </h2>

              {isSubmitted ? (
                <div className="border border-green-200 bg-green-50 p-8 text-center">
                  <svg
                    className="mx-auto mb-4 h-12 w-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mb-2 text-xl font-semibold text-green-800">
                    Message Sent!
                  </h3>
                  <p className="mb-4 text-green-700">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm font-medium text-green-600 underline hover:text-green-800"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm transition-colors focus:border-[var(--accent)] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm transition-colors focus:border-[var(--accent)] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="mb-2 block text-sm font-medium"
                    >
                      Type of Inquiry
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full border border-[var(--border)] bg-white px-4 py-3 text-sm transition-colors focus:border-[var(--accent)] focus:outline-none"
                    >
                      <option value="">Select an option</option>
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none border border-[var(--border)] bg-white px-4 py-3 text-sm transition-colors focus:border-[var(--accent)] focus:outline-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-subscribe w-full disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <p className="category-label mb-4">Other Ways to Reach Us</p>
              <h2
                className="mb-8 text-2xl font-bold sm:text-3xl"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Connect With Us
              </h2>

              <div className="space-y-6">
                {CONTACT_METHODS.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      method.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex items-start gap-4 border border-[var(--border)] p-4 transition-all hover:border-[var(--accent)]"
                  >
                    <div className="text-[var(--accent)]">{method.icon}</div>
                    <div>
                      <p className="font-medium group-hover:text-[var(--accent)]">
                        {method.title}
                      </p>
                      <p className="text-sm text-[var(--muted)]">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Creator Attribution */}
              <div className="mt-12 border-t border-[var(--border)] pt-8">
                <p className="category-label mb-4">Built By</p>
                <div className="border border-[var(--accent)] bg-[var(--surface)] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center bg-[var(--accent)] text-xl font-bold text-white">
                      BM
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">BIOHACKERMATT</h3>
                      <p className="text-sm text-[var(--muted)]">
                        Creator & Developer
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[var(--muted)]">
                    The Feed was designed and developed by BIOHACKERMATT — from
                    concept to code, every aspect is crafted with care.
                  </p>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="mt-8">
                <h3 className="mb-4 font-semibold">Common Questions</h3>
                <div className="space-y-4">
                  <div className="border-b border-[var(--border)] pb-4">
                    <p className="font-medium">How can I submit a news tip?</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Use the form above and select &quot;News Tip&quot; as your inquiry
                      type.
                    </p>
                  </div>
                  <div className="border-b border-[var(--border)] pb-4">
                    <p className="font-medium">
                      When will other cities launch?
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      London, Miami, Dubai, and California are coming soon.
                      Follow us for updates!
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      Do you accept guest contributors?
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      Yes! Reach out via the form with your pitch and samples.
                    </p>
                  </div>
                </div>
              </div>
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
              Want to Learn More?
            </h2>
            <p className="mb-8 text-[var(--muted)]">
              Discover our story and what drives The Feed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/about" className="btn-subscribe">
                About The Feed
              </Link>
              <Link href="/cape-town" className="btn-read-more">
                Explore Cape Town
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
