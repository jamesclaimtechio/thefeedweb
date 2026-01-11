'use client';

import { useState } from 'react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="bg-[var(--foreground)] py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="mb-2 text-3xl font-bold text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Subscribe to The Newsletter
        </h2>
        <p className="mb-8 text-[var(--muted-foreground)]">
          Connected to the Most Critical Events
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full rounded-none border border-[var(--muted)] bg-transparent px-4 py-3 text-white placeholder:text-[var(--muted)] focus:border-white focus:outline-none sm:w-80"
            required
          />
          <button type="submit" className="btn-subscribe">
            Subscribe
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-green-400">
            Thank you! Your submission has been received!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-400">
            Oops! Something went wrong while submitting the form.
          </p>
        )}
      </div>
    </section>
  );
}
