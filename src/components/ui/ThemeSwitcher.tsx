import { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme, ThemeFamily, ThemeMode } from '@/context/ThemeContext';

interface ThemeSwitcherProps {
  variant?: 'navbar' | 'floating';
}

export default function ThemeSwitcher({ variant = 'navbar' }: ThemeSwitcherProps) {
  const { family, setFamily, mode, toggleMode, currentThemeConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const families: { id: ThemeFamily; name: string; shortName: string; color1: string; color2: string; mood: string }[] = [
    {
      id: 'default',
      name: 'Basic / Midnight Amber',
      shortName: 'Basic',
      color1: '#F59E0B',
      color2: '#FB923C',
      mood: 'Obsidian Slate & Warm Amber Glow (Default)',
    },
    {
      id: 'pink',
      name: 'Pink Neumorphic',
      shortName: 'Pink',
      color1: '#FF2B79',
      color2: '#FF5E97',
      mood: 'Signature Soft Tactile 3D Neumorphic',
    },
    {
      id: 'navy',
      name: 'Navy & Coral Glass',
      shortName: 'Navy',
      color1: '#4F75FF',
      color2: '#F28B82',
      mood: 'Midnight Deep Blue & Coral Glassmorphic',
    },
  ];

  return (
    <div className="flex items-center gap-1.5" ref={dropdownRef}>
      {/* 1. LIGHT / DARK MODE TOGGLE PILL */}
      <button
        onClick={toggleMode}
        className="group relative flex h-8 items-center gap-1.5 rounded-full border border-white/[0.12] bg-paper-200/60 backdrop-blur-xl px-2.5 font-mono text-xs font-medium text-ink-900 shadow-xs transition-all duration-200 hover:border-white/[0.25] hover:bg-paper-200/90 hover:shadow-sm cursor-pointer"
        aria-label={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
        title={`Current: ${mode.toUpperCase()} Mode (Click to toggle)`}
      >
        <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-paper-100/80 shadow-xs transition-transform group-hover:scale-105">
          {mode === 'light' ? (
            <Sun className="h-3.5 w-3.5 text-amber-500 transition-transform group-hover:rotate-45" />
          ) : (
            <Moon className="h-3.5 w-3.5 text-accent-400 transition-transform group-hover:-rotate-12" />
          )}
        </span>
        <span className="hidden sm:inline font-sans text-xs font-semibold capitalize text-ink-800">
          {mode}
        </span>
      </button>

      {/* 2. THEME PALETTE SELECTOR DROPDOWN */}
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="group flex h-8 items-center gap-2 rounded-full border border-white/[0.12] bg-paper-200/60 backdrop-blur-xl px-3 font-mono text-xs font-medium text-ink-900 shadow-xs transition-all duration-200 hover:border-white/[0.25] hover:bg-paper-200/90 cursor-pointer"
          aria-label="Select color theme palette"
          aria-expanded={isOpen}
        >
          {/* Visual Color Swatch */}
          <span className="flex items-center -space-x-1 shrink-0">
            <span
              className="h-3 w-3 rounded-full border border-black/25 shadow-xs transition-transform group-hover:scale-110"
              style={{ backgroundColor: currentThemeConfig.color1 }}
            />
            <span
              className="h-3 w-3 rounded-full border border-black/25 shadow-xs transition-transform group-hover:scale-110"
              style={{ backgroundColor: currentThemeConfig.color2 }}
            />
          </span>
          <span className="hidden sm:inline font-sans text-xs font-semibold tracking-wide text-ink-800">
            {family === 'default' ? 'Basic' : family === 'pink' ? 'Pink' : 'Navy'}
          </span>
          <Palette className="h-3 w-3 text-accent-400 transition-transform group-hover:rotate-12 shrink-0 ml-0.5" />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 z-50 w-72 sm:w-80 rounded-2xl border border-white/[0.14] bg-paper-100/95 backdrop-blur-2xl p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.45)] animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.08] mb-2">
              <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-ink-500 font-semibold">
                <Palette className="h-3.5 w-3.5 text-accent-400" />
                <span>Color Palettes</span>
              </div>
              <span className="rounded-full bg-paper-200/80 px-2 py-0.5 font-mono text-[10px] text-ink-700 font-semibold uppercase">
                {mode} Mode
              </span>
            </div>

            {/* Family List */}
            <div className="flex flex-col gap-1.5">
              {families.map((f) => {
                const isSelected = f.id === family;
                return (
                  <button
                    key={f.id}
                    onClick={() => {
                      setFamily(f.id);
                      setIsOpen(false);
                    }}
                    className={`group flex w-full items-center justify-between rounded-xl p-3 text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border border-accent-400/40 bg-paper-200/90 shadow-xs'
                        : 'border border-transparent hover:border-white/[0.1] hover:bg-paper-200/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Swatches */}
                      <div className="flex items-center -space-x-1.5 shrink-0">
                        <div
                          className="h-4.5 w-4.5 rounded-full border border-black/30 shadow-xs transition-transform group-hover:scale-110"
                          style={{ backgroundColor: f.color1 }}
                        />
                        <div
                          className="h-4.5 w-4.5 rounded-full border border-black/30 shadow-xs transition-transform group-hover:scale-110"
                          style={{ backgroundColor: f.color2 }}
                        />
                      </div>

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-semibold tracking-wide ${
                              isSelected ? 'text-ink-900' : 'text-ink-800 group-hover:text-ink-900'
                            }`}
                          >
                            {f.name}
                          </span>
                          {isSelected && (
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                          )}
                        </div>
                        <span className="font-mono text-[10px] text-ink-500 leading-tight mt-0.5">
                          {f.mood}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-400/15 text-accent-400 border border-accent-400/30">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom Mode Switcher Quick Bar inside Dropdown */}
            <div className="mt-2.5 border-t border-white/[0.08] pt-2.5 px-2 flex items-center justify-between">
              <span className="font-mono text-[10px] text-ink-500 font-medium">Active Mode</span>
              <div className="flex items-center rounded-lg bg-paper-200/80 p-0.5 border border-white/[0.08]">
                <button
                  onClick={() => {
                    toggleMode();
                  }}
                  className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-mono font-medium transition-all ${
                    mode === 'light'
                      ? 'bg-paper-100 text-ink-900 shadow-xs font-semibold'
                      : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  <Sun className="h-3 w-3 text-amber-500" />
                  <span>Light</span>
                </button>
                <button
                  onClick={() => {
                    toggleMode();
                  }}
                  className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-mono font-medium transition-all ${
                    mode === 'dark'
                      ? 'bg-paper-100 text-ink-900 shadow-xs font-semibold'
                      : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  <Moon className="h-3 w-3 text-accent-400" />
                  <span>Dark</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
