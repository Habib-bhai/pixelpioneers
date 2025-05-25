"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "../ui/button"

interface CaseStudyCardProps {
  category: string
  title: string
  image: string
  href?: string
  isInView?: boolean
  index?: number
}

// eslint-disable-next-line
export function CaseStudyCard({ category, title, image, href = "#", isInView = false, index = 0 }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative py-12 first:pt-0 last:pb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0" />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1 space-y-4">
          <span className="text-emerald-500 text-sm font-medium">{category}</span>

          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-emerald-500 transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="relative w-full md:w-[400px] aspect-[4/3] rounded-lg overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url(${image})`,
              transform: isHovered
                ? `scale(1.1) translate(${Math.sin(Date.now() / 1000) * 2}px, ${Math.cos(Date.now() / 1000) * 2}px)`
                : "scale(1)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <Button
          size="sm"
          className="bg-zinc-800 text-white hover:bg-emerald-500 group-hover:bg-emerald-500 flex items-center gap-2"
        >
          <span>LEARN MORE</span>
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  )
}
