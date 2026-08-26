import { exploring } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { Compass } from 'lucide-react';

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="section-padding relative w-full max-w-full overflow-hidden">
      <div className="container-content relative w-full min-w-0">
        <SectionHeading
          eyebrow="CURRENTLY EXPLORING"
          title={<>Active Exploration & Research</>}
          description="Specific emerging domains, architectures, and engineering methods I am actively studying and testing."
        />

        <div className="mt-14 flex flex-col gap-3.5">
          {exploring.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="flex flex-col gap-3 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-5 shadow-[0_12px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-200 hover:border-accent-400/40 hover:bg-paper-100/75 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-paper-200/60 border border-white/[0.08] text-accent-400 shadow-inner">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-600 text-ink-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-ink-600 sm:max-w-md text-pretty font-300">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
