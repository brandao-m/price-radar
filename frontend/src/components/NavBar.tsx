import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="bg-[#051A2C] shadow-md border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">

          <img
            src={logo}
            alt="Radar de Preços"
            className="h-14 object-contain hover:opacity-90 transition"
          />

        </Link>

        {/* BARRA DE PESQUISA */}
        <div className="flex-1">

          <input
            type="text"
            placeholder="Pesquise no Radar de Preços"
            className="w-full max-w-md px-4 py-2 rounded-lg bg-slate-100 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

    </nav>
  )
}

export default Navbar