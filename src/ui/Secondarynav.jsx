import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Secondarynav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = [
    { Name: "Home", href: "/" },
    { Name: "About", href: "/about" },
    { Name: "Services", href: "/services" },
    { Name: "Products", href: "/products" },
    { Name: "Blog", href: "/blog" },
      { Name: "Career", href: "/career" },
    { Name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Main Navbar for large screens */}
      <div className="w-screen absolute  z-50 ">
        <div className="ml-auto text-xl bg-transparent gap-10 md:w-fit w-full md:text-left md:pr-53 flex sm:-translate-y-12 py-6 text-white font-semibold px-8 secondarynav relative sm:before:-skew-x-[24deg] sm:left-10">
          {NavItems.map((item, index) => (
            <Link key={index} className="sm:inline-block hidden" to={item.href}>
              {item.Name}
            </Link>
          ))}

          {/* Menu Button for small screens */}
          <a href="/contact" className="sm:hidden p-3 bg-orange-500 hover:bg-orange-400 cursor-pointer text-gray-50 rounded-md ">Contact</a>
          <button
          name="menu"

            onClick={() => setIsOpen(true)}
            className="sm:hidden ml-auto cursor-pointer bg-orange-500 p-2 text-white"
          >
            <FaBars size={26} />
          </button>
        </div>
      </div>

      {/* Side Nav Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black text-white z-100 transform transition-transform duration-100  ${
          isOpen ? "delay-700 translate-x-0" : "delay-0 translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-6">
          {NavItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-base font-medium hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              {item.Name}
            </Link>
          ))}
        </nav>
      </div>

     
    </>
  );
};

export default Secondarynav;
