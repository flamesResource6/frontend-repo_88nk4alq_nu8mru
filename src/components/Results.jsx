function ResultCard({ r }) {
  const won = r.team_score > r.opponent_score
  return (
    <div className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
      <div className="flex items-center justify-between">
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
    <section id="results" className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold">Neueste Ligaergebnisse</h2>
        <a href="#" className="text-emerald-700 hover:underline text-sm">Alle Spiele demnächst</a>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {results.length === 0 ? (
          <div className="col-span-full text-gray-500">Noch keine Ergebnisse. Lade Demo-Daten oben, um ein Beispiel zu sehen.</div>
        ) : (
          results.map(r => <ResultCard key={r._id} r={r} />)
        )}
      </div>
    </section>
  )
}

export default Results
