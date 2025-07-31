
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
    service: "CCTV Projects",
    provider: "Y.F Enterprises",
    description: "Y.F Enterprises offers end-to-end execution of CCTV surveillance system projects for industrial, commercial, and infrastructure applications. With a growing demand for intelligent security systems in high-risk and critical operational environments, our team delivers robust, scalable, and fully integrated video surveillance solutions tailored to your site’s security requirements. We handle the complete lifecycle of CCTV implementation—from system design and hardware procurement to installation, configuration, and commissioning—ensuring high-definition monitoring, remote access, and fail-safe recording mechanisms.",
    points: [
      "Industrial-Grade Security Expertise: We understand critical environments and deliver surveillance systems that meet operational safety needs.",
      "Seamless System Integration: Our CCTV solutions can be linked with your existing control rooms, BMS, fire safety, and alarm systems.",
      "Certified Hardware & Structured Cabling: We use top-tier surveillance equipment with high reliability, even in hazardous locations.",
      "Pan-India Execution Capability: With active teams across India, we deploy CCTV systems for plants, terminals, substations, and facilities nationwide."
    ],
    sections: [
      {
        title: "System Design & Planning",
        text: "Site survey and security risk assessment. Coverage planning based on client-specific safety zones. Camera selection (IP, PTZ, thermal, dome, bullet, etc.). NVR/DVR capacity planning and network design."
      },
      {
        title: "Installation & Integration",
        text: "Mounting of CCTV cameras across designated zones. Laying of communication and power cables. Installation of NVR/DVRs, monitors, and power supplies. Configuration of recording setups, alerts, and retention policies. Integration with fire alarms, access control, or SCADA if required."
      },
      {
        title: "Testing, Commissioning & Handover",
        text: "Focus testing, motion sensitivity adjustment, and angle calibration. Network testing for remote access via mobile/PC. System performance verification under day/night conditions. Final documentation, user training, and system handover."
      }
    ]
  },
  {
    id: 4,
    service: "EPC Projects",
    provider: "Y.F Enterprises",
    description: "At Y.F Enterprises, we undertake comprehensive EPC projects for the Electrical and Instrumentation (E&I) domain, delivering integrated solutions across diverse sectors such as oil & gas, petrochemicals, power, water, fertilizers, and manufacturing. With a proven track record in executing time-bound, high-value industrial assignments, we manage the full lifecycle of a project—from detailed planning and resource procurement to on-site erection and final commissioning.",
    points: [
      "In-house expertise across multiple disciplines including E&I, automation, and mechanical installations.",
      "Proven execution for major clients such as HPCL, IOCL, BPCL, Honeywell, and Unitop.",
      "Commitment to safety, compliance, and on-time delivery.",
      "Nationwide deployment capability with dedicated site teams."
    ],
    sections: [
      {
        title: "Erection (Field Installation & Integration)",
        text: "Our erection scope includes the systematic deployment of electrical, mechanical, and instrumentation assets at project sites. This involves: Installation of cable trays, conduit systems, and support structures; Cable laying, glanding, and termination for power and control systems; Mounting and alignment of instruments, junction boxes, and local panels; Field cabling and tubing for pneumatic and signal lines; Installation of VFDs, MCCs, PCCs, control panels, and PLC cabinets; Earthing and lightning protection network installation. Our field teams are trained to work under strict safety and quality protocols, ensuring minimal downtime and precise integration with existing infrastructure."
      },
      {
        title: "Procurement (Material Sourcing & Logistics)",
        text: "Procurement in EPC projects is central to performance. Y.F Enterprises ensures timely sourcing and delivery of all critical equipment and components including: Electrical panels, transformers, and instrumentation devices; SCADA/PLC/DCS systems, analyzers, and transmitters; Flameproof equipment and hazardous area-rated enclosures; Field cabling, tubing, glands, junction boxes, and cable trays. We collaborate with reputed OEMs and certified vendors to guarantee compliance, quality, and seamless project progression."
      },
      {
        title: "Commissioning (Testing, Calibration & Handover)",
        text: "Commissioning is the final validation of all systems installed. Our experienced engineers undertake: Loop checking, functional testing, and signal verification; Calibration of field instruments and analyzers; Energization and dry-run testing of electrical systems; SCADA, DCS, and HMI integration testing; Safety system interlocks and emergency shutdown validation; Generation of test reports, documentation, and handover packages. We ensure that all systems are commissioned as per client specifications and industry standards, ready for safe and efficient operation."
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
    service: "Hydrocarbon Gas Detector (HCD) Services",
    provider: "Y.F Enterprises",
    description: "At Y.F Enterprises, we specialize in providing Hydrocarbon Gas Detector (HCD) services tailored to critical industrial environments such as oil & gas plants, petrochemical units, power stations, and manufacturing facilities. Our HCD solutions are designed to detect hazardous gases in real time, helping prevent accidents, ensure regulatory compliance, and protect personnel and assets. Hydrocarbon gases are highly flammable and often invisible. Early and accurate detection is essential to maintain a safe working environment—especially in zones classified as hazardous. That’s where Y.F Enterprises steps in with comprehensive HCD project execution and after-sales services.",
    points: [
      "Expertise in Hazardous Area Installations with certified technicians",
      "Integration with critical control systems (SCADA, PLC, ESD)",
      "Flameproof and weatherproof installations as per industrial safety standards",
      "PAN India support for both project deployment and post-installation service"
    ],
    sections: [
      {
        title: "Design & Planning",
        text: "Site surveys and hazard zone classification. System design as per ATEX, IECEx, and IS standards. Detector selection (IR, catalytic bead, ultrasonic, etc.) based on application."
      },
      {
        title: "Installation & Commissioning",
        text: "Mounting and wiring of gas detectors and controllers. Integration with SCADA, DCS, ESD, or BMS systems. Cable laying, glanding, and termination in flameproof enclosures. Sensor calibration and response testing. Functionality testing, documentation, and final commissioning."
      },
      {
        title: "Maintenance & AMC Support",
        text: "Periodic calibration and testing as per safety protocols. Sensor health monitoring and replacement. Troubleshooting and emergency breakdown support. Annual Maintenance Contracts (AMC) for sustained performance."
      }
    ]
  }
];


const ServiceDetails = () => {
  const { id } = useParams();
  const serviceIndex = Math.max(0, Math.min(serviceDetailsData.length - 1, parseInt(id, 10) - 1));
  const service = serviceDetailsData[serviceIndex];

  return (
    <div className="page-wrapper md:mt-0 mt-25 bg-gray-50 min-h-screen">
      {/* Header */}
      <section
        style={{ backgroundImage: `url(${'https://html.themexriver.com/industo/images/background/9.jpg'})` }}
        className=" py-20">
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
              {/* Custom rendering for EPC Projects section */}
              {/* Custom rendering for EPC and CCTV Projects section */}
              {service.id === 4 ? (
                // ...existing code for EPC Projects...
                <div className="mb-6">
                  {/* ...existing EPC rendering... */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-2 flex items-center">
                      <span role="img" aria-label="Erection" className="mr-2">🔧</span>
                      Erection (Field Installation & Integration)
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Installation of cable trays, conduit systems, and support structures</li>
                      <li>Cable laying, glanding, and termination for power and control systems</li>
                      <li>Mounting and alignment of instruments, junction boxes, and local panels</li>
                      <li>Field cabling and tubing for pneumatic and signal lines</li>
                      <li>Installation of VFDs, MCCs, PCCs, control panels, and PLC cabinets</li>
                      <li>Earthing and lightning protection network installation</li>
                    </ul>
                    <p className="text-gray-700 mt-2">Our field teams are trained to work under strict safety and quality protocols, ensuring minimal downtime and precise integration with existing infrastructure.</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-2 flex items-center">
                      <span role="img" aria-label="Procurement" className="mr-2">📦</span>
                      Procurement (Material Sourcing & Logistics)
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Electrical panels, transformers, and instrumentation devices</li>
                      <li>SCADA/PLC/DCS systems, analyzers, and transmitters</li>
                      <li>Flameproof equipment and hazardous area-rated enclosures</li>
                      <li>Field cabling, tubing, glands, junction boxes, and cable trays</li>
                    </ul>
                    <p className="text-gray-700 mt-2">We collaborate with reputed OEMs and certified vendors to guarantee compliance, quality, and seamless project progression.</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-2 flex items-center">
                      <span role="img" aria-label="Commissioning" className="mr-2">✅</span>
                      Commissioning (Testing, Calibration & Handover)
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Loop checking, functional testing, and signal verification</li>
                      <li>Calibration of field instruments and analyzers</li>
                      <li>Energization and dry-run testing of electrical systems</li>
                      <li>SCADA, DCS, and HMI integration testing</li>
                      <li>Safety system interlocks and emergency shutdown validation</li>
                      <li>Generation of test reports, documentation, and handover packages</li>
                    </ul>
                    <p className="text-gray-700 mt-2">We ensure that all systems are commissioned as per client specifications and industry standards, ready for safe and efficient operation.</p>
                  </div>
                </div>
              ) : service.id === 3 ? (
                <div className="mb-6">
                  {/* CCTV Projects Custom Section */}
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">CCTV Projects by Y.F Enterprises</h3>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">(Surveillance System Design, Installation & Commissioning)</h4>
                  <p className="text-gray-700 mb-4">Y.F Enterprises offers end-to-end execution of CCTV surveillance system projects for industrial, commercial, and infrastructure applications. With a growing demand for intelligent security systems in high-risk and critical operational environments, our team delivers robust, scalable, and fully integrated video surveillance solutions tailored to your site’s security requirements.<br/>We handle the complete lifecycle of CCTV implementation—from system design and hardware procurement to installation, configuration, and commissioning—ensuring high-definition monitoring, remote access, and fail-safe recording mechanisms.</p>
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-2 flex items-center">
                      <span role="img" aria-label="Scope" className="mr-2">⚙️</span>
                      Scope of Work Includes:
                    </h4>
                    {/* System Design & Planning */}
                    <div className="mb-4">
                      <h5 className="text-lg font-bold text-blue-600 mb-1 flex items-center">
                        <span role="img" aria-label="System Design" className="mr-2">📐</span>
                        System Design & Planning
                      </h5>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li>Site survey and security risk assessment</li>
                        <li>Coverage planning based on client-specific safety zones</li>
                        <li>Camera selection (IP, PTZ, thermal, dome, bullet, etc.)</li>
                        <li>NVR/DVR capacity planning and network design</li>
                      </ul>
                    </div>
                    {/* Installation & Integration */}
                    <div className="mb-4">
                      <h5 className="text-lg font-bold text-blue-600 mb-1 flex items-center">
                        <span role="img" aria-label="Installation" className="mr-2">🧰</span>
                        Installation & Integration
                      </h5>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li>Mounting of CCTV cameras across designated zones</li>
                        <li>Laying of communication and power cables</li>
                        <li>Installation of NVR/DVRs, monitors, and power supplies</li>
                        <li>Configuration of recording setups, alerts, and retention policies</li>
                        <li>Integration with fire alarms, access control, or SCADA if required</li>
                      </ul>
                    </div>
                    {/* Testing, Commissioning & Handover */}
                    <div className="mb-4">
                      <h5 className="text-lg font-bold text-blue-600 mb-1 flex items-center">
                        <span role="img" aria-label="Testing" className="mr-2">🧪</span>
                        Testing, Commissioning & Handover
                      </h5>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li>Focus testing, motion sensitivity adjustment, and angle calibration</li>
                        <li>Network testing for remote access via mobile/PC</li>
                        <li>System performance verification under day/night conditions</li>
                        <li>Final documentation, user training, and system handover</li>
                      </ul>
                    </div>
                  </div>
                  {/* Why Choose Y.F Enterprises for CCTV Projects? */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-2 flex items-center">
                      <span role="img" aria-label="Why Choose" className="mr-2">✅</span>
                      Why Choose Y.F Enterprises for CCTV Projects?
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Industrial-Grade Security Expertise: We understand critical environments and deliver surveillance systems that meet operational safety needs.</li>
                      <li>Seamless System Integration: Our CCTV solutions can be linked with your existing control rooms, BMS, fire safety, and alarm systems.</li>
                      <li>Certified Hardware & Structured Cabling: We use top-tier surveillance equipment with high reliability, even in hazardous locations.</li>
                      <li>Pan-India Execution Capability: With active teams across India, we deploy CCTV systems for plants, terminals, substations, and facilities nationwide.</li>
                    </ul>
                  </div>
                </div>
              ) : service.id === 7 ? (
                <div className="mb-6">
                  {/* HCD Services Custom Section */}
                  <h3 className="text-2xl font-bold text-orange-600 mb-2">Hydrocarbon Gas Detector (HCD) Services</h3>
                  <h4 className="text-lg font-semibold text-blue-700 mb-2">Industrial Safety through Advanced Gas Detection Technology</h4>
                  <p className="text-gray-700 mb-4">At Y.F Enterprises, we specialize in providing Hydrocarbon Gas Detector (HCD) services tailored to critical industrial environments such as oil & gas plants, petrochemical units, power stations, and manufacturing facilities. Our HCD solutions are designed to detect hazardous gases in real time, helping prevent accidents, ensure regulatory compliance, and protect personnel and assets.<br/>Hydrocarbon gases are highly flammable and often invisible. Early and accurate detection is essential to maintain a safe working environment—especially in zones classified as hazardous. That’s where Y.F Enterprises steps in with comprehensive HCD project execution and after-sales services.</p>
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-2 flex items-center">
                      <span role="img" aria-label="Scope" className="mr-2">⚙️</span>
                      Our HCD Services Include:
                    </h4>
                    {/* Design & Planning */}
                    <div className="mb-4">
                      <h5 className="text-lg font-bold text-blue-600 mb-1 flex items-center">
                        <span role="img" aria-label="Design" className="mr-2">🔍</span>
                        Design & Planning
                      </h5>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li>Site surveys and hazard zone classification</li>
                        <li>System design as per ATEX, IECEx, and IS standards</li>
                        <li>Detector selection (IR, catalytic bead, ultrasonic, etc.) based on application</li>
                      </ul>
                    </div>
                    {/* Installation & Commissioning */}
                    <div className="mb-4">
                      <h5 className="text-lg font-bold text-blue-600 mb-1 flex items-center">
                        <span role="img" aria-label="Installation" className="mr-2">🧰</span>
                        Installation & Commissioning
                      </h5>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li>Mounting and wiring of gas detectors and controllers</li>
                        <li>Integration with SCADA, DCS, ESD, or BMS systems</li>
                        <li>Cable laying, glanding, and termination in flameproof enclosures</li>
                        <li>Sensor calibration and response testing</li>
                        <li>Functionality testing, documentation, and final commissioning</li>
                      </ul>
                    </div>
                    {/* Maintenance & Support */}
                    <div className="mb-4">
                      <h5 className="text-lg font-bold text-blue-600 mb-1 flex items-center">
                        <span role="img" aria-label="Maintenance" className="mr-2">🔄</span>
                        Maintenance & Support
                      </h5>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li>Periodic calibration and testing as per safety protocols</li>
                        <li>Sensor health monitoring and replacement</li>
                        <li>Troubleshooting and emergency breakdown support</li>
                        <li>Annual Maintenance Contracts (AMC) for sustained performance</li>
                      </ul>
                    </div>
                  </div>
                  {/* Why Choose Y.F Enterprises for HCD Services? */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-blue-700 mb-2 flex items-center">
                      <span role="img" aria-label="Why Choose" className="mr-2">✅</span>
                      Why Choose Y.F Enterprises for HCD Services?
                    </h4>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Expertise in Hazardous Area Installations with certified technicians</li>
                      <li>Integration with critical control systems (SCADA, PLC, ESD)</li>
                      <li>Flameproof and weatherproof installations as per industrial safety standards</li>
                      <li>PAN India support for both project deployment and post-installation service</li>
                    </ul>
                  </div>
                </div>
              ) : (
                service.sections.map((section, i) => (
                  <div key={i} className="mb-6">
                    <h4 className="text-xl font-bold text-blue-700 mb-2">{section.title}</h4>
                    <p className="text-gray-700">{section.text.replace('equipments', 'equipment').replace('in-lab factory calibration and test and calibration equipment as required.', 'in-lab factory calibration and test equipment as required.')}</p>
                  </div>
                ))
              )}
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
