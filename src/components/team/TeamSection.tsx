"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/team/TeamCard"
import Autoplay from "embla-carousel-autoplay"
import { EmblaCarouselType } from "embla-carousel"
// Team member data
const teamMembers = [
    {
        id: 1,
        name: "Carter Jauden",
        position: "Co-Founder, CEO",
        image: "/images/member.jpg",
    },
    {
        id: 2,
        name: "Andrew Santiago",
        position: "Head of HR & Manager",
        image: "/images/member.jpg",
    },
    {
        id: 3,
        name: "George Lorenzo",
        position: "Software Engineer",
        image: "/images/member.jpg",
    },
    {
        id: 4,
        name: "Mateo Daniel",
        position: "Founder, CTO",
        image: "/images/member.jpg",
    },
    // Add more team members as needed
]

export function TeamSection() {
    const [api, setApi] = React.useState<EmblaCarouselType | undefined>(undefined)
    const [current, setCurrent] = React.useState(0)

    const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

    React.useEffect(() => {
        if (!api) return

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Team Members</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Services are professional offerings provided by businesses to meet specific needs or solve problems for
                        their customers. Services can range from your budget.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <Carousel
                        setApi={setApi}
                        plugins={[plugin.current]}
                        className="w-full"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                    >
                        <CarouselContent className="-ml-2 md:-ml-4">
                            {teamMembers.map((member) => (
                                <CarouselItem key={member.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                                    <Card member={member} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel>

                    {/* Custom Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {teamMembers.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${current === index ? "bg-[#00FF9D]" : "bg-white/20"
                                    }`}
                                onClick={() => api?.scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

