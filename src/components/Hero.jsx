import { Trophy, BowlingBall, ArrowRight } from 'lucide-react'

function Hero({ onSeed, loadingSeed }) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-black/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 relative">
        <div className="flex items-center gap-3 mb-4">
          <BowlingBall className="w-6 h-6" />
          <span className="uppercase tracking-widest text-white/90 text-xs">Nine-pin Bowling • Thüringen</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          TSV Eisenberg
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-emerald-50">
          Auch bekannt als die <span className="font-semibold">Arrogante Hustensafttruppe</span> –
          hier bekommst du die neuesten Ergebnisse, Highlights und Spieler-Stats.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#results" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-5 py-3 rounded-lg shadow hover:shadow-md transition">
            <Trophy className="w-5 h-5" />
            Neueste Ergebnisse
          </a>
          <a href="#players" className="inline-flex items-center gap-2 bg-emerald-700/30 backdrop-blur px-5 py-3 rounded-lg hover:bg-emerald-700/40 transition">
            Spieler-Stats
            <ArrowRight className="w-5 h-5" />
          </a>
          <button onClick={onSeed} disabled={loadingSeed} className="ml-auto text-sm bg-black/10 hover:bg-black/20 px-4 py-2 rounded-lg disabled:opacity-60">
            {loadingSeed ? 'Lade Demo-Daten…' : 'Demo-Daten laden'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Hero
