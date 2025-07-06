import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaIndustry } from 'react-icons/fa';

const services = [
  {
    title: 'Flameproof Control Panels',
    subtitle: 'Custom solutions for industrial safety',
    description:
      'Designed for hazardous environments with gas group IIA, IIB, and IIC safety standards.',
    image: 'https://html.themexriver.com/industo/images/resource/service-3.jpg',
  },
  {
    title: 'UPS AMC & Repair',
    subtitle: '24x7 UPS Service & Maintenance',
    description:
      'Servicing all major UPS brands with long-term contracts and emergency response.',
    image: 'https://html.themexriver.com/industo/images/resource/service-3.jpg',
  },
  {
    title: 'Battery & Inverter Rentals',
    subtitle: 'Temporary or seasonal backup',
    description:
      'Flexible battery rental services for factories, events, or shutdown support.',
    image: 'https://html.themexriver.com/industo/images/resource/service-3.jpg',
  },
  {
    title: 'Weatherproof Junction Boxes',
    subtitle: 'Secure cable management',
    description:
      'IP66/IP67 certified boxes for indoor and outdoor wiring protection.',
    image: 'https://html.themexriver.com/industo/images/resource/service-3.jpg',
  },
];

const ServicesCarousel = () => {
  return (
    <section className="relative py-24 mb-12 px-4  md:px-16 mt-10 bg-[#f5f5f570] backdrop:scale-x-200">
      <div className="absolute w-full h-full inset-0 bg-cover opacity-10 bg-[url('https://html.themexriver.com/industo/images/background/1.jpg')]" />
      <div className="relative z-10 max-w-7xl mx-auto mt-8">
        <div className="text-center mb-10">
          <div className="text-orange-600 inline-block font-bold uppercase relative beforetext before:content-['Services']">Our Awesome Services</div>
          <h2 className="text-5xl font-extrabold mt-5 text-gray-900">
            Our Awesome Services
          </h2>
        
        </div>
    <div className='shadow-md py-4'>

    
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          loop
        
          
          autoplay={{ delay: 3000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[ Autoplay]}
          className="w-full cursor-grab"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="group relative w-fit group h-fit cursor-pointer   rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover transition-transform duration-300 "
                  />
                  <div className="absolute bottom-0 w-full group-hover:-bottom-28 duration-700 transition-all  justify-between flex">
                   <div className='px-4 py-3 text-white grid place-items-center text-5xl bg-orange-500'><FaIndustry /></div>
                    <div className='w-fit px-6 max-w-70  py-4 h-full bg-white'>

                    <h5 className="text-xl font-bold line-clamp-2">{service.title}</h5>
                    <p className="text-sm text-neutral-500">{service.subtitle}</p>
                    </div>
                  </div>
                  
               
            
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
