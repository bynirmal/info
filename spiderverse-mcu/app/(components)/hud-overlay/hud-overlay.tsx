export default function HudOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-16 right-16 w-32 h-32 border border-purple-500/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-16 left-16 w-24 h-24 border border-cyan-500/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/5 rounded-full" />
    </div>
  )
}