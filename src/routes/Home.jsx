import React from 'react';
import { AboutSection, HeroContactSection, HeroSection, ProductCarousel, ServicesCarousel } from '../ui/Home';
import { Bglayer } from '../ui';
import PortfolioSection from '../ui/Home/Portfolio';
import { Swiper, SwiperSlide } from 'swiper/react';
import { profile } from '../assets';
import { FaStar } from 'react-icons/fa';
import { ChannelImage, ClientsImage } from '../assets/logo';
import Clients from '../ui/Home/Clients';
import ModernLogoCarousel from '../ui/Home/Clients';


const textTestimonial = [
  {
    Name: "Manish Tiwari",
    Location: "Kolkata",
    text: "Y.F Enterprises resolved our UPS breakdown within hours. Their technician was skilled, fast, and professional. Best UPS repair and emergency service I’ve seen in Delhi."
  },
  {
    Name: "Vikram Mehta",
    Location: "Kolkata",
    text: "We bought a reconditioned UPS and it runs like new. Affordable pricing and excellent installation support. Highly recommended for UPS solutions in Pune."
  },
  {
    Name: "Rahul Patel",
    Location: "Kolkata",
    text: "Y.F Enterprises resolved our UPS breakdown within hours. Their technician was skilled, fast, and professional. Best UPS repair and emergency service I’ve seen in Delhi."
  },
  {
    Name: "Imran Sheikh",
    Location: "Kolkata",
    text: "Needed UPS battery rental for an event—flawless service! Timely delivery, proper setup, and smooth backup. Great experience with their team in Hyderabad."
  },
  {
    Name: "Naveen Raut",
    Location: "Kolkata",
    text: "We use their AMC services across our offices. No power issues since they took over maintenance. Trusted UPS service partner in Nagpur."
  }
];

function Home() {
  return (
    <div className='bg-transparent'>
        
      <HeroSection />
      <AboutSection />
       <ServicesCarousel />
       {/* <PortfolioSection /> */}
       <ProductCarousel />
       <HeroContactSection />
        <section className="py-20 bg-gray-100 text-center">
            <div className="max-w-6xl mx-auto px-4">
              <div className="mb-10">
                <div className="text-orange-600 font-bold">Our Testimonial</div>
                <h2 className="text-3xl font-bold">Happy Client Says About Us</h2>
              </div>
              <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
                {textTestimonial.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white p-6 rounded shadow text-left">
                      <div className="flex items-center gap-4 mb-4">
                        <img src={profile} alt="client" className="w-12 h-12 rounded-full" />

                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                      <div className="text-yellow-500 flex">
                        {[...Array(5)].map((_, i) => <FaStar
                        key={i} />)}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
               <ModernLogoCarousel 
                 title="Our Trusted Clients" 
                 subtitle="Clients" 
                 logos={ClientsImage} 
                 bgColor="bg-gradient-to-br from-gray-50 to-white"
               />
               
               <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto max-w-4xl"></div>
               
               <ModernLogoCarousel 
                 title="Our Channel Partners" 
                 subtitle="Channel Partners" 
                 logos={ChannelImage} 
                 bgColor="bg-gradient-to-br from-white to-gray-50"
               />
         
    </div>
  )
}

export default Home
