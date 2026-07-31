import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marvel Nexus | SpiderVerse & MCU Archive',
  description: 'Every Hero. Every Villain. Every Timeline. One Universe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 -z-10 bg-deep-black">
          <div className="absolute inset-0 opacity-30 bg-[url('/hex-grid.svg')] bg-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a12] to-[#050508]" />
        </div>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="scan-line" />
        </div>
        <main className="relative z-10 min-h-screen">{children}</main>
      </body>
    </html>
  )
}