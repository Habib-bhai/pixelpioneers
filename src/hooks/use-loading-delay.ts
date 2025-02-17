"use client"

import { useState, useEffect } from "react"

export function useLoadingDelay(minimumLoadingTime = 3000) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, minimumLoadingTime)

    return () => clearTimeout(timer)
  }, [minimumLoadingTime])

  return isLoading
}

