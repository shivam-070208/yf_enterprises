import React from 'react'
import { AboutSection, HeroSection } from '../ui/Home'
import { Bglayer } from '../ui'


function Home() {
  return (
    <div className='bg-transparent'>
         <Bglayer />
      <HeroSection />
      <AboutSection />
       
    </div>
  )
}

export default Home
