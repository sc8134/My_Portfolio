// ── Custom project icons ─────────────────────────────────
// Each icon is designed to reflect the nature of its project.
// All are inline SVGs at 48×48 viewport for consistent sizing.

/** Nova DVR — film reel / record */
export function NovaDVRIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Outer ring */}
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
      {/* Center hub */}
      <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.9" />
      {/* Reel holes */}
      <circle cx="24" cy="10" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="35.6" cy="17" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="35.6" cy="31" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="38" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="12.4" cy="31" r="3" fill="currentColor" opacity="0.7" />
      <circle cx="12.4" cy="17" r="3" fill="currentColor" opacity="0.7" />
      {/* Play triangle */}
      <path d="M21 20l8 4-8 4V20z" fill="currentColor" />
    </svg>
  )
}

/** Velora — media hub / wave + orbit */
export function VeloraIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Orbit ellipse */}
      <ellipse cx="24" cy="24" rx="20" ry="9" stroke="currentColor" strokeWidth="1.8" opacity="0.35" />
      <ellipse cx="24" cy="24" rx="20" ry="9" stroke="currentColor" strokeWidth="1.8" opacity="0.35" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="9" stroke="currentColor" strokeWidth="1.8" opacity="0.35" transform="rotate(120 24 24)" />
      {/* Center dot */}
      <circle cx="24" cy="24" r="4" fill="currentColor" />
      {/* Orbiting dot */}
      <circle cx="44" cy="24" r="2.5" fill="currentColor" opacity="0.8" />
    </svg>
  )
}

/** Signal Job Portal — signal / broadcast tower */
export function SignalIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Signal arcs */}
      <path d="M10 34 Q24 8 38 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
      <path d="M14 34 Q24 14 34 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <path d="M18 34 Q24 20 30 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      {/* Tower base */}
      <line x1="24" y1="34" x2="24" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="42" x2="30" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Signal dot */}
      <circle cx="24" cy="34" r="2.5" fill="currentColor" />
    </svg>
  )
}

/** JobHunt Agent — robot / AI agent head */
export function JobHuntIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Head */}
      <rect x="10" y="14" width="28" height="22" rx="5" stroke="currentColor" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="18" cy="24" r="3" fill="currentColor" />
      <circle cx="30" cy="24" r="3" fill="currentColor" />
      {/* Eye shine */}
      <circle cx="19.2" cy="22.8" r="1" fill="white" opacity="0.7" />
      <circle cx="31.2" cy="22.8" r="1" fill="white" opacity="0.7" />
      {/* Mouth — processing line */}
      <path d="M17 31 h4 M23 31 h2 M27 31 h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      {/* Antenna */}
      <line x1="24" y1="14" x2="24" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="6.5" r="2" fill="currentColor" opacity="0.8" />
      {/* Ears / connectors */}
      <rect x="6" y="20" width="4" height="8" rx="2" fill="currentColor" opacity="0.5" />
      <rect x="38" y="20" width="4" height="8" rx="2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

/** AI Reel Generator — clapperboard + spark */
export function AIReelIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Clapperboard body */}
      <rect x="8" y="18" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
      {/* Clapper top bar */}
      <rect x="8" y="12" width="32" height="7" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
      {/* Clapper diagonal stripes */}
      <line x1="14" y1="12" x2="10" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="12" x2="17" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="12" x2="24" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="35" y1="12" x2="31" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* AI spark inside */}
      <path d="M24 26 l2 4 l4 1 l-4 2 l-2 4 l-2-4 l-4-2 l4-1z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

/** Namo Patro — Nepali calendar / moon + sun mandala */
export function NamoPaLroIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Outer decorative ring */}
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      {/* 8-point petal mandala */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <ellipse
          key={deg}
          cx="24" cy="14"
          rx="3" ry="7"
          fill="currentColor"
          opacity="0.2"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      {/* Moon crescent */}
      <path d="M28 18 a8 8 0 1 1-8 12 6 6 0 1 0 8-12z" fill="currentColor" opacity="0.9" />
      {/* Calendar grid dot */}
      <circle cx="24" cy="24" r="2.5" fill="white" opacity="0.6" />
    </svg>
  )
}

/** Phishing Simulation — shield + hook */
export function PhishingIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Shield */}
      <path d="M24 6 L38 12 L38 24 C38 32 31 39 24 42 C17 39 10 32 10 24 L10 12 Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
      {/* Hook inside shield */}
      <path d="M24 18 C24 18 30 20 30 26 C30 29.3 27.3 32 24 32 C20.7 32 18 29.3 18 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Hook tip */}
      <path d="M18 26 C18 26 16 26 16 24 C16 22 18 22 18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Alert dot */}
      <circle cx="24" cy="15" r="2" fill="currentColor" opacity="0.9" />
    </svg>
  )
}

/** Janakpur Bolts Army — lightning bolt + shield (sports fanpage) */
export function BoltsArmyIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Shield outline */}
      <path d="M24 4 L40 11 L40 26 C40 35 33 42 24 45 C15 42 8 35 8 26 L8 11 Z"
        stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.10" />
      {/* Lightning bolt inside */}
      <path d="M27 14 L19 26 L24.5 26 L21 34 L30 21 L24.5 21 Z"
        fill="currentColor" opacity="0.9" />
    </svg>
  )
}
