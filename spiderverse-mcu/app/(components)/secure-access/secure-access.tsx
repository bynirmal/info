import { useState } from 'react'

export default function SecureAccess() {
  const [code, setCode] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [granted, setGranted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAttempts(attempts + 1)
    if (code === 'LEVEL7') {
      setGranted(true)
    }
  }

  return (
    <div className="space-y-8">
      <div className="pt-8">
        <span className="section-label">Secure Access</span>
        <h2 className="text-4xl font-bold mt-2">Level 7 Clearance Portal</h2>
        <p className="text-white/40 text-sm mt-2 max-w-2xl">
          Immersive gateway to the Marvel Nexus database. Authorize access to unlock classified multiversal intelligence.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="glass-panel-glow p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-purple-400">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="font-semibold">Clearance Verification</h3>
            <p className="text-xs text-white/40 font-mono">
              {granted ? 'ACCESS GRANTED' : `ATTEMPT ${attempts + 1} OF 5`}
            </p>
          </div>

          {!granted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="hud-text block mb-2">CLEARANCE CODE</label>
                <input
                  type="password"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter clearance code..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm font-mono outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Authorize Access
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-center py-4">
                <div className="text-green-400 font-mono text-sm mb-2">ACCESS GRANTED</div>
                <div className="text-xs text-white/40">Welcome, Agent. Loading classified data...</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Clearance Level', value: '7', status: 'ACTIVE' },
                  { label: 'Access Period', value: '24h', status: 'REMAINING' },
                  { label: 'Data Nodes', value: '1,247', status: 'INDEXED' },
                  { label: 'Threat Level', value: 'ELEVATED', status: 'ADVISORY' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between glass-panel p-3">
                    <span className="text-xs text-white/50">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-white">{item.value}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 font-mono">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}