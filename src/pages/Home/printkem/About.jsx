import React, { useEffect, useRef } from "react";
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
  const ref = useRef(null);
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
  const containerRef = useRef(null);
  const swiperRef = useRef(null);

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

            {/* Infinite Scrolling Logos Section - Fixed reverse issue */}
            <div className="relative overflow-hidden py-6">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
              
              {/* First Scrolling Track */}
              <div className="flex w-max animate-scroll-left">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    key={`first-${index}`}
                    className="mx-4 flex-shrink-0 w-36 h-28 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300"
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

              {/* Second Scrolling Track - Fixed to avoid reverse issues */}
              <div className="flex w-max mt-8 animate-scroll-right">
                {[...clientLogos, ...clientLogos].map((client, index) => (
                  <div
                    key={`second-${index}`}
                    className="mx-4 flex-shrink-0 w-36 h-28 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-blue-300"
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
            </div>

            {/* Client Count & Diversity Info */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-gray-50 px-6 py-4 rounded-lg">
                <span className="text-blue-600 font-bold text-lg">✓</span>
                <span className="text-gray-700">
                  Serving <span className="font-bold text-blue-600">55+ clients</span> across <span className="font-bold text-blue-600">10+ industries</span>
                </span>
              </div>
            </div>
          </div>

          {/* WHAT CLIENTS SAYS Section with Swiper Carousel */}
          <div className="mb-20" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                WHAT CLIENTS SAYS ...
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Hear what our valued clients have to say about our services
              </p>
            </div>

            {/* Swiper Carousel */}
            <div className="relative">
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                className="testimonial-swiper"
              >
                {testimonials.map((testimonial) => {
                  const colors = colorClasses[testimonial.color];
                  return (
                    <SwiperSlide key={testimonial.id}>
                      <div className={`bg-white p-8 rounded-2xl shadow-xl border ${colors.border} hover:shadow-2xl transition-all duration-500 h-full`}>
                        <div className="mb-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 mb-2">{testimonial.name}</h3>
                              <div className="flex items-center">
                                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mr-4`}>
                                  <span className={`text-2xl font-bold ${colors.text}`}>{testimonial.initials}</span>
                                </div>
                                <div>
                                  <p className="font-semibold text-gray-800 text-lg">{testimonial.role}</p>
                                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                                </div>
                              </div>
                            </div>
                            {/* Quote Icon */}
                            <div className={`text-5xl ${colors.text} opacity-20`}>
                              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Quote Text */}
                        <div className="relative mb-8">
                          <div className={`absolute -left-3 -top-3 w-6 h-6 ${colors.bg} rounded-full`}></div>
                          <p className="text-gray-700 leading-relaxed text-lg pl-6">
                            {testimonial.quote}
                          </p>
                        </div>
                        
                        {/* Star Rating */}
                        <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                          <div className="flex items-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-gray-600 font-medium">5.0</span>
                          </div>
                          <div className={`text-sm font-semibold px-3 py-1 ${colors.bg} ${colors.text} rounded-full`}>
                            Verified Client
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center justify-center mt-10 space-x-4">
                <button className="swiper-button-prev w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 font-medium">Swipe to explore</span>
                  <div className="animate-pulse">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                </div>
                
                <button className="swiper-button-next w-12 h-12 rounded-full bg-white border border-gray-300 shadow-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Carousel Progress */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center bg-gray-50 px-6 py-3 rounded-full">
                <span className="text-gray-700 mr-3">Client Testimonials</span>
                <span className="text-blue-600 font-bold">{testimonials.length}</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-600">Scroll to see more</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Elevate Your Brand with Premium Labels?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Partner with PRINTECH for labeling solutions that make your products stand out on the shelf
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
              </motion.button>
              <button
                onClick={() => navigate("/products")}
                className="px-8 py-3 bg-white text-blue-600 border border-blue-200 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow hover:shadow-md"
              >
                View Our Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }

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