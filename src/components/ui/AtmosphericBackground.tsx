/**
 * AtmosphericBackground
 *
 * Multi-layered atmospheric environment adapting dynamically to the 4 themes:
 * 1. Base Canvas from CSS variable --bg-base with smooth transitions
 * 2. Multi-layer ambient diffused radial gradient mesh driven by --ambient-mesh-1 & --ambient-mesh-2
 * 3. Soft ambient drifting light sources with subtle breathing animation
 * 4. Micro-fine grain/noise texture overlay (<2.5% opacity) to eliminate digital flatness
 */
export default function AtmosphericBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 w-full max-w-full overflow-hidden" aria-hidden>
      {/* Base Canvas: Driven by Theme Base Color */}
      <div
        className="absolute inset-0 transition-colors duration-500 ease-out"
        style={{ backgroundColor: 'var(--bg-base)' }}
      />

      {/* Ambient Gradient Mesh — Layer 1 (Static Soft Radiance) */}
      <div
        className="absolute inset-0 opacity-75 transition-all duration-500 ease-out"
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

      {/* Ambient Glow Orbs — Layer 2 (Restrained Slow Drift / Breathing Animation) */}
      {/* Top Left Orb */}
      <div
        className="absolute -top-[10%] left-0 h-[400px] w-[400px] sm:h-[720px] sm:w-[720px] rounded-full blur-[120px] sm:blur-[160px] animate-ambient-drift-1 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-1)' }}
      />

      {/* Top Right Orb */}
      <div
        className="absolute top-[15%] right-0 h-[400px] w-[400px] sm:h-[750px] sm:w-[750px] rounded-full blur-[130px] sm:blur-[170px] animate-ambient-drift-2 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-2)' }}
      />

      {/* Mid Left Orb */}
      <div
        className="absolute top-[48%] left-0 h-[400px] w-[400px] sm:h-[800px] sm:w-[800px] rounded-full blur-[130px] sm:blur-[180px] animate-ambient-drift-2 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-1)' }}
      />

      {/* Mid-Lower Right Orb */}
      <div
        className="absolute top-[68%] right-0 h-[400px] w-[400px] sm:h-[750px] sm:w-[750px] rounded-full blur-[130px] sm:blur-[170px] animate-ambient-drift-1 transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-2)' }}
      />

      {/* Bottom Center Orb */}
      <div
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-[400px] w-[400px] sm:h-[700px] sm:w-[700px] rounded-full blur-[120px] sm:blur-[160px] animate-ambient-pulse transition-colors duration-500 max-w-full"
        style={{ backgroundColor: 'var(--ambient-orb-1)' }}
      />

      {/* Extremely subtle blueprint matrix grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Subtle Micro-Fine Noise Texture Overlay */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.022] mix-blend-overlay">
        <filter id="atmospheric-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#atmospheric-noise)" />
      </svg>
    </div>
  );
}
