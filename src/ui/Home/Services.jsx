import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FaIndustry } from "react-icons/fa";
import { Wallpattern } from "../../assets";
import { Link } from "react-router-dom";
import serviceImages from "../../assets/serviceImages";

// Dummy logos for background color
const logos = ['bg-orange-500', 'bg-blue-500', 'bg-green-400'];

const services = [
  {
    title: "Instrumentation Solutions",
    subtitle: "Precision in every measurement",
    description: "Precision-driven instrumentation services for industrial automation, calibration, and process control.",
    details: "We deliver high-accuracy instrumentation solutions tailored to industrial requirements. From sensor calibration and loop checking to process instrumentation integration, we ensure system reliability and process optimization.",
    image: serviceImages.service1,
  },
  {
    title: "C&I Contracting",
    subtitle: "Control & Instrumentation expertise",
    description: "End-to-end Control & Instrumentation contracting including PLC/DCS integration, field cabling, and commissioning.",
    details: "Our C&I services include complete field engineering, cabling, PLC/DCS installation, and commissioning. We specialize in turnkey industrial automation setups with meticulous wiring and system integrity.",
    image: serviceImages.service2,
  },
   {
    title: "CCTV Sources",
    subtitle: "CCTV Solutions expertise",
    description: "Comprehensive CCTV solutions including installation, maintenance, and monitoring services to ensure security and surveillance for residential, commercial, and industrial properties.",
    details: "Comprehensive CCTV solutions including installation, maintenance, and monitoring services to ensure security and surveillance for residential, commercial, and industrial properties.",
    image: serviceImages.service3,
  },
  {
    title: "EPC Projects",
    subtitle: "Powering industrial excellence",
    description: "Complete electrical design, erection, testing, and commissioning for industrial and commercial setups.",
    details: "Our services span HT/LT installation, electrical layout planning, equipment erection, and final commissioning. We adhere strictly to safety norms while ensuring seamless power flow and load management.",
    image: serviceImages.service4,
  },
  {
    title: "Testing & Commissioning",
    subtitle: "Reliable performance verification",
    description: "Advanced testing and commissioning services for electrical panels, transformers, and substation equipment.",
    details: "We offer insulation resistance testing, primary/secondary injection, transformer testing, and relay configuration to verify system integrity before project handover, ensuring fault-free startups.",
    image: serviceImages.service5,
  },
  {
    title: "Manpower Deployment",
    subtitle: "Skilled technical workforce on demand",
    description: "Skilled technical manpower supply for project execution, maintenance, and industrial operations support.",
    details: "Our manpower pool includes electricians, supervisors, panel testers, and engineers. Whether for shutdown maintenance or new projects, we provide experienced professionals tailored to industry needs.",
    image: serviceImages.service6,
  },
    {
    title: "HCD Services",
    subtitle: "High Capacity Diesel Generator expertise",
    description: "High Capacity Diesel Generator services including installation, maintenance, and fuel management for uninterrupted power supply.",
    details: "We specialize in HCD generator installation, routine maintenance, fuel management, and emergency support. Our services ensure your operations run smoothly without power interruptions.",
    image: serviceImages.service7,
    }
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
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white to-white" />

      <div className="relative z-10 max-w-7xl mx-auto mt-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="text-orange-600 inline-block font-bold uppercase relative beforetext md:before:content-['Services']">
            Our Awesome Services
          </div>
          <h2 className="text-5xl font-montserrat font-extrabold mt-5 text-gray-900">
            Our Awesome Services
          </h2>
        </div>

        {/* Swiper Navigation Buttons */}
        <div className=" absolute w-full top-[60%] z-666 flex justify-between items-center mb-4 px-4">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
            onClick={() => swiperRef.current?.swiper?.slidePrev()}
          >
            &larr;
          </button>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
            onClick={() => swiperRef.current?.swiper?.slideNext()}
          >
            &rarr;
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Navigation]}
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
                <div className="absolute bottom-0 w-full group-hover:-bottom-28 duration-700 transition-all flex">
                  <div className="absolute bottom-0 w-full h-fit gap-4 flex">
                    <div className={`px-4 text-white grid flex-1 max-w-fit place-items-center text-5xl ${logos[index % 3]}`}>
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
                    to={`/services/details/${index}`}
                    className="w-fit h-fit text-white flex gap-2 items-center bg-orange-500 hover:bg-orange-300 px-4 py-3 font-bold rounded-xs mt-5 transition"
                  >
                    Read More<span>&gt;</span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Discs */}
        <div className="flex justify-center mt-6 gap-3">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.swiper?.slideToLoop(idx, 500)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex
                  ? "bg-orange-500 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              } transition-all duration-200`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
