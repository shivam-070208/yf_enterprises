import React from 'react'

const Loader = () => {
  return (
    <div className='w-screen h-screen fixed top-0 grid place-items-center bg-orange-600 left-0 z-[999] '>
      <div className='loader w-40 h-40 rounded-full border-4 border-t-0 animate-spin border-neutral-300 flex items-center justify-center'>
        <div className='w-30 h-30 rounded-full border-t-4 border-white animate-spin'></div>
      </div>
    </div>
  )
}

export default Loader
