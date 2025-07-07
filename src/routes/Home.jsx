import React from 'react'
import { AboutSection, HeroSection, ProductCarousel, ServicesCarousel } from '../ui/Home'
import { Bglayer } from '../ui'
import PortfolioSection from '../ui/Home/Portfolio'


function Home() {
  return (
    <div className='bg-transparent'>
        
      <HeroSection />
      <AboutSection />
       <ServicesCarousel />
       <PortfolioSection />
       <ProductCarousel />
    </div>
  )
}

export default Home
