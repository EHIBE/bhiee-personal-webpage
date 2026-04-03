export default function Footer() {
  return (
    <footer className="bg-blue-950 text-blue-100 py-8 border-t-4 border-blue-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="font-medium tracking-wide">© {new Date().getFullYear()} Marie Alexis Uy. Future Radiologist.</p>
        <p className="text-xs text-blue-400 mt-2 opacity-70">GSDMSFI • Radiologic Technology • Class of 2028</p>
      </div>
    </footer>
  )
}