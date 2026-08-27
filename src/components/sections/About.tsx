import { useState } from 'react';
import { about, profile, hero } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [photoLoaded, setPhotoLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const photoCandidates = [
    '/images/pro pic.png',
    '/pro pic.png',
    '/images/pro%20pic.png',
    '/pro%20pic.png',
    '/images/pro-pic.png',
    '/images/propic.png',
  ];

  const handleImageError = () => {
    if (photoIdx < photoCandidates.length - 1) {
      setPhotoIdx((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  const currentPhotoSrc = photoCandidates[photoIdx] || '';

  return (
    <section id="about" className="section-padding relative w-full max-w-full overflow-hidden">
      <div className="container-content relative w-full min-w-0">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:items-start w-full min-w-0">
          {/* Left: Heading + Identity visual container */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="ABOUT"
              title={<>The person behind the work</>}
            />

            {/* Photo / Identity card */}
            <Reveal className="relative overflow-hidden rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-7 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-white/[0.15]">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-paper-200/80 border border-white/[0.1] shadow-inner">
                    {!allFailed && currentPhotoSrc ? (
                      <img
                        src={currentPhotoSrc}
                        alt={profile.name}
                        onLoad={() => setPhotoLoaded(true)}
                        onError={handleImageError}
                        className={`h-full w-full object-cover transition-opacity duration-300 ${
                          photoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ) : null}
                    {(!photoLoaded || allFailed) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-paper-200/80">
                        <span className="font-display text-2xl font-600 text-accent-400">
                          {profile.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-600 text-ink-900">
                      {profile.name}
                    </h3>
                    <p className="font-mono text-xs text-ink-500">{profile.role}</p>
                    <p className="font-mono text-[11px] text-accent-400 mt-0.5 font-medium">
                      {profile.location}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 backdrop-blur-md p-4">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500 block mb-1">
                    Core Philosophy
                  </span>
                  <p className="font-display text-base text-ink-800 font-400 italic">
                    "{about.headline}"
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Natural storytelling + Focus areas */}
          <div className="flex flex-col gap-8">
            <Reveal className="flex flex-col gap-5">
              <h3 className="font-display text-display-lg font-600 text-ink-900 leading-tight">
                {about.headline}
              </h3>
              {about.paragraphs.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-600 text-pretty font-300">
                  {para}
                </p>
              ))}
            </Reveal>

            {/* Focus areas */}
            <Reveal delay={100} className="flex flex-col gap-4 pt-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-400">
                Core Competencies & Interests
              </span>
              <ul className="grid gap-3 sm:grid-cols-1">
                {about.focusAreas.map((area, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-paper-100/60 px-4 py-3.5 text-sm text-ink-800 shadow-sm backdrop-blur-md transition-all hover:border-white/[0.18] hover:bg-paper-100/80"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-400" />
                    <span className="font-300">{area}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
