/**
 * Analytics Configuration
 * Configuration for Google Analytics, Facebook Pixel, and other tracking services
 */

export const ANALYTICS_CONFIG = {
  // Google Analytics 4
  googleAnalytics: {
    id: import.meta.env.VITE_GA_ID || 'G-LG80GBQEFP',
    enabled: !!import.meta.env.VITE_GA_ID,
    
    // GA event tracking configuration
    events: {
      pageView: 'page_view',
      viewItem: 'view_item',
      addToCart: 'add_to_cart',
      removeFromCart: 'remove_from_cart',
      viewCart: 'view_cart',
      beginCheckout: 'begin_checkout',
      purchase: 'purchase',
    },
  },

  // Facebook Pixel
  facebookPixel: {
    id: import.meta.env.VITE_FB_PIXEL_ID || '',
    enabled: !!import.meta.env.VITE_FB_PIXEL_ID,
    
    // Pixel events
    events: {
      pageView: 'PageView',
      viewContent: 'ViewContent',
      addToCart: 'AddToCart',
      removeFromCart: 'RemoveFromCart',
      initiateCheckout: 'InitiateCheckout',
      purchase: 'Purchase',
    },
  },

  // General tracking settings
  tracking: {
    // Track anonymous user behavior (respects privacy settings)
    anonymousTracking: true,
    
    // Send user data for remarketing (if consented)
    userDataTracking: true,
    
    // Track custom events
    customEvents: true,
    
    // Track page scroll depth
    scrollTracking: true,
  },

  // Privacy & Consent
  privacy: {
    // GDPR compliant
    respectDoNotTrack: true,
    requireConsent: true,
    consentTypes: ['analytics', 'marketing'],
  },

  // Verification & Testing
  development: {
    // Use debug mode in development
    debugMode: import.meta.env.DEV,
    
    // Log all tracking events
    logEvents: import.meta.env.DEV,
  },
};

export type AnalyticsConfig = typeof ANALYTICS_CONFIG;
