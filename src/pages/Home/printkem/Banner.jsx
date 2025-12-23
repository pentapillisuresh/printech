import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, Calendar, HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QuoteModal from "../../QuoteModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BannerCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const stripContainersRef = useRef([]);
  const contentRefs = useRef([]);

  const bannerData = [
    {
      id: 1,
      title: "Welcome to PRINTKEM INDUSTRIES",
      subtitle: "Specializing in Leaflet/Inserts & Cut-Labels Manufacturing",
      image: "./images/banner1.jpg",
      color: "#3B82F6"
    },
    {
      id: 2,
      title: "Complete In-House Facilities",
      subtitle: "Achieving Superior Quality Through Better Facilities Since 2019",
      image: "./images/banner2.jpeg",
      color: "#10B981"
    },
    {
      id: 3,
      title: "Your Trusted Printing Partner",
      subtitle: "Delivering Impeccable and Fast Service Across India",
      image: "./images/banner3.jpeg",
      color: "#F59E0B"
    },
  ];

  // Number of vertical strips
  const STRIP_COUNT = 16;

  // Initialize GSAP and create strips
  useGSAP(() => {
    // Initial setup
    gsap.set(slidesRef.current, { 
      opacity: 0, 
      visibility: "hidden",
      pointerEvents: "none"
    });
    
    // Show first slide
    gsap.set(slidesRef.current[0], { 
      opacity: 1, 
      visibility: "visible",
      pointerEvents: "auto"
    });

    // Create strips for each slide
    slidesRef.current.forEach((slide, slideIndex) => {
      if (slide) {
        // Remove any existing strip containers
        const existingContainers = slide.querySelectorAll(".strip-container, .strips-master");
        existingContainers.forEach(container => container.remove());

        // Create a master container that will hold all strips
        const stripsMaster = document.createElement("div");
        stripsMaster.className = "strips-master absolute inset-0 z-0 overflow-hidden";
        
        // Create individual strips container
        const stripsContainer = document.createElement("div");
        stripsContainer.className = "strip-container absolute inset-0 flex";
        stripsContainer.style.cssText = `
          width: 100%;
          height: 100%;
          transform: translateZ(0);
        `;

        // Calculate strip width with 0.1% overlap to eliminate gaps
        const stripWidth = 100 / STRIP_COUNT;
        
        // Create strips
        for (let i = 0; i < STRIP_COUNT; i++) {
          const strip = document.createElement("div");
          strip.className = "strip absolute top-0 h-full overflow-hidden";
          strip.style.cssText = `
            width: ${stripWidth + 0.1}%;
            left: ${(i * stripWidth)}%;
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            will-change: transform;
          `;
          
          // Create inner container for the image
          const innerContainer = document.createElement("div");
          innerContainer.className = "strip-inner absolute inset-0";
          innerContainer.style.cssText = `
            width: ${STRIP_COUNT * 100}%;
            left: -${(i * 100)}%;
            transform: translateZ(0);
          `;
          
          // Create and set up image
          const img = document.createElement("img");
          img.src = bannerData[slideIndex]?.image || "";
          img.alt = bannerData[slideIndex]?.title || "";
          img.className = "absolute top-0 left-0 w-full h-full object-cover";
          img.style.cssText = `
            transform: translateZ(0);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            image-rendering: crisp-edges;
            image-rendering: -webkit-optimize-contrast;
          `;
          
          // Load image first to prevent flickering
          const tempImg = new Image();
          tempImg.src = bannerData[slideIndex]?.image || "";
          tempImg.onload = () => {
            gsap.set(img, { opacity: 1 });
          };
          
          innerContainer.appendChild(img);
          strip.appendChild(innerContainer);
          stripsContainer.appendChild(strip);
        }
        
        stripsMaster.appendChild(stripsContainer);
        slide.prepend(stripsMaster);
        
        // Store reference
        if (!stripContainersRef.current[slideIndex]) {
          stripContainersRef.current[slideIndex] = [];
        }
        stripContainersRef.current[slideIndex] = Array.from(stripsContainer.children);
        
        // Set initial state for strips
        gsap.set(stripContainersRef.current[slideIndex], {
          y: "0%",
          opacity: 1,
          scaleY: 1
        });
      }
    });

    // Animate in first slide
    setTimeout(() => {
      animateSlideIn(0);
    }, 100);
  }, { scope: containerRef });

  // Animate slide in (pieces falling into place)
  const animateSlideIn = (slideIndex) => {
    if (!stripContainersRef.current[slideIndex] || !slidesRef.current[slideIndex]) return;
    
    setIsAnimating(true);
    
    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(slidesRef.current[slideIndex], { 
          opacity: 1, 
          visibility: "visible",
          pointerEvents: "auto"
        });
      },
      onComplete: () => setIsAnimating(false)
    });

    // Hide all strips initially
    gsap.set(stripContainersRef.current[slideIndex], {
      y: "-110%",
      opacity: 0,
      scaleY: 0.3
    });

    // Animate strips in from top with staggered delay
    const centerIndex = Math.floor(STRIP_COUNT / 2);
    
    stripContainersRef.current[slideIndex].forEach((strip, i) => {
      const distanceFromCenter = Math.abs(i - centerIndex);
      const delay = distanceFromCenter * 0.03;
      
      const xOffset = (i - centerIndex) * 0.5;
      
      tl.to(strip, {
        y: "0%",
        x: `${xOffset}%`,
        opacity: 1,
        scaleY: 1,
        duration: 1.4,
        ease: "power3.out",
        delay: delay,
        clearProps: "x"
      }, 0);
    });

    // Animate content in
    if (contentRefs.current[slideIndex]) {
      tl.fromTo(contentRefs.current[slideIndex],
        {
          y: 60,
          opacity: 0,
          scale: 0.95
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "power3.out",
          delay: 0.8
        },
        0
      );
    }

    return tl;
  };

  // Animate slide out (pieces separating)
  const animateSlideOut = (slideIndex, direction = "down") => {
    if (!stripContainersRef.current[slideIndex]) return;
    
    const tl = gsap.timeline();
    
    // Animate content out first
    if (contentRefs.current[slideIndex]) {
      tl.to(contentRefs.current[slideIndex], {
        y: direction === "down" ? 40 : -40,
        opacity: 0,
        duration: 0.7,
        ease: "power3.in"
      }, 0);
    }

    // Animate strips out with outward movement
    const centerIndex = Math.floor(STRIP_COUNT / 2);
    
    stripContainersRef.current[slideIndex].forEach((strip, i) => {
      const distanceFromCenter = Math.abs(i - centerIndex);
      const delay = distanceFromCenter * 0.02;
      const yOffset = direction === "down" ? "110%" : "-110%";
      const xOffset = (i - centerIndex) * 2;
      
      tl.to(strip, {
        y: yOffset,
        x: `${xOffset}%`,
        opacity: 0,
        scaleY: 0.5,
        duration: 1,
        ease: "power3.in",
        delay: delay + 0.1
      }, 0);
    });

    // Hide slide after animation
    tl.set(slidesRef.current[slideIndex], {
      opacity: 0,
      visibility: "hidden",
      pointerEvents: "none"
    }, "+=0.1");

    return tl;
  };

  // Handle slide transition
  const goToSlide = async (nextIndex) => {
    if (isAnimating || nextIndex === currentSlide) return;
    
    setIsAnimating(true);
    
    const direction = nextIndex > currentSlide ? "down" : "up";
    
    // Create master timeline
    const masterTl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setCurrentSlide(nextIndex);
      }
    });

    // Animate current slide out
    masterTl.add(animateSlideOut(currentSlide, direction));
    
    // Animate next slide in
    masterTl.add(animateSlideIn(nextIndex), 0.5);
  };

  // Navigation functions
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % bannerData.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + bannerData.length) % bannerData.length;
    goToSlide(prevIndex);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <>
      <section 
        ref={containerRef}
        className="relative min-h-screen text-white overflow-hidden bg-black"
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden"
        }}
      >
        {/* Banner Carousel */}
        {bannerData.map((banner, index) => (
          <div
            key={banner.id}
            ref={el => slidesRef.current[index] = el}
            className="absolute inset-0"
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden"
            }}
          >
            {/* Content - Keeping original text and buttons */}
            <div className="relative z-30 h-full flex items-center justify-center">
              <div 
                ref={el => contentRefs.current[index] = el}
                className="text-center px-4 max-w-5xl mx-auto"
              >
                {/* Title - Original style */}
                <h1
                  style={{ color: "white", fontFamily: "serif" }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                >
                  {banner.title}
                </h1>

                {/* Subtitle - Original style */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/90 mb-6 leading-relaxed drop-shadow-lg">
                  {banner.subtitle}
                </p>

                {/* Buttons - Original buttons with same styling */}
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
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

            {/* Overlay gradient */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
            
            {/* Color tint */}
            <div 
              className="absolute inset-0 z-10 opacity-15"
              style={{
                background: `linear-gradient(135deg, ${banner.color}20 0%, transparent 50%)`,
                mixBlendMode: "overlay"
              }}
            ></div>
          </div>
        ))}

        {/* Slide Progress */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-40">
          <div className="flex items-center space-x-4">
            {bannerData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className="relative group"
              >
                <div className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "bg-white" 
                    : "bg-white/30 hover:bg-white/50"
                } ${isAnimating ? "opacity-50" : ""}`}>
                  {index === currentSlide && (
                    <div 
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${bannerData[currentSlide].color}, transparent)`,
                        animation: "pulse 2s infinite"
                      }}
                    ></div>
                  )}
                </div>
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-black/80 backdrop-blur-sm px-2 py-1 rounded">
                  {index + 1}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className={`absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
            isAnimating ? "opacity-40 cursor-not-allowed" : "opacity-100 hover:scale-110"
          }`}
          aria-label="Previous slide"
        >
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-0"></div>
          </div>
        </button>

        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className={`absolute right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
            isAnimating ? "opacity-40 cursor-not-allowed" : "opacity-100 hover:scale-110"
          }`}
          aria-label="Next slide"
        >
          <div className="relative">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-0"></div>
          </div>
        </button>

        {/* Slide Counter */}
        <div className="absolute top-20 right-4 md:right-6 z-40 text-right">
          <div className="text-3xl md:text-4xl font-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <span className="text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="text-white/30 mx-1">/</span>
            <span className="text-white/30">{String(bannerData.length).padStart(2, "0")}</span>
          </div>
          <div className="text-xs md:text-sm font-light text-white/60 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
            Slide {currentSlide + 1}
          </div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent 49.5%, rgba(255,255,255,0.3) 50%, transparent 50.5%),
                               linear-gradient(transparent 49.5%, rgba(255,255,255,0.3) 50%, transparent 50.5%)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "center"
            }}
          ></div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />

      {/* Add pulse animation */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </>
  );
};

export default BannerCarousel;