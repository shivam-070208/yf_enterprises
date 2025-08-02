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

        {/* Text */}
        <h2 className="text-3xl font-montserrat md:text-5xl font-bold mb-5 leading-snug">
          Partner with Experts in Industrial Project Execution
        </h2>        
          <h2 className="text-lg font-poppins  md:text-xl mb-5 px-4 justify-center leading-snug">
          We delivers proven expertise in EPC projects, hydrocarbon detection systems, and engineering services for the manufacturing and industrial sectors. We combine technical precision, safety compliance, and timely delivery to power your operations from concept to completion.
        </h2>


        {/* Button */}
      <Button text={'Contact Us'} href={'/contact'} primarycolor={"bg-orange-500"} secondarycolor={"bg-orange-700"}>
        Contact Us
      </Button>
      </div>

      {/* Optional corner graphics */}
      <div className="absolute right-0 top-10 blur-md w-12 h-12 bg-gradient-to-tr from-orange-500 - animate-pulse to-white transform -rotate-45 -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default HeroContactSection;
