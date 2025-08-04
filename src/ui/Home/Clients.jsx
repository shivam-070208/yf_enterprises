import React, { useEffect, useState } from 'react';

const ModernLogoCarousel = ({ title, subtitle, logos, bgColor = "bg-white" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 item
      } else if (window.innerWidth < 768) {
        setItemsPerView(2); // Small tablet: 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3); // Tablet: 3 items
      } else {
        setItemsPerView(4); // Desktop: 4 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-slide functionality - moves by itemsPerView but smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = logos.length - itemsPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length, itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = logos.length - itemsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = logos.length - itemsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  // Calculate how many complete slides we have
  const totalSlides = logos.length - itemsPerView + 1;

  return (
    <section className={`py-8 sm:py-12 lg:py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block">
            <span className="text-orange-500 font-bold text-xs sm:text-sm uppercase tracking-wider bg-orange-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              {subtitle}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-3 sm:mt-4 mb-2">
            {title}
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 items-center justify-center"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 items-center justify-center"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm border border-gray-100">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(logos.length * 100) / itemsPerView}%`
              }}
            >
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group relative p-3 sm:p-4 lg:p-6">
                    {/* Logo Container */}
                    <div className="bg-white rounded-lg sm:rounded-xl border-2 border-gray-100 p-4 sm:p-6 h-20 sm:h-24 lg:h-32 flex items-center justify-center transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1">
                      <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-3 sm:inset-4 lg:inset-6 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg sm:rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? 'bg-orange-500 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center mt-4 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Previous"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Next"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernLogoCarousel;
