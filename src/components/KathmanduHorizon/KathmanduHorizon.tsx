import { useEffect, useState } from 'react'

// ── Kathmandu time ────────────────────────────────────────────────────────────

function getKathmanduHour(): number {
  const str = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kathmandu',
    hour: 'numeric',
    hour12: false,
  })
  return parseInt(str, 10)
}

type Scene = 'dawn' | 'day' | 'dusk' | 'night'

function getScene(hour: number): Scene {
  if (hour >= 5  && hour < 9)  return 'dawn'
  if (hour >= 9  && hour < 17) return 'day'
  if (hour >= 17 && hour < 20) return 'dusk'
  return 'night'
}

// ── SVG strings per scene ─────────────────────────────────────────────────────
// Each returns a full SVG data URL used as CSS background-image

function buildSVG(scene: Scene): string {
  // Sky colors
  const sky = {
    dawn:  { top: '#1e2d4d', topOp: 0.35, mid: '#e8532a', midOp: 0.45, bot: '#f59e0b', botOp: 0.28 },
    day:   { top: '#1e2d4d', topOp: 0.15, mid: '#e8532a', midOp: 0.22, bot: '#f59e0b', botOp: 0.14 },
    dusk:  { top: '#1e2d4d', topOp: 0.52, mid: '#c04a22', midOp: 0.58, bot: '#f59e0b', botOp: 0.32 },
    night: { top: '#1a1f2e', topOp: 0.62, mid: '#1e2d4d', midOp: 0.45, bot: '#2a3550', botOp: 0.22 },
  }[scene]

  // Sun position per scene
  const sun = {
    dawn:  { x: 260,  y: 345, size: 42, color: '#ff6b35', glow: '#f59e0b', op: 0.95 },
    day:   { x: 720,  y: 260, size: 50, color: '#fff5c0', glow: '#f59e0b', op: 0.92 },
    dusk:  { x: 1180, y: 352, size: 44, color: '#ff4500', glow: '#ff6b35', op: 0.90 },
    night: { x: 720,  y: 900, size: 40, color: '#1e2d4d', glow: '#1e2d4d', op: 0    },
  }[scene]

  // Mountain opacities
  const mtn = {
    dawn:  { op1: 0.68, op2: 0.50, op3: 0.32, c1: '#1a2840', c2: '#1e2d4d', c3: '#2a3d5f' },
    day:   { op1: 0.72, op2: 0.52, op3: 0.35, c1: '#1a2840', c2: '#1e2d4d', c3: '#2a3d5f' },
    dusk:  { op1: 0.82, op2: 0.65, op3: 0.45, c1: '#0e1a2e', c2: '#1a2840', c3: '#1e2d4d' },
    night: { op1: 0.88, op2: 0.70, op3: 0.52, c1: '#0e1628', c2: '#152236', c3: '#1a2840' },
  }[scene]

  const snowOp = { dawn: 0.65, day: 0.80, dusk: 0.38, night: 0.15 }[scene]
  const starOp = { dawn: 0.12, day: 0, dusk: 0.06, night: 1 }[scene]
  const moonOp = { dawn: 0, day: 0, dusk: 0, night: 1 }[scene]
  const codeColor = scene === 'night' ? '%234a7acc' : '%23e8532a'

  // Stars
  const starPositions = [
    [120,45],[280,28],[420,60],[560,35],[680,55],[800,22],
    [950,48],[1080,38],[1200,65],[1320,30],[200,80],[490,90],
    [750,75],[1050,85],[1380,70],[340,110],[620,100],[890,115],
    [1150,95],[60,130],
  ]

  const stars = starOp > 0 ? starPositions.map(([x, y], i) =>
    `<circle cx="${x}" cy="${y}" r="${i % 3 === 0 ? 1.8 : 1.2}" fill="%23ffffff" opacity="${starOp}"/>`
  ).join('') : ''

  const moon = moonOp > 0 ? `
    <circle cx="1050" cy="85" r="32" fill="%23f5f0dc" opacity="${moonOp}"/>
    <circle cx="1065" cy="78" r="28" fill="%231a1f2e" opacity="${moonOp * 0.88}"/>
  ` : ''

  const sunSVG = sun.op > 0 ? `
    <ellipse cx="${sun.x}" cy="${sun.y}" rx="${sun.size * 5.5}" ry="${sun.size * 4}"
      fill="${sun.glow.replace('#', '%23')}" opacity="${sun.op * 0.55}"
      filter="url(%23kh-glow-xl)"/>
    <ellipse cx="${sun.x}" cy="${sun.y}" rx="${sun.size * 2.2}" ry="${sun.size * 1.7}"
      fill="${sun.color.replace('#', '%23')}" opacity="${sun.op * 0.38}"
      filter="url(%23kh-glow-md)"/>
    <ellipse cx="${sun.x}" cy="${sun.y}" rx="${sun.size}" ry="${sun.size}"
      fill="${sun.color.replace('#', '%23')}" opacity="${sun.op}"
      filter="url(%23kh-glow-sm)"/>
    <ellipse cx="720" cy="362" rx="620" ry="11"
      fill="${sun.color.replace('#', '%23')}" opacity="${sun.op * 0.25}"
      filter="url(%23kh-glow-sm)"/>
  ` : ''

  const MTN3 = 'M0 500 L55 460 L120 472 L190 438 L265 450 L340 412 L410 425 L480 392 L545 405 L615 370 L685 382 L750 348 L815 362 L885 328 L950 342 L1015 312 L1085 328 L1150 298 L1220 315 L1295 285 L1365 302 L1440 272 L1440 680 L0 680 Z'
  const MTN2 = 'M0 538 L75 495 L150 510 L225 475 L300 488 L370 452 L445 468 L515 435 L590 450 L660 415 L730 430 L800 396 L870 412 L940 378 L1010 395 L1080 362 L1155 380 L1225 348 L1300 366 L1375 334 L1440 350 L1440 680 L0 680 Z'
  const MTN1 = 'M0 575 L65 535 L95 543 L132 520 L168 530 L205 508 L245 518 L285 495 L332 507 L382 482 L422 494 L465 470 L512 483 L562 458 L612 470 L658 445 L705 458 L748 432 L796 446 L845 420 L894 435 L942 408 L992 424 L1042 398 L1092 414 L1142 388 L1192 404 L1245 378 L1295 394 L1352 366 L1440 382 L1440 680 L0 680 Z'
  const SNOW = 'M202 508 L218 520 L234 508 Z M283 495 L299 507 L315 495 Z M380 482 L398 494 L416 482 Z M510 458 L530 470 L550 458 Z M610 445 L630 458 L650 445 Z M703 432 L724 446 L745 432 Z M794 420 L815 434 L836 420 Z M940 408 L962 424 L984 408 Z M1090 388 L1112 404 L1134 388 Z M1243 378 L1266 394 L1289 378 Z'

  const particles = [
    { text: '%7B%20%7D', x: 330, y: 388 },
    { text: '%3C%2F%3E', x: 610, y: 405 },
    { text: 'async',     x: 888, y: 378 },
  ]

  const ptSVG = particles.map((pt, i) => `
    <text x="${pt.x}" y="${pt.y}"
      font-family="monospace" font-size="12"
      fill="${codeColor}" opacity="${0.3 + i * 0.08}" font-weight="600">${pt.text}</text>
  `).join('')

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 680' preserveAspectRatio='xMidYMid slice'>
    <defs>
      <filter id='kh-glow-xl' x='-60%' y='-60%' width='220%' height='220%'><feGaussianBlur stdDeviation='45'/></filter>
      <filter id='kh-glow-md' x='-40%' y='-40%' width='180%' height='180%'><feGaussianBlur stdDeviation='20'/></filter>
      <filter id='kh-glow-sm' x='-30%' y='-30%' width='160%' height='160%'><feGaussianBlur stdDeviation='9'/></filter>
      <linearGradient id='fade' x1='0' y1='0' x2='0' y2='1'>
        <stop offset='0%' stop-color='%23f0ebe0' stop-opacity='0'/>
        <stop offset='50%' stop-color='%23f0ebe0' stop-opacity='0'/>
        <stop offset='100%' stop-color='%23f0ebe0' stop-opacity='1'/>
      </linearGradient>
    </defs>
    <rect width='1440' height='680' fill='%23f0ebe0'/>
    <rect width='1440' height='680' fill='${sky.top.replace('#', '%23')}' opacity='${sky.topOp}'/>
    <rect width='1440' height='460' fill='${sky.mid.replace('#', '%23')}' opacity='${sky.midOp}'/>
    <rect width='1440' height='280' y='200' fill='${sky.bot.replace('#', '%23')}' opacity='${sky.botOp}'/>
    ${stars}
    ${moon}
    ${sunSVG}
    <path d='${MTN3}' fill='${mtn.c3.replace('#','%23')}' opacity='${mtn.op3}'/>
    <path d='${MTN2}' fill='${mtn.c2.replace('#','%23')}' opacity='${mtn.op2}'/>
    <path d='${MTN1}' fill='${mtn.c1.replace('#','%23')}' opacity='${mtn.op1}'/>
    <path d='${SNOW}' fill='%23f5f0e8' opacity='${snowOp}'/>
    ${ptSVG}
    <rect width='1440' height='680' fill='url(%23fade)'/>
  </svg>`

  return `url("data:image/svg+xml,${svg.replace(/\n\s*/g, ' ')}")`
}

// ── Component — sets CSS vars on document root ────────────────────────────────

export function KathmanduHorizon() {
  const [scene, setScene] = useState<Scene>(() => getScene(getKathmanduHour()))

  useEffect(() => {
    function apply(s: Scene) {
      const url = buildSVG(s)
      // Hero/navbar — top of body
      document.documentElement.style.setProperty('--kathmandu-hero-bg', url)
      // Footer — bottom bookend (same scene)
      document.documentElement.style.setProperty('--kathmandu-footer-bg', url)
    }
    apply(scene)

    const id = setInterval(() => {
      const newScene = getScene(getKathmanduHour())
      if (newScene !== scene) {
        setScene(newScene)
        apply(newScene)
      }
    }, 60_000)

    return () => clearInterval(id)
  }, [scene])

  // Renders nothing — just sets CSS variables
  return null
}
