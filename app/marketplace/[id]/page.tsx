import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { getVendorById, getAllVendors, getCategories } from '@/lib/vendors';
import type { Category } from '@/lib/vendors';

interface VendorPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const vendors = getAllVendors();
  return vendors.map((vendor) => ({
    id: vendor.id,
  }));
}

export async function generateMetadata({ params }: VendorPageProps) {
  const vendor = getVendorById(params.id);

  if (!vendor) {
    return {
      title: 'Vendor Not Found - HisJourney',
      description: 'This vendor could not be found.',
    };
  }

  return {
    title: `${vendor.name} - HisJourney Marketplace`,
    description: vendor.description,
    openGraph: {
      title: `${vendor.name} - HisJourney Marketplace`,
      description: vendor.description,
    },
  };
}

export default function VendorPage({ params }: VendorPageProps) {
  const vendor = getVendorById(params.id);
  const categories = getCategories();

  if (!vendor) {
    return (
      <>
        <Header />
        <main>
          <section className="py-16">
            <div className="container-section text-center">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Vendor Not Found
              </h1>
              <p className="text-slate-600 mb-8">
                The service provider you're looking for couldn't be found.
              </p>
              <Link href="/marketplace" className="button-primary">
                Back to Marketplace
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const categoryInfo = categories.find((c) => c.id === vendor.category);

  return (
    <>
      <Header />

      <main>
        {/* Breadcrumb */}
        <section className="py-4 border-b border-slate-200">
          <div className="container-section">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Link href="/marketplace" className="hover:text-accent-600 transition-colors">
                Marketplace
              </Link>
              <span>/</span>
              <span>{vendor.name}</span>
            </div>
          </div>
        </section>

        {/* Hero / Vendor Header */}
        <section className="py-12 bg-gradient-to-br from-slate-100 to-slate-50">
          <div className="container-section">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  {categoryInfo && (
                    <div className="text-5xl">{categoryInfo.icon}</div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-slate-600 mb-2 font-semibold">
                      {categoryInfo?.name || 'Service'}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                      {vendor.name}
                    </h1>
                    <p className="text-lg text-slate-700">
                      {vendor.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="md:w-64">
                <div className="card">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl font-bold text-accent-600">
                        {vendor.rating}
                      </span>
                      <div className="flex text-yellow-400 text-xl">
                        {'★'.repeat(Math.round(vendor.rating))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      Based on {vendor.reviews} reviews
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-600 font-semibold mb-1">
                      Location
                    </p>
                    <p className="font-semibold text-slate-900">
                      {vendor.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Info */}
              <div className="lg:col-span-2 space-y-12">
                {/* About */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    About
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    {vendor.description_long}
                  </p>
                </div>

                {/* Specialization */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Specialization
                  </h2>
                  <p className="text-slate-700 text-lg font-semibold">
                    {vendor.specialization}
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Services Offered
                  </h2>
                  <ul className="space-y-3">
                    {vendor.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <span className="text-accent-600 font-bold mt-1">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar - Contact & Details */}
              <div className="lg:col-span-1">
                <div className="card sticky top-20">
                  {/* Consultation Fee */}
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <p className="text-sm text-slate-600 font-semibold mb-2">
                      Consultation Fee
                    </p>
                    <p className="text-2xl font-bold text-slate-900">
                      {vendor.consultationFee}
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <h3 className="text-sm font-semibold text-slate-600 mb-4">
                      Get In Touch
                    </h3>

                    {/* Phone */}
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
                        Phone
                      </p>
                      <a
                        href={`tel:${vendor.phone.replace(/\D/g, '')}`}
                        className="text-accent-600 hover:text-accent-700 font-semibold break-all"
                      >
                        {vendor.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                      <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">
                        Email
                      </p>
                      <a
                        href={`mailto:${vendor.contact}`}
                        className="text-accent-600 hover:text-accent-700 font-semibold break-all"
                      >
                        {vendor.contact}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-6 pb-6 border-b border-slate-200">
                    <p className="text-sm text-slate-600 font-semibold mb-2">
                      Location
                    </p>
                    <p className="text-slate-700">{vendor.location}</p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <a
                      href={vendor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-primary w-full block text-center"
                    >
                      Visit Website
                    </a>
                    <a
                      href={`mailto:${vendor.contact}`}
                      className="button-secondary w-full block text-center"
                    >
                      Send Email
                    </a>
                    <a
                      href={`tel:${vendor.phone.replace(/\D/g, '')}`}
                      className="button-outline w-full block text-center"
                    >
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Back Link */}
                <div className="mt-8">
                  <Link
                    href="/marketplace"
                    className="button-ghost w-full block text-center"
                  >
                    ← Back to Marketplace
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-slate-50">
          <div className="container-section">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Looking for other services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryInfo && (
                <>
                  <Link
                    href={`/marketplace?category=${vendor.category}`}
                    className="card-hover group"
                  >
                    <div className="text-3xl mb-3">{categoryInfo.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent-600 transition-colors mb-2">
                      More {categoryInfo.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                      Browse other providers in this category
                    </p>
                  </Link>
                </>
              )}

              <Link href="/marketplace" className="card-hover group">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent-600 transition-colors mb-2">
                  Search Marketplace
                </h3>
                <p className="text-sm text-slate-600">
                  Find services by category or location
                </p>
              </Link>

              <Link href="/resources" className="card-hover group">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-accent-600 transition-colors mb-2">
                  Resources Guide
                </h3>
                <p className="text-sm text-slate-600">
                  Comprehensive support resources
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
