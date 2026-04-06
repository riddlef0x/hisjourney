import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { getAllCategories, getArticlesByCategory } from '@/lib/articles';

export const metadata = {
  title: 'Categories - HisJourney Divorce Support',
  description: 'Browse divorce support articles by category. Find resources on emotional, financial, legal, and parenting matters.',
  openGraph: {
    title: 'Categories - HisJourney Divorce Support',
    description: 'Browse divorce support articles by category.',
  },
};

const categoryEmojis: Record<string, string> = {
  'Pre-Divorce': '⚠️',
  'Divorce': '📋',
  'Emotional': '💙',
  'Financial': '💰',
  'Legal': '⚖️',
  'Children': '👨‍👧‍👦',
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Browse by Category
            </h1>
            <p className="text-xl text-slate-600">
              Find articles tailored to your specific situation and needs.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => {
                const articles = getArticlesByCategory(category);
                const emoji = categoryEmojis[category] || '📚';

                return (
                  <Link
                    key={category}
                    href={`/categories/${category.toLowerCase()}`}
                    className="card group"
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-4xl">{emoji}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
                      {category}
                    </h3>

                    <p className="text-slate-600 mb-6">
                      {articles.length} {articles.length === 1 ? 'article' : 'articles'}
                    </p>

                    <div className="flex items-center gap-2 text-primary-600 group-hover:gap-3 transition-all">
                      <span>Explore</span>
                      <span>→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Categories Details */}
        <section className="py-16 bg-slate-50">
          <div className="container-section">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Category Details</h2>

            <div className="space-y-8">
              {categories.map((category) => {
                const articles = getArticlesByCategory(category);

                return (
                  <div key={category} className="card">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {category}
                    </h3>

                    <p className="text-slate-600 mb-6">
                      {articles.length} {articles.length === 1 ? 'article' : 'articles'} in this category
                    </p>

                    <ul className="space-y-3 mb-6">
                      {articles.map((article) => (
                        <li key={article.id}>
                          <Link
                            href={`/articles/${article.slug}`}
                            className="text-primary-600 hover:text-primary-700 font-semibold"
                          >
                            {article.title}
                          </Link>
                          <p className="text-sm text-slate-600 mt-1">
                            {article.description}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/categories/${category.toLowerCase()}`}
                      className="button-outline text-sm"
                    >
                      View Category →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
