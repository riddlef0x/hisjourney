import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-200" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0B253A' }}>
                <span className="text-white font-black text-sm">HJ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold" style={{ color: '#0B253A', fontFamily: "'Playfair Display', system-ui, serif" }}>HisJourney</span>
                <span className="text-xs text-gray-600">Divorce Support</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Professional divorce support resources for men going through separation in Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-tight" style={{ color: '#0B253A' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles" className="text-gray-600 hover:text-primary-600 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Pathways
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-tight" style={{ color: '#0B253A' }}>Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.relationships.org.au" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Relationships Australia
                </a>
              </li>
              <li>
                <a href="https://mensline.org.au" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                  MensLine Australia
                </a>
              </li>
              <li>
                <a href="https://www.beyondblue.org.au" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Beyond Blue
                </a>
              </li>
              <li>
                <a href="https://www.nationallegalaid.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Legal Aid Australia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-tight" style={{ color: '#0B253A' }}>Need Support?</h3>
            <p className="text-sm text-gray-600 mb-4">
              If you're going through a difficult time, reach out for support.
            </p>
            <Link href="/contact" className="button-primary text-sm">
              Get Help
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 HisJourney. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-gray-500 hover:text-primary-600 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
