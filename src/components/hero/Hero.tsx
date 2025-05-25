"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Saira } from "next/font/google"
const saira = Saira({
    subsets: ["latin"],
    weight: ["400"]
})

export default function Hero() {
  return (
    <div className="relative bg-[#1c1c1c] overflow-hidden flex flex-col mb-10">
      {/* Vertical SOFTCONIC text */}
      <div className="absolute left-0 top-0 h-full w-40 border-r-[1px] border-gray-300 hidden lg:flex items-center justify-center">
        <div
          className="rotate-180 text-4xl lg:text-[80px] font-bold tracking-wider opacity-10"
          style={{ writingMode: "vertical-rl" }}
        >
          PIONEERS
        </div>
      </div>

     

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-full lg:h-screen items-center px-6 lg:pl-[180px] lg:pr-16 pt-20 lg:pt-0">
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6 lg:pr-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-[50px] xl:text-[64px] font-bold leading-tight tracking-tight text-white"
          >
            UNLOCK YOUR
            <br />
            BUSINESS POTENTIAL.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-gray-400 leading-relaxed"
          >
            We are a team of Professionals who love to create Business Solutions, to help them GROWWWWWW! And reach their POTENTIAL.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group mt-6 lg:mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 lg:px-8 py-3 lg:py-4 text-white transition-colors hover:bg-[#0492bd]"
          >
            VIEW MORE
            <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.button>
        </div>
        <div className="relative w-full lg:w-1/2 h-[300px] lg:h-full mt-8 lg:mt-0">
          <Image
            src="/images/dev-team.png"
            alt="Team photo"
            height={1000}
            width={1000}
            className="object-cover object-[30%] w-full h-full rounded-lg lg:rounded-none"
          />
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white bg-[#1c1c1c]/70 py-2 lg:py-4 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-[ticker_30s_linear_infinite] lg:gap-14">
          {[...Array(1)].map((_, i) => (
            <div key={i} className="flex justify-center items-center gap-20 ">
              {["WE HELP TO ACHIEVE", "WE DESIGN AND BUILD", "SOLUTIONS FOR YOUR BUSINESS"].map((text, index) => (
                <span key={index} className={`${saira.className} flex items-center gap-2 lg:gap-4 text-sm lg:text-xl tracking-wider text-white`}>
                  <span className="h-2 w-2 rounded-full bg-[#00FF9D]" />
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

