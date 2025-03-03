"use client"
import React, { useRef } from 'react'
import { CaseStudyCard } from './CaseStudyCard'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'


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

function CaseStudyCardSection() {

    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useIntersectionObserver(sectionRef)

    return (
        <section ref={sectionRef} className='w-full py-20'>
            {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.title} {...study} isInView={isInView} index={index} />
            ))}
        </section>
    )
}

export default CaseStudyCardSection