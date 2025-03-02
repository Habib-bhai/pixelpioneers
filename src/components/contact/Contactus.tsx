"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ContactUs() {
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Parallax effect on scroll
    const handleScroll = () => {
      if (!imageRef.current) return
      const scrollY = window.scrollY
      const translateY = scrollY * 0.5
      imageRef.current.style.transform = `z-10 translateY(${translateY}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background image with parallax effect */}
      <div ref={imageRef} className="absolute inset-0 overflow-hidden">
        {!imageError ? (
          <Image
            src="/images/contact.jpg"
            alt="Collaboration background"
            fill
            priority
            quality={100}
            className="object-cover"
            style={{
              objectPosition: "center",
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white">
            Image failed to load
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-[1]"></div>
      </div>

      {/* Content */}
      <div className="relative z-[2] h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center border border-emerald-500 rounded-sm px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div>
            <span className="text-gray-300 tracking-wider text-sm font-medium">LET&apos;S COLLABORATE</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 ml-3"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
        >
          <span className="text-white">Ready to</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10"
        >
          <span className="text-gray-400">work with us?</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button onClick={()=> router.push("/contact")} className="bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-3 px-8 transition-all duration-300 ease-in-out transform hover:shadow-lg">
            Get a quote
          </button>
        </motion.div>
      </div>
    </div>
  )
}

