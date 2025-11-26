import { MapPin, Phone, Instagram } from "lucide-react";
import { BUSINESS_CONTACT } from "@/config/business-contact";
import { SOCIAL_MEDIA } from "@/config/social-media";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Alamat */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Alamat</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-base">{BUSINESS_CONTACT.address.street}, {BUSINESS_CONTACT.address.city}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-base">{BUSINESS_CONTACT.phone.display}</span>
              </div>
              <a 
                href={SOCIAL_MEDIA.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 hover:text-yellow-300 transition-colors cursor-pointer"
              >
                <Instagram className="h-5 w-5 flex-shrink-0" />
                <span className="text-base">@{BUSINESS_CONTACT.social.instagram}</span>
              </a>
            </div>
          </div>

          {/* Jam Operasional */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">Jam Operasional</h4>
            <div className="grid grid-cols-2 gap-6">
              {/* Toko Offline */}
              <div>
                <h5 className="text-lg font-bold mb-2">Toko Offline</h5>
                <div className="space-y-1 text-sm">
                  <p>Senin - Minggu</p>
                  <p className="font-semibold">{BUSINESS_CONTACT.hours.monday}</p>
                </div>
              </div>

              {/* Toko Online */}
              <div>
                <h5 className="text-lg font-bold mb-2">Toko Online</h5>
                <div className="space-y-1 text-sm">
                  <p>Senin - Sabtu</p>
                  <p className="font-semibold">09.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
