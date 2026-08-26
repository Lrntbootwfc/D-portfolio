import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full max-w-full overflow-hidden border-t border-white/[0.08] bg-paper-100/40 backdrop-blur-xl">
      <div className="container-content relative w-full min-w-0 py-10 sm:py-14">
        {/* Main Footer Row */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Identity */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-gradient-aurora shadow-[0_0_8px_#4F6BFF]" />
              <span className="font-display text-lg font-700 tracking-tight text-ink-900">
                {profile.name.toUpperCase()}
              </span>
            </div>
            <p className="font-mono text-xs text-ink-500 max-w-xs font-300">
              {profile.role}
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6 font-mono text-xs font-medium text-ink-600">
            <a href="/#work" className="transition-colors hover:text-accent-400">
              Work
            </a>
            <a href="/#experience" className="transition-colors hover:text-accent-400">
              Experience
            </a>
            <a href="/#about" className="transition-colors hover:text-accent-400">
              About
            </a>
            <a href="/#contact" className="transition-colors hover:text-accent-400">
              Contact
            </a>
          </nav>

          {/* Contact Channels */}
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-medium text-ink-600">
            <a
              href={`https://github.com/${profile.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent-400"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3 opacity-60 text-accent-400" />
            </a>
            <a
              href={`https://www.linkedin.com/in/${profile.linkedinUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-accent-500"
            >
              LinkedIn
              <ArrowUpRight className="h-3 w-3 opacity-60 text-accent-500" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1 transition-colors hover:text-accent-400"
            >
              Email
              <ArrowUpRight className="h-3 w-3 opacity-60 text-accent-400" />
            </a>
          </div>
        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-12 border-t border-white/[0.07] pt-6 flex items-center justify-between font-mono text-[11px] text-ink-500">
          <span>© {year} {profile.name}. All rights reserved.</span>
          <span className="hidden sm:inline font-300">Build · Analyze · Explore</span>
        </div>
      </div>
    </footer>
  );
}
