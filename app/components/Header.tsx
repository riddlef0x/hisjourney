import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:opacity-80" style={{ backgroundColor: '#0A1128' }}>
              <span className="text-white font-black text-sm">HJ</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold transition-colors" style={{ color: '#0A1128' }}>HisJourney</span>
              <span className="text-xs text-slate-600">Divorce Support</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/articles" className="text-slate-700 hover:text-primary-600 font-medium transition-colors" style={{ color: '#4b5563' }}>
              Articles
            </Link>
            <Link href="/categories" className="text-slate-700 hover:text-primary-600 font-medium transition-colors" style={{ color: '#4b5563' }}>
              Pathways
            </Link>
            <Link href="/marketplace" className="text-slate-700 hover:text-primary-600 font-medium transition-colors" style={{ color: '#4b5563' }}>
              Marketplace
            </Link>
            <Link href="/resources" className="text-slate-700 hover:text-primary-600 font-medium transition-colors" style={{ color: '#4b5563' }}>
              Resources
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-primary-600 font-medium transition-colors" style={{ color: '#4b5563' }}>
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
            <Link href="/articles" className="text-sm whitespace-nowrap transition-colors font-medium" style={{ color: '#4b5563' }}>
              Articles
            </Link>
            <Link href="/categories" className="text-sm whitespace-nowrap transition-colors font-medium" style={{ color: '#4b5563' }}>
              Pathways
            </Link>
            <Link href="/marketplace" className="text-sm whitespace-nowrap transition-colors font-medium" style={{ color: '#4b5563' }}>
              Marketplace
            </Link>
            <Link href="/resources" className="text-sm whitespace-nowrap transition-colors font-medium" style={{ color: '#4b5563' }}>
              Resources
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
