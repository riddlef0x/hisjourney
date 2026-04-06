import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Privacy Policy - HisJourney',
  description: 'Privacy Policy for HisJourney.org',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="container-section py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

          <div className="max-w-3xl prose prose-lg">
            <h2 className="text-2xl font-bold mt-8 mb-4">Privacy Policy for HisJourney.org</h2>

            <p className="mb-4">
              <strong>Last Updated: 2024</strong>
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">1. Introduction</h3>
            <p className="mb-4">
              HisJourney.org ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information on our website.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">2. Information We Collect</h3>
            <p className="mb-4">
              We collect information you voluntarily provide, such as:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Contact information (email, name)</li>
              <li>Usage data (pages visited, time on site)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">3. How We Use Information</h3>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Improve our website and content</li>
              <li>Understand user behavior</li>
              <li>Respond to inquiries</li>
              <li>Send updates (if you've opted in)</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">4. Data Protection</h3>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">5. Third-Party Services</h3>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. Please review their privacy policies before providing any information.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">6. Cookies</h3>
            <p className="mb-4">
              We use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">7. Children's Privacy</h3>
            <p className="mb-4">
              Our site is not directed to children under 13. We do not knowingly collect personal information from children.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">8. Changes to This Policy</h3>
            <p className="mb-4">
              We may update this Privacy Policy periodically. The date of the last update will be displayed at the top of this page.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">9. Contact Us</h3>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us at: support@hisjourney.org
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
