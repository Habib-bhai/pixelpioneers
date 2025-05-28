import { Building2, FileText, LayoutList, LifeBuoy, Monitor, Plug, ShoppingCart, UploadCloud } from "lucide-react"
import { useState, useEffect } from "react"

const services = [
    { icon: LayoutList, title: "Custom Web Application Development", description: "Tailored solutions to meet specific business needs. We create web applications that are scalable, secure, and user-friendly.", number: "01" },

    { icon: FileText, title: "Headless CMS Integration", description: "Flexible content management with systems like Sanity. We integrate headless CMS solutions to provide a robust backend for your content, allowing for easy updates and management.", number: "02" },

    { icon: Building2, title: "Enterprise Application Development", description: "Robust applications designed for large-scale operations. We specialize in building enterprise-level software that enhances productivity and efficiency.", number: "03" },

    { icon: ShoppingCart, title: "E-Commerce Solutions", description: "Feature-rich online stores with secure payment integrations. We develop custom e-commerce platforms that provide seamless shopping experiences and drive sales.", number: "04" },

    { icon: Plug, title: "API Development & Integration", description: "Connect front-end interfaces with robust back-end services. We build and integrate APIs that enable smooth communication between different backend components and frontends, enhancing functionality and user experience.", number: "05" },

    { icon: UploadCloud, title: "Migration & Upgradation Services", description: "Smooth transition from legacy systems to modern MERN-based applications. We ensure a seamless migration process, preserving data integrity and minimizing downtime.", number: "06" },

    { icon: Monitor, title: "Single Page Applications (SPAs)", description: "Interactive SPAs for enhanced user experiences. We create SPAs that load quickly and provide a smooth, app-like experience, improving user engagement and satisfaction.", number: "07" },

    { icon: LifeBuoy, title: "Maintenance, Debugging & Support", description: "Ongoing support to ensure application stability and performance. We provide continuous maintenance and support services to keep your applications running smoothly, addressing any issues promptly.", number: "08" }
]

export default function ServicesComponent() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        // eslint-disable-next-line
        const handleMouseMove = (e: any) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className="bg-black mb-32 text-white flex flex-col justify-center items-center w-screen overflow-x-hidden relative">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(48, 105, 101, 0.3) 0%, transparent 50%)`,
                    transition: 'background-image 0.3s ease'
                }} />
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(90deg, transparent 98%, rgba(48, 105, 101, 0.5) 100%), linear-gradient(0deg, transparent 98%, rgba(48, 105, 101, 0.5) 100%)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-40 animate-pulse"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: '3s'
                        }}
                    />
                ))}
            </div>

            <h1 className="text-5xl text-start mb-20 relative z-10 bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent font-bold md:font-extrabold">
                Development Services
            </h1>

            {/*cards */}
            <div className="flex justify-center items-center flex-wrap gap-[108px] relative z-10">
                {services.map((service, index) => (
                    <Card 
                        key={index}
                        color={index % 2 === 0 ? "#306965" : "#101010"}
                        service={service}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}
        // eslint-disable-next-line
function Card({ color, service, index }: { color: string, service: any, index: number }) {
    const [isHovered, setIsHovered] = useState(false)
    const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 })

        // eslint-disable-next-line
    const handleMouseMove = (e:any) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setGlowPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    const Icon = service.icon

    return (
        <div 
            className={`group -mb-12 px-3 w-96  h-[480px] relative border-2 border-gray-700/30 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-500 hover:scale-105 hover:border-emerald-400/50`}
            style={{ 
                backgroundColor: color,
                animationDelay: `${index * 0.1}s`
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {/* Hover glow effect */}
            {isHovered && (
                <div 
                    className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(300px circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(48, 105, 101, 0.4), transparent 40%)`
                    }}
                />
            )}

            {/* Enhanced corner decorations */}
            <div className="z-20 h-4 w-4 bg-gradient-to-br from-emerald-400 to-emerald-600 absolute -top-2 -right-2 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            <div className="z-10 h-8 w-[1px] bg-gradient-to-b from-emerald-400/60 to-transparent absolute -top-8 right-0 group-hover:from-emerald-300 transition-colors duration-300" />
            <div className="z-10 h-[1px] w-14 bg-gradient-to-r from-emerald-400/60 to-transparent absolute top-0 -right-14 group-hover:from-emerald-300 transition-colors duration-300" />
            
            <div className="z-20 h-4 w-4 bg-gradient-to-br from-emerald-400 to-emerald-600 absolute -top-2 -left-2 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            <div className="z-10 h-8 w-[1px] bg-gradient-to-b from-emerald-400/60 to-transparent absolute -top-8 left-0 group-hover:from-emerald-300 transition-colors duration-300" />
            <div className="z-10 h-[1px] w-14 bg-gradient-to-l from-emerald-400/60 to-transparent absolute top-0 -left-14 group-hover:from-emerald-300 transition-colors duration-300" />

            <div className="z-20 h-4 w-4 bg-gradient-to-br from-emerald-400 to-emerald-600 absolute -bottom-2 -right-2 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            <div className="z-10 h-8 w-[1px] bg-gradient-to-t from-emerald-400/60 to-transparent absolute -bottom-8 right-0 group-hover:from-emerald-300 transition-colors duration-300" />
            <div className="z-10 h-[1px] w-14 bg-gradient-to-r from-emerald-400/60 to-transparent absolute bottom-0 -right-14 group-hover:from-emerald-300 transition-colors duration-300" />

            <div className="z-20 h-4 w-4 bg-gradient-to-br from-emerald-400 to-emerald-600 absolute -bottom-2 -left-2 transform rotate-45 group-hover:rotate-90 transition-transform duration-300" />
            <div className="z-10 h-8 w-[1px] bg-gradient-to-t from-emerald-400/60 to-transparent absolute -bottom-8 left-0 group-hover:from-emerald-300 transition-colors duration-300" />
            <div className="z-10 h-[1px] w-14 bg-gradient-to-l from-emerald-400/60 to-transparent absolute bottom-0 -left-14 group-hover:from-emerald-300 transition-colors duration-300" />

            {/* Animated border effect */}
            <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-emerald-400/0 via-emerald-400/50 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                 style={{ 
                     backgroundSize: '200% 100%',
                     animation: isHovered ? 'shimmer 2s ease-in-out infinite' : 'none'
                 }} 
            />

            {/* Content with enhanced animations */}
            <div className="relative z-30">
                <div className="relative mb-7">
                    <Icon className="h-20 w-20 text-emerald-400 group-hover:text-emerald-300 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg" 
                         style={{ filter: isHovered ? 'drop-shadow(0 0 10px rgba(52, 211, 153, 0.5))' : 'none' }} />
                    
                    {/* Icon glow effect */}
                    {isHovered && (
                        <div className="absolute inset-0 h-20 w-20 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
                    )}
                </div>

                <h2 className="text-2xl font-extrabold mb-4 group-hover:text-emerald-100 transition-colors duration-300 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-emerald-100 group-hover:to-white">
                    {service.title}
                </h2>

                <p className="text-center mb-10 text-gray-300 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                    {service.description}
                </p>

                <div className="relative">
                    <p className="text-xl font-bold italic text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300 group-hover:scale-110 transform">
                        {service.number}
                    </p>
                    
                    {/* Number glow effect */}
                    {isHovered && (
                        <div className="absolute inset-0 text-xl font-bold italic text-emerald-400/30 blur-sm animate-pulse">
                            {service.number}
                        </div>
                    )}
                </div>
            </div>

            {/* CSS for shimmer animation */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </div>
    )
}