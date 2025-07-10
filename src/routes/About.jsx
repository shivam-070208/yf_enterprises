import React from 'react';
import { FaIndustry, FaTools, FaGlobe, FaTrophy, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-cover bg-center py-20" style={{ backgroundImage: 'url(https://html.themexriver.com/industo/images/background/9.jpg)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="text-white text-sm mb-2">
            <li className="inline-block"><a href="/">Home</a> /</li>
            <li className="inline-block ml-1 font-bold">About Us</li>
          </ul>
          <h2 className="text-4xl font-bold text-white">About Us</h2>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <div className="text-orange-600 uppercase tracking-wide font-bold">Achievement</div>
            <h2 className="text-3xl font-bold">Our Achievements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded shadow">
              <FaIndustry className="text-4xl text-orange-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">1,500+</h3>
              <p>Chain of Factories</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <FaTools className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">1.5K</h3>
              <p>Engineering Projects</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <FaGlobe className="text-4xl text-red-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">266K</h3>
              <p>Worldwide Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img src="https://html.themexriver.com/industo/images/resource/welcome.png" alt="Welcome" className="rounded-full shadow" />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <div className="text-orange-600 font-semibold">Welcome to Y.F Enterprises</div>
              <h2 className="text-3xl font-bold mt-2">We Are Experts In All Industry Works</h2>
              <p className="mt-4 text-gray-600">We specialize in service and maintenance of UPS, Battery Rental, Servo Stabilizer, AMC/CMC Contracts, and more across India.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="list-disc pl-5">
                <li>Our Work Growth</li>
                <li>1500+ Employed</li>
              </ul>
              <ul className="list-disc pl-5">
                <li>Employee Growth</li>
                <li>Service Management</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow flex items-start gap-4">
              <FaTrophy className="text-3xl text-yellow-500" />
              <div>
                <h4 className="font-bold text-lg">Best Quality</h4>
                <p className="text-gray-600 text-sm">24x7 support service to ensure minimal power disruptions and prompt resolution.</p>
              </div>
            </div>
            <a href="#" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold">Explore More</a>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Value */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-12">
            <div className="text-orange-600 font-bold">Our Approach</div>
            <h2 className="text-3xl font-bold">Capitalise On Hanging</h2>
            <p className="text-gray-600 mt-2">We believe in fast resolution of power issues through proactive 24x7 services and customer-focused practices.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {['Our Vision', 'Our Mission', 'Our Value'].map((title, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-4">
                <img src={`https://html.themexriver.com/industo/images/resource/welcome.png`} alt={title} className="mb-4 w-full h-48 object-cover rounded" />
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">We aim to prevent your power disruptions with timely service and committed technical support all year round.</p>
                <a href="#" className="text-orange-600 text-sm font-medium mt-2 inline-block">Explore More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <div className="text-orange-600 font-bold">Our Testimonial</div>
            <h2 className="text-3xl font-bold">Happy Client Says About Us</h2>
          </div>
          <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
            {[1, 2, 3].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded shadow text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://html.themexriver.com/industo/images/resource/welcome.png" alt="client" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-bold">Jeffery Marshall</h4>
                      <p className="text-sm text-gray-500">Founder & CEO</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus facilisis.</p>
                  <div className="text-yellow-500 flex">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="text-orange-600 font-bold">Clients</div>
            <h2 className="text-3xl font-bold">Our Trusted Sponsor</h2>
          </div>
          <Swiper slidesPerView={2} modules={[Autoplay]} autoplay grabCursor={true}  spaceBetween={20} breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i}>
                <div className="p-4">
                  <img src={`https://html.themexriver.com/industo/images/resource/welcome.png`} alt={`sponsor-${i}`} className="mx-auto h-16" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
