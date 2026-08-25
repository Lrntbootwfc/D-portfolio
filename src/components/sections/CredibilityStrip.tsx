import { credibility } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';

export default function CredibilityStrip() {
  // Duplicate the array for a seamless marquee loop
  const items = [...credibility, ...credibility];

  return (
    <section className="border-y border-white/[0.08] bg-paper-100/40 py-5 backdrop-blur-xl">
      <div className="container-content">
        <Reveal className="flex items-center gap-6 sm:gap-8">
          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-aurora shadow-[0_0_6px_var(--accent-1)]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
              Working across
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            {/* Edge fades with smooth gradient */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-[var(--bg-base)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-[var(--bg-base)] to-transparent" />
            <div className="flex w-max animate-marquee gap-10 sm:gap-14 py-1">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-10 sm:gap-14">
                  <span className="whitespace-nowrap font-display text-base sm:text-lg font-500 text-ink-700 hover:text-accent-400 transition-colors">
                    {item}
                  </span>
                  <span className="font-mono text-xs text-white/20 select-none">/</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
