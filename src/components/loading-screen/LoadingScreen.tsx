"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"

interface Particle {
  x: number
  y: number
  dx: number
  dy: number
  size: number
  color: string
}

export default function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
   // eslint-disable-next-line
  const [particles, setParticles] = useState<Particle[]>([])
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("")
  const controls = useAnimation()

  // Typing effect for loading text
  useEffect(() => {
    const text = "Loading..."
    let index = 0
    const interval = setInterval(() => {
      setLoadingText(text.slice(0, index))
      index++
      if (index > text.length) {
        index = 0
      }
    }, 200)

    return () => clearInterval(interval)
  }, [])

  // Progress bar animation
  useEffect(() => {
    const duration = 4000 // 4 seconds
    const interval = 10 // Update every 10ms
    const steps = duration / interval
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setProgress((currentStep / steps) * 100)

      if (currentStep >= steps) {
        clearInterval(timer)
        controls.start("warpSpeed")
      }
    }, interval)

    return () => clearInterval(timer)
  }, [controls])

  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    // Create particles
    const particleCount = 100
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        color: `hsl(${Math.random() * 60 + 160}, 100%, 50%)`,
      })
    }

    setParticles(newParticles)
    particlesRef.current = newParticles

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.fillStyle = "rgba(0, 24, 24, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle, i) => {
        // Update particle position
        particle.x += particle.dx
        particle.y += particle.dy

        // Mouse interaction
        const dx = mousePosition.x - particle.x
        const dy = mousePosition.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 100) {
          particle.x += (dx / distance) * 0.5
          particle.y += (dy / distance) * 0.5
        }

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Connect particles
        particlesRef.current.forEach((p2, j) => {
          if (i === j) return
          const dx = particle.x - p2.x
          const dy = particle.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 255, 157, ${1 - distance / 100})`
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 flex flex-col items-center justify-center bg-[#001818] overflow-hidden"
      >
        <canvas ref={canvasRef} className="absolute inset-0" />

        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.1, 1],
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            times: [0, 0.7, 1],
          }}
          className="relative z-10 flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  ease: "linear",
                  repeat: Number.POSITIVE_INFINITY,
                },
                scale: {
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                },
              }}
              className="absolute -inset-4 rounded-full border border-[#00FF9D] opacity-20"
            />

            {/* Inner Circle */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0,255,157,0.5)",
                  "0 0 40px rgba(0,255,157,0.8)",
                  "0 0 20px rgba(0,255,157,0.5)",
                ],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="h-16 w-16 rounded-full bg-[#00FF9D]"
            />
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-8"
        >
          <div className="h-1 w-48 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00FF9D] to-[#00FFFF]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-2 text-center text-sm text-white/60"
          >
            {loadingText} {Math.round(progress)}%
          </motion.div>
        </motion.div>

        {/* Warp Speed Effect */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            warpSpeed: {
              opacity: [0, 1, 0],
              scale: [1, 2, 4],
              transition: {
                duration: 1.5,
                times: [0, 0.5, 1],
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="absolute inset-0 bg-gradient-to-r from-[#00FF9D] to-[#00FFFF] mix-blend-overlay"
        />
      </motion.div>
    </AnimatePresence>
  )
}

