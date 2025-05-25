"use client"

import * as React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/team/TeamCard"
import Autoplay from "embla-carousel-autoplay"
import { EmblaCarouselType } from "embla-carousel"
import { AnimatedTestimonials } from "../ui/animated-testimonials"
// Team member data


// quote: string;
//   name: string;
//   designation: string;
//   src: string


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

const testimonial = [
    {
    name:"HABIB",
    quote: "The Founding Father And Brain of the Company. Who strategize plan and Keeps the company on the progress track",
    designation: "CEO",
    src: "/images/habib.jpg"
},
    {
    name:"IBAD",
    quote: "The CTO, who looks after our tech stacks and over all technologies in all the projects.",
    designation: "CTO",
    src: "/images/pexels1.jpg"
},
    {
    name:"AUNT JUDY",
    quote: "She is the one and only Marketing Executive at PEXEL PIONEERs, she has took our sales to a sky rocketing levels. ",
    designation: "Marketing Executive",
    src: "/images/contact.jpg"
},
    {
    name:"Anees",
    quote: "The man behind Every operation in our Company, he make sures every operation process goes like a well oiled machine. ",
    designation: "COO",
    src: "/images/aipower.jpg"
},

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
                    {/* <Carousel
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
                    </Carousel> */}


                            
                    <AnimatedTestimonials testimonials={testimonial} />


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

