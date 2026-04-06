import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Contact & Support - HisJourney',
  description: 'Get in touch or find immediate support services for men going through divorce.',
  openGraph: {
    title: 'Contact & Support - HisJourney',
    description: 'Get in touch or find immediate support services for men going through divorce.',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Support
            </h1>
            <p className="text-xl text-slate-600">
              You don't have to go through this alone. We're here to help connect you with resources and support.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Emergency & Immediate Support
                </h2>
                <p className="text-slate-600 mb-6">
                  If you're in crisis or having thoughts of self-harm, please reach out to one of these services immediately.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      name: 'Lifeline',
                      number: '13 11 14',
                      description: '24/7 support for people in emotional distress',
                    },
                    {
                      name: 'MensLine Australia',
                      number: '1300 78 99 78',
                      description: '24/7 counselling service for men',
                    },
                    {
                      name: '1800RESPECT',
                      number: '1800 737 732',
                      description: 'Support for family and domestic violence',
                    },
                    {
                      name: 'Beyond Blue',
                      number: '1300 22 4636',
                      description: 'Mental health support and awareness',
                    },
                  ].map((service) => (
                    <div key={service.name} className="card border-2 border-primary-200">
                      <h3 className="font-bold text-slate-900 mb-1">{service.name}</h3>
                      <p className="text-2xl font-bold text-primary-600 mb-2">{service.number}</p>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-6 mt-12">
                  Counselling Services
                </h2>
                <p className="text-slate-600 mb-6">
                  Professional support tailored to your needs:
                </p>

                <div className="space-y-4">
                  {[
                    {
                      name: 'Relationships Australia',
                      description: 'Counselling for relationship breakdowns and family support',
                      link: 'https://www.relationships.org.au',
                    },
                    {
                      name: 'Psychology Services',
                      description: 'Individual therapy and mental health support',
                      link: 'https://www.psychology.org.au',
                    },
                    {
                      name: 'Divorce Support Groups',
                      description: 'Connect with others going through similar experiences',
                      link: 'https://www.relationships.org.au',
                    },
                  ].map((service) => (
                    <a
                      key={service.name}
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card group hover:border-primary-300"
                    >
                      <h3 className="font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-1">
                        {service.name} →
                      </h3>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Additional Resources
                </h2>

                <div className="space-y-6">
                  <div className="card">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">📋 Legal Support</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Get free or affordable legal advice for family law matters:
                    </p>
                    <a
                      href="https://www.nationallegalaid.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Legal Aid Australia →
                    </a>
                  </div>

                  <div className="card">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">💰 Financial Support</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Free financial advice and counselling:
                    </p>
                    <a
                      href="https://www.financialcounsellingaustralia.org.au"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Financial Counselling Australia →
                    </a>
                  </div>

                  <div className="card">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">👥 Community Support</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Connect with local men's communities:
                    </p>
                    <a
                      href="https://mensshed.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
                    >
                      Men's Sheds Australia →
                    </a>
                  </div>

                  <div className="card bg-primary-50 border-primary-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">📚 More Articles</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Read our comprehensive guides on every aspect of divorce:
                    </p>
                    <Link href="/articles" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                      Browse Articles →
                    </Link>
                  </div>
                </div>

                {/* Tips */}
                <div className="mt-8 card bg-slate-900 text-white">
                  <h3 className="text-lg font-bold mb-4">💡 Quick Tips</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>Don't hesitate to reach out for help</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>Many services are free or low-cost</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>Speaking to a professional can help clarity</span>
                    </li>
                    <li className="flex gap-2">
                      <span>✓</span>
                      <span>You're not alone in this journey</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-50">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to move forward?
              </h2>
              <p className="text-slate-600 mb-6">
                Our articles provide practical guidance on every stage of your journey.
              </p>
              <Link href="/articles" className="button-primary">
                Start Reading
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
