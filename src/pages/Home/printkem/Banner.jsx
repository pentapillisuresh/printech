import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart, Calendar, HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuoteModal from "../../QuoteModal";

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();

  const bannerData = [
    {
      image: "./images/banner1.jpg",
      title: "Welcome to PRINTKEM INDUSTRIES",
      subtitle: "Specializing in Leaflet/Inserts & Cut-Labels Manufacturing",
    },
    {
      image: "./images/banner2.jpeg",
      title: "Complete In-House Facilities",
      subtitle: "Achieving Superior Quality Through Better Facilities Since 2019",
    },
    {
      image: "./images/banner3.jpeg",
      title: "Your Trusted Printing Partner",
      subtitle: "Delivering Impeccable and Fast Service Across India",
    },
  ];

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerData.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, bannerData.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + bannerData.length) % bannerData.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full" style={{ perspective: "1600px" }}>
          {bannerData.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Background with perspective pan/zoom */}
              <div
                className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${
                  index === currentSlide ? "animate-zoomPan3D" : ""
                }`}
                style={{ backgroundImage: `url(${banner.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-5xl mx-auto">
                  {/* Title */}
                  <h1
                    style={{ color: "white", fontFamily: "serif" }}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight ${
                      index === currentSlide ? "animate-titleStagger" : "opacity-0"
                    }`}
                  >
                    {banner.title}
                  </h1>

                  {/* Subtitle */}
                  <p
                    className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-6 leading-relaxed drop-shadow-lg ${
                      index === currentSlide ? "animate-subtitleIn" : "opacity-0"
                    }`}
                  >
                    {banner.subtitle}
                  </p>

                  {/* Buttons - Smaller size */}
                  <div
                    className={`flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 ${
                      index === currentSlide ? "animate-buttonsIn" : "opacity-0"
                    }`}
                  >
                    {/* Products Button */}
                    <button
                      onClick={() => navigate("/products")}
                      className="group relative bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center gap-2 overflow-hidden border border-blue-400 hover:border-blue-300 hover:scale-105 active:scale-95 text-sm"
                    >
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110" />
                      <Heart size={16} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">Our Products</span>
                    </button>

                    {/* Get Quote Button */}
                    <button
                      onClick={openQuoteModal}
                      className="group relative bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center gap-2 overflow-hidden border border-green-400 hover:border-green-300 hover:scale-105 active:scale-95 text-sm"
                    >
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110" />
                      <Calendar size={16} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">Get Quote</span>
                    </button>

                    {/* Contact Us Button */}
                    <button
                      onClick={() => navigate("/contact")}
                      className="group relative bg-gradient-to-r from-purple-500 to-purple-600 text-white px-5 py-2.5 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center gap-2 overflow-hidden border border-purple-400 hover:border-purple-300 hover:scale-105 active:scale-95 text-sm"
                    >
                      <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300 transform group-hover:scale-110" />
                      <HandHeart size={16} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">Contact Us</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 text-white p-2 rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {bannerData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 border-blue-600 scale-125"
                  : "bg-transparent border-white/60 hover:border-blue-400 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes zoomPan3D {
            0% {
              transform: scale(1.2) rotateY(6deg) translateX(-20px);
              filter: brightness(1.1);
            }
            100% {
              transform: scale(1) rotateY(0deg) translateX(0);
              filter: brightness(1);
            }
          }
          @keyframes titleStagger {
            0% {
              opacity: 0;
              transform: translateY(40px) rotateX(20deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0deg);
            }
          }
          @keyframes subtitleIn {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes buttonsIn {
            0% {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-zoomPan3D {
            animation: zoomPan3D 5s linear forwards;
          }
          .animate-titleStagger {
            animation: titleStagger 1.2s ease-out forwards;
          }
          .animate-subtitleIn {
            animation: subtitleIn 1.4s ease-out forwards;
            animation-delay: 0.3s;
          }
          .animate-buttonsIn {
            animation: buttonsIn 1.6s ease-out forwards;
            animation-delay: 0.6s;
          }
          body {
            overflow-x: hidden;
          }
        `}</style>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
    </>
  );
};

export default BannerCarousel;