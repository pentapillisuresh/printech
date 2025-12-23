import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section className="py-20 relative overflow-hidden bg-white" ref={containerRef}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2563eb 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className=""></div>
      <div className=""></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium tracking-wider uppercase mb-6 border border-blue-100">
            About PRINTECH
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Crafting Brand Excellence Through Precision Labels
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            A modern label manufacturing company equipped with advanced technology 
            that surpasses conventional standards, delivering precise, high-quality labelling solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Image */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="./images/manufacturing-process.jpg"
                alt="PRINTECH Manufacturing Facility"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "./images/about.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
    
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      <CountUpNumber from={0} to={8} suffix="+" duration={1.5} />
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Color Technology</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      <CountUpNumber from={0} to={55} suffix="+" duration={2} />
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Satisfied Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Mission & Vision */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Our Mission</h2>
                  <p className="text-sm text-gray-500 mt-1">Delivering excellence in every label</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                To deliver high-quality, customized labels with precision and efficiency using 
                advanced technology and our dedicated team's expertise.
              </p>
              
              <div className="border-t border-gray-100 pt-6 mt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Our Vision</h2>
                    <p className="text-sm text-gray-500 mt-1">Leading the label industry</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become a trusted and inspiring name in the label printing industry—driven by innovation, 
                  rooted in sustainability, and committed to exceptional quality.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <div className="flex">
                <svg className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div>
                  <blockquote className="text-gray-800 italic mb-3">
                    "Every label tells a story—and we're here to help you tell yours, beautifully and boldly."
                  </blockquote>
                  <cite className="text-gray-600 not-italic font-medium">— PRINTECH </cite>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/about")}
              className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center group"
            >
              <span>Discover Our Journey</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;