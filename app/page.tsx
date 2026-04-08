import Link from 'next/link';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ArticleCard } from './components/ArticleCard';
import { HeroWebGL } from './components/HeroWebGL';
import { BentoFeatures } from './components/BentoFeatures';
import { PricingSection } from './components/PricingSection';
import { CrisisSupport } from './components/CrisisSupport';
import { Testimonials } from './components/Testimonials';
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
        {/* Hero Section - WebGL mesh gradient with mouse interaction */}
        <section className="hero-section relative py-32 overflow-hidden" style={{ background: '#FAFAF7', minHeight: '600px' }}>
          {/* WebGL Canvas Background - Breathing mesh gradient */}
          <HeroWebGL />
          
          {/* Content - Positioned above gradient */}
          <div className="container-section relative z-10">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-gray-900 leading-tight">
                Protocols for Divorce
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl font-sans">
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

        {/* Authority Stats Section - Center Horizontally */}
        <section className="py-24 border-t border-b border-gray-200" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="container-section">
            <div className="stats-container">
              {/* Large stat */}
              <div className="stat-block text-center">
                <div className="stat-number">39%</div>
                <div className="stat-label">Men face housing insecurity post-divorce</div>
              </div>
              
              {/* Regular stats */}
              <div className="stat-block text-center">
                <div className="stat-number">2.5x</div>
                <div className="stat-label">Higher divorce rate among first marriages</div>
              </div>
              
              <div className="stat-block text-center">
                <div className="stat-number">40%</div>
                <div className="stat-label">Men report inadequate mental health access</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fork in the Road - Pathways */}
        <section className="py-24" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-gray-900 mb-2">Your Fork in the Road</h2>
              <p className="text-gray-600 text-lg max-w-2xl font-sans">
                Divorce follows patterns. Understand your pathway, learn from men who've navigated it, build your strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categories.map((category) => {
                return (
                  <Link
                    key={category}
                    href={`/categories/${category.toLowerCase()}`}
                    className="category-card group"
                  >
                    {/* Badge */}
                    <div>
                      <div className="inline-block px-3 py-1.5 rounded-full bg-tag-light border border-tag-border text-tag-color text-xs font-semibold uppercase tracking-tight" style={{ backgroundColor: '#F0F4F8', color: '#4A657A', border: '1px solid #E0E8F2' }}>
                        Pathway
                      </div>
                    </div>

                    {/* Title */}
                    <h3 
                      className="group-hover:text-primary-600 transition-colors"
                      style={{ 
                        fontSize: '1.25rem !important',
                        fontWeight: '600 !important',
                        color: '#0B253A !important',
                        textDecoration: 'none !important',
                        borderBottom: 'none !important',
                        marginBottom: '12px !important',
                        display: 'block !important',
                        fontFamily: "'Playfair Display', system-ui, serif"
                      }}>
                      {category}
                    </h3>

                    {/* Description */}
                    <p 
                      style={{ 
                        fontSize: '1rem !important',
                        lineHeight: '1.6 !important',
                        color: '#4B5563 !important',
                        margin: '0 !important'
                      }}>
                      Expert resources and protocols for navigating {category.toLowerCase()} challenges during your separation.
                    </p>

                    {/* CTA - Arrow animates on hover */}
                    <div className="font-semibold text-sm inline-flex items-center transition-all duration-200" style={{ color: '#0B253A' }}>
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
        <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-gray-900 mb-2">Vetted Professionals & Services</h2>
              <p className="text-gray-600 text-lg max-w-2xl font-sans">
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
                      <p className="text-xs text-gray-500 uppercase tracking-tight font-semibold mb-1">
                        Featured Service
                      </p>
                      <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-primary-600 transition-colors" style={{ color: '#0B253A' }}>
                        {vendor.name}
                      </h3>
                    </div>
                    <div className="text-2xl font-bold rounded-lg p-2" style={{ color: '#0B253A' }}>
                      {vendor.rating}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {vendor.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500">{vendor.location}</span>
                    <span className="font-semibold text-sm transition-colors duration-200" style={{ color: '#0B253A' }}>
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

        {/* How It Works - Staggered Asymmetrical Vertical Timeline */}
        <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-section">
            <div className="mb-16">
              <h2 className="text-gray-900 mb-2">How It Works</h2>
              <p className="text-gray-600 text-lg max-w-2xl font-sans">
                Navigate your divorce journey with proven protocols, one step at a time.
              </p>
            </div>

            {/* Staggered asymmetrical timeline */}
            <div className="timeline-container relative" style={{ maxWidth: '900px', margin: '0 auto' }}>
              {/* Vertical line connector */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, #0B253A 0%, rgba(11, 37, 58, 0.1) 100%)',
                transform: 'translateX(-50%)',
                zIndex: 0
              }}></div>

              {/* Timeline Item 1 - Left (text) */}
              <div className="timeline-item mb-16 relative" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '32px', alignItems: 'center' }}>
                <div className="text-right">
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif", lineHeight: 1 }}>01</div>
                  <h3 style={{ color: '#0B253A', marginTop: '12px', fontFamily: "'Playfair Display', system-ui, serif" }}>Understand Your Position</h3>
                  <p style={{ color: '#4B5563', marginTop: '12px', fontSize: '0.95rem' }}>Assess your financial, emotional, and legal standing. Build your baseline understanding.</p>
                </div>
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#0B253A',
                  borderRadius: '50%',
                  border: '4px solid #FFFFFF',
                  boxShadow: '0 0 0 4px #0B253A',
                  zIndex: 2,
                  position: 'relative'
                }}></div>
                <div></div>
              </div>

              {/* Timeline Item 2 - Right (visual) */}
              <div className="timeline-item mb-16 relative" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '32px', alignItems: 'center' }}>
                <div></div>
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#0B253A',
                  borderRadius: '50%',
                  border: '4px solid #FFFFFF',
                  boxShadow: '0 0 0 4px #0B253A',
                  zIndex: 2,
                  position: 'relative'
                }}></div>
                <div className="rounded-lg p-6" style={{ backgroundColor: '#F5F8FC', border: '1px solid #E0E8F2' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif", lineHeight: 1 }}>02</div>
                  <h3 style={{ color: '#0B253A', marginTop: '12px', fontFamily: "'Playfair Display', system-ui, serif" }}>Develop Your Strategy</h3>
                  <p style={{ color: '#4B5563', marginTop: '12px', fontSize: '0.95rem' }}>Work with specialists to build financial, legal, and emotional protocols tailored to your situation.</p>
                </div>
              </div>

              {/* Timeline Item 3 - Left */}
              <div className="timeline-item mb-16 relative" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '32px', alignItems: 'center' }}>
                <div className="text-right rounded-lg p-6" style={{ backgroundColor: '#F5F8FC', border: '1px solid #E0E8F2' }}>
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif", lineHeight: 1 }}>03</div>
                  <h3 style={{ color: '#0B253A', marginTop: '12px', fontFamily: "'Playfair Display', system-ui, serif" }}>Navigate Challenges</h3>
                  <p style={{ color: '#4B5563', marginTop: '12px', fontSize: '0.95rem' }}>Execute your strategy with expert support for legal, financial, and emotional challenges.</p>
                </div>
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#0B253A',
                  borderRadius: '50%',
                  border: '4px solid #FFFFFF',
                  boxShadow: '0 0 0 4px #0B253A',
                  zIndex: 2,
                  position: 'relative'
                }}></div>
                <div></div>
              </div>

              {/* Timeline Item 4 - Right */}
              <div className="timeline-item relative" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '32px', alignItems: 'center' }}>
                <div></div>
                <div style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: '#0B253A',
                  borderRadius: '50%',
                  border: '4px solid #FFFFFF',
                  boxShadow: '0 0 0 4px #0B253A',
                  zIndex: 2,
                  position: 'relative'
                }}></div>
                <div>
                  <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif", lineHeight: 1 }}>04</div>
                  <h3 style={{ color: '#0B253A', marginTop: '12px', fontFamily: "'Playfair Display', system-ui, serif" }}>Rebuild & Thrive</h3>
                  <p style={{ color: '#4B5563', marginTop: '12px', fontSize: '0.95rem' }}>Move forward with renewed purpose. Financial recovery, emotional healing, and growth mindset.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loved by Men Like You - Testimonials */}
        <section className="py-24" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-gray-900 mb-2">Loved by Men Like You</h2>
              <p className="text-gray-600 text-lg max-w-2xl font-sans">
                Hear from men who've navigated their divorce with HisJourney.
              </p>
            </div>

            <Testimonials />
          </div>
        </section>

        {/* Featured Articles - BENTO BOX Grid */}
        <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-section">
            <div className="mb-12">
              <h2 className="text-gray-900 mb-2">Powerful Features</h2>
              <p className="text-gray-600 text-lg max-w-2xl font-sans">
                Everything you need to navigate your divorce journey with confidence.
              </p>
            </div>

            {/* True BENTO BOX GRID - cards with varying spans */}
            <BentoFeatures />
          </div>
        </section>

        {/* Simple, Transparent Pricing */}
        <section className="py-24" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="container-section">
            <div className="mb-16">
              <h2 className="text-gray-900 mb-2">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 text-lg max-w-2xl font-sans">
                Choose the plan that fits your journey.
              </p>
            </div>

            <PricingSection />
          </div>
        </section>

        {/* The Masculine Operator - Why HisJourney */}
        <section className="py-24" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-gray-900 mb-6">Why HisJourney</h2>
                <p className="text-gray-600 mb-5 leading-relaxed font-sans">
                  Divorce isn't weakness. It's a fork in the road that requires discipline, strategy, and structured thinking. Most men lack the frameworks to navigate the emotional, financial, legal, and parenting complexities that follow.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed font-sans">
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
                      <div className="flex-shrink-0 w-5 h-5 rounded-lg flex items-center justify-center mt-0.5 transition-colors" style={{ backgroundColor: '#0B253A' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-600 font-sans">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm text-gray-600 mb-4 font-medium uppercase tracking-tight">
                    Ready to take control?
                  </p>
                  <Link href="/contact" className="button-primary">
                    Get Personalized Support
                  </Link>
                </div>
              </div>

              {/* Right side - Beautiful calming image with overlay */}
              <div className="rounded-lg h-96 flex items-center justify-center shadow overflow-hidden" 
                   style={{ 
                     backgroundImage: `url('https://picsum.photos/seed/hisjourney/600/400')`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     border: '1px solid #E0E8F2',
                     boxShadow: '0 4px 20px rgba(11, 37, 58, 0.08)'
                   }}>
                {/* Overlay for text readability */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(11,37,58,0.3) 100%)' }}></div>
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4 font-black" style={{ color: '#FFFFFF' }}>⚓</div>
                  <p className="text-white font-medium font-serif text-lg">
                    Grounded. Structured. Forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Crisis Support - Direct & Honest - IMPROVED CONTRAST */}
        <section className="py-24 border-y border-gray-200" style={{ 
          background: 'linear-gradient(135deg, #0B253A 0%, #1a3d52 100%)',
          position: 'relative'
        }}>
          {/* Subtle pattern overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>

          <div className="container-section relative z-10">
            <div className="max-w-3xl">
              <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>In Crisis? You Have Options.</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.125rem', marginBottom: '32px', lineHeight: '1.6' }}>
                Mental health support isn't weakness. It's part of the protocol. These services exist for men in your situation.
              </p>
              
              <CrisisSupport />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
