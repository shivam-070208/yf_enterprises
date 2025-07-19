import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaDropbox, FaIndustry } from "react-icons/fa";
import { image1, image2, image3, image4, Wallpattern } from "../../assets";
import { Link } from "react-router-dom";

// Mock logos (you can replace with image paths if needed)
const logos = [
  'bg-orange-500',
  'bg-blue-500',
  'bg-green-400'
];

const services = [
  {
    title: "Flameproof Control Panels",
    subtitle: "Custom solutions for industrial safety",
    description: "Designed for hazardous environments with gas group IIA, IIB, and IIC safety standards.",
    details: "Our flameproof panels are built to handle explosive environments. With rigorous IIA/IIB/IIC certifications, they ensure safe operations in chemical plants, oil rigs, and refineries. The rugged design offers long-lasting reliability under pressure.",
    image: image1,
  },
  {
    title: "PLC Automation",
    subtitle: "Precision control for your processes",
    description: "Efficient automation using advanced PLC and SCADA systems.",
    details: "We provide PLC-based control systems tailored for industrial automation. Integrated with SCADA, our systems increase productivity, reduce human error, and offer remote monitoring and control with robust fault tolerance.",
    image: image2,
  },
  {
    title: "LT Panels & Distribution Boards",
    subtitle: "Power control with safety and efficiency",
    description: "Tailored LT panels for seamless power distribution in your facilities.",
    details: "Our LT panels are engineered for optimized electrical distribution, safety, and low maintenance. Equipped with top-grade switchgear, these panels ensure smooth operation of industrial and commercial power systems.",
    image: image3,
  },
  {
    title: "APFC Panels",
    subtitle: "Smart power factor correction",
    description: "Automatic correction panels to maintain ideal power factor and reduce bills.",
    details: "Our APFC panels automatically adjust reactive power to optimize the power factor. This leads to better energy efficiency, lower electricity bills, and improved voltage stability—essential for any large electrical setup.",
    image: image4,
  },
];

const ServicesCarousel = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };

  return (
    <section className="relative pt-20 pb-50 mb-10 px-4 md:px-16 mt-10 backdrop-blur-md">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-left"
        style={{ backgroundImage: `url(${Wallpattern})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 from-50% via-white to-white"></div>

      <div className="relative z-10 max-w-7xl mx-auto mt-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="text-orange-600 inline-block font-bold uppercase relative beforetext md:before:content-['Services']">
            Our Awesome Services
          </div>
          <h2 className="text-5xl font-extrabold mt-5 text-gray-900">
            Our Awesome Services
          </h2>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={2}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          onSlideChange={onSlideChange}
          className="w-full cursor-grab"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="group relative mx-auto w-fit h-fit cursor-pointer rounded overflow-hidden transition-all duration-300">
                <Link to="/services">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-90 h-80 object-cover transition-transform duration-300"
                  />
                </Link>
                <div className="absolute bottom-0 w-full group-hover:-bottom-28 duration-700 transition-all justify-between flex">
                  <div className="absolute bottom-0 w-full h-fit group-hover:-bottom-28 duration-700 transition-all gap-4 flex">
                    <div className={`px-4 text-white grid flex-1 max-w-fit place-items-center text-5xl ${logos[index%3]}`}>
                      <FaIndustry />
                    </div>
                    <div className="w-50 px-4 flex h-fit pb-5 flex-col bg-white">
                      <h5 className="text-lg font-bold py-2 overflow-hidden h-fit line-clamp-1">
                        {service.title}
                      </h5>
                      <p className="text-sm text-neutral-500 line-clamp-1">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-full bg-[#ffffffe8] shadow-xl p-5 py-7 origin-left transition-transform duration-500 ease-in-out z-10 group-hover:translate-x-0 translate-x-full">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.details}
                  </p>
                  <Link
                    to="/services"
                    className="w-fit h-fit text-white flex gap-2 items-center bg-orange-500 hover:bg-orange-300 px-4 py-3 font-bold rounded-xs mt-5 transition"
                  >
                    Read More<span>&gt;</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
       
            <SwiperSlide >
              <div className="group relative mx-auto w-fit h-fit cursor-pointer rounded overflow-hidden transition-all duration-300">
                <Link to="/services">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="w-90 h-80 object-cover transition-transform duration-300"
                  />
                </Link>
                <div className="absolute bottom-0 w-full group-hover:-bottom-28 duration-700 transition-all justify-between flex">
                  <div className="absolute bottom-0 w-full h-fit group-hover:-bottom-28 duration-700 transition-all gap-4 flex">
                    <div className={`px-4 text-white grid flex-1 max-w-fit place-items-center text-5xl ${logos[2%3]}`}>
                      <FaIndustry />
                    </div>
                    <div className="w-50 px-4 flex h-fit pb-5 flex-col bg-white">
                      <h5 className="text-lg font-bold py-2 overflow-hidden h-fit line-clamp-1">
                        {services[2].title}
                      </h5>
                      <p className="text-sm text-neutral-500 line-clamp-1">
                        {services[2].subtitle}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 h-full w-full bg-[#ffffffe8] shadow-xl p-5 py-7 origin-left transition-transform duration-500 ease-in-out z-10 group-hover:translate-x-0 translate-x-full">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    {services[2].title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {services[2].details}
                  </p>
                  <Link
                    to="/services"
                    className="w-fit h-fit text-white flex gap-2 items-center bg-orange-500 hover:bg-orange-300 px-4 py-3 font-bold rounded-xs mt-5 transition"
                  >
                    Read More<span>&gt;</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          
        </Swiper>

        {/* Custom Pagination */}
        <div className="flex justify-center mt-6 gap-6 font-bold text-lg">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() =>
                swiperRef.current?.swiper?.slideToLoop(idx, 500)
              }
              className={`px-2 cursor-pointer ${
                idx === currentIndex ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {String(idx + 1).padStart(2, "0")}
            </button>
          ))}
          <span   onClick={() =>
                swiperRef.current?.swiper?.slideToLoop(4, 500)
              }  className={`px-2 cursor-pointer ${
                4 === currentIndex ? "text-orange-500" : "text-gray-500"
              }`}>/ {String(services.length+1).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
