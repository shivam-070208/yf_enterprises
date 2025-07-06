import React from 'react'
import { AboutSection, HeroSection, ServicesCarousel } from '../ui/Home'
import { Bglayer } from '../ui'
import PortfolioSection from '../ui/Home/Portfolio'


function Home() {
  return (
    <div className='bg-transparent'>
         <Bglayer />
      <HeroSection />
      <AboutSection />
       <ServicesCarousel />
       <PortfolioSection />
    </div>
  )
}

export default Home
