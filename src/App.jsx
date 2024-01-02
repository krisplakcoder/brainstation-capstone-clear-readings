import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import Library from './pages/library/library'
import './App.scss'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
