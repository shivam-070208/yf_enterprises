import React from 'react';
import { FaIndustry, FaTools, FaGlobe, FaTrophy, FaStar, FaToolbox, FaBolt, FaRobot } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { about, profile } from '../assets';
import serviceImages from '../assets/serviceImages';
import {ClientsImage,ChannelImage} from '../assets/logo';
import { FaComputer } from 'react-icons/fa6';



const AboutUs = () => {
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
  return (
    <div className="bg-white text-gray-800 md:mt-0 mt-15 ">
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
            <h2 className="text-3xl font-bold">Our Achievement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded shadow">
              <FaIndustry className="text-4xl text-orange-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">30+</h3>
              <p>Project successfully completed</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <FaTools className="text-4xl text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">20</h3>
              <p>Trusted Clients</p>
            </div>
            <div className="bg-gray-50 p-6 rounded shadow">
              <FaGlobe className="text-4xl text-red-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">15+</h3>
              <p>Years Of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto p-5 flex flex-col lg:flex-row items-center gap-15">
          <div className="w-full lg:w-1/2 ml-3 lg:mr-20">
            <img src={about} alt="Welcome" className="rounded-xl shadow" />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <div className="text-orange-600 font-semibold">Welcome to Y.F Enterprises</div>
              <h2 className="text-3xl font-bold mt-2">We Are Experts In All Industry Works</h2>
              <p className="mt-4 text-gray-600">Y.F Enterprises is a trusted multidisciplinary engineering service provider based in Kolkata, operating since 2013. Led by Mr. Omar Farooque, the company excels in delivering reliable project execution across industries like oil & gas, power, water, pharma, and cement.
              <br />
              Specializing in Electrical, Control & Instrumentation, BMS, Firefighting, and Industrial Security Systems, Y.F Enterprises blends traditional trust with modern efficiency. With a strong focus on quality, safety, and innovation, we provide client-centric, end-to-end engineering solutions across India.   </p>
            </div>
              <div className="grid sm:grid-cols-1 gap-6 mb-8">
                <div className="flex items-center gap-4">
                  <FaToolbox className="text-orange-600 text-3xl" />
                  <div className="font-bold text-lg text-black">Instrumentation Erection and Commissioning</div>
                </div>
                <div className="flex items-center gap-4">
                  <FaComputer className="text-orange-600 text-3xl" />
                  <div className="font-bold text-lg text-black">Cybersecurity Systems & BMS Implementation</div>
                </div>
                <div className="flex items-center gap-4">
                  <FaBolt className="text-orange-600 text-3xl" />
                  <div className="font-bold text-lg text-black capitalize ">Electrical and Mechanical Projects</div>
                </div>
                <div className="flex items-center gap-4">
                  <FaRobot className="text-orange-600 text-3xl" />
                  <div className="font-bold text-lg text-black capitalize ">Automation and Control Systems</div>
                </div>
              </div>
            <div className="bg-white p-4 rounded shadow flex items-start gap-4">
              <FaTrophy className="text-3xl text-yellow-500" />
              <div>
                <h4 className="font-bold text-lg">Best Quality</h4>
                <p className="text-gray-600 text-sm">24x7 support service to ensure minimal power disruptions and prompt resolution.</p>
              </div>
            </div>
            <a href="/services" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold">Explore More</a>
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
            <div className="bg-white rounded-lg shadow p-4">
              <img src={serviceImages.vision} alt="Our Vision" className="mb-4 w-full h-48 object-cover rounded" />
              <h4 className="font-bold text-lg mb-2">Our Vision</h4>
              <p className="text-gray-600 text-sm">YF Enterprises aims to deliver high-quality engineering services with honesty and integrity, ensuring customer satisfaction by completing projects efficiently, safely, and reliably across diverse industrial sectors.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img src={serviceImages.mission} alt="Our Mission" className="mb-4 w-full h-48 object-cover rounded" />
              <h4 className="font-bold text-lg mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm">YF Enterprises aims to deliver high-quality engineering services with honesty and integrity, ensuring customer satisfaction by completing projects efficiently, safely, and reliably across diverse industrial sectors.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <img src={serviceImages.values} alt="Our Value" className="mb-4 w-full h-48 object-cover rounded" />
              <h4 className="font-bold text-lg mb-2">Our Value</h4>
              <p className="text-gray-600 text-sm">Integrity, trust, and honesty guide every action. The company is dedicated, dependable, flexible, and focuses on polite, friendly customer care, valuing understanding and responsiveness in all relationships.</p>
            </div>
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
            {textTestimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded shadow text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={profile} alt="client" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-bold">{item.Name}</h4>
                      <p className="text-sm text-gray-500">{item.Lcation}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.text}</p>
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
            <h2 className="text-3xl font-bold">Our Trusted Clients</h2>
          </div>
          <Swiper slidesPerView={2} modules={[Autoplay]} autoplay grabCursor={true}  spaceBetween={20} breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}>
            {ClientsImage.map((item,i) => (
              <SwiperSlide key={i}>
                <div className="p-4">
                  <img src={item} alt={`sponsor-${i}`} className="mx-auto h-16" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>  
        <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-6">
            <div className="text-orange-600 font-bold">Channel Partner</div>
            <h2 className="text-3xl font-bold">Our Channel Partner</h2>
          </div>
          <Swiper slidesPerView={2} modules={[Autoplay]} autoplay grabCursor={true}  spaceBetween={20} breakpoints={{ 640: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } }}>
            {ChannelImage.map((item,i) => (
              <SwiperSlide key={i}>
                <div className="p-4">
                  <img src={item} alt={`sponsor-${i}`} className="mx-auto h-16" />
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
