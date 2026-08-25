import { experience } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { Calendar, Layers, Database } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-content relative">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title={<>Professional Experience</>}
          description="Practical internship roles focused on data analysis, software pipelines, and responsive web development."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {experience.map((entry, i) => (
            <Reveal
              key={entry.company}
              delay={i * 100}
              className="flex flex-col justify-between rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_24px_50px_rgba(0,0,0,0.5),0_0_24px_rgba(79,107,255,0.1)]"
            >
              <div className="flex flex-col gap-5">
                {/* Header with Role, Company and Date */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
                  <div>
                    <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-accent-400">
                      <span className="h-2 w-2 rounded-full bg-gradient-aurora shadow-[0_0_6px_#4F6BFF]" />
                      {entry.company}
                    </span>
                    <h3 className="font-display text-display-md font-700 text-ink-900 mt-1">
                      {entry.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-paper-200/60 backdrop-blur-sm px-3.5 py-1 font-mono text-xs font-medium text-ink-600">
                    <Calendar className="h-3 w-3 text-accent-400" />
                    <span>{entry.period}</span>
                  </div>
                </div>

                {/* Project / Context & Scope Highlight */}
                <div className="flex flex-col gap-1.5 rounded-2xl border border-white/[0.07] bg-paper-200/40 backdrop-blur-md p-4 sm:p-5">
                  <div className="flex items-center gap-2.5">
                    {i === 0 ? (
                      <Database className="h-4 w-4 text-accent-400 shrink-0" />
                    ) : (
                      <Layers className="h-4 w-4 text-accent-500 shrink-0" />
                    )}
                    <span className="font-display text-sm font-600 text-ink-900">
                      {entry.context}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-ink-500 pl-6 font-300 leading-relaxed">
                    {entry.scope}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-500">
                    Technologies & Tools
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.07] bg-paper-200/50 backdrop-blur-sm px-3 py-1 font-mono text-xs text-ink-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
