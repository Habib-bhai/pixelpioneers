import React from 'react'
import { Saira} from "next/font/google"
import Image from 'next/image'
import { TeamSection } from '@/components/team/TeamSection'
import ContactCTA from '@/components/cta/ContactUsCta'
import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'

const saira = Saira({
    subsets: ["latin"],
    weight: ["400", "700"]
})
function AboutPage() {
    return (
        <div className=' min-w-screen min-h-screen '>

            {/* hero section of about */}
            <HeroBannerWithRouteName tagline='&quot;GET TO KNOW ABOUT PEXEL PIONEERS&quot;' pageName='About Us'/>

            {/* "unlock your potential" section */}
            <section className='mt-20 w-full flex flex-col juctify-center items-center gap-5 py-10'>
                {/* first heading and text */}
                <div>
                    <h1 className={`${saira.className} text-3xl font-bold mb-3 ml-[5%] md:ml-0`}>Our Approach</h1>
                    <p className={`${saira.className} text-xs text-gray-300 md:w-1/2 ml-[5%] md:ml-0`}>
                       We first collect client requirements, by multiple meetings, complete Our Research, finalize the requirements and milestones and ROCK THE WORK.
                    </p>
                </div>

                {/* second div, image and para(child div) */}
                <div className='flex md:flex-row flex-col justify-center items-center gap-5 '>

                    <Image src={"/images/potential.jpg"} alt='unlock your potential' width={500} height={500} className='object-cover h-80 w-80 ' />

                    {/* text content */}
                    <div className='mt-10 md:mt-0 flex flex-col justify-center items-center gap-2 w-full md:w-1/2'>

                        <h1 className={`${saira.className} w-full text-3xl md:text-4xl font-bold md:w-96 text-center mb-5`}>
                            Unlock the potential of your business.
                        </h1>

                        <p className={`${saira.className} text-start ml-[5%] md:ml-0  text-xs text-gray-300 md:w-72`}>
                            We believe in delivering tailored solutions that are designed to address your unique requirements. We take the time to understand your business and provide personalized services that align with your goals.
                        </p>

                        {/* the strip with dots */}
                        <div className="relative my-10 w-full h-[2px] bg-white/10">
                            {/* Left Dot */}
                            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00FF9D] border-[2px] border-white shadow-[0_0_10px_#00FF9D]" />

                            {/* Right Dot */}
                            <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00FF9D] border-[2px] border-white shadow-[0_0_10px_#00FF9D]" />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center place-content-center gap-5'>
                            <div className='col-span-1 flex flex-col justify-center items-center gap-3'>
                                <h3 className={`${saira.className} text-base font-bold text-center `}>Customized Solutions</h3>
                                <p className={`${saira.className} text-xs text-center md:w-48`}>
                                    We Bring your Ideas to life.
                                </p>
                            </div>

                            <div className='col-span-1 flex flex-col justify-center items-center gap-3'>
                                <h3 className={`${saira.className} text-base font-bold text-center`}>Quality Reliability</h3>
                                <p className={`${saira.className} text-xs text-center md:w-48`}>
                                    Your Success Our Priority, by ensuring ULTIMATE level quality
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <TeamSection/>
            <ContactCTA/>
        </div>
    )
}

export default AboutPage