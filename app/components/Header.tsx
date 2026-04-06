import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-section py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HJ</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-slate-900">HisJourney</span>
              <span className="text-xs text-slate-600">Divorce Support</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/articles" className="text-slate-700 hover:text-primary-600 font-medium">
              Articles
            </Link>
            <Link href="/categories" className="text-slate-700 hover:text-primary-600 font-medium">
              Categories
            </Link>
            <Link href="/resources" className="text-slate-700 hover:text-primary-600 font-medium">
              Resources
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-primary-600 font-medium">
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
            <Link href="/articles" className="text-sm text-slate-700 hover:text-primary-600 whitespace-nowrap">
              Articles
            </Link>
            <Link href="/categories" className="text-sm text-slate-700 hover:text-primary-600 whitespace-nowrap">
              Categories
            </Link>
            <Link href="/resources" className="text-sm text-slate-700 hover:text-primary-600 whitespace-nowrap">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
