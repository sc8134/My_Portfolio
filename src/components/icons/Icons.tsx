/**
 * Custom SVG icon set — two-color: coral (#e8532a) + navy (#1e2d4d)
 * All icons are 24×24 viewBox, accept className and size props.
 */

interface IconProps {
  size?: number
  coral?: string
  navy?: string
}

const C = '#e8532a'  // coral — primary strokes / fill
const N = '#1e2d4d'  // navy  — secondary / background shapes

// ── About / Philosophy cards ──────────────────────────────

/** Performance-First: speedometer / gauge */
export function PerformanceIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Gauge arc background */}
      <path d="M5 17A7 7 0 0 1 19 17" stroke={navy} strokeWidth="2.5" strokeLinecap="round" />
      {/* Gauge arc filled */}
      <path d="M5 17A7 7 0 0 1 15.5 10.5" stroke={coral} strokeWidth="2.5" strokeLinecap="round" />
      {/* Needle */}
      <line x1="12" y1="17" x2="15" y2="10" stroke={coral} strokeWidth="2" strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="12" cy="17" r="1.5" fill={navy} />
      {/* Tick marks */}
      <line x1="5" y1="17" x2="5" y2="14.5" stroke={navy} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="19" y1="17" x2="19" y2="14.5" stroke={navy} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="10" x2="12" y2="7.5" stroke={navy} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** Product-Minded: lightbulb with gears */
export function ProductIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Bulb body */}
      <path d="M9 18h6M10 21h4" stroke={navy} strokeWidth="2" strokeLinecap="round" />
      {/* Bulb glass */}
      <path d="M12 3a6 6 0 0 1 4.5 10c-.8.9-1.5 1.5-1.5 2.5H9c0-1-.7-1.6-1.5-2.5A6 6 0 0 1 12 3z"
        stroke={coral} strokeWidth="2" fill={navy} fillOpacity="0.08" />
      {/* Inner filament */}
      <path d="M10.5 13.5L12 11l1.5 2.5" stroke={coral} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Team Collaborator: three people */
export function TeamIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Center person */}
      <circle cx="12" cy="7" r="2.5" stroke={coral} strokeWidth="2" />
      <path d="M7.5 19c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5" stroke={coral} strokeWidth="2" strokeLinecap="round" />
      {/* Left person */}
      <circle cx="5.5" cy="9" r="2" stroke={navy} strokeWidth="1.8" />
      <path d="M2 19c0-2 1.6-3.5 3.5-3.5" stroke={navy} strokeWidth="1.8" strokeLinecap="round" />
      {/* Right person */}
      <circle cx="18.5" cy="9" r="2" stroke={navy} strokeWidth="1.8" />
      <path d="M22 19c0-2-1.6-3.5-3.5-3.5" stroke={navy} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

/** Lifelong Learner: open book with spark */
export function LearnerIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Book left page */}
      <path d="M12 6C10 5 7 5 5 6v12c2-1 5-1 7 0" stroke={navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Book right page */}
      <path d="M12 6c2-1 5-1 7 0v12c-2-1-5-1-7 0" stroke={coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Spine */}
      <line x1="12" y1="6" x2="12" y2="18" stroke={coral} strokeWidth="1.5" />
      {/* Spark / star top right */}
      <path d="M18 2l.5 1.5L20 4l-1.5.5L18 6l-.5-1.5L16 4l1.5-.5z" fill={coral} />
    </svg>
  )
}

// ── Skills category icons ──────────────────────────────────

/** Frontend: browser window */
export function FrontendIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Browser frame */}
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={navy} strokeWidth="2" fill={navy} fillOpacity="0.06" />
      {/* Address bar */}
      <line x1="2" y1="9" x2="22" y2="9" stroke={navy} strokeWidth="1.8" />
      {/* Traffic dots */}
      <circle cx="5.5" cy="6.5" r="1" fill={coral} />
      <circle cx="8.5" cy="6.5" r="1" fill={navy} />
      <circle cx="11.5" cy="6.5" r="1" fill={navy} />
      {/* Content lines */}
      <line x1="6" y1="13" x2="14" y2="13" stroke={coral} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="6" y1="16" x2="11" y2="16" stroke={navy} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** Backend: server stack */
export function BackendIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Top server */}
      <rect x="3" y="4" width="18" height="5" rx="1.5" stroke={coral} strokeWidth="2" fill={coral} fillOpacity="0.08" />
      {/* Middle server */}
      <rect x="3" y="10" width="18" height="5" rx="1.5" stroke={navy} strokeWidth="2" fill={navy} fillOpacity="0.06" />
      {/* Bottom server */}
      <rect x="3" y="16" width="18" height="4" rx="1.5" stroke={navy} strokeWidth="2" fill={navy} fillOpacity="0.04" />
      {/* Status dots */}
      <circle cx="7" cy="6.5" r="1" fill={coral} />
      <circle cx="7" cy="12.5" r="1" fill={navy} />
      <circle cx="7" cy="18" r="1" fill={navy} />
    </svg>
  )
}

/** Database: cylinder */
export function DatabaseIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Top ellipse */}
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke={coral} strokeWidth="2" fill={coral} fillOpacity="0.10" />
      {/* Body */}
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" stroke={navy} strokeWidth="2" />
      {/* Bottom section */}
      <path d="M4 12v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" stroke={navy} strokeWidth="2" />
      {/* Mid ellipse line */}
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke={coral} strokeWidth="1.5" />
    </svg>
  )
}

/** Tools & DevOps: wrench + gear */
export function ToolsIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Wrench */}
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        stroke={coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Small gear overlay */}
      <circle cx="6" cy="18" r="1.5" stroke={navy} strokeWidth="1.5" />
    </svg>
  )
}

// ── Skills data icon map ───────────────────────────────────
export const skillIconMap: Record<string, React.ReactNode> = {
  frontend: <FrontendIcon />,
  backend:  <BackendIcon />,
  database: <DatabaseIcon />,
  tools:    <ToolsIcon />,
  learning: <LearnerIcon />,
}

/** OwnCode: terminal / code brackets */
export function OwnCodeIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Terminal frame */}
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={navy} strokeWidth="2" fill={navy} fillOpacity="0.06" />
      {/* Prompt chevrons */}
      <path d="M7 9l-3 3 3 3" stroke={coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cursor line */}
      <line x1="12" y1="15" x2="17" y2="15" stroke={coral} strokeWidth="2" strokeLinecap="round" />
      {/* Code line */}
      <line x1="12" y1="12" x2="19" y2="12" stroke={navy} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="9" x2="16" y2="9" stroke={navy} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** RealProblems: target / bullseye */
export function RealProblemsIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Outer ring */}
      <circle cx="12" cy="12" r="9" stroke={navy} strokeWidth="2" />
      {/* Middle ring */}
      <circle cx="12" cy="12" r="5.5" stroke={navy} strokeWidth="1.8" />
      {/* Bullseye */}
      <circle cx="12" cy="12" r="2.5" fill={coral} />
      {/* Cross-hairs */}
      <line x1="12" y1="2" x2="12" y2="6" stroke={coral} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="22" stroke={coral} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="12" x2="6" y2="12" stroke={coral} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="12" x2="22" y2="12" stroke={coral} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/** ReadDocs: open book with magnifier */
export function ReadDocsIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Book left page */}
      <path d="M12 6C10 5 7 5 5 6v11c2-1 5-1 7 0" stroke={navy} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Book right page */}
      <path d="M12 6c2-1 5-1 7 0v11c-2-1-5-1-7 0" stroke={coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Spine */}
      <line x1="12" y1="6" x2="12" y2="17" stroke={coral} strokeWidth="1.5" />
      {/* Magnifier */}
      <circle cx="17.5" cy="17.5" r="2.5" stroke={coral} strokeWidth="1.8" />
      <line x1="19.5" y1="19.5" x2="22" y2="22" stroke={coral} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

/** ShipImprove: rocket */
export function ShipIcon({ size = 24, coral = C, navy = N }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {/* Rocket body */}
      <path d="M12 2C8 6 7 11 7 14l5 5c3 0 8-1 10-5C19 10 16 5 12 2z"
        stroke={coral} strokeWidth="2" fill={coral} fillOpacity="0.10" strokeLinejoin="round" />
      {/* Window */}
      <circle cx="13" cy="10" r="2" stroke={navy} strokeWidth="1.8" />
      {/* Left fin */}
      <path d="M7 14l-3 3 1 3 3-1" stroke={navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Flame */}
      <path d="M9 19c0 2 1.5 3 3 2" stroke={coral} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// ── Philosophy card icon map ───────────────────────────────
export const philosophyIconMap: Record<string, React.ReactNode> = {
  'I write my own code':  <OwnCodeIcon />,
  'Real problems only':   <RealProblemsIcon />,
  'I read the docs':      <ReadDocsIcon />,
  'Ship, then improve':   <ShipIcon />,
}
