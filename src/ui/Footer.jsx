import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { logo } from '../assets'; // make sure you have your logo here
import { href, Link } from 'react-router-dom';

const Footer = () => {
  // {"Home", "About Us", "Brochure", "Blog", "Product", "Contact Us", "Privacy Policy"
  const QuickLinks = [
    {
      Name:"Home",
      href:"/"
    },
    {
      Name:"About",
      href:"/about"
    },
    {
      Name:"Brouchure",
      href:'#'
    },
    {
      Name:"Blog",
      href:"/blog"
    },
    {
      Name:"Product",
      href:"/products"
    },
    {
      Name:"Contact Us",
      href:"/contact"
    },
    {
      Name:"Privacy Policy",
      href:"#"
    }
  ];
  const footerProducts = [
  "UPS Repair Services",
  "Reconditioned UPS",
  "Battery Rentals",
  "AMC & CMC Contracts",
  "Servo Stabilizers",
  "Flameproof Electrical Solutions"
];


  return (
    <footer className="relative bg-[#000000ef] text-white pt-20 pb-8 px-6 md:px-16">
     

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-19">
        
        <div>
          <img src={logo} alt="YF Logo " className="w-36 mb-4" />
          <p className="text-gray-400 mb-4">Y.F Enterprises provides 24×7 UPS services, battery rentals, and power solutions across India. Trusted by top brands like Exide, APC, and Hitachi.</p>
          <a href="/about" className="inline-block text-sm bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded text-white">About us</a>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          {
            QuickLinks.map((item,idx) => (
              <Link to={item.href} key={idx} className="block text-gray-400 hover:text-white mb-2">{item.Name}</Link>
            ))
          }
          
         
        </div> 
        
         <div>
          <h4 className="text-xl font-semibold mb-4">Product</h4>
          {footerProducts.map((item) => (
              <Link to='/products' key={item} className="block text-gray-400 hover:text-white mb-2">{item}</Link>
            ))
          }
         
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-orange-400" />
              <span>+91 9748413152/+91 8240505520</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-orange-400" />
              <span>support@yfenterprises.com</span>
            </li>
            <li>
              62, Bentick Street <br />
               Kolkata-700069 West Bengal
            </li>
            <li>
              <strong>Open Hours:</strong> <br />
              Mon - Sat: 9AM – 6PM <br />
              Sunday: Closed
            </li>
          </ul>
          <div className="flex gap-4 mt-4 text-white ">
            <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaFacebookF /></a>
            <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaTwitter /></a>
            <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaDribbble /></a>
            <a href="#" className=' transition-all ease-in bg-black p-4 rounded-full hover:bg-orange-700'><FaBehance /></a>
          </div>
        </div>
       
     
      </div>
        
      {/* Footer bottom */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6 text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} Y.F Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
