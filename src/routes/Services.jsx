import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';
import { Button } from '../ui';
import { Link } from 'react-router-dom';
import { profile } from '../assets';

const ServicesPage = () => {
  const [index,setindex]= useState(6)
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
    service: "UPS Repair Services",
    textExplanation: "Fast and reliable repair for all major UPS systems to ensure continuous power."
  },
  {
    service: "Reconditioned UPS",
    textExplanation: "Cost-effective refurbished UPS units tested for performance and reliability."
  },
  {
    service: "UPS on Rent",
    textExplanation: "Short-term and long-term UPS rental solutions for events and business continuity."
  },
  {
    service: "Battery Rentals",
    textExplanation: "High-quality battery backup solutions available on flexible rental plans."
  },
  {
    service: "AMC & CMC Contracts",
    textExplanation: "Annual and comprehensive maintenance contracts for uninterrupted service and support."
  },
  {
    service: "Servo Stabilizers",
    textExplanation: "Voltage regulation devices that protect sensitive equipment from power fluctuations."
  },
  {
    service: "Flameproof Electrical Solutions",
    textExplanation: "Safe electrical installations designed for hazardous or explosive environments."
  },
  {
    service: "Custom Power Solutions",
    textExplanation: "Tailored electrical and power backup systems based on specific client needs."
  },
  {
    service: "Junction Boxes",
    textExplanation: "Durable enclosures for safely organizing and protecting electrical wiring."
  },
  {
    service: "Control Panels",
    textExplanation: "Automation and control systems for managing power distribution and equipment."
  }
];


  return (
    <div className="page-wrapper">
      {/* Page Title */}
      <section className="bg-cover bg-center py-30" style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}>
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
            <p className="text-blue-600 text-sm uppercase font-semibold">The Best Industry Services</p>
            <h2 className="text-3xl md:text-4xl font-bold">Industo Provide Services <br className="hidden md:block" /> For Your Business</h2>
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {servicesInfo.map((items,i) => (
              <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden p-6 hover:shadow-lg transition duration-300">
                <div className="bg-cover h-50 rounded-md mb-4" style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}></div>
                <div className="text-blue-500 font-bold text-xl mb-2">0{i}</div>
                <div className="text-blue-600 text-2xl mb-2 font-semibold">{items.service}</div>
                <p className="text-gray-600 text-sm">{items.textExplanation}</p>
                <Link to="/contact#contact" className="text-blue-800 mt-3 bg-blue-200 hover:font-bold p-4 hover:bg-blue-300 rounded-lg inline-block">Explore →</Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
           <Button text={"Explore More"} href={'/contact#contact'} primarycolor={"bg-blue-600"} secondarycolor={"bg-green-600"} />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[url('/images/background/map.png')] bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 text-sm uppercase font-semibold">Our Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold">Happy Client Says <br className="hidden md:block" /> About Us</h2>
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
