import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { image2, image4, image5, image6, image7 } from "../../assets";

export const projectCategories = [
  {
    name: "Flameproof Panels",
    tagline: "Explosion-Proof Panels for Industrial Safety Zones",
    image: image5,
  },
  {
    name: "UPS Services",
    tagline: "Uninterrupted Power Solutions with 24x7 Support",
    image: image2,
  },
  {
    name: "Battery Rentals",
    tagline: "Flexible Battery Backup Rentals for Critical Operations",
    image: image4,
  },
  {
    name: "Junction Boxes",
    tagline: "Durable, Flameproof Junction Boxes for Secure Cabling",
    image: image6,
  },
  {
    name: "Control Stations",
    tagline: "Rugged Control Stations Built for Hazardous Environments",
    image: "https://html.themexriver.com/industo/images/gallery/1.jpg",
  },
  {
    name: "Custom Solutions",
    tagline: "Tailor-Made Electrical Systems for Unique Site Demands",
    image: image7,
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="w-full flex h-fit flex-col-reverse lg:flex-row items-center justify-start py-16 px-6">
      {/* Image with Text */}
      <div className="relative w-full lg:w-2/3 lg:h-[600px] h-[50vh] overflow-hidden group">
        <img
          src={projectCategories[activeCategory].image}
          alt={projectCategories[activeCategory].name}
          className="object-cover animate-view w-full h-full"
        />

        <div className="absolute bottom-0 backdrop-blur-sm right-0 p-6 bg-gradient-to-r from-black/80 to-transparent text-white w-3/3 ">
          <h3 className="text-xl font-bold">{projectCategories[activeCategory].name}</h3>
          <p className="text-sm mt-1">{projectCategories[activeCategory].tagline}</p>
        </div>

        <a href="/products">
          <div className="absolute bottom-0 right-0 ease-in-out bg-orange-600 w-30 h-12 text-white hover:text-orange-600 hover:bg-white flex items-center justify-center">
            <FaArrowRight />
          </div>
        </a>
      </div>

      <div
        className="w-full lg:w-1/3 lg:-translate-y-40 -translate-y-10 bg-cover bg-center h-[50vh] lg:h-full p-10 text-white"
        style={{
          backgroundImage:
            "url('https://html.themexriver.com/industo/images/background/2.jpg')",
        }}
      >
        <h2 className="md:text-6xl text-3xl font-bold mb-6">Our Portfolio</h2>
        <ul className="md:space-y-4 space-y-2 md:text-2xl text-xl">
          {projectCategories.map((category, index) => (
            <li
              key={category.name}
              onClick={() => setActiveCategory(index)}
              className={`cursor-pointer relative hover:text-orange-500 group transition-all ${
                index === activeCategory
                  ? "text-orange-500 font-semibold"
                  : "text-white/80"
              }`}
            >
              <span
                className={`absolute -left-30 top-1/2 md:inline-block hidden transform -translate-y-1/2 origin-center group-hover:w-30 h-px transition-all ${
                  index === activeCategory ? "w-30" : "w-0"
                } bg-orange-500`}
              />
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PortfolioSection;
