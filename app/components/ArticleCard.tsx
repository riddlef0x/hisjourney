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
    <div className={`group h-full flex flex-col rounded-lg overflow-hidden bg-white border transition-all duration-300 cursor-pointer`}
         style={{ 
           backgroundColor: '#FFFFFF',
           border: '1px solid #F3F4F6',
           borderRadius: '16px',
           boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
         }}>
      {/* Image Placeholder - Top element MUST be image placeholder - NOW WITH REAL IMAGES */}
      <div className={`flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg article-image`}
        style={{
          backgroundColor: '#E5E7EB !important',
          backgroundImage: `url('https://picsum.photos/seed/${article.slug}/600/400')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100% !important',
          height: '220px !important',
          borderRadius: '12px 12px 0 0 !important',
          flexShrink: 0
        }}>
      </div>

      {/* Content wrapper - Text below image */}
      <div style={{ padding: '24px', gap: '12px' }} className="flex flex-col flex-grow">
        {/* Article Title */}
        <h3 className={`font-bold text-gray-900 leading-tight ${
          featured ? 'text-2xl' : 'text-lg'
        }`}
        style={{ 
          color: '#111827 !important',
          textDecoration: 'none !important',
          borderBottom: 'none !important',
          marginBottom: '12px !important',
          display: 'block !important'
        }}>
          {article.title}
        </h3>

        {/* Categories/Tags */}
        <div className="flex flex-wrap gap-2">
          {article.categories.slice(0, featured ? 3 : 2).map((cat) => (
            <span key={cat} className="badge-primary text-xs">
              {cat}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={`text-gray-600 leading-relaxed flex-grow ${
          featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-2'
        }`}
        style={{ 
          color: '#4B5563 !important',
          lineHeight: '1.6 !important',
          margin: '0 !important'
        }}>
          {article.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-200">
          <span className="font-medium">{article.author.name}</span>
          <span>{publishDate}</span>
        </div>

        {/* CTA - Text link with animated arrow */}
        <Link
          href={`/articles/${article.slug}`}
          className="font-semibold text-sm inline-flex items-center transition-all duration-200"
          style={{ color: '#111827' }}
        >
          <span>Read Article</span>
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
