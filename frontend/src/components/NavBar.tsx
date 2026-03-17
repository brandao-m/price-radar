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

        {/* Barra de pesquisa */}
        <div className="flex-1 flex justify-center">

          <div className="relative w-full max-w-lg">

            {/* Ícone de lupa */}
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              🔍
            </span>

            <input
              type="text"
              placeholder="Pesquisar no Radar de Preços"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 text-slate-800 placeholder-slate-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

          </div>

        </div>

      </div>

    </nav>
  )
}

export default Navbar