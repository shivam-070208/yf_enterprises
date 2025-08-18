// SEO Module Export
// Centralized export for all SEO-related components and configurations

export { default as SeoHead } from './SeoHead';
export { seoConfig, getSeoData } from './seoConfig';

// Export default configuration for easy access
export default {
  SeoHead: require('./SeoHead').default,
  seoConfig: require('./seoConfig').seoConfig,
  getSeoData: require('./seoConfig').getSeoData
};
