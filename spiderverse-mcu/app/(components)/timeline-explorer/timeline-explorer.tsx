export default function TimelineExplorer() {
  const nodes = [
    { id: 1, label: 'Origin', x: 50, y: 10, desc: 'Universe creation event', color: 'purple' },
    { id: 2, label: 'Infinity Saga', x: 25, y: 30, desc: 'Thanos&apos; quest for the Stones', color: 'gold' },
    { id: 3, label: 'Spider-Verse', x: 75, y: 30, desc: 'Multiversal Spider-Men converge', color: 'cyan' },
    { id: 4, label: 'Endgame', x: 50, y: 50, desc: 'The Blip and reversal', color: 'green' },
    { id: 5, label: 'Multiversal War', x: 15, y: 70, desc: 'Kang&apos;s incursion begins', color: 'red' },
    { id: 6, label: 'Branch Point A', x: 50, y: 70, desc: 'Sacrifice of Peter Parker', color: 'purple' },
    { id: 7, label: 'Branch Point B', x: 85, y: 70, desc: 'Symbiote invasion Earth-67', color: 'red' },
    { id: 8, label: 'Convergence', x: 50, y: 90, desc: 'All timelines merge', color: 'cyan' },
  ]

  const connections = [
    [1, 2], [1, 3], [2, 4], [3, 4], [4, 5], [4, 6], [4, 7], [5, 8], [6, 8], [7, 8],
  ]

  return (
    <div className="space-y-8">
      <div className="pt-8">
        <span className="section-label">Timeline Explorer</span>
        <h2 className="text-4xl font-bold mt-2">Branching Timeline Map</h2>
        <p className="text-white/40 text-sm mt-2 max-w-2xl">
          Node-based visualization of multiversal branching points and chronological events across the Marvel Multiverse.
        </p>
      </div>

      <div className="glass-panel p-6 hud-border relative" style={{ height: '500px' }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map(([from, to], i) => {
            const f = nodes.find(n => n.id === from)!
            const t = nodes.find(n => n.id === to)!
            return (
              <line
                key={i}
                x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                stroke="rgba(139, 92, 246, 0.2)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
              />
            )
          })}
        </svg>
        <div className="relative w-full h-full">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <div className={`w-4 h-4 rounded-full bg-${node.color}-500 animate-pulse`} />
              <div className="absolute left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity glass-panel p-3 w-48">
                <h4 className="text-xs font-semibold text-white">{node.label}</h4>
                <p className="text-xs text-white/40 mt-1">{node.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-3">
        {[
          { label: 'Major Branches', value: '7', color: 'purple' },
          { label: 'Convergence Points', value: '3', color: 'cyan' },
          { label: 'Sacrifice Events', value: '2', color: 'red' },
          { label: 'Stable Timelines', value: '12', color: 'green' },
        ].map((stat) => (
          <div key={stat.label} className="glass-panel p-4 text-center">
            <div className={`text-2xl font-bold text-${stat.color}-400 font-mono`}>{stat.value}</div>
            <div className="text-xs text-white/40 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}