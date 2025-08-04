// import { FaFacebookF, FaTwitter,  FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { whiteLogo } from '../assets'; // make sure you have your logo here
// import { href, Link } from 'react-router-dom';

// const Footer = () => {
 
//   const QuickLinks = [
//     {
//       Name:"Home",
//       href:"/"
//     },
//     {
//       Name:"About",
//       href:"/about"
//     },    
//     {
//       Name:"Services",
//       href:"/services"
//     },
//     {
//       Name:"Blog",
//       href:"/blog"
//     },
//     {
//       Name:"Product",
//       href:"/products"
//     },
//     {
//       Name:"Contact Us",
//       href:"/contact"
//     },
//     {
//       Name:"Privacy Policy",
//       href:"#"
//     }
//   ];
//   const footerProducts = [
//   "UPS Repair Services",
//   "Reconditioned UPS",
//   "Battery Rentals",
//   "AMC & CMC Contracts"
// ];


//   return (
//     <footer className="relative bg-[#101828] text-white pt-20 pb-8 px-6 md:px-16">
     

//       <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-19">
        
//         <div>
//           <img src={whiteLogo} alt="YF Logo " className="w-50 mb-5" />
//           <p className="text-gray-400 mb-4">Y.F Enterprises provides 24×7 UPS services, battery rentals, and power solutions across India. Trusted by top brands like Exide, APC, and Hitachi.</p>
//           <Link to="/about" className="inline-block text-sm bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded text-white">About us</Link>
//         </div>

//         {/* Company */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
//           {
//             QuickLinks.map((item,idx) => (
//               <Link to={item.href} target={idx==2?'_blank':'_self'} key={idx} className="block text-gray-400 hover:text-white mb-2">{item.Name}</Link>
//             ))
//           }
          
         
//         </div> 
        
//          <div>
//           <h4 className="text-xl font-semibold mb-4">Product</h4>
//           {footerProducts.map((item) => (
//               <Link to='/products' key={item} className="block text-gray-400 hover:text-white mb-2">{item}</Link>
//             ))
//           }
//           <Link to="/products" className="inline-block text-sm bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded text-white">Explore Products</Link>
         
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
//           <ul className="text-gray-400 text-sm space-y-3">
//             <li className="flex items-start gap-2">
//               <FaPhoneAlt className="mt-1 text-orange-400" />
//               <a href="tel:+919748413152" className="hover:text-white">+91 9748413152</a>
//               <span className="mx-1">/</span>
//               <a href="tel:+918240505520" className="hover:text-white">+91 8240505520</a>
//             </li>
//             <li className="flex items-start gap-2">
//               <FaEnvelope className="mt-1 text-orange-400" />
//               <a href="mailto:support@yfenterprises.com" className="hover:text-white">support@yfenterprises.com</a>
//             </li>
//             <li>
//               <a href="https://www.google.com/maps/place/Y+F+ENTERPRISES/@22.567506,88.352675,16z/data=!4m6!3m5!1s0x3a0277007dba8ac5:0xdc034f3faadb5f3c!8m2!3d22.5675058!4d88.3526753!16s%2Fg%2F11lywwhhkj?hl=en&entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-white">
//                 62, Bentick Street <br />
//                 Kolkata-700069 West Bengal
//               </a>
//             </li>
//             <li>
//               <strong>Open Hours:</strong> <br />
//               Mon - Sat: 9AM – 6PM <br />
//               Sunday: Closed
//             </li>
//           </ul>
//           <div className="flex gap-4 mt-4 text-white ">
//             <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaFacebookF /></a>
//             <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaTwitter /></a>
//             <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaLinkedin /></a>
//             <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaInstagram /></a>
//           </div>
//         </div>
       
     
//       </div>
//           <div className='flex gap-5 mt-4'>
//                       <Link to="/Flameproof Catalog...pdf" target='_blank' className="inline-block text-sm bg-orange-500 hover:bg-orange-600 transition px-3 py-2 rounded text-white">Product Brochure</Link>
//                       <Link to="/Y F ENTERPRISES SERVICES.pdf" target="_blank" className="inline-block text-sm bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded text-white">Service Brochure</Link>
//           </div>
        
//       {/* Footer bottom */}
//       <div className="text-center mt-12 border-t border-gray-700 pt-6 text-gray-400 text-sm relative z-10">
//         © {new Date().getFullYear()} Y.F Enterprises. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link } from 'react-router-dom';
import { whiteLogo } from '../assets';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {

  const QuickLinks = [
    { Name: "Home", href: "/" },
    { Name: "About", href: "/about" },
    { Name: "Services", href: "/services" },
    { Name: "Blog", href: "/blog" },
    { Name: "Product", href: "/products" },
    { Name: "Contact Us", href: "/contact" },
    { Name: "Privacy Policy", href: "#" },
  ];

  const footerProducts = [
    { Name: "Flameproof Clock Digital", href: "/products/details?id=46" },
    { Name: "Flameproof Camera Housing", href: "/products/details?id=45" },
    { Name: "Flameproof Exhaust Fan", href: "/products/details?id=40" },
    { Name: "Flameproof DOL Starter", href: "/products/details?id=37" },
    { Name: "Flameproof VFD Panel", href: "/products/details?id=35" },
    { Name: "Explore All Products", href: "/products" },
  ];

  const WhatWeDoLinks = [
    { text: "Instrumentation Services", link: "/services" },
    { text: "C&I Contracting Services", link: "/services" },
    { text: "Data Center Services", link: "/services" },
    { text: "Electrical Services", link: "/services" },
    { text: "Testing and Commissioning", link: "/services" },
    { text: "Manpower Services", link: "/services" },
  ];

  // A new array that combines quick links and product links for the "Useful Links" section
  const UsefulLinks = [
    ...QuickLinks,
  ];

  // Helper component to render styled links with an inline SVG arrow
  const StyledLink = ({ to, text, isExternal = false }) => (
    <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 mr-2">
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
      <Link to={to} target={isExternal ? '_blank' : '_self'} className="hover:underline">
        {text}
      </Link>
    </div>
  );

  return (
    <footer className="relative bg-[#101828] text-white pt-20 pb-8 px-6 md:px-16 overflow-hidden">
      {/* Background overlay for a subtle texture, similar to the image */}
      <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/black-felt.png)" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Column 1: Logo, About, Social Icons, and Brochures */}
          <div className="lg:col-span-1">
            {/* Replaced local logo with a placeholder image */}
            <img src={whiteLogo} alt="YF Logo" className="w-50 mb-5" />
            <p className="text-gray-400 mb-6 font-poppins leading-relaxed">
            Y.F Enterprises is a leading engineering company specializing in EPC projects, hydrocarbon gas detection, CCTV installations...          <br />
            <Link to={'/about'} className='font-poppins flex items-center hover:text-orange-500' href="/about" >
            Read More <FaArrowRight className='ml-2 text-sm' />
            </Link>
            </p>
            {/* Social Icons moved here to match the new design */}
            <div className="flex gap-4 mb-8">
              <a href="#" className='transition-all duration-300 bg-gray-700 p-3 rounded-md hover:bg-orange-500 text-white'>
                {/* FaFacebookF */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className='transition-all duration-300 bg-gray-700 p-3 rounded-md hover:bg-orange-500 text-white'>
                {/* FaTwitter */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 11.3-12.2 6.6 2.5-.2 4.9-1 6.9-2.7L8.6 15c-2.1 0-4-1.4-4.2-3.5a1.5 1.5 0 0 1-.3-1.6c.7-.6 1.8-.8 3-.2L5 9.7c.3-.3.9-.7 1.8-.8h.8c-1.3-1-3.1-1.7-5-1.5 1.3-1.4 3.7-2.6 6.4-2.6C16.8 6 20 2 22 2"/>
                </svg>
              </a>
              <a href="#" className='transition-all duration-300 bg-gray-700 p-3 rounded-md hover:bg-orange-500 text-white'>
                {/* FaLinkedin */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className='transition-all duration-300 bg-gray-700 p-3 rounded-md hover:bg-orange-500 text-white'>
                {/* FaInstagram */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
            {/* The brochure links are now integrated into the other sections. */}
          </div>

          {/* Column 2: What We Do */}
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-orange-500 w-fit">
              What We Do
            </h4>
            <div className="space-y-4">
              {WhatWeDoLinks.map((item, index) => (
                <StyledLink key={index} to={item.link} text={item.text} />
              ))}
              {/* Product Brochure link added to this section */}
              <StyledLink to="/Y F ENTERPRISES SERVICES.pdf" text="Services Brochure" isExternal={true} />

            </div>
          </div>

          {/* Column 3: Useful Links with a two-column grid */}
          
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-orange-500 w-fit">
              Products
            </h4>
            {/* Displaying links in a two-column grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-4">
              {footerProducts.map((item, index) => (
                <StyledLink key={index} to={item.href} text={item.Name} />
              ))}
              {/* Service Brochure link added to this section */}
              <StyledLink to="/Flameproof Catalog...pdf" text="Product Brochure" isExternal={true} />

            </div>
          </div>


          {/* Column 4: Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-orange-500 w-fit">
              Useful Links
            </h4>
            {/* Displaying links in a two-column grid */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-4">
              {UsefulLinks.map((item, index) => (
                <StyledLink key={index} to={item.href} text={item.Name} />
              ))}
              {/* Service Brochure link added to this section */}

            </div>
          </div>
          <div className="lg:col-span-1">
            <h4 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-orange-500 w-fit">
              Contact Info
            </h4>
            <ul className="text-gray-400 space-y-6">
              <li className="flex items-start gap-3">
                {/* Replaced FaMapMarkerAlt with inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 text-xl mt-1">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div className="flex-1">
                  <h5 className="font-semibold text-white">Address</h5>
                  <a href="https://www.google.com/maps/place/Y+F+ENTERPRISES/@22.567506,88.352675,16z" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    62, Bentick Street <br />
                    Kolkata-700069 West Bengal
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                {/* Replaced FaPhoneAlt with inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 text-xl mt-1">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <div className="flex-1">
                  <h5 className="font-semibold text-white">Phone</h5>
                  <a href="tel:+919748413152" className="hover:text-white transition-colors">+91 9748413152</a> / <a href="tel:+918240505520" className="hover:text-white transition-colors">+91 8240505520</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                {/* Replaced FaEnvelope with inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 text-xl mt-1">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <div className="flex-1">
                  <h5 className="font-semibold text-white">E-Mail</h5>
                  <a href="mailto:support@yfenterprises.com" className="hover:text-white transition-colors">support@yfenterprises.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="text-center mt-12 border-t-2 border-gray-700 pt-6 text-gray-400 text-sm relative z-10">
        <p>© {new Date().getFullYear()} Y.F Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
