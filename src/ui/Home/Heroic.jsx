


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules"; // Import Pagination
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import Swiper pagination CSS

import { useState } from "react";
import { FaTools, FaBatteryFull } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";

const slides = [
  {
    image: "https://html.themexriver.com/industo/images/gallery/1.jpg",
    heading: "India’s Trusted Source for UPS Solutions",
    subheading:
      "From AMC to battery sales, Y.F Enterprises supports industries with reliable, eco-friendly, and affordable power backup systems.",
  },
  {
    image: "https://html.themexriver.com/industo/images/gallery/1.jpg",
    heading: "Powering Critical Infrastructure Nationwide",
    subheading:
      "We serve sectors like manufacturing, pharma, and IT with UPS repair, rentals, and emergency support — 24x7 across India.",
  },
];

const cards = [
  {
    title: "Services",
    serviceName: [
      "UPS Repair Services",
      "Reconditioned UPS",
      "Battery Rentals"
    ],
    icon: <FaTools size={40} className="text-blue-600" />,
  },
  {
    title: "Products We Have",
    productName: [
      "Fireproof Junction Box",
      "Fireproof Control Panel",
      "Fireproof Motor Starter",
    ],
    icon: <FaBatteryFull size={40} className="text-green-500" />,
  },
];

const HeroSection = () => {
  const [currentslide, setslide] = useState(0);

  return (
    <div className="relative w-screen min-h-[114vh] pb-5 overflow-x-hidden overflow-y-visible">
      {/* 🔘 Custom Arrows */}
      <div className="absolute w-full z-50 flex justify-between items-center px-6 top-[40%]">
        <button className="swiper-button-prev-custom bg-gray-900 w-10 h-10 text-white p-3 rounded-full grid content-center hover:bg-orange-600 transition">
          &#8592;  
        </button>
        <button className="swiper-button-next-custom  w-10 h-10 bg-gray-900 text-white p-3 rounded-full grid content-center hover:bg-orange-600 transition">
          &#8594;
        </button>
      </div>

      {/* 🌀 Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} // Add Pagination here
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={1000}
        onSlideChange={(slide) => setslide(slide.realIndex)}
        onSlideChangeTransitionStart={(e) => (e.el.style.cursor = "grabbing")}
        onSlideNextTransitionEnd={(e) => (e.el.style.cursor = "grab")}
        className="w-full pb-10  h-[80vh] md:h-[120vh] cursor-grab"
        pagination={{
          clickable: true, // This enables clicking on the dots to change slides
          renderBullet: function (index, className) {
            // Customize the bullet appearance based on the current slide
            return `<span class="${className}" style="background-color: ${
              index === currentslide ? '#FF8C00' : '#D3D3D3' // Orange for active, gray for inactive
            }; width: 12px; height: 12px; margin: 15px 5px; border-radius: 50%; "></span>`;
          },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center flex py-30 justify-start md:px-40 px-2"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {currentslide === i && (
                <div className="max-w-[600px] text-white space-y-10 px-3">
                  <h1 className="sm:text-6xl text-4xl leading-tight animate-view origin-top font-bold">
                    {slide.heading}
                  </h1>
                  <p className="sm:text-lg animate-view origin-top opacity-90">
                    {slide.subheading}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🧱 Cards Section */}
      <div className="w-full lg:absolute bottom-2 z-100 mt-20 mb-10">
        <div className="w-fit mx-auto grid lg:grid-cols-2 gap-10 grid-cols-1 pointer-events-none">
          {cards.map((item, i) => (
            <div
              key={i}
              className="w-120 py-9 group relative text-white cursor-pointer pointer-events-auto bg-black -z-10 px-6 rounded overflow-hidden"
            >
              {/* 🏷️ Company Name on Hover */}


              {/* 🌆 Background Blur Image */}
              <img
                src="https://html.themexriver.com/industo/images/gallery/1.jpg"
                className="absolute top-0 left-0 blur-md w-0 group-hover:w-full transition-all duration-500 h-full object-cover -z-1"
              />

              {/* 🛠️ Icon */}
              <div className="group-hover:rotate-y-360 origin-center inline-block transition-all duration-1000 transform font-light translate-z-4 z-10">
                {item.icon}
              </div>

              {/* 📌 Title */}
              <p className="mt-7 pb-4 border-orange-600 border-b-4 text-xl font-bold w-20 whitespace-nowrap z-10">
                {item.title}
              </p>

              {/* 📜 List Items - Show on Hover Only */}
              <ul className="relative z-10 transition-all duration-500 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-60">
                {(i === 0 ? item.serviceName : item.productName).map(
                  (val, index) => (
                    <li key={index} className="block text-sm mt-2">
                      {val}
                    </li>
                  )
                )}
              </ul>

              {/* 🔎 CTA Button */}
              <a
                href={i === 0 ? "/services" : "/products"}
                className="flex items-center gap-3 rounded bg-orange-600 px-4 py-2 font-mono text-lg font-semibold mt-8 z-10 relative"
              >
                Explore More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;