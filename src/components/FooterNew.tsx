import { MapPin, Phone, Instagram, Clock, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-black text-lg rounded-lg">
                L
              </div>
              <div>
                <h3 className="text-xl font-black text-white">pusatoleholehlezat</h3>
                <p className="text-sm font-bold text-red-400">pusatoleholehlezat</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Menyediakan oleh-oleh khas dengan kualitas terbaik dan rasa autentik. 
              Kepuasan pelanggan adalah prioritas utama kami.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-bold mb-4 text-white">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">Jl. Ikhlas Blok D1 No.1, Magelang, Cilacap</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">(0293) 313131</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Instagram className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm">@tokolezat</span>
              </div>
            </div>
          </div>

          {/* Operating Hours - Two Side by Side */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-4 text-white">Jam Layanan</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Toko Offline */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-400" />
                  TOKO OFFLINE
                </h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <p className="font-semibold">Senin - Minggu</p>
                  <p className="text-lg font-bold text-white">09.00 - 18.00 WIB</p>
                </div>
              </div>

              {/* Toko Online */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <h5 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-red-400" />
                  TOKO ONLINE
                </h5>
                <div className="space-y-1 text-sm text-gray-300">
                  <p className="font-semibold">Senin - Sabtu</p>
                  <p className="text-lg font-bold text-white">09.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Pusat Oleh-Oleh Lezat. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for our customers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
