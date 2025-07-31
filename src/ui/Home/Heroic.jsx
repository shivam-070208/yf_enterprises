import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { FaTools, FaBatteryFull } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import serviceImages from "../../assets/serviceImages";
// import './Home.css';

const slides = [
  {
    image: serviceImages.heroic1,
    heading: "Your Trusted Partner in EPC Projects & Industrial Safety",
    subheading: "We handle complete Erection, Procurement, and Commissioning projects, while delivering intelligent HCD solutions to secure your operations.",
  },
  {
    image: serviceImages.heroic2,
    heading: "Never Lose Power Again with Our End-to-End UPS AMC Services",
    subheading: "Y.F Enterprises offers expert annual maintenance, UPS rentals, battery replacement, and 24/7 service support across India.",
  },
  {
    image: serviceImages.heroic3,
    heading: "India’s Reliable Partner for Industrial Engineering & Technical Services",
    subheading: "From skilled manpower deployment to electrical maintenance, HCD servicing, and UPS support — Y.F Enterprises delivers responsive, professional service solutions across industries.",
  },
];

const cards = [
  {
    title: "Services",
    serviceName: ["EPC Projects", "HCD Services", "UPS Repair Services", "Reconditioned UPS"],
    icon: <FaTools size={40} className="text-blue-600" />,
  },
  {
    title: "Products We Have",
    productName: ["Fireproof Junction Box", "Fireproof Control Panel", "Fireproof Motor Starter"],
    icon: <FaBatteryFull size={40} className="text-green-500" />,
  },
];

const HeroSection = () => {
  const [currentslide, setslide] = useState(0);

  return (
    <div className="relative w-screen min-h-[105vh] md:min-h-[115vh] pb-10 overflow-x-hidden overflow-y-visible">
      
      {/* 🌀 Swiper Component */}
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
        className="w-full pb-10 h-[80vh] md:h-[120vh] cursor-grab relative z-10"
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class='${className}' style='background-color: ${
              index === currentslide ? "#FF8C00" : "#D3D3D3"
            }; width: 12px; height: 12px; margin: 15px 5px; border-radius: 50%;'></span>`;
          },
          el: '.custom-swiper-pagination',
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full bg-cover bg-center flex py-25 justify-start md:px-40 px-2"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10"></div>

              {/* Text Content */}
              {currentslide === i && (
                <div className="max-w-[700px] text-white space-y-10 px-3 mt-20 md:mt-0 relative z-20">
                  <h1 className="sm:text-5xl text-2xl leading-tight font-bold drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
                    {slide.heading}
                  </h1>
                  <p className="sm:text-lg mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {slide.subheading}
                  </p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔘 Custom Arrows */}
      <div className="absolute w-full z-30 flex justify-between items-center px-6 top-[40%] pointer-events-none md:pointer-events-auto">
        <button className="swiper-button-prev-custom bg-gray-900 w-10 h-10 text-white p-3 rounded-full grid content-center hover:bg-orange-600 transition pointer-events-auto">
          &#8592;
        </button>
        <button className="swiper-button-next-custom w-10 h-10 bg-gray-900 text-white p-3 rounded-full grid content-center hover:bg-orange-600 transition pointer-events-auto">
          &#8594;
        </button>
      </div>

      {/* 🧱 Cards Section */}
      <div className="w-full lg:absolute -bottom-2 z-40 mt-35 -mb-5">
        <div className="w-fit mx-auto grid lg:grid-cols-2 gap-10 grid-cols-1 pointer-events-none">
          {cards.map((item, i) => (
            <div
              key={i}
              className="w-120 py-9 group relative text-white cursor-pointer pointer-events-auto bg-black px-6 rounded overflow-hidden"
            >
              <img
                src="https://html.themexriver.com/industo/images/gallery/1.jpg"
                className="absolute top-0 left-0 blur-md w-0 group-hover:w-full transition-all duration-500 h-full object-cover z-0"
              />
              <div className="group-hover:rotate-y-360 origin-center inline-block transition-all duration-1000 transform font-light translate-z-4 z-10">
                {item.icon}
              </div>
              <p className="mt-7 pb-4 border-orange-600 border-b-4 text-xl font-bold w-20 whitespace-nowrap z-10">
                {item.title}
              </p>
              <ul className="relative z-10 transition-all duration-500 opacity-100 md:opacity-0 max-h-0 overflow-hidden md:group-hover:opacity-100 md:group-hover:max-h-60">
                {(i === 0 ? item.serviceName : item.productName).map(
                  (val, index) => (
                    <li key={index} className="block text-sm mt-2">
                      {val}
                    </li>
                  )
                )}
              </ul>
              <ul className="show-mobile-list relative z-10 transition-all duration-500 opacity-100 max-h-60 overflow-visible md:hidden">
                {(i === 0 ? item.serviceName : item.productName).map(
                  (val, index) => (
                    <li key={index} className="block text-sm mt-2">
                      {val}
                    </li>
                  )
                )}
              </ul>
              <Link
                to={i === 0 ? "/services" : "/products"}
                className="flex items-center gap-3 rounded bg-orange-600 px-4 py-2 font-mono text-lg font-semibold mt-8 z-[999] relative"
              >
                Explore More <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
        {/* Swiper Pagination Bullets Below Cards */}
        <div className="custom-swiper-pagination flex justify-center items-center mt-8"></div>
      </div>
    </div>
  );
};

export default HeroSection;
