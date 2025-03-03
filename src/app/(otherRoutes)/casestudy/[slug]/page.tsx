import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'
import React from 'react'
import { Saira } from "next/font/google"
import Image from 'next/image'

const saira = Saira({
    subsets: ["latin"],
    weight: ["400", "700"]
})
function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
    return (
        <div className='min-w-screen min-h-screen bg-black'>
            <HeroBannerWithRouteName pageName='Case Study Detail' tagline={params.slug} />
            <div className='py-20 w-full flex flex-col justify-center items-center'>

                <h1 className={`${saira.className} mb-10 font-bold text-3xl`}>
                    {params.slug}
                </h1>

                <Image src={"/images/casestudyDetailsPage/image-detail.png"} alt='main image' height={500} width={500} className='object-cover h-[400px] w-[80%]' />

                <p className={`${saira.className} mx-auto text-sm w-[70%] text-center my-10 text-gray-400`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quis facilis. Omnis, eligendi officia magni accusamus vitae aliquam voluptatum error repudiandae earum tenetur aut, maxime quaerat vero a ipsum porro.</p>

                {/* detailed overview with image */}
                <div className='w-full flex'>
                    {/* text */}
                    <div className={`${saira.className} flex flex-col gap-3`}>
                        <h2 className='text-2xl font-bold'>Overview</h2>
                        <p className='text-xs text-gray-400'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin.

                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus pellentesque quis magna eu vestibulum.
                        </p>
                    </div>
                </div>

                {/* solution with image */}


                {/* process a small para and cards showing the steps taken to compete with the problem.  */}
            </div>
        </div>
    )
}

export default CaseStudyDetailPage