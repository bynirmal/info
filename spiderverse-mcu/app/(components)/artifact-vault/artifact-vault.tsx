export default function ArtifactVault() {
  const stones = [
    { name: 'Space Stone', color: 'blue', stability: 98, status: 'CONTAINED', location: 'Asgardian Vault' },
    { name: 'Mind Stone', color: 'yellow', stability: 87, status: 'CONTAINED', location: 'Vision Fragment' },
    { name: 'Reality Stone', color: 'red', stability: 72, status: 'MONITORING', location: 'Knowhere Archive' },
    { name: 'Power Stone', color: 'purple', stability: 95, status: 'CONTAINED', location: 'Xandar Vault' },
    { name: 'Time Stone', color: 'green', stability: 64, status: 'WATCH', location: 'Kamar-Taj' },
    { name: 'Soul Stone', color: 'orange', stability: 41, status: 'ALERT', location: 'Vormir' },
  ]

  return (
    <div className="space-y-8">
      <div className="pt-8">
        <span className="section-label">Artifact Vault</span>
        <h2 className="text-4xl font-bold mt-2">Infinity Stones Containment</h2>
        <p className="text-white/40 text-sm mt-2 max-w-2xl">
          Real-time stability monitoring for all six Infinity Stones. Each stone is tracked with containment status and location data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stones.map((stone, i) => (
          <div key={i} className="glass-panel p-5 hud-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10" style={{ background: `radial-gradient(circle, var(--stone-color), transparent 70%)` }} />
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-sm">{stone.name}</h3>
                <p className="text-xs text-white/40 font-mono mt-1">{stone.location}</p>
              </div>
              <div className="w-3 h-3 rounded-full" style={{ background: `var(--stone-color)` }} />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="hud-text">STABILITY</span>
                <span className={`text-xs font-mono ${stone.stability > 80 ? 'text-green-400' : stone.stability > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {stone.stability}%
                </span>
              </div>
              <div className="stability-bar">
                <div
                  className="stability-fill"
                  style={{
                    width: `${stone.stability}%`,
                    background: stone.stability > 80 ? '#22c55e' : stone.stability > 60 ? '#f59e0b' : '#ef4444',
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="hud-text">STATUS</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  stone.status === 'CONTAINED' ? 'bg-green-500/20 text-green-400' :
                  stone.status === 'ALERT' ? 'bg-red-500/20 text-red-400' :
                  stone.status === 'WATCH' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-purple-500/20 text-purple-400'
                } font-mono`}>
                  {stone.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}