import Image from 'next/image'
import React from 'react'
import { Saira } from "next/font/google"

const saira = Saira({
    subsets: ["latin"],
    weight: ["400", "700"]
})

export default function HeroBannerWithRouteName({ pageName, tagline }: { pageName: string, tagline: string }) {
    return (
        <section className='h-[25rem] md:h-[20rem]  w-full flex flex-col justify-center items-center bg-gradient-to-br md:bg-gradient-to-r from-[#234b3b] md:from-[#1a372c]/30 via-[#1d1d1d] md:to-[#1a372c]/30  gap-5 relative'>

            {/* particle images */}
            <Image src={"/images/about-hero-particle.jpg"} alt='about-hero-particle' width={200} height={200} className='hidden md:block object-cover h-40 opacity-70 w-32 absolute left-12 top-1/4 rounded-t-full rounded-b-full ' />

            <Image src={"/images/about-hero-particle-2.jpg"} alt='about-hero-particle' width={200} height={200} className='hidden md:block object-cover h-32 w-40 absolute opacity-70 right-16 bottom-0 rounded-t-full' />

            {/*page name box  */}
            <div className={`${saira.className} text-gray-400 bg-[#184232] h-8 px-5 py-2  text-xs flex justify-center items-center gap-3`}>
                <div className='h-2 w-2 rounded-full bg-white' />
                {pageName}
                <div className='h-2 w-2 rounded-full bg-white' />
            </div>

            <h1 className={`${saira.className} text-3xl font-bold text-center`}>{tagline}</h1>

            <div className={`${saira.className}  text-xs flex justify-center items-center gap-2`}>
                <span className='text-emerald-500'>HOME</span>
                <span>{`-->`}</span>
                {pageName}
            </div>

        </section>
    )
}
