import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'
import CaseStudyCardSection from '@/components/case-study/CaseStudyCardSection'
import React from 'react'

function CaseStudyPage() {
    return (
        <div className='min-w-screen min-h-screen'>
            <HeroBannerWithRouteName tagline='From Challenge to Triumph' pageName='Case Studies' />

            <CaseStudyCardSection />

        </div>
    )
}

export default CaseStudyPage