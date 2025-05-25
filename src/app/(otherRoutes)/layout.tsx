"use client"
import type React from "react"
import { Inter } from "next/font/google"
import { useState } from "react"
import NavigationOverlay from "@/components/navigation-overlay/NavigationOverlay"
import Header from "@/components/header/Header"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)



    return (
        <main className="dark">
            <div className={`${inter.className} overflow-x-hidden`}>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <NavigationOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

                {children}
            </div>
        </main>
    )
}

