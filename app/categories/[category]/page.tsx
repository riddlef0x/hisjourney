import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ArticleCard } from '@/app/components/ArticleCard';
import { getArticlesByCategory, getAllCategories } from '@/lib/articles';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryName = params.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');

  return {
    title: `${categoryName} - HisJourney Divorce Support`,
    description: `Articles about ${categoryName.toLowerCase()} for men going through divorce in Australia.`,
    openGraph: {
      title: `${categoryName} - HisJourney Divorce Support`,
      description: `Articles about ${categoryName.toLowerCase()} for men going through divorce in Australia.`,
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = params.category
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('-');

  const articles = getArticlesByCategory(categoryName);

  if (articles.length === 0) {
    notFound();
  }

  const categoryDescriptions: Record<string, string> = {
    'Pre-Divorce':
      'Resources to help you make informed decisions about your marriage and relationship breakdown.',
    'Divorce':
      'Comprehensive guides to navigating the separation process and moving forward.',
    'Emotional':
      'Support for managing the emotional challenges and mental health aspects of divorce.',
    'Financial':
      'Guidance on financial planning, asset division, and rebuilding your financial independence.',
    'Legal':
      'Understanding your rights, legal processes, and family law matters in Australia.',
    'Children':
      'Co-parenting strategies and support for navigating divorce when children are involved.',
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <Link href="/categories" className="text-primary-600 hover:text-primary-700 mb-4">
              ← Back to Categories
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {categoryName}
            </h1>
            <p className="text-xl text-slate-600">
              {categoryDescriptions[categoryName] ||
                `Explore articles about ${categoryName.toLowerCase()}`}
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container-section">
            <div className="mb-8">
              <p className="text-slate-600">
                Showing <strong>{articles.length}</strong>{' '}
                {articles.length === 1 ? 'article' : 'articles'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Other Categories */}
        <section className="py-16 bg-slate-50">
          <div className="container-section">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Explore Other Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAllCategories()
                .filter((cat) => cat !== categoryName)
                .map((cat) => (
                  <Link
                    key={cat}
                    href={`/categories/${cat.toLowerCase()}`}
                    className="card hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">{cat}</h3>
                    <p className="text-sm text-slate-600">
                      {getArticlesByCategory(cat).length} articles
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function getAllCategories() {
  const { getAllCategories: getAllCats } = require('@/lib/articles');
  return getAllCats();
}

function getArticlesByCategory(category: string) {
  const { getArticlesByCategory: getByCategory } = require('@/lib/articles');
  return getByCategory(category);
}
