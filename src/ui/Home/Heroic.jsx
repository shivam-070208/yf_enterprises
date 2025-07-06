import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import Button from "../Button";

import {  PiFactoryLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";

const slides = [
    {
        image: "https://html.themexriver.com/industo/images/gallery/1.jpg", // replace with your PDF image asset
        heading: "The UK’s technology trade association",
    subheading:
    "Championing technology’s role in preparing and empowering the UK for what comes next Championing technology’s role in preparing and empowering the UK for what comes next...",
  },
  {
    image: "https://html.themexriver.com/industo/images/gallery/1.jpg",
    heading: "Driving Innovation Across Industries",
    subheading: "Explore our projects in energy, automation and AI research...",
  },
];

const cards = [
    {
    title: "Eco & Bio Power",
    icon: (<PiFactoryLight size={90} stroke="2px" />),
},
{
    title: "Fuel & Gas Management",
   icon: (<PiFactoryLight size={90} stroke="2px" />),
},
{
    title: "Chemical Research",
    icon: (<PiFactoryLight size={90} stroke="2px" />),
  },
];

const HeroSection=()=> {
    const [currentslide,setslide] = useState(0)
   
    return (
    <div className="relative w-screen  min-h-[114vh] overflow-x-hidden overflow-y-visible">
    
      <Swiper
        navigation
        modules={[Autoplay]}
        className="w-full h-[80vh] md:h-[114vh]"
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
              <Button text={"Our Services"} href={'/services'} primarycolor={"bg-orange-500"} secondarycolor={"bg-black"} />
              </div>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    <div className="w-full md:absolute bottom-2 z-100 mt-10">
        <div className="w-fit mx-auto grid md:grid-cols-3 gap-10 grid-cols-1">
            {cards.map((item,i)=>(
                <div key={i} className="w-80 py-9 text-white bg-black  px-6 rounded">
                    <div className="  font-light">{item.icon}</div>
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