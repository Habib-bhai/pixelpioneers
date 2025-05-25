"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { Service } from "@/lib/servicesData"
import Image from "next/image"

interface SocialProofProps {
  service: Service
}

export default function SocialProof({ service }: SocialProofProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent mb-12">
            Proven Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent mb-2"
              >
                {service.metrics.projects}+
              </motion.div>
              <div className="text-gray-400 text-lg">Projects Completed</div>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2"
              >
                {service.metrics.clients}+
              </motion.div>
              <div className="text-gray-400 text-lg">Happy Clients</div>
            </div>

            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                {service.metrics.successRate}%
              </motion.div>
              <div className="text-gray-400 text-lg">Success Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {service.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 hover:border-emerald-500/40 transition-all duration-300">
                <Quote className="w-8 h-8 text-emerald-500 mb-4" />
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">&quot;{testimonial.quote}&quot;</p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.client}
                    height={48}
                    width={48}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="text-white font-semibold">{testimonial.client}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="text-emerald-500 font-semibold">{testimonial.results}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Preview */}
        {service.caseStudies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">Featured Case Study</h3>

            {service.caseStudies.slice(0, 1).map((caseStudy, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h4>
                      <div className="space-y-4">
                        <div>
                          <span className="text-emerald-500 font-semibold">Challenge: </span>
                          <span className="text-gray-300">{caseStudy.challenge}</span>
                        </div>
                        <div>
                          <span className="text-blue-500 font-semibold">Solution: </span>
                          <span className="text-gray-300">{caseStudy.solution}</span>
                        </div>
                        <div>
                          <span className="text-purple-500 font-semibold">Results:</span>
                          <ul className="mt-2 space-y-1">
                            {caseStudy.results.map((result, i) => (
                              <li key={i} className="text-gray-300 flex items-center">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                                {result}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <Image
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title}
                        height={200}
                        width={200}
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
