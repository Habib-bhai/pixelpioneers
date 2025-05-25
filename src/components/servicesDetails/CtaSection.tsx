"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { Service } from "@/lib/servicesData"

interface CTASectionProps {
  service: Service
}

export default function CTASection({ service }: CTASectionProps) {
  // eslint-disable-next-line
  const [urgencyVisible, setUrgencyVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-black to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,245,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Urgency Element */}
          {urgencyVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-6 py-3"
            >
              <Clock className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-semibold">Limited slots available this month</span>
            </motion.div>
          )}

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-emerald-500 to-blue-500 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join {service.metrics.clients}+ successful companies who chose us to build their digital future. Get started
            today and see results in weeks, not months.
          </p>

          {/* Pricing Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-gray-400 mb-2">Starting from</div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">
                ${service.pricing.starting.toLocaleString()}
              </div>
              <div className="text-gray-400 text-sm">Average project: ${service.pricing.average.toLocaleString()}</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 text-lg group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg group"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Service Guide
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 text-lg group"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Free Strategy Call
            </Button>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              Money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              No long-term contracts
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
