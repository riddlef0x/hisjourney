import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'About HisJourney - Divorce Support for Men',
  description: 'Learn about HisJourney, a dedicated resource for men going through divorce in Australia.',
  openGraph: {
    title: 'About HisJourney - Divorce Support for Men',
    description: 'Learn about HisJourney, a dedicated resource for men going through divorce in Australia.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-100 to-slate-50 py-12">
          <div className="container-section">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              About HisJourney
            </h1>
            <p className="text-xl text-slate-600">
              Empowering men to navigate divorce with confidence, clarity, and compassion.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-lg text-slate-600 mb-4">
                  HisJourney exists to provide men going through divorce with the emotional, practical, and legal support they need to navigate this challenging transition with confidence.
                </p>
                <p className="text-lg text-slate-600 mb-4">
                  Divorce impacts men differently than women. Men often face unique barriers to seeking help, including:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    'Limited access to dedicated male-focused resources',
                    'Stigma around emotional vulnerability',
                    'Lack of information on Australian divorce-specific matters',
                    'Unclear paths to financial and legal support',
                    'Difficulty finding co-parenting guidance',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-primary-600 font-bold">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-slate-600">
                  HisJourney addresses these gaps with comprehensive, expert-driven resources tailored specifically for Australian men.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-navy-100 rounded-xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎯</div>
                  <p className="text-slate-700 text-lg font-semibold">
                    Your Divorce Journey, Supported
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 bg-slate-50">
          <div className="container-section">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Articles',
                  description: 'In-depth guides on emotional, financial, legal, and parenting aspects of divorce.',
                  icon: '📚',
                },
                {
                  title: 'Resource Directory',
                  description: 'Comprehensive list of Australian support services, counselling, and legal aid.',
                  icon: '🗂️',
                },
                {
                  title: 'Category-Based Learning',
                  description: 'Navigate content by topic: Pre-Divorce, Emotional, Financial, Legal, Children.',
                  icon: '🏷️',
                },
                {
                  title: 'Professional Guidance',
                  description: 'Written by divorce specialists with real-world experience supporting men.',
                  icon: '👨‍⚕️',
                },
                {
                  title: 'Action-Oriented Content',
                  description: 'Practical strategies and step-by-step guidance to take control of your situation.',
                  icon: '🎯',
                },
                {
                  title: 'Australian-Specific',
                  description: 'Content tailored to Australian family law, resources, and cultural context.',
                  icon: '🇦🇺',
                },
              ].map((item, index) => (
                <div key={index} className="card">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Author */}
        <section className="py-16">
          <div className="container-section">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Author</h2>
            <div className="max-w-2xl mx-auto card">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-5xl">
                  👤
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Jackson Wolf</h3>
                <p className="text-primary-600 font-semibold mb-4">Divorce Support Specialist</p>
              </div>
              <p className="text-slate-700 mb-4">
                Jackson Wolf is a divorce support specialist dedicated to helping men navigate the complexities of marriage breakdown and divorce with confidence and clarity. With extensive experience supporting men through separation, Jackson understands the unique challenges men face and is committed to providing evidence-based, compassionate guidance.
              </p>
              <p className="text-slate-700">
                Jackson's articles cover the emotional, practical, legal, and financial aspects of divorce, with a focus on Australian-specific resources and support services. His mission is to empower men to take control of their divorce journey and build fulfilling lives post-separation.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-slate-50">
          <div className="container-section">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Empathy',
                  description: 'We understand the pain and complexity of divorce and meet men where they are.',
                },
                {
                  title: 'Expert-Driven',
                  description: 'All content is informed by research, professional experience, and best practices.',
                },
                {
                  title: 'Australian-Focused',
                  description: 'We provide guidance specific to Australian law, resources, and cultural context.',
                },
                {
                  title: 'Action-Oriented',
                  description: 'We empower men with practical tools and strategies they can implement immediately.',
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container-section">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Ready to take the next step?
              </h2>
              <p className="text-slate-600 mb-6">
                Explore our comprehensive collection of articles and resources to support your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/articles" className="button-primary">
                  Explore Articles
                </Link>
                <Link href="/resources" className="button-outline">
                  Find Resources
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
