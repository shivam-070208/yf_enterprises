import React, { useEffect, useState, useRef } from 'react';

export const ModernLogoCarousel = ({ title, subtitle, logos, bgColor = "bg-white" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const itemsPerView = 4;
    const totalSlides = logos.length - (itemsPerView - 1);

    const interval = setInterval(() => {
      if (isLargeScreen) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      } else {
        scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length, isLargeScreen]);

  const nextSlide = () => {
    if (isLargeScreen) {
      const itemsPerView = 4;
      const totalSlides = logos.length - (itemsPerView - 1);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    } else {
      scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (isLargeScreen) {
      const itemsPerView = 4;
      const totalSlides = logos.length - (itemsPerView - 1);
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    } else {
      scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
              {subtitle}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-2">{title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 sm:p-3 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105"
              aria-label="Previous"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-2 sm:p-3 shadow-md transition-all duration-200 hover:shadow-xl hover:scale-105"
              aria-label="Next"
            >
              <svg className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
            <div
              ref={scrollRef}
              className={`flex transition-transform duration-500 ease-in-out ${
                isLargeScreen ? 'flex-nowrap' : 'overflow-x-auto scroll-smooth'
              } gap-4 p-4`}
              style={isLargeScreen ? { transform: `translateX(-${currentIndex * 25}%)` } : {}}
            >
              {logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  <div className="group relative">
                    <div className="bg-white rounded-xl border-2 border-gray-100 p-6 h-32 flex items-center justify-center transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1">
                      <img
                        src={logo || "https://placehold.co/100x60/f3f4f6/9ca3af?text=Logo"}
                        alt={`Logo ${index + 1}`}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/100x60/f3f4f6/9ca3af?text=Error";
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots for large screens */}
          {isLargeScreen && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: logos.length - 3 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentIndex === index
                      ? 'bg-orange-500 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
