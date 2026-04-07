import Link from 'next/link';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArticleCard } from './components/ArticleCard';
import { getPublishedArticles, getAllCategories } from '@/lib/articles';
import { getFeaturedVendors } from '@/lib/vendors';

export default function Home() {
  const articles = getPublishedArticles();
  const categories = getAllCategories();
  const featuredArticles = articles.slice(0, 3);
  const featuredVendors = getFeaturedVendors();

  return (
    <>
      <Header />

      <main>
        {/* Hero Section - Pure clean background */}
        <section className="relative py-24 md:py-32 overflow-hidden mb-20" style={{ background: 'radial-gradient(circle at 50% 0%, #E8E8ED 0%, #FAFAFA 50%)' }}>
          {/* Content - Positioned above gradient */}
          <div className="container-section relative z-10">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-slate-900 leading-tight">
                Protocols for Divorce
              </h1>
              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl font-sans">
                Navigate separation with discipline and structure. Expert guidance on emotional, financial, legal, and parenting challenges specific to men going through divorce in Australia. No bullshit. No softness. Just protocols.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/articles" className="button-primary">
                  Start Your Journey
                </Link>
                <Link href="/resources" className="button-secondary">
                  Find Resources
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Authority Stats Section - Asymmetrical Bento Box */}
        <section className="py-32 border-t border-b border-slate-100 mb-20" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {/* Large stat spanning 2 columns */}
              <div className="stat-block md:col-span-2">
                <div className="stat-number text-5xl md:text-6xl">39%</div>
                <div className="stat-label text-base">Men face housing insecurity post-divorce</div>
              </div>
              
              {/* Regular stats */}
              <div className="stat-block">
                <div className="stat-number">2.5x</div>
                <div className="stat-label text-sm">Higher divorce rate among first marriages</div>
              </div>
              
              <div className="stat-block">
                <div className="stat-number">40%</div>
                <div className="stat-label text-sm">Men report inadequate mental health access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fork in the Road - Pathways */}
        <section className="py-32 md:py-40 mb-20" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-slate-900 mb-2">Your Fork in the Road</h2>
              <p className="text-slate-700 text-lg max-w-2xl font-sans">
                Divorce follows patterns. Understand your pathway, learn from men who've navigated it, build your strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => {
                return (
                  <Link
                    key={category}
                    href={`/categories/${category.toLowerCase()}`}
                    className="card-hover group"
                  >
                    {/* Badge */}
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1.5 rounded-lg bg-sage-50 border border-sage-200 text-sage-700 text-xs font-semibold uppercase tracking-tight">
                        Pathway
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors" style={{ color: '#0A1128', fontSize: '1.25rem', fontWeight: 'bold' }}>
                      {category}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-700 text-sm leading-relaxed mb-6">
                      Expert resources and protocols for navigating {category.toLowerCase()} challenges during your separation.
                    </p>

                    {/* CTA - Arrow animates on hover */}
                    <div className="text-primary-600 font-semibold text-sm inline-flex items-center transition-all duration-200" style={{ color: '#0A1128' }}>
                      <span>Explore</span>
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1">→</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Marketplace Services */}
        <section className="py-16 md:py-20 mb-20" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-slate-900 mb-2">Vetted Professionals & Services</h2>
              <p className="text-slate-700 text-lg max-w-2xl font-sans">
                Find trusted divorce specialists, lawyers, therapists, financial advisors, and support groups across Australia. All vetted for quality and relevance to men.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featuredVendors.slice(0, 3).map((vendor) => (
                <Link
                  key={vendor.id}
                  href={`/marketplace/${vendor.id}`}
                  className="card-hover group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-tight font-semibold mb-1">
                        Featured Service
                      </p>
                      <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-primary-600 transition-colors" style={{ color: '#0A1128' }}>
                        {vendor.name}
                      </h3>
                    </div>
                    <div className="text-2xl font-bold rounded-lg p-2" style={{ color: '#0A1128' }}>
                      {vendor.rating}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {vendor.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-500">{vendor.location}</span>
                    <span className="font-semibold text-sm transition-colors duration-200" style={{ color: '#0A1128' }}>
                      View →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link href="/marketplace" className="button-primary">
                Explore Full Marketplace
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Articles - Bento Box Grid Layout */}
        <section className="py-32 md:py-40 mb-20" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-slate-900 mb-2">Essential Reading</h2>
              <p className="text-slate-700 text-lg max-w-2xl font-sans">
                Curated articles from men who've been there, covering the critical phases of your journey.
              </p>
            </div>

            {/* Bento Box Grid - First article featured (2 cols), next two smaller */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {/* Featured Article - Large, spans 2 columns */}
              {featuredArticles[0] && (
                <div className="md:col-span-2 md:row-span-2">
                  <ArticleCard key={featuredArticles[0].id} article={featuredArticles[0]} featured={true} />
                </div>
              )}

              {/* Secondary Articles - Smaller grid items */}
              {featuredArticles.slice(1, 3).map((article) => (
                <ArticleCard key={article.id} article={article} featured={false} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/articles" className="button-outline">
                View All {articles.length} Articles
              </Link>
            </div>
          </div>
        </section>

        {/* The Masculine Operator - Why HisJourney */}
        <section className="py-32 md:py-40 mb-20" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-slate-900 mb-6">Why HisJourney</h2>
                <p className="text-slate-700 mb-5 leading-relaxed font-sans">
                  Divorce isn't weakness. It's a fork in the road that requires discipline, strategy, and structured thinking. Most men lack the frameworks to navigate the emotional, financial, legal, and parenting complexities that follow.
                </p>
                <p className="text-slate-700 mb-8 leading-relaxed font-sans">
                  HisJourney gives you the protocols. Structured. Grounded. Built by men who've walked this path, written with the authority of divorce specialists. No platitudes. No fluffy guidance. Just what works.
                </p>
                
                <div className="space-y-3 mb-8">
                  {[
                    'Expert protocols from divorce specialists',
                    'Australia-specific legal & financial frameworks',
                    'Mental health & emotional navigation strategies',
                    'Co-parenting and custody protocols',
                    'Financial recovery and rebuilding plans',
                    'Side-by-side growth mindset'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 transition-colors" style={{ backgroundColor: '#0A1128' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-slate-700 font-sans">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-8">
                  <p className="text-sm text-slate-600 mb-4 font-medium uppercase tracking-tight">
                    Ready to take control?
                  </p>
                  <Link href="/contact" className="button-primary">
                    Get Personalized Support
                  </Link>
                </div>
              </div>

              {/* Right side - Sophisticated visual placeholder with gradient */}
              <div className="rounded-lg h-96 flex items-center justify-center shadow" 
                   style={{ 
                     background: 'linear-gradient(135deg, rgba(90, 117, 73, 0.08) 0%, rgba(166, 120, 56, 0.06) 100%)',
                     border: '1px solid rgba(10, 17, 40, 0.08)'
                   }}>
                <div className="text-center">
                  <div className="text-6xl mb-4 font-black" style={{ color: '#5a7549' }}>⚓</div>
                  <p className="text-slate-700 font-medium font-serif">
                    Grounded. Structured. Forward.
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Photography & visual journey coming
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crisis Support - Direct & Honest */}
        <section className="py-32 border-y border-slate-100" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="container-section">
            <div className="max-w-3xl">
              <h2 className="text-slate-900 mb-4">In Crisis? You Have Options.</h2>
              <p className="text-slate-700 text-lg mb-8 leading-relaxed font-sans">
                Mental health support isn't weakness. It's part of the protocol. These services exist for men in your situation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://mensline.org.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-hover group"
                >
                  <div className="font-serif font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2" style={{ color: '#0A1128' }}>
                    MensLine Australia
                  </div>
                  <p className="text-slate-700 text-sm mb-4 font-sans">
                    24/7 support line for men. Professional, confidential.
                  </p>
                  <div className="font-mono font-bold text-lg" style={{ color: '#0A1128' }}>
                    1300 78 99 78
                  </div>
                </a>

                <a 
                  href="https://www.beyondblue.org.au" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-hover group"
                >
                  <div className="font-serif font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2" style={{ color: '#0A1128' }}>
                    Beyond Blue
                  </div>
                  <p className="text-slate-700 text-sm mb-4 font-sans">
                    Mental health and emotional wellbeing support.
                  </p>
                  <div className="font-mono font-bold text-lg" style={{ color: '#0A1128' }}>
                    1300 22 4636
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
