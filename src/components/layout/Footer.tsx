import { Globe } from 'lucide-react';

const platformLinks = [
  { label: 'Discover', href: '/discover' },
  { label: 'Jobs', href: '/jobs' },
  { label: 'Feed', href: '/feed' },
  { label: 'Projects', href: '/projects' },
  { label: 'Events', href: '/events' },
  { label: 'Challenges', href: '/events' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Partnerships', href: '/partnerships' },
  { label: 'Careers', href: '/careers' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1: Brand */}
          <div>
            <a href="/" className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black gradient-text">aj</span>
              <span className="text-2xl font-black text-white">creative</span>
            </a>
            <p className="text-[#A0A0A0] text-sm leading-relaxed max-w-xs">
              The premium network for serious creatives. Where artists thrive.
            </p>
            <p className="text-[#555555] text-sm mt-3">
              Built by artists, for artists. Miami, FL
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {/* Instagram (custom SVG) */}
              <a
                href="https://instagram.com/alexmdc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
                </svg>
              </a>
              {/* X / Twitter (custom SVG) */}
              <a
                href="https://twitter.com/ajcreative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="Twitter / X"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Globe / website */}
              <a
                href="https://ajcreative.art"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="Website"
              >
                <Globe size={16} />
              </a>
              {/* TikTok SVG icon */}
              <a
                href="https://tiktok.com/@ajcreative"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#A0A0A0] hover:text-white hover:border-white/20 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Platform */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-[#A0A0A0] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-[#A0A0A0] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555555] text-sm">
            © AJ Creative 2026 • Built for creatives, by creatives. Miami, FL
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-[#555555] hover:text-[#A0A0A0] text-xs transition-colors">Privacy</a>
            <a href="/terms" className="text-[#555555] hover:text-[#A0A0A0] text-xs transition-colors">Terms</a>
            <a href="/contact" className="text-[#555555] hover:text-[#A0A0A0] text-xs transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
