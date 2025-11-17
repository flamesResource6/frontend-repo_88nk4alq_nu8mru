import { Trophy } from 'lucide-react'

function ResultCard({ r }) {
  const won = r.team_score > r.opponent_score
  return (
    <div className="hover-tilt p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition relative overflow-hidden">
      <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 ${won ? 'bg-emerald-300' : 'bg-rose-300'}`} />
      <div className="flex items-center justify-between relative">
        <div className="text-sm uppercase tracking-wide text-gray-500">
          {r.league || 'Liga'} • {new Date(r.date).toLocaleDateString('de-DE')}
        </div>
        <div className={`text-sm font-semibold ${won ? 'text-emerald-600' : 'text-rose-600'}`}>{won ? 'Sieg' : 'Niederlage'}</div>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <div className="text-xl font-bold">{r.home ? 'TSV Eisenberg' : r.opponent}</div>
        <div className="text-xl font-bold">{r.team_score}:{r.opponent_score}</div>
        <div className="text-xl font-bold">{r.home ? r.opponent : 'TSV Eisenberg'}</div>
      </div>
      {r.highlights && <p className="mt-3 text-gray-600">{r.highlights}</p>}
      {r.top_players && r.top_players.length > 0 && (
        <div className="mt-3 text-sm text-gray-700">
          Top: {r.top_players.map(tp => `${tp.player_name} (${tp.pins})`).join(', ')}
        </div>
      )}
    </div>
  )
}

function Results({ results }) {
  return (
    <section id="results" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="absolute inset-x-0 -z-10 top-0 h-32 bg-gradient-to-b from-emerald-200/60 to-transparent" />
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-emerald-700" />
          <h2 className="text-2xl sm:text-3xl font-bold">Neueste Ligaergebnisse</h2>
        </div>
        <a href="#" className="text-emerald-700 hover:underline text-sm">Alle Spiele demnächst</a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {results.length === 0 ? (
          <div className="col-span-full text-gray-600 bg-white/60 border border-emerald-200 rounded-xl p-6">
            Noch keine Ergebnisse. Lade Demo-Daten oben, um ein Beispiel zu sehen.
          </div>
        ) : (
          results.map(r => <ResultCard key={r._id} r={r} />)
        )}
      </div>
    </section>
  )
}

export default Results
