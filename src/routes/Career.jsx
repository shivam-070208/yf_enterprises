import React from 'react'
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <div className='w-screen'>
         <section className="bg-cover bg-center py-20" style={{ backgroundImage: 'url(https://html.themexriver.com/industo/images/background/9.jpg)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="text-white text-sm mb-2">
            <Link to={'/'} className="inline-block"><a href="/">Home</a> /</Link>
            <li className="inline-block ml-1 font-bold">Career</li>
          </ul>
        
        </div>
      </section>
        <div className="sidebar-page-container w-full py-10 px-4">
      <div className="max-w-5xl mx-auto relative grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <aside className="sticky top-1 space-y-6">
          {/* Services List */}
          <div className="bg-white shadow rounded p-4 border">
            <ul className="space-y-3">
              {[
                { text: "Instrumentation Services", link: "/services" },
                { text: "C&I Contracting Services", link: "/services" },
                { text: "Data Center Services", link: "/services" },
                { text: "Electrical Services", link: "/services" },
                { text: "Testing and Commissioning", link: "/services" },
                { text: "Manpower Services", link: "/servicesl" },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="flex items-center text-gray-700 hover:text-orange-500 transition">
                    <i className="fas fa-angle-double-right mr-2 text-orange-500"></i> {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Widget */}
          <div
            className="relative text-white p-6 rounded-lg bg-cover bg-center"
            style={{ backgroundImage: "url('/images/resource/service.jpg')" }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            <div className="relative z-10">
              <div className="text-3xl mb-2">
                <i className="flaticon-phone-call text-white"></i>
              </div>
              <h4 className="text-lg font-semibold">How Can We Help?</h4>
              <p className="text-sm mb-4">If you need any help, please feel free to contact us.</p>
              <a href="enquiryform.php" className="inline-block bg-orange-500 text-white px-4 py-2 rounded mt-2 text-sm font-medium">
                CONTACT US
              </a>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="col-span-2 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-500">:: Career ::</h1>

          <img
            src="https://www.mirajengineeringservices.com/images/resource/career.jpg"
            alt="career in electrical and instrumentation"
            className="rounded-lg w-full object-cover"
          />

          <div>
            <h3 className="text-xl font-semibold mb-4">We have requirement for following post:</h3>
            <ul className="space-y-3">
              <li>
                <i className="fas fa-angle-double-right text-orange-500 mr-2"></i>
                Electrical Testing Engineer having 5 years experience in a similar field.
              </li>
              <li>
                <i className="fas fa-angle-double-right text-orange-500 mr-2"></i>
                E&amp;I Site Manager having 10-15 years experience in similar field.
              </li>
              <li>
                <i className="fas fa-angle-double-right text-orange-500 mr-2"></i>
                Instrument Technician having 03-10 years experience in similar field.
              </li>
              <li>
                <i className="fas fa-angle-double-right text-orange-500 mr-2"></i>
                <a href="mailto:hr@yfenterprises.com" target='_blank' className="font-bold underline text-blue-500">Email: hr@yfenterprises.com</a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="mailto:miraj.resumes@gmail.com"
              className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
            >
              Send your resume
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Career
