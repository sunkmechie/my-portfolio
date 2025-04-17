// src/App.tsx
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Poetry from './pages/Poetry'
import Contact from './pages/Contact'

const App: React.FC = () => {
  // 1️⃣ Dark mode state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // hydrate from localStorage on first render
    return localStorage.getItem('theme') === 'dark'
  })

  // 2️⃣ Sync the <html> class & localStorage whenever it changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  // 3️⃣ Toggler
  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  return (
    <>
      {/* Navigation bar on every page */}
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Your routed pages */}
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
