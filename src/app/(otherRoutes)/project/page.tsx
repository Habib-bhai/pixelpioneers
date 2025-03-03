import HeroBannerWithRouteName from '@/components/Banner/HeroBannerWithRouteName'
import ProjectsSection from '@/components/project/ProjectSection'
import React from 'react'

function ProjectPage() {
  return (
    <div className='min-h-screen min-w-screen bg-black'>
        <HeroBannerWithRouteName tagline='Our Completed Projects' pageName='Projects'/>
        <ProjectsSection/>
    </div>
  )
}

export default ProjectPage