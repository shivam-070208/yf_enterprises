import React from 'react';
import { HeadProvider as Head } from 'react-head';

const SeoHead = ({
  title = 'YF Enterprises - Leading Industrial Engineering Services in Kolkata | Instrumentation & Electrical Solutions',
  description = 'YF Enterprises: Premier industrial engineering company in Kolkata since 2013. Expert in instrumentation, electrical, control systems, automation, BMS, firefighting & industrial security. Serving oil & gas, power, pharma, cement industries across India.',
  keywords = 'YF Enterprises Kolkata, industrial engineering services, instrumentation services, electrical contracting, control systems, automation, BMS implementation, firefighting systems, industrial security, oil gas engineering, power plant services, pharma engineering, cement industry, electrical testing commissioning, industrial maintenance, engineering contractors India',
  url = 'https://yfenterprises.com/',
  image = 'https://yfenterprises.com/assets/yf-enterprises-og-image.jpg',
  type = 'website',
  author = 'YF Enterprises',
  canonicalUrl,
  structuredData,
  robots = 'index, follow',
  viewport = 'width=device-width, initial-scale=1.0',
  lang = 'en'
}) => (
  <Head>
    {/* Basic Meta Tags */}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="author" content={author} />
    <meta name="robots" content={robots} />
    <meta name="viewport" content={viewport} />
    <meta httpEquiv="Content-Language" content={lang} />
    <meta name="theme-color" content="#ea580c" />
    
    {/* Canonical URL */}
    {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    
    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="YF Enterprises" />
    <meta property="og:locale" content="en_IN" />
    
    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:site" content="@yfenterprises" />
    <meta name="twitter:creator" content="@yfenterprises" />
    
    {/* Additional SEO Meta Tags */}
    <meta name="geo.region" content="IN-WB" />
    <meta name="geo.placename" content="Kolkata" />
    <meta name="geo.position" content="22.5675;88.3526" />
    <meta name="ICBM" content="22.5675, 88.3526" />
    <meta name="revisit-after" content="7 days" />
    <meta name="rating" content="general" />
    <meta name="distribution" content="global" />
    
    {/* Structured Data */}
    {structuredData && (
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    )}
    
    {/* Favicon and Icons */}
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
);

export default SeoHead;