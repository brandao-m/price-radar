import Navbar from "../components/NavBar"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#F4F6F8]">

      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        {children}
      </main>

    </div>
  )
}

export default MainLayout