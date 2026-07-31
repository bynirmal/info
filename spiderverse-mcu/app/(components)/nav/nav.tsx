import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#hub" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white">
            N
          </div>
          <span className="font-semibold text-sm tracking-wide text-white group-hover:text-purple-400 transition-colors">
            MARVEL NEXUS
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#hub" className="nav-link">Multiverse Hub</Link>
          <Link href="#dossier" className="nav-link">Dossiers</Link>
          <Link href="#vault" className="nav-link">Artifact Vault</Link>
          <Link href="#timeline" className="nav-link">Timeline</Link>
          <Link href="#access" className="nav-link">Access</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="hud-text">SYSTEM ONLINE</span>
        </div>
      </div>
    </nav>
  )
}