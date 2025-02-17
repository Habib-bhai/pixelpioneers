"use client"

import { useState } from "react"
import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero" 
import NavigationOverlay from "@/components/navigation-overlay/NavigationOverlay"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className=" bg-black text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <NavigationOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />
      <div className="mt-10">
        <h1 className="text-5xl font-bold text-white"> hello world</h1>
      </div>

      
    </main>
  )

}

