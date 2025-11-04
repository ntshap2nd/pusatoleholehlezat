import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerWebShop1 from "@/assets/Banner_Web-Shop_Banner 1.jpg";
import bannerWebShop2 from "@/assets/Banner_Web-Shop_Banner 2.jpg";
import bannerWebShop3 from "@/assets/Banner_Web-Shop_Banner 3.jpg";
import bannerWebShop4 from "@/assets/Banner_Web-Shop_Banner 4.jpg";

const bannerSlides = [
  {
    id: 1,
    image: bannerWebShop1
  },
  {
    id: 2,
    image: bannerWebShop2
  },
  {
    id: 3,
    image: bannerWebShop3
  },
  {
    id: 4,
    image: bannerWebShop4
  }
];

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto-slide every 8 seconds
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden bg-black w-full">
      {/* Banner Container dengan aspek rasio 1024:600 (landscape) */}
      <div className="relative w-full mx-auto bg-black" style={{ aspectRatio: '1024 / 600' }}>
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform translate-x-0 z-10' 
                : index < currentSlide
                ? 'opacity-0 transform -translate-x-full z-0'
                : 'opacity-0 transform translate-x-full z-0'
            }`}
            style={{ willChange: index === currentSlide ? 'opacity, transform' : 'auto' }}
          >
            {/* Background Image - Full Cover tanpa crop */}
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <img
                src={slide.image}
                alt={`Banner ${slide.id}`}
                className="w-full h-full object-contain"
                loading={index === currentSlide ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm active:scale-95"
          aria-label="Previous banner"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm active:scale-95"
          aria-label="Next banner"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 sm:space-x-2">
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white w-6 h-2 sm:w-8' 
                  : 'bg-white/50 w-2 h-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
