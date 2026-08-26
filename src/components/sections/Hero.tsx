import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { hero, heroCredibility, profile } from '@/data/portfolio';
import { resolveAssetCandidates } from '@/data/driveAssets';
import HeroGeometrics from './HeroGeometrics';

export default function Hero() {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const baseCandidates = hero.photoCandidates || ['pro pic.png', 'pro pic.jpg', 'images/pro pic.png'];
  const photoCandidates = Array.from(new Set([
    ...resolveAssetCandidates('pro pic.png'),
    ...baseCandidates.map((c) => c.startsWith('http') || c.startsWith('/') ? c : `/${c}`),
  ]));

  const handleImageError = () => {
    if (photoIdx < photoCandidates.length - 1) {
      setPhotoIdx((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  const currentPhotoSrc = photoCandidates[photoIdx] || '';

  return (
    <section className="relative overflow-hidden w-full max-w-full pt-24 pb-12 sm:pt-28 sm:pb-16 lg:min-h-screen lg:flex lg:items-center lg:pt-24 lg:pb-20">
      {/* Aurora Ambient Glow Effects */}
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[320px] w-[320px] sm:h-[500px] sm:w-[500px] rounded-full bg-accent-400/10 blur-[120px] max-w-full"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[-10%] left-0 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-accent-500/10 blur-[110px] max-w-full"
        aria-hidden
      />

      {/* Subtle Matrix Blueprint Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 45%, black 35%, transparent 100%)',
        }}
        aria-hidden
      />

      <div className="container-content relative w-full py-4 sm:py-6 lg:py-8">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 xl:gap-20 w-full min-w-0">
          {/* === LEFT SIDE === */}
          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7 w-full min-w-0">
            {/* Live Status Eyebrow Badge */}
            <div className="animate-fade-in flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-paper-200/50 px-3.5 py-1.5 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-500 font-semibold">
                  {hero.eyebrow}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-up font-display text-display-2xl font-700 text-ink-900 text-balance tracking-tight leading-[1.04] w-full">
              Turning ideas into <span className="text-gradient-aurora">useful digital</span> experiences.
            </h1>

            {/* Supporting Text */}
            <p className="animate-fade-up w-full max-w-2xl text-base leading-relaxed text-ink-600 text-pretty sm:text-lg lg:text-xl font-300">
              {hero.supportingText}
            </p>

            {/* Capability Line Pill */}
            <div className="animate-fade-up flex items-center gap-2.5">
              <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-paper-200/50 px-4 py-2 backdrop-blur-md shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-aurora" />
                <span className="font-mono text-xs font-semibold text-accent-400 tracking-wide">
                  {hero.capabilityLine}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <Link
                to={hero.primaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-aurora px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-95 cursor-pointer"
              >
                <span>{hero.primaryCta.label}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to={hero.secondaryCta.href}
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-paper-200/50 backdrop-blur-md px-6 sm:px-7 py-3 sm:py-3.5 text-xs font-medium tracking-wide text-ink-700 transition-all duration-200 hover:border-white/[0.2] hover:bg-paper-200/80 hover:text-ink-900 shadow-sm"
              >
                <span>{hero.secondaryCta.label}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-400" />
              </Link>
            </div>
          </div>

          {/* === RIGHT SIDE — Photo Container === */}
          <div className="animate-fade-in relative w-full min-w-0">
            <HeroGeometrics />

            {/* Photo container with midnight architectural depth */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:mx-0 lg:ml-auto">
              {/* Dual-accent ambient back glow */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-accent-400/15 via-accent-500/10 to-transparent blur-xl" />
              
              {/* Offset architectural frame borders */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[2.25rem] border border-white/[0.08]" />
              <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[2.25rem] bg-paper-200/40 border border-white/[0.08] backdrop-blur-xs" />

              {/* Main photo card */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-paper-200/80 backdrop-blur-md shadow-2xl shadow-black/60">
                {!allFailed && currentPhotoSrc ? (
                  <>
                    <img
                      src={currentPhotoSrc}
                      alt={profile.name}
                      decoding="async"
                      onLoad={() => setPhotoLoaded(true)}
                      onError={handleImageError}
                      className={`h-full w-full object-cover object-center transition-all duration-700 ${
                        photoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    />
                    {!photoLoaded && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center bg-paper-200">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-paper-300 animate-pulse border border-paper-400">
                          <span className="font-display text-2xl font-600 text-ink-400">
                            {profile.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-display text-base font-600 text-ink-600">
                            {profile.name}
                          </span>
                          <span className="font-mono text-xs text-ink-400">
                            Loading profile photo...
                          </span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center bg-paper-200">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-paper-300 border border-paper-400">
                      <span className="font-display text-2xl font-600 text-ink-400">
                        {profile.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-base font-600 text-ink-600">
                        {profile.name}
                      </span>
                      <span className="font-mono text-xs text-ink-400">
                        pro pic ({photoCandidates[0]})
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Role Badge */}
              <div className="absolute -bottom-4 right-4 flex items-center gap-2 rounded-full border border-white/[0.09] bg-paper-100/90 px-4 py-1.5 shadow-xl backdrop-blur-xl">
                <span className="h-2 w-2 rounded-full bg-gradient-aurora shadow-[0_0_8px_#4F6BFF]" />
                <span className="font-mono text-[11px] font-semibold text-ink-800 tracking-wide">
                  {profile.role}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* === Compact Credibility Strip === */}
        <div className="animate-fade-in mt-14 border-t border-white/[0.08] pt-6 lg:mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3">
            {heroCredibility.map((item, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-x-6">
                <span className="text-xs sm:text-sm text-ink-500 font-mono tracking-tight">{item}</span>
                {i < heroCredibility.length - 1 && (
                  <span className="hidden h-1 w-1 shrink-0 rounded-full bg-paper-400 sm:inline-block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 lg:flex opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-500">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-accent-400" />
      </div>
    </section>
  );
}
