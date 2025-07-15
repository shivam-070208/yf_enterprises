import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      {/* Title Banner */}
      <section
        className="w-full h-[300px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url('https://html.themexriver.com/industo/images/background/9.jpg')` }}
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

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 space-y-20 py-16">
        {/* Contact Info Cards */}
        <section className="text-center space-y-12">
          <h2 className="text-3xl font-bold">Office Near You.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📧",
                title: "Email Address",
                desc: "Sent mail asap anytime",
                data: ["industo@example.com", "indasto@example.com"],
              },
              {
                icon: "📞",
                title: "Phone Number",
                desc: "Call us asap anytime",
                data: ["+90 456 789 152", "+90 251 456 478"],
              },
              {
                icon: "🏢",
                title: "Office Address",
                desc: "Sent mail asap anytime",
                data: ["B2, Miranda City Tower", "New York, US"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="shadow-md rounded-lg p-6 space-y-2  hover:shadow-xl transition"
              >
                <div className="text-4xl">{item.icon}</div>
                <strong className="block text-lg font-semibold">{item.title}</strong>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <div className="text-sm mt-2">
                  {item.data.map((d, idx) => (
                    <p key={idx}>{d}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Google Map */}
        <section>
          <iframe
            className="w-full h-[400px] rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        {/* Contact Form */}
        <section className="relative">
          <div
            className="absolute inset-0 bg-cover opacity-10 pointer-events-none"
            style={{ backgroundImage: `url('/images/background/pattern-25.png')` }}
          ></div>
          <div className="relative z-10 text-center space-y-10">
            <div>
              <p className="text-red-600 text-sm font-semibold">Submit Question</p>
              <h2 className="text-3xl font-bold">Needs Help? Let’s Get in Touch</h2>
            </div>
            <form id="contact" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Name" className="focus:outline-2 border border-amber-500 transition-all outline-orange-600 p-3 w-full rounded" />
                <input type="email" placeholder="Your Email" className="focus:outline-2 border border-amber-500 transition-all outline-orange-600 p-3 w-full rounded" />
                <input type="text" placeholder="Your Phone" className="focus:outline-2 border border-amber-500 transition-all outline-orange-600 p-3 w-full rounded" />
                <input type="text" placeholder="Your Subject" className="focus:outline-2 border border-amber-500 transition-all outline-orange-600 p-3 w-full rounded" />
              </div>
              <textarea
                placeholder="Message"
                className="focus:outline-2 border border-amber-500 transition-all outline-orange-600 p-3 w-full rounded h-32"
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
