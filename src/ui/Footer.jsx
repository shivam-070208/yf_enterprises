import { FaFacebookF, FaTwitter, FaDribbble, FaBehance, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { logo } from '../assets'; // make sure you have your logo here

const Footer = () => {
  return (
    <footer className="relative bg-[#000000ef] text-white pt-20 pb-8 px-6 md:px-16">
     

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-19">
        
        <div>
          <img src={logo} alt="YF Logo " className="w-36 mb-4 " />
          <p className="text-gray-400 mb-4">We work with a passion for tackling challenges and creating impactful solutions in the industrial sector.</p>
          <a href="/about" className="inline-block text-sm bg-orange-500 hover:bg-orange-600 transition px-4 py-2 rounded text-white">About us</a>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="text-gray-400 mb-4">Subscribe to receive our latest updates and industry insights.</p>
          <form className="flex items-center bg-white rounded overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button type="submit" className="bg-orange-500 px-4 py-2 hover:bg-orange-600">
              <FaEnvelope className="text-white" />
            </button>
          </form>
          <div className="flex gap-4 mt-4 text-white">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaBehance /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-orange-400" />
              <span>+91 854 8484 747</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-orange-400" />
              <span>support@yfenterprises.com</span>
            </li>
            <li>
              30 Commercial Road, <br />
              Mathura, Uttar Pradesh, India
            </li>
            <li>
              <strong>Open Hours:</strong> <br />
              Mon - Sat: 9AM – 6PM <br />
              Sunday: Closed
            </li>
          </ul>
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
