import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'
import ServicesSection from '@/components/services/ServiceSection'
import React from 'react'

function ServicePage() {
  return (
    <div className='min-w-screen min-h-screen bg-black'>
        <HeroBannerWithRouteName tagline='Our Providing Services' pageName='Services'/>
        <ServicesSection />
    </div>
  )
}

export default ServicePage