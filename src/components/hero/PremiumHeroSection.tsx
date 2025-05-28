"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { ArrowRight, Star, Zap, Shield, Award, ChevronDown, Sparkles, TrendingUp, Plug, Bug } from "lucide-react"
import Link from "next/link"

export default function PremiumHero() {
  // eslint-disable-next-line
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Advanced parallax layers
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  //   eslint-disable-next-line
  const y3 = useTransform(scrollY, [0, 500], [0, -50])

  // Magnetic cursor effect
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
        cursorX.set(x)
        cursorY.set(y)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [cursorX, cursorY])

  // Particle system data
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    speed: Math.random() * 2 + 0.5,
  }))

  return (
    <div ref={containerRef} className="mt-5 relative min-h-screen bg-black overflow-hidden">
      {/* Liquid Morphing Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #10b981 0%, transparent 50%), radial-gradient(circle at 80% 20%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 40% 80%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #10b981 0%, transparent 50%), radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 60% 40%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 40% 70%, #10b981 0%, transparent 50%), radial-gradient(circle at 70% 30%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 30% 20%, #8b5cf6 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Morphing Blobs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 0.8, 1],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            borderRadius: ["50%", "60% 40% 30% 70%", "40% 60% 70% 30%", "50%"],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.3, 1, 0.8],
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            borderRadius: ["50%", "30% 70% 60% 40%", "70% 30% 40% 60%", "50%"],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Particle System */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.speed * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: particle.id * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Interactive Magnetic Field */}
        <motion.div
          className="absolute w-[800px] h-[800px] pointer-events-none"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-emerald-500/10 via-emerald-500/5 to-transparent rounded-full blur-2xl" />
        </motion.div>
      </div>

      {/* Floating 3D Elements */}
      <motion.div style={{ y: y1 }} className="absolute top-32 left-1/4 z-10">
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 backdrop-blur-sm border border-white/20 rounded-2xl"
          animate={{
            rotateX: [0, 15, 0],
            rotateY: [0, 15, 0],
            rotateZ: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, rotateZ: 10 }}
        />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-64 right-1/3 z-10">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-20 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          {/* Left Column - Revolutionary Content */}
          <motion.div
            className="space-y-6 sm:space-y-10"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Holographic Trust Badge */}
            <motion.div
              className="inline-flex items-center space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl border border-white/20 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </motion.div>
              <span className="text-white font-medium">AI-Powered Excellence</span>
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                ))}
              </div>
            </motion.div>

            {/* Revolutionary Typography */}
            <motion.div className="space-y-6">
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-8xl font-black leading-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {/* Holographic Text Effect */}
                <motion.span
                  className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  FUTURE
                </motion.span>

                <motion.span
                  className="block text-white"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  ARCHITECTS
                </motion.span>

                <motion.span
                  className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  OF DIGITAL
                </motion.span>
              </motion.h1>

              {/* Breathing Text Effect */}
              <motion.p
                className="my-10 text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                Your Digital Transformation
                <motion.span
                  className="text-emerald-400 font-bold mx-2"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(16, 185, 129, 0.5)",
                      "0 0 20px rgba(16, 185, 129, 0.8)",
                      "0 0 10px rgba(16, 185, 129, 0.5)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Co-pilots
                </motion.span>
                <br />
                from proof-of-concept to rock-solid production.
              </motion.p>
            </motion.div>

            {/* Interactive Metrics Dashboard */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { icon: TrendingUp, value: "80%", label: "ROI Increase", color: "emerald" },
                { icon: Plug, value: "20+", label: "APIs Built", color: "blue" },
                { icon: Bug, value: "90+", label: "Bugs Squashed", color: "purple" },
                { icon: Zap, value: "0.3s", label: "Load Time", color: "pink" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="group relative p-4 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl hover:border-emerald-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                >
                  <motion.div
                    className={`w-8 h-8 mb-3 text-${metric.color}-400`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  >
                    <metric.icon className="w-full h-full" />
                  </motion.div>
                  <motion.div
                    className={`text-2xl font-bold text-${metric.color}-400 mb-1`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{metric.label}</div>

                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${metric.color}-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Revolutionary CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {/* Magnetic Primary CTA */}
              <Link href={"/contact"}>
                <motion.button
                  className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-emerald-500 to-blue-500 text-black font-bold text-base sm:text-lg rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovering(true)}
                  onHoverEnd={() => setIsHovering(false)}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400"
                    animate={isHovering ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>Launch Revolution</span>
                    <motion.div animate={{ x: isHovering ? 5 : 0 }} transition={{ duration: 0.3 }}>
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </span>

                  {/* Particle burst effect */}
                  {isHovering && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          style={{
                            left: "50%",
                            top: "50%",
                          }}
                          animate={{
                            x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                            y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                            opacity: [1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{ duration: 0.6, delay: i * 0.05 }}
                        />
                      ))}
                    </motion.div>
                  )}
                </motion.button>
              </Link>
              {/* Holographic Secondary CTA */}
              <Link href={"/project"}>
                <motion.button
                  className="group px-6 sm:px-10 py-4 sm:py-5 border-2 border-transparent bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl text-white font-semibold text-base sm:text-lg rounded-full relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>View Quantum Portfolio</span>
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Floating Trust Indicators */}
            <motion.div
              className="flex items-center space-x-4 sm:space-x-8 pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ scale: 1.05, color: "#10b981" }}
              >
                <Shield className="w-6 h-6 text-emerald-500" />
                <span className="text-xs sm:text-sm font-medium">Quantum Security</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-gray-400"
                whileHover={{ scale: 1.05, color: "#3b82f6" }}
              >
                <Award className="w-6 h-6 text-blue-500" />
                <span className="text-xs sm:text-sm font-medium">Future Award Winner</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Interactive Showcase */}
          <motion.div
            className="relative h-[400px] sm:h-[500px] lg:h-[700px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Mobile: Block layout, Desktop: Floating cards */}
            <div className="block lg:hidden space-y-6">
              {/* Neural Performance - Block on mobile */}
              <motion.div
                className="w-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-bold text-lg">Neural Performance</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Zap className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>

                {/* Animated Progress Bars */}
                <div className="space-y-3">
                  {["Speed", "Innovation", "Impact"].map((metric, index) => (
                    <div key={metric} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{metric}</span>
                        <span className="text-emerald-400">99.{9 - index}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${99 - index * 0.1}%` }}
                          transition={{ duration: 2, delay: 2 + index * 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quantum Analytics - Block on mobile */}
              <motion.div
                className="w-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-bold text-lg">Quantum Analytics</span>
                  <motion.span
                    className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    +∞%
                  </motion.span>
                </div>

                {/* 3D Chart Visualization */}
                <div className="flex items-end justify-between h-24 space-x-2">
                  {[40, 65, 80, 95, 100, 85, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-lg flex-1 relative"
                      initial={{ height: 0, rotateX: 0 }}
                      animate={{
                        height: `${height}%`,
                        rotateX: [0, 5, 0],
                      }}
                      transition={{
                        height: { duration: 1, delay: 2.5 + i * 0.1 },
                        rotateX: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 },
                      }}
                      whileHover={{ scale: 1.1, rotateX: 10 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-t-lg"
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Desktop: Floating cards */}
            <div className="hidden lg:block">
              {/* Floating 3D Cards */}
              <motion.div
                className="absolute top-0 right-0 w-64 sm:w-80 h-40 sm:h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-6"
                style={{ y: y1 }}
                animate={{
                  rotateY: [0, 5, 0],
                  rotateX: [0, 2, 0],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-bold text-lg">Neural Performance</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Zap className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>

                {/* Animated Progress Bars */}
                <div className="space-y-3">
                  {["Speed", "Innovation", "Impact"].map((metric, index) => (
                    <div key={metric} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{metric}</span>
                        <span className="text-emerald-400">99.{9 - index}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${99 - index * 0.1}%` }}
                          transition={{ duration: 2, delay: 2 + index * 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Morphing Data Visualization */}
              <motion.div
                className="absolute bottom-0 left-0 w-72 sm:w-96 h-48 sm:h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-6"
                style={{ y: y2 }}
                animate={{
                  rotateY: [0, -5, 0],
                  rotateX: [0, -2, 0],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotateY: -10, rotateX: -5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-white font-bold text-lg">Quantum Analytics</span>
                  <motion.span
                    className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    +∞%
                  </motion.span>
                </div>

                {/* 3D Chart Visualization */}
                <div className="flex items-end justify-between h-24 space-x-2">
                  {[40, 65, 80, 95, 100, 85, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      className="bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-lg flex-1 relative"
                      initial={{ height: 0, rotateX: 0 }}
                      animate={{
                        height: `${height}%`,
                        rotateX: [0, 5, 0],
                      }}
                      transition={{
                        height: { duration: 1, delay: 2.5 + i * 0.1 },
                        rotateX: { duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 },
                      }}
                      whileHover={{ scale: 1.1, rotateX: 10 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-t-lg"
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.1 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Central Holographic Element - Hidden on mobile */}
            <motion.div
              className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="relative w-full h-full">
                {/* Rotating Rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute inset-${i * 4} border-2 border-emerald-500/30 rounded-full`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      direction: i % 2 === 0 ? "normal" : "reverse",
                    }}
                  />
                ))}

                {/* Central Core */}
                <motion.div
                  className="absolute inset-16 bg-gradient-to-br from-emerald-500/40 to-blue-500/40 rounded-full backdrop-blur-xl border border-white/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                      "0 0 40px rgba(16, 185, 129, 0.6)",
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Quantum Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <motion.div
          className="w-8 h-14 border-2 border-emerald-500/50 rounded-full flex justify-center relative overflow-hidden"
          whileHover={{ scale: 1.1, borderColor: "#10b981" }}
        >
          <motion.div
            className="w-2 h-6 bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
