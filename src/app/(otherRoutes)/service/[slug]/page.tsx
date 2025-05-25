import { notFound } from "next/navigation"
import ServiceHero from "@/components/servicesDetails/ServiceHero"
import ServiceOverview from "@/components/servicesDetails/ServiceOverview"
import FeaturesShowcase from "@/components/servicesDetails/FeaturesShowCase"
import SocialProof from "@/components/servicesDetails/SocialProof"
import CTASection from "@/components/servicesDetails/CtaSection"
import { getServiceData, getAllServices } from "@/lib/servicesData"

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} | Premium Development Services`,
    description: service.heroDescription,
    openGraph: {
      title: service.title,
      description: service.heroDescription,
      images: [service.heroImage || "/og-default.jpg"],
    },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <ServiceHero service={service} />
      <ServiceOverview service={service} />
      <FeaturesShowcase service={service} />
      <SocialProof service={service} />
      <CTASection service={service} />
    </div>
  )
}
