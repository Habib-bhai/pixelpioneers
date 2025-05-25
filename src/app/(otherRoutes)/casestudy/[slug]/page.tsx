import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'
import React from 'react'
import Image from 'next/image'
import ProcessSteps from '@/components/the-process/ProcessSteps'
import { Saira } from "next/font/google"

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
                <div className='my-20 w-full flex md:flex-row flex-col justify-center items-center gap-10 '>
                    {/* text */}
                    <div className={`${saira.className} flex flex-col `}>
                        <h2 className='text-2xl font-bold mb-4 text-center md:text-start'>Overview</h2>
                        <p className='text-xs text-gray-400 md:w-96 tracking-widest px-4 md:px-0 text-center md:text-start'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin.
                            <br />
                            <br />

                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus pellentesque quis magna eu vestibulum.
                        </p>
                    </div>

                    <Image src={"/images/casestudyDetailsPage/case-study-img-02.png"} alt='sub image' height={500} width={500} className={`object-cover h-[300px] w-[400px] rounded-lg mb-5`} />
                </div>

                {/* solution with image */}
                <div className='w-full flex md:flex-row flex-col justify-center items-center gap-10'>

                    <Image src={"/images/casestudyDetailsPage/case-study-img-03.png"} alt='sub image' height={500} width={500} className={`object-cover h-[300px] w-[400px] rounded-lg mb-5`} />

                    {/* text */}
                    <div className={`${saira.className} flex flex-col`}>
                        <h2 className=' text-center md:text-start text-2xl font-bold mb-4'>Solution</h2>
                        <p className='text-xs text-gray-400 md:w-96 tracking-widest px-4 md:px-0 text-center md:text-start'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus pellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin.
                            <br />
                            <br />

                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque purus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus pellentesque quis magna eu vestibulum.
                        </p>
                    </div>

                </div>

                {/* "process" a small para and cards showing the steps taken to compete with the problem.  */}
                <div className='my-20 w-full flex flex-col justify-center items-center'>

                        {/* heading and small overview */}
                        <div className={`${saira.className} w-full px-[10%]`}>
                            <h1 className='text-3xl font-bold mb-5'>Process</h1>
                            <p className='text-xs text-gray-400  tracking-widest px-4 md:px-0 text-center md:text-start'>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula nl pellentesque quis magna eu vestibulum. Ut sed Vivamus vehicula noted by thi ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin.</p>
                        </div>

                        <ProcessSteps />
                </div>

            </div>
        </div>
    )
}

export default CaseStudyDetailPage




