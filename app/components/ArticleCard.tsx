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

  // Generate abstract visual placeholder based on article category
  const categoryColorMap: Record<string, { gradientStart: string; gradientEnd: string }> = {
    'Emotional': { gradientStart: '#4b5563', gradientEnd: '#8B7D6B' },
    'Financial': { gradientStart: '#5a7549', gradientEnd: '#73a853' },
    'Legal': { gradientStart: '#0A1128', gradientEnd: '#4b5563' },
    'Parenting': { gradientStart: '#a67838', gradientEnd: '#c9a885' },
    'Mental Health': { gradientStart: '#6b7280', gradientEnd: '#8B7D6B' },
    'Career': { gradientStart: '#5a7549', gradientEnd: '#a67838' },
  };

  const primaryCategory = article.categories?.[0] || 'Emotional';
  const colors = categoryColorMap[primaryCategory] || categoryColorMap['Emotional'];

  return (
    <div className={`group h-full flex flex-col rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition-all duration-200 cursor-pointer`}>
      {/* Thumbnail - Moody abstract placeholder with subtle zoom on hover */}
      <div className={`mb-4 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 group-hover:border-slate-200 transition-all duration-300 ${
        featured ? 'h-64 md:h-80' : 'h-40'
      }`}
        style={{
          background: `linear-gradient(135deg, ${colors.gradientStart}15 0%, ${colors.gradientEnd}10 100%)`,
        }}>
        {/* Subtle abstract shapes */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <svg
            className="w-full h-full absolute group-hover:scale-110 transition-transform duration-500"
            viewBox="0 0 400 300"
            fill="none"
            opacity="0.3"
          >
            <circle cx="100" cy="80" r="60" stroke={colors.gradientStart} strokeWidth="2" />
            <circle cx="320" cy="200" r="80" stroke={colors.gradientEnd} strokeWidth="2" />
            <path
              d="M 50 150 Q 150 80 300 180"
              stroke={colors.gradientStart}
              strokeWidth="2"
              opacity="0.5"
            />
          </svg>
          {/* Elegant letter initial as backup */}
          <div className={`relative z-10 font-black ${featured ? 'text-7xl md:text-8xl' : 'text-5xl'}`} 
               style={{ color: colors.gradientStart }}>
            {article.title.charAt(0).toUpperCase()}
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
        <h3 className={`font-serif font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-3 ${
          featured ? 'text-2xl md:text-3xl line-clamp-3' : 'text-lg line-clamp-2'
        }`} style={{ color: '#0A1128' }}>
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
      <div className="flex items-center justify-between text-xs text-slate-600 mb-4 pt-4 border-t border-slate-100">
        <span className="font-medium">{article.author.name}</span>
        <span>{publishDate}</span>
      </div>

      {/* CTA - Text link with animated arrow */}
      <Link
        href={`/articles/${article.slug}`}
        className="font-semibold text-sm inline-flex items-center transition-all duration-200"
        style={{ color: '#0A1128' }}
      >
        <span>Read Article</span>
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">→</span>
      </Link>
    </div>
  );
}
