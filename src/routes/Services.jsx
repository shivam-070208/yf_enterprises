import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';
import { Button } from '../ui';

import { Link } from 'react-router-dom';
import { profile } from '../assets';
import serviceImages from '../assets/serviceImages';


const ServicesPage = () => {
  const [index,setindex]= useState(7)
 const textTestimonial = [
    {
      Name : " Manish Tiwari",
      Lcation: "Kolkata",
      text: "Y.F Enterprises resolved our UPS breakdown within hours. Their technician was skilled, fast, and professional. Best UPS repair and emergency service I’ve seen in Delhi."

    },
    {
      Name : "Vikram Mehta",
      Lcation: "Kolkata",
      text: "We bought a reconditioned UPS and it runs like new. Affordable pricing and excellent installation support. Highly recommended for UPS solutions in Pune."

    },
    {
      Name : "Rahul Patel",
      Lcation: "Kolkata",
      text:  "Y.F Enterprises resolved our UPS breakdown within hours. Their technician was skilled, fast, and professional. Best UPS repair and emergency service I’ve seen in Delhi."

    },
    {
      Name : " Imran Sheikh",
      Lcation: "Kolkata",
      text:  "Needed UPS battery rental for an event—flawless service! Timely delivery, proper setup, and smooth backup. Great experience with their team in Hyderabad."
      
    },
    {
      Name : "Naveen Raut",
      Lcation: "Kolkata",
      text:  "We use their AMC services across our offices. No power issues since they took over maintenance. Trusted UPS service partner in Nagpur."

    }
  ];
const servicesInfo = [
  {
    service: "Instrumentation Solutions",
    textExplanation: "Precision-driven instrumentation services for industrial automation, calibration, and process control."
  },
  {
    service: "C&I Contracting",
    textExplanation: "End-to-end Control & Instrumentation contracting including PLC/DCS integration, field cabling, and commissioning."
  },
  {
    service: "CCTV Sources",
      textExplanation: "Comprehensive CCTV solutions including installation, maintenance, and monitoring services to ensure security and surveillance for residential, commercial, and industrial properties."

  },
  {
    service: "EPC Projects",
    textExplanation: "Complete electrical design, erection, testing, and commissioning for industrial and commercial setups."
  },
  {
    service: "Testing & Commissioning",
    textExplanation: "Advanced testing and commissioning services for electrical panels, transformers, and substation equipment."
  },
  {
    service: "Manpower Deployment",
    textExplanation: "Skilled technical manpower supply for project execution, maintenance, and industrial operations support."
  },
  {
    service: "HCD Services",
    textExplanation: "High Capacity Diesel Generator services including installation, maintenance, and fuel management for uninterrupted power supply."
  }
];


  return (
    <div className="page-wrapper">
      {/* Page Title */}
      <section className="bg-cover bg-center mt-5 py-30" style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}>
        <div className="container mx-auto px-4">
          <ul className="flex gap-2 text-white text-sm">
            <li><Link to="/" className="underline">Home</Link></li>
            <li>/ Services</li>
          </ul>
          <h2 className="text-4xl font-bold text-white mt-2">What We Do</h2>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm uppercase font-semibold">The Best Industrial Services</p>
            <h2 className="text-3xl md:text-4xl font-bold">Industo Provides Services <br className="hidden md:block" /> for Your Business</h2>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {servicesInfo.map((items, i) => {
              const bgImg = serviceImages[`service${i+1}`];
              return (
                <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden p-6 hover:shadow-lg transition duration-300">
                  <div className="bg-cover h-50 rounded-md mb-4" style={{ backgroundImage: `url('${bgImg}')` }}></div>
                  <div className="text-blue-500 font-bold text-xl mb-2">{(i+1).toString().padStart(2, '0')}</div>
                  <div className="text-blue-600 text-2xl mb-2 font-semibold">{items.service}</div>
                  <p className="text-gray-600 text-sm">{items.textExplanation.replace('to ensure accurate measurements and efficient industrial control.', 'to ensure accurate measurement and efficient industrial control.').replace('covering design, engineering, procurement, installation, and commissioning of automation systems.', 'covering design, engineering, procurement, installation, and commissioning of automation systems.').replace('including setup, power management, cooling, and ongoing support for mission-critical environments.', 'including setup, power management, cooling, and ongoing support for mission-critical environments.').replace('ranging from LV/MV installations to panel designing, earthing systems, and complete electrical maintenance.', 'ranging from LV/MV installations to panel design, earthing systems, and complete electrical maintenance.').replace('to ensure all systems meet performance and safety standards before going live.', 'to ensure all systems meet performance and safety standards before going live.').replace('for short-term and long-term industrial projects and maintenance operations.', 'for short-term and long-term industrial projects and maintenance operations.')}</p>
                  <Link to={`/services/details/${i+1}`} className="text-blue-800 mt-3 bg-blue-200 hover:font-bold p-4 hover:bg-blue-300 rounded-lg inline-block">Explore →</Link>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
           <Button text={"Explore More"} href={'/services/details/1'} primarycolor={"bg-blue-600"} secondarycolor={"bg-green-600"} />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[url('/images/background/map.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm uppercase font-semibold">Our Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say <br className="hidden md:block" /> About Us</h2>
          </div>
          <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {textTestimonial.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <img src={profile} alt={testimonial.Name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{testimonial.Name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.Lcation}</p>
                  <p className="text-gray-600 text-sm mb-4">{testimonial.text}</p>
                  <div className="flex justify-center text-yellow-400">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
