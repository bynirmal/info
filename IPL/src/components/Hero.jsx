import React, { useEffect, useRef, useState, useCallback } from 'react'
import './Hero.css'

/* ── IPL CHAMPIONS DATA ── */
const IPL_HISTORY = [
  { year: 2008, winner: 'Rajasthan Royals',           runner: 'Chennai Super Kings',     winnerShort: 'RR',   runnerShort: 'CSK',  margin: 'by 3 wickets', winnerColor: '#FF69B4', runnerColor: '#F5A623' },
  { year: 2009, winner: 'Deccan Chargers',             runner: 'Royal Challengers',       winnerShort: 'DC',   runnerShort: 'RCB',  margin: 'by 6 runs',    winnerColor: '#4A90D9', runnerColor: '#CC0000' },
  { year: 2010, winner: 'Chennai Super Kings',         runner: 'Mumbai Indians',          winnerShort: 'CSK',  runnerShort: 'MI',   margin: 'by 22 runs',   winnerColor: '#F5A623', runnerColor: '#004BA0' },
  { year: 2011, winner: 'Chennai Super Kings',         runner: 'Royal Challengers',       winnerShort: 'CSK',  runnerShort: 'RCB',  margin: 'by 58 runs',   winnerColor: '#F5A623', runnerColor: '#CC0000' },
  { year: 2012, winner: 'Kolkata Knight Riders',       runner: 'Chennai Super Kings',     winnerShort: 'KKR',  runnerShort: 'CSK',  margin: 'by 5 wickets', winnerColor: '#8B5CF6', runnerColor: '#F5A623' },
  { year: 2013, winner: 'Mumbai Indians',              runner: 'Chennai Super Kings',     winnerShort: 'MI',   runnerShort: 'CSK',  margin: 'by 23 runs',   winnerColor: '#004BA0', runnerColor: '#F5A623' },
  { year: 2014, winner: 'Kolkata Knight Riders',       runner: 'Kings XI Punjab',         winnerShort: 'KKR',  runnerShort: 'KXIP', margin: 'by 3 wickets', winnerColor: '#8B5CF6', runnerColor: '#ED1C24' },
  { year: 2015, winner: 'Mumbai Indians',              runner: 'Chennai Super Kings',     winnerShort: 'MI',   runnerShort: 'CSK',  margin: 'by 41 runs',   winnerColor: '#004BA0', runnerColor: '#F5A623' },
  { year: 2016, winner: 'Sunrisers Hyderabad',         runner: 'Royal Challengers',       winnerShort: 'SRH',  runnerShort: 'RCB',  margin: 'by 35 runs',   winnerColor: '#FF6B00', runnerColor: '#CC0000' },
  { year: 2017, winner: 'Mumbai Indians',              runner: 'Rising Pune Supergiant',  winnerShort: 'MI',   runnerShort: 'RPS',  margin: 'by 1 run',     winnerColor: '#004BA0', runnerColor: '#9B59B6' },
  { year: 2018, winner: 'Chennai Super Kings',         runner: 'Sunrisers Hyderabad',     winnerShort: 'CSK',  runnerShort: 'SRH',  margin: 'by 8 wickets', winnerColor: '#F5A623', runnerColor: '#FF6B00' },
  { year: 2019, winner: 'Mumbai Indians',              runner: 'Chennai Super Kings',     winnerShort: 'MI',   runnerShort: 'CSK',  margin: 'by 1 run',     winnerColor: '#004BA0', runnerColor: '#F5A623' },
  { year: 2020, winner: 'Mumbai Indians',              runner: 'Delhi Capitals',          winnerShort: 'MI',   runnerShort: 'DC',   margin: 'by 5 wickets', winnerColor: '#004BA0', runnerColor: '#00008B' },
  { year: 2021, winner: 'Chennai Super Kings',         runner: 'Kolkata Knight Riders',   winnerShort: 'CSK',  runnerShort: 'KKR',  margin: 'by 27 runs',   winnerColor: '#F5A623', runnerColor: '#8B5CF6' },
  { year: 2022, winner: 'Gujarat Titans',              runner: 'Rajasthan Royals',        winnerShort: 'GT',   runnerShort: 'RR',   margin: 'by 7 wickets', winnerColor: '#1C7ED6', runnerColor: '#FF69B4' },
  { year: 2023, winner: 'Chennai Super Kings',         runner: 'Gujarat Titans',          winnerShort: 'CSK',  runnerShort: 'GT',   margin: 'by 5 wickets', winnerColor: '#F5A623', runnerColor: '#1C7ED6' },
  { year: 2024, winner: 'Kolkata Knight Riders',       runner: 'Sunrisers Hyderabad',     winnerShort: 'KKR',  runnerShort: 'SRH',  margin: 'by 8 wickets', winnerColor: '#8B5CF6', runnerColor: '#FF6B00' },
  { year: 2025, winner: 'Royal Challengers Bengaluru', runner: 'Punjab Kings',            winnerShort: 'RCB',  runnerShort: 'PBKS', margin: 'by 6 runs',    winnerColor: '#CC0000', runnerColor: '#ED1C24' },
  { year: 2026, winner: 'Royal Challengers',           runner: 'Gujarat Titans',          winnerShort: 'RCB',  runnerShort: 'GT',   margin: 'LIVE',         winnerColor: '#CC0000', runnerColor: '#1C7ED6' },
]

/* ── GSAP SCROLL ANIMATIONS HOOK ── */
function useScrollAnimations() {
  useEffect(() => {
    // Dynamically load GSAP + ScrollTrigger from CDN
    const loadGSAP = async () => {
      if (window.gsap && window.ScrollTrigger) {
        initAnimations()
        return
      }

      const gsapScript = document.createElement('script')
      gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
      document.head.appendChild(gsapScript)

      await new Promise(res => { gsapScript.onload = res })

      const stScript = document.createElement('script')
      stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
      document.head.appendChild(stScript)

      await new Promise(res => { stScript.onload = res })

      initAnimations()
    }

    const initAnimations = () => {
      const { gsap, ScrollTrigger } = window
      gsap.registerPlugin(ScrollTrigger)

      // ── section--dark: stat cards stagger up ──
      gsap.fromTo(
        '.stat-card',
        { opacity: 0, y: 48, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.section--dark',
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      // section--dark eyebrow + heading slide up
      gsap.fromTo(
        '.section--dark .section__eyebrow, .section--dark .section__heading',
        { opacity: 0, y: 32 },
        {
          opacity: 1, y: 0,
          duration: 0.65,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: '.section--dark',
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── section--teams: GT card slides from left ──
      gsap.fromTo(
        '.team-showcase--gt',
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section--teams',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── section--teams: FINAL divider scales up ──
      gsap.fromTo(
        '.teams-divider',
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1, scale: 1,
          duration: 0.6,
          ease: 'back.out(1.4)',
          delay: 0.25,
          scrollTrigger: {
            trigger: '.section--teams',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── section--teams: RCB card slides from right ──
      gsap.fromTo(
        '.team-showcase--rcb',
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0,
          duration: 0.85,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: '.section--teams',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── section--cta: eyebrow + heading + body slide from bottom ──
      gsap.fromTo(
        '.section--cta .section__eyebrow',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.section--cta',
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.section--cta .section__heading',
        { opacity: 0, y: 52 },
        {
          opacity: 1, y: 0,
          duration: 0.75,
          ease: 'power3.out',
          delay: 0.1,
          scrollTrigger: {
            trigger: '.section--cta',
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.section--cta .section__body',
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0,
          duration: 0.65,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: '.section--cta',
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      gsap.fromTo(
        '.section--cta .cta-row',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.65,
          ease: 'power3.out',
          delay: 0.32,
          scrollTrigger: {
            trigger: '.section--cta',
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── section--cta flares pop in ──
      gsap.fromTo(
        '.section__flare',
        { opacity: 0, scale: 0.4 },
        {
          opacity: 1, scale: 1,
          duration: 1.1,
          ease: 'power2.out',
          stagger: 0.15,
          delay: 0.4,
          scrollTrigger: {
            trigger: '.section--cta',
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      )

      // ── footer brand slides up ──
      gsap.fromTo(
        '.footer__inner',
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      )
    }

    loadGSAP()

    return () => {
      // Cleanup ScrollTrigger instances on unmount
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill())
      }
    }
  }, [])
}

/* ───────────────────────────────── */

function TrophySection() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState('next')
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)
  const autoRef    = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    autoRef.current = setInterval(() => goTo('next'), 4000)
    return () => clearInterval(autoRef.current)
  }, [active, animating])

  const goTo = (dir) => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setActive(prev =>
        dir === 'next'
          ? (prev + 1) % IPL_HISTORY.length
          : (prev - 1 + IPL_HISTORY.length) % IPL_HISTORY.length
      )
      setAnimating(false)
    }, 420)
  }

  const jump = (i) => {
    if (i === active || animating) return
    setDirection(i > active ? 'next' : 'prev')
    setAnimating(true)
    setTimeout(() => { setActive(i); setAnimating(false) }, 420)
  }

  const entry  = IPL_HISTORY[active]
  const isLive = entry.year === 2026

  return (
    <section
      className={`trophy-section ${visible ? 'trophy-section--visible' : ''}`}
      ref={sectionRef}
    >
      <div
        className="trophy-section__ambient"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 60%, ${entry.winnerColor}18 0%, transparent 70%)`,
        }}
      />

      <div className="trophy-section__inner">

        <div className="trophy-section__header">
          <p className="section__eyebrow">Hall of Champions</p>
          <h2 className="trophy-section__title">
            IPL Trophy<br /><span>Through the Years</span>
          </h2>
        </div>

        <div className={`trophy-slide ${animating ? `trophy-slide--exit-${direction}` : 'trophy-slide--enter'}`}>

          <div className="trophy-slide__year-badge">
            <span className="trophy-slide__year">{entry.year}</span>
            <span className="trophy-slide__edition">
              {isLive ? '🔴 LIVE' : `Season ${active + 1}`}
            </span>
          </div>

          <div className="trophy-slide__arena">

            {/* Runner-up */}
            <div className="trophy-slide__team trophy-slide__team--runner">
              <div
                className="team-card team-card--runner"
                style={{ '--team-color': entry.runnerColor }}
              >
                <div className="team-card__ring team-card__ring--outer" />
                <div className="team-card__ring team-card__ring--inner" />
                <span className="team-card__abbr">{entry.runnerShort}</span>
              </div>
              <p className="trophy-slide__team-name">{entry.runner}</p>
              <span className="trophy-slide__team-role runner-label">
                {isLive ? 'Finalist' : 'Runner-up'}
              </span>
            </div>

            {/* Trophy */}
            <div className="trophy-slide__centre">
              <div className="trophy-icon-wrap">
                <div className="trophy-halo" style={{ '--glow': entry.winnerColor }} />
                <div className="trophy-rays-wrap">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="trophy-ray"
                      style={{ transform: `rotate(${i * 30}deg)`, '--delay': `${i * 0.08}s` }}
                    />
                  ))}
                </div>
                <svg className="trophy-svg" viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%"   stopColor="#FFD700" />
                      <stop offset="50%"  stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#8B7536" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <path d="M30 20 Q20 60 28 90 Q36 110 60 115 Q84 110 92 90 Q100 60 90 20 Z" fill="url(#tg)" filter="url(#glow)" opacity="0.95" />
                  <path d="M30 35 Q10 45 12 65 Q14 80 28 82" stroke="url(#tg)" strokeWidth="5" fill="none" strokeLinecap="round" />
                  <path d="M90 35 Q110 45 108 65 Q106 80 92 82" stroke="url(#tg)" strokeWidth="5" fill="none" strokeLinecap="round" />
                  <rect x="52" y="115" width="16" height="22" rx="3" fill="url(#tg)" />
                  <rect x="36" y="137" width="48" height="10" rx="4" fill="url(#tg)" />
                  <rect x="28" y="147" width="64" height="8"  rx="4" fill="url(#tg)" opacity="0.8" />
                  <path d="M42 30 Q48 25 55 28" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M40 45 Q43 40 48 42" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <div className="trophy-particles">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="trophy-particle"
                      style={{
                        '--angle': `${i * 22.5}deg`,
                        '--dist':  `${55 + Math.random() * 30}px`,
                        '--delay': `${i * 0.12}s`,
                        '--color': i % 2 === 0 ? entry.winnerColor : '#FFD700',
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="trophy-slide__margin">{entry.margin}</p>
            </div>

            {/* Winner */}
            <div className="trophy-slide__team trophy-slide__team--winner">
              <div
                className="team-card team-card--winner"
                style={{ '--team-color': entry.winnerColor }}
              >
                <div className="team-card__ring team-card__ring--outer" />
                <div className="team-card__ring team-card__ring--inner" />
                {isLive
                  ? <div className="team-card__live">LIVE</div>
                  : <div className="team-card__crown">♛</div>
                }
                <span className="team-card__abbr">{entry.winnerShort}</span>
                <div className="team-card__confetti">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="confetti-piece"
                      style={{ '--i': i, '--color': i % 2 === 0 ? entry.winnerColor : '#FFD700' }}
                    />
                  ))}
                </div>
              </div>
              <p className="trophy-slide__team-name">{entry.winner}</p>
              <span className="trophy-slide__team-role winner-label">
                {isLive ? '🔴 Finalist' : '🏆 Champions'}
              </span>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <div className="trophy-nav">
          <button className="trophy-nav__arrow trophy-nav__arrow--prev" onClick={() => goTo('prev')} aria-label="Previous year">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="trophy-nav__dots">
            {IPL_HISTORY.map((h, i) => (
              <button
                key={h.year}
                className={`trophy-dot ${i === active ? 'trophy-dot--active' : ''} ${h.year === 2026 ? 'trophy-dot--live' : ''}`}
                onClick={() => jump(i)}
                title={h.year}
              >
                <span className="trophy-dot__year">{h.year}</span>
              </button>
            ))}
          </div>

          <button className="trophy-nav__arrow trophy-nav__arrow--next" onClick={() => goTo('next')} aria-label="Next year">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="trophy-progress">
          <div
            className="trophy-progress__fill"
            style={{
              width: `${((active + 1) / IPL_HISTORY.length) * 100}%`,
              background: entry.winnerColor,
            }}
          />
        </div>

      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────────────────
   SCENES
─────────────────────────────────────────────────────────────────── */
const SCENES = [
  {
    id: 'opening',
    startFrac: 0.00, endFrac: 0.18,
    eyebrow: 'TATA IPL 2026', heading: 'Crown\nOf\nCricket',
    body: null, cta: null, align: 'center', size: 'xl',
  },
  {
    id: 'trophy',
    startFrac: 0.18, endFrac: 0.36,
    eyebrow: 'The Prize', heading: 'One\nTrophy.\nEvery\nDream.',
    body: 'The most coveted prize in T20 cricket awaits its new champion.',
    cta: null, align: 'left', size: 'lg',
  },
  {
    id: 'captains',
    startFrac: 0.36, endFrac: 0.55,
    eyebrow: 'Ten Teams. One Goal.', heading: 'The\nCaptains\nConverge',
    body: 'Every titan. Every challenger. All roads lead here.',
    cta: null, align: 'right', size: 'lg',
  },
  {
    id: 'dust',
    startFrac: 0.55, endFrac: 0.74,
    eyebrow: null, heading: 'Only Two\nRemain',
    body: null, cta: null, align: 'center', size: 'xl',
  },
  {
    id: 'finale',
    startFrac: 0.74, endFrac: 1.00,
    eyebrow: 'GRAND FINALE · TODAY · 7:30 PM IST',
    heading: 'GT\nvs\nRCB',
    body: 'Narendra Modi Stadium · Ahmedabad · 132,000 Fans',
    cta: { primary: 'Watch Live Now', ghost: 'Match Preview' },
    align: 'center', size: 'hero', teams: true,
  },
]

/* ─────────────────────────────────────────────────────────────────
   HERO
─────────────────────────────────────────────────────────────────── */
export default function Hero() {
  const scrollContainerRef = useRef(null)
  const stickyRef          = useRef(null)
  const videoRef           = useRef(null)
  const particlesRef       = useRef(null)
  const navRef             = useRef(null)
  const rafRef             = useRef(null)
  const lastScrollRef      = useRef(0)

  const [activeScene, setActiveScene]       = useState(null)
  const [sceneProgress, setSceneProgress]   = useState(0)
  const [videoReady, setVideoReady]         = useState(false)
  const [videoDuration, setVideoDuration]   = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Register all scroll-triggered section animations
  useScrollAnimations()

  /* ── init nav ── */
  useEffect(() => {
    setTimeout(() => navRef.current?.classList.add('nav--visible'), 600)
  }, [])

  /* ── particles ── */
  useEffect(() => {
    const canvas = particlesRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const setSize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    const pts = Array.from({ length: 100 }, () => ({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      r:    Math.random() * 1.6 + 0.3,
      vx:   (Math.random() - 0.5) * 0.35,
      vy:   (Math.random() - 0.5) * 0.35,
      a:    Math.random() * 0.55 + 0.1,
      gold: Math.random() > 0.45,
    }))

    let id
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold
          ? `rgba(212,175,55,${p.a})`
          : `rgba(255,255,255,${p.a * 0.3})`
        ctx.fill()
        p.x += p.vx; p.y += p.vy
        if (p.x < 0)             p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0)             p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
      })
      id = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  /* ── video metadata ── */
  const onVideoMeta = () => {
    const v = videoRef.current
    if (!v) return
    setVideoDuration(v.duration)
    setVideoReady(true)
    v.currentTime = 0
    v.pause()
  }

  /* ── scroll → video scrub ── */
  const handleScroll = useCallback(() => {
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const el  = scrollContainerRef.current
      const vid = videoRef.current
      if (!el || !vid || !videoReady || !videoDuration) return

      const scrollable = el.scrollHeight - window.innerHeight
      const scrollY    = window.scrollY - el.offsetTop
      const raw        = Math.max(0, Math.min(1, scrollY / scrollable))

      if (Math.abs(raw - lastScrollRef.current) > 0.0005) {
        lastScrollRef.current = raw
        setScrollProgress(raw)

        const targetTime = raw * videoDuration
        if (Math.abs(vid.currentTime - targetTime) > 0.04) {
          vid.currentTime = targetTime
        }

        const scene = SCENES.find(s => raw >= s.startFrac && raw < s.endFrac) || null
        setActiveScene(scene ? scene.id : null)
        if (scene) {
          const sp = (raw - scene.startFrac) / (scene.endFrac - scene.startFrac)
          setSceneProgress(Math.min(1, Math.max(0, sp)))
        }
      }
    })
  }, [videoReady, videoDuration])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const currentScene = SCENES.find(s => s.id === activeScene)

  const sceneOpacity = sp => {
    if (sp < 0.15) return sp / 0.15
    if (sp > 0.85) return 1 - (sp - 0.85) / 0.15
    return 1
  }

  const opacity = currentScene ? sceneOpacity(sceneProgress) : 0
  const slideUp = currentScene
    ? `translateY(${(1 - Math.min(sceneProgress / 0.15, 1)) * 28}px)`
    : 'translateY(28px)'
  const barW = `${scrollProgress * 100}%`

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav className="nav" ref={navRef}>
        <div className="nav__logo">
          <span className="nav__logo-ipl">IPL</span>
          <span className="nav__logo-year">2026</span>
        </div>
        <ul className="nav__links">
          {['Matches', 'Teams', 'Stats', 'Fantasy', 'Tickets'].map(item => (
            <li key={item}><a href="#" className="nav__link">{item}</a></li>
          ))}
        </ul>
        <button className="nav__cta">Watch Live</button>
        <div className="nav__progress">
          <div className="nav__progress-fill" style={{ width: barW }} />
        </div>
      </nav>

      {/* ── SCROLL CONTAINER ── */}
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="sticky-hero" ref={stickyRef}>

          <canvas className="hero__particles" ref={particlesRef} />

          <div className="hero__video-wrap">
            <video
              ref={videoRef}
              className="hero__video"
              src="/video/one.mp4"
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={onVideoMeta}
              onCanPlayThrough={() => setVideoReady(true)}
            />
            <div className="hero__bar hero__bar--top" />
            <div className="hero__bar hero__bar--bottom" />
          </div>

          <div className="hero__vignette" />

          <div className={`scroll-prompt ${scrollProgress > 0.02 ? 'scroll-prompt--hidden' : ''}`}>
            <div className="scroll-prompt__line" />
            <span>Scroll to begin</span>
            <div className="scroll-prompt__arrow" />
          </div>

          {currentScene && (
            <div
              className={`scene scene--${currentScene.align} scene--${currentScene.size} ${currentScene.id === 'finale' ? 'scene--finale' : ''}`}
              style={{ opacity, transform: slideUp }}
            >
              {currentScene.eyebrow && (
                <p className="scene__eyebrow">{currentScene.eyebrow}</p>
              )}

              <h1 className="scene__heading">
                {currentScene.heading.split('\n').map((line, i) => (
                  <span key={i} className="scene__heading-line" style={{ transitionDelay: `${i * 60}ms` }}>
                    {line}
                  </span>
                ))}
              </h1>

              {currentScene.body && <p className="scene__body">{currentScene.body}</p>}

              {currentScene.teams && (
                <div className="scene__teams">
                  <div className="scene__team scene__team--gt">
                    <div className="scene__team-ring" />
                    <span className="scene__team-abbr">GT</span>
                    <span className="scene__team-name">Gujarat Titans</span>
                  </div>
                  <div className="scene__vs"><span>VS</span></div>
                  <div className="scene__team scene__team--rcb">
                    <div className="scene__team-ring" />
                    <span className="scene__team-abbr">RCB</span>
                    <span className="scene__team-name">Royal Challengers</span>
                  </div>
                </div>
              )}

              {currentScene.cta && (
                <div className="scene__ctas">
                  <button className="btn btn--primary">
                    <span className="btn__shine" />
                    {currentScene.cta.primary}
                  </button>
                  <button className="btn btn--ghost">{currentScene.cta.ghost}</button>
                </div>
              )}
            </div>
          )}

          <div className="chapters">
            {SCENES.map(s => (
              <div
                key={s.id}
                className={`chapter ${activeScene === s.id ? 'chapter--active' : ''} ${scrollProgress > s.endFrac ? 'chapter--done' : ''}`}
                title={s.id}
              >
                <div className="chapter__dot" />
                <span className="chapter__label">
                  {s.eyebrow?.split('·')[0]?.trim() || s.id}
                </span>
              </div>
            ))}
          </div>

          <div className="hero__fade-bottom" />

        </div>
      </div>

      {/* ══ BELOW-FOLD SECTIONS ══ */}

      <TrophySection />

      {/* stat cards start invisible — GSAP animates them in */}
      <section className="section section--dark">
        <div className="section__inner">
          <p className="section__eyebrow">Head to Head</p>
          <h2 className="section__heading">The Numbers Don't Lie</h2>
          <div className="stats-grid">
            {[
              { label: 'GT Wins',   value: '8',    accent: 'gold'    },
              { label: 'RCB Wins',  value: '6',    accent: 'red'     },
              { label: 'Avg Score', value: '172',  accent: 'neutral' },
              { label: 'Sixes Hit', value: '340+', accent: 'gold'    },
            ].map(s => (
              <div
                className={`stat-card stat-card--${s.accent}`}
                key={s.label}
                style={{ opacity: 0 /* GSAP will animate to 1 */ }}
              >
                <span className="stat-card__value">{s.value}</span>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* team cards start invisible — GSAP slides them in */}
      <section className="section section--teams">
        <div className="section__inner">
          <div className="teams-showcase">
            <div
              className="team-showcase team-showcase--gt"
              style={{ opacity: 0 /* GSAP animates from left */ }}
            >
              <div className="team-showcase__glow" />
              <h3 className="team-showcase__name">Gujarat Titans</h3>
              <p className="team-showcase__tagline">Hunt Together, Win Together</p>
              <div className="team-showcase__stat">
                <span>Won</span><strong>14</strong><span>of 17</span>
              </div>
            </div>

            <div
              className="teams-divider"
              style={{ opacity: 0 /* GSAP scales in */ }}
            >
              <span>FINAL</span>
            </div>

            <div
              className="team-showcase team-showcase--rcb"
              style={{ opacity: 0 /* GSAP animates from right */ }}
            >
              <div className="team-showcase__glow" />
              <h3 className="team-showcase__name">Royal Challengers</h3>
              <p className="team-showcase__tagline">Ee Sala Cup Namde</p>
              <div className="team-showcase__stat">
                <span>Won</span><strong>12</strong><span>of 17</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section — all children start invisible, GSAP slides from bottom */}
      <section className="section section--cta">
        <div className="section__inner section__inner--centered">
          <p className="section__eyebrow"    style={{ opacity: 0 }}>Don't Miss It</p>
          <h2 className="section__heading section__heading--gold" style={{ opacity: 0 }}>
            Secure Your Seat<br />at History
          </h2>
          <p className="section__body" style={{ opacity: 0 }}>
            Over 132,000 fans. One champion. Tonight at 7:30 PM IST.
          </p>
          <div className="cta-row" style={{ opacity: 0 }}>
            <button className="btn btn--primary btn--large">Book Tickets</button>
            <button className="btn btn--ghost btn--large">View Schedule</button>
          </div>
        </div>
        <div className="section__flare section__flare--left"  style={{ opacity: 0 }} />
        <div className="section__flare section__flare--right" style={{ opacity: 0 }} />
      </section>

      <footer className="footer">
        <div className="footer__inner" style={{ opacity: 0 }}>
          <div className="footer__brand">
            <span className="nav__logo-ipl">IPL</span>
            <span className="footer__tagline">Indian Premier League · Est. 2008</span>
          </div>
          <p className="footer__copy">© 2026 Board of Control for Cricket in India. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}