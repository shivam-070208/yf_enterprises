import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../ui/Loader';
import Totop from '../ui/Totop';

const LoaderInitiater = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // simulate loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);



  return (
    <>
      {loading && <Loader />}

      <motion.div className=''>
         {!loading && <Totop />}
        {children}
      </motion.div>
    </>
  );
};

export default LoaderInitiater;
