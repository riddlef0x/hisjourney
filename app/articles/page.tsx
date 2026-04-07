import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ArticleCard } from '@/app/components/ArticleCard';
import { getPublishedArticles, getAllTags } from '@/lib/articles';

export const metadata = {
  title: 'All Articles - HisJourney Divorce Support',
  description: 'Browse all our divorce support articles for men in Australia. Expert guidance on emotional, financial, legal, and parenting matters.',
  openGraph: {
    title: 'All Articles - HisJourney Divorce Support',
    description: 'Browse all our divorce support articles for men in Australia.',
  },
};

export default function ArticlesPage() {
  const articles = getPublishedArticles();
  const tags = getAllTags();

  return (
    <>
      <Header />

      <main>
        {/* Hero - Sophisticated background */}
        <section style={{ backgroundColor: '#F4F4F0' }} className="py-12">
          <div className="container-section">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              All Articles
            </h1>
            <p className="text-xl text-slate-600">
              Expert guidance on navigating divorce. {articles.length} articles covering emotional, financial, legal, and parenting support.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-section">
            {/* Tags - Horizontal scrollable pills at top */}
            <div className="mb-12 overflow-x-auto pb-4">
              <div className="flex gap-2 flex-nowrap">
                <Link
                  href="/articles"
                  className="px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200"
                  style={{ 
                    backgroundColor: '#0A1128',
                    color: '#FFFFFF'
                  }}
                >
                  All Articles
                </Link>
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/tags/${tag.toLowerCase()}`}
                    className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium whitespace-nowrap transition-colors duration-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div>
              <div className="mb-8">
                <p className="text-slate-600">
                  Showing <strong>{articles.length}</strong> articles
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            {/* Resources CTA - Below articles */}
            <div className="mt-16 pt-12 border-t border-slate-100">
              <div className="max-w-2xl">
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-4" style={{ color: '#0A1128' }}>Need Immediate Help?</h3>
                <p className="text-sm text-slate-600 mb-6">
                  If you're in crisis or need immediate support, please reach out to these services:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://mensline.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover p-6 group rounded-lg"
                  >
                    <div className="font-serif font-bold text-slate-900 mb-2" style={{ color: '#0A1128' }}>
                      MensLine Australia
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      24/7 support line for men. Professional, confidential.
                    </p>
                    <div className="font-mono font-bold" style={{ color: '#0A1128' }}>
                      1300 78 99 78
                    </div>
                  </a>
                  <a
                    href="https://www.beyondblue.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-hover p-6 group rounded-lg"
                  >
                    <div className="font-serif font-bold text-slate-900 mb-2" style={{ color: '#0A1128' }}>
                      Beyond Blue
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                      Mental health and emotional wellbeing support.
                    </p>
                    <div className="font-mono font-bold" style={{ color: '#0A1128' }}>
                      1300 22 4636
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
