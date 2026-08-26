import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { capabilities } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Capabilities() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="capabilities" className="section-padding relative w-full max-w-full overflow-hidden">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] sm:h-[450px] sm:w-[650px] rounded-full bg-accent-400/8 blur-[120px] max-w-full" aria-hidden />

      <div className="container-content relative w-full min-w-0">
        <SectionHeading
          eyebrow="CAPABILITIES"
          title={<>What I Build</>}
          description="Web Development, Data Analytics, and AI/ML are not isolated disciplines — they are three connected capabilities I bring together to turn complex requirements into robust, useful digital solutions."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {capabilities.map((cap, i) => {
            const isHovered = activeCard === cap.id;

            return (
              <Reveal
                key={cap.id}
                delay={i * 100}
                className="group relative flex flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-7 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_24px_var(--glass-glow)] hover:translate-y-[-2px]"
              >
                <div
                  className="flex flex-col gap-6"
                  onMouseEnter={() => setActiveCard(cap.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  onTouchStart={() => setActiveCard(cap.id)}
                >
                  {/* Top metadata & Number */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-400 font-semibold">
                      {cap.number} — {cap.label}
                    </span>
                    <span className="font-mono text-xs font-semibold text-ink-500">
                      /{cap.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-display-md font-600 text-ink-900 leading-tight">
                    {cap.title}
                  </h3>

                  {/* Visual Blueprint Container */}
                  <div className="relative h-28 w-full overflow-hidden rounded-2xl border border-white/[0.07] bg-paper-200/50 backdrop-blur-md p-3.5 transition-all duration-300 group-hover:border-white/[0.15] group-hover:bg-paper-200/70">
                    {cap.id === 'build' && <BuildVisual isHovered={isHovered} />}
                    {cap.id === 'analyze' && <AnalyzeVisual isHovered={isHovered} />}
                    {cap.id === 'explore' && <ExploreVisual isHovered={isHovered} />}
                  </div>

                  {/* Items list */}
                  <ul className="flex flex-col gap-2.5 pt-1">
                    {cap.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink-600 transition-colors group-hover:text-ink-800"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-aurora" />
                        <span className="font-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-8 mt-auto border-t border-white/[0.07]">
                  <Link
                    to={cap.cta.href}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-900 font-semibold transition-all duration-200 group-hover:text-accent-400 group-hover:translate-x-1"
                  >
                    <span>{cap.cta.label}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * 01 — BUILD: Abstract browser/interface wireframe visual (permanently visible & vibrant)
 */
function BuildVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between" aria-hidden>
      {/* Browser top bar */}
      <div className="flex items-center justify-between border-b border-ink-900/10 dark:border-white/10 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-rose-400/90 shadow-[0_0_4px_rgba(244,63,94,0.4)]" />
          <div className="h-2 w-2 rounded-full bg-amber-400/90 shadow-[0_0_4px_rgba(251,191,36,0.4)]" />
          <div className="h-2 w-2 rounded-full bg-emerald-400/90 shadow-[0_0_4px_rgba(52,211,153,0.4)]" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-accent-500/15 dark:bg-accent-400/20 px-2 py-0.5 border border-accent-400/30">
          <span className="h-1 w-1 rounded-full bg-accent-400 animate-pulse-soft" />
          <span
            className={`h-1.5 rounded-full bg-accent-400/80 transition-all duration-300 ${
              isHovered ? 'w-20' : 'w-14'
            }`}
          />
        </div>
      </div>

      {/* Wireframe interface elements */}
      <div className="grid grid-cols-3 gap-2.5 pt-1.5">
        {/* Left column / sidebar */}
        <div className="flex flex-col gap-1.5 justify-center">
          <div className="h-1.5 w-full rounded-full bg-accent-400/40" />
          <div className="h-1.5 w-4/5 rounded-full bg-ink-900/20 dark:bg-white/25" />
          <div className="h-1.5 w-3/5 rounded-full bg-ink-900/15 dark:bg-white/20" />
        </div>

        {/* Center / main content block */}
        <div className="col-span-2 flex flex-col gap-1.5">
          <div
            className={`h-6 w-full rounded-xl border border-accent-400/30 bg-paper-100/90 dark:bg-paper-100/60 transition-all duration-300 ${
              isHovered ? 'border-accent-400/60 shadow-[0_0_12px_var(--glass-glow)]' : 'shadow-xs'
            } flex items-center px-2.5 justify-between`}
          >
            <div
              className={`h-2 rounded-full bg-gradient-aurora transition-all duration-300 ${
                isHovered ? 'w-4/5' : 'w-3/5'
              }`}
            />
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-3.5 rounded-lg border border-accent-400/20 bg-accent-500/15 dark:bg-accent-400/20 flex items-center px-1.5">
              <div className="h-1 w-2/3 rounded-full bg-accent-400/70" />
            </div>
            <div className="h-3.5 rounded-lg border border-ink-900/10 dark:border-white/10 bg-paper-100/80 dark:bg-paper-100/40 flex items-center px-1.5">
              <div className="h-1 w-1/2 rounded-full bg-ink-900/25 dark:bg-white/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 02 — ANALYZE: Abstract chart/dashboard visual (permanently vibrant)
 */
function AnalyzeVisual({ isHovered }: { isHovered: boolean }) {
  const barValues = [
    { height: 45, color: 'bg-accent-400/50' },
    { height: 75, color: 'bg-accent-400/80' },
    { height: 35, color: 'bg-accent-500/50' },
    { height: 90, color: 'bg-gradient-aurora' },
    { height: 60, color: 'bg-accent-400/60' },
    { height: 100, color: 'bg-gradient-aurora' },
    { height: 70, color: 'bg-accent-400/80' },
  ];

  return (
    <div className="relative flex h-full w-full flex-col justify-between" aria-hidden>
      {/* Top metrics summary line */}
      <div className="flex items-center justify-between text-[10px] font-mono">
        <span className="flex items-center gap-1.5 font-semibold text-ink-700 dark:text-ink-300">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shadow-[0_0_6px_var(--accent-1)]" />
          METRIC
        </span>
        <span className="text-accent-400 font-bold tracking-tight">
          +34.8%
        </span>
      </div>

      {/* Bar chart + sparkline composition */}
      <div className="flex items-end justify-between gap-1.5 pt-1.5 pb-1 border-b border-ink-900/10 dark:border-white/10">
        <div className="flex items-end gap-1.5 flex-1 h-12">
          {barValues.map((bar, idx) => {
            const activeHeight = isHovered ? Math.min(100, bar.height + 6) : bar.height;
            return (
              <div
                key={idx}
                className={`flex-1 rounded-t-sm transition-all duration-300 ease-out shadow-xs ${bar.color} ${
                  idx === 5 || idx === 3 ? 'shadow-[0_0_8px_var(--glass-glow)]' : ''
                }`}
                style={{
                  height: `${activeHeight}%`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Axis tags */}
      <div className="flex justify-between font-mono text-[9px] font-medium text-ink-600 dark:text-ink-400">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
      </div>
    </div>
  );
}

/**
 * 03 — EXPLORE: Abstract knowledge graph / neural network visual (permanently vibrant)
 */
function ExploreVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center" aria-hidden>
      <svg className="h-full w-full" viewBox="0 0 200 80" fill="none">
        {/* Connection lines */}
        <line
          x1="30"
          y1="40"
          x2="80"
          y2="20"
          stroke="var(--accent-1)"
          strokeWidth="1.5"
          strokeOpacity={isHovered ? '0.9' : '0.65'}
          strokeDasharray={isHovered ? '3 2' : 'none'}
          className="transition-all duration-300"
        />
        <line
          x1="30"
          y1="40"
          x2="80"
          y2="60"
          stroke="var(--accent-2)"
          strokeWidth="1.25"
          strokeOpacity={isHovered ? '0.8' : '0.55'}
          className="transition-all duration-300"
        />
        <line
          x1="80"
          y1="20"
          x2="140"
          y2="30"
          stroke="var(--accent-1)"
          strokeWidth="1.75"
          strokeOpacity={isHovered ? '1' : '0.75'}
          className="transition-all duration-300"
        />
        <line
          x1="80"
          y1="60"
          x2="140"
          y2="50"
          stroke="var(--accent-2)"
          strokeWidth="1.25"
          strokeOpacity={isHovered ? '0.8' : '0.55'}
          className="transition-all duration-300"
        />
        <line
          x1="140"
          y1="30"
          x2="180"
          y2="40"
          stroke="var(--accent-1)"
          strokeWidth="1.75"
          strokeOpacity={isHovered ? '1' : '0.75'}
          className="transition-all duration-300"
        />
        <line
          x1="140"
          y1="50"
          x2="180"
          y2="40"
          stroke="var(--accent-2)"
          strokeWidth="1.25"
          strokeOpacity={isHovered ? '0.8' : '0.55'}
          className="transition-all duration-300"
        />
        <line
          x1="80"
          y1="20"
          x2="80"
          y2="60"
          stroke="var(--accent-1)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line
          x1="140"
          y1="30"
          x2="140"
          y2="50"
          stroke="var(--accent-2)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Nodes with rich glow */}
        <circle cx="30" cy="40" r="4" fill="var(--accent-1)" />
        <circle cx="30" cy="40" r="6" stroke="var(--accent-1)" strokeWidth="1" strokeOpacity="0.4" />

        <circle cx="80" cy="20" r="4.5" fill="var(--accent-1)" />
        <circle cx="80" cy="20" r="7" stroke="var(--accent-1)" strokeWidth="1" strokeOpacity="0.3" />

        <circle cx="80" cy="60" r="3.5" fill="var(--accent-2)" />

        <circle
          cx="140"
          cy="30"
          r={isHovered ? '6' : '5'}
          fill="var(--accent-1)"
          className="transition-all duration-300"
        />
        <circle cx="140" cy="30" r="9" stroke="var(--accent-1)" strokeWidth="1.2" strokeOpacity="0.5" />

        <circle cx="140" cy="50" r="4" fill="var(--accent-2)" />

        <circle
          cx="180"
          cy="40"
          r={isHovered ? '5.5' : '4.5'}
          fill="var(--accent-1)"
          className="transition-all duration-300"
        />
        <circle cx="180" cy="40" r="8" stroke="var(--accent-1)" strokeWidth="1" strokeOpacity="0.4" />

        {/* Pulse ring */}
        <circle
          cx="140"
          cy="30"
          r="12"
          stroke="var(--accent-1)"
          strokeWidth="1"
          strokeOpacity="0.6"
          className="animate-pulse origin-center"
        />
      </svg>
    </div>
  );
}
