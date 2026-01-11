import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display, Oswald } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'The Feed | Hot on the Minute News',
    template: '%s | The Feed',
  },
  description:
    'Your trusted source for breaking news and local stories. Hot on the minute coverage from Cape Town, with London, Miami, Dubai, and California coming soon.',
  keywords: [
    'news',
    'breaking news',
    'Cape Town',
    'local news',
    'The Feed',
    'South Africa',
  ],
  authors: [{ name: 'The Feed' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'The Feed',
    title: 'The Feed | Hot on the Minute News',
    description:
      'Your trusted source for breaking news and local stories from Cape Town and beyond.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Feed | Hot on the Minute News',
    description:
      'Your trusted source for breaking news and local stories from Cape Town and beyond.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${oswald.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
