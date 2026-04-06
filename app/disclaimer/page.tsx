import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export const metadata = {
  title: 'Disclaimer - HisJourney',
  description: 'Important Disclaimer for HisJourney.org',
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />

      <main>
        <section className="container-section py-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>

          <div className="max-w-3xl prose prose-lg">
            <h2 className="text-2xl font-bold mt-8 mb-4">Important Disclaimer</h2>

            <p className="mb-4 text-lg font-semibold text-red-700 bg-red-50 p-4 rounded-lg">
              Please read this disclaimer carefully before using HisJourney.org
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">1. Educational Purposes Only</h3>
            <p className="mb-4">
              The information provided on HisJourney.org is intended for educational and informational purposes only. It is not a substitute for professional legal, financial, medical, or psychological advice.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">2. Not Legal Advice</h3>
            <p className="mb-4">
              The content on HisJourney.org is not intended to provide legal advice. Family law varies by jurisdiction, and the legal landscape is constantly changing. For specific legal matters regarding your divorce:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Consult with a qualified family law attorney in your jurisdiction</li>
              <li>Contact Legal Aid Australia: https://www.nationallegalaid.org</li>
              <li>Seek advice from a family law mediator</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">3. Not Medical or Mental Health Advice</h3>
            <p className="mb-4">
              While HisJourney.org provides information about emotional and mental health aspects of divorce, it is not a substitute for professional medical or psychological advice. If you are experiencing mental health concerns:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Contact your GP or mental health professional</li>
              <li>Call MensLine Australia: 1300 78 99 78</li>
              <li>Call Beyond Blue: 1300 22 4636</li>
              <li>Call Lifeline: 13 11 14</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">4. Not Financial Advice</h3>
            <p className="mb-4">
              Information about financial matters should not be considered financial advice. For guidance on financial planning and divorce:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Consult with a qualified financial advisor</li>
              <li>Contact a financial counsellor: 1800 007 007</li>
              <li>Seek advice from your accountant or tax professional</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">5. Accuracy and Currency</h3>
            <p className="mb-4">
              While we strive to provide accurate and current information, the content on HisJourney.org may not reflect the most recent legal changes, court decisions, or policy updates. Laws and regulations change frequently.
            </p>
            <p className="mb-4">
              Always verify information with official sources and qualified professionals before making important decisions.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">6. No Liability</h3>
            <p className="mb-4">
              HisJourney.org and its creators are not liable for:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Any decisions made based on information from this site</li>
              <li>Any adverse consequences resulting from use of this site</li>
              <li>Errors or omissions in content</li>
              <li>Technical failures or unavailability of the site</li>
              <li>Third-party content or services linked from this site</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">7. Personal Circumstances Vary</h3>
            <p className="mb-4">
              Each divorce situation is unique. General information provided on this site may not apply to your specific circumstances. What works for one person may not work for another.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">8. Emergency Support</h3>
            <p className="mb-4">
              If you are in crisis or having thoughts of self-harm, please seek immediate support:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Lifeline: 13 11 14</li>
              <li>MensLine Australia: 1300 78 99 78</li>
              <li>1800RESPECT: 1800 737 732</li>
              <li>Call 000 for emergency assistance</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">9. Changes to Disclaimer</h3>
            <p className="mb-4">
              This disclaimer may be updated at any time without notice. Your continued use of HisJourney.org constitutes acceptance of any changes.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">10. Contact</h3>
            <p className="mb-4">
              If you have questions about this disclaimer, please contact us at: support@hisjourney.org
            </p>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold text-blue-900 mb-2">Remember:</p>
              <p className="text-blue-800">
                HisJourney.org is a supportive resource, not a replacement for professional advice. Always consult with qualified professionals—lawyers, therapists, financial advisors—for your specific situation. You deserve professional support through this difficult time.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
