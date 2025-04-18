// src/App.tsx
import React, { useState, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Poetry from './pages/Poetry'
import Contact from './pages/Contact'

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true) // Default to dark
  const poemIndex = useRef(0)

  // Alternating Poems: dark, light, dark, light...
  const Poems = [
    // Dark 1: Pain - Emily Dickinson
    "\"I wonder if it hurts to live—\nAnd if They have to try—\nAnd whether—could They choose between—\nIt would not be—to die—\"\n— Emily Dickinson",
    // Light 1: Hope - Rainer Maria Rilke
    "\"Let everything happen to you: beauty and terror.\nJust keep going. No feeling is final.\"\n— Rainer Maria Rilke",
    // Dark 2: Despair - W.H. Auden
    "\"He was my North, my South, my East and West,\nMy working week and my Sunday rest...\"\n— W.H. Auden",
    // Light 2: Healing - Mary Oliver
    "\"You do not have to be good.\nYou only have to let the soft animal of your body\nlove what it loves.\"\n— Mary Oliver",
    // Dark 3: Unrequited Love - Pablo Neruda
    "\"Love is so short, forgetting is so long.\"\n— Pablo Neruda",
    // Light 3: Love - E.E. Cummings
    "\"i carry your heart(i carry it in my heart)\"\n— E.E. Cummings",
    // Dark 4: Emotional Numbness - Sylvia Plath
    "\"I am learning peacefulness, lying by myself quietly\nAs the light lies on these white walls, this bed, these hands.\"\n— Sylvia Plath",
    // Light 4: Self-love & Recovery - Derek Walcott
    "\"You will love again the stranger who was your self.\nGive wine. Give bread. Give back your heart...\"\n— Derek Walcott"
  ]

  // Ensure dark mode class on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  // Persist theme toggles
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    const overlay = document.createElement('div')
    overlay.classList.add('theme-transition')
    overlay.style.backgroundColor = isDarkMode ? '#fff' : '#111'
    overlay.style.position = 'fixed'
    overlay.style.top = '0'
    overlay.style.left = '0'
    overlay.style.width = '100vw'
    overlay.style.height = '100vh'
    overlay.style.zIndex = '9999'
    overlay.style.transition = 'opacity 0.6s ease'
    document.body.appendChild(overlay)

    // Select the next poem
    const line = Poems[poemIndex.current % Poems.length]
    poemIndex.current += 1

    const poemEl = document.createElement('div')
    poemEl.classList.add('poem-overlay')
    poemEl.textContent = line
    poemEl.style.position = 'fixed'
    poemEl.style.top = '50%'
    poemEl.style.left = '50%'
    poemEl.style.transform = 'translate(-50%, -50%)'
    poemEl.style.color = isDarkMode ? '#111' : '#fff'
    poemEl.style.fontSize = '2rem'
    poemEl.style.lineHeight = '1.5'
    poemEl.style.textAlign = 'center'
    poemEl.style.maxWidth = '80%'
    poemEl.style.whiteSpace = 'pre-line'
    poemEl.style.wordWrap = 'break-word'
    poemEl.style.zIndex = '9998'
    document.body.appendChild(poemEl)

    // Change theme and fade overlay in sync
    setTimeout(() => {
      setIsDarkMode(prev => !prev)
      overlay.style.opacity = '0'
    }, 1000)

    // Remove elements after transition
    setTimeout(() => {
      if (overlay.parentNode) document.body.removeChild(overlay)
      if (poemEl.parentNode) document.body.removeChild(poemEl)
    }, 6000)
  }

  return (
    <>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
