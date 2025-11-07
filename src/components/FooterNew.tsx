import { MapPin, Phone, Instagram } from "lucide-react";

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
                <span className="text-base">Jl. Ikhlas Blok D1 No.1, Magelang</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-base">(0293) 313131</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Instagram className="h-5 w-5 flex-shrink-0" />
                <span className="text-base">tokolezatmagelang</span>
              </div>
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
                  <p className="font-semibold">09.00 - 18.00 WIB</p>
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
