import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />

      <main>
        <section className="py-20">
          <div className="container-section text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Page Not Found</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="button-primary">
                Go Home
              </Link>
              <Link href="/articles" className="button-outline">
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
