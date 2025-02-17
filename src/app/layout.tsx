"use client"

import type React from "react"

import { useState, useEffect } from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import LoadingScreen from "@/components/loading-screen/LoadingScreen"
import { useLoadingDelay } from "@/hooks/use-loading-delay"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isLoading = useLoadingDelay(1000) // 4 seconds minimum loading time
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {isLoading ? <LoadingScreen /> : <main className="min-h-screen">{children}</main>}
      </body>
    </html>
  )
}

