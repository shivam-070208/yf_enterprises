import React from 'react'
import { Primarynav, Secondarynav, Smalltopnav } from '../ui'


function Navbar() {
  return (
    <div className='relative bg-white'>
      <Smalltopnav/>
      <Primarynav />
      <Secondarynav />
    </div>
  )
}

export default Navbar
