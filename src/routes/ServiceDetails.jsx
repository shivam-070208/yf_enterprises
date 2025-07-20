import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui';

// Example service details data (expand as needed)
// Helper to import images using import.meta.url (Vite compatible)
function requireImage(filename) {
  return new URL(`../assets/YF PRODUCT/${filename}`, import.meta.url).href;
}

const serviceDetailsData = [
  {
    id: 1,
    service: 'Instrumentation Contracting Services',
    images: [
      requireImage('41.jpg'),
      requireImage('42.jpg'),
      requireImage('43.jpg'),
    ],
    provider: 'Instrumentation Services Provider',
    description:
      'We understand that instrumentation is critical for ensuring stable, accurate and reliable control of process. We offer following instrumentation services:',
    points: [
      'Supply & Installation of Transmitters, Switches & Gauges for Pressure, Temperature Flow and Level application, Control Valves, on / off valves, Breather valves, Safety Valves, panels, junction boxes, cable laying & termination, perforated cable trays work, pedestal fabrication.',
      'Supply & Installation of DCS and PLC systems, SCADA systems, hazardous area control systems, fire and gas systems and process installation, termination & commissioning of indicators, transmitters and controllers, switches and field instruments.',
      'Supply & Installation including cabling, marshalling panels, instrument air/gas tubing and impulse piping work.',
      'Testing, calibration & loop checking through fully fabricated workstations with certified testing equipment.',
      'Specialist knowledge on industrial projects for material selection and procurement related to electrical & instrumentation.',
      'Service & maintenance with instrument support & other fabrication work for control packages on or off site.',
      'Supply of Manpower like skilled Engineers, Technicians for shut down maintenance, installation and commissioning activities on deputation basis.'
    ],
    sections: [
      {
        title: 'Testing',
        text: 'In view of the increased needs for the certification and testing of Electrical Installations, & instrument testing we now offer a comprehensive testing, calibration NABL certification service. This service is particularly relevant to the requirements regarding periodic inspection and testing as per ISO 9000 standards.'
      },
      {
        title: 'Commissioning',
        text: 'We provide commissioning assistance on all size projects by Deploying Engineers, Supervisors, Instrument Technicians, Skilled Fitters and Electricians with the relevant industry experience and competencies. Having people with experience in the commissioning of Instrument & Electrical control systems in a diverse range of process and industries. Provide documentation that is traceable to international standards.'
      },
      {
        title: 'Calibration',
        text: 'MSIPL owns various ranges of latest certified test and calibration equipments. We offer onsite services of calibration all across India. We also have the ability to deliver in-lab factory calibration and test and calibration equipment as required. We set up fully equipped laboratory at sites as per requirements.'
      }
    ]
  }
  // Add more service details as needed
];

const ServiceDetails = () => {
  // For demo, always use the first service. For real app, use useParams to get id and filter.
  const { id } = useParams();
  const service = serviceDetailsData[0];

  return (
    <div className="page-wrapper bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 py-10">
        <div className="container mx-auto px-4">
          <ul className="flex gap-2 text-white text-sm mb-2">
            <li><Link to="/" className="underline">Home</Link></li>
            <li>/</li>
            <li><Link to="/services" className="underline">Services</Link></li>
            <li>/ {service.service}</li>
          </ul>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{service.service}</h2>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow p-4">
            <ul className="space-y-2">
              <li>
                <Link to="/services/details/1" className={`border-b pb-2 block ${parseInt(id) === 1 ? 'font-semibold text-blue-700' : ''}`}>Instrumentation Services</Link>
              </li>
              <li>
                <Link to="/services/details/2" className={`border-b pb-2 block ${parseInt(id) === 2 ? 'font-semibold text-blue-700' : ''}`}>C&I Contracting Services</Link>
              </li>
              <li>
                <Link to="/services/details/3" className={`border-b pb-2 block ${parseInt(id) === 3 ? 'font-semibold text-blue-700' : ''}`}>Data Center Services</Link>
              </li>
              <li>
                <Link to="/services/details/4" className={`border-b pb-2 block ${parseInt(id) === 4 ? 'font-semibold text-blue-700' : ''}`}>Electrical Services</Link>
              </li>
              <li>
                <Link to="/services/details/5" className={`border-b pb-2 block ${parseInt(id) === 5 ? 'font-semibold text-blue-700' : ''}`}>Testing and Commissioning</Link>
              </li>
              <li>
                <Link to="/services/details/6" className={`block ${parseInt(id) === 6 ? 'font-semibold text-blue-700' : ''}`}>Manpower Services</Link>
              </li>
            </ul>
          </div>
          <div className="bg-orange-100 rounded-lg shadow p-4 mt-8 flex flex-col items-center text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">How Can We Help?</div>
            <div className="text-gray-700 mb-4">If you need any help, please feel free to contact us.</div>
            <Link to="/contact#contact" className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition">CONTACT US</Link>
          </div>
        </aside>

        {/* Details Content */}
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">{service.provider}</h3>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                {service.images.map((img, i) => (
                  <img key={i} src={img} alt="service" className="rounded w-full md:w-1/3 object-cover h-40" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                {service.points.map((point, i) => (
                  <li key={i} className="mb-1">{point}</li>
                ))}
              </ul>
            </div>
            {service.sections.map((section, i) => (
              <div key={i} className="mb-6">
                <h4 className="text-xl font-bold text-blue-700 mb-2">{section.title}</h4>
                <p className="text-gray-700">{section.text}</p>
              </div>
            ))}
            <div className="text-center mt-8">
              <Button text="Request A Quote" href="/contact#contact" primarycolor="bg-orange-500" secondarycolor="bg-orange-600" />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ServiceDetails;
