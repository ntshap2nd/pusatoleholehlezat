/**
 * Social Media Configuration
 * Links and handles for all social media platforms
 */

import { BUSINESS_CONTACT } from './business-contact';
import { SITE_CONFIG } from './site-config';

export const SOCIAL_MEDIA = {
  // Instagram
  instagram: {
    handle: BUSINESS_CONTACT.social.instagram,
    url: `https://instagram.com/${BUSINESS_CONTACT.social.instagram}`,
    profileImage: `https://instagram.com/${BUSINESS_CONTACT.social.instagram}/?__a=1`,
  },

  // Facebook
  facebook: {
    handle: BUSINESS_CONTACT.social.facebook,
    url: `https://facebook.com/${BUSINESS_CONTACT.social.facebook}`,
    pageId: import.meta.env.VITE_FACEBOOK_PAGE_ID || '',
  },

  // TikTok
  tiktok: {
    handle: BUSINESS_CONTACT.social.tiktok,
    url: BUSINESS_CONTACT.social.tiktok 
      ? `https://tiktok.com/@${BUSINESS_CONTACT.social.tiktok}`
      : '',
  },

  // WhatsApp Business
  whatsapp: {
    number: BUSINESS_CONTACT.whatsapp.number,
    url: BUSINESS_CONTACT.whatsapp.getLink(),
  },

  // Email
  email: {
    address: BUSINESS_CONTACT.email,
    mailtoLink: `mailto:${BUSINESS_CONTACT.email}`,
  },

  // Google Maps
  googleMaps: {
    url: `https://maps.google.com/?q=${BUSINESS_CONTACT.coordinates.latitude},${BUSINESS_CONTACT.coordinates.longitude}`,
    embedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.119635${BUSINESS_CONTACT.coordinates.latitude}${BUSINESS_CONTACT.coordinates.longitude}`,
  },

  // Website
  website: {
    url: SITE_CONFIG.domain,
    name: SITE_CONFIG.siteName,
  },

  // All social links array for footer or menu
  allLinks: [
    {
      name: 'Instagram',
      url: `https://instagram.com/${BUSINESS_CONTACT.social.instagram}`,
      icon: 'instagram',
      target: '_blank',
    },
    {
      name: 'Facebook',
      url: `https://facebook.com/${BUSINESS_CONTACT.social.facebook}`,
      icon: 'facebook',
      target: '_blank',
    },
    ...(BUSINESS_CONTACT.social.tiktok ? [{
      name: 'TikTok',
      url: `https://tiktok.com/@${BUSINESS_CONTACT.social.tiktok}`,
      icon: 'tiktok',
      target: '_blank',
    }] : []),
    {
      name: 'WhatsApp',
      url: BUSINESS_CONTACT.whatsapp.getLink(),
      icon: 'whatsapp',
      target: '_blank',
    },
    {
      name: 'Email',
      url: `mailto:${BUSINESS_CONTACT.email}`,
      icon: 'email',
      target: '_blank',
    },
  ],
};

export type SocialMedia = typeof SOCIAL_MEDIA;
