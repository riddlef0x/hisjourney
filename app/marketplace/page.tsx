import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { getAllVendors, getCategories } from '@/lib/vendors';
import type { Vendor, Category } from '@/lib/vendors';

export default function MarketplacePage() {
  const vendors = getAllVendors();
  const categories = getCategories();

  const getCategoryInfo = (categoryId: string): Category | undefined => {
    return categories.find(c => c.id === categoryId);
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero - Sophisticated background */}
        <section style={{ backgroundColor: '#F4F4F0' }} className="py-12">
          <div className="container-section">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Marketplace
            </h1>
            <p className="text-xl text-slate-600">
              Discover verified divorce support professionals and services tailored for men in Australia.
            </p>
          </div>
        </section>

        {/* Service Categories Overview */}
        <section className="py-12 border-b border-slate-100" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-section">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Professional Divorce Support Services
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore our curated selection of verified professionals across Australia specializing in men's divorce support.
              </p>
            </div>
            
            <div className="text-sm text-slate-600 text-center">
              Showing {vendors.length} verified service providers across Australia
            </div>
          </div>
        </section>

        {/* Service Providers Grid */}
        <section className="py-16" style={{ backgroundColor: '#FAFAF7' }}>
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vendors.map((vendor: Vendor) => {
                const categoryInfo = getCategoryInfo(vendor.category);
                
                return (
                  <Link 
                    key={vendor.id} 
                    href={`/marketplace/${vendor.id}`} 
                    className="block"
                  >
                    <div className="card-container h-full bg-white rounded-lg border overflow-hidden"
                         style={{ 
                           backgroundColor: '#FFFFFF',
                           border: '1px solid #F3F4F6',
                           borderRadius: '16px',
                           boxShadow: '0 4px 20px rgba(11, 37, 58, 0.03)',
                           transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                         }}>
                      {/* Header with category */}
                      <div className="p-6 border-b border-slate-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="badge-primary text-xs">
                            {categoryInfo?.name || vendor.category}
                          </span>
                          <div className="flex items-center text-yellow-500 text-sm">
                            <span className="mr-1">★</span>
                            <span className="font-medium">{vendor.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {vendor.name}
                        </h3>
                        
                        <p className="text-slate-600 text-sm line-clamp-2">
                          {vendor.description}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center text-sm text-slate-600">
                          <span className="inline-block w-4 h-4 mr-2">📍</span>
                          <span>{vendor.location}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-slate-600">
                          <span className="inline-block w-4 h-4 mr-2">💰</span>
                          <span>{vendor.consultationFee}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-slate-600">
                          <span className="inline-block w-4 h-4 mr-2">⏰</span>
                          <span>{vendor.availability}</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="px-6 pb-6">
                        <div className="button-primary w-full text-center py-3 text-sm font-medium">
                          View Details & Contact
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container-section">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Service Categories
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Professional support across all aspects of divorce and separation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category: Category) => {
                const categoryVendors = vendors.filter(v => v.category === category.id);
                
                return (
                  <div key={category.id} className="category-card text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="text-xs text-slate-500">
                      {categoryVendors.length} provider{categoryVendors.length !== 1 ? 's' : ''}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}