import { howIWork } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function HowIWork() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-content relative">
        <SectionHeading
          eyebrow="HOW I WORK"
          title={<>From Requirement to Delivery</>}
          description="A structured, predictable 5-step process designed to give freelance and business clients complete confidence in project delivery."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {howIWork.map((item, i) => (
            <Reveal
              key={item.step}
              delay={i * 70}
              className="flex flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-7 shadow-[0_16px_36px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_20px_45px_rgba(0,0,0,0.5),0_0_20px_rgba(79,107,255,0.1)] hover:translate-y-[-2px]"
            >
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs font-semibold text-accent-400">
                  {item.step}
                </span>
                <h3 className="font-display text-xl font-600 text-ink-900 leading-tight">
                  {item.title}
                </h3>
              </div>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-ink-600 text-pretty font-300">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
