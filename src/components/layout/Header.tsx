import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, FileDown, Menu, X, Sun, Moon, Palette, Check } from 'lucide-react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme, ThemeFamily } from '@/context/ThemeContext';
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
  const { family, setFamily, mode, toggleMode, setMode } = useTheme();

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

  const themePalettes: { id: ThemeFamily; name: string; color1: string; color2: string }[] = [
    { id: 'pink', name: 'Pink Neumorphic', color1: '#FF2B79', color2: '#FF5E97' },
    { id: 'navy', name: 'Navy & Coral', color1: '#4F75FF', color2: '#F28B82' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        menuOpen
          ? 'h-screen bg-paper-100/98 backdrop-blur-3xl flex flex-col overflow-hidden'
          : scrolled
          ? 'border-b border-white/[0.08] bg-paper-100/75 backdrop-blur-2xl shadow-[0_12px_36px_rgba(0,0,0,0.35)]'
          : 'border-b border-transparent bg-paper-100/40 backdrop-blur-md'
      }`}
    >
      <div className="container-content flex h-16 shrink-0 items-center justify-between lg:h-20">
        {/* Name / logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-2 font-display text-base font-600 tracking-wider text-ink-900 transition-opacity hover:opacity-90 sm:text-lg"
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

        {/* Mobile controls on top bar */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Quick theme switcher on top bar */}
          <ThemeSwitcher variant="navbar" />

          {/* Mobile hamburger / close button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.15] bg-paper-200/80 backdrop-blur-xl text-ink-900 transition-colors hover:bg-paper-300/90 cursor-pointer shadow-xs active:scale-95"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5 text-accent-400" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer panel with full controls & theme options */}
      {menuOpen && (
        <div className="flex-1 w-full overflow-y-auto md:hidden border-t border-white/[0.08] animate-fade-in">
          <div className="container-content flex flex-col min-h-full justify-between pb-12 pt-4 gap-6">
            {/* 1. Main Navigation Links */}
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-400 px-1 mb-1">
                Navigation
              </span>
              {navLinks.map((link, i) => {
                const activeState = isActive(link.href);
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 font-display text-xl font-500 transition-all ${
                      activeState
                        ? 'bg-paper-200/90 text-accent-400 border border-white/[0.1]'
                        : 'text-ink-900 hover:text-accent-400 hover:bg-paper-200/50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-ink-400">0{i + 1}</span>
                  </Link>
                );
              })}
            </div>

            {/* 2. Theme & Appearance Controls in Mobile Drawer */}
            <div className="flex flex-col gap-3 rounded-2xl border border-white/[0.1] bg-paper-200/50 p-4 backdrop-blur-xl">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500 flex items-center gap-1.5">
                <Palette className="h-3 w-3 text-accent-400" />
                <span>Theme & Appearance</span>
              </span>

              {/* Mode Switcher: Light vs Dark */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMode('light')}
                  className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-mono font-medium transition-all cursor-pointer ${
                    mode === 'light'
                      ? 'bg-paper-100 text-amber-600 border border-white/[0.2] shadow-sm font-semibold'
                      : 'bg-paper-100/40 text-ink-600 border border-transparent hover:bg-paper-100/70'
                  }`}
                >
                  <Sun className="h-4 w-4 text-amber-500" />
                  <span>Light Mode</span>
                  {mode === 'light' && <Check className="h-3.5 w-3.5 text-accent-400 ml-auto" />}
                </button>

                <button
                  type="button"
                  onClick={() => setMode('dark')}
                  className={`flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-mono font-medium transition-all cursor-pointer ${
                    mode === 'dark'
                      ? 'bg-paper-100 text-accent-400 border border-white/[0.2] shadow-sm font-semibold'
                      : 'bg-paper-100/40 text-ink-600 border border-transparent hover:bg-paper-100/70'
                  }`}
                >
                  <Moon className="h-4 w-4 text-accent-400" />
                  <span>Dark Mode</span>
                  {mode === 'dark' && <Check className="h-3.5 w-3.5 text-accent-400 ml-auto" />}
                </button>
              </div>

              {/* Color Palette Selector: Pink vs Navy */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/[0.06]">
                {themePalettes.map((p) => {
                  const isSelected = family === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setFamily(p.id)}
                      className={`flex items-center gap-2.5 rounded-xl py-2.5 px-3 text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-paper-100 text-ink-900 border border-accent-400/40 shadow-sm font-semibold'
                          : 'bg-paper-100/40 text-ink-600 border border-transparent hover:bg-paper-100/70'
                      }`}
                    >
                      <div className="flex items-center -space-x-1 shrink-0">
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-black/20 shadow-2xs"
                          style={{ backgroundColor: p.color1 }}
                        />
                        <span
                          className="h-3.5 w-3.5 rounded-full border border-black/20 shadow-2xs"
                          style={{ backgroundColor: p.color2 }}
                        />
                      </div>
                      <span className="text-[11px] font-sans truncate">{p.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Mobile CTAs (Resume & Contact) */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={profile.resumeUrl}
                download="Divya_Sharma_Resume.pdf"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-white/[0.12] bg-paper-200/80 py-3.5 font-mono text-xs font-medium text-ink-800 hover:border-white/[0.25] hover:text-ink-900 transition-colors shadow-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileDown className="h-4 w-4 text-accent-400" />
                <span>Download Resume (PDF)</span>
              </a>
              <Link
                to="/#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-aurora py-3.5 text-xs font-semibold tracking-wide text-white hover:opacity-95 transition-opacity shadow-sm"
              >
                <span>Let's talk</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
