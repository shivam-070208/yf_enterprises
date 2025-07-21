import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui';
import serviceImages from '../assets/serviceImages';

// Example service details data (expand as needed)
// Helper to import images using import.meta.url (Vite compatible)
function requireImage(filename) {
  return new URL(`../assets/YF PRODUCT/${filename}`, import.meta.url).href;
}

const serviceDetailsData = [
  {
    id: 1,
    service: 'Instrumentation Solutions',
    images: [requireImage('41.jpg'), requireImage('42.jpg'), requireImage('43.jpg')],
    provider: 'Instrumentation Services Provider',
    description:
      'Instrumentation is the backbone of precision-driven industries. YF Enterprises delivers specialized solutions that enhance performance, efficiency, and control.',
    points: [
      'Installation of transmitters, switches, gauges (pressure, temperature, flow, and level).',
      'Setup of control valves, breather valves, safety valves, junction boxes, and instrumentation panels.',
      'Installation of PLC, SCADA, and DCS systems tailored for industrial automation.',
      'Structured cabling, impulse piping, instrument air/gas tubing, and marshalling panel connections.',
      'Loop checking, testing, and NABL-accredited calibration using high-end equipment.',
      'Onsite/offsite prefabrication of supports and customized control package installations.',
      'Deployment of certified engineers and technicians for shutdown and commissioning operations.'
    ],
    sections: [
      {
        title: 'Testing',
        text: 'We conduct end-to-end testing for electrical installations and field instruments. Our services comply with ISO 9000 standards and are NABL-certified.'
      },
      {
        title: 'Commissioning',
        text: 'YF Enterprises provides experienced commissioning engineers, fitters, and electricians capable of handling complex control systems. Our deliverables include international-standard documentation.'
      },
      {
        title: 'Calibration',
        text: 'Our mobile calibration lab and in-house equipment inventory allow us to deliver precision calibration services across India.'
      }
    ]
  },
  {
    id: 2,
    service: 'C&I Contracting',
    images: [requireImage('44.jpg'), requireImage('45.jpg'), requireImage('46.jpg')],
    provider: 'Control & Instrumentation Contract Experts',
    description:
      'YF Enterprises excels in turnkey Control & Instrumentation (C&I) contracting, delivering tailored automation and integration services for industrial systems.',
    points: [
      'Complete C&I system design and layout planning for process industries.',
      'Supply and installation of PLC, SCADA, RTU, and DCS systems with real-time monitoring capabilities.',
      'Field cabling, signal wiring, earthing, and termination with proper tagging and documentation.',
      'Installation of automation panels, remote IO panels, and VFD drives.',
      'Loop testing, simulation testing, and system I/O validation before commissioning.',
      'Custom HMI programming and SCADA screen development as per client needs.',
      'AMC and technical support post-commissioning for seamless plant operation.'
    ],
    sections: [
      {
        title: 'PLC/DCS Integration',
        text: 'We integrate advanced PLC and DCS systems to streamline plant processes and maximize productivity.'
      },
      {
        title: 'Field Cabling',
        text: 'We handle high-quality field wiring with proper shielding, routing, and gland sealing practices.'
      },
      {
        title: 'Commissioning & Handover',
        text: 'Comprehensive end-to-end commissioning support, including FAT, SAT, and system documentation.'
      }
    ]
  },
  {
    id: 3,
    service: 'Data Center Solutions',
    images: [requireImage('47.jpg'), requireImage('48.jpg'), requireImage('49.jpg')],
    provider: 'Data Center Infrastructure Experts',
    description:
      'We provide robust, scalable, and energy-efficient data center solutions to support IT infrastructure and mission-critical applications.',
    points: [
      'Design and construction of tier-compliant data centers (Tier I to Tier IV).',
      'Installation of UPS systems, battery banks, precision air conditioning (PAC), and cold/hot aisle containment.',
      'Structured cabling, rack installations, and cable tray management.',
      'Access control, CCTV surveillance, fire detection, and suppression system setup.',
      'Power distribution and redundancy planning (PDUs, LT panels, diesel generators).',
      'Environment monitoring sensors and DCIM software for data center visibility.',
      'Annual maintenance and real-time support for uptime assurance.'
    ],
    sections: [
      {
        title: 'Power Backup',
        text: 'Reliable backup systems including UPS, DG Sets, and dual-source power integration for uninterrupted performance.'
      },
      {
        title: 'Cooling Solutions',
        text: 'Efficient PAC systems, aisle containment, and thermal design for optimal environment control.'
      },
      {
        title: 'Security & Monitoring',
        text: 'Multi-layered physical and digital security with 24x7 monitoring and access logging.'
      }
    ]
  },
  {
    id: 4,
    service: 'Electrical Projects',
    images: [requireImage('50.jpg'), requireImage('51.jpg'), requireImage('52.jpg')],
    provider: 'Electrical Engineering Project Specialists',
    description:
      'From concept to commissioning, YF Enterprises delivers electrical project solutions that power industrial, commercial, and infrastructure developments.',
    points: [
      'Turnkey execution of LT & HT power distribution systems.',
      'Panel fabrication, supply, installation, and testing (PCC, MCC, APFC, VFD panels).',
      'Cable laying (underground, overhead), glanding, and termination.',
      'Lighting systems, earthing grids, and surge protection systems.',
      'Transformer erection, bus duct installation, and switchgear testing.',
      'Load analysis, energy audits, and power factor improvement services.',
      'Liaisoning with electrical utilities and local authorities for statutory approvals.'
    ],
    sections: [
      {
        title: 'Design & Erection',
        text: 'We offer complete electrical design, BOQ preparation, and on-site erection as per IS and IEC standards.'
      },
      {
        title: 'Testing & Protection',
        text: 'We perform insulation resistance, earth resistance, and relay testing using calibrated test kits.'
      },
      {
        title: 'Commissioning & Handover',
        text: 'Final system commissioning, trial runs, and handover documentation with test reports.'
      }
    ]
  },
  {
    id: 5,
    service: 'Testing & Commissioning',
    images: [requireImage('53.jpg'), requireImage('54.jpg'), requireImage('55.jpg')],
    provider: 'Electrical Testing & QC Experts',
    description:
      'We offer comprehensive testing and commissioning services to validate and ensure safe operation of your electrical systems.',
    points: [
      'Relay coordination study and protection relay testing.',
      'Primary and secondary injection testing for circuit breakers.',
      'Insulation resistance (IR), contact resistance, and earth resistance testing.',
      'Transformer oil testing and power factor testing of capacitors.',
      'HV testing, VLF testing for cables, and SF6 gas testing for GIS equipment.',
      'Thermal imaging and harmonic analysis for preventive maintenance.',
      'Documentation of test reports, certificates, and third-party inspection compliance.'
    ],
    sections: [
      {
        title: 'Testing Capabilities',
        text: 'We use advanced testing instruments for detailed diagnostics and quality assurance.'
      },
      {
        title: 'Onsite Commissioning',
        text: 'Our engineers ensure live commissioning support with safety and efficiency.'
      },
      {
        title: 'Report & Compliance',
        text: 'We generate digital reports and third-party certifications for QA and regulatory audits.'
      }
    ]
  },
  {
    id: 6,
    service: 'Manpower Deployment',
    images: [requireImage('56.jpg'), requireImage('57.jpg'), requireImage('58.jpg')],
    provider: 'Industrial Technical Manpower Provider',
    description:
      'YF Enterprises supplies skilled manpower tailored for complex engineering projects and maintenance operations.',
    points: [
      'Deployment of certified electricians, fitters, welders, and instrumentation technicians.',
      'Provision of engineers and supervisors for short-term and long-term projects.',
      'Support for shutdown, turnaround, and emergency maintenance tasks.',
      'Manpower for cable laying, termination, panel wiring, and equipment installation.',
      'Time-bound mobilization of teams across India for onshore/offshore projects.',
      'Strict adherence to client-specific skill matrix and safety norms.',
      'Manpower tracking, daily reporting, and performance-based deployment.'
    ],
    sections: [
      {
        title: 'Certified Workforce',
        text: 'We supply experienced and certified personnel with domain-specific expertise.'
      },
      {
        title: 'Nationwide Reach',
        text: 'Our manpower teams are available across metro, tier-2, and remote industrial zones.'
      },
      {
        title: 'Flexible Deployment',
        text: 'From single resource to bulk deployment – we offer tailor-fit solutions for every project.'
      }
    ]
  }
];

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceIndex = Math.max(0, Math.min(serviceDetailsData.length - 1, parseInt(id, 10) - 1));
  const service = serviceDetailsData[serviceIndex];

  return (
    <div className="page-wrapper bg-gray-50 min-h-screen">
      {/* Header */}
      <section
      style={{ backgroundImage: `url(${'https://html.themexriver.com/industo/images/background/9.jpg'})` }}
      className=" py-10">
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

      {/* Sidebar and Banner Image Row */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        {/* Sidebar */}
        <aside className="col-span-1 mb-8 md:mb-0 flex-shrink-0">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <ul className="space-y-2">
              {serviceDetailsData.map((s, idx) => (
                <li key={s.id}>
                  <Link
                    to={`/services/details/${s.id}`}
                    className={`border-b pb-2 block ${serviceIndex === idx ? 'font-semibold text-blue-700' : ''}`}
                  >
                    {s.service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-100 rounded-lg shadow p-4 flex flex-col items-center text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">How Can We Help?</div>
            <div className="text-gray-700 mb-4">If you need any help, please feel free to contact us.</div>
            <Link to="/contact#contact" className="bg-orange-500 text-white px-4 py-2 rounded font-semibold hover:bg-orange-600 transition">CONTACT US</Link>
          </div>
        </aside>
        {/* Main Column: Image + Content */}
        <div className="col-span-1 md:col-span-3 flex flex-col">
          <div className="w-full flex  bg-white">
            <img
              src={serviceImages[`service${service.id}`]}
              alt={service.service}
              className="rounded-lg object-cover w-full max-w-3xl h-60 md:h-90 shadow mb-6"
            />
          </div>
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-orange-600 mb-2">{service.provider}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  {service.points.map((point, i) => (
                    <li key={i} className="mb-1">{point.replace('shut down', 'shutdown')}</li>
                  ))}
                </ul>
              </div>
              {service.sections.map((section, i) => (
                <div key={i} className="mb-6">
                  <h4 className="text-xl font-bold text-blue-700 mb-2">{section.title}</h4>
                  <p className="text-gray-700">{section.text.replace('equipments', 'equipment').replace('in-lab factory calibration and test and calibration equipment as required.', 'in-lab factory calibration and test equipment as required.')}</p>
                </div>
              ))}
              <div className="text-center mt-8">
                <Button text="Request A Quote" href="/contact#contact" primarycolor="bg-orange-500" secondarycolor="bg-orange-600" />
              </div>
            </div>
          </main>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetails;
