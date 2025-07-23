
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../ui';
import serviceImages from '../assets/serviceImages';

const serviceDetailsData = [
  {
    id: 1,
    service: "Instrumentation Solutions",
    provider: "Y.F Enterprises",
    description: "Precision-driven instrumentation services for industrial automation, calibration, and process control.",
    points: [
      "Industrial sensor installation & configuration",
      "SCADA & PLC instrumentation integration",
      "Flow, pressure & temperature instrumentation setup",
      "Calibration & certification as per ISO standards"
    ],
    sections: [
      "Field Instrumentation Deployment",
      "Instrument Cabling & Loop Wiring",
      "Calibration & Accuracy Testing",
      "Analog & Digital Signal Integration",
      "Final Handover with Performance Report"
    ]
  },
  {
    id: 2,
    service: "C&I Contracting",
    provider: "Y.F Enterprises",
    description: "End-to-end Control & Instrumentation contracting including PLC/DCS integration, field cabling, and commissioning.",
    points: [
      "PLC/DCS control panel supply and integration",
      "Complete cable laying, termination & glanding",
      "Signal loop testing & documentation",
      "Final commissioning with client SAT"
    ],
    sections: [
      "Control Panel Fabrication",
      "Cable Tray Installation",
      "Field Cabling Termination",
      "Loop Check & Functional Testing",
      "PLC/DCS Programming Support",
      "Control Room Finalization"
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
      "Surveillance System Design",
      "Wired & Wireless Camera Setup",
      "NVR/DVR Rack Mounting",
      "Mobile App Integration & Alerts",
      "Annual AMC & Reporting"
    ]
  },
  {
    id: 4,
    service: "EPC Projects",
    provider: "Y.F Enterprises",
    description: "Complete electrical design, erection, testing, and commissioning for industrial and commercial setups.",
    points: [
      "Design engineering for HT/LT systems",
      "Procurement of electrical equipment",
      "On-site erection & installation",
      "Commissioning & documentation"
    ],
    sections: [
      "HT/LT Electrical Design",
      "Bill of Material Preparation",
      "Procurement & Vendor Coordination",
      "On-site Execution & Cabling",
      "Testing, Compliance, & Final Commissioning"
    ]
  },
  {
    id: 5,
    service: "Testing & Commissioning",
    provider: "Y.F Enterprises",
    description: "Advanced testing and commissioning services for electrical panels, transformers, and substation equipment.",
    points: [
      "Primary and secondary injection testing",
      "Relay coordination and testing",
      "Transformer insulation resistance & IR testing",
      "HT/LT panel functionality tests"
    ],
    sections: [
      "Relay Logic Testing",
      "IR & PI Value Testing",
      "HV Pressure Test",
      "Switchgear Operational Check",
      "Final Report Submission & Certification"
    ]
  },
  {
    id: 6,
    service: "Manpower Deployment",
    provider: "Y.F Enterprises",
    description: "Skilled technical manpower supply for project execution, maintenance, and industrial operations support.",
    points: [
      "Electricians, fitters, welders on contract",
      "Shift-based or project-based workforce",
      "PAN India skilled technician network",
      "Safety-compliant labor provisioning"
    ],
    sections: [
      "Daily Workforce Management",
      "Skill-based Allocation (ITI, Diploma)",
      "On-Site Safety Training",
      "HR Compliance & Attendance Logs",
      "Client Coordination & Feedback"
    ]
  },
  {
    id: 7,
    service: "HCD Services",
    provider: "Y.F Enterprises",
    description: "High Capacity Diesel Generator services including installation, maintenance, and fuel management for uninterrupted power supply.",
    points: [
      "DG set installation (15kVA–1000kVA)",
      "AMC and on-call servicing",
      "Fuel efficiency management",
      "Noise and emission control compliance"
    ],
    sections: [
      "DG Sizing & Load Calculation",
      "DG Installation & Earthing",
      "Battery & Fuel Line Setup",
      "Control Panel Connection",
      "Preventive Maintenance & Noise Compliance"
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
        style={{ backgroundImage: `url('https://html.themexriver.com/industo/images/background/9.jpg')` }}
        className="py-10"
      >
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

        {/* Main Content */}
        <div className="col-span-1 md:col-span-3">
          <img
            src={serviceImages[`service${service.id}`]}
            alt={service.service}
            className="rounded-lg object-cover w-full h-60 md:h-90 shadow mb-6"
          />
          <div className="bg-white rounded-lg shadow p-8">
            <h3 className="text-2xl font-bold text-orange-600 mb-2">{service.provider}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            {service.sections.map((section, i) => (
              <div key={i} className="mb-4">
                <h4 className="text-xl font-semibold text-blue-700">{section}</h4>
              </div>
            ))}
            <div className="text-center mt-8">
              <Button
                text="Request A Quote"
                href="/contact#contact"
                primarycolor="bg-orange-500"
                secondarycolor="bg-orange-600"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
