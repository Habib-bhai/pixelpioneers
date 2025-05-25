"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

// Sample project data
const projects = [
    {
        id: 1,
        title: "The School",
        description: "Product Designed to Fill the Gap Between Schools, Students, Parents and Teachers",
        image: "/images/theschool.png",
        category: "Web Development",
        metrics: "Increased Efficiency in Manangement",
        link: "https://school-management-system-bro.vercel.app/",
    },
    {
        id: 2,
        title: "Custom E-Commerce",
        description: "Implemented a fully custom solution, created everything according to client's imagination.",
        image: "/images/ecomer.png",
        category: "Web Development",
        metrics: "User base grew by 25%",
        link: "https://milestone-3-ecommerce-website-ebon.vercel.app/",
    },
    {
        id: 3,
        title: "Askary Institute",
        description: "A language and IELTS institute website, helping them in their branding, students aquiring and conducting TESTS",
        image: "/images/aksari.png",
        category: "Web Development",
        metrics: "Increase in business, and testing process",
        link: "https://askary-institute-web.vercel.app/",
    },
    {
        id: 4,
        title: "Optimizing IT Operations",
        category: "Web Development",
        image: "/images/appdevsuccess.jpeg",
        link: "#",
    },
    {
        id: 5,
        title: "Maximizing Efficiency With DevOps",
        category: "Web Development",
        image: "/images/cloudinovation.jpg",
        link: "#",
    },
    {
        id: 6,
        title: "Implementing Robotic Process Automation",
        category: "Web Development",
        image: "/images/cybersecurity.jpg",
        link: "#",
    },
    {
        id: 7,
        title: "Cloud Infrastructure Solutions",
        category: "Web Development",
        image: "/images/aipower.jpg",
        link: "#",
    },
    {
        id: 8,
        title: "AI-Powered Development",
        category: "Web Development",
        image: "/images/sci-fi.jpg",
        link: "#",
    },
    {
        id: 9,
        title: "Blockchain Integration Services",
        category: "Web Development",
        image: "/images/cloud.jpg",
        link: "#",
    },
    {
        id: 10,
        title: "Optimizing IT Operations",
        category: "Web Development",
        image: "/images/appdevsuccess.jpeg",
        link: "#",
    },
    {
        id: 11,
        title: "Maximizing Efficiency With DevOps",
        category: "Web Development",
        image: "/images/cloudinovation.jpg",
        link: "#",
    },
    {
        id: 12,
        title: "Implementing Robotic Process Automation",
        category: "Web Development",
        image: "/images/cybersecurity.jpg",
        link: "#",
    },
    {
        id: 13,
        title: "Cloud Infrastructure Solutions",
        category: "Web Development",
        image: "/images/aipower.jpg",
        link: "#",
    },
    {
        id: 14,
        title: "AI-Powered Development",
        category: "Web Development",
        image: "/images/sci-fi.jpg",
        link: "#",
    },
    {
        id: 15,
        title: "Blockchain Integration Services",
        category: "Web Development",
        image: "/images/cloud.jpg",
        link: "#",
    },
]

const ITEMS_PER_PAGE = 3

export default function ProjectsSection() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

    // Get current projects
    const indexOfLastProject = currentPage * ITEMS_PER_PAGE
    const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject)

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <section className="py-20 w-full min-h-screen bg-black px-4 md:px-6">
            <div className="container mx-auto">
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {currentProjects.map((project) => (
                        <Link href={project.link!} key={project.id}>
                            <div  className="group relative">
                                {/* Project Image */}
                                <div className="relative h-[300px] w-full overflow-hidden">
                                    <Image src={project.image!} alt={project.title} fill className="object-cover" />
                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/60" />
                                </div>

                                {/* Project Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-emerald-500 text-sm mb-2 block">{project.category}</span>
                                            <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white transform transition-transform group-hover:rotate-45">
                                            <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center space-x-2 mt-12">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-emerald-500"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`w-7 h-7 flex items-center justify-center rounded-md text-white
                ${currentPage === index + 1 ? "bg-emerald-500" : "border border-gray-700 hover:border-emerald-500"}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:border-emerald-500"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    )
}

