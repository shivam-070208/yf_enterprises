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

      <motion.div className='origin-center'>
        {children}
      </motion.div>
    </>
  );
};

export default LoaderInitiater;
