import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Totop = () => {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/product');

  const whatsappButtonClasses = `fixed ${
    isProductPage ? 'bottom-25 right-8' : 'bottom-8 right-8'
  } w-14 h-14 z-9999`;

  return (
    <>
      <button
        aria-label="Whatsapp"
        className={whatsappButtonClasses}
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
          <FaPhoneAlt className='w-5 h-5 '/>
        </a>
      </button>
    </>
  );
};

export default Totop;

