"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { Service } from "@/lib/servicesData"

interface ServiceOverviewProps {
  service: Service
}

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* What We Do */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 h-full hover:border-emerald-500/40 transition-all duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
              <p className="text-gray-400 mb-6">{service.heroDescription}</p>
              <ul className="space-y-2">
                {service.solutions.map((solution, index) => (
                  <li key={index} className="flex items-center text-emerald-500">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-300">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-emerald-500 font-bold">{service.metrics.successRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Projects Completed</span>
                  <span className="text-emerald-500 font-bold">{service.metrics.projects}+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Happy Clients</span>
                  <span className="text-emerald-500 font-bold">{service.metrics.clients}+</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Our Process */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 h-full hover:border-blue-500/40 transition-all duration-300">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Process</h3>
              <div className="space-y-3">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {step.step}
                    </div>
                    <div>
                      <div className="text-white font-medium">{step.title}</div>
                      <div className="text-gray-400 text-sm">{step.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
