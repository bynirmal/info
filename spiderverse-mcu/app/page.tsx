import Nav from './(components)/nav/nav'
import MultiverseHub from './(components)/multiverse-hub/multiverse-hub'
import DossierSystem from './(components)/dossier-system/dossier-system'
import ArtifactVault from './(components)/artifact-vault/artifact-vault'
import TimelineExplorer from './(components)/timeline-explorer/timeline-explorer'
import SecureAccess from './(components)/secure-access/secure-access'
import HudOverlay from './(components)/hud-overlay/hud-overlay'

export default function Home() {
  return (
    <>
      <Nav />
      <HudOverlay />
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        <section id="hub">
          <MultiverseHub />
        </section>
        <section id="dossier">
          <DossierSystem />
        </section>
        <section id="vault">
          <ArtifactVault />
        </section>
        <section id="timeline">
          <TimelineExplorer />
        </section>
        <section id="access">
          <SecureAccess />
        </section>
      </div>
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-xs text-white/30 font-mono">
          MARVEL NEXUS // S.H.I.E.L.D. TERMINAL // LEVEL 7 CLEARANCE
        </p>
      </footer>
    </>
  )
}