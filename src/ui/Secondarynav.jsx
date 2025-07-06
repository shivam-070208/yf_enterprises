import React from "react";
import { Link } from "react-router-dom";

const Secondarynav = () => {
 const NavItems = [
  {
    Name: "Home",
    href: "/",
  },
  {
    Name: "About",
    href: "/about",
  },
  {
    Name: "Services",
    href: "/services",
  },
  {
    Name: "Projects",
    href: "/projects",
  },
  {
    Name: "Blog",
    href: "/blog",
  },
  {
    Name: "Contact",
    href: "/contact",
  },
];

  return (
    <div className="w-screen  absolute z-100">
      <div className=" ml-auto  text-xl bg-transparent gap-10  md:w-fit w-full md:text-left  md:pr-53 flex sm:-translate-y-12 py-6 text-white font-semibold px-10 secondarynav relative sm:before:-skew-x-[24deg] sm:left-10">
        {NavItems.map(({ Name, href }, index) => (
          <Link key={index} className="sm:inline-block hidden" href={href}>
            {Name}
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Secondarynav;
