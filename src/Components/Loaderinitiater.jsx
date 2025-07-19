import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../ui/Loader';

const LoaderInitiater = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // simulate loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Disable body scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader />}

      <motion.div
        className=' overflow-hidden origin-center'
        initial={{ width:'0px',height:'0px', filter: 'blur(30px)', rotateZ: '45deg' }}
        animate={{
         width: loading ? '0px' : '100%',
         height:loading?'0px':'100%',
          filter: loading ? 'blur(30px)' : 'blur(0px)',
          rotateZ: loading ? '45deg' : '0deg',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
       
      >
        {children}
      </motion.div>
    </>
  );
};

export default LoaderInitiater;
