import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SmallTopNavbar = () => {
  return (
    <div className="bg-gray-900 text-white px-10 py-2 flex justify-between items-center text-sm">
      
      {/* Company Name - Hidden on mobile, visible from md (tablet) upwards */}
      <div className="hidden md:block font-semibold tracking-wide">
        YF Enterprises Pvt. Ltd.
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-3 ml-auto">
        <a href="#" className="transition-all ease-in bg-black p-2 rounded-full hover:bg-orange-700">
          <FaFacebookF />
        </a>
        <a href="#" className="transition-all ease-in bg-black p-2 rounded-full hover:bg-orange-700">
          <FaTwitter />
        </a>
        <a href="#" className="transition-all ease-in bg-black p-2 rounded-full hover:bg-orange-700">
          <FaLinkedin />
        </a>
        <a href="#" className="transition-all ease-in bg-black p-2 rounded-full hover:bg-orange-700">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SmallTopNavbar;
