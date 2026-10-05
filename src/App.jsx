import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Thesis from './components/Thesis'
import Arts from './components/Arts'
import Padathi from './components/Padathi'
import Pattachitra from './components/Pattachitra'
import Mandala from './components/Mandala'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/arts/padathi" element={<Padathi />} />
          <Route path="/arts/pattachitra" element={<Pattachitra />} />
          <Route path="/arts/mandala" element={<Mandala />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
