/**
 * Site Configuration
 * Centralized configuration for the website
 */

export const SITE_CONFIG = {
  // Site Identity
  domain: import.meta.env.VITE_SITE_DOMAIN || 'https://pusatoleholehlezat.com',
  siteName: 'Pusat Oleh-Oleh Lezat',
  siteDescription: 'Toko online oleh-oleh lezat dari Magelang. Jajanan khas Magelang dengan kualitas terbaik.',
  
  // Site Metadata
  language: 'id-ID',
  locale: 'id_ID',
  
  // Social Media & Contact
  socialLinks: {
    instagram: import.meta.env.VITE_INSTAGRAM_HANDLE || 'tokolezatmagelang',
    facebook: import.meta.env.VITE_FACEBOOK_HANDLE || 'pusatoleholehlezat',
  },
  
  // Map Coordinates
  location: {
    latitude: -7.4774,
    longitude: 110.2175,
    city: 'Magelang',
    province: 'Central Java',
    country: 'Indonesia',
  },

  // Build & Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  
  // Dynamic URL builders
  getCanonicalUrl: (path: string = '') => {
    const domain = import.meta.env.VITE_SITE_DOMAIN || 'https://pusatoleholehlezat.com';
    return `${domain}${path}`.replace(/([^:]\/)\/+/g, '$1');
  },
  
  getAbsoluteUrl: (path: string) => {
    const domain = import.meta.env.VITE_SITE_DOMAIN || 'https://pusatoleholehlezat.com';
    return `${domain}${path.startsWith('/') ? path : '/' + path}`;
  },
};

// Export type for use in other modules
export type SiteConfig = typeof SITE_CONFIG;
