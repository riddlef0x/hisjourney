import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-20">
      <div className="container-section py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HJ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">HisJourney</span>
                <span className="text-xs text-slate-400">Divorce Support</span>
              </div>
            </div>
            <p className="text-sm text-slate-400">
              Professional divorce support resources for men going through separation in Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles" className="text-slate-400 hover:text-white">
                  All Articles
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-white">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://www.relationships.org.au" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  Relationships Australia
                </a>
              </li>
              <li>
                <a href="https://mensline.org.au" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  MensLine Australia
                </a>
              </li>
              <li>
                <a href="https://www.beyondblue.org.au" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  Beyond Blue
                </a>
              </li>
              <li>
                <a href="https://www.nationallegalaid.org" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                  Legal Aid Australia
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-white">Need Support?</h3>
            <p className="text-sm text-slate-400 mb-4">
              If you're going through a difficult time, reach out for support.
            </p>
            <Link href="/contact" className="button-primary text-sm">
              Get Help
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            © 2024 HisJourney. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-slate-400 hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
