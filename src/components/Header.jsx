import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Radiation, Menu, X } from 'lucide-react'

export default function Header() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/journey', label: 'Journey' },
    { path: '/experience', label: 'Experience' },
    { path: '/coursework', label: 'Coursework' }
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#fdfbf7]/95 backdrop-blur-md border-b-2 border-blue-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-blue-950 group" onClick={() => setIsMenuOpen(false)}>
          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
            <Radiation className="h-7 w-7 text-blue-700 animate-[spin_10s_linear_infinite]" />
          </div>
          <div>
            <span className="block font-black text-xl tracking-tighter leading-none">ALEXIS</span>
            <span className="block font-semibold text-xs text-blue-600 tracking-widest">BSRT PORTFOLIO</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-1 bg-white p-1 rounded-xl border border-blue-100 shadow-sm">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  isActive 
                    ? 'bg-blue-900 text-white shadow-md' 
                    : 'text-blue-800 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button 
          className="md:hidden p-2 text-blue-900 hover:bg-blue-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#fdfbf7] border-b-2 border-blue-200 shadow-lg px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-5 py-4 rounded-xl text-base font-bold transition-all ${
                  isActive 
                    ? 'bg-blue-900 text-white shadow-md' 
                    : 'text-blue-800 hover:bg-blue-50 border border-transparent hover:border-blue-100'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}
