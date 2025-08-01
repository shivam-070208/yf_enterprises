import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const Totop = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = document.querySelector('.root');
          

    const handleScroll = () => {
     
      const scrollTop = root.scrollTop;
      const scrollHeight = root.scrollHeight - root.clientHeight;
      const progress = scrollTop / scrollHeight;
      setProgress(progress);
    };

    root.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      aria-label="Scroll to top"
      className='fixed bottom-8 right-8 w-14 h-14 z-50'
      onClick={() => document.querySelector('.root').scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className='relative w-14 h-14 p-1'>
        <div
          className='absolute top-0 left-0 w-14 h-14 rounded-full'
          style={{
            background: `conic-gradient(#f97316 ${progress * 360}deg, #fff ${progress * 360}deg)`,
          }}
        ></div>
        <div className='w-full h-full cursor-pointer rounded-full z-10 relative bg-white grid place-items-center text-orange-500'>
          <BiArrowToTop size={28} />
        </div>
      </div>
    </button>
  );
};

export default Totop;

