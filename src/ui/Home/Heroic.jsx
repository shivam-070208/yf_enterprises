import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import Button from "../Button";
import { FaTools, FaBatteryFull, FaScrewdriver } from 'react-icons/fa'; 


import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    image: "https://html.themexriver.com/industo/images/gallery/1.jpg", // or replace with UPS-related Unsplash
    heading: "India’s Trusted Source for UPS Solutions",
    subheading:
      "From AMC to battery sales, Y.F Enterprises supports industries with reliable, eco-friendly, and affordable power backup systems.",
  },
  {
    image: "https://html.themexriver.com/industo/images/gallery/1.jpg",
    heading: "Powering Critical Infrastructure Nationwide",
    subheading:
      "We serve sectors like manufacturing, pharma, and IT with UPS repair, rentals, and emergency support — 24x7 across India.",
  },
];



const cards = [
  {
    title: "UPS Annual Maintenance",
    icon: <FaTools size={40} className="text-blue-600" />,
  },
  {
    title: "Battery & Inverter Rentals",
    icon: <FaBatteryFull size={40} className="text-green-500" />,
  },
  {
    title: "Multi-Brand UPS Repair",
    icon: <FaScrewdriver size={40} className="text-orange-400" />,
  },
];


const HeroSection=()=> {
    const [currentslide,setslide] = useState(0)
   
    return (
    <div className="relative w-screen  min-h-[114vh] overflow-x-hidden overflow-y-visible">
    
      <Swiper
        navigation
        modules={[Autoplay]}
        onSlideChangeTransitionStart={(e)=>e.el.style.cursor ='grabbing'
        }
        onSlideNextTransitionEnd={(e)=>e.el.style.cursor ='grab'}
        className="w-full h-[80vh] md:h-[114vh] cursor-grab"
        onSlideChange={(slide)=>setslide(slide.realIndex)}
        loop={true}
        autoplay={{
            delay:3000
        }}
        speed={1000}
     
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} >
            <div
              className="w-full h-full bg-cover bg-center flex py-30 justify-start md:px-40 px-2 "
              style={{ backgroundImage: `url(${slide.image})` }}
            >
           { currentslide === i &&  <div className="max-w-[600px] text-white space-y-10 px-3">
                <h1 className="text-6xl animate-view origin-top font-bold leading-tight">
                  {slide.heading}
                </h1>
                <p className="text-lg animate-view origin-top opacity-90">{slide.subheading}</p>
              <Button text={"Our Services"} href={'/services'} primarycolor={"bg-orange-600"} secondarycolor={"bg-black"} />
              </div>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    <div className="w-full md:absolute bottom-2 z-100 mt-10">
        <div className="w-fit mx-auto grid md:grid-cols-3 gap-10 grid-cols-1 pointer-events-none">
            {cards.map((item,i)=>(
                <div key={i} className="w-80 py-9 group  relative text-white cursor-pointer pointer-events-auto bg-black -z-10  px-6 rounded">
                    <img src="https://html.themexriver.com/industo/images/gallery/1.jpg" className="absolute top-0 blur-md w-0 transition-all self-end  left-0 duration-700 group-hover:w-full h-full -z-1" />
                    <div className="group-hover:rotate-y-180 origin-center inline-block transition-all  font-light">{item.icon}</div>
                <p className="mt-7 pb-4  border-orange-600 border-b-4 text-xl font-bold w-20 whitespace-nowrap">{item.title}</p>
               <button  className="flex items-center gap-3 rounded bg-orange-600 px-4 py-2 font-mono text-lg font-semibold mt-8 ">Read More
                <FaArrowRight />
               </button>
                </div>
            ))}
        </div>
    </div>
    </div>
  );
}


export default HeroSection