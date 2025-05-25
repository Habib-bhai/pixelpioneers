"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: JSX.Element
  href?: string
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setPosition({
          x: Math.sin(Date.now() / 1000) * 5,
          y: Math.cos(Date.now() / 1000) * 5,
        })
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div
          className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg transition-all duration-300 ease-out
            hover:scale-105 hover:border-emerald-500/50"
          style={{
            transform: isHovered
              ? `translate(${position.x}px, ${position.y}px) scale(1.05)`
              : "translate(0px, 0px) scale(1)",
          }}
        >
          <div className="relative w-12 h-12 mb-4">
            {/* Glow effect container */}
            <div
              className={`absolute inset-0 rounded-full bg-emerald-500/20 transition-all duration-300
                group-hover:blur-xl group-hover:bg-emerald-500/30`}
              style={{
                filter: "blur(8px)",
              }}
            />

            {/* Icon container with shine effect */}
            <div className="relative w-full h-full text-emerald-500 overflow-hidden">
              <div className="w-full h-full relative">
                {icon}
                {/* Shine effect */}
                <div
                  className="absolute inset-0 w-full h-full animate-shine"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                    transform: "translateX(-100%)",
                  }}
                />
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>

          <p className="text-zinc-400 mb-6 text-sm">{description}</p>

          <button className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded text-sm text-white transition-colors hover:bg-zinc-700">
            LEARN MORE
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </a>
    </div>
  )
}
