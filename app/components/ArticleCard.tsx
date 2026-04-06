import Link from 'next/link';
import type { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const publishDate = new Date(article.publishDate).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="card group">
      {/* Thumbnail */}
      <div className="mb-4 bg-gradient-to-br from-primary-100 to-navy-100 rounded-lg h-40 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl font-bold">{article.title.charAt(0)}</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-3">
        {article.categories.slice(0, 2).map((cat) => (
          <span key={cat} className="badge-primary text-xs">
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <Link href={`/articles/${article.slug}`}>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2 line-clamp-2">
          {article.title}
        </h3>
      </Link>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
        {article.description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-sm text-slate-500 mb-4 pt-4 border-t border-slate-200">
        <span className="font-medium text-slate-700">{article.author.name}</span>
        <span>{publishDate}</span>
      </div>

      {/* CTA */}
      <Link
        href={`/articles/${article.slug}`}
        className="button-outline text-sm w-full text-center"
      >
        Read Article →
      </Link>
    </div>
  );
}
