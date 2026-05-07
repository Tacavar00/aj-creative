'use client';

import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';

const navLinks = [
  { label: 'Jobs', href: '/jobs' },
  { label: 'Events', href: '/events' },
  { label: 'Discover', href: '/discover' },
  { label: 'Feed', href: '/feed' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-black/60 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-1 flex-shrink-0">
            <span className="text-2xl font-black gradient-text">aj</span>
            <span className="text-2xl font-black text-white">creative</span>
          </a>

          {/* Search bar (desktop) */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555555]" />
            <input
              type="text"
              placeholder="Search artists, jobs, styles..."
              className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl pl-9 pr-12 py-2 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white/20 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] text-xs bg-white/[0.08] rounded px-1.5 py-0.5">⌘K</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors rounded-lg hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Auth buttons (desktop) */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <a
              href="/sign-in"
              className="px-4 py-2 text-sm font-semibold text-[#A0A0A0] hover:text-white transition-colors border border-white/10 rounded-xl hover:border-white/20"
            >
              Sign In
            </a>
            <GradientButton size="sm" href="/create-profile">
              Create Profile
            </GradientButton>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#A0A0A0] hover:text-white transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555555]" />
            <input
              type="text"
              placeholder="Search artists, jobs, styles..."
              className="w-full bg-white/[0.06] border border-white/[0.08] rounded-xl pl-9 pr-12 py-2 text-sm text-white placeholder:text-[#555555] focus:outline-none focus:border-white/20 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555555] text-xs bg-white/[0.08] rounded px-1.5 py-0.5">⌘K</span>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-medium text-[#A0A0A0] hover:text-white transition-colors rounded-xl hover:bg-white/[0.06]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-white/[0.06] mt-2 pt-4 flex flex-col gap-2">
              <a
                href="/sign-in"
                className="w-full text-center px-4 py-3 text-sm font-semibold text-[#A0A0A0] hover:text-white transition-colors border border-white/10 rounded-xl hover:border-white/20"
              >
                Sign In
              </a>
              <GradientButton href="/create-profile" className="w-full justify-center">
                Create Profile
              </GradientButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
