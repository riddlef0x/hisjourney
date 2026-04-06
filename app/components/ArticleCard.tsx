import Link from 'next/link';
import type { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const publishDate = new Date(article.publishDate).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className={`card-hover group h-full flex flex-col ${featured ? 'rounded-lg' : 'rounded-lg'}`}>
      {/* Thumbnail - Updated with larger radius */}
      <div className={`mb-4 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg flex items-center justify-center overflow-hidden border border-slate-200 group-hover:border-slate-300 transition-colors ${
        featured ? 'h-64 md:h-80' : 'h-40'
      }`}>
        <div className="text-center">
          <div className={`font-black ${featured ? 'text-7xl md:text-8xl' : 'text-5xl'}`} style={{ color: '#1a2b4c' }}>
            {article.title.charAt(0)}
          </div>
        </div>
      </div>

      {/* Categories/Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.categories.slice(0, featured ? 3 : 2).map((cat) => (
          <span key={cat} className="badge-primary text-xs">
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <Link href={`/articles/${article.slug}`}>
        <h3 className={`font-serif font-bold text-slate-900 group-hover:text-primary-700 transition-colors mb-3 ${
          featured ? 'text-2xl md:text-3xl line-clamp-3' : 'text-lg line-clamp-2'
        }`} style={{ color: '#1a2b4c' }}>
          {article.title}
        </h3>
      </Link>

      {/* Description */}
      <p className={`text-slate-700 mb-4 leading-relaxed flex-grow ${
        featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-2'
      }`}>
        {article.description}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-slate-600 mb-4 pt-4 border-t border-slate-200">
        <span className="font-medium">{article.author.name}</span>
        <span>{publishDate}</span>
      </div>

      {/* CTA - Text link with animated arrow (no button styling) */}
      <Link
        href={`/articles/${article.slug}`}
        className="text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-2 inline-flex items-center transition-all duration-200"
      >
        <span>Read Article</span>
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
