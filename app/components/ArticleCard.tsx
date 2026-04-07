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
    <div className={`group h-full flex flex-col rounded-lg overflow-hidden bg-white border border-solid transition-all duration-300 cursor-pointer`}
         style={{ 
           border: '1px solid rgba(0, 0, 0, 0.04)',
           boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)'
         }}>
      {/* Thumbnail - Solid Navy blue background with article title overlay */}
      <div className={`flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg ${
        featured ? 'h-64 md:h-80' : 'h-40'
      }`}
        style={{
          background: '#0A1128',
          padding: '24px'
        }}>
        {/* Title overlay in white */}
        <div className="relative w-full h-full flex items-center justify-center text-center">
          <h3 className={`font-serif font-bold text-white leading-tight ${
            featured ? 'text-2xl md:text-3xl' : 'text-lg'
          }`}>
            {article.title}
          </h3>
        </div>
      </div>

      {/* Content wrapper with padding */}
      <div style={{ padding: '32px' }} className="flex flex-col flex-grow">
        {/* Categories/Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.categories.slice(0, featured ? 3 : 2).map((cat) => (
            <span key={cat} className="badge-primary text-xs">
              {cat}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={`text-slate-700 mb-4 leading-relaxed flex-grow ${
          featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-2'
        }`}
        style={{ color: '#1D1D1F' }}>
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
    </div>
  );
}
