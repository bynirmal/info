export default function DossierSystem() {
  const variants = [
    { name: 'Peter Parker (Earth-616)', suit: 'Classic Red & Blue', power: 'Superhuman Strength, Wall-Crawling, Spider-Sense', status: 'PRIMARY', color: 'green' },
    { name: 'Miles Morales (Earth-1610)', suit: 'Black & Red Bio-Organic', power: 'Venom Strike, Camouflage, Bio-Electricity', status: 'ACTIVE', color: 'purple' },
    { name: 'Gwen Stacy (Earth-65)', suit: 'Black Symbiote Suit', power: 'Super-Spider-Sense, Wall-Crawling', status: 'ACTIVE', color: 'cyan' },
    { name: 'Spider-Man Noir (Earth-90214)', suit: 'Grey & Red Vintage', power: 'Enhanced Senses, Combat Skill', status: 'MONITORED', color: 'gold' },
    { name: 'Spider-Man 2099 (Earth-928)', suit: 'Black & Gold Cybernetic', power: 'Organic Webbing, Claws, Enhanced Vision', status: 'ACTIVE', color: 'purple' },
    { name: 'Spider-Woman (Earth-65)', suit: 'Yellow & Black Tactical', power: 'Bio-Electric Stingers, Wall-Crawling', status: 'STANDBY', color: 'cyan' },
  ]

  return (
    <div className="space-y-8">
      <div className="pt-8">
        <span className="section-label">Dossier System</span>
        <h2 className="text-4xl font-bold mt-2">Spider-Man Multiversal Dossier</h2>
        <p className="text-white/40 text-sm mt-2 max-w-2xl">
          Comprehensive tracking of Spider-Man variants across the multiverse. Each dossier includes suit specifications, power profiles, and current status.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {variants.map((variant, i) => (
          <div key={i} className="glass-panel p-5 hud-border hover:border-purple-500/30 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-sm group-hover:text-purple-400 transition-colors">{variant.name}</h3>
                <p className="text-xs text-white/40 mt-1 font-mono">{variant.suit}</p>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full bg-${variant.color}-500/20 text-${variant.color}-400 font-mono`}>
                {variant.status}
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="hud-text mb-1">POWER PROFILE</div>
                <p className="text-xs text-white/60">{variant.power}</p>
              </div>
              <div className="stability-bar">
                <div className={`stability-fill bg-${variant.color}-500`} style={{ width: `${60 + Math.random() * 35}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}