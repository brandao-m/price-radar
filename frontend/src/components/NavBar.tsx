import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-[#0B1F33] shadow-md">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="text-white text-xl font-bold flex items-center gap-2"
        >
          Radar de Preços
        </Link>

      </div>

    </nav>
  )
}

export default Navbar