import { useState, useEffect, type MouseEvent } from 'react';
import { Maximize2, Image as ImageIcon, ZoomIn, ZoomOut, RotateCcw, X } from 'lucide-react';
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
  fit = 'contain',
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
  const [zoomScale, setZoomScale] = useState<number>(1);

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
      if (e.key === 'Escape') {
        setIsZoomed(false);
        setZoomScale(1);
      }
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
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
    wide: 'aspect-[16/9] sm:aspect-[21/9]',
    auto: 'min-h-[200px] sm:min-h-[260px]',
    square: 'aspect-square',
    tall: 'aspect-[4/3]',
  }[aspectRatio];

  const handleZoomIn = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale((prev) => Math.max(prev - 0.3, 0.7));
  };

  const handleResetZoom = (e: MouseEvent) => {
    e.stopPropagation();
    setZoomScale(1);
  };

  return (
    <>
      <div
        className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-paper-100/60 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-white/[0.18] hover:shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_24px_var(--glass-glow)] ${className}`}
      >
        {/* Top Chrome / Label bar if badge is provided */}
        {badge && (
          <div className="flex items-center justify-between border-b border-white/[0.07] bg-paper-200/50 px-3.5 py-2 text-xs font-mono backdrop-blur-md">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="flex items-center gap-1.5 opacity-60 shrink-0">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
              </div>
              <span className="font-medium text-ink-800 text-[11px] truncate">{badge}</span>
            </div>
            {hasLoaded && allowZoom && (
              <button
                type="button"
                onClick={() => {
                  setZoomScale(1);
                  setIsZoomed(true);
                }}
                className="flex items-center gap-1 shrink-0 rounded-lg bg-paper-100/80 px-2 py-0.5 text-[10px] text-ink-600 hover:text-ink-900 hover:bg-paper-100 transition-colors cursor-pointer border border-white/[0.08] active:scale-95"
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
            if (hasLoaded && allowZoom) {
              setZoomScale(1);
              setIsZoomed(true);
            }
          }}
          className={`relative w-full ${aspectClasses} overflow-hidden bg-paper-200/30 flex items-center justify-center ${
            hasLoaded && allowZoom ? 'cursor-zoom-in' : ''
          }`}
        >
          {!hasError && activeSrc ? (
            <>
              {/* Subtle ambient blur behind image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 blur-md scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${activeSrc})` }}
                aria-hidden
              />

              <img
                src={activeSrc}
                alt={alt}
                referrerPolicy="no-referrer"
                onLoad={() => setHasLoaded(true)}
                onError={handleError}
                className={`relative z-10 h-full w-full ${
                  fit === 'contain' ? 'object-contain p-1.5 sm:p-2.5' : 'object-cover'
                } transition-all duration-500 group-hover:scale-[1.01] ${
                  hasLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Mobile tap hint */}
              {hasLoaded && allowZoom && (
                <div className="absolute bottom-2 right-2 z-20 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-white/90 shadow-md border border-white/20 sm:hidden">
                  <Maximize2 className="h-2.5 w-2.5 text-accent-400" />
                  <span>Tap to expand</span>
                </div>
              )}
            </>
          ) : null}

          {/* When image is not present or while attempting resolution */}
          {(!hasLoaded || hasError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-paper-200/20 backdrop-blur-xs">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-paper-200/70 border border-white/[0.08] text-ink-500 mb-2 shadow-xs">
                <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5 text-accent-400" />
              </div>
              <span className="font-display text-xs sm:text-sm font-500 text-ink-800 line-clamp-2">
                {fallbackTitle || alt}
              </span>
              {fallbackDescription && (
                <p className="mt-1 max-w-sm text-[11px] sm:text-xs text-ink-500 leading-relaxed font-sans font-300 line-clamp-2">
                  {fallbackDescription}
                </p>
              )}
              {badge && (
                <span className="mt-2 rounded-full bg-paper-200/60 px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] text-ink-500 border border-white/[0.08]">
                  {badge}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Bottom Caption */}
        {caption && (
          <div className="border-t border-white/[0.07] bg-paper-200/30 px-3.5 py-2">
            <p className="text-[11px] sm:text-xs text-ink-500 leading-relaxed font-300">{caption}</p>
          </div>
        )}
      </div>

      {/* Lightbox Zoom Modal for Raw Full-Resolution Screenshot */}
      {isZoomed && activeSrc && (
        <div
          onClick={() => {
            setIsZoomed(false);
            setZoomScale(1);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-2 sm:p-6 backdrop-blur-2xl cursor-zoom-out animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[96vh] max-w-6xl w-full flex flex-col overflow-hidden rounded-2xl border border-white/[0.14] bg-paper-100/95 shadow-2xl shadow-black/90 backdrop-blur-2xl"
          >
            {/* Header bar in modal */}
            <div className="flex items-center justify-between border-b border-white/[0.1] bg-paper-200/90 px-3.5 py-2.5 gap-2">
              <div className="flex items-center gap-2 overflow-hidden">
                <span className="font-mono text-xs font-semibold text-ink-900 truncate">
                  {badge || alt}
                </span>
              </div>

              {/* Zoom controls & Close button */}
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-paper-200 text-ink-800 hover:bg-paper-300 border border-white/[0.1] transition-colors cursor-pointer"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="flex h-7 w-7 items-center justify-center rounded-lg bg-paper-200 text-ink-800 hover:bg-paper-300 border border-white/[0.1] transition-colors cursor-pointer"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                {zoomScale !== 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="flex h-7 items-center gap-1 px-2 rounded-lg bg-paper-200 text-xs font-mono text-ink-800 hover:bg-paper-300 border border-white/[0.1] transition-colors cursor-pointer"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span className="hidden xs:inline">100%</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setIsZoomed(false);
                    setZoomScale(1);
                  }}
                  className="flex items-center gap-1 rounded-lg bg-accent-500/20 text-accent-400 px-2.5 py-1 text-xs font-mono font-medium hover:bg-accent-500/30 transition-colors cursor-pointer border border-accent-400/30"
                >
                  <X className="h-3.5 w-3.5" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Modal Image container */}
            <div className="flex-1 overflow-auto bg-black/50 p-2 sm:p-4 flex items-center justify-center min-h-[50vh] max-h-[82vh] touch-pan-x touch-pan-y">
              <img
                src={activeSrc}
                alt={alt}
                referrerPolicy="no-referrer"
                style={{
                  transform: `scale(${zoomScale})`,
                  transformOrigin: 'center center',
                  transition: 'transform 0.2s ease-out',
                }}
                className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
              />
            </div>

            {caption && (
              <div className="border-t border-white/[0.08] bg-paper-100/90 px-3.5 py-2 text-xs text-ink-600">
                {caption}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
