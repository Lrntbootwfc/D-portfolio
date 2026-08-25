import { useState, useEffect } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { resolveAssetCandidates } from '@/data/driveAssets';

interface ProjectScreenshotProps {
  candidates?: string[];
  src?: string;
  alt: string;
  caption?: string;
  aspectRatio?: 'video' | 'wide' | 'auto' | 'square' | 'tall';
  fit?: 'cover' | 'contain';
  className?: string;
  badge?: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
  priority?: boolean;
  allowZoom?: boolean;
}

export default function ProjectScreenshot({
  candidates = [],
  src,
  alt,
  caption,
  aspectRatio = 'video',
  fit = 'cover',
  className = '',
  badge,
  fallbackTitle,
  fallbackDescription,
  allowZoom = true,
}: ProjectScreenshotProps) {
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Generate full candidate list (with Drive URLs first, then multiple standard extensions and path prefixes)
  const allCandidates: string[] = [];

  // Add drive candidate URLs first
  if (src) {
    allCandidates.push(...resolveAssetCandidates(src));
  }
  candidates.forEach((name) => {
    if (name) {
      allCandidates.push(...resolveAssetCandidates(name));
    }
  });

  if (src) {
    allCandidates.push(src);
    try {
      allCandidates.push(encodeURI(src));
    } catch {
      // ignore
    }
  }

  candidates.forEach((name) => {
    if (!name) return;
    allCandidates.push(name);
    try {
      allCandidates.push(encodeURI(name));
    } catch {
      // ignore
    }

    const cleanName = name.replace(/^\/+/, '');
    const cleanNoExt = cleanName.replace(/\.[^/.]+$/, '');

    const prefixes = ['images/', 'projects/', 'assets/images/', '', 'assets/'];
    const extensions = ['.png', '.jpg', '.jpeg', '.webp', '.svg'];

    prefixes.forEach((p) => {
      allCandidates.push(`/${p}${cleanName}`);
      try {
        allCandidates.push(encodeURI(`/${p}${cleanName}`));
      } catch {
        // ignore
      }

      extensions.forEach((ext) => {
        allCandidates.push(`/${p}${cleanNoExt}${ext}`);
        try {
          allCandidates.push(encodeURI(`/${p}${cleanNoExt}${ext}`));
        } catch {
          // ignore
        }
      });
    });
  });

  const uniqueCandidates = Array.from(new Set(allCandidates));
  const activeSrc = uniqueCandidates[currentCandidateIndex];

  useEffect(() => {
    setCurrentCandidateIndex(0);
    setHasLoaded(false);
    setHasError(false);
  }, [src, JSON.stringify(candidates)]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomed(false);
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  const handleError = () => {
    if (currentCandidateIndex < uniqueCandidates.length - 1) {
      setCurrentCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const aspectClasses = {
    video: 'aspect-[16/10]',
    wide: 'aspect-[21/9]',
    auto: 'min-h-[220px]',
    square: 'aspect-square',
    tall: 'aspect-[4/3]',
  }[aspectRatio];

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-paper-100/60 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_24px_var(--glass-glow)] ${className}`}
      >
        {/* Top Chrome / Label bar if badge is provided */}
        {badge && (
          <div className="flex items-center justify-between border-b border-white/[0.07] bg-paper-200/50 px-3.5 py-2 text-xs font-mono backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 opacity-60">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <span className="font-medium text-ink-800 text-[11px] truncate max-w-[240px] sm:max-w-none">{badge}</span>
            </div>
            {hasLoaded && allowZoom && (
              <button
                type="button"
                onClick={() => setIsZoomed(true)}
                className="flex items-center gap-1 rounded-lg bg-paper-100/70 px-2 py-0.5 text-[10px] text-ink-500 hover:text-ink-900 hover:bg-paper-100 transition-colors cursor-pointer border border-white/[0.08]"
                title="View full-size screenshot"
              >
                <Maximize2 className="h-2.5 w-2.5 text-accent-400" />
                <span>Full Res</span>
              </button>
            )}
          </div>
        )}

        {/* Image Display Area */}
        <div
          onClick={() => {
            if (hasLoaded && allowZoom) setIsZoomed(true);
          }}
          className={`relative w-full ${aspectClasses} overflow-hidden bg-paper-200/30 flex items-center justify-center ${
            hasLoaded && allowZoom ? 'cursor-zoom-in' : ''
          }`}
        >
          {!hasError && activeSrc ? (
            <>
              <img
                src={activeSrc}
                alt={alt}
                referrerPolicy="no-referrer"
                onLoad={() => setHasLoaded(true)}
                onError={handleError}
                className={`h-full w-full ${
                  fit === 'contain' ? 'object-contain p-2' : 'object-cover'
                } transition-all duration-500 group-hover:scale-[1.02] ${
                  hasLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </>
          ) : null}

          {/* When image is not present or while attempting resolution */}
          {(!hasLoaded || hasError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-paper-200/20 backdrop-blur-xs">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-200/70 border border-white/[0.08] text-ink-500 mb-2.5 shadow-xs">
                <ImageIcon className="h-5 w-5 text-accent-400" />
              </div>
              <span className="font-display text-sm font-500 text-ink-800">
                {fallbackTitle || alt}
              </span>
              {fallbackDescription && (
                <p className="mt-1.5 max-w-sm text-xs text-ink-500 leading-relaxed font-sans font-300">
                  {fallbackDescription}
                </p>
              )}
              {badge && (
                <span className="mt-3 rounded-full bg-paper-200/60 px-3 py-1 font-mono text-[10px] text-ink-500 border border-white/[0.08]">
                  {badge}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Bottom Caption */}
        {caption && (
          <div className="border-t border-white/[0.07] bg-paper-200/30 px-4 py-2.5">
            <p className="text-xs text-ink-500 leading-relaxed font-300">{caption}</p>
          </div>
        )}
      </div>

      {/* Lightbox Zoom Modal for Raw Full-Resolution Screenshot */}
      {isZoomed && activeSrc && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-2xl cursor-zoom-out animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[95vh] max-w-6xl w-full flex flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-paper-100/95 shadow-2xl shadow-black/80 backdrop-blur-2xl"
          >
            {/* Header bar in modal */}
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-paper-200/80 px-4 py-3">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5 opacity-70">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-xs font-semibold text-ink-900">
                  {badge || alt}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsZoomed(false)}
                className="rounded-lg bg-paper-200 px-3 py-1 text-xs font-mono text-ink-900 hover:bg-paper-300 transition-colors cursor-pointer border border-white/[0.1]"
              >
                Close (ESC)
              </button>
            </div>

            {/* Modal Image container */}
            <div className="flex-1 overflow-auto bg-black/40 p-2 sm:p-4 flex items-center justify-center min-h-[50vh] max-h-[82vh]">
              <img
                src={activeSrc}
                alt={alt}
                referrerPolicy="no-referrer"
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-lg"
              />
            </div>

            {caption && (
              <div className="border-t border-white/[0.08] bg-paper-100/90 px-4 py-2.5 text-xs text-ink-600">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
