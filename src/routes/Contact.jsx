import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <div className="bg-red-50 w-full h-full p-10 md:grid md:grid-cols-2 gap-10 rounded-lg shadow-lg">
        
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
                <input
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  className="p-3 w-full rounded border border-amber-500"
                />
              </div>
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
