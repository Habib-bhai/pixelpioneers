"use client"

import { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { CaseStudyCard } from "./CaseStudyCard" 
import { Button } from "@/components/ui/button"
import Link from "next/link"


const caseStudies = [
  {
    category: "Web Development",
    title: "Building A Scalable Cloud Infrastructure",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caseStudy-V1NX9u9MeXioTEmCACF0ydvMln0smS.png",
  },
  {
    category: "Software Development",
    title: "Leveraging Data Analytics For Business Insights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caseStudy-V1NX9u9MeXioTEmCACF0ydvMln0smS.png",
  },
]

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useIntersectionObserver(sectionRef)

  return (
    <section ref={sectionRef} className="w-full overflow-x-hidden bg-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16">
          <div className="space-y-4">
            {/*Case studies box  */}
            <div
              className={`inline-flex items-center gap-2 border border-emerald-500 px-4 py-2 transition-all duration-700 transform
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm tracking-wider text-white">CASE STUDY</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>

            <h2
              className={`text-4xl md:text-5xl font-bold text-white transition-all duration-700 delay-200 transform
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Success Stories
            </h2>
          </div>

          <Button
          asChild
            variant="outline"
            className={`transition-all duration-700 transform
              ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
           <Link href={"/casestudy"}> View All Case</Link>
          </Button>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.title} {...study} isInView={isInView} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

