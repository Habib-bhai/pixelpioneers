"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Play } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import Image from "next/image"

export default function AnimatedSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const circleRef = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useIntersectionObserver(sectionRef)

    const handleMouseMove = (e: React.MouseEvent) => {
        if (circleRef.current) {
            const rect = circleRef.current.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const moveX = (e.clientX - centerX) * 0.05
            const moveY = (e.clientY - centerY) * 0.05

            setMousePosition({ x: moveX, y: moveY })
        }
    }

    return (
        <section
            ref={sectionRef}
            className={`w-full min-h-screen bg-black text-white py-16 px-4 md:px-8 transition-all duration-1000 transform
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
                {/* Text Content */}
                <div
                    className={`flex-1 space-y-8 transition-all duration-1000 delay-300 transform
          ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                >
                    <div className="inline-flex items-center gap-2 border border-emerald-500 px-4 py-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-sm tracking-wider">OUR VALUES & CULTURE</span>
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold">Who We Are</h1>

                    <p className="text-gray-400 text-lg">
                        Morbi interdum pellentesque nunc, luctus pretium nulla luctus at. Aliquam cursus nunc arcu, condimentum
                        efficitur tellus iaculis faucibus. Quisque gravida vel magna quis aliquam. Nam semper posuere risus, a
                        gravida sapien tincidunt ac. Nam ac lacinia arcu. Aliquam erat volutpat. Curabitur consectetur nisi.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {["Creative Strategy", "Unique Production", "Rebranding Design", "Corporate Identity"].map((item, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 transition-all duration-700 transform
                  ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                                style={{ transitionDelay: `${500 + i * 100}ms` }}
                            >
                                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                <span className="text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-400">
                        Morbi interdum pellentesque nunc, luctus pretium nulla luctus at. Aliquam cursus nunc arcu, condimentum
                        efficitur tellus iaculis faucibus. Quisque gravida vel magna quis aliquam. Nam semper posuere risus.
                    </p>
                </div>

                {/* Image Content */}
                <div
                    className={`flex-1 relative transition-all duration-1000 delay-500 transform
            ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
                    onMouseMove={handleMouseMove}
                >
                    <div className="w-screen sm:w-96 h-96  rounded-2xl overflow-hidden">
                        <Image
                            src="/images/pexels3.jpg"
                            fill
                            alt="Team working in office"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    <div
                        ref={circleRef}
                        className={`hidden md:block absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full overflow-hidden 
              transition-all duration-500 ease-out
              ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                        style={{
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) ${!isInView ? "scale(0.5)" : "scale(1)"}`,
                            transitionDelay: "800ms",
                        }}
                    >
                        <Image
                            fill
                            src="/images/pexels2.jpg"
                            alt="Circular team view"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                <Play className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

