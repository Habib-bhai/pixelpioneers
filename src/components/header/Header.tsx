"use client"
import Link from "next/link"
import { MenuIcon, X } from "lucide-react"

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

export default function Navbar({ isMenuOpen, setIsMenuOpen }: NavbarProps) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-[#0492bd]" />
        <span className="text-xl font-bold">Piexel Pioneers</span>
      </Link>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="rounded-full p-2 transition-colors hover:bg-white/10"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
    </nav>
  )
}

