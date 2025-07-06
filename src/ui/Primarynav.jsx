import {  FaPhone } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { logo } from "../assets";
import { TiLocationOutline } from "react-icons/ti";



const Primarynav = () => {
  const NavContent = [
    {
      tittle: "Call us for help",
      comment: "+ 854 8484747",
      Icon: <FaPhone size={30} className="text-orange-500" />,
    },
    {
      tittle: "+ (888) 452 1505",
      comment: "30 Commercial Road, Mathura",
      Icon: <TiLocationOutline size={38} className="text-orange-500" />,
    },
    {
      tittle: "Mail us",
      comment: "Help@Gmail.Com",
      Icon: <FaEnvelopeOpenText size={30} className="text-orange-500" />,
    },
  ];

  return (
    <div className="w-screen flex  justify-center gap-x-80 gap-y-10 px-4 py-3 flex-wrap">
      {/* Logo */}
      <div className="h-full ">
        <img src={logo} className="w-50 h-30" alt="logo" />
      </div>

      {/* Side Nav */}
      <div className="sm:flex hidden  gap-8 justify-start">
        {NavContent.map((item) => (
          <div
            key={item.tittle}
            className="flex items-center gap-4  pb-10"
          >
            <div>{item.Icon}</div>
            <div>
              <p className="font-semibold text-lg text-black">{item.tittle}</p>
              <p className="text text-gray-600">{item.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Primarynav;
