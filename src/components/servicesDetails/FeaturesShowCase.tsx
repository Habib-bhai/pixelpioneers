"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { Service } from "@/lib/servicesData"

interface FeaturesShowcaseProps {
  service: Service
}

export default function FeaturesShowcase({ service }: FeaturesShowcaseProps) {
  const [activeFeature, setActiveFeature] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to dominate your market and drive exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border-emerald-500/50"
                    : "bg-black/20 border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 mb-3">{feature.description}</p>
                    <div className="text-emerald-500 font-semibold">{feature.metrics}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-500/20">
              <div className="w-full h-full bg-black/40 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">{service.features[activeFeature]?.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.features[activeFeature]?.title}</h3>
                  <p className="text-emerald-500 text-lg font-semibold">{service.features[activeFeature]?.metrics}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Powered by Cutting-Edge Technology</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
              >
                <span className="text-white font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
