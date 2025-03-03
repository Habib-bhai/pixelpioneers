"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactCTA() {
    return (
        <section className="bg-black py-20 relative min-h-[60vh] w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className=" h-full absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070")',
                }}
            >
                <div className="h-full absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

                <div
                    className="absolute top-0 rotate-180 left-0 right-0 h-[250px] bg-gradient-to-t from-black via-black/80 to-transparent"
                    style={{
                        maskImage: "linear-gradient(to top, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to top, black, transparent)",
                    }}
                />

                <div
                    className="absolute bottom-0  left-0 right-0 h-[250px] bg-gradient-to-t from-black via-black/80 to-transparent"
                    style={{
                        maskImage: "linear-gradient(to top, black, transparent)",
                        WebkitMaskImage: "linear-gradient(to top, black, transparent)",
                    }}
                />
            </div>

            {/* Scrolling Text */}
            <div className="absolute inset-x-0 top-20 overflow-hidden whitespace-nowrap">
                <div className="animate-scroll-left inline-block">
                    <span className="text-[60px] font-bold tracking-wider text-transparent opacity-30 stroke-text">
                        CAN FOCUS ON YOUR BUSINESS. WE TAKE CARE. CAN FOCUS ON YOUR BUSINESS. WE TAKE CARE.
                    </span>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex h-full min-h-[60vh] flex-col items-center justify-center px-4">
              

                {/* Contact Button */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <Link
                        href="/contact"
                        className="group relative flex h-32 w-32 items-center justify-center rounded-full bg-[#1a1a1a]  hover:scale-110 hover:bg-emerald-500 transition-all duration-300"
                    >
                        <div className="absolute inset-0 rounded-full border border-white/10" />
                        <div className="flex flex-col items-center space-y-1 text-white">
                            <span className="text-sm font-medium">Contact</span>
                            <span className="text-sm font-medium">With Us.</span>
                            <ArrowUpRight className="mt-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

