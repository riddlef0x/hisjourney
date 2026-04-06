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
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
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
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
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

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="card sticky top-20">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Filter by Tag</h3>
                  <div className="space-y-2">
                    {tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag.toLowerCase()}`}
                        className="block px-3 py-2 rounded-lg bg-slate-50 hover:bg-primary-50 text-slate-700 hover:text-primary-600 text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Resources CTA */}
                <div className="card mt-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Need Immediate Help?</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    If you're in crisis or need immediate support, please reach out to these services:
                  </p>
                  <div className="space-y-3 text-sm">
                    <a
                      href="https://mensline.org.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      MensLine Australia<br />
                      <span className="text-slate-600 font-normal">1300 78 99 78</span>
                    </a>
                    <a
                      href="https://www.beyondblue.org.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Beyond Blue<br />
                      <span className="text-slate-600 font-normal">1300 22 4636</span>
                    </a>
                  </div>
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
