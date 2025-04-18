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

  // Combined Poems array: first 4 for light mode (hope, love, strength), last 4 for dark mode (pain, despair)
  const Poems = [
    "Hope is the thing with feathers — that perches in the soul…",
    "Love is not all: it is but an essence…",
    "You may shoot me with your words, cut me with your eyes…",
    "The world breaks everyone, and afterward, many are strong…",
    "Every man has his secret sorrows which the world knows not…",
    "I have loved flowers that fade…",
    "Deep into that darkness peering, long I stood there wondering…",
    "I have measured out my life with coffee spoons…",
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
    // Curtain swipe overlay
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
    const subset = isDarkMode ? Poems.slice(0, 4) : Poems.slice(4)
    const line = subset[poemIndex.current % subset.length]
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
    poemEl.style.wordWrap = 'break-word'
    poemEl.style.zIndex = '9998'
    document.body.appendChild(poemEl)

    // Wait briefly for overlay to be visible before changing theme and showing poem
    setTimeout(() => {
      setIsDarkMode(prev => !prev)
    }, 100) // Change theme early

    // Fade out overlay after a delay
    setTimeout(() => {
      overlay.style.opacity = '0'
    }, 2000)

    // Remove elements after transition
    setTimeout(() => {
      if (overlay.parentNode) document.body.removeChild(overlay)
      if (poemEl.parentNode) document.body.removeChild(poemEl)
    }, 3000)
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
