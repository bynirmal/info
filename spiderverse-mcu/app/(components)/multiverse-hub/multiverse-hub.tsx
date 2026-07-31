import { useState } from 'react'

export default function MultiverseHub() {
  const [query, setQuery] = useState('')

  const categories = [
    { label: 'Heroes', count: 42, icon: '⚡', color: 'purple' },
    { label: 'Villains', count: 28, icon: '💀', color: 'red' },
    { label: 'Timelines', count: 12, icon: '⏳', color: 'cyan' },
    { label: 'Artifacts', count: 6, icon: '💎', color: 'gold' },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4 pt-16">
        <span className="section-label">Multiverse Gateway</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-gradient-infinity">Marvel Nexus</span>
        </h1>
        <p className="text-white/50 max-w-xl mx-auto text-sm">
          An interconnected S.H.I.E.L.D. terminal for navigating the Marvel Multiverse.
          Access dossiers, artifact vaults, and branching timelines.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="glass-panel-glow p-2 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search multiverse... (heroes, villains, timelines, artifacts)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/30 text-sm font-mono"
          />
          <div className="hud-text">QUERY: {query.length > 0 ? query.toUpperCase() : 'AWAITING INPUT'}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <div key={cat.label} className="glass-panel p-5 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group">
            <div className="text-2xl mb-3">{cat.icon}</div>
            <h3 className="font-semibold text-sm mb-1 group-hover:text-purple-400 transition-colors">{cat.label}</h3>
            <p className="text-xs text-white/40 font-mono">{cat.count} ENTRIES</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { title: 'Spider-Man Variants', desc: '6 multiversal variants tracked across 12 timelines', status: 'ACTIVE', color: 'green' },
          { title: 'Infinity Stones', desc: '6 artifacts located across 6 different realities', status: 'CONTAINED', color: 'purple' },
          { title: 'Timeline Branches', desc: '12 major branching points identified and monitored', status: 'MONITORING', color: 'cyan' },
        ].map((item) => (
          <div key={item.title} className="glass-panel p-5 hud-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-sm">{item.title}</h3>
              <span className={`text-xs px-2 py-1 rounded-full bg-${item.color}-500/20 text-${item.color}-400 font-mono`}>
                {item.status}
              </span>
            </div>
            <p className="text-xs text-white/40">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}