'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { getAllVendors, getCategories, getStates, searchVendors } from '@/lib/vendors';
import type { Vendor, Category } from '@/lib/vendors';

export default function MarketplacePage() {
  const vendors = getAllVendors();
  const categories = getCategories();
  const states = getStates();

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter and search vendors
  const filteredVendors = useMemo(() => {
    let results = vendors;

    // Apply search
    if (searchQuery.trim()) {
      results = searchVendors(searchQuery);
    }

    // Apply category filter
    if (selectedCategory) {
      results = results.filter(v => v.category === selectedCategory);
    }

    // Apply state filter
    if (selectedState) {
      results = results.filter(v => v.state === selectedState);
    }

    return results;
  }, [searchQuery, selectedCategory, selectedState]);

  const getCategoryInfo = (categoryId: string): Category | undefined => {
    return categories.find(c => c.id === categoryId);
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Marketplace
            </h1>
            <p className="text-xl text-slate-600">
              Discover verified divorce support professionals and services tailored for men in Australia.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 border-b border-slate-200">
          <div className="container-section">
            <div className="space-y-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Search Services
                </label>
                <input
                  type="text"
                  placeholder="Search by service, location, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-50"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Service Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-50"
                  >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* State Filter */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Location (State)
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent-600 focus:ring-2 focus:ring-accent-50"
                  >
                    <option value="">All Locations</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory || selectedState) && (
                <div>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('');
                      setSelectedState('');
                    }}
                    className="button-secondary text-sm"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <div className="container-section">
            <div className="mb-8">
              <p className="text-slate-600">
                {filteredVendors.length > 0
                  ? `Showing ${filteredVendors.length} result${filteredVendors.length === 1 ? '' : 's'}`
                  : 'No services found matching your criteria.'}
              </p>
            </div>

            {filteredVendors.length > 0 ? (
              <div className="space-y-6">
                {filteredVendors.map((vendor) => {
                  const categoryInfo = getCategoryInfo(vendor.category);
                  return (
                    <Link key={vendor.id} href={`/marketplace/${vendor.id}`}>
                      <div className="card-hover group h-full">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-3">
                              {categoryInfo && (
                                <span className="text-3xl">{categoryInfo.icon}</span>
                              )}
                              <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-accent-600 transition-colors">
                                  {vendor.name}
                                </h3>
                                <p className="text-sm text-slate-500 mt-1">
                                  {categoryInfo?.name}
                                </p>
                              </div>
                            </div>

                            <p className="text-slate-700 mb-4">
                              {vendor.description}
                            </p>

                            <div className="mb-4">
                              <p className="text-sm text-slate-600 font-semibold mb-2">
                                Specialization:
                              </p>
                              <p className="text-slate-700">
                                {vendor.specialization}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {vendor.services.slice(0, 3).map((service) => (
                                <span key={service} className="badge">
                                  {service}
                                </span>
                              ))}
                              {vendor.services.length > 3 && (
                                <span className="badge text-accent-600">
                                  +{vendor.services.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="md:w-48 md:flex-shrink-0">
                            {/* Rating */}
                            <div className="mb-6">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl font-bold text-accent-600">
                                  {vendor.rating}
                                </span>
                                <div className="flex text-yellow-400">
                                  {'★'.repeat(Math.round(vendor.rating))}
                                </div>
                              </div>
                              <p className="text-sm text-slate-600">
                                {vendor.reviews} reviews
                              </p>
                            </div>

                            {/* Location */}
                            <div className="mb-6">
                              <p className="text-sm text-slate-600 font-semibold mb-1">
                                Location
                              </p>
                              <p className="text-slate-700">{vendor.location}</p>
                            </div>

                            {/* Fee */}
                            <div className="mb-6">
                              <p className="text-sm text-slate-600 font-semibold mb-1">
                                Consultation
                              </p>
                              <p className="text-slate-700 text-sm">
                                {vendor.consultationFee}
                              </p>
                            </div>

                            {/* View Details Button */}
                            <div className="flex flex-col gap-2">
                              <button className="button-primary text-sm w-full hover:shadow-md transition-shadow">
                                View Details
                              </button>
                              <a
                                href={vendor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="button-secondary text-sm w-full text-center"
                              >
                                Visit Website
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-slate-600 mb-4">
                  No services found matching your search.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                    setSelectedState('');
                  }}
                  className="button-outline"
                >
                  Clear Filters and Try Again
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Categories Overview */}
        {!selectedCategory && (
          <section className="py-16 bg-slate-50">
            <div className="container-section">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Browse by Category
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => {
                  const categoryVendorCount = vendors.filter(
                    (v) => v.category === category.id
                  ).length;

                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="card-hover group text-left"
                    >
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent-600 transition-colors mb-2">
                        {category.name}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm">
                        {category.description}
                      </p>
                      <p className="text-sm font-semibold text-accent-600">
                        {categoryVendorCount} service{categoryVendorCount !== 1 ? 's' : ''}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-slate-600 mb-6">
                Browse our comprehensive resources guide or get in touch for personalized recommendations.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/resources" className="button-primary">
                  View All Resources
                </Link>
                <Link href="/contact" className="button-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
