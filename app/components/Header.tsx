import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 group-hover:opacity-80" style={{ backgroundColor: '#111827' }}>
              <span className="text-white font-black text-sm">HJ</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold transition-colors" style={{ color: '#111827' }}>HisJourney</span>
              <span className="text-xs text-gray-600">Divorce Support</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/articles" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Articles
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Pathways
            </Link>
            <Link href="/marketplace" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Marketplace
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Resources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
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
            <Link href="/articles" className="text-sm whitespace-nowrap transition-colors font-medium text-gray-600">
              Articles
            </Link>
            <Link href="/categories" className="text-sm whitespace-nowrap transition-colors font-medium text-gray-600">
              Pathways
            </Link>
            <Link href="/marketplace" className="text-sm whitespace-nowrap transition-colors font-medium text-gray-600">
              Marketplace
            </Link>
            <Link href="/resources" className="text-sm whitespace-nowrap transition-colors font-medium text-gray-600">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
