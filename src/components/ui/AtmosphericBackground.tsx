/**
 * AtmosphericBackground
 *
 * Multi-layered atmospheric environment adapting dynamically to the 4 themes:
 * 1. Base Canvas from CSS variable --bg-base with smooth transitions
 * 2. Multi-layer ambient diffused radial gradient mesh driven by --ambient-mesh-1 & --ambient-mesh-2
 * 3. Hardware-accelerated ambient drifting light sources (optimized for mobile GPU)
 * 4. Micro-fine grain texture overlay (desktop)
 */
export default function AtmosphericBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 w-full max-w-full overflow-hidden"
      style={{ contain: 'paint' }}
      aria-hidden
    >
      {/* Base Canvas: Driven by Theme Base Color */}
      <div
        className="absolute inset-0 transition-colors duration-500 ease-out"
        style={{ backgroundColor: 'var(--bg-base)' }}
      />

      {/* Ambient Gradient Mesh — Layer 1 (Static Soft Radiance - Ultra Fast) */}
      <div
        className="absolute inset-0 opacity-80 transition-all duration-500 ease-out"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 65% 55% at 15% 15%, var(--ambient-mesh-1), transparent 70%),
            radial-gradient(ellipse 60% 50% at 85% 22%, var(--ambient-mesh-2), transparent 70%),
            radial-gradient(ellipse 70% 60% at 10% 60%, var(--ambient-mesh-1), transparent 70%),
            radial-gradient(ellipse 65% 55% at 90% 75%, var(--ambient-mesh-2), transparent 70%),
            radial-gradient(ellipse 80% 60% at 50% 95%, var(--ambient-mesh-1), transparent 75%)
          `,
        }}
      />

      {/* Ambient Glow Orbs — Layer 2 (Desktop Enhanced Radiance) */}
      {/* Top Left Orb */}
      <div
        className="hidden sm:block absolute -top-[10%] left-0 h-[500px] w-[500px] lg:h-[720px] lg:w-[720px] rounded-full blur-[100px] lg:blur-[140px] animate-ambient-drift-1 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-1)' }}
      />

      {/* Top Right Orb */}
      <div
        className="hidden sm:block absolute top-[15%] right-0 h-[500px] w-[500px] lg:h-[750px] lg:w-[750px] rounded-full blur-[110px] lg:blur-[150px] animate-ambient-drift-2 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-2)' }}
      />

      {/* Mid Left Orb */}
      <div
        className="hidden sm:block absolute top-[48%] left-0 h-[500px] w-[500px] lg:h-[800px] lg:w-[800px] rounded-full blur-[110px] lg:blur-[150px] animate-ambient-drift-2 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-1)' }}
      />

      {/* Mid-Lower Right Orb */}
      <div
        className="hidden sm:block absolute top-[68%] right-0 h-[500px] w-[500px] lg:h-[750px] lg:w-[750px] rounded-full blur-[110px] lg:blur-[150px] animate-ambient-drift-1 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-2)' }}
      />

      {/* Bottom Center Orb */}
      <div
        className="hidden sm:block absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-[500px] w-[500px] lg:h-[700px] lg:w-[700px] rounded-full blur-[100px] lg:blur-[140px] animate-ambient-pulse transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-1)' }}
      />

      {/* Extremely subtle blueprint matrix grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Subtle Micro-Fine Noise Texture Overlay on Desktop only */}
      <svg className="hidden md:block absolute inset-0 h-full w-full opacity-[0.022] mix-blend-overlay">
        <filter id="atmospheric-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#atmospheric-noise)" />
      </svg>
    </div>
  );
}
