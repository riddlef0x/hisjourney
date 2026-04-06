import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HisJourney - Divorce Support for Men in Australia',
  description: 'Professional divorce support resources for men going through separation. Expert advice on emotional, financial, legal, and parenting matters.',
  keywords: 'divorce support, men divorce, Australian resources, separation counselling, family law',
  openGraph: {
    title: 'HisJourney - Divorce Support for Men in Australia',
    description: 'Professional divorce support resources for men going through separation.',
    url: 'https://hisjourney.org',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HisJourney - Divorce Support for Men in Australia',
    description: 'Professional divorce support resources for men going through separation.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://hisjourney.org" />
      </head>
      <body className="antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
