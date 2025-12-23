import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "aos/dist/aos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// ✅ Count-Up Component
const CountUpNumber = ({ from, to, duration = 2, suffix = "" }) => {
  const ref = React.useRef(null);
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      count.set(from);
      const startTime = performance.now();

      const animate = (time) => {
        const progress = Math.min((time - startTime) / (duration * 1000), 1);
        const value = from + (to - from) * progress;
        count.set(value);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, count, from, to, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toLocaleString() + (suffix ?? "");
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return <span ref={ref}>{from.toLocaleString() + suffix}</span>;
};

const AboutUs = () => {
  const navigate = useNavigate();
  const containerRef = React.useRef(null);
  const swiperRef = React.useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "CLIENT 1",
      role: "Developer",
      company: "Major Corporation",
      quote: "Use this space to introduce yourself and share your professional history. Use this space to introduce yourself and share your professional history.",
      initials: "C1",
      color: "blue"
    },
    {
      id: 2,
      name: "CLIENT 2",
      role: "Developer",
      company: "Leading Enterprise",
      quote: "Use this space to introduce yourself and share your professional history. Use this space to introduce yourself and share your professional history.",
      initials: "C2",
      color: "green"
    },
    {
      id: 3,
      name: "CLIENT 3",
      role: "Project Manager",
      company: "Global Brand",
      quote: "Excellent quality and timely delivery. Their labels have significantly improved our product presentation and sales.",
      initials: "C3",
      color: "purple"
    },
    {
      id: 4,
      name: "CLIENT 4",
      role: "Quality Head",
      company: "Manufacturing Giant",
      quote: "Consistent quality and attention to detail. A reliable partner for all our labeling needs.",
      initials: "C4",
      color: "orange"
    },
    {
      id: 5,
      name: "CLIENT 5",
      role: "Marketing Director",
      company: "Consumer Goods",
      quote: "Their innovative label designs have helped our products stand out in competitive markets.",
      initials: "C5",
      color: "red"
    }
  ];

  // Client logos data - Updated with your logo references
  const clientLogos = [
    { name: "AP Tourism", alt: "AP Tourism", img: "/images/logo1.jpg" },
    { name: "BSNL", alt: "BSNL", img: "/images/client2.png" },
    { name: "IKEA", alt: "IKEA", img: "/images/client3.png" },
    { name: "Cipla", alt: "Cipla", img: "/images/client4.png" },
    { name: "MAGIK", alt: "Magik Lifting Solutions", img: "/images/client5.png" },
    { name: "LEO", alt: "Leo Lifting Solutions", img: "/images/client6.png" },
    { name: "Orient Electric", alt: "Orient Electric", img: "/images/client7.png" },
    { name: "Senco", alt: "Senco Gold & Diamonds", img: "/images/client8.png" },
    { name: "Godrej", alt: "Godrej", img: "/images/client9.png" },
    { name: "Goodwyn", alt: "Goodwyn Tea", img: "/images/client10.jpg" },
    { name: "Eveready", alt: "Eveready", img: "/images/client11.png" },
    { name: "Bata", alt: "Bata", img: "/images/client12.png" },
    { name: "AIA Engineering", alt: "AIA Engineering", img: "/images/client13.png" },
    { name: "RSPL", alt: "RSPL Group", img: "/images/client14.png" },
    { name: "Parle", alt: "Parle Products", img: "/images/client15.png" },
    { name: "Britannia", alt: "Britannia Industries", img: "/images/client16.png" },
    { name: "Pidilite", alt: "Pidilite Industries", img: "/images/client17.jpeg" },
    { name: "Asian Paints", alt: "Asian Paints", img: "/images/client18.png" },
    { name: "Hindustan Unilever", alt: "Hindustan Unilever", img: "/images/client19.jpg" },
    { name: "Brand 20", alt: "Brand 20", img: "/images/client20.png" },
    { name: "Brand 21", alt: "Brand 21", img: "/images/client21.png" },
    { name: "Brand 22", alt: "Brand 22", img: "/images/client22.png" },
    { name: "Brand 23", alt: "Brand 23", img: "/images/client23.png" }
  ];

  // Color mapping
  const colorClasses = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200' }
  };

  // Split logos into rows of 6
  const rows = [];
  for (let i = 0; i < clientLogos.length; i += 6) {
    rows.push(clientLogos.slice(i, i + 6));
  }

  return (
    <div className="bg-white">
      {/* Top Banner Section - Updated Content */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/client.jpeg"
            alt="PRINTECH Manufacturing Facility"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        </div>
        
        {/* Banner Content - Updated */}
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-2xl"
            >
            
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Your Trusted Partner in Label Manufacturing
              </h1>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                We specialize in creating premium labels that enhance brand identity 
                and drive product recognition across diverse industries
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 justify-center">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <CountUpNumber from={0} to={8} suffix="+" duration={1.5} />
              </p>
              <p className="text-gray-600 font-medium">Color Printing</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <CountUpNumber from={0} to={55} suffix="+" duration={2} />
              </p>
              <p className="text-gray-600 font-medium">Clients Served</p>
            </div>
         
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <CountUpNumber from={0} to={7} suffix="+" duration={2.2} />
              </p>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
          </div>

          {/* Trusted By Section - Updated Heading */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Esteemed Clients
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                We are proud to serve a diverse portfolio of leading brands and organizations
              </p>
            </div>

            {/* Certified for Quality Text */}
            <div className="text-center mb-8">
              <p className="text-xl italic font-bold text-blue-700 bg-blue-50 inline-block px-6 py-3 rounded-full">
                Certified for Quality, Trusted for Excellence
              </p>
            </div>

            {/* Fixed Logos Grid - 6 per row */}
            <div className="space-y-8 py-6">
              {rows.map((row, rowIndex) => (
                <div 
                  key={rowIndex} 
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
                >
                  {row.map((client, index) => (
                    <div
                      key={`${rowIndex}-${index}`}
                      className="h-28 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300"
                    >
                      <img
                        src={client.img}
                        alt={client.alt}
                        className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'text-center';
                          fallback.innerHTML = `
                            <div class="text-sm font-bold text-gray-800">${client.name}</div>
                            <div class="text-xs text-gray-500">${client.alt}</div>
                          `;
                          e.target.parentNode.appendChild(fallback);
                        }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

          
          </div>

       
        </div>
      </section>

      {/* Add custom styles */}
      <style jsx>{`
        /* Swiper Custom Styles */
        .testimonial-swiper {
          padding: 20px 10px 60px !important;
        }
        
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 20px;
        }
        
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #d1d5db !important;
          opacity: 1 !important;
        }
        
        .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          transform: scale(1.2);
        }
        
        .swiper-slide {
          opacity: 0.7;
          transform: scale(0.95);
          transition: all 0.5s ease;
        }
        
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </div>
  );
};

export default AboutUs;