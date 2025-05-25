"use client"
import Link from "next/link"
import { MenuIcon, X } from "lucide-react"

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}


export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md p-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-[#0492bd]" />
        <span className="text-xl font-bold">Pexel Pioneers</span>
      </Link>

      <div className={`relative `}>
        {/* Fire Particles Container */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Fire Particle 1 */}
          <div className="absolute w-3 h-6 bg-gradient-to-t from-lime-400 via-emerald-400 to-transparent rounded-full animate-fire-1 opacity-80"></div>
          {/* Fire Particle 2 */}
          <div className="absolute w-2 h-5 bg-gradient-to-t from-green-400 via-lime-300 to-transparent rounded-full animate-fire-2 opacity-70"></div>
          {/* Fire Particle 3 */}
          <div className="absolute w-4 h-7 bg-gradient-to-t from-emerald-500 via-lime-400 to-transparent rounded-full animate-fire-3 opacity-60"></div>
          {/* Fire Particle 4 */}
          <div className="absolute w-2 h-4 bg-gradient-to-t from-lime-500 via-green-300 to-transparent rounded-full animate-fire-4 opacity-75"></div>
          {/* Fire Particle 5 */}
          <div className="absolute w-3 h-5 bg-gradient-to-t from-green-500 via-emerald-300 to-transparent rounded-full animate-fire-5 opacity-65"></div>
          {/* Fire Particle 6 */}
          <div className="absolute w-2 h-6 bg-gradient-to-t from-lime-400 via-green-400 to-transparent rounded-full animate-fire-6 opacity-80"></div>
        </div>

        {/* Energy Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Inner Energy Ring */}
          <div className="absolute w-12 h-12 rounded-full border-2 border-lime-400/60 animate-energy-pulse-1"></div>
          {/* Middle Energy Ring */}
          <div className="absolute w-12 h-12 rounded-full border-2 border-emerald-400/40 animate-energy-pulse-2"></div>
          {/* Outer Energy Ring */}
          <div className="absolute w-12 h-12 rounded-full border-2 border-green-400/30 animate-energy-pulse-3"></div>
        </div>

        {/* Core Energy Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-lime-400/20 animate-core-glow blur-sm"></div>
        </div>

        {/* Main Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-10 rounded-full p-3 transition-all duration-300 
          hover:bg-lime-500/10 hover:shadow-[0_0_25px_rgba(132,204,22,0.6)]
          bg-gradient-to-r from-lime-500/15 to-emerald-500/15
          shadow-[0_0_20px_rgba(132,204,22,0.4)]
          border-2 border-lime-400/40 hover:border-lime-400/70
          backdrop-blur-sm"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-lime-300 drop-shadow-[0_0_12px_rgba(132,204,22,1)] animate-icon-glow" />
          ) : (
            <MenuIcon className="h-6 w-6 text-lime-300 drop-shadow-[0_0_12px_rgba(132,204,22,1)] animate-icon-glow" />
          )}
        </button>
      </div>
    </div>
  )
}

