// SEO Utilities for YF Enterprises
// Additional SEO tools and utilities

// Generate sitemap.xml content
export const generateSitemap = () => {
  const baseUrl = 'https://yfenterprises.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '', changefreq: 'weekly', priority: '1.0' }, // Home
    { url: '/about', changefreq: 'monthly', priority: '0.9' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/products', changefreq: 'weekly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/career', changefreq: 'monthly', priority: '0.7' },
    { url: '/blog', changefreq: 'daily', priority: '0.8' },
  ];
  
  // Service detail pages
  const servicePages = Array.from({ length: 7 }, (_, i) => ({
    url: `/services/details/${i + 1}`,
    changefreq: 'monthly',
    priority: '0.8'
  }));
  
  const allPages = [...staticPages, ...servicePages];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  
  allPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });
  
  sitemap += '\n</urlset>';
  
  return sitemap;
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://yfenterprises.com/sitemap.xml

# Allow all major search engine bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Crawl-delay for aggressive crawlers
User-agent: *
Crawl-delay: 1

# Block access to admin areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /.env
Disallow: /config/

# Allow access to important directories
Allow: /assets/
Allow: /images/
Allow: /css/
Allow: /js/`;
};

// SEO Meta Tags Generator
export const generateMetaTags = (seoData) => {
  const tags = [];
  
  // Basic meta tags
  if (seoData.title) tags.push(`<title>${seoData.title}</title>`);
  if (seoData.description) tags.push(`<meta name="description" content="${seoData.description}">`);
  if (seoData.keywords) tags.push(`<meta name="keywords" content="${seoData.keywords}">`);
  if (seoData.canonicalUrl) tags.push(`<link rel="canonical" href="${seoData.canonicalUrl}">`);
  
  // Open Graph tags
  if (seoData.title) tags.push(`<meta property="og:title" content="${seoData.title}">`);
  if (seoData.description) tags.push(`<meta property="og:description" content="${seoData.description}">`);
  if (seoData.url) tags.push(`<meta property="og:url" content="${seoData.url}">`);
  if (seoData.image) tags.push(`<meta property="og:image" content="${seoData.image}">`);
  if (seoData.type) tags.push(`<meta property="og:type" content="${seoData.type}">`);
  
  // Twitter Card tags
  if (seoData.title) tags.push(`<meta name="twitter:title" content="${seoData.title}">`);
  if (seoData.description) tags.push(`<meta name="twitter:description" content="${seoData.description}">`);
  if (seoData.image) tags.push(`<meta name="twitter:image" content="${seoData.image}">`);
  
  return tags.join('\n');
};

// Extract keywords from text content
export const extractKeywords = (text, maxKeywords = 10) => {
  if (!text) return [];
  
  // Common stop words to filter out
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by',
    'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
    'will', 'would', 'should', 'could', 'can', 'may', 'might', 'must', 'shall', 'this', 'that',
    'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'
  ]);
  
  // Extract words, convert to lowercase, filter out stop words and short words
  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));
  
  // Count word frequency
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  
  // Sort by frequency and return top keywords
  return Object.entries(wordCount)
    .sort(([,a], [,b]) => b - a)
    .slice(0, maxKeywords)
    .map(([word]) => word);
};

// Generate breadcrumb JSON-LD
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

// Validate SEO data
export const validateSeoData = (seoData) => {
  const issues = [];
  
  if (!seoData.title) issues.push('Title is missing');
  else if (seoData.title.length < 30) issues.push('Title is too short (< 30 characters)');
  else if (seoData.title.length > 60) issues.push('Title is too long (> 60 characters)');
  
  if (!seoData.description) issues.push('Description is missing');
  else if (seoData.description.length < 120) issues.push('Description is too short (< 120 characters)');
  else if (seoData.description.length > 160) issues.push('Description is too long (> 160 characters)');
  
  if (!seoData.keywords) issues.push('Keywords are missing');
  if (!seoData.canonicalUrl) issues.push('Canonical URL is missing');
  if (!seoData.image) issues.push('OG image is missing');
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

// Performance monitoring for SEO
export const trackSeoMetrics = () => {
  if (typeof window !== 'undefined') {
    // Track Core Web Vitals
    if ('web-vital' in window) {
      // This would integrate with web-vitals library
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }
};

export default {
  generateSitemap,
  generateRobotsTxt,
  generateMetaTags,
  extractKeywords,
  generateBreadcrumbSchema,
  validateSeoData,
  trackSeoMetrics
};
