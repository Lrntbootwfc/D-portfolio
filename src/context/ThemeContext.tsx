import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeFamily = 'default' | 'pink' | 'navy';
export type ThemeMode = 'light' | 'dark';
export type ThemeId = 'default' | 'default-light' | 'pink-neumorphic' | 'pink-dark-neumorphic' | 'navy-light' | 'navy';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  shortName: string;
  mood: string;
  family: ThemeFamily;
  mode: ThemeMode;
  color1: string;
  color2: string;
  bgBase: string;
  bgSupporting: string;
  gradientText: string;
}

export const THEMES: ThemeOption[] = [
  {
    id: 'default',
    name: 'Midnight Amber (Default)',
    shortName: 'Default Dark',
    mood: 'Obsidian Slate & Warm Amber Accent',
    family: 'default',
    mode: 'dark',
    color1: '#F59E0B', // Amber
    color2: '#FB923C', // Warm Orange
    bgBase: '#0F1319',
    bgSupporting: '#161B24',
    gradientText: 'Amber → Warm Orange',
  },
  {
    id: 'default-light',
    name: 'Editorial Slate (Light)',
    shortName: 'Default Light',
    mood: 'Clean Paper & Amber Accent',
    family: 'default',
    mode: 'light',
    color1: '#D97706', // Warm Amber
    color2: '#EA580C', // Orange
    bgBase: '#F8F9FA',
    bgSupporting: '#EDEFF2',
    gradientText: 'Amber → Slate',
  },
  {
    id: 'pink-neumorphic',
    name: 'Pink Neumorphic (Light)',
    shortName: 'Pink Light',
    mood: 'Soft UI Light & Hot Pink',
    family: 'pink',
    mode: 'light',
    color1: '#FF2B79', // Hot Pink
    color2: '#FF5E97', // Soft Rose
    bgBase: '#EEF2F6',
    bgSupporting: '#E2E8F0',
    gradientText: 'Hot Pink → Rose',
  },
  {
    id: 'pink-dark-neumorphic',
    name: 'Pink Neumorphic (Dark)',
    shortName: 'Pink Dark',
    mood: 'Embossed Dark & Neon Pink',
    family: 'pink',
    mode: 'dark',
    color1: '#FF2B79', // Hot Pink
    color2: '#FF66A1', // Neon Rose
    bgBase: '#14161D',
    bgSupporting: '#1A1D27',
    gradientText: 'Neon Pink → Rose',
  },
  {
    id: 'navy-light',
    name: 'Navy & Coral (Light)',
    shortName: 'Navy Light',
    mood: 'Fresh Ice Blue & Coral Glass',
    family: 'navy',
    mode: 'light',
    color1: '#3B66FF', // Ice Navy Blue
    color2: '#FF5A4E', // Vibrant Coral
    bgBase: '#F0F4F9',
    bgSupporting: '#E2E9F3',
    gradientText: 'Navy Blue → Coral',
  },
  {
    id: 'navy',
    name: 'Deep Navy & Coral (Dark)',
    shortName: 'Navy Dark',
    mood: 'Midnight Navy & Coral Glow',
    family: 'navy',
    mode: 'dark',
    color1: '#6D8CFF', // Soft Blue
    color2: '#F28B82', // Muted Coral
    bgBase: '#0F1726',
    bgSupporting: '#162238',
    gradientText: 'Soft Blue → Coral',
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  family: ThemeFamily;
  setFamily: (family: ThemeFamily) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  currentThemeConfig: ThemeOption;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio_theme_v2';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY) as ThemeId;
      if (saved && THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return 'default'; // Default to user's Midnight Amber theme
  });

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const currentThemeConfig = THEMES.find((t) => t.id === theme) || THEMES[0];
  const family = currentThemeConfig.family;
  const mode = currentThemeConfig.mode;

  const setFamily = (newFamily: ThemeFamily) => {
    // Keep current mode (light/dark) when switching family
    const target = THEMES.find((t) => t.family === newFamily && t.mode === mode) || THEMES.find((t) => t.family === newFamily);
    if (target) setTheme(target.id);
  };

  const setMode = (newMode: ThemeMode) => {
    // Keep current family (default/pink/navy) when toggling mode
    const target = THEMES.find((t) => t.family === family && t.mode === newMode);
    if (target) setTheme(target.id);
  };

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        family,
        setFamily,
        mode,
        setMode,
        toggleMode,
        currentThemeConfig,
        themes: THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

