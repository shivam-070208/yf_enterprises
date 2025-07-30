
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { FaTools, FaBatteryFull } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import serviceImages from "../../assets/serviceImages";

const slides = [
  {
    image: serviceImages.heroic1,
    heading: " Your Trusted Partner in EPC Projects & Industrial Safety",
    subheading:
      " We handle complete Erection, Procurement, and Commissioning projects, while delivering intelligent HCD solutions to secure your operations.",
  },
  {
    image: serviceImages.heroic2,
    heading: "Never Lose Power Again with Our End-to-End UPS AMC Services",
    subheading:
      " Y.F Enterprises offers expert annual maintenance, UPS rentals, battery replacement, and 24/7 service support across India.",
  },
  {
    image: serviceImages.heroic3,
    heading: "India’s Reliable Partner for Industrial Engineering & Technical Services",
    subheading:
      " From skilled manpower deployment to electrical maintenance, HCD servicing, and UPS support — Y.F Enterprises delivers responsive, professional service solutions across industries.",
  },
];
const cards = [
  {
    title: "Services",
    serviceName: [ 
      "EPC Projects",
      "HCD Services",
      "UPS Repair Services",
      "Reconditioned UPS",
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
    <div className="relative w-screen min-h-[120vh] pb-10 overflow-x-hidden overflow-y-visible">
      {/* 🔘 Custom Arrows */}
      <div className="absolute w-full z-50 flex justify-between items-center px-6 top-[40%] pointer-events-none md:pointer-events-auto">
        <button className="swiper-button-prev-custom bg-gray-900 w-10 h-10 text-white p-3 rounded-full grid content-center hover:bg-orange-600 transition pointer-events-auto">
          &#8592;
        </button>
        <button className="swiper-button-next-custom w-10 h-10 bg-gray-900 text-white p-3 rounded-full grid content-center hover:bg-orange-600 transition pointer-events-auto">
          &#8594;
        </button>
      </div>

      {/* 🌀 Swiper Slider */}
      {/* Left-to-right linear gradient background for text readability */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-full" style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)'}} />
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
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
        className="w-full pb-10 h-[80vh] md:h-[120vh] cursor-grab relative z-30"
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" style="background-color: ${
              index === currentslide ? '#FF8C00' : '#D3D3D3'
            }; width: 12px; height: 12px; margin: 15px 5px; border-radius: 50%; "></span>`;
          },
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center flex py-25 justify-start md:px-40 px-2"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {currentslide === i && (
                <div className="max-w-[700px] text-white space-y-10 px-3 mt-20 md:mt-0 relative inline-block z-41">
                  {/* Text overlay above gradient, no blur */}
                  <div className="relative z-40 p-6">
                    <h1 className="sm:text-6xl text-4xl leading-tight animate-view origin-top font-bold drop-shadow-lg">
                      {slide.heading}
                    </h1>
                    <p className="sm:text-lg animate-view origin-top opacity-90 drop-shadow-md">
                      {slide.subheading}
                    </p>

                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🧱 Cards Section */}
      <div className="w-full lg:absolute -bottom-2 z-100  mt-35 mb-10">
        <div className="w-fit mx-auto grid lg:grid-cols-2  gap-10 grid-cols-1 pointer-events-none">
          {cards.map((item, i) => (
            <div
              key={i}
              className="w-120 py-9 group relative text-white cursor-pointer pointer-events-auto bg-black  px-6 rounded overflow-hidden"
            >
              {/* 🏷️ Company Name on Hover */}


              {/* 🌆 Background Blur Image */}
              <img
                src="https://html.themexriver.com/industo/images/gallery/1.jpg"
                className="absolute top-0 left-0 blur-md w-0 group-hover:w-full transition-all duration-500 h-full object-cover z-0"
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
              <ul className="relative z-10 transition-all duration-500 opacity-100 md:opacity-0 max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-60">
                {(i === 0 ? item.serviceName : item.productName).map(
                  (val, index) => (
                    <li key={index} className="block text-sm mt-2">
                      {val}
                    </li>
                  )
                )}
              </ul>
              <style>{`
                @media (max-width: 767px) {
                  .show-mobile-list {
                    opacity: 1 !important;
                    max-height: 1000px !important;
                  }
                }
              `}</style>
              {/* On mobile, always show the list */}
              <ul className="show-mobile-list relative z-10 transition-all duration-500 opacity-100 max-h-60 overflow-visible md:hidden">
                {(i === 0 ? item.serviceName : item.productName).map(
                  (val, index) => (
                    <li key={index} className="block text-sm mt-2">
                      {val}
                    </li>
                  )
                )}
              </ul>

              {/* 🔎 CTA Button */}
              <Link
                to={i === 0 ? "/services" : "/products"}
                className="flex items-center gap-3 rounded bg-orange-600 px-4 py-2 font-mono text-lg font-semibold mt-8 z-[999]  relative"
              >
                Explore More <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;