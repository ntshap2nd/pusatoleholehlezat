/**
 * Business Contact & Location Information
 * Centralized business data
 */

export const BUSINESS_CONTACT = {
  // Business Name
  name: 'Pusat Oleh-Oleh Lezat',
  shortName: 'Toko Lezat',
  
  // Address
  address: {
    street: 'Jl. Ikhlas Blok D1 No.1',
    city: 'Magelang',
    province: 'Jawa Tengah',
    country: 'Indonesia',
    postalCode: '56111',
    fullAddress: 'Jl. Ikhlas Blok D1 No.1, Magelang, Jawa Tengah, Indonesia',
  },
  
  // Phone & WhatsApp
  phone: {
    display: '(0293) 313131',
    international: '+62-293-313131',
    raw: '0293313131',
  },
  
  whatsapp: {
    number: import.meta.env.VITE_ADMIN_WHATSAPP || '6285122614122',
    // Ensure WhatsApp number is in proper format (62xxxxxxxxxxxx or 8xxxxxxxxxxx)
    getFormattedNumber: function() {
      let num = this.number.toString();
      // Remove common formatting
      num = num.replace(/\D/g, '');
      // Convert 0 prefix to 62
      if (num.startsWith('0')) {
        num = '62' + num.substring(1);
      }
      // Ensure it starts with 62
      if (!num.startsWith('62')) {
        num = '62' + num;
      }
      return num;
    },
    // Generate WhatsApp link for checkout messages
    getCheckoutLink: function(message: string) {
      const formatted = this.getFormattedNumber();
      const encoded = encodeURIComponent(message);
      return `https://wa.me/${formatted}?text=${encoded}`;
    },
    // Generate WhatsApp link for custom message
    getLink: function(message: string = 'Halo, saya ingin memesan') {
      return this.getCheckoutLink(message);
    },
  },
  
  // Email
  email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@pusatoleholehlezat.com',
  
  // Operating Hours
  hours: {
    // Format: "HH:MM - HH:MM"
    monday: '09:00 - 18:00',
    tuesday: '09:00 - 18:00',
    wednesday: '09:00 - 18:00',
    thursday: '09:00 - 18:00',
    friday: '09:00 - 18:00',
    saturday: '09:00 - 18:00',
    sunday: 'Tutup',
    
    // Helper method
    getByDay: function(dayName: string) {
      const dayMap: Record<string, string> = {
        'monday': this.monday,
        'tuesday': this.tuesday,
        'wednesday': this.wednesday,
        'thursday': this.thursday,
        'friday': this.friday,
        'saturday': this.saturday,
        'sunday': this.sunday,
      };
      return dayMap[dayName.toLowerCase()] || 'Jam operasional tidak tersedia';
    },
  },
  
  // Social Media Handles (without @ or full URL)
  social: {
    instagram: import.meta.env.VITE_INSTAGRAM_HANDLE || 'tokolezatmagelang',
    facebook: import.meta.env.VITE_FACEBOOK_HANDLE || 'pusatoleholehlezat',
    tiktok: import.meta.env.VITE_TIKTOK_HANDLE || '',
  },
  
  // Location Coordinates for maps
  coordinates: {
    latitude: -7.4774,
    longitude: 110.2175,
  },
};

export type BusinessContact = typeof BUSINESS_CONTACT;
