import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage'
import Library from './pages/library/library'
import Favorites from './pages/favorites/favorites'
import './App.scss'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/:pageID" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
