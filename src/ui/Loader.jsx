import React from 'react'
import { Giflogo } from '../assets'
  const Loader = () => {
  return (
    <div className='w-screen h-screen fixed top-0 flex items-center justify-center  bg-orange-600 left-0 z-[999] '>
        <img src={Giflogo} alt="LogoLoader" />
    </div>
  )
}

export default Loader
