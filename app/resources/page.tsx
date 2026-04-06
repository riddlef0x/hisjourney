import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Resources - HisJourney Divorce Support',
  description: 'Australian resources and support services for men going through divorce.',
  openGraph: {
    title: 'Resources - HisJourney Divorce Support',
    description: 'Australian resources and support services for men going through divorce.',
  },
};

const resources = [
  {
    name: 'MensLine Australia',
    description: '24/7 telephone and online counselling service for men',
    contact: '1300 78 99 78',
    website: 'https://mensline.org.au',
    services: ['Counselling', 'Emotional Support', 'Divorce Support'],
  },
  {
    name: 'Beyond Blue',
    description: 'Mental health support and awareness for depression, anxiety, and stress',
    contact: '1300 22 4636',
    website: 'https://www.beyondblue.org.au',
    services: ['Mental Health', 'Online Forums', 'Support Services'],
  },
  {
    name: 'Relationships Australia',
    description: 'Counselling and support for relationship breakdowns',
    contact: 'State locations',
    website: 'https://www.relationships.org.au',
    services: ['Counselling', 'Family Support', 'Workshops'],
  },
  {
    name: 'Legal Aid Australia',
    description: 'Free or low-cost legal advice for family law matters',
    contact: 'State offices',
    website: 'https://www.nationallegalaid.org',
    services: ['Legal Advice', 'Family Law', 'Court Support'],
  },
  {
    name: '1800RESPECT',
    description: 'Support for those experiencing family or domestic violence',
    contact: '1800 737 732',
    website: 'https://www.1800respect.org.au',
    services: ['Domestic Violence Support', 'Counselling', 'Safety Planning'],
  },
  {
    name: 'Financial Counselling Australia',
    description: 'Free financial advice for those facing financial difficulties',
    contact: '1800 007 007',
    website: 'https://www.financialcounsellingaustralia.org.au',
    services: ['Financial Advice', 'Budgeting', 'Debt Management'],
  },
  {
    name: 'Men\'s Sheds Australia',
    description: 'Community spaces for men to connect and support each other',
    contact: 'Local chapters',
    website: 'https://mensshed.org',
    services: ['Community Support', 'Mental Health', 'Social Connection'],
  },
  {
    name: 'Family Relationships Online',
    description: 'Online support and resources for family relationships',
    contact: 'Web-based',
    website: 'https://www.familyrelationships.gov.au',
    services: ['Online Resources', 'Self-Help Tools', 'Webinars'],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Resources for Australian Men
            </h1>
            <p className="text-xl text-slate-600">
              Comprehensive guide to support services, counselling, and resources tailored for men going through divorce.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="container-section">
            <div className="mb-8">
              <p className="text-slate-600">
                We've compiled a list of {resources.length} essential resources for men in Australia
              </p>
            </div>

            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div key={index} className="card group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {resource.name}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {resource.description}
                      </p>
                      <div className="mb-4">
                        <p className="text-sm text-slate-600 font-semibold mb-2">Services:</p>
                        <div className="flex flex-wrap gap-2">
                          {resource.services.map((service) => (
                            <span key={service} className="badge">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:text-right">
                      <p className="text-sm text-slate-600 mb-2">Contact:</p>
                      <p className="font-bold text-slate-900 mb-4">{resource.contact}</p>
                      <a
                        href={resource.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary text-sm"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="py-16 bg-red-50">
          <div className="container-section">
            <div className="bg-red-100 border-2 border-red-600 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-red-900 mb-4">In Crisis?</h2>
              <p className="text-red-800 mb-6">
                If you're experiencing thoughts of self-harm or suicide, help is available 24/7.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="tel:1300659467"
                  className="block bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition-colors text-center"
                >
                  <p className="text-2xl font-bold mb-2">13 11 14</p>
                  <p className="text-sm">Lifeline (24/7)</p>
                </a>
                <a
                  href="tel:1300738732"
                  className="block bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition-colors text-center"
                >
                  <p className="text-2xl font-bold mb-2">1300 737 732</p>
                  <p className="text-sm">1800RESPECT (24/7)</p>
                </a>
                <a
                  href="tel:1300789978"
                  className="block bg-red-600 text-white p-6 rounded-lg hover:bg-red-700 transition-colors text-center"
                >
                  <p className="text-2xl font-bold mb-2">1300 78 99 78</p>
                  <p className="text-sm">MensLine Australia (24/7)</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Looking for more information?
              </h2>
              <p className="text-slate-600 mb-6">
                Read our articles to learn more about navigating divorce with confidence.
              </p>
              <Link href="/articles" className="button-primary">
                Browse Articles
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
