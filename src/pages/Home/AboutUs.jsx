import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import "aos/dist/aos.css";

// ✅ Count-Up Component (JSX version)
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
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleVideoHover = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #2972B7 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-[#2972B7]/10 text-[#2972B7] rounded-full text-xs font-semibold tracking-wider uppercase mb-3 font-['Roboto']">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3 leading-tight tracking-tight font-serif">
            PRINTECH - Crafting Brand Excellence
          </h1>
          <div className="w-16 h-0.5 bg-[#2972B7] mx-auto mb-4"></div>
          <p className="text-[18px] text-gray-600 max-w-2xl mx-auto leading-relaxed font-['Roboto']">
            A modern label manufacturing company equipped with advanced technology 
            that surpasses conventional standards, delivering precise, high-quality labelling solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          {/* Left: Video & Stats */}
          <div
            className="lg:col-span-3 order-2 lg:order-1 flex flex-col"
            data-aos="fade-right"
          >
            <div 
              className="relative rounded-lg overflow-hidden shadow-lg group"
              onMouseEnter={handleVideoHover}
              onMouseLeave={handleVideoLeave}
            >
              <video
                ref={videoRef}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                loop
                playsInline
                preload="metadata"
                poster="./images/video-poster.jpg" // Fallback poster image
              >
                <source src="./videos/bg.mp4" type="video/mp4" />
                <source src="./videos/manufacturing-process.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4">
                <div className="bg-black/50 rounded-full p-2 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-[18px] font-medium font-['Roboto']">
                  State-of-the-Art Manufacturing Process
                </p>
                <p className="text-white/80 text-sm mt-1">Hover to play video</p>
              </div>
            </div>

            {/* Stats Bar */}
            <div
              className="grid grid-cols-3 gap-4 mt-6 bg-gradient-to-br from-[#2972B7] to-[#1E4E8C] rounded-lg p-6 shadow-lg"
              data-aos="fade-up"
            >
              <div className="text-center border-r border-white/20 last:border-0">
                <p className="text-2xl font-bold text-white mb-1 font-serif">
                  <CountUpNumber from={0} to={8} suffix="+" duration={1.5} />
                </p>
                <p className="text-[18px] text-white/80 font-['Roboto']">
                  Color Printing
                </p>
              </div>
              <div className="text-center border-r border-white/20 last:border-0">
                <p className="text-2xl font-bold text-white mb-1 font-serif">
                  <CountUpNumber from={0} to={500} suffix="+" duration={2.5} />
                </p>
                <p className="text-[18px] text-white/80 font-['Roboto']">
                  Clients Served
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white mb-1 font-serif">
                  <CountUpNumber from={0} to={10} suffix="+" duration={2} />
                </p>
                <p className="text-[18px] text-white/80 font-['Roboto']">
                  Industries
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-start space-y-6"
            data-aos="fade-left"
          >
            <div>
              <h2 className="text-xl font-bold text-[#1a1a1a] mb-4 leading-tight font-serif">
                Our Mission & Vision
              </h2>
              <div className="space-y-4">
                <p className="text-[18px] text-gray-700 leading-relaxed font-['Roboto']">
                  At PRINTECH, our mission is to deliver high-quality, customized labels 
                  with precision and efficiency using advanced technology and our dedicated team's expertise.
                </p>
                <p className="text-[18px] text-gray-700 leading-relaxed font-['Roboto']">
                  We aim to become a trusted and inspiring name in the label printing industry—driven by innovation, 
                  rooted in sustainability, and committed to exceptional quality.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-[#2972B7]/10 border-l-4 border-[#2972B7] p-5 mt-4">
              <blockquote className="text-[18px] text-gray-800 font-medium italic leading-relaxed mb-2 font-['Roboto']">
                "Every label tells a story—and we're here to help you tell yours, beautifully and boldly."
              </blockquote>
              <cite className="text-[18px] text-gray-600 not-italic font-['Roboto']">
                — PRINTECH Vision
              </cite>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/about")}
              className="self-start px-6 py-2 bg-[#2972B7] text-white font-semibold rounded-full shadow-md transition-all duration-300 hover:bg-[#1E4E8C]"
            >
              Learn More →
            </motion.button>
          </div>
        </div>

        {/* Technology Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12" data-aos="fade-up">
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#2972B7] mb-4 font-serif">Our Technology</h3>
            <p className="text-gray-700 leading-relaxed font-['Roboto']">
              8-Colour All UV + IR Flexo Printing Machine with online capabilities for 
              Punching, Die-Cutting, Cold Foiling, Lamination, and Hologram application.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-[#9E2991] mb-4 font-serif">Quality Assurance</h3>
            <p className="text-gray-700 leading-relaxed font-['Roboto']">
              Fully Automatic Advanced Auto Inspection Machine guaranteeing accuracy 
              and flawlessness in every label produced.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;