/**
 * Subtle animated geometric elements surrounding the hero photo container.
 * Conceptually maps to BUILD → ANALYZE → EXPLORE:
 *   - BUILD: structural lines / grid fragments (rectilinear)
 *   - ANALYZE: data-like dots and connecting lines (scattered points)
 *   - EXPLORE: orbiting ring / rotating arc (circular motion)
 *
 * Dynamically styled with active theme variables (--accent-1, --accent-2).
 */
export default function HeroGeometrics() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* === BUILD — structural rectilinear elements === */}

      {/* Thin horizontal line — top left, slow draw */}
      <div
        className="absolute left-0 top-[8%] h-px w-28 origin-left bg-gradient-to-r from-accent-400/40 to-transparent animate-draw-line hidden sm:block"
        style={{ animationDelay: '0s' }}
      />

      {/* Small square outline — floating */}
      <div
        className="absolute left-[2%] top-[55%] h-12 w-12 rounded-lg border border-white/[0.08] bg-paper-200/30 backdrop-blur-xs animate-float-slow hidden lg:block"
        style={{ animationDelay: '1s' }}
      />

      {/* Vertical line fragment — right side */}
      <div
        className="absolute right-[6%] top-[10%] h-24 w-px bg-gradient-to-b from-accent-500/30 via-white/[0.08] to-transparent animate-float-slower hidden sm:block"
        style={{ animationDelay: '0.5s' }}
      />

      {/* Corner bracket — bottom left */}
      <div className="absolute bottom-[6%] left-[3%] hidden lg:block">
        <div
          className="h-6 w-6 border-l-2 border-b-2 border-accent-400/30 rounded-bl-sm animate-float-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* === ANALYZE — scattered data points and connectors === */}

      {/* Dot cluster — top right area */}
      <svg
        className="absolute right-[8%] top-[18%] h-24 w-24 animate-float-slow hidden sm:block"
        style={{ animationDelay: '1.5s' }}
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="20" cy="20" r="2.5" fill="var(--accent-1)" opacity="0.85" />
        <circle cx="60" cy="15" r="2.5" fill="var(--accent-2)" opacity="0.85" />
        <circle cx="80" cy="50" r="2.5" fill="var(--accent-1)" opacity="0.85" />
        <circle cx="40" cy="60" r="2" fill="var(--text-primary)" opacity="0.6" />
        <circle cx="15" cy="75" r="2.5" fill="var(--accent-2)" opacity="0.85" />
        <line x1="20" y1="20" x2="60" y2="15" stroke="var(--accent-1)" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="60" y1="15" x2="80" y2="50" stroke="var(--accent-2)" strokeWidth="0.75" strokeOpacity="0.4" />
        <line x1="40" y1="60" x2="15" y2="75" stroke="var(--accent-1)" strokeWidth="0.75" strokeOpacity="0.4" />
      </svg>

      {/* Small bar chart fragment — bottom right */}
      <div
        className="absolute bottom-[12%] right-[4%] flex items-end gap-1.5 animate-float-slower hidden lg:flex"
        style={{ animationDelay: '0.8s' }}
      >
        <div className="h-4 w-1.5 rounded-t-xs bg-white/[0.08]" />
        <div className="h-7 w-1.5 rounded-t-xs bg-white/[0.14]" />
        <div className="h-5 w-1.5 rounded-t-xs bg-accent-400/40" />
        <div className="h-10 w-1.5 rounded-t-xs bg-accent-400" />
        <div className="h-6 w-1.5 rounded-t-xs bg-accent-500/60" />
      </div>

      {/* === EXPLORE — orbiting circular element === */}

      {/* Rotating ring — left middle */}
      <div
        className="absolute left-[5%] top-[25%] h-16 w-16 rounded-full border border-white/[0.09] animate-rotate-slow hidden lg:block"
        style={{ animationDelay: '0s' }}
      >
        <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-400 shadow-[0_0_8px_var(--accent-1)]" />
      </div>

      {/* Pulsing soft circle — behind photo, top right */}
      <div
        className="absolute right-[2%] top-[5%] h-24 w-24 rounded-full bg-gradient-to-br from-accent-400/10 to-accent-500/10 blur-md animate-pulse-soft hidden sm:block"
        style={{ animationDelay: '0s' }}
      />

      {/* Thin diagonal line — drifting */}
      <div
        className="absolute bottom-[20%] left-[8%] h-px w-32 origin-left rotate-12 bg-gradient-to-r from-accent-400/30 via-accent-500/20 to-transparent animate-drift hidden lg:block"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
}
