// SEO Configuration for YF Enterprises
// This file contains route-specific SEO data with comprehensive keywords and structured data

const BASE_URL = 'https://yfenterprises.com';

// Company Schema for structured data
const companySchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "YF Enterprises",
  "alternateName": "Y.F Enterprises",
  "url": BASE_URL,
  "logo": `${BASE_URL}/assets/yf-logo.png`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9748413152",
    "contactType": "Customer Service",
    "areaServed": "IN",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "62, Bentick Street",
    "addressLocality": "Kolkata",
    "addressRegion": "West Bengal",
    "postalCode": "700069",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Person",
    "name": "Omar Farooque"
  },
  "foundingDate": "2013",
  "description": "Leading industrial engineering services provider specializing in instrumentation, electrical, control systems, and automation solutions.",
  "sameAs": [
    "https://linkedin.com/company/yf-enterprises",
    "https://twitter.com/yfenterprises"
  ]
};

// Service Schema template
const createServiceSchema = (serviceName, serviceDescription) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": serviceDescription,
  "provider": {
    "@type": "Organization",
    "name": "YF Enterprises",
    "url": BASE_URL
  },
  "areaServed": "India",
  "serviceType": "Industrial Engineering"
});

// SEO Configuration for each route
export const seoConfig = {
  // Home Page SEO
  home: {
    title: "YF Enterprises - Leading Industrial Engineering Services in Kolkata | Instrumentation & Electrical Solutions",
    description: "YF Enterprises: Premier industrial engineering company in Kolkata since 2013. Expert in instrumentation, electrical, control systems, automation, BMS, firefighting & industrial security. Serving oil & gas, power, pharma, cement industries across India with 24/7 support.",
    keywords: "YF Enterprises Kolkata, industrial engineering services, instrumentation services, electrical contracting, control systems automation, BMS implementation, firefighting systems, industrial security, oil gas engineering, power plant services, pharma engineering, cement industry, electrical testing commissioning, industrial maintenance, engineering contractors India, Omar Farooque, multidisciplinary engineering, project execution, quality safety innovation, client-centric solutions, end-to-end engineering, Bentick Street Kolkata, West Bengal engineering company, industrial automation Kolkata, electrical panel design, substation equipment, transformer testing, PLC DCS integration, field instrumentation, process control systems, calibration services, technical manpower supply, EPC projects India, C&I contracting, CCTV surveillance systems, HCD services, diesel generator maintenance, fuel management, uninterrupted power supply, 24x7 technical support, emergency repair services",
    canonicalUrl: BASE_URL,
    structuredData: {
      ...companySchema,
      "@graph": [
        companySchema,
        {
          "@type": "WebSite",
          "name": "YF Enterprises",
          "url": BASE_URL,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${BASE_URL}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        }
      ]
    }
  },

  // About Page SEO
  about: {
    title: "About YF Enterprises - 15+ Years Industrial Engineering Excellence in Kolkata | Founded 2013",
    description: "Discover YF Enterprises: 15+ years of industrial engineering excellence in Kolkata. Founded by Omar Farooque in 2013, we've completed 30+ projects, serving 20+ trusted clients across oil & gas, power, pharma, cement industries. Our mission: delivering quality engineering solutions with integrity, trust & 24/7 support across India.",
    keywords: "about YF Enterprises, Omar Farooque founder, Kolkata engineering company history, 15 years experience, industrial engineering expertise, 30 completed projects, 20 trusted clients, company mission vision values, engineering excellence Kolkata, multidisciplinary services, oil gas power pharma cement, West Bengal industrial services, established 2013, quality safety innovation, client-centric approach, traditional trust modern efficiency, end-to-end solutions India, electrical control instrumentation, BMS firefighting security, industrial automation specialists, reliable project execution, professional engineering team, integrity honesty dedication, customer satisfaction focus, efficient safe reliable projects, diverse industrial sectors, engineering service provider, Bentick Street office, Kolkata headquarters, industrial solutions expertise",
    canonicalUrl: `${BASE_URL}/about`,
    structuredData: {
      ...companySchema,
      "knowsAbout": [
        "Industrial Engineering",
        "Instrumentation Services",
        "Electrical Contracting",
        "Control Systems",
        "Automation",
        "BMS Implementation",
        "Firefighting Systems",
        "Industrial Security"
      ]
    }
  },

  // Services Page SEO
  services: {
    title: "Industrial Engineering Services | Instrumentation, Electrical, C&I Contracting | YF Enterprises Kolkata",
    description: "Comprehensive industrial engineering services by YF Enterprises Kolkata: Instrumentation Solutions, C&I Contracting, Electrical Services, EPC Projects, Testing & Commissioning, Manpower Deployment, HCD Services, CCTV Systems. Serving oil & gas, power, pharma, cement industries across India with expert technical solutions.",
    keywords: "industrial engineering services Kolkata, instrumentation solutions, C&I contracting services, electrical EPC projects, testing commissioning services, manpower deployment, HCD services, CCTV surveillance systems, precision instrumentation, industrial automation, process control, calibration services, PLC DCS integration, field cabling commissioning, control instrumentation contracting, electrical design erection, transformer testing, substation equipment, electrical panels, earthing systems, electrical maintenance, performance safety standards, technical manpower supply, short-term long-term projects, maintenance operations, high capacity diesel generator, installation maintenance fuel management, power supply solutions, security surveillance installation, residential commercial industrial CCTV, monitoring maintenance services, oil gas engineering, power plant services, pharma engineering, cement industry solutions, multidisciplinary engineering, project execution expertise, quality safety innovation",
    canonicalUrl: `${BASE_URL}/services`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Instrumentation Solutions",
          "description": "Precision-driven instrumentation services for industrial automation, calibration, and process control.",
          "provider": {
            "@type": "Organization",
            "name": "YF Enterprises"
          }
        },
        {
          "@type": "Service", 
          "position": 2,
          "name": "C&I Contracting",
          "description": "End-to-end Control & Instrumentation contracting including PLC/DCS integration, field cabling, and commissioning."
        },
        {
          "@type": "Service",
          "position": 3, 
          "name": "CCTV Systems",
          "description": "Comprehensive CCTV solutions including installation, maintenance, and monitoring services."
        },
        {
          "@type": "Service",
          "position": 4,
          "name": "EPC Projects", 
          "description": "Complete electrical design, erection, testing, and commissioning for industrial and commercial setups."
        },
        {
          "@type": "Service",
          "position": 5,
          "name": "Testing & Commissioning",
          "description": "Advanced testing and commissioning services for electrical panels, transformers, and substation equipment."
        },
        {
          "@type": "Service",
          "position": 6,
          "name": "Manpower Deployment",
          "description": "Skilled technical manpower supply for project execution, maintenance, and industrial operations."
        },
        {
          "@type": "Service",
          "position": 7,
          "name": "HCD Services", 
          "description": "High Capacity Diesel Generator services including installation, maintenance, and fuel management."
        }
      ]
    }
  },

  // Products Page SEO
  products: {
    title: "Flameproof & Industrial Products | Lighting, Electrical, Safety Equipment | YF Enterprises Kolkata",
    description: "Explore YF Enterprises' comprehensive range of flameproof & industrial products: explosion-proof lighting, electrical equipment, safety devices, industrial components, control panels, instrumentation products. High-quality, certified products for oil & gas, petrochemical, mining, chemical industries across India.",
    keywords: "flameproof products Kolkata, industrial products catalog, explosion proof lighting, electrical safety equipment, industrial components, flameproof lighting solutions, industrial electrical products, safety equipment India, control panels, instrumentation products, explosion proof equipment, hazardous area lighting, flameproof enclosures, industrial lighting solutions, electrical protection devices, safety control systems, certified industrial products, oil gas products, petrochemical equipment, mining safety products, chemical industry equipment, Ex-proof equipment, ATEX certified products, explosion prevention, industrial safety solutions, flameproof junction boxes, explosion proof motors, hazardous location equipment, industrial switches sockets, emergency lighting systems, LED flameproof lights, industrial cable glands, conduit fittings, control station boxes, push button stations, hooter beacon systems, intrinsically safe equipment, zone classification products, industrial automation products, process instrumentation",
    canonicalUrl: `${BASE_URL}/products`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Flameproof & Industrial Products",
      "description": "Comprehensive range of flameproof and industrial products for hazardous areas and industrial applications",
      "brand": {
        "@type": "Brand",
        "name": "YF Enterprises"
      },
      "manufacturer": {
        "@type": "Organization", 
        "name": "YF Enterprises"
      },
      "category": "Industrial Equipment"
    }
  },

  // Contact Page SEO  
  contact: {
    title: "Contact YF Enterprises | Industrial Engineering Services Kolkata | Get Quote & Technical Support",
    description: "Contact YF Enterprises for industrial engineering services in Kolkata. Get expert consultation, project quotes & technical support. Office: 62 Bentick Street, Kolkata-700069. Phone: +91-9748413152. Email: tenders@yfenterprises.com. Branches in India, Dubai, Saudi Arabia, Tanzania, Mozambique, Bangladesh.",
    keywords: "contact YF Enterprises, Kolkata industrial engineering, 62 Bentick Street Kolkata, phone +91-9748413152, email tenders@yfenterprises.com, industrial engineering consultation, project quotes, technical support, engineering services inquiry, Kolkata office address, West Bengal 700069, contact industrial engineers, get engineering quote, technical consultation, project inquiry, engineering support, industrial services contact, Omar Farooque contact, YF Enterprises branches, India Dubai Saudi Arabia, Tanzania Mozambique Bangladesh, international engineering services, global industrial solutions, engineering project consultation, technical expertise contact, industrial automation inquiry, instrumentation services contact, electrical contracting quote, C&I services inquiry, EPC project consultation, testing commissioning quote, manpower services contact, HCD services inquiry, CCTV installation quote, industrial maintenance contact, emergency support services, 24/7 technical assistance",
    canonicalUrl: `${BASE_URL}/contact`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Organization",
        "name": "YF Enterprises",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9748413152",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint", 
            "email": "tenders@yfenterprises.com",
            "contactType": "sales"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "62, Bentick Street",
          "addressLocality": "Kolkata", 
          "addressRegion": "West Bengal",
          "postalCode": "700069",
          "addressCountry": "IN"
        }
      }
    }
  },

  // Career Page SEO
  career: {
    title: "Careers at YF Enterprises | Engineering Jobs Kolkata | Electrical, Instrumentation, Site Manager Positions",
    description: "Join YF Enterprises Kolkata engineering team! Current openings: Electrical Testing Engineer (5+ years exp), E&I Site Manager (10-15 years exp), Instrument Technician (3-10 years exp). Apply now: hr@yfenterprises.com. Build your career in industrial engineering, automation, instrumentation.",
    keywords: "YF Enterprises careers, engineering jobs Kolkata, electrical testing engineer jobs, E&I site manager positions, instrument technician jobs, industrial engineering careers, automation jobs, instrumentation careers, electrical engineering jobs, control systems careers, industrial jobs Kolkata, engineering opportunities, technical jobs India, electrical technician positions, site manager jobs, testing commissioning careers, industrial maintenance jobs, engineering recruitment, technical careers, hr@yfenterprises.com, engineering job applications, industrial experience requirements, technical expertise careers, process control jobs, field instrumentation positions, electrical design careers, project management jobs, commissioning engineer positions, maintenance engineer jobs, automation technician careers, control engineer positions, instrumentation calibration jobs, electrical panel design careers, substation engineer jobs, power system careers, industrial automation employment, technical manpower careers, engineering consultancy jobs, multidisciplinary engineering careers",
    canonicalUrl: `${BASE_URL}/career`,
    structuredData: {
      "@context": "https://schema.org", 
      "@type": "JobPosting",
      "title": "Engineering Positions at YF Enterprises",
      "description": "Multiple engineering positions available including Electrical Testing Engineer, E&I Site Manager, and Instrument Technician roles",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "YF Enterprises",
        "sameAs": BASE_URL
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress", 
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "addressCountry": "IN"
        }
      },
      "employmentType": "FULL_TIME",
      "industry": "Industrial Engineering"
    }
  },

  // Blog Page SEO
  blog: {
    title: "YF Enterprises Blog | Industrial Engineering Insights, Automation Trends, Technical Articles | Kolkata",
    description: "Stay updated with YF Enterprises blog: Latest industrial engineering insights, automation trends, technical articles, case studies, industry news. Expert perspectives on instrumentation, electrical systems, control automation, BMS, firefighting, industrial security from Kolkata's leading engineering company.",
    keywords: "YF Enterprises blog, industrial engineering insights, automation trends, technical articles, engineering case studies, instrumentation blog, electrical systems articles, control automation insights, BMS implementation guides, firefighting system articles, industrial security trends, process control blog, calibration techniques, PLC DCS tutorials, field instrumentation guides, electrical testing articles, commissioning procedures, maintenance tips, engineering best practices, industrial safety articles, power system insights, substation engineering, transformer maintenance, panel design guides, earthing system articles, technical documentation, engineering solutions blog, project execution insights, quality assurance articles, innovation in engineering, client success stories, industry expertise, technical knowledge sharing, engineering tutorials, automation technology trends, smart manufacturing, Industry 4.0, IoT industrial applications, digital transformation engineering",
    canonicalUrl: `${BASE_URL}/blog`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog", 
      "name": "YF Enterprises Engineering Blog",
      "description": "Technical insights and industry expertise from YF Enterprises engineering team",
      "publisher": {
        "@type": "Organization",
        "name": "YF Enterprises"
      }
    }
  },

  // Service Details Pages SEO (Dynamic based on service ID)
  serviceDetails: {
    1: { // Instrumentation Solutions
      title: "Instrumentation Solutions & Services | Process Control, Calibration, Field Instrumentation | YF Enterprises",
      description: "Expert instrumentation solutions by YF Enterprises: Process control systems, calibration services, field instrumentation, pressure temperature flow level measurement, control valves, transmitters, analyzers. Precision-driven services for oil & gas, power, pharma, chemical industries across India.",
      keywords: "instrumentation solutions, process control systems, calibration services, field instrumentation, pressure measurement, temperature sensors, flow meters, level indicators, control valves, smart transmitters, process analyzers, DCS systems, SCADA solutions, HMI systems, industrial measurement, process automation, control loop design, instrument commissioning, calibration laboratory, metrology services, measurement accuracy, process optimization, real-time monitoring, data acquisition systems, process safety instrumentation, SIS systems, emergency shutdown, fire gas detection, analytical instrumentation, online analyzers, environmental monitoring, emission monitoring systems, vibration monitoring, condition monitoring, predictive maintenance, instrument maintenance, loop checking, functional testing, instrument installation, wiring termination, signal conditioning, process validation"
    },
    2: { // C&I Contracting
      title: "Control & Instrumentation Contracting | PLC DCS Integration, Field Cabling, Commissioning | YF Enterprises",
      description: "Professional C&I contracting services: PLC/DCS integration, field instrumentation installation, control panel design, cable routing, loop commissioning, system integration, automation solutions. Complete control & instrumentation contracting for industrial projects across India.",
      keywords: "C&I contracting, control instrumentation contracting, PLC DCS integration, field cabling commissioning, control panel design, automation contracting, system integration, field instrumentation installation, control room design, MCC panel installation, PCC panel wiring, junction box installation, cable tray routing, instrument air systems, control valve installation, actuator installation, positioner calibration, control loop commissioning, system checkout, pre-commissioning activities, startup assistance, performance testing, system documentation, as-built drawings, O&M manuals, training services, warranty support, annual maintenance contracts, breakdown maintenance, spare parts supply, technical support, emergency services, project management, quality assurance, safety compliance, regulatory approvals, certification services, vendor coordination, material procurement"
    },
    3: { // CCTV Sources  
      title: "CCTV Surveillance Systems | Security Camera Installation, Monitoring Services | YF Enterprises Kolkata",
      description: "Comprehensive CCTV surveillance solutions: IP cameras, analog systems, wireless CCTV, access control, video analytics, remote monitoring, mobile surveillance. Professional installation & maintenance for residential, commercial, industrial properties across India.",
      keywords: "CCTV surveillance systems, security camera installation, IP camera systems, analog CCTV, wireless surveillance, access control systems, video door phones, intercom systems, burglar alarm systems, fire alarm integration, perimeter security, video analytics, motion detection, facial recognition, number plate recognition, remote monitoring services, mobile surveillance, cloud storage, NVR DVR systems, CCTV maintenance, camera repair, security system upgrades, surveillance consultation, security audit, risk assessment, CCTV design, camera positioning, night vision cameras, thermal cameras, PTZ cameras, dome cameras, bullet cameras, hidden cameras, covert surveillance, retail security, office security, factory security, warehouse security, residential security, commercial security, industrial security, 24/7 monitoring, security control room, guard monitoring, incident management, forensic analysis, evidence retrieval"
    },
    4: { // EPC Projects
      title: "EPC Electrical Projects | Design, Engineering, Procurement, Construction | YF Enterprises Kolkata",
      description: "Complete EPC electrical projects: Engineering design, procurement, construction, electrical installations, power distribution, substation projects, industrial electrical systems. Turnkey electrical solutions for commercial & industrial facilities across India.",
      keywords: "EPC electrical projects, electrical design engineering, procurement construction, turnkey electrical solutions, power distribution systems, substation projects, electrical installations, industrial electrical systems, commercial electrical work, electrical contracting, power system design, load flow analysis, short circuit analysis, protection coordination, relay settings, switchgear installation, transformer installation, cable laying, cable termination, earthing systems, lightning protection, power factor correction, harmonic analysis, energy audit, electrical testing, insulation testing, earth resistance testing, transformer testing, switchgear testing, relay testing, electrical commissioning, energization procedures, electrical maintenance, preventive maintenance, breakdown maintenance, electrical upgrades, capacity enhancement, electrical retrofitting, energy efficiency, power quality improvement, electrical safety, arc flash analysis, electrical drawings, single line diagrams, schematic diagrams, panel wiring diagrams, layout drawings, electrical specifications"
    },
    5: { // Testing & Commissioning
      title: "Electrical Testing & Commissioning Services | Transformer, Switchgear, Relay Testing | YF Enterprises",
      description: "Professional electrical testing & commissioning: Transformer testing, switchgear commissioning, protection relay testing, cable testing, earthing system testing, power quality analysis. Certified testing services ensuring performance & safety standards across India.",
      keywords: "electrical testing commissioning, transformer testing, switchgear commissioning, protection relay testing, cable testing services, earthing system testing, insulation resistance testing, tan delta testing, turns ratio testing, winding resistance testing, oil analysis, dissolved gas analysis, power factor testing, hi-pot testing, earth resistance testing, soil resistivity testing, loop resistance testing, contact resistance testing, timing tests, burden tests, CT PT testing, metering accuracy tests, power quality analysis, harmonics analysis, flicker analysis, voltage regulation tests, load tests, no-load tests, short circuit tests, temperature rise tests, noise level tests, vibration tests, partial discharge tests, corona tests, surge arrester testing, circuit breaker testing, motor testing, generator testing, UPS testing, battery testing, earthing grid testing, lightning arrester testing, cable fault location, thermographic survey, electrical safety testing, functional testing, performance testing, acceptance testing, periodic testing, condition monitoring"
    },
    6: { // Manpower Deployment
      title: "Technical Manpower Services | Skilled Engineers, Technicians, Project Staff | YF Enterprises Kolkata", 
      description: "Professional technical manpower deployment: Skilled engineers, technicians, project managers, site supervisors, maintenance staff for industrial projects. Short-term & long-term manpower solutions for electrical, instrumentation, automation projects across India.",
      keywords: "technical manpower services, skilled engineers deployment, technician services, project staff augmentation, site engineers, maintenance engineers, commissioning engineers, testing engineers, electrical technicians, instrument technicians, automation specialists, field service engineers, project managers, site supervisors, quality controllers, safety officers, technical consultants, contract staffing, temporary staffing, permanent placement, manpower outsourcing, skilled workforce, experienced professionals, certified technicians, trained personnel, technical expertise, industrial manpower, project execution team, startup team, commissioning team, maintenance team, breakdown support, emergency response team, 24/7 support, on-site support, remote support, technical training, skill development, competency assessment, resource planning, manpower planning, staff augmentation, talent acquisition, recruitment services, HR services, payroll management, compliance management, visa assistance, mobilization demobilization"
    },
    7: { // HCD Services
      title: "High Capacity Diesel Generator Services | Installation, Maintenance, Fuel Management | YF Enterprises",
      description: "HCD generator services: High capacity diesel generator installation, preventive maintenance, breakdown support, fuel management, load testing, performance optimization. Reliable backup power solutions for critical facilities across India.",
      keywords: "HCD services, high capacity diesel generator, generator installation, generator maintenance, fuel management systems, generator rental, backup power solutions, emergency power, standby generator, prime power generator, continuous power, load testing, performance testing, generator commissioning, fuel tank installation, fuel monitoring, automatic fuel management, generator control systems, synchronization panels, load sharing, paralleling systems, generator protection, engine maintenance, alternator maintenance, cooling system maintenance, fuel system maintenance, exhaust system maintenance, generator overhaul, engine overhaul, alternator rewinding, spare parts supply, AMC services, breakdown support, emergency response, 24/7 support, generator monitoring, remote monitoring, telemetry systems, fuel efficiency optimization, emission control, noise reduction, vibration control, generator room design, ventilation systems, fire protection systems, safety systems, compliance testing, statutory approvals, pollution control clearance, DG set rental"
    }
  },

  // Product Details Page SEO (Dynamic)
  productDetails: {
    title: "Product Details | Flameproof & Industrial Equipment Specifications | YF Enterprises Kolkata",
    description: "Detailed specifications of flameproof & industrial products: Technical data, certifications, applications, installation guides, maintenance instructions. Quality industrial equipment for hazardous areas & industrial applications across India.",
    keywords: "product specifications, flameproof equipment details, industrial product data, technical specifications, certification details, application guidelines, installation instructions, maintenance procedures, product catalog, equipment features, performance parameters, safety certifications, Ex-proof ratings, ATEX compliance, zone classifications, explosion prevention, hazardous area equipment, industrial safety products, quality assurance, product warranty, technical support, spare parts availability, replacement parts, product customization, engineering specifications, dimensional drawings, electrical characteristics, mechanical properties, environmental ratings, operating conditions, storage requirements, handling instructions, testing procedures, quality control, manufacturing standards, compliance documentation, user manuals, operation guides, troubleshooting guides, service procedures"
  }
};

// Utility function to get SEO data for a route
export const getSeoData = (route, params = {}) => {
  const baseData = seoConfig[route];
  
  if (!baseData) {
    return seoConfig.home; // Fallback to home page SEO
  }

  // Handle dynamic routes like service details
  if (route === 'serviceDetails' && params.id) {
    const serviceData = seoConfig.serviceDetails[params.id];
    if (serviceData) {
      return {
        ...serviceData,
        canonicalUrl: `${BASE_URL}/services/details/${params.id}`,
        structuredData: createServiceSchema(serviceData.title, serviceData.description)
      };
    }
  }

  return baseData;
};

export default seoConfig;
