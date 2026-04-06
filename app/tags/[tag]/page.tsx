import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ArticleCard } from '@/app/components/ArticleCard';
import { getArticlesByTag, getAllTags } from '@/lib/articles';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const tagName = params.tag.replace(/-/g, ' ');

  return {
    title: `${tagName} - HisJourney Divorce Support`,
    description: `Articles tagged with ${tagName} for men going through divorce in Australia.`,
  };
}

export default function TagPage({ params }: TagPageProps) {
  const tagName = params.tag.replace(/-/g, ' ');
  const articles = getArticlesByTag(tagName);

  if (articles.length === 0) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <Link href="/articles" className="text-primary-600 hover:text-primary-700 mb-4">
              ← Back to Articles
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {tagName}
            </h1>
            <p className="text-xl text-slate-600">
              {articles.length} {articles.length === 1 ? 'article' : 'articles'} tagged with{' '}
              <span className="font-semibold">{tagName}</span>
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function getAllTags() {
  const { getAllTags: getAllTagsList } = require('@/lib/articles');
  return getAllTagsList();
}

function getArticlesByTag(tag: string) {
  const { getArticlesByTag: getByTag } = require('@/lib/articles');
  return getByTag(tag);
}
