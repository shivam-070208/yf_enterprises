// Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "YF Enterprises",
  "description": "Trusted multidisciplinary engineering service provider specializing in Electrical, Control & Instrumentation, BMS, Firefighting, and Industrial Security Systems since 2013.",
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "logo": typeof window !== 'undefined' ? `${window.location.origin}/src/assets/logofavicon.jpg` : '',
  "foundingDate": "2013",
  "founders": [
    {
      "@type": "Person",
      "name": "Omar Farooque"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolkata",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "English"
  },
  "sameAs": [],
  "knowsAbout": [
    "Electrical Engineering",
    "Control & Instrumentation",
    "Building Management Systems",
    "Firefighting Systems", 
    "Industrial Security",
    "Automation Systems",
    "EPC Projects",
    "Testing & Commissioning"
  ],
  "serviceArea": {
    "@type": "Country",
    "name": "India"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "YF Enterprises",
  "description": "Leading engineering services provider in Kolkata offering comprehensive solutions for industrial automation, electrical systems, and security infrastructure.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kolkata", 
    "addressRegion": "West Bengal",
    "addressCountry": "IN"
  },
  "telephone": "+91-XXXXXXXXXX",
  "url": typeof window !== 'undefined' ? window.location.origin : '',
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$",
  "servedCuisine": [],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "50"
  }
};

export const serviceSchema = (serviceName, description) => ({
  "@context": "https://schema.org",
  "@type": "Service", 
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "YF Enterprises"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": "Engineering Services",
  "category": "Industrial Services"
});

export const articleSchema = (title, description, publishedDate, modifiedDate) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": "YF Enterprises"
  },
  "publisher": {
    "@type": "Organization", 
    "name": "YF Enterprises",
    "logo": {
      "@type": "ImageObject",
      "url": typeof window !== 'undefined' ? `${window.location.origin}/src/assets/logofavicon.jpg` : ''
    }
  },
  "datePublished": publishedDate,
  "dateModified": modifiedDate || publishedDate,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": typeof window !== 'undefined' ? window.location.href : ''
  }
});

export const breadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": breadcrumb.name,
    "item": breadcrumb.url
  }))
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact YF Enterprises",
  "description": "Get in touch with YF Enterprises for all your industrial engineering needs",
  "url": typeof window !== 'undefined' ? `${window.location.origin}/contact` : '',
  "mainEntity": {
    "@type": "Organization",
    "name": "YF Enterprises"
  }
};
