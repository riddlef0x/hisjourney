import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { getArticleBySlug, getPublishedArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = getPublishedArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.seo.title} - HisJourney`,
    description: article.seo.description,
    keywords: article.seo.keywords.join(', '),
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      type: 'article',
      publishedTime: article.publishDate,
      authors: [article.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.social.title,
      description: article.social.description,
    },
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const publishDate = new Date(article.publishDate).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.categories.map((cat) => (
                <span key={cat} className="badge-primary">
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-600">
              <span>{publishDate}</span>
              <span>•</span>
              <span>By {article.author.name}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Article */}
              <div className="lg:col-span-2">
                {/* Article Image */}
                <div className="mb-8 bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl h-80 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl font-bold">{article.title.charAt(0)}</div>
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <article className="prose max-w-none mb-8">
                  <div
                    className="text-slate-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: article.content
                        .replace(/^## /gm, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">')
                        .replace(/^### /gm, '<h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">')
                        .replace(/^#### /gm, '<h4 class="text-lg font-bold text-slate-800 mt-4 mb-2">')
                        .replace(/<h2[^>]*>/g, '<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">')
                        .replace(/<h3[^>]*>/g, '<h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">')
                        .replace(/<h4[^>]*>/g, '<h4 class="text-lg font-bold text-slate-800 mt-4 mb-2">')
                        .replace(/<p>/g, '<p class="mb-4 text-slate-700">')
                        .replace(/<ul>/g, '<ul class="list-disc list-inside mb-4 space-y-2">')
                        .replace(/<ol>/g, '<ol class="list-decimal list-inside mb-4 space-y-2">')
                        .replace(/<li>/g, '<li class="text-slate-700">')
                        .replace(/<a /g, '<a class="text-primary-600 hover:text-primary-700 underline" '),
                    }}
                  />
                </article>

                {/* Tags */}
                <div className="border-t border-slate-200 pt-8 mb-8">
                  <p className="text-sm text-slate-600 mb-3 font-semibold">Tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/tags/${tag.toLowerCase()}`}
                        className="badge hover:badge-primary"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Author Card */}
                <div className="card mb-8 sticky top-20">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl">
                      👤
                    </div>
                    <h3 className="font-bold text-slate-900">{article.author.name}</h3>
                    <p className="text-sm text-primary-600 font-semibold mb-3">
                      {article.author.role}
                    </p>
                    <p className="text-sm text-slate-600">
                      {article.author.bio}
                    </p>
                  </div>
                </div>

                {/* Related Articles */}
                <div className="card mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {getPublishedArticles()
                      .filter(
                        (a) =>
                          a.slug !== article.slug &&
                          a.categories.some((cat) =>
                            article.categories.includes(cat)
                          )
                      )
                      .slice(0, 3)
                      .map((relatedArticle) => (
                        <Link
                          key={relatedArticle.id}
                          href={`/articles/${relatedArticle.slug}`}
                          className="block group"
                        >
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {relatedArticle.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {relatedArticle.categories[0]}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Resources CTA */}
                <div className="card bg-primary-50 border-primary-200">
                  <h3 className="font-bold text-slate-900 mb-3">Need Support?</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Professional help is available. Connect with services designed for men.
                  </p>
                  <a
                    href="https://mensline.org.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary text-sm w-full text-center"
                  >
                    MensLine Australia
                  </a>
                  <p className="text-xs text-slate-500 mt-3 text-center">
                    1300 78 99 78 • 24/7 Counselling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-slate-50">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to explore more?
              </h2>
              <p className="text-slate-600 mb-6">
                Access our complete library of articles and resources to support you through every stage of divorce.
              </p>
              <Link href="/articles" className="button-primary">
                Browse All Articles
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function getPublishedArticles() {
  const { getPublishedArticles: getPub } = require('@/lib/articles');
  return getPub();
}
