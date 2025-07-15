import {  motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import Loader from '../ui/Loader'

const Loaderinitiater = ({children}) => {
    const [loading,setloading] = useState(true)
    useEffect(()=>{
        setloading(true)
      const timeout=  setTimeout(() => {
            setloading(false)
        }, 2000);
       return(()=>{
        clearTimeout(timeout)
       })
    },[children])
  return (
    <>
      {loading?(
        <Loader />
      ):(
        <motion.div className='w-full h-full overflow-hidden' initial={{scale:0,filter:'blur(30px)'}} animate={{scale:1.0,filter:'blur(0px)'}} transition={{duration:0.8}}>{children}</motion.div>
      )

      }
    </>
  )
}

export default Loaderinitiater
