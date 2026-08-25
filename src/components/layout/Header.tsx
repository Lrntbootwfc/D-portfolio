import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, FileDown, Menu, X } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { profile } from '@/data/portfolio';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

const sectionIds = ['work', 'experience', 'about', 'contact'];

export default function Header() {
  const scrolled = useScrollPosition(20);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const active = useActiveSection(sectionIds);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    const id = href.replace('/#', '');
    return active === id;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.08] bg-paper-100/70 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.4)]'
          : 'border-b border-transparent bg-paper-100/30 backdrop-blur-md'
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between lg:h-20">
        {/* Name / logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 font-display text-base font-600 tracking-wider text-ink-900 transition-opacity hover:opacity-90 sm:text-lg"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-paper-200/50 border border-white/[0.1] font-mono text-xs font-bold text-accent-400 backdrop-blur-md transition-all duration-300 group-hover:border-accent-400/50 group-hover:shadow-[0_0_16px_var(--glass-glow)]">
            {profile.name.charAt(0)}
          </span>
          <span className="tracking-[0.12em] font-semibold text-ink-900 text-sm sm:text-base">
            {profile.name.toUpperCase()}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-paper-200/40 p-1.5 backdrop-blur-2xl md:flex shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
          {navLinks.map((link) => {
            const activeState = isActive(link.href);
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative rounded-full px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 ${
                  activeState
                    ? 'bg-paper-100/80 text-accent-400 shadow-sm border border-white/[0.12]'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-paper-200/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs & Live Theme Switcher */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Live Theme Switcher */}
          <ThemeSwitcher variant="navbar" />

          <a
            href={profile.resumeUrl}
            download="Divya_Sharma_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-paper-200/40 backdrop-blur-xl px-4 py-2 text-xs font-mono font-medium text-ink-600 transition-all duration-200 hover:border-white/[0.2] hover:bg-paper-200/70 hover:text-ink-900 cursor-pointer shadow-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <FileDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 text-accent-400" />
          </a>
          <Link
            to="/#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-aurora px-5 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-200 hover:opacity-95"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile menu & Theme switcher */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher variant="navbar" />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-paper-200/60 backdrop-blur-xl text-ink-900 transition-colors hover:bg-paper-300/80"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-paper-100/90 backdrop-blur-2xl md:hidden border-b border-white/[0.08]">
          <nav className="container-content flex flex-col justify-between h-[calc(100vh-4rem)] pb-10 pt-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 font-display text-2xl font-400 text-ink-900 transition-colors hover:text-accent-400"
                  style={{ animation: `fadeUp 0.35s ease-out ${i * 50}ms both` }}
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-ink-400">0{i + 1}</span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-6 border-t border-white/[0.08]">
              <a
                href={profile.resumeUrl}
                download="Divya_Sharma_Resume.pdf"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-paper-200/50 py-3.5 font-mono text-xs font-medium text-ink-700 hover:border-white/[0.18] hover:text-ink-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="h-4 w-4 text-accent-400" />
                <span>Download Resume</span>
              </a>
              <Link
                to="/#contact"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-aurora py-3.5 text-sm font-medium text-white hover:opacity-95 transition-opacity"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
