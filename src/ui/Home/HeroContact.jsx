import React from "react";
import { Link } from "react-router-dom";


import Button from "../Button";
import {  Pipe, whiteLogo } from "../../assets";

const HeroContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center mb-20 text-white"
      style={{
        backgroundImage: `url(${Pipe})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fa4e1d]/70 from-10% via-black/40 to-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6">
          <img src={whiteLogo} alt="Industo" className="w-50 mx-auto" />
        </div>

        {/* Text */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-snug">
          Contact to Expertise in the <br />
          manufacturing industry
        </h2>

        {/* Button */}
      <Button text={'Contact'} href={'/contact'} primarycolor={"bg-orange-500"} secondarycolor={"bg-orange-700"} />
      </div>

      {/* Optional corner graphics */}
      <div className="absolute right-0 top-10 blur-md w-12 h-12 bg-gradient-to-tr from-orange-500 - animate-pulse to-white transform -rotate-45 -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default HeroContactSection;
