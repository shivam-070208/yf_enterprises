
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui';
import serviceImages from '../assets/serviceImages';

const serviceDetailsData = [
  {
    id: 1,
    service: "Instrumentation Solutions", 
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
    service: "C&I Contracting",
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
    service: "CCTV Sources",
    provider: "Y.F Enterprises",
    description: "Comprehensive CCTV solutions including installation, maintenance, and monitoring services to ensure security and surveillance for residential, commercial, and industrial properties.",
    points: [
      "IP-based & Analog CCTV installation",
      "NVR/DVR setup with storage optimization",
      "Remote access configuration",
      "Annual maintenance & health checks"
    ],
    sections: [
      {
        title: "System Design & Planning",
        text: "We begin with a thorough survey and risk assessment to identify coverage areas, followed by selection of camera types like dome, PTZ, and thermal variants. Network layout, DVR/NVR sizing, and integration scopes are finalized at this stage."
      },
      {
        title: "Installation & Integration",
        text: "Our team installs CCTV cameras with precision across key zones, sets up cabling, power supply units, and integrates systems with existing BMS, SCADA, or alarm networks. We ensure robust mounting and clear line-of-sight coverage."
      },
      {
        title: "Testing, Commissioning & Handover",
        text: "We carry out live testing under different conditions, enable mobile access, configure alert protocols, and hand over detailed user documentation. User training and final project handover are included."
      }
    ]
  },
  {
    id: 4,
    service: "EPC Projects",
    provider: "Electrical Engineering Project Specialists",
    description:
      "From concept to commissioning, YF Enterprises delivers electrical project solutions that power industrial, commercial, and infrastructure developments.",
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
        title: "Erection (Field Installation & Integration)",
        text: "Our erection scope includes systematic deployment of electrical and instrumentation assets at project sites. We install cable trays, conduit systems, MCCs, PCCs, junction boxes, VFDs, and control panels with precision, ensuring robust field integration that aligns with safety and compliance norms."
      },
      {
        title: "Procurement (Material Sourcing & Logistics)",
        text: "We manage timely sourcing of critical components like SCADA systems, panels, flameproof enclosures, and instrumentation devices from reputed OEMs. Our strong vendor network ensures adherence to quality, compliance, and schedule requirements."
      },
      {
        title: "Commissioning (Testing, Calibration & Handover)",
        text: "Commissioning includes loop checking, calibration, dry-run testing, SCADA/DCS integration, and generation of detailed test reports. Our experts validate every component and system before handing it over for live operation."
      }
    ]
  },
  {
    id: 5,
    service: 'Testing & Commissioning',
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
    provider: 'Industrial Technical Manpower Provider',
    description:
      'YF Enterprises supplies skilled manpower tailored for complex engineering projects and maintenance operations.',
    points: [
      "Electricians, fitters, welders on contract",
      "Shift-based or project-based workforce",
      "PAN India skilled technician network",
      "Safety-compliant labor provisioning"
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
  },
  {
    id: 7,
    service: "HCD Services",
    provider: "Industrial Safety through Advanced Gas Detection",
    description: "High Capacity Diesel Generator services including installation, maintenance, and fuel management for uninterrupted power supply.",
    points: [
      "DG set installation (15kVA–1000kVA)",
      "AMC and on-call servicing",
      "Fuel efficiency management",
      "Noise and emission control compliance"
    ],
    sections: [
      {
        title: "Design & Planning",
        text: "We assess site hazards and design detector layouts in line with ATEX and IECEx standards. Appropriate sensors like IR, catalytic bead, or ultrasonic types are selected based on application need and classification of the zone."
      },
      {
        title: "Installation & Commissioning",
        text: "We install detectors, wiring, control units, and ensure integration with SCADA, ESD, or BMS systems. Functional testing and sensor calibration are carried out before formal handover."
      },
      {
        title: "Maintenance & AMC Support",
        text: "Our services include periodic recalibration, emergency support, and annual maintenance contracts (AMCs) for sensor longevity and compliance. We ensure round-the-clock availability to protect life and assets."
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

      {/* Sidebar + Content */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
        {/* Sidebar */}
        <aside className="col-span-1">
          <div className="bg-white rounded-lg shadow p-4 mb-6">
            <ul className="space-y-2">
              {serviceDetailsData.map((s, idx) => (
                <li key={s.id}>
                  <Link
                    to={`/services/details/${s.id}`}
                    className={`block border-b pb-2 ${serviceIndex === idx ? 'text-blue-700 font-semibold' : ''}`}
                  >
                    {s.service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-orange-100 rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-2">How Can We Help?</div>
            <div className="text-gray-700 mb-4">If you need any help, please feel free to contact us.</div>
            <Link to="/contact#contact" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">CONTACT US</Link>
          </div>
        </aside>
        {/* Main Column: Image + Content */}
        <div className="col-span-1 md:col-span-3 flex flex-col">
          <div className="w-full flex  bg-white">
          <img
            src={serviceImages[`service${service.id}`]}
            alt={service.service}
            className="rounded-lg object-cover w-full h-60 md:h-90 shadow mb-6"
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
