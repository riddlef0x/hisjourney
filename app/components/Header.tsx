import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200" style={{ backgroundColor: '#f9faf8' }}>
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1a2b4c' }}>
              <span className="text-white font-black text-sm font-serif">HJ</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-slate-900">HisJourney</span>
              <span className="text-xs text-slate-600">Divorce Support</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/articles" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Articles
            </Link>
            <Link href="/categories" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Pathways
            </Link>
            <Link href="/marketplace" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Marketplace
            </Link>
            <Link href="/resources" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="button-primary text-sm"
            >
              Get Support
            </Link>
          </div>
        </div>

        {/* Mobile menu indicator */}
        <div className="md:hidden mt-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Link href="/articles" className="text-sm text-slate-700 hover:text-primary-600 whitespace-nowrap transition-colors">
              Articles
            </Link>
            <Link href="/categories" className="text-sm text-slate-700 hover:text-primary-600 whitespace-nowrap transition-colors">
              Pathways
            </Link>
            <Link href="/marketplace" className="text-sm text-slate-700 hover:text-primary-600 whitespace-nowrap transition-colors">
              Marketplace
            </Link>
            <Link href="/resources" className="text-sm text-slate-700 hover:text-primary-600 whitespace-nowrap transition-colors">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
