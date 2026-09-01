import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Thesis from './components/Thesis'
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
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
