"use client"

import { useState } from "react"
import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero" 
import NavigationOverlay from "@/components/navigation-overlay/NavigationOverlay"
import ValuesCulture from "@/components/values-and-culture/ValuesCulture"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <NavigationOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <Hero />

      <ValuesCulture/>

      
    </div>
  )

}

