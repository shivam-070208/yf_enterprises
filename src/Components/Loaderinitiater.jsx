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
        <motion.div className='w-full h-full overflow-hidden origin-center' initial={{scale:0,filter:'blur(30px)',rotateZ:'45deg'}} animate={{scale:1.0,filter:'blur(0px)',rotateZ:'0deg'}} transition={{duration:0.4}}>{children}</motion.div>
      )

      }
    </>
  )
}

export default Loaderinitiater
