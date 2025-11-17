import { Trophy, Target, ArrowRight, Sparkles } from 'lucide-react'

function Hero({ onSeed, loadingSeed }) {
  return (
    <header className="relative overflow-hidden text-white">
      {/* Layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 conic-spot opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600 via-emerald-500 to-teal-500 mix-blend-multiply" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute -top-24 -left-16 w-80 h-80 rounded-full bg-white/20 blur-3xl blob float" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-cyan-300/30 blur-3xl blob float" />
      </div>

      {/* Marquee ribbon */}
      <div className="bg-white/10 backdrop-blur border-b border-white/20">
        <div className="marquee py-2 text-xs tracking-widest uppercase">
          <span>
            TSV Eisenberg • Neun-Kegel • Thüringen • Arrogante Hustensafttruppe • TSV Eisenberg • Neun-Kegel • Thüringen • Arrogante Hustensafttruppe •
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 relative">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6" />
          <span className="uppercase tracking-widest text-white/90 text-xs">Nine-pin Bowling • Thüringen</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
          <span className="gradient-text">TSV Eisenberg</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-emerald-50 max-w-2xl">
          Auch bekannt als die <span className="font-semibold">Arrogante Hustensafttruppe</span> – neueste Ergebnisse, Highlights und Spieler-Stats an einem Ort.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#results" className="shine inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-5 py-3 rounded-xl shadow hover:shadow-lg transition">
            <Trophy className="w-5 h-5" />
            Neueste Ergebnisse
          </a>
          <a href="#players" className="shine inline-flex items-center gap-2 bg-emerald-700/30 backdrop-blur px-5 py-3 rounded-xl hover:bg-emerald-700/40 transition">
            Spieler-Stats
            <ArrowRight className="w-5 h-5" />
          </a>
          <button onClick={onSeed} disabled={loadingSeed} className="ml-auto text-sm bg-black/10 hover:bg-black/20 px-4 py-2 rounded-lg disabled:opacity-60 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {loadingSeed ? 'Lade Demo-Daten…' : 'Demo-Daten laden'}
          </button>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['Saisons', '2024/25'],
            ['Bahnen', 'Neun-Kegel'],
            ['Heim', 'Eisenberg'],
            ['Liga', 'Thüringen'],
          ].map(([k, v]) => (
            <div key={k} className="hover-tilt rounded-xl bg-white/10 border border-white/15 p-4 text-white/90">
              <div className="text-xs uppercase tracking-widest">{k}</div>
              <div className="text-lg font-bold">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Hero
