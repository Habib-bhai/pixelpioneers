"use client"
import { useEffect, useState } from "react"
import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import NavigationOverlay from "@/components/navigation-overlay/NavigationOverlay"
import ValuesCulture from "@/components/values-and-culture/ValuesCulture"
import { useLoadingDelay } from "@/hooks/use-loading-delay"
import LoadingScreen from "@/components/loading-screen/LoadingScreen"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLoading = useLoadingDelay(1000) // 4 seconds minimum loading time
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {isLoading ? <LoadingScreen /> :
        <div className="w-screen bg-black text-white">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <NavigationOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <Hero />
          <ValuesCulture />
        </div>

      }
    </>
  )

}