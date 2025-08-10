import React, { createContext, useContext, useEffect, useState } from 'react';
import { preloadImages } from '../utils/performance';

const PerformanceContext = createContext({
  imagesPreloaded: false,
  setImagesPreloaded: () => {},
});

export const PerformanceProvider = ({ children, imagesToPreload = [] }) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const success = await preloadImages(imagesToPreload);
      setImagesPreloaded(success);
    };

    if (imagesToPreload.length > 0) {
      loadImages();
    } else {
      setImagesPreloaded(true);
    }
  }, [imagesToPreload]);

  return (
    <PerformanceContext.Provider value={{ imagesPreloaded, setImagesPreloaded }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (!context) {
    throw new Error('usePerformance must be used within a PerformanceProvider');
  }
  return context;
};
