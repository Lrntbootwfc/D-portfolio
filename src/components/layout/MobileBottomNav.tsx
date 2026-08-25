import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, Sparkles, User, Mail, Sun, Moon } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/context/ThemeContext';

const sectionIds = ['work', 'experience', 'about', 'contact'];

export default function MobileBottomNav() {
  const location = useLocation();
  const active = useActiveSection(sectionIds);
  const { mode, toggleMode } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll down, show on scroll up for cleaner view
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 15) {
        // Scrolling down
        setIsVisible(false);
      } else if (lastScrollY - currentScrollY > 10) {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isHome = location.pathname === '/' && !location.hash;

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      isActive: isHome && !active,
    },
    {
      label: 'Work',
      href: '/#work',
      icon: Briefcase,
      isActive: active === 'work',
    },
    {
      label: 'Exp',
      href: '/#experience',
      icon: Sparkles,
      isActive: active === 'experience',
    },
    {
      label: 'About',
      href: '/#about',
      icon: User,
      isActive: active === 'about',
    },
    {
      label: 'Contact',
      href: '/#contact',
      icon: Mail,
      isActive: active === 'contact',
    },
  ];

  return (
    <div
      className={`fixed bottom-4 inset-x-3 z-40 mx-auto max-w-sm transition-all duration-300 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <nav
        className="flex items-center justify-between rounded-full border border-white/[0.16] bg-paper-100/90 p-1.5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
        aria-label="Mobile Bottom Navigation"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`relative flex flex-col items-center justify-center rounded-full py-1.5 px-3 transition-all duration-200 ${
                item.isActive
                  ? 'bg-accent-500/15 text-accent-400 font-semibold shadow-xs'
                  : 'text-ink-500 hover:text-ink-900 active:scale-95'
              }`}
            >
              <Icon className="h-4 w-4 mb-0.5" />
              <span className="text-[9px] font-mono leading-none tracking-tight">
                {item.label}
              </span>
              {item.isActive && (
                <span className="absolute -bottom-0.5 h-1 w-1 rounded-full bg-accent-400" />
              )}
            </Link>
          );
        })}

        {/* Quick Mode Toggle Icon */}
        <button
          type="button"
          onClick={toggleMode}
          className="flex flex-col items-center justify-center rounded-full py-1.5 px-2.5 text-ink-600 hover:text-ink-900 active:scale-95 transition-all duration-200 border-l border-white/[0.1] pl-2 cursor-pointer"
          aria-label={`Toggle to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
          title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
        >
          {mode === 'light' ? (
            <Sun className="h-4 w-4 text-amber-500 mb-0.5" />
          ) : (
            <Moon className="h-4 w-4 text-accent-400 mb-0.5" />
          )}
          <span className="text-[9px] font-mono leading-none tracking-tight capitalize">
            {mode}
          </span>
        </button>
      </nav>
    </div>
  );
}
