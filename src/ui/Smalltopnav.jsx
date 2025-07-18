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
        <a href="#" className="transition-all ease-in bg-orange-700 p-2 rounded-full hover:bg-orange-600">
          <FaFacebookF />
        </a>
        <a href="#" className="transition-all ease-in bg-orange-700 p-2 rounded-full hover:bg-orange-600">
          <FaTwitter />
        </a>
        <a href="#" className="transition-all ease-in bg-orange-700 p-2 rounded-full hover:bg-orange-600">
          <FaLinkedin />
        </a>
        <a href="#" className="transition-all ease-in bg-orange-700 p-2 rounded-full hover:bg-orange-600">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default SmallTopNavbar;
