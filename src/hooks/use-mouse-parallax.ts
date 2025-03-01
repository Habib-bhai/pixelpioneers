"use client"

import { useState, useEffect, useCallback } from "react"

export function useMouseParallax(throttleMs = 50) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    const x = (clientX / window.innerWidth - 0.5) * 2
    const y = (clientY / window.innerHeight - 0.5) * 2
    setMousePosition({ x, y })
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const throttledMouseMove = (e: MouseEvent) => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleMouseMove(e)
          timeoutId = null as any
        }, throttleMs)
      }
    }

    window.addEventListener("mousemove", throttledMouseMove)
    return () => {
      window.removeEventListener("mousemove", throttledMouseMove)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [handleMouseMove, throttleMs])

  return mousePosition
}

