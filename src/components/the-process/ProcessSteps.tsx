import type React from "react"
import { Settings, Layout, TestTube2, Rocket } from "lucide-react"
import { Saira } from "next/font/google"

const saira = Saira({
    subsets: ["latin"],
    weight: ["400", "700"]
})

interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: "01",
    title: "Research",
    description: "Interdum et malesuada fames ac Etiam europeai nibh elementum, accumsan ona.",
    icon: <Settings className="w-4 h-4 text-gray-600 group-hover:text-emerald-500 transition-colors" />,
  },
  {
    number: "02",
    title: "Development",
    description: "Interdum et malesuada fames ac Etiam europeai nibh elementum, accumsan ona.",
    icon: <Layout className="w-4 h-4 text-gray-600 group-hover:text-emerald-500 transition-colors" />,
  },
  {
    number: "03",
    title: "Testing",
    description: "Interdum et malesuada fames ac Etiam europeai nibh elementum, accumsan ona.",
    icon: <TestTube2 className="w-4 h-4 text-gray-600 group-hover:text-emerald-500 transition-colors" />,
  },
  {
    number: "04",
    title: "Deploy",
    description: "Interdum et malesuada fames ac Etiam europeai nibh elementum, accumsan ona.",
    icon: <Rocket className="w-4 h-4 text-gray-600 group-hover:text-emerald-500 transition-colors" />,
  },
]

export default function ProcessSteps() {
  return (
    <div className="w-full bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative p-4 bg-gray-900/50 rounded-lg border border-gray-800 
                hover:border-emerald-500/50 transition-all duration-300
                hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
            >
              <div className="absolute top-4 right-4 ">{step.icon}</div>
              <div className="space-y-4">
                <span className="text-emerald-500 font-medium text-sm">Step {step.number}</span>
                <h3 className={`${saira.className} text-xl font-bold text-white`}>{step.title}</h3>
                <p className={`${saira.className} text-sm text-gray-400 leading-relaxed`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

