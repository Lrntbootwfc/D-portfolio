import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClass} ${className}`}>
      <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-paper-200/60 px-3.5 py-1.5 backdrop-blur-md shadow-xs">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-aurora shadow-[0_0_6px_var(--accent-1)]" />
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-display-lg font-700 text-ink-900 tracking-tight text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg leading-relaxed text-ink-600 text-pretty font-300">
          {description}
        </p>
      )}
    </Reveal>
  );
}
