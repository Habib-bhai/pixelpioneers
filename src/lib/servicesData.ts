export interface Service {
  slug: string
  title: string
  tagline: string
  heroDescription: string
  heroImage?: string
  painPoints: string[]
  solutions: string[]
  features: Feature[]
  process: ProcessStep[]
  technologies: string[]
  pricing: {
    starting: number
    average: number
    enterprise: string
  }
  testimonials: Testimonial[]
  caseStudies: CaseStudy[]
  faqs: FAQ[]
  metrics: {
    projects: number
    clients: number
    successRate: number
  }
}

export interface Feature {
  title: string
  description: string
  icon: string
  metrics: string
}

export interface ProcessStep {
  step: number
  title: string
  duration: string
  description: string
}

export interface Testimonial {
  quote: string
  client: string
  position: string
  avatar: string
  rating: number
  results: string
}

export interface CaseStudy {
  title: string
  client: string
  challenge: string
  solution: string
  results: string[]
  image: string
  link: string
}

export interface FAQ {
  question: string
  answer: string
}

const servicesData: Service[] = [
  {
    slug: "custom-web-development",
    title: "Custom Web Development",
    tagline: "Transform Your Vision Into Digital Reality",
    heroDescription:
      "We build lightning-fast, conversion-optimized websites that dominate your competition and drive results.",
    heroImage: "/placeholder.svg?height=600&width=800",
    painPoints: ["Slow loading websites", "Poor mobile experience", "Low conversion rates"],
    solutions: ["99% speed optimization", "Mobile-first design", "Conversion-focused UX"],
    features: [
      {
        title: "Performance Optimization",
        description: "Lightning-fast load times under 2 seconds",
        icon: "⚡",
        metrics: "300% faster than industry average",
      },
      {
        title: "Mobile-First Design",
        description: "Responsive designs that work perfectly on all devices",
        icon: "📱",
        metrics: "100% mobile compatibility",
      },
      {
        title: "SEO Optimization",
        description: "Built-in SEO best practices for maximum visibility",
        icon: "🚀",
        metrics: "Average 250% increase in organic traffic",
      },
    ],
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        duration: "1-2 weeks",
        description: "Deep dive into your business goals and requirements",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        duration: "2-3 weeks",
        description: "Create stunning designs and interactive prototypes",
      },
      {
        step: 3,
        title: "Development & Testing",
        duration: "4-6 weeks",
        description: "Build and rigorously test your application",
      },
      {
        step: 4,
        title: "Launch & Optimization",
        duration: "1 week",
        description: "Deploy and optimize for peak performance",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    pricing: {
      starting: 5000,
      average: 15000,
      enterprise: "Custom",
    },
    testimonials: [
      {
        quote: "Our conversion rate increased by 340% after the redesign. The ROI was incredible.",
        client: "Sarah Johnson",
        position: "CEO, TechStart Inc.",
        avatar: "/placeholder.svg?height=60&width=60",
        rating: 5,
        results: "340% increase in conversions",
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Transformation",
        client: "RetailTech Co.",
        challenge: "Poor mobile experience causing 60% cart abandonment",
        solution: "Mobile-first redesign with optimized checkout flow",
        results: ["80% reduction in cart abandonment", "$2.3M additional revenue"],
        image: "/placeholder.svg?height=300&width=400",
        link: "/case-studies/retailtech-transformation",
      },
    ],
    faqs: [
      {
        question: "How long does a typical project take?",
        answer: "Most projects are completed within 6-12 weeks, depending on complexity and scope.",
      },
    ],
    metrics: {
      projects: 500,
      clients: 200,
      successRate: 99,
    },
  },
]

export function getAllServices(): Service[] {
  return servicesData
}

export function getServiceData(slug: string): Service | null {
  return servicesData.find((service) => service.slug === slug) || null
}
