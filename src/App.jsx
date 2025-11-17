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
    <div className="relative min-h-screen bg-noise">
      {/* Large hero at top */}
      <Hero onSeed={seedDemo} loadingSeed={loadingSeed} />

      {/* Curvy divider */}
      <div className="relative -mt-6">
        <svg className="w-full h-12 text-white" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
      </div>

      {/* Content sections */}
      <Results results={results} />
      <Players players={players} />

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-14 text-sm text-gray-600">
        © {new Date().getFullYear()} TSV Eisenberg – Arrogante Hustensafttruppe. Alle Rechte vorbehalten.
      </footer>
    </div>
  )
}

export default App
