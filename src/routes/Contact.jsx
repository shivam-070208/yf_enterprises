import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const concactInfo = [
  {
    title: "Call us for help",
    icon: "FaPhone",
    value: "+91 9748413152",
  },
  {
    title: "Address",
    icon: "TiLocationOutline",
    value: "62, Bentick Street Kolkata-700069 West Bengal",
  },
  {
    title: "Mail us",
    icon: "FaEnvelopeOpenText",
    value: "tenders@yfenterprises.com",
  },
];

const Contact = () => {
  const toastref = useRef(null);
  const handleContact = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data)

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/?topic=Contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("✅ Message sent successfully!");
        e.target.reset();
      } else {
        toast.error("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("❌ Failed to send message.");
    }
    toastref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <div ref={toastref} className="">
        <ToastContainer position="bottom" className="" autoClose={3000} />
      </div>
      <section
        className="w-full h-[300px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('https://html.themexriver.com/industo/images/background/9.jpg')`,
        }}
      >
        <div className="w-full mx-auto px-4">
          <ul className="text-white text-sm mb-2">
            <li className="inline-block mr-2">
              <a href="/">Home</a>
            </li>
            <li className="inline-block">/ Contact Page</li>
          </ul>
          <h2 className="text-4xl font-bold text-white">Contact Page</h2>
        </div>
      </section>
       
      <div className="max-w-5xl mx-auto px-4 space-y-20 py-16">
        <div className="bg-white w-full h-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg shadow-lg">
          {concactInfo.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-orange-50 rounded-xl shadow-sm p-6 hover:shadow-lg transition group border border-orange-100"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 mb-4 group-hover:bg-orange-500 transition">
                {item.icon === "FaPhone" && (
                  <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 group-hover:text-white transition"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
                )}
                {item.icon === "TiLocationOutline" && (
                  <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 group-hover:text-white transition"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                )}
                {item.icon === "FaEnvelopeOpenText" && (
                  <svg width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500 group-hover:text-white transition"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
                )}
              </span>
              <div>
                <div className="font-bold text-lg mb-1 text-gray-900">{item.title}</div>
                <div className="text-gray-700 text-base break-words font-medium">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Contact Form */}
          <section>
          <iframe
            className="w-full h-[400px] rounded-md"
           
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3100096682974!2d88.35010037518609!3d22.567505779495328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277007dba8ac5%3A0xdc034f3faadb5f3c!2sY%20F%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1752575831230!5m2!1sen!2sin"            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </section>
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url('/images/background/pattern-25.png')`,
            }}
          ></div>
          <div className="relative z-10 text-center space-y-10">
            <div>
              <p className="text-red-600 text-sm font-semibold">
                Submit Question
              </p>
              <h2 className="text-3xl font-bold">
                Needs Help? Let’s Get in Touch
              </h2>
            </div>
            <form onSubmit={handleContact} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Name"
                  className="p-3 w-full rounded border border-amber-500"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company Name"
                  className="p-3 w-full rounded border border-amber-500"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="p-3 w-full rounded border border-amber-500"
                />
                <input
                  name="phone"
                  type="text"
                  required
                  placeholder="Phone"
                  className="p-3 w-full rounded border border-amber-500"
                />
              </div>
              <input
                name="subject"
                type="text"
                required
                placeholder="Subject"
                className="p-3 w-full rounded border border-amber-500"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                className="p-3 w-full rounded border border-amber-500 h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
