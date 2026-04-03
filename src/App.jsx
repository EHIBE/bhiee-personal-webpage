import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Journey from './pages/Journey'
import Experience from './pages/Experience'
import Coursework from './pages/Coursework'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-200">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/coursework" element={<Coursework />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}