"use client"

import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { motion } from "framer-motion"

const processes = [
  {
    number: "01",
    title: "Research & Discovery",
    description:
      "Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni quamot authol websites and web. creatingot otar erosmont augue, ultricies sed.",
  },
  {
    number: "02",
    title: "Industry Expertise",
    description:
      "Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni quamot authol websites and web. creatingot otar erosmont augue, ultricies sed.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "Web development is the process offer than operdol creating otar eros augue, ultricies sedatoni quamot authol websites and web. creatingot otar erosmont augue, ultricies sed.",
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-16">
          <div className="mb-8 md:mb-0">
            <div
              className={`inline-flex items-center gap-2 border border-emerald-500 px-4 py-2 mb-4 transition-all duration-700 transform
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm tracking-wider text-white">THE PROCESS</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-white transition-all duration-700 delay-200 transform
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              What We Do
            </h2>
          </div>

          <p
            className={`max-w-sm text-zinc-400 transition-all duration-700 delay-300 transform
              ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            Morbi interdum pellentesque nunc, luctusongi pretium nulla luctus at Aliquam.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Connecting Lines */}
          <div className="absolute top-24 left-0 right-0 hidden md:block">
            <motion.div
              className="h-0.5 bg-emerald-500/20"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          {processes.map((process, index) => (
            <div
              key={process.number}
              className={`relative group transition-all duration-700 transform
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Number with glow effect */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 transition-all duration-300 opacity-50 group-hover:opacity-100
                    ${isInView ? "animate-pulse" : ""}`}
                  style={{
                    background: `radial-gradient(circle at center, rgba(16, 185, 129, 0.2) 0%, transparent 70%)`,
                    filter: "blur(10px)",
                  }}
                />
                <span
                  className="relative text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-emerald-500/20 to-emerald-500/0"
                  style={{ WebkitTextStroke: "1px rgba(16, 185, 129, 0.3)" }}
                >
                  {process.number}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4 transition-colors duration-300 group-hover:text-emerald-500">
                {process.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">{process.description}</p>

              {/* Animated dot indicator */}
              <div className="absolute -left-3 top-24 hidden md:block">
                <div className="relative w-6 h-6">
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-ping" />
                  <div className="absolute inset-1.5 bg-emerald-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
