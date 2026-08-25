import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { capabilities } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Capabilities() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="capabilities" className="section-padding relative">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] rounded-full bg-accent-400/8 blur-[140px]" aria-hidden />

      <div className="container-content relative">
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
 * 01 — BUILD: Abstract browser/interface wireframe visual
 */
function BuildVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between" aria-hidden>
      {/* Browser bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div
          className={`h-2 rounded-full bg-white/10 transition-all duration-500 ${
            isHovered ? 'w-24 bg-accent-400/40' : 'w-16'
          }`}
        />
      </div>

      {/* Wireframe interface elements */}
      <div className="grid grid-cols-3 gap-2 pt-1.5">
        {/* Left column / sidebar */}
        <div className="flex flex-col gap-1">
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
        </div>

        {/* Center / main content block */}
        <div className="col-span-2 flex flex-col gap-1.5">
          <div
            className={`h-6 w-full rounded-xl border border-white/[0.08] bg-paper-100/80 transition-all duration-300 ${
              isHovered ? 'border-accent-400/50 bg-paper-100 shadow-xs' : ''
            } flex items-center px-2`}
          >
            <div
              className={`h-1.5 rounded-full bg-white/20 transition-all duration-500 ${
                isHovered ? 'w-3/4 bg-gradient-aurora' : 'w-1/2'
              }`}
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="h-3 rounded-lg bg-white/[0.08]" />
            <div className="h-3 rounded-lg bg-white/[0.08]" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 02 — ANALYZE: Abstract chart/dashboard visual
 */
function AnalyzeVisual({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between" aria-hidden>
      {/* Top metrics summary line */}
      <div className="flex items-center justify-between text-[10px] font-mono text-ink-500">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          METRIC
        </span>
        <span className={isHovered ? 'text-accent-400 font-semibold' : ''}>
          {isHovered ? '+34.8%' : 'AVG.DATA'}
        </span>
      </div>

      {/* Bar chart + sparkline composition */}
      <div className="flex items-end justify-between gap-1.5 pt-2 pb-1 border-b border-white/[0.08]">
        <div className="flex items-end gap-1.5 flex-1 h-12">
          {[40, 65, 30, 85, 55, 95, 70].map((val, idx) => {
            const activeHeight = isHovered ? Math.min(100, val + 10) : val;
            return (
              <div
                key={idx}
                className="flex-1 rounded-t-xs transition-all duration-500 ease-out"
                style={{
                  height: `${activeHeight}%`,
                  backgroundColor:
                    idx === 5 && isHovered
                      ? 'var(--accent-1)'
                      : isHovered
                      ? idx % 2 === 0
                        ? 'var(--accent-2)'
                        : 'rgba(255,255,255,0.25)'
                      : 'rgba(255,255,255,0.12)',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Axis tags */}
      <div className="flex justify-between font-mono text-[9px] text-ink-500">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
      </div>
    </div>
  );
}

/**
 * 03 — EXPLORE: Abstract knowledge graph / neural network visual
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
          stroke={isHovered ? 'var(--accent-1)' : 'rgba(255,255,255,0.15)'}
          strokeWidth="1"
          strokeDasharray={isHovered ? '2 2' : 'none'}
          className="transition-colors duration-300"
        />
        <line
          x1="30"
          y1="40"
          x2="80"
          y2="60"
          stroke={isHovered ? 'var(--accent-2)' : 'rgba(255,255,255,0.1)'}
          strokeWidth="1"
          className="transition-colors duration-300"
        />
        <line
          x1="80"
          y1="20"
          x2="140"
          y2="30"
          stroke={isHovered ? 'var(--accent-1)' : 'rgba(255,255,255,0.15)'}
          strokeWidth="1.2"
          className="transition-colors duration-300"
        />
        <line
          x1="80"
          y1="60"
          x2="140"
          y2="50"
          stroke={isHovered ? 'var(--accent-2)' : 'rgba(255,255,255,0.1)'}
          strokeWidth="1"
          className="transition-colors duration-300"
        />
        <line
          x1="140"
          y1="30"
          x2="180"
          y2="40"
          stroke={isHovered ? 'var(--accent-1)' : 'rgba(255,255,255,0.15)'}
          strokeWidth="1"
          className="transition-colors duration-300"
        />
        <line
          x1="140"
          y1="50"
          x2="180"
          y2="40"
          stroke={isHovered ? 'var(--accent-2)' : 'rgba(255,255,255,0.1)'}
          strokeWidth="1"
          className="transition-colors duration-300"
        />
        <line
          x1="80"
          y1="20"
          x2="80"
          y2="60"
          stroke={isHovered ? 'var(--accent-1)' : 'rgba(255,255,255,0.08)'}
          strokeWidth="0.8"
        />
        <line
          x1="140"
          y1="30"
          x2="140"
          y2="50"
          stroke={isHovered ? 'var(--accent-2)' : 'rgba(255,255,255,0.08)'}
          strokeWidth="0.8"
        />

        {/* Nodes */}
        <circle cx="30" cy="40" r="3.5" fill={isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.4)'} />
        <circle cx="80" cy="20" r="4" fill={isHovered ? 'var(--accent-1)' : 'rgba(255,255,255,0.3)'} />
        <circle cx="80" cy="60" r="3" fill={isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.4)'} />
        <circle
          cx="140"
          cy="30"
          r={isHovered ? '5' : '4'}
          fill={isHovered ? 'var(--accent-2)' : 'rgba(255,255,255,0.3)'}
          className="transition-all duration-300"
        />
        <circle cx="140" cy="50" r="3.5" fill={isHovered ? '#FFFFFF' : 'rgba(255,255,255,0.4)'} />
        <circle
          cx="180"
          cy="40"
          r={isHovered ? '4.5' : '3.5'}
          fill={isHovered ? 'var(--accent-1)' : 'rgba(255,255,255,0.3)'}
          className="transition-all duration-300"
        />

        {/* Orbit pulse when hovered */}
        {isHovered && (
          <circle
            cx="140"
            cy="30"
            r="9"
            stroke="var(--accent-2)"
            strokeWidth="0.75"
            strokeOpacity="0.5"
            className="animate-ping origin-center"
          />
        )}
      </svg>
    </div>
  );
}
