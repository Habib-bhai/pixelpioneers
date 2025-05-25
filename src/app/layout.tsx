import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer/Footer"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} overflow-x-hidden`}>
       {children}
       <Footer/>
      </body>
    </html>
  )
}

