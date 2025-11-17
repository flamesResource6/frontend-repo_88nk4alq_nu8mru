import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Results from './components/Results'
import Players from './components/Players'

const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [results, setResults] = useState([])
  const [players, setPlayers] = useState([])
  const [loadingSeed, setLoadingSeed] = useState(false)

  const loadData = async () => {
    try {
      const [rRes, pRes] = await Promise.all([
        fetch(`${API_URL}/api/results`).then(r => r.json()),
        fetch(`${API_URL}/api/players`).then(r => r.json()),
      ])
      setResults(rRes)
      setPlayers(pRes)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const seedDemo = async () => {
    setLoadingSeed(true)
    try {
      await fetch(`${API_URL}/api/seed`, { method: 'POST' })
      await loadData()
    } finally {
      setLoadingSeed(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Hero onSeed={seedDemo} loadingSeed={loadingSeed} />
      <Results results={results} />
      <Players players={players} />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
        © {new Date().getFullYear()} TSV Eisenberg – Arrogante Hustensafttruppe. Alle Rechte vorbehalten.
      </footer>
    </div>
  )
}

export default App
