"use client"

import { useRef } from "react"
import { ServiceCard } from "./ServiceCard"
import { Code, Cloud, Shield, Database, AppWindow, Share2 } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const services = [
  {
    icon: <Code className="w-full h-full" />,
    title: "Web Development",
    description:
      "Web development is the process of creating websites and web applications for the internet or intranet.",
  },
  {
    icon: <Cloud className="w-full h-full" />,
    title: "Cloud Solutions",
    description:
      "Cloud solutions refer to the use of cloud computing technology to provide services and solutions over the internet.",
  },
  {
    icon: <Shield className="w-full h-full" />,
    title: "Cyber Security",
    description:
      "Cybersecurity refers to the protection of computer systems, networks, and data from theft, damage, or unauthorized access.",
  },
  {
    icon: <Database className="w-full h-full" />,
    title: "Data Analytic",
    description:
      "Data analytics refers to the process of examining and interpreting large datasets to extract insights and draw conclusions.",
  },
  {
    icon: <AppWindow className="w-full h-full" />,
    title: "Software Development",
    description:
      "Software development is the process of creating computer software programs that perform specific functions or tasks.",
  },
  {
    icon: <Share2 className="w-full h-full" />,
    title: "Digital Marketing",
    description:
      "Digital marketing refers to the use of digital channels and technologies to promote products, services, or brands.",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 border border-emerald-500 px-4 py-2 mb-4 transition-all duration-700 transform
              ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-sm tracking-wider text-white">SOLUTIONS WE OFFER</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-white transition-all duration-700 delay-200 transform
              ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Services & Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-700 transform
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
