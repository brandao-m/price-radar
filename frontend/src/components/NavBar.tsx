import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <nav className="bg-[#051A2C] shadow-md border-b border-slate-800">

      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center">

        <Link to="/" className="flex items-center">

          <img
            src={logo}
            alt="Radar de Preços"
            className="h-20 object-contain hover:opacity-90 transition"
          />

        </Link>

      </div>

    </nav>
  )
}

export default Navbar