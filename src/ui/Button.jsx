import React from 'react'

import { Link } from 'react-router-dom'

const Button = ({ href, text, secondarycolor, primarycolor }) => {
  return (
    <Link
      to={href}
      className='inline-block animate-view origin-top'
    >
    <div  className={`py-3 rounded whitespace-nowrap text-white    group md:px-10 px-6 relative overflow-hidden ${primarycolor}`}>   
         <span className="relative font-bold z-10 h-fit w-fit inline-block overflow-hidden">
        <span className="block whitespace-nowrap transition-transform duration-300 group-hover:-translate-y-full">
          {text}
        </span>
        <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">
          {text}
        </span>
      </span>
      <div className=' z-10 ml-1 relative bottom-[3.5px] text-2xl inline-block'>
    &gt;

      </div>
      <div
        className={`absolute  w-2 h-2 rounded-full ${secondarycolor} -translate-x-1/2 -translate-y-1/2  z-0  -top-4 transition-all duration-700 group-hover:scale-[60]`}
      />
</div>
      
    </Link>
  )
}

export default Button