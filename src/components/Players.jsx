import { Users } from 'lucide-react'

function PlayerCard({ p }) {
  return (
    <div className="hover-tilt p-5 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
          {p.nickname?.[0] || p.name[0]}
        </div>
        <div>
          <div className="font-semibold">{p.name}{p.nickname ? ` "${p.nickname}"` : ''}</div>
          <div className="text-sm text-gray-500">{p.position || 'Spieler'}</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-gray-500">Schnitt</div>
          <div className="font-semibold">{p.average_pins?.toFixed(1) || 0}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-gray-500">Bestleistung</div>
          <div className="font-semibold">{p.best_game}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-gray-500">Spiele</div>
          <div className="font-semibold">{p.games_played}</div>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-gray-500">Neuner</div>
          <div className="font-semibold">{p.strikes}</div>
        </div>
      </div>
    </div>
  )
}

function Players({ players }) {
  return (
    <section id="players" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="absolute inset-x-0 -z-10 top-0 h-32 bg-gradient-to-b from-emerald-200/60 to-transparent" />
      <div className="flex items-center gap-2">
        <Users className="w-5 h-5 text-emerald-700" />
        <h2 className="text-2xl sm:text-3xl font-bold">Spieler-Stats</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.length === 0 ? (
          <div className="col-span-full text-gray-600 bg-white/60 border border-emerald-200 rounded-xl p-6">
            Noch keine Spieler erfasst.
          </div>
        ) : (
          players.map(p => <PlayerCard key={p._id} p={p} />)
        )}
      </div>
    </section>
  )
}

export default Players
