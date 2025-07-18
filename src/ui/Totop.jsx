import { useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const Totop = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(latest);
  });

  const degree = progress * 360;

  return (
    <div className='fixed bottom-8 right-8 w-14 h-14 z-50'>
      <div className='relative w-full h-full p-1'>
        <div
          className='absolute top-0 left-0 w-full h-full rounded-full'
          style={{
            background: `conic-gradient(from 0deg,#f97316 ${degree||0}deg, #fff ${degree||0}deg)`,
          }}
        ></div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='w-full h-full rounded-full z-10 relative bg-white grid place-items-center text-orange-500'
        >
          <BiArrowToTop size={28} />
        </button>
      </div>
    </div>
  );
};

export default Totop;
