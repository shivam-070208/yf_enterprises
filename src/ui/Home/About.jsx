import React from 'react';
import { FaPhoneAlt, FaBolt, FaTools } from 'react-icons/fa';
import Button from '../Button';

const AboutSection = () => {
  return (
    <section className="bg-transparent py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      
        <div className=" w-full flex flex-col justify-between">
          <div>
            <p className="text-orange-600 font-bold mb-2 text-lg beforetext relative md:before:content-['Assesment']">About Y.F Enterprises</p>
            <h2 className="text-5xl font-bold text-black mb-4 leading-tight">
              Flameproof Electrical Safety You Can Rely On
            </h2>
            <p className="text-gray-600 mb-6">
              Y.F Enterprises is dedicated to delivering reliable, certified, and eco-friendly flameproof solutions 
              including control stations, junction boxes, and customized electrical panels. 
              We ensure affordable pricing, safety, and 24x7 support across India.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <FaBolt className="text-orange-600 text-3xl" />
                <div className="font-bold text-lg text-black">Certified Flameproof Equipment</div>
              </div>
              <div className="flex items-center gap-4">
                <FaTools className="text-orange-600 text-3xl" />
                <div className="font-bold text-lg text-black">Custom Industrial Panels</div>
              </div>
            </div>
          </div>

          {/* CTA + Contact */}
          <div className="flex flex-wrap items-center gap-6">
           <Button text={"About Us"} primarycolor={"bg-orange-700"} secondarycolor={"bg-green-400"} href={'/about'} />
            <div className="flex items-center gap-3 text-black">
              <div className="bg-gray-100 p-3 rounded-full">
                <FaPhoneAlt className="text-xl text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call us for help</p>
                <strong className="text-lg">+91 845 758 145</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image + Counters */}
        <div className="relative flex flex-col justify-between items-center">
            <div className='flex gap-14 mb-10'>
          <div className=" text-left ">
            <h2 className="text-5xl font-bold text-orange-600">3,010+</h2>
            <p className="font-semibold text-black">Satisfied Clients</p>
          </div>
          <div className="text-left ">
            <h2 className="text-5xl font-bold text-orange-600">528+</h2>
            <p className="font-semibold text-black">Active Projects</p>
          </div>
          </div>
          <div className="relative w-full max-w-md">
            <img
              src="https://html.themexriver.com/industo/images/resource/about-2.jpg"
              alt="YF Flameproof Engineers"
              className="rounded-2xl object-cover w-full"
            />
            <img
              src="https://html.themexriver.com/industo/images/resource/about-circle.png"
              alt="Gear Decoration"
              className="absolute -top-4 shadow-lg rounded-full -left-5 w-50 animate-spin origin-center [animation-duration:10s]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
