/**
 * Google Maps & Places Configuration
 * Configuration for Google Maps Embed, Places API, and Reviews
 */

export const MAPS_CONFIG = {
  // Google Maps API Configuration
  googleMaps: {
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
    enabled: !!import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    
    // Default settings for map embeds
    defaults: {
      width: '100%',
      height: '450',
      style: 'border:0',
      allowFullscreen: true,
      loading: 'lazy' as const,
      referrerPolicy: 'no-referrer-when-downgrade' as const,
    },
  },

  // Google Places Configuration
  googlePlaces: {
    placeId: import.meta.env.VITE_GOOGLE_PLACES_ID || '',
    enabled: !!import.meta.env.VITE_GOOGLE_PLACES_ID,
    
    // Reviews widget configuration
    reviews: {
      minRating: 4,
      reviewsPerPage: 5,
      showImage: true,
      showUrl: true,
    },
  },

  // Location Details
  location: {
    name: 'Pusat Oleh-Oleh Lezat',
    address: 'Jl. Ikhlas Blok D1 No.1, Magelang, Jawa Tengah, Indonesia',
    latitude: -7.4774,
    longitude: 110.2175,
    
    // Google Maps embed URL
    embedUrl: function() {
      const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
      const lat = this.latitude;
      const lng = this.longitude;
      
      if (apiKey) {
        return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5196!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A${import.meta.env.VITE_GOOGLE_PLACES_ID}!2s${encodeURIComponent(this.name)}!5e0!3m2!1sen!2sid!4v0`;
      }
      
      // Fallback embed without API key
      return `https://maps.google.com/maps?q=${lat},${lng}&hl=es;z=14&amp;output=embed`;
    },
    
    // Google Maps URL
    mapsUrl: function() {
      return `https://maps.google.com/?q=${this.latitude},${this.longitude}`;
    },

    // Directions URL (for GPS/navigation)
    directionsUrl: function() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.latitude},${this.longitude}`;
    },
  },

  // Map styling
  mapStyles: {
    theme: 'light' as const,
    zoom: 14,
  },
};

export type MapsConfig = typeof MAPS_CONFIG;
