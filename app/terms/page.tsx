import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Terms of Service - HisJourney',
  description: 'Terms of Service for HisJourney.org',
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="container-section py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

          <div className="max-w-3xl prose prose-lg">
            <h2 className="text-2xl font-bold mt-8 mb-4">Terms of Service for HisJourney.org</h2>

            <p className="mb-4">
              <strong>Last Updated: 2024</strong>
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">1. Acceptance of Terms</h3>
            <p className="mb-4">
              By accessing and using HisJourney.org, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">2. Use License</h3>
            <p className="mb-4">
              You are granted a non-exclusive, non-transferable license to view and use the content on HisJourney.org for personal, non-commercial purposes, subject to the restrictions set forth in these Terms.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">3. Restrictions</h3>
            <p className="mb-4">Without limiting the generality of the foregoing, you agree not to:</p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Reproduce, transmit, or distribute any content without permission</li>
              <li>Use the site for any illegal purpose</li>
              <li>Harass, abuse, or threaten other users</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">4. Disclaimer of Warranties</h3>
            <p className="mb-4">
              THE CONTENT ON HISJOURNEY.ORG IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE ACCURACY, COMPLETENESS, OR TIMELINESS OF ANY CONTENT.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">5. Not Professional Advice</h3>
            <p className="mb-4">
              The information provided on HisJourney.org is for educational purposes only and should not be considered professional legal, financial, or medical advice. Always consult with qualified professionals regarding your specific situation.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">6. Limitation of Liability</h3>
            <p className="mb-4">
              IN NO EVENT SHALL HISJOURNEY.ORG BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES) ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SITE.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">7. External Links</h3>
            <p className="mb-4">
              HisJourney.org may contain links to external websites. We are not responsible for the content, accuracy, or practices of these third-party sites. Access to external sites is at your own risk.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">8. Modifications to Terms</h3>
            <p className="mb-4">
              We reserve the right to modify these Terms at any time. Your continued use of the site following any changes constitutes your acceptance of the new Terms.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">9. Governing Law</h3>
            <p className="mb-4">
              These Terms are governed by the laws of Australia and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">10. Contact</h3>
            <p className="mb-4">
              If you have questions about these Terms, please contact us at: support@hisjourney.org
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
