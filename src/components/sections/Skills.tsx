import { skillGroups } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-content relative">
        <SectionHeading
          eyebrow="SKILLS"
          title={<>Technical Toolkit</>}
          description="Categorized technical competencies across modern web development, data analysis, machine learning algorithms, and engineering platforms."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 60}
              className="flex flex-col gap-4 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-200 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_20px_rgba(79,107,255,0.1)]"
            >
              <div className="flex items-center gap-2 border-b border-white/[0.07] pb-3.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-aurora shadow-[0_0_6px_#4F6BFF]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-400">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/[0.08] bg-paper-200/50 backdrop-blur-sm px-3 py-1.5 font-mono text-xs text-ink-800 font-medium transition-colors hover:border-accent-400/40 hover:bg-paper-200/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
