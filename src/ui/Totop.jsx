import React, { useState, useEffect } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

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
    <>
        <button
      aria-label="Scroll to top"
      className='fixed bottom-8 right-8 w-14 h-14 z-9999'
      onClick={() => document.querySelector('.root').scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className='relative w-14 h-14 p-1'>
        <div
          className='absolute top-0 left-0 w-14 h-14 rounded-full'
          style={{
            background: `conic-gradient(#f97316 ${progress * 360}deg, #fff ${progress * 360}deg)`,
          }}
        ></div>
        <div className='w-full  hover:text-white hover:bg-orange-500 transition-all duration-300  h-full cursor-pointer rounded-full z-10 relative bg-white grid place-items-center text-orange-500'>
          <BiArrowToTop size={28} />
        </div>
      </div>
    </button> 
    <button
      aria-label="Whatsapp"
      className='fixed bottom-30 right-8 w-14 h-14 z-9999'
      onClick={() => document.querySelector('.root').scrollTo({ top: 0, behavior: 'smooth' })}
    >
      
      <a href="https://wa.me/9748413152" className='w-full h-full cursor-pointer rounded-full hover:text-white hover:bg-orange-500 transition-all duration-300 z-10 relative bg-white grid place-items-center text-orange-500'>
      <FaWhatsapp className='w-10 h-10 '/>
      </a>
    </button>
    <button
      aria-label="Telephone"
      className='fixed bottom-8 left-8 w-14 h-14 z-999 '
      onClick={() => document.querySelector('.root').scrollTo({ top: 0, behavior: 'smooth' })}
    >

      <a href="tel:+919748413152" className='w-full h-full cursor-pointer rounded-full text-white bg-orange-500 transition-all duration-300 z-10 relative hover:bg-white grid place-items-center hover:text-orange-500'>
      <FaPhone className='w-5 h-5 '/>
      </a>
    </button>
    </>

  );
};

export default Totop;

