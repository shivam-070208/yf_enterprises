import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaStar } from 'react-icons/fa';
import { Button } from '../ui';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  const [index,setindex]= useState(12)
  const testimonials = Array(6).fill({
    name: 'Jeffery Marshall',
    role: 'Founder & CEO',
    image: '/images/resource/author-6.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Risus facilisis.',
  });

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
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {Array(index).fill('').map((_,i) => (
              <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden p-6 hover:shadow-lg transition duration-300">
                <div className="bg-cover h-32 rounded-md mb-4" style={{ backgroundImage: "url('https://html.themexriver.com/industo/images/background/9.jpg')" }}></div>
                <div className="text-blue-500 font-bold text-xl mb-2">0{i}</div>
                <div className="text-blue-600 text-2xl mb-2 font-semibold">Service {i}</div>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor gravida. Risus commm aecenas accumsa lacus vel facilisis.</p>
                <a href="/oil-gas" className="text-blue-500 mt-3 inline-block">Read More →</a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
           <Button text={"Load More"} primarycolor={"bg-blue-600"} secondarycolor={"bg-green-600"} />
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow text-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
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
