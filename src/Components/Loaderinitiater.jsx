import { motion, scale } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../ui/Loader';
import { s } from 'motion/react-m';
import productImages from '../assets/productImage';

const LoaderInitiater = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    // Preload all images from productImages array
    const preloadImages = () => {
      return Promise.all(
        productImages.map(src => {
          return new Promise(resolve => {
            const img = new window.Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve();
          });
        })
      );
    };

    // If you want to add other asset types, preload here (e.g., fonts, data)
    const preloadAllAssets = async () => {
      await preloadImages();
      // await preloadFonts(); // Example for fonts
      // await preloadData(); // Example for API/data
    };

    // Optionally, enforce a minimum loader time for smooth UX
    const MIN_LOADER_TIME = 1200; // ms
    const startTime = Date.now();

    preloadAllAssets().then(() => {
      const elapsed = Date.now() - startTime;
      if (elapsed < MIN_LOADER_TIME) {
        setTimeout(() => setLoading(false), MIN_LOADER_TIME - elapsed);
      } else {
        setLoading(false);
      }
    });
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
        initial={{transform:"scale(0)",duration: '0', filter: 'blur(30px)' }}

        animate={{
        //  width: loading ? '0px' : '100%',
        //  height:loading?'0px':'100%',
          transform: loading ? 'scale(0)' : 'scale(1)',
          filter: loading ? 'blur(30px)' : 'blur(0px)',
          duration: loading ? "0" : "0.4",
          // rotateZ: loading ? '0deg' : '0deg',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
       
      >
        {children}
      </motion.div>
    </>
  );
};

export default LoaderInitiater;
