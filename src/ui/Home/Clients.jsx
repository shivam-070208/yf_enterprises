import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay } from 'swiper/modules';
// import { ChannelImage, ClientsImage } from '../../assets/logo';

  const ModernLogoCarousel = ({ title, subtitle, logos, bgColor = "bg-white" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 4;

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => 
          prev + itemsPerView >= logos.length ? 0 : prev + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }, [logos.length]);

    const nextSlide = () => {
      setCurrentIndex((prev) => 
        prev + itemsPerView >= logos.length ? 0 : prev + 1
      );
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => 
        prev <= 0 ? Math.max(0, logos.length - itemsPerView) : prev - 1
      );
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
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}
              >
                {logos.map((logo, index) => (
                  <div key={index} className="flex-shrink-0 w-1/4 p-8">
                    <div className="group relative">
                      {/* Logo Container */}
                      <div className="bg-white rounded-xl border-2 border-gray-100 p-6 h-32 flex items-center justify-center transition-all duration-300 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1">
                        <img
                          src={logo}
                          alt={`Logo ${index + 1}`}
                          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(logos.length / itemsPerView) }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    Math.floor(currentIndex / itemsPerView) === index
                      ? 'bg-orange-500 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentIndex(index * itemsPerView)}
                />
              ))}
            </div>
          </div>


        </div>
      </section>
    );
  };

export default ModernLogoCarousel;
