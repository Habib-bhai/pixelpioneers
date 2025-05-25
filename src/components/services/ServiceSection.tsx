"use client"

import { useRef } from "react"
import { ServiceCard } from "./ServiceCard"  
import {  LayoutList, Building2, ShoppingCart, UploadCloud, Plug, Monitor, LifeBuoy, FileText } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const services = [
  {
    icon: <LayoutList className="w-full h-full" />,
    title: "Custom Web Application Development",
    description:
      "Tailored solutions to meet specific business needs. We create web applications that are scalable, secure, and user-friendly.",
  },
  {
    icon: <FileText className="w-full h-full" />,
    title: "Headless CMS Integration",
    description:
      "Flexible content management with systems like Sanity. We integrate headless CMS solutions to provide a robust backend for your content, allowing for easy updates and management.",
  },
  {
    icon: <Building2 className="w-full h-full" />,
    title: "Enterprise Application Development",
    description:
      "Robust applications designed for large-scale operations. We specialize in building enterprise-level software that enhances productivity and efficiency.",
  },
  {
    icon: <ShoppingCart className="w-full h-full" />,
    title: "E-Commerce Solutions",
    description:
      "Feature-rich online stores with secure payment integrations. We develop custom e-commerce platforms that provide seamless shopping experiences and drive sales.",
  },
  {
    icon: <Plug className="w-full h-full" />,
    title: "API Development & Integration",
    description:
      "Connect front-end interfaces with robust back-end services. We build and integrate APIs that enable smooth communication between different backend components and frontends, enhancing functionality and user experience.",
  },
  {
    icon: <UploadCloud className="w-full h-full" />,
    title: "Migration & Upgradation Services",
    description:
      "Smooth transition from legacy systems to modern MERN-based applications. We ensure a seamless migration process, preserving data integrity and minimizing downtime.",
  },
  {
    icon: <Monitor className="w-full h-full" />,
    title: "Single Page Applications (SPAs)",
    description:
      "Interactive SPAs for enhanced user experiences. We create SPAs that load quickly and provide a smooth, app-like experience, improving user engagement and satisfaction.",
  },
  {
    icon: <LifeBuoy className="w-full h-full" />,
    title: "Maintenance, Debugging & Support",
    description:
      "Ongoing support to ensure application stability and performance. We provide continuous maintenance and support services to keep your applications running smoothly, addressing any issues promptly.",
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

