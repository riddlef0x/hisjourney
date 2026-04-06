import Link from 'next/link';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArticleCard } from './components/ArticleCard';
import { getPublishedArticles, getAllCategories } from '@/lib/articles';

export default function Home() {
  const articles = getPublishedArticles();
  const categories = getAllCategories();
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-900 to-primary-900 text-white py-20">
          <div className="container-section">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Divorce Support for Men
              </h1>
              <p className="text-xl text-slate-200 mb-8">
                Navigate divorce with confidence. Access expert guidance on emotional, financial, legal, and parenting challenges specific to men going through separation in Australia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/articles" className="button-primary">
                  Explore Articles
                </Link>
                <Link href="/resources" className="button-outline text-white border-white hover:bg-white/10">
                  Find Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Featured Articles</h2>
              <p className="text-slate-600">Start your journey to healing with our most helpful resources</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/articles" className="button-primary">
                View All Articles ({articles.length})
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-slate-50">
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-2">Browse by Category</h2>
              <p className="text-slate-600">Find articles tailored to your specific situation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase()}`}
                  className="card text-center hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto">
                      <span className="text-2xl">📚</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{category}</h3>
                  <p className="text-sm text-slate-600">Explore resources</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-50">
          <div className="container-section">
            <div className="bg-primary-600 rounded-xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-4">Struggling with Your Situation?</h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                You don't have to go through this alone. Connect with professional support services and resources specifically for Australian men.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://mensline.org.au" target="_blank" rel="noopener noreferrer" className="button bg-white text-primary-600 hover:bg-slate-100">
                  MensLine Australia (1300 78 99 78)
                </a>
                <a href="https://www.beyondblue.org.au" target="_blank" rel="noopener noreferrer" className="button border-2 border-white text-white hover:bg-white/10">
                  Beyond Blue (1300 22 4636)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Why HisJourney?</h2>
                <p className="text-slate-600 mb-4">
                  Divorce impacts men differently. While women often have established support networks and resources, men frequently face unique challenges in accessing help and guidance.
                </p>
                <p className="text-slate-600 mb-4">
                  HisJourney provides expert, compassionate support tailored to men going through divorce in Australia. Our comprehensive articles cover emotional, financial, legal, and parenting aspects of separation.
                </p>
                <ul className="space-y-3">
                  {['Expert guidance from divorce specialists', 'Australia-specific resources', 'Emotional & practical support', 'Co-parenting strategies', 'Financial planning tools'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💙</div>
                  <p className="text-slate-700 text-lg font-semibold">
                    Supporting Men Through Divorce
                  </p>
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
