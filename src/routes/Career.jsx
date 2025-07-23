import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [fileURL, setFileURL] = useState('');

  const handleResumePreview = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
    
      setFileURL(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (e.g., FormData, fetch/axios call)
    alert('Form submitted successfully!');
    setShowForm(false);
  };

  return (
    <div className='w-screen h-full'>
      {/* Banner */}
      <section className="bg-cover bg-center py-20" style={{ backgroundImage: 'url(https://html.themexriver.com/industo/images/background/9.jpg)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="text-white text-sm mb-2">
            <Link to={'/'} className="inline-block text-white">Home /</Link>
            <li className="inline-block ml-1 font-bold">Career</li>
          </ul>
        </div>
      </section>

      {/* Main Section */}
      <div className="sidebar-page-container w-full py-10 px-4 z-1">
        <div className="max-w-5xl mx-auto relative grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <aside className="sticky top-1 space-y-6">
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

            <div className="relative text-white p-6 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('/images/resource/service.jpg')" }}>
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-3xl mb-2">
                  <i className="flaticon-phone-call text-white"></i>
                </div>
                <h4 className="text-lg font-semibold">How Can We Help?</h4>
                <p className="text-sm mb-4">If you need any help, please feel free to contact us.</p>
                <a href="/contact#contact" className="inline-block bg-orange-500 text-white px-4 py-2 rounded mt-2 text-sm font-medium">CONTACT US</a>
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="col-span-2 space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500">:: Career ::</h1>
            <img src="https://www.mirajengineeringservices.com/images/resource/career.jpg" alt="career" className="rounded-lg w-full object-cover" />

            <div>
              <h3 className="text-xl font-semibold mb-4">We have requirement for following post:</h3>
              <ul className="space-y-3">
                <li><i className="fas fa-angle-double-right text-orange-500 mr-2"></i> Electrical Testing Engineer having 5 years experience.</li>
                <li><i className="fas fa-angle-double-right text-orange-500 mr-2"></i> E&I Site Manager with 10-15 years experience.</li>
                <li><i className="fas fa-angle-double-right text-orange-500 mr-2"></i> Instrument Technician with 3-10 years experience.</li>
                <li><i className="fas fa-angle-double-right text-orange-500 mr-2"></i>
                  <a href="mailto:hr@yfenterprises.com" target='_blank' className="font-bold underline text-blue-500">Email: hr@yfenterprises.com</a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                Send your resume
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed backdrop-blur-md  top-0 left-0 w-screen h-full bg-opacity-50 flex justify-center items-center z-[999]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative space-y-4"
            >
              <button onClick={() => setShowForm(false)} className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold">&times;</button>
              <h2 className="text-xl font-semibold text-orange-600 mb-4">Submit Your Resume</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input name="name" required type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
                <input name="email" required type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
                <input name="resume" required type="file" accept="application/pdf" onChange={handleResumePreview} className="w-full border p-2 rounded" />

                {fileURL && (
                  <iframe src={URL.createObjectURL(fileURL)} title="Resume Preview" className="w-full h-48 border rounded"></iframe>
                )}

                <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Career;
