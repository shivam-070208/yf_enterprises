import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const categories = [
  'Flameproof Panels',
  'UPS Services',
  'Battery Rentals',
  'Junction Boxes',
  'Control Stations',
  'Custom Solutions',
];

const images =[
    "https://html.themexriver.com/industo/images/gallery/1.jpg",
       "https://html.themexriver.com/industo/images/gallery/1.jpg",
        "https://html.themexriver.com/industo/images/gallery/1.jpg",
          "https://html.themexriver.com/industo/images/gallery/1.jpg"
]



const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="w-full flex h-fit flex-col-reverse lg:flex-row  items-center justify-start py-16 px-6 ">
      {/* Image with Text */}
      <div className="relative w-full lg:w-2/3 lg:h-[600px] h-[50vh] overflow-hidden group">
      {images.map((img, index) =>
  index === activeCategory ? (
    <img
      key={index}
      src={img}
      alt={`Project ${index + 1}`}
      className="object-cover animate-view w-full h-full"
    />
  ) : null
)}


        <div className="absolute bottom-0 backdrop-blur-sm   right-0 p-6 bg-gradient-to-r from-black/80 to-transparent text-white w-fit">
          <h3 className="text-xl font-bold">
            City of Calgary LRT Station Refurbishments
          </h3>
          <p className="text-sm mt-1">ALBERTA</p>
        </div>
        <div className="absolute bottom-0 right-0 bg-orange-600 w-30 h-12 flex items-center justify-center">
          <FaArrowRight className="text-white" />
        </div>
      </div>

      
      <div
        className="w-full lg:w-1/3 -translate-y-22   bg-cover bg-center  h-[50vh] lg:h-full p-10 text-white"
        style={{
          backgroundImage: "url('https://html.themexriver.com/industo/images/background/2.jpg')",
        }}
      >
        <h2 className="md:text-6xl text-3xl font-bold mb-6">Our Portfolio</h2>
        <ul className="md:space-y-4 space-y-2 md:text-2xl text-xl">
          {categories.map((cat,index) => (
            <li
              key={cat}
              onClick={() => setActiveCategory(index)}
              className={`cursor-pointer relative  hover:text-orange-500 group transition-all ${
                index === activeCategory
                  ? 'text-orange-500 g relative font-semibold'
                  : 'text-white/80'
              }`}
            >
               
                <span className={`absolute -left-30 top-1/2 md:inline-block hidden  transform -translate-y-1/2 origin-center group-hover:w-30 h-px transition-all ${index === activeCategory?'w-30':'w-0'} bg-orange-500`} />
              
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioSection;
