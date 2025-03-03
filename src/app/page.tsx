"use client"
import { useEffect, useState } from "react"
import Header from "@/components/header/Header"
import Hero from "@/components/hero/Hero"
import NavigationOverlay from "@/components/navigation-overlay/NavigationOverlay"
import ValuesCulture from "@/components/values-and-culture/ValuesCulture"
import { useLoadingDelay } from "@/hooks/use-loading-delay"
import LoadingScreen from "@/components/loading-screen/LoadingScreen"
import ServicesSection from "@/components/services/ServiceSection"
import ProcessSection from "@/components/the-process/Process"
import CaseStudiesSection from "@/components/case-study/CaseStudySection"
import CreativeBanner from "@/components/Banner/CreativeBanner"
import SuccessStories from "@/components/successStories/SuccessStories"
import ContactUs from "@/components/contact/Contactus"
import OurExperts from "@/components/team/OurExperts"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isLoading = useLoadingDelay(1000) // 4 seconds minimum loading time
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null


  const dummyStories = [
    {
      title: "Project Alpha",
      description: "Transformed a legacy system into a modern cloud-based solution.",
      imageUrl: "/images/cloud.jpg",
      metrics: "Increased efficiency by 40%",
      link: "#",
    },
    {
      title: "Project Beta",
      description: "Developed a mobile app that boosted user engagement significantly.",
      imageUrl: "/images/appdevsuccess.jpeg",
      metrics: "User base grew by 25%",
      link: "#",
    },
    {
      title: "Project Gamma",
      description: "Implemented a new marketing strategy that doubled the conversion rate.",
      imageUrl: "/images/cybersecurity.jpg",
      metrics: "Conversion rate increased by 100%",
      link: "#",
    },
    {
      title: "Project Delta",
      description: "Created an AI-powered tool that reduced operational costs.",
      imageUrl: "/images/aipower.jpg",
      metrics: "Operational costs reduced by 30%",
      link: "#",
    },
    {
      title: "Project Epsilon",
      description: "Launched a new e-commerce platform that tripled sales.",
      imageUrl: "/images/cloudinovation.jpg",
      metrics: "Sales increased by 200%",
      link: "#",
    },
  ];


  return (
    <>
      {isLoading ? <LoadingScreen /> :
        <div className="w-screen bg-black text-white overflow-x-hidden">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <NavigationOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          <Hero />
          <ValuesCulture />
          <ServicesSection />
          <ProcessSection />
          <CaseStudiesSection />
          <CreativeBanner />
          <SuccessStories stories={dummyStories} />
          <ContactUs />
          <OurExperts />
          
        </div>

      }
    </>
  )

}