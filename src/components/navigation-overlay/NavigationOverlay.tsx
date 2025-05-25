"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Plus, Twitter, PinIcon as Pinterest, Instagram } from "lucide-react"
import Link from "next/link"


interface NavigationOverlayProps {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const menuItems = ["HOME", "ABOUT", "SERVICE", "PROJECT", "CASESTUDY", "CONTACT"]

export default function NavigationOverlay({ isOpen, setIsOpen }: NavigationOverlayProps) {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-black"
        >

          {/* Social Links */}
          <div className=" fixed right-2 lg:right-[2.5%] xl:right-[1%]  top-[40%] z-30 -translate-y-1/2 lg:flex flex-col space-y-6 lg:space-y-8">
            {[Facebook, Twitter, Pinterest, Instagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                <Icon className="h-8 w-8" />
              </motion.a>
            ))}
          </div>
          <div className="relative flex h-full">
            {/* Background Text - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="text-right mr-10">
                <div className="text-[200px] font-bold leading-none">Explore</div>
                <div className="text-[200px] font-bold leading-none">Pioneers.</div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <nav className="z-10 flex items-center px-6 lg:px-20 w-full lg:w-auto">
              <div className="space-y-7 w-full lg:w-auto">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group"
                  >
                    <Link  onClick={()=> setIsOpen(false)} href={`${item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}`}>
                      <button className="flex items-center gap-4 text-2xl lg:text-3xl font-bold">
                        <span className="relative">
                          {item}
                          <span className="absolute inset-0 text-transparent [-webkit-text-stroke:1px_white] group-hover:text-white transition-colors duration-300">
                            {item}
                          </span>
                        </span>
                        <Plus className="h-6 w-6 transition-transform group-hover:rotate-45 duration-300" />
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

